const g = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js/web"];
if (!g) throw new Error("OpenCode host module is unavailable: solid-js/web");
g.Aliases;
g.Assets;
g.ChildProperties;
g.DOMElements;
g.DelegatedEvents;
const qt = g.Dynamic;
g.ErrorBoundary;
g.For;
g.Hydration;
g.HydrationScript;
g.Index;
g.Match;
g.NoHydration;
g.Portal;
g.Properties;
g.RequestContext;
g.SVGElements;
g.SVGNamespace;
g.Show;
g.Suspense;
g.SuspenseList;
g.Switch;
const Vt = g.addEventListener;
g.assign;
g.classList;
g.className;
g.clearDelegatedEvents;
const x = g.createComponent;
g.createDynamic;
const Ht = g.delegateEvents;
g.dynamicProperty;
const K = g.effect;
g.escape;
g.generateHydrationScript;
g.getAssets;
g.getHydrationKey;
g.getNextElement;
g.getNextMarker;
g.getNextMatch;
g.getOwner;
g.getPropAlias;
g.getRequestEvent;
g.hydrate;
g.innerHTML;
const d = g.insert;
g.isDev;
g.isServer;
const pe = g.memo, Sn = g.mergeProps;
g.render;
g.renderToStream;
g.renderToString;
g.renderToStringAsync;
g.resolveSSRNode;
g.runHydrationEvents;
const U = g.setAttribute;
g.setAttributeNS;
g.setBoolAttribute;
g.setProperty;
const Ge = g.setStyleProperty;
g.spread;
g.ssr;
g.ssrAttribute;
g.ssrClassList;
g.ssrElement;
g.ssrHydrationKey;
g.ssrSpread;
g.ssrStyle;
g.style;
const w = g.template;
g.untrack;
const xe = g.use;
g.useAssets;
const k = globalThis.__OPENCODE_EXTENSION_HOST__?.modules?.["solid-js"];
if (!k) throw new Error("OpenCode host module is unavailable: solid-js");
k.$DEVCOMP;
k.$PROXY;
k.$TRACK;
k.DEV;
k.ErrorBoundary;
const ge = k.For;
k.Index;
k.Match;
const B = k.Show;
k.Suspense;
k.SuspenseList;
k.Switch;
const wt = k.batch;
k.cancelCallback;
k.catchError;
k.children;
k.createComponent;
const xn = k.createComputed;
k.createContext;
k.createDeferred;
const qe = k.createEffect, Y = k.createMemo;
k.createReaction;
k.createRenderEffect;
k.createResource;
k.createRoot;
k.createSelector;
const H = k.createSignal;
k.createUniqueId;
k.enableExternalSource;
k.enableHydration;
k.enableScheduling;
k.equalFn;
k.from;
k.getListener;
k.getOwner;
k.indexArray;
k.lazy;
k.mapArray;
const Ft = k.mergeProps;
k.observable;
const Ct = k.on, he = k.onCleanup;
k.onError;
const Me = k.onMount;
k.requestCallback;
k.resetErrorBoundaries;
k.runWithOwner;
k.sharedConfig;
k.splitProps;
k.startTransition;
const Ke = k.untrack;
k.useContext;
k.useTransition;
const Ne = null, {
  min: _e,
  max: le,
  abs: Et,
  floor: pn
} = Math, Bt = (e, t, r) => _e(r, le(t, e)), Ut = (e) => [...e].sort((t, r) => t - r), _n = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
}, lt = () => {
  let e;
  return [new Promise((r) => {
    e = r;
  }), e];
}, Gt = (e) => {
  let t;
  return () => (e && (t = e(), e = void 0), t);
}, ye = -1, ze = (e, t, r) => {
  const n = r ? "unshift" : "push";
  for (let i = 0; i < t; i++)
    e[n](ye);
  return e;
}, Wt = (e, t) => {
  const r = e._sizes[t];
  return r === ye ? e._defaultItemSize : r;
}, kn = (e, t, r) => {
  const n = e._sizes[t] === ye;
  return e._sizes[t] = r, e._computedOffsetIndex = _e(t, e._computedOffsetIndex), n;
}, je = (e, t) => {
  if (!e._length) return 0;
  if (e._computedOffsetIndex >= t)
    return e._offsets[t];
  e._computedOffsetIndex < 0 && (e._offsets[0] = 0, e._computedOffsetIndex = 0);
  let r = e._computedOffsetIndex, n = e._offsets[r];
  for (; r < t; )
    n += Wt(e, r), e._offsets[++r] = n;
  return e._computedOffsetIndex = t, n;
}, Ee = (e, t, r = 0, n = e._length - 1) => {
  let i = r;
  for (; r <= n; ) {
    const s = pn((r + n) / 2);
    je(e, s) <= t ? (i = s, r = s + 1) : n = s - 1;
  }
  return Bt(i, 0, e._length - 1);
}, wn = (e, t, r, n) => {
  if (n = _e(n, e._length - 1), je(e, n) <= t) {
    const i = Ee(e, r, n);
    return [Ee(e, t, n, i), i];
  } else {
    const i = Ee(e, t, void 0, n);
    return [i, Ee(e, r, i)];
  }
}, Cn = (e, t) => {
  let r = 0;
  const n = [];
  e._sizes.forEach((p, a) => {
    p !== ye && (n.push(p), a < t && r++);
  }), e._computedOffsetIndex = -1;
  const i = Ut(n), s = i.length, u = s / 2 | 0, o = s % 2 === 0 ? (i[u - 1] + i[u]) / 2 : i[u], v = e._defaultItemSize;
  return ((e._defaultItemSize = o) - v) * le(t - r, 0);
}, En = (e, t, r) => ({
  _defaultItemSize: t,
  _sizes: r ? (
    // https://github.com/inokawa/virtua/issues/441
    ze(r.slice(0, _e(e, r.length)), le(0, e - r.length))
  ) : ze([], e),
  _length: e,
  _computedOffsetIndex: -1,
  _offsets: ze([], e + 1)
}), yn = (e) => [e._sizes.slice(), e._defaultItemSize], yt = (e, t, r) => {
  const n = t - e._length;
  return e._computedOffsetIndex = r ? (
    // Discard cache for now
    -1
  ) : _e(t - 1, e._computedOffsetIndex), e._length = t, n > 0 ? (ze(e._offsets, n), ze(e._sizes, n, r), e._defaultItemSize * n) : (e._offsets.splice(n), (r ? e._sizes.splice(0, -n) : e._sizes.splice(n)).reduce((i, s) => i - (s === ye ? e._defaultItemSize : s), 0));
}, Ln = (e) => e.documentElement, Tn = (e) => e.ownerDocument, In = (e) => e.defaultView, Jt = /* @__PURE__ */ Gt(() => /iP(hone|od|ad)/.test(navigator.userAgent) ? !0 : navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0), Rn = /* @__PURE__ */ Gt(() => "scrollBehavior" in Ln(document).style), Dn = 2147483647, Oe = 0, tt = 1, Lt = 2, Ae = 0, nt = 1, rt = 2, at = 1, Kt = 2, ct = 3, jt = 4, Xt = 5, Zt = 6, ut = 7, Yt = 8, $e = 1, dt = 2, Qt = 4, en = 8, On = (e) => le(e.$getTotalSize(), e.$getViewportSize()), An = (e, t = 40, r = 0, n, i = !1) => {
  let s = !!r, u = 1, o = 0, v = 0, p = 0, a = 0, b = 0, D = 0, T = Oe, O = Ae, _ = Ne, m = [0, s ? le(r - 1, 0) : -1], h = 0, l = !1;
  const S = En(e, n ? n[1] : t, n && n[0]), C = /* @__PURE__ */ new Set(), I = () => p - v, A = () => I() + b + a, F = (N, M) => wn(S, N, M, m[0]), G = () => je(S, S._length), ee = (N, M) => {
    const V = je(S, N) - b;
    return M ? G() - V - j(N) : V;
  }, j = (N) => Wt(S, N), Se = (N, M = ye) => S._sizes[N] === M, Le = (N) => {
    N && (// In iOS WebKit browsers, updating scroll position will stop scrolling so it have to be deferred during scrolling.
    Jt() && T !== Oe || // Before imperative smooth scrolling, we measure all items which may be visible during scrolling.
    // However, especially in Firefox, there are rare cases where items resize while scrolling, which can stop smooth scrolling.
    _ && O === nt ? b += N : a += N);
  };
  return {
    $dispose: () => {
      C.clear();
    },
    $getStateVersion: () => u,
    $getCacheSnapshot: () => yn(S),
    $getRange: (N = 200) => {
      if (!l || s)
        return m;
      let M, V;
      if (D)
        [M, V] = m;
      else {
        let te = le(0, A()), W = te + o;
        i || (N = le(0, N), T !== tt && (te -= N), T !== Lt && (W += N)), [M, V] = m = F(le(0, te), le(0, W)), _ && (M = _e(M, _[0]), V = le(V, _[1]));
      }
      return [le(M, 0), _e(V, S._length - 1)];
    },
    $findItemIndex: (N) => Ee(S, N - v),
    $isUnmeasuredItem: Se,
    $getItemOffset: ee,
    $getItemSize: j,
    $getItemsLength: () => S._length,
    $getScrollOffset: () => p,
    $isScrolling: () => T !== Oe,
    $getViewportSize: () => o,
    $getStartSpacerSize: () => v,
    $getTotalSize: G,
    _flushJump: () => (D = a, a = 0, [D, O === rt]),
    $subscribe: (N, M) => {
      const V = [N, M];
      return C.add(V), () => {
        C.delete(V);
      };
    },
    $update: (N, M) => {
      let V, te, W = 0;
      switch (N) {
        case at: {
          if (M === p && O === Ae)
            break;
          const re = D;
          D = 0;
          const J = M - p, P = Et(J);
          !(re && P < Et(re) + 1) && // Ignore until manual scrolling
          O === Ae && (T = J < 0 ? Lt : tt), s && (s = !1), p = M, W = Qt;
          const X = I();
          X >= -o && X <= G() && (W += $e, te = P > o);
          break;
        }
        case Kt: {
          W = en, T !== Oe && (V = !0, W += $e), T = Oe, O = Ae, _ = Ne;
          break;
        }
        case ct: {
          const re = M.filter(([J, P]) => !Se(J, P));
          if (!re.length)
            break;
          Le(re.reduce((J, [P, se]) => {
            let X;
            if (
              // Keep distance from end during shifting
              O === rt
            )
              X = !0;
            else if (_ && O === nt)
              X = P < _[0];
            else {
              const de = I(), me = ee(P), Te = j(P);
              X = T !== tt && O === Ae ? (
                // https://github.com/inokawa/virtua/issues/385
                // https://github.com/inokawa/virtua/discussions/865
                me + Te < de
              ) : (
                // https://github.com/inokawa/virtua/pull/868
                me < de && me + Te < de + o
              );
            }
            return X && (J += se - j(P)), J;
          }, 0));
          for (const [J, P] of re) {
            const se = j(J), X = kn(S, J, P);
            i && (h += X ? P : P - se);
          }
          i && o && // If the total size is lower than the viewport, the item may be a empty state
          h > o && (Le(Cn(S, Ee(S, A()))), i = !1), W = $e + dt, te = !0;
          break;
        }
        case jt: {
          o !== M && (o || (l = te = !0), o = M, W = $e + dt);
          break;
        }
        case Xt: {
          M[1] ? (Le(yt(S, M[0], !0)), O = rt, W = $e) : (yt(S, M[0]), W = $e);
          break;
        }
        case Zt: {
          v = M;
          break;
        }
        case ut: {
          O = nt;
          break;
        }
        case Yt: {
          _ = F(M, M + o), W = $e;
          break;
        }
      }
      W && (u = (u & Dn) + 1, V && b && (a += b, b = 0), C.forEach(([re, J]) => {
        W & re && J(te);
      }));
    }
  };
}, gt = setTimeout, zn = (e, t) => {
  let r;
  const n = () => {
    r != Ne && clearTimeout(r);
  }, i = () => {
    n(), r = gt(() => {
      r = Ne, e();
    }, t);
  };
  return i._cancel = n, i;
}, it = (e, t) => t ? -e : e, Mn = (e, t, r, n, i, s) => {
  const u = Date.now;
  let o = 0, v = !1, p = !1, a = !1, b = !1;
  const D = zn(() => {
    if (v || p) {
      v = !1, D();
      return;
    }
    a = !1, e.$update(Kt);
  }, 150), T = () => {
    o = u(), a && (b = !0), e.$update(at, n()), D();
  }, O = (h) => {
    if (v || // Scroll start should be detected with scroll event
    !e.$isScrolling() || // Probably a pinch-to-zoom gesture
    h.ctrlKey)
      return;
    const l = u() - o;
    // Check if wheel event occurs some time after scrolling
    150 > l && 50 < l && // Get delta before checking deltaMode for firefox behavior
    // https://github.com/w3c/uievents/issues/181#issuecomment-392648065
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1392460#c34
    (r ? h.deltaX : h.deltaY) && (v = !0);
  }, _ = () => {
    p = !0, a = b = !1;
  }, m = () => {
    p = !1, Jt() && (a = !0);
  };
  return t.addEventListener("scroll", T), t.addEventListener("wheel", O, {
    passive: !0
  }), t.addEventListener("touchstart", _, {
    passive: !0
  }), t.addEventListener("touchend", m, {
    passive: !0
  }), {
    _dispose: () => {
      t.removeEventListener("scroll", T), t.removeEventListener("wheel", O), t.removeEventListener("touchstart", _), t.removeEventListener("touchend", m), D._cancel();
    },
    _fixScrollJump: () => {
      const [h, l] = e._flushJump();
      h && (i(h, l, b), b = !1, l && e.$getViewportSize() > e.$getTotalSize() && e.$update(at, n()));
    }
  };
}, Nn = (e, t, r) => {
  let n;
  return [async (i, s) => {
    if (!await t())
      return;
    n && n();
    const u = () => {
      const [o, v] = lt();
      return n = () => {
        v(!1);
      }, e.$getViewportSize() && gt(n, 150), [o, e.$subscribe(dt, () => {
        v(!0);
      })];
    };
    if (s && Rn())
      e.$update(Yt, i()), _n(async () => {
        for (; ; ) {
          let o = !0;
          for (let [a, b] = e.$getRange(); a <= b; a++)
            if (e.$isUnmeasuredItem(a)) {
              o = !1;
              break;
            }
          if (o)
            break;
          const [v, p] = u();
          try {
            if (!await v)
              return;
          } finally {
            p();
          }
        }
        e.$update(ut), r(i(), s);
      });
    else
      for (; ; ) {
        const [o, v] = u();
        try {
          if (e.$update(ut), r(i()), !await o)
            return;
        } finally {
          v();
        }
      }
  }, () => {
    n && n();
  }];
}, Pn = (e, t) => {
  let r, n, i = lt(), s = !1;
  const u = t ? "scrollLeft" : "scrollTop", o = t ? "overflowX" : "overflowY", [v, p] = Nn(e, () => i[0], (a, b) => {
    a = it(a, s), b ? r.scrollTo({
      [t ? "left" : "top"]: a,
      behavior: "smooth"
    }) : r[u] = a;
  });
  return {
    $observe(a, b) {
      r = b, t && (s = getComputedStyle(b).direction === "rtl"), n = Mn(e, b, t, () => it(b[u], s), (D, T, O) => {
        if (O) {
          const _ = b.style, m = _[o];
          _[o] = "hidden", gt(() => {
            _[o] = m;
          });
        }
        b[u] = it(e.$getScrollOffset() + D, s), T && p();
      }), i[1](!0);
    },
    $dispose() {
      n && n._dispose(), i[1](!1), i = lt();
    },
    $isNegative: () => s,
    $scrollTo(a) {
      v(() => a);
    },
    $scrollBy(a) {
      a += e.$getScrollOffset(), v(() => a);
    },
    $scrollToIndex(a, {
      align: b,
      smooth: D,
      offset: T = 0
    } = {}) {
      if (a = Bt(a, 0, e.$getItemsLength() - 1), b === "nearest") {
        const O = e.$getItemOffset(a), _ = e.$getScrollOffset();
        if (O < _)
          b = "start";
        else if (O + e.$getItemSize(a) > _ + e.$getViewportSize())
          b = "end";
        else
          return;
      }
      v(() => T + e.$getStartSpacerSize() + e.$getItemOffset(a) + (b === "end" ? e.$getItemSize(a) - e.$getViewportSize() : b === "center" ? (e.$getItemSize(a) - e.$getViewportSize()) / 2 : 0), D);
    },
    $fixScrollJump: () => {
      n && n._fixScrollJump();
    }
  };
}, qn = (e) => {
  let t;
  return {
    _observe(r) {
      (t || // https://bugs.chromium.org/p/chromium/issues/detail?id=1491739
      (t = new (In(Tn(r))).ResizeObserver(e))).observe(r);
    },
    _unobserve(r) {
      t.unobserve(r);
    },
    _dispose() {
      t && t.disconnect();
    }
  };
}, Vn = (e, t) => {
  let r;
  const n = t ? "width" : "height", i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new Map(), u = qn((o) => {
    const v = [];
    for (const {
      target: p,
      contentRect: a
    } of o)
      if (p.offsetParent)
        if (p === r)
          e.$update(jt, a[n]);
        else {
          const b = i.get(p);
          b != Ne && v.push([b, a[n]]);
        }
    v.length && e.$update(ct, v);
  });
  return {
    $observeRoot(o) {
      u._observe(r = o);
    },
    $observeItem: (o, v) => (i.set(o, v), s.set(v, o), u._observe(o), () => {
      i.delete(o), s.get(v) === o && s.delete(v), u._unobserve(o);
    }),
    $measureItems: () => {
      const o = [];
      s.forEach((v, p) => {
        v.offsetParent && o.push([p, v.getBoundingClientRect()[n]]);
      }), o.length && e.$update(ct, o);
    },
    $dispose: u._dispose
  };
}, Hn = (e) => {
  let t;
  e = Ft({
    _as: "div"
  }, e), qe(() => {
    t && he(e._resizer(t, e._index));
  });
  const r = Y(() => {
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
  return x(qt, {
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
}, Fn = (e, t) => e[0] === t[0] && e[1] === t[1], Bn = (e) => {
  let t;
  const {
    itemSize: r,
    horizontal: n = !1,
    cache: i
  } = e;
  e = Ft({
    as: "div"
  }, e);
  const s = An(e.data.length, r, void 0, i, !r), u = Vn(s, n), o = Pn(s, n), [v, p] = H(s.$getStateVersion());
  s.$subscribe($e, () => {
    p(s.$getStateVersion());
  }), s.$subscribe(Qt, () => {
    e.onScroll?.(s.$getScrollOffset());
  }), s.$subscribe(en, () => {
    e.onScrollEnd?.();
  });
  const a = Y((m) => {
    v();
    const h = s.$getRange(e.bufferSize);
    return h[0] = Math.max(0, h[0]), h[1] = Math.min(e.data.length - 1, h[1]), m && Fn(m, h) ? m : h;
  }), b = Y(() => v() && s.$isScrolling()), D = Y(() => v() && s.$getTotalSize()), T = Y(() => v() && o.$isNegative());
  Me(() => {
    e.ref && e.ref({
      get cache() {
        return s.$getCacheSnapshot();
      },
      get scrollOffset() {
        return s.$getScrollOffset();
      },
      get scrollSize() {
        return On(s);
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
    const m = t, h = e.scrollRef || m.parentElement;
    u.$observeRoot(h), o.$observe(m, h), he(() => {
      e.ref && e.ref(), s.$dispose(), u.$dispose(), o.$dispose();
    });
  }), xn(Ct(() => e.startMargin || 0, (m) => {
    m !== s.$getStartSpacerSize() && s.$update(Zt, m);
  })), qe(Ct(v, () => {
    o.$fixScrollJump();
  }));
  const O = Y(() => {
    const m = e.data.length;
    Ke(() => {
      m !== s.$getItemsLength() && s.$update(Xt, [m, e.shift]);
    });
    const h = [], l = [];
    if (e.keepMounted) {
      const S = new Set(e.keepMounted);
      S.forEach((C) => {
        (C < 0 || C >= m) && S.delete(C);
      });
      for (let [C, I] = a(); C <= I; C++)
        S.add(C);
      Ut([...S]).forEach((C) => {
        h.push(e.data[C]), l.push(C);
      });
    } else
      for (let [S, C] = a(); S <= C; S++)
        h.push(e.data[S]), l.push(S);
    return {
      _items: h,
      _indexes: l
    };
  }), _ = (m, h) => {
    const l = Y(() => (v(), s.$getItemOffset(h(), T()))), S = Y(() => (v(), s.$isUnmeasuredItem(h()))), C = Y(() => Ke(() => e.children(m, h)));
    return x(Hn, {
      get _as() {
        return e.item;
      },
      get _index() {
        return h();
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
        return C();
      },
      _isHorizontal: n
    });
  };
  return x(qt, {
    get component() {
      return e.as;
    },
    ref(m) {
      var h = t;
      typeof h == "function" ? h(m) : t = m;
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
        width: n ? D() + "px" : "100%",
        height: n ? "100%" : D() + "px",
        "pointer-events": b() ? "none" : void 0
      };
    },
    get children() {
      return x(ge, {
        get each() {
          return O()._items;
        },
        children: (m, h) => {
          const l = Y(() => O()._indexes[h()]);
          return _(m, l);
        }
      });
    }
  });
};
const Un = 4e3, Gn = 64 * 1024;
function tn(e) {
  return e.length <= Gn;
}
const Tt = /* @__PURE__ */ new Set([
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
]), It = /[\p{L}$][\p{L}\p{N}$`]*|`[\p{L}\p{N}$`]+/uy, Rt = /(?:[0-9]+\^\^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]*)?|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+))(?:`{1,2}(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)?)?(?:\*\^[+-]?[0-9]+)?/y, Dt = /\\\[[a-zA-Z][a-zA-Z0-9]*\]/y, Wn = /* @__PURE__ */ new Set([
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
function Jn(e) {
  return {
    offset: 0,
    commentDepth: 0,
    string: !1,
    escaped: !1
  };
}
function Kn(e, t, r, n = e.length) {
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
    Dt.lastIndex = s;
    const u = Dt.exec(e)?.[0];
    if (u) {
      t.offset += u.length;
      const a = u.slice(2, -1);
      r?.(Wn.has(a) ? "operator" : Tt.has(a) ? "constant" : "symbol", s, t.offset);
      continue;
    }
    Rt.lastIndex = s;
    const o = Rt.exec(e)?.[0];
    if (o) {
      t.offset += o.length, r?.("number", s, t.offset);
      continue;
    }
    It.lastIndex = s;
    const v = It.exec(e)?.[0];
    if (v) {
      t.offset += v.length;
      const a = v.split("`").at(-1) ?? v;
      let b = t.offset;
      for (; b < e.length && /\s/.test(e[b]); ) b++;
      r?.(
        Tt.has(a) || a.startsWith("$") ? "constant" : e[b] === "[" || /^[A-Z]/.test(a) ? "function" : "symbol",
        s,
        t.offset
      );
      continue;
    }
    const p = e[t.offset++];
    if (p === "_" || p === "#" || p === "%") {
      for (; e[t.offset] === p; ) t.offset++;
      if (p === "#" || p === "%") for (; /[0-9]/.test(e[t.offset] ?? ""); ) t.offset++;
      r?.("pattern", s, t.offset);
      continue;
    }
    r?.(
      "[]{}(),;".includes(p) ? "punctuation" : "+-*/^=<>!:?@&|~.\\".includes(p) ? "operator" : "plain",
      s,
      t.offset
    );
  }
  return t;
}
function nn(e) {
  if (!tn(e)) return [{ kind: "plain", text: e }];
  const t = [], r = Jn();
  let n = -1;
  return Kn(e, r, (i, s, u) => {
    if (n >= 0) return;
    if (t.length >= Un) {
      n = s;
      return;
    }
    const o = e.slice(s, u), v = t.at(-1);
    i === "plain" && v?.kind === i ? v.text += o : t.push({ kind: i, text: o });
  }), n >= 0 && t.push({ kind: "plain", text: e.slice(n) }), t;
}
const jn = 1e5, Ot = 600, At = 400;
function rn(e) {
  return e.length > jn;
}
function Xn(e) {
  return e.length > Ot ? `${e.slice(0, Ot)}…` : e;
}
function Zn(e) {
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
function Yn(e, t) {
  return t[e.index] ?? e.text;
}
function Qn(e) {
  return Object.entries(e).map(([t, r]) => ({ index: Number(t), text: r }));
}
function er(e, t, r) {
  const n = /* @__PURE__ */ new Set([t, r]);
  n.delete(void 0);
  const i = [];
  for (let s = 0; s < e.length && i.length < n.size; s++)
    n.has(e[s].index) && i.push(s);
  return i;
}
function tr(e, t) {
  return Math.max(
    0,
    t.getBoundingClientRect().top - e.getBoundingClientRect().top + e.scrollTop - e.clientTop
  );
}
function nr() {
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
function rr(e, t = {
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
    const v = o.map(({ field: a }) => a.scrollHeight + 2);
    let p = 0;
    for (let a = 0; a < o.length; a++) {
      const { field: b, syncScroll: D } = o[a], T = v[a];
      b.style.height = `${T}px`, n.get(b) !== T && p++, n.set(b, T);
    }
    for (const { syncScroll: a } of o) a();
    p && e(`notebook editor layout cells=${o.length} changed=${p}`);
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
var ir = /* @__PURE__ */ w("<mtext>", !1, !1, !0), sr = /* @__PURE__ */ w("<mtext class=oc-nb-box-unknown>[<!>]", !1, !1, !0), or = /* @__PURE__ */ w("<mfrac>", !1, !1, !0), lr = /* @__PURE__ */ w("<msup>", !1, !1, !0), ar = /* @__PURE__ */ w("<msub>", !1, !1, !0), cr = /* @__PURE__ */ w("<msubsup>", !1, !1, !0), ur = /* @__PURE__ */ w("<msqrt>", !1, !1, !0), dr = /* @__PURE__ */ w("<mroot>", !1, !1, !0), fr = /* @__PURE__ */ w("<mover>", !1, !1, !0), gr = /* @__PURE__ */ w("<munder>", !1, !1, !0), hr = /* @__PURE__ */ w("<munderover>", !1, !1, !0), mr = /* @__PURE__ */ w("<mtable columnalign=left>", !1, !1, !0), vr = /* @__PURE__ */ w("<mtr>", !1, !1, !0), br = /* @__PURE__ */ w("<mtd>", !1, !1, !0), $r = /* @__PURE__ */ w("<mtable columnalign=left rowspacing=0.15em>", !1, !1, !0), Sr = /* @__PURE__ */ w("<mtr><mtd>", !1, !1, !0), xr = /* @__PURE__ */ w("<mstyle>", !1, !1, !0), pr = /* @__PURE__ */ w("<mrow>", !1, !1, !0), _r = /* @__PURE__ */ w("<button type=button class=oc-nb-edit>Edit box source"), kr = /* @__PURE__ */ w("<div class=oc-nb-rich><details class=oc-nb-opaque><summary>Preserved box source"), st = /* @__PURE__ */ w("<p class=oc-nb-muted>"), wr = /* @__PURE__ */ w("<div class=oc-nb-math-scroll><math xmlns=http://www.w3.org/1998/Math/MathML display=block>"), Cr = /* @__PURE__ */ w("<pre>"), Er = /* @__PURE__ */ w("<p class=oc-nb-muted>Source excerpt (<!> of <!> characters). Use Source for the complete notebook.");
function we(e) {
  const t = () => e.box.children ?? [], r = (n) => x(we, {
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
        var n = ir();
        return d(n, () => e.box.text), n;
      })();
    case "unknown":
      return (() => {
        var n = sr(), i = n.firstChild, s = i.nextSibling;
        return s.nextSibling, d(n, () => e.box.text, s), n;
      })();
    case "frac":
      return (() => {
        var n = or();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "sup":
      return (() => {
        var n = lr();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "sub":
      return (() => {
        var n = ar();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "subsup":
      return (() => {
        var n = cr();
        return d(n, () => r(0), null), d(n, () => r(1), null), d(n, () => r(2), null), n;
      })();
    case "sqrt":
      return (() => {
        var n = ur();
        return d(n, () => r(0)), n;
      })();
    case "root":
      return (() => {
        var n = dr();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "over":
      return (() => {
        var n = fr();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "under":
      return (() => {
        var n = gr();
        return d(n, () => r(0), null), d(n, () => r(1), null), n;
      })();
    case "underover":
      return (() => {
        var n = hr();
        return d(n, () => r(0), null), d(n, () => r(1), null), d(n, () => r(2), null), n;
      })();
    case "grid":
      return (() => {
        var n = mr();
        return d(n, x(ge, {
          get each() {
            return t();
          },
          children: (i) => (() => {
            var s = vr();
            return d(s, x(ge, {
              get each() {
                return i.children ?? [i];
              },
              children: (u) => (() => {
                var o = br();
                return d(o, x(we, {
                  box: u
                })), o;
              })()
            })), s;
          })()
        })), n;
      })();
    case "lines":
      return (() => {
        var n = $r();
        return d(n, x(ge, {
          get each() {
            return t();
          },
          children: (i) => (() => {
            var s = Sr(), u = s.firstChild;
            return d(u, x(we, {
              box: i
            })), s;
          })()
        })), n;
      })();
    case "style":
      return (() => {
        var n = xr();
        return d(n, x(ge, {
          get each() {
            return t();
          },
          children: (i) => x(we, {
            box: i
          })
        })), K((i) => {
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
        var n = pr();
        return d(n, x(ge, {
          get each() {
            return t();
          },
          children: (i) => x(we, {
            box: i
          })
        })), n;
      })();
  }
}
function yr(e) {
  const [t, r] = H(e.scheduler.peek(e.index)), [n, i] = H(""), [s, u] = H(), [o, v] = H(!1), [p, a] = H(!1);
  let b = !0, D = 0, T;
  qe(() => {
    e.revision, D++, T?.abort(), a(!1), r(e.scheduler.peek(e.index)), i(""), u(void 0), v(!1);
    const _ = e.scheduler.request(e.index, (m) => {
      m instanceof Error ? i(m.message) : r(m);
    });
    he(_);
  }), Me(() => {
    he(() => {
      b = !1, D++, T?.abort();
    });
  });
  const O = async () => {
    if (p()) return;
    const _ = D;
    T = new AbortController(), a(!0);
    try {
      const m = await e.source(T.signal);
      b && _ === D && u(m);
    } catch (m) {
      b && _ === D && i(String(m));
    } finally {
      b && _ === D && a(!1);
    }
  };
  return (() => {
    var _ = kr(), m = _.firstChild;
    return m.firstChild, d(_, x(B, {
      get when() {
        return t();
      },
      get fallback() {
        return (() => {
          var h = st();
          return d(h, () => n() || "Loading formula..."), h;
        })();
      },
      children: (h) => [(() => {
        var l = wr(), S = l.firstChild;
        return d(S, x(we, {
          get box() {
            return h().box;
          }
        })), l;
      })(), x(B, {
        get when() {
          return h().status !== "complete";
        },
        get children() {
          var l = st();
          return d(l, () => h().reasons.join("; ")), l;
        }
      })]
    }), m), d(_, x(B, {
      get when() {
        return e.onEdit;
      },
      get children() {
        var h = _r();
        return h.$$click = () => e.onEdit?.(), h;
      }
    }), m), m.addEventListener("toggle", (h) => {
      const l = h.currentTarget.open;
      v(l), l && !s() && O(), l || (T?.abort(), u(void 0));
    }), d(m, x(B, {
      get when() {
        return o();
      },
      get children() {
        return x(B, {
          get when() {
            return s();
          },
          get fallback() {
            return (() => {
              var h = st();
              return d(h, () => n() || "Loading source..."), h;
            })();
          },
          children: (h) => [(() => {
            var l = Cr();
            return d(l, () => h().text), l;
          })(), x(B, {
            get when() {
              return h().total > h().text.length;
            },
            get children() {
              var l = Er(), S = l.firstChild, C = S.nextSibling, I = C.nextSibling, A = I.nextSibling;
              return A.nextSibling, d(l, () => h().text.length, C), d(l, () => h().total, A), l;
            }
          })]
        });
      }
    }), null), K((h) => {
      var l = t()?.status ?? "loading", S = o();
      return l !== h.e && U(_, "data-preview-status", h.e = l), S !== h.t && (m.open = h.t = S), h;
    }, {
      e: void 0,
      t: void 0
    }), _;
  })();
}
Ht(["click"]);
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
function ht(e) {
  return e.replace(/\\\[([A-Za-z]+)\]/g, (t, r) => {
    if (Pe[r]) return Pe[r];
    const n = /^(Script|DoubleStruck)(Capital)?([A-Z])$/.exec(r);
    if (!n) return t;
    const i = n[1] === "Script" ? n[2] ? 119964 : 119990 : n[2] ? 120120 : 120146;
    return String.fromCodePoint(i + n[3].charCodeAt(0) - 65);
  });
}
const zt = /* @__PURE__ */ new Set([
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
  "]]",
  "<|",
  "|>",
  "!!",
  "^^"
]), Lr = {
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
}, Tr = {
  "(": ")",
  "{": "}",
  "[": "]",
  "[[": "]]",
  "<|": "|>"
}, We = /* @__PURE__ */ new Set(["number", "string", "constant", "symbol", "function", "pattern"]), sn = /* @__PURE__ */ new Set(["(", "{", "[", "[[", "<|"]), Ir = (e) => e.kind === "plain" && /^\s+$/.test(e.text), Mt = (e) => Ir(e) || e.kind === "comment", Rr = (e) => We.has(e.kind) || sn.has(e.text), Dr = /* @__PURE__ */ new Set(["-", "+", "!", "++", "--"]), Je = (e) => {
  const t = (i) => i.kind === "tok" && /^\s+$/.test(i.text);
  let r = 0, n = e.length;
  for (; r < n && t(e[r]); ) r++;
  for (; n > r && t(e[n - 1]); ) n--;
  return e.slice(r, n);
}, Nt = (e) => {
  const t = Je(e);
  return t.length === 1 && t[0].kind === "group" && t[0].open === "(" && t[0].close === ")" ? t[0].inner : t;
}, Ce = (e) => {
  switch (e.kind) {
    case "frac":
      return !0;
    case "sqrt":
      return e.arg.some(Ce);
    case "sup":
      return e.base.some(Ce) || e.exp.some(Ce);
    case "sub":
      return e.base.some(Ce) || e.sub.some(Ce);
    case "group":
      return e.tall;
    default:
      return !1;
  }
};
class Or {
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
    for (; t < this.toks.length && Mt(this.toks[t]); ) t++;
    return t;
  }
  tok(t, r) {
    return { kind: "tok", cls: r ?? t.kind, text: ht(Lr[t.text] ?? t.text) };
  }
  // (...) {...} [...] [[...]] 
  // Bracketed group with comma-separated arguments.
  group() {
    const t = this.next(), r = Tr[t.text], n = [], i = [], s = /* @__PURE__ */ new Set([",", r, "]]"]), u = (p) => p.text === r || r === "]" && p.text === "]]";
    let o = "";
    const v = () => {
      const p = this.next();
      p.text === "]]" ? (o = "]", this.toks.splice(this.i, 0, { kind: "punctuation", text: "]" })) : o = p.text;
    };
    for (; this.peek(); ) {
      const p = this.peek();
      if (p.text === ",") break;
      if (u(p)) {
        v();
        break;
      }
      const a = this.seq(s);
      i.push(a), n.push(...a);
      const b = this.peek();
      if (!b) break;
      if (b.text === ",") {
        n.push(this.tok(b)), this.next();
        continue;
      }
      u(b) && v();
      break;
    }
    return { kind: "group", open: t.text, inner: n, close: o, tall: n.some(Ce), args: i };
  }
  // A single primary expression: literal, name, blank, slot or bracketed group.
  atomish() {
    const t = this.peek();
    if (!t) return [];
    if (sn.has(t.text)) return [this.group()];
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
    if (Dr.has(t.text))
      return this.next(), [this.tok(t), ...this.factor()];
    let r = this.atomish();
    if (!r.length) return [];
    for (; ; ) {
      const n = this.peek();
      if (!n) break;
      if (n.text === "[" || n.text === "[[") {
        const i = this.group(), s = r.length === 1 && r[0].kind === "tok" ? r[0].text : void 0;
        n.text === "[" && s === "Sqrt" && i.args.length === 1 ? r = [{ kind: "sqrt", arg: Je(i.args[0]) }] : n.text === "[" && s === "Subscript" && i.args.length === 2 ? r = [{ kind: "sub", base: Je(i.args[0]), sub: Je(i.args[1]) }] : r = [...r, i];
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
        t = [{ kind: "frac", num: Nt(t), den: Nt(n) }];
        continue;
      }
      if (Mt(r)) {
        const n = this.filler(), i = this.toks[n];
        if (i && Rr(i)) {
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
function Ar(e) {
  const t = [], r = (n) => n.text.length === 1 && (n.kind === "operator" || n.kind === "punctuation");
  for (const n of e)
    for (t.push({ kind: n.kind, text: n.text }); ; ) {
      const i = t.length;
      if (i >= 3 && r(t[i - 3]) && r(t[i - 2]) && r(t[i - 1])) {
        const s = t[i - 3].text + t[i - 2].text + t[i - 1].text;
        if (zt.has(s)) {
          t.splice(i - 3, 3, { kind: "operator", text: s });
          continue;
        }
      }
      if (i >= 2 && r(t[i - 2]) && r(t[i - 1])) {
        const s = t[i - 2].text + t[i - 1].text;
        if (zt.has(s)) {
          t.splice(i - 2, 2, { kind: "operator", text: s });
          continue;
        }
      }
      break;
    }
  return t;
}
const zr = /* @__PURE__ */ new Set();
function Mr(e) {
  const t = Ar(nn(e)), r = [[]];
  for (const n of t) {
    const i = n.text.split(`
`);
    for (const [s, u] of i.entries())
      s && r.push([]), u && r.at(-1).push({ kind: n.kind, text: u });
  }
  return r.map((n) => new Or(n).seq(zr));
}
var Nr = /* @__PURE__ */ w('<svg class=oc-nb-d viewBox="0 0 10 100"preserveAspectRatio=none aria-hidden=true><path fill=none stroke=currentColor stroke-width=1.3 stroke-linecap=round vector-effect=non-scaling-stroke>'), ft = /* @__PURE__ */ w("<span data-token=punctuation>"), Pr = /* @__PURE__ */ w("<span class=oc-nb-frac><span class=oc-nb-num></span><span class=oc-nb-den>"), qr = /* @__PURE__ */ w("<span class=oc-nb-exp>"), Vr = /* @__PURE__ */ w("<span class=oc-nb-sub-i>"), Hr = /* @__PURE__ */ w('<span class=oc-nb-sqrt><svg class=oc-nb-radsign viewBox="0 0 14 100"preserveAspectRatio=none aria-hidden=true><path d="M1 52L4.6 52L7 94L11 1.5L13.8 1.5"fill=none stroke=currentColor stroke-width=1.3 stroke-linecap=round vector-effect=non-scaling-stroke></path></svg><span class=oc-nb-rad>'), Fr = /* @__PURE__ */ w("<span class=oc-nb-gt>"), Br = /* @__PURE__ */ w("<span>"), Ur = /* @__PURE__ */ w("<div class=oc-nb-pretty aria-hidden=true>"), Gr = /* @__PURE__ */ w("<div class=oc-nb-pl>");
const Wr = {
  "(": "M7.6 2C4.9 13 3.4 30 3.4 50S4.9 87 7.6 98",
  ")": "M2.4 2C5.1 13 6.6 30 6.6 50S5.1 87 2.4 98",
  "[": "M7 3H3.4V97H7",
  "]": "M3 3H6.6V97H3",
  "[[": "M8.6 3H6.4V97H8.6 M4.4 3H2.2V97H4.4",
  "]]": "M1.4 3H3.6V97H1.4 M5.6 3H7.8V97H5.6",
  "{": "M7.4 2C5.2 2 4.4 4.5 4.4 9V40C4.4 45.5 2.2 46.5 2.2 50C2.2 53.5 4.4 54.5 4.4 60V91C4.4 95.5 5.2 98 7.4 98",
  "}": "M2.6 2C4.8 2 5.6 4.5 5.6 9V40C5.6 45.5 7.8 46.5 7.8 50C7.8 53.5 5.6 54.5 5.6 60V91C5.6 95.5 4.8 98 2.6 98",
  "<|": "M5.6 4L2.2 50L5.6 96 M8 4V96",
  "|>": "M4.4 4L7.8 50L4.4 96 M2 4V96"
};
function Pt(e) {
  const t = () => Wr[e.text];
  return x(B, {
    get when() {
      return t();
    },
    get fallback() {
      return (() => {
        var r = ft();
        return d(r, () => e.text), r;
      })();
    },
    get children() {
      var r = Nr(), n = r.firstChild;
      return K((i) => {
        var s = e.text, u = t();
        return s !== i.e && U(r, "data-d", i.e = s), u !== i.t && U(n, "d", i.t = u), i;
      }, {
        e: void 0,
        t: void 0
      }), r;
    }
  });
}
function ue(e) {
  return x(ge, {
    get each() {
      return e.items;
    },
    children: (t) => x(Jr, {
      node: t
    })
  });
}
function Jr(e) {
  switch (e.node.kind) {
    case "frac":
      return (() => {
        var t = Pr(), r = t.firstChild, n = r.nextSibling;
        return d(r, x(ue, {
          get items() {
            return e.node.num;
          }
        })), d(n, x(ue, {
          get items() {
            return e.node.den;
          }
        })), t;
      })();
    case "sup":
      return [x(ue, {
        get items() {
          return e.node.base;
        }
      }), (() => {
        var t = qr();
        return d(t, x(ue, {
          get items() {
            return e.node.exp;
          }
        })), t;
      })()];
    case "sub":
      return [x(ue, {
        get items() {
          return e.node.base;
        }
      }), (() => {
        var t = Vr();
        return d(t, x(ue, {
          get items() {
            return e.node.sub;
          }
        })), t;
      })()];
    case "sqrt":
      return (() => {
        var t = Hr(), r = t.firstChild;
        r.firstChild;
        var n = r.nextSibling;
        return d(n, x(ue, {
          get items() {
            return e.node.arg;
          }
        })), t;
      })();
    case "group":
      return e.node.tall ? (() => {
        var t = Fr();
        return d(t, x(Pt, {
          get text() {
            return e.node.open;
          }
        }), null), d(t, x(ue, {
          get items() {
            return e.node.inner;
          }
        }), null), d(t, (() => {
          var r = pe(() => !!e.node.close);
          return () => r() ? x(Pt, {
            get text() {
              return e.node.close;
            }
          }) : null;
        })(), null), K((r) => {
          var n = e.node.open, i = e.node.close;
          return n !== r.e && U(t, "data-o", r.e = n), i !== r.t && U(t, "data-c", r.t = i), r;
        }, {
          e: void 0,
          t: void 0
        }), t;
      })() : [(() => {
        var t = ft();
        return d(t, () => e.node.open), t;
      })(), x(ue, {
        get items() {
          return e.node.inner;
        }
      }), pe(() => pe(() => !!e.node.close)() ? (() => {
        var t = ft();
        return d(t, () => e.node.close), t;
      })() : null)];
    default:
      return (() => {
        var t = Br();
        return d(t, () => e.node.text), K(() => U(t, "data-token", e.node.cls)), t;
      })();
  }
}
function Kr(e) {
  const t = Y(() => Mr(e.value));
  return (() => {
    var r = Ur();
    return d(r, x(ge, {
      get each() {
        return t();
      },
      children: (n) => (() => {
        var i = Gr();
        return d(i, (() => {
          var s = pe(() => !!n.length);
          return () => s() ? x(ue, {
            items: n
          }) : "​";
        })()), i;
      })()
    })), r;
  })();
}
const jr = {
  batch: 8
};
function Xr(e, t, r = {
  request: (n) => requestAnimationFrame(n),
  cancel: (n) => cancelAnimationFrame(n)
}) {
  const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), u = [];
  let o = 0, v = "", p = 0, a, b, D = !1;
  const T = () => {
    b = void 0;
    const l = performance.now();
    for (; u.length && performance.now() - l < 4; ) u.shift()();
    u.length && (b = r.request(T));
  }, O = (l, S, C) => {
    u.push(() => {
      if (!(D || C !== p))
        for (const I of l.listeners) I(S);
    }), b === void 0 && (b = r.request(T));
  }, _ = () => {
    !D && a === void 0 && (a = r.request(m));
  }, m = () => {
    for (a = void 0; s.size < 2; ) {
      const l = [...n.values()].filter((I) => !I.running && I.listeners.size).slice(0, jr.batch);
      if (!l.length) break;
      for (const I of l) I.running = !0;
      const S = p, C = { tasks: l, controller: new AbortController() };
      s.add(C), t(`notebook preview batch cells=${l.length} queued=${n.size}`), e(
        v,
        l.map((I) => I.index),
        C.controller.signal
      ).then((I) => {
        if (!(S !== p || I.revision !== v || C.controller.signal.aborted))
          for (const A of l) {
            const F = I.cells.find((j) => j.index === A.index)?.preview;
            if (!F) {
              A.running = !1;
              continue;
            }
            const G = JSON.stringify(F).length * 2 + 128, ee = i.get(A.index);
            for (ee && (o -= ee.bytes), i.delete(A.index), i.set(A.index, { result: F, bytes: G }), o += G; i.size > 128 || o > 8 * 1024 * 1024; ) {
              const [j, Se] = i.entries().next().value;
              i.delete(j), o -= Se.bytes;
            }
            n.get(A.index) === A && n.delete(A.index), O(A, F, S);
          }
      }).catch((I) => {
        if (S === p)
          for (const A of l)
            n.get(A.index) === A && n.delete(A.index), C.controller.signal.aborted || O(A, I instanceof Error ? I : Error(String(I)), S);
      }).finally(() => {
        s.delete(C), _();
      });
    }
  }, h = (l) => {
    p++, v = l;
    for (const S of s) S.controller.abort();
    s.clear(), n.clear(), i.clear(), u.length = 0, o = 0;
  };
  return {
    reset: h,
    // Synchronous cache read used to seed a remounted cell before the first
    // paint, so virtualization never flashes a loading frame on a cache hit.
    peek(l) {
      const S = i.get(l);
      if (S)
        return i.delete(l), i.set(l, S), S.result;
    },
    request(l, S) {
      const C = i.get(l);
      if (C)
        return i.delete(l), i.set(l, C), S(C.result), () => {
        };
      let I = n.get(l);
      I || (I = { index: l, listeners: /* @__PURE__ */ new Set(), running: !1 }, n.set(l, I)), I.listeners.add(S), _();
      const A = I;
      return () => {
        A.listeners.delete(S), !A.listeners.size && !A.running && n.delete(l);
        for (const F of s)
          if (F.tasks.every((G) => !G.listeners.size)) {
            for (const G of F.tasks) n.get(G.index) === G && n.delete(G.index);
            F.controller.abort();
          }
      };
    },
    dispose() {
      D = !0, h(""), a !== void 0 && r.cancel(a), b !== void 0 && r.cancel(b);
    }
  };
}
var Zr = /* @__PURE__ */ w("<span>"), Yr = /* @__PURE__ */ w("<div class=oc-nb-preview><p class=oc-nb-muted>Large content (<!> characters). Preview only.</p><pre></pre><button>Load full content"), Qr = /* @__PURE__ */ w("<pre>"), ei = /* @__PURE__ */ w("<pre class=oc-nb-highlight aria-hidden=true>​"), ti = /* @__PURE__ */ w("<div class=oc-nb-editor><textarea rows=1>"), ni = /* @__PURE__ */ w("<div class=oc-nb-error role=alert>"), ri = /* @__PURE__ */ w("<div class=oc-nb-notice role=status>"), ii = /* @__PURE__ */ w("<div class=oc-nb-add><button>+ Input cell</button><button>+ Text cell"), si = /* @__PURE__ */ w('<section class=oc-nb aria-label="Mathematica Notebook"><header class=oc-nb-toolbar aria-label="Notebook actions"><div class=oc-nb-actions><button>Run all</button><button>Stop / reset</button><button>Save</button><button></button></div><div class=oc-nb-side><div class=oc-nb-fontgroup role=group aria-label="Font size"><button aria-label="Decrease font size"title="Decrease font size">A−</button><button class=oc-nb-fontvalue title="Reset font size">%</button><button aria-label="Increase font size"title="Increase font size">A+</button></div><button>Source</button></div></header><div class=oc-nb-messages></div><div class=oc-nb-paper><div class=oc-nb-list></div><footer class=oc-nb-footnote>Local Wolfram kernel · Shared with agent · Run results are temporary; Save writes cell edits only.'), oi = /* @__PURE__ */ w("<p class=oc-nb-muted>"), li = /* @__PURE__ */ w("<button class=oc-nb-run>"), ai = /* @__PURE__ */ w("<article class=oc-nb-cell><aside class=oc-nb-label><span class=oc-nb-cell-label></span></aside><div class=oc-nb-content>"), ci = /* @__PURE__ */ w("<img loading=lazy decoding=async>", !0, !1, !1), ui = /* @__PURE__ */ w("<details><summary>Expression"), di = /* @__PURE__ */ w("<div class=oc-nb-output><span class=oc-nb-out-label>Out[<!>]=");
const on = "local.mathematica-notebook";
function ln(e) {
  const t = Y(() => nn(e.value));
  return x(ge, {
    get each() {
      return t();
    },
    children: (r) => (() => {
      var n = Zr();
      return d(n, () => r.text), K(() => U(n, "data-token", r.kind)), n;
    })()
  });
}
function an(e) {
  const t = Y(() => ht(Xn(e.value)));
  return (() => {
    var r = Yr(), n = r.firstChild, i = n.firstChild, s = i.nextSibling;
    s.nextSibling;
    var u = n.nextSibling, o = u.nextSibling;
    return d(n, () => (e.characters ?? e.value.length).toLocaleString(), s), d(u, t), Vt(o, "click", e.onLoad, !0), r;
  })();
}
function ot(e) {
  return x(B, {
    get when() {
      return !rn(e.value) || e.full;
    },
    get fallback() {
      return x(an, {
        get value() {
          return e.value;
        },
        get onLoad() {
          return e.onLoad;
        }
      });
    },
    get children() {
      var t = Qr();
      return d(t, x(ln, {
        get value() {
          return ht(e.value);
        }
      })), K(() => t.classList.toggle("oc-nb-printed", !!e.printed)), t;
    }
  });
}
function fi(e) {
  let t, r;
  const [n, i] = H(!1), [s, u] = H(!!e.pretty && e.value.trim() === ""), o = Y(() => !!e.highlight && !n() && tn(e.value)), v = () => !!e.pretty && !s();
  let p = 0, a = !1, b;
  const D = (_) => {
    if (a) {
      a = !1, u(!1);
      return;
    }
    if (_.relatedTarget) {
      u(!1);
      return;
    }
    if (Date.now() - p < 500) {
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
  }, O = () => {
    v() || e.resize.schedule({
      field: t,
      syncScroll: T
    });
  };
  return qe(() => {
    if (e.value, o(), v()) {
      e.resize.remove(t), t.style.height = "", T();
      return;
    }
    O();
  }), Me(() => {
    let _ = -1;
    const m = new ResizeObserver(([l]) => {
      const S = l.contentRect.width;
      S !== _ && (_ = S, O());
    });
    m.observe(t);
    const h = (l) => {
      p = t.contains(l.target) ? 0 : Date.now();
    };
    document.addEventListener("pointerdown", h, !0), he(() => {
      m.disconnect(), document.removeEventListener("pointerdown", h, !0), b !== void 0 && clearTimeout(b);
    });
  }), he(() => e.resize.remove(t)), (() => {
    var _ = ti(), m = _.firstChild;
    d(_, x(B, {
      get when() {
        return o();
      },
      get children() {
        var l = ei(), S = l.firstChild, C = r;
        return typeof C == "function" ? xe(C, l) : r = l, d(l, x(ln, {
          get value() {
            return e.value;
          }
        }), S), l;
      }
    }), m), d(_, x(B, {
      get when() {
        return v();
      },
      get children() {
        return x(Kr, {
          get value() {
            return e.value;
          }
        });
      }
    }), m), m.$$input = (l) => {
      e.onInput(l.currentTarget.value), O();
    }, m.addEventListener("compositionend", () => {
      e.onInput(t.value), i(!1), e.onComposition(!1), O();
    }), m.addEventListener("compositionstart", () => {
      e.onComposition(!0), i(!0);
    }), m.$$keydown = (l) => {
      l.key === "Escape" && (a = !0, t.blur());
    }, m.addEventListener("blur", D), m.addEventListener("focus", () => u(!0)), m.addEventListener("scroll", T);
    var h = t;
    return typeof h == "function" ? xe(h, m) : t = m, K((l) => {
      var S = !!e.highlight, C = !!o(), I = !!v(), A = e.label, F = e.disabled, G = e.highlight ? !1 : void 0, ee = e.highlight ? "off" : void 0, j = e.highlight ? "off" : void 0;
      return S !== l.e && _.classList.toggle("is-code", l.e = S), C !== l.t && _.classList.toggle("is-highlighted", l.t = C), I !== l.a && _.classList.toggle("has-pretty", l.a = I), A !== l.o && U(m, "aria-label", l.o = A), F !== l.i && (m.disabled = l.i = F), G !== l.n && U(m, "spellcheck", l.n = G), ee !== l.s && U(m, "autocapitalize", l.s = ee), j !== l.h && U(m, "autocorrect", l.h = j), l;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0
    }), K(() => m.value = e.value), _;
  })();
}
function gi(e) {
  const [t, r] = H(), [n, i] = H({}), [s, u] = H({}), [o, v] = H({}), [p, a] = H({}), [b, D] = H(), [T, O] = H(), [_, m] = H(!1), [h, l] = H(), [S, C] = H(""), [I, A] = H(""), [F, G] = H(!1), [ee, j] = H(1), [Se, Le] = H(0), [N, M] = H({});
  let V, te, W, re, J, P = !0;
  const se = /* @__PURE__ */ new Map();
  let X, de = !1;
  const me = nr(), Te = rr((f) => e.context.log.debug(f)), Xe = (f) => {
    const $ = Math.min(2.2, Math.max(0.7, Math.round(f * 100) / 100));
    j($);
    try {
      localStorage.setItem("oc-nb-font-scale", String($));
    } catch {
    }
  };
  Me(() => {
    try {
      const f = Number(localStorage.getItem("oc-nb-font-scale"));
      f >= 0.7 && f <= 2.2 && j(f);
    } catch {
    }
  });
  const cn = Y(() => er(t()?.cells ?? [], b(), T())), Ve = async (f) => {
    const $ = f.startsWith("cell:") ? Number(f.slice(5)) : -1, E = t(), z = E?.cells[$];
    if (z?.deferred && E) {
      if (se.has($)) return;
      if ((z.characters ?? 0) > 1024 * 1024) {
        A("This cell exceeds the 1 MiB inline editor limit. Use Source to edit the complete notebook.");
        return;
      }
      const R = new AbortController();
      se.set($, R);
      try {
        let L = "";
        for (; L.length < (z.characters ?? 0); ) {
          const ie = (await ve("notebook.cells", {
            revision: E.revision,
            indexes: [$],
            kind: "text",
            offset: L.length
          }, R.signal)).cells[0]?.text;
          if (!ie) throw Error("Incomplete notebook text response");
          if (L += ie, !P || t()?.revision !== E.revision || t()?.path !== E.path) return;
        }
        r((oe) => oe && {
          ...oe,
          cells: oe.cells.map((ie) => ie.index === $ ? {
            ...ie,
            text: L,
            deferred: !1
          } : ie)
        });
      } catch (L) {
        P && !R.signal.aborted && C(String(L));
        return;
      } finally {
        se.get($) === R && se.delete($);
      }
    }
    a((R) => ({
      ...R,
      [f]: !0
    }));
  }, un = (f, $) => v((E) => E[f] === $ ? E : {
    ...E,
    [f]: $
  }), ve = (f, $ = {}, E) => e.context.rpc.call(f, {
    path: e.file.absolutePath,
    ...$
  }, {
    directory: e.file.directory,
    signal: E,
    timeoutMs: f === "notebook.open" || f === "notebook.cells" ? 2e4 : 366e4
  }), Ze = Xr((f, $, E) => ve("notebook.cells", {
    revision: f,
    indexes: $,
    kind: "preview"
  }, E), (f) => e.context.log.debug(f)), mt = (f) => {
    me.invalidate(), e.context.log.info(`notebook loaded path=${f.path} cells=${f.cells.length}`);
    const $ = t()?.revision !== f.revision || t()?.path !== f.path;
    $ && Ze.reset(f.revision), wt(() => {
      r(Zn(f)), u(f.outputs), i({}), M({}), G(!1), A(""), D(void 0), O(void 0), $ && (v({}), a({}));
    }), e.setDirty?.(!1);
  }, Ye = async (f = !1) => {
    const $ = me.begin(), E = performance.now();
    e.context.log.debug(`notebook reload path=${e.file.absolutePath}`);
    try {
      const z = await ve("notebook.open", {}, $.signal);
      if (e.context.log.debug(`notebook rpc completed cells=${z.cells.length} rpcMs=${Math.round(performance.now() - E)}`), !P || !$.current()) return;
      const R = Ke(t);
      if (!f && R?.revision === z.revision && R.path === z.path) {
        u(z.outputs), C(""), e.context.log.debug(`notebook reload unchanged cells=${z.cells.length}`);
        return;
      }
      if (F()) {
        A("File changed. Your draft is kept. Reload discards it; save checks for conflicts.");
        return;
      }
      mt(z), C("");
    } catch (z) {
      P && $.current() && (e.context.log.error(`notebook reload failed path=${e.file.absolutePath} error=${String(z)}`), C(z instanceof Error ? z.message : String(z)));
    } finally {
      $.finish();
    }
  }, ke = async (f, $ = !1) => {
    if (_()) {
      if ($) throw new Error("Notebook is busy");
      return;
    }
    me.invalidate(), m(!0), C("");
    try {
      await f();
    } catch (E) {
      if (P && C(E instanceof Error ? E.message : String(E)), $) throw E;
    } finally {
      P && (m(!1), l(void 0));
    }
  }, He = async (f) => {
    const $ = t();
    if (!$) throw new Error("Notebook has not loaded");
    const E = await ve("notebook.save", {
      view: !0,
      preview: !0,
      revision: $.revision,
      edits: Qn(n()).filter(({
        index: z,
        text: R
      }) => {
        const L = $.cells[z];
        return L && R !== (L.editable ? L.text : N()[z] ?? L.text);
      }),
      append: f
    });
    P && mt(E);
  }, vt = async (f) => {
    const $ = t();
    if (!$) return;
    l(f.index);
    const E = new AbortController();
    X = E;
    try {
      const z = await ve("notebook.run", {
        index: f.index,
        revision: $.revision,
        code: f.editable ? n()[f.index] ?? (f.deferred ? void 0 : f.text) : n()[f.index]
      }, E.signal);
      if (P && t()?.revision === $.revision && u((R) => ({
        ...R,
        [f.index]: z
      })), !z.ok) throw new Error("Cell evaluation failed. See its output.");
    } finally {
      P && l(void 0), X === E && (X = void 0);
    }
  }, dn = async () => {
    de = !1, X?.abort();
    try {
      await ve("kernel.stop"), P && A("Kernel stopped. Variables have been reset.");
    } catch (f) {
      P && C(String(f));
    }
  }, fn = (f, $) => {
    const E = f.editable ? f.text : N()[f.index];
    i((R) => {
      const L = {
        ...R
      };
      return E !== void 0 && $ === E ? delete L[f.index] : L[f.index] = $, L;
    }), !f.editable && n()[f.index] === void 0 && M((R) => {
      const L = {
        ...R
      };
      return delete L[f.index], L;
    });
    const z = (t()?.cells ?? []).some((R) => {
      const L = n()[R.index];
      return L !== void 0 && L !== (R.editable ? R.text : N()[R.index] ?? R.text);
    });
    G(z), e.setDirty?.(z);
  }, gn = async (f) => {
    const $ = t();
    if (!$ || N()[f.index] !== void 0) return;
    let E = "", z = 1 / 0;
    for (; E.length < z; ) {
      const L = (await ve("notebook.cells", {
        revision: $.revision,
        indexes: [f.index],
        kind: "source",
        offset: E.length
      })).cells[0];
      if (!L?.text) return;
      E += L.text, z = L.total ?? E.length;
    }
    !P || t()?.revision !== $.revision || wt(() => {
      M((R) => ({
        ...R,
        [f.index]: E
      })), i((R) => ({
        ...R,
        [f.index]: E
      }));
    });
  };
  qe(() => {
    e.revision?.(), Ke(() => void Ye());
  });
  const hn = e.onSave?.(() => ke(() => He(), !0)), mn = e.context.events.on(`${on}/change`, (f) => {
    const $ = f;
    $.path === (t()?.path ?? e.file.absolutePath) && ($.type === "output" && $.revision === t()?.revision && u((E) => ({
      ...E,
      [$.index]: $.output
    })), $.type === "saved" && !_() && Ye(), $.type === "saved" && _() && A("Notebook saved externally. Reload before saving further edits."), $.type === "stopped" && A("Kernel stopped. Variables have been reset."));
  });
  return Me(() => {
    const f = e.setToolbar?.(te);
    he(() => f?.()), e.context.log.debug(`notebook toolbar mounted host=${!!e.setToolbar}`);
    let $;
    const E = () => {
      if ($ = void 0, !P) return;
      const L = V.parentElement, oe = V.previousElementSibling;
      if (L && oe instanceof HTMLElement) {
        const Fe = Math.max(0, oe.getBoundingClientRect().bottom - L.getBoundingClientRect().top - L.clientTop);
        V.style.setProperty("--oc-nb-surface-top", `${Fe}px`);
      }
      const ie = tr(V, J);
      Math.abs(ie - Se()) < 0.5 || (Le(ie), e.context.log.debug(`notebook virtual layout startMargin=${Math.round(ie)} buffer=${At}`));
    }, z = () => {
      $ === void 0 && ($ = requestAnimationFrame(E));
    }, R = new ResizeObserver(z);
    for (const L of [V, te, W, re, V.previousElementSibling])
      L && R.observe(L);
    E(), he(() => {
      R.disconnect(), $ !== void 0 && cancelAnimationFrame($);
    });
  }), he(() => {
    P = !1, me.invalidate(), de = !1, X?.abort(), Te.dispose(), Ze.dispose();
    for (const f of se.values()) f.abort();
    se.clear(), hn?.(), mn.dispose(), e.setDirty?.(!1);
  }), (() => {
    var f = si(), $ = f.firstChild, E = $.firstChild, z = E.firstChild, R = z.nextSibling, L = R.nextSibling;
    L.firstChild;
    var oe = L.nextSibling, ie = E.nextSibling, Fe = ie.firstChild, bt = Fe.firstChild, Be = bt.nextSibling, vn = Be.firstChild, bn = Be.nextSibling, $n = Fe.nextSibling, Ie = $.nextSibling, Qe = Ie.nextSibling, et = Qe.firstChild, $t = V;
    typeof $t == "function" ? xe($t, f) : V = f;
    var St = te;
    typeof St == "function" ? xe(St, $) : te = $, z.$$click = () => void ke(async () => {
      de = !0;
      try {
        for (const c of t().cells) {
          if (!de || !P) break;
          c.runnable && await vt(c);
        }
      } finally {
        de = !1;
      }
    }), R.$$click = () => void dn(), L.$$click = () => void ke(() => He()), d(L, () => F() ? " *" : "", null), oe.$$click = () => {
      const c = F();
      G(!1), e.setDirty?.(!1), Ye(c);
    }, d(oe, () => F() ? "Discard & reload" : "Reload"), bt.$$click = () => Xe(ee() - 0.1), Be.$$click = () => Xe(1), d(Be, () => Math.round(ee() * 100), vn), bn.$$click = () => Xe(ee() + 0.1), Vt($n, "click", e.showSource, !0);
    var xt = W;
    typeof xt == "function" ? xe(xt, Ie) : W = Ie, d(Ie, x(B, {
      get when() {
        return S();
      },
      get children() {
        var c = ni();
        return d(c, S), c;
      }
    }), null), d(Ie, x(B, {
      get when() {
        return I();
      },
      get children() {
        var c = ri();
        return d(c, I), c;
      }
    }), null);
    var pt = re;
    typeof pt == "function" ? xe(pt, Qe) : re = Qe;
    var _t = J;
    return typeof _t == "function" ? xe(_t, et) : J = et, d(et, x(B, {
      get when() {
        return t();
      },
      get fallback() {
        return (() => {
          var c = oi();
          return d(c, () => S() ? "Notebook could not be loaded. Reload to retry or open Source." : "Loading notebook..."), c;
        })();
      },
      get children() {
        return [x(Bn, {
          get data() {
            return t()?.cells ?? [];
          },
          scrollRef: V,
          get startMargin() {
            return Se();
          },
          bufferSize: At,
          get keepMounted() {
            return cn();
          },
          children: (c) => (() => {
            var ne = ai(), fe = ne.firstChild, ae = fe.firstChild, be = fe.nextSibling;
            return ne.$$focusout = (y) => {
              y.relatedTarget instanceof Node && y.currentTarget.contains(y.relatedTarget) || D((q) => q === c.index ? void 0 : q);
            }, ne.$$focusin = () => D(c.index), d(ae, (() => {
              var y = pe(() => c.style === "Input" || c.style === "Code");
              return () => y() ? `In[${c.index + 1}]:=` : c.style;
            })()), d(fe, x(B, {
              get when() {
                return c.runnable;
              },
              get children() {
                var y = li();
                return y.$$click = () => void ke(() => vt(c)), d(y, () => h() === c.index ? "Running..." : "Run"), K((q) => {
                  var Q = `Run cell ${c.index + 1}`, Ue = h() === c.index, Re = _();
                  return Q !== q.e && U(y, "aria-label", q.e = Q), Ue !== q.t && U(y, "aria-busy", q.t = Ue), Re !== q.a && (y.disabled = q.a = Re), q;
                }, {
                  e: void 0,
                  t: void 0,
                  a: void 0
                }), y;
              }
            }), null), d(be, x(B, {
              get when() {
                return c.editable || N()[c.index] !== void 0;
              },
              get fallback() {
                return x(yr, {
                  get index() {
                    return c.index;
                  },
                  get revision() {
                    return t()?.revision ?? "";
                  },
                  scheduler: Ze,
                  source: async (y) => {
                    const Q = (await ve("notebook.cells", {
                      revision: t()?.revision,
                      indexes: [c.index],
                      kind: "source"
                    }, y)).cells[0];
                    return {
                      text: Q?.text ?? "",
                      total: Q?.total ?? 0
                    };
                  },
                  get onEdit() {
                    return c.style === "Input" || c.style === "Code" ? () => void gn(c) : void 0;
                  }
                });
              },
              get children() {
                return x(B, {
                  get when() {
                    return pe(() => !c.deferred)() && (!rn(c.text) || p()[`cell:${c.index}`]);
                  },
                  get fallback() {
                    return x(an, {
                      get value() {
                        return c.text;
                      },
                      get characters() {
                        return c.characters;
                      },
                      onLoad: () => void Ve(`cell:${c.index}`)
                    });
                  },
                  get children() {
                    return x(fi, {
                      get label() {
                        return `Cell ${c.index + 1} (${c.style})`;
                      },
                      get disabled() {
                        return _();
                      },
                      get pretty() {
                        return pe(() => !!c.editable)() && (c.style === "Input" || c.style === "Code");
                      },
                      get highlight() {
                        return c.style === "Input" || c.style === "Code" || c.style === "Output";
                      },
                      get value() {
                        return Yn(c, n());
                      },
                      resize: Te,
                      onComposition: (y) => O((q) => y ? c.index : q === c.index ? void 0 : q),
                      onInput: (y) => fn(c, y)
                    });
                  }
                });
              }
            }), null), d(be, x(B, {
              get when() {
                return s()[c.index];
              },
              children: (y) => (() => {
                var q = di(), Q = q.firstChild, Ue = Q.firstChild, Re = Ue.nextSibling;
                return Re.nextSibling, d(Q, () => c.index + 1, Re), d(q, x(B, {
                  get when() {
                    return y().printed;
                  },
                  get children() {
                    return x(ot, {
                      printed: !0,
                      get value() {
                        return y().printed;
                      },
                      get full() {
                        return !!p()[`printed:${c.index}`];
                      },
                      onLoad: () => Ve(`printed:${c.index}`)
                    });
                  }
                }), null), d(q, x(B, {
                  get when() {
                    return y().image;
                  },
                  get fallback() {
                    return x(ot, {
                      get value() {
                        return y().text || (y().printed ? "" : "Null");
                      },
                      get full() {
                        return !!p()[`output:${c.index}`];
                      },
                      onLoad: () => Ve(`output:${c.index}`)
                    });
                  },
                  get children() {
                    return [(() => {
                      var Z = ci();
                      return K((ce) => {
                        var De = `Wolfram graphic from cell ${c.index + 1}`, kt = `data:image/png;base64,${y().image}`;
                        return De !== ce.e && U(Z, "alt", ce.e = De), kt !== ce.t && U(Z, "src", ce.t = kt), ce;
                      }, {
                        e: void 0,
                        t: void 0
                      }), Z;
                    })(), (() => {
                      var Z = ui();
                      return Z.firstChild, Z.addEventListener("toggle", (ce) => un(`expression:${c.index}`, ce.currentTarget.open)), d(Z, x(B, {
                        get when() {
                          return o()[`expression:${c.index}`];
                        },
                        get children() {
                          return x(ot, {
                            get value() {
                              return y().text;
                            },
                            get full() {
                              return !!p()[`output:${c.index}`];
                            },
                            onLoad: () => Ve(`output:${c.index}`)
                          });
                        }
                      }), null), K(() => Z.open = !!o()[`expression:${c.index}`]), Z;
                    })()];
                  }
                }), null), K((Z) => {
                  var ce = !y().ok, De = `Output cell ${c.index + 1}`;
                  return ce !== Z.e && q.classList.toggle("is-error", Z.e = ce), De !== Z.t && U(q, "aria-label", Z.t = De), Z;
                }, {
                  e: void 0,
                  t: void 0
                }), q;
              })()
            }), null), K((y) => {
              var q = c.index, Q = c.style;
              return q !== y.e && U(ne, "data-cell-index", y.e = q), Q !== y.t && U(ne, "data-style", y.t = Q), y;
            }, {
              e: void 0,
              t: void 0
            }), ne;
          })()
        }), (() => {
          var c = ii(), ne = c.firstChild, fe = ne.nextSibling;
          return ne.$$click = () => void ke(() => He({
            style: "Input",
            text: ""
          })), fe.$$click = () => void ke(() => He({
            style: "Text",
            text: ""
          })), K((ae) => {
            var be = _(), y = _();
            return be !== ae.e && (ne.disabled = ae.e = be), y !== ae.t && (fe.disabled = ae.t = y), ae;
          }, {
            e: void 0,
            t: void 0
          }), c;
        })()];
      }
    })), K((c) => {
      var ne = e.file.absolutePath, fe = String(ee()), ae = !!e.setToolbar, be = _() || !t(), y = !t(), q = _() || !F(), Q = _();
      return ne !== c.e && U(f, "data-notebook-path", c.e = ne), fe !== c.t && Ge(f, "--oc-nb-fs", c.t = fe), ae !== c.a && U($, "data-hosted", c.a = ae), be !== c.o && (z.disabled = c.o = be), y !== c.i && (R.disabled = c.i = y), q !== c.n && (L.disabled = c.n = q), Q !== c.s && (oe.disabled = c.s = Q), c;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0
    }), f;
  })();
}
const hi = {
  id: on,
  apiVersion: 1,
  activate(e) {
    e.log.info("activating Mathematica Notebook viewer");
    const t = e.fileViewers.register({
      id: "mathematica-notebook",
      component: (r) => x(gi, Sn(r, {
        context: e
      }))
    });
    return () => t.dispose();
  }
};
Ht(["click", "keydown", "input", "focusin", "focusout"]);
export {
  gi as NotebookViewer,
  hi as default
};
