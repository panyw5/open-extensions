// src/preview-worker.ts
import { parentPort } from "node:worker_threads";
import { readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";

// src/notebook.ts
var READONLY_STYLES = new Set(["Output", "Print", "Message", "Echo"]);

class NotebookParseError extends Error {
  offset;
  line;
  column;
  constructor(message, source, offset) {
    const before = source.slice(0, offset);
    const line = before.split(`
`).length;
    const column = offset - before.lastIndexOf(`
`);
    super(`${message} at line ${line}, column ${column}`);
    this.offset = offset;
    this.name = "NotebookParseError";
    this.line = line;
    this.column = column;
  }
}
function decode(value) {
  return value.replace(/\\(?:\r?\n|\:([\da-f]{4})|\.([\da-f]{2})|([0-7]{3})|(["\\nrtbf]))/gi, (_, hex, byte, oct, escaped) => {
    if (hex || byte)
      return String.fromCharCode(parseInt(hex ?? byte, 16));
    if (oct)
      return String.fromCharCode(parseInt(oct, 8));
    if (!escaped)
      return "";
    return { n: `
`, r: "\r", t: "\t", b: "\b", f: "\f" }[escaped] ?? escaped;
  });
}
function trivia(source, position, end, spans) {
  while (position < end) {
    if (/\s/.test(source[position])) {
      position++;
      continue;
    }
    if (source.slice(position, position + 2) !== "(*")
      break;
    const cached = spans.get(position);
    if (cached !== undefined) {
      position = cached;
      continue;
    }
    const start = position;
    let depth = 1;
    position += 2;
    while (position < end && depth) {
      const pair = source.slice(position, position + 2);
      if (pair === "(*") {
        depth++;
        position += 2;
      } else if (pair === "*)") {
        depth--;
        position += 2;
      } else
        position++;
    }
    if (depth)
      throw new Error("Unterminated notebook comment");
    spans.set(start, position);
  }
  return position;
}
function stringEnd(source, start, end, spans) {
  const cached = spans.get(start);
  if (cached !== undefined)
    return cached;
  for (let i = start + 1;i < end; i++) {
    if (source[i] === "\\") {
      i++;
      continue;
    }
    if (source[i] === '"') {
      spans.set(start, i + 1);
      return i + 1;
    }
  }
  throw new Error("Unterminated notebook string");
}
function groupEnd(source, start, end, spans) {
  const cached = spans.get(start);
  if (cached !== undefined)
    return cached;
  const stack = [];
  for (let i = start;i < end; i++) {
    if (source[i] === '"') {
      i = stringEnd(source, i, end, spans) - 1;
      continue;
    }
    if (source.slice(i, i + 2) === "(*") {
      i = trivia(source, i, end, spans) - 1;
      continue;
    }
    const pair = source.slice(i, i + 2);
    const char = source[i];
    if (pair === "<|") {
      stack.push({ start: i, close: "|>" });
      i++;
    } else if (pair === "|>") {
      const open = stack.pop();
      if (open?.close !== "|>")
        throw new NotebookParseError("Unbalanced notebook delimiters", source, i);
      i++;
      spans.set(open.start, i + 1);
      if (!stack.length)
        return i + 1;
    } else if ("[{(".includes(char)) {
      stack.push({ start: i, close: { "[": "]", "{": "}", "(": ")" }[char] });
    } else if ("]})".includes(char)) {
      const open = stack.pop();
      if (open?.close !== char)
        throw new NotebookParseError("Unbalanced notebook delimiters", source, i);
      spans.set(open.start, i + 1);
      if (!stack.length)
        return i + 1;
    }
  }
  throw new NotebookParseError("Unbalanced notebook delimiters", source, end);
}
function parts(source, start, end, spans, limit = Infinity) {
  const result = [];
  let from = start;
  for (let i = start;i < end; i++) {
    if (source[i] === '"') {
      i = stringEnd(source, i, end, spans) - 1;
      continue;
    }
    if (source.slice(i, i + 2) === "(*") {
      i = trivia(source, i, end, spans) - 1;
      continue;
    }
    const char = source[i];
    if ("[{(".includes(char) || source.slice(i, i + 2) === "<|")
      i = groupEnd(source, i, end, spans) - 1;
    else if ("]})".includes(char) || source.slice(i, i + 2) === "|>")
      throw new NotebookParseError("Unbalanced notebook delimiters", source, i);
    else if (char === ",") {
      result.push([from, i]);
      if (result.length === limit)
        return result;
      from = i + 1;
    }
  }
  if (trivia(source, from, end, spans) < end)
    result.push([from, end]);
  return result;
}
function node(source, start, end, spans, depth = 0) {
  if (depth > 128)
    throw new Error("Notebook nesting is too deep");
  start = trivia(source, start, end, spans);
  while (end > start && /\s/.test(source[end - 1]))
    end--;
  const result = { start, end, depth };
  if (source[start] === '"') {
    const close = stringEnd(source, start, end, spans);
    if (trivia(source, close, end, spans) === end) {
      result.end = close;
      result.string = true;
      return result;
    }
  }
  const call = /^([\w$`]+)\s*\[/.exec(source.slice(start, end));
  const list = source[start] === "{";
  if (list || call) {
    const open = start + (list ? 0 : call[0].length - 1);
    const close = groupEnd(source, open, end, spans);
    if (trivia(source, close, end, spans) !== end)
      return result;
    result.end = close;
    result.head = list ? "List" : call[1];
    result.open = open;
  }
  return result;
}
function args(source, value, spans, limit = Infinity) {
  if (value.open === undefined)
    return [];
  return parts(source, value.open + 1, value.end - 1, spans, limit).map(([start, end]) => node(source, start, end, spans, value.depth + 1));
}
function stringValue(source, value) {
  if (value?.string)
    return decode(source.slice(value.start + 1, value.end - 1));
}
function boxReader(source) {
  const spans = new Map;
  return {
    root: () => node(source, 0, source.length, spans),
    args: (value, limit = 128) => args(source, value, spans, limit),
    string: (value) => stringValue(source, value),
    raw: (value) => source.slice(value.start, value.end),
    option: (value, name) => {
      if (source.slice(value.start, value.start + 2) !== "<|")
        return;
      for (const [start, end] of parts(source, value.start + 2, value.end - 2, spans, 64)) {
        const from = trivia(source, start, end, spans);
        if (source[from] !== '"')
          continue;
        const close = stringEnd(source, from, end, spans);
        if (decode(source.slice(from + 1, close - 1)) !== name)
          continue;
        const arrow = trivia(source, close, end, spans);
        if (source.slice(arrow, arrow + 2) === "->")
          return node(source, arrow + 2, end, spans);
      }
    }
  };
}
function content(source, value, spans) {
  if (!value)
    return { text: "", safe: false };
  const text = stringValue(source, value);
  if (text !== undefined)
    return { text: text === "\\[IndentingNewLine]" ? `
` : text, safe: true };
  if (value.head === "BoxData")
    return content(source, args(source, value, spans, 1)[0], spans);
  if (value.head === "RowBox") {
    const first = args(source, value, spans, 1)[0];
    if (first?.head === "List") {
      const items = args(source, first, spans).map((item) => content(source, item, spans));
      return { text: items.map((item) => item.text).join(""), safe: items.every((item) => item.safe) };
    }
  }
  if (value.head === "TextData" || value.head === "StyleBox" || value.head === "FormBox") {
    const first = args(source, value, spans, 1)[0];
    const text2 = first?.head === "List" ? args(source, first, spans).map((item) => content(source, item, spans).text).join("") : content(source, first, spans).text;
    return { text: text2, safe: false };
  }
  return { text: "", safe: false };
}
function parseNotebook(source, options) {
  const spans = new Map;
  const start = trivia(source, 0, source.length, spans);
  const match = /^Notebook\s*\[/.exec(source.slice(start));
  if (!match)
    throw new Error("Expected a textual Mathematica Notebook[...] file");
  const end = groupEnd(source, start + match[0].length - 1, source.length, spans);
  if (trivia(source, end, source.length, spans) !== source.length)
    throw new Error("Unexpected data after Notebook expression");
  const root = node(source, start, end, spans);
  const list = args(source, root, spans, 1)[0];
  if (list?.head !== "List")
    throw new Error("Notebook cells must be a list");
  const cells = [];
  const visit = (entry) => {
    if (entry.head !== "Cell")
      return;
    const [first, styleNode] = args(source, entry, spans, 2);
    if (first?.head === "CellGroupData") {
      const group = args(source, first, spans, 1)[0];
      if (group)
        args(source, group, spans).forEach(visit);
      return;
    }
    if (!first)
      return;
    const style = stringValue(source, styleNode) ?? "Text";
    let rendered;
    try {
      rendered = content(source, first, spans);
    } catch (error) {
      if (!options?.preview || !(error instanceof Error) || error.message !== "Notebook nesting is too deep")
        throw error;
      rendered = { text: "", safe: false };
    }
    cells.push({
      index: cells.length,
      style,
      text: rendered.text || (rendered.safe ? "" : source.slice(first.start, first.end)),
      editable: rendered.safe && !READONLY_STYLES.has(style),
      runnable: style === "Input" || style === "Code",
      raw: source.slice(entry.start, entry.end),
      start: first.start,
      end: first.end
    });
  };
  const entries = args(source, list, spans);
  entries.forEach(visit);
  return { cells, insertAt: list.end - 1, empty: entries.length === 0 };
}

// src/cache.ts
function notebookBytes(notebook, sourceLength) {
  return sourceLength * 2 + 128 + notebook.cells.reduce((bytes, cell) => bytes + 320 + 2 * (cell.raw.length + cell.text.length + cell.style.length), 0);
}
class NotebookCache {
  maxEntries;
  maxBytes;
  entries = new Map;
  retainedBytes = 0;
  constructor(maxEntries = 8, maxBytes = 64 * 1024 * 1024) {
    this.maxEntries = maxEntries;
    this.maxBytes = maxBytes;
  }
  get size() {
    return this.entries.size;
  }
  get bytes() {
    return this.retainedBytes;
  }
  get(revision) {
    const entry = this.entries.get(revision);
    if (!entry)
      return;
    this.entries.delete(revision);
    this.entries.set(revision, entry);
    return entry;
  }
  set(revision, entry) {
    const previous = this.entries.get(revision);
    if (previous) {
      this.entries.delete(revision);
      this.retainedBytes -= previous.bytes;
    }
    if (this.maxEntries < 1 || entry.bytes > this.maxBytes)
      return;
    this.entries.set(revision, entry);
    this.retainedBytes += entry.bytes;
    while (this.entries.size > this.maxEntries || this.retainedBytes > this.maxBytes) {
      const oldest = this.entries.entries().next().value;
      this.entries.delete(oldest[0]);
      this.retainedBytes -= oldest[1].bytes;
    }
  }
  clear() {
    this.entries.clear();
    this.retainedBytes = 0;
  }
}

// src/named-chars.ts
var names = {
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "ϵ",
  Theta: "Θ",
  Lambda: "Λ",
  Xi: "Ξ",
  Pi: "Π",
  Sigma: "Σ",
  Phi: "Φ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  CurlyTheta: "ϑ",
  CurlyPhi: "φ",
  CurlyEpsilon: "ε",
  CurlyPi: "ϖ",
  CurlyRho: "ϱ",
  FinalSigma: "ς",
  ExponentialE: "ⅇ",
  CapitalDifferentialD: "ⅅ",
  WeierstrassP: "℘",
  ImaginaryI: "ⅈ",
  ImaginaryJ: "ⅉ",
  DifferentialD: "ⅆ",
  Infinity: "∞",
  Rule: "→",
  RuleDelayed: "⧴",
  Equal: "=",
  NotEqual: "≠",
  LessEqual: "≤",
  GreaterEqual: "≥",
  EqualTilde: "≂",
  TildeEqual: "≃",
  TildeTilde: "≈",
  TildeFullEqual: "≅",
  Congruent: "≅",
  DotEqual: "≐",
  NotTilde: "≁",
  NotEqualTilde: "≄",
  NotCongruent: "≇",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  LessTilde: "≲",
  GreaterTilde: "≳",
  NotLessEqual: "≰",
  NotGreaterEqual: "≱",
  MuchLess: "≪",
  MuchGreater: "≫",
  Times: "×",
  Cross: "✕",
  Division: "÷",
  CenterDot: "·",
  PlusMinus: "±",
  MinusPlus: "∓",
  Minus: "−",
  InvisibleTimes: "⁢",
  InvisibleSpace: "​",
  InvisibleComma: "⁣",
  ThinSpace: " ",
  VeryThinSpace: " ",
  MediumSpace: " ",
  ThickSpace: " ",
  NegativeThinSpace: "​",
  NonBreakingSpace: " ",
  IndentingNewLine: `
`,
  NewLine: `
`,
  Integral: "∫",
  ContourIntegral: "∮",
  DoubleContourIntegral: "∯",
  Sum: "∑",
  Product: "∏",
  Coproduct: "∐",
  PartialD: "∂",
  Del: "∇",
  Element: "∈",
  NotElement: "∉",
  SuchThat: "∋",
  ReverseElement: "∋",
  ForAll: "∀",
  Exists: "∃",
  NotExists: "∄",
  EmptySet: "∅",
  Union: "∪",
  Intersection: "∩",
  UnionPlus: "⊎",
  SquareUnion: "⊔",
  SquareIntersection: "⊓",
  Cap: "⌢",
  Cup: "⌣",
  Subset: "⊂",
  Superset: "⊃",
  NotSubset: "⊄",
  NotSuperset: "⊅",
  SubsetEqual: "⊆",
  SupersetEqual: "⊇",
  NotSubsetEqual: "⊈",
  NotSupersetEqual: "⊉",
  SquareSubset: "⊏",
  SquareSuperset: "⊐",
  SquareSubsetEqual: "⊑",
  SquareSupersetEqual: "⊒",
  And: "∧",
  Or: "∨",
  Not: "¬",
  Nand: "⊼",
  Nor: "⊽",
  Xor: "⊻",
  Wedge: "∧",
  Vee: "∨",
  Therefore: "∴",
  Because: "∵",
  Colon: "∶",
  Proportion: "∷",
  Proportional: "∝",
  RightTee: "⊢",
  LeftTee: "⊣",
  DoubleRightTee: "⊨",
  DoubleLeftTee: "⊫",
  UpTee: "⊥",
  DownTee: "⊤",
  Perpendicular: "⊥",
  Precedes: "≺",
  Succeeds: "≻",
  PrecedesEqual: "≼",
  SucceedsEqual: "≽",
  PrecedesTilde: "≾",
  SucceedsTilde: "≿",
  LeftAngleBracket: "⟨",
  RightAngleBracket: "⟩",
  LeftDoubleBracket: "⟦",
  RightDoubleBracket: "⟧",
  LeftFloor: "⌊",
  RightFloor: "⌋",
  LeftCeiling: "⌈",
  RightCeiling: "⌉",
  LeftBracketingBar: "⎡",
  RightBracketingBar: "⎦",
  Ellipsis: "…",
  HorizontalEllipsis: "…",
  CenterEllipsis: "⋯",
  VerticalEllipsis: "⋮",
  AscendingEllipsis: "⋰",
  DescendingEllipsis: "⋱",
  FilledSquare: "■",
  EmptySquare: "□",
  FilledCircle: "●",
  EmptyCircle: "○",
  FilledDiamond: "◆",
  EmptyDiamond: "◇",
  FilledUpTriangle: "▲",
  EmptyUpTriangle: "△",
  FilledDownTriangle: "▼",
  EmptyDownTriangle: "▽",
  FilledRightTriangle: "▶",
  EmptyRightTriangle: "▷",
  FilledLeftTriangle: "◀",
  EmptyLeftTriangle: "◁",
  Diamond: "⋄",
  Star: "⋆",
  Bullet: "•",
  SmallCircle: "∘",
  CircleDot: "⊙",
  CirclePlus: "⊕",
  CircleMinus: "⊖",
  CircleTimes: "⊗",
  TensorProduct: "⊗",
  CircleSlash: "⊘",
  Conjugate: "*",
  Transpose: "ᵀ",
  ConjugateTranspose: "†",
  HermitianConjugate: "⊹",
  Prime: "′",
  DoublePrime: "″",
  ReversePrime: "‵",
  Degree: "°",
  HBar: "ℏ",
  HSlash: "ℏ",
  ScriptL: "ℓ",
  Angstrom: "Å",
  Aleph: "ℵ",
  Bet: "ℶ",
  Gimel: "ℷ",
  Dalet: "ℸ",
  RightArrow: "→",
  LeftArrow: "←",
  LeftRightArrow: "↔",
  UpArrow: "↑",
  DownArrow: "↓",
  UpDownArrow: "↕",
  DoubleRightArrow: "⇒",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleUpArrow: "⇑",
  DoubleDownArrow: "⇓",
  Implies: "⟹",
  Equivalent: "⇔",
  LongRightArrow: "⟶",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  ShortRightArrow: "→",
  ShortLeftArrow: "←",
  Function: "↦",
  RightVector: "⇀",
  LeftVector: "↽",
  LeftRightVector: "⇋",
  Angle: "∠",
  RightAngle: "∟",
  MeasuredAngle: "∡",
  SphericalAngle: "∢",
  Parallel: "∥",
  DoubleVerticalBar: "‖",
  NotDoubleVerticalBar: "∦",
  Backslash: "∖",
  SetMinus: "∖",
  SucceedsSlash: "≁",
  LongDash: "—",
  Dash: "–",
  HorizontalLine: "─",
  OpenCurlyQuote: "‘",
  CloseCurlyQuote: "’",
  OpenCurlyDoubleQuote: "“",
  CloseCurlyDoubleQuote: "”",
  LeftGuillemet: "«",
  RightGuillemet: "»",
  LeftSkeleton: "⦃",
  RightSkeleton: "⦄",
  ClubSuit: "♣",
  DiamondSuit: "♢",
  HeartSuit: "♡",
  SpadeSuit: "♠",
  ScriptCapitalB: "ℬ",
  ScriptCapitalE: "ℰ",
  ScriptCapitalF: "ℱ",
  ScriptCapitalH: "ℋ",
  ScriptCapitalI: "ℐ",
  ScriptCapitalL: "ℒ",
  ScriptCapitalM: "ℳ",
  ScriptCapitalR: "ℛ",
  ScriptE: "ℯ",
  ScriptG: "ℊ",
  ScriptO: "ℴ",
  DoubleStruckCapitalC: "ℂ",
  DoubleStruckCapitalH: "ℍ",
  DoubleStruckCapitalN: "ℕ",
  DoubleStruckCapitalP: "ℙ",
  DoubleStruckCapitalQ: "ℚ",
  DoubleStruckCapitalR: "ℝ",
  DoubleStruckCapitalZ: "ℤ"
};
for (const [i, name] of [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "FinalSigma",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega"
].entries()) {
  names[name] = String.fromCodePoint(945 + i);
  if (name !== "FinalSigma")
    names[`Capital${name}`] = String.fromCodePoint(913 + i);
}
names.Epsilon = "ϵ";
function namedCharacters(text) {
  return text.replace(/\\\[([A-Za-z]+)\]/g, (original, name) => {
    if (names[name])
      return names[name];
    const script = /^(Script|DoubleStruck)(Capital)?([A-Z])$/.exec(name);
    if (!script)
      return original;
    const base = script[1] === "Script" ? script[2] ? 119964 : 119990 : script[2] ? 120120 : 120146;
    return String.fromCodePoint(base + script[3].charCodeAt(0) - 65);
  });
}

// src/preview-protocol.ts
var PREVIEW_LIMITS = {
  depth: 64,
  nodes: 1200,
  dom: 2000,
  text: 8000,
  milliseconds: 100,
  cellBytes: 128 * 1024,
  batchBytes: 512 * 1024,
  batch: 8,
  inlineText: 8000,
  sourceChunk: 16000
};

// src/box-preview.ts
var layouts = {
  FractionBox: ["frac", 2],
  SuperscriptBox: ["sup", 2],
  SubscriptBox: ["sub", 2],
  SubsuperscriptBox: ["subsup", 3],
  SqrtBox: ["sqrt", 1],
  RadicalBox: ["root", 2],
  OverscriptBox: ["over", 2],
  UnderscriptBox: ["under", 2],
  UnderoverscriptBox: ["underover", 3]
};
var wrappers = new Set([
  "BoxData",
  "Cell",
  "FormBox",
  "TagBox",
  "InterpretationBox",
  "TooltipBox",
  "ButtonBox",
  "PaneBox",
  "FrameBox",
  "ItemBox",
  "AdjustmentBox"
]);
function flow(children) {
  const lines = [[]];
  let clipped = false;
  const newline = () => {
    if (lines.length >= 128) {
      clipped = true;
      return;
    }
    lines.push([]);
  };
  const append = (box) => {
    if (clipped)
      return;
    if (box.kind === "row") {
      for (const child of box.children ?? [])
        append(child);
      return;
    }
    if (box.kind === "lines") {
      for (const [i, line2] of (box.children ?? []).entries()) {
        if (i)
          newline();
        append(line2);
      }
      return;
    }
    const parts2 = box.kind === "text" ? (box.text ?? "").split(`
`) : undefined;
    if (parts2 && parts2.length > 1) {
      for (const [i, part] of parts2.entries()) {
        if (i)
          newline();
        if (part)
          append({ kind: "text", text: part });
      }
      return;
    }
    const line = lines.at(-1);
    const last = line.at(-1);
    if (last?.kind === "text" && box.kind === "text")
      last.text = (last.text ?? "") + box.text;
    else
      line.push(box);
  };
  for (const child of children)
    append(child);
  if (clipped)
    lines.at(-1).push({ kind: "unknown", text: "Line limit" });
  return lines.length === 1 ? { kind: "row", children: lines[0] } : { kind: "lines", children: lines.map((items) => ({ kind: "row", children: items })) };
}
function previewBoxes(source, index = 0, cancelled = () => false) {
  let reader = boxReader(source);
  const reasons = new Set;
  const deadline = performance.now() + PREVIEW_LIMITS.milliseconds;
  let nodes = 0;
  let dom = 0;
  let textLeft = PREVIEW_LIMITS.text;
  let limited = false;
  const unknown = (reason, limit = false) => {
    reasons.add(reason);
    limited ||= limit;
    return { kind: "unknown", text: reason };
  };
  const text = (value) => {
    const clipped = value.length > textLeft;
    const shown = value.slice(0, textLeft);
    textLeft -= shown.length;
    if (clipped) {
      limited = true;
      reasons.add("Text limit");
    }
    return { kind: "text", text: namedCharacters(shown) + (clipped ? "..." : "") };
  };
  const many = (items, depth, merge = false) => {
    const result2 = [];
    for (const item of items) {
      if (nodes >= PREVIEW_LIMITS.nodes || dom >= PREVIEW_LIMITS.dom || performance.now() > deadline || cancelled()) {
        result2.push(unknown("Display budget exceeded", true));
        break;
      }
      const child = visit(item, depth);
      const last = result2.at(-1);
      if (merge && last?.kind === "text" && child.kind === "text")
        last.text += child.text ?? "";
      else
        result2.push(child);
    }
    return result2;
  };
  const list = (value, depth) => {
    if (!value)
      return [unknown("Missing box argument")];
    if (value.head !== "List")
      return [visit(value, depth)];
    const items = reader.args(value, PREVIEW_LIMITS.nodes + 1);
    return many(items, depth, true);
  };
  const messageBoxes = (message, depth) => {
    const literal = boxReader(message);
    try {
      message = literal.string(literal.root()) ?? message;
    } catch {}
    const children = [];
    const pattern = /\\!\\\(\\\*([\s\S]*?)\\\)/g;
    let from = 0;
    for (const match of message.matchAll(pattern)) {
      if (children.length >= 32 || nodes >= PREVIEW_LIMITS.nodes || performance.now() > deadline) {
        children.push(unknown("Message display limit", true));
        return flow(children);
      }
      if (match.index > from)
        children.push(text(message.slice(from, match.index)));
      const previous = reader;
      try {
        reader = boxReader(match[1]);
        children.push(visit(reader.root(), depth + 1));
      } catch {
        children.push(unknown("Embedded message boxes"));
      } finally {
        reader = previous;
      }
      from = match.index + match[0].length;
    }
    if (from < message.length)
      children.push(text(message.slice(from)));
    return flow(children);
  };
  const visit = (value, depth) => {
    if (++nodes > PREVIEW_LIMITS.nodes || (dom += 3) > PREVIEW_LIMITS.dom || depth > PREVIEW_LIMITS.depth || performance.now() > deadline || cancelled())
      return unknown("Display budget exceeded", true);
    if (value.string) {
      if (value.end - value.start > PREVIEW_LIMITS.text * 4)
        return unknown("Large text; open Source", true);
      const result2 = text(reader.string(value) ?? "");
      return result2.text?.includes(`
`) ? flow([result2]) : result2;
    }
    if (value.head === "List")
      return flow(list(value, depth + 1));
    if (wrappers.has(value.head ?? "")) {
      const first = reader.args(value, 1)[0];
      return first ? visit(first, depth + 1) : unknown("Missing box argument");
    }
    if (value.head === "TextData" || value.head === "RowBox")
      return flow(list(reader.args(value, 1)[0], depth + 1));
    if (value.head === "StyleBox") {
      const [first, ...opts] = reader.args(value, 24);
      if (!first)
        return unknown("Missing styled content");
      const style = {};
      for (const opt of opts) {
        const raw = reader.raw(opt);
        if (/^(?:FontWeight\s*->\s*)?(?:Bold|"Bold")$/.test(raw))
          style.bold = true;
        if (/^(?:FontSlant\s*->\s*)?(?:Italic|"Italic")$/.test(raw))
          style.italic = true;
        const size = /^FontSize\s*->\s*(\d+(?:\.\d+)?)$/.exec(raw);
        if (size)
          style.size = Math.max(8, Math.min(40, Number(size[1])));
      }
      return { kind: "style", style, children: [visit(first, depth + 1)] };
    }
    const layout = layouts[value.head ?? ""];
    if (layout) {
      const items = reader.args(value, layout[1]);
      if (items.length !== layout[1])
        return unknown(`Malformed ${value.head}`);
      return { kind: layout[0], children: many(items, depth + 1) };
    }
    if (value.head === "GridBox") {
      const rows = reader.args(value, 1)[0];
      if (rows?.head !== "List")
        return unknown("Malformed GridBox");
      const items = reader.args(rows, 101);
      if (items.length > 100) {
        limited = true;
        reasons.add("Grid row limit");
      }
      const children = [];
      for (const row of items.slice(0, 100)) {
        if (nodes >= PREVIEW_LIMITS.nodes || dom >= PREVIEW_LIMITS.dom) {
          children.push(unknown("Grid display limit", true));
          break;
        }
        const columns = reader.args(row, 33);
        if (columns.length > 32) {
          limited = true;
          reasons.add("Grid column limit");
        }
        dom += columns.length + 1;
        children.push({ kind: "row", children: many(columns.slice(0, 32), depth + 1) });
      }
      return { kind: "grid", children };
    }
    if (value.head === "TemplateBox") {
      const [params, tag] = reader.args(value, 2);
      const name = tag && reader.string(tag);
      if (name === "OutputSizeLimit`Skeleton") {
        const count = params && reader.args(params, 1)[0];
        return text(`<<${count ? reader.string(count) ?? "..." : "..."}>>`);
      }
      if (name === "OutputSizeLimitTemplate" && params) {
        const shortened = reader.option(params, "shortenedBoxes");
        if (shortened) {
          limited = true;
          reasons.add("Saved shortened output; full result unavailable");
          return visit(shortened, depth + 1);
        }
      }
      if ((name === "MessageTemplate" || name === "MessageTemplate2") && params?.head === "List") {
        const values = reader.args(params, 3);
        const message = values[2] && reader.string(values[2]);
        if (message) {
          return messageBoxes(message, depth + 1);
        }
      }
      return unknown(`TemplateBox: ${name ?? "unknown template"}`);
    }
    return unknown(value.head ?? "Unsupported expression");
  };
  let box;
  try {
    box = visit(reader.root(), 0);
  } catch (error) {
    box = error instanceof Error && error.message === "Notebook nesting is too deep" ? unknown("Display depth limit", true) : unknown("Malformed boxes");
  }
  let cost = 0;
  const stack = [box];
  while (stack.length) {
    const current = stack.pop();
    cost++;
    if (current.kind === "unknown" && current.text === "Line limit") {
      limited = true;
      reasons.add("Line limit");
    }
    if (current.kind === "grid") {
      for (const row of current.children ?? []) {
        const cells = row.children ?? [row];
        cost += 1 + cells.length;
        stack.push(...cells);
      }
    } else {
      if (current.kind === "lines")
        cost += 2 * (current.children?.length ?? 0);
      stack.push(...current.children ?? []);
    }
    if (cost > PREVIEW_LIMITS.dom) {
      box = unknown("Display DOM limit", true);
      break;
    }
  }
  const result = {
    index,
    box,
    status: limited ? "limited" : reasons.size ? box.kind === "unknown" ? "unsupported" : "partial" : "complete",
    reasons: [...reasons],
    nodes
  };
  if (JSON.stringify(result).length * 3 > PREVIEW_LIMITS.cellBytes)
    return {
      index,
      box: { kind: "unknown", text: "Display byte limit" },
      status: "limited",
      reasons: ["Display byte limit"],
      nodes: 1
    };
  return result;
}

// src/preview-worker.ts
var port = parentPort;
var snapshots = new Map;
var rendered = new Map;
var MAX_BYTES = 48 * 1024 * 1024;
var retained = 0;
var renderedBytes = 0;
function trim() {
  while (rendered.size && (renderedBytes > 4 * 1024 * 1024 || retained + renderedBytes > MAX_BYTES)) {
    const [key, entry] = rendered.entries().next().value;
    rendered.delete(key);
    renderedBytes -= entry.bytes;
  }
  while (snapshots.size > 1 && (snapshots.size > 4 || retained + renderedBytes > MAX_BYTES)) {
    const [key, entry] = snapshots.entries().next().value;
    snapshots.delete(key);
    retained -= entry.bytes;
  }
}
async function handle(method, path, input, cancelled) {
  const check = () => {
    if (cancelled())
      throw Error("Preview cancelled");
  };
  check();
  if (method === "open") {
    if ((await stat(path)).size > 20 * 1024 * 1024)
      throw Error("Notebook exceeds the 20 MB preview limit");
    const bytes2 = await readFile(path);
    check();
    if (bytes2.length > 20 * 1024 * 1024)
      throw Error("Notebook exceeds the 20 MB preview limit");
    const revision = createHash("sha256").update(bytes2).digest("hex");
    const key2 = `${path}\x00${revision}`;
    let entry2 = snapshots.get(key2);
    const hit = !!entry2;
    if (!entry2) {
      const source = bytes2.toString("utf8");
      const notebook = parseNotebook(source, { preview: true });
      check();
      entry2 = { source, notebook, bytes: notebookBytes(notebook, source.length) };
      snapshots.set(key2, entry2);
      retained += entry2.bytes;
    } else {
      snapshots.delete(key2);
      snapshots.set(key2, entry2);
    }
    trim();
    const cells = entry2.notebook.cells.map(({ index, style, text, editable, runnable, start, end }) => ({
      index,
      style,
      editable,
      runnable,
      text: editable ? text.slice(0, PREVIEW_LIMITS.inlineText) : "",
      characters: editable ? text.length : end - start,
      deferred: editable && text.length > PREVIEW_LIMITS.inlineText
    }));
    return {
      result: { path, revision, cells },
      metrics: { hit, cells: cells.length, bytes: bytes2.length, cacheBytes: retained + renderedBytes }
    };
  }
  const key = `${path}\x00${input.revision}`;
  const entry = snapshots.get(key);
  if (!entry)
    throw Error("snapshot_expired: Reload the notebook to refresh its preview");
  snapshots.delete(key);
  snapshots.set(key, entry);
  const response = { revision: input.revision, cells: [] };
  let bytes = 0;
  let hits = 0;
  for (const index of input.indexes) {
    check();
    const cell = entry.notebook.cells[index];
    if (!cell)
      throw Error("Invalid cell index");
    if (input.kind === "preview") {
      const cacheKey = `${key}\x00${index}`;
      let cached = rendered.get(cacheKey);
      if (cached) {
        hits++;
        rendered.delete(cacheKey);
        rendered.set(cacheKey, cached);
      } else {
        const preview = previewBoxes(entry.source.slice(cell.start, cell.end), index, cancelled);
        check();
        const json = JSON.stringify(preview);
        cached = { preview, bytes: json.length * 2 + 128, wireBytes: Buffer.byteLength(json) + 64 };
        rendered.set(cacheKey, cached);
        renderedBytes += cached.bytes;
        trim();
      }
      if (bytes + cached.wireBytes > PREVIEW_LIMITS.batchBytes - 256 && response.cells.length)
        break;
      response.cells.push({ index, preview: cached.preview });
      bytes += cached.wireBytes;
    } else {
      if (input.kind === "text" && !cell.editable)
        throw Error("This cell has no editable plain text");
      const value = input.kind === "text" && cell.editable ? cell.text : entry.source.slice(cell.start, cell.end);
      const offset = input.offset ?? 0;
      response.cells.push({ index, offset, total: value.length, text: value.slice(offset, offset + PREVIEW_LIMITS.sourceChunk) });
      bytes += Buffer.byteLength(JSON.stringify(response.cells.at(-1)));
    }
  }
  return {
    result: response,
    metrics: { cells: response.cells.length, hits, bytes, cacheBytes: retained + renderedBytes }
  };
}
var queue = Promise.resolve();
port.on("message", (message) => {
  queue = queue.then(async () => {
    const started = performance.now();
    try {
      const flag = new Int32Array(message.cancel);
      const { result, metrics } = await handle(message.method, message.path, message.input, () => Atomics.load(flag, 0) !== 0);
      port.postMessage({
        id: message.id,
        result,
        metrics: {
          ...metrics,
          id: message.id,
          method: message.method,
          path: message.path,
          workerMs: performance.now() - started
        }
      });
    } catch (error) {
      port.postMessage({ id: message.id, error: String(error) });
    }
  });
});
