const t = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js/web"];
if (!t) throw new Error("OpenCode host module is unavailable: solid-js/web");
t.Aliases;
t.Assets;
t.ChildProperties;
t.DOMElements;
t.DelegatedEvents;
t.Dynamic;
t.ErrorBoundary;
t.For;
t.Hydration;
t.HydrationScript;
t.Index;
t.Match;
t.NoHydration;
t.Portal;
t.Properties;
t.RequestContext;
t.SVGElements;
t.SVGNamespace;
t.Show;
t.Suspense;
t.SuspenseList;
t.Switch;
t.addEventListener;
t.assign;
t.classList;
t.className;
t.clearDelegatedEvents;
const b = t.createComponent;
t.createDynamic;
const pt = t.delegateEvents;
t.dynamicProperty;
const te = t.effect;
t.escape;
t.generateHydrationScript;
t.getAssets;
t.getHydrationKey;
t.getNextElement;
t.getNextMarker;
t.getNextMatch;
t.getOwner;
t.getPropAlias;
t.getRequestEvent;
t.hydrate;
t.innerHTML;
const p = t.insert;
t.isDev;
t.isServer;
t.memo;
t.mergeProps;
t.render;
t.renderToStream;
t.renderToString;
t.renderToStringAsync;
t.resolveSSRNode;
t.runHydrationEvents;
const T = t.setAttribute;
t.setAttributeNS;
t.setBoolAttribute;
t.setProperty;
const Ae = t.setStyleProperty;
t.spread;
t.ssr;
t.ssrAttribute;
t.ssrClassList;
t.ssrElement;
t.ssrHydrationKey;
t.ssrSpread;
t.ssrStyle;
const ft = t.style, R = t.template;
t.untrack;
const Ne = t.use;
t.useAssets;
const s = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js"];
if (!s) throw new Error("OpenCode host module is unavailable: solid-js");
s.$DEVCOMP;
s.$PROXY;
s.$TRACK;
s.DEV;
s.ErrorBoundary;
const ge = s.For, gt = s.Index;
s.Match;
const he = s.Show;
s.Suspense;
s.SuspenseList;
s.Switch;
s.batch;
s.cancelCallback;
s.catchError;
s.children;
s.createComponent;
s.createComputed;
s.createContext;
s.createDeferred;
const B = s.createEffect, D = s.createMemo;
s.createReaction;
s.createRenderEffect;
s.createResource;
s.createRoot;
s.createSelector;
const x = s.createSignal;
s.createUniqueId;
s.enableExternalSource;
s.enableHydration;
s.enableScheduling;
s.equalFn;
s.from;
s.getListener;
s.getOwner;
s.indexArray;
s.lazy;
s.mapArray;
s.mergeProps;
s.observable;
s.on;
const ie = s.onCleanup;
s.onError;
const Te = s.onMount;
s.requestCallback;
s.resetErrorBoundaries;
s.runWithOwner;
s.sharedConfig;
s.splitProps;
s.startTransition;
const ht = s.untrack;
s.useContext;
s.useTransition;
const Ue = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["@opencode-ai/ui/button"];
if (!Ue) throw new Error("OpenCode host module is unavailable: @opencode-ai/ui/button");
const L = Ue.Button;
const Ve = {
  run: "Run",
  continue: "Continue",
  step: "Step",
  abort: "Abort",
  restart: "Restart",
  stop: "Stop",
  source: "Source",
  idle: "Idle",
  starting: "Starting kernel…",
  ready: "Ready",
  running: "Running…",
  paused: "Paused",
  error: "Error",
  stopped: "Kernel stopped",
  pausedLine: "Paused at line {line}",
  breakpoint: "Toggle breakpoint",
  variables: "Variables (User` context)",
  empty: "No variables defined yet",
  input: "Evaluate an expression in the kernel",
  inspect: "Evaluate an expression in the paused state",
  wordWrap: "Word wrap",
  fontDecrease: "Decrease font size",
  fontIncrease: "Increase font size"
}, Fe = {
  run: "运行",
  continue: "继续",
  step: "单步",
  abort: "中止",
  restart: "重启",
  stop: "停止",
  source: "源代码",
  idle: "空闲",
  starting: "正在启动内核…",
  ready: "就绪",
  running: "运行中…",
  paused: "已暂停",
  error: "错误",
  stopped: "内核已停止",
  pausedLine: "已暂停于第 {line} 行",
  breakpoint: "切换断点",
  variables: "变量（User` 上下文）",
  empty: "尚未定义变量",
  input: "在内核中计算表达式",
  inspect: "在暂停状态下计算表达式",
  wordWrap: "自动换行",
  fontDecrease: "减小字号",
  fontIncrease: "增大字号"
}, Be = {
  run: "執行",
  continue: "繼續",
  step: "單步",
  abort: "中止",
  restart: "重新啟動",
  stop: "停止",
  source: "原始碼",
  idle: "閒置",
  starting: "正在啟動核心…",
  ready: "就緒",
  running: "執行中…",
  paused: "已暫停",
  error: "錯誤",
  stopped: "核心已停止",
  pausedLine: "已暫停於第 {line} 行",
  breakpoint: "切換中斷點",
  variables: "變數（User` 上下文）",
  empty: "尚未定義變數",
  input: "在核心中計算運算式",
  inspect: "在暫停狀態下計算運算式",
  wordWrap: "自動換行",
  fontDecrease: "縮小字級",
  fontIncrease: "放大字級"
}, vt = {
  run: "実行",
  continue: "続行",
  step: "ステップ",
  abort: "中断",
  restart: "再起動",
  stop: "停止",
  source: "ソース",
  idle: "待機中",
  starting: "カーネルを起動中…",
  ready: "準備完了",
  running: "実行中…",
  paused: "一時停止中",
  error: "エラー",
  stopped: "カーネル停止",
  pausedLine: "{line} 行目で一時停止",
  breakpoint: "ブレークポイントを切り替え",
  variables: "変数（User` コンテキスト）",
  empty: "変数はまだ定義されていません",
  input: "カーネルで式を評価",
  inspect: "一時停止状態で式を評価",
  wordWrap: "折り返し",
  fontDecrease: "フォントサイズを縮小",
  fontIncrease: "フォントサイズを拡大"
}, mt = {
  run: "실행",
  continue: "계속",
  step: "단계 실행",
  abort: "중단",
  restart: "다시 시작",
  stop: "정지",
  source: "소스 코드",
  idle: "대기",
  starting: "커널 시작 중…",
  ready: "준비됨",
  running: "실행 중…",
  paused: "일시 중지됨",
  error: "오류",
  stopped: "커널이 정지됨",
  pausedLine: "{line}행에서 일시 중지됨",
  breakpoint: "중단점 전환",
  variables: "변수 (User` 컨텍스트)",
  empty: "아직 정의된 변수가 없습니다",
  input: "커널에서 표현식 평가",
  inspect: "일시 중지 상태에서 표현식 평가",
  wordWrap: "자동 줄 바꿈",
  fontDecrease: "글꼴 크기 줄이기",
  fontIncrease: "글꼴 크기 늘리기"
}, bt = {
  run: "Ausführen",
  continue: "Fortsetzen",
  step: "Einzelschritt",
  abort: "Abbrechen",
  restart: "Neu starten",
  stop: "Stoppen",
  source: "Quellcode",
  idle: "Inaktiv",
  starting: "Kernel wird gestartet…",
  ready: "Bereit",
  running: "Wird ausgeführt…",
  paused: "Pausiert",
  error: "Fehler",
  stopped: "Kernel gestoppt",
  pausedLine: "In Zeile {line} pausiert",
  breakpoint: "Haltepunkt umschalten",
  variables: "Variablen (User`-Kontext)",
  empty: "Noch keine Variablen definiert",
  input: "Einen Ausdruck im Kernel auswerten",
  inspect: "Einen Ausdruck im pausierten Zustand auswerten",
  wordWrap: "Zeilenumbruch",
  fontDecrease: "Schrift verkleinern",
  fontIncrease: "Schrift vergrößern"
}, kt = {
  run: "Ejecutar",
  continue: "Continuar",
  step: "Paso",
  abort: "Abortar",
  restart: "Reiniciar",
  stop: "Detener",
  source: "Código fuente",
  idle: "Inactivo",
  starting: "Iniciando el núcleo…",
  ready: "Listo",
  running: "Ejecutando…",
  paused: "En pausa",
  error: "Error",
  stopped: "Núcleo detenido",
  pausedLine: "En pausa en la línea {line}",
  breakpoint: "Alternar punto de interrupción",
  variables: "Variables (contexto User`)",
  empty: "Aún no hay variables definidas",
  input: "Evaluar una expresión en el núcleo",
  inspect: "Evaluar una expresión en estado de pausa",
  wordWrap: "Ajuste de línea",
  fontDecrease: "Reducir tamaño de fuente",
  fontIncrease: "Aumentar tamaño de fuente"
}, yt = {
  run: "Exécuter",
  continue: "Continuer",
  step: "Pas à pas",
  abort: "Interrompre",
  restart: "Redémarrer",
  stop: "Arrêter",
  source: "Code source",
  idle: "Inactif",
  starting: "Démarrage du noyau…",
  ready: "Prêt",
  running: "Exécution en cours…",
  paused: "En pause",
  error: "Erreur",
  stopped: "Noyau arrêté",
  pausedLine: "En pause à la ligne {line}",
  breakpoint: "Basculer le point d’arrêt",
  variables: "Variables (contexte User`)",
  empty: "Aucune variable définie pour le moment",
  input: "Évaluer une expression dans le noyau",
  inspect: "Évaluer une expression en pause",
  wordWrap: "Retour à la ligne",
  fontDecrease: "Réduire la taille de police",
  fontIncrease: "Augmenter la taille de police"
}, wt = {
  run: "Kør",
  continue: "Fortsæt",
  step: "Enkelttrin",
  abort: "Afbryd",
  restart: "Genstart",
  stop: "Stop",
  source: "Kildekode",
  idle: "Inaktiv",
  starting: "Starter kernen…",
  ready: "Klar",
  running: "Kører…",
  paused: "Sat på pause",
  error: "Fejl",
  stopped: "Kernen er stoppet",
  pausedLine: "Sat på pause ved linje {line}",
  breakpoint: "Slå stoppunkt til eller fra",
  variables: "Variabler (User`-kontekst)",
  empty: "Ingen variabler er defineret endnu",
  input: "Evaluer et udtryk i kernen",
  inspect: "Evaluer et udtryk i pauset tilstand",
  wordWrap: "Tekstombrydning",
  fontDecrease: "Formindsk skriftstørrelse",
  fontIncrease: "Forøg skriftstørrelse"
}, Et = {
  run: "Uruchom",
  continue: "Kontynuuj",
  step: "Krok",
  abort: "Przerwij",
  restart: "Uruchom ponownie",
  stop: "Zatrzymaj",
  source: "Kod źródłowy",
  idle: "Bezczynny",
  starting: "Uruchamianie jądra…",
  ready: "Gotowy",
  running: "Wykonywanie…",
  paused: "Wstrzymano",
  error: "Błąd",
  stopped: "Jądro zatrzymane",
  pausedLine: "Wstrzymano w wierszu {line}",
  breakpoint: "Przełącz punkt przerwania",
  variables: "Zmienne (kontekst User`)",
  empty: "Nie zdefiniowano jeszcze żadnych zmiennych",
  input: "Oblicz wyrażenie w jądrze",
  inspect: "Oblicz wyrażenie we wstrzymanym stanie",
  wordWrap: "Zawijanie wierszy",
  fontDecrease: "Zmniejsz rozmiar czcionki",
  fontIncrease: "Zwiększ rozmiar czcionki"
}, St = {
  run: "Выполнить",
  continue: "Продолжить",
  step: "Шаг",
  abort: "Прервать",
  restart: "Перезапустить",
  stop: "Остановить",
  source: "Исходный код",
  idle: "Бездействие",
  starting: "Запуск ядра…",
  ready: "Готово",
  running: "Выполняется…",
  paused: "Приостановлено",
  error: "Ошибка",
  stopped: "Ядро остановлено",
  pausedLine: "Приостановлено на строке {line}",
  breakpoint: "Переключить точку останова",
  variables: "Переменные (контекст User`)",
  empty: "Переменные пока не определены",
  input: "Вычислить выражение в ядре",
  inspect: "Вычислить выражение в приостановленном состоянии",
  wordWrap: "Перенос строк",
  fontDecrease: "Уменьшить размер шрифта",
  fontIncrease: "Увеличить размер шрифта"
}, xt = {
  run: "تشغيل",
  continue: "متابعة",
  step: "خطوة",
  abort: "إلغاء التنفيذ",
  restart: "إعادة التشغيل",
  stop: "إيقاف",
  source: "الشيفرة المصدرية",
  idle: "خامل",
  starting: "جارٍ بدء النواة…",
  ready: "جاهز",
  running: "قيد التشغيل…",
  paused: "متوقف مؤقتًا",
  error: "خطأ",
  stopped: "تم إيقاف النواة",
  pausedLine: "متوقف مؤقتًا عند السطر {line}",
  breakpoint: "تبديل نقطة التوقف",
  variables: "المتغيرات (سياق User`)",
  empty: "لم يتم تعريف أي متغيرات بعد",
  input: "تقييم تعبير في النواة",
  inspect: "تقييم تعبير في حالة التوقف المؤقت",
  wordWrap: "التفاف النص",
  fontDecrease: "تصغير حجم الخط",
  fontIncrease: "تكبير حجم الخط"
}, Ze = {
  run: "Kjør",
  continue: "Fortsett",
  step: "Enkeltsteg",
  abort: "Avbryt",
  restart: "Start på nytt",
  stop: "Stopp",
  source: "Kildekode",
  idle: "Inaktiv",
  starting: "Starter kjernen…",
  ready: "Klar",
  running: "Kjører…",
  paused: "Satt på pause",
  error: "Feil",
  stopped: "Kjernen er stoppet",
  pausedLine: "Satt på pause på linje {line}",
  breakpoint: "Slå av/på bruddpunkt",
  variables: "Variabler (User`-kontekst)",
  empty: "Ingen variabler er definert ennå",
  input: "Evaluer et uttrykk i kjernen",
  inspect: "Evaluer et uttrykk mens kjøringen er satt på pause",
  wordWrap: "Tekstbryting",
  fontDecrease: "Reduser skriftstørrelse",
  fontIncrease: "Øk skriftstørrelse"
}, Ge = {
  run: "Executar",
  continue: "Continuar",
  step: "Passo",
  abort: "Abortar",
  restart: "Reiniciar",
  stop: "Parar",
  source: "Código-fonte",
  idle: "Ocioso",
  starting: "Iniciando o kernel…",
  ready: "Pronto",
  running: "Executando…",
  paused: "Pausado",
  error: "Erro",
  stopped: "Kernel parado",
  pausedLine: "Pausado na linha {line}",
  breakpoint: "Alternar ponto de interrupção",
  variables: "Variáveis (contexto User`)",
  empty: "Nenhuma variável definida ainda",
  input: "Avaliar uma expressão no kernel",
  inspect: "Avaliar uma expressão no estado pausado",
  wordWrap: "Quebra de linha",
  fontDecrease: "Diminuir fonte",
  fontIncrease: "Aumentar fonte"
}, $t = {
  run: "เรียกใช้",
  continue: "ดำเนินการต่อ",
  step: "ทำงานทีละขั้น",
  abort: "ยกเลิกการทำงาน",
  restart: "เริ่มใหม่",
  stop: "หยุด",
  source: "ซอร์สโค้ด",
  idle: "ว่าง",
  starting: "กำลังเริ่มเคอร์เนล…",
  ready: "พร้อม",
  running: "กำลังทำงาน…",
  paused: "หยุดชั่วคราว",
  error: "ข้อผิดพลาด",
  stopped: "เคอร์เนลหยุดแล้ว",
  pausedLine: "หยุดชั่วคราวที่บรรทัด {line}",
  breakpoint: "สลับจุดพัก",
  variables: "ตัวแปร (บริบท User`)",
  empty: "ยังไม่มีการกำหนดตัวแปร",
  input: "ประเมินนิพจน์ในเคอร์เนล",
  inspect: "ประเมินนิพจน์ในสถานะหยุดชั่วคราว",
  wordWrap: "ตัดบรรทัด",
  fontDecrease: "ลดขนาดตัวอักษร",
  fontIncrease: "เพิ่มขนาดตัวอักษร"
}, zt = {
  run: "Pokreni",
  continue: "Nastavi",
  step: "Korak",
  abort: "Prekini",
  restart: "Pokreni ponovo",
  stop: "Zaustavi",
  source: "Izvorni kod",
  idle: "Neaktivno",
  starting: "Pokretanje jezgre…",
  ready: "Spremno",
  running: "Izvršavanje…",
  paused: "Pauzirano",
  error: "Greška",
  stopped: "Jezgra je zaustavljena",
  pausedLine: "Pauzirano na liniji {line}",
  breakpoint: "Uključi/isključi tačku prekida",
  variables: "Varijable (kontekst User`)",
  empty: "Još nema definisanih varijabli",
  input: "Izračunaj izraz u jezgri",
  inspect: "Izračunaj izraz u pauziranom stanju",
  wordWrap: "Prelamanje teksta",
  fontDecrease: "Smanji veličinu fonta",
  fontIncrease: "Povećaj veličinu fonta"
}, It = {
  run: "Çalıştır",
  continue: "Devam et",
  step: "Adım",
  abort: "İptal et",
  restart: "Yeniden başlat",
  stop: "Durdur",
  source: "Kaynak kodu",
  idle: "Boşta",
  starting: "Çekirdek başlatılıyor…",
  ready: "Hazır",
  running: "Çalışıyor…",
  paused: "Duraklatıldı",
  error: "Hata",
  stopped: "Çekirdek durduruldu",
  pausedLine: "{line}. satırda duraklatıldı",
  breakpoint: "Kesme noktasını aç/kapat",
  variables: "Değişkenler (User` bağlamı)",
  empty: "Henüz değişken tanımlanmadı",
  input: "Çekirdekte bir ifadeyi değerlendir",
  inspect: "Duraklatılmış durumda bir ifadeyi değerlendir",
  wordWrap: "Satır kaydırma",
  fontDecrease: "Yazı boyutunu küçült",
  fontIncrease: "Yazı boyutunu büyüt"
}, De = { en: Ve, zh: Fe, zht: Be, ko: mt, de: bt, es: kt, fr: yt, da: wt, ja: vt, pl: Et, ru: St, ar: xt, no: Ze, br: Ge, th: $t, bs: zt, tr: It };
function Ct(a) {
  const [e = "", ...c] = a.toLowerCase().replaceAll("_", "-").split("-");
  return e === "zh" ? c.some((i) => ["hant", "tw", "hk", "mo"].includes(i)) ? Be : Fe : e === "pt" ? Ge : e === "nb" || e === "nn" ? Ze : Object.prototype.hasOwnProperty.call(De, e) ? De[e] : Ve;
}
const _t = 4e3, At = 64 * 1024, Le = /* @__PURE__ */ new Set([
  "True",
  "False",
  "Null",
  "None",
  "All",
  "Automatic",
  "Infinity",
  "ComplexInfinity",
  "Indeterminate",
  "Pi",
  "E",
  "I",
  "Degree"
]), Oe = /[\p{L}$][\p{L}\p{N}$`]*|`[\p{L}\p{N}$`]+/uy, Pe = /(?:[0-9]+\^\^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]*)?|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+))(?:`{1,2}(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)?)?(?:\*\^[+-]?[0-9]+)?/y, je = /\\\[[a-zA-Z][a-zA-Z0-9]*\]/y, Nt = /* @__PURE__ */ new Set([
  "Rule",
  "RuleDelayed",
  "Equal",
  "Unequal",
  "LessEqual",
  "GreaterEqual",
  "And",
  "Or",
  "Not",
  "Times",
  "InvisibleTimes",
  "Element",
  "NotElement",
  "Function",
  "Condition"
]);
function He(a) {
  return {
    offset: 0,
    commentDepth: a?.commentDepth ?? 0,
    string: a?.string ?? !1,
    escaped: a?.escaped ?? !1
  };
}
function Me(a, e, c, i = a.length) {
  const o = Math.min(a.length, i);
  for (; e.offset < o; ) {
    const u = e.offset;
    if (e.commentDepth || a.startsWith("(*", u)) {
      for (e.commentDepth || (e.commentDepth = 1, e.offset += 2); e.offset < o && e.commentDepth; )
        a.startsWith("(*", e.offset) ? (e.commentDepth++, e.offset += 2) : a.startsWith("*)", e.offset) ? (e.commentDepth--, e.offset += 2) : e.offset++;
      c?.("comment", u, e.offset);
      continue;
    }
    if (e.string || a[u] === '"') {
      for (e.string || (e.string = !0, e.offset++); e.offset < o && e.string; ) {
        const h = a[e.offset++];
        e.escaped ? e.escaped = !1 : h === "\\" ? e.escaped = !0 : h === '"' && (e.string = !1);
      }
      c?.("string", u, e.offset);
      continue;
    }
    je.lastIndex = u;
    const w = je.exec(a)?.[0];
    if (w) {
      e.offset += w.length;
      const h = w.slice(2, -1);
      c?.(Nt.has(h) ? "operator" : Le.has(h) ? "constant" : "symbol", u, e.offset);
      continue;
    }
    Pe.lastIndex = u;
    const I = Pe.exec(a)?.[0];
    if (I) {
      e.offset += I.length, c?.("number", u, e.offset);
      continue;
    }
    Oe.lastIndex = u;
    const d = Oe.exec(a)?.[0];
    if (d) {
      e.offset += d.length;
      const h = d.split("`").at(-1) ?? d;
      let $ = e.offset;
      for (; $ < a.length && /\s/.test(a[$]); ) $++;
      c?.(
        Le.has(h) || h.startsWith("$") ? "constant" : a[$] === "[" || /^[A-Z]/.test(h) ? "function" : "symbol",
        u,
        e.offset
      );
      continue;
    }
    const f = a[e.offset++];
    if (f === "_" || f === "#" || f === "%") {
      for (; a[e.offset] === f; ) e.offset++;
      if (f === "#" || f === "%") for (; /[0-9]/.test(a[e.offset] ?? ""); ) e.offset++;
      c?.("pattern", u, e.offset);
      continue;
    }
    c?.(
      "[]{}(),;".includes(f) ? "punctuation" : "+-*/^=<>!:?@&|~.\\".includes(f) ? "operator" : "plain",
      u,
      e.offset
    );
  }
  return e;
}
const Tt = 256, Dt = 16 * 1024;
function Lt(a, e) {
  const c = [0];
  for (let d = 0; d < e.length - 1; d++) c.push(c[d] + e[d].length + 1);
  const i = [0], o = He(), u = /* @__PURE__ */ new Map();
  let w = 0, I = !1;
  return {
    get cachedLines() {
      return u.size;
    },
    get indexedLines() {
      return i.length;
    },
    advance(d = 64 * 1024) {
      if (I) return !0;
      const f = o.offset + Math.max(1, d);
      for (; w < e.length && o.offset < f; ) {
        const h = c[w + 1] ?? a.length;
        Me(a, o, void 0, Math.min(h, o.offset + Dt, f)), o.offset >= h && (w++, w < e.length && (i[w] = o.commentDepth * 4 + Number(o.string) * 2 + Number(o.escaped)));
      }
      return w >= e.length;
    },
    tokens(d) {
      const f = e[d] ?? "";
      if (I || i[d] === void 0 || !f) return [{ kind: "plain", text: f }];
      const h = u.get(d);
      if (h)
        return u.delete(d), u.set(d, h), h;
      const $ = i[d], P = He({
        commentDepth: Math.floor($ / 4),
        string: !!($ & 2),
        escaped: !!($ & 1)
      });
      P.offset = c[d];
      const O = [];
      let j = -1;
      return f.length > At ? [{ kind: "plain", text: f }] : (Me(
        a,
        P,
        (K, ne, oe) => {
          if (j >= 0) return;
          if (O.length >= _t) {
            j = ne;
            return;
          }
          const re = a.slice(ne, oe), q = O.at(-1);
          q?.kind === K ? q.text += re : O.push({ kind: K, text: re });
        },
        c[d] + f.length
      ), j >= 0 && O.push({ kind: "plain", text: a.slice(j, c[d] + f.length) }), u.set(d, O), u.size > Tt && u.delete(u.keys().next().value), O);
    },
    dispose() {
      I = !0, u.clear();
    }
  };
}
const qe = 20, Je = 8, Ot = 1e3, We = 12;
function Pt(a, e, c, i = qe) {
  const o = Math.floor(Math.max(0, e - Je) / i), u = Math.min(Math.max(0, a - 1), Math.max(0, o - We)), w = Math.min(a, Math.max(u + 1, o + Math.ceil(Math.max(0, c) / i) + We + 1));
  return { start: u, end: w };
}
function jt(a, e, c = qe) {
  return Math.max(0, Je + (a - 0.5) * c - e / 2);
}
function Ht(a) {
  let e = 0;
  for (const c of a) {
    let i = 0;
    for (let o = 0; o < c.length; o++) i += c[o] === "	" ? 4 - i % 4 : 1;
    e = Math.max(e, i);
  }
  return e;
}
var Mt = /* @__PURE__ */ R("<ul class=oc-wls-variables-list>"), Wt = /* @__PURE__ */ R("<aside class=oc-wls-variables><div class=oc-wls-variables-head>"), Rt = /* @__PURE__ */ R("<section class=oc-wls-root><header class=oc-wls-toolbar><span class=oc-wls-status><span class=oc-wls-status-dot></span></span><div class=oc-wls-actions><span class=oc-wls-font-controls><span class=oc-wls-font-size></span></span></div></header><div class=oc-wls-body><div class=oc-wls-code><div class=oc-wls-code-window></div></div></div><footer class=oc-wls-console><div class=oc-wls-console-entries></div><div class=oc-wls-input-row><span class=oc-wls-prompt></span><input class=oc-wls-input>"), Kt = /* @__PURE__ */ R("<div class=oc-wls-line><button type=button class=oc-wls-gutter><span class=oc-wls-line-number></span><span class=oc-wls-bp-dot></span></button><pre class=oc-wls-line-text>"), Ut = /* @__PURE__ */ R("<span>"), Vt = /* @__PURE__ */ R("<div class=oc-wls-variables-empty>"), Ft = /* @__PURE__ */ R("<li><span class=oc-wls-var-name></span><span class=oc-wls-var-value>"), Bt = /* @__PURE__ */ R("<div class=oc-wls-entry>");
const Xe = "local.wls-repl", Zt = `${Xe}/message`, Gt = 12.5, ve = 9, me = 24, qt = 1.6, [k, Re] = x({}), Ke = 500;
let Jt = 0;
function Xt(a) {
  return a.split("; ").filter((e) => e !== "").map((e) => {
    const c = e.replace(/^HoldPattern\[/, ""), i = c.indexOf("] :> ");
    if (i === -1) return c;
    const o = c.slice(0, i), u = c.slice(i + 5);
    return `${o} ${o.includes("[") ? ":=" : "="} ${u}`;
  }).join("; ");
}
function Yt(a, e) {
  for (const c of [" = ", " := "]) {
    const i = a + c;
    if (e.startsWith(i)) return e.slice(i.length);
  }
  return e;
}
function Qt(a) {
  const [e, c] = x(document.documentElement.lang || "en"), i = D(() => Ct(e()));
  Te(() => {
    const n = new MutationObserver(() => c(document.documentElement.lang || "en"));
    n.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["lang"]
    }), k().log?.info(`wls viewer layout mounted ${JSON.stringify({
      path: a.file.absolutePath,
      pinnedInput: !0
    })}`), ie(() => n.disconnect());
  }), B(() => k().log?.info(`wls viewer locale ${e()}`));
  const o = () => a.file.absolutePath, [u, w] = x(a.text() ?? ""), [I, d] = x("unknown"), [f, h] = x(void 0), [$, P] = x(void 0), [O, j] = x([]), [K, ne] = x([]), [oe, re] = x([]), [q, be] = x(""), [ke, se] = x(!1);
  let le, C;
  const [Ye, ce] = x(0), [ye, we] = x(600), ue = D(() => k().settings?.get("wordWrap")() ?? !0), U = D(() => {
    const n = k().settings?.get("fontSize")();
    return typeof n == "number" && n >= ve && n <= me ? n : Gt;
  }), J = D(() => Math.max(10, Math.round(U() * qt))), H = D(() => u().split(`
`)), V = D(() => H().length > Ot), Qe = D(() => V() ? Ht(H()) : 0), Z = D(() => V() ? Pt(H().length, Ye(), ye(), J()) : {
    start: 0,
    end: H().length
  }, void 0, {
    equals: (n, r) => n.start === r.start && n.end === r.end
  }), [et, tt] = x(0), Ee = D(() => Lt(u(), H()));
  B(() => {
    const n = Ee();
    let r;
    const g = () => {
      const y = n.advance();
      tt((E) => E + 1), y || (r = setTimeout(g, 0));
    };
    g(), ie(() => {
      clearTimeout(r), n.dispose();
    });
  });
  const nt = D(() => (et(), H().slice(Z().start, Z().end).map((n, r) => ({
    text: n,
    number: Z().start + r + 1,
    tokens: Ee().tokens(Z().start + r)
  }))));
  Te(() => {
    if (!C) return;
    const n = new ResizeObserver(() => we(C.clientHeight));
    n.observe(C), we(C.clientHeight), ie(() => n.disconnect());
  }), B(() => {
    const n = H().length;
    k().log?.info(`wls viewer indexed ${JSON.stringify({
      path: o(),
      lines: n,
      virtual: V()
    })}`), C && ce(C.scrollTop);
  });
  const m = (n, r) => {
    re((g) => {
      const y = [...g, {
        id: ++Jt,
        kind: n,
        text: r
      }];
      return y.length > Ke ? y.slice(y.length - Ke) : y;
    });
  }, Se = async () => {
    try {
      k().log?.info(`wls viewer reading ${o()}`);
      const n = await a.readText();
      typeof n == "string" && (w(n), k().log?.info(`wls viewer read complete ${JSON.stringify({
        path: o(),
        characters: n.length
      })}`));
    } catch (n) {
      k().log?.warn(`wls viewer read failed; using cached text ${o()}: ${String(n)}`);
    }
  };
  B(() => {
    a.revision?.(), ht(() => void Se());
  }), B(() => {
    const n = le;
    n && (n.scrollTop = n.scrollHeight);
  }), B(() => {
    const n = $();
    n === void 0 || !C || (V() ? (C.scrollTop = jt(n, ye(), J()), ce(C.scrollTop)) : C.querySelector(`[data-line="${n}"]`)?.scrollIntoView({
      block: "center"
    }), k().log?.info(`wls viewer pause navigation ${JSON.stringify({
      path: o(),
      line: n,
      virtual: V()
    })}`));
  });
  const rt = (n) => {
    ne((r) => r.includes(n) ? r.filter((g) => g !== n) : [...r, n]);
  }, X = async (n, r) => {
    const g = k().rpc;
    if (!g) {
      m("err", "server bridge not available in this host");
      return;
    }
    try {
      k().log?.info(`wls viewer rpc request ${JSON.stringify({
        method: n,
        path: o()
      })}`);
      const y = await g.call(n, r);
      return k().log?.info(`wls viewer rpc complete ${JSON.stringify({
        method: n,
        path: o()
      })}`), y;
    } catch (y) {
      const E = y instanceof Error ? y.message : String(y);
      k().log?.warn(`wls viewer rpc failed ${n}: ${E}`), m("err", `${n}: ${E}`);
      return;
    }
  }, st = async () => {
    se(!0);
    try {
      await Se(), (await X("kernel.run", {
        path: o(),
        code: u(),
        breakpoints: K()
      }))?.started && (d("running"), P(void 0), m("info", `run started (${K().length} breakpoint${K().length === 1 ? "" : "s"})`));
    } finally {
      se(!1);
    }
  }, de = (n) => async () => {
    await X("kernel." + n, {
      path: o()
    });
  }, at = async () => {
    se(!0);
    try {
      const n = await X("kernel.restart", {
        path: o()
      });
      n?.status && (d(n.status), P(void 0), j([]), m("info", "kernel restarted; user variables were reset"));
    } finally {
      se(!1);
    }
  }, it = async () => {
    await X("kernel.stop", {
      path: o()
    });
  }, ot = async () => {
    const n = q().trim();
    if (!n) return;
    be(""), m("input", n);
    const r = await X("kernel.eval", {
      path: o(),
      code: n
    });
    r?.queued && m("pending", `awaiting result (${r.id})`);
  }, lt = (n) => {
    if (!n || typeof n != "object") return;
    const r = n;
    if (r.path === o()) {
      if (k().log?.info(`wls viewer message ${JSON.stringify({
        path: r.path,
        kind: r.kind,
        type: r.type
      })}`), r.kind === "output") {
        m("out", r.text ?? "");
        return;
      }
      if (r.kind === "stderr") {
        m("err", r.text ?? "");
        return;
      }
      if (r.kind === "protocol")
        switch (r.type) {
          case "ready":
            d("ready"), h(r.version), m("info", `kernel ready (${r.version ?? "unknown version"})`);
            break;
          case "paused":
            d("paused"), P(r.line), j(Object.entries(r.variables ?? {}).filter(([, g]) => g !== "").map(([g, y]) => [g, Yt(g, Xt(y))])), m("info", `paused at line ${r.line}`);
            break;
          case "done":
            d("ready"), P(void 0), j([]), m("info", r.aborted === !0 ? "run aborted" : "run finished");
            break;
          case "result":
            m("result", `[line ${r.line}] ${r.text ?? ""}`);
            break;
          case "error":
            m("err", r.text ?? "evaluation error");
            break;
          case "inspect-result":
          case "eval-result":
            m("result", `${r.ok === !1 ? "error: " : ""}${r.text ?? ""}`);
            break;
          case "bridge-error":
            d("error"), m("err", r.text ?? "bridge error");
            break;
          case "kernel-exit":
            d("stopped"), P(void 0), m("info", `kernel exited${r.code !== void 0 ? ` (code ${r.code})` : ""}`);
            break;
          case "kernel-error":
            d("error"), m("err", r.text ?? "kernel failed to start — is wolframscript installed and on PATH?");
            break;
        }
    }
  };
  B(() => {
    const n = k().events;
    if (!n) return;
    const r = n.on(Zt, lt);
    ie(() => r.dispose());
  });
  const pe = (n) => {
    k().settings?.update(n).catch((r) => k().log?.warn(`wls viewer settings update failed: ${r instanceof Error ? r.message : String(r)}`));
  }, ct = () => {
    switch (I()) {
      case "unknown":
        return i().idle;
      case "starting":
        return i().starting;
      case "ready":
        return f() ? `${i().ready} (${f()})` : i().ready;
      case "running":
        return i().running;
      case "paused":
        return $() !== void 0 ? i().pausedLine.replace("{line}", String($())) : i().paused;
      case "error":
        return i().error;
      case "stopped":
        return i().stopped;
    }
  }, M = () => I() === "paused";
  return (() => {
    var n = Rt(), r = n.firstChild, g = r.firstChild, y = g.firstChild, E = g.nextSibling, _ = E.firstChild, xe = _.firstChild, fe = r.nextSibling, W = fe.firstChild, $e = W.firstChild, ut = fe.nextSibling, ae = ut.firstChild, dt = ae.nextSibling, ze = dt.firstChild, Y = ze.nextSibling;
    p(g, ct, null), p(E, b(L, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return ke() || M() || I() === "running";
      },
      onClick: () => void st(),
      get children() {
        return i().run;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !M();
      },
      onClick: () => void de("continue")(),
      get children() {
        return i().continue;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "secondary",
      get disabled() {
        return !M();
      },
      onClick: () => void de("step")(),
      get children() {
        return i().step;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return !M();
      },
      onClick: () => void de("abort")(),
      get children() {
        return i().abort;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "ghost",
      get disabled() {
        return ke();
      },
      onClick: () => void at(),
      get children() {
        return i().restart;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "ghost",
      onClick: () => void it(),
      get children() {
        return i().stop;
      }
    }), _), p(E, b(L, {
      size: "small",
      variant: "ghost",
      get onClick() {
        return a.showSource;
      },
      get children() {
        return i().source;
      }
    }), _), p(E, b(L, {
      size: "small",
      get variant() {
        return ue() ? "secondary" : "ghost";
      },
      get title() {
        return i().wordWrap;
      },
      "data-action": "toggle-wrap",
      onClick: () => pe({
        wordWrap: !ue()
      }),
      get children() {
        return i().wordWrap;
      }
    }), _), p(_, b(L, {
      size: "small",
      variant: "ghost",
      get title() {
        return i().fontDecrease;
      },
      get disabled() {
        return U() <= ve;
      },
      onClick: () => pe({
        fontSize: Math.max(ve, U() - 1)
      }),
      children: "A−"
    }), xe), p(xe, U), p(_, b(L, {
      size: "small",
      variant: "ghost",
      get title() {
        return i().fontIncrease;
      },
      get disabled() {
        return U() >= me;
      },
      onClick: () => pe({
        fontSize: Math.min(me, U() + 1)
      }),
      children: "A+"
    }), null), W.addEventListener("scroll", (l) => ce(l.currentTarget.scrollTop));
    var Ie = C;
    typeof Ie == "function" ? Ne(Ie, W) : C = W, p($e, b(gt, {
      get each() {
        return nt();
      },
      children: (l) => {
        const S = () => l().number;
        return (() => {
          var z = Kt(), A = z.firstChild, G = A.firstChild, F = A.nextSibling;
          return A.$$click = () => rt(S()), p(G, S), p(F, b(he, {
            get when() {
              return l().text !== "";
            },
            fallback: " ",
            get children() {
              return b(ge, {
                get each() {
                  return l().tokens;
                },
                children: (v) => (() => {
                  var N = Ut();
                  return p(N, () => v.text), te(() => T(N, "data-token", v.kind)), N;
                })()
              });
            }
          })), te((v) => {
            var N = S(), Q = $() === S(), ee = !!K().includes(S()), _e = i().breakpoint;
            return N !== v.e && T(z, "data-line", v.e = N), Q !== v.t && z.classList.toggle("is-paused", v.t = Q), ee !== v.a && A.classList.toggle("has-breakpoint", v.a = ee), _e !== v.o && T(A, "title", v.o = _e), v;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
          }), z;
        })();
      }
    })), p(fe, b(he, {
      get when() {
        return M();
      },
      get children() {
        var l = Wt(), S = l.firstChild;
        return p(S, () => i().variables), p(l, b(he, {
          get when() {
            return O().length > 0;
          },
          get fallback() {
            return (() => {
              var z = Vt();
              return p(z, () => i().empty), z;
            })();
          },
          get children() {
            var z = Mt();
            return p(z, b(ge, {
              get each() {
                return O();
              },
              children: ([A, G]) => (() => {
                var F = Ft(), v = F.firstChild, N = v.nextSibling;
                return p(v, A), p(N, G), F;
              })()
            })), z;
          }
        }), null), l;
      }
    }), null);
    var Ce = le;
    return typeof Ce == "function" ? Ne(Ce, ae) : le = ae, p(ae, b(ge, {
      get each() {
        return oe();
      },
      children: (l) => (() => {
        var S = Bt();
        return p(S, () => l.text), te(() => T(S, "data-kind", l.kind)), S;
      })()
    })), p(ze, () => M() ? "inspect>" : "In>"), Y.$$keydown = (l) => {
      l.key === "Enter" && ot();
    }, Y.$$input = (l) => be(l.currentTarget.value), te((l) => {
      var S = I(), z = I(), A = V(), G = ue() ? "on" : "off", F = `${U()}px`, v = `${J()}px`, N = V() ? {
        "padding-top": `${Z().start * J()}px`,
        "padding-bottom": `${(H().length - Z().end) * J()}px`,
        "min-width": `calc(${Qe()}ch + 64px)`
      } : void 0, Q = M() ? i().inspect : i().input, ee = M() ? i().inspect : i().input;
      return S !== l.e && T(g, "data-status", l.e = S), z !== l.t && T(y, "data-status", l.t = z), A !== l.a && T(W, "data-virtual", l.a = A), G !== l.o && T(W, "data-wrap", l.o = G), F !== l.i && Ae(W, "--wls-font-size", l.i = F), v !== l.n && Ae(W, "--wls-line-height", l.n = v), l.s = ft($e, N, l.s), Q !== l.h && T(Y, "aria-label", l.h = Q), ee !== l.r && T(Y, "placeholder", l.r = ee), l;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0,
      r: void 0
    }), te(() => Y.value = q()), n;
  })();
}
const en = {
  id: Xe,
  apiVersion: 1,
  activate(a) {
    a.log.info("activating wls-repl viewer"), Re({
      rpc: a.rpc,
      events: a.events,
      log: a.log,
      settings: a.settings
    });
    const e = a.fileViewers.register({
      id: "wls-repl",
      component: Qt
    });
    return () => {
      e.dispose(), Re({});
    };
  }
};
pt(["input", "keydown", "click"]);
export {
  Qt as WlsViewer,
  en as default,
  Xt as prettyDefinition,
  Yt as stripNamePrefix
};
