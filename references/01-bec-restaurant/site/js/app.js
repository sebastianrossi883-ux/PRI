(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js
  var cookieconsent_esm_exports = {};
  __export(cookieconsent_esm_exports, {
    acceptCategory: () => Ve,
    acceptService: () => Le,
    acceptedCategory: () => Ie,
    acceptedService: () => je,
    eraseCookies: () => Pe,
    getConfig: () => Qe,
    getCookie: () => Ke,
    getUserPreferences: () => Ue,
    hide: () => Re,
    hidePreferences: () => $e,
    loadScript: () => ze,
    reset: () => Ye,
    run: () => Xe,
    setCookieData: () => qe,
    setLanguage: () => Je,
    show: () => Oe,
    showPreferences: () => Be,
    validConsent: () => We,
    validCookie: () => Fe
  });
  function be(e3, t3, o3, n3, a3) {
    const c3 = g.o, r3 = g.ne, l3 = k("label"), f2 = k("input"), _2 = k("span"), u2 = k("span"), p2 = k("span"), m2 = k("span"), v2 = k("span");
    if (m2.innerHTML = W(1, 3), v2.innerHTML = W(0, 3), f2.type = "checkbox", V(l3, "section__toggle-wrapper"), V(f2, "section__toggle"), V(m2, "toggle__icon-on"), V(v2, "toggle__icon-off"), V(_2, "toggle__icon"), V(u2, "toggle__icon-circle"), V(p2, "toggle__label"), E(_2, i2, "true"), n3 ? (V(l3, "toggle-service"), E(f2, s2, a3), r3.se[a3][t3] = f2) : r3.ae[t3] = f2, n3 ? ((e4) => {
      R(f2, "change", () => {
        const t4 = r3.se[e4], o4 = r3.ae[e4];
        c3.Z[e4] = [];
        for (let o5 in t4) {
          const n4 = t4[o5];
          n4.checked && c3.Z[e4].push(n4.value);
        }
        o4.checked = c3.Z[e4].length > 0;
      });
    })(a3) : ((e4) => {
      R(f2, d, () => {
        const t4 = r3.se[e4], o4 = f2.checked;
        c3.Z[e4] = [];
        for (let n4 in t4) t4[n4].checked = o4, o4 && c3.Z[e4].push(n4);
      });
    })(t3), f2.value = t3, p2.textContent = e3.replace(/<.*>.*<\/.*>/gm, ""), H(u2, v2), H(u2, m2), H(_2, u2), c3.D) (o3.readOnly || o3.enabled) && (f2.checked = true);
    else if (n3) {
      const e4 = c3.Y[a3];
      f2.checked = o3.readOnly || b(e4, t3);
    } else b(c3.R, t3) && (f2.checked = true);
    return o3.readOnly && (f2.disabled = true), H(l3, f2), H(l3, _2), H(l3, p2), l3;
  }
  var e2, t2, o2, n2, a2, s2, c2, r2, i2, l2, d, f, _, u, p, g, m, b, v, y, h, C, w, S, x, M, D, T, k, E, A, N, H, V, I, L, j, F, P, O, R, B, $, G, J, U, z, q, K, Q, W, X, Y, Z, ee, te, oe, ne, ae, se, ce, re, ie, le, de, fe, _e, ue, pe, ge, me, ve, ye, he, Ce, we, Se, xe, Me, De, Te, ke, Ee, Ae, Ne, He, Ve, Ie, Le, je, Fe, Pe, Oe, Re, Be, $e, Ge, Je, Ue, ze, qe, Ke, Qe, We, Xe, Ye;
  var init_cookieconsent_esm = __esm({
    "node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js"() {
      e2 = "opt-in";
      t2 = "opt-out";
      o2 = "show--consent";
      n2 = "show--preferences";
      a2 = "disable--interaction";
      s2 = "data-category";
      c2 = "div";
      r2 = "button";
      i2 = "aria-hidden";
      l2 = "btn-group";
      d = "click";
      f = "data-role";
      _ = "consentModal";
      u = "preferencesModal";
      p = class {
        constructor() {
          this.t = { mode: e2, revision: 0, autoShow: true, lazyHtmlGeneration: true, autoClearCookies: true, manageScriptTags: true, hideFromBots: true, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", secure: true, sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: false, h: null, C: null, S: null, M: "", D: true, T: false, k: false, A: false, N: false, H: [], V: false, I: true, L: [], j: false, F: "", P: false, O: [], R: [], B: [], $: [], G: false, J: false, U: false, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
        }
      };
      g = new p();
      m = (e3, t3) => e3.indexOf(t3);
      b = (e3, t3) => -1 !== m(e3, t3);
      v = (e3) => Array.isArray(e3);
      y = (e3) => "string" == typeof e3;
      h = (e3) => !!e3 && "object" == typeof e3 && !v(e3);
      C = (e3) => "function" == typeof e3;
      w = (e3) => Object.keys(e3);
      S = (e3) => Array.from(new Set(e3));
      x = () => document.activeElement;
      M = (e3) => e3.preventDefault();
      D = (e3, t3) => e3.querySelectorAll(t3);
      T = (e3) => e3.dispatchEvent(new Event("change"));
      k = (e3) => {
        const t3 = document.createElement(e3);
        return e3 === r2 && (t3.type = e3), t3;
      };
      E = (e3, t3, o3) => e3.setAttribute(t3, o3);
      A = (e3, t3, o3) => {
        e3.removeAttribute(o3 ? "data-" + t3 : t3);
      };
      N = (e3, t3, o3) => e3.getAttribute(o3 ? "data-" + t3 : t3);
      H = (e3, t3) => e3.appendChild(t3);
      V = (e3, t3) => e3.classList.add(t3);
      I = (e3, t3) => V(e3, "cm__" + t3);
      L = (e3, t3) => V(e3, "pm__" + t3);
      j = (e3, t3) => e3.classList.remove(t3);
      F = (e3) => {
        if ("object" != typeof e3) return e3;
        if (e3 instanceof Date) return new Date(e3.getTime());
        let t3 = Array.isArray(e3) ? [] : {};
        for (let o3 in e3) {
          let n3 = e3[o3];
          t3[o3] = F(n3);
        }
        return t3;
      };
      P = () => {
        const e3 = {}, { O: t3, X: o3, Y: n3 } = g.o;
        for (const a3 of t3) e3[a3] = $(n3[a3], w(o3[a3]));
        return e3;
      };
      O = (e3, t3) => dispatchEvent(new CustomEvent(e3, { detail: t3 }));
      R = (e3, t3, o3, n3) => {
        e3.addEventListener(t3, o3), n3 && g.o.m.push({ pe: e3, ge: t3, me: o3 });
      };
      B = () => {
        const e3 = g.t.cookie.expiresAfterDays;
        return C(e3) ? e3(g.o.F) : e3;
      };
      $ = (e3, t3) => {
        const o3 = e3 || [], n3 = t3 || [];
        return o3.filter((e4) => !b(n3, e4)).concat(n3.filter((e4) => !b(o3, e4)));
      };
      G = (e3) => {
        g.o.R = S(e3), g.o.F = (() => {
          let e4 = "custom";
          const { R: t3, O: o3, B: n3 } = g.o, a3 = t3.length;
          return a3 === o3.length ? e4 = "all" : a3 === n3.length && (e4 = "necessary"), e4;
        })();
      };
      J = (e3, t3, o3, n3) => {
        const a3 = "accept-", { show: s3, showPreferences: c3, hide: r3, hidePreferences: i3, acceptCategory: l3 } = t3, f2 = e3 || document, _2 = (e4) => D(f2, `[data-cc="${e4}"]`), u2 = (e4, t4) => {
          M(e4), l3(t4), i3(), r3();
        }, p2 = _2("show-preferencesModal"), m2 = _2("show-consentModal"), b2 = _2(a3 + "all"), v2 = _2(a3 + "necessary"), y2 = _2(a3 + "custom"), h2 = g.t.lazyHtmlGeneration;
        for (const e4 of p2) E(e4, "aria-haspopup", "dialog"), R(e4, d, (e5) => {
          M(e5), c3();
        }), h2 && (R(e4, "mouseenter", (e5) => {
          M(e5), g.o.N || o3(t3, n3);
        }, true), R(e4, "focus", () => {
          g.o.N || o3(t3, n3);
        }));
        for (let e4 of m2) E(e4, "aria-haspopup", "dialog"), R(e4, d, (e5) => {
          M(e5), s3(true);
        }, true);
        for (let e4 of b2) R(e4, d, (e5) => {
          u2(e5, "all");
        }, true);
        for (let e4 of y2) R(e4, d, (e5) => {
          u2(e5);
        }, true);
        for (let e4 of v2) R(e4, d, (e5) => {
          u2(e5, []);
        }, true);
      };
      U = (e3, t3) => {
        e3 && (t3 && (e3.tabIndex = -1), e3.focus(), t3 && e3.removeAttribute("tabindex"));
      };
      z = (e3, t3) => {
        const o3 = (n3) => {
          n3.target.removeEventListener("transitionend", o3), "opacity" === n3.propertyName && "1" === getComputedStyle(e3).opacity && U(((e4) => 1 === e4 ? g.ne.be : g.ne.ve)(t3));
        };
        R(e3, "transitionend", o3);
      };
      K = (e3) => {
        clearTimeout(q), e3 ? V(g.ne.ye, a2) : q = setTimeout(() => {
          j(g.ne.ye, a2);
        }, 500);
      };
      Q = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "];
      W = (e3 = 0, t3 = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t3}"><path d="${Q[e3]}"/></svg>`;
      X = (e3) => {
        const t3 = g.ne, o3 = g.o;
        ((e4) => {
          const n3 = e4 === t3.he, a3 = o3.i.disablePageInteraction ? t3.ye : n3 ? t3.Ce : t3.ye;
          R(a3, "keydown", (t4) => {
            if ("Tab" !== t4.key || !(n3 ? o3.k && !o3.A : o3.A)) return;
            const a4 = x(), s3 = n3 ? o3.q : o3.K;
            0 !== s3.length && (t4.shiftKey ? a4 !== s3[0] && e4.contains(a4) || (M(t4), U(s3[1])) : a4 !== s3[1] && e4.contains(a4) || (M(t4), U(s3[0])));
          }, true);
        })(e3);
      };
      Y = ["[href]", r2, "input", "details", "[tabindex]"].map((e3) => e3 + ':not([tabindex="-1"])').join(",");
      Z = (e3) => {
        const { o: t3, ne: o3 } = g, n3 = (e4, t4) => {
          const o4 = D(e4, Y);
          t4[0] = o4[0], t4[1] = o4[o4.length - 1];
        };
        1 === e3 && t3.T && n3(o3.he, t3.q), 2 === e3 && t3.N && n3(o3.we, t3.K);
      };
      ee = (e3, t3, o3) => {
        const { de: n3, le: a3, ie: s3, _e: c3, ue: r3, fe: i3 } = g.ce, l3 = g.re;
        if (t3) {
          const n4 = { modalName: t3 };
          return e3 === l3.fe ? C(i3) && i3(n4) : e3 === l3._e ? C(c3) && c3(n4) : (n4.modal = o3, C(r3) && r3(n4)), O(e3, n4);
        }
        const d2 = { cookie: g.o.p };
        e3 === l3.ie ? C(s3) && s3(F(d2)) : e3 === l3.le ? C(a3) && a3(F(d2)) : (d2.changedCategories = g.o.L, d2.changedServices = g.o.ee, C(n3) && n3(F(d2))), O(e3, F(d2));
      };
      te = (e3, t3) => {
        try {
          return e3();
        } catch (e4) {
          return !t3 && console.warn("CookieConsent:", e4), false;
        }
      };
      oe = (e3) => {
        const { Y: t3, ee: o3, O: n3, X: a3, oe: c3, p: r3, L: i3 } = g.o;
        for (const e4 of n3) {
          const n4 = o3[e4] || t3[e4] || [];
          for (const o4 of n4) {
            const n5 = a3[e4][o4];
            if (!n5) continue;
            const { onAccept: s3, onReject: c4 } = n5;
            !n5.Se && b(t3[e4], o4) ? (n5.Se = true, C(s3) && s3()) : n5.Se && !b(t3[e4], o4) && (n5.Se = false, C(c4) && c4());
          }
        }
        if (!g.t.manageScriptTags) return;
        const l3 = c3, d2 = e3 || r3.categories || [], f2 = (e4, n4) => {
          if (n4 >= e4.length) return;
          const a4 = c3[n4];
          if (a4.xe) return f2(e4, n4 + 1);
          const r4 = a4.Me, l4 = a4.De, _2 = a4.Te, u2 = b(d2, l4), p2 = !!_2 && b(t3[l4], _2);
          if (!_2 && !a4.ke && u2 || !_2 && a4.ke && !u2 && b(i3, l4) || _2 && !a4.ke && p2 || _2 && a4.ke && !p2 && b(o3[l4] || [], _2)) {
            a4.xe = true;
            const t4 = N(r4, "type", true);
            A(r4, "type", !!t4), A(r4, s2);
            let o4 = N(r4, "src", true);
            o4 && A(r4, "src", true);
            const c4 = k("script");
            c4.textContent = r4.innerHTML;
            for (const { nodeName: e5 } of r4.attributes) E(c4, e5, r4[e5] || N(r4, e5));
            t4 && (c4.type = t4), o4 ? c4.src = o4 : o4 = r4.src;
            const i4 = !!o4 && (!t4 || ["text/javascript", "module"].includes(t4));
            if (i4 && (c4.onload = c4.onerror = () => {
              f2(e4, ++n4);
            }), r4.replaceWith(c4), i4) return;
          }
          f2(e4, ++n4);
        };
        f2(l3, 0);
      };
      ne = "bottom";
      ae = "left";
      se = "center";
      ce = "right";
      re = "inline";
      ie = "wide";
      le = "pm--";
      de = ["middle", "top", ne];
      fe = [ae, se, ce];
      _e = { box: { Ee: [ie, re], Ae: de, Ne: fe, He: ne, Ve: ce }, cloud: { Ee: [re], Ae: de, Ne: fe, He: ne, Ve: se }, bar: { Ee: [re], Ae: de.slice(1), Ne: [], He: ne, Ve: "" } };
      ue = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [ie], Ae: [], Ne: [ae, ce], He: "", Ve: ae } };
      pe = (e3) => {
        const t3 = g.o.i.guiOptions, o3 = t3 && t3.consentModal, n3 = t3 && t3.preferencesModal;
        0 === e3 && ge(g.ne.he, _e, o3, "cm--", "box", "cm"), 1 === e3 && ge(g.ne.we, ue, n3, le, "box", "pm");
      };
      ge = (e3, t3, o3, n3, a3, s3) => {
        e3.className = s3;
        const c3 = o3 && o3.layout, r3 = o3 && o3.position, i3 = o3 && o3.flipButtons, l3 = !o3 || false !== o3.equalWeightButtons, d2 = c3 && c3.split(" ") || [], f2 = d2[0], _2 = d2[1], u2 = f2 in t3 ? f2 : a3, p2 = t3[u2], m2 = b(p2.Ee, _2) && _2, v2 = r3 && r3.split(" ") || [], y2 = v2[0], h2 = n3 === le ? v2[0] : v2[1], C2 = b(p2.Ae, y2) ? y2 : p2.He, w2 = b(p2.Ne, h2) ? h2 : p2.Ve, S2 = (t4) => {
          t4 && V(e3, n3 + t4);
        };
        S2(u2), S2(m2), S2(C2), S2(w2), i3 && S2("flip");
        const x2 = s3 + "__btn--secondary";
        if ("cm" === s3) {
          const { Ie: e4, Le: t4 } = g.ne;
          e4 && (l3 ? j(e4, x2) : V(e4, x2)), t4 && (l3 ? j(t4, x2) : V(t4, x2));
        } else {
          const { je: e4 } = g.ne;
          e4 && (l3 ? j(e4, x2) : V(e4, x2));
        }
      };
      me = (e3, t3) => {
        const o3 = g.o, n3 = g.ne, { hide: a3, hidePreferences: s3, acceptCategory: _2 } = e3, p2 = (e4) => {
          _2(e4), s3(), a3();
        }, m2 = o3.u && o3.u.preferencesModal;
        if (!m2) return;
        const b2 = m2.title, v2 = m2.closeIconLabel, C2 = m2.acceptAllBtn, S2 = m2.acceptNecessaryBtn, x2 = m2.savePreferencesBtn, M2 = m2.sections || [], D2 = C2 || S2 || x2;
        if (n3.Fe) n3.Pe = k(c2), L(n3.Pe, "body");
        else {
          n3.Fe = k(c2), V(n3.Fe, "pm-wrapper");
          const e4 = k("div");
          V(e4, "pm-overlay"), H(n3.Fe, e4), R(e4, d, s3), n3.we = k(c2), V(n3.we, "pm"), E(n3.we, "role", "dialog"), E(n3.we, i2, true), E(n3.we, "aria-modal", true), E(n3.we, "aria-labelledby", "pm__title"), R(n3.ye, "keydown", (e5) => {
            27 === e5.keyCode && s3();
          }, true), n3.Oe = k(c2), L(n3.Oe, "header"), n3.Re = k("h2"), L(n3.Re, "title"), n3.Re.id = "pm__title", n3.Be = k(r2), L(n3.Be, "close-btn"), E(n3.Be, "aria-label", m2.closeIconLabel || ""), R(n3.Be, d, s3), n3.$e = k("span"), n3.$e.innerHTML = W(), H(n3.Be, n3.$e), n3.Ge = k(c2), L(n3.Ge, "body"), n3.Je = k(c2), L(n3.Je, "footer");
          var T2 = k(c2);
          V(T2, "btns");
          var A2 = k(c2), N2 = k(c2);
          L(A2, l2), L(N2, l2), H(n3.Je, A2), H(n3.Je, N2), H(n3.Oe, n3.Re), H(n3.Oe, n3.Be), n3.ve = k(c2), E(n3.ve, "tabIndex", -1), H(n3.we, n3.ve), H(n3.we, n3.Oe), H(n3.we, n3.Ge), D2 && H(n3.we, n3.Je), H(n3.Fe, n3.we);
        }
        let I2;
        b2 && (n3.Re.innerHTML = b2, v2 && E(n3.Be, "aria-label", v2)), M2.forEach((e4, t4) => {
          const a4 = e4.title, s4 = e4.description, l3 = e4.linkedCategory, f2 = l3 && o3.P[l3], _3 = e4.cookieTable, u2 = _3 && _3.body, p3 = _3 && _3.caption, g2 = u2 && u2.length > 0, b3 = !!f2, v3 = b3 && o3.X[l3], C3 = h(v3) && w(v3) || [], S3 = b3 && (!!s4 || !!g2 || w(v3).length > 0);
          var x3 = k(c2);
          if (L(x3, "section"), S3 || s4) {
            var M3 = k(c2);
            L(M3, "section-desc-wrapper");
          }
          let D3 = C3.length;
          if (S3 && D3 > 0) {
            const e5 = k(c2);
            L(e5, "section-services");
            for (const t5 of C3) {
              const o4 = v3[t5], n4 = o4 && o4.label || t5, a5 = k(c2), s5 = k(c2), r3 = k(c2), i3 = k(c2);
              L(a5, "service"), L(i3, "service-title"), L(s5, "service-header"), L(r3, "service-icon");
              const d2 = be(n4, t5, f2, true, l3);
              i3.innerHTML = n4, H(s5, r3), H(s5, i3), H(a5, s5), H(a5, d2), H(e5, a5);
            }
            H(M3, e5);
          }
          if (a4) {
            var T3 = k(c2), A3 = k(b3 ? r2 : c2);
            if (L(T3, "section-title-wrapper"), L(A3, "section-title"), A3.innerHTML = a4, H(T3, A3), b3) {
              const e5 = k("span");
              e5.innerHTML = W(2, 3.5), L(e5, "section-arrow"), H(T3, e5), x3.className += "--toggle";
              const t5 = be(a4, l3, f2);
              let o4 = m2.serviceCounterLabel;
              if (D3 > 0 && y(o4)) {
                let e6 = k("span");
                L(e6, "badge"), L(e6, "service-counter"), E(e6, i2, true), E(e6, "data-servicecounter", D3), o4 && (o4 = o4.split("|"), o4 = o4.length > 1 && D3 > 1 ? o4[1] : o4[0], E(e6, "data-counterlabel", o4)), e6.innerHTML = D3 + (o4 ? " " + o4 : ""), H(A3, e6);
              }
              if (S3) {
                L(x3, "section--expandable");
                var N3 = l3 + "-desc";
                E(A3, "aria-expanded", false), E(A3, "aria-controls", N3);
              }
              H(T3, t5);
            } else E(A3, "role", "heading"), E(A3, "aria-level", "3");
            H(x3, T3);
          }
          if (s4) {
            var F2 = k("p");
            L(F2, "section-desc"), F2.innerHTML = s4, H(M3, F2);
          }
          if (S3 && (E(M3, i2, "true"), M3.id = N3, ((e5, t5, o4) => {
            R(A3, d, () => {
              t5.classList.contains("is-expanded") ? (j(t5, "is-expanded"), E(o4, "aria-expanded", "false"), E(e5, i2, "true")) : (V(t5, "is-expanded"), E(o4, "aria-expanded", "true"), E(e5, i2, "false"));
            });
          })(M3, x3, A3), g2)) {
            const e5 = k("table"), o4 = k("thead"), a5 = k("tbody");
            if (p3) {
              const t5 = k("caption");
              L(t5, "table-caption"), t5.innerHTML = p3, e5.appendChild(t5);
            }
            L(e5, "section-table"), L(o4, "table-head"), L(a5, "table-body");
            const s5 = _3.headers, r3 = w(s5), i3 = n3.Ue.createDocumentFragment(), l4 = k("tr");
            for (const e6 of r3) {
              const o5 = s5[e6], n4 = k("th");
              n4.id = "cc__row-" + o5 + t4, E(n4, "scope", "col"), L(n4, "table-th"), n4.innerHTML = o5, H(i3, n4);
            }
            H(l4, i3), H(o4, l4);
            const d2 = n3.Ue.createDocumentFragment();
            for (const e6 of u2) {
              const o5 = k("tr");
              L(o5, "table-tr");
              for (const n4 of r3) {
                const a6 = s5[n4], r4 = e6[n4], i4 = k("td"), l5 = k(c2);
                L(i4, "table-td"), E(i4, "data-column", a6), E(i4, "headers", "cc__row-" + a6 + t4), l5.insertAdjacentHTML("beforeend", r4), H(i4, l5), H(o5, i4);
              }
              H(d2, o5);
            }
            H(a5, d2), H(e5, o4), H(e5, a5), H(M3, e5);
          }
          (S3 || s4) && H(x3, M3);
          const P2 = n3.Pe || n3.Ge;
          b3 ? (I2 || (I2 = k(c2), L(I2, "section-toggles")), I2.appendChild(x3)) : I2 = null, H(P2, I2 || x3);
        }), C2 && (n3.ze || (n3.ze = k(r2), L(n3.ze, "btn"), E(n3.ze, f, "all"), H(A2, n3.ze), R(n3.ze, d, () => p2("all"))), n3.ze.innerHTML = C2), S2 && (n3.je || (n3.je = k(r2), L(n3.je, "btn"), E(n3.je, f, "necessary"), H(A2, n3.je), R(n3.je, d, () => p2([]))), n3.je.innerHTML = S2), x2 && (n3.qe || (n3.qe = k(r2), L(n3.qe, "btn"), L(n3.qe, "btn--secondary"), E(n3.qe, f, "save"), H(N2, n3.qe), R(n3.qe, d, () => p2())), n3.qe.innerHTML = x2), n3.Pe && (n3.we.replaceChild(n3.Pe, n3.Ge), n3.Ge = n3.Pe), pe(1), o3.N || (o3.N = true, ee(g.re.ue, u, n3.we), t3(e3), H(n3.Ce, n3.Fe), X(n3.we), setTimeout(() => V(n3.Fe, "cc--anim"), 100)), Z(2);
      };
      ve = () => {
        const e3 = k("span");
        return g.ne.Ke || (g.ne.Ke = e3), e3;
      };
      ye = (e3, t3) => {
        const o3 = g.o, n3 = g.ne, { hide: a3, showPreferences: s3, acceptCategory: u2 } = e3, p2 = o3.u && o3.u.consentModal;
        if (!p2) return;
        const m2 = p2.acceptAllBtn, b2 = p2.acceptNecessaryBtn, v2 = p2.showPreferencesBtn, y2 = p2.closeIconLabel, h2 = p2.footer, C2 = p2.label, w2 = p2.title, S2 = (e4) => {
          a3(), u2(e4);
        };
        if (!n3.Qe) {
          n3.Qe = k(c2), n3.he = k(c2), n3.We = k(c2), n3.Xe = k(c2), n3.Ye = k(c2), V(n3.Qe, "cm-wrapper"), V(n3.he, "cm"), I(n3.We, "body"), I(n3.Xe, "texts"), I(n3.Ye, "btns"), E(n3.he, "role", "dialog"), E(n3.he, "aria-modal", "true"), E(n3.he, i2, "false"), E(n3.he, "aria-describedby", "cm__desc"), C2 ? E(n3.he, "aria-label", C2) : w2 && E(n3.he, "aria-labelledby", "cm__title");
          const e4 = "box", t4 = o3.i.guiOptions, a4 = t4 && t4.consentModal, s4 = (a4 && a4.layout || e4).split(" ")[0] === e4;
          w2 && y2 && s4 && (n3.Le || (n3.Le = k(r2), n3.Le.innerHTML = W(), I(n3.Le, "btn"), I(n3.Le, "btn--close"), R(n3.Le, d, () => {
            S2([]);
          }), H(n3.We, n3.Le)), E(n3.Le, "aria-label", y2)), H(n3.We, n3.Xe), (m2 || b2 || v2) && H(n3.We, n3.Ye), n3.be = k(c2), E(n3.be, "tabIndex", -1), H(n3.he, n3.be), H(n3.he, n3.We), H(n3.Qe, n3.he);
        }
        w2 && (n3.Ze || (n3.Ze = k("h2"), n3.Ze.className = n3.Ze.id = "cm__title", H(n3.Xe, n3.Ze)), n3.Ze.innerHTML = w2);
        let x2 = p2.description;
        if (x2 && (o3.V && (x2 = x2.replace("{{revisionMessage}}", o3.I ? "" : p2.revisionMessage || "")), n3.et || (n3.et = k("p"), n3.et.className = n3.et.id = "cm__desc", H(n3.Xe, n3.et)), n3.et.innerHTML = x2), m2 && (n3.tt || (n3.tt = k(r2), H(n3.tt, ve()), I(n3.tt, "btn"), E(n3.tt, f, "all"), R(n3.tt, d, () => {
          S2("all");
        })), n3.tt.firstElementChild.innerHTML = m2), b2 && (n3.Ie || (n3.Ie = k(r2), H(n3.Ie, ve()), I(n3.Ie, "btn"), E(n3.Ie, f, "necessary"), R(n3.Ie, d, () => {
          S2([]);
        })), n3.Ie.firstElementChild.innerHTML = b2), v2 && (n3.ot || (n3.ot = k(r2), H(n3.ot, ve()), I(n3.ot, "btn"), I(n3.ot, "btn--secondary"), E(n3.ot, f, "show"), R(n3.ot, "mouseenter", () => {
          o3.N || me(e3, t3);
        }), R(n3.ot, d, s3)), n3.ot.firstElementChild.innerHTML = v2), n3.nt || (n3.nt = k(c2), I(n3.nt, l2), m2 && H(n3.nt, n3.tt), b2 && H(n3.nt, n3.Ie), (m2 || b2) && H(n3.We, n3.nt), H(n3.Ye, n3.nt)), n3.ot && !n3.st && (n3.st = k(c2), n3.Ie && n3.tt ? (I(n3.st, l2), H(n3.st, n3.ot), H(n3.Ye, n3.st)) : (H(n3.nt, n3.ot), I(n3.nt, l2 + "--uneven"))), h2) {
          if (!n3.ct) {
            let e4 = k(c2), t4 = k(c2);
            n3.ct = k(c2), I(e4, "footer"), I(t4, "links"), I(n3.ct, "link-group"), H(t4, n3.ct), H(e4, t4), H(n3.he, e4);
          }
          n3.ct.innerHTML = h2;
        }
        pe(0), o3.T || (o3.T = true, ee(g.re.ue, _, n3.he), t3(e3), H(n3.Ce, n3.Qe), X(n3.he), setTimeout(() => V(n3.Qe, "cc--anim"), 100)), Z(1), J(n3.We, e3, me, t3);
      };
      he = (e3) => {
        if (!y(e3)) return null;
        if (e3 in g.o._) return e3;
        let t3 = e3.slice(0, 2);
        return t3 in g.o._ ? t3 : null;
      };
      Ce = () => g.o.l || g.o.i.language.default;
      we = (e3) => {
        e3 && (g.o.l = e3);
      };
      Se = (e3) => __async(null, null, function* () {
        const t3 = g.o;
        let o3 = he(e3) ? e3 : Ce(), n3 = t3._[o3];
        if (y(n3) ? n3 = yield ((e4) => __async(null, null, function* () {
          try {
            const t4 = yield fetch(e4);
            return yield t4.json();
          } catch (e5) {
            return console.error(e5), false;
          }
        }))(n3) : C(n3) && (n3 = yield n3()), !n3) throw `Could not load translation for the '${o3}' language`;
        return t3.u = n3, we(o3), true;
      });
      xe = () => {
        let e3 = g.o.i.language.rtl, t3 = g.ne.Ce;
        e3 && t3 && (v(e3) || (e3 = [e3]), b(e3, g.o.l) ? V(t3, "cc--rtl") : j(t3, "cc--rtl"));
      };
      Me = () => {
        const e3 = g.ne;
        if (e3.Ce) return;
        e3.Ce = k(c2), e3.Ce.id = "cc-main", e3.Ce.setAttribute("data-nosnippet", ""), xe();
        let t3 = g.o.i.root;
        t3 && y(t3) && (t3 = document.querySelector(t3)), (t3 || e3.Ue.body).appendChild(e3.Ce);
      };
      De = (e3) => te(() => localStorage.removeItem(e3));
      Te = (e3, t3) => {
        if (t3 instanceof RegExp) return e3.filter((e4) => t3.test(e4));
        {
          const o3 = m(e3, t3);
          return o3 > -1 ? [e3[o3]] : [];
        }
      };
      ke = (e3) => {
        const { hostname: t3, protocol: o3 } = location, { name: n3, path: a3, domain: s3, sameSite: c3, useLocalStorage: r3, secure: i3 } = g.t.cookie, l3 = e3 ? (() => {
          const e4 = g.o.S, t4 = e4 ? /* @__PURE__ */ new Date() - e4 : 0;
          return 864e5 * B() - t4;
        })() : 864e5 * B(), d2 = /* @__PURE__ */ new Date();
        d2.setTime(d2.getTime() + l3), g.o.p.expirationTime = d2.getTime();
        const f2 = JSON.stringify(g.o.p);
        let _2 = n3 + "=" + encodeURIComponent(f2) + (0 !== l3 ? "; expires=" + d2.toUTCString() : "") + "; Path=" + a3 + "; SameSite=" + c3;
        b(t3, ".") && (_2 += "; Domain=" + s3), i3 && "https:" === o3 && (_2 += "; Secure"), r3 ? ((e4, t4) => {
          te(() => localStorage.setItem(e4, t4));
        })(n3, f2) : document.cookie = _2, g.o.p;
      };
      Ee = (e3, t3, o3) => {
        if (0 === e3.length) return;
        const n3 = o3 || g.t.cookie.domain, a3 = t3 || g.t.cookie.path, s3 = "www." === n3.slice(0, 4), c3 = s3 && n3.substring(4), r3 = (e4, t4) => {
          t4 && "." !== t4.slice(0, 1) && (t4 = "." + t4), document.cookie = e4 + "=; path=" + a3 + (t4 ? "; domain=" + t4 : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        };
        for (const t4 of e3) r3(t4, o3), o3 || r3(t4, n3), s3 && r3(t4, c3);
      };
      Ae = (e3) => {
        const t3 = e3 || g.t.cookie.name, o3 = g.t.cookie.useLocalStorage;
        return ((e4, t4) => {
          let o4;
          return o4 = te(() => JSON.parse(t4 ? e4 : decodeURIComponent(e4)), true) || {}, o4;
        })(o3 ? (n3 = t3, te(() => localStorage.getItem(n3)) || "") : Ne(t3, true), o3);
        var n3;
      };
      Ne = (e3, t3) => {
        const o3 = document.cookie.match("(^|;)\\s*" + e3 + "\\s*=\\s*([^;]+)");
        return o3 ? t3 ? o3.pop() : e3 : "";
      };
      He = (e3) => {
        const t3 = document.cookie.split(/;\s*/), o3 = [];
        for (const n3 of t3) {
          let t4 = n3.split("=")[0];
          e3 ? te(() => {
            e3.test(t4) && o3.push(t4);
          }) : o3.push(t4);
        }
        return o3;
      };
      Ve = (o3, n3 = []) => {
        ((e3, t3) => {
          const { O: o4, R: n4, B: a3, N: s3, Z: c3, $: r3, X: i3 } = g.o;
          let l3 = [];
          if (e3) {
            v(e3) ? l3.push(...e3) : y(e3) && (l3 = "all" === e3 ? o4 : [e3]);
            for (const e4 of o4) c3[e4] = b(l3, e4) ? w(i3[e4]) : [];
          } else l3 = [...n4, ...r3], s3 && (l3 = (() => {
            const e4 = g.ne.ae;
            if (!e4) return [];
            let t4 = [];
            for (let o5 in e4) e4[o5].checked && t4.push(o5);
            return t4;
          })());
          l3 = l3.filter((e4) => !b(o4, e4) || !b(t3, e4)), l3.push(...a3), G(l3);
        })(o3, n3), (() => {
          const e3 = g.o, { Z: t3, B: o4, Y: n4, X: a3, O: s3 } = e3, c3 = s3;
          e3.te = F(n4);
          for (const s4 of c3) {
            const c4 = a3[s4], r3 = w(c4), i3 = t3[s4] && t3[s4].length > 0, l3 = b(o4, s4);
            if (0 !== r3.length) {
              if (n4[s4] = [], l3) n4[s4].push(...r3);
              else if (i3) {
                const e4 = t3[s4];
                n4[s4].push(...e4);
              } else n4[s4] = e3.Z[s4];
              n4[s4] = S(n4[s4]);
            }
          }
        })(), (() => {
          const o4 = g.o;
          o4.L = g.t.mode === t2 && o4.D ? $(o4.$, o4.R) : $(o4.R, o4.p.categories);
          let n4 = o4.L.length > 0, a3 = false;
          for (const e3 of o4.O) o4.ee[e3] = $(o4.Y[e3], o4.te[e3]), o4.ee[e3].length > 0 && (a3 = true);
          const s3 = g.ne.ae;
          for (const e3 in s3) s3[e3].checked = b(o4.R, e3);
          for (const e3 of o4.O) {
            const t3 = g.ne.se[e3], n5 = o4.Y[e3];
            for (const e4 in t3) t3[e4].checked = b(n5, e4);
          }
          o4.C || (o4.C = /* @__PURE__ */ new Date()), o4.M || (o4.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (e3) => (e3 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e3 / 4).toString(16))), o4.p = { categories: F(o4.R), revision: g.t.revision, data: o4.h, consentTimestamp: o4.C.toISOString(), consentId: o4.M, services: F(o4.Y), languageCode: g.o.l }, o4.S && (o4.p.lastConsentTimestamp = o4.S.toISOString());
          let c3 = false;
          const r3 = n4 || a3;
          (o4.D || r3) && (o4.D && (o4.D = false, c3 = true), o4.S = o4.S ? /* @__PURE__ */ new Date() : o4.C, o4.p.lastConsentTimestamp = o4.S.toISOString(), ke(), g.t.autoClearCookies && (c3 || r3) && ((e3) => {
            const t3 = g.o, o5 = He(), n5 = ((e4) => {
              const t4 = g.o;
              return (e4 ? t4.O : t4.L).filter((e5) => {
                const o6 = t4.P[e5];
                return !!o6 && !o6.readOnly && !!o6.autoClear;
              });
            })(e3);
            for (const e4 in t3.ee) for (const n6 of t3.ee[e4]) {
              const a4 = t3.X[e4][n6].cookies;
              if (!b(t3.Y[e4], n6) && a4) for (const e5 of a4) {
                const t4 = Te(o5, e5.name);
                Ee(t4, e5.path, e5.domain);
              }
            }
            for (const a4 of n5) {
              const n6 = t3.P[a4].autoClear, s4 = n6 && n6.cookies || [], c4 = b(t3.L, a4), r4 = !b(t3.R, a4), i3 = c4 && r4;
              if (e3 ? r4 : i3) {
                n6.reloadPage && i3 && (t3.j = true);
                for (const e4 of s4) {
                  const t4 = Te(o5, e4.name);
                  Ee(t4, e4.path, e4.domain);
                }
              }
            }
          })(c3), oe()), c3 && (ee(g.re.ie), ee(g.re.le), g.t.mode === e2) || (r3 && ee(g.re.de), o4.j && (o4.j = false, location.reload()));
        })();
      };
      Ie = (e3) => {
        const t3 = g.o.D ? [] : g.o.R;
        return b(t3, e3);
      };
      Le = (e3, t3) => {
        const { O: o3, X: n3 } = g.o;
        if (!(e3 && t3 && y(t3) && b(o3, t3) && 0 !== w(n3[t3]).length)) return false;
        ((e4, t4) => {
          const o4 = g.o, { X: n4, Z: a3, N: s3 } = o4, c3 = g.ne.se[t4] || {}, r3 = g.ne.ae[t4] || {}, i3 = w(n4[t4]);
          if (a3[t4] = [], y(e4)) {
            if ("all" === e4) {
              if (a3[t4].push(...i3), s3) for (let e5 in c3) c3[e5].checked = true, T(c3[e5]);
            } else if (b(i3, e4) && a3[t4].push(e4), s3) for (let t5 in c3) c3[t5].checked = e4 === t5, T(c3[t5]);
          } else if (v(e4)) for (let o5 of i3) {
            const n5 = b(e4, o5);
            n5 && a3[t4].push(o5), s3 && (c3[o5].checked = n5, T(c3[o5]));
          }
          const l3 = 0 === a3[t4].length;
          o4.R = l3 ? o4.R.filter((e5) => e5 !== t4) : S([...o4.R, t4]), s3 && (r3.checked = !l3, T(r3));
        })(e3, t3), Ve();
      };
      je = (e3, t3) => {
        const o3 = g.o.D ? [] : g.o.Y[t3] || [];
        return b(o3, e3);
      };
      Fe = (e3) => "" !== Ne(e3, true);
      Pe = (e3, t3, o3) => {
        let n3 = [];
        const a3 = (e4) => {
          if (y(e4)) {
            let t4 = Ne(e4);
            "" !== t4 && n3.push(t4);
          } else n3.push(...He(e4));
        };
        if (v(e3)) for (let t4 of e3) a3(t4);
        else a3(e3);
        Ee(n3, t3, o3);
      };
      Oe = (e3) => {
        const { ne: t3, o: n3 } = g;
        if (!n3.k) {
          if (!n3.T) {
            if (!e3) return;
            ye(Ge, Me);
          }
          n3.k = true, n3.J = x(), n3.v && K(true), z(t3.he, 1), V(t3.ye, o2), E(t3.he, i2, "false"), setTimeout(() => {
            U(g.ne.be);
          }, 100), ee(g.re.fe, _);
        }
      };
      Re = () => {
        const { ne: e3, o: t3, re: n3 } = g;
        t3.k && (t3.k = false, t3.v && K(), U(e3.Ke, true), j(e3.ye, o2), E(e3.he, i2, "true"), U(t3.J), t3.J = null, ee(n3._e, _));
      };
      Be = () => {
        const e3 = g.o;
        e3.A || (e3.N || me(Ge, Me), e3.A = true, e3.k ? e3.U = x() : e3.J = x(), z(g.ne.we, 2), V(g.ne.ye, n2), E(g.ne.we, i2, "false"), setTimeout(() => {
          U(g.ne.ve);
        }, 100), ee(g.re.fe, u));
      };
      $e = () => {
        const e3 = g.o;
        e3.A && (e3.A = false, (() => {
          const e4 = We(), t3 = g.o.P, o3 = g.ne.ae, n3 = g.ne.se, a3 = (e5) => b(g.o.$, e5);
          for (const s3 in o3) {
            const c3 = !!t3[s3].readOnly;
            o3[s3].checked = c3 || (e4 ? Ie(s3) : a3(s3));
            for (const t4 in n3[s3]) n3[s3][t4].checked = c3 || (e4 ? je(t4, s3) : a3(s3));
          }
        })(), U(g.ne.$e, true), j(g.ne.ye, n2), E(g.ne.we, i2, "true"), e3.k ? (U(e3.U), e3.U = null) : (U(e3.J), e3.J = null), ee(g.re._e, u));
      };
      Ge = { show: Oe, hide: Re, showPreferences: Be, hidePreferences: $e, acceptCategory: Ve };
      Je = (e3, t3) => __async(null, null, function* () {
        if (!he(e3)) return false;
        const o3 = g.o;
        return !(e3 === Ce() && true !== t3 || !(yield Se(e3)) || (we(e3), o3.T && ye(Ge, Me), o3.N && me(Ge, Me), xe(), 0));
      });
      Ue = () => {
        const { F: e3, Y: t3 } = g.o, { accepted: o3, rejected: n3 } = (() => {
          const { D: e4, R: t4, O: o4 } = g.o;
          return { accepted: t4, rejected: e4 ? [] : o4.filter((e5) => !b(t4, e5)) };
        })();
        return F({ acceptType: e3, acceptedCategories: o3, rejectedCategories: n3, acceptedServices: t3, rejectedServices: P() });
      };
      ze = (e3, t3) => {
        let o3 = document.querySelector('script[src="' + e3 + '"]');
        return new Promise((n3) => {
          if (o3) return n3(true);
          if (o3 = k("script"), h(t3)) for (const e4 in t3) E(o3, e4, t3[e4]);
          o3.onload = () => n3(true), o3.onerror = () => {
            o3.remove(), n3(false);
          }, o3.src = e3, H(document.head, o3);
        });
      };
      qe = (e3) => {
        let t3, o3 = e3.value, n3 = e3.mode, a3 = false;
        const s3 = g.o;
        if ("update" === n3) {
          s3.h = t3 = Ke("data");
          const e4 = typeof t3 == typeof o3;
          if (e4 && "object" == typeof t3) {
            !t3 && (t3 = {});
            for (let e5 in o3) t3[e5] !== o3[e5] && (t3[e5] = o3[e5], a3 = true);
          } else !e4 && t3 || t3 === o3 || (t3 = o3, a3 = true);
        } else t3 = o3, a3 = true;
        return a3 && (s3.h = t3, s3.p.data = t3, ke(true)), a3;
      };
      Ke = (e3, t3) => {
        const o3 = Ae(t3);
        return e3 ? o3[e3] : o3;
      };
      Qe = (e3) => {
        const t3 = g.t, o3 = g.o.i;
        return e3 ? t3[e3] || o3[e3] : __spreadProps(__spreadValues(__spreadValues({}, t3), o3), { cookie: __spreadValues({}, t3.cookie) });
      };
      We = () => !g.o.D;
      Xe = (e3) => __async(null, null, function* () {
        const { o: o3, t: n3, re: a3 } = g, c3 = window;
        if (!c3._ccRun) {
          if (c3._ccRun = true, ((e4) => {
            const { ne: o4, t: n4, o: a4 } = g, c4 = n4, r4 = a4, { cookie: i4 } = c4, l3 = g.ce, d2 = e4.cookie, f2 = e4.categories, _2 = w(f2) || [], u2 = navigator, p2 = document;
            o4.Ue = p2, o4.ye = p2.documentElement, i4.domain = location.hostname, r4.i = e4, r4.P = f2, r4.O = _2, r4._ = e4.language.translations, r4.v = !!e4.disablePageInteraction, l3.ie = e4.onFirstConsent, l3.le = e4.onConsent, l3.de = e4.onChange, l3._e = e4.onModalHide, l3.fe = e4.onModalShow, l3.ue = e4.onModalReady;
            const { mode: m2, autoShow: v2, lazyHtmlGeneration: y2, autoClearCookies: C2, revision: S2, manageScriptTags: x2, hideFromBots: M2 } = e4;
            m2 === t2 && (c4.mode = m2), "boolean" == typeof C2 && (c4.autoClearCookies = C2), "boolean" == typeof x2 && (c4.manageScriptTags = x2), "number" == typeof S2 && S2 >= 0 && (c4.revision = S2, r4.V = true), "boolean" == typeof v2 && (c4.autoShow = v2), "boolean" == typeof y2 && (c4.lazyHtmlGeneration = y2), false === M2 && (c4.hideFromBots = false), true === c4.hideFromBots && u2 && (r4.G = u2.userAgent && /bot|crawl|spider|slurp|teoma/i.test(u2.userAgent) || u2.webdriver), h(d2) && (c4.cookie = __spreadValues(__spreadValues({}, i4), d2)), c4.autoClearCookies, r4.V, c4.manageScriptTags, ((e5) => {
              const { P: t3, X: o5, Y: n5, Z: a5, B: s3 } = g.o;
              for (let c5 of e5) {
                const e6 = t3[c5], r5 = e6.services || {}, i5 = h(r5) && w(r5) || [];
                o5[c5] = {}, n5[c5] = [], a5[c5] = [], e6.readOnly && (s3.push(c5), n5[c5] = i5), g.ne.se[c5] = {};
                for (let e7 of i5) {
                  const t4 = r5[e7];
                  t4.Se = false, o5[c5][e7] = t4;
                }
              }
            })(_2), (() => {
              if (!g.t.manageScriptTags) return;
              const e5 = g.o, t3 = D(document, "script[" + s2 + "]");
              for (const o5 of t3) {
                let t4 = N(o5, s2), n5 = o5.dataset.service || "", a5 = false;
                if (t4 && "!" === t4.charAt(0) && (t4 = t4.slice(1), a5 = true), "!" === n5.charAt(0) && (n5 = n5.slice(1), a5 = true), b(e5.O, t4) && (e5.oe.push({ Me: o5, xe: false, ke: a5, De: t4, Te: n5 }), n5)) {
                  const o6 = e5.X[t4];
                  o6[n5] || (o6[n5] = { Se: false });
                }
              }
            })(), we((() => {
              const e5 = g.o.i.language.autoDetect;
              if (e5) {
                const t3 = { browser: navigator.language, document: document.documentElement.lang }, o5 = he(t3[e5]);
                if (o5) return o5;
              }
              return Ce();
            })());
          })(e3), o3.G) return;
          (() => {
            const e4 = g.o, o4 = g.t, n4 = Ae(), { categories: a4, services: s3, consentId: c4, consentTimestamp: r4, lastConsentTimestamp: i4, data: l3, revision: d2 } = n4, f2 = v(a4);
            e4.p = n4, e4.M = c4;
            const _2 = !!c4 && y(c4);
            e4.C = r4, e4.C && (e4.C = new Date(r4)), e4.S = i4, e4.S && (e4.S = new Date(i4)), e4.h = void 0 !== l3 ? l3 : null, e4.V && _2 && d2 !== o4.revision && (e4.I = false), e4.D = !(_2 && e4.I && e4.C && e4.S && f2), o4.cookie.useLocalStorage && !e4.D && (e4.D = (/* @__PURE__ */ new Date()).getTime() > (n4.expirationTime || 0), e4.D && De(o4.cookie.name)), e4.D, (() => {
              const e5 = g.o;
              for (const o5 of e5.O) {
                const n5 = e5.P[o5];
                if (n5.readOnly || n5.enabled) {
                  e5.$.push(o5);
                  const n6 = e5.X[o5] || {};
                  for (let a5 in n6) e5.Z[o5].push(a5), e5.i.mode === t2 && e5.Y[o5].push(a5);
                }
              }
            })(), e4.D ? o4.mode === t2 && (e4.R = [...e4.$]) : (e4.Y = __spreadValues(__spreadValues({}, e4.Y), s3), e4.Z = __spreadValues({}, e4.Y), G([...e4.B, ...a4]));
          })();
          const i3 = We();
          if (!(yield Se())) return false;
          if (J(null, r3 = Ge, me, Me), g.o.D && ye(r3, Me), g.t.lazyHtmlGeneration || me(r3, Me), n3.autoShow && !i3 && Oe(true), i3) return oe(), ee(a3.le);
          n3.mode === t2 && oe(o3.$);
        }
        var r3;
      });
      Ye = (e3) => {
        const { Ce: t3, ye: s3 } = g.ne, { name: c3, path: r3, domain: i3, useLocalStorage: l3 } = g.t.cookie;
        e3 && (l3 ? De(c3) : Pe(c3, r3, i3));
        for (const { pe: e4, ge: t4, me: o3 } of g.o.m) e4.removeEventListener(t4, o3);
        t3 && t3.remove(), s3 && s3.classList.remove(a2, n2, o2);
        const d2 = new p();
        for (const e4 in g) g[e4] = d2[e4];
        window._ccRun = false;
      };
    }
  });

  // node_modules/modujs/dist/main.esm.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i3) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i3) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e2 = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i3 && _arr.length === i3) break;
      }
    } catch (err) {
      _d = true;
      _e2 = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e2;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o3, minLen) {
    if (!o3) return;
    if (typeof o3 === "string") return _arrayLikeToArray(o3, minLen);
    var n3 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n3 === "Object" && o3.constructor) n3 = o3.constructor.name;
    if (n3 === "Map" || n3 === "Set") return Array.from(o3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return _arrayLikeToArray(o3, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) arr2[i3] = arr[i3];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck(this, _default3);
      this.mAttr = "data-" + options.dataName;
      this.mCaptureEvents = ["mouseenter", "mouseleave"];
      this.el = options.el;
    }
    _createClass(_default3, [{
      key: "mInit",
      value: function mInit(modules) {
        var _this = this;
        this.modules = modules;
        this.mCheckEventTarget = this.mCheckEventTarget.bind(this);
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this.mAddEvent(event);
          });
        }
      }
    }, {
      key: "mUpdate",
      value: function mUpdate(modules) {
        this.modules = modules;
      }
    }, {
      key: "mDestroy",
      value: function mDestroy() {
        var _this2 = this;
        if (this.events) {
          Object.keys(this.events).forEach(function(event) {
            return _this2.mRemoveEvent(event);
          });
        }
      }
    }, {
      key: "mAddEvent",
      value: function mAddEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.addEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mRemoveEvent",
      value: function mRemoveEvent(event) {
        var capture = this.mCaptureEvents.includes(event) ? true : false;
        this.el.removeEventListener(event, this.mCheckEventTarget, capture);
      }
    }, {
      key: "mCheckEventTarget",
      value: function mCheckEventTarget(e3) {
        var event = this.events[e3.type];
        if (typeof event === "string") {
          this[event](e3);
        } else {
          var data = "[" + this.mAttr + "]";
          var target = e3.target;
          if (this.mCaptureEvents.includes(e3.type)) {
            if (target.matches(data)) {
              this.mCallEventMethod(e3, event, target);
            }
          } else {
            while (target && target !== document) {
              if (target.matches(data)) {
                if (this.mCallEventMethod(e3, event, target) != "undefined") {
                  break;
                }
              }
              target = target.parentNode;
            }
          }
        }
      }
    }, {
      key: "mCallEventMethod",
      value: function mCallEventMethod(e3, event, target) {
        var name = target.getAttribute(this.mAttr);
        if (event.hasOwnProperty(name)) {
          var method = event[name];
          if (!e3.hasOwnProperty("currentTarget")) {
            Object.defineProperty(e3, "currentTarget", {
              value: target
            });
          }
          if (!e3.hasOwnProperty("curTarget")) {
            Object.defineProperty(e3, "curTarget", {
              value: target
            });
          }
          this[method](e3);
        }
      }
    }, {
      key: "$",
      value: function $2(query, context3) {
        var classIndex = query.indexOf(".");
        var idIndex = query.indexOf("#");
        var attrIndex = query.indexOf("[");
        var indexes = [classIndex, idIndex, attrIndex].filter(function(index2) {
          return index2 != -1;
        });
        var index = false;
        var name = query;
        var more = "";
        var parent = this.el;
        if (indexes.length) {
          index = Math.min.apply(Math, _toConsumableArray(indexes));
          name = query.slice(0, index);
          more = query.slice(index);
        }
        if (_typeof(context3) == "object") {
          parent = context3;
        }
        return parent.querySelectorAll("[" + this.mAttr + "=" + name + "]" + more);
      }
    }, {
      key: "parent",
      value: function parent(query, context3) {
        var data = "[" + this.mAttr + "=" + query + "]";
        var parent2 = context3.parentNode;
        while (parent2 && parent2 !== document) {
          if (parent2.matches(data)) {
            return parent2;
          }
          parent2 = parent2.parentNode;
        }
      }
    }, {
      key: "getData",
      value: function getData(name, context3) {
        var target = context3 || this.el;
        return target.getAttribute(this.mAttr + "-" + name);
      }
    }, {
      key: "setData",
      value: function setData(name, value, context3) {
        var target = context3 || this.el;
        return target.setAttribute(this.mAttr + "-" + name, value);
      }
    }, {
      key: "call",
      value: function call(func, args, mod, id) {
        var _this3 = this;
        if (args && !mod) {
          mod = args;
          args = false;
        }
        if (this.modules[mod]) {
          if (id) {
            if (this.modules[mod][id]) {
              this.modules[mod][id][func](args);
            }
          } else {
            Object.keys(this.modules[mod]).forEach(function(id2) {
              _this3.modules[mod][id2][func](args);
            });
          }
        }
      }
    }, {
      key: "on",
      value: function on(e3, mod, func, id) {
        var _this4 = this;
        if (this.modules[mod]) {
          if (id) {
            this.modules[mod][id].el.addEventListener(e3, function(o3) {
              return func(o3);
            });
          } else {
            Object.keys(this.modules[mod]).forEach(function(i3) {
              _this4.modules[mod][i3].el.addEventListener(e3, function(o3) {
                return func(o3);
              });
            });
          }
        }
      }
    }, {
      key: "init",
      value: function init5() {
      }
    }, {
      key: "destroy",
      value: function destroy() {
      }
    }]);
    return _default3;
  }();
  var _default$1 = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck(this, _default3);
      this.app;
      this.modules = options.modules;
      this.currentModules = {};
      this.activeModules = {};
      this.newModules = {};
      this.moduleId = 0;
    }
    _createClass(_default3, [{
      key: "init",
      value: function init5(app2, scope) {
        var _this = this;
        var container = scope || document;
        var elements = container.querySelectorAll("*");
        if (app2 && !this.app) {
          this.app = app2;
        }
        this.activeModules["app"] = {
          "app": this.app
        };
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i3) {
            if (i3.name.startsWith("data-module")) {
              var moduleExists = false;
              var dataName = i3.name.split("-").splice(2);
              var moduleName = _this.toCamel(dataName);
              if (_this.modules[moduleName]) {
                moduleExists = true;
              } else if (_this.modules[_this.toUpper(moduleName)]) {
                moduleName = _this.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                var options = {
                  el,
                  name: moduleName,
                  dataName: dataName.join("-")
                };
                var module = new _this.modules[moduleName](options);
                var id = i3.value;
                if (!id) {
                  _this.moduleId++;
                  id = "m" + _this.moduleId;
                  el.setAttribute(i3.name, id);
                }
                _this.addActiveModule(moduleName, id, module);
                var moduleId = moduleName + "-" + id;
                if (scope) {
                  _this.newModules[moduleId] = module;
                } else {
                  _this.currentModules[moduleId] = module;
                }
              }
            }
          });
        });
        Object.entries(this.currentModules).forEach(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], module = _ref2[1];
          if (scope) {
            var split2 = id.split("-");
            var moduleName = split2.shift();
            var moduleId = split2.pop();
            _this.addActiveModule(moduleName, moduleId, module);
          } else {
            _this.initModule(module);
          }
        });
      }
    }, {
      key: "initModule",
      value: function initModule(module) {
        module.mInit(this.activeModules);
        module.init();
      }
    }, {
      key: "addActiveModule",
      value: function addActiveModule(name, id, module) {
        if (this.activeModules[name]) {
          Object.assign(this.activeModules[name], _defineProperty({}, id, module));
        } else {
          this.activeModules[name] = _defineProperty({}, id, module);
        }
      }
    }, {
      key: "update",
      value: function update(scope) {
        var _this2 = this;
        this.init(this.app, scope);
        Object.entries(this.currentModules).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], module = _ref4[1];
          module.mUpdate(_this2.activeModules);
        });
        Object.entries(this.newModules).forEach(function(_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2), id = _ref6[0], module = _ref6[1];
          _this2.initModule(module);
        });
        Object.assign(this.currentModules, this.newModules);
      }
    }, {
      key: "destroy",
      value: function destroy(scope) {
        if (scope) {
          this.destroyScope(scope);
        } else {
          this.destroyModules();
        }
      }
    }, {
      key: "destroyScope",
      value: function destroyScope(scope) {
        var _this3 = this;
        var elements = scope.querySelectorAll("*");
        elements.forEach(function(el) {
          Array.from(el.attributes).forEach(function(i3) {
            if (i3.name.startsWith("data-module")) {
              var id = i3.value;
              var dataName = i3.name.split("-").splice(2);
              var moduleName = _this3.toCamel(dataName) + "-" + id;
              var moduleExists = false;
              if (_this3.currentModules[moduleName]) {
                moduleExists = true;
              } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
                moduleName = _this3.toUpper(moduleName);
                moduleExists = true;
              }
              if (moduleExists) {
                _this3.destroyModule(_this3.currentModules[moduleName]);
                delete _this3.currentModules[moduleName];
              }
            }
          });
        });
        this.activeModules = {};
        this.newModules = {};
      }
    }, {
      key: "destroyModules",
      value: function destroyModules() {
        var _this4 = this;
        Object.entries(this.currentModules).forEach(function(_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2), id = _ref8[0], module = _ref8[1];
          _this4.destroyModule(module);
        });
        this.currentModules = [];
      }
    }, {
      key: "destroyModule",
      value: function destroyModule(module) {
        module.mDestroy();
        module.destroy();
      }
    }, {
      key: "toCamel",
      value: function toCamel(arr) {
        var _this5 = this;
        return arr.reduce(function(a3, b2) {
          return a3 + _this5.toUpper(b2);
        });
      }
    }, {
      key: "toUpper",
      value: function toUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }]);
    return _default3;
  }();
  var main_esm_default = _default$1;

  // src/scripts/modules.js
  var modules_exports = {};
  __export(modules_exports, {
    Alert: () => Alert_default,
    Collapse: () => Collapse_default,
    Example: () => Example_default,
    FooterCarousel: () => FooterCarousel_default,
    Hero: () => Hero_default,
    HomeHero: () => HomeHero_default,
    Load: () => Load_default,
    Menus: () => Menus_default,
    Nav: () => Nav_default,
    Page: () => Page_default,
    Popins: () => Popins_default,
    Scroll: () => Scroll_default,
    Services: () => Services_default,
    Shape: () => Shape_default,
    Slider: () => Slider_default,
    Story: () => Story_default,
    Video: () => Video_default
  });

  // src/scripts/modules/Example.js
  var Example_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    init() {
    }
  };

  // node_modules/modularload/dist/main.esm.js
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _slicedToArray2(arr, i3) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i3) || _unsupportedIterableToArray2(arr, i3) || _nonIterableRest2();
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArrayLimit2(arr, i3) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e2;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i3 && _arr.length === i3) break;
      }
    } catch (err) {
      _d = true;
      _e2 = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e2;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray2(o3, minLen) {
    if (!o3) return;
    if (typeof o3 === "string") return _arrayLikeToArray2(o3, minLen);
    var n3 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n3 === "Object" && o3.constructor) n3 = o3.constructor.name;
    if (n3 === "Map" || n3 === "Set") return Array.from(o3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return _arrayLikeToArray2(o3, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) arr2[i3] = arr[i3];
    return arr2;
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _default2 = /* @__PURE__ */ function() {
    function _default3(options) {
      _classCallCheck2(this, _default3);
      this.defaults = {
        name: "load",
        loadingClass: "is-loading",
        loadedClass: "is-loaded",
        readyClass: "is-ready",
        transitionsPrefix: "is-",
        transitionsHistory: true,
        enterDelay: 0,
        exitDelay: 0,
        loadedDelay: 0,
        isLoaded: false,
        isEntered: false,
        isUrl: false,
        transitionContainer: null,
        popstateIgnore: false
      };
      Object.assign(this, this.defaults, options);
      this.options = options;
      this.namespace = "modular";
      this.html = document.documentElement;
      this.href = window.location.href;
      this.container = "data-" + this.name + "-container";
      this.subContainer = false;
      this.prevTransition = null;
      this.loadAttributes = ["src", "srcset", "style", "href"];
      this.isInserted = false;
      this.isLoading = false;
      this.enterTimeout = false;
      this.controller = new AbortController();
      this.classContainer = this.html;
      this.isChrome = navigator.userAgent.indexOf("Chrome") != -1 ? true : false;
      this.init();
    }
    _createClass2(_default3, [{
      key: "init",
      value: function init5() {
        var _this = this;
        window.addEventListener("popstate", function(e3) {
          return _this.checkState(e3);
        }, false);
        this.html.addEventListener("click", function(e3) {
          return _this.checkClick(e3);
        }, false);
        this.loadEls(document);
      }
    }, {
      key: "checkClick",
      value: function checkClick(e3) {
        if (!e3.ctrlKey && !e3.metaKey) {
          var target = e3.target;
          while (target && target !== document) {
            if (target.matches("a") && target.getAttribute("download") == null) {
              var href = target.getAttribute("href");
              if (!href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
                e3.preventDefault();
                this.reset();
                this.getClickOptions(target);
              }
              break;
            }
            target = target.parentNode;
          }
        }
      }
    }, {
      key: "checkState",
      value: function checkState() {
        if (typeof this.popstateIgnore === "string" && window.location.href.indexOf(this.popstateIgnore) > -1) {
          return;
        }
        this.reset();
        this.getStateOptions();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.isLoading) {
          this.controller.abort();
          this.isLoading = false;
          this.controller = new AbortController();
        }
        window.clearTimeout(this.enterTimeout);
        if (this.isInserted) {
          this.removeContainer();
        }
        this.classContainer = this.html;
        Object.assign(this, this.defaults, this.options);
      }
    }, {
      key: "getClickOptions",
      value: function getClickOptions(link) {
        this.transition = link.getAttribute("data-" + this.name);
        this.isUrl = link.getAttribute("data-" + this.name + "-url");
        var href = link.getAttribute("href");
        var target = link.getAttribute("target");
        if (target == "_blank") {
          window.open(href, "_blank");
          return;
        }
        if (this.transition == "false") {
          window.location = href;
          return;
        }
        this.setOptions(href, true);
      }
    }, {
      key: "getStateOptions",
      value: function getStateOptions() {
        if (this.transitionsHistory) {
          this.transition = history.state;
        } else {
          this.transition = false;
        }
        var href = window.location.href;
        this.setOptions(href);
      }
    }, {
      key: "goTo",
      value: function goTo(href, transition, isUrl) {
        this.reset();
        this.transition = transition;
        this.isUrl = isUrl;
        this.setOptions(href, true);
      }
    }, {
      key: "setOptions",
      value: function setOptions(href, push) {
        var container = "[" + this.container + "]";
        var oldContainer;
        if (this.transition && this.transition != "true") {
          this.transitionContainer = "[" + this.container + '="' + this.transition + '"]';
          this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass;
          this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass;
          this.readyClass = this.transitions[this.transition].readyClass || this.readyClass;
          this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix;
          this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay;
          this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay;
          this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay;
          oldContainer = document.querySelector(this.transitionContainer);
        }
        if (oldContainer) {
          container = this.transitionContainer;
          this.oldContainer = oldContainer;
          this.classContainer = this.oldContainer.parentNode;
          if (!this.subContainer) {
            history.replaceState(this.transition, null, this.href);
          }
          this.subContainer = true;
        } else {
          this.oldContainer = document.querySelector(container);
          if (this.subContainer) {
            history.replaceState(this.prevTransition, null, this.href);
          }
          this.subContainer = false;
        }
        this.href = href;
        this.parentContainer = this.oldContainer.parentNode;
        if (this.isUrl === "" || this.isUrl != null && this.isUrl != "false" && this.isUrl != false) {
          history.pushState(this.transition, null, href);
        } else {
          this.oldContainer.classList.add("is-old");
          this.setLoading();
          this.startEnterDelay();
          this.loadHref(href, container, push);
        }
      }
    }, {
      key: "setLoading",
      value: function setLoading() {
        this.classContainer.classList.remove(this.loadedClass, this.readyClass);
        this.classContainer.classList.add(this.loadingClass);
        this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition);
        if (this.transition) {
          this.classContainer.classList.add(this.transitionsPrefix + this.transition);
        }
        if (!this.subContainer) {
          this.prevTransition = this.transition;
        }
        var loadingEvent = new Event(this.namespace + "loading");
        window.dispatchEvent(loadingEvent);
      }
    }, {
      key: "startEnterDelay",
      value: function startEnterDelay() {
        var _this2 = this;
        this.enterTimeout = window.setTimeout(function() {
          _this2.isEntered = true;
          if (_this2.isLoaded) {
            _this2.transitionContainers();
          }
        }, this.enterDelay);
      }
    }, {
      key: "loadHref",
      value: function loadHref(href, container, push) {
        var _this3 = this;
        this.isLoading = true;
        var signal = this.controller.signal;
        fetch(href, {
          signal
        }).then(function(response) {
          return response.text();
        }).then(function(data) {
          if (push) {
            history.pushState(_this3.transition, null, href);
          }
          var parser = new DOMParser();
          _this3.data = parser.parseFromString(data, "text/html");
          _this3.newContainer = _this3.data.querySelector(container);
          _this3.newContainer.classList.add("is-new");
          _this3.parentNewContainer = _this3.newContainer.parentNode;
          _this3.hideContainer();
          _this3.parentContainer.insertBefore(_this3.newContainer, _this3.oldContainer);
          _this3.isInserted = true;
          _this3.setSvgs();
          _this3.isLoaded = true;
          if (_this3.isEntered) {
            _this3.transitionContainers();
          }
          _this3.loadEls(_this3.newContainer);
          _this3.isLoading = false;
        })["catch"](function(err) {
          window.location = href;
        });
      }
    }, {
      key: "transitionContainers",
      value: function transitionContainers() {
        var _this4 = this;
        this.setAttributes();
        this.showContainer();
        this.setLoaded();
        setTimeout(function() {
          _this4.removeContainer();
          _this4.setReady();
        }, this.exitDelay);
      }
    }, {
      key: "setSvgs",
      value: function setSvgs() {
        if (this.isChrome) {
          var svgs = this.newContainer.querySelectorAll("use");
          if (svgs.length) {
            svgs.forEach(function(svg) {
              var xhref = svg.getAttribute("xlink:href");
              if (xhref) {
                svg.parentNode.innerHTML = '<use xlink:href="' + xhref + '"></use>';
              } else {
                var href = svg.getAttribute("href");
                if (href) svg.parentNode.innerHTML = '<use href="' + href + '"></use>';
              }
            });
          }
        }
      }
    }, {
      key: "setAttributes",
      value: function setAttributes() {
        var _this5 = this;
        var title = this.data.getElementsByTagName("title")[0];
        var newDesc = this.data.head.querySelector('meta[name="description"]');
        var oldDesc = document.head.querySelector('meta[name="description"]');
        var container;
        var newContainer;
        if (this.subContainer) {
          newContainer = this.parentNewContainer;
          container = document.querySelector(this.transitionContainer).parentNode;
        } else {
          newContainer = this.data.querySelector("html");
          container = document.querySelector("html");
        }
        var datas = Object.assign({}, newContainer.dataset);
        if (title) document.title = title.innerText;
        if (oldDesc && newDesc) oldDesc.setAttribute("content", newDesc.getAttribute("content"));
        if (datas) {
          Object.entries(datas).forEach(function(_ref) {
            var _ref2 = _slicedToArray2(_ref, 2), key = _ref2[0], val = _ref2[1];
            container.setAttribute("data-" + _this5.toDash(key), val);
          });
        }
      }
    }, {
      key: "toDash",
      value: function toDash(str) {
        return str.split(/(?=[A-Z])/).join("-").toLowerCase();
      }
    }, {
      key: "hideContainer",
      value: function hideContainer() {
        this.newContainer.style.visibility = "hidden";
        this.newContainer.style.height = 0;
        this.newContainer.style.overflow = "hidden";
      }
    }, {
      key: "showContainer",
      value: function showContainer() {
        this.newContainer.style.visibility = "";
        this.newContainer.style.height = "";
        this.newContainer.style.overflow = "";
      }
    }, {
      key: "loadEls",
      value: function loadEls(container) {
        var _this6 = this;
        var promises = [];
        this.loadAttributes.forEach(function(attr) {
          var data = "data-" + _this6.name + "-" + attr;
          var els = container.querySelectorAll("[" + data + "]");
          if (els.length) {
            els.forEach(function(el) {
              var elData = el.getAttribute(data);
              el.setAttribute(attr, elData);
              if (attr == "src" || attr == "srcset") {
                var promise = new Promise(function(resolve) {
                  el.onload = function() {
                    return resolve(el);
                  };
                });
                promises.push(promise);
              }
            });
          }
        });
        Promise.all(promises).then(function(val) {
          var imagesEvent = new Event(_this6.namespace + "images");
          window.dispatchEvent(imagesEvent);
        });
      }
    }, {
      key: "setLoaded",
      value: function setLoaded() {
        var _this7 = this;
        this.classContainer.classList.remove(this.loadingClass);
        setTimeout(function() {
          _this7.classContainer.classList.add(_this7.loadedClass);
        }, this.loadedDelay);
        var loadedEvent = new Event(this.namespace + "loaded");
        window.dispatchEvent(loadedEvent);
      }
    }, {
      key: "removeContainer",
      value: function removeContainer() {
        this.parentContainer.removeChild(this.oldContainer);
        this.newContainer.classList.remove("is-new");
        this.isInserted = false;
      }
    }, {
      key: "setReady",
      value: function setReady() {
        this.classContainer.classList.add(this.readyClass);
        var readyEvent = new Event(this.namespace + "ready");
        window.dispatchEvent(readyEvent);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        var _this8 = this;
        window.addEventListener(this.namespace + event, function() {
          switch (event) {
            case "loading":
              return func(_this8.transition, _this8.oldContainer);
            case "loaded":
              return func(_this8.transition, _this8.oldContainer, _this8.newContainer);
            case "ready":
              return func(_this8.transition, _this8.newContainer);
            default:
              return func();
          }
        }, false);
      }
    }]);
    return _default3;
  }();
  var main_esm_default2 = _default2;

  // node_modules/split-type/dist/index.js
  (function() {
    function append() {
      var length = arguments.length;
      for (var i3 = 0; i3 < length; i3++) {
        var node = i3 < 0 || arguments.length <= i3 ? void 0 : arguments[i3];
        if (node.nodeType === 1 || node.nodeType === 11) this.appendChild(node);
        else this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length) this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i3 = nodes.length;
      if (!parent) return;
      if (!i3) parent.removeChild(this);
      while (i3--) {
        var node = nodes[i3];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i3) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties3(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3] != null ? arguments[i3] : {};
      if (i3 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray3(arr, i3) {
    return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i3) || _unsupportedIterableToArray3(arr, i3) || _nonIterableRest3();
  }
  function _toConsumableArray2(arr) {
    return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread2();
  }
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray3(arr);
  }
  function _arrayWithHoles3(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _iterableToArrayLimit3(arr, i3) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e2 = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i3 && _arr.length === i3) break;
      }
    } catch (err) {
      _d = true;
      _e2 = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e2;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray3(o3, minLen) {
    if (!o3) return;
    if (typeof o3 === "string") return _arrayLikeToArray3(o3, minLen);
    var n3 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n3 === "Object" && o3.constructor) n3 = o3.constructor.name;
    if (n3 === "Map" || n3 === "Set") return Array.from(o3);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return _arrayLikeToArray3(o3, minLen);
  }
  function _arrayLikeToArray3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) arr2[i3] = arr[i3];
    return arr2;
  }
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value)) return value;
    if (value == null) return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray2(result), _toConsumableArray2(toArray(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray3(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "") return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray2(toArray(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray2(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray2(result.words), _toConsumableArray2(words)),
        chars: [].concat(_toConsumableArray2(result.chars), _toConsumableArray2(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray3(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x2 = _node$getBoundingClie.x, y2 = _node$getBoundingClie.y;
    var top = y2 + scrollY - parentY;
    var left = x2 + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray2(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName)) return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling) parent.insertBefore(element, nextSibling);
      else parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass3(SplitType2, null, [{
      key: "clearData",
      /**
       * CLears all data
       */
      value: function clearData() {
        clear();
      }
      /**
       * The default settings for all splitType instances
       * @static
       */
    }, {
      key: "setDefaults",
      /**
       * Sets the default settings for all SplitType instances.
       * The provided object will be merged with the existing defaults objects.
       *
       * @param {Object} settings an object containing the settings to override
       * @returns {Object} the new default settings
       * @public
       * @static
       * @example
       * SplitType.setDefaults({ "position": "absolute" })
       */
      value: function setDefaults(options) {
        _defaults = extend(_defaults, parseSettings(options));
        return defaults;
      }
      /**
       * Revert target elements to their original html content
       * Has no effect on that
       *
       * @param {any} elements The target elements to revert. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @static
       */
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
      /**
       * Creates a new SplitType instance
       * This static method provides a way to create a `SplitType` instance without
       * using the `new` keyword.
       *
       * @param {any} target The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       * @return {SplitType} the SplitType instance
       * @static
       */
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
      /**
       * Creates a new `SplitType` instance
       *
       * @param {any} elements The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       */
    }, {
      key: "data",
      /**
       * The internal data store
       */
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults;
      },
      set: function set2(options) {
        _defaults = extend(_defaults, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck3(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass3(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray2(_this.words), _toConsumableArray2(words));
          _this.chars = [].concat(_toConsumableArray2(_this.chars), _toConsumableArray2(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray2(_this.lines), _toConsumableArray2(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
      /**
       * Reverts target element(s) back to their original html content
       * Deletes all stored data associated with the target elements
       * Resets the properties on the splitType instance
       *
       * @public
       */
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/scripts/utils/text-animations.js
  function textAnimations(parent = document) {
    if (parent.querySelectorAll("[data-split]")) {
      setTimeout(() => {
        parent.querySelectorAll("[data-split]").forEach((splitElt) => {
          let splitType = splitElt.getAttribute("data-split") ? splitElt.getAttribute("data-split") : "lines,words";
          let selector3 = splitElt.querySelectorAll("p").length > 0 ? splitElt.querySelectorAll("p") : splitElt;
          let split2 = new SplitType(selector3, { types: splitType });
          if (splitElt.hasAttribute("data-split-animation")) {
            if (split2.lines) {
              split2.lines.forEach((l3, index) => {
                l3.style.setProperty("--l-index", index);
              });
            }
            if (split2.words) {
              split2.words.forEach((w2, index) => {
                w2.style.setProperty("--w-index", index);
              });
            }
            if (split2.chars) {
              split2.chars.forEach((c3, index) => {
                c3.style.setProperty("--c-index", index);
              });
            }
          }
        });
      }, 0);
    }
  }

  // src/scripts/shared.js
  function shared_default() {
    textAnimations();
  }

  // src/scripts/utils/dom.js
  var $html = document.documentElement;
  var $body = document.body;

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults2 = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i3;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i3 = _harnessPlugins.length;
      while (i3-- && !_harnessPlugins[i3].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i3];
    }
    i3 = targets.length;
    while (i3--) {
      targets[i3] && (targets[i3]._gsap || (targets[i3]._gsap = new GSCache(targets[i3], harnessPlugin))) || targets.splice(i3, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray2(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v2) {
    return (v2 = target[property]) && _isFunction(v2) ? target[property]() : _isUndefined(v2) && target.getAttribute && target.getAttribute(property) || v2;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l3 = toFind.length, i3 = 0;
    for (; toSearch.indexOf(toFind[i3]) < 0 && ++i3 < l3; ) {
    }
    return i3 < l3;
  };
  var _lazyRender = function _lazyRender2() {
    var l3 = _lazyTweens.length, a3 = _lazyTweens.slice(0), i3, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i3 = 0; i3 < l3; i3++) {
      tween = a3[i3];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _isRevertWorthy = function _isRevertWorthy2(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n3 = parseFloat(value);
    return (n3 || n3 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n3 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p2) {
    return p2;
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p2 in defaults3) {
      p2 in obj || (obj[p2] = defaults3[p2]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p2 in defaults3) {
        p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults3[p2]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p2 in toMerge) {
      base[p2] = toMerge[p2];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p2 in toMerge) {
      p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p2;
    for (p2 in obj) {
      p2 in excluding || (copy[p2] = obj[p2]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a22) {
    var i3 = a1.length, match = i3 === a22.length;
    while (match && i3-- && a1[i3] === a22[i3]) {
    }
    return i3 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t3;
    if (sortBy) {
      t3 = child[sortBy];
      while (prev && prev[sortBy] > t3) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a3 = animation;
      while (a3) {
        a3._dirty = 1;
        a3 = a3.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t3;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t3 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t3) - child._tTime > _tinyNum) {
        child.render(t3, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t3 = timeline2;
        while (t3._dp) {
          t3.rawTime() >= 0 && t3.totalTime(t3._tTime);
          t3 = t3._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i3, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i3 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i3 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i3 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i3 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i3 - 1) + position.substr(i3 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i3 > 1 ? _parsePosition2(animation, position.substr(0, i3 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v2) {
    return !_isString(value) || !(v2 = _unitExp.exec(value)) ? "" : v2[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v2) {
      return _clamp(min, max, v2);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray2(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray2 = function toArray3(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray2(value)[0] || _warn("Invalid scope") || {};
    return function(v2) {
      var el = value.current || value.nativeElement || value;
      return toArray2(v2, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a3) {
    return a3.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v2) {
    if (_isFunction(v2)) {
      return v2;
    }
    var vars = _isObject(v2) ? v2 : {
      each: v2
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache2 = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i3, target, a3) {
      var l3 = (a3 || vars).length, distances = cache2[l3], originX, originY, x2, y2, d2, j2, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a3[wrapAt++].getBoundingClientRect().left) && wrapAt < l3) {
          }
          wrapAt < l3 && wrapAt--;
        }
        distances = cache2[l3] = [];
        originX = ratios ? Math.min(wrapAt, l3) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l3 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j2 = 0; j2 < l3; j2++) {
          x2 = j2 % wrapAt - originX;
          y2 = originY - (j2 / wrapAt | 0);
          distances[j2] = d2 = !axis ? _sqrt(x2 * x2 + y2 * y2) : Math.abs(axis === "y" ? y2 : x2);
          d2 > max && (max = d2);
          d2 < min && (min = d2);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l3 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l3 ? l3 - 1 : !axis ? Math.max(wrapAt, l3 / wrapAt) : axis === "y" ? l3 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l3 < 0 ? base - l3 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l3 < 0 ? _invertEase(ease) : ease;
      }
      l3 = (distances[i3] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l3) : l3) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v2) {
    var p2 = Math.pow(10, ((v2 + "").split(".")[1] || "").length);
    return function(raw) {
      var n3 = _roundPrecise(Math.round(parseFloat(raw) / v2) * v2 * p2);
      return (n3 - n3 % 1) / p2 + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray2 = _isArray(snapTo), radius, is2D;
    if (!isArray2 && _isObject(snapTo)) {
      radius = isArray2 = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray2(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray2 ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x2 = parseFloat(is2D ? raw.x : raw), y2 = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i3 = snapTo.length, dx, dy;
      while (i3--) {
        if (is2D) {
          dx = snapTo[i3].x - x2;
          dy = snapTo[i3].y - y2;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i3] - x2);
        }
        if (dx < min) {
          min = dx;
          closest = i3;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v2, f2) {
        return f2(v2);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a3, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a3[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s3 = "", i3, nums, end, isArray2;
    while (~(i3 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i3);
      isArray2 = value.charAt(i3 + 7) === "[";
      nums = value.substr(i3 + 7, end - i3 - 7).match(isArray2 ? _delimitedValueExp : _strictNumExp);
      s3 += value.substr(prev, i3 - prev) + random(isArray2 ? nums : +nums[0], isArray2 ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s3 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p3) {
      return (1 - p3) * start + p3 * end;
    };
    if (!func) {
      var isString2 = _isString(start), master = {}, p2, i3, interpolators, l3, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString2) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l3 = start.length;
        il = l3 - 2;
        for (i3 = 1; i3 < l3; i3++) {
          interpolators.push(interpolate2(start[i3 - 1], start[i3]));
        }
        l3--;
        func = function func2(p3) {
          p3 *= l3;
          var i4 = Math.min(il, ~~p3);
          return interpolators[i4](p3 - i4);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p2 in end) {
          _addPropTween.call(master, start, p2, "get", end[p2]);
        }
        func = function func2(p3) {
          return _renderPropTweens(p3, master) || (isString2 ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p2, distance, label;
    for (p2 in labels) {
      distance = labels[p2] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p2;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v2 = animation.vars, callback = v2[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v2[type + "Params"];
    scope = v2.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h2, m1, m2) {
    h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
    return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v2, toHSL, forceAlpha) {
    var a3 = !v2 ? _colorLookup.black : _isNumber(v2) ? [v2 >> 16, v2 >> 8 & _255, v2 & _255] : 0, r3, g2, b2, h2, s3, l3, max, min, d2, wasHSL;
    if (!a3) {
      if (v2.substr(-1) === ",") {
        v2 = v2.substr(0, v2.length - 1);
      }
      if (_colorLookup[v2]) {
        a3 = _colorLookup[v2];
      } else if (v2.charAt(0) === "#") {
        if (v2.length < 6) {
          r3 = v2.charAt(1);
          g2 = v2.charAt(2);
          b2 = v2.charAt(3);
          v2 = "#" + r3 + r3 + g2 + g2 + b2 + b2 + (v2.length === 5 ? v2.charAt(4) + v2.charAt(4) : "");
        }
        if (v2.length === 9) {
          a3 = parseInt(v2.substr(1, 6), 16);
          return [a3 >> 16, a3 >> 8 & _255, a3 & _255, parseInt(v2.substr(7), 16) / 255];
        }
        v2 = parseInt(v2.substr(1), 16);
        a3 = [v2 >> 16, v2 >> 8 & _255, v2 & _255];
      } else if (v2.substr(0, 3) === "hsl") {
        a3 = wasHSL = v2.match(_strictNumExp);
        if (!toHSL) {
          h2 = +a3[0] % 360 / 360;
          s3 = +a3[1] / 100;
          l3 = +a3[2] / 100;
          g2 = l3 <= 0.5 ? l3 * (s3 + 1) : l3 + s3 - l3 * s3;
          r3 = l3 * 2 - g2;
          a3.length > 3 && (a3[3] *= 1);
          a3[0] = _hue(h2 + 1 / 3, r3, g2);
          a3[1] = _hue(h2, r3, g2);
          a3[2] = _hue(h2 - 1 / 3, r3, g2);
        } else if (~v2.indexOf("=")) {
          a3 = v2.match(_numExp);
          forceAlpha && a3.length < 4 && (a3[3] = 1);
          return a3;
        }
      } else {
        a3 = v2.match(_strictNumExp) || _colorLookup.transparent;
      }
      a3 = a3.map(Number);
    }
    if (toHSL && !wasHSL) {
      r3 = a3[0] / _255;
      g2 = a3[1] / _255;
      b2 = a3[2] / _255;
      max = Math.max(r3, g2, b2);
      min = Math.min(r3, g2, b2);
      l3 = (max + min) / 2;
      if (max === min) {
        h2 = s3 = 0;
      } else {
        d2 = max - min;
        s3 = l3 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
        h2 = max === r3 ? (g2 - b2) / d2 + (g2 < b2 ? 6 : 0) : max === g2 ? (b2 - r3) / d2 + 2 : (r3 - g2) / d2 + 4;
        h2 *= 60;
      }
      a3[0] = ~~(h2 + 0.5);
      a3[1] = ~~(s3 * 100 + 0.5);
      a3[2] = ~~(l3 * 100 + 0.5);
    }
    forceAlpha && a3.length < 4 && (a3[3] = 1);
    return a3;
  };
  var _colorOrderData = function _colorOrderData2(v2) {
    var values = [], c3 = [], i3 = -1;
    v2.split(_colorExp).forEach(function(v3) {
      var a3 = v3.match(_numWithUnitExp) || [];
      values.push.apply(values, a3);
      c3.push(i3 += a3.length + 1);
    });
    values.c = c3;
    return values;
  };
  var _formatColors = function _formatColors2(s3, toHSL, orderMatchData) {
    var result = "", colors = (s3 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i3 = 0, c3, shell, d2, l3;
    if (!colors) {
      return s3;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d2 = _colorOrderData(s3);
      c3 = orderMatchData.c;
      if (c3.join(result) !== d2.c.join(result)) {
        shell = s3.replace(_colorExp, "1").split(_numWithUnitExp);
        l3 = shell.length - 1;
        for (; i3 < l3; i3++) {
          result += shell[i3] + (~c3.indexOf(i3) ? colors.shift() || type + "0,0,0,0)" : (d2.length ? d2 : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s3.split(_colorExp);
      l3 = shell.length - 1;
      for (; i3 < l3; i3++) {
        result += shell[i3] + colors[i3];
      }
    }
    return result + shell[l3];
  };
  var _colorExp = function() {
    var s3 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
    for (p2 in _colorLookup) {
      s3 += "|" + p2 + "\\b";
    }
    return new RegExp(s3 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a3) {
    var combined = a3.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a3[1] = _formatColors(a3[1], toHSL);
      a3[0] = _formatColors(a3[0], toHSL, _colorOrderData(a3[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v2) {
      var elapsed = _getTime() - _lastUpdate, manual = v2 === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v2);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f2) {
            return setTimeout(f2, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t3, d2, f2, v2) {
          callback(t3, d2, f2, v2);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove2(callback, i3) {
        ~(i3 = _listeners2.indexOf(callback)) && _listeners2.splice(i3, 1) && _i >= i3 && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split2 = value.substr(1, value.length - 3).split(":"), key = split2[0], i3 = 1, l3 = split2.length, index, val, parsedVal;
    for (; i3 < l3; i3++) {
      val = split2[i3];
      index = i3 !== l3 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split2 = (name + "").split("("), ease = _easeMap[split2[0]];
    return ease && split2.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split2[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p2) {
      return 1 - ease(1 - p2);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p2) {
        return 1 - easeIn(1 - p2);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p2) {
        return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p2 in ease) {
        _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p2] = ease[p2];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p2) {
      return p2 < 0.5 ? (1 - easeOut(1 - p2 * 2)) / 2 : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p4) {
      return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p4) {
      return 1 - easeOut(1 - p4);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p2) {
      return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p2) {
      return 1 - easeOut(1 - p2);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i3) {
    var power = i3 < 5 ? i3 + 1 : i3;
    _insertEase(name + ",Power" + (power - 1), i3 ? function(p2) {
      return Math.pow(p2, power);
    } : function(p2) {
      return p2;
    }, function(p2) {
      return 1 - Math.pow(1 - p2, power);
    }, function(p2) {
      return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n3, c3) {
    var n1 = 1 / c3, n22 = 2 * n1, n32 = 2.5 * n1, easeOut = function easeOut2(p2) {
      return p2 < n1 ? n3 * p2 * p2 : p2 < n22 ? n3 * Math.pow(p2 - 1.5 / c3, 2) + 0.75 : p2 < n32 ? n3 * (p2 -= 2.25 / c3) * p2 + 0.9375 : n3 * Math.pow(p2 - 2.625 / c3, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p2) {
      return 1 - easeOut(1 - p2);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p2) {
    return Math.pow(2, 10 * (p2 - 1)) * p2 + p2 * p2 * p2 * p2 * p2 * p2 * (1 - p2);
  });
  _insertEase("Circ", function(p2) {
    return -(_sqrt(1 - p2 * p2) - 1);
  });
  _insertEase("Sine", function(p2) {
    return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p4) {
        return ((p2 * _clamp(0, max, p4) | 0) + p3) * p1;
      };
    }
  };
  _defaults2.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (_isRevertWorthy(this)) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      this._dur || (this._zTime = -_tinyNum);
      return this;
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f2 = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f2) && (f2 = f2(self)) && (f2.then || f2 === self) && (self.then = _then);
          resolve(f2);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set2(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a3 = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a3.push(child);
          } else {
            timelines && a3.push(child);
            nested && a3.push.apply(a3, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a3;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i3 = animations.length;
      while (i3--) {
        if (animations[i3].vars.id === id) {
          return animations[i3];
        }
      }
    };
    _proto2.remove = function remove2(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t3 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t3.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t3, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i3 = tweens.length;
      while (i3--) {
        _overwritingTween !== tweens[i3] && tweens[i3].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a3 = [], parsedTargets = toArray2(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a3.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a3.push.apply(a3, children);
        }
        child = child._next;
      }
      return a3;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p2;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p2 in labels) {
          if (labels[p2] >= ignoreBeforeTime) {
            labels[p2] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear2(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a3;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a3 = [start, end];
      stringFilter(a3, target, prop);
      start = a3[0];
      end = a3[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p2;
    for (p2 in vars) {
      copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i3;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i3 = plugin._props.length;
        while (i3--) {
          ptLookup[plugin._props[i3]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i3, p2, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults2.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults2.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p2 = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p2[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p2));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i3 = 0; i3 < targets.length; i3++) {
        target = targets[i3];
        gsData = target._gsap || _harness(targets)[i3]._gsap;
        tween._ptLookup[i3] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i3 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p2 in cleanVars) {
            if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p2] = pt = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i3] && tween.kill(target, tween._op[i3]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i3;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i3 = tween._targets.length;
      while (i3--) {
        pt = lookup[i3][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i3 = ptCache.length;
    while (i3--) {
      rootPT = ptCache[i3];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i3, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p2 in propertyAliases) {
      if (p2 in copy) {
        aliases = propertyAliases[p2].split(",");
        i3 = aliases.length;
        while (i3--) {
          copy[aliases[i3]] = copy[p2];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p2, a3;
    if (_isArray(obj)) {
      a3 = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i3) {
        return a3.push({
          t: i3 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p2 in obj) {
        a3 = allProps[p2] || (allProps[p2] = []);
        p2 === "ease" || a3.push({
          t: parseFloat(prop),
          v: obj[p2],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i3, target, targets) {
    return _isFunction(value) ? value.call(tween, i3, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray2(targets), tl, i3, copy, l3, p2, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l3 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p2 in stagger) {
              if (~_staggerTweenProps.indexOf(p2)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p2] = stagger[p2];
              }
            }
          }
          for (i3 = 0; i3 < l3; i3++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i3];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i3, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i3, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l3 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i3, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a3, kf, v2;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p2 in keyframes) {
              p2 === "ease" || p2 === "easeEach" || _parseKeyframe(p2, keyframes[p2], copy, keyframes.easeEach);
            }
            for (p2 in copy) {
              a3 = copy[p2].sort(function(a4, b2) {
                return a4.t - b2.t;
              });
              time = 0;
              for (i3 = 0; i3 < a3.length; i3++) {
                kf = a3[i3];
                v2 = {
                  ease: kf.e,
                  duration: (kf.t - (i3 ? a3[i3 - 1].t : 0)) / 100 * duration
                };
                v2[p2] = kf.v;
                tl.to(parsedTargets, v2, time);
                time += v2.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            } else if (time > dur) {
              time = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray2(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt, i3;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p2 = {};
          _forEachName(vars, function(name) {
            return p2[name] = 1;
          });
          vars = p2;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i3 = parsedTargets.length;
      while (i3--) {
        if (~killingTargets.indexOf(parsedTargets[i3])) {
          curLookup = propTweenLookup[i3];
          if (vars === "all") {
            overwrittenProps[i3] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i3] = overwrittenProps[i3] || {};
            props = vars;
          }
          for (p2 in props) {
            pt = curLookup && curLookup[p2];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p2) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p2];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p2] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set2(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s3 = "";
    if (!ratio && data.b) {
      s3 = data.b;
    } else if (ratio === 1 && data.e) {
      s3 = data.e;
    } else {
      while (pt) {
        s3 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s3;
        pt = pt._next;
      }
      s3 += data.c;
    }
    data.set(data.t, data.p, s3, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults2,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f2) {
      return f2();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c3) {
        var queries = c3.queries, conditions = c3.conditions, match, p2, anyMatch, toggled;
        for (p2 in queries) {
          match = _win.matchMedia(queries[p2]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p2]) {
            conditions[p2] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c3.revert();
          anyMatch && matches.push(c3);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c3) {
        return c3.onMatch(c3, function(func) {
          return c3.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f2 = function f3() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f2;
      return name === _isFunction ? f2(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f2 : f2;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a3 = [];
      this.data.forEach(function(e3) {
        return e3 instanceof Context2 ? a3.push.apply(a3, e3.getTweens()) : e3 instanceof Tween && !(e3.parent && e3.parent.data === "nested") && a3.push(e3);
      });
      return a3;
    };
    _proto5.clear = function clear2() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i4 = _this4.data.length, t3;
          while (i4--) {
            t3 = _this4.data[i4];
            if (t3.data === "isFlip") {
              t3.revert();
              t3.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t4) {
            return {
              g: t4._dur || t4._delay || t4._sat && !t4._sat.vars.immediateRender ? t4.globalTime(0) : -Infinity,
              t: t4
            };
          }).sort(function(a3, b2) {
            return b2.g - a3.g || -Infinity;
          }).forEach(function(o3) {
            return o3.t.revert(revert);
          });
          i4 = _this4.data.length;
          while (i4--) {
            t3 = _this4.data[i4];
            if (t3 instanceof Timeline) {
              if (t3.data !== "nested") {
                t3.scrollTrigger && t3.scrollTrigger.revert();
                t3.kill();
              }
            } else {
              !(t3 instanceof Tween) && t3.revert && t3.revert(revert);
            }
          }
          _this4._r.forEach(function(f2) {
            return f2(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e3) {
          return e3.kill && e3.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i3 = _media.length;
        while (i3--) {
          _media[i3].id === this.id && _media.splice(i3, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p2, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p2 in conditions) {
        if (p2 === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p2]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p2] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f2) {
        return context3.add(null, f2);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c3) {
        return c3.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray2(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray2(target);
      if (target.length > 1) {
        var setters = target.map(function(t3) {
          return gsap.quickSetter(t3, property, unit);
        }), l3 = setters.length;
        return function(value) {
          var i3 = l3;
          while (i3--) {
            setters[i3](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache2 = _getCache(target), p2 = cache2.harness && (cache2.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p3 = new Plugin();
        _quickTween._pt = 0;
        p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p3.render(1, p3);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache2.set(target, p2);
      return Plugin ? setter : function(value) {
        return setter(target, p2, unit ? value + unit : value, cache2, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _setDefaults22;
      var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults2(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
      return _mergeDeep(_defaults2, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray2(targets), _setDefaults(vars || {}, defaults3), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c3) {
        var cond = c3.conditions, found, p2;
        for (p2 in cond) {
          if (cond[p2]) {
            cond[p2] = false;
            found = 1;
          }
        }
        found && c3.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a3 = _listeners[type] || (_listeners[type] = []);
      ~a3.indexOf(callback) || a3.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a3 = _listeners[type], i3 = a3 && a3.indexOf(callback);
      i3 >= 0 && a3.splice(i3, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray: toArray2,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p2, i3, pt;
    for (p2 in modifiers) {
      i3 = targets.length;
      while (i3--) {
        pt = tween._ptLookup[i3][p2];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p2);
          }
          pt && pt.modifier && pt.modifier(modifiers[p2], tween, targets[i3], p2);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      headless: 1,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init5(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p2;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p2 in vars) {
              temp[p2] = modifier(vars[p2]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p2, pt, v2;
      this.tween = tween;
      for (p2 in vars) {
        v2 = target.getAttribute(p2) || "";
        pt = this.add(target, "setAttribute", (v2 || 0) + "", vars[p2], index, targets, 0, 0, p2);
        pt.op = p2;
        pt.b = v2;
        this._props.push(p2);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function init2(target, value) {
      var i3 = value.length;
      while (i3--) {
        this.add(target, i3, target[i3] || 0, value[i3], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.13.0";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache2 = target._gsap;
    cache2.scaleX = cache2.scaleY = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache2 = target._gsap;
    cache2[property] = value;
    cache2.renderTransform(ratio, cache2);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache2 = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a3) {
          return _this.tfm[a3] = _get(target, a3);
        }) : this.tfm[property] = cache2.x ? cache2[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache2.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p2) {
          return _saveStyle2.call(_this, p2, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache2.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache2 = target._gsap, i3, p2;
    for (i3 = 0; i3 < props.length; i3 += 3) {
      if (!props[i3 + 1]) {
        props[i3 + 2] ? style[props[i3]] = props[i3 + 2] : style.removeProperty(props[i3].substr(0, 2) === "--" ? props[i3] : props[i3].replace(_capsExp, "-$1").toLowerCase());
      } else if (props[i3 + 1] === 2) {
        target[props[i3]](props[i3 + 2]);
      } else {
        target[props[i3]] = props[i3 + 2];
      }
    }
    if (this.tfm) {
      for (p2 in this.tfm) {
        cache2[p2] = this.tfm[p2];
      }
      if (cache2.svg) {
        cache2.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i3 = _reverting2();
      if ((!i3 || !i3.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache2.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache2.zOrigin + "px";
          cache2.zOrigin = 0;
          cache2.renderTransform();
        }
        cache2.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p2) {
      return saver.save(p2);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e3 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e3 && e3.style ? e3 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e3 = element || _tempDiv, s3 = e3.style, i3 = 5;
    if (property in s3 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i3-- && !(_prefixes[i3] + property in s3)) {
    }
    return i3 < 0 ? null : (i3 === 3 ? "ms" : i3 >= 0 ? _prefixes[i3] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
      bbox = clone.getBBox();
    } catch (e3) {
    }
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i3 = attributesArray.length;
    while (i3--) {
      if (target.hasAttribute(attributesArray[i3])) {
        return target.getAttribute(attributesArray[i3]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds, cloned;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getReparentedCloneBBox(target);
      cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e3) {
    return !!(e3.getCTM && (!e3.parentNode || e3.ownerSVGElement) && _getBBox(e3));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache2, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache2 = parent._gsap;
    if (cache2 && toPercent && cache2.width && horizontal && cache2.time === _ticker.time && !cache2.uncache) {
      return _round(curValue / cache2.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v2 = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v2 ? target.style[property] = v2 : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache2 = _getCache(parent);
        cache2.time = _ticker.time;
        cache2.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p2 = _checkPropPrefix(prop, target, 1), s3 = p2 && _getComputedProperty(target, p2, 1);
      if (s3 && s3 !== start) {
        prop = p2;
        start = s3;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a3, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end.substring(0, 6) === "var(--") {
      end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a3 = [start, end];
    _colorStringFilter(a3);
    start = a3[0];
    end = a3[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split2 = value.split(" "), x2 = split2[0], y2 = split2[1] || "50%";
    if (x2 === "top" || x2 === "bottom" || y2 === "left" || y2 === "right") {
      value = x2;
      x2 = y2;
      y2 = value;
    }
    split2[0] = _keywordToPercent[x2] || x2;
    split2[1] = _keywordToPercent[y2] || y2;
    return split2.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache2 = target._gsap, prop, clearTransforms, i3;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i3 = props.length;
        while (--i3 > -1) {
          prop = props[i3];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache2) {
          cache2.svg && target.removeAttribute("transform");
          style.scale = style.rotate = style.translate = "none";
          _parseTransform(target, 1);
          cache2.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache2 = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache2.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache2.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache2 = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache2.xOrigin || 0, yOriginOld = cache2.yOrigin || 0, xOffsetOld = cache2.xOffset || 0, yOffsetOld = cache2.yOffset || 0, a3 = matrix[0], b2 = matrix[1], c3 = matrix[2], d2 = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x2, y2;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a3 * d2 - b2 * c3)) {
      x2 = xOrigin * (d2 / determinant) + yOrigin * (-c3 / determinant) + (c3 * ty - d2 * tx) / determinant;
      y2 = xOrigin * (-b2 / determinant) + yOrigin * (a3 / determinant) - (a3 * ty - b2 * tx) / determinant;
      xOrigin = x2;
      yOrigin = y2;
    }
    if (smooth || smooth !== false && cache2.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache2.xOffset = xOffsetOld + (tx * a3 + ty * c3) - tx;
      cache2.yOffset = yOffsetOld + (tx * b2 + ty * d2) - ty;
    } else {
      cache2.xOffset = cache2.yOffset = 0;
    }
    cache2.xOrigin = xOrigin;
    cache2.yOrigin = yOrigin;
    cache2.smooth = !!smooth;
    cache2.origin = origin;
    cache2.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "xOffset", xOffsetOld, cache2.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache2, "yOffset", yOffsetOld, cache2.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache2 = target._gsap || new GSCache(target);
    if ("x" in cache2 && !uncache && !cache2.uncache) {
      return cache2;
    }
    var style = target.style, invertedScaleX = cache2.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x2, y2, z2, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a3, b2, c3, d2, a12, a22, t1, t22, t3, a13, a23, a33, a42, a43, a32;
    x2 = y2 = z2 = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache2.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache2.svg);
    if (cache2.svg) {
      if (cache2.uncache) {
        t22 = target.getBBox();
        origin = cache2.xOrigin - t22.x + "px " + (cache2.yOrigin - t22.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache2.originIsAbsolute, cache2.smooth !== false, matrix);
    }
    xOrigin = cache2.xOrigin || 0;
    yOrigin = cache2.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a3 = matrix[0];
      b2 = matrix[1];
      c3 = matrix[2];
      d2 = matrix[3];
      x2 = a12 = matrix[4];
      y2 = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a3 * a3 + b2 * b2);
        scaleY = Math.sqrt(d2 * d2 + c3 * c3);
        rotation = a3 || b2 ? _atan2(b2, a3) * _RAD2DEG : 0;
        skewX = c3 || d2 ? _atan2(c3, d2) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache2.svg) {
          x2 -= xOrigin - (xOrigin * a3 + yOrigin * c3);
          y2 -= yOrigin - (xOrigin * b2 + yOrigin * d2);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x2 = matrix[12];
        y2 = matrix[13];
        z2 = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t22 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t22;
          a32 = t3;
        }
        angle = _atan2(-c3, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a3 * cos - a13 * sin;
          t22 = b2 * cos - a23 * sin;
          t3 = c3 * cos - a33 * sin;
          a43 = d2 * sin + a43 * cos;
          a3 = t1;
          b2 = t22;
          c3 = t3;
        }
        angle = _atan2(b2, a3);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a3 * cos + b2 * sin;
          t22 = a12 * cos + a22 * sin;
          b2 = b2 * cos - a3 * sin;
          a22 = a22 * cos - a12 * sin;
          a3 = t1;
          a12 = t22;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a3 * a3 + b2 * b2 + c3 * c3));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache2.svg) {
        t1 = target.getAttribute("transform");
        cache2.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache2.uncache;
    cache2.x = x2 - ((cache2.xPercent = x2 && (!uncache && cache2.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x2) ? -50 : 0))) ? target.offsetWidth * cache2.xPercent / 100 : 0) + px;
    cache2.y = y2 - ((cache2.yPercent = y2 && (!uncache && cache2.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y2) ? -50 : 0))) ? target.offsetHeight * cache2.yPercent / 100 : 0) + px;
    cache2.z = z2 + px;
    cache2.scaleX = _round(scaleX);
    cache2.scaleY = _round(scaleY);
    cache2.rotation = _round(rotation) + deg;
    cache2.rotationX = _round(rotationX) + deg;
    cache2.rotationY = _round(rotationY) + deg;
    cache2.skewX = skewX + deg;
    cache2.skewY = skewY + deg;
    cache2.transformPerspective = perspective + px;
    if (cache2.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache2.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache2.xOffset = cache2.yOffset = 0;
    cache2.force3D = _config.force3D;
    cache2.renderTransform = cache2.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache2.uncache = 0;
    return cache2;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache2) {
    cache2.z = "0px";
    cache2.rotationY = cache2.rotationX = "0deg";
    cache2.force3D = 0;
    _renderCSSTransforms(ratio, cache2);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache2) {
    var _ref = cache2 || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x2 = _ref.x, y2 = _ref.y, z2 = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x2 = _addPxTranslate(target, x2, a13 * cos * -zOrigin);
      y2 = _addPxTranslate(target, y2, -Math.sin(angle) * -zOrigin);
      z2 = _addPxTranslate(target, z2, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x2 !== _zeroPx || y2 !== _zeroPx || z2 !== _zeroPx) {
      transforms += z2 !== _zeroPx || use3D ? "translate3d(" + x2 + ", " + y2 + ", " + z2 + ") " : "translate(" + x2 + ", " + y2 + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache2) {
    var _ref2 = cache2 || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x2 = _ref2.x, y2 = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x2), ty = parseFloat(y2), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x2 + "").indexOf("px") || ty && !~(y2 + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x2, "px");
      ty = _convertToUnit(target, "y", y2, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString2 = _isString(endValue), endNum = parseFloat(endValue) * (isString2 && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString2) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p2 in source) {
      target[p2] = source[p2];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p2 in _transformProps) {
      startValue = startCache[p2];
      endValue = endCache[p2];
      if (startValue !== endValue && exclude.indexOf(p2) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p2);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t3 = "Top", r3 = "Right", b2 = "Bottom", l3 = "Left", props = (index < 3 ? [t3, r3, b2, l3] : [t3 + l3, t3 + r3, b2 + r3, b2 + l3]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a3, vars;
      if (arguments.length < 4) {
        a3 = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a3.join(" ");
        return vars.split(a3[0]).length === 5 ? a3[0] : vars;
      }
      a3 = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i3) {
        return vars[prop] = a3[i3] = a3[i3] || a3[(i3 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache2, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p2 in vars) {
        if (p2 === "autoRound") {
          continue;
        }
        endValue = vars[p2];
        if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p2];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
        } else if (p2.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
          props.push(p2);
          inlineProps.push(p2, 0, style[p2]);
        } else if (type !== "undefined") {
          if (startAt && p2 in startAt) {
            startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p2] || getUnit(_get(target, p2)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
          } else {
            startValue = _get(target, p2);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p2 in _propertyAliases) {
            if (p2 === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p2 !== "scale" && p2 !== "transform") {
              p2 = _propertyAliases[p2];
              ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
            }
          }
          isTransformRelated = p2 in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p2);
            if (type === "string" && endValue.substring(0, 6) === "var(--") {
              endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
              endNum = parseFloat(endValue);
            }
            if (!transformPropTween) {
              cache2 = target._gsap;
              cache2.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache2.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache2.renderTransform, cache2, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p2 === "scale") {
              this._pt = new PropTween(this._pt, cache2, "scaleY", cache2.scaleY, (relative ? _parseRelative(cache2.scaleY, relative + endNum) : endNum) - cache2.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p2);
              p2 += "X";
            } else if (p2 === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache2.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache2.zOrigin && _addNonTweeningPT(this, cache2, "zOrigin", cache2.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p2 === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p2 in _rotationalProperties) {
              _addRotationalPropTween(this, cache2, p2, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p2 === "smoothOrigin") {
              _addNonTweeningPT(this, cache2, "smooth", cache2.smooth, endValue);
              continue;
            } else if (p2 === "force3D") {
              cache2[p2] = endValue;
              continue;
            } else if (p2 === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p2 in style)) {
            p2 = _checkPropPrefix(p2) || p2;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache2 : style, p2, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p2 in style)) {
            if (p2 in target) {
              this.add(target, p2, startValue || target[p2], relative ? relative + endValue : endValue, index, targets);
            } else if (p2 !== "parseTransform") {
              _missingPlugin(p2, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p2, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p2 in style ? inlineProps.push(p2, 0, style[p2]) : typeof target[p2] === "function" ? inlineProps.push(p2, 2, target[p2]()) : inlineProps.push(p2, 1, startValue || target[p2]));
          props.push(p2);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p2 = _propertyAliases[property];
      p2 && p2.indexOf(",") < 0 && (property = p2);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split2 = name.split(":");
      _propertyAliases[split2[1]] = all[split2[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // src/scripts/modules/Load.js
  var Load_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    init() {
      const load = new main_esm_default2({
        enterDelay: 1500,
        transitions: {
          customTransition: {}
        }
      });
      this.DOM = {
        loading: document.querySelector(".o-loading"),
        loadingLogo: document.querySelector(".o-loading_logo"),
        loadingShape: document.querySelector(".o-loading_shape")
      };
      window.addEventListener("hide-loading", () => {
        this.hide();
      });
      load.on("loading", (oldContainer, newContainer) => {
        this.show();
        this.call("stop", "Scroll");
      });
      load.on("loaded", (transition, oldContainer, newContainer) => {
        shared_default();
        this.setNewBodyClass();
        this.hide();
        this.call("destroy", oldContainer, "app");
        this.call("update", newContainer, "app");
      });
    }
    show() {
      this.call("stop", "Scroll");
      this.DOM.loading.classList.remove("-hidden");
      gsapWithCSS.to(this.DOM.loadingLogo, { opacity: 1, duration: 0.2, ease: "none" });
      gsapWithCSS.fromTo(
        this.DOM.loading,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 -1%, 100% -1%, 100% 100%, 0 100%)", duration: 1, ease: "expo.inOut" }
      );
    }
    hide(delay = 0) {
      gsapWithCSS.to(this.DOM.loadingLogo, { opacity: 0, duration: 0.4, ease: "none" });
      gsapWithCSS.fromTo(
        this.DOM.loading,
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% -1%, 0 -1%)", duration: 1, ease: "expo.inOut", onComplete: () => {
          this.DOM.loading.classList.add("-hidden");
          this.call("start", "Scroll");
          gsapWithCSS.set(this.DOM.loading, { clearProps: "all" });
        } }
      );
      setTimeout(() => {
        window.dispatchEvent(new Event("p-animate"));
      }, 600);
    }
    setNewBodyClass() {
      if (this.el.querySelector("[data-bodyclass]")) {
        let bodyClass = this.el.querySelector("[data-bodyclass]").getAttribute("data-bodyclass");
        $body.className = bodyClass;
      }
    }
  };

  // node_modules/lenis/dist/lenis.mjs
  function clamp3(t3, i3, e3) {
    return Math.max(t3, Math.min(i3, e3));
  }
  var Animate = class {
    constructor() {
      this.isRunning = false, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0;
    }
    advance(t3) {
      var i3;
      if (!this.isRunning) return;
      let e3 = false;
      if (this.duration && this.easing) {
        this.currentTime += t3;
        const i4 = clamp3(0, this.currentTime / this.duration, 1);
        e3 = i4 >= 1;
        const s3 = e3 ? 1 : this.easing(i4);
        this.value = this.from + (this.to - this.from) * s3;
      } else this.lerp ? (this.value = function damp(t4, i4, e4, s3) {
        return function lerp(t5, i5, e5) {
          return (1 - e5) * t5 + e5 * i5;
        }(t4, i4, 1 - Math.exp(-e4 * s3));
      }(this.value, this.to, 60 * this.lerp, t3), Math.round(this.value) === this.to && (this.value = this.to, e3 = true)) : (this.value = this.to, e3 = true);
      e3 && this.stop(), null === (i3 = this.onUpdate) || void 0 === i3 || i3.call(this, this.value, e3);
    }
    stop() {
      this.isRunning = false;
    }
    fromTo(t3, i3, { lerp: e3, duration: s3, easing: o3, onStart: n3, onUpdate: l3 }) {
      this.from = this.value = t3, this.to = i3, this.lerp = e3, this.duration = s3, this.easing = o3, this.currentTime = 0, this.isRunning = true, null == n3 || n3(), this.onUpdate = l3;
    }
  };
  var Dimensions = class {
    constructor({ wrapper: t3, content: i3, autoResize: e3 = true, debounce: s3 = 250 } = {}) {
      this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }, this.onWrapperResize = () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
      }, this.onContentResize = () => {
        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
      }, this.wrapper = t3, this.content = i3, e3 && (this.debouncedResize = /* @__PURE__ */ function debounce2(t4, i4) {
        let e4;
        return function() {
          let s4 = arguments, o3 = this;
          clearTimeout(e4), e4 = setTimeout(function() {
            t4.apply(o3, s4);
          }, i4);
        };
      }(this.resize, s3), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
      var t3, i3;
      null === (t3 = this.wrapperResizeObserver) || void 0 === t3 || t3.disconnect(), null === (i3 = this.contentResizeObserver) || void 0 === i3 || i3.disconnect(), window.removeEventListener("resize", this.debouncedResize, false);
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  };
  var Emitter = class {
    constructor() {
      this.events = {};
    }
    emit(t3, ...i3) {
      let e3 = this.events[t3] || [];
      for (let t4 = 0, s3 = e3.length; t4 < s3; t4++) e3[t4](...i3);
    }
    on(t3, i3) {
      var e3;
      return (null === (e3 = this.events[t3]) || void 0 === e3 ? void 0 : e3.push(i3)) || (this.events[t3] = [i3]), () => {
        var e4;
        this.events[t3] = null === (e4 = this.events[t3]) || void 0 === e4 ? void 0 : e4.filter((t4) => i3 !== t4);
      };
    }
    off(t3, i3) {
      var e3;
      this.events[t3] = null === (e3 = this.events[t3]) || void 0 === e3 ? void 0 : e3.filter((t4) => i3 !== t4);
    }
    destroy() {
      this.events = {};
    }
  };
  var t = 100 / 6;
  var VirtualScroll = class {
    constructor(i3, { wheelMultiplier: e3 = 1, touchMultiplier: s3 = 1 }) {
      this.lastDelta = { x: 0, y: 0 }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = (t3) => {
        const { clientX: i4, clientY: e4 } = t3.targetTouches ? t3.targetTouches[0] : t3;
        this.touchStart.x = i4, this.touchStart.y = e4, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t3 });
      }, this.onTouchMove = (t3) => {
        var i4, e4, s4, o3;
        const { clientX: n3, clientY: l3 } = t3.targetTouches ? t3.targetTouches[0] : t3, r3 = -(n3 - (null !== (e4 = null === (i4 = this.touchStart) || void 0 === i4 ? void 0 : i4.x) && void 0 !== e4 ? e4 : 0)) * this.touchMultiplier, h2 = -(l3 - (null !== (o3 = null === (s4 = this.touchStart) || void 0 === s4 ? void 0 : s4.y) && void 0 !== o3 ? o3 : 0)) * this.touchMultiplier;
        this.touchStart.x = n3, this.touchStart.y = l3, this.lastDelta = { x: r3, y: h2 }, this.emitter.emit("scroll", { deltaX: r3, deltaY: h2, event: t3 });
      }, this.onTouchEnd = (t3) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t3 });
      }, this.onWheel = (i4) => {
        let { deltaX: e4, deltaY: s4, deltaMode: o3 } = i4;
        e4 *= 1 === o3 ? t : 2 === o3 ? this.windowWidth : 1, s4 *= 1 === o3 ? t : 2 === o3 ? this.windowHeight : 1, e4 *= this.wheelMultiplier, s4 *= this.wheelMultiplier, this.emitter.emit("scroll", { deltaX: e4, deltaY: s4, event: i4 });
      }, this.onWindowResize = () => {
        this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
      }, this.element = i3, this.wheelMultiplier = e3, this.touchMultiplier = s3, this.touchStart = { x: null, y: null }, this.emitter = new Emitter(), window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, { passive: false }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: false }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: false }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: false });
    }
    on(t3, i3) {
      return this.emitter.on(t3, i3);
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel), this.element.removeEventListener("touchstart", this.onTouchStart), this.element.removeEventListener("touchmove", this.onTouchMove), this.element.removeEventListener("touchend", this.onTouchEnd);
    }
  };
  var Lenis = class {
    constructor({ wrapper: t3 = window, content: i3 = document.documentElement, wheelEventsTarget: e3 = t3, eventsTarget: s3 = e3, smoothWheel: o3 = true, syncTouch: n3 = false, syncTouchLerp: l3 = 0.075, touchInertiaMultiplier: r3 = 35, duration: h2, easing: a3 = (t4) => Math.min(1, 1.001 - Math.pow(2, -10 * t4)), lerp: c3 = 0.1, infinite: d2 = false, orientation: u2 = "vertical", gestureOrientation: p2 = "vertical", touchMultiplier: m2 = 1, wheelMultiplier: v2 = 1, autoResize: g2 = true, prevent: w2, virtualScroll: S2, __experimental__naiveDimensions: f2 = false } = {}) {
      this.__isScrolling = false, this.__isStopped = false, this.__isLocked = false, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = (t4) => {
        1 === t4.button && this.reset();
      }, this.onVirtualScroll = (t4) => {
        if ("function" == typeof this.options.virtualScroll && false === this.options.virtualScroll(t4)) return;
        const { deltaX: i4, deltaY: e4, event: s4 } = t4;
        if (this.emitter.emit("virtual-scroll", { deltaX: i4, deltaY: e4, event: s4 }), s4.ctrlKey) return;
        const o4 = s4.type.includes("touch"), n4 = s4.type.includes("wheel");
        this.isTouching = "touchstart" === s4.type || "touchmove" === s4.type;
        if (this.options.syncTouch && o4 && "touchstart" === s4.type && !this.isStopped && !this.isLocked) return void this.reset();
        const l4 = 0 === i4 && 0 === e4, r4 = "vertical" === this.options.gestureOrientation && 0 === e4 || "horizontal" === this.options.gestureOrientation && 0 === i4;
        if (l4 || r4) return;
        let h3 = s4.composedPath();
        h3 = h3.slice(0, h3.indexOf(this.rootElement));
        const a4 = this.options.prevent;
        if (h3.find((t5) => {
          var i5, e5, s5, l5, r5;
          return t5 instanceof Element && ("function" == typeof a4 && (null == a4 ? void 0 : a4(t5)) || (null === (i5 = t5.hasAttribute) || void 0 === i5 ? void 0 : i5.call(t5, "data-lenis-prevent")) || o4 && (null === (e5 = t5.hasAttribute) || void 0 === e5 ? void 0 : e5.call(t5, "data-lenis-prevent-touch")) || n4 && (null === (s5 = t5.hasAttribute) || void 0 === s5 ? void 0 : s5.call(t5, "data-lenis-prevent-wheel")) || (null === (l5 = t5.classList) || void 0 === l5 ? void 0 : l5.contains("lenis")) && !(null === (r5 = t5.classList) || void 0 === r5 ? void 0 : r5.contains("lenis-stopped")));
        })) return;
        if (this.isStopped || this.isLocked) return void s4.preventDefault();
        if (!(this.options.syncTouch && o4 || this.options.smoothWheel && n4)) return this.isScrolling = "native", void this.animate.stop();
        s4.preventDefault();
        let c4 = e4;
        "both" === this.options.gestureOrientation ? c4 = Math.abs(e4) > Math.abs(i4) ? e4 : i4 : "horizontal" === this.options.gestureOrientation && (c4 = i4);
        const d3 = o4 && this.options.syncTouch, u3 = o4 && "touchend" === s4.type && Math.abs(c4) > 5;
        u3 && (c4 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c4, Object.assign({ programmatic: false }, d3 ? { lerp: u3 ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }));
      }, this.onNativeScroll = () => {
        if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
        else if (false === this.isScrolling || "native" === this.isScrolling) {
          const t4 = this.animatedScroll;
          this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t4, this.direction = Math.sign(this.animatedScroll - t4), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = false, this.emit();
          }, 400));
        }
      }, window.lenisVersion = "1.1.9", t3 && t3 !== document.documentElement && t3 !== document.body || (t3 = window), this.options = { wrapper: t3, content: i3, wheelEventsTarget: e3, eventsTarget: s3, smoothWheel: o3, syncTouch: n3, syncTouchLerp: l3, touchInertiaMultiplier: r3, duration: h2, easing: a3, lerp: c3, infinite: d2, gestureOrientation: p2, orientation: u2, touchMultiplier: m2, wheelMultiplier: v2, autoResize: g2, prevent: w2, virtualScroll: S2, __experimental__naiveDimensions: f2 }, this.animate = new Animate(), this.emitter = new Emitter(), this.dimensions = new Dimensions({ wrapper: t3, content: i3, autoResize: g2 }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = false, this.isStopped = false, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false), this.virtualScroll = new VirtualScroll(s3, { touchMultiplier: m2, wheelMultiplier: v2 }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
    }
    on(t3, i3) {
      return this.emitter.on(t3, i3);
    }
    off(t3, i3) {
      return this.emitter.off(t3, i3);
    }
    setScroll(t3) {
      this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
      this.isStopped && (this.isStopped = false, this.reset());
    }
    stop() {
      this.isStopped || (this.isStopped = true, this.animate.stop(), this.reset());
    }
    raf(t3) {
      const i3 = t3 - (this.time || t3);
      this.time = t3, this.animate.advance(1e-3 * i3);
    }
    scrollTo(t3, { offset: i3 = 0, immediate: e3 = false, lock: s3 = false, duration: o3 = this.options.duration, easing: n3 = this.options.easing, lerp: l3 = this.options.lerp, onStart: r3, onComplete: h2, force: a3 = false, programmatic: c3 = true, userData: d2 = {} } = {}) {
      if (!this.isStopped && !this.isLocked || a3) {
        if ("string" == typeof t3 && ["top", "left", "start"].includes(t3)) t3 = 0;
        else if ("string" == typeof t3 && ["bottom", "right", "end"].includes(t3)) t3 = this.limit;
        else {
          let e4;
          if ("string" == typeof t3 ? e4 = document.querySelector(t3) : t3 instanceof HTMLElement && (null == t3 ? void 0 : t3.nodeType) && (e4 = t3), e4) {
            if (this.options.wrapper !== window) {
              const t4 = this.rootElement.getBoundingClientRect();
              i3 -= this.isHorizontal ? t4.left : t4.top;
            }
            const s4 = e4.getBoundingClientRect();
            t3 = (this.isHorizontal ? s4.left : s4.top) + this.animatedScroll;
          }
        }
        if ("number" == typeof t3 && (t3 += i3, t3 = Math.round(t3), this.options.infinite ? c3 && (this.targetScroll = this.animatedScroll = this.scroll) : t3 = clamp3(0, t3, this.limit), t3 !== this.targetScroll)) {
          if (this.userData = d2, e3) return this.animatedScroll = this.targetScroll = t3, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), null == h2 || h2(this), void (this.userData = {});
          c3 || (this.targetScroll = t3), this.animate.fromTo(this.animatedScroll, t3, { duration: o3, easing: n3, lerp: l3, onStart: () => {
            s3 && (this.isLocked = true), this.isScrolling = "smooth", null == r3 || r3(this);
          }, onUpdate: (t4, i4) => {
            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t4 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t4, this.setScroll(this.scroll), c3 && (this.targetScroll = t4), i4 || this.emit(), i4 && (this.reset(), this.emit(), null == h2 || h2(this), this.userData = {}, this.preventNextNativeScrollEvent());
          } });
        }
      }
    }
    preventNextNativeScrollEvent() {
      this.__preventNextNativeScrollEvent = true, requestAnimationFrame(() => {
        delete this.__preventNextNativeScrollEvent;
      });
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? function modulo(t3, i3) {
        return (t3 % i3 + i3) % i3;
      }(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
      return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(t3) {
      this.__isScrolling !== t3 && (this.__isScrolling = t3, this.updateClassName());
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(t3) {
      this.__isStopped !== t3 && (this.__isStopped = t3, this.updateClassName());
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(t3) {
      this.__isLocked !== t3 && (this.__isLocked = t3, this.updateClassName());
    }
    get isSmooth() {
      return "smooth" === this.isScrolling;
    }
    get className() {
      let t3 = "lenis";
      return this.isStopped && (t3 += " lenis-stopped"), this.isLocked && (t3 += " lenis-locked"), this.isScrolling && (t3 += " lenis-scrolling"), "smooth" === this.isScrolling && (t3 += " lenis-smooth"), t3;
    }
    updateClassName() {
      this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
  };

  // node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
  function s() {
    return s = Object.assign ? Object.assign.bind() : function(t3) {
      for (var s3 = 1; s3 < arguments.length; s3++) {
        var e3 = arguments[s3];
        for (var i3 in e3) ({}).hasOwnProperty.call(e3, i3) && (t3[i3] = e3[i3]);
      }
      return t3;
    }, s.apply(null, arguments);
  }
  var e = class {
    constructor({ scrollElements: t3, rootMargin: s3 = "-1px -1px -1px -1px", IORaf: e3 }) {
      this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t3, this.rootMargin = s3, this.IORaf = e3, this._init();
    }
    _init() {
      this.observer = new IntersectionObserver((t3) => {
        t3.forEach((t4) => {
          const s3 = this.scrollElements.find((s4) => s4.$el === t4.target);
          t4.isIntersecting ? (s3 && (s3.isAlreadyIntersected = true), this._setInview(t4)) : s3 && s3.isAlreadyIntersected && this._setOutOfView(t4);
        });
      }, { rootMargin: this.rootMargin });
      for (const t3 of this.scrollElements) this.observe(t3.$el);
    }
    destroy() {
      this.observer.disconnect();
    }
    observe(t3) {
      t3 && this.observer.observe(t3);
    }
    unobserve(t3) {
      t3 && this.observer.unobserve(t3);
    }
    _setInview(t3) {
      const s3 = this.scrollElements.find((s4) => s4.$el === t3.target);
      this.IORaf && (null == s3 || s3.setInteractivityOn()), !this.IORaf && (null == s3 || s3.setInview());
    }
    _setOutOfView(t3) {
      const s3 = this.scrollElements.find((s4) => s4.$el === t3.target);
      this.IORaf && (null == s3 || s3.setInteractivityOff()), !this.IORaf && (null == s3 || s3.setOutOfView()), null != s3 && s3.attributes.scrollRepeat || this.IORaf || this.unobserve(t3.target);
    }
  };
  function i(t3, s3, e3, i3, r3) {
    return e3 + ((r3 - t3) / (s3 - t3) * (i3 - e3) || 0);
  }
  function r(t3, s3) {
    return t3.reduce((t4, e3) => Math.abs(e3 - s3) < Math.abs(t4 - s3) ? e3 : t4);
  }
  var l = class {
    constructor({ $el: t3, id: s3, modularInstance: e3, subscribeElementUpdateFn: i3, unsubscribeElementUpdateFn: r3, needRaf: l3, scrollOrientation: n3 }) {
      var o3, a3, c3, h2, d2;
      this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t3, this.id = s3, this.needRaf = l3, this.scrollOrientation = n3, this.modularInstance = e3, this.subscribeElementUpdateFn = i3, this.unsubscribeElementUpdateFn = r3, this.attributes = { scrollClass: null != (o3 = this.$el.dataset.scrollClass) ? o3 : "is-inview", scrollOffset: null != (a3 = this.$el.dataset.scrollOffset) ? a3 : "0,0", scrollPosition: null != (c3 = this.$el.dataset.scrollPosition) ? c3 : "start,end", scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress, scrollCssProgress: null != this.$el.dataset.scrollCssProgress, scrollEventProgress: null != (h2 = this.$el.dataset.scrollEventProgress) ? h2 : null, scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null, scrollRepeat: null != this.$el.dataset.scrollRepeat, scrollCall: null != (d2 = this.$el.dataset.scrollCall) ? d2 : null, scrollCallSelf: null != this.$el.dataset.scrollCallSelf, scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold, scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed }, this.intersection = { start: 0, end: 0 }, this.metrics = { offsetStart: 0, offsetEnd: 0, bcr: {} }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = false, this.isInteractive = false, this.isAlreadyIntersected = false, this.isInFold = false, this.isFirstResize = true, this._init();
    }
    _init() {
      this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }
    onResize({ currentScroll: t3 }) {
      this.currentScroll = t3, this._resize();
    }
    onRender({ currentScroll: t3, smooth: s3 }) {
      const e3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
      if (this.currentScroll = t3, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) if (this.attributes.scrollEnableTouchSpeed || s3) {
        if (this.isInFold) {
          const t4 = Math.max(0, this.progress);
          this.translateValue = t4 * e3 * this.attributes.scrollSpeed * -1;
        } else {
          const t4 = i(0, 1, -1, 1, this.progress);
          this.translateValue = t4 * e3 * this.attributes.scrollSpeed * -1;
        }
        this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
      } else this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
    }
    setInview() {
      if (this.isInview) return;
      this.isInview = true, this.$el.classList.add(this.attributes.scrollClass);
      const t3 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("enter", t3);
    }
    setOutOfView() {
      if (!this.isInview || !this.attributes.scrollRepeat) return;
      this.isInview = false, this.$el.classList.remove(this.attributes.scrollClass);
      const t3 = this._getScrollCallFrom();
      this.attributes.scrollCall && this._dispatchCall("leave", t3);
    }
    setInteractivityOn() {
      this.isInteractive || (this.isInteractive = true, this.subscribeElementUpdateFn(this));
    }
    setInteractivityOff() {
      this.isInteractive && (this.isInteractive = false, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(r([0, 1], this.lastProgress)));
    }
    _resize() {
      this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = false, this.isInFold && this.setInview());
    }
    _computeMetrics() {
      const { top: t3, left: s3, height: e3, width: i3 } = this.metrics.bcr, r3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l3 = "vertical" === this.scrollOrientation ? e3 : i3;
      this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t3 : s3) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l3, this.isInFold = this.metrics.offsetStart < r3 && !this.attributes.scrollIgnoreFold;
    }
    _computeIntersection() {
      const t3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s3 = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, e3 = this.attributes.scrollOffset.split(","), i3 = null != e3[0] ? e3[0].trim() : "0", r3 = null != e3[1] ? e3[1].trim() : "0", l3 = this.attributes.scrollPosition.split(",");
      let n3 = null != l3[0] ? l3[0].trim() : "start";
      const o3 = null != l3[1] ? l3[1].trim() : "end", a3 = i3.includes("%") ? t3 * parseInt(i3.replace("%", "").trim()) * 0.01 : parseInt(i3), c3 = r3.includes("%") ? t3 * parseInt(r3.replace("%", "").trim()) * 0.01 : parseInt(r3);
      switch (this.isInFold && (n3 = "fold"), n3) {
        case "start":
        default:
          this.intersection.start = this.metrics.offsetStart - t3 + a3;
          break;
        case "middle":
          this.intersection.start = this.metrics.offsetStart - t3 + a3 + 0.5 * s3;
          break;
        case "end":
          this.intersection.start = this.metrics.offsetStart - t3 + a3 + s3;
          break;
        case "fold":
          this.intersection.start = 0;
      }
      switch (o3) {
        case "start":
          this.intersection.end = this.metrics.offsetStart - c3;
          break;
        case "middle":
          this.intersection.end = this.metrics.offsetStart - c3 + 0.5 * s3;
          break;
        default:
          this.intersection.end = this.metrics.offsetStart - c3 + s3;
      }
      if (this.intersection.end <= this.intersection.start) switch (o3) {
        case "start":
        default:
          this.intersection.end = this.intersection.start + 1;
          break;
        case "middle":
          this.intersection.end = this.intersection.start + 0.5 * s3;
          break;
        case "end":
          this.intersection.end = this.intersection.start + s3;
      }
    }
    _computeProgress(t3) {
      const s3 = null != t3 ? t3 : (e3 = i(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e3 > 1 ? 1 : e3;
      var e3;
      if (this.progress = s3, s3 != this.lastProgress) {
        if (this.lastProgress = s3, this.attributes.scrollCssProgress && this._setCssProgress(s3), this.attributes.scrollEventProgress && this._setCustomEventProgress(s3), this.attributes.scrollModuleProgress) for (const t4 of this.progressModularModules) this.modularInstance && this.modularInstance.call("onScrollProgress", s3, t4.moduleName, t4.moduleId);
        s3 > 0 && s3 < 1 && this.setInview(), 0 === s3 && this.setOutOfView(), 1 === s3 && this.setOutOfView();
      }
    }
    _setCssProgress(t3 = 0) {
      this.$el.style.setProperty("--progress", t3.toString());
    }
    _setCustomEventProgress(t3 = 0) {
      const s3 = this.attributes.scrollEventProgress;
      if (!s3) return;
      const e3 = new CustomEvent(s3, { detail: { target: this.$el, progress: t3 } });
      window.dispatchEvent(e3);
    }
    _getProgressModularModules() {
      if (!this.modularInstance) return;
      const t3 = Object.keys(this.$el.dataset).filter((t4) => t4.includes("module")), s3 = Object.entries(this.modularInstance.modules);
      if (t3.length) for (const e3 of t3) {
        const t4 = this.$el.dataset[e3];
        if (!t4) return;
        for (const e4 of s3) {
          const [s4, i3] = e4;
          t4 in i3 && this.progressModularModules.push({ moduleName: s4, moduleId: t4 });
        }
      }
    }
    _getScrollCallFrom() {
      const t3 = r([this.intersection.start, this.intersection.end], this.currentScroll);
      return this.intersection.start === t3 ? "start" : "end";
    }
    _dispatchCall(t3, s3) {
      var e3, i3;
      const r3 = null == (e3 = this.attributes.scrollCall) ? void 0 : e3.split(","), l3 = null == (i3 = this.attributes) ? void 0 : i3.scrollCallSelf;
      if (r3 && r3.length > 1) {
        var n3;
        const [e4, i4, o3] = r3;
        let a3;
        a3 = l3 ? this.$el.dataset[`module${i4.trim()}`] : o3, this.modularInstance && this.modularInstance.call(e4.trim(), { target: this.$el, way: t3, from: s3 }, i4.trim(), null == (n3 = a3) ? void 0 : n3.trim());
      } else if (r3) {
        const [e4] = r3, i4 = new CustomEvent(e4, { detail: { target: this.$el, way: t3, from: s3 } });
        window.dispatchEvent(i4);
      }
    }
  };
  var n = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
  var o = class {
    constructor({ $el: t3, modularInstance: s3, triggerRootMargin: e3, rafRootMargin: i3, scrollOrientation: r3 }) {
      this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t3 ? (this.$scrollContainer = t3, this.modularInstance = s3, this.scrollOrientation = r3, this.triggerRootMargin = null != e3 ? e3 : "-1px -1px -1px -1px", this.rafRootMargin = null != i3 ? i3 : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    _init() {
      const t3 = this.$scrollContainer.querySelectorAll("[data-scroll]"), s3 = Array.from(t3);
      this._subscribeScrollElements(s3), this.IOTriggerInstance = new e({ scrollElements: [...this.triggeredScrollElements], rootMargin: this.triggerRootMargin, IORaf: false }), this.IORafInstance = new e({ scrollElements: [...this.RAFScrollElements], rootMargin: this.rafRootMargin, IORaf: true });
    }
    destroy() {
      this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }
    onResize({ currentScroll: t3 }) {
      for (const s3 of this.RAFScrollElements) s3.onResize({ currentScroll: t3 });
    }
    onRender({ currentScroll: t3, smooth: s3 }) {
      for (const e3 of this.scrollElementsToUpdate) e3.onRender({ currentScroll: t3, smooth: s3 });
    }
    removeScrollElements(t3) {
      const s3 = t3.querySelectorAll("[data-scroll]");
      if (s3.length) {
        for (let t4 = 0; t4 < this.triggeredScrollElements.length; t4++) {
          const e3 = this.triggeredScrollElements[t4];
          Array.from(s3).indexOf(e3.$el) > -1 && (this.IOTriggerInstance.unobserve(e3.$el), this.triggeredScrollElements.splice(t4, 1));
        }
        for (let t4 = 0; t4 < this.RAFScrollElements.length; t4++) {
          const e3 = this.RAFScrollElements[t4];
          Array.from(s3).indexOf(e3.$el) > -1 && (this.IORafInstance.unobserve(e3.$el), this.RAFScrollElements.splice(t4, 1));
        }
        s3.forEach((t4) => {
          const s4 = this.scrollElementsToUpdate.find((s5) => s5.$el === t4), e3 = this.scrollElements.find((s5) => s5.$el === t4);
          s4 && this._unsubscribeElementUpdate(s4), e3 && (this.scrollElements = this.scrollElements.filter((t5) => t5.id != e3.id));
        });
      }
    }
    addScrollElements(t3) {
      const s3 = t3.querySelectorAll("[data-scroll]"), e3 = [];
      this.scrollElements.forEach((t4) => {
        e3.push(t4.id);
      });
      const i3 = Math.max(...e3, 0) + 1, r3 = Array.from(s3);
      this._subscribeScrollElements(r3, i3, true);
    }
    _subscribeScrollElements(t3, s3 = 0, e3 = false) {
      for (let i3 = 0; i3 < t3.length; i3++) {
        const r3 = t3[i3], n3 = this._checkRafNeeded(r3), o3 = new l({ $el: r3, id: s3 + i3, scrollOrientation: this.scrollOrientation, modularInstance: this.modularInstance, subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this), unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this), needRaf: n3 });
        this.scrollElements.push(o3), n3 ? (this.RAFScrollElements.push(o3), e3 && (this.IORafInstance.scrollElements.push(o3), this.IORafInstance.observe(o3.$el))) : (this.triggeredScrollElements.push(o3), e3 && (this.IOTriggerInstance.scrollElements.push(o3), this.IOTriggerInstance.observe(o3.$el)));
      }
    }
    _unsubscribeAllScrollElements() {
      this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }
    _subscribeElementUpdate(t3) {
      this.scrollElementsToUpdate.push(t3);
    }
    _unsubscribeElementUpdate(t3) {
      this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s3) => s3.id != t3.id);
    }
    _checkRafNeeded(t3) {
      let s3 = [...n];
      const e3 = (t4) => {
        s3 = s3.filter((s4) => s4 != t4);
      };
      if (t3.dataset.scrollOffset) {
        if ("0,0" != t3.dataset.scrollOffset.split(",").map((t4) => t4.replace("%", "").trim()).join(",")) return true;
        e3("scrollOffset");
      } else e3("scrollOffset");
      if (t3.dataset.scrollPosition) {
        if ("top,bottom" != t3.dataset.scrollPosition.trim()) return true;
        e3("scrollPosition");
      } else e3("scrollPosition");
      if (t3.dataset.scrollSpeed && !isNaN(parseFloat(t3.dataset.scrollSpeed))) return true;
      e3("scrollSpeed");
      for (const e4 of s3) if (e4 in t3.dataset) return true;
      return false;
    }
  };
  var a = class {
    constructor({ resizeElements: t3, resizeCallback: s3 = () => {
    } }) {
      this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t3, this.resizeCallback = s3, this.isFirstObserve = true, this._init();
    }
    _init() {
      this.observer = new ResizeObserver((t3) => {
        var s3;
        !this.isFirstObserve && (null == (s3 = this.resizeCallback) || s3.call(this)), this.isFirstObserve = false;
      });
      for (const t3 of this.$resizeElements) this.observer.observe(t3);
    }
    destroy() {
      this.observer.disconnect();
    }
  };
  var c = class {
    constructor({ lenisOptions: t3 = {}, modularInstance: s3, triggerRootMargin: e3, rafRootMargin: i3, autoResize: r3 = true, autoStart: l3 = true, scrollCallback: n3 = () => {
    }, initCustomTicker: o3, destroyCustomTicker: a3 } = {}) {
      this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0;
      for (const [s4] of Object.entries(t3)) ["wrapper", "content", "infinite"].includes(s4) && console.warn(`Warning: Key "${s4}" is not possible to edit in Locomotive Scroll.`);
      Object.assign(this, { lenisOptions: t3, modularInstance: s3, triggerRootMargin: e3, rafRootMargin: i3, autoResize: r3, autoStart: l3, scrollCallback: n3, initCustomTicker: o3, destroyCustomTicker: a3 }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = false, this._init();
    }
    _init() {
      var e3;
      this.lenisInstance = new Lenis(s({}, this.lenisOptions, { wrapper: window, content: document.documentElement, infinite: false })), null == (e3 = this.lenisInstance) || e3.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(() => {
        this.coreInstance = new o({ $el: this.lenisInstance.rootElement, modularInstance: this.modularInstance, triggerRootMargin: this.triggerRootMargin, rafRootMargin: this.rafRootMargin, scrollOrientation: this.lenisInstance.options.orientation }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
      });
    }
    destroy() {
      var t3;
      this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t3 = this.coreInstance) || t3.destroy(), requestAnimationFrame(() => {
        var t4;
        null == (t4 = this.coreInstance) || t4.destroy();
      });
    }
    _bindEvents() {
      this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a({ resizeElements: [document.body], resizeCallback: this._onResizeBind }) : window.addEventListener("resize", this._onResizeBind));
    }
    _unbindEvents() {
      this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }
    _bindScrollToEvents(t3) {
      const s3 = t3 || this.lenisInstance.rootElement, e3 = null == s3 ? void 0 : s3.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t4) => {
        t4.addEventListener("click", this._onScrollToBind, false);
      });
    }
    _unbindScrollToEvents(t3) {
      const s3 = t3 || this.lenisInstance.rootElement, e3 = null == s3 ? void 0 : s3.querySelectorAll("[data-scroll-to]");
      (null == e3 ? void 0 : e3.length) && e3.forEach((t4) => {
        t4.removeEventListener("click", this._onScrollToBind, false);
      });
    }
    _onResize() {
      requestAnimationFrame(() => {
        var t3;
        null == (t3 = this.coreInstance) || t3.onResize({ currentScroll: this.lenisInstance.scroll });
      });
    }
    _onRender() {
      var t3, s3;
      null == (t3 = this.lenisInstance) || t3.raf(Date.now()), null == (s3 = this.coreInstance) || s3.onRender({ currentScroll: this.lenisInstance.scroll, smooth: this.lenisInstance.options.smoothWheel });
    }
    _onScrollTo(t3) {
      var s3;
      t3.preventDefault();
      const e3 = null != (s3 = t3.currentTarget) ? s3 : null;
      if (!e3) return;
      const i3 = e3.getAttribute("data-scroll-to-href") || e3.getAttribute("href"), r3 = e3.getAttribute("data-scroll-to-offset") || 0, l3 = e3.getAttribute("data-scroll-to-duration") || this.lenisInstance.options.duration;
      i3 && this.scrollTo(i3, { offset: "string" == typeof r3 ? parseInt(r3) : r3, duration: "string" == typeof l3 ? parseInt(l3) : l3 });
    }
    start() {
      var t3;
      this.rafPlaying || (null == (t3 = this.lenisInstance) || t3.start(), this.rafPlaying = true, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }
    stop() {
      var t3;
      this.rafPlaying && (null == (t3 = this.lenisInstance) || t3.stop(), this.rafPlaying = false, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }
    removeScrollElements(t3) {
      var s3;
      t3 ? (this._unbindScrollToEvents(t3), null == (s3 = this.coreInstance) || s3.removeScrollElements(t3)) : console.error("Please provide a DOM Element as $oldContainer");
    }
    addScrollElements(t3) {
      var s3;
      t3 ? (null == (s3 = this.coreInstance) || s3.addScrollElements(t3), requestAnimationFrame(() => {
        this._bindScrollToEvents(t3);
      })) : console.error("Please provide a DOM Element as $newContainer");
    }
    resize() {
      this._onResizeBind();
    }
    scrollTo(t3, s3) {
      var e3;
      null == (e3 = this.lenisInstance) || e3.scrollTo(t3, { offset: null == s3 ? void 0 : s3.offset, lerp: null == s3 ? void 0 : s3.lerp, duration: null == s3 ? void 0 : s3.duration, immediate: null == s3 ? void 0 : s3.immediate, lock: null == s3 ? void 0 : s3.lock, force: null == s3 ? void 0 : s3.force, easing: null == s3 ? void 0 : s3.easing, onComplete: null == s3 ? void 0 : s3.onComplete });
    }
    _raf() {
      this._onRenderBind(), this.rafInstance = requestAnimationFrame(() => this._raf());
    }
  };

  // src/scripts/modules/Scroll.js
  var Scroll_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    init() {
      this.scroll = new c({
        modularInstance: this,
        autoStart: false,
        scrollCallback: ({ scroll, limit, velocity, direction, progress }) => this.onScroll({ scroll, limit, velocity, direction, progress })
      });
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
      }
      this.initScrollToElements();
      window.addEventListener("scroll-start", () => {
        this.start();
      });
      window.addEventListener("scroll-stop", () => {
        this.stop();
      });
      window.addEventListener("scroll-resize", () => {
        this.resize();
      });
    }
    start() {
      this.scroll.start();
    }
    stop() {
      this.scroll.stop();
    }
    resize() {
      this.scroll.resize();
    }
    onScroll({ scroll, limit, velocity, direction, progress }) {
      if (direction > 0) {
        if (scroll > window.innerHeight * 0.5) {
          $html.classList.add("-hide-nav");
        }
      } else {
        $html.classList.remove("-hide-nav");
      }
    }
    scrollTo(target, delay = 0, offset = 0) {
      setTimeout(() => {
        var _a;
        (_a = this.scroll) == null ? void 0 : _a.scrollTo(target, {
          duration: 1,
          lerp: 0.1,
          lock: false,
          offset
          // easing: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
        });
      }, delay);
    }
    initScrollToElements() {
      this.el.querySelectorAll("[data-scroll-to]").forEach((elt) => {
        elt.addEventListener("click", (e3) => {
          e3.preventDefault();
          let target = document.querySelector('[data-scroll-target="' + elt.getAttribute("data-scroll-to") + '"]');
          let delay = elt.getAttribute("data-scroll-to-delay") ? parseInt(elt.getAttribute("data-scroll-to-delay")) : 0;
          let offset = elt.getAttribute("data-scroll-to-offset") ? parseInt(elt.getAttribute("data-scroll-to-offset")) : 0;
          if (target) {
            this.scrollTo(target, delay, offset);
          }
        });
      });
    }
    scrollTop(force) {
      if (!this.scroll) return;
      if (force) {
        this.scroll.scrollTo("top", { immediate: true });
      } else {
        scrollTo("top");
      }
    }
    destroy() {
      this.scroll.destroy();
    }
    addElements(container) {
      this.scroll.addScrollElements(container);
    }
  };

  // src/scripts/modules/Page.js
  var Page_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    init() {
      window.addEventListener("p-loaded", () => {
        setTimeout(() => {
          this.initTL();
        }, 400);
      });
      window.addEventListener("p-animate", () => {
        this.animate();
      });
    }
    initTL() {
      if ($body.classList.contains("home")) {
        this.TL = this.animateHome();
      } else if ($body.classList.contains("page-template-default")) {
        this.TL = this.animateDefault();
      }
    }
    animate() {
      if (this.TL) {
        this.TL.play();
      }
    }
    animateHome() {
      let tl = gsapWithCSS.timeline({ paused: true });
      let delay = 0;
      if (this.el.querySelector(".-h1")) {
        tl.call(() => {
          this.el.querySelector(".-h1").classList.add("is-inview");
        }, null, delay);
      }
      return tl;
    }
    animateXxx() {
      let tl = gsapWithCSS.timeline({ paused: true });
      let delay = 0;
      return tl;
    }
    animateDefault() {
      let tl = gsapWithCSS.timeline({ paused: true });
      let delay = 0;
      return tl;
    }
  };

  // src/scripts/modules/Video.js
  var Video_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.isCustomLoad = this.el.hasAttribute("data-video-custom-load");
      this.isLoaded = false;
    }
    togglePlay(e3) {
      if (e3.way == "enter") {
        if (this.isLoaded) {
          this.play();
        } else {
          if (this.isCustomLoad == false) {
            this.loadAndPlay();
          }
        }
      } else {
        this.pause();
      }
    }
    play() {
      this.el.play();
      this.isLoaded = true;
      this.loaded();
    }
    pause() {
      this.el.pause();
    }
    loaded() {
      this.el.parentNode.classList.add("-loaded");
    }
    loadAndPlay() {
      let source = this.el.querySelector("source[data-src]");
      if (source) {
        source.setAttribute("src", source.getAttribute("data-src"));
        source.removeAttribute("data-src");
        this.el.load();
        this.el.addEventListener("canplaythrough", () => {
          this.play();
          this.isLoaded = true;
          this.loaded();
        });
      }
    }
  };

  // src/scripts/modules/HomeHero.js
  var HomeHero_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.backgroundsWrap = this.el.querySelector(".o-home-hero_backgrounds");
      this.items = [...this.el.querySelectorAll(".o-home-hero_backgrounds_item")];
      this.navItems = [...this.el.querySelectorAll(".o-home-hero_nav_item")];
      this.currentIndex = 0;
      this.maxIndex = this.items.length - 1;
      this.currentZIndex = 1;
      this.progressAnim = gsapWithCSS.timeline({ delay: 4, repeatDelay: 4, repeat: -1 });
      this.progressAnim.call(() => {
        this.playProgress();
      });
      this.events = {
        click: {
          activateItem: "activateItem"
        }
      };
    }
    playProgress() {
      let newIndex = this.currentIndex == this.maxIndex ? 0 : this.currentIndex + 1;
      this.showItem(newIndex);
    }
    animate(e3) {
      if (e3.way == "leave" && e3.from == "start") {
        this.el.classList.remove("-animated");
        this.call("setStyle", "home-hero-1", "Shape");
      } else {
        this.el.classList.add("-animated");
        this.call("setStyle", "home-hero-2", "Shape");
      }
    }
    showItem(index) {
      if (this.currentIndex == index) {
        return;
      }
      let oldItem = this.items[this.currentIndex];
      let oldNavItem = this.navItems[this.currentIndex];
      if (oldItem) {
        oldItem.classList.remove("-active");
        this.pauseMedia(oldItem);
      }
      if (oldNavItem) {
        oldNavItem.classList.remove("-active");
      }
      this.currentIndex = index;
      this.currentZIndex = this.currentZIndex + 1;
      let newItem = this.items[this.currentIndex];
      let newNavItem = this.navItems[this.currentIndex];
      newItem.style.zIndex = this.currentZIndex;
      newItem.classList.add("-active");
      newNavItem.classList.add("-active");
      this.playMedia(newItem);
    }
    playMedia(mediaWrap) {
      if (mediaWrap.querySelector("video")) {
        mediaWrap.querySelector("video").play();
      }
    }
    pauseMedia(mediaWrap) {
      if (mediaWrap.querySelector("video")) {
        mediaWrap.querySelector("video").pause();
      }
    }
    activateItem(e3) {
      let target = e3.currentTarget;
      let index = parseInt(target.getAttribute("data-index"));
      if (index == this.currentIndex) return;
      this.progressAnim.pause();
      this.showItem(index);
    }
    toggle(e3) {
      if (e3.way == "leave") {
        if (this.progressAnim) {
          this.progressAnim.pause();
          this.pauseMedia(this.items[this.currentIndex]);
        }
      }
    }
  };

  // src/scripts/modules/Hero.js
  var Hero_default = class extends _default {
    constructor(m2) {
      super(m2);
      window.addEventListener("heroProgress", (e3) => {
        this.el.style.setProperty("--hero-progress", e3.detail.progress);
      });
    }
    init() {
    }
  };

  // src/scripts/modules/Popins.js
  var Popins_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.opened = false;
      this.isLoading = false;
      this.popinContent = this.el.querySelector(".o-popins_content");
      this.pageURL = new URL(window.location);
      this.pageURLFull = this.getPageURLFull();
      this.mask = this.el.querySelector(".o-popins_mask");
      this.loading = this.el.querySelector(".o-popins_loading");
      this.currentPopin = null;
      this.onClick = this.onClick.bind(this);
      this.events = {
        click: {
          close: "close"
        }
      };
    }
    init() {
      let hash = new URL(document.URL).hash;
      let type = "popin";
      if (hash) {
        let cleanHash = null;
        if (hash.includes("#/menu/", 0)) {
          cleanHash = hash.replace("#/menu/", "");
          type = "menu";
        } else {
          if (hash.charAt(0) == "#") {
            cleanHash = hash.slice(1);
          }
          if (cleanHash.charAt(0) == "/") {
            cleanHash = cleanHash.slice(1);
          }
        }
        if (document.querySelector('[data-scroll-target="' + cleanHash + '"]')) {
          this.call("scrollTo", '[data-scroll-target="' + cleanHash + '"]', "Scroll");
        } else {
          setTimeout(() => {
            this.call("stop", "Scroll");
            this.load(cleanHash, type);
          }, 1e3);
        }
      }
      this.updateListeners();
    }
    updateListeners() {
      let that = this;
      document.querySelectorAll("[data-popin]").forEach((elt) => {
        elt.removeEventListener("click", that.onClick);
        elt.addEventListener("click", that.onClick);
      });
    }
    onClick(e3) {
      e3.preventDefault();
      let popinId = e3.currentTarget.getAttribute("data-popin");
      let type = "popin";
      if (popinId.includes("menu/", 0)) {
        type = "menu";
        popinId = popinId.replace("menu/", "");
      }
      if (this.opened && this.currentPopin) {
        this.currentPopin.classList.remove("-visible");
      }
      this.load(popinId, type);
      history.pushState({ urlPath: "#/" + e3.currentTarget.getAttribute("data-popin") }, "", this.pageURLFull + "#/" + e3.currentTarget.getAttribute("data-popin"));
    }
    load(popinId, type) {
      let xhrUrl = new URL(ajaxVars.url);
      xhrUrl.searchParams.set("action", "popins_ajax");
      xhrUrl.searchParams.set("popin_id", popinId);
      xhrUrl.searchParams.set("type", type);
      let that = this;
      that.isLoading = true;
      this.loading.classList.add("-visible");
      if (that.opened == false) {
        that.open();
      }
      let xhr = new XMLHttpRequest();
      xhr.open("GET", xhrUrl);
      xhr.send();
      xhr.onload = function(response) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          let result = xhr.responseText;
          that.isLoading = false;
          that.loading.classList.remove("-visible");
          that.showPopin(result);
        }
      };
    }
    open() {
      this.opened = true;
      this.call("stop", "Scroll");
      this.el.classList.add("-opened");
      this.mask.classList.add("-visible");
      this.loading.classList.add("-visible");
    }
    close() {
      this.opened = false;
      this.call("start", "Scroll");
      this.mask.classList.remove("-visible");
      this.loading.classList.remove("-visible");
      history.pushState(null, "", this.getPageURLFull());
      this.hideAndRemovePopin();
      setTimeout(() => {
        this.el.classList.remove("-opened");
        this.popinContent.innerHTML = "";
      }, 1e3);
    }
    showPopin(htmlContent) {
      if (!htmlContent) {
        this.close();
        this.el.classList.remove("-opened");
        return;
      }
      this.popinContent.innerHTML = htmlContent;
      this.currentPopin = this.popinContent.querySelector(".o-popin");
      setTimeout(() => {
        this.currentPopin.classList.add("-visible");
        this.updateEvents();
        this.updateListeners();
      }, 300);
    }
    hideAndRemovePopin() {
      if (this.currentPopin) {
        this.currentPopin.classList.remove("-visible");
      }
    }
    updateEvents() {
      this.call("addElements", this.popinContent, "Scroll");
      textAnimations(this.popinContent);
      if (this.popinContent.querySelectorAll(".wpcf7 > form").length > 0) {
        this.popinContent.querySelectorAll(".wpcf7 > form").forEach(function(e3) {
          return wpcf7.init(e3);
        });
      }
    }
    getPageURLFull() {
      return this.pageURL.origin + this.pageURL.pathname;
    }
  };

  // src/scripts/modules/Menus.js
  var Menus_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.items = this.el.querySelectorAll(".m-menus_list_item_link");
      this.medias = this.el.querySelectorAll(".m-menus_content_media_item");
    }
    init() {
      this.items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          let index = item.getAttribute("data-index");
          this.el.querySelector('.m-menus_content_media_item[data-index="' + index + '"]').classList.add("-visible");
        });
        item.addEventListener("mouseleave", () => {
          let index = item.getAttribute("data-index");
          this.el.querySelector('.m-menus_content_media_item[data-index="' + index + '"]').classList.remove("-visible");
        });
      });
    }
  };

  // src/scripts/modules/Nav.js
  var Nav_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.events = {
        click: {
          close: "close"
        }
      };
    }
    init() {
      document.querySelectorAll(".o-nav_open").forEach((elt) => {
        elt.addEventListener("click", () => {
          this.open();
        });
      });
    }
    open() {
      this.el.classList.add("-opened");
      this.call("stop", "Scroll");
    }
    close() {
      this.el.classList.remove("-opened");
      this.call("start", "Scroll");
    }
  };

  // src/scripts/modules/Story.js
  var Story_default = class extends _default {
    constructor(m2) {
      super(m2);
      setTimeout(() => {
        let items = this.el.querySelector(".m-story_content_txt").querySelectorAll(".word");
        if (items.length > 0) {
          this.tl = gsapWithCSS.timeline({ paused: true });
          this.tl.to(
            items,
            { opacity: 1, duration: 0.8, ease: "none", stagger: 0.1 }
          );
        }
      }, 500);
      window.addEventListener("storyBgProgress", (e3) => {
        this.el.style.setProperty("--story-progress", e3.detail.progress);
      });
      window.addEventListener("storyContentProgress", (e3) => {
        if (this.tl) {
          this.tl.progress(e3.detail.progress);
        }
      });
    }
    init() {
    }
  };

  // src/scripts/config.js
  var NODE_ENV = "development";
  var IS_TOUCH = window.matchMedia("(any-pointer:coarse)").matches;
  var IS_SM = window.matchMedia("(max-width: 700px)").matches;
  var IS_MD = window.matchMedia("(max-width: 1000px)").matches;
  var IS_LG = window.matchMedia("(max-width: 1200px)").matches;
  var ENV = Object.freeze({
    // Node environment
    NAME: NODE_ENV,
    IS_PROD: NODE_ENV === "production",
    IS_DEV: NODE_ENV === "development",
    // Device
    IS_TOUCH,
    IS_SM,
    IS_MD,
    IS_LG,
    IS_DESKTOP: window.matchMedia("(min-width: 1200px)").matches
  });
  var CSS_CLASS = Object.freeze({
    LOADING: "is-loading",
    LOADED: "is-loaded",
    READY: "is-ready",
    TOUCH: "is-touch",
    LAZY_CONTAINER: "c-lazy",
    LAZY_LOADED: "-lazy-loaded"
    // ...
  });

  // src/scripts/modules/Services.js
  var Services_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.tlBg = gsapWithCSS.timeline({ paused: true });
      this.tlBg.fromTo(
        ".m-services_backgrounds_item",
        { scale: 1.15, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, ease: "power2.inOut", stagger: { each: 0.6, from: "start" } },
        0
      );
      this.tlBg.add("content");
      this.tlBg.fromTo(
        ".m-services_intro_inner .c-surtitle",
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" },
        "content-=0.2"
      );
      this.tlBg.fromTo(
        ".m-services_intro_item",
        { y: "100%" },
        { y: "0", duration: 0.4, ease: "power2.out", stagger: { each: 0.35, from: "start" } },
        "content"
      );
      this.tlBg.fromTo(
        ".m-services_backgrounds_mask",
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" },
        "content+=0.2"
      );
      let clipPath = ENV.IS_SM ? "inset(15% 15% 15% 15%)" : "inset(15% 35% 15% 35%)";
      this.tlBg.fromTo(
        ".m-services_backgrounds",
        { clipPath: "inset(0 0 0 0)" },
        { clipPath, duration: 0.6, ease: "power2.out" },
        "content+=0.3"
      );
      window.addEventListener("servicesBg", (e3) => {
        const { target, progress } = e3.detail;
        if (this.tlBg) {
          this.tlBg.progress(progress);
        }
      });
    }
    init() {
    }
  };

  // src/scripts/utils/tickers.js
  var debounce = (callback, delay, immediate = false) => {
    let timeout = null;
    return (...args) => {
      clearTimeout(timeout);
      const later = () => {
        timeout = null;
        if (!immediate) {
          callback(...args);
        }
      };
      if (immediate && !timeout) {
        callback(...args);
      }
      timeout = setTimeout(later, delay);
    };
  };

  // src/scripts/modules/Collapse.js
  var Collapse_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    init() {
      if (this.el.querySelectorAll("[data-collapse]")) {
        this.el.querySelectorAll("[data-collapse]").forEach((collapse) => {
          let collapseToggle = collapse.querySelector("[data-collapse-toggle]");
          let collapseContent = collapse.querySelector("[data-collapse-content]");
          collapseToggle.addEventListener("click", (e3) => {
            let contentHeight = collapse.querySelector("[data-collapse-content-inner]").offsetHeight;
            collapse.toggleAttribute("data-collapse-opened");
            gsapWithCSS.to(collapseContent, {
              height: collapse.hasAttribute("data-collapse-opened") ? contentHeight : 0,
              ease: "expo.out",
              duration: 0.8,
              onComplete: () => {
                this.call("resize", "Scroll");
              }
            });
          });
        });
      }
      window.addEventListener(
        "resize",
        debounce(() => {
          this.resizeCollapsesContents();
        }, 10, false)
      );
    }
    resizeCollapsesContents() {
      if (this.el.querySelectorAll("[data-collapse-opened]")) {
        this.el.querySelectorAll("[data-collapse-opened]").forEach((collapse) => {
          let contentHeight = collapse.querySelector("[data-collapse-content-inner]").offsetHeight;
          collapse.querySelector("[data-collapse-content]").style.height = contentHeight + "px";
        });
      }
    }
  };

  // src/scripts/modules/FooterCarousel.js
  var FooterCarousel_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.items = [...this.el.querySelectorAll(".o-footer_carousel_item")];
      this.currentIndex = 0;
      this.maxIndex = this.items.length - 1;
      this.progressAnim = gsapWithCSS.timeline({ repeatDelay: 4, repeat: -1, paused: true });
      this.progressAnim.call(() => {
        this.playProgress();
      });
    }
    playProgress() {
      let newIndex = this.currentIndex == this.maxIndex ? 0 : this.currentIndex + 1;
      this.showItem(newIndex);
    }
    showItem(index) {
      if (this.currentIndex == index) {
        return;
      }
      let oldItem = this.items[this.currentIndex];
      if (oldItem) {
        oldItem.classList.remove("-active");
      }
      this.currentIndex = index;
      let newItem = this.items[this.currentIndex];
      newItem.classList.add("-active");
    }
    toggle(e3) {
      if (e3.way == "leave") {
        if (this.progressAnim) {
          this.progressAnim.pause();
        }
      } else {
        if (this.progressAnim) {
          this.progressAnim.play();
        }
      }
    }
  };

  // src/scripts/modules/Shape.js
  var Shape_default = class extends _default {
    constructor(m2) {
      super(m2);
    }
    update(e3) {
      let state = e3.target.getAttribute("data-state");
      if (e3.way == "enter") {
        this.setStyle(state);
      }
    }
    setStyle(style) {
      this.el.setAttribute("data-style", style);
    }
  };

  // src/scripts/modules/Slider.js
  var Slider_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.element = this.el.querySelector(".scroll-snap-slider");
      this.dots = this.el.querySelectorAll(".scroll-snap-slider_dot");
      this.slide = null;
      this.onScroll = this.onScroll.bind(this);
      this.scrollTo = this.scrollTo.bind(this);
      this.calculateSlide();
      this.attachListeners();
    }
    /**
     * Attach all necessary listeners
     */
    attachListeners() {
      this.addEventListener("scroll", this.onScroll, {
        passive: true
      });
    }
    /**
     * This listener calculates the modulo of the scroll position by the visible width.
     * Every time the result equals 0, the scroll position is exactly an integer multiple of the width.
     * This means that the carousel has reached another page.
     * The scroll-snap-type property makes sure that the container snaps perfectly to integer multiples.
     *
     * @private
     */
    onScroll() {
      if (this.element.scrollLeft % this.element.offsetWidth === 0) {
        this.calculateSlide();
        this.updateUI();
        this.element.dispatchEvent(
          new window.CustomEvent("slide-changed", {
            detail: this.slide
          })
        );
      }
    }
    /**
     * Calculates the active slide
     * @private
     */
    calculateSlide() {
      this.slide = this.element.scrollLeft / this.element.offsetWidth;
    }
    /**
     * Scroll to a slide by index.
     *
     * @param index
     * @public
     */
    scrollTo(index) {
      this.element.scrollTo({
        left: index * this.element.offsetWidth
      });
    }
    /**
     * Attach Listener to the root element
     * @param {String} event
     * @param {Function} listener
     * @param {AddEventListenerOptions} options
     * @public
     */
    addEventListener(event, listener, options = void 0) {
      this.element.addEventListener(event, listener, options);
    }
    /**
     * Remove Listener to the root element
     * @param {String} event
     * @param {Function} listener
     * @public
     */
    removeEventListener(event, listener) {
      this.element.addEventListener(event, listener);
    }
    updateUI() {
      this.dots.forEach((dot, index) => {
        dot.classList.toggle("-active", index === this.slide);
      });
    }
  };

  // src/scripts/modules/Alert.js
  var Alert_default = class extends _default {
    constructor(m2) {
      super(m2);
      this.events = {
        click: {
          close: "close"
        }
      };
      setTimeout(() => {
        if (!this.checkCookie("popin_event")) {
          this.open();
          this.setCookie("popin_event", "Ok", 1);
        }
      }, 500);
    }
    open() {
      this.el.classList.add("-opened");
      this.call("stop", "Scroll");
    }
    close() {
      this.el.classList.remove("-opened");
      this.call("start", "Scroll");
    }
    setCookie(cname, cvalue, exdays) {
      const d2 = /* @__PURE__ */ new Date();
      d2.setTime(d2.getTime() + exdays * 24 * 60 * 60 * 1e3);
      let expires = "expires=" + d2.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i3 = 0; i3 < ca.length; i3++) {
        let c3 = ca[i3];
        while (c3.charAt(0) == " ") {
          c3 = c3.substring(1);
        }
        if (c3.indexOf(name) == 0) {
          return c3.substring(name.length, c3.length);
        }
      }
      return "";
    }
    checkCookie(cookieName) {
      let cookieValue = this.getCookie(cookieName);
      return cookieValue == "Ok";
    }
  };

  // src/scripts/utils/cookieconsent-config.js
  var cookieconsent_config_default = CookieConsentConfig = {
    guiOptions: {
      consentModal: {
        layout: "box wide",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false
      }
    },
    categories: {
      necessary: {
        readOnly: true
      },
      // functionality: {},
      analytics: {}
    },
    language: {
      default: "fr",
      translations: {
        en: {
          consentModal: {
            title: "Cookie consent",
            description: "Cookies are used on this site to improve site navigation and provide the greatest user experience. By clicking \u201DAccept all\u201C, you consent to the use of the cookies.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage preferences"
            // footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
          },
          preferencesModal: {
            title: "Privacy Preference Center",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close modal",
            serviceCounterLabel: "Service|Services",
            sections: [
              {
                title: "Cookie Usage",
                description: "Cookies are used on this site to improve site navigation and provide the greatest user experience. By clicking \u201DAccept all\u201C, you consent to the use of the cookies."
              },
              {
                title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                description: "Strictly necessary cookies help make the site navigable by enabling basic functions such as page navigation and access to secure areas of the website. Without these cookies the website could not function properly.",
                linkedCategory: "necessary"
              },
              {
                title: "Analytics Cookies",
                description: "We use Google Analytics to measure audience and site statistics to understand how users interact with the site.",
                linkedCategory: "analytics"
              }
            ]
          }
        },
        fr: {
          consentModal: {
            title: "Nous utilisons des cookies",
            description: "Les cookies sont utilis\xE9s sur ce site pour am\xE9liorer votre navigation et vous offrir la meilleure exp\xE9rience utilisateur possible. En cliquant sur \xAB Tout accepter \xBB, vous consentez \xE0 l'utilisation des cookies.",
            acceptAllBtn: "Tout accepter",
            acceptNecessaryBtn: "Tout rejeter",
            showPreferencesBtn: "G\xE9rer les pr\xE9f\xE9rences"
            // footer: "<a href=\"#link\">Politique de confidentialité</a>\n<a href=\"#link\">Termes et conditions</a>"
          },
          preferencesModal: {
            title: "Centre de pr\xE9f\xE9rence des cookies",
            acceptAllBtn: "Tout accepter",
            acceptNecessaryBtn: "Tout rejeter",
            savePreferencesBtn: "Sauvegarder les pr\xE9f\xE9rences",
            closeIconLabel: "Fermer la modale",
            serviceCounterLabel: "Services",
            sections: [
              {
                title: "Utilisation des Cookies",
                description: "Les cookies sont utilis\xE9s sur ce site pour am\xE9liorer votre navigation et vous offrir la meilleure exp\xE9rience utilisateur possible. En cliquant sur \xAB Tout accepter \xBB, vous consentez \xE0 l'utilisation des cookies."
              },
              {
                title: 'Cookies strictement n\xE9cessaires <span class="pm__badge">Toujours Activ\xE9</span>',
                description: "Les cookies strictement n\xE9cessaires contribuent \xE0 rendre le site navigable en activant des fonctions de base telles que la navigation dans les pages et l'acc\xE8s \xE0 des zones s\xE9curis\xE9es du site Web. Sans ces cookies, le site Web ne pourrait pas fonctionner correctement.",
                linkedCategory: "necessary"
              },
              {
                title: "Statistiques et audience",
                description: "Nous utilisons Google Analytics afin de mesurer l'audiance et les statistiques du site afin de comprendre comment les utilisateurs interagissent avec le site.",
                linkedCategory: "analytics"
              }
            ]
          }
        }
      },
      autoDetect: "browser"
    }
  };

  // src/scripts/globals.js
  var CookieConsent;
  (() => __async(null, null, function* () {
    CookieConsent = yield Promise.resolve().then(() => (init_cookieconsent_esm(), cookieconsent_esm_exports));
    CookieConsent.run(cookieconsent_config_default);
    $html.classList.add("cc--darkmode");
  }))();
  function globals_default() {
  }

  // src/scripts/app.js
  var app = new main_esm_default({
    modules: modules_exports
  });
  function init4() {
    globals_default();
    shared_default();
    app.init(app);
    $html.classList.add(CSS_CLASS.LOADED, CSS_CLASS.READY);
    $html.classList.remove(CSS_CLASS.LOADING);
    if (ENV.IS_TOUCH) {
      $html.classList.add(CSS_CLASS.TOUCH);
    }
    if (navigator.userAgent.toLowerCase().indexOf("firefox") >= 0) {
      $html.classList.add("is-firefox");
    }
    window.addEventListener("resize", () => {
      if (window.matchMedia("(any-pointer:coarse)").matches) {
        $html.classList.add(CSS_CLASS.TOUCH);
      } else {
        $html.classList.remove(CSS_CLASS.TOUCH);
      }
    });
  }
  window.addEventListener("load", () => {
    init4();
    window.dispatchEvent(new Event("p-loaded"));
    setTimeout(() => {
      window.dispatchEvent(new Event("hide-loading"));
    }, 1500);
  });
})();
/*! Bundled license information:

vanilla-cookieconsent/dist/cookieconsent.esm.js:
  (*!
  * CookieConsent 3.1.0
  * https://github.com/orestbida/cookieconsent
  * Author Orest Bida
  * Released under the MIT License
  *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=app.js.map
