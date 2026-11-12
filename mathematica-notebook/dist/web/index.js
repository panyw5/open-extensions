const d = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js/web"];
if (!d) throw new Error("OpenCode host module is unavailable: solid-js/web");
d.Aliases;
d.Assets;
d.ChildProperties;
d.DOMElements;
d.DelegatedEvents;
const zt = d.Dynamic;
d.ErrorBoundary;
d.For;
d.Hydration;
d.HydrationScript;
d.Index;
d.Match;
d.NoHydration;
d.Portal;
d.Properties;
d.RequestContext;
d.SVGElements;
d.SVGNamespace;
d.Show;
d.Suspense;
d.SuspenseList;
d.Switch;
const At = d.addEventListener;
d.assign;
d.classList;
d.className;
d.clearDelegatedEvents;
const _ = d.createComponent;
d.createDynamic;
const fn = d.delegateEvents;
d.dynamicProperty;
const Q = d.effect;
d.escape;
d.generateHydrationScript;
d.getAssets;
d.getHydrationKey;
d.getNextElement;
d.getNextMarker;
d.getNextMatch;
d.getOwner;
d.getPropAlias;
d.getRequestEvent;
d.hydrate;
d.innerHTML;
const h = d.insert;
d.isDev;
d.isServer;
const st = d.memo, gn = d.mergeProps;
d.render;
d.renderToStream;
d.renderToString;
d.renderToStringAsync;
d.resolveSSRNode;
d.runHydrationEvents;
const J = d.setAttribute;
d.setAttributeNS;
d.setBoolAttribute;
d.setProperty;
const Ge = d.setStyleProperty;
d.spread;
d.ssr;
d.ssrAttribute;
d.ssrClassList;
d.ssrElement;
d.ssrHydrationKey;
d.ssrSpread;
d.ssrStyle;
d.style;
const E = d.template;
d.untrack;
const pe = d.use;
d.useAssets;
const x = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js"];
if (!x) throw new Error("OpenCode host module is unavailable: solid-js");
x.$DEVCOMP;
x.$PROXY;
x.$TRACK;
x.DEV;
x.ErrorBoundary;
const ge = x.For;
x.Index;
x.Match;
const G = x.Show;
x.Suspense;
x.SuspenseList;
x.Switch;
const hn = x.batch;
x.cancelCallback;
x.catchError;
x.children;
x.createComponent;
const mn = x.createComputed;
x.createContext;
x.createDeferred;
const Me = x.createEffect, Z = x.createMemo;
x.createReaction;
x.createRenderEffect;
x.createResource;
x.createRoot;
x.createSelector;
const q = x.createSignal;
x.createUniqueId;
x.enableExternalSource;
x.enableHydration;
x.enableScheduling;
x.equalFn;
x.from;
x.getListener;
x.getOwner;
x.indexArray;
x.lazy;
x.mapArray;
const Nt = x.mergeProps;
x.observable;
const xt = x.on, he = x.onCleanup;
x.onError;
const Ae = x.onMount;
x.requestCallback;
x.resetErrorBoundaries;
x.runWithOwner;
x.sharedConfig;
x.splitProps;
x.startTransition;
const Je = x.untrack;
x.useContext;
x.useTransition;
const Ne = null, {
  min: _e,
  max: le,
  abs: kt,
  floor: bn
} = Math, Pt = (e, t, r) => _e(r, le(t, e)), Mt = (e) => [...e].sort((t, r) => t - r), vn = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
}, ot = () => {
  let e;
  return [new Promise((r) => {
    e = r;
  }), e];
}, qt = (e) => {
  let t;
  return () => (e && (t = e(), e = void 0), t);
}, Ee = -1, ze = (e, t, r) => {
  const n = r ? "unshift" : "push";
  for (let i = 0; i < t; i++)
    e[n](Ee);
  return e;
}, Ft = (e, t) => {
  const r = e._sizes[t];
  return r === Ee ? e._defaultItemSize : r;
}, Sn = (e, t, r) => {
  const n = e._sizes[t] === Ee;
  return e._sizes[t] = r, e._computedOffsetIndex = _e(t, e._computedOffsetIndex), n;
}, je = (e, t) => {
  if (!e._length) return 0;
  if (e._computedOffsetIndex >= t)
    return e._offsets[t];
  e._computedOffsetIndex < 0 && (e._offsets[0] = 0, e._computedOffsetIndex = 0);
  let r = e._computedOffsetIndex, n = e._offsets[r];
  for (; r < t; )
    n += Ft(e, r), e._offsets[++r] = n;
  return e._computedOffsetIndex = t, n;
}, we = (e, t, r = 0, n = e._length - 1) => {
  let i = r;
  for (; r <= n; ) {
    const s = bn((r + n) / 2);
    je(e, s) <= t ? (i = s, r = s + 1) : n = s - 1;
  }
  return Pt(i, 0, e._length - 1);
}, $n = (e, t, r, n) => {
  if (n = _e(n, e._length - 1), je(e, n) <= t) {
    const i = we(e, r, n);
    return [we(e, t, n, i), i];
  } else {
    const i = we(e, t, void 0, n);
    return [i, we(e, r, i)];
  }
}, pn = (e, t) => {
  let r = 0;
  const n = [];
  e._sizes.forEach((k, a) => {
    k !== Ee && (n.push(k), a < t && r++);
  }), e._computedOffsetIndex = -1;
  const i = Mt(n), s = i.length, u = s / 2 | 0, o = s % 2 === 0 ? (i[u - 1] + i[u]) / 2 : i[u], f = e._defaultItemSize;
  return ((e._defaultItemSize = o) - f) * le(t - r, 0);
}, _n = (e, t, r) => ({
  _defaultItemSize: t,
  _sizes: r ? (
    // https://github.com/inokawa/virtua/issues/441
    ze(r.slice(0, _e(e, r.length)), le(0, e - r.length))
  ) : ze([], e),
  _length: e,
  _computedOffsetIndex: -1,
  _offsets: ze([], e + 1)
}), xn = (e) => [e._sizes.slice(), e._defaultItemSize], wt = (e, t, r) => {
  const n = t - e._length;
  return e._computedOffsetIndex = r ? (
    // Discard cache for now
    -1
  ) : _e(t - 1, e._computedOffsetIndex), e._length = t, n > 0 ? (ze(e._offsets, n), ze(e._sizes, n, r), e._defaultItemSize * n) : (e._offsets.splice(n), (r ? e._sizes.splice(0, -n) : e._sizes.splice(n)).reduce((i, s) => i - (s === Ee ? e._defaultItemSize : s), 0));
}, kn = (e) => e.documentElement, wn = (e) => e.ownerDocument, En = (e) => e.defaultView, Vt = /* @__PURE__ */ qt(() => /iP(hone|od|ad)/.test(navigator.userAgent) ? !0 : navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0), yn = /* @__PURE__ */ qt(() => "scrollBehavior" in kn(document).style), Cn = 2147483647, Re = 0, Qe = 1, Et = 2, Oe = 0, et = 1, tt = 2, lt = 1, Bt = 2, at = 3, Ht = 4, Ut = 5, Gt = 6, ct = 7, Wt = 8, ve = 1, ut = 2, Jt = 4, jt = 8, Tn = (e) => le(e.$getTotalSize(), e.$getViewportSize()), Ln = (e, t = 40, r = 0, n, i = !1) => {
  let s = !!r, u = 1, o = 0, f = 0, k = 0, a = 0, b = 0, I = 0, T = Re, R = Oe, p = Ne, g = [0, s ? le(r - 1, 0) : -1], m = 0, l = !1;
  const S = _n(e, n ? n[1] : t, n && n[0]), w = /* @__PURE__ */ new Set(), L = () => k - f, O = () => L() + b + a, B = (P, D) => $n(S, P, D, g[0]), H = () => je(S, S._length), ee = (P, D) => {
    const M = je(S, P) - b;
    return D ? H() - M - j(P) : M;
  }, j = (P) => Ft(S, P), Se = (P, D = Ee) => S._sizes[P] === D, ye = (P) => {
    P && (// In iOS WebKit browsers, updating scroll position will stop scrolling so it have to be deferred during scrolling.
    Vt() && T !== Re || // Before imperative smooth scrolling, we measure all items which may be visible during scrolling.
    // However, especially in Firefox, there are rare cases where items resize while scrolling, which can stop smooth scrolling.
    p && R === et ? b += P : a += P);
  };
  return {
    $dispose: () => {
      w.clear();
    },
    $getStateVersion: () => u,
    $getCacheSnapshot: () => xn(S),
    $getRange: (P = 200) => {
      if (!l || s)
        return g;
      let D, M;
      if (I)
        [D, M] = g;
      else {
        let te = le(0, O()), U = te + o;
        i || (P = le(0, P), T !== Qe && (te -= P), T !== Et && (U += P)), [D, M] = g = B(le(0, te), le(0, U)), p && (D = _e(D, p[0]), M = le(M, p[1]));
      }
      return [le(D, 0), _e(M, S._length - 1)];
    },
    $findItemIndex: (P) => we(S, P - f),
    $isUnmeasuredItem: Se,
    $getItemOffset: ee,
    $getItemSize: j,
    $getItemsLength: () => S._length,
    $getScrollOffset: () => k,
    $isScrolling: () => T !== Re,
    $getViewportSize: () => o,
    $getStartSpacerSize: () => f,
    $getTotalSize: H,
    _flushJump: () => (I = a, a = 0, [I, R === tt]),
    $subscribe: (P, D) => {
      const M = [P, D];
      return w.add(M), () => {
        w.delete(M);
      };
    },
    $update: (P, D) => {
      let M, te, U = 0;
      switch (P) {
        case lt: {
          if (D === k && R === Oe)
            break;
          const re = I;
          I = 0;
          const W = D - k, z = kt(W);
          !(re && z < kt(re) + 1) && // Ignore until manual scrolling
          R === Oe && (T = W < 0 ? Et : Qe), s && (s = !1), k = D, U = Jt;
          const K = L();
          K >= -o && K <= H() && (U += ve, te = z > o);
          break;
        }
        case Bt: {
          U = jt, T !== Re && (M = !0, U += ve), T = Re, R = Oe, p = Ne;
          break;
        }
        case at: {
          const re = D.filter(([W, z]) => !Se(W, z));
          if (!re.length)
            break;
          ye(re.reduce((W, [z, se]) => {
            let K;
            if (
              // Keep distance from end during shifting
              R === tt
            )
              K = !0;
            else if (p && R === et)
              K = z < p[0];
            else {
              const ue = L(), me = ee(z), Ce = j(z);
              K = T !== Qe && R === Oe ? (
                // https://github.com/inokawa/virtua/issues/385
                // https://github.com/inokawa/virtua/discussions/865
                me + Ce < ue
              ) : (
                // https://github.com/inokawa/virtua/pull/868
                me < ue && me + Ce < ue + o
              );
            }
            return K && (W += se - j(z)), W;
          }, 0));
          for (const [W, z] of re) {
            const se = j(W), K = Sn(S, W, z);
            i && (m += K ? z : z - se);
          }
          i && o && // If the total size is lower than the viewport, the item may be a empty state
          m > o && (ye(pn(S, we(S, O()))), i = !1), U = ve + ut, te = !0;
          break;
        }
        case Ht: {
          o !== D && (o || (l = te = !0), o = D, U = ve + ut);
          break;
        }
        case Ut: {
          D[1] ? (ye(wt(S, D[0], !0)), R = tt, U = ve) : (wt(S, D[0]), U = ve);
          break;
        }
        case Gt: {
          f = D;
          break;
        }
        case ct: {
          R = et;
          break;
        }
        case Wt: {
          p = B(D, D + o), U = ve;
          break;
        }
      }
      U && (u = (u & Cn) + 1, M && b && (a += b, b = 0), w.forEach(([re, W]) => {
        U & re && W(te);
      }));
    }
  };
}, dt = setTimeout, In = (e, t) => {
  let r;
  const n = () => {
    r != Ne && clearTimeout(r);
  }, i = () => {
    n(), r = dt(() => {
      r = Ne, e();
    }, t);
  };
  return i._cancel = n, i;
}, nt = (e, t) => t ? -e : e, Rn = (e, t, r, n, i, s) => {
  const u = Date.now;
  let o = 0, f = !1, k = !1, a = !1, b = !1;
  const I = In(() => {
    if (f || k) {
      f = !1, I();
      return;
    }
    a = !1, e.$update(Bt);
  }, 150), T = () => {
    o = u(), a && (b = !0), e.$update(lt, n()), I();
  }, R = (m) => {
    if (f || // Scroll start should be detected with scroll event
    !e.$isScrolling() || // Probably a pinch-to-zoom gesture
    m.ctrlKey)
      return;
    const l = u() - o;
    // Check if wheel event occurs some time after scrolling
    150 > l && 50 < l && // Get delta before checking deltaMode for firefox behavior
    // https://github.com/w3c/uievents/issues/181#issuecomment-392648065
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1392460#c34
    (r ? m.deltaX : m.deltaY) && (f = !0);
  }, p = () => {
    k = !0, a = b = !1;
  }, g = () => {
    k = !1, Vt() && (a = !0);
  };
  return t.addEventListener("scroll", T), t.addEventListener("wheel", R, {
    passive: !0
  }), t.addEventListener("touchstart", p, {
    passive: !0
  }), t.addEventListener("touchend", g, {
    passive: !0
  }), {
    _dispose: () => {
      t.removeEventListener("scroll", T), t.removeEventListener("wheel", R), t.removeEventListener("touchstart", p), t.removeEventListener("touchend", g), I._cancel();
    },
    _fixScrollJump: () => {
      const [m, l] = e._flushJump();
      m && (i(m, l, b), b = !1, l && e.$getViewportSize() > e.$getTotalSize() && e.$update(lt, n()));
    }
  };
}, On = (e, t, r) => {
  let n;
  return [async (i, s) => {
    if (!await t())
      return;
    n && n();
    const u = () => {
      const [o, f] = ot();
      return n = () => {
        f(!1);
      }, e.$getViewportSize() && dt(n, 150), [o, e.$subscribe(ut, () => {
        f(!0);
      })];
    };
    if (s && yn())
      e.$update(Wt, i()), vn(async () => {
        for (; ; ) {
          let o = !0;
          for (let [a, b] = e.$getRange(); a <= b; a++)
            if (e.$isUnmeasuredItem(a)) {
              o = !1;
              break;
            }
          if (o)
            break;
          const [f, k] = u();
          try {
            if (!await f)
              return;
          } finally {
            k();
          }
        }
        e.$update(ct), r(i(), s);
      });
    else
      for (; ; ) {
        const [o, f] = u();
        try {
          if (e.$update(ct), r(i()), !await o)
            return;
        } finally {
          f();
        }
      }
  }, () => {
    n && n();
  }];
}, Dn = (e, t) => {
  let r, n, i = ot(), s = !1;
  const u = t ? "scrollLeft" : "scrollTop", o = t ? "overflowX" : "overflowY", [f, k] = On(e, () => i[0], (a, b) => {
    a = nt(a, s), b ? r.scrollTo({
      [t ? "left" : "top"]: a,
      behavior: "smooth"
    }) : r[u] = a;
  });
  return {
    $observe(a, b) {
      r = b, t && (s = getComputedStyle(b).direction === "rtl"), n = Rn(e, b, t, () => nt(b[u], s), (I, T, R) => {
        if (R) {
          const p = b.style, g = p[o];
          p[o] = "hidden", dt(() => {
            p[o] = g;
          });
        }
        b[u] = nt(e.$getScrollOffset() + I, s), T && k();
      }), i[1](!0);
    },
    $dispose() {
      n && n._dispose(), i[1](!1), i = ot();
    },
    $isNegative: () => s,
    $scrollTo(a) {
      f(() => a);
    },
    $scrollBy(a) {
      a += e.$getScrollOffset(), f(() => a);
    },
    $scrollToIndex(a, {
      align: b,
      smooth: I,
      offset: T = 0
    } = {}) {
      if (a = Pt(a, 0, e.$getItemsLength() - 1), b === "nearest") {
        const R = e.$getItemOffset(a), p = e.$getScrollOffset();
        if (R < p)
          b = "start";
        else if (R + e.$getItemSize(a) > p + e.$getViewportSize())
          b = "end";
        else
          return;
      }
      f(() => T + e.$getStartSpacerSize() + e.$getItemOffset(a) + (b === "end" ? e.$getItemSize(a) - e.$getViewportSize() : b === "center" ? (e.$getItemSize(a) - e.$getViewportSize()) / 2 : 0), I);
    },
    $fixScrollJump: () => {
      n && n._fixScrollJump();
    }
  };
}, zn = (e) => {
  let t;
  return {
    _observe(r) {
      (t || // https://bugs.chromium.org/p/chromium/issues/detail?id=1491739
      (t = new (En(wn(r))).ResizeObserver(e))).observe(r);
    },
    _unobserve(r) {
      t.unobserve(r);
    },
    _dispose() {
      t && t.disconnect();
    }
  };
}, An = (e, t) => {
  let r;
  const n = t ? "width" : "height", i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new Map(), u = zn((o) => {
    const f = [];
    for (const {
      target: k,
      contentRect: a
    } of o)
      if (k.offsetParent)
        if (k === r)
          e.$update(Ht, a[n]);
        else {
          const b = i.get(k);
          b != Ne && f.push([b, a[n]]);
        }
    f.length && e.$update(at, f);
  });
  return {
    $observeRoot(o) {
      u._observe(r = o);
    },
    $observeItem: (o, f) => (i.set(o, f), s.set(f, o), u._observe(o), () => {
      i.delete(o), s.get(f) === o && s.delete(f), u._unobserve(o);
    }),
    $measureItems: () => {
      const o = [];
      s.forEach((f, k) => {
        f.offsetParent && o.push([k, f.getBoundingClientRect()[n]]);
      }), o.length && e.$update(at, o);
    },
    $dispose: u._dispose
  };
}, Nn = (e) => {
  let t;
  e = Nt({
    _as: "div"
  }, e), Me(() => {
    t && he(e._resizer(t, e._index));
  });
  const r = Z(() => {
    const n = e._isHorizontal, i = {
      contain: "layout style",
      position: "absolute",
      [n ? "height" : "width"]: "100%",
      [n ? "top" : "left"]: "0px",
      [n ? "left" : "top"]: e._offset + "px",
      visibility: e._hide ? "hidden" : void 0
    };
    return n && (i.display = "inline-flex"), i;
  });
  return _(zt, {
    get component() {
      return e._as;
    },
    get index() {
      return e._index;
    },
    ref(n) {
      var i = t;
      typeof i == "function" ? i(n) : t = n;
    },
    get style() {
      return r();
    },
    get children() {
      return e._children;
    }
  });
}, Pn = (e, t) => e[0] === t[0] && e[1] === t[1], Mn = (e) => {
  let t;
  const {
    itemSize: r,
    horizontal: n = !1,
    cache: i
  } = e;
  e = Nt({
    as: "div"
  }, e);
  const s = Ln(e.data.length, r, void 0, i, !r), u = An(s, n), o = Dn(s, n), [f, k] = q(s.$getStateVersion());
  s.$subscribe(ve, () => {
    k(s.$getStateVersion());
  }), s.$subscribe(Jt, () => {
    e.onScroll?.(s.$getScrollOffset());
  }), s.$subscribe(jt, () => {
    e.onScrollEnd?.();
  });
  const a = Z((g) => {
    f();
    const m = s.$getRange(e.bufferSize);
    return m[0] = Math.max(0, m[0]), m[1] = Math.min(e.data.length - 1, m[1]), g && Pn(g, m) ? g : m;
  }), b = Z(() => f() && s.$isScrolling()), I = Z(() => f() && s.$getTotalSize()), T = Z(() => f() && o.$isNegative());
  Ae(() => {
    e.ref && e.ref({
      get cache() {
        return s.$getCacheSnapshot();
      },
      get scrollOffset() {
        return s.$getScrollOffset();
      },
      get scrollSize() {
        return Tn(s);
      },
      get viewportSize() {
        return s.$getViewportSize();
      },
      findItemIndex: s.$findItemIndex,
      getItemOffset: s.$getItemOffset,
      getItemSize: s.$getItemSize,
      measure: u.$measureItems,
      scrollToIndex: o.$scrollToIndex,
      scrollTo: o.$scrollTo,
      scrollBy: o.$scrollBy
    });
    const g = t, m = e.scrollRef || g.parentElement;
    u.$observeRoot(m), o.$observe(g, m), he(() => {
      e.ref && e.ref(), s.$dispose(), u.$dispose(), o.$dispose();
    });
  }), mn(xt(() => e.startMargin || 0, (g) => {
    g !== s.$getStartSpacerSize() && s.$update(Gt, g);
  })), Me(xt(f, () => {
    o.$fixScrollJump();
  }));
  const R = Z(() => {
    const g = e.data.length;
    Je(() => {
      g !== s.$getItemsLength() && s.$update(Ut, [g, e.shift]);
    });
    const m = [], l = [];
    if (e.keepMounted) {
      const S = new Set(e.keepMounted);
      S.forEach((w) => {
        (w < 0 || w >= g) && S.delete(w);
      });
      for (let [w, L] = a(); w <= L; w++)
        S.add(w);
      Mt([...S]).forEach((w) => {
        m.push(e.data[w]), l.push(w);
      });
    } else
      for (let [S, w] = a(); S <= w; S++)
        m.push(e.data[S]), l.push(S);
    return {
      _items: m,
      _indexes: l
    };
  }), p = (g, m) => {
    const l = Z(() => (f(), s.$getItemOffset(m(), T()))), S = Z(() => (f(), s.$isUnmeasuredItem(m()))), w = Z(() => Je(() => e.children(g, m)));
    return _(Nn, {
      get _as() {
        return e.item;
      },
      get _index() {
        return m();
      },
      get _resizer() {
        return u.$observeItem;
      },
      get _offset() {
        return l();
      },
      get _hide() {
        return S();
      },
      get _children() {
        return w();
      },
      _isHorizontal: n
    });
  };
  return _(zt, {
    get component() {
      return e.as;
    },
    ref(g) {
      var m = t;
      typeof m == "function" ? m(g) : t = g;
    },
    get style() {
      return {
        contain: "size style",
        // https://github.com/inokawa/virtua/pull/775 https://github.com/inokawa/virtua/issues/800
        "overflow-anchor": "none",
        // opt out browser's scroll anchoring because it will conflict to scroll anchoring of virtualizer
        flex: "none",
        // flex style can break layout
        position: "relative",
        width: n ? I() + "px" : "100%",
        height: n ? "100%" : I() + "px",
        "pointer-events": b() ? "none" : void 0
      };
    },
    get children() {
      return _(ge, {
        get each() {
          return R()._items;
        },
        children: (g, m) => {
          const l = Z(() => R()._indexes[m()]);
          return p(g, l);
        }
      });
    }
  });
};
const qn = 4e3, Fn = 64 * 1024;
function Kt(e) {
  return e.length <= Fn;
}
const yt = /* @__PURE__ */ new Set([
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
]), Ct = /[\p{L}$][\p{L}\p{N}$`]*|`[\p{L}\p{N}$`]+/uy, Tt = /(?:[0-9]+\^\^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]*)?|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+))(?:`{1,2}(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)?)?(?:\*\^[+-]?[0-9]+)?/y, Lt = /\\\[[a-zA-Z][a-zA-Z0-9]*\]/y, Vn = /* @__PURE__ */ new Set([
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
function Bn(e) {
  return {
    offset: 0,
    commentDepth: 0,
    string: !1,
    escaped: !1
  };
}
function Hn(e, t, r, n = e.length) {
  const i = Math.min(e.length, n);
  for (; t.offset < i; ) {
    const s = t.offset;
    if (t.commentDepth || e.startsWith("(*", s)) {
      for (t.commentDepth || (t.commentDepth = 1, t.offset += 2); t.offset < i && t.commentDepth; )
        e.startsWith("(*", t.offset) ? (t.commentDepth++, t.offset += 2) : e.startsWith("*)", t.offset) ? (t.commentDepth--, t.offset += 2) : t.offset++;
      r?.("comment", s, t.offset);
      continue;
    }
    if (t.string || e[s] === '"') {
      for (t.string || (t.string = !0, t.offset++); t.offset < i && t.string; ) {
        const a = e[t.offset++];
        t.escaped ? t.escaped = !1 : a === "\\" ? t.escaped = !0 : a === '"' && (t.string = !1);
      }
      r?.("string", s, t.offset);
      continue;
    }
    Lt.lastIndex = s;
    const u = Lt.exec(e)?.[0];
    if (u) {
      t.offset += u.length;
      const a = u.slice(2, -1);
      r?.(Vn.has(a) ? "operator" : yt.has(a) ? "constant" : "symbol", s, t.offset);
      continue;
    }
    Tt.lastIndex = s;
    const o = Tt.exec(e)?.[0];
    if (o) {
      t.offset += o.length, r?.("number", s, t.offset);
      continue;
    }
    Ct.lastIndex = s;
    const f = Ct.exec(e)?.[0];
    if (f) {
      t.offset += f.length;
      const a = f.split("`").at(-1) ?? f;
      let b = t.offset;
      for (; b < e.length && /\s/.test(e[b]); ) b++;
      r?.(
        yt.has(a) || a.startsWith("$") ? "constant" : e[b] === "[" || /^[A-Z]/.test(a) ? "function" : "symbol",
        s,
        t.offset
      );
      continue;
    }
    const k = e[t.offset++];
    if (k === "_" || k === "#" || k === "%") {
      for (; e[t.offset] === k; ) t.offset++;
      if (k === "#" || k === "%") for (; /[0-9]/.test(e[t.offset] ?? ""); ) t.offset++;
      r?.("pattern", s, t.offset);
      continue;
    }
    r?.(
      "[]{}(),;".includes(k) ? "punctuation" : "+-*/^=<>!:?@&|~.\\".includes(k) ? "operator" : "plain",
      s,
      t.offset
    );
  }
  return t;
}
function Xt(e) {
  if (!Kt(e)) return [{ kind: "plain", text: e }];
  const t = [], r = Bn();
  let n = -1;
  return Hn(e, r, (i, s, u) => {
    if (n >= 0) return;
    if (t.length >= qn) {
      n = s;
      return;
    }
    const o = e.slice(s, u), f = t.at(-1);
    i === "plain" && f?.kind === i ? f.text += o : t.push({ kind: i, text: o });
  }), n >= 0 && t.push({ kind: "plain", text: e.slice(n) }), t;
}
const Un = 1e5, It = 600, Rt = 400;
function Zt(e) {
  return e.length > Un;
}
function Gn(e) {
  return e.length > It ? `${e.slice(0, It)}…` : e;
}
function Wn(e) {
  return {
    path: e.path,
    revision: e.revision,
    // Project fields explicitly, even if an older server ignores view: true.
    cells: e.cells.map(({ index: t, style: r, text: n, editable: i, runnable: s, characters: u, deferred: o }) => ({
      index: t,
      style: r,
      text: n,
      editable: i,
      runnable: s,
      ...u === void 0 ? {} : { characters: u },
      ...o === void 0 ? {} : { deferred: o }
    }))
  };
}
function Jn(e, t) {
  return t[e.index] ?? e.text;
}
function jn(e) {
  return Object.entries(e).map(([t, r]) => ({ index: Number(t), text: r }));
}
function Kn(e, t, r) {
  const n = /* @__PURE__ */ new Set([t, r]);
  n.delete(void 0);
  const i = [];
  for (let s = 0; s < e.length && i.length < n.size; s++)
    n.has(e[s].index) && i.push(s);
  return i;
}
function Xn(e, t) {
  return Math.max(
    0,
    t.getBoundingClientRect().top - e.getBoundingClientRect().top + e.scrollTop - e.clientTop
  );
}
function Zn() {
  let e = 0, t;
  const r = () => {
    e++, t?.abort(), t = void 0;
  };
  return {
    invalidate: r,
    begin() {
      r();
      const n = e, i = new AbortController();
      return t = i, {
        signal: i.signal,
        current: () => n === e && !i.signal.aborted,
        finish: () => {
          t === i && (t = void 0);
        }
      };
    }
  };
}
function Yn(e, t = {
  request: (r) => requestAnimationFrame(r),
  cancel: (r) => cancelAnimationFrame(r)
}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap();
  let i, s = !1;
  const u = () => {
    i = void 0;
    const o = [...r.values()].filter(({ field: a }) => a.isConnected);
    r.clear();
    for (const { field: a } of o) a.style.height = "auto";
    const f = o.map(({ field: a }) => Math.min(600, a.scrollHeight + 2));
    let k = 0;
    for (let a = 0; a < o.length; a++) {
      const { field: b, syncScroll: I } = o[a], T = f[a];
      b.style.height = `${T}px`, n.get(b) !== T && k++, n.set(b, T);
    }
    for (const { syncScroll: a } of o) a();
    k && e(`notebook editor layout cells=${o.length} changed=${k}`);
  };
  return {
    schedule(o) {
      s || (r.set(o.field, o), i === void 0 && (i = t.request(u)));
    },
    remove(o) {
      r.delete(o), n.delete(o), !r.size && i !== void 0 && (t.cancel(i), i = void 0);
    },
    dispose() {
      s = !0, i !== void 0 && t.cancel(i), i = void 0, r.clear();
    }
  };
}
var Qn = /* @__PURE__ */ E("<mtext>", !1, !1, !0), er = /* @__PURE__ */ E("<mtext class=oc-nb-box-unknown>[<!>]", !1, !1, !0), tr = /* @__PURE__ */ E("<mfrac>", !1, !1, !0), nr = /* @__PURE__ */ E("<msup>", !1, !1, !0), rr = /* @__PURE__ */ E("<msub>", !1, !1, !0), ir = /* @__PURE__ */ E("<msubsup>", !1, !1, !0), sr = /* @__PURE__ */ E("<msqrt>", !1, !1, !0), or = /* @__PURE__ */ E("<mroot>", !1, !1, !0), lr = /* @__PURE__ */ E("<mover>", !1, !1, !0), ar = /* @__PURE__ */ E("<munder>", !1, !1, !0), cr = /* @__PURE__ */ E("<munderover>", !1, !1, !0), ur = /* @__PURE__ */ E("<mtable columnalign=left>", !1, !1, !0), dr = /* @__PURE__ */ E("<mtr>", !1, !1, !0), fr = /* @__PURE__ */ E("<mtd>", !1, !1, !0), gr = /* @__PURE__ */ E("<mtable columnalign=left rowspacing=0.15em>", !1, !1, !0), hr = /* @__PURE__ */ E("<mtr><mtd>", !1, !1, !0), mr = /* @__PURE__ */ E("<mstyle>", !1, !1, !0), br = /* @__PURE__ */ E("<mrow>", !1, !1, !0), vr = /* @__PURE__ */ E("<div class=oc-nb-rich><details class=oc-nb-opaque><summary>Preserved box source"), rt = /* @__PURE__ */ E("<p class=oc-nb-muted>"), Sr = /* @__PURE__ */ E("<div class=oc-nb-math-scroll><math xmlns=http://www.w3.org/1998/Math/MathML display=block>"), $r = /* @__PURE__ */ E("<pre>"), pr = /* @__PURE__ */ E("<p class=oc-nb-muted>Source excerpt (<!> of <!> characters). Use Source for the complete notebook.");
function ke(e) {
  const t = () => e.box.children ?? [], r = (n) => _(ke, {
    get box() {
      return t()[n] ?? {
        kind: "unknown",
        text: "Missing argument"
      };
    }
  });
  switch (e.box.kind) {
    case "text":
      return (() => {
        var n = Qn();
        return h(n, () => e.box.text), n;
      })();
    case "unknown":
      return (() => {
        var n = er(), i = n.firstChild, s = i.nextSibling;
        return s.nextSibling, h(n, () => e.box.text, s), n;
      })();
    case "frac":
      return (() => {
        var n = tr();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "sup":
      return (() => {
        var n = nr();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "sub":
      return (() => {
        var n = rr();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "subsup":
      return (() => {
        var n = ir();
        return h(n, () => r(0), null), h(n, () => r(1), null), h(n, () => r(2), null), n;
      })();
    case "sqrt":
      return (() => {
        var n = sr();
        return h(n, () => r(0)), n;
      })();
    case "root":
      return (() => {
        var n = or();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "over":
      return (() => {
        var n = lr();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "under":
      return (() => {
        var n = ar();
        return h(n, () => r(0), null), h(n, () => r(1), null), n;
      })();
    case "underover":
      return (() => {
        var n = cr();
        return h(n, () => r(0), null), h(n, () => r(1), null), h(n, () => r(2), null), n;
      })();
    case "grid":
      return (() => {
        var n = ur();
        return h(n, _(ge, {
          get each() {
            return t();
          },
          children: (i) => (() => {
            var s = dr();
            return h(s, _(ge, {
              get each() {
                return i.children ?? [i];
              },
              children: (u) => (() => {
                var o = fr();
                return h(o, _(ke, {
                  box: u
                })), o;
              })()
            })), s;
          })()
        })), n;
      })();
    case "lines":
      return (() => {
        var n = gr();
        return h(n, _(ge, {
          get each() {
            return t();
          },
          children: (i) => (() => {
            var s = hr(), u = s.firstChild;
            return h(u, _(ke, {
              box: i
            })), s;
          })()
        })), n;
      })();
    case "style":
      return (() => {
        var n = mr();
        return h(n, _(ge, {
          get each() {
            return t();
          },
          children: (i) => _(ke, {
            box: i
          })
        })), Q((i) => {
          var s = e.box.style?.bold ? "bold" : void 0, u = e.box.style?.italic ? "italic" : void 0, o = e.box.style?.size ? `${e.box.style.size}px` : void 0;
          return s !== i.e && Ge(n, "font-weight", i.e = s), u !== i.t && Ge(n, "font-style", i.t = u), o !== i.a && Ge(n, "font-size", i.a = o), i;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        }), n;
      })();
    default:
      return (() => {
        var n = br();
        return h(n, _(ge, {
          get each() {
            return t();
          },
          children: (i) => _(ke, {
            box: i
          })
        })), n;
      })();
  }
}
function _r(e) {
  const [t, r] = q(), [n, i] = q(""), [s, u] = q(), [o, f] = q(!1), [k, a] = q(!1);
  let b = !0, I = 0, T;
  Me(() => {
    e.revision, I++, T?.abort(), a(!1), r(void 0), i(""), u(void 0), f(!1);
    const p = e.scheduler.request(e.index, (g) => {
      g instanceof Error ? i(g.message) : r(g);
    });
    he(p);
  }), Ae(() => {
    he(() => {
      b = !1, I++, T?.abort();
    });
  });
  const R = async () => {
    if (k()) return;
    const p = I;
    T = new AbortController(), a(!0);
    try {
      const g = await e.source(T.signal);
      b && p === I && u(g);
    } catch (g) {
      b && p === I && i(String(g));
    } finally {
      b && p === I && a(!1);
    }
  };
  return (() => {
    var p = vr(), g = p.firstChild;
    return g.firstChild, h(p, _(G, {
      get when() {
        return t();
      },
      get fallback() {
        return (() => {
          var m = rt();
          return h(m, () => n() || "Loading formula..."), m;
        })();
      },
      children: (m) => [(() => {
        var l = Sr(), S = l.firstChild;
        return h(S, _(ke, {
          get box() {
            return m().box;
          }
        })), l;
      })(), _(G, {
        get when() {
          return m().status !== "complete";
        },
        get children() {
          var l = rt();
          return h(l, () => m().reasons.join("; ")), l;
        }
      })]
    }), g), g.addEventListener("toggle", (m) => {
      const l = m.currentTarget.open;
      f(l), l && !s() && R(), l || (T?.abort(), u(void 0));
    }), h(g, _(G, {
      get when() {
        return o();
      },
      get children() {
        return _(G, {
          get when() {
            return s();
          },
          get fallback() {
            return (() => {
              var m = rt();
              return h(m, () => n() || "Loading source..."), m;
            })();
          },
          children: (m) => [(() => {
            var l = $r();
            return h(l, () => m().text), l;
          })(), _(G, {
            get when() {
              return m().total > m().text.length;
            },
            get children() {
              var l = pr(), S = l.firstChild, w = S.nextSibling, L = w.nextSibling, O = L.nextSibling;
              return O.nextSibling, h(l, () => m().text.length, w), h(l, () => m().total, O), l;
            }
          })]
        });
      }
    }), null), Q((m) => {
      var l = t()?.status ?? "loading", S = o();
      return l !== m.e && J(p, "data-preview-status", m.e = l), S !== m.t && (g.open = m.t = S), m;
    }, {
      e: void 0,
      t: void 0
    }), p;
  })();
}
const Pe = {
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
for (const [e, t] of [
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
].entries())
  Pe[t] = String.fromCodePoint(945 + e), t !== "FinalSigma" && (Pe[`Capital${t}`] = String.fromCodePoint(913 + e));
Pe.Epsilon = "ϵ";
function ft(e) {
  return e.replace(/\\\[([A-Za-z]+)\]/g, (t, r) => {
    if (Pe[r]) return Pe[r];
    const n = /^(Script|DoubleStruck)(Capital)?([A-Z])$/.exec(r);
    if (!n) return t;
    const i = n[1] === "Script" ? n[2] ? 119964 : 119990 : n[2] ? 120120 : 120146;
    return String.fromCodePoint(i + n[3].charCodeAt(0) - 65);
  });
}
const Ot = /* @__PURE__ */ new Set([
  "===",
  "=!=",
  "<->",
  ">>>",
  "//=",
  "//.",
  "//@",
  "...",
  "==",
  "!=",
  "<=",
  ">=",
  "->",
  ":>",
  ":=",
  "/;",
  "/:",
  "//",
  "/@",
  "@@",
  "@*",
  "&&",
  "||",
  "..",
  "<<",
  ">>",
  "=.",
  "+=",
  "-=",
  "*=",
  "/=",
  "^=",
  ";;",
  "**",
  "--",
  "++",
  "~~",
  "??",
  "::",
  "[[",
  "<|",
  "|>",
  "!!",
  "^^"
]), xr = {
  "<=": "≤",
  ">=": "≥",
  "!=": "≠",
  "===": "≡",
  "=!=": "≢",
  "->": "→",
  ":>": "⧴",
  "<->": "↔",
  "*": "×",
  "&&": "∧",
  "||": "∨",
  "::": "∶∶"
}, kr = {
  "(": ")",
  "{": "}",
  "[": "]",
  "[[": "]]",
  "<|": "|>"
}, We = /* @__PURE__ */ new Set(["number", "string", "constant", "symbol", "function", "pattern"]), Yt = /* @__PURE__ */ new Set(["(", "{", "[", "[[", "<|"]), wr = (e) => e.kind === "plain" && /^\s+$/.test(e.text), Dt = (e) => wr(e) || e.kind === "comment", Er = (e) => We.has(e.kind) || Yt.has(e.text), yr = /* @__PURE__ */ new Set(["-", "+", "!", "++", "--"]), De = (e) => {
  const t = (i) => i.kind === "tok" && /^\s+$/.test(i.text);
  let r = 0, n = e.length;
  for (; r < n && t(e[r]); ) r++;
  for (; n > r && t(e[n - 1]); ) n--;
  return e.slice(r, n);
};
class Cr {
  constructor(t) {
    this.toks = t;
  }
  i = 0;
  peek() {
    return this.toks[this.i];
  }
  next() {
    return this.toks[this.i++];
  }
  filler(t = this.i) {
    for (; t < this.toks.length && Dt(this.toks[t]); ) t++;
    return t;
  }
  tok(t, r) {
    return { kind: "tok", cls: r ?? t.kind, text: ft(xr[t.text] ?? t.text) };
  }
  // (...) {...} [...] [[...]] 
  // Bracketed group with comma-separated arguments.
  group() {
    const t = this.next(), r = kr[t.text], n = [this.tok(t)], i = [], s = /* @__PURE__ */ new Set([",", r]);
    for (; this.peek(); ) {
      const u = this.peek();
      if (u.text === r || u.text === ",") break;
      const o = this.seq(s);
      i.push(o), n.push(...o);
      const f = this.peek();
      if (!f) break;
      if (f.text === ",") {
        n.push(this.tok(f)), this.next();
        continue;
      }
      f.text === r && (n.push(this.tok(f)), this.next());
      break;
    }
    return { kind: "group", inner: n, args: i };
  }
  // A single primary expression: literal, name, blank, slot or bracketed group.
  atomish() {
    const t = this.peek();
    if (!t) return [];
    if (Yt.has(t.text)) return [this.group()];
    if (We.has(t.kind)) {
      this.next();
      const r = [this.tok(t)];
      if (t.text.startsWith("_")) {
        const n = this.peek();
        n && We.has(n.kind) && r.push(...this.atomish());
      }
      return r;
    }
    return [];
  }
  // atom + postfix (calls, patterns, ', !, &) + optional ^ exponent.
  factor() {
    const t = this.peek();
    if (!t) return [];
    if (yr.has(t.text))
      return this.next(), [this.tok(t), ...this.factor()];
    let r = this.atomish();
    if (!r.length) return [];
    for (; ; ) {
      const n = this.peek();
      if (!n) break;
      if (n.text === "[" || n.text === "[[") {
        const i = this.group(), s = r.length === 1 && r[0].kind === "tok" ? r[0].text : void 0;
        n.text === "[" && s === "Sqrt" && i.args.length === 1 ? r = [{ kind: "sqrt", arg: De(i.args[0]) }] : n.text === "[" && s === "Subscript" && i.args.length === 2 ? r = [{ kind: "sub", base: De(i.args[0]), sub: De(i.args[1]) }] : r = [...r, i];
        continue;
      }
      if (n.kind === "pattern" && n.text.startsWith("_")) {
        this.next();
        const i = [this.tok(n)], s = this.peek();
        s && We.has(s.kind) && i.push(...this.atomish()), r = [...r, ...i];
        continue;
      }
      if (n.kind === "plain" && /^'+$/.test(n.text)) {
        r = [...r, this.tok(n)], this.next();
        continue;
      }
      if (n.text === "!" || n.text === "!!" || n.text === "&") {
        r = [...r, this.tok(n)], this.next();
        continue;
      }
      break;
    }
    return this.peek()?.text === "^" ? (this.next(), [{ kind: "sup", base: r, exp: this.factor() }]) : r;
  }
  // Multiplicative level: / produces a fraction of its immediate operands.
  times() {
    let t = this.factor();
    for (; ; ) {
      const r = this.peek();
      if (!r) break;
      if (r.text === "*" || r.text === "." || r.text === "**") {
        this.next();
        const n = this.factor();
        t = n.length ? [...t, this.tok(r, "operator"), ...n] : [...t, this.tok(r)];
        continue;
      }
      if (r.text === "/") {
        this.next();
        const n = this.factor();
        if (!n.length) {
          t = [...t, this.tok(r)];
          continue;
        }
        t = [{ kind: "frac", num: De(t), den: De(n) }];
        continue;
      }
      if (Dt(r)) {
        const n = this.filler(), i = this.toks[n];
        if (i && Er(i)) {
          const s = this.toks.slice(this.i, n).map((u) => this.tok(u));
          this.i = n, t = [...t, ...s, ...this.factor()];
          continue;
        }
      }
      break;
    }
    return t;
  }
  additive() {
    const t = this.times();
    for (; ; ) {
      const r = this.filler(), n = this.toks[r];
      if (!n || n.text !== "+" && n.text !== "-") break;
      t.push(...this.toks.slice(this.i, r).map((i) => this.tok(i))), this.i = r + 1, t.push(this.tok(n), ...this.times());
    }
    return t;
  }
  // Line/group body: additive expressions joined by any remaining tokens
  // (separators, rules, conditions, stray delimiters) kept verbatim.
  seq(t) {
    const r = [];
    for (; ; ) {
      const n = this.peek();
      if (!n || t.has(n.text)) break;
      r.push(...this.additive());
      const i = this.peek();
      if (!i || t.has(i.text)) break;
      r.push(this.tok(i)), this.next();
    }
    return r;
  }
}
function Tr(e) {
  const t = [], r = (n) => n.text.length === 1 && (n.kind === "operator" || n.kind === "punctuation");
  for (const n of e)
    for (t.push({ kind: n.kind, text: n.text }); ; ) {
      const i = t.length;
      if (i >= 3 && r(t[i - 3]) && r(t[i - 2]) && r(t[i - 1])) {
        const s = t[i - 3].text + t[i - 2].text + t[i - 1].text;
        if (Ot.has(s)) {
          t.splice(i - 3, 3, { kind: "operator", text: s });
          continue;
        }
      }
      if (i >= 2 && r(t[i - 2]) && r(t[i - 1])) {
        const s = t[i - 2].text + t[i - 1].text;
        if (Ot.has(s)) {
          t.splice(i - 2, 2, { kind: "operator", text: s });
          continue;
        }
      }
      break;
    }
  return t;
}
const Lr = /* @__PURE__ */ new Set();
function Ir(e) {
  const t = Tr(Xt(e)), r = [[]];
  for (const n of t) {
    const i = n.text.split(`
`);
    for (const [s, u] of i.entries())
      s && r.push([]), u && r.at(-1).push({ kind: n.kind, text: u });
  }
  return r.map((n) => new Cr(n).seq(Lr));
}
var Rr = /* @__PURE__ */ E("<span class=oc-nb-frac><span class=oc-nb-num></span><span class=oc-nb-den>"), Or = /* @__PURE__ */ E("<span class=oc-nb-exp>"), Dr = /* @__PURE__ */ E("<span class=oc-nb-sub-i>"), zr = /* @__PURE__ */ E("<span class=oc-nb-sqrt>√<span class=oc-nb-rad>"), Ar = /* @__PURE__ */ E("<span>"), Nr = /* @__PURE__ */ E("<div class=oc-nb-pretty aria-hidden=true>"), Pr = /* @__PURE__ */ E("<div class=oc-nb-pl>");
function fe(e) {
  return _(ge, {
    get each() {
      return e.items;
    },
    children: (t) => _(Mr, {
      node: t
    })
  });
}
function Mr(e) {
  switch (e.node.kind) {
    case "frac":
      return (() => {
        var t = Rr(), r = t.firstChild, n = r.nextSibling;
        return h(r, _(fe, {
          get items() {
            return e.node.num;
          }
        })), h(n, _(fe, {
          get items() {
            return e.node.den;
          }
        })), t;
      })();
    case "sup":
      return [_(fe, {
        get items() {
          return e.node.base;
        }
      }), (() => {
        var t = Or();
        return h(t, _(fe, {
          get items() {
            return e.node.exp;
          }
        })), t;
      })()];
    case "sub":
      return [_(fe, {
        get items() {
          return e.node.base;
        }
      }), (() => {
        var t = Dr();
        return h(t, _(fe, {
          get items() {
            return e.node.sub;
          }
        })), t;
      })()];
    case "sqrt":
      return (() => {
        var t = zr(), r = t.firstChild, n = r.nextSibling;
        return h(n, _(fe, {
          get items() {
            return e.node.arg;
          }
        })), t;
      })();
    case "group":
      return _(fe, {
        get items() {
          return e.node.inner;
        }
      });
    default:
      return (() => {
        var t = Ar();
        return h(t, () => e.node.text), Q(() => J(t, "data-token", e.node.cls)), t;
      })();
  }
}
function qr(e) {
  const t = Z(() => Ir(e.value));
  return (() => {
    var r = Nr();
    return h(r, _(ge, {
      get each() {
        return t();
      },
      children: (n) => (() => {
        var i = Pr();
        return h(i, (() => {
          var s = st(() => !!n.length);
          return () => s() ? _(fe, {
            items: n
          }) : "​";
        })()), i;
      })()
    })), r;
  })();
}
const Fr = {
  batch: 8
};
function Vr(e, t, r = {
  request: (n) => requestAnimationFrame(n),
  cancel: (n) => cancelAnimationFrame(n)
}) {
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), u = [];
  let o = 0, f = "", k = 0, a, b, I = !1;
  const T = () => {
    b = void 0;
    const l = performance.now();
    for (; u.length && performance.now() - l < 4; ) u.shift()();
    u.length && (b = r.request(T));
  }, R = (l, S, w) => {
    u.push(() => {
      if (!(I || w !== k))
        for (const L of l.listeners) L(S);
    }), b === void 0 && (b = r.request(T));
  }, p = () => {
    !I && a === void 0 && (a = r.request(g));
  }, g = () => {
    for (a = void 0; s.size < 2; ) {
      const l = [...n.values()].filter((L) => !L.running && L.listeners.size).slice(0, Fr.batch);
      if (!l.length) break;
      for (const L of l) L.running = !0;
      const S = k, w = { tasks: l, controller: new AbortController() };
      s.add(w), t(`notebook preview batch cells=${l.length} queued=${n.size}`), e(
        f,
        l.map((L) => L.index),
        w.controller.signal
      ).then((L) => {
        if (!(S !== k || L.revision !== f || w.controller.signal.aborted))
          for (const O of l) {
            const B = L.cells.find((j) => j.index === O.index)?.preview;
            if (!B) {
              O.running = !1;
              continue;
            }
            const H = JSON.stringify(B).length * 2 + 128, ee = i.get(O.index);
            for (ee && (o -= ee.bytes), i.delete(O.index), i.set(O.index, { result: B, bytes: H }), o += H; i.size > 128 || o > 8 * 1024 * 1024; ) {
              const [j, Se] = i.entries().next().value;
              i.delete(j), o -= Se.bytes;
            }
            n.get(O.index) === O && n.delete(O.index), R(O, B, S);
          }
      }).catch((L) => {
        if (S === k)
          for (const O of l)
            n.get(O.index) === O && n.delete(O.index), w.controller.signal.aborted || R(O, L instanceof Error ? L : Error(String(L)), S);
      }).finally(() => {
        s.delete(w), p();
      });
    }
  }, m = (l) => {
    k++, f = l;
    for (const S of s) S.controller.abort();
    s.clear(), n.clear(), i.clear(), u.length = 0, o = 0;
  };
  return {
    reset: m,
    request(l, S) {
      const w = i.get(l);
      if (w)
        return i.delete(l), i.set(l, w), S(w.result), () => {
        };
      let L = n.get(l);
      L || (L = { index: l, listeners: /* @__PURE__ */ new Set(), running: !1 }, n.set(l, L)), L.listeners.add(S), p();
      const O = L;
      return () => {
        O.listeners.delete(S), !O.listeners.size && !O.running && n.delete(l);
        for (const B of s)
          if (B.tasks.every((H) => !H.listeners.size)) {
            for (const H of B.tasks) n.get(H.index) === H && n.delete(H.index);
            B.controller.abort();
          }
      };
    },
    dispose() {
      I = !0, m(""), a !== void 0 && r.cancel(a), b !== void 0 && r.cancel(b);
    }
  };
}
var Br = /* @__PURE__ */ E("<span>"), Hr = /* @__PURE__ */ E("<div class=oc-nb-preview><p class=oc-nb-muted>Large content (<!> characters). Preview only.</p><pre></pre><button>Load full content"), Ur = /* @__PURE__ */ E("<pre>"), Gr = /* @__PURE__ */ E("<pre class=oc-nb-highlight aria-hidden=true>​"), Wr = /* @__PURE__ */ E("<div class=oc-nb-editor><textarea rows=1>"), Jr = /* @__PURE__ */ E("<div class=oc-nb-error role=alert>"), jr = /* @__PURE__ */ E("<div class=oc-nb-notice role=status>"), Kr = /* @__PURE__ */ E("<div class=oc-nb-add><button>+ Input cell</button><button>+ Text cell"), Xr = /* @__PURE__ */ E('<section class=oc-nb aria-label="Mathematica Notebook"><header class=oc-nb-toolbar aria-label="Notebook actions"><div class=oc-nb-actions><button>Run all</button><button>Stop / reset</button><button>Save</button><button></button></div><div class=oc-nb-side><div class=oc-nb-fontgroup role=group aria-label="Font size"><button aria-label="Decrease font size"title="Decrease font size">A−</button><button class=oc-nb-fontvalue title="Reset font size">%</button><button aria-label="Increase font size"title="Increase font size">A+</button></div><button>Source</button></div></header><div class=oc-nb-messages></div><div class=oc-nb-paper><div class=oc-nb-list></div><footer class=oc-nb-footnote>Local Wolfram kernel · Shared with agent · Run results are temporary; Save writes cell edits only.'), Zr = /* @__PURE__ */ E("<p class=oc-nb-muted>"), Yr = /* @__PURE__ */ E("<button class=oc-nb-run>"), Qr = /* @__PURE__ */ E("<article class=oc-nb-cell><aside class=oc-nb-label><span class=oc-nb-cell-label></span></aside><div class=oc-nb-content>"), ei = /* @__PURE__ */ E("<img loading=lazy decoding=async>", !0, !1, !1), ti = /* @__PURE__ */ E("<details><summary>Expression"), ni = /* @__PURE__ */ E("<div class=oc-nb-output><span class=oc-nb-out-label>Out[<!>]=");
const Qt = "local.mathematica-notebook";
function en(e) {
  const t = Z(() => Xt(e.value));
  return _(ge, {
    get each() {
      return t();
    },
    children: (r) => (() => {
      var n = Br();
      return h(n, () => r.text), Q(() => J(n, "data-token", r.kind)), n;
    })()
  });
}
function tn(e) {
  const t = Z(() => ft(Gn(e.value)));
  return (() => {
    var r = Hr(), n = r.firstChild, i = n.firstChild, s = i.nextSibling;
    s.nextSibling;
    var u = n.nextSibling, o = u.nextSibling;
    return h(n, () => (e.characters ?? e.value.length).toLocaleString(), s), h(u, t), At(o, "click", e.onLoad, !0), r;
  })();
}
function it(e) {
  return _(G, {
    get when() {
      return !Zt(e.value) || e.full;
    },
    get fallback() {
      return _(tn, {
        get value() {
          return e.value;
        },
        get onLoad() {
          return e.onLoad;
        }
      });
    },
    get children() {
      var t = Ur();
      return h(t, _(en, {
        get value() {
          return ft(e.value);
        }
      })), Q(() => t.classList.toggle("oc-nb-printed", !!e.printed)), t;
    }
  });
}
function ri(e) {
  let t, r;
  const [n, i] = q(!1), [s, u] = q(!!e.pretty && e.value.trim() === ""), o = Z(() => !!e.highlight && !n() && Kt(e.value)), f = () => !!e.pretty && !s();
  let k = 0, a = !1, b;
  const I = (p) => {
    if (a) {
      a = !1, u(!1);
      return;
    }
    if (p.relatedTarget) {
      u(!1);
      return;
    }
    if (Date.now() - k < 500) {
      u(!1);
      return;
    }
    b !== void 0 && clearTimeout(b), b = setTimeout(() => {
      b = void 0, !(!t.isConnected || e.disabled || document.activeElement !== document.body && document.activeElement !== document.documentElement) && t.focus({
        preventScroll: !0
      });
    }, 0);
  }, T = () => {
    !r || !t || (r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft);
  }, R = () => {
    f() || e.resize.schedule({
      field: t,
      syncScroll: T
    });
  };
  return Me(() => {
    if (e.value, o(), f()) {
      e.resize.remove(t), t.style.height = "", T();
      return;
    }
    R();
  }), Ae(() => {
    let p = -1;
    const g = new ResizeObserver(([l]) => {
      const S = l.contentRect.width;
      S !== p && (p = S, R());
    });
    g.observe(t);
    const m = (l) => {
      k = t.contains(l.target) ? 0 : Date.now();
    };
    document.addEventListener("pointerdown", m, !0), he(() => {
      g.disconnect(), document.removeEventListener("pointerdown", m, !0), b !== void 0 && clearTimeout(b);
    });
  }), he(() => e.resize.remove(t)), (() => {
    var p = Wr(), g = p.firstChild;
    h(p, _(G, {
      get when() {
        return o();
      },
      get children() {
        var l = Gr(), S = l.firstChild, w = r;
        return typeof w == "function" ? pe(w, l) : r = l, h(l, _(en, {
          get value() {
            return e.value;
          }
        }), S), l;
      }
    }), g), h(p, _(G, {
      get when() {
        return f();
      },
      get children() {
        return _(qr, {
          get value() {
            return e.value;
          }
        });
      }
    }), g), g.$$input = (l) => {
      e.onInput(l.currentTarget.value), R();
    }, g.addEventListener("compositionend", () => {
      e.onInput(t.value), i(!1), e.onComposition(!1), R();
    }), g.addEventListener("compositionstart", () => {
      e.onComposition(!0), i(!0);
    }), g.$$keydown = (l) => {
      l.key === "Escape" && (a = !0, t.blur());
    }, g.addEventListener("blur", I), g.addEventListener("focus", () => u(!0)), g.addEventListener("scroll", T);
    var m = t;
    return typeof m == "function" ? pe(m, g) : t = g, Q((l) => {
      var S = !!e.highlight, w = !!o(), L = !!f(), O = e.label, B = e.disabled, H = e.highlight ? !1 : void 0, ee = e.highlight ? "off" : void 0, j = e.highlight ? "off" : void 0;
      return S !== l.e && p.classList.toggle("is-code", l.e = S), w !== l.t && p.classList.toggle("is-highlighted", l.t = w), L !== l.a && p.classList.toggle("has-pretty", l.a = L), O !== l.o && J(g, "aria-label", l.o = O), B !== l.i && (g.disabled = l.i = B), H !== l.n && J(g, "spellcheck", l.n = H), ee !== l.s && J(g, "autocapitalize", l.s = ee), j !== l.h && J(g, "autocorrect", l.h = j), l;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0
    }), Q(() => g.value = e.value), p;
  })();
}
function ii(e) {
  const [t, r] = q(), [n, i] = q({}), [s, u] = q({}), [o, f] = q({}), [k, a] = q({}), [b, I] = q(), [T, R] = q(), [p, g] = q(!1), [m, l] = q(), [S, w] = q(""), [L, O] = q(""), [B, H] = q(!1), [ee, j] = q(1), [Se, ye] = q(0), [P, D] = q(0);
  let M, te, U, re, W, z = !0;
  const se = /* @__PURE__ */ new Map();
  let K, ue = !1;
  const me = Zn(), Ce = Yn((v) => e.context.log.debug(v)), Ke = (v) => {
    const $ = Math.min(2.2, Math.max(0.7, Math.round(v * 100) / 100));
    j($);
    try {
      localStorage.setItem("oc-nb-font-scale", String($));
    } catch {
    }
  };
  Ae(() => {
    try {
      const v = Number(localStorage.getItem("oc-nb-font-scale"));
      v >= 0.7 && v <= 2.2 && j(v);
    } catch {
    }
  });
  const nn = Z(() => Kn(t()?.cells ?? [], b(), T())), qe = async (v) => {
    const $ = v.startsWith("cell:") ? Number(v.slice(5)) : -1, C = t(), A = C?.cells[$];
    if (A?.deferred && C) {
      if (se.has($)) return;
      if ((A.characters ?? 0) > 1024 * 1024) {
        O("This cell exceeds the 1 MiB inline editor limit. Use Source to edit the complete notebook.");
        return;
      }
      const F = new AbortController();
      se.set($, F);
      try {
        let V = "";
        for (; V.length < (A.characters ?? 0); ) {
          const ie = (await $e("notebook.cells", {
            revision: C.revision,
            indexes: [$],
            kind: "text",
            offset: V.length
          }, F.signal)).cells[0]?.text;
          if (!ie) throw Error("Incomplete notebook text response");
          if (V += ie, !z || t()?.revision !== C.revision || t()?.path !== C.path) return;
        }
        r((oe) => oe && {
          ...oe,
          cells: oe.cells.map((ie) => ie.index === $ ? {
            ...ie,
            text: V,
            deferred: !1
          } : ie)
        });
      } catch (V) {
        z && !F.signal.aborted && w(String(V));
        return;
      } finally {
        se.get($) === F && se.delete($);
      }
    }
    a((F) => ({
      ...F,
      [v]: !0
    }));
  }, rn = (v, $) => f((C) => C[v] === $ ? C : {
    ...C,
    [v]: $
  }), $e = (v, $ = {}, C) => e.context.rpc.call(v, {
    path: e.file.absolutePath,
    ...$
  }, {
    directory: e.file.directory,
    signal: C,
    timeoutMs: v === "notebook.open" || v === "notebook.cells" ? 2e4 : 366e4
  }), Fe = Vr((v, $, C) => $e("notebook.cells", {
    revision: v,
    indexes: $,
    kind: "preview"
  }, C), (v) => e.context.log.debug(v)), gt = (v) => {
    me.invalidate(), e.context.log.info(`notebook loaded path=${v.path} cells=${v.cells.length}`);
    const $ = t()?.revision !== v.revision || t()?.path !== v.path;
    $ && Fe.reset(v.revision), hn(() => {
      r(Wn(v)), u(v.outputs), i({}), H(!1), O(""), I(void 0), R(void 0), $ && (f({}), a({}));
    }), e.setDirty?.(!1);
  }, Xe = async (v = !1) => {
    const $ = me.begin(), C = performance.now();
    e.context.log.debug(`notebook reload path=${e.file.absolutePath}`);
    try {
      const A = await $e("notebook.open", {}, $.signal);
      if (e.context.log.debug(`notebook rpc completed cells=${A.cells.length} rpcMs=${Math.round(performance.now() - C)}`), !z || !$.current()) return;
      const F = Je(t);
      if (!v && F?.revision === A.revision && F.path === A.path) {
        Fe.reset(A.revision), D((V) => V + 1), u(A.outputs), w(""), e.context.log.debug(`notebook reload unchanged cells=${A.cells.length}`);
        return;
      }
      if (B()) {
        O("File changed. Your draft is kept. Reload discards it; save checks for conflicts.");
        return;
      }
      gt(A), w("");
    } catch (A) {
      z && $.current() && (e.context.log.error(`notebook reload failed path=${e.file.absolutePath} error=${String(A)}`), w(A instanceof Error ? A.message : String(A)));
    } finally {
      $.finish();
    }
  }, xe = async (v, $ = !1) => {
    if (p()) {
      if ($) throw new Error("Notebook is busy");
      return;
    }
    me.invalidate(), g(!0), w("");
    try {
      await v();
    } catch (C) {
      if (z && w(C instanceof Error ? C.message : String(C)), $) throw C;
    } finally {
      z && (g(!1), l(void 0));
    }
  }, Ve = async (v) => {
    const $ = t();
    if (!$) throw new Error("Notebook has not loaded");
    const C = await $e("notebook.save", {
      view: !0,
      preview: !0,
      revision: $.revision,
      edits: jn(n()),
      append: v
    });
    z && gt(C);
  }, ht = async (v) => {
    const $ = t();
    if (!$) return;
    l(v.index);
    const C = new AbortController();
    K = C;
    try {
      const A = await $e("notebook.run", {
        index: v.index,
        revision: $.revision,
        code: n()[v.index] ?? (v.deferred ? void 0 : v.text)
      }, C.signal);
      if (z && t()?.revision === $.revision && u((F) => ({
        ...F,
        [v.index]: A
      })), !A.ok) throw new Error("Cell evaluation failed. See its output.");
    } finally {
      z && l(void 0), K === C && (K = void 0);
    }
  }, sn = async () => {
    ue = !1, K?.abort();
    try {
      await $e("kernel.stop"), z && O("Kernel stopped. Variables have been reset.");
    } catch (v) {
      z && w(String(v));
    }
  }, on = (v, $) => {
    i((A) => {
      const F = {
        ...A
      };
      return $ === v.text ? delete F[v.index] : F[v.index] = $, F;
    });
    const C = Object.keys(n()).length > 0;
    H(C), e.setDirty?.(C);
  };
  Me(() => {
    e.revision?.(), Je(() => void Xe());
  });
  const ln = e.onSave?.(() => xe(() => Ve(), !0)), an = e.context.events.on(`${Qt}/change`, (v) => {
    const $ = v;
    $.path === (t()?.path ?? e.file.absolutePath) && ($.type === "output" && $.revision === t()?.revision && u((C) => ({
      ...C,
      [$.index]: $.output
    })), $.type === "saved" && !p() && Xe(), $.type === "saved" && p() && O("Notebook saved externally. Reload before saving further edits."), $.type === "stopped" && O("Kernel stopped. Variables have been reset."));
  });
  return Ae(() => {
    const v = e.setToolbar?.(te);
    he(() => v?.()), e.context.log.debug(`notebook toolbar mounted host=${!!e.setToolbar}`);
    let $;
    const C = () => {
      if ($ = void 0, !z) return;
      const V = M.parentElement, oe = M.previousElementSibling;
      if (V && oe instanceof HTMLElement) {
        const Be = Math.max(0, oe.getBoundingClientRect().bottom - V.getBoundingClientRect().top - V.clientTop);
        M.style.setProperty("--oc-nb-surface-top", `${Be}px`);
      }
      const ie = Xn(M, W);
      Math.abs(ie - Se()) < 0.5 || (ye(ie), e.context.log.debug(`notebook virtual layout startMargin=${Math.round(ie)} buffer=${Rt}`));
    }, A = () => {
      $ === void 0 && ($ = requestAnimationFrame(C));
    }, F = new ResizeObserver(A);
    for (const V of [M, te, U, re, M.previousElementSibling])
      V && F.observe(V);
    C(), he(() => {
      F.disconnect(), $ !== void 0 && cancelAnimationFrame($);
    });
  }), he(() => {
    z = !1, me.invalidate(), ue = !1, K?.abort(), Ce.dispose(), Fe.dispose();
    for (const v of se.values()) v.abort();
    se.clear(), ln?.(), an.dispose(), e.setDirty?.(!1);
  }), (() => {
    var v = Xr(), $ = v.firstChild, C = $.firstChild, A = C.firstChild, F = A.nextSibling, V = F.nextSibling;
    V.firstChild;
    var oe = V.nextSibling, ie = C.nextSibling, Be = ie.firstChild, mt = Be.firstChild, He = mt.nextSibling, cn = He.firstChild, un = He.nextSibling, dn = Be.nextSibling, Te = $.nextSibling, Ze = Te.nextSibling, Ye = Ze.firstChild, bt = M;
    typeof bt == "function" ? pe(bt, v) : M = v;
    var vt = te;
    typeof vt == "function" ? pe(vt, $) : te = $, A.$$click = () => void xe(async () => {
      ue = !0;
      try {
        for (const c of t().cells) {
          if (!ue || !z) break;
          c.runnable && await ht(c);
        }
      } finally {
        ue = !1;
      }
    }), F.$$click = () => void sn(), V.$$click = () => void xe(() => Ve()), h(V, () => B() ? " *" : "", null), oe.$$click = () => {
      const c = B();
      H(!1), e.setDirty?.(!1), Xe(c);
    }, h(oe, () => B() ? "Discard & reload" : "Reload"), mt.$$click = () => Ke(ee() - 0.1), He.$$click = () => Ke(1), h(He, () => Math.round(ee() * 100), cn), un.$$click = () => Ke(ee() + 0.1), At(dn, "click", e.showSource, !0);
    var St = U;
    typeof St == "function" ? pe(St, Te) : U = Te, h(Te, _(G, {
      get when() {
        return S();
      },
      get children() {
        var c = Jr();
        return h(c, S), c;
      }
    }), null), h(Te, _(G, {
      get when() {
        return L();
      },
      get children() {
        var c = jr();
        return h(c, L), c;
      }
    }), null);
    var $t = re;
    typeof $t == "function" ? pe($t, Ze) : re = Ze;
    var pt = W;
    return typeof pt == "function" ? pe(pt, Ye) : W = Ye, h(Ye, _(G, {
      get when() {
        return t();
      },
      get fallback() {
        return (() => {
          var c = Zr();
          return h(c, () => S() ? "Notebook could not be loaded. Reload to retry or open Source." : "Loading notebook..."), c;
        })();
      },
      get children() {
        return [_(Mn, {
          get data() {
            return t()?.cells ?? [];
          },
          scrollRef: M,
          get startMargin() {
            return Se();
          },
          bufferSize: Rt,
          get keepMounted() {
            return nn();
          },
          children: (c) => (() => {
            var ne = Qr(), de = ne.firstChild, ae = de.firstChild, be = de.nextSibling;
            return ne.$$focusout = (y) => {
              y.relatedTarget instanceof Node && y.currentTarget.contains(y.relatedTarget) || I((N) => N === c.index ? void 0 : N);
            }, ne.$$focusin = () => I(c.index), h(ae, (() => {
              var y = st(() => c.style === "Input" || c.style === "Code");
              return () => y() ? `In[${c.index + 1}]:=` : c.style;
            })()), h(de, _(G, {
              get when() {
                return c.runnable;
              },
              get children() {
                var y = Yr();
                return y.$$click = () => void xe(() => ht(c)), h(y, () => m() === c.index ? "Running..." : "Run"), Q((N) => {
                  var Y = `Run cell ${c.index + 1}`, Ue = m() === c.index, Le = p();
                  return Y !== N.e && J(y, "aria-label", N.e = Y), Ue !== N.t && J(y, "aria-busy", N.t = Ue), Le !== N.a && (y.disabled = N.a = Le), N;
                }, {
                  e: void 0,
                  t: void 0,
                  a: void 0
                }), y;
              }
            }), null), h(be, _(G, {
              get when() {
                return c.editable;
              },
              get fallback() {
                return _(_r, {
                  get index() {
                    return c.index;
                  },
                  get revision() {
                    return `${t()?.revision ?? ""}:${P()}`;
                  },
                  scheduler: Fe,
                  source: async (y) => {
                    const Y = (await $e("notebook.cells", {
                      revision: t()?.revision,
                      indexes: [c.index],
                      kind: "source"
                    }, y)).cells[0];
                    return {
                      text: Y?.text ?? "",
                      total: Y?.total ?? 0
                    };
                  }
                });
              },
              get children() {
                return _(G, {
                  get when() {
                    return st(() => !c.deferred)() && (!Zt(c.text) || k()[`cell:${c.index}`]);
                  },
                  get fallback() {
                    return _(tn, {
                      get value() {
                        return c.text;
                      },
                      get characters() {
                        return c.characters;
                      },
                      onLoad: () => void qe(`cell:${c.index}`)
                    });
                  },
                  get children() {
                    return _(ri, {
                      get label() {
                        return `Cell ${c.index + 1} (${c.style})`;
                      },
                      get disabled() {
                        return p();
                      },
                      get pretty() {
                        return c.style === "Input" || c.style === "Code";
                      },
                      get highlight() {
                        return c.style === "Input" || c.style === "Code" || c.style === "Output";
                      },
                      get value() {
                        return Jn(c, n());
                      },
                      resize: Ce,
                      onComposition: (y) => R((N) => y ? c.index : N === c.index ? void 0 : N),
                      onInput: (y) => on(c, y)
                    });
                  }
                });
              }
            }), null), h(be, _(G, {
              get when() {
                return s()[c.index];
              },
              children: (y) => (() => {
                var N = ni(), Y = N.firstChild, Ue = Y.firstChild, Le = Ue.nextSibling;
                return Le.nextSibling, h(Y, () => c.index + 1, Le), h(N, _(G, {
                  get when() {
                    return y().printed;
                  },
                  get children() {
                    return _(it, {
                      printed: !0,
                      get value() {
                        return y().printed;
                      },
                      get full() {
                        return !!k()[`printed:${c.index}`];
                      },
                      onLoad: () => qe(`printed:${c.index}`)
                    });
                  }
                }), null), h(N, _(G, {
                  get when() {
                    return y().image;
                  },
                  get fallback() {
                    return _(it, {
                      get value() {
                        return y().text || (y().printed ? "" : "Null");
                      },
                      get full() {
                        return !!k()[`output:${c.index}`];
                      },
                      onLoad: () => qe(`output:${c.index}`)
                    });
                  },
                  get children() {
                    return [(() => {
                      var X = ei();
                      return Q((ce) => {
                        var Ie = `Wolfram graphic from cell ${c.index + 1}`, _t = `data:image/png;base64,${y().image}`;
                        return Ie !== ce.e && J(X, "alt", ce.e = Ie), _t !== ce.t && J(X, "src", ce.t = _t), ce;
                      }, {
                        e: void 0,
                        t: void 0
                      }), X;
                    })(), (() => {
                      var X = ti();
                      return X.firstChild, X.addEventListener("toggle", (ce) => rn(`expression:${c.index}`, ce.currentTarget.open)), h(X, _(G, {
                        get when() {
                          return o()[`expression:${c.index}`];
                        },
                        get children() {
                          return _(it, {
                            get value() {
                              return y().text;
                            },
                            get full() {
                              return !!k()[`output:${c.index}`];
                            },
                            onLoad: () => qe(`output:${c.index}`)
                          });
                        }
                      }), null), Q(() => X.open = !!o()[`expression:${c.index}`]), X;
                    })()];
                  }
                }), null), Q((X) => {
                  var ce = !y().ok, Ie = `Output cell ${c.index + 1}`;
                  return ce !== X.e && N.classList.toggle("is-error", X.e = ce), Ie !== X.t && J(N, "aria-label", X.t = Ie), X;
                }, {
                  e: void 0,
                  t: void 0
                }), N;
              })()
            }), null), Q((y) => {
              var N = c.index, Y = c.style;
              return N !== y.e && J(ne, "data-cell-index", y.e = N), Y !== y.t && J(ne, "data-style", y.t = Y), y;
            }, {
              e: void 0,
              t: void 0
            }), ne;
          })()
        }), (() => {
          var c = Kr(), ne = c.firstChild, de = ne.nextSibling;
          return ne.$$click = () => void xe(() => Ve({
            style: "Input",
            text: ""
          })), de.$$click = () => void xe(() => Ve({
            style: "Text",
            text: ""
          })), Q((ae) => {
            var be = p(), y = p();
            return be !== ae.e && (ne.disabled = ae.e = be), y !== ae.t && (de.disabled = ae.t = y), ae;
          }, {
            e: void 0,
            t: void 0
          }), c;
        })()];
      }
    })), Q((c) => {
      var ne = e.file.absolutePath, de = String(ee()), ae = !!e.setToolbar, be = p() || !t(), y = !t(), N = p() || !B(), Y = p();
      return ne !== c.e && J(v, "data-notebook-path", c.e = ne), de !== c.t && Ge(v, "--oc-nb-fs", c.t = de), ae !== c.a && J($, "data-hosted", c.a = ae), be !== c.o && (A.disabled = c.o = be), y !== c.i && (F.disabled = c.i = y), N !== c.n && (V.disabled = c.n = N), Y !== c.s && (oe.disabled = c.s = Y), c;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0
    }), v;
  })();
}
const si = {
  id: Qt,
  apiVersion: 1,
  activate(e) {
    e.log.info("activating Mathematica Notebook viewer");
    const t = e.fileViewers.register({
      id: "mathematica-notebook",
      component: (r) => _(ii, gn(r, {
        context: e
      }))
    });
    return () => t.dispose();
  }
};
fn(["click", "keydown", "input", "focusin", "focusout"]);
export {
  ii as NotebookViewer,
  si as default
};
