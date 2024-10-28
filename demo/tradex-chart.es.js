function fc(a, e) {
  for (var i = 0; i < e.length; i++) {
    const s = e[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const n in s)
        if (n !== "default" && !(n in a)) {
          const r = Object.getOwnPropertyDescriptor(s, n);
          r && Object.defineProperty(a, n, r.get ? r : {
            enumerable: !0,
            get: () => s[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
const Qt = "TradeX-Chart", ut = "TX", gc = "tradeXutils", Qr = "tradeXmenus", yc = "tradeXmenu", Jr = "tradeXdividers", ea = "tradeXwindows", vc = "tradeXwindow", ta = "tradeXprogress", bc = 500, xo = "stream_None", ti = "stream_Listening", Hs = "stream_Started", Co = "stream_Stopped", wc = "stream_Error", es = "stream_candleFirst", et = "stream_candleUpdate", ts = "stream_candleNew", xc = 250, Cc = 8, ia = 2, Tc = 2, To = 18, ci = 100, ii = /^(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)$/igm;
function E(a) {
  return Array.isArray(a);
}
function bi(a, e) {
  return E(a) ? a.every((i) => wi(e, i)) : !1;
}
function I(a) {
  return a && typeof a == "function";
}
function v(a) {
  return typeof a == "object" && !Array.isArray(a) && a !== null;
}
function P(a) {
  return typeof a == "number" && !isNaN(a);
}
function N(a) {
  return typeof a == "number" && Math.abs(a % 1) === 0;
}
function So(a) {
  return a != null;
}
function j(a) {
  return typeof a == "boolean";
}
function T(a) {
  return typeof a == "string";
}
function Po(a) {
  return a instanceof Map;
}
function Xn(a) {
  return !!a && (v(a) || I(a)) && I(a.then) && a[Symbol.toStringTag] === "Promise";
}
function Eo(a) {
  return a instanceof Error;
}
function ui(a) {
  return !(a && a.constructor === Function) || a.prototype === void 0 || Object.getOwnPropertyNames(a).includes("arguments") || Object.getOwnPropertyNames(a).includes("arguments") || Object.getOwnPropertyNames(a).includes("arguments") ? !1 : Function.prototype !== Object.getPrototypeOf(a) ? !0 : Object.getOwnPropertyNames(a.prototype).length > 1;
}
function wi(a, e) {
  if (e == null)
    return !1;
  switch (a) {
    case "array":
      return E(e);
    case "function":
      return I(e);
    case "object":
      return v(e);
    case "integer":
      return N(e);
    case "number":
      return P(e);
    case "valid":
      return So(e);
    case "boolean":
      return j(e);
    case "string":
      return T(e);
    case "map":
      return Po(e);
    case "promise":
      return Xn(e);
    case "error":
      return Eo(e);
    case "class":
      return ui(e);
    default:
      throw new Error(`No known test for type: ${a}`);
  }
}
function Sc(a) {
  const e = [
    "array",
    "error",
    "class",
    "function",
    "map",
    "promise",
    "object",
    "integer",
    "number",
    "boolean",
    "string"
  ];
  for (let i of e)
    try {
      if (wi(i, a)) return i;
    } catch {
      return typeof a;
    }
}
const p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkType: wi,
  isArray: E,
  isArrayOfType: bi,
  isBoolean: j,
  isClass: ui,
  isError: Eo,
  isFunction: I,
  isInteger: N,
  isMap: Po,
  isNumber: P,
  isObject: v,
  isPromise: Xn,
  isString: T,
  isValid: So,
  typeOf: Sc
}, Symbol.toStringTag, { value: "Module" })), Mo = ["id", "class", "style", "alt", "width", "height", "title"], Lo = [...Mo, "name", "type", "value", "default", "placeholder", "max", "min", "maxlenght", "src", "checked", "disabled", "pattern", "readonly", "required", "size", "step", "multiple", "autofocus", "list", "autocomplete"], Pc = ["button", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function Ec(a, e = document) {
  return e.getElementById(a);
}
function Mc(a, e = document) {
  return e.getElementsByClassName(a);
}
function Lc(a, e = document) {
  return e.getElementsByName(a);
}
function Ac(a, e = document) {
  return e.getElementsByTagName(a);
}
function Ao(a, e = document) {
  return e.querySelector(a);
}
function Oo(a, e = document) {
  return e.querySelectorAll(a);
}
function Oc(a) {
  return typeof Node == "object" ? a instanceof Node : a && typeof a == "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
}
function W(a) {
  return typeof HTMLElement == "object" ? a instanceof HTMLElement : a && typeof a == "object" && a !== null && a.nodeType === 1 && typeof a.nodeName == "string";
}
function Et(a) {
  return W(a) ? !!a && !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) : !1;
}
function Yn(a) {
  if (!W(a)) return !1;
  const e = a.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function Dc(a) {
  if (!W(a)) return !1;
  const e = getComputedStyle(a);
  if (e.display === "none" || e.visibility !== "visible" || parseFloat(e.opacity) < 0.1 || a.offsetWidth + a.offsetHeight + a.getBoundingClientRect().height + a.getBoundingClientRect().width === 0)
    return !1;
  const i = {
    x: a.getBoundingClientRect().left + a.offsetWidth / 2,
    y: a.getBoundingClientRect().top + a.offsetHeight / 2
  };
  if (i.x < 0 || i.x > (document.documentElement.clientWidth || window.innerWidth) || i.y < 0 || i.y > (document.documentElement.clientHeight || window.innerHeight))
    return !1;
  let s = document.elementFromPoint(i.x, i.y);
  do
    if (s === elem) return !0;
  while (s = s.parentNode);
  return !1;
}
function Kn(a, e) {
  if (Zn(a)) {
    var i = window.URL || window.webkitURL || window;
    a = new Blob([a], { type: "image/svg+xml" }), a = i.createObjectURL(a);
  }
  const s = new Image();
  if (s.src = a, I(e))
    s.complete ? e(s) : (s.onload = () => e(s), s.onerror = () => e(!1));
  else
    return new Promise(function(n, r) {
      s.complete ? n(s) : (s.onload = () => n(s), s.onerror = () => r(!1));
    });
}
function Zn(a) {
  return T(a) ? /<\s*svg[^>]*>(.*?)<\s*\/\s*svg>/.test(a) : !1;
}
function Ic(a) {
  return new Promise((e) => {
    if (document.querySelector(a))
      return e(document.querySelector(a));
    const i = new MutationObserver((s) => {
      document.querySelector(a) && (i.disconnect(), e(document.querySelector(a)));
    });
    i.observe(document.body, {
      childList: !0,
      subtree: !0
    });
  });
}
function Ce(a) {
  if (!W(a)) return !1;
  let e = 0, i = 0, s = a;
  for (; s && s.tagName.toLowerCase() != "body" && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop); )
    e += s.offsetLeft - s.scrollLeft, i += s.offsetTop - s.scrollTop, s = s.offsetParent;
  const n = a.getBoundingClientRect();
  let r = n.right - n.left, o = n.bottom - n.top, l = Et(a), c = Yn(a);
  return {
    top: i,
    bottom: i + o,
    left: e,
    right: e + r,
    width: r,
    height: o,
    visible: l,
    viewport: c
  };
}
function Nc(a, e) {
  if (!W(a) || !W(a)) return !1;
  const i = Ce(a), s = Ce(e);
  return {
    x: i.top - s.top,
    y: i.left - s.left,
    el1Location: i,
    el2Location: s
  };
}
function Do(a) {
  if (!T(a)) return !1;
  const e = document.createElement("template");
  return a = a.trim(), e.innerHTML = a, e.content.firstChild;
}
function Rc(a) {
  if (!T(a)) return !1;
  const e = document.createElement("template");
  return e.innerHTML = a, e.content.childNodes;
}
function is(a, e, i) {
  if (!Zn(a) || !P(i?.w) || !P(i?.h))
    return !1;
  let s = i.w, n = i.h, r = document.createElement("canvas");
  r.width = s, r.height = n;
  let o = Do(a);
  o.style.fill = e, o.setAttribute("width", s), o.setAttribute("height", n), o.xmlns = "http://www.w3.org/2000/svg";
  let l = new XMLSerializer().serializeToString(o), f = "data:image/svg+xml;base64," + btoa(l), C = new Image();
  return C.setAttribute("width", s), C.setAttribute("height", n), C.onload = () => {
    r.getContext("2d").drawImage(C, 0, 0, s, n);
  }, C.src = f, C;
}
function kc(a) {
  if (!W(a)) return !1;
  const e = (s) => {
    !a.contains(s.target) && Et(a) && (a.style.display = "none", i());
  }, i = () => {
    document.removeEventListener("click", e);
  };
  document.addEventListener("click", e);
}
function $c(a, e) {
  if (!W(a)) return !1;
  const i = (n) => {
    !a.contains(n.target) && Et(a) && (e(), s());
  }, s = () => {
    document.removeEventListener("click", i);
  };
  document.addEventListener("click", i);
}
function Io(a, e) {
  let i, s;
  if (T(a)) i = document.getElementById(a);
  else if (W(a)) i = a;
  else return !1;
  const n = (i.ownerDocument || document).defaultView;
  return T(e) ? (n && n.getComputedStyle ? (e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), s = document.defaultView.getComputedStyle(i, null).getPropertyValue(e)) : i.currentStyle && (s = i.currentStyle[e]), s) : !1;
}
function Hc(a, e, i, s) {
  let n = Qn(a, e, i, s);
  if (n) n.i >= 0 ? n.rules[n.i].style[n.property] = n.value : Ro(n.styleSheet, n.selector, n.rules, n.index);
  else return;
}
function _c(a, e, i) {
  let s = Qn(a, e, i, "");
  (s.styleSheet.deleteRule || s.styleSheet.removeRule)(s.i);
}
function Qn(a, e, i, s) {
  if (!a || !v(a)) return null;
  if (a.constructor.name == "HTMLStyleElement")
    a = a.sheet;
  else if (a.constructor.name != "CSSStyleSheet") return null;
  let n = No(e, i, s);
  e = n[0], i = n[1], s = n[2];
  const r = a.cssRules || a.rules;
  for (var o = r.length - 1; o > 0 && r[o].selectorText !== e; --o)
    ;
  return { styleSheet: a, rules: r, selector: e, property: i, value: s, i: o };
}
function No(a, e, i) {
  return [
    a = a.toLowerCase().replace(/\s+/g, " "),
    e = e.toLowerCase(),
    i = i.toLowerCase()
  ];
}
function Ro(a, e, i, s) {
  a.insertRule ? a.insertRule(e + "{" + i + "}", s) : a.addRule(e, i, s);
}
function Jn(a, e) {
  return !W(a) || !T(e) ? null : a.classList.contains(e) ? a : Jn(a.parentElement, e);
}
function ko(a, e) {
  let i = T(e?.entry) ? e?.entry : "", n = `${T(a) ? `<label for="${i}">${a}</label>` : ""}<input id="${i}" class="subject" `;
  for (let r in e)
    (Lo.includes(r) || /^(data-[^\t\n\f \/>"'=]+)/g.test(r)) && (n += `${r}="${e[r]}" `);
  return n += `>
`;
}
function Fc(a, e) {
  let i = T(e?.entry) ? e?.entry : "", s = T(a) ? `<label for="${i}">${a}</label>` : "", n = "";
  for (let o in e?.options)
    n += `<option value="${e.options[o]}">${o}</option>`;
  return `${s}<select id="${i}" class="subject">${n}</select>
`;
}
const f1 = {
  addCSSRule: Ro,
  addStyleRule: Hc,
  deleteStyleRule: _c,
  elementDimPos: Ce,
  elementsDistance: Nc,
  findByClass: Mc,
  findByID: Ec,
  findByName: Lc,
  findBySelector: Ao,
  findBySelectorAll: Oo,
  findStyleRule: Qn,
  findTargetParentWithClass: Jn,
  fndByTag: Ac,
  getStyle: Io,
  hideOnClickOutside: kc,
  htmlAttr: Mo,
  htmlInput: ko,
  htmlToElement: Do,
  htmlToElements: Rc,
  inputAttr: Lo,
  inputTypes: Pc,
  isHTMLElement: W,
  isImage: Kn,
  isInViewport: Yn,
  isNode: Oc,
  isSVG: Zn,
  isVisible: Et,
  isVisibleToUser: Dc,
  onClickOutside: $c,
  styleRuleSanitize: No,
  svgToImage: is,
  waitForElm: Ic
}, Bc = typeof window < "u" && typeof window.document < "u";
typeof process < "u" && process.versions != null && process.versions.node != null;
typeof window < "u" && window.name === "nodejs" || typeof navigator < "u" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
const Uc = ((a) => typeof a < "u" && ("onorientationchange" in a || typeof a.matchMedia == "function" && a.matchMedia("(any-pointer:coarse)").matches || typeof navigator < "u" && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || "ontouchstart" in a || a.DocumentTouch && document instanceof a.DocumentTouch)))(typeof window < "u" ? window : {}), Vc = {
  idle: 0,
  dragStart: 1,
  dragging: 2
};
class Ct {
  #e = 0;
  #t = 0;
  constructor() {
    if (arguments.length === 1) {
      const { x: e, y: i } = arguments[0];
      this.x = e || 0, this.y = i || 0;
    } else if (arguments.length > 1) {
      const [e, i] = arguments;
      this.x = e || 0, this.y = i || 0;
    }
  }
  set x(e) {
    P(e) && (this.#e = e);
  }
  get x() {
    return this.#e;
  }
  set y(e) {
    P(e) && (this.#t = e);
  }
  get y() {
    return this.#t;
  }
  clone() {
    return new Ct(this.x, this.y);
  }
}
function zc(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var $o = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(a) {
  (function(e, i, s, n) {
    var r = ["", "webkit", "Moz", "MS", "ms", "o"], o = i.createElement("div"), l = "function", c = Math.round, m = Math.abs, f = Date.now;
    function C(u, p, g) {
      return setTimeout(ne(u, g), p);
    }
    function M(u, p, g) {
      return Array.isArray(u) ? (L(u, g[p], g), !0) : !1;
    }
    function L(u, p, g) {
      var b;
      if (u)
        if (u.forEach)
          u.forEach(p, g);
        else if (u.length !== n)
          for (b = 0; b < u.length; )
            p.call(g, u[b], b, u), b++;
        else
          for (b in u)
            u.hasOwnProperty(b) && p.call(g, u[b], b, u);
    }
    function D(u, p, g) {
      var b = "DEPRECATED METHOD: " + p + `
` + g + ` AT 
`;
      return function() {
        var S = new Error("get-stack-trace"), O = S && S.stack ? S.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", F = e.console && (e.console.warn || e.console.log);
        return F && F.call(e.console, b, O), u.apply(this, arguments);
      };
    }
    var k;
    typeof Object.assign != "function" ? k = function(p) {
      if (p === n || p === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var g = Object(p), b = 1; b < arguments.length; b++) {
        var S = arguments[b];
        if (S !== n && S !== null)
          for (var O in S)
            S.hasOwnProperty(O) && (g[O] = S[O]);
      }
      return g;
    } : k = Object.assign;
    var X = D(function(p, g, b) {
      for (var S = Object.keys(g), O = 0; O < S.length; )
        (!b || b && p[S[O]] === n) && (p[S[O]] = g[S[O]]), O++;
      return p;
    }, "extend", "Use `assign`."), le = D(function(p, g) {
      return X(p, g, !0);
    }, "merge", "Use `assign`.");
    function $(u, p, g) {
      var b = p.prototype, S;
      S = u.prototype = Object.create(b), S.constructor = u, S._super = b, g && k(S, g);
    }
    function ne(u, p) {
      return function() {
        return u.apply(p, arguments);
      };
    }
    function Z(u, p) {
      return typeof u == l ? u.apply(p && p[0] || n, p) : u;
    }
    function G(u, p) {
      return u === n ? p : u;
    }
    function he(u, p, g) {
      L(U(p), function(b) {
        u.addEventListener(b, g, !1);
      });
    }
    function pe(u, p, g) {
      L(U(p), function(b) {
        u.removeEventListener(b, g, !1);
      });
    }
    function ye(u, p) {
      for (; u; ) {
        if (u == p)
          return !0;
        u = u.parentNode;
      }
      return !1;
    }
    function _(u, p) {
      return u.indexOf(p) > -1;
    }
    function U(u) {
      return u.trim().split(/\s+/g);
    }
    function ze(u, p, g) {
      if (u.indexOf && !g)
        return u.indexOf(p);
      for (var b = 0; b < u.length; ) {
        if (g && u[b][g] == p || !g && u[b] === p)
          return b;
        b++;
      }
      return -1;
    }
    function Ci(u) {
      return Array.prototype.slice.call(u, 0);
    }
    function Or(u, p, g) {
      for (var b = [], S = [], O = 0; O < u.length; ) {
        var F = u[O][p];
        ze(S, F) < 0 && b.push(u[O]), S[O] = F, O++;
      }
      return b = b.sort(function(fe, xe) {
        return fe[p] > xe[p];
      }), b;
    }
    function Ti(u, p) {
      for (var g, b, S = p[0].toUpperCase() + p.slice(1), O = 0; O < r.length; ) {
        if (g = r[O], b = g ? g + S : p, b in u)
          return b;
        O++;
      }
      return n;
    }
    var Rh = 1;
    function kh() {
      return Rh++;
    }
    function Dr(u) {
      var p = u.ownerDocument || u;
      return p.defaultView || p.parentWindow || e;
    }
    var $h = /mobile|tablet|ip(ad|hone|od)|android/i, Ir = "ontouchstart" in e, Hh = Ti(e, "PointerEvent") !== n, _h = Ir && $h.test(navigator.userAgent), Wt = "touch", Fh = "pen", Es = "mouse", Bh = "kinect", Uh = 25, we = 1, gt = 2, te = 4, Se = 8, Si = 1, Gt = 2, qt = 4, jt = 8, Xt = 16, We = Gt | qt, yt = jt | Xt, Nr = We | yt, Rr = ["x", "y"], Pi = ["clientX", "clientY"];
    function De(u, p) {
      var g = this;
      this.manager = u, this.callback = p, this.element = u.element, this.target = u.options.inputTarget, this.domHandler = function(b) {
        Z(u.options.enable, [u]) && g.handler(b);
      }, this.init();
    }
    De.prototype = {
      handler: function() {
      },
      init: function() {
        this.evEl && he(this.element, this.evEl, this.domHandler), this.evTarget && he(this.target, this.evTarget, this.domHandler), this.evWin && he(Dr(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && pe(this.element, this.evEl, this.domHandler), this.evTarget && pe(this.target, this.evTarget, this.domHandler), this.evWin && pe(Dr(this.element), this.evWin, this.domHandler);
      }
    };
    function Vh(u) {
      var p, g = u.options.inputClass;
      return g ? p = g : Hh ? p = Ls : _h ? p = Li : Ir ? p = As : p = Mi, new p(u, zh);
    }
    function zh(u, p, g) {
      var b = g.pointers.length, S = g.changedPointers.length, O = p & we && b - S === 0, F = p & (te | Se) && b - S === 0;
      g.isFirst = !!O, g.isFinal = !!F, O && (u.session = {}), g.eventType = p, Wh(u, g), u.emit("hammer.input", g), u.recognize(g), u.session.prevInput = g;
    }
    function Wh(u, p) {
      var g = u.session, b = p.pointers, S = b.length;
      g.firstInput || (g.firstInput = kr(p)), S > 1 && !g.firstMultiple ? g.firstMultiple = kr(p) : S === 1 && (g.firstMultiple = !1);
      var O = g.firstInput, F = g.firstMultiple, ce = F ? F.center : O.center, fe = p.center = $r(b);
      p.timeStamp = f(), p.deltaTime = p.timeStamp - O.timeStamp, p.angle = Ms(ce, fe), p.distance = Ei(ce, fe), Gh(g, p), p.offsetDirection = _r(p.deltaX, p.deltaY);
      var xe = Hr(p.deltaTime, p.deltaX, p.deltaY);
      p.overallVelocityX = xe.x, p.overallVelocityY = xe.y, p.overallVelocity = m(xe.x) > m(xe.y) ? xe.x : xe.y, p.scale = F ? Xh(F.pointers, b) : 1, p.rotation = F ? jh(F.pointers, b) : 0, p.maxPointers = g.prevInput ? p.pointers.length > g.prevInput.maxPointers ? p.pointers.length : g.prevInput.maxPointers : p.pointers.length, qh(g, p);
      var qe = u.element;
      ye(p.srcEvent.target, qe) && (qe = p.srcEvent.target), p.target = qe;
    }
    function Gh(u, p) {
      var g = p.center, b = u.offsetDelta || {}, S = u.prevDelta || {}, O = u.prevInput || {};
      (p.eventType === we || O.eventType === te) && (S = u.prevDelta = {
        x: O.deltaX || 0,
        y: O.deltaY || 0
      }, b = u.offsetDelta = {
        x: g.x,
        y: g.y
      }), p.deltaX = S.x + (g.x - b.x), p.deltaY = S.y + (g.y - b.y);
    }
    function qh(u, p) {
      var g = u.lastInterval || p, b = p.timeStamp - g.timeStamp, S, O, F, ce;
      if (p.eventType != Se && (b > Uh || g.velocity === n)) {
        var fe = p.deltaX - g.deltaX, xe = p.deltaY - g.deltaY, qe = Hr(b, fe, xe);
        O = qe.x, F = qe.y, S = m(qe.x) > m(qe.y) ? qe.x : qe.y, ce = _r(fe, xe), u.lastInterval = p;
      } else
        S = g.velocity, O = g.velocityX, F = g.velocityY, ce = g.direction;
      p.velocity = S, p.velocityX = O, p.velocityY = F, p.direction = ce;
    }
    function kr(u) {
      for (var p = [], g = 0; g < u.pointers.length; )
        p[g] = {
          clientX: c(u.pointers[g].clientX),
          clientY: c(u.pointers[g].clientY)
        }, g++;
      return {
        timeStamp: f(),
        pointers: p,
        center: $r(p),
        deltaX: u.deltaX,
        deltaY: u.deltaY
      };
    }
    function $r(u) {
      var p = u.length;
      if (p === 1)
        return {
          x: c(u[0].clientX),
          y: c(u[0].clientY)
        };
      for (var g = 0, b = 0, S = 0; S < p; )
        g += u[S].clientX, b += u[S].clientY, S++;
      return {
        x: c(g / p),
        y: c(b / p)
      };
    }
    function Hr(u, p, g) {
      return {
        x: p / u || 0,
        y: g / u || 0
      };
    }
    function _r(u, p) {
      return u === p ? Si : m(u) >= m(p) ? u < 0 ? Gt : qt : p < 0 ? jt : Xt;
    }
    function Ei(u, p, g) {
      g || (g = Rr);
      var b = p[g[0]] - u[g[0]], S = p[g[1]] - u[g[1]];
      return Math.sqrt(b * b + S * S);
    }
    function Ms(u, p, g) {
      g || (g = Rr);
      var b = p[g[0]] - u[g[0]], S = p[g[1]] - u[g[1]];
      return Math.atan2(S, b) * 180 / Math.PI;
    }
    function jh(u, p) {
      return Ms(p[1], p[0], Pi) + Ms(u[1], u[0], Pi);
    }
    function Xh(u, p) {
      return Ei(p[0], p[1], Pi) / Ei(u[0], u[1], Pi);
    }
    var Yh = {
      mousedown: we,
      mousemove: gt,
      mouseup: te
    }, Kh = "mousedown", Zh = "mousemove mouseup";
    function Mi() {
      this.evEl = Kh, this.evWin = Zh, this.pressed = !1, De.apply(this, arguments);
    }
    $(Mi, De, {
      handler: function(p) {
        var g = Yh[p.type];
        g & we && p.button === 0 && (this.pressed = !0), g & gt && p.which !== 1 && (g = te), this.pressed && (g & te && (this.pressed = !1), this.callback(this.manager, g, {
          pointers: [p],
          changedPointers: [p],
          pointerType: Es,
          srcEvent: p
        }));
      }
    });
    var Qh = {
      pointerdown: we,
      pointermove: gt,
      pointerup: te,
      pointercancel: Se,
      pointerout: Se
    }, Jh = {
      2: Wt,
      3: Fh,
      4: Es,
      5: Bh
    }, Fr = "pointerdown", Br = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Fr = "MSPointerDown", Br = "MSPointerMove MSPointerUp MSPointerCancel");
    function Ls() {
      this.evEl = Fr, this.evWin = Br, De.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    $(Ls, De, {
      handler: function(p) {
        var g = this.store, b = !1, S = p.type.toLowerCase().replace("ms", ""), O = Qh[S], F = Jh[p.pointerType] || p.pointerType, ce = F == Wt, fe = ze(g, p.pointerId, "pointerId");
        O & we && (p.button === 0 || ce) ? fe < 0 && (g.push(p), fe = g.length - 1) : O & (te | Se) && (b = !0), !(fe < 0) && (g[fe] = p, this.callback(this.manager, O, {
          pointers: g,
          changedPointers: [p],
          pointerType: F,
          srcEvent: p
        }), b && g.splice(fe, 1));
      }
    });
    var ec = {
      touchstart: we,
      touchmove: gt,
      touchend: te,
      touchcancel: Se
    }, tc = "touchstart", ic = "touchstart touchmove touchend touchcancel";
    function Ur() {
      this.evTarget = tc, this.evWin = ic, this.started = !1, De.apply(this, arguments);
    }
    $(Ur, De, {
      handler: function(p) {
        var g = ec[p.type];
        if (g === we && (this.started = !0), !!this.started) {
          var b = sc.call(this, p, g);
          g & (te | Se) && b[0].length - b[1].length === 0 && (this.started = !1), this.callback(this.manager, g, {
            pointers: b[0],
            changedPointers: b[1],
            pointerType: Wt,
            srcEvent: p
          });
        }
      }
    });
    function sc(u, p) {
      var g = Ci(u.touches), b = Ci(u.changedTouches);
      return p & (te | Se) && (g = Or(g.concat(b), "identifier")), [g, b];
    }
    var nc = {
      touchstart: we,
      touchmove: gt,
      touchend: te,
      touchcancel: Se
    }, rc = "touchstart touchmove touchend touchcancel";
    function Li() {
      this.evTarget = rc, this.targetIds = {}, De.apply(this, arguments);
    }
    $(Li, De, {
      handler: function(p) {
        var g = nc[p.type], b = ac.call(this, p, g);
        b && this.callback(this.manager, g, {
          pointers: b[0],
          changedPointers: b[1],
          pointerType: Wt,
          srcEvent: p
        });
      }
    });
    function ac(u, p) {
      var g = Ci(u.touches), b = this.targetIds;
      if (p & (we | gt) && g.length === 1)
        return b[g[0].identifier] = !0, [g, g];
      var S, O, F = Ci(u.changedTouches), ce = [], fe = this.target;
      if (O = g.filter(function(xe) {
        return ye(xe.target, fe);
      }), p === we)
        for (S = 0; S < O.length; )
          b[O[S].identifier] = !0, S++;
      for (S = 0; S < F.length; )
        b[F[S].identifier] && ce.push(F[S]), p & (te | Se) && delete b[F[S].identifier], S++;
      if (ce.length)
        return [
          Or(O.concat(ce), "identifier"),
          ce
        ];
    }
    var oc = 2500, Vr = 25;
    function As() {
      De.apply(this, arguments);
      var u = ne(this.handler, this);
      this.touch = new Li(this.manager, u), this.mouse = new Mi(this.manager, u), this.primaryTouch = null, this.lastTouches = [];
    }
    $(As, De, {
      handler: function(p, g, b) {
        var S = b.pointerType == Wt, O = b.pointerType == Es;
        if (!(O && b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents)) {
          if (S)
            lc.call(this, g, b);
          else if (O && hc.call(this, b))
            return;
          this.callback(p, g, b);
        }
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function lc(u, p) {
      u & we ? (this.primaryTouch = p.changedPointers[0].identifier, zr.call(this, p)) : u & (te | Se) && zr.call(this, p);
    }
    function zr(u) {
      var p = u.changedPointers[0];
      if (p.identifier === this.primaryTouch) {
        var g = { x: p.clientX, y: p.clientY };
        this.lastTouches.push(g);
        var b = this.lastTouches, S = function() {
          var O = b.indexOf(g);
          O > -1 && b.splice(O, 1);
        };
        setTimeout(S, oc);
      }
    }
    function hc(u) {
      for (var p = u.srcEvent.clientX, g = u.srcEvent.clientY, b = 0; b < this.lastTouches.length; b++) {
        var S = this.lastTouches[b], O = Math.abs(p - S.x), F = Math.abs(g - S.y);
        if (O <= Vr && F <= Vr)
          return !0;
      }
      return !1;
    }
    var Wr = Ti(o.style, "touchAction"), Gr = Wr !== n, qr = "compute", jr = "auto", Os = "manipulation", vt = "none", Yt = "pan-x", Kt = "pan-y", Ai = uc();
    function Ds(u, p) {
      this.manager = u, this.set(p);
    }
    Ds.prototype = {
      set: function(u) {
        u == qr && (u = this.compute()), Gr && this.manager.element.style && Ai[u] && (this.manager.element.style[Wr] = u), this.actions = u.toLowerCase().trim();
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var u = [];
        return L(this.manager.recognizers, function(p) {
          Z(p.options.enable, [p]) && (u = u.concat(p.getTouchAction()));
        }), cc(u.join(" "));
      },
      preventDefaults: function(u) {
        var p = u.srcEvent, g = u.offsetDirection;
        if (this.manager.session.prevented) {
          p.preventDefault();
          return;
        }
        var b = this.actions, S = _(b, vt) && !Ai[vt], O = _(b, Kt) && !Ai[Kt], F = _(b, Yt) && !Ai[Yt];
        if (S) {
          var ce = u.pointers.length === 1, fe = u.distance < 2, xe = u.deltaTime < 250;
          if (ce && fe && xe)
            return;
        }
        if (!(F && O) && (S || O && g & We || F && g & yt))
          return this.preventSrc(p);
      },
      preventSrc: function(u) {
        this.manager.session.prevented = !0, u.preventDefault();
      }
    };
    function cc(u) {
      if (_(u, vt))
        return vt;
      var p = _(u, Yt), g = _(u, Kt);
      return p && g ? vt : p || g ? p ? Yt : Kt : _(u, Os) ? Os : jr;
    }
    function uc() {
      if (!Gr)
        return !1;
      var u = {}, p = e.CSS && e.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(g) {
        u[g] = p ? e.CSS.supports("touch-action", g) : !0;
      }), u;
    }
    var Oi = 1, Ie = 2, At = 4, st = 8, Ye = st, Zt = 16, Ge = 32;
    function Ke(u) {
      this.options = k({}, this.defaults, u || {}), this.id = kh(), this.manager = null, this.options.enable = G(this.options.enable, !0), this.state = Oi, this.simultaneous = {}, this.requireFail = [];
    }
    Ke.prototype = {
      defaults: {},
      set: function(u) {
        return k(this.options, u), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function(u) {
        if (M(u, "recognizeWith", this))
          return this;
        var p = this.simultaneous;
        return u = Di(u, this), p[u.id] || (p[u.id] = u, u.recognizeWith(this)), this;
      },
      dropRecognizeWith: function(u) {
        return M(u, "dropRecognizeWith", this) ? this : (u = Di(u, this), delete this.simultaneous[u.id], this);
      },
      requireFailure: function(u) {
        if (M(u, "requireFailure", this))
          return this;
        var p = this.requireFail;
        return u = Di(u, this), ze(p, u) === -1 && (p.push(u), u.requireFailure(this)), this;
      },
      dropRequireFailure: function(u) {
        if (M(u, "dropRequireFailure", this))
          return this;
        u = Di(u, this);
        var p = ze(this.requireFail, u);
        return p > -1 && this.requireFail.splice(p, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(u) {
        return !!this.simultaneous[u.id];
      },
      emit: function(u) {
        var p = this, g = this.state;
        function b(S) {
          p.manager.emit(S, u);
        }
        g < st && b(p.options.event + Xr(g)), b(p.options.event), u.additionalEvent && b(u.additionalEvent), g >= st && b(p.options.event + Xr(g));
      },
      tryEmit: function(u) {
        if (this.canEmit())
          return this.emit(u);
        this.state = Ge;
      },
      canEmit: function() {
        for (var u = 0; u < this.requireFail.length; ) {
          if (!(this.requireFail[u].state & (Ge | Oi)))
            return !1;
          u++;
        }
        return !0;
      },
      recognize: function(u) {
        var p = k({}, u);
        if (!Z(this.options.enable, [this, p])) {
          this.reset(), this.state = Ge;
          return;
        }
        this.state & (Ye | Zt | Ge) && (this.state = Oi), this.state = this.process(p), this.state & (Ie | At | st | Zt) && this.tryEmit(p);
      },
      process: function(u) {
      },
      getTouchAction: function() {
      },
      reset: function() {
      }
    };
    function Xr(u) {
      return u & Zt ? "cancel" : u & st ? "end" : u & At ? "move" : u & Ie ? "start" : "";
    }
    function Yr(u) {
      return u == Xt ? "down" : u == jt ? "up" : u == Gt ? "left" : u == qt ? "right" : "";
    }
    function Di(u, p) {
      var g = p.manager;
      return g ? g.get(u) : u;
    }
    function _e() {
      Ke.apply(this, arguments);
    }
    $(_e, Ke, {
      defaults: {
        pointers: 1
      },
      attrTest: function(u) {
        var p = this.options.pointers;
        return p === 0 || u.pointers.length === p;
      },
      process: function(u) {
        var p = this.state, g = u.eventType, b = p & (Ie | At), S = this.attrTest(u);
        return b && (g & Se || !S) ? p | Zt : b || S ? g & te ? p | st : p & Ie ? p | At : Ie : Ge;
      }
    });
    function Ii() {
      _e.apply(this, arguments), this.pX = null, this.pY = null;
    }
    $(Ii, _e, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Nr
      },
      getTouchAction: function() {
        var u = this.options.direction, p = [];
        return u & We && p.push(Kt), u & yt && p.push(Yt), p;
      },
      directionTest: function(u) {
        var p = this.options, g = !0, b = u.distance, S = u.direction, O = u.deltaX, F = u.deltaY;
        return S & p.direction || (p.direction & We ? (S = O === 0 ? Si : O < 0 ? Gt : qt, g = O != this.pX, b = Math.abs(u.deltaX)) : (S = F === 0 ? Si : F < 0 ? jt : Xt, g = F != this.pY, b = Math.abs(u.deltaY))), u.direction = S, g && b > p.threshold && S & p.direction;
      },
      attrTest: function(u) {
        return _e.prototype.attrTest.call(this, u) && (this.state & Ie || !(this.state & Ie) && this.directionTest(u));
      },
      emit: function(u) {
        this.pX = u.deltaX, this.pY = u.deltaY;
        var p = Yr(u.direction);
        p && (u.additionalEvent = this.options.event + p), this._super.emit.call(this, u);
      }
    });
    function Is() {
      _e.apply(this, arguments);
    }
    $(Is, _e, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [vt];
      },
      attrTest: function(u) {
        return this._super.attrTest.call(this, u) && (Math.abs(u.scale - 1) > this.options.threshold || this.state & Ie);
      },
      emit: function(u) {
        if (u.scale !== 1) {
          var p = u.scale < 1 ? "in" : "out";
          u.additionalEvent = this.options.event + p;
        }
        this._super.emit.call(this, u);
      }
    });
    function Ns() {
      Ke.apply(this, arguments), this._timer = null, this._input = null;
    }
    $(Ns, Ke, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function() {
        return [jr];
      },
      process: function(u) {
        var p = this.options, g = u.pointers.length === p.pointers, b = u.distance < p.threshold, S = u.deltaTime > p.time;
        if (this._input = u, !b || !g || u.eventType & (te | Se) && !S)
          this.reset();
        else if (u.eventType & we)
          this.reset(), this._timer = C(function() {
            this.state = Ye, this.tryEmit();
          }, p.time, this);
        else if (u.eventType & te)
          return Ye;
        return Ge;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(u) {
        this.state === Ye && (u && u.eventType & te ? this.manager.emit(this.options.event + "up", u) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function Rs() {
      _e.apply(this, arguments);
    }
    $(Rs, _e, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [vt];
      },
      attrTest: function(u) {
        return this._super.attrTest.call(this, u) && (Math.abs(u.rotation) > this.options.threshold || this.state & Ie);
      }
    });
    function ks() {
      _e.apply(this, arguments);
    }
    $(ks, _e, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: We | yt,
        pointers: 1
      },
      getTouchAction: function() {
        return Ii.prototype.getTouchAction.call(this);
      },
      attrTest: function(u) {
        var p = this.options.direction, g;
        return p & (We | yt) ? g = u.overallVelocity : p & We ? g = u.overallVelocityX : p & yt && (g = u.overallVelocityY), this._super.attrTest.call(this, u) && p & u.offsetDirection && u.distance > this.options.threshold && u.maxPointers == this.options.pointers && m(g) > this.options.velocity && u.eventType & te;
      },
      emit: function(u) {
        var p = Yr(u.offsetDirection);
        p && this.manager.emit(this.options.event + p, u), this.manager.emit(this.options.event, u);
      }
    });
    function Ni() {
      Ke.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    $(Ni, Ke, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [Os];
      },
      process: function(u) {
        var p = this.options, g = u.pointers.length === p.pointers, b = u.distance < p.threshold, S = u.deltaTime < p.time;
        if (this.reset(), u.eventType & we && this.count === 0)
          return this.failTimeout();
        if (b && S && g) {
          if (u.eventType != te)
            return this.failTimeout();
          var O = this.pTime ? u.timeStamp - this.pTime < p.interval : !0, F = !this.pCenter || Ei(this.pCenter, u.center) < p.posThreshold;
          this.pTime = u.timeStamp, this.pCenter = u.center, !F || !O ? this.count = 1 : this.count += 1, this._input = u;
          var ce = this.count % p.taps;
          if (ce === 0)
            return this.hasRequireFailures() ? (this._timer = C(function() {
              this.state = Ye, this.tryEmit();
            }, p.interval, this), Ie) : Ye;
        }
        return Ge;
      },
      failTimeout: function() {
        return this._timer = C(function() {
          this.state = Ge;
        }, this.options.interval, this), Ge;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function nt(u, p) {
      return p = p || {}, p.recognizers = G(p.recognizers, nt.defaults.preset), new $s(u, p);
    }
    nt.VERSION = "2.0.7", nt.defaults = {
      domEvents: !1,
      touchAction: qr,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [Rs, { enable: !1 }],
        [Is, { enable: !1 }, ["rotate"]],
        [ks, { direction: We }],
        [Ii, { direction: We }, ["swipe"]],
        [Ni],
        [Ni, { event: "doubletap", taps: 2 }, ["tap"]],
        [Ns]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var dc = 1, Kr = 2;
    function $s(u, p) {
      this.options = k({}, nt.defaults, p || {}), this.options.inputTarget = this.options.inputTarget || u, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = u, this.input = Vh(this), this.touchAction = new Ds(this, this.options.touchAction), Zr(this, !0), L(this.options.recognizers, function(g) {
        var b = this.add(new g[0](g[1]));
        g[2] && b.recognizeWith(g[2]), g[3] && b.requireFailure(g[3]);
      }, this);
    }
    $s.prototype = {
      set: function(u) {
        return k(this.options, u), u.touchAction && this.touchAction.update(), u.inputTarget && (this.input.destroy(), this.input.target = u.inputTarget, this.input.init()), this;
      },
      stop: function(u) {
        this.session.stopped = u ? Kr : dc;
      },
      recognize: function(u) {
        var p = this.session;
        if (!p.stopped) {
          this.touchAction.preventDefaults(u);
          var g, b = this.recognizers, S = p.curRecognizer;
          (!S || S && S.state & Ye) && (S = p.curRecognizer = null);
          for (var O = 0; O < b.length; )
            g = b[O], p.stopped !== Kr && (!S || g == S || g.canRecognizeWith(S)) ? g.recognize(u) : g.reset(), !S && g.state & (Ie | At | st) && (S = p.curRecognizer = g), O++;
        }
      },
      get: function(u) {
        if (u instanceof Ke)
          return u;
        for (var p = this.recognizers, g = 0; g < p.length; g++)
          if (p[g].options.event == u)
            return p[g];
        return null;
      },
      add: function(u) {
        if (M(u, "add", this))
          return this;
        var p = this.get(u.options.event);
        return p && this.remove(p), this.recognizers.push(u), u.manager = this, this.touchAction.update(), u;
      },
      remove: function(u) {
        if (M(u, "remove", this))
          return this;
        if (u = this.get(u), u) {
          var p = this.recognizers, g = ze(p, u);
          g !== -1 && (p.splice(g, 1), this.touchAction.update());
        }
        return this;
      },
      on: function(u, p) {
        if (u !== n && p !== n) {
          var g = this.handlers;
          return L(U(u), function(b) {
            g[b] = g[b] || [], g[b].push(p);
          }), this;
        }
      },
      off: function(u, p) {
        if (u !== n) {
          var g = this.handlers;
          return L(U(u), function(b) {
            p ? g[b] && g[b].splice(ze(g[b], p), 1) : delete g[b];
          }), this;
        }
      },
      emit: function(u, p) {
        this.options.domEvents && mc(u, p);
        var g = this.handlers[u] && this.handlers[u].slice();
        if (!(!g || !g.length)) {
          p.type = u, p.preventDefault = function() {
            p.srcEvent.preventDefault();
          };
          for (var b = 0; b < g.length; )
            g[b](p), b++;
        }
      },
      destroy: function() {
        this.element && Zr(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function Zr(u, p) {
      var g = u.element;
      if (g.style) {
        var b;
        L(u.options.cssProps, function(S, O) {
          b = Ti(g.style, O), p ? (u.oldCssProps[b] = g.style[b], g.style[b] = S) : g.style[b] = u.oldCssProps[b] || "";
        }), p || (u.oldCssProps = {});
      }
    }
    function mc(u, p) {
      var g = i.createEvent("Event");
      g.initEvent(u, !0, !0), g.gesture = p, p.target.dispatchEvent(g);
    }
    k(nt, {
      INPUT_START: we,
      INPUT_MOVE: gt,
      INPUT_END: te,
      INPUT_CANCEL: Se,
      STATE_POSSIBLE: Oi,
      STATE_BEGAN: Ie,
      STATE_CHANGED: At,
      STATE_ENDED: st,
      STATE_RECOGNIZED: Ye,
      STATE_CANCELLED: Zt,
      STATE_FAILED: Ge,
      DIRECTION_NONE: Si,
      DIRECTION_LEFT: Gt,
      DIRECTION_RIGHT: qt,
      DIRECTION_UP: jt,
      DIRECTION_DOWN: Xt,
      DIRECTION_HORIZONTAL: We,
      DIRECTION_VERTICAL: yt,
      DIRECTION_ALL: Nr,
      Manager: $s,
      Input: De,
      TouchAction: Ds,
      TouchInput: Li,
      MouseInput: Mi,
      PointerEventInput: Ls,
      TouchMouseInput: As,
      SingleTouchInput: Ur,
      Recognizer: Ke,
      AttrRecognizer: _e,
      Tap: Ni,
      Pan: Ii,
      Swipe: ks,
      Pinch: Is,
      Rotate: Rs,
      Press: Ns,
      on: he,
      off: pe,
      each: L,
      merge: le,
      extend: X,
      assign: k,
      inherit: $,
      bindFn: ne,
      prefixed: Ti
    });
    var pc = typeof e < "u" ? e : typeof self < "u" ? self : {};
    pc.Hammer = nt, a.exports ? a.exports = nt : e[s] = nt;
  })(window, document, "Hammer");
})($o);
var xi = $o.exports;
const Wc = zc(xi), je = /* @__PURE__ */ fc({
  __proto__: null,
  default: Wc
}, [xi]), Ho = 1, _o = 2, xn = 4, Gc = {
  mousedown: Ho,
  mousemove: _o,
  mouseup: xn
};
function qc(a, e) {
  for (let i = 0; i < a.length; i++)
    if (e(a[i]))
      return !0;
  return !1;
}
function jc(a) {
  const e = a.prototype.handler;
  a.prototype.handler = function(s) {
    const n = this.store;
    s.button > 0 && s.type === "pointerdown" && (qc(n, (r) => r.pointerId === s.pointerId) || n.push(s)), e.call(this, s);
  };
}
function Xc(a) {
  a.prototype.handler = function(i) {
    let s = Gc[i.type];
    s & Ho && i.button >= 0 && (this.pressed = !0), s & _o && i.which === 0 && (s = xn), this.pressed && (s & xn && (this.pressed = !1), this.callback(this.manager, s, {
      pointers: [i],
      changedPointers: [i],
      pointerType: "mouse",
      srcEvent: i
    }));
  };
}
jc(xi.PointerEventInput);
Xc(xi.MouseInput);
const Yc = xi.Manager;
let ms = class {
  constructor(e, i, s) {
    this.element = e, this.callback = i, this.options = { enable: !0, ...s };
  }
};
const Kc = je ? [
  [je.Pan, { event: "tripan", pointers: 3, threshold: 0, enable: !1 }],
  [je.Rotate, { enable: !1 }],
  [je.Pinch, { enable: !1 }],
  [je.Swipe, { enable: !1 }],
  [je.Pan, { threshold: 0, enable: !1 }],
  [je.Press, { enable: !1 }],
  [je.Tap, { event: "doubletap", taps: 2, enable: !1 }],
  [je.Tap, { event: "anytap", enable: !1 }],
  [je.Tap, { enable: !1 }]
] : null, sa = {
  tripan: ["rotate", "pinch", "pan"],
  rotate: ["pinch"],
  pinch: ["pan"],
  pan: ["press", "doubletap", "anytap", "tap"],
  doubletap: ["anytap"],
  anytap: ["tap"]
}, Zc = {
  doubletap: ["tap"]
}, Qc = {
  pointerdown: "pointerdown",
  pointermove: "pointermove",
  pointerup: "pointerup",
  touchstart: "pointerdown",
  touchmove: "pointermove",
  touchend: "pointerup",
  mousedown: "pointerdown",
  mousemove: "pointermove",
  mouseup: "pointerup"
}, er = {
  KEY_EVENTS: ["keydown", "keyup"],
  MOUSE_EVENTS: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "mouseleave"],
  WHEEL_EVENTS: [
    "wheel",
    "mousewheel"
  ]
}, Jc = {
  tap: "tap",
  anytap: "anytap",
  doubletap: "doubletap",
  press: "press",
  pinch: "pinch",
  pinchin: "pinch",
  pinchout: "pinch",
  pinchstart: "pinch",
  pinchmove: "pinch",
  pinchend: "pinch",
  pinchcancel: "pinch",
  rotate: "rotate",
  rotatestart: "rotate",
  rotatemove: "rotate",
  rotateend: "rotate",
  rotatecancel: "rotate",
  tripan: "tripan",
  tripanstart: "tripan",
  tripanmove: "tripan",
  tripanup: "tripan",
  tripandown: "tripan",
  tripanleft: "tripan",
  tripanright: "tripan",
  tripanend: "tripan",
  tripancancel: "tripan",
  pan: "pan",
  panstart: "pan",
  panmove: "pan",
  panup: "pan",
  pandown: "pan",
  panleft: "pan",
  panright: "pan",
  panend: "pan",
  pancancel: "pan",
  swipe: "swipe",
  swipeleft: "swipe",
  swiperight: "swipe",
  swipeup: "swipe",
  swipedown: "swipe"
}, na = {
  click: "tap",
  anyclick: "anytap",
  dblclick: "doubletap",
  mousedown: "pointerdown",
  mousemove: "pointermove",
  mouseup: "pointerup",
  mouseover: "pointerover",
  mouseout: "pointerout",
  mouseleave: "pointerleave"
}, eu = typeof navigator < "u" && navigator.userAgent ? navigator.userAgent.toLowerCase() : "", Rt = typeof window < "u" ? window : global;
let Cn = !1;
try {
  const a = {
    get passive() {
      return Cn = !0, !0;
    }
  };
  Rt.addEventListener("test", null, a), Rt.removeEventListener("test", null);
} catch {
  Cn = !1;
}
const tu = eu.indexOf("firefox") !== -1, { WHEEL_EVENTS: iu } = er, ra = "wheel", aa = 4.000244140625, su = 40, nu = 0.25;
class ru extends ms {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      if (!this.options.enable)
        return;
      let r = n.deltaY;
      Rt.WheelEvent && (tu && n.deltaMode === Rt.WheelEvent.DOM_DELTA_PIXEL && (r /= Rt.devicePixelRatio), n.deltaMode === Rt.WheelEvent.DOM_DELTA_LINE && (r *= su)), r !== 0 && r % aa === 0 && (r = Math.floor(r / aa)), n.shiftKey && r && (r = r * nu), this.callback({
        type: ra,
        center: {
          x: n.clientX,
          y: n.clientY
        },
        delta: -r,
        srcEvent: n,
        pointerType: "mouse",
        target: n.target
      });
    }, this.events = (this.options.events || []).concat(iu), this.events.forEach((n) => e.addEventListener(n, this.handleEvent, Cn ? { passive: !1 } : !1));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === ra && (this.options.enable = i);
  }
}
const { MOUSE_EVENTS: au } = er, oa = "pointermove", la = "pointerover", ha = "pointerout", ca = "pointerenter", ua = "pointerleave";
class ou extends ms {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (r) => {
      this.handleOverEvent(r), this.handleOutEvent(r), this.handleEnterEvent(r), this.handleLeaveEvent(r), this.handleMoveEvent(r);
    }, this.pressed = !1;
    const { enable: n } = this.options;
    this.enableMoveEvent = n, this.enableLeaveEvent = n, this.enableEnterEvent = n, this.enableOutEvent = n, this.enableOverEvent = n, this.events = (this.options.events || []).concat(au), this.events.forEach((r) => e.addEventListener(r, this.handleEvent));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === oa && (this.enableMoveEvent = i), e === la && (this.enableOverEvent = i), e === ha && (this.enableOutEvent = i), e === ca && (this.enableEnterEvent = i), e === ua && (this.enableLeaveEvent = i);
  }
  handleOverEvent(e) {
    this.enableOverEvent && e.type === "mouseover" && this._emit(la, e);
  }
  handleOutEvent(e) {
    this.enableOutEvent && e.type === "mouseout" && this._emit(ha, e);
  }
  handleEnterEvent(e) {
    this.enableEnterEvent && e.type === "mouseenter" && this._emit(ca, e);
  }
  handleLeaveEvent(e) {
    this.enableLeaveEvent && e.type === "mouseleave" && this._emit(ua, e);
  }
  handleMoveEvent(e) {
    if (this.enableMoveEvent)
      switch (e.type) {
        case "mousedown":
          e.button >= 0 && (this.pressed = !0);
          break;
        case "mousemove":
          e.which === 0 && (this.pressed = !1), this.pressed || this._emit(oa, e);
          break;
        case "mouseup":
          this.pressed = !1;
          break;
      }
  }
  _emit(e, i) {
    this.callback({
      type: e,
      center: {
        x: i.clientX,
        y: i.clientY
      },
      srcEvent: i,
      pointerType: "mouse",
      target: i.target
    });
  }
}
const { KEY_EVENTS: lu } = er, da = "keydown", ma = "keyup";
class hu extends ms {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      const r = n.target || n.srcElement;
      r.tagName === "INPUT" && r.type === "text" || r.tagName === "TEXTAREA" || (this.enableDownEvent && n.type === "keydown" && this.callback({
        type: da,
        srcEvent: n,
        key: n.key,
        target: n.target
      }), this.enableUpEvent && n.type === "keyup" && this.callback({
        type: ma,
        srcEvent: n,
        key: n.key,
        target: n.target
      }));
    }, this.enableDownEvent = this.options.enable, this.enableUpEvent = this.options.enable, this.events = (this.options.events || []).concat(lu), e.tabIndex = this.options.tabIndex || 0, e.style.outline = "none", this.events.forEach((n) => e.addEventListener(n, this.handleEvent));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === da && (this.enableDownEvent = i), e === ma && (this.enableUpEvent = i);
  }
}
const pa = "contextmenu";
class cu extends ms {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      this.options.enable && this.callback({
        type: pa,
        center: {
          x: n.clientX,
          y: n.clientY
        },
        srcEvent: n,
        pointerType: "mouse",
        target: n.target
      });
    }, e.addEventListener("contextmenu", this.handleEvent);
  }
  destroy() {
    this.element.removeEventListener("contextmenu", this.handleEvent);
  }
  enableEventType(e, i) {
    e === pa && (this.options.enable = i);
  }
}
const Tn = 1, ss = 2, Sn = 4, uu = {
  pointerdown: Tn,
  pointermove: ss,
  pointerup: Sn,
  mousedown: Tn,
  mousemove: ss,
  mouseup: Sn
}, du = 1, mu = 2, pu = 3, fu = 0, gu = 1, yu = 2, vu = 1, bu = 2, wu = 4;
function xu(a) {
  const e = uu[a.srcEvent.type];
  if (!e)
    return null;
  const { buttons: i, button: s, which: n } = a.srcEvent;
  let r = !1, o = !1, l = !1;
  return e === Sn || e === ss && !Number.isFinite(i) ? (r = n === du, o = n === mu, l = n === pu) : e === ss ? (r = !!(i & vu), o = !!(i & wu), l = !!(i & bu)) : e === Tn && (r = s === fu, o = s === gu, l = s === yu), { leftButton: r, middleButton: o, rightButton: l };
}
function Cu(a, e) {
  const i = a.center;
  if (!i)
    return null;
  const s = e.getBoundingClientRect(), n = s.width / e.offsetWidth || 1, r = s.height / e.offsetHeight || 1, o = {
    x: (i.x - s.left - e.clientLeft) / n,
    y: (i.y - s.top - e.clientTop) / r
  };
  return { center: i, offsetCenter: o };
}
const _s = {
  srcElement: "root",
  priority: 0
};
class Tu {
  constructor(e) {
    this.handleEvent = (i) => {
      if (this.isEmpty())
        return;
      const s = this._normalizeEvent(i);
      let n = i.srcEvent.target;
      for (; n && n !== s.rootElement; ) {
        if (this._emit(s, n), s.handled)
          return;
        n = n.parentNode;
      }
      this._emit(s, "root");
    }, this.eventManager = e, this.handlers = [], this.handlersByElement = /* @__PURE__ */ new Map(), this._active = !1;
  }
  isEmpty() {
    return !this._active;
  }
  add(e, i, s, n = !1, r = !1) {
    const { handlers: o, handlersByElement: l } = this;
    let c = _s;
    typeof s == "string" || s && s.addEventListener ? c = { ..._s, srcElement: s } : s && (c = { ..._s, ...s });
    let m = l.get(c.srcElement);
    m || (m = [], l.set(c.srcElement, m));
    const f = {
      type: e,
      handler: i,
      srcElement: c.srcElement,
      priority: c.priority
    };
    n && (f.once = !0), r && (f.passive = !0), o.push(f), this._active = this._active || !f.passive;
    let C = m.length - 1;
    for (; C >= 0 && !(m[C].priority >= f.priority); )
      C--;
    m.splice(C + 1, 0, f);
  }
  remove(e, i) {
    const { handlers: s, handlersByElement: n } = this;
    for (let r = s.length - 1; r >= 0; r--) {
      const o = s[r];
      if (o.type === e && o.handler === i) {
        s.splice(r, 1);
        const l = n.get(o.srcElement);
        l.splice(l.indexOf(o), 1), l.length === 0 && n.delete(o.srcElement);
      }
    }
    this._active = s.some((r) => !r.passive);
  }
  _emit(e, i) {
    const s = this.handlersByElement.get(i);
    if (s) {
      let n = !1;
      const r = () => {
        e.handled = !0;
      }, o = () => {
        e.handled = !0, n = !0;
      }, l = [];
      for (let c = 0; c < s.length; c++) {
        const { type: m, handler: f, once: C } = s[c];
        if (f({
          ...e,
          type: m,
          stopPropagation: r,
          stopImmediatePropagation: o
        }), C && l.push(s[c]), n)
          break;
      }
      for (let c = 0; c < l.length; c++) {
        const { type: m, handler: f } = l[c];
        this.remove(m, f);
      }
    }
  }
  _normalizeEvent(e) {
    const i = this.eventManager.getElement();
    return {
      ...e,
      ...xu(e),
      ...Cu(e, i),
      preventDefault: () => {
        e.srcEvent.preventDefault();
      },
      stopImmediatePropagation: null,
      stopPropagation: null,
      handled: !1,
      rootElement: i
    };
  }
}
const Su = {
  events: null,
  recognizers: null,
  recognizerOptions: {},
  Manager: Yc,
  touchAction: "none",
  tabIndex: 0
};
class Pu {
  constructor(e = null, i) {
    this._onBasicInput = (n) => {
      const { srcEvent: r } = n, o = Qc[r.type];
      o && this.manager.emit(o, n);
    }, this._onOtherEvent = (n) => {
      this.manager.emit(n.type, n);
    }, this.options = { ...Su, ...i }, this.events = /* @__PURE__ */ new Map(), this.setElement(e);
    const { events: s } = this.options;
    s && this.on(s);
  }
  getElement() {
    return this.element;
  }
  setElement(e) {
    if (this.element && this.destroy(), this.element = e, !e)
      return;
    const { options: i } = this, s = i.Manager;
    this.manager = new s(e, {
      touchAction: i.touchAction,
      recognizers: i.recognizers || Kc
    }).on("hammer.input", this._onBasicInput), i.recognizers || Object.keys(sa).forEach((n) => {
      const r = this.manager.get(n);
      r && sa[n].forEach((o) => {
        r.recognizeWith(o);
      });
    });
    for (const n in i.recognizerOptions) {
      const r = this.manager.get(n);
      if (r) {
        const o = i.recognizerOptions[n];
        delete o.enable, r.set(o);
      }
    }
    this.wheelInput = new ru(e, this._onOtherEvent, {
      enable: !1
    }), this.moveInput = new ou(e, this._onOtherEvent, {
      enable: !1
    }), this.keyInput = new hu(e, this._onOtherEvent, {
      enable: !1,
      tabIndex: i.tabIndex
    }), this.contextmenuInput = new cu(e, this._onOtherEvent, {
      enable: !1
    });
    for (const [n, r] of this.events)
      r.isEmpty() || (this._toggleRecognizer(r.recognizerName, !0), this.manager.on(n, r.handleEvent));
  }
  destroy() {
    this.element && (this.wheelInput.destroy(), this.moveInput.destroy(), this.keyInput.destroy(), this.contextmenuInput.destroy(), this.manager.destroy(), this.wheelInput = null, this.moveInput = null, this.keyInput = null, this.contextmenuInput = null, this.manager = null, this.element = null);
  }
  on(e, i, s) {
    this._addEventHandler(e, i, s, !1);
  }
  once(e, i, s) {
    this._addEventHandler(e, i, s, !0);
  }
  watch(e, i, s) {
    this._addEventHandler(e, i, s, !1, !0);
  }
  off(e, i) {
    this._removeEventHandler(e, i);
  }
  _toggleRecognizer(e, i) {
    const { manager: s } = this;
    if (!s)
      return;
    const n = s.get(e);
    if (n && n.options.enable !== i) {
      n.set({ enable: i });
      const r = Zc[e];
      r && !this.options.recognizers && r.forEach((o) => {
        const l = s.get(o);
        i ? (l.requireFailure(e), n.dropRequireFailure(o)) : l.dropRequireFailure(e);
      });
    }
    this.wheelInput.enableEventType(e, i), this.moveInput.enableEventType(e, i), this.keyInput.enableEventType(e, i), this.contextmenuInput.enableEventType(e, i);
  }
  _addEventHandler(e, i, s, n, r) {
    if (typeof e != "string") {
      s = i;
      for (const f in e)
        this._addEventHandler(f, e[f], s, n, r);
      return;
    }
    const { manager: o, events: l } = this, c = na[e] || e;
    let m = l.get(c);
    m || (m = new Tu(this), l.set(c, m), m.recognizerName = Jc[c] || c, o && o.on(c, m.handleEvent)), m.add(e, i, s, n, r), m.isEmpty() || this._toggleRecognizer(m.recognizerName, !0);
  }
  _removeEventHandler(e, i) {
    if (typeof e != "string") {
      for (const o in e)
        this._removeEventHandler(o, e[o]);
      return;
    }
    const { events: s } = this, n = na[e] || e, r = s.get(n);
    if (r && (r.remove(e, i), r.isEmpty())) {
      const { recognizerName: o } = r;
      let l = !1;
      for (const c of s.values())
        if (c.recognizerName === o && !c.isEmpty()) {
          l = !0;
          break;
        }
      l || this._toggleRecognizer(o, !1);
    }
  }
}
class fa {
  #e = [
    "pointerdown",
    "pointerup",
    "pointerover",
    "pointerenter",
    "pointerout",
    "pointerleave",
    "pointermove",
    "pointercancel",
    "gotpointercapture",
    "lostpointercapture",
    "click",
    "dblclick",
    "anyclick",
    "wheel",
    "contextmenu",
    "pointerdrag",
    "pointerdragend",
    "pan",
    "panstart",
    "panmove",
    "panup",
    "pandown",
    "panleft",
    "panright",
    "panend",
    "pancancel"
  ];
  #t;
  #i = {
    left: !1
  };
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    switch (e) {
      case "pointerdown":
        r = function(o) {
          o.leftButton && (this.#t.pad.left = !0), this.#t.onPointerDown(o), i(this.#t.pointerEventData(o));
        };
        break;
      case "pointerup":
        r = function(o) {
          this.#t.onPointerUp(o), i(this.#t.pointerEventData(o));
        };
        break;
      case "pointermove":
        r = function(o) {
          this.#t.motion(o), i(this.#t.pointerEventData(o));
        };
        break;
      case "click":
      case "dbclick":
      case "pointerenter":
      case "pointerleave":
      case "pointerout":
      case "pointerover":
      case "contextmenu":
        r = function(o) {
          this.#t.location(o), i(this.#t.pointerEventData(o));
        };
        break;
      case "wheel":
        r = function(o) {
          this.#t.wheeldelta = o, i(this.#t.pointerEventData(o));
        };
        break;
      case "pointercancel":
      case "gotpointercapture":
      case "lostpointercapture":
        r = function(o) {
          i(o);
        };
        break;
      case "pointerdrag":
        r = function(o) {
          this.#t.motion(o), i(this.#t.pointerEventData(o));
        }, this.#t.agent.on("panstart", this.#t.startPointerDrag.bind(this.#t)), e = "panmove";
        break;
      case "pointerdragend":
        r = function(o) {
          this.#t.motion(o), this.#t.endPointerDrag(o), i(this.#t.pointerEventData(o));
        }, e = "panend";
        break;
    }
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
class ga {
  #e = [
    "rotate",
    "rotatestart",
    "rotatemove",
    "rotateend",
    "rotatecancel",
    "pinch",
    "pinchin",
    "pinchout",
    "pinchstart",
    "pinchmove",
    "pinchend",
    "pinchcancel",
    "swipe",
    "swipeleft",
    "swiperight",
    "swipeup",
    "swipedown",
    "tripan",
    "tripanstart",
    "tripanmove",
    "tripanup",
    "tripandown",
    "tripanleft",
    "tripanright",
    "tripanend",
    "tripancancel"
  ];
  #t;
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
class ya {
  #e = [
    "keydown",
    "keyup"
  ];
  #t;
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
const Eu = {
  element: void 0,
  contextMenu: !0,
  panX: !0,
  panY: !0
};
class Xe {
  #e;
  #t;
  #i;
  #s;
  #n = [];
  #r = null;
  #a = null;
  #l = null;
  #h;
  #o = !1;
  #c;
  pad = { left: !1 };
  constructor(e, i) {
    if (this.#e = { ...Eu, ...i }, this.#s = Vc.idle, this.#h = Uc, this.#t = e, !this.#t && this.#e.elementId && (this.#t = document.getElementById(this.#e.elementId)), !W(this.#t))
      throw "Must specify an element to receive user input.";
    this.#e.contextMenu || (window.oncontextmenu = (r) => (r.preventDefault(), !1));
    const n = {
      recognizerOptions: {
        pan: { threshold: this.#h ? 10 : 0 },
        pinch: { threshold: 0 }
      }
    };
    this.#i = new Pu(this.#t, n), this.pointerInit();
  }
  get agent() {
    return this.#i;
  }
  get pointer() {
    return this.#r instanceof fa ? this.#r : (this.#r = new fa(this), this.#r);
  }
  get touch() {
    return this.#l instanceof ga ? this.#l : (this.#l = new ga(this), this.#l);
  }
  get key() {
    return this.#a instanceof ya ? this.#a : (this.#a = new ya(this), this.#a);
  }
  get status() {
    return this.#s;
  }
  get element() {
    return this.#t;
  }
  get isTouch() {
    return this.#h;
  }
  get isPan() {
    return this.#o;
  }
  set wheeldelta(e) {
    this.#c = e.delta;
  }
  get wheeldelta() {
    return this.#c;
  }
  destroy() {
    for (let e of this.#n)
      this.off(e.event, e.handler, e.options);
    this.#i.destroy(), this.#r = void 0, this.#a = void 0, this.#l = void 0;
  }
  isValid(e, i) {
    return !!(T(e) || I(i));
  }
  validOptions(e) {
    return v(e) && j(e) ? e : void 0;
  }
  on(e, i, s, n = !1) {
    if (!this.isValid(e, i)) return !1;
    this.pointer.has(e) ? this.#r.on(e, i, s, n) : this.touch.has(e) ? this.#l.on(e, i, s, n) : this.key.has(e) ? this.#a.on(e, i, s, n) : this.#t.addEventListener(e, i, this.validOptions(s)), this.#n.push({ event: e, handler: i, options: s });
  }
  off(e, i, s) {
    this.#r?.has(e) ? this.#r.off(e, i, s) : this.#l?.has(e) ? this.#l.off(e, i, s) : this.#a?.has(e) ? this.#a.off(e, i, s) : this.#t.removeEventListener(e, i, this.validOptions(s));
    for (let n of this.#n)
      if (n.event === e && n.handler === i && n.options === s) {
        let r = this.#n.indexOf(n);
        this.#n.splice(r, 1);
      }
  }
  once(e, i, s) {
    this.on(e, i, s, !0);
  }
  setCursor(e) {
    this.#t.style.cursor = e;
  }
  pointerInit() {
    this.clientPosPrev = new Ct([null, null]), this.position = new Ct([0, 0]), this.movement = new Ct([0, 0]), this.dragstart = new Ct([null, null]), this.dragend = new Ct([null, null]), this.dragCheckThreshold = 3, this.dragStatus = !1, this.wheeldelta = 0, this.pointerButtons = [!1, !1, !1, !1, !1], this.pointerdrag = new Event("pointerdrag"), this.pointerdragend = new Event("pointerdragend");
  }
  pointerEventData(e) {
    return {
      isProcessed: !1,
      pointerType: e.pointerType,
      position: this.position.clone(),
      movement: this.movement.clone(),
      dragstart: this.dragstart.clone(),
      dragend: this.dragend.clone(),
      wheeldelta: this.wheeldelta,
      buttons: this.pointerButtons,
      domEvent: e,
      timeStamp: Date.now()
    };
  }
  motion(e) {
    let i = { left: 0, top: 0 };
    try {
      i = e.srcEvent.target?.getBoundingClientRect();
    } catch {
    }
    const s = e.srcEvent.clientX || this.position.x, n = e.srcEvent.clientY || this.position.y;
    this.movement.x = s - this.clientPosPrev.x, this.movement.y = n - this.clientPosPrev.y, this.position.x = s - i.left, this.position.y = n - i.top, this.clientPosPrev.x = s, this.clientPosPrev.y = n;
  }
  location(e) {
    let i = { left: 0, top: 0 };
    try {
      i = e.srcEvent.target?.getBoundingClientRect();
    } catch {
    }
    this.clientPosPrev.x = e.srcEvent.clientX, this.clientPosPrev.y = e.srcEvent.clientY, this.position.x = e.srcEvent.clientX - i.left, this.position.y = e.srcEvent.clientY - i.top, this.movement.x = 0, this.movement.y = 0;
  }
  onPointerDown(e) {
    this.location(e), this.pointerButtons[e.srcEvent.button] = !0;
  }
  onPointerUp(e) {
    this.location(e), this.pointerButtons[e.srcEvent.button] = !1;
  }
  startPointerDrag(e) {
    this.#o = !0, this.onPointerDown(e);
  }
  endPointerDrag(e) {
    this.#o = !1;
  }
}
function Mu(a, e) {
  return a = Math.ceil(a) + 1, e = Math.floor(e), Math.floor(Math.random() * (e - a) + a);
}
function Bi(a) {
  const e = {};
  return e.value = a, e.sign = !!a, e.integers = Fo(a), e.decimals = Lu(a), e.total = e.integers + e.decimals, e;
}
function Fo(a) {
  return (Math.log10((a ^ a >> 31) - (a >> 31)) | 0) + 1;
}
function Ue(a, e = 0) {
  var i = a * Math.pow(10, e), s = Math.round(i), n = (i > 0 ? i : -i) % 1 === 0.5 ? s % 2 === 0 ? s : s - 1 : s;
  return n / Math.pow(10, e);
}
function Lu(a) {
  if (typeof a != "number" && (a = parseFloat(a)), isNaN(a) || !isFinite(a)) return 0;
  for (var e = 1, i = 0; Math.round(a * e) / e !== a && (e *= 10, e !== 1 / 0); )
    i++;
  return i;
}
function Pn(a, e) {
  if (a == 0) return "0";
  const i = Bi(a);
  if (N(e))
    return `${new Number(i.value).toFixed(e)}`;
  let { sign: s, integers: n, decimals: r, value: o } = i;
  e = isNaN(e) ? To : e, r = B(r, 0, e), o = new Number(o).toFixed(r);
  let l = `${o}`, c = "", m = 0, f = 0;
  return s = s ? 0 : 1, s > 0 && (c += "-", m++), n == 0 ? (c += "0", m++) : (c += l.slice(m, n), m += n), r != 0 && (c += `${l.slice(m)}`, n <= 1 ? f = r : n > 3 ? f = 2 : n >= 2 && (f = 3)), c = Number.parseFloat(c).toFixed(f), c;
}
function Au(a) {
  return Math.log(a) / Math.log(10);
}
function B(a, e, i) {
  return Math.min(i, Math.max(e, a));
}
let Ou = Object.prototype.hasOwnProperty;
function Du(a, e, i = void 0) {
  const s = (r) => String.prototype.split.call(e, r).filter(Boolean).reduce((o, l) => o != null ? o[l] : o, a), n = s(/[,[\]]+?/) || s(/[,[\].]+?/);
  return n === void 0 || n === a ? i : n;
}
function Iu(a, e, i) {
  if (e.length === 0)
    return;
  let s = a, n = e[e.length - 1];
  if (e.length === 1)
    return v(s) ? s[n] = i : void 0;
  for (let r = 0; r < e.length - 1; r++) {
    let o = e[r];
    (!Ou.call(s, o) || !v(s[o])) && (s[o] = {}), s = s[o];
  }
  return s[n] = i;
}
function Nu(a, e) {
  let i = Object.getPrototypeOf(e);
  for (; a--; ) i = Object.getPrototypeOf(i);
  return i;
}
function Ve(a, e) {
  return !v(a) || !v(e) ? e : (Object.keys(e).forEach((i) => {
    const s = a[i], n = e[i];
    E(s) && E(n) ? a[i] = Ve(s.concat([]), n) : v(s) && v(n) ? a[i] = Ve(Object.assign({}, s), n) : a[i] = n;
  }), a);
}
function tr(a, e = !0) {
  if (a === null || typeof a != "object" || "isActiveClone" in a)
    return a;
  let i;
  a instanceof Date ? i = new a.constructor() : i = E(a) ? [] : {};
  for (let s in a)
    Object.prototype.hasOwnProperty.call(a, s) && (a.isActiveClone = null, i[s] = tr(a[s], !1), delete a.isActiveClone);
  return i;
}
function K(a) {
  try {
    return structuredClone(a);
  } catch {
    return tr(a, !1);
  }
}
function Bo(a, e) {
  if (a == null)
    return String(a);
  switch (typeof a) {
    case "string":
      return '"' + a + '"';
    case "function":
      return a.toString();
    case "object":
      let i = Array(e || 1).join("	"), s = Array.isArray(a);
      return "{["[+s] + Object.keys(a).map(function(n) {
        return `
	` + i + n + ": " + Bo(a[n], (e || 1) + 1);
      }).join(",") + `
` + i + "}]"[+s];
    default:
      return a.toString();
  }
}
function Uo(a, e) {
  if (v(a))
    for (let i in a)
      typeof a[i] == "object" && a[i] !== null ? Uo(a[i], e) : a.hasOwnProperty(i) && e(i, a[i]);
}
const Vo = (a, e, i) => {
  if (a.Id === e)
    return i(a);
  for (let s in a)
    a[s] !== null && typeof a[s] == "object" && (a[s] = Vo(a[s], e, i));
  return a;
};
function Ru(a, e) {
  a.split(".");
}
function ir(a, e, i) {
  const [s, ...n] = e.split(".");
  return {
    ...a,
    [s]: n.length ? ir(a[s], n.join("."), i) : i
  };
}
function En(a, e) {
  return e.split(".").reduce((s, n) => s && s[n] !== "undefined" ? s[n] : void 0, a);
}
function ku(a, e) {
  for (let i of Object.keys(e))
    if (wi(e[i], a?.[i]))
      return !1;
  return !0;
}
class $u {
  constructor() {
    this.nodes = [];
  }
  get size() {
    return this.nodes.length;
  }
  get head() {
    return this.size ? this.nodes[0] : null;
  }
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }
  insertAt(e, i) {
    const s = this.nodes[e - 1] || null, n = this.nodes[e] || null, r = { value: i, next: n, previous: s };
    s && (s.next = r), n && (n.previous = r), this.nodes.splice(e, 0, r);
  }
  insertFirst(e) {
    this.insertAt(0, e);
  }
  insertLast(e) {
    this.insertAt(this.size, e);
  }
  getAt(e) {
    return this.nodes[e];
  }
  removeAt(e) {
    const i = this.nodes[e - 1] || null, s = this.nodes[e + 1] || null;
    return i && (i.next = s), s && (s.previous = i), this.nodes.splice(e, 1);
  }
  clear() {
    this.nodes = [];
  }
  reverse() {
    this.nodes = this.nodes.reduce((e, { value: i }) => {
      const s = e[0] || null, n = { value: i, next: s, previous: null };
      return s && (s.previous = n), [n, ...e];
    }, []);
  }
  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}
function ps(a, e) {
  if (!E(a) || !E(e) || a.length !== e.length) return !1;
  let i = a.length;
  for (; i--; ) {
    if (E(a[i]) || E(e[i])) {
      if (!ps(a[i], e[i])) return !1;
      continue;
    }
    if (v(a[i]) || v(a[i])) {
      if (!v(a[i], e[i])) return !1;
      continue;
    }
    if (a[i] !== e[i]) return !1;
  }
  return !0;
}
function Hu(a, e) {
  let i = 1 / 0, s = -1, n = null, r = 0;
  for (; r++ < e.length; ) {
    let o = e[r], l = Math.abs(o - a);
    l < i && (i = l, s = r, n = o);
  }
  return [s, n];
}
function zo(a, e, i) {
  let s = a[e];
  a.splice(e, 1), a.splice(i, 0, s);
}
function Wo(a, e, i) {
  [a[e], a[i]] = [a[i], a[e]];
}
function fs(a, e) {
  return E(e) ? E(a) ? a.every((i) => e.includes(i)) : e.includes(a) : !1;
}
const _u = (a) => [...new Set(a)], Fu = (a, e) => Object.values(a.reduce((i, s) => (i[e(s)] = s, i), {})), Bu = (a, e) => a.filter((i) => e.includes(i)), di = (a, e) => a.filter((i) => !e.includes(i)), Uu = (a, e) => di(a, e).concat(di(e, a)), Vu = (a, e) => di(a, e).concat(e);
function zu(a) {
  return !(!v(a) || Object.keys.length);
}
function Go(a) {
  return v(a) ? !!Object.keys(a).length : !1;
}
function ri(a, e) {
  if (!v(a) || !v(e)) return !1;
  const i = Object.keys(a).sort(), s = Object.keys(e).sort();
  return i.length !== s.length ? !1 : i.every((r, o) => {
    const l = a[r], c = e[s[o]];
    return E(l) || E(c) ? ps(l, c) : v(l) || v(c) ? ri(l, c) : l === c;
  });
}
function se(a = "ID") {
  P(a) ? a = a.toString() : T(a) || (a = "ID"), a = dt(a);
  const e = Date.now().toString(36), i = Math.random().toString(36).substring(2, 5);
  return `${a}_${e}_${i}`;
}
function dt(a) {
  return String(a).replace(/ |,|;|:|\.|#/g, "_");
}
function Wu(a, e, i) {
  e = e || "", i = i || 512;
  let s = atob(a), n = [];
  for (let o = 0; o < s.length; o += i) {
    let l = s.slice(o, o + i), c = new Array(l.length);
    for (let f = 0; f < l.length; f++)
      c[f] = l.charCodeAt(f);
    let m = new Uint8Array(c);
    n.push(m);
  }
  return new Blob(n, { type: e });
}
function Gu(a, e) {
  return e instanceof Map ? {
    dataType: "Map",
    value: [...e.entries()]
  } : e;
}
function qu(a, e) {
  return typeof e == "object" && e !== null && e.dataType === "Map" ? new Map(e.value) : e;
}
const qo = (a) => a.entries().next().value, jo = (a) => a.entries().next().value[0], Xo = (a) => a.entries().next().value[1], Yo = (a) => [...a].pop(), Ko = (a) => [...a.keys()].pop(), Zo = (a) => [...a.values()].pop();
class me extends Map {
  constructor(e) {
    super(e);
  }
  indexOfKey(e) {
    return [...this.keys()].indexOf(e);
  }
  indexOfValue(e) {
    return [...this.values()].indexOf(e);
  }
  entryAtIndex(e) {
    return [...this.entries()][e];
  }
  keyAtIndex(e) {
    return [...this.keys()][e];
  }
  valueAtIndex(e) {
    return [...this.values()][e];
  }
  insert(e, i, s) {
    return this.insertIndex(s, e, i);
  }
  remove(e) {
    return this.removeIndex(e);
  }
  firstEntry() {
    return qo(this);
  }
  firstKey() {
    return jo(this);
  }
  firstValue() {
    return Xo(this);
  }
  lastEntry() {
    return Yo(this);
  }
  lastKey() {
    return Ko(this);
  }
  lastValue() {
    return Zo(this);
  }
  prevCurrNext(e) {
    let i = curr = next = null;
    for (let s of this)
      if (i = curr, curr = s, s.key == e) break;
    return { prev: i, curr, next };
  }
  union(...e) {
    if (typeof super.prototype.union == "function")
      super.union(...e);
    else
      for (const i of e)
        for (const s of i)
          this.set(...s);
  }
  setMultiple(e) {
    return E(e) ? (e.forEach(([i, s]) => this.set(i, s)), !0) : !1;
  }
  populate(e) {
    return E(e) ? (this.clear(), e.forEach(([i, s]) => this.set(i, s)), !0) : !1;
  }
  insertIndex(e, i, s) {
    if (!P(e)) return !1;
    const n = [...this];
    return n.splice(e, 0, [i, s]), this.populate(n), !0;
  }
  removeIndex(e) {
    if (!P(e)) return !1;
    const i = [...this];
    return i.splice(e, 1), this.populate(i), !0;
  }
  swapIndices(e, i) {
    if (!P(e) || !P(i)) return !1;
    const s = [...this];
    return Wo(s, e, i), this.populate(s), !0;
  }
  swapKeys(e, i) {
    const s = [...this], n = s.findIndex(([o]) => o === e), r = s.findIndex(([o]) => o === i);
    return [s[n], s[r]] = [s[r], s[n]], this.clear(), s.forEach(([o, l]) => this.set(o, l)), !0;
  }
}
function Oe(a, e = 100, i, s = !1) {
  let n;
  return function() {
    let r = i || this, o = arguments, l = function() {
      n = null, s || a.apply(r, o);
    }, c = s && !n;
    clearTimeout(n), n = setTimeout(l, e), c && a.apply(r, o);
  };
}
function Qo(a, e = 250, i) {
  let s, n, r = function() {
    let l = i || this, c = /* @__PURE__ */ new Date(), m = arguments;
    s && c < s + e ? (clearTimeout(n), n = setTimeout(function() {
      s = c, a.apply(l, m);
    }, e)) : (s = c, a.apply(l, m));
  };
  function o() {
    timeout && (clearTimeout(n), timeout = void 0);
  }
  return r.reset = function() {
    o(), s = 0;
  }, r;
}
const ju = (a, ...e) => {
  class i extends a {
    constructor(...r) {
      super(...r), e.forEach((o) => {
        s(this, new o());
      });
    }
  }
  let s = (n, r) => {
    Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r)).forEach((o) => {
      o.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(r, o));
    });
  };
  return e.forEach((n) => {
    s(i.prototype, n.prototype), s(i, n);
  }), i;
};
function Xu(a) {
  const e = {};
  return Promise.race([a, e]).then((i) => i === e ? "pending" : "fulfilled", () => "rejected");
}
class Yu {
  constructor() {
    this.promise = new Promise((e, i) => {
      this.resolve = e, this.reject = i;
    });
  }
}
function Jo(a) {
  return String.fromCharCode.apply(null, new Uint16Array(a));
}
function el(a) {
  let e = new ArrayBuffer(a.length * 2), i = new Uint16Array(e);
  for (let s = 0, n = a.length; s < n; s++)
    i[s] = a.charCodeAt(s);
  return e;
}
function Ku(a) {
  const e = document.createElement("canvas"), i = e.getContext("2d");
  let s;
  a.isView(a) ? s = a : typeof a == "string" && (s = el(a));
  const n = new Uint8ClampedArray.from(s), r = n.length;
  e.height = 1, e.width = r, i.putImageData(n);
  const o = i.toDataURL(), l = getBase64StringFromDataURL(o);
  return { dataURL: o, base64: l };
}
function Zu(a, e, i = "string") {
  const s = new Image(), n = document.createElement("canvas").getContext("2d");
  return s.src = a, s.decode().then(() => {
    n.width = s.width, n.height = s.height, n.drawImage(s, 0, 0);
    const r = n.getImageData(0, 0, s.width, s.height).data, o = i === "string" ? Jo(r) : r;
    e(o);
  });
}
class ie {
  static #e = new me();
  static get entries() {
    return ie.#e;
  }
  static isValid(e, i, s, n) {
    return !v(e) || !W(i) || !T(s) || !I(n);
  }
  static add(e, i, s, n) {
    if (!this.isValid(e, i, s, n)) return !1;
    i.addEventListener(s, n), ie.#e.has(e) || ie.#e.set(e, new me());
    const r = ie.#e.get(e);
    r.has(i) || r.set(i, {});
    const o = r.get(i);
    return E(o[s]) || (o[s] = []), o[s].push(n), !0;
  }
  static remove(e, i, s, n) {
    if (!ie.isValid(e, i, s, n) || !ie.#e.has(e)) return !1;
    const r = ie.#e.get(e);
    if (!r.has(i)) return !1;
    const o = r.get(i);
    if (!(s in o)) return !1;
    const l = o[s].indexOf(n);
    return l < 0 ? !1 : (o[s].splice(l, 1), o[s].length == 0 && delete o[s], Object.keys(o).length == 0 && r.delete(i), r.size == 0 && ie.#e.delete(e), !0);
  }
  static expungeEvent(e, i, s) {
    if (!v(e) || !W(i) || !T(s))
      return !1;
    const n = ie.#e.get(e);
    if (!n.has(i)) return !1;
    const r = n.get(i);
    if (s in r) {
      for (let o of r[s])
        i.removeEventListener(s, o);
      delete r[s];
    }
    return !0;
  }
  static expungeElement(e, i) {
    if (!v(e) || !W(i))
      return !1;
    const s = ie.#e.get(e);
    if (s.has(i)) {
      let n = s.get(i);
      for (let r in n)
        ie.expungeEvent(e, i, r);
      s.delete(i);
    }
    return !0;
  }
  static expungeContext(e) {
    if (!v(e))
      return !1;
    if (ie.#e.has(e)) {
      const i = ie.#e.get(e);
      for (let s of i)
        ie.expungeElement(e, s);
      ie.#e.delete(e);
    }
    return !0;
  }
  static expungeAll() {
  }
  static destroy() {
    for (let e of ie.#e)
      ie.expungeContext(e);
    return ie.#e = void 0, !0;
  }
}
async function Qu(a, e) {
  const i = (l) => new Uint8Array([...decodeURIComponent(encodeURIComponent(l))].map((c) => c.charCodeAt(0))), s = i(a), n = i(e), r = await crypto.subtle.importKey("raw", s, { name: "HMAC", hash: "SHA-256" }, !0, ["sign"]), o = await crypto.subtle.sign("HMAC", r, n);
  return btoa(String.fromCharCode(...new Uint8Array(o)));
}
async function Ju(a) {
  const e = new TextEncoder().encode(a), i = await crypto.subtle.digest("SHA-256", e);
  return Array.from(new Uint8Array(i)).map((r) => r.toString(16).padStart(2, "0")).join("");
}
function sr(a, e = 0) {
  let i = 3735928559 ^ e, s = 1103547991 ^ e;
  for (let n = 0, r; n < a.length; n++)
    r = a.charCodeAt(n), i = Math.imul(i ^ r, 2654435761), s = Math.imul(s ^ r, 1597334677);
  return i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(s ^ s >>> 13, 3266489909), s = Math.imul(s ^ s >>> 16, 2246822507), s ^= Math.imul(i ^ i >>> 13, 3266489909), (s >>> 0).toString(16).padStart(8, 0) + (i >>> 0).toString(16).padStart(8, 0);
}
const y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Deferred: Yu,
  DoubleLinkedList: $u,
  EventHandlers: ie,
  H: Ju,
  HMAC: Qu,
  _get: Du,
  _set: Iu,
  ab2str: Jo,
  arrayMove: zo,
  b64toBlob: Wu,
  copyDeep: tr,
  cyrb53: sr,
  debounce: Oe,
  decodePNGDataStore: Zu,
  diff: di,
  doStructuredClone: K,
  encodePNGDataStore: Ku,
  extender: ju,
  findInObjectById: Vo,
  firstEntryInMap: qo,
  firstKeyInMap: jo,
  firstValueInMap: Xo,
  getProperty: En,
  getPrototypeAt: Nu,
  idSanitize: dt,
  intersection: Bu,
  isArrayEqual: ps,
  isObjectAndEmpty: zu,
  isObjectEqual: ri,
  isObjectNotEmpty: Go,
  lastEntryInMap: Yo,
  lastKeyInMap: Ko,
  lastValueInMap: Zo,
  mergeDeep: Ve,
  nearestArrayValue: Hu,
  objRecurse: Uo,
  objRecurseUpdate: Ru,
  objToString: Bo,
  objectValidate: ku,
  promiseState: Xu,
  replacer: Gu,
  reviver: qu,
  setProperty: ir,
  str2ab: el,
  swapArrayElements: Wo,
  symDiff: Uu,
  throttle: Qo,
  uid: se,
  union: Vu,
  unique: _u,
  uniqueBy: Fu,
  valuesInArray: fs,
  xMap: me
}, Symbol.toStringTag, { value: "Module" }));
class ns {
  #e;
  #t;
  #i;
  #s;
  #n = !0;
  #r = !1;
  #a = os;
  #l = as;
  #h = 0;
  #o = Vi;
  valueMin = 0;
  valueMax = 1;
  valueDiff = 1;
  volumeMin = 0;
  volumeMax = 0;
  volumeDiff = 0;
  valueMinIdx = 0;
  valueMaxIdx = 0;
  volumeMinIdx = 0;
  volumeMaxIdx = 0;
  #c = {};
  #u = {};
  #d = In;
  #m = Vi;
  #p = Nn;
  #g = Rn;
  #y = kn;
  #b = Dn;
  anchor;
  constructor(e, i, s) {
    if (!v(s) || !(s?.core instanceof H))
      throw new Error("Range requires a config");
    this.#e = se(`${ut}_Range`), this.#n = !0, this.setConfig(s);
    let n;
    if (N(s?.interval) ? n = s.interval : T(s?.interval) ? n = it(s?.interval) : n = os, this.data.length == 0) {
      let r = Date.now();
      e = this.rangeLimit * -2, i = this.rangeLimit * 2, this.#a = n, this.#l = Te(this.#a), this.anchor = r - r % n;
    } else this.data.length < 2 ? (this.#a = n, this.#l = Te(this.interval)) : (this.#a = mi(this.data), this.#l = Te(this.interval));
    (!N(e) || this.isPastLimit(e)) && (e = this.data.length - this.#d), (!N(i) || this.isFutureLimit(i)) && (i = this.data.length), i - e > this.#y && (i = i - (i - e - this.#y)), i == 0 && this.data.length >= this.rangeLimit ? i = this.rangeLimit : i == 0 && (i = this.data.length), this.set(e, i), `${this.maxMinPriceVol.toString()}`;
  }
  get id() {
    return this.#e;
  }
  get allData() {
    return this.#i.allData;
  }
  get data() {
    return this.allData?.data || [];
  }
  get dataLength() {
    return this.allData?.data.length ? this.allData.data.length - 1 : 0;
  }
  get Length() {
    return this.indexEnd - this.indexStart;
  }
  get timeDuration() {
    return this.timeFinish - this.timeStart;
  }
  get timeMin() {
    return this.value(this.indexStart)[0];
  }
  get timeMax() {
    return this.value(this.indexEnd)[0];
  }
  get rangeDuration() {
    return this.timeMax - this.timeMin;
  }
  get timeStart() {
    return this.value(0)[0];
  }
  get timeFinish() {
    return this.value(this.dataLength)[0];
  }
  set interval(e) {
    this.#a = e;
  }
  get interval() {
    return this.#a;
  }
  set intervalStr(e) {
    this.#l = e;
  }
  get intervalStr() {
    return this.#l;
  }
  get timeFrame() {
    return this.#l;
  }
  get timeFrameMS() {
    return this.#a;
  }
  get indexStart() {
    return this.#h;
  }
  get indexEnd() {
    return this.#o;
  }
  get indexed() {
    return this.#r;
  }
  get indexEndTS() {
    return this.value(this.indexEnd)[0];
  }
  get indexStartTS() {
    return this.value(this.indexStart)[0];
  }
  get indexPastLimit() {
    return this.limitPast * -1;
  }
  get indexFutureLimit() {
    return this.dataLength + this.limitFuture - 1;
  }
  set initialCnt(e) {
    N(e) && (this.#d = e);
  }
  get initialCnt() {
    return this.#d;
  }
  get limitFuture() {
    return this.#m;
  }
  get limitPast() {
    return this.#p;
  }
  get minCandles() {
    return this.#g;
  }
  get maxCandles() {
    return this.#y;
  }
  get yAxisBounds() {
    return this.#b;
  }
  get rangeLimit() {
    return this.#m;
  }
  get secondaryMaxMin() {
    return this.#c;
  }
  get diff() {
    return this?.valueDiff;
  }
  end() {
  }
  isFutureLimit(e = this.indexEnd) {
    if (N(e))
      return e > this.indexFutureLimit;
  }
  isPastLimit(e = this.indexStart) {
    if (N(e))
      return e < this.indexPastLimit;
  }
  set(e = 0, i = this.dataLength, s = this.maxCandles) {
    if (!N(e) || !N(i) || !N(s)) return !1;
    e = e | 0, i = i | 0, s = s | 0, s = B(s, this.minCandles, this.maxCandles), e > i && ([e, i] = [i, e]), i = B(i, e + this.minCandles, e + s);
    let n = i - e;
    e = B(e, this.limitPast * -1, this.dataLength + this.limitFuture - this.minCandles - 1), i = B(i, e + this.minCandles, this.dataLength + this.limitFuture - 1), e = i - e < n ? e - (n - (i - e)) : e;
    const r = e, o = i, l = this.indexStart, c = this.indexEnd;
    let m = this.Length;
    return this.#h = e, this.#o = i, m -= this.Length, this.setMaxCandles(s), this.setAllMaxMin(), (this.#n || this.#u.valueMax != this.valueMax || this.#u.valueMin != this.valueMin) && this.#t.emit("range_valueMaxMin", { max: this.valueMax, min: this.valueMin }), this.#t.emit("range_set", [r, o, l, c]), !0;
  }
  setConfig(e) {
    let i = e?.state;
    this.#i = i;
    let s = e?.core;
    if (!(s instanceof H)) throw new Error("Range requires a valid TradeXchart instance");
    this.#t = s;
    let n = N(e?.initialCnt) ? e.initialCnt : In;
    this.#d = this.#t.config?.range?.initialCnt || n, this.#m = N(e?.limitFuture) ? e.limitFuture : Vi, this.#p = N(e?.limitPast) ? e.limitPast : Nn, this.#b = P(e?.yAxisBounds) ? e.yAxisBounds : Dn, this.#g = N(e?.minCandles) ? e.minCandles : Rn, this.setMaxCandles(e?.maxCandles);
  }
  setMaxCandles(e) {
    let i = this.#t?.MainPane?.graph?.width || Math.floor(this.#t?.parentElement?.clientWidth) || kn;
    this.#y = N(e) ? e : i;
  }
  setMaxMin(e) {
    for (let i in e)
      this.#u[i] = this[i], this[i] = e[i];
    this.scale = this.dataLength != 0 ? this.Length / this.dataLength : 1;
  }
  value(e, i = "chart") {
    let s;
    if (i == "chart") s = this.data;
    else if (s = this.getDataById(i), !s) return null;
    N(e) || (e = s.length - 1);
    let n = s[e];
    if (n !== void 0) return n;
    {
      const r = s.length - 1;
      return n = [null, null, null, null, null, null], s.length < 1 ? (n[0] = Date.now() + this.interval * e, n) : e < 0 ? (n[0] = s[0][0] + this.interval * e, n) : e > r ? (n[0] = s[r][0] + this.interval * (e - r), n) : null;
    }
  }
  valueByTS(e, i = "") {
    if (!N(e) || !T(i)) return !1;
    const s = this.getTimeIndex(e);
    let n;
    switch (i) {
      case "chart":
        break;
      case "primary":
        break;
      case "secondary":
        break;
      case "dataset":
        break;
      case "all":
        break;
      default:
        i.length === 0 ? n = this.value(s) : i.split("_");
        break;
    }
    return n;
  }
  getDataById(e = "chart") {
    if (!T(e)) return !1;
    if (e == "chart") return this.data;
    const i = [
      this.allData.primaryPane,
      this.allData.secondaryPane,
      this.allData.datasets
    ];
    for (let s of i)
      for (let n of s)
        if (e == n?.id) return n.data;
    return !1;
  }
  getTimeIndex(e) {
    if (!N(e)) return !1;
    e = e - e % this.interval;
    let i = this.data.length > 0 ? this.data[0][0] : this.anchor;
    return e === i ? 0 : e < i ? (i - e) / this.interval * -1 : (e - i) / this.interval;
  }
  inRange(e) {
    return e >= this.timeMin && e <= this.timeMax;
  }
  inPriceHistory(e) {
    return e >= this.timeStart && e <= this.timeFinish;
  }
  inRenderRange(e) {
    let i = this.getTimeIndex(e), s = this.#t.rangeScrollOffset;
    return i >= this.indexStart - s && i <= this.indexEnd + s;
  }
  rangeIndex(e) {
    return this.getTimeIndex(e) - this.indexStart;
  }
  setAllMaxMin() {
    let e = this.maxMinPriceVol({ data: this.data, start: this.indexStart, end: this.indexEnd, that: this });
    this.setMaxMin(e), this.maxMinDatasets();
  }
  maxMinPriceVol(e) {
    let { data: i, start: s, end: n, that: r } = { ...e }, o = Ue(this.#t.bufferPx / this.#t.candleW), l = i?.length - 1;
    if (o = N(o) ? o : 0, s = N(s) ? s - o : 0, s = s > 0 ? s : 0, n = N(n) ? n : l, l < 0)
      return {
        valueLo: 0,
        valueHi: 1,
        valueMin: 0,
        valueMax: 1,
        volumeMin: 0,
        volumeMax: 0,
        valueMinIdx: 0,
        valueMaxIdx: 0,
        volumeMinIdx: 0,
        volumeMaxIdx: 0
      };
    let c = he(s, 0, l), m = he(n, 0, l), f = i[c][3] || 1 / 0, C = i[c][2] || -1 / 0, M = i[c][5] || 1 / 0, L = i[c][5] || -1 / 0, D = c, k = c, X = c, le = c, $;
    for (; c++ < m; )
      $ = i[c][3], P($) && $ < f && (f = $, D = c), $ = i[c][2], P($) && $ > C && (C = $, k = c), $ = i[c][5], P($) && $ < M && (M = $, X = c), P($) && $ > L && (L = $, le = c);
    let ne = C - f, Z = f, G = C;
    return f -= ne * r.yAxisBounds, f = f > 0 ? f : 0, C += ne * r.yAxisBounds, ne = C - f, {
      valueLo: Z,
      valueHi: G,
      valueMin: f,
      valueMax: C,
      valueDiff: C - f,
      volumeMin: M,
      volumeMax: L,
      volumeDiff: L - M,
      valueMinIdx: D,
      valueMaxIdx: k,
      volumeMinIdx: X,
      volumeMaxIdx: le
    };
    function he(pe, ye, _) {
      return Math.min(_, Math.max(ye, pe));
    }
  }
  maxMinDatasets() {
    if (!this.allData?.secondaryPane?.length) return;
    let e = Object.keys(this.#c) || [];
    for (let i of this.allData.secondaryPane) {
      let s = e.indexOf(i.id), n = {
        data: i.data,
        start: this.indexStart,
        end: this.indexEnd,
        that: this
      };
      this.#c[i.id] = this.maxMinData(n), s !== -1 && e.splice(s, 1);
    }
    for (let i of e)
      delete this.#c[i];
  }
  maxMinData(e) {
    let { data: i, start: s, end: n, that: r } = { ...e }, o = Ue(this.#t.bufferPx / this.#t.candleW), l = i.length - 1, c = this.dataLength - i.length, m = i[0]?.length - 1 || 0;
    const f = {}, C = {
      min: 0,
      max: 1,
      minIdx: 0,
      maxIdx: 0,
      diff: 1
    };
    if (l < 1) return { data: C };
    for (let G = m; G > 0; G--)
      f[`data${G}`] = C;
    if (o = N(o) ? o : 0, s = N(s) ? s - o : 0, s = s > 0 ? s - c : 0, n = N(n) ? n - c : l, l < 0 || i[0].length == 0)
      return f;
    let M = B(s, 0, l), L = B(n, 0, l), D, k, X, le, $, ne, Z;
    for (let G in f) {
      for (le = i[M][m] || -1 / 0, X = i[M][m] || 1 / 0, D = M; D++ < L; )
        k = i[D][m], P && (k <= X && (f[G].min = k, f[G].minIdx = D, X = k), k >= le && (f[G].max = k, f[G].maxIdx = D, le = k));
      (ne === void 0 || X < ne) && (ne = X), (Z === void 0 || le > Z) && (Z = le), $ = f[G].max - f[G].min, f[G].diff = isNaN($) ? 0 : $, --m;
    }
    return f.data = {
      min: ne,
      max: Z,
      diff: Z - ne
    }, f;
  }
  snapshot(e, i) {
    let s = this.export();
    return s.snapshot = !0, s.ts = Date.now(), s.data = this.data, s.dataLength = this.dataLength, s.Length = this.Length, s;
  }
  export(e) {
    let i = {};
    e = E(e) ? e : [];
    for (let s of ed)
      e.includes(s) || (i[s] = this[s]);
    return i;
  }
}
function mi(a) {
  if (!E(a) || a.length < 2) return 1 / 0;
  let e = Math.min(a.length - 1, 99), i = 1 / 0;
  return a.slice(0, e).forEach((s, n) => {
    let r = a[n + 1][0] - s[0];
    r === r && r < i && (i = r);
  }), i;
}
const ed = [
  "indexEnd",
  "indexStart",
  "scale",
  "secondaryMaxMin",
  "valueDiff",
  "valueHi",
  "valueLo",
  "valueMax",
  "valueMaxIdx",
  "valueMin",
  "valueMinIdx",
  "volumeDiff",
  "volumeMax",
  "volumeMaxIdx",
  "volumeMin",
  "volumeMinIdx",
  "diff",
  "indexFutureLimit",
  "id",
  "indexed",
  "initialCnt",
  "interval",
  "intervalStr",
  "limitFuture",
  "limitPast",
  "maxCandles",
  "minCandles",
  "indexPastLimit",
  "rangeDuration",
  "rangeLimit",
  "timeDuration",
  "timeFinish",
  "timeFrame",
  "timeFrameMS",
  "timeMax",
  "timeMin",
  "timeStart",
  "yAxisBounds"
], tl = ["y", "M", "d", "h", "m", "s", "ms"], il = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"], td = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], id = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], sl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], sd = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ai = 1231006505e3, ot = 1, ae = 1e3, Q = ae * 60, ge = Q * 60, q = ge * 24, Ft = q * 7, Ae = q * 30;
function nl(a = 3, e = !1) {
  let i = sl[a % 12] * q;
  return e && a > 0 && (i += q), i;
}
const $e = q * 365, pi = {
  y: $e,
  M: Ae,
  w: Ft,
  d: q,
  h: ge,
  m: Q,
  s: ae,
  u: ot
}, rl = {
  years: $e,
  months: Ae,
  weeks: Ft,
  days: q,
  hours: ge,
  minutes: Q,
  seconds: ae,
  milliseconds: ot
}, nd = { ...pi, ...rl }, tt = {
  YEARS10: [$e * 10, "years", 10],
  YEARS5: [$e * 5, "years", 5],
  YEARS3: [$e * 3, "years", 3],
  YEARS2: [$e * 2, "years", 2],
  YEARS: [$e, "years", 1],
  MONTH6: [Ae * 6, "months", 6],
  MONTH4: [Ae * 4, "months", 4],
  MONTH3: [Ae * 3, "months", 3],
  MONTH2: [Ae * 2, "months", 2],
  MONTH: [Ae, "months", 1],
  DAY15: [q * 15, "years", 15],
  DAY10: [q * 10, "days", 10],
  DAY7: [q * 7, "days", 7],
  DAY5: [q * 5, "days", 5],
  DAY3: [q * 3, "days", 3],
  DAY2: [q * 2, "days", 2],
  DAY: [q, "days", 1],
  HOUR12: [ge * 12, "hours", 12],
  HOUR6: [ge * 6, "hours", 6],
  HOUR4: [ge * 4, "hours", 4],
  HOUR3: [ge * 3, "hours", 3],
  HOUR2: [ge * 2, "hours", 2],
  HOUR: [ge, "hours", 1],
  MINUTE30: [Q * 30, "minutes", 30],
  MINUTE15: [Q * 15, "minutes", 15],
  MINUTE10: [Q * 10, "minutes", 10],
  MINUTE5: [Q * 5, "minutes", 5],
  MINUTE3: [Q * 3, "minutes", 3],
  MINUTE2: [Q * 2, "minutes", 2],
  MINUTE: [Q, "minutes", 1],
  SECOND30: [ae * 30, "seconds", 30],
  SECOND15: [ae * 15, "seconds", 15],
  SECOND10: [ae * 10, "seconds", 10],
  SECOND5: [ae * 5, "seconds", 5],
  SECOND2: [ae * 2, "seconds", 2],
  SECOND: [ae, "seconds", 1],
  MILLISECOND500: [ot * 500, "milliseconds", 500],
  MILLISECOND250: [ot * 250, "milliseconds", 250],
  MILLISECOND100: [ot * 100, "milliseconds", 100],
  MILLISECOND50: [ot * 50, "milliseconds", 50],
  MILLISECOND: [ot, "milliseconds", 1]
}, al = Q, rd = al, ol = tt.YEARS10[0], ad = ol, od = () => {
  const a = Object.values(tt), e = [];
  for (let i = a.length; --i; i > 0) e[i] = a[i][0];
  return e;
}, si = od(), ld = () => {
  const a = Object.values(tt), e = [];
  for (let i = a.length; --i; i > 0) e[i] = a[i][1];
  return e;
}, Mn = ld(), hd = Object.keys(tt), cd = () => {
  const a = {};
  for (const [e, i] of Object.entries(tt))
    a[e] = i[0];
  return a;
}, ud = cd();
function Ln() {
  const a = (/* @__PURE__ */ new Date()).getTimezoneOffset();
  return Object.prototype.hasOwnProperty.call(timezones, a) ? timezones[a.toString()] : "Etc/UTC";
}
function dd() {
  const a = {};
  for (let e in pi) {
    let i = 0;
    a[e] = [];
    do
      a[e].push(Math.round(pi[e] * i)), i += 0.125;
    while (i < 1);
  }
  return a;
}
function mt(a) {
  const e = new Date(a);
  return e instanceof Date && !isNaN(e.valueOf()) && isFinite(e.valueOf());
}
function rs(a, e = ai, i = Date.now()) {
  return mt(a) ? a > e && a < i : !1;
}
function Jt(a, e, i) {
  a = new Date(a), e = new Date(e);
  var s = e.getTime(), n = a.getTime();
  return parseInt((s - n) / i);
}
const rt = {
  inSeconds: function(a, e) {
    return Jt(a, e, ae);
  },
  inMinutes: function(a, e) {
    return Jt(a, e, Q);
  },
  inHours: function(a, e) {
    return Jt(a, e, ge);
  },
  inDays: function(a, e) {
    return Jt(a, e, q);
  },
  inWeeks: function(a, e) {
    return Jt(a, e, Ft);
  },
  inMonths: function(a, e) {
    a = new Date(a), e = new Date(e);
    let i = a.getUTCFullYear(), s = e.getUTCFullYear(), n = a.getUTCMonth();
    return e.getUTCMonth() + 12 * s - (n + 12 * i);
  },
  inYears: function(a, e) {
    let i = new Date(a);
    return new Date(e).getUTCFullYear() - i.getUTCFullYear();
  }
};
function md(a, e) {
  let i = rt.inYears(a, e), s = rt.inMonths(a, e), n = rt.inWeeks(a, e), r = rt.inDays(a, e), o = rt.inHours(a, e), l = rt.inMinutes(a, e), c = rt.inSeconds(a, e), m = new Date(e).getTime() - new Date(a).getTime();
  return {
    y: i,
    M: s,
    w: n,
    d: r,
    h: o,
    m: l,
    s: c,
    ms: m,
    years: i,
    months: s,
    weeks: n,
    days: r,
    hours: o,
    minutes: l,
    seconds: c,
    milliseconds: m
  };
}
function nr(a) {
  return N(a) && !(a < ae) && a !== 1 / 0;
}
function gs(a) {
  let e = ae;
  return T(a) ? (e = it(a), e ? a = a : (e = ae, a = "1s")) : N(a) ? (e = a, a = Te(a)) : a = "1s", { tf: a, ms: e };
}
function it(a) {
  if (!T(a)) return !1;
  const e = /([0-9]{1,2})([s|m|h|d|w|M|y])/gm;
  let i;
  return (i = e.exec(a)) !== null ? pi[i[2]] * i[1] : !1;
}
function rr(a) {
  let e = Math.floor(a / 1e3), i = Math.floor(e / 60);
  e = e % 60;
  let s = Math.floor(i / 60);
  i = i % 60;
  let n = Math.floor(s / 24);
  s = s % 24;
  let r = Math.floor(n / 7);
  n = n % 7;
  let o = Math.floor(r / 4), l = Math.floor(r / 52), c = r % 4;
  return o = o % 13, {
    y: l,
    M: o,
    w: c,
    d: n,
    h: s,
    m: i,
    s: e,
    years: l,
    months: o,
    weeks: c,
    days: n,
    hours: s,
    minutes: i,
    seconds: e
  };
}
function Te(a) {
  const e = rr(a);
  for (const i in e)
    if (e[i]) return `${e[i]}${i}`;
}
function ll(a) {
  return a ? new Date(a).getUTCSeconds() : null;
}
function ar(a) {
  return new Date(a).setUTCMilliseconds(0, 0);
}
function hl(a) {
  return a ? new Date(a).getUTCMinutes() : null;
}
function or(a) {
  return new Date(a).setUTCSeconds(0, 0);
}
function cl(a) {
  return a ? new Date(a).getUTCHours() : null;
}
function lr(a) {
  return new Date(a).setUTCMinutes(0, 0, 0);
}
function hr(a) {
  return a ? new Date(a).getUTCDate() : null;
}
function ul(a, e = "en-GB", i = "short") {
  return new Date(a).toLocaleDateString(e, { weekday: i });
}
function fi(a) {
  return new Date(a).setUTCHours(0, 0, 0, 0);
}
function cr(a) {
  if (a)
    return new Date(a).getUTCMonth();
}
function dl(a, e = "en-GB", i = "short") {
  return new Date(a).toLocaleDateString(e, { month: i });
}
function ur(a) {
  let e = new Date(a);
  return Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    1
  );
}
function ml(a) {
  let e = (cr(a) + 1) % 12;
  return a += nl(e, ys(a)), a;
}
function pl(a) {
  if (a)
    return new Date(a).getUTCFullYear();
}
function dr(a) {
  return Date.UTC(new Date(a).getUTCFullYear());
}
function fl(a) {
  return a = a + $e + q, ys(a), a;
}
function ys(a) {
  let i = new Date(a).getUTCFullYear();
  return i & 3 ? !1 : i % 100 != 0 || i % 400 == 0;
}
function pd(a) {
  let e = new Date(a), i = e.getUTCMonth(), s = e.getUTCDate(), n = dayCount[i] + s;
  return i > 1 && ys() && n++, n;
}
function Ui(a, e) {
  return {
    years: (s) => dr(s),
    months: (s) => ur(s),
    weeks: (s) => fi(s),
    days: (s) => fi(s),
    hours: (s) => lr(s),
    minutes: (s) => or(s),
    seconds: (s) => ar(s)
  }[e](a);
}
function fd(a, e) {
  let i, s;
  switch (e) {
    case "years":
      i = dr(a), s = fl(a);
      break;
    case "months":
      i = ur(a), s = ml(a);
      break;
    case "weeks":
      i = fi(a), s = i + q;
      break;
    case "days":
      i = fi(a), s = i + q;
      break;
    case "hours":
      i = lr(a), s = i + ge;
      break;
    case "minutes":
      i = or(a), s = i + Q;
      break;
    case "seconds":
      i = ar(a), s = i + ae;
  }
  return { start: i, end: s };
}
function An(a) {
  let { h: e, m: i } = mr(a);
  return e == 0 && i == 0 ? `${d}` : `${e}:${i}`;
}
function gd(a) {
  let { h: e, m: i, s } = mr(a);
  return e == 0 && i == 0 && s == 0 ? `${d}` : `${e}:${i}:${s}`;
}
function On(a) {
  let { h: e, m: i, s } = mr(a);
  return e == 0 && i == 0 && s == 0 ? `${d}` : `${i}:${s}`;
}
function mr(a) {
  let e, i, s, n;
  return e = String(hr(a)), i = String(cl(a)).padStart(2, "0"), s = String(hl(a)).padStart(2, "0"), n = String(ll(a)).padStart(2, "0"), { d: e, h: i, m: s, s: n };
}
function yd(a, e) {
  let i = 1 / 0, s = null, n = -1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r][0];
    Math.abs(o - a) < i && (i = Math.abs(o - a), s = e[r], n = r);
  }
  return [n, s];
}
class gl {
  #e = {};
  #t = oi();
  #i = Intl.DateTimeFormat().resolvedOptions().timeZone;
  static timeUnits = tl;
  static timeUnitsLong = il;
  static timeUnitsValues = tt;
  static timeScaleValues = tt;
  static BTCGenesis = ai;
  constructor(e) {
    e instanceof ns && (this.#e = e), this.setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get range() {
    return this.#e;
  }
  get timeFrameMS() {
    return this.#e.interval;
  }
  get timeFrame() {
    return this.#e.intervalStr;
  }
  set timeZone(e) {
    this.setTimeZone(e);
  }
  get timeZone() {
    return this.#i;
  }
  set timeZoneOffset(e) {
    this.#t = P(e) ? e : (/* @__PURE__ */ new Date()).getTimezoneOffset();
  }
  get timeZoneOffset() {
    return this.#t;
  }
  get timeZoneLocal() {
    return Ln();
  }
  get indexed() {
    return this.#e.indexed;
  }
  setTimeZone(e) {
    Intl.supportedValuesOf("timeZone").includes(e) && (this.#i = e, this.#t = oi(e));
  }
  isValidTimestamp(e) {
    return mt(e);
  }
  isValidTimeInRange(e, i = ai, s = Date.now()) {
    return rs(e, i, s);
  }
  interval2MS(e) {
    return it(e);
  }
  ms2Interval(e) {
    return Te(e);
  }
  static timezoneLocal() {
    return Ln();
  }
  static timezoneOffset(e, i) {
    return oi(e, i);
  }
  static IANATimeZone(e) {
    return yl(e);
  }
  static isValidTimestamp(e) {
    return mt(e);
  }
  static isValidTimeInRange(e, i = ai, s = Date.now()) {
    return rs(e, i, s);
  }
  static interval2MS(e) {
    return it(e);
  }
  static ms2Interval(e) {
    return Te(e);
  }
}
function yl(a = "en-US") {
  const e = {};
  return Intl.supportedValuesOf("timeZone").forEach((i) => {
    let s = oi(i, a);
    e[i] = s;
  }), e;
}
function oi(a = Intl.DateTimeFormat().resolvedOptions().timeZone, e = "en-US") {
  const i = /* @__PURE__ */ new Date(), s = i.toLocaleString(e, { timeZone: a }), n = i.toLocaleString(e);
  return -((Date.parse(n) - Date.parse(s)) / 36e5 + i.getTimezoneOffset() / 60);
}
const vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BTCGENESIS: ai,
  DAY_MS: q,
  HM: An,
  HMS: gd,
  HOUR_MS: ge,
  IANATimeZones: yl,
  INTERVALMAX: ad,
  INTERVALMIN: rd,
  MILLISECOND: ot,
  MINUTE_MS: Q,
  MONTHMAP: sd,
  MONTHR_MS: Ae,
  MONTH_MS: nl,
  MS: On,
  SECOND_MS: ae,
  TIMEFRAMEMAX: ol,
  TIMEFRAMEMIN: al,
  TIMESCALES: si,
  TIMESCALESKEYS: hd,
  TIMESCALESRANK: Mn,
  TIMESCALESVALUES: tt,
  TIMESCALESVALUESKEYS: ud,
  TIMEUNITS: tl,
  TIMEUNITSLONG: il,
  TIMEUNITSVALUES: nd,
  TIMEUNITSVALUESLONG: rl,
  TIMEUNITSVALUESSHORT: pi,
  TimeData: gl,
  WEEK_MS: Ft,
  YEAR_MS: $e,
  buildSubGrads: dd,
  dayCntInc: td,
  dayCntLeapInc: id,
  dayOfYear: pd,
  day_start: fi,
  getTimezone: Ln,
  getTimezoneOffset: oi,
  get_day: hr,
  get_dayName: ul,
  get_hour: cl,
  get_minute: hl,
  get_month: cr,
  get_monthName: dl,
  get_second: ll,
  get_year: pl,
  hour_start: lr,
  interval2MS: it,
  isLeapYear: ys,
  isTimeFrame: gs,
  isTimeFrameMS: nr,
  isValidTimeInRange: rs,
  isValidTimestamp: mt,
  minute_start: or,
  monthDayCnt: sl,
  month_start: ur,
  ms2Interval: Te,
  ms2TimeUnits: rr,
  nearestTs: yd,
  nextMonth: ml,
  nextYear: fl,
  second_start: ar,
  time_start: Ui,
  timestampDiff: rt,
  timestampDifference: md,
  unitRange: fd,
  year_start: dr
}, Symbol.toStringTag, { value: "Module" })), bd = Q, as = "1m", os = bd, va = 0.05, wd = 100, ba = 100, Dn = 0.3, vs = 1.04, Ot = 8;
class R {
  static default = new R("default");
  static percent = new R("percent");
  static relative = new R("relative");
  static log = new R("log");
  static valid(e) {
    return e instanceof R ? e : R.default;
  }
  static get types() {
    let e = [];
    for (let i in R)
      R[i] instanceof R && e.push(i);
    return e;
  }
  constructor(e) {
    this.name = e;
  }
}
const v1 = R.types, In = 30, Vi = 200, Nn = 200, Rn = 20, kn = 1920, bs = 5, wa = 50, xa = 30, xd = 8, $n = 30, Cd = [!0, "top"];
class de {
  static t = 0;
  static o = 1;
  static h = 2;
  static l = 3;
  static c = 4;
  static v = 5;
}
const zi = {
  mainPane: {},
  primaryPane: {},
  secondaryPane: {},
  scale: {},
  timeline: {}
};
Array.from(Object.keys(zi));
class Pe {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  static dividerList = {};
  static divideCnt = 0;
  static class = Jr;
  static Name = "Dividers";
  static type = "divider";
  static create(e, i) {
    const s = `${i.core.ID}_divider_${++Pe.divideCnt}`;
    return i.id = s, Pe.dividerList[s] = new Pe(e, i), Pe.dividerList[s];
  }
  static destroy() {
    for (let e in Pe.dividerList)
      Pe.dividerList[e].destroy(), delete Pe.dividerList[e];
  }
  static defaultNode() {
    return `
  <div slot="widget" class="${Jr}" style="position: absolute;"></div>
  `;
  }
  constructor(e, i) {
    const s = { ...i };
    this.#n = e, this.#t = s.core, this.#i = s, this.#s = s.core.theme, this.#e = s.id, this.#r = s.chartPane, this.#a = e.elements[Pe.type], this.init();
  }
  get el() {
    return this.#l;
  }
  get id() {
    return this.#e;
  }
  get chartPane() {
    return this.#r;
  }
  get config() {
    return this.#t.config;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#l);
  }
  get height() {
    return this.#l.getBoundingClientRect().height;
  }
  set cursor(e) {
    this.setCursorStyle(e);
  }
  get cursor() {
    return this.#o;
  }
  get type() {
    return Pe.type;
  }
  init() {
    this.mount();
  }
  start() {
    this.cursor = "row-resize", this.eventsListen();
  }
  destroy() {
    this.#c.destroy(), this.el.remove(), delete Pe.dividerList[this.id];
  }
  eventsListen() {
    this.#c = new Xe(this.#l, { disableContextMenu: !1 }), this.#c.on("pointerover", this.onMouseEnter.bind(this)), this.#c.on("pointerout", this.onMouseOut.bind(this)), this.#c.on("pointerdrag", this.onPointerDrag.bind(this)), this.#c.on("pointerdragend", this.onPointerDragEnd.bind(this));
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  emit(e, i) {
    this.#t.emit(e, i);
  }
  onMouseEnter() {
    this.#l.style.background = this.#s.divider.active, this.#t.MainPane.onMouseEnter();
  }
  onMouseOut() {
    this.#l.style.background = this.#s.divider.idle, this.#t.MainPane.onMouseEnter();
  }
  onPointerDrag(e) {
    this.#h = this.#t.MainPane.cursorPos, this.#l.style.background = this.#s.divider.active, this.emit(`${this.id}_pointerdrag`, this.#h), this.emit("divider_pointerDrag", {
      id: this.id,
      e,
      pos: this.#h,
      chartPane: this.chartPane
    }), this.chartPane.resize();
  }
  onPointerDragEnd(e) {
    this.#l.style.background = this.#s.divider.idle, this.#h = this.#t.MainPane.cursorPos, this.emit(`${this.id}_pointerdragend`, this.#h), this.emit("divider_pointerDragEnd", {
      id: this.id,
      e,
      pos: this.#h,
      chartPane: this.chartPane
    }), this.chartPane.resize();
  }
  mount() {
    this.#a.lastElementChild == null ? this.#a.innerHTML = this.dividerNode() : this.#a.lastElementChild.insertAdjacentHTML("afterend", this.dividerNode()), this.#l = Ao(`#${this.#e}`, this.#a);
  }
  dividerNode() {
    let e = this.#t.theme, i = this.#r.pos.top - Ce(this.#a).top;
    this.#t.elBody.width - this.#t.elBody.scale.width;
    let s = P(this.config.dividerHeight) ? this.config.dividerHeight : xd, n = this.#t.elBody.tools.width;
    switch (i -= s / 2, e.tools.location) {
      case "left":
        break;
      case !1:
      case "none":
      case "right":
        n *= -1;
        break;
    }
    const r = `position: absolute; top: ${i}px; left: ${n}px; z-index:100; width: 100%; height: ${s}px; background: ${e.divider.idle};`, o = `width: 100%; margin: 3.5px 0; border: 0; border-top: ${e.divider.style} ${e.divider.line};`;
    return `
      <div id="${this.#e}" class="divider" style="${r}"><hr style="${o}"></div>
    `;
  }
  setPos() {
    let e = this.#r.pos.top - Ce(this.#a).top;
    e = e - this.height / 2 + 1, this.#l.style.top = `${e}px`, this.#l.style.left = `${this.#t.elBody.tools.width}px`;
  }
  setWidth() {
    this.#l.style.width = `${this.#t.elMain.width + this.#t.elBody.scale.width}px`, this.#l.style.left = `${this.#t.elBody.tools.width}px`;
  }
  setCursorStyle(e) {
    T(e) && (this.#o = e, this.#l.style.cursor = e);
  }
  hide() {
    this.#l.style.display = "none";
  }
  show() {
    this.#l.style.display = "block";
  }
}
const Td = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4" ><path d="M471.993 112h-89.2l-16.242-46.75a32.023 32.023 0 00-30.229-21.5H175.241a31.991 31.991 0 00-30.294 21.691L129.1 112H40a24.027 24.027 0 00-24 24v312a24.027 24.027 0 0024 24h431.993a24.027 24.027 0 0024-24V136a24.027 24.027 0 00-24-24zm-8 328H48.007V144h104.01l23.224-68.25h161.081l23.71 68.25h103.961z" class="ci-primary"></path><path d="M256 168a114 114 0 10114 114 114.13 114.13 0 00-114-114zm0 196a82 82 0 1182-82 82.093 82.093 0 01-82 82z"></path></svg>', Sd = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72 212-211.999V280h32V160H376z"></path><path d="M48 104H16v392h480v-32H48V104z"></path></svg>', Pd = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M271.514 95.5h-32v178.111l115.613 54.948 13.737-28.902-97.35-46.268V95.5z"></path><path d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240 240-107.452 240-240S388.548 16 256 16zm0 448c-114.875 0-208-93.125-208-208S141.125 48 256 48s208 93.125 208 208-93.125 208-208 208z"></path></svg>', vl = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M245.151 168a88 88 0 1088 88 88.1 88.1 0 00-88-88zm0 144a56 56 0 1156-56 56.063 56.063 0 01-56 56z"></path><path d="M464.7 322.319l-31.77-26.153a193.081 193.081 0 000-80.332l31.77-26.153a19.941 19.941 0 004.606-25.439l-32.612-56.483a19.936 19.936 0 00-24.337-8.73l-38.561 14.447a192.038 192.038 0 00-69.54-40.192l-6.766-40.571A19.936 19.936 0 00277.762 16H212.54a19.937 19.937 0 00-19.728 16.712l-6.762 40.572a192.03 192.03 0 00-69.54 40.192L77.945 99.027a19.937 19.937 0 00-24.334 8.731L21 164.245a19.94 19.94 0 004.61 25.438l31.767 26.151a193.081 193.081 0 000 80.332l-31.77 26.153A19.942 19.942 0 0021 347.758l32.612 56.483a19.937 19.937 0 0024.337 8.73l38.562-14.447a192.03 192.03 0 0069.54 40.192l6.762 40.571A19.937 19.937 0 00212.54 496h65.222a19.936 19.936 0 0019.728-16.712l6.763-40.572a192.038 192.038 0 0069.54-40.192l38.564 14.449a19.938 19.938 0 0024.334-8.731l32.609-56.487a19.939 19.939 0 00-4.6-25.436zm-50.636 57.12l-48.109-18.024-7.285 7.334a159.955 159.955 0 01-72.625 41.973l-10 2.636L267.6 464h-44.89l-8.442-50.642-10-2.636a159.955 159.955 0 01-72.625-41.973l-7.285-7.334-48.117 18.024L53.8 340.562l39.629-32.624-2.7-9.973a160.9 160.9 0 010-83.93l2.7-9.972L53.8 171.439l22.446-38.878 48.109 18.024 7.285-7.334a159.955 159.955 0 0172.625-41.973l10-2.636L222.706 48H267.6l8.442 50.642 10 2.636a159.955 159.955 0 0172.625 41.973l7.285 7.334 48.109-18.024 22.447 38.877-39.629 32.625 2.7 9.972a160.9 160.9 0 010 83.93l-2.7 9.973 39.629 32.623z"></path></svg>', Ed = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><rect x="16" y="240.18" width="188.84" height="31.635"/><g transform="translate(-3.3234e-7 -112.18)"><rect x="307.16" y="352.37" width="188.84" height="31.635"/></g><rect transform="rotate(-90)" x="-496" y="240.18" width="188.84" height="31.635"/><rect transform="rotate(-90)" x="-204.84" y="240.18" width="188.84" height="31.635"/></svg>', Md = '<svg width="46.08" height="46.08" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.535 3H21a1 1 0 011 1v16a1 1 0 01-1 1H6.535a1 1 0 01-.832-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM13 10.586l2.828-2.829 1.415 1.415L14.414 12l2.829 2.828-1.415 1.415L13 13.414l-2.828 2.829-1.415-1.415L11.586 12 8.757 9.172l1.415-1.415L13 10.586z"></path></svg>', Ld = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><g stroke-width="30.155"><rect x="14.757" y="240.92" width="482.49" height="30.155" rx="15.078"/><rect x="14.757" y="147" width="482.49" height="30.155" rx="15.078"/><rect x="14.757" y="334.84" width="482.49" height="30.155" rx="15.078"/></g ><g transform="translate(5.937 -288.34)"><path d="m23.904 712.34c-8.3532 0-15.078 6.7252-15.078 15.078s6.7249 15.078 15.078 15.078h173.93c-0.65295-3.3651-2.0312-6.4697-2.0312-10.026 0-7.1393 1.5573-13.888 4.0625-20.13zm276.35 0c2.5051 6.2423 4.0365 12.991 4.0365 20.13 0 3.5554-1.3526 6.6618-2.0052 10.026h173.93c8.3532 0 15.078-6.7252 15.078-15.078s-6.7249-15.078-15.078-15.078z"/><path d="m250.06 759.97c17.965 0 32.545-14.58 32.545-32.545 0-17.965-14.58-32.545-32.545-32.545-17.965 0-32.545 14.58-32.545 32.545 0 17.965 14.58 32.545 32.545 32.545zm0 21.697c-29.964 0-54.242-24.279-54.242-54.242 0-29.964 24.279-54.242 54.242-54.242 29.964 0 54.242 24.279 54.242 54.242 0 29.964-24.279 54.242-54.242 54.242z" stroke-width="21.697"/></g ><path d="m144.05 18.672c-24.694 0-45.285 16.595-51.849 39.167h-62.37c-8.3532 0-15.078 6.7252-15.078 15.078s6.7249 15.078 15.078 15.078h62.37c6.5639 22.572 27.155 39.167 51.849 39.167s45.285-16.595 51.849-39.167h120.03c6.5639 22.572 27.155 39.167 51.849 39.167 24.694 0 45.285-16.595 51.849-39.167h62.552c8.3532 0 15.078-6.7252 15.078-15.078s-6.7249-15.078-15.078-15.078h-62.552c-6.5639-22.572-27.155-39.167-51.849-39.167-24.694 0-45.285 16.595-51.849 39.167h-120.03c-6.5639-22.572-27.155-39.167-51.849-39.167zm0 21.693c17.965 0 32.552 14.587 32.552 32.552 0 17.965-14.587 32.552-32.552 32.552-17.965 1e-5 -32.552-14.587-32.552-32.552 0-17.965 14.587-32.552 32.552-32.552zm223.72 0c17.965 0 32.552 14.587 32.552 32.552 0 17.965-14.587 32.552-32.552 32.552-17.965 0-32.552-14.587-32.552-32.552 0-17.965 14.587-32.552 32.552-32.552z" stroke-width="30.155"/></svg>', bt = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><g transform="matrix(21.697 0 0 21.697 -47.758 -47.758)"><path d="m7.354 21.354 14-14-0.707-0.707-14 14z"/><path d="m22.5 7c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm-17 16c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/></g></svg>', Ad = '<svg width="46.08" height="46.08" viewBox="0 0 32 32"><path d="M 3.2758709,20.241377 11.758622,28.72413 28.72413,11.758622 20.241377,3.2758709 Z m 2.1206881,0 1.5905161,-1.590515 3.7112049,3.711203 1.060342,-1.060345 -3.7112027,-3.711204 1.0603441,-1.060344 2.1206876,2.12069 1.060346,-1.060346 -2.120689,-2.120688 1.060343,-1.060344 3.711203,3.711203 L 16,17.060346 l -3.711203,-3.711208 1.060341,-1.060341 2.12069,2.120687 1.060344,-1.060346 -2.120688,-2.120687 1.060344,-1.060343 3.711204,3.711205 1.060345,-1.060345 -3.711205,-3.7112046 1.060344,-1.0603441 2.120687,2.1206887 1.060346,-1.0603446 -2.120687,-2.1206883 1.590515,-1.5905161 6.362065,6.362063 -14.84482,14.84482 z" style="stroke-width:0.749776" /></svg>', Od = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><g id="g930" transform="matrix(21.128963,0,0,21.128963,-29.235597,-50.369964)"><path clip-rule="evenodd" d="m 4.5,5 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,6.5 A 2.5,2.5 0 0 1 6.95,6 H 24 V 7 H 6.95 A 2.5,2.5 0 0 1 2,6.5 Z M 4.5,15 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,16.5 A 2.5,2.5 0 0 1 6.95,16 h 13.1 a 2.5,2.5 0 1 1 0,1 H 6.95 A 2.5,2.5 0 0 1 2,16.5 Z M 22.5,15 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z m -18,6 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,22.5 A 2.5,2.5 0 0 1 6.95,22 H 24 v 1 H 6.95 A 2.5,2.5 0 0 1 2,22.5 Z" id="path908" /><path clip-rule="evenodd" d="M 22.4,8.94 21.01,9.57 20.6,8.66 21.99,8.03 Z m -4,1.8 -1.39,0.63 -0.41,-0.91 1.39,-0.63 z m -4,1.8 -1.4,0.63 -0.4,-0.91 1.39,-0.63 z m -4,1.8 L 9,14.97 8.6,14.06 9.99,13.43 Z" id="path910" /></g></svg>', Dd = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M231.359 147l-80.921 205h45.155l15.593-39.5h89.628l15.593 39.5h45.155l-80.921-205zm-3.594 123.5L256 198.967l28.235 71.533z"></path><path d="M384 56H128V16H16v112h40v256H16v112h112v-40h256v40h112V384h-40V128h40V16H384zM48 96V48h48v48zm48 368H48v-48h48zm288-40H128v-40H88V128h40V88h256v40h40v256h-40zm80-8v48h-48v-48zM416 48h48v48h-48z"></path></svg>', Id = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g718" transform="translate(0,1.2499996)"><path d="M 7.5010125,7.9560661 5.355012,10.103066 c -0.472,0.472 -1.18,-0.2360003 -0.708,-0.7080003 L 7.6470125,6.3950659 c 0.195364,-0.195858 0.512636,-0.195858 0.708,0 l 3.0000005,2.9999998 c 0.472,0.472 -0.236,1.1800003 -0.708,0.7080003 L 8.5010125,7.9560661 c -0.431103,-0.417289 -0.523896,-0.423024 -1,0 z" style="" id="path566-5" /><path d="m 7.4989873,5.5439348 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.195858 0.5126361,0.195858 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></g></svg>', Nd = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 7.4989873,7.7026182 -2.1460003,2.147 c -0.472,0.4719998 -1.18,-0.236 -0.708,-0.708 l 3.0000003,-3 c 0.1953639,-0.1958581 0.5126361,-0.1958581 0.708,0 l 2.9999997,3 c 0.472,0.472 -0.236,1.1799998 -0.708,0.708 l -2.1459997,-2.147 c -0.4311027,-0.417289 -0.5238956,-0.423024 -1,0 z" style="" id="path566-6-3" /></svg>', Rd = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 7.4989873,8.2973819 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.1958581 0.5126361,0.1958581 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></svg>', kd = '<svg width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1zm15 0a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-8.5-2.5a0.5 0.5 0 0 0 1 0v-5.793l2.146 2.147a0.50063 0.50063 0 1 0 0.708-0.708l-3-3a0.5 0.5 0 0 0-0.708 0l-3 3a0.50063 0.50063 0 0 0 0.708 0.708l2.146-2.147z" fill-rule="evenodd"/></svg>', $d = '<svg width="46.08" height="46.08" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 15,2 A 1,-1 0 0 0 14,1 H 2 A 1,-1 0 0 0 1,2 v 12 a 1,-1 0 0 0 1,1 h 12 a 1,-1 0 0 0 1,-1 z M 0,2 A 2,-2 0 0 1 2,0 h 12 a 2,-2 0 0 1 2,2 v 12 a 2,-2 0 0 1 -2,2 H 2 A 2,-2 0 0 1 0,14 Z m 8.5,2.5 a 0.5,-0.5 0 0 0 -1,0 v 5.793 L 5.354,8.146 A 0.5006316,-0.5006316 0 1 0 4.646,8.854 l 3,3 a 0.5,-0.5 0 0 0 0.708,0 l 3,-3 A 0.5006316,-0.5006316 0 0 0 10.646,8.146 L 8.5,10.293 Z" id="path2" /></svg>', Hd = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g687" transform="translate(15.647255,-0.0288128)"><path d="m -8.1462425,10.484879 -2.1460005,2.146999 c -0.472,0.472 -1.18,-0.236 -0.708,-0.708 l 3.0000005,-2.9999994 c 0.195364,-0.195858 0.512636,-0.195858 0.708,0 l 3.0000005,2.9999994 c 0.472,0.472 -0.236,1.18 -0.708,0.708 l -2.1460005,-2.146999 c -0.431103,-0.417289 -0.523896,-0.423024 -1,0 z" style="" id="path566-5" /><path d="m -8.1482677,5.5727476 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.195858 0.5126361,0.195858 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></g></svg>', _d = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g611" transform="translate(0.2050748,-0.8829888)"><path d="m 7.2959375,11.933818 -2.146,-2.1469999 c -0.472,-0.4719998 -1.18,0.2359999 -0.708,0.7079999 l 3,3 c 0.195364,0.195858 0.512636,0.195858 0.708,0 l 3.0000005,-3 c 0.472,-0.472 -0.236,-1.1799997 -0.708,-0.7079999 L 8.2959375,11.933818 c -0.431103,0.417289 -0.523896,0.423024 -1,0 z" style="" id="path566" /><path d="m 7.2939123,5.8321596 -2.146,2.147 c -0.4719998,0.472 -1.1799998,-0.236 -0.708,-0.708 l 3,-3 c 0.1953639,-0.195858 0.5126361,-0.195858 0.708,0 l 2.9999997,3 c 0.472,0.472 -0.236,1.18 -0.708,0.708 l -2.1459997,-2.147 c -0.4311027,-0.417289 -0.5238956,-0.423024 -1,0 z" style="" id="path566-6" /></g></svg>', Fd = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 11.500447,8.5 c 0.666666,0 0.666666,-1 0,-1 H 4.444275 c -0.1571231,0 -0.224029,0.07336 -0.2978281,0.1459999 -0.1958579,0.195364 -0.1958579,0.5126361 0,0.7080001 0,0 0.113806,0.146 0.320186,0.146 z" style="" id="path887" /></svg>', Bd = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <g fill-rule="evenodd">  <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z"/>  <path d="m4.4449 4.097c-0.01964 0-0.037678 0.0018-0.054687 0.0039-0.017011 0.0022-0.034068 0.0058-0.048828 0.0098-0.014761 4e-3 -0.028126 0.0081-0.041016 0.01367-0.012889 0.0056-0.025711 0.01268-0.037109 0.01953-0.022796 0.01371-0.041442 0.02783-0.060547 0.04492s-0.038191 0.03653-0.056641 0.05469c-0.024482 0.02442-0.046092 0.05037-0.064453 0.07813-0.018362 0.02775-0.032681 0.05776-0.044922 0.08789s-0.021223 0.06023-0.027344 0.0918c-0.00612 0.03156-0.00977 0.06366-0.00977 0.0957 0 8e-3 -4.378e-4 0.01543 0 0.02344v1.2988c0 0.02083 6.41e-5 0.04102 0.00195 0.06055 0.00189 0.01953 0.0061 0.03841 0.00977 0.05664 0.00366 0.01823 0.00836 0.03581 0.013672 0.05273 0.00531 0.01693 0.010742 0.0332 0.017578 0.04883 0.013672 0.03125 0.029785 0.0599 0.048828 0.08594s0.041016 0.04948 0.064453 0.07031 0.049316 0.03906 0.076172 0.05469c0.026855 0.01563 0.054687 0.02865 0.083984 0.03906 0.029297 0.01042 0.059082 0.01823 0.089844 0.02344 0.030762 0.0052 0.0625 0.0078 0.09375 0.0078s0.062988-0.0026 0.09375-0.0078 0.060547-0.01302 0.089844-0.02344 0.057129-0.02344 0.083984-0.03906c0.026855-0.01563 0.052734-0.03385 0.076172-0.05469 0.023437-0.02083 0.04541-0.04427 0.064453-0.07031s0.035156-0.05469 0.048828-0.08594c0.00684-0.01563 0.012268-0.0319 0.017578-0.04883s0.01001-0.0345 0.013672-0.05273c0.00366-0.01823 0.00787-0.03711 0.00977-0.05664 0.00189-0.01953 0.00195-0.03971 0.00195-0.06055v-0.82227h6v0.98633c0 0.02083 2e-3 0.04102 0.0039 0.06055s0.0042 0.03841 0.0078 0.05664c0.0037 0.01823 0.0084 0.03581 0.01367 0.05273 0.0053 0.01693 0.01074 0.0332 0.01758 0.04883 0.01367 0.03125 0.03174 0.0599 0.05078 0.08594s0.03906 0.04948 0.0625 0.07031 0.04932 0.03906 0.07617 0.05469c0.02686 0.01563 0.05469 0.02865 0.08399 0.03906 0.0293 0.01042 0.06104 0.01823 0.0918 0.02344 0.03076 0.0052 0.06055 0.0078 0.0918 0.0078s0.06299-0.0026 0.09375-0.0078 0.06055-0.01302 0.08984-0.02344c0.0293-0.01042 0.05908-0.02344 0.08594-0.03906 0.02686-0.01563 0.05078-0.03385 0.07422-0.05469 0.02344-0.02083 0.04541-0.04427 0.06445-0.07031s0.03516-0.05469 0.04883-0.08594c0.0068-0.01563 0.01422-0.0319 0.01953-0.04883 0.0053-0.01693 0.01001-0.0345 0.01367-0.05273 0.0037-0.01823 0.0059-0.03711 0.0078-0.05664s2e-3 -0.03971 2e-3 -0.06055v-1.4629c3.25e-4 -0.0078 0-0.01563 0-0.02344 0-0.03125-0.0026-0.06299-0.0078-0.09375s-0.01302-0.06055-0.02344-0.08984c-0.01042-0.0293-0.02344-0.05713-0.03906-0.08398-0.01563-0.02685-0.03385-0.05273-0.05469-0.07617-0.02083-0.02344-0.04427-0.04541-0.07031-0.06445s-0.05469-0.03516-0.08594-0.04883c-0.01563-0.0068-0.0319-0.01227-0.04883-0.01758-0.01693-0.0053-0.0345-0.01001-0.05273-0.01367-0.01823-0.0037-0.03711-0.0059-0.05664-0.0078s-0.03971-0.0039-0.06055-0.0039h-6.5z"/>  <path d="m11.555 11.903c0.01964 0 0.03768-0.0018 0.05469-0.0039 0.01701-0.0022 0.03407-0.0058 0.04883-0.0098s0.02813-0.0081 0.04102-0.01367c0.01289-0.0056 0.02571-0.01268 0.03711-0.01953 0.0228-0.01371 0.04144-0.02783 0.06055-0.04492 0.0191-0.01709 0.03819-0.03653 0.05664-0.05469 0.02448-0.02442 0.04609-0.05037 0.06445-0.07813 0.01836-0.02775 0.03268-0.05776 0.04492-0.08789s0.02122-0.06023 0.02734-0.0918c0.0061-0.03156 0.0098-0.06366 0.0098-0.0957 0-8e-3 4.38e-4 -0.01543 0-0.02344v-1.2988c0-0.02083-6.4e-5 -0.04102-2e-3 -0.06055-0.0019-0.01953-0.0061-0.03841-0.0098-0.05664s-0.0084-0.03581-0.01367-0.05273c-0.0053-0.01693-0.01074-0.0332-0.01758-0.04883-0.01367-0.03125-0.02979-0.0599-0.04883-0.08594s-0.04102-0.04948-0.06445-0.07031c-0.02344-0.02083-0.04932-0.03906-0.07617-0.05469s-0.05469-0.02865-0.08398-0.03906c-0.0293-0.01042-0.05908-0.01823-0.08984-0.02344-0.03076-0.0052-0.0625-0.0078-0.09375-0.0078s-0.06299 0.0026-0.09375 0.0078-0.06055 0.01302-0.08984 0.02344c-0.0293 0.01042-0.05713 0.02344-0.08398 0.03906-0.02685 0.01563-0.05273 0.03385-0.07617 0.05469-0.02344 0.02083-0.04541 0.04427-0.06445 0.07031s-0.03516 0.05469-0.04883 0.08594c-0.0068 0.01563-0.01227 0.0319-0.01758 0.04883-0.0053 0.01693-0.01001 0.0345-0.01367 0.05273-0.0037 0.01823-0.0079 0.03711-0.0098 0.05664s-0.0019 0.03971-0.0019 0.06055v0.82227h-6v-0.98633c0-0.02083-2e-3 -0.04102-0.0039-0.06055s-0.0042-0.03841-0.0078-0.05664c-0.0037-0.01823-0.0084-0.03581-0.01367-0.05273-0.0053-0.01693-0.01074-0.0332-0.01758-0.04883-0.01367-0.03125-0.03174-0.0599-0.05078-0.08594s-0.03906-0.04948-0.0625-0.07031-0.04932-0.03906-0.07617-0.05469c-0.02686-0.01563-0.05469-0.02865-0.08399-0.03906-0.0293-0.01042-0.06104-0.01823-0.0918-0.02344-0.03076-0.0052-0.06055-0.0078-0.0918-0.0078s-0.06299 0.0026-0.09375 0.0078-0.06055 0.01302-0.08984 0.02344c-0.0293 0.01042-0.05908 0.02344-0.08594 0.03906-0.02686 0.01563-0.05078 0.03385-0.07422 0.05469-0.02344 0.02083-0.04541 0.04427-0.06445 0.07031s-0.03516 0.05469-0.04883 0.08594c-0.0068 0.01563-0.01422 0.0319-0.01953 0.04883-0.0053 0.01693-0.01001 0.03451-0.01367 0.05273-0.0037 0.01823-0.0059 0.03711-0.0078 0.05664s-2e-3 0.03971-2e-3 0.06055v1.4629c-3.25e-4 0.0078 0 0.01563 0 0.02344 0 0.03125 0.0026 0.06299 0.0078 0.09375s0.01302 0.06055 0.02344 0.08984c0.01042 0.0293 0.02344 0.05713 0.03906 0.08398 0.01563 0.02685 0.03385 0.05273 0.05469 0.07617 0.02083 0.02344 0.04427 0.04541 0.07031 0.06445s0.05469 0.03516 0.08594 0.04883c0.01563 0.0068 0.0319 0.01227 0.04883 0.01758 0.01693 0.0053 0.0345 0.01001 0.05273 0.01367 0.01823 0.0037 0.03711 0.0059 0.05664 0.0078s0.03971 0.0039 0.06055 0.0039h6.5z"/></g></svg>', Ud = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z" fill-rule="evenodd"/> <path d="m13.291 7.7876c-1.0729-2.491-3.0911-4.0365-5.2687-4.0365-2.1776 0-4.1958 1.5456-5.2687 4.0365a0.53112 0.53112 0 0 0 0 0.4249c1.0729 2.491 3.0911 4.0365 5.2687 4.0365 2.1776 0 4.1959-1.5456 5.2687-4.0365a0.53112 0.53112 0 0 0 0-0.4249zm-5.2687 3.3992c-1.6836 0-3.277-1.2163-4.1958-3.1867 0.91884-1.9705 2.5122-3.1867 4.1958-3.1867 1.6837 0 3.277 1.2163 4.1959 3.1867-0.91884 1.9705-2.5122 3.1867-4.1959 3.1867zm0-5.3112a2.1245 2.1245 0 1 0 2.1245 2.1245 2.1245 2.1245 0 0 0-2.1245-2.1245zm0 3.1867a1.0622 1.0622 0 1 1 1.0622-1.0622 1.0622 1.0622 0 0 1-1.0622 1.0622z" stroke-width=".53112"/></svg>', Vd = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z" fill-rule="evenodd"/> <path d="m13.291 7.7876c-1.0729-2.491-3.0911-4.0365-5.2687-4.0365-2.1776 0-4.1958 1.5456-5.2687 4.0365a0.53112 0.53112 0 0 0 0 0.4249c1.0729 2.491 3.0911 4.0365 5.2687 4.0365 2.1776 0 4.1959-1.5456 5.2687-4.0365a0.53112 0.53112 0 0 0 0-0.4249zm-5.2687 3.3992c-1.6836 0-3.277-1.2163-4.1958-3.1867 0.91884-1.9705 2.5122-3.1867 4.1958-3.1867 1.6837 0 3.277 1.2163 4.1959 3.1867-0.91884 1.9705-2.5122 3.1867-4.1959 3.1867zm0-5.3112a2.1245 2.1245 0 1 0 2.1245 2.1245 2.1245 2.1245 0 0 0-2.1245-2.1245zm0 3.1867a1.0622 1.0622 0 1 1 1.0622-1.0622 1.0622 1.0622 0 0 1-1.0622 1.0622z" stroke-width=".53112"/> <path d="m12.757 3.0055c-0.11087 0.0051358-0.22696 0.051177-0.33008 0.1543l-4.9883 4.9902c-0.061946 0.061947-0.086644 0.12038-0.097656 0.17773l-4.8184 4.8164c-0.1111 0.1111-0.1066 0.2109-0.10742 0.31445-3.5e-4 0.27663 0.22337 0.50035 0.5 0.5 0 0 0.18415 0.022881 0.33008-0.12305l4.9746-4.9727c0.06758-0.06758 0.10951-0.13979 0.13281-0.21289l4.7832-4.7832c0.36828-0.36828 0.017071-0.87967-0.37891-0.86133z" fill-rule="evenodd"/></svg>', zd = '<svg class="ov-icon" width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2"><path d="m14 15c0.55228 0 1-0.44772 1-1v-12c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1zm0-15c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2v-12c0-1.1046 0.89543-2 2-2z" fill-rule="evenodd"/><g transform="translate(-1.1585)" fill-rule="evenodd">  <path d="m8.2964 7.5-2.147-2.146c-0.472-0.472 0.236-1.18 0.708-0.708l3 3c0.19586 0.19536 0.19586 0.51264 0 0.708l-3 3c-0.472 0.472-1.18-0.236-0.708-0.708l2.147-2.146c0.41729-0.4311 0.42302-0.5239 0-1z"/>  <path d="m12.323 4.4996c0-0.66667-1-0.66667-1 0v7.0562c0 0.15712 0.07336 0.22403 0.146 0.29783 0.19536 0.19586 0.51264 0.19586 0.708 0 0 0 0.146-0.11381 0.146-0.32019z"/></g></svg>', Wd = '<svg class="ov-icon" width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2"><path d="m2 15c-0.55228 0-1-0.44772-1-1v-12c0-0.55228 0.44772-1 1-1h12c0.55228 0 1 0.44772 1 1v12c0 0.55228-0.44772 1-1 1zm0-15c-1.1046 0-2 0.89543-2 2v12c0 1.1046 0.89543 2 2 2h12c1.1046 0 2-0.89543 2-2v-12c0-1.1046-0.89543-2-2-2z" fill-rule="evenodd"/><g transform="matrix(-1 0 0 1 17.159 0)" fill-rule="evenodd">  <path d="m8.2964 7.5-2.147-2.146c-0.472-0.472 0.236-1.18 0.708-0.708l3 3c0.19586 0.19536 0.19586 0.51264 0 0.708l-3 3c-0.472 0.472-1.18-0.236-0.708-0.708l2.147-2.146c0.41729-0.4311 0.42302-0.5239 0-1z"/>  <path d="m12.323 4.4996c0-0.66667-1-0.66667-1 0v7.0562c0 0.15712 0.07336 0.22403 0.146 0.29783 0.19536 0.19586 0.51264 0.19586 0.708 0 0 0 0.146-0.11381 0.146-0.32019z"/></g></svg>', Gd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 336.96 336.36" xmlns="http://www.w3.org/2000/svg"><path d="m0 0 168.48 336.36 168.48-336.36z"/></svg>', qd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 336.96 336.36" xmlns="http://www.w3.org/2000/svg"><path d="m0 336.36 168.48-336.36 168.48 336.36z"/></svg>', jd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 70.67-28.66 134.68-74.99 181.01s-110.34 74.99-181.01 74.99c-70.68 0-134.69-28.66-181.01-74.99-46.33-46.33-74.99-110.34-74.99-181.01 0-70.68 28.66-134.69 74.99-181.01 46.32-46.33 110.33-74.99 181.01-74.99 70.67 0 134.68 28.66 181.01 74.99 46.33 46.32 74.99 110.33 74.99 181.01zm-204.29-21.97v-67.04c0-7.53-6.19-13.72-13.73-13.72h-75.96c-7.53 0-13.72 6.17-13.72 13.72v67.03h-42.84c-16.5 0-24.78 19.64-13.86 31.54l94.74 110.57c7.44 9 21.03 9.01 28.66 0.37l93.71-111.31c10.69-12.27 1.64-31.14-14.19-31.16h-42.81zm105.52 179.2c40.22-40.24 65.11-95.84 65.11-157.23 0-61.4-24.89-117-65.11-157.23-40.24-40.23-95.84-65.11-157.23-65.11-61.4 0-117 24.88-157.23 65.11s-65.11 95.83-65.11 157.23c0 61.39 24.88 116.99 65.11 157.23 40.23 40.22 95.83 65.11 157.23 65.11 61.39 0 116.99-24.89 157.23-65.11z" fill-rule="nonzero"/></svg>', Xd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0-70.67-28.66-134.68-74.99-181.01s-110.34-74.99-181.01-74.99c-70.68 0-134.69 28.66-181.01 74.99-46.33 46.33-74.99 110.34-74.99 181.01 0 70.68 28.66 134.69 74.99 181.01 46.32 46.33 110.33 74.99 181.01 74.99 70.67 0 134.68-28.66 181.01-74.99 46.33-46.32 74.99-110.33 74.99-181.01zm-204.29 21.97v67.04c0 7.53-6.19 13.72-13.73 13.72h-75.96c-7.53 0-13.72-6.17-13.72-13.72v-67.03h-42.84c-16.5 0-24.78-19.64-13.86-31.54l94.74-110.57c7.44-9 21.03-9.01 28.66-0.37l93.71 111.31c10.69 12.27 1.64 31.14-14.19 31.16zm105.52-179.2c40.22 40.24 65.11 95.84 65.11 157.23 0 61.4-24.89 117-65.11 157.23-40.24 40.23-95.84 65.11-157.23 65.11-61.4 0-117-24.88-157.23-65.11s-65.11-95.83-65.11-157.23c0-61.39 24.88-116.99 65.11-157.23 40.23-40.22 95.83-65.11 157.23-65.11 61.39 0 116.99 24.89 157.23 65.11z" fill-rule="nonzero"/></svg>', Yd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256c0-70.67-28.66-134.68-74.98-181.02C390.69 28.66 326.68 0 256 0S121.31 28.66 74.98 74.98C28.66 121.32 0 185.33 0 256c0 70.68 28.66 134.69 74.98 181.02C121.31 483.34 185.32 512 256 512c70.67 0 134.69-28.66 181.02-74.98C483.34 390.69 512 326.68 512 256zm-160.23-21.5h-43.38v-67.93c0-7.63-6.27-13.9-13.91-13.9H217.5c-7.62 0-13.9 6.25-13.9 13.9v67.92h-43.41c-16.71 0-25.11 19.9-14.05 31.96l96.01 112.05c7.54 9.12 21.31 9.12 29.04.37l94.96-112.8c10.83-12.43 1.66-31.55-14.38-31.57z"/></svg>', Kd = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 70.67-28.66 134.68-74.98 181.02-46.33 46.32-110.34 74.98-181.02 74.98s-134.69-28.66-181.02-74.98c-46.32-46.34-74.98-110.35-74.98-181.02 0-70.68 28.66-134.69 74.98-181.02 46.33-46.32 110.34-74.98 181.02-74.98 70.67 0 134.69 28.66 181.02 74.98 46.32 46.33 74.98 110.34 74.98 181.02zm-160.23 21.5h-43.38v67.93c0 7.63-6.27 13.9-13.91 13.9h-76.98c-7.62 0-13.9-6.25-13.9-13.9v-67.92h-43.41c-16.71 0-25.11-19.9-14.05-31.96l96.01-112.05c7.54-9.12 21.31-9.12 29.04-0.37l94.96 112.8c10.83 12.43 1.66 31.55-14.38 31.57z"/></svg>', Zd = '<svg width="800px" height="800px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  <defs>   <clipPath id="clipPath1">    <path d="m6.1885 15.281v-9.0209h3.1721q1.0764 0 1.6765 0.65299 0.63822 0.71345 0.63822 1.7171 0 0.58043-0.22862 1.0158-0.21909 0.42323-0.743 0.84646 1.1812 0.87065 1.1812 2.1887 0 0.53206-0.19051 1.0762-0.19051 0.53206-0.51439 0.87065-0.60964 0.65299-1.7908 0.65299zm1.467-7.4731v2.0315h1.5813q1.0383 0 1.0383-1.0158 0-1.0158-1.0383-1.0158zm0 3.5793v2.3459h1.7432q1.0859 0 1.0859-1.1609 0-1.185-1.0859-1.185zm9.6876-5.1271h1.467v6.1066q0 1.4874-0.69538 2.2854-0.80016 0.91902-2.1242 0.91902t-2.1242-0.91902q-0.69538-0.79809-0.69538-2.2854v-6.1066h1.4574v6.1066q0 1.6083 1.3622 1.6083 1.3526 0 1.3526-1.6083zm6.2108 5.6834v3.3375h-1.467v-3.3375l-2.3528-5.6834h1.6289l1.4479 3.9784 1.3622-3.9784h1.6384z" display="none" stroke-width=".041213" style="white-space:pre" aria-label="BUY"/>    <path class="powerclip" d="m-5-5h42v42.001h-42zm11.189 20.281h3.2006q1.1812 0 1.7908-0.65299 0.32387-0.33859 0.51439-0.87065 0.19051-0.54416 0.19051-1.0762 0-1.3181-1.1812-2.1887 0.52391-0.42323 0.743-0.84646 0.22862-0.43532 0.22862-1.0158 0-1.0037-0.63822-1.7171-0.60012-0.65299-1.6765-0.65299h-3.1721zm1.467-7.4731v2.0315h1.5813q1.0383 0 1.0383-1.0158 0-1.0158-1.0383-1.0158zm0 3.5793v2.3459h1.7432q1.0859 0 1.0859-1.1609 0-1.185-1.0859-1.185zm9.6876-5.1271v6.1066q0 1.6083-1.3526 1.6083-1.3622 0-1.3622-1.6083v-6.1066h-1.4574v6.1066q0 1.4874 0.69538 2.2854 0.80016 0.91902 2.1242 0.91902t2.1242-0.91902q0.69538-0.79809 0.69538-2.2854v-6.1066zm6.2108 5.6834 2.2576-5.6834h-1.6384l-1.3622 3.9784-1.4479-3.9784h-1.6289l2.3528 5.6834v3.3375h1.467z" stroke-width=".041213" style="white-space:pre"/>   </clipPath>  </defs>  <g clip-path="url(#clipPath1)" fill="none" fill-rule="evenodd">   <g id="Icon-Set" transform="translate(-360 -255)" fill="#000">    <path d="m386.67 255h-21.334c-2.945 0-5.333 2.371-5.333 5.297v12.33c0 2.924 2.055 4.813 5 4.813h6.639l4.361 9.561 4.361-9.561h6.639c2.945 0 5-1.889 5-4.813v-12.33c0-2.926-2.388-5.297-5.333-5.297z"/>   </g>  </g> </svg>', Qd = '<svg width="800px" height="800px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  <defs>   <clipPath id="clipPath4">    <path d="m10.026 8.6238h-1.2531q-0.06962-1.4148-1.3576-1.4148-0.51344 0-0.81803 0.30231-0.30458 0.30231-0.30458 0.81019 0 0.49579 0.25237 0.74972 0.26107 0.24185 0.97467 0.43532l1.0182 0.26603q0.90505 0.24185 1.3054 0.83437 0.40901 0.59252 0.40901 1.6566 0 1.3785-0.7049 2.1524-0.69619 0.77391-1.958 0.77391-1.2444 0-1.9406-0.76182-0.68749-0.77391-0.74841-2.225h1.2967q0.03481 0.72554 0.40901 1.1125t1.053 0.38696q0.60917 0 0.95727-0.32649 0.3568-0.32649 0.3568-0.89483 0-0.54416-0.27848-0.83437-0.27848-0.30231-0.94856-0.4716l-0.90505-0.25394q-0.99208-0.26603-1.4098-0.81019-0.41772-0.55625-0.41772-1.6083 0-1.3181 0.64398-2.0436 0.65268-0.73763 1.8188-0.73763 1.4185 0 2.0886 1.0278 0.46123 0.71345 0.46123 1.8743zm2.5672 2.3822v2.3459h3.5245v1.5478h-4.8559v-9.0209h4.6993v1.5478h-3.3678v2.0315h3.1155v1.5478zm5.9612-5.1271v7.4731h3.1068v1.5478h-4.4469v-9.0209zm5.439 0v7.4731h3.1068v1.5478h-4.4469v-9.0209z" display="none" stroke-width=".039392" style="white-space:pre" aria-label="SELL"/>    <path class="powerclip" d="m-5-5h42v42.001h-42zm15.026 13.624q0-1.1609-0.46123-1.8743-0.67009-1.0278-2.0886-1.0278-1.1661 0-1.8188 0.73763-0.64398 0.72554-0.64398 2.0436 0 1.052 0.41772 1.6083 0.41772 0.54416 1.4098 0.81019l0.90505 0.25394q0.67009 0.16929 0.94856 0.4716 0.27848 0.29022 0.27848 0.83437 0 0.56834-0.3568 0.89483-0.3481 0.32649-0.95727 0.32649-0.67879 0-1.053-0.38696-0.3742-0.38695-0.40901-1.1125h-1.2967q0.060917 1.4511 0.74841 2.225 0.69619 0.76182 1.9406 0.76182 1.2619 0 1.958-0.77391 0.7049-0.77391 0.7049-2.1524 0-1.0641-0.40901-1.6566-0.40031-0.59252-1.3054-0.83437l-1.0182-0.26603q-0.7136-0.19348-0.97467-0.43532-0.25237-0.25394-0.25237-0.74972 0-0.50788 0.30458-0.81019t0.81803-0.30231q1.288 0 1.3576 1.4148zm2.5672 2.3822h3.1155v-1.5478h-3.1155v-2.0315h3.3678v-1.5478h-4.6993v9.0209h4.8559v-1.5478h-3.5245zm5.9612-5.1271h-1.3402v9.0209h4.4469v-1.5478h-3.1068zm5.439 0h-1.3402v9.0209h4.4469v-1.5478h-3.1068z" stroke-width=".039392" style="white-space:pre"/>   </clipPath>  </defs>  <path d="m26.667 0h-21.334c-2.945 0-5.333 2.371-5.333 5.297v12.33c0 2.924 2.055 4.813 5 4.813h6.639l4.361 9.561 4.361-9.561h6.639c2.945 0 5-1.889 5-4.813v-12.33c0-2.926-2.388-5.297-5.333-5.297z" clip-path="url(#clipPath4)" fill-rule="evenodd"/> </svg>', Jd = '<svg width="493px" height="512px" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 493 511.77" xmlns="http://www.w3.org/2000/svg"><path d="m33.11 458.2 104.5-79.1c3.09-3 7.08-4.47 11.08-4.45l302.6-0.08c2.67 0 5.09-1.08 6.78-2.77 1.74-1.81 2.84-4.24 2.84-6.87v-323.2c0-2.59-1.12-5-2.86-6.74-1.78-1.78-4.2-2.9-6.76-2.9h-409.56c-2.54 0-4.94 1.14-6.72 2.92s-2.92 4.18-2.92 6.72c0 793.72 1.02 39.329 1.02 416.47zm90.6-229.77c10.9 0 19.74 8.85 19.74 19.74s-8.84 19.73-19.74 19.73c-10.89 0-19.73-8.84-19.73-19.73s8.84-19.74 19.73-19.74zm0-101.14c10.9 0 19.74 8.85 19.74 19.74s-8.84 19.74-19.74 19.74c-10.89 0-19.73-8.85-19.73-19.74s8.84-19.74 19.73-19.74zm61.72 138.89c-9.95 0-18.02-8.07-18.02-18.01 0-9.95 8.07-18.02 18.02-18.02h185.56c9.95 0 18.01 8.07 18.01 18.02 0 9.94-8.06 18.01-18.01 18.01zm0-101.13c-9.95 0-18.02-8.07-18.02-18.02 0-9.94 8.07-18.01 18.02-18.01h185.56c9.95 0 18.01 8.07 18.01 18.01 0 9.95-8.06 18.02-18.01 18.02zm-30.38 241.61-125.97 99.69c-2.96 3.32-7.24 5.42-12.01 5.42-8.85 0-17.07-7.1228-17.07-15.963v-454.08c0-11.4 4.77-21.88 12.31-29.42s18.02-12.31 29.42-12.31h409.56c11.4 0 21.9 4.74 29.45 12.29 7.5 7.51 12.26 17.96 12.26 29.44v323.2c0 11.48-4.7 21.95-12.24 29.49-7.61 7.54-18.05 12.24-29.47 12.24z" fill-rule="nonzero"/></svg>', em = '<svg width="800px" height="800px" fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.746 2.7281c-5.1207-2.0689-10.949 0.40512-13.018 5.5258-2.0689 5.1207 0.40512 10.949 5.5258 13.018 5.1207 2.0689 10.949-0.40508 13.018-5.5258 2.0689-5.1207-0.40508-10.949-5.5258-13.018zm-1.3378 8.3035-1.2703-0.51325c-0.21854-0.08829-0.32785-0.13246-0.3683-0.22775-0.04045-0.09529 0.0037-0.20461 0.09201-0.42314l1.6595-4.1073c0.33362-0.82575 0.50047-1.2387 0.33474-1.3523-0.16582-0.11359-0.49058 0.19103-1.1403 0.8003l-4.7426 4.4469c-1.0274 0.96338-1.541 1.445-1.4405 1.9835 0.10054 0.53837 0.75347 0.80216 2.0594 1.3298l1.2703 0.51325c0.21854 0.08829 0.32785 0.13246 0.3683 0.22775 0.04045 0.09529-0.0037 0.20461-0.09201 0.42314l-1.6595 4.1073c-0.33365 0.82582-0.50047 1.2387-0.33475 1.3523 0.16582 0.1136 0.49059-0.19104 1.1403-0.80025l4.7425-4.4469c1.0275-0.96346 1.5411-1.4451 1.4406-1.9836-0.10057-0.53838-0.75352-0.80218-2.0594-1.3298z" clip-rule="evenodd" fill-rule="evenodd"/></svg>', tm = '<svg enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <g>   <rect transform="scale(-1)" x="-15" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-36.25" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.1s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-57.5" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.3s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-78.75" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.5s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-100" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.1s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>  </g> </svg>', im = '<svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">   <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="3s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path> <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5  L82,35.7z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="2s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path>   <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="1s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path></svg>', lt = 300, li = 400, sm = `${li}px`, bl = `${lt}px`, wl = "100%", xl = "100%", Cl = 30, Fs = 35, ws = 25, Tl = 25, nm = ws + Tl, Hn = 60, Wi = "normal", kt = 12, Bs = "normal", Gi = "Avenir, Helvetica, Arial, sans-serif", pr = "Andalé, Lucida, Monaco, Courier", fr = "#141414", gr = "#333", yr = "#cccccc", gi = "#888888", Bt = "#cccccc", Sl = "25px", rm = "position: relative;", z = {
  COLOUR_BG: fr,
  COLOUR_BORDER: gr,
  COLOUR_TXT: yr,
  COLOUR_ICON: gi,
  COLOUR_ICONHOVER: Bt,
  BORDER_THICKNESS: 0,
  FONTWEIGHT: Wi,
  FONTSIZE: kt,
  FONTSTYLE: Bs,
  FONTFAMILY: Gi,
  FONT: `${Bs} ${kt}px ${Wi} ${Gi}`,
  FONTSTRING: `font-style: ${Bs}; font-size: ${kt}px; font-weight: ${Wi}; font-family: ${Gi};`
}, He = {
  fontSize: kt,
  fontWeight: Wi,
  fontFamily: Gi,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  paddingBottom: 2,
  borderWidth: 1,
  txtCol: "#000000",
  bakCol: "#cccccc",
  stroke: "#ffffff",
  fill: "#888888"
}, Ca = {
  "─────────": [],
  "┈┈┈┈┈┈┈┈┈": [1, 1],
  "- - - - -": [10, 10],
  "─ ─ ─ ─ ─": [20, 5],
  "─ ▪ ─ ▪ ─": [15, 3, 3, 3]
}, ht = {
  COLOUR_ICON: gi,
  COLOUR_ICONHOVER: Bt,
  ICONSIZE: Sl
}, $t = {
  COLOUR_ICON: gi,
  COLOUR_ICONHOVER: Bt,
  ICONSIZE: Sl
}, Us = {
  COLOUR_BG: fr,
  COLOUR_BORDER: gr,
  COLOUR_TXT: yr
}, at = {
  COLOUR_BG: fr,
  COLOUR_BORDER: gr,
  COLOUR_TXT: yr,
  SHADOW: "rgb(0,0,0) 0px 20px 30px -10px",
  CONTENT: "padding: 1em",
  TITLE: "padding: 2px 1em 5px; background: #333; white-space: nowrap;"
}, am = {
  FILL: Bt + "88"
}, be = {
  CANDLE_SOLID: "candle_solid",
  CANDLE_HOLLOW: "candle_hollow",
  CANDLE_UP_HOLLOW: "candle_up_hollow",
  CANDLE_DOWN_HOLLOW: "candle_down_hollow",
  OHLC: "ohlc",
  AREA: "area",
  LINE: "line"
}, Ri = {
  COLOUR_CANDLE_UP: "#00F04088",
  COLOUR_CANDLE_DN: "#F0004088",
  COLOUR_WICK_UP: "#0F4",
  COLOUR_WICK_DN: "#F04"
}, qi = {
  COLOUR_VOLUME_UP: "#00F04044",
  COLOUR_VOLUME_DN: "#F0004044",
  ONCHART_VOLUME_HEIGHT: 15
}, om = 1.75, Ta = 500, ji = kt + 2, Xi = pr, ke = {
  COLOUR_TICK: "#888",
  COLOUR_LABEL: "888",
  COLOUR_CURSOR: "#000",
  COLOUR_CURSOR_BG: "#CCC",
  FONTFAMILY: Xi,
  FONTSIZE: ji,
  FONTWEIGHT: Ta,
  FONT_LABEL: `${Ta} ${ji}px ${Xi}`,
  FONT_LABEL_BOLD: `bold ${ji}px ${Xi}`
}, Sa = 500, Pa = kt + 2, Ea = pr, wt = {
  COLOUR_TICK: "#888",
  COLOUR_LABEL: "888",
  COLOUR_CURSOR: "#000",
  COLOUR_CURSOR_BG: "#CCC",
  FONTFAMILY: Ea,
  FONTSIZE: Pa,
  FONTWEIGHT: Sa,
  FONT_LABEL: `${Sa} ${Pa}px ${Ea}`,
  FONT_LABEL_BOLD: `bold ${ji}px ${Xi}`
}, Pl = {
  COLOUR_GRID: "#222"
}, lm = {
  width: 1,
  stroke: "#ccc",
  dash: [1, 1]
}, Ma = {
  text: z.FONTSTRING,
  font: z.FONT,
  colour: z.COLOUR_TXT
}, ki = {
  ACTIVE: "#888888C0",
  IDLE: "#FFFFFF00",
  LINE: z.COLOUR_BORDER,
  STYLE: "2px solid"
}, hm = {
  FONTSIZE: 50,
  FONTWEIGHT: "bold",
  FONTFAMILY: z.FONTFAMILY,
  COLOUR: "#181818",
  IMGWIDTH: "200",
  IMGHEIGHT: "200"
}, cm = {
  passive: {
    stroke: "#000",
    fill: "#ccc",
    width: 1,
    radius: 6
  },
  hover: {
    stroke: "#800",
    fill: "#fff",
    width: 1,
    radius: 6
  },
  active: {
    stroke: "#800",
    fill: "#fff",
    width: 1,
    radius: 6
  }
}, Vs = { arrowDown: Gd, arrowUp: qd, arrowDownRound: jd, arrowUpRound: Xd, arrowDownRoundSolid: Yd, arrowUpRoundSolid: Kd, buySolid: Zd, sellSolid: Qd }, La = { noteSolid: Jd, lightning: em }, xs = {
  title: {
    display: !0
  },
  candle: {
    Type: be.CANDLE_SOLID,
    UpBodyColour: Ri.COLOUR_CANDLE_UP,
    UpWickColour: Ri.COLOUR_WICK_UP,
    DnBodyColour: Ri.COLOUR_CANDLE_DN,
    DnWickColour: Ri.COLOUR_WICK_DN
  },
  volume: {
    Height: qi.ONCHART_VOLUME_HEIGHT,
    UpColour: qi.COLOUR_VOLUME_UP,
    DnColour: qi.COLOUR_VOLUME_DN
  },
  xAxis: {
    colourTick: wt.COLOUR_TICK,
    colourLabel: wt.COLOUR_LABEL,
    colourCursor: wt.COLOUR_CURSOR,
    colourCursorBG: wt.COLOUR_CURSOR_BG,
    fontFamily: wt.FONTFAMILY,
    fontSize: wt.FONTSIZE,
    fontWeight: wt.FONTWEIGHT,
    line: "#656565",
    slider: "#555555",
    handle: "#55555588",
    icon: gi,
    iconHover: Bt
  },
  yAxis: {
    colourTick: ke.COLOUR_TICK,
    colourLabel: ke.COLOUR_LABEL,
    colourCursor: ke.COLOUR_CURSOR,
    colourCursorBG: ke.COLOUR_CURSOR_BG,
    fontFamily: ke.FONTFAMILY,
    fontSize: ke.FONTSIZE,
    fontWeight: ke.FONTWEIGHT,
    line: "#656565"
  },
  chart: {
    Background: z.COLOUR_BG,
    BorderColour: z.COLOUR_BORDER,
    BorderThickness: z.BORDER_THICKNESS,
    TextColour: z.COLOUR_TXT,
    FontWeight: z.FONTWEIGHT,
    FontSize: z.FONTSIZE,
    FontStyle: z.FONTSTYLE,
    FontFamily: z.FONTFAMILY,
    Font: z.FONT,
    FontString: z.FONTSTRING,
    GridColour: Pl.COLOUR_GRID
  },
  primaryPane: {
    separator: "#666"
  },
  secondaryPane: {
    separator: "#666"
  },
  tools: {
    location: !1
  },
  utils: {
    location: !1
  },
  time: {
    navigation: !1,
    font: pr,
    colour: "#96a9db",
    handleColour: "#586ea6"
  },
  legend: {
    font: Ma.font,
    colour: Ma.colour,
    controls: !0,
    controlsColour: "#aaa",
    controlsOver: "#fff",
    controlsW: 18,
    controlsH: 18
  },
  icon: {
    colour: gi,
    hover: Bt
  },
  divider: {
    active: ki.ACTIVE,
    idle: ki.IDLE,
    line: ki.LINE,
    style: ki.STYLE
  },
  window: at,
  watermark: hm,
  trades: {
    iconBuy: Vs.arrowUp,
    iconSell: Vs.arrowDown,
    iconHeight: 30,
    iconWidth: 30,
    iconMinDim: 10,
    buyColour: "#0f0",
    sellColour: "#f00",
    defaultIcons: Vs,
    offset: 10,
    positionLine: 1,
    positionStyle: "1px solid",
    positionDash: [1, 0],
    stopLossColour: "#fc0",
    stopLossLine: 1,
    stopLossStyle: "1px solid",
    stopLossDash: [1, 0],
    takeProfitColour: "#0cf",
    takeProfitLine: 1,
    takeProfitStyle: "1px solid",
    takeProfitDash: [1, 0]
  },
  events: {
    iconEvent: La.lightning,
    iconHeight: 30,
    iconWidth: 30,
    iconMinDim: 10,
    iconColour: "#ccc",
    defaultIcons: La,
    offset: 10
  },
  drawing: {
    node: cm
  }
}, um = `
<style id="txc_CSSVars">
  --txc-background: #141414:
  --txc-border-color: #888;
  --txc-time-scrollbar-color: #888;
  --txc-time-handle-color: #888;
  --txc-time-slider-color: #888;
  --txc-time-cursor-fore: #222;
  --txc-time-cursor-back: #ccc;
  --txc-time-icon-color: #888;
  --txc-time-icon-hover-color: #888;
</style>`, dm = `
<style id="txc_globalCSS">
  tradex-chart {
    content-visibility: auto;
    display: grid;
    width: var(--txc-width, 100%);
    height: var(--txc-height, 100%);
    min-width: var(--txc-min-width, ${sm});
    min-height: var(--txc-min-height, ${bl});
    max-width: var(--txc-max-width, ${wl});
    max-height: var(--txc-max-height, ${xl});
    overflow: hidden;
    background: var(--txc-background, ${z.COLOUR_BG});
    font: var(--txc-font, ${z.FONT});
  }
  .tradeXchart .tradeXtime .navigation { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 2px;
  }
  .tradeXchart .tradeXtime .navigation .icon { 
    flex-basis: 20px;
   }
  .tradeXchart .tradeXtime .navigation #tScrollBar { 
    height: 20px; 
    border: 1px solid; 
    border-radius: 3px; 
    flex-basis: 100%;
    overflow: hidden;
  }
  .tradeXchart .tradeXtime .navigation #tScrollBar .handle { 
    height: 18px; 
    border-radius: 2px; 
    margin: 1px;
  }

  tradex-grid {
    position: absolute;
  }
</style>
`, Aa = "initialEmptyState", zs = "Empty", El = {
  id: void 0,
  title: zs,
  symbol: zs,
  width: wl,
  height: xl,
  utils: {},
  tools: {},
  timeFrame: "1m",
  range: {
    startTS: void 0
  },
  theme: xs,
  watermark: {
    display: !1,
    text: zs
  },
  trades: {
    display: !0,
    displayInfo: !0
  },
  precision: To,
  isCrypto: !0,
  logs: !1,
  infos: !0,
  warnings: !0,
  highLow: !1,
  errors: !0,
  stream: {},
  maxCandleUpdate: 250,
  talib: void 0,
  wasm: void 0,
  state: {},
  callbacks: {}
};
class Ml {
  #e;
  #t;
  #i;
  constructor(e) {
    this.#t = e, this.#e = this.#t.core, this.#i = this.#e.Chart;
  }
  get core() {
    return this.#e;
  }
  get chart() {
    return this.#i;
  }
  get parent() {
    return this.#t;
  }
  get theme() {
    return this.#e.theme;
  }
  get width() {
    return this.#i.width;
  }
  get height() {
    return this.#i.height;
  }
  get data() {
    return this.#i.data;
  }
  get range() {
    return this.#i.range;
  }
  get yDigits() {
    return this.#i.yAxisDigits;
  }
}
class Yi extends Ml {
  #e = 4;
  #t;
  #i = !0;
  constructor(e) {
    super(e);
  }
  get range() {
    return this.parent.range;
  }
  get width() {
    return this.core.MainPane.width;
  }
  get interval() {
    return this.range.interval;
  }
  get intervalStr() {
    return this.range.intervalStr;
  }
  get timeStart() {
    return this.range.timeStart;
  }
  get timeFinish() {
    return this.range.timeFinish;
  }
  get rangeDuration() {
    return this.range.rangeDuration;
  }
  get rangeLength() {
    return this.range.Length;
  }
  get indexStart() {
    return this.range.indexStart;
  }
  get indexEnd() {
    return this.range.indexEnd;
  }
  get timeMax() {
    return this.range.timeMax;
  }
  get timeMin() {
    return this.range.timeMin;
  }
  get candleW() {
    return this.width / this.range.Length;
  }
  get candlesOnLayer() {
    return Ue(this.core.Chart.layerWidth / this.candleW);
  }
  get xAxisRatio() {
    return this.width / this.range.rangeDuration;
  }
  set xAxisTicks(e) {
    this.#e = P(e) ? e : 0;
  }
  get xAxisTicks() {
    return this.#e;
  }
  get xAxisGrads() {
    return this.#t;
  }
  get scrollOffsetPx() {
    return this.core.scrollPos % this.candleW;
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  xPos(e) {
    return Ue(this.range.rangeIndex(e) * this.candleW + this.candleW * 0.5);
  }
  t2Index(e) {
    return this.range.rangeIndex(e);
  }
  t2Pixel(e) {
    return this.xPos(e);
  }
  pixel2T(e) {
    let i = this.pixel2Index(e);
    return this.range.value(i)[0];
  }
  pixel2Index(e) {
    e -= this.candleW / 2;
    let i = this.range.indexStart, s = Ue(e / this.candleW);
    return i + s;
  }
  pixelOHLCV(e) {
    let i = this.pixel2Index(e);
    return this.range.value(i);
  }
  xPosSnap2CandlePos(e) {
    let i = e % this.candleW, s = i ? this.candleW / 2 : 0;
    return Ue(e - i + s);
  }
  xPos2Time(e) {
    return this.pixel2T(e);
  }
  xPos2Index(e) {
    return this.pixel2Index(e);
  }
  xPosOHLCV(e) {
    return this.pixelOHLCV(e);
  }
  initXAxisGrads() {
    this.#t = this.calcXAxisGrads();
  }
  doCalcXAxisGrads(e) {
    this.#t = this.calcXAxisGrads(e);
  }
  calcXAxisGrads(e = this.range.snapshot()) {
    const i = {
      entries: {},
      values: [],
      major: [],
      minor: []
    }, s = rr(e.rangeDuration);
    i.units = s;
    for (let f in s)
      if (s[f] > 0) {
        i.units = [f, f], i.timeSpan = `${s[f]} ${f}`;
        break;
      }
    const n = e.interval, { xStep: r, rank: o } = this.xStep(e), l = this.pixel2T(this.width) + r;
    let c = e.timeMin - e.timeMin % r - r, m = c;
    for (; c < l; ) {
      let f = Ui(c, "years"), C = Ui(c, "months"), M = Ui(c, "days");
      !(f in i.entries) && f >= m ? i.entries[f] = [this.dateTimeValue(f, n, o), this.t2Pixel(f), f, "major"] : !(C in i.entries) && C >= m ? i.entries[C] = [this.dateTimeValue(C, n, o), this.t2Pixel(C), C, "major"] : !(M in i.entries) && M >= m ? i.entries[M] = [this.dateTimeValue(M, n, o), this.t2Pixel(M), M, "major"] : i.entries[c] = [this.dateTimeValue(c, n, o), this.t2Pixel(c), c, "minor"], c += r;
    }
    return i.values = Object.values(i.entries), i;
  }
  xStep(e) {
    let i = wd, s = this.#i ? e.interval : 1, n = si[0], r = Ue(this.width / e.Length), o = Mn[0], l = si.indexOf(s);
    for (; l-- >= 0 && !(r * (si[l] / s) >= i); )
      ;
    return n = si[l], o = Mn[l], { xStep: n, rank: o };
  }
  dateTimeValue(e, i, s) {
    let n;
    if (e / q % 1 === 0) {
      const r = hr(e);
      return r === 1 ? cr(e) === 0 ? pl(e) : dl(e) : `${ul(e, n)} ${r}`;
    } else
      switch (s) {
        case "milliseconds":
          return On(e);
        case "seconds":
          return On(e);
        case "minutes":
          return An(e);
        case "hours":
          return An(e);
      }
  }
}
class hi extends Ml {
  #e;
  #t;
  #i;
  #s = R.percent;
  #n = "automatic";
  #r = {
    automatic: {
      get max() {
        return this.range?.valueMax;
      },
      get min() {
        return this.range?.valueMin;
      },
      get mid() {
        return this.range?.valueMin + this.range?.valueDiff * 0.5;
      },
      get diff() {
        return this.range?.valueDiff;
      },
      get zoom() {
        return 1;
      },
      get offset() {
        return 0;
      },
      get secondaryMaxMin() {
        return this.range?.secondaryMaxMin;
      },
      range: null
    },
    manual: {
      max: 1,
      min: 0,
      mid: 0.5,
      diff: 1,
      zoom: 1,
      offset: 0,
      secondaryMaxMin: {}
    }
  };
  #a = 1;
  #l = ba;
  #h = 3;
  #o;
  #c;
  #u;
  constructor(e, i, s = R.default, n) {
    super(e), this.#i = i, this.#e = e, this.#t = e.parent, this.yAxisType = R.valid(s), s == R.relative ? n = this.core.range : n = n || this.core.range, this.setRange(n);
  }
  get chart() {
    return this.#i;
  }
  get range() {
    return this.#u;
  }
  get height() {
    return this.chart.height;
  }
  get rangeH() {
    return this.#u.diff * this.yAxisPadding;
  }
  get yAxisRatio() {
    return this.getYAxisRatio();
  }
  get yAxisPrecision() {
    return this.yAxisCalcPrecision;
  }
  set yAxisPadding(e) {
    (P(e) || e != 0) && (this.#a = e);
  }
  get yAxisPadding() {
    return this.#a;
  }
  set yAxisType(e) {
    this.#s = R.valid(e);
  }
  get yAxisType() {
    return this.#s;
  }
  set yAxisStep(e) {
    this.#l = P(e) ? e : ba;
  }
  get yAxisStep() {
    return this.#l;
  }
  set yAxisTicks(e) {
    this.#h = P(e) ? e : 0;
  }
  get yAxisTicks() {
    return this.#h;
  }
  get yAxisGrads() {
    return this.#o;
  }
  get yAxisDigits() {
    return this.parent.digitCnt;
  }
  get step() {
    return this.#c;
  }
  set mode(e) {
    this.setMode(e);
  }
  get mode() {
    return this.#n;
  }
  set offset(e) {
    this.setOffset(e);
  }
  get offset() {
    return this.#u.offset;
  }
  set zoom(e) {
    this.setZoom(e);
  }
  get zoom() {
    return this.#u.zoom;
  }
  getYAxisRatio() {
    return this.height / this.#u.diff;
  }
  getMaxMinDiff() {
    let e = this.#u.max > 0 ? this.#u.max : 1, i = this.#u.min > 0 ? this.#u.min : 0, s = this.parent.parent, n = s.view[0]?.id, r = this.range.secondaryMaxMin || {}, o = this.#u;
    !s.isPrimary && n in r && (e = r[n]?.data?.max || 0, i = r[n]?.data?.min || 0, o = r[n]?.data || []), e == i && (e == 0 ? (e = 0.05, i = -0.05) : (e = e + e * 0.05, i = i + i * 0.05)), this.mode != "manual" && (e *= this.#a || 1, i *= 1 - (this.#a - 1) || 1);
    let l = e - i;
    return { max: e, min: i, diff: l, pane: o };
  }
  yAxisRangeBounds() {
  }
  yAxisLog() {
  }
  yAxisCntDigits(e) {
    return Bi(e);
  }
  yAxisCalcPrecision() {
    let e = Fo(this.#u.max);
    return this.yDigits - e;
  }
  yAxisCursor() {
  }
  yPos(e) {
    let i;
    switch (this.yAxisType) {
      case R.relative:
        i = this.val2Pixel(e);
        break;
      case R.percent:
        i = this.p100toPixel(e);
        break;
      case R.log:
        i = this.$2Pixel(Au(e));
        break;
      default:
        i = this.$2Pixel(e);
        break;
    }
    return Ue(i);
  }
  val2Pixel(e) {
    let i;
    if (this.parent.parent.isPrimary)
      i = this.$2Pixel(e);
    else {
      let n = this.height, { min: r, diff: o } = this.getMaxMinDiff();
      i = n - n * ((e - r) / o);
    }
    return i;
  }
  $2Pixel(e) {
    const i = e - this.#u.min;
    return this.height - i * this.yAxisRatio;
  }
  lastYData2Pixel(e) {
    let i = e - this.core.stream.lastPriceMin;
    return this.height - i * this.yAxisRatio;
  }
  p100toPixel(e) {
    return this.$2Pixel(e);
  }
  yPos2Price(e) {
    return this.pixel2$(e);
  }
  pixel2Val(e) {
    return this.pixel2$(e);
  }
  pixel2$(e) {
    let { min: i, diff: s } = this.getMaxMinDiff(), n = (this.height - e) / this.height, r = s * n;
    return i + r;
  }
  yAxisTransform() {
  }
  setMode(e) {
    if (!["automatic", "manual"].includes(e)) return !1;
    let i = this.#r.manual;
    return this.mode == "automatic" && e == "manual" ? (i.max = this.#u.valueMax, i.min = this.#u.valueMin, i.diff = i.max - i.min, i.zoom = 0, i.secondaryMaxMin = K(this.#u.secondaryMaxMin), this.#n = e, this.core.emit("yaxis_setmode", { mode: e, axis: this })) : this.mode == "manual" && e == "automatic" && (i.zoom = 0, this.#n = e, this.core.emit("yaxis_setmode", { mode: e, axis: this })), !0;
  }
  transformPrimarySecondary() {
    let e = this.#r.manual;
    if (this.#s != R.percent && !this.parent.parent.isPrimary) {
      let { pane: i } = this.getMaxMinDiff();
      e = i;
    }
    return e;
  }
  setOffset(e) {
    if (!P(e) || e == 0 || this.#n !== "manual") return !1;
    let i = this.transformPrimarySecondary(), s = this.pixel2Val(e * -1), n = this.pixel2Val(this.height - e), r = s - n;
    i.min = n, i.max = s, i.mid = r / 2, i.diff = r, i.zoom = 0;
  }
  setZoom(e) {
    if (!P(e) || this.#n !== "manual") return !1;
    let i = this.#r.manual, { max: s, min: n, diff: r, pane: o } = this.getMaxMinDiff();
    const l = r * 0.01, c = e * l;
    n -= c, s += c, !(s < n || n <= 1 / 0 * -1 || s >= 1 / 0) && (o.min -= c, o.max += c, i.max = s, i.min = n, i.mid = r / 2, i.diff = r, i.zoom = c);
  }
  setRange(e) {
    this.#r.automatic.range = e, this.#u = new Proxy(e, {
      get: (i, s) => {
        const n = this.#n, r = this.#r[n], o = r[s];
        switch (s) {
          case "max":
            return o;
          case "min":
            return o;
          case "mid":
            return r.min + (r.max - r.min);
          case "diff":
            return r.max - r.min;
          case "zoom":
            return o;
          case "offset":
            return o;
          case "secondaryMaxMin":
            return o;
          default:
            return i[s];
        }
      }
    });
  }
  calcGradations() {
    let e, i, s, n;
    switch (i = this.#u.max > 0 ? this.#u.max : 1, s = this.#u.min > 0 ? this.#u.min : 0, this.yAxisType) {
      case R.percent:
        i = this.#u.max > -10 ? this.#u.max : 110, s = this.#u.min > -10 ? this.#u.min : -10;
        break;
      case R.relative:
        e = this.getMaxMinDiff(), i = e.max, s = e.min;
        break;
    }
    return n = this.#u.offset, this.#o = this.gradations(i + n, s + n), this.#o;
  }
  gradations(e, i, s = !0) {
    let n, r = [], o = e - i, l = this.niceNumber(o), c = Math.ceil(i / l) * l, m = Math.floor(e / l) * l, f = this.height, C = Bi(l), M;
    this.#c = C;
    for (var L = c; L <= m; L += l)
      n = Bi(L), M = Pn(L, C.decimals) * 1, f = this.yPos(M), r.push([M, f, n]);
    return r;
  }
  niceNumber(e = this.rangeH) {
    const i = e / (this.height / (this.core.theme.yAxis.fontSize * om));
    let s = Math.pow(10, Math.ceil(Math.log10(i)));
    return i < 0.25 * s ? s = 0.25 * s : i < 0.5 * s && (s = 0.5 * s), s;
  }
}
function vr(a, e) {
  return Math.round(a.measureText(e).width);
}
function Vt(a = He.fontSize, e = He.fontWeight, i = He.fontFamily) {
  return `${e} ${a}px ${i}`;
}
function Cs(a, e, i) {
  a.font = Vt(i?.fontSize, i?.fontWeight, i?.fontFamily);
  const s = vr(a, e), n = i?.paddingLeft || 0, r = i?.paddingRight || 0, o = i?.borderWidth || 0;
  return n + r + s + o * 2;
}
function Ts(a) {
  const e = a?.paddingTop || 0, i = a?.paddingBottom || 0, s = a?.borderWidth || 0, n = a?.fontSize || 0;
  return e + i + n + s * 2;
}
function Ll(a, e, i, s) {
  a.fillStyle = s?.colour, a.font = Vt(s?.fontSize, s?.fontWeight, s?.fontFamily), a.textAlign = s?.textAlign || "start", a.textBaseline = s?.textBaseLine || "alphabetic", a.direction = s?.direction || "inherit", a.lineWidth = s?.width, a.strokeStyle = s?.border, s?.stroke ? a.strokeText(s?.text, e, i, s?.max) : a.fillText(s?.text, e, i, s?.max);
}
function Ut(a, e, i, s, n) {
  a.save(), a.font = Vt(n?.fontSize, n?.fontWeight, n?.fontFamily), a.textBaseline = "top", a.fillStyle = n?.bakCol || He.bakCol;
  let r = n?.width || Cs(a, e, n), o = n?.height || Ts(n);
  a.fillRect(i, s, r, o), a.fillStyle = n?.txtCol || He.txtCol, i = i + n?.paddingLeft, s = s + n?.paddingTop, a.fillText(`${e}`, i, s), a.restore();
}
function Al(a, e, i, s, n, r) {
  a.lineWidth = r?.width || He.borderWidth, a.strokeStyle = r?.border || He.stroke, a.beginPath(), a.rect(e, i, s, n), a.stroke();
}
function Ss(a, e, i, s, n, r) {
  a.fillStyle = r?.fill || He.fill, a.fillRect(e, i, s, n);
}
function br(a, e, i, s, n, r) {
  T(r.fill) && Ss(a, e, i, s, n, r), P(r.width) && r.width > 0 && Al(a, e, i, s, n, r);
}
function Ol(a, e, i, s, n, r, o) {
  a.lineWidth = o?.width || He.borderWidth, a.strokeStyle = o?.border || He.stroke, Il(a, e, i, s, n, r), a.stroke();
}
function Dl(a, e, i, s, n, r, o) {
  a.fillStyle = o?.fill || He.fill, Il(a, e, i, s, n, r), a.fill();
}
function Il(a, e, i, s, n, r) {
  a.beginPath(), a.moveTo(e + r, i), a.arcTo(e + s, i, e + s, i + n, r), a.arcTo(e + s, i + n, e, i + n, r), a.arcTo(e, i + n, e, i, r), a.arcTo(e, i, e + s, i, r), a.closePath();
}
function mm(a, e, i, s, n, r, o) {
  T(o.fill) && Dl(a, e, i, s, n, r, o?.fill), P(o.width) && o.width > 0 && Ol(a, e, i, s, n, r, o?.border, o?.width);
}
function Ki(a, e = [], i = []) {
  let [s, n, r, o] = e;
  const l = a.createLinearGradient(s, n, r, o);
  let c = 0, m = 1 / (i.length - 1);
  for (let f of i)
    l.addColorStop(c, f), c += m;
  a.fillStyle = l;
}
function Mt(a, e, i, s) {
  T(e) && (a.fillStyle = e, a.fill()), P(s) && s > 0 && (a.lineWidth = s, a.strokeStyle = i || He.stroke, a.stroke());
}
function Nl(a, e, i, s, n, r, o) {
  if (!(n < 3)) {
    var l = Math.PI * 2 / n;
    a.beginPath(), a.translate(e, i), a.rotate(r * Math.PI / 180), a.moveTo(s, 0);
    for (var c = 1; c < n; c++)
      a.lineTo(s * Math.cos(l * c), s * Math.sin(l * c));
    a.closePath(), Mt(a, o?.fill, o?.stroke, o?.width);
  }
}
function pm(a, e, i) {
  if (e.length > 0) {
    a.beginPath();
    var s = e[0];
    a.moveTo(s.x, s.y);
    for (var n = 1; n < e.length; ++n)
      s = e[n], a.lineTo(s.x, s.y);
    a.closePath(), Mt(a, i?.fill, i?.stroke, i?.width);
  }
}
function fm(a, e, i, s, n) {
  Nl(a, e, i, s, 3, n?.rotate || 0, n), Mt(a, n?.fill, n?.stroke, n?.width);
}
function gm(a, e, i, s, n, r) {
  a.beginPath(), a.moveTo(e - s / 2, i), a.lineTo(e, i - n / 2), a.lineTo(e + s / 2, i), a.lineTo(e, i + n / 2), a.closePath(), Mt(a, r?.fill, r?.stroke, r?.width);
}
function zt(a, e, i, s = () => {
}) {
  a.save();
  const n = i.width || 1;
  a.lineWidth = n, n % 2 && a.translate(0.5, 0.5), a.strokeStyle = i.stroke;
  let r = i?.dash;
  T(r) && (r = r.split(",")), E(r) && a.setLineDash(r), a.beginPath();
  let o = !0;
  e.forEach((l) => {
    l && l.x !== null && (o ? (a.moveTo(l.x, l.y), o = !1) : a.lineTo(l.x, l.y));
  }), I(s) && s(), a.restore();
}
function ym(a, e, i) {
  zt(a, e, i, () => {
    a.stroke();
  });
}
function vm(a, e, i, s) {
  zt(a, e, i, () => {
    a.closePath();
  }), Mt(a, s?.fill, s?.stroke, s?.size);
}
function bm(a, e, i) {
  a.beginPath(), a.moveTo(e[0].x, e[0].y);
  for (var s = i ?? 1, n = 0; n < e.length - 1; n++) {
    var r = n > 0 ? e[n - 1] : e[0], o = e[n], l = e[n + 1], c = n != e.length - 2 ? e[n + 2] : l, m = o.x + (l.x - r.x) / 6 * s, f = o.y + (l.y - r.y) / 6 * s, C = l.x - (c.x - o.x) / 6 * s, M = l.y - (c.y - o.y) / 6 * s;
    a.bezierCurveTo(m, f, C, M, l.x, l.y);
  }
  a.stroke();
}
function Pt(a, e, i, s, n = {}) {
  zt(a, [{ x: i, y: e }, { x: s, y: e }], n, () => {
    a.stroke(), a.closePath();
  });
}
function wm(a, e, i, s, n = {}) {
  zt(a, [{ x: e, y: i }, { x: e, y: s }], n, () => {
    a.stroke(), a.closePath();
  });
}
function xm(a, e, i = {}) {
  zt(a, e, i, () => {
    a.stroke(), a.closePath();
  });
}
function Cm(a, e, i, s, n) {
  a.beginPath(), a.arc(e, i, s, 0, Math.PI * 2), a.closePath(), Mt(a, n?.fill, n?.stroke, n?.width);
}
function wr(a, e, i, s, n, r) {
  for (let o = 0; o < i; o++)
    for (let l = 0; l < s; l++)
      l % 2 == 0 && o % 2 == 0 || l % 2 != 0 && o % 2 != 0 ? a.fillStyle = n : a.fillStyle = r, a.fillRect(l * e, o * e, e, e);
}
function Tm(a) {
  br(a, x, y, w, h, opts);
}
class ei {
  #e = {};
  constructor() {
  }
  on(e, i, s) {
    return !T(e) || !I(i) ? !1 : (this.#e[e] || (this.#e[e] = []), this.#e[e].push({ handler: i, context: s }), !0);
  }
  off(e, i, s) {
    if (!T(e) || !I(i) || !(e in this.#e)) return !1;
    const n = this.#e[e];
    for (let r = 0; r < n.length; r++)
      if (n[r].handler === i) {
        if (s !== void 0 && n[r].context !== s)
          continue;
        if (n.splice(r, 1), n.length === 0) {
          delete this.#e[e];
          break;
        }
      }
    return !0;
  }
  expunge(e) {
    let i, s = this.#e;
    for (i in s)
      for (let n = 0; n < s[i].length; n++)
        if (s[i][n].context === e && (s[i].splice(n, 1), s[i].length === 0)) {
          delete s[i];
          break;
        }
    return !0;
  }
  emit(e, i) {
    T(e) && (this.#e[e] || []).forEach(
      (s) => {
        try {
          s.handler.call(s.context, i);
        } catch (n) {
          console.error(n);
        }
      }
    );
  }
  execute(e, i, s) {
  }
}
class J extends HTMLElement {
  static #e = [];
  static set observedAttributes(e) {
    E(e) && (J.#e = e);
  }
  static get observedAttributes() {
    return J.#e;
  }
  #t;
  #i;
  #s;
  ID = se(ut);
  doInit = !0;
  intersectionObserver;
  mutationObserver;
  resizeObserver;
  DOM = {
    width: 0,
    height: 0,
    style: {}
  };
  oldDOM = {};
  subscribers = {
    resize: [],
    mutation: [],
    intersection: []
  };
  constructor(e, i = "open") {
    super(), this.#s = new ei(), this.#i = e, this.#t = this.attachShadow({ mode: i });
  }
  destroy() {
  }
  connectedCallback(e) {
    this.doInit && (this.doInit = !1, this.shadowRoot.appendChild(this.template.content.cloneNode(!0)), this.DOM.width = this.clientWidth, this.DOM.height = this.clientHeight, this.oldDOM.width = this.clientWidth, this.oldDOM.height = this.clientHeight, this.intersectionObserver = new IntersectionObserver(this.onResize.bind(this)), this.intersectionObserver.observe(this), this.resizeObserver = new ResizeObserver(this.onResize.bind(this)), this.resizeObserver.observe(this), I(e) && e());
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  get shadowRoot() {
    return this.#t;
  }
  get template() {
    return this.#i;
  }
  get hub() {
    return this.#s;
  }
  get width() {
    return this.DOM.width;
  }
  set width(e) {
    this.setDim(e, "width");
  }
  get oWidth() {
    return this.oldDOM.width;
  }
  get height() {
    return this.DOM.height;
  }
  set height(e) {
    this.setDim(e, "height");
  }
  get oHeight() {
    return this.oldDOM.height;
  }
  get widthDeltaR() {
    return this.DOM.width / this.oldDOM.width;
  }
  get heightDeltaR() {
    return this.DOM.height / this.oldDOM.height;
  }
  set top(e) {
    this.setPos(e, "top");
  }
  get top() {
    return this.DOM.top;
  }
  set left(e) {
    this.setPos(e, "left");
  }
  get left() {
    return this.DOM.left;
  }
  set bottom(e) {
    this.setPos(e, "bottom");
  }
  get bottom() {
    return this.DOM.bottom;
  }
  set right(e) {
    this.setPos(e, "right");
  }
  get right() {
    return this.DOM.right;
  }
  get dimensions() {
    return this.DOM;
  }
  set cursor(e) {
    this.style.cursor = e;
  }
  get cursor() {
    return this.style.cursor;
  }
  setDim(e, i) {
    !["width", "height", "top", "bottom", "left", "right"].includes(i) || !T(e) || (P(e) ? (this.DOM[i] = e, e += "px") : T(e) ? e.match(ii) || (e = "100%") : (this.DOM[i] = this.parentElement.getBoundingClientRect()[i], e = this.DOM[i] + "px"), this.style[i] = e);
  }
  setPos(e, i) {
    this.setDim(e, i);
  }
  getDims() {
    const e = this.getBoundingClientRect();
    for (let i in e) {
      const s = e[i];
      I(s) || (this.DOM[i] = s);
    }
    return this.DOM.visible = Et(this), this.DOM.viewport = Yn(this), this.DOM;
  }
  onIntersection(e) {
    this.emit("intersection", this);
  }
  onMutation(e) {
    this.emit("mutation", this);
  }
  onResize(e) {
    this.oldDOM = { ...this.DOM }, this.getDims(), this.emit("resize", this.DOM);
  }
  on(e, i, s = this) {
    return this.#s instanceof ei ? this.#s.on(e, i, s) : !1;
  }
  off(e, i, s = this) {
    return this.#s instanceof ei ? this.#s.off(e, i, s) : !1;
  }
  expunge(e) {
    return this.#s instanceof ei ? this.#s.expunge(e) : !1;
  }
  emit(e, i) {
    return this.#s instanceof ei ? this.#s.emit(e, i) : !1;
  }
}
const Rl = document.createElement("template");
Rl.innerHTML = `
<style>
  input[type="range"][orient="vertical"] {
    writing-mode: bt-lr;
    appearance: slider-vertical;
    padding: 0;
    margin: 0;
    border: 0;
  }
</style>
<div class="slider">
</div>
`;
const Sm = ["min", "max", "value", "step", "orient", "width", "height"];
class Pm extends J {
  #e;
  #t;
  #i;
  #s = 1;
  #n;
  #r = {};
  constructor() {
    super(Rl);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        for (let e of Sm) {
          let i = this.getAttribute(e);
          i && (this.#r[e] = i);
        }
        this.#t = this.shadowRoot.querySelector(".slider"), this.mount(), this.#i = this.shadowRoot.querySelector("#s1"), this.#i.addEventListener("input", this.#a.bind(this));
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  set value(e) {
    this.#r.value = e;
  }
  get value() {
    return this.#r.value;
  }
  set min(e) {
    this.#r.min = e;
  }
  get min() {
    return this.#r.min;
  }
  set max(e) {
    this.#r.max = e;
  }
  get max() {
    return this.#r.max;
  }
  set step(e) {
    this.#r.step = e;
  }
  get step() {
    return this.#r.step;
  }
  #a(e) {
    this.value = e.target.value;
    const i = new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      cancelable: !0,
      composed: !1
    });
    this.dispatchEvent(i);
  }
  mount() {
    const s = { id: `s${this.#s}`, klass: "", ...this.#r };
    this.#t.innerHTML = this.insertRange(s);
  }
  insertRange({ id: e, klass: i, min: s, max: n, value: r, step: o, orient: l, width: c, height: m }) {
    let f = "";
    return f += c ? `width: ${c}px; ` : "", f += m ? `height: ${m}px; ` : "", `<input type="range" id="${e}" class="${i}" style="${f}" min="${s}" max="${n}" value="${r}" step="${o}" orient="${l}" width="${c}" height="${m}"/>`;
  }
}
customElements.get("tradex-slider") || window.customElements.define("tradex-slider", Pm);
const kl = ["source-over", "source-atop", "source-in", "source-out", "destination-over", "destination-atop", "destination-in", "destination-out", "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], xr = typeof OffscreenCanvas < "u", Em = ["2d", "webgl", "webgl2d", "webgl2", "webgpu", "bitmaprenderer"];
let $l = class {
  #e = 0;
  #t;
  #i;
  #s;
  #n;
  constructor(e = {}) {
    if (!W(e?.container)) throw new Error("Viewport container is not a valid HTML element.");
    this.#n = e.container, this.#s = [], this.#t = oe.idCnt++, this.#i = new oe.Scene(e);
    const i = this.#n.getBoundingClientRect();
    this.setSize(i.width, i.height);
  }
  get id() {
    return this.#t;
  }
  get scene() {
    return this.#i;
  }
  get layers() {
    return this.#s;
  }
  get container() {
    return this.#n;
  }
  get OffscreenCanvas() {
    return xr;
  }
  generateKey() {
    return this.#e++;
  }
  setSize(e, i) {
    let { width: s, height: n } = Cr(e, i);
    return this.width = s, this.height = n, this.scene.setSize(s, n), this.layers.forEach(function(r) {
      r.setSize(s, n);
    }), this;
  }
  addLayer(e) {
    return e instanceof _n ? (this.layers.push(e), e.setSize(e.width || this.width, e.height || this.height), e.viewport = this, this) : !1;
  }
  removeLayer(e) {
    return e instanceof _n ? (this.layers.splice(e.index, 1), !0) : !1;
  }
  getIntersection(e, i) {
    for (var s = this.layers, n = s.length - 1, r, o; n >= 0; ) {
      if (r = s[n], o = r.hit.getIntersection(e, i), o >= 0)
        return o;
      n--;
    }
    return -1;
  }
  get index() {
    let e = oe.viewports, i, s = 0;
    for (i of e) {
      if (this.id === i.id) return s;
      s++;
    }
    return null;
  }
  destroy() {
    for (let e of this.layers)
      this.removeLayer(e), e.destroy();
  }
  render(e = !1) {
    let { scene: i, layers: s } = this, n;
    i.clear();
    for (n of s)
      if (e && E(n.layers) && n.layers.length > 0 && n.render(e), n.visible && n.width > 0 && n.height > 0) {
        const r = i.context;
        kl.includes(n?.composition) && (r.globalCompositeOperation = n.composition), r.globalAlpha = n.alpha, r.scale(1, 1), r.drawImage(
          n.scene.canvas,
          n.x,
          n.y,
          n.width,
          n.height
        );
      }
  }
};
class Mm extends $l {
  constructor(e = {}) {
    const i = { ...e };
    i.offscreen = !1, super(i);
    const s = this.scene.canvas, n = e.container;
    n?.hasCanvasSlot && (s.slot = "viewportCanvas"), n.innerHTML = "", n.appendChild(s), oe.viewports.push(this);
  }
  destroy() {
    super.destroy(), this.container.innerHTML = "", oe.viewports.splice(this.index, 1);
  }
}
class _n {
  #e = 0;
  #t = 0;
  #i = 0;
  #s = 0;
  #n = 1;
  #r = !0;
  #a = null;
  #l = xr;
  viewport;
  constructor(e = {}) {
    const i = { ...e };
    this.id = oe.idCnt++, this.#l = j(e?.offscreen) ? e.offscreen : this.#l, i.layer = this, i.offscreen = this.#l, this.hit = new oe.Hit(i), this.scene = new oe.Scene(i), e?.x && e?.y && this.setPosition(e.x, e.y), e?.width && e?.height && this.setSize(e.width, e.height), e?.composition && (this.setComposition = e.composition), e?.alpha && (this.alpha = e.alpha), e?.visible && (this.visible = e.visible);
  }
  set x(e) {
    P(e) && (this.#e = e);
  }
  get x() {
    return this.#e;
  }
  set y(e) {
    P(e) && (this.#t = e);
  }
  get y() {
    return this.#t;
  }
  set width(e) {
    P(e) && (this.#i = e);
  }
  get width() {
    return this.#i;
  }
  set height(e) {
    P(e) && (this.#s = e);
  }
  get height() {
    return this.#s;
  }
  set alpha(e) {
    this.#n = P(e) ? B(e, 0, 1) : 1;
  }
  get alpha() {
    return this.#n;
  }
  set composition(e) {
    kl.includes(e) && (this.#a = e);
  }
  get composition() {
    return this.#a;
  }
  set visible(e) {
    j(e) && (this.#r = e);
  }
  get visible() {
    return this.#r;
  }
  get isOffScreen() {
    return this.#l;
  }
  get index() {
    let e = this.viewport.layers, i = 0, s;
    for (s of e) {
      if (this.id === s.id) return i;
      i++;
    }
    return null;
  }
  setPosition(e, i) {
    return this.x = e, this.y = i, this;
  }
  setSize(e, i) {
    let { width: s, height: n } = Cr(e, i);
    return this.width = s, this.height = n, this.scene.setSize(s, n), this.hit.setSize(s, n), this;
  }
  move(e) {
    let { index: i = 0, viewport: s } = this, n = s.layers, r;
    switch (typeof e == "number" && (r = B(Math.floor(e), (n.length - 1) * -1, n.length - 1), e = "order"), e) {
      case "up":
        i < n.length - 1 && (n[i] = n[i + 1], n[i + 1] = this);
        break;
      case "down":
        i > 0 && (n[i] = n[i - 1], n[i - 1] = this);
        break;
      case "top":
        n.splice(i, 1), n.push(this);
        break;
      case "bottom":
        n.splice(i, 1), n.unshift(this);
        break;
      case "order":
        zo(n, this.index, r);
        break;
    }
    return this;
  }
  moveUp() {
    return this.move("up");
  }
  moveDown() {
    return this.move("down");
  }
  moveTop() {
    return this.move("top");
  }
  moveBottom() {
    return this.move("bottom");
  }
  remove() {
    return this.viewport.removeLayer(this);
  }
  destroy() {
    _l(1, 1), this.scene.clear(), this.hit.clear();
  }
}
class Hl {
  #e;
  #t = 0;
  #i = 0;
  #s;
  #n = !0;
  #r;
  #a;
  #l;
  constructor(e = { offscreen: !0 }) {
    this.#e = oe.idCnt++, this.#l = e?.layer, this.#a = Em.includes(e?.contextType) ? e.contextType : "2d";
    const i = document.createElement("canvas");
    i.className = "scene-canvas", i.style.display = "block", e.offscreen = j(e?.offscreen) ? e.offscreen : !0, xr && e.offscreen ? (this.#s = i.transferControlToOffscreen(), this.#n = !0) : (this.#s = i, this.#n = !1), this.#a == "webgl2d" ? this.#r = this.getContext("2d") : this.#r = this.getContext(this.contextType), e?.width && e?.height && this.setSize(e.width, e.height);
  }
  get id() {
    return this.#e;
  }
  set width(e) {
    P(e) && (this.#t = e);
  }
  get width() {
    return this.#t;
  }
  set height(e) {
    P(e) && (this.#i = e);
  }
  get height() {
    return this.#i;
  }
  get canvas() {
    return this.#s;
  }
  get offscreen() {
    return this.#n;
  }
  get contextType() {
    return this.#a;
  }
  get context() {
    return this.#r;
  }
  get layer() {
    return this.#l;
  }
  setSize(e, i) {
    return _l(e, i, this);
  }
  clear() {
    return Om(this);
  }
}
class Lm extends Hl {
  constructor(e = { offscreen: !0 }) {
    super(e);
  }
  getContext(e) {
    return this.canvas.getContext(e);
  }
  toImage(e = "image/png", i, s) {
    let n = this, r = new Image(), o = this.canvas.toDataURL(e, i);
    r.onload = function() {
      r.width = n.width, r.height = n.height, s(r);
    }, r.src = o;
  }
  export(e, i, s = "image/png", n) {
    typeof i != "function" && (i = this.blobCallback.bind({ cfg: e })), this.canvas.toBlob(i, s, n);
  }
  exportHit(e, i, s = "image/png", n) {
    typeof i != "function" && (i = this.blobCallback.bind({ cfg: e })), this.layer.hit.canvas.toBlob(i, s, n);
  }
  blobCallback(e) {
    let i = document.createElement("a"), s = URL.createObjectURL(e), n = this.cfg.fileName || "canvas.png";
    i.setAttribute("href", s), i.setAttribute("target", "_blank"), i.setAttribute("download", n), document.createEvent ? Object.assign(document.createElement("a"), {
      href: s,
      target: "_blank",
      download: n
    }).click() : i.click && i.click();
  }
}
class Am extends Hl {
  constructor(e = {}) {
    super(e);
  }
  getContext(e) {
    return this.canvas.getContext(e, {
      preserveDrawingBuffer: !0,
      antialias: !1
    });
  }
  getIntersection(e, i) {
    let s = this.context, n;
    if (e = Math.round(e - this.layer.x), i = Math.round(i - this.layer.y), e < 0 || i < 0 || e > this.width || i > this.height)
      return -1;
    if (this.contextType === "2d") {
      if (n = s.getImageData(e, i, 1, 1).data, n[3] < 255)
        return -1;
    } else if (n = new Uint8Array(4), s.readPixels(
      e * oe.pixelRatio,
      (this.height - i - 1) * oe.pixelRatio,
      1,
      1,
      s.RGBA,
      s.UNSIGNED_BYTE,
      n
    ), n[0] === 255 && n[1] === 255 && n[2] === 255)
      return -1;
    return this.rgbToInt(n);
  }
  getIndexValue(e) {
    let i = this.intToRGB(e);
    return "rgb(" + i[0] + ", " + i[1] + ", " + i[2] + ")";
  }
  rgbToInt(e) {
    let i = e[0], s = e[1], n = e[2];
    return (i << 16) + (s << 8) + n;
  }
  intToRGB(e) {
    let i = (e & 16711680) >> 16, s = (e & 65280) >> 8, n = e & 255;
    return [i, s, n];
  }
}
function Om(a) {
  let e = a.context;
  return a.contextType === "2d" ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, a.canvas.width, a.canvas.height), e.restore()) : e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), a;
}
function Cr(a, e) {
  return a < 0 && (a = 0), e < 0 && (e = 0), { width: a, height: e };
}
function _l(a, e, i) {
  let { width: s, height: n } = Cr(a, e);
  const r = window.devicePixelRatio || 1;
  return i.width = s, i.height = n, i.offscreen ? (i.canvas.width = Math.round(s * r), i.canvas.height = Math.round(n * r), i.contextType === "2d" && i.context.setTransform(r, 0, 0, r, 0, 0)) : (i.canvas.style.width = `${s}px`, i.canvas.style.height = `${n}px`, i.canvas.width = Math.round(s * r), i.canvas.height = Math.round(n * r), i.contextType === "2d" && i.context.setTransform(r, 0, 0, r, 0, 0)), i.contextType !== "2d" && i.contextType !== "bitmaprenderer" && i.context.viewport(0, 0, i.canvas.width, i.canvas.height), i;
}
const oe = {
  idCnt: 0,
  viewports: [],
  pixelRatio: window && window.devicePixelRatio || 1,
  Node: $l,
  Viewport: Mm,
  Layer: _n,
  Scene: Lm,
  Hit: Am
}, ls = 128, Ws = 20, ct = [
  "#263238",
  "#B71C1C",
  "#BF360C",
  "#FF6F00",
  "#827717",
  "#194D33",
  "#006064",
  "#0D47A1",
  "#311B92",
  "#880E4F",
  "#455A64",
  "#D32F2F",
  "#E64A19",
  "#FFA000",
  "#AFB42B",
  "#388E3C",
  "#0097A7",
  "#1976D2",
  "#512DA8",
  "#C2185B",
  "#607D8B",
  "#F44336",
  "#FF5722",
  "#FFC107",
  "#CDDC39",
  "#4CAF50",
  "#00BCD4",
  "#2196F3",
  "#673AB7",
  "#E91E63",
  "#90A4AE",
  "#E57373",
  "#FF8A65",
  "#FFD54F",
  "#DCE775",
  "#81C784",
  "#4DD0E1",
  "#64B5F6",
  "#9575CD",
  "#F06292",
  "#CFD8DC",
  "#FFCDD2",
  "#FFCCBC",
  "#FFECB3",
  "#F0F4C3",
  "#C8E6C9",
  "#B2EBF2",
  "#BBDEFB",
  "#D1C4E9",
  "#F8BBD0"
], Fl = document.createElement("template");
Fl.innerHTML = `
<style>
  .colourpicker {
    display: grid;
    grid-template-columns: [first] ${ls}px [second] ${Ws}px;
    grid-template-rows: [mixer] 2em [fields] 2em [swatches] 1fr;
    row-gap: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: ${at.SHADOW};
    background: #ccc;
    color: #444;
    padding: 5px;
  }
  .hex {
    font-weight: bold;
  }
  .number {
    width: 2em;
  }
  .colval {
    width: 6em;
  }

  .default .mixer {
    display: none;
  }

  .mixer {
    position: relative;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .mixer .viewport {
    position: absolute;
  }
  .mixer .checks {
    top: 0;
    left: 0;
  }
  .mixer .rgbv {
    top: 0;
    left: 0;
    opacity: 1;
  }

  .palette {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 3;
    display: flex;
    width: 150px;
    flex-flow: wrap;
    justify-content: space-around;
    row-gap: 2px;
    column-gap: 2px;
  }
  .palette button {
    width: 12px;
    height: 12px;
    border: 1px;
    border-radius: 3px;
  }

  tradex-slider[orient="vertical"] {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: span 3;
    width: ${Ws}px;
  }
  tradex-slider[orient="horizontal"] {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    width: ${Ws}px;
  }

  span {
    grid-column-start: 2;
    grid-row-start: 1;
    padding-left: .5em;
    padding-top: .25em;
    font-weight: bold;
  }

  .fields {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .fields input {
    border: 1px solid #888;
    border-radius: 3px;
    font-size: ${z.FONTSIZE};
  }

</style>
<div class="colourpicker default">
  <tradex-slider max="255" min="0" step="1" value="255" orient="horizontal" width="${ls}" ></tradex-slider>
  <span>A</span>
  <div class="fields">
    <input type="text" class="colval"/>
    <button class="submit ok">OK</button>
  </div>
</div>
`;
class re {
  static opened = new re("opened");
  static active = new re("active");
  static closed = new re("closed");
  constructor(e) {
    this.name = e;
  }
}
class Dm extends J {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  #d;
  #m;
  #p;
  #g;
  #y = {
    size: ls
  };
  #b;
  #x;
  #w = {};
  #f = re.closed;
  #S = { cfg: "default" };
  constructor() {
    super(Fl);
  }
  destroy() {
    this.#e.remove();
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#b = new pt("#f00"), this.#e = this.shadowRoot.querySelector(".colourpicker"), this.build(), this.#t = this.shadowRoot.querySelector(".mixer"), this.#i = this.shadowRoot.querySelector(".palette"), this.#a = this.shadowRoot.querySelector(".alpha"), this.#l = this.shadowRoot.querySelector(".submit"), this.#d = this.shadowRoot.querySelector(".colval"), this.#m = this.shadowRoot.querySelector(".rgbv"), this.#p = this.shadowRoot.querySelector(".checker"), this.#g = this.shadowRoot.querySelector("tradex-slider");
        const e = (i) => {
          this.setColour(i.target.value), this.#x.dispatchEvent(new Event("change"));
        };
        this.#d.addEventListener("change", e), this.#l.addEventListener("click", this.close.bind(this)), this.#g.addEventListener("input", this.#v.bind(this)), this.#g.addEventListener("pointerup", this.#v.bind(this));
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  get elMixer() {
    return this.#t;
  }
  get elPalette() {
    return this.#i;
  }
  get elColVal() {
    return this.#d;
  }
  get elModel() {
    return this.#n;
  }
  get elRGB() {
    return this.#r;
  }
  get elAlpha() {
    return this.#a;
  }
  get elSubmit() {
    return this.#l;
  }
  set colour(e) {
    this.setColour(e);
  }
  get colour() {
    return this.#b;
  }
  set target(e) {
    this.#x = e;
  }
  get target() {
    return this.#x;
  }
  set state(e) {
    e instanceof re && (this.#f = e);
  }
  get state() {
    return this.#f;
  }
  setColour(e) {
    let i;
    return T(e) ? (i = new pt(e), i.isValid ? (this.#b = i, this.#d.value = i.value.hexa, this.#g.value = Math.floor(255 * i.value.a), W(this.#x) && (this.#x.value = i.value.hexa, this.#x.dispatchEvent(new Event("change"))), this.#m.style.opacity = i.value.a, !0) : !1) : !1;
  }
  setAlpha(e) {
    let i = (e * 1).toString(16).toUpperCase();
    i = ("00" + i).slice(-2);
    let s = this.#b.hex + i;
    this.setColour(s);
  }
  #v(e) {
    this.setAlpha(e.target.value);
  }
  onOutsideClickListener(e) {
    if (!this.contains(e.target) && this.state === re.opened && (this.state = re.active, this.classList.toggle("active"), document.removeEventListener("click", this.#w.click), delete this.#w.click), !this.contains(e.target) && e.target?.type === "color" && (this.state === re.closed || this.state === re.active))
      this.state = re.opened, this.classList.add("active"), this.setColour(e.target.value), e.preventDefault();
    else if (!this.contains(e.target) && e.target.tagName === "LABEL" && this.state === re.closed) {
      const i = e.target.htmlFor, s = e.target.parentElement.querySelector(`#${i}`);
      s?.type === "color" && (this.state = re.opened, this.classList.add("active"), this.setColour(s.value), e.preventDefault());
    } else !this.contains(e.target) && e.target.tagName === "LABEL" && this.state === re.opened ? (this.state = re.closed, this.classList.remove("active"), e.preventDefault()) : this.contains(e.target) || (this.state = re.closed, this.classList.remove("active"));
  }
  onCanvasClick(e) {
    const i = e.clientX, s = e.clientY, n = this.#y.mixer.layers.rgbv.hit.getIntersection(i, s), r = this.#y.mixer.layers.rgbv.hit.getIndexValue(n);
    console.log(r);
  }
  position(e, i, s) {
    if (!P(e) || !P(i) || !W(s))
      return !1;
    this.top = i, this.left = e;
  }
  open(e, i, s) {
    return this.state !== re.closed ? !1 : (s?.cfg == "gradient" || (this.#S.cfg == "default", this.#g.setAttribute("orient", "horizontal"), this.#g.setAttribute("width", ls), this.#g.setAttribute("height", "")), this.setColour(e), this.target = i, this.state = re.opened, this.classList.add("active"), setTimeout(() => {
      this.#w.click = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#w.click);
    }, 250), !0);
  }
  close() {
    this.state = re.closed, this.classList.remove("active");
  }
  build() {
    this.#e.appendChild(this.mixerNode()), this.#e.appendChild(this.paletteNode());
  }
  paletteNode() {
    let e = "";
    for (let n of ct)
      e += `<button style="background: ${n};" data-colour="${n}"></button>`;
    const i = document.createElement("div");
    i.classList.add("palette"), i.style.display = "flex", i.innerHTML = e;
    const s = i.querySelectorAll("button");
    for (let n of s)
      n.addEventListener("click", (r) => {
        const o = r.target.getAttribute("data-colour");
        this.colour = o, this.#x.value = o, this.#x.dispatchEvent(new Event("change"));
      });
    return i;
  }
  mixerNode() {
    return this.canvasNode("mixer");
  }
  canvasNode(e) {
    const i = document.createElement("div");
    i.classList.add(e), i.addEventListener("click", this.onCanvasClick.bind(this));
    const s = this.viewportNode("checks");
    i.appendChild(s.container);
    const n = this.viewportNode("rgbv");
    i.appendChild(n.container), s.container.style.cursor = "url(), 0, 0, copy";
    const r = s.viewport, o = n.viewport, l = {}, c = this.#y.size, m = { x: 0, y: 0, width: c, height: c };
    this.#y.layers = l, this.#y.view = r, l.grid = new oe.Layer(m), r.addLayer(l.grid), l.rgbv = new oe.Layer(m), o.addLayer(l.rgbv), this.#y[e] = { element: i, viewport: s, layers: l };
    let f = l.rgbv.scene.context, C = [0, 0, c, 0];
    return Ki(f, C, ["#f00f", "#ff0f", "#0f0f", "#0fff", "#00ff", "#f0ff", "#f00f"]), f.fillRect(0, 0, c, c), f = l.rgbv.scene.context, C = [0, 0, 0, c], Ki(f, C, ["#fff", "#0000", "#000"]), f.fillRect(0, 0, c, c), f = l.grid.scene.context, wr(f, 8, 16, 16, "#fff", "#ccc"), r.render(), o.render(), i;
  }
  viewportNode(e) {
    const i = document.createElement("div");
    i.classList.add("viewport"), i.classList.add(e);
    const s = new oe.Viewport({
      width: this.#y.size,
      height: this.#y.size,
      container: i
    }), n = s.scene.canvas;
    return { viewport: s, container: i, canvas: n };
  }
  colourValueNode() {
    return "";
  }
  colourModelNode() {
    return "";
  }
  rgbSliderNode() {
    return "";
  }
  alphaSliderNode() {
    return "";
  }
  submitNode() {
    return "";
  }
  gradient(e, i, s, n) {
    Ki(e, [0, 0, 0, 0], [i, s]);
  }
  compositeLayers() {
    const e = this.#y.layers, i = ["rgb", "value"], s = e.rgbv.scene.context;
    for (let o of i)
      s.drawImage(
        e[o].scene.canvas,
        e[o].x,
        e[o].y,
        e[o].width,
        e[o].height
      );
    const n = e.composite.scene.context, r = "rgbv";
    n.globalAlpha = 1 / (255 / this.#b.a), n.drawImage(
      e[r].scene.canvas,
      e[r].x,
      e[r].y,
      e[r].width,
      e[r].height
    );
  }
  inputColorUpgrade(e) {
    if (!W(e)) return !1;
    const i = this.inputColorReplacement();
    e.style.display = "none", e.insert.insertAdjacentElement("afterend", i);
  }
  inputColorReplacement() {
  }
}
customElements.get("tradex-colourpicker") || window.customElements.define("tradex-colourpicker", Dm);
const Bl = document.createElement("template"), Fn = 24, Oa = Fn;
Bl.innerHTML = `
<style>
  .swatch {
    display: inline-block;
    position: relative;
  }
  .swatch,
  .swatch .overlay {
    width: ${Fn}px;
    height: ${Oa}px;
  }
  .swatch canvas,
  .swatch .overlay {
    position: absolute;
    top: 0;
    left: 0;
  }
  input {
    width: 6em;
    vertical-align: super;
  }
  tradex-colourpicker {
    display: none;
    position: absolute;
    z-index: 1;
  }
  tradex-colourpicker.active {
    display: block;
  }
</style>
<div class="colourInput">
  <div class="swatch">
    <canvas width="${Fn}" height="${Oa}"></canvas>
    <div class="overlay"></div>
  </div>
  <input minlength="4" maxlength="9" pattern="#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})">
  <tradex-colourpicker></tradex-colourpicker>
</div>
`;
class Im extends J {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  constructor() {
    super(Bl);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#r = this.shadowRoot.querySelector("tradex-colourpicker"), this.#r.style.display = "", this.#t = this.shadowRoot.querySelector(".swatch"), this.#i = this.shadowRoot.querySelector("canvas"), this.#s = this.shadowRoot.querySelector(".overlay"), this.#n = this.shadowRoot.querySelector("input"), this.height = this.getAttribute("height") * 1 || this.height, this.width = this.getAttribute("width") * 1 || this.width, this.setTarget(), this.eventsListen();
        const e = this.#i.getContext("2d");
        wr(e, 8, 16, 16, "#fff", "#ccc");
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#e.removeEventListener("change", this.onTargetChange.bind(this));
  }
  set target(e) {
    T(e) && this.setTarget(e);
  }
  get target() {
    return this.#e;
  }
  setTarget(e) {
    if (W(this.#e) && this.#e.removeEventListener("change", this.onTargetChange.bind(this)), T(e))
      this.#e = document.getElementById(e), this.setAttribute("target", e);
    else if (W(e))
      this.#e = e, this.setAttribute("target", e.id);
    else return !1;
    const i = this.#e;
    if (W(i) && i.type == "text") {
      const s = i.id, n = i.parentElement, r = i.value, o = `
            <input type="text" id="${s}" minlength="4" maxlength="9" style="display:none" value="${r}"/>
            `;
      i.insertAdjacentElement("afterend", this), i.insertAdjacentHTML("beforebegin", o), i.id = "";
      const l = n.querySelector(`#${s}`);
      return l.addEventListener("change", this.onTargetChange.bind(this)), this.#n.value = r, this.#s.style.background = r, this.#r.setColour(r), this.#e.remove(), this.#e = l, !0;
    }
    return !1;
  }
  eventsListen() {
    this.#t.addEventListener("click", this.onSwatchClick.bind(this));
  }
  onSwatchClick(e) {
    this.openPicker();
  }
  onTargetChange(e) {
    const i = new String(e.target.value);
    i !== this.#r.colour.value.rgba && (this.#r.setColour(i), this.#n.value = i, this.#s.style.background = i);
  }
  openPicker() {
    this.#r.open(this.#e.value, this.#e);
  }
  closePicker() {
    this.#r.close();
  }
}
customElements.get("tradex-colourinput") || window.customElements.define("tradex-colourinput", Im);
const Nm = "#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})", Da = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i, Ia = /^hsla?((\d{1,3}?),\s*(\d{1,3}%),\s*(\d{1,3}%)(,\s*[01]?\.?\d*)?)$/, Na = /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/, Ra = /^rgba?((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?)$/, ka = /^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/;
class pt {
  #e = {
    r: null,
    g: null,
    b: null,
    a: null,
    h: null,
    s: null,
    l: null,
    v: null,
    r16: null,
    g16: null,
    b16: null,
    a16: null,
    hex: null,
    hexa: null,
    hsl: null,
    hsla: null,
    rgb: null,
    rgba: null,
    isValid: !1
  };
  constructor(e) {
    this.#t(e), Da.test(e) && this.#i(e), Ia.test(e) && this.#s(e), Na.test(e) && this.#n(e), Ra.test(e) && this.#r(e), ka.test(e) && this.#a(e);
  }
  get value() {
    return this.#e;
  }
  get isValid() {
    return this.#e.isValid;
  }
  get hex() {
    return this.#e.hex;
  }
  get hexa() {
    return this.#e.hexa;
  }
  #t(e) {
    if (!T(e)) {
      this.#e.isValid = !1;
      return;
    }
    if (Bc) {
      let i = document.getElementById("divValidColourTest");
      i || (i = document.createElement("div"), i.id = "divValidColourTest"), i.style.backgroundColor = "", i.style.backgroundColor = e, this.#e.isValid = !!i.style.backgroundColor.length, i.remove();
    } else
      this.#e.isValid = !!(Da.test(e) || Ia.test(e) || Na.test(e) || Ra.test(e) || ka.test(e));
  }
  setHex(e) {
    let i = this.#e;
    [
      i.r16,
      i.g16,
      i.b16,
      i.a16
    ] = e, i.hex = `#${i.r16}${i.g16}${i.b16}`, i.hexa = `#${i.r16}${i.g16}${i.b16}${i.a16}`;
  }
  setRGBA(e) {
    let i = this.#e;
    [
      i.r,
      i.g,
      i.b,
      i.a
    ] = e, i.rgb = `rgb(${e[0]},${e[1]},${e[2]})`, i.rgba = `rgb(${e[0]},${e[1]},${e[2]},${e[3]})`;
  }
  setHSLA(e) {
    let i = this.#e;
    [
      i.h,
      i.s,
      i.l,
      i.a
    ] = e, i.hsl = `hsl(${e[0]},${e[1]}%,${e[2]}%)`, i.hsla = `hsl(${e[0]},${e[1]}%,${e[2]}%,${e[3]})`;
  }
  #i(e) {
    let i = e.length, s;
    switch (i) {
      case 4:
        s = [`${e[1]}${e[1]}`, `${e[2]}${e[2]}`, `${e[3]}${e[3]}`, "ff"];
        break;
      case 7:
        s = [e.substr(1, 2), e.substr(3, 2), e.substr(5, 2), "ff"];
        break;
      case 9:
        s = [e.substr(1, 2), e.substr(3, 2), e.substr(5, 2), e.substr(7, 2)];
        break;
    }
    this.setHex(s), this.#u(s), this.#d(s);
  }
  #s(e) {
    this.#e.hsl = e;
  }
  #n(e) {
    this.#e.hsla = e;
  }
  #r(e) {
    this.#e.rgb = e, this.#p(rgba);
  }
  #a(e) {
    this.#e.rgba = e, this.#p(e);
  }
  #l(e) {
    let { r: i, g: s, b: n, a: r } = this.#m(e);
    return i.length == 1 && (i = "0" + i), s.length == 1 && (s = "0" + s), n.length == 1 && (n = "0" + n), r.length == 1 && (r = "0" + r), this.value.r = i, this.value.g = s, this.value.b = n, this.value.a = r, this.setHex([i, s, n, r]), this;
  }
  #h(e) {
    let { r: i, g: s, b: n, a: r } = this.#m(e);
    i = parseInt(i, 16) / 255, s = parseInt(s, 16) / 255, n = parseInt(n, 16) / 255, r = parseInt(r, 16) / 255;
    const o = Math.max(i, s, n), l = o - Math.min(i, s, n), c = l ? o === i ? (s - n) / l : o === s ? 2 + (n - i) / l : 4 + (i - s) / l : 0;
    let m = [
      (60 * c < 0 ? 60 * c + 360 : 60 * c).toString(),
      (100 * (l ? o <= 0.5 ? l / (2 * o - l) : l / (2 - (2 * o - l)) : 0)).toString(),
      (100 * (2 * o - l) / 2).toString(),
      r.toString()
    ];
    return this.setHSLA(m), this;
  }
  #o(e, i, s) {
    i /= 100, s /= 100;
    const n = (l) => (l + e / 30) % 12, r = i * Math.min(s, 1 - s), o = (l) => s - r * Math.max(-1, Math.min(n(l) - 3, Math.min(9 - n(l), 1)));
    return [255 * o(0), 255 * o(8), 255 * o(4)];
  }
  #c(e, i, s) {
    s /= 100;
    const n = i * Math.min(s, 1 - s) / 100, r = (o) => {
      const l = (o + e / 30) % 12, c = s - n * Math.max(Math.min(l - 3, 9 - l, 1), -1);
      return Math.round(255 * c).toString(16).padStart(2, "0");
    };
    return `#${r(0)}${r(8)}${r(4)}`;
  }
  #u(e) {
    T(e) && (e = /([a-f\d]{2})/ig.exec(e));
    var i = [
      parseInt(e[0], 16),
      parseInt(e[1], 16),
      parseInt(e[2], 16),
      parseInt(e[3], 16) / 255
    ];
    this.setRGBA(i);
  }
  #d(e) {
    T(e) && (e = /([a-f\d]{2})/ig.exec(e));
    let i = parseInt(e[0], 16), s = parseInt(e[1], 16), n = parseInt(e[2], 16), r = parseInt(e[3], 16);
    i /= 255, s /= 255, n /= 255, r /= 255, this.setHSLA([i, s, n, r]);
  }
  #m(e) {
    let i, s, n, r, o = this.#e;
    if (o.r && o.g && o.b && o.a) return { r: i, g: s, b: n, a: r } = { ...o };
    if (T(e)) {
      let l = e.indexOf(",") > -1 ? "," : " ";
      e = e.substr(4).split(")")[0].split(l);
    }
    if (E(e)) {
      if (e.length < 3 || e.length > 4) return !1;
      i = e[0], s = e[1], n = e[2], r = T(e[3]) ? e[3] : "";
    } else if (v(e))
      i = e.r, s = e.g, n = e.b, r = "a" in e ? e.a : "";
    else return !1;
    return { r: i, g: s, b: n, a: r };
  }
  #p(e) {
    let i, s, n = 0, r = [], o = [], l = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    l.shift();
    for (let c of l)
      s = c.indexOf("%") > -1, i = parseFloat(c), n < 3 && s ? i = Math.round(255 * i / 100) : n == 3 && (!s && i >= 0 && i <= 1 ? i = Math.round(255 * i) : s && i >= 0 && i <= 100 ? i = Math.round(255 * i / 100) : i = ""), r[n] = (i | 256).toString(16).slice(1), o[n++] = i;
    this.setHex(r), this.setRGBA(o), this.#d(this.#e.hexa);
  }
}
class Rm {
  #e = [10, 5];
  #t = ct;
  #i = [];
  constructor(e = [10, 5], i = ct) {
    this.#e = this.validateMatrix(e) ? e : this.#e, this.#t = this.validateColours(i) ? i : this.#t;
  }
  get matrix() {
    return this.#e;
  }
  get colours() {
    return this.#t;
  }
  get entries() {
    return this.#i;
  }
  validateMatrix(e) {
    return E(e) && e.length == 2 && N(e[0]) && N(e[1]);
  }
  validateColours(e) {
    if (!E(e) || e.length != this.#e[0] * this.#e[1])
      return !1;
    const i = [];
    for (let s of e) {
      let n = new pt(s);
      if (!n.isValid) return !1;
      i.push(n);
    }
    return this.#i = i, !0;
  }
}
function Ul(a, e, i, s, n, r, o, l, c, m) {
  a.drawImage(e, i, s, n, r, o, l, c, m);
}
function Vl(a, e) {
  let i = a.naturalWidth || a.width, s = a.naturalHeight || a.height;
  return e === void 0 && (e = zl(i, s)), e.ctx.drawImage(a, 0, 0), e;
}
const Gs = {
  red: "#FF0000FF",
  green: "#00FF00FF",
  blue: "#0000FFFF",
  alpa: "#000000FF"
};
function Tt(a, e) {
  const i = Vl(e), s = i.ctx;
  let n;
  if (Object.keys(Gs).includes(a))
    n = Gs[a];
  else {
    let r = new pt(a);
    n = r.isValid ? r.hexa : Gs.alpa;
  }
  return s.fillStyle = n, s.globalCompositeOperation = "multiply", s.fillRect(0, 0, s.canvas.width, s.canvas.height), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0), s.globalCompositeOperation = "source-over", i;
}
function km(a) {
  return {
    red: Tt("red", a),
    green: Tt("green", a),
    blue: Tt("blue", a),
    alpha: Tt("alpha", a)
  };
}
function zl(a, e) {
  const i = document.createElement("canvas");
  return i.ctx = i.getContext("2d", { willReadFrequently: !0 }), i.width = a || i.ctx.canvas.width, i.height = e || i.ctx.canvas.height, i;
}
const Y = {
  Colour: pt,
  createCanvas: zl,
  imageToCanvas: Vl,
  separateRGB: km,
  fillMask: Tt,
  fillStroke: Mt,
  linearGradient: Ki,
  calcTextWidth: vr,
  createFont: Vt,
  getTextRectHeight: Ts,
  getTextRectWidth: Cs,
  renderImage: Ul,
  renderText: Ll,
  renderTextBG: Ut,
  renderPath: zt,
  renderPathStroke: ym,
  renderPathClosed: vm,
  renderSpline: bm,
  renderLine: xm,
  renderLineHorizontal: Pt,
  renderLineVertical: wm,
  renderCircle: Cm,
  renderRect: br,
  renderRectFill: Ss,
  renderRectStroke: Al,
  renderRectRound: mm,
  renderRectRoundFill: Dl,
  renderRectRoundStroke: Ol,
  renderPolygonRegular: Nl,
  renderPolygonIrregular: pm,
  renderDiamond: gm,
  renderTriangle: fm,
  renderCheckerBoard: wr,
  chartBar: Tm
};
class Wl {
  areaCoordinates = [];
  constructor(e, i) {
    this.scene = e, this.ctx = this.scene.context, this.width = this.scene.width, this.cfg = i, this.dpr = window.devicePixelRatio || 1;
  }
  alignToPixel(e) {
    return Math.round(e * this.dpr) / this.dpr;
  }
  draw(e) {
    const i = this.ctx, s = this.cfg, n = e.raw[4] >= e.raw[1], r = n ? s.candle.UpBodyColour : s.candle.DnBodyColour, o = n ? s.candle.UpWickColour : s.candle.DnWickColour;
    switch (s.candle.Type) {
      case be.CANDLE_SOLID:
        this.fill = !0;
        break;
      case be.CANDLE_HOLLOW:
      case be.OHLC:
        this.fill = !1;
        break;
      case be.CANDLE_UP_HOLLOW:
        this.fill = !n;
        break;
      case be.CANDLE_DOWN_HOLLOW:
        this.fill = n;
        break;
    }
    let l = yi(e.w, this.dpr);
    const c = Math.floor(e.w * 0.1);
    l = this.alignToPixel(l, c);
    const m = this.alignToPixel(e.x), f = m - l / 2;
    let C = Math.abs(e.o - e.c), M = e.c === e.o ? 1 : 2, L = this.alignToPixel(C);
    if (i.save(), i.strokeStyle = o, i.lineWidth = 1, i.beginPath(), i.moveTo(m, this.alignToPixel(e.h)), s.candle.Type === be.OHLC ? i.lineTo(m, this.alignToPixel(e.l)) : (n ? (i.lineTo(m, this.alignToPixel(e.c)), i.moveTo(m, this.alignToPixel(e.o))) : (i.lineTo(m, this.alignToPixel(e.o)), i.moveTo(m, this.alignToPixel(e.c))), i.lineTo(m, this.alignToPixel(e.l))), i.stroke(), l <= 3 * this.dpr) {
      i.fillStyle = o;
      let D = n ? 1 : -1;
      i.fillRect(
        f,
        this.alignToPixel(e.c),
        l,
        D * Math.max(L, M)
      );
    } else if (this.fill) {
      i.fillStyle = r;
      let D = n ? 1 : -1;
      i.fillRect(
        f,
        this.alignToPixel(e.c),
        l,
        D * Math.max(L, M)
      );
    } else if (!this.fill && s.candle.Type !== be.OHLC) {
      let D = n ? 1 : -1;
      i.strokeRect(
        f,
        this.alignToPixel(e.c),
        l,
        D * Math.max(L, M)
      );
    } else s.candle.Type === be.OHLC ? (i.beginPath(), i.moveTo(f, this.alignToPixel(e.o)), i.lineTo(m, this.alignToPixel(e.o)), i.moveTo(m, this.alignToPixel(e.c)), i.lineTo(m + l / 2, this.alignToPixel(e.c)), i.stroke()) : (i.strokeStyle = o, i.beginPath(), i.moveTo(
      m,
      this.alignToPixel(Math.min(e.o, e.c))
    ), i.lineTo(
      m,
      this.alignToPixel(Math.max(e.o, e.c)) + (e.o === e.c ? 1 : 0)
    ), i.stroke());
    i.restore();
  }
  area(e) {
    this.areaCoordinates.push(e);
  }
  areaRender() {
    const e = this.areaCoordinates;
    if (!E(e) || e.length == 0) return;
    let i = this.ctx, s = this.cfg.candle, n, r = Math.max(e[0].w - 1, 1);
    r = yi(r, this.dpr), this.alignToPixel(r * 0.5), this.alignToPixel(e[0].x);
    let o = [this.alignToPixel(e[0].x), this.alignToPixel(e[0].h)];
    i.save(), i.strokeStyle = s.AreaLineColour || s.UpBodyColour || s.DnBodyColour, i.lineWidth = 1, i.beginPath(), i.moveTo(o[0], o[1]);
    for (let l = 0; l < e.length; l++)
      i.lineTo(
        this.alignToPixel(e[l].x),
        this.alignToPixel(e[l].h)
      );
    if (s?.Type == "area") {
      if (n = i.createLinearGradient(0, 0, 0, this.scene.height), E(s.AreaFillColour))
        for (let [l, c] of s.AreaFillColour.entries())
          n.addColorStop(l, c);
      else T(s.AreaFillColour) ? n = s.AreaFillColour : n = s.UpBodyColour || s.DnBodyColour;
      i.stroke(), i.lineTo(this.alignToPixel(e[e.length - 1].x), this.scene.height), i.lineTo(o[0], this.scene.height), i.fillStyle = n, i.closePath(), i.fill();
    } else
      i.stroke();
    i.restore(), e.length = 0;
  }
}
function yi(a, e = 1) {
  a < 3 ? a = 1 : a < 10 ? a = 3 * e : a >= 10 && (a = Math.ceil(a * 0.8));
  const s = Math.floor(a * 0.1);
  return Math.round((a - s) * e);
}
class $a {
  constructor(e, i) {
    this.scene = e, this.ctx = this.scene.context, this.width = this.scene.width, this.cfg = i;
  }
  draw(e) {
    const i = this.ctx;
    this.cfg, this.scene.height;
    const s = {
      fill: "",
      stroke: "",
      width: 1
    };
    let n;
    for (let r of e) {
      let { w: o, x: l, y: c, zero: m } = r;
      o = yi(o), l = l - o / 2, c < m ? (n = m - c, s.fill = "#0f0") : (n = c - m, c = m, s.fill = "#f00"), br(i, l, c, o, n, s);
    }
  }
}
function $m(a, e, i, s, n, r) {
  let o = e - i;
  Ss(a, 0, i, s, o, r), Pt(a, e, 0, s, r), Pt(a, i, 0, s, r);
}
class ee {
  static isOverlay = !0;
  #e;
  #t;
  #i = {};
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c = [];
  #u = {
    valueMax: null,
    valueMin: null,
    indexStart: null,
    Length: null,
    rowsW: null,
    rowsH: null,
    refresh: !0,
    resize: !0
  };
  #d;
  id;
  constructor(e, i = !1, s = !1, n, r, o = {}) {
    this.#t = r.core, this.#e = r, this.#i = r.core.config, this.#a = e, this.#l = e.scene, this.#h = e.hit, this.#n = i, this.#r = s, this.#o = o, this.on("global_resize", this.onResize, this);
  }
  get core() {
    return this.#t;
  }
  get parent() {
    return this.#e;
  }
  get target() {
    return this.#a;
  }
  get config() {
    return this.#i;
  }
  get params() {
    return this.#o;
  }
  get range() {
    return this.#t.range;
  }
  get state() {
    return this.#t.state;
  }
  get scene() {
    return this.#l;
  }
  get hit() {
    return this.#h;
  }
  get theme() {
    return this.#t.theme;
  }
  get chart() {
    return this.#e.parent.parent;
  }
  get chartData() {
    return this.#i.state.allData.data;
  }
  get xAxis() {
    return this.getXAxis();
  }
  get yAxis() {
    return this.getYAxis();
  }
  get overlay() {
    return this.#o.overlay;
  }
  get overlayData() {
    return this.#o.overlay?.data || [];
  }
  get data() {
    return this.#o.overlay?.data || [];
  }
  get stateMachine() {
    return this.#t.stateMachine;
  }
  get context() {
    return this.contextIs();
  }
  set position(e) {
    this.#a.setPosition(e[0], e[1]);
  }
  destroy() {
    this.#t.hub.expunge(this), "overlay" in this.#o && "data" in this.#o.overlay && delete this.#o.overlay.data;
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  expunge(e = this) {
    this.#t.expunge(e);
  }
  emit(e, i) {
    this.core.emit(e, i);
  }
  onResize() {
    this.#u.resize = !0;
  }
  setSize(e, i) {
    this.#a.setSize(e, i), this.#u.refresh = !0;
  }
  setRefresh() {
    this.#u.refresh = !0;
  }
  getXAxis() {
    return this.#n instanceof Yi ? this.#n : this.core.Chart.time?.xAxis instanceof Yi ? this.core.Chart.time.xAxis : "time" in this.#e ? this.#e.time.xAxis : !1;
  }
  getYAxis() {
    return this.#r instanceof hi ? this.#r : this.chart?.yAxis instanceof hi ? this.chart.yAxis : "scale" in this.#e ? this.#e.scale.yAxis : !1;
  }
  contextIs() {
    return !this.#n && !this.#r ? "chart" : this.getXAxis() instanceof Yi ? "timeline" : this.getYAxis() instanceof hi ? "scale" : !1;
  }
  mustUpdate() {
    const e = this.#t.range, i = this.#u;
    return this.#t.MainPane.elRows, i.valueMax !== e.valueMax || i.valueMin !== e.valueMin || i.indexStart !== e.indexStart || i.Length !== e.Length || i.refresh || i.resize ? this.#u : !1;
  }
  updated() {
    const e = this.#t.range, i = this.#u, s = this.#t.MainPane.elRows;
    i.valueMax = e.valueMax, i.valueMin = e.valueMin, i.indexStart = e.indexStart, i.Length = e.Length, i.rowsW = s.width, i.rowsH = s.height, i.rowsW = s.width, i.rowsH = s.height, i.refresh = !1, i.resize = !1;
  }
  plot(e, i, s) {
    const n = this.scene.context, r = e;
    switch (n.save(), i) {
      case "createCanvas":
        Y[i](r[0], r[1]);
        break;
      case "fillStroke":
        Y[i](n, r[0], r[1], r[2]);
        break;
      case "renderLine":
        Y[i](n, r, s);
        break;
      case "renderLineHorizontal":
        Y[i](n, r[0], r[1], r[2], s);
        break;
      case "renderLineVertical":
        Y[i](n, r[0], r[1], r[2], s);
        break;
      case "renderPath":
        Y[i](n, r, s.style, s);
        break;
      case "renderPathStroke":
        Y[i](n, r, s.style);
        break;
      case "renderPathClosed":
        Y[i](n, r, s.style, s);
        break;
      case "renderSpline":
        Y[i](n, r, s);
        break;
      case "renderRect":
        Y[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectFill":
        Y[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectStroke":
        Y[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectRound":
        Y[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderRectRoundFill":
        Y[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderRectRoundStroke":
        Y[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderPolygonRegular":
        Y[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderPolygonIrregular":
        Y[i](n, r, s);
        break;
      case "renderTriangle":
        Y[i](n, r[0], r[1], r[2], s);
        break;
      case "renderDiamond":
        Y[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderCircle":
        Y[i](n, r[0], r[1], r[2], s);
        break;
      case "renderImage":
        Y[i](n, s.src, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
        break;
      case "renderText":
        Y[i](n, r[0], r[1], s);
        break;
      case "renderTextBG":
        Y[i](n, r[0], r[1], r[2], s);
        break;
      case "histogram":
        this.histogram(r, s);
        break;
      case "highLowRange":
        this.highLowRange(n, s);
        break;
    }
    n.restore();
  }
  clear() {
    this.scene.clear();
  }
  histogram(e, i) {
    this.#d instanceof $a || (this.#d = new $a(this.scene, this.theme)), this.#d.draw(e, i);
  }
  highLowRange(e, i) {
    let { high: s, low: n } = i, r = this.yAxis.yPos(s), o = this.yAxis.yPos(n), { width: l, height: c } = this.scene;
    $m(e, r, o, l, c, i);
  }
}
class Qe {
  static opened = new Qe("opened");
  static closed = new Qe("closed");
  constructor(e) {
    this.name = e;
  }
}
class ve {
  #e;
  #t;
  #i;
  #s;
  #n = Qe.closed;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  #d;
  #m;
  #p = {};
  #g;
  #y;
  #b;
  #x;
  #w = !1;
  #f = {};
  #S = "";
  #v = "";
  #P = {};
  #T = {};
  static windowList = {};
  static windowCnt = 0;
  static class = ea;
  static Name = "Windows";
  static type = "window";
  static currentActive = null;
  static stylesInstalled = !1;
  static defaultStyles = `
  /** default Window widget styles */

  .tradeXwindow {
    border: 1px solid ${at.COLOUR_BORDER};
    border-radius: 5px;
    box-shadow: ${at.SHADOW};
    background: ${at.COLOUR_BG};
    color: ${at.COLOUR_TXT};
  }

  .tradeXwindow .dragBar {
    cursor: grab;
  }

  .tradeXwindow .dragBar:hover {
    background: #222;
  }

  .tradeXwindow .dragBar .title {
    ${at.TITLE}
  }

  .tradeXwindow .content {
    ${at.CONTENT}
  }
 
  `;
  static create(e, i) {
    return i.id = i?.id || se("window"), i.id = `${i.id}_${++ve.windowCnt}`, i.type = i?.type || ve.type, i.class = i?.class || "window", ve.windowList[i.id] = new ve(e, i), ve.windowList[i.id];
  }
  static destroy(e) {
    e in ve.windowList && (ve.windowList[e].destroy(), delete ve.windowList[e]);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="${ea}" style=""></div>
    `;
  }
  constructor(e, i) {
    this.#t = e, this.#i = i.core || i.parent.core, this.#s = i, this.#e = i.id, this.#r = i.parent, this.#l = e.elements[i.type], this.#a = this.#i.elWidgetsG;
    const s = e.elements[i.type];
    this.mount(s);
  }
  destroy() {
    this.#i.hub.expunge(), this.el.remove();
  }
  get id() {
    return this.#e;
  }
  get pos() {
    return this.dimensions;
  }
  get core() {
    return this.#i;
  }
  get parent() {
    return this.#r;
  }
  get config() {
    return this.#s;
  }
  set config(e) {
    this.#s = e;
  }
  get theme() {
    return this.#i.theme;
  }
  get state() {
    return this.#n;
  }
  get dimensions() {
    return Ce(this.#h);
  }
  set dimensions(e) {
    this.setDimensions(e);
  }
  get type() {
    return ve.type;
  }
  get el() {
    return this.#h;
  }
  get elDragBar() {
    return this.#o;
  }
  get elTitle() {
    return this.#c;
  }
  get elCloseIcon() {
    return this.#u;
  }
  get elContent() {
    return this.#d;
  }
  get elColourPicker() {
    return this.#m;
  }
  get title() {
    return this.#S;
  }
  set title(e) {
    this.setTitle(e);
  }
  get content() {
    return this.#v;
  }
  set content(e) {
    this.setContent(e);
  }
  get contentFields() {
    return this.#P;
  }
  set params(e) {
    v(e) && (this.#T = { ...this.#T, ...e });
  }
  get params() {
    return this.#T;
  }
  setTitle(e) {
    return T(e) ? (this.#s.title = e, this.#c.innerHTML = e, this.#c) : !1;
  }
  setContent(e, i = {}) {
    if (!T(e) || !v(i)) return !1;
    this.#s.content = e, this.#d.innerHTML = e;
    for (let s in i)
      I(i[s]) && i[s](this.#d);
    return this.#P = this.allContentFields(), this.#d;
  }
  start() {
    this.eventsListen(), this.#s?.openNow !== !0 && this.setClose();
  }
  eventsListen() {
    this.on(`window_close_${this.parent.id}`, this.onCloseWindow, this), this.on("global_resize", this.onGlobalResize, this);
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onGlobalResize(e) {
    const i = this.dimensions, s = {
      position: { x: i.left, y: i.top },
      dimensions: { w: i.w, h: i.h }
    };
    i.w > e.width && (s.position.x = e.width), i.h > e.height && (s.position.y = e.height), i.left + s.dimensions.w, i.bottom + s.dimensions.h, i.x < 0 ? s.position.x = 0 : i.x + s.dimensions.w > e.width && (s.position.x -= e.width), this.setProperties(s);
  }
  onOutsideClickListener(e) {
    if (!this.#h.contains(e.target) && Et(this.#h) && !this.#w) {
      let i = {
        target: e.currentTarget.id,
        window: this.#e
      };
      this.emit("window_close", i), this.emit(`window_close_${this.parent.id}`, i), document.removeEventListener("click", this.#f.click), delete this.#f.click;
    }
  }
  onCloseWindow(e) {
    e.window === this.#e && this.close();
  }
  onWindow(e) {
    e.stopPropagation();
  }
  onDragBar(e) {
    this.#w = !0;
    let i = this.#h.offsetLeft + e.movement.x, s = this.#h.offsetTop + e.movement.y;
    this.position({ x: i, y: s });
  }
  onDragBarEnd(e) {
    setTimeout(() => {
      this.#w = !1;
    }, 250);
  }
  mount(e) {
    e.lastElementChild == null ? e.innerHTML = this.windowNode() : e.lastElementChild.insertAdjacentHTML("afterend", this.windowNode()), this.#h = this.#l.querySelector(`#${this.#s.id}`), this.#o = this.#h.querySelector(".dragBar"), this.#c = this.#h.querySelector(".title"), this.#u = this.#h.querySelector(".closeIcon"), this.#d = this.#h.querySelector(".content"), this.#P = this.allContentFields(), this.#h.addEventListener("click", this.onWindow.bind(this)), W(this.#o) && (this.#x = new Xe(this.#o, { disableContextMenu: !1 }), this.#x.on("pointerdrag", this.onDragBar.bind(this)), this.#x.on("pointerdragend", this.onDragBarEnd.bind(this)));
    const i = this.dimensions, s = this.#s?.w || i.w, n = this.#s?.h || i.h;
    this.setDimensions({ w: s, h: n }), this.position();
  }
  windowNode() {
    const e = this.#s;
    let i = "position: absolute; z-index: 100; display: block;", s = e.dragBar ? this.dragBar() : "", n = !e.dragBar && e.title ? this.titleNode() : "", r = this.contentNode(), o = this.closeIcon();
    return `
      <!-- ${this.constructor.type} ${this.parent.id} -->
      <div id="${e.id}" class="${vc} ${e.class}" style="${i}">
          ${s}
          ${n}
          ${o}
          ${r}
        </div>
      </div>
    `;
  }
  contentNode() {
    const e = this.#s;
    let i = "", s = e?.content ? e.content : "";
    return `
      <div class="content" style="${i}">
        ${s}
      </div>
    `;
  }
  dragBar() {
    const e = this.#s, i = "cursor: grab;", s = `onmouseover="this.style.background ='#222'"`, n = `onmouseout="this.style.background ='none'"`;
    let r = `${i} `, o = "";
    return e.dragBar && (o += `
    <div class="dragBar" style="${r}" ${s} ${n}>
        ${this.titleNode()}
      </div>
    `), o;
  }
  titleNode() {
    const e = this.config;
    return `
        <div class="title">${T(e?.title) ? e.title : ""}</div>
    `;
  }
  closeIcon() {
    const e = "cursor: pointer;", i = `onmouseover="this.style.background ='#222'"`, s = `onmouseout="this.style.background ='none'"`;
    let n = `${e} `;
    this.#s?.styles?.closeIcon;
    let r = "";
    return window.closeIcon && (r += `
      <div class="closeIcon" style="${n}" ${i} ${s}>
        <span>X</span>
      </div>
    `), r;
  }
  allContentFields() {
    const e = {}, i = this.#d;
    return e.input = i.querySelectorAll("input"), e.select = i.querySelectorAll("select"), e.textarea = i.querySelectorAll("textarea"), e.button = i.querySelectorAll("button"), e;
  }
  position(e) {
    let i = 0.1, s = this.dimensions, n = this.#i.dimensions;
    Math.round(n.left - s.left), Math.round(n.bottom - s.top);
    let r = this.#p?.iPos?.width !== n.width || this.#p.x100 ? s.width * this.#p.x100 : Math.round((n.width - s.width) / 2), o = this.#p?.iPos?.height !== n.height || this.#p.y100 ? s.height * this.#p.y100 : Math.round((n.height + s.height) / -2), l = Io(this.#h, "z-index");
    if (v(e)) {
      let { x: M, y: L, z: D } = { ...e };
      P(M) && (r = M), P(L) && (o = L), P(D) && (l = D), this.#p = { x: M, y: L, z: l };
    }
    this.#h.style["z-index"] = `${l}`;
    const c = this.#h.clientWidth;
    r + c * i > this.#a.offsetWidth ? r = this.#a.offsetWidth - c * i : r < (c - c * i) * -1 && (r = (c - c * i) * -1);
    const m = this.#h.clientHeight;
    o < n.height * -1 ? o = n.height * -1 : o > m * i * -1 && (o = m * i * -1), r = Math.floor(r), o = Math.floor(o), this.#h.style.left = `${r}px`, this.#h.style.top = `${o}px`;
    const f = r / s.width, C = o / s.height;
    this.#p = {
      px: r,
      py: o,
      x100: f,
      y100: C,
      iPos: n
    };
  }
  setDimensions(e) {
    if (!v(e)) return !1;
    P(e?.w) && (this.#h.style.width = `${e.w}px`), P(e?.h) && (this.#h.style.height = `${e.h}px`);
  }
  setProperties(e) {
    if (!v(e)) return !1;
    if (T(e?.title) && (this.#c.innerHTML = e.title), T(e?.content) && (this.#d.innerHTML = e.content), this.setDimensions({ ...e?.dimensions }), this.position({ ...e?.position }), v(e?.styles)) {
      const i = (s, n) => {
        if (!v(n)) return !1;
        const r = "el" + s.charAt(0).toUpperCase() + s.slice(1);
        if (v(this[r]))
          for (let o in n)
            this[r].style.p = n[o];
      };
      for (let s of Object.keys(e.styles))
        i(s, e.styles[s]);
    }
    return e;
  }
  setOpen() {
    ve.currentActive = this, this.#n = Qe.opened, this.#h.style.display = "block", this.#h.style.zindex = "10", this.#h.classList.add("active");
  }
  setClose() {
    ve.currentActive = null, this.#n = Qe.closed, this.#h.style.display = "none", this.#h.classList.remove("active"), document.removeEventListener("click", this.#f.click);
  }
  remove() {
    return ve.destroy(this.id);
  }
  open(e = {}) {
    return ve.currentActive === this && this.state === Qe.opened || (v(e.params) && (this.params = e.params), this.setOpen(), this.setProperties(e), this.emit("window_opened", this.id), this.emit(`window_opened_${this.parent.id}`, this.id), setTimeout(() => {
      this.#f.click = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#f.click), this.#m;
    }, 1e3)), !0;
  }
  close() {
    return this.#n !== Qe.closed && (this.setClose(), this.emit("window_closed", this.id), this.emit(`window_closed_${this.parent.id}`, this.id)), !0;
  }
}
const Hm = {
  name: "ACCBANDS",
  camelCaseName: "accBands",
  group: "Overlap Studies",
  description: "Acceleration Bands",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 20,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "upperBand",
    type: "number",
    plot: "limit_upper"
  }, {
    name: "middleBand",
    type: "number",
    plot: "line"
  }, {
    name: "lowerBand",
    type: "number",
    plot: "limit_lower"
  }]
}, _m = {
  name: "ACOS",
  camelCaseName: "acos",
  group: "Math Transform",
  description: "Vector Trigonometric ACos",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Fm = {
  name: "AD",
  camelCaseName: "ad",
  group: "Volume Indicators",
  description: "Chaikin A/D Line",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Bm = {
  name: "ADD",
  camelCaseName: "add",
  group: "Math Operators",
  description: "Vector Arithmetic Add",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Um = {
  name: "ADOSC",
  camelCaseName: "adOsc",
  group: "Volume Indicators",
  description: "Chaikin A/D Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 3,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 10,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Gl = {
  name: "ADX",
  camelCaseName: "adx",
  group: "Momentum Indicators",
  description: "Average Directional Movement Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Vm = {
  name: "ADXR",
  camelCaseName: "adxr",
  group: "Momentum Indicators",
  description: "Average Directional Movement Index Rating",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, zm = {
  name: "APO",
  camelCaseName: "apo",
  group: "Momentum Indicators",
  description: "Absolute Price Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ql = {
  name: "AROON",
  camelCaseName: "aroon",
  group: "Momentum Indicators",
  description: "Aroon",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "aroonDown",
    type: "number",
    plot: "line_dash"
  }, {
    name: "aroonUp",
    type: "number",
    plot: "line"
  }]
}, Wm = {
  name: "AROONOSC",
  camelCaseName: "aroonOsc",
  group: "Momentum Indicators",
  description: "Aroon Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Gm = {
  name: "ASIN",
  camelCaseName: "asin",
  group: "Math Transform",
  description: "Vector Trigonometric ASin",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, qm = {
  name: "ATAN",
  camelCaseName: "atan",
  group: "Math Transform",
  description: "Vector Trigonometric ATan",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, jl = {
  name: "ATR",
  camelCaseName: "atr",
  group: "Volatility Indicators",
  description: "Average True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, jm = {
  name: "AVGDEV",
  camelCaseName: "avgDev",
  group: "Price Transform",
  description: "Average Deviation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Xm = {
  name: "AVGPRICE",
  camelCaseName: "avgPrice",
  group: "Price Transform",
  description: "Average Price",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Xl = {
  name: "BBANDS",
  camelCaseName: "bbands",
  group: "Overlap Studies",
  description: "Bollinger Bands",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "nbDevUp",
    displayName: "Deviations up",
    defaultValue: 2,
    hint: "Deviation multiplier for upper band",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "nbDevDn",
    displayName: "Deviations down",
    defaultValue: 2,
    hint: "Deviation multiplier for lower band",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "upperBand",
    type: "number",
    plot: "limit_upper"
  }, {
    name: "middleBand",
    type: "number",
    plot: "line"
  }, {
    name: "lowerBand",
    type: "number",
    plot: "limit_lower"
  }]
}, Ym = {
  name: "BETA",
  camelCaseName: "beta",
  group: "Statistic Functions",
  description: "Beta",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Km = {
  name: "BOP",
  camelCaseName: "bop",
  group: "Momentum Indicators",
  description: "Balance Of Power",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Yl = {
  name: "CCI",
  camelCaseName: "cci",
  group: "Momentum Indicators",
  description: "Commodity Channel Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Zm = {
  name: "CDL2CROWS",
  camelCaseName: "cdl2Crows",
  group: "Pattern Recognition",
  description: "Two Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Qm = {
  name: "CDL3BLACKCROWS",
  camelCaseName: "cdl3BlackCrows",
  group: "Pattern Recognition",
  description: "Three Black Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Jm = {
  name: "CDL3INSIDE",
  camelCaseName: "cdl3Inside",
  group: "Pattern Recognition",
  description: "Three Inside Up/Down",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ep = {
  name: "CDL3LINESTRIKE",
  camelCaseName: "cdl3LineStrike",
  group: "Pattern Recognition",
  description: "Three-Line Strike ",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, tp = {
  name: "CDL3OUTSIDE",
  camelCaseName: "cdl3Outside",
  group: "Pattern Recognition",
  description: "Three Outside Up/Down",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ip = {
  name: "CDL3STARSINSOUTH",
  camelCaseName: "cdl3StarsInSouth",
  group: "Pattern Recognition",
  description: "Three Stars In The South",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, sp = {
  name: "CDL3WHITESOLDIERS",
  camelCaseName: "cdl3WhiteSoldiers",
  group: "Pattern Recognition",
  description: "Three Advancing White Soldiers",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, np = {
  name: "CDLABANDONEDBABY",
  camelCaseName: "cdlAbandonedBaby",
  group: "Pattern Recognition",
  description: "Abandoned Baby",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, rp = {
  name: "CDLADVANCEBLOCK",
  camelCaseName: "cdlAdvanceBlock",
  group: "Pattern Recognition",
  description: "Advance Block",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ap = {
  name: "CDLBELTHOLD",
  camelCaseName: "cdlBeltHold",
  group: "Pattern Recognition",
  description: "Belt-hold",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, op = {
  name: "CDLBREAKAWAY",
  camelCaseName: "cdlBreakaway",
  group: "Pattern Recognition",
  description: "Breakaway",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, lp = {
  name: "CDLCLOSINGMARUBOZU",
  camelCaseName: "cdlClosingMarubozu",
  group: "Pattern Recognition",
  description: "Closing Marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, hp = {
  name: "CDLCONCEALBABYSWALL",
  camelCaseName: "cdlConcealBabysWall",
  group: "Pattern Recognition",
  description: "Concealing Baby Swallow",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, cp = {
  name: "CDLCOUNTERATTACK",
  camelCaseName: "cdlCounterAttack",
  group: "Pattern Recognition",
  description: "Counterattack",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, up = {
  name: "CDLDARKCLOUDCOVER",
  camelCaseName: "cdlDarkCloudCover",
  group: "Pattern Recognition",
  description: "Dark Cloud Cover",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.5,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, dp = {
  name: "CDLDOJI",
  camelCaseName: "cdlDoji",
  group: "Pattern Recognition",
  description: "Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, mp = {
  name: "CDLDOJISTAR",
  camelCaseName: "cdlDojiStar",
  group: "Pattern Recognition",
  description: "Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, pp = {
  name: "CDLDRAGONFLYDOJI",
  camelCaseName: "cdlDragonflyDoji",
  group: "Pattern Recognition",
  description: "Dragonfly Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, fp = {
  name: "CDLENGULFING",
  camelCaseName: "cdlEngulfing",
  group: "Pattern Recognition",
  description: "Engulfing Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, gp = {
  name: "CDLEVENINGDOJISTAR",
  camelCaseName: "cdlEveningDojiStar",
  group: "Pattern Recognition",
  description: "Evening Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, yp = {
  name: "CDLEVENINGSTAR",
  camelCaseName: "cdlEveningStar",
  group: "Pattern Recognition",
  description: "Evening Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, vp = {
  name: "CDLGAPSIDESIDEWHITE",
  camelCaseName: "cdlGapSideSideWhite",
  group: "Pattern Recognition",
  description: "Up/Down-gap side-by-side white lines",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, bp = {
  name: "CDLGRAVESTONEDOJI",
  camelCaseName: "cdlGravestoneDoji",
  group: "Pattern Recognition",
  description: "Gravestone Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, wp = {
  name: "CDLHAMMER",
  camelCaseName: "cdlHammer",
  group: "Pattern Recognition",
  description: "Hammer",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, xp = {
  name: "CDLHANGINGMAN",
  camelCaseName: "cdlHangingMan",
  group: "Pattern Recognition",
  description: "Hanging Man",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Cp = {
  name: "CDLHARAMI",
  camelCaseName: "cdlHarami",
  group: "Pattern Recognition",
  description: "Harami Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Tp = {
  name: "CDLHARAMICROSS",
  camelCaseName: "cdlHaramiCross",
  group: "Pattern Recognition",
  description: "Harami Cross Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Sp = {
  name: "CDLHIGHWAVE",
  camelCaseName: "cdlHignWave",
  group: "Pattern Recognition",
  description: "High-Wave Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Pp = {
  name: "CDLHIKKAKE",
  camelCaseName: "cdlHikkake",
  group: "Pattern Recognition",
  description: "Hikkake Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ep = {
  name: "CDLHIKKAKEMOD",
  camelCaseName: "cdlHikkakeMod",
  group: "Pattern Recognition",
  description: "Modified Hikkake Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Mp = {
  name: "CDLHOMINGPIGEON",
  camelCaseName: "cdlHomingPigeon",
  group: "Pattern Recognition",
  description: "Homing Pigeon",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Lp = {
  name: "CDLIDENTICAL3CROWS",
  camelCaseName: "cdlIdentical3Crows",
  group: "Pattern Recognition",
  description: "Identical Three Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ap = {
  name: "CDLINNECK",
  camelCaseName: "cdlInNeck",
  group: "Pattern Recognition",
  description: "In-Neck Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Op = {
  name: "CDLINVERTEDHAMMER",
  camelCaseName: "cdlInvertedHammer",
  group: "Pattern Recognition",
  description: "Inverted Hammer",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Dp = {
  name: "CDLKICKING",
  camelCaseName: "cdlKicking",
  group: "Pattern Recognition",
  description: "Kicking",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ip = {
  name: "CDLKICKINGBYLENGTH",
  camelCaseName: "cdlKickingByLength",
  group: "Pattern Recognition",
  description: "Kicking - bull/bear determined by the longer marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Np = {
  name: "CDLLADDERBOTTOM",
  camelCaseName: "cdlLadderBottom",
  group: "Pattern Recognition",
  description: "Ladder Bottom",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Rp = {
  name: "CDLLONGLEGGEDDOJI",
  camelCaseName: "cdlLongLeggedDoji",
  group: "Pattern Recognition",
  description: "Long Legged Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, kp = {
  name: "CDLLONGLINE",
  camelCaseName: "cdlLongLine",
  group: "Pattern Recognition",
  description: "Long Line Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, $p = {
  name: "CDLMARUBOZU",
  camelCaseName: "cdlMarubozu",
  group: "Pattern Recognition",
  description: "Marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Hp = {
  name: "CDLMATCHINGLOW",
  camelCaseName: "cdlMatchingLow",
  group: "Pattern Recognition",
  description: "Matching Low",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, _p = {
  name: "CDLMATHOLD",
  camelCaseName: "cdlMatHold",
  group: "Pattern Recognition",
  description: "Mat Hold",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.5,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Fp = {
  name: "CDLMORNINGDOJISTAR",
  camelCaseName: "cdlMorningDojiStar",
  group: "Pattern Recognition",
  description: "Morning Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Bp = {
  name: "CDLMORNINGSTAR",
  camelCaseName: "cdlMorningStar",
  group: "Pattern Recognition",
  description: "Morning Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Up = {
  name: "CDLONNECK",
  camelCaseName: "cdlOnNeck",
  group: "Pattern Recognition",
  description: "On-Neck Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Vp = {
  name: "CDLPIERCING",
  camelCaseName: "cdlPiercing",
  group: "Pattern Recognition",
  description: "Piercing Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, zp = {
  name: "CDLRICKSHAWMAN",
  camelCaseName: "cdlRickshawMan",
  group: "Pattern Recognition",
  description: "Rickshaw Man",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Wp = {
  name: "CDLRISEFALL3METHODS",
  camelCaseName: "cdlRiseFall3Methods",
  group: "Pattern Recognition",
  description: "Rising/Falling Three Methods",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Gp = {
  name: "CDLSEPARATINGLINES",
  camelCaseName: "cdlSeperatingLines",
  group: "Pattern Recognition",
  description: "Separating Lines",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, qp = {
  name: "CDLSHOOTINGSTAR",
  camelCaseName: "cdlShootingStar",
  group: "Pattern Recognition",
  description: "Shooting Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, jp = {
  name: "CDLSHORTLINE",
  camelCaseName: "cdlShortLine",
  group: "Pattern Recognition",
  description: "Short Line Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Xp = {
  name: "CDLSPINNINGTOP",
  camelCaseName: "cdlSpinningTop",
  group: "Pattern Recognition",
  description: "Spinning Top",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Yp = {
  name: "CDLSTALLEDPATTERN",
  camelCaseName: "cdlStalledPattern",
  group: "Pattern Recognition",
  description: "Stalled Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Kp = {
  name: "CDLSTICKSANDWICH",
  camelCaseName: "cdlStickSandwhich",
  group: "Pattern Recognition",
  description: "Stick Sandwich",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Zp = {
  name: "CDLTAKURI",
  camelCaseName: "cdlTakuri",
  group: "Pattern Recognition",
  description: "Takuri (Dragonfly Doji with very long lower shadow)",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Qp = {
  name: "CDLTASUKIGAP",
  camelCaseName: "cdlTasukiGap",
  group: "Pattern Recognition",
  description: "Tasuki Gap",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Jp = {
  name: "CDLTHRUSTING",
  camelCaseName: "cdlThrusting",
  group: "Pattern Recognition",
  description: "Thrusting Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, e0 = {
  name: "CDLTRISTAR",
  camelCaseName: "cdlTristar",
  group: "Pattern Recognition",
  description: "Tristar Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, t0 = {
  name: "CDLUNIQUE3RIVER",
  camelCaseName: "cdlUnique3River",
  group: "Pattern Recognition",
  description: "Unique 3 River",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, i0 = {
  name: "CDLUPSIDEGAP2CROWS",
  camelCaseName: "cdlUpsideGap2Crows",
  group: "Pattern Recognition",
  description: "Upside Gap Two Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, s0 = {
  name: "CDLXSIDEGAP3METHODS",
  camelCaseName: "cdlXSideGap3Methods",
  group: "Pattern Recognition",
  description: "Upside/Downside Gap Three Methods",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, n0 = {
  name: "CEIL",
  camelCaseName: "ceil",
  group: "Math Transform",
  description: "Vector Ceil",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Kl = {
  name: "CMO",
  camelCaseName: "cmo",
  group: "Momentum Indicators",
  description: "Chande Momentum Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, r0 = {
  name: "CORREL",
  camelCaseName: "correl",
  group: "Statistic Functions",
  description: "Pearson's Correlation Coefficient (r)",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, a0 = {
  name: "COS",
  camelCaseName: "cos",
  group: "Math Transform",
  description: "Vector Trigonometric Cos",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, o0 = {
  name: "COSH",
  camelCaseName: "cosh",
  group: "Math Transform",
  description: "Vector Trigonometric Cosh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, l0 = {
  name: "DEMA",
  camelCaseName: "dema",
  group: "Overlap Studies",
  description: "number Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, h0 = {
  name: "DIV",
  camelCaseName: "div",
  group: "Math Operators",
  description: "Vector Arithmetic Div",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Zl = {
  name: "DX",
  camelCaseName: "dx",
  group: "Momentum Indicators",
  description: "Directional Movement Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ql = {
  name: "EMA",
  camelCaseName: "ema",
  group: "Overlap Studies",
  description: "Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, c0 = {
  name: "EXP",
  camelCaseName: "exp",
  group: "Math Transform",
  description: "Vector Arithmetic Exp",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, u0 = {
  name: "FLOOR",
  camelCaseName: "floor",
  group: "Math Transform",
  description: "Vector Floor",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, d0 = {
  name: "HT_DCPERIOD",
  camelCaseName: "htDcPeriod",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Dominant Cycle Period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, m0 = {
  name: "HT_DCPHASE",
  camelCaseName: "htDcPhase",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Dominant Cycle Phase",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, p0 = {
  name: "HT_PHASOR",
  camelCaseName: "htPhasor",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Phasor Components",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "inPhase",
    type: "number",
    plot: "line"
  }, {
    name: "quadrature",
    type: "number",
    plot: "line_dash"
  }]
}, f0 = {
  name: "HT_SINE",
  camelCaseName: "htSine",
  group: "Cycle Indicators",
  description: "Hilbert Transform - SineWave",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "sine",
    type: "number",
    plot: "line"
  }, {
    name: "leadSine",
    type: "number",
    plot: "line_dash"
  }]
}, g0 = {
  name: "HT_TRENDLINE",
  camelCaseName: "htTrendline",
  group: "Overlap Studies",
  description: "Hilbert Transform - Instantaneous Trendline",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, y0 = {
  name: "HT_TRENDMODE",
  camelCaseName: "htTrendMode",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Trend vs Cycle Mode",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, v0 = {
  name: "IMI",
  camelCaseName: "imi",
  group: "Momentum Indicators",
  description: "Intraday Momentum Index",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, b0 = {
  name: "KAMA",
  camelCaseName: "kama",
  group: "Overlap Studies",
  description: "Kaufman Adaptive Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, w0 = {
  name: "LINEARREG",
  camelCaseName: "linearReg",
  group: "Statistic Functions",
  description: "Linear Regression",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, x0 = {
  name: "LINEARREG_ANGLE",
  camelCaseName: "linearRegAngle",
  group: "Statistic Functions",
  description: "Linear Regression Angle",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, C0 = {
  name: "LINEARREG_INTERCEPT",
  camelCaseName: "linearRegIntercept",
  group: "Statistic Functions",
  description: "Linear Regression Intercept",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, T0 = {
  name: "LINEARREG_SLOPE",
  camelCaseName: "linearRegSlope",
  group: "Statistic Functions",
  description: "Linear Regression Slope",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, S0 = {
  name: "LN",
  camelCaseName: "ln",
  group: "Math Transform",
  description: "Vector Log Natural",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, P0 = {
  name: "LOG10",
  camelCaseName: "log10",
  group: "Math Transform",
  description: "Vector Log10",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Jl = {
  name: "MA",
  camelCaseName: "movingAverage",
  group: "Overlap Studies",
  description: "Moving average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, eh = {
  name: "MACD",
  camelCaseName: "macd",
  group: "Momentum Indicators",
  description: "Moving Average Convergence/Divergence",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, E0 = {
  name: "MACDEXT",
  camelCaseName: "macdExt",
  group: "Momentum Indicators",
  description: "MACD with controllable MA type",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "fastMAType",
    displayName: "Fast MA",
    defaultValue: 0,
    hint: "Type of Moving Average for fast MA",
    type: "MAType"
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowMAType",
    displayName: "Slow MA",
    defaultValue: 0,
    hint: "Type of Moving Average for slow MA",
    type: "MAType"
  }, {
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "signalMAType",
    displayName: "Signal MA",
    defaultValue: 0,
    hint: "Type of Moving Average for signal line",
    type: "MAType"
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, M0 = {
  name: "MACDFIX",
  camelCaseName: "macdFix",
  group: "Momentum Indicators",
  description: "Moving Average Convergence/Divergence Fix 12/26",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, L0 = {
  name: "MAMA",
  camelCaseName: "mama",
  group: "Overlap Studies",
  description: "MESA Adaptive Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastLimit",
    displayName: "Fast Limit",
    defaultValue: 0.5,
    hint: "Upper limit use in the adaptive algorithm",
    type: "number",
    range: {
      min: 0.01,
      max: 0.99
    }
  }, {
    name: "slowLimit",
    displayName: "Slow Limit",
    defaultValue: 0.05,
    hint: "Lower limit use in the adaptive algorithm",
    type: "number",
    range: {
      min: 0.01,
      max: 0.99
    }
  }],
  outputs: [{
    name: "MAMA",
    type: "number",
    plot: "line"
  }, {
    name: "FAMA",
    type: "number",
    plot: "line_dash"
  }]
}, A0 = {
  name: "MAVP",
  camelCaseName: "movingAverageVariablePeriod",
  group: "Overlap Studies",
  description: "Moving average with variable period",
  inputs: [{
    name: "inReal",
    type: "number"
  }, {
    name: "inPeriods",
    type: "number"
  }],
  options: [{
    name: "minPeriod",
    displayName: "Minimum Period",
    defaultValue: 2,
    hint: "Value less than minimum will be changed to Minimum period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "maxPeriod",
    displayName: "Maximum Period",
    defaultValue: 30,
    hint: "Value higher than maximum will be changed to Maximum period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, O0 = {
  name: "MAX",
  camelCaseName: "max",
  group: "Math Operators",
  description: "Highest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, D0 = {
  name: "MAXINDEX",
  camelCaseName: "maxIndex",
  group: "Math Operators",
  description: "Index of highest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, I0 = {
  name: "MEDPRICE",
  camelCaseName: "medPrice",
  group: "Price Transform",
  description: "Median Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, th = {
  name: "MFI",
  camelCaseName: "mfi",
  group: "Momentum Indicators",
  description: "Money Flow Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, N0 = {
  name: "MIDPOINT",
  camelCaseName: "midPoint",
  group: "Overlap Studies",
  description: "MidPoint over period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, R0 = {
  name: "MIDPRICE",
  camelCaseName: "midPrice",
  group: "Overlap Studies",
  description: "Midpoint Price over period",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, k0 = {
  name: "MIN",
  camelCaseName: "min",
  group: "Math Operators",
  description: "Lowest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, $0 = {
  name: "MININDEX",
  camelCaseName: "minIndex",
  group: "Math Operators",
  description: "Index of lowest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, H0 = {
  name: "MINMAX",
  camelCaseName: "minMax",
  group: "Math Operators",
  description: "Lowest and highest values over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "min",
    type: "number",
    plot: "line"
  }, {
    name: "max",
    type: "number",
    plot: "line"
  }]
}, _0 = {
  name: "MINMAXINDEX",
  camelCaseName: "minMaxIndex",
  group: "Math Operators",
  description: "Indexes of lowest and highest values over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "minIdx",
    type: "number",
    plot: "line"
  }, {
    name: "maxIdx",
    type: "number",
    plot: "line"
  }]
}, F0 = {
  name: "MINUS_DI",
  camelCaseName: "minusDI",
  group: "Momentum Indicators",
  description: "Minus Directional Indicator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, B0 = {
  name: "MINUS_DM",
  camelCaseName: "minusDM",
  group: "Momentum Indicators",
  description: "Minus Directional Movement",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, U0 = {
  name: "MOM",
  camelCaseName: "mom",
  group: "Momentum Indicators",
  description: "Momentum",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, V0 = {
  name: "MULT",
  camelCaseName: "mult",
  group: "Math Operators",
  description: "Vector Arithmetic Mult",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, z0 = {
  name: "NATR",
  camelCaseName: "natr",
  group: "Volatility Indicators",
  description: "Normalized Average True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ih = {
  name: "OBV",
  camelCaseName: "obv",
  group: "Volume Indicators",
  description: "On Balance Volume",
  inputs: [{
    name: "inReal",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, W0 = {
  name: "PLUS_DI",
  camelCaseName: "plusDI",
  group: "Momentum Indicators",
  description: "Plus Directional Indicator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, G0 = {
  name: "PLUS_DM",
  camelCaseName: "plusDM",
  group: "Momentum Indicators",
  description: "Plus Directional Movement",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, sh = {
  name: "PPO",
  camelCaseName: "ppo",
  group: "Momentum Indicators",
  description: "Percentage Price Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, nh = {
  name: "ROC",
  camelCaseName: "roc",
  group: "Momentum Indicators",
  description: "Rate of change : ((price/prevPrice)-1)*100",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, q0 = {
  name: "ROCP",
  camelCaseName: "rocP",
  group: "Momentum Indicators",
  description: "Rate of change Percentage: (price-prevPrice)/prevPrice",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, j0 = {
  name: "ROCR",
  camelCaseName: "rocR",
  group: "Momentum Indicators",
  description: "Rate of change ratio: (price/prevPrice)",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, X0 = {
  name: "ROCR100",
  camelCaseName: "rocR100",
  group: "Momentum Indicators",
  description: "Rate of change ratio 100 scale: (price/prevPrice)*100",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, rh = {
  name: "RSI",
  camelCaseName: "rsi",
  group: "Momentum Indicators",
  description: "Relative Strength Index",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ah = {
  name: "SAR",
  camelCaseName: "sar",
  group: "Overlap Studies",
  description: "Parabolic SAR",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "acceleration",
    displayName: "Acceleration Factor",
    defaultValue: 0.02,
    hint: "Acceleration Factor used up to the Maximum value",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "maximum",
    displayName: "AF Maximum",
    defaultValue: 0.2,
    hint: "Acceleration Factor Maximum value",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Y0 = {
  name: "SAREXT",
  camelCaseName: "sarExt",
  group: "Overlap Studies",
  description: "Parabolic SAR - Extended",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "startValue",
    displayName: "Start Value",
    defaultValue: 0,
    hint: "Start value and direction. 0 for Auto, >0 for Long, <0 for Short",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "offsetOnReverse",
    displayName: "Offset on Reverse",
    defaultValue: 0,
    hint: "Percent offset added/removed to initial stop on short/long reversal",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationInitLong",
    displayName: "AF Init Long",
    defaultValue: 0.02,
    hint: "Acceleration Factor initial value for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationLong",
    displayName: "AF Long",
    defaultValue: 0.02,
    hint: "Acceleration Factor for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationMaxLong",
    displayName: "AF Max Long",
    defaultValue: 0.2,
    hint: "Acceleration Factor maximum value for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationInitShort",
    displayName: "AF Init Short",
    defaultValue: 0.02,
    hint: "Acceleration Factor initial value for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationShort",
    displayName: "AF Short",
    defaultValue: 0.02,
    hint: "Acceleration Factor for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationMaxShort",
    displayName: "AF Max Short",
    defaultValue: 0.2,
    hint: "Acceleration Factor maximum value for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, K0 = {
  name: "SIN",
  camelCaseName: "sin",
  group: "Math Transform",
  description: "Vector Trigonometric Sin",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Z0 = {
  name: "SINH",
  camelCaseName: "sinh",
  group: "Math Transform",
  description: "Vector Trigonometric Sinh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, oh = {
  name: "SMA",
  camelCaseName: "sma",
  group: "Overlap Studies",
  description: "Simple Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Q0 = {
  name: "SQRT",
  camelCaseName: "sqrt",
  group: "Math Transform",
  description: "Vector Square Root",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, J0 = {
  name: "STDDEV",
  camelCaseName: "stdDev",
  group: "Statistic Functions",
  description: "Standard Deviation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "nbDev",
    displayName: "Deviations",
    defaultValue: 1,
    hint: "Nb of deviations",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, lh = {
  name: "STOCH",
  camelCaseName: "stoch",
  group: "Momentum Indicators",
  description: "Stochastic",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowK_Period",
    displayName: "Slow-K Period",
    defaultValue: 3,
    hint: "Smoothing for making the Slow-K line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowK_MAType",
    displayName: "Slow-K MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Slow-K",
    type: "MAType"
  }, {
    name: "slowD_Period",
    displayName: "Slow-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Slow-D line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowD_MAType",
    displayName: "Slow-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Slow-D",
    type: "MAType"
  }],
  outputs: [{
    name: "slowK",
    type: "number",
    plot: "line_dash"
  }, {
    name: "slowD",
    type: "number",
    plot: "line_dash"
  }]
}, ef = {
  name: "STOCHF",
  camelCaseName: "stochF",
  group: "Momentum Indicators",
  description: "Stochastic Fast",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_Period",
    displayName: "Fast-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Fast-D line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_MAType",
    displayName: "Fast-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Fast-D",
    type: "MAType"
  }],
  outputs: [{
    name: "fastK",
    type: "number",
    plot: "line"
  }, {
    name: "fastD",
    type: "number",
    plot: "line"
  }]
}, hh = {
  name: "STOCHRSI",
  camelCaseName: "stochRsi",
  group: "Momentum Indicators",
  description: "Stochastic Relative Strength Index",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_Period",
    displayName: "Fast-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Fast-D line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_MAType",
    displayName: "Fast-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Fast-D",
    type: "MAType"
  }],
  outputs: [{
    name: "fastK",
    type: "number",
    plot: "line"
  }, {
    name: "fastD",
    type: "number",
    plot: "line"
  }]
}, sf = {
  name: "SUB",
  camelCaseName: "sub",
  group: "Math Operators",
  description: "Vector Arithmetic Substraction",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, nf = {
  name: "SUM",
  camelCaseName: "sum",
  group: "Math Operators",
  description: "Summation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, rf = {
  name: "T3",
  camelCaseName: "t3",
  group: "Overlap Studies",
  description: "Triple Exponential Moving Average (T3)",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "VFactor",
    displayName: "Volume Factor",
    defaultValue: 0.7,
    hint: "Volume Factor",
    type: "number",
    range: {
      min: 0,
      max: 1
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, af = {
  name: "TAN",
  camelCaseName: "tan",
  group: "Math Transform",
  description: "Vector Trigonometric Tan",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, of = {
  name: "TANH",
  camelCaseName: "tanh",
  group: "Math Transform",
  description: "Vector Trigonometric Tanh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, lf = {
  name: "TEMA",
  camelCaseName: "tema",
  group: "Overlap Studies",
  description: "Triple Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, hf = {
  name: "TRANGE",
  camelCaseName: "trueRange",
  group: "Volatility Indicators",
  description: "True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, cf = {
  name: "TRIMA",
  camelCaseName: "trima",
  group: "Overlap Studies",
  description: "Triangular Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, uf = {
  name: "TRIX",
  camelCaseName: "trix",
  group: "Momentum Indicators",
  description: "1-day Rate-Of-Change (ROC) of a Triple Smooth EMA",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, df = {
  name: "TSF",
  camelCaseName: "tsf",
  group: "Statistic Functions",
  description: "Time Series Forecast",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, mf = {
  name: "TYPPRICE",
  camelCaseName: "typPrice",
  group: "Price Transform",
  description: "Typical Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, pf = {
  name: "ULTOSC",
  camelCaseName: "ultOsc",
  group: "Momentum Indicators",
  description: "Ultimate Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod1",
    displayName: "First Period",
    defaultValue: 7,
    hint: "Number of bars for 1st period.",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "timePeriod2",
    displayName: "Second Period",
    defaultValue: 14,
    hint: "Number of bars fro 2nd period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "timePeriod3",
    displayName: "Third Period",
    defaultValue: 28,
    hint: "Number of bars for 3rd period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ff = {
  name: "VAR",
  camelCaseName: "variance",
  group: "Statistic Functions",
  description: "Variance",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "nbDev",
    displayName: "Deviations",
    defaultValue: 1,
    hint: "Nb of deviations",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, gf = {
  name: "WCLPRICE",
  camelCaseName: "wclPrice",
  group: "Price Transform",
  description: "Weighted Close Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, yf = {
  name: "WILLR",
  camelCaseName: "willR",
  group: "Momentum Indicators",
  description: "Williams' %R",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, vf = {
  name: "WMA",
  camelCaseName: "wma",
  group: "Overlap Studies",
  description: "Weighted Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, bf = {
  ACCBANDS: Hm,
  ACOS: _m,
  AD: Fm,
  ADD: Bm,
  ADOSC: Um,
  ADX: Gl,
  ADXR: Vm,
  APO: zm,
  AROON: ql,
  AROONOSC: Wm,
  ASIN: Gm,
  ATAN: qm,
  ATR: jl,
  AVGDEV: jm,
  AVGPRICE: Xm,
  BBANDS: Xl,
  BETA: Ym,
  BOP: Km,
  CCI: Yl,
  CDL2CROWS: Zm,
  CDL3BLACKCROWS: Qm,
  CDL3INSIDE: Jm,
  CDL3LINESTRIKE: ep,
  CDL3OUTSIDE: tp,
  CDL3STARSINSOUTH: ip,
  CDL3WHITESOLDIERS: sp,
  CDLABANDONEDBABY: np,
  CDLADVANCEBLOCK: rp,
  CDLBELTHOLD: ap,
  CDLBREAKAWAY: op,
  CDLCLOSINGMARUBOZU: lp,
  CDLCONCEALBABYSWALL: hp,
  CDLCOUNTERATTACK: cp,
  CDLDARKCLOUDCOVER: up,
  CDLDOJI: dp,
  CDLDOJISTAR: mp,
  CDLDRAGONFLYDOJI: pp,
  CDLENGULFING: fp,
  CDLEVENINGDOJISTAR: gp,
  CDLEVENINGSTAR: yp,
  CDLGAPSIDESIDEWHITE: vp,
  CDLGRAVESTONEDOJI: bp,
  CDLHAMMER: wp,
  CDLHANGINGMAN: xp,
  CDLHARAMI: Cp,
  CDLHARAMICROSS: Tp,
  CDLHIGHWAVE: Sp,
  CDLHIKKAKE: Pp,
  CDLHIKKAKEMOD: Ep,
  CDLHOMINGPIGEON: Mp,
  CDLIDENTICAL3CROWS: Lp,
  CDLINNECK: Ap,
  CDLINVERTEDHAMMER: Op,
  CDLKICKING: Dp,
  CDLKICKINGBYLENGTH: Ip,
  CDLLADDERBOTTOM: Np,
  CDLLONGLEGGEDDOJI: Rp,
  CDLLONGLINE: kp,
  CDLMARUBOZU: $p,
  CDLMATCHINGLOW: Hp,
  CDLMATHOLD: _p,
  CDLMORNINGDOJISTAR: Fp,
  CDLMORNINGSTAR: Bp,
  CDLONNECK: Up,
  CDLPIERCING: Vp,
  CDLRICKSHAWMAN: zp,
  CDLRISEFALL3METHODS: Wp,
  CDLSEPARATINGLINES: Gp,
  CDLSHOOTINGSTAR: qp,
  CDLSHORTLINE: jp,
  CDLSPINNINGTOP: Xp,
  CDLSTALLEDPATTERN: Yp,
  CDLSTICKSANDWICH: Kp,
  CDLTAKURI: Zp,
  CDLTASUKIGAP: Qp,
  CDLTHRUSTING: Jp,
  CDLTRISTAR: e0,
  CDLUNIQUE3RIVER: t0,
  CDLUPSIDEGAP2CROWS: i0,
  CDLXSIDEGAP3METHODS: s0,
  CEIL: n0,
  CMO: Kl,
  CORREL: r0,
  COS: a0,
  COSH: o0,
  DEMA: l0,
  DIV: h0,
  DX: Zl,
  EMA: Ql,
  EXP: c0,
  FLOOR: u0,
  HT_DCPERIOD: d0,
  HT_DCPHASE: m0,
  HT_PHASOR: p0,
  HT_SINE: f0,
  HT_TRENDLINE: g0,
  HT_TRENDMODE: y0,
  IMI: v0,
  KAMA: b0,
  LINEARREG: w0,
  LINEARREG_ANGLE: x0,
  LINEARREG_INTERCEPT: C0,
  LINEARREG_SLOPE: T0,
  LN: S0,
  LOG10: P0,
  MA: Jl,
  MACD: eh,
  MACDEXT: E0,
  MACDFIX: M0,
  MAMA: L0,
  MAVP: A0,
  MAX: O0,
  MAXINDEX: D0,
  MEDPRICE: I0,
  MFI: th,
  MIDPOINT: N0,
  MIDPRICE: R0,
  MIN: k0,
  MININDEX: $0,
  MINMAX: H0,
  MINMAXINDEX: _0,
  MINUS_DI: F0,
  MINUS_DM: B0,
  MOM: U0,
  MULT: V0,
  NATR: z0,
  OBV: ih,
  PLUS_DI: W0,
  PLUS_DM: G0,
  PPO: sh,
  ROC: nh,
  ROCP: q0,
  ROCR: j0,
  ROCR100: X0,
  RSI: rh,
  SAR: ah,
  SAREXT: Y0,
  SIN: K0,
  SINH: Z0,
  SMA: oh,
  SQRT: Q0,
  STDDEV: J0,
  STOCH: lh,
  STOCHF: ef,
  STOCHRSI: hh,
  SUB: sf,
  SUM: nf,
  T3: rf,
  TAN: af,
  TANH: of,
  TEMA: lf,
  TRANGE: hf,
  TRIMA: cf,
  TRIX: uf,
  TSF: df,
  TYPPRICE: mf,
  ULTOSC: pf,
  VAR: ff,
  WCLPRICE: gf,
  WILLR: yf,
  WMA: vf
};
function wf(a, e, i) {
  throw new Error(`${a} ${e}`, i);
}
const xf = 5, Cf = [
  "highLowRange"
], Tf = ["outputLegend", "outputOrder", "render", "style"], Dt = new Rm();
class Ht {
  static standard = new Ht("standard");
  static subcomponent = new Ht("subcomponent");
  constructor(e) {
    this.name = e;
  }
}
class Me {
  static noData = new Me("noData");
  static hasData = new Me("hasData");
  static error = new Me("error");
  static destroyed = new Me("destroyed");
  constructor(e) {
    this.name = e;
  }
}
class It {
  #e = !0;
  #t = xf;
  constructor(e = !0, i = 5) {
    this.enable = e, this.period = N(i) ? i : 5;
  }
  set enable(e) {
    this.#e = j(e) ? e : !0;
  }
  get enable() {
    return this.#e;
  }
  set period(e) {
    this.#t = N(e) ? e : 5;
  }
  get period() {
    return this.#t;
  }
}
class V extends ee {
  static #e = 0;
  static get cnt() {
    return ++V.#e;
  }
  static get isIndicator() {
    return !0;
  }
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  #d;
  #m;
  #p;
  #g = "indicator";
  #y;
  #b;
  #x = [0, 0];
  #w;
  #f;
  #S = 2;
  #v = {};
  #P;
  #T = Me.noData;
  #C;
  #E;
  #L = { type: "", msg: "", style: "" };
  #A = !0;
  definition = {
    input: {},
    output: {},
    meta: {
      input: {},
      output: [],
      outputOrder: [],
      outputLegend: {},
      style: {}
    }
  };
  colours = [
    Dt.colours[8],
    Dt.colours[18],
    Dt.colours[28],
    Dt.colours[38],
    Dt.colours[48]
  ];
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, void 0, r, o), v(this.definition) || wf(`Indicator: ${this.shortName}`, "does not provide a valid definition");
    const l = o.overlay;
    this.#i = V.cnt, this.#m = l, this.id = l?.id || se(this?.shortName || l?.name), this.#s = l?.key || Bn(l), this.#y = this.core.TALib, this.#b = this.core.range, this.legendName = l?.legendName || l?.name || this?.shortName, this.#h = j(l?.legendVisibility) ? l.legendVisibility : !0, this.#A = j(l?.gapFill) ? l.gapFill : !0, this.#E = Dt, this.style = v(l?.settings?.style) ? { ...this.constructor.defaultStyle, ...l.settings.style } : { ...this.constructor.defaultStyle, ...n.style };
    const c = { title: `${this.legendName} Config`, content: "", params: l, parent: this };
    switch (this.#C = this.core.WidgetsG.insert("ConfigDialogue", c), l.settings?.context) {
      case "subcomponent":
        this.#a = Ht.subcomponent;
      case "standard":
      default:
        this.#a = Ht.standard;
    }
  }
  get id() {
    return this.#t || `${this.core.ID}-${this.chartPaneID}-${this.shortName}-${this.#i}`;
  }
  set id(e) {
    this.#t = dt(new String(e));
  }
  get key() {
    return this.#s;
  }
  get version() {
    return `${this.constructor?.version}`;
  }
  get context() {
    return this.#a;
  }
  get chartPane() {
    return this.core.ChartPanes.get(this.chartPaneID);
  }
  get chartPaneID() {
    return this.params.overlay.paneID;
  }
  get primaryPane() {
    return this.#o || this.constructor.primaryPane;
  }
  set primaryPane(e) {
    this.#o = e;
  }
  get scaleOverlay() {
    return this.#u;
  }
  set scaleOverlay(e) {
    this.#u = e;
  }
  get plots() {
    return this.#d;
  }
  set plots(e) {
    this.#d = e;
  }
  get Timeline() {
    return this.core.Timeline;
  }
  get scale() {
    return this.parent.scale;
  }
  get type() {
    return this.#g;
  }
  get overlay() {
    return this.#m;
  }
  get legend() {
    return this.chart.legend.list[this.#P];
  }
  get legendID() {
    return this.#P;
  }
  get legendName() {
    return this.#l || this.overlay?.name || this?.shortName || this.#t;
  }
  set legendName(e) {
    this.setLegendName(e);
  }
  set legendVisibility(e) {
    this.setLegendVisibility(e);
  }
  get indicator() {
    return this.#p;
  }
  get TALib() {
    return this.#y;
  }
  get range() {
    return this.core.range;
  }
  set setNewValue(e) {
    this.#w = e;
  }
  set setUpdateValue(e) {
    this.#f = e;
  }
  set precision(e) {
    this.#S = e;
  }
  get precision() {
    return this.#S;
  }
  set style(e) {
    v(e) && (this.#v = e);
  }
  get style() {
    return this.#v;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get isIndicator() {
    return V.isIndicator;
  }
  get isPrimary() {
    return this.chart.isPrimary;
  }
  set state(e) {
    e instanceof Me && (this.#T = e);
  }
  get state() {
    return this.#T;
  }
  set error(e) {
    this.setError(e);
  }
  get error() {
    return this.#L;
  }
  get gapFill() {
    return this.#A;
  }
  set gapFill(e) {
    this.#A = !!e;
  }
  get configDialogue() {
    return this.#C;
  }
  set value(e) {
    const i = this.core.timeData.timeFrameMS;
    let s = Math.floor(new Date(e[de.t]) / i) * i;
    e[de.t] = s, this.#x[de.t] !== e[de.t] ? (this.#x[de.t] = e[de.t], this.#w(e)) : this.#f(e);
  }
  get value() {
    return this.#x;
  }
  setError(e) {
    if (this.#T === Me.destroyed || !v(e) && !T(e?.type) && !T(e?.msg)) return !1;
    const i = { ...e };
    i.indicator = this, this.#L = e, this.state = Me.error, this.emit("indicator_error", i), this.core.warn(`WARNING: Indicator: ${this.shortName} ID: ${this.id} ${i.msg}`);
  }
  setLegendName(e) {
    this.#l = T(e) ? e : this.overlay?.name || this.shortName || this.#t, this.chart.legend.modify(this.#P, { legendName: this.#l });
  }
  setLegendVisibility(e) {
    this.#h = !!e, this.chart.legend.modify(this.#P, { legendVisibility: !!e });
  }
  setDefinitionValue(e, i) {
    let s = Object.keys(this.definition.input);
    if (s.includes(e))
      return this.definition.input[e] = i * 1, "input";
    if (s = Object.keys(this.style), s.includes(e))
      return this.style[e] = i, "style";
  }
  setRefresh() {
    super.setRefresh();
  }
  mustUpdate() {
    return super.mustUpdate();
  }
  init(e) {
    const i = this.params.overlay;
    this.defineIndicator(i, e), this.calcIndicatorHistory(), this.setNewValue = (s) => {
      this.newValue(s);
    }, this.setUpdateValue = (s) => {
      this.updateValue(s);
    }, this.#a === Ht.standard && (this.addLegend(), this.#C.start(), this.eventsListen(), this.setRefresh());
  }
  destroy(e = !0) {
    if (this.#T !== Me.destroyed) {
      if (!this.chartPane.indicatorDeleteList[this.id]) {
        this.core.warn(`Cannot "destroy()": ${this.id} !!! Use "indicator.remove()" or "chart.removeIndicator()" instead.`);
        return;
      }
      this.core.hub.expunge(this), this.chart.legend.remove(this.#P), this.clear(), this.core.MainPane.draw(void 0, !0), this.chartPane.graph.removeOverlay(this.id), super.destroy(), e && this.core.state.removeIndicator(this.id), this.#T = Me.destroyed;
    }
  }
  remove() {
    this.core.log(`Deleting indicator: ${this.id} from: ${this.chartPaneID}`), this.chart.type === "primaryPane" || Object.keys(this.chart.indicators).length > 1 ? this.emit(`${this.chartPaneID}_removeIndicator`, { id: this.id, paneID: this.chartPaneID }) : this.chart.remove();
  }
  snapshot() {
    return {
      id: this.id,
      key: this.key,
      name: this.params.overlay.name,
      type: this.shortName,
      data: this.data,
      settings: this.definition
    };
  }
  dataProxy(e, i = []) {
    const s = this.range, n = this.core.state, r = this.definition.meta.output, o = [], l = new Array(r.length + 1);
    l.fill(0);
    let c = s.dataLength;
    for (let m = 0; m <= c; m++)
      l[0] = s.data[m][0], o[m] = Array.from(l);
    I(e) && e(o, n, s), this.data.length = 0;
    for (let m of o)
      this.data.push(m);
  }
  visible(e) {
    return j(e) && (this.emit(`${this.chartPaneID}_visibleIndicator`, { id: this.id, paneID: this.chartPaneID, visible: e }), this.chartPane.indicators[this.id].layer.visible = e, this.draw()), this.chartPane.indicators[this.id].layer.visible;
  }
  settings(e) {
    return v(e) && (v(e?.config) && (this.params.overlay.settings = Ve(this.params.overlay.settings, e.config)), v(e?.style) && (this.style = Ve(this.style, e.style)), this.draw()), {
      config: this.params.overlay.settings,
      style: this.style,
      defaultStyle: this?.defaultStyle,
      plots: this.plots,
      precision: this.precision,
      definition: this.definition
    };
  }
  eventsListen() {
    this.on(et, this.onStreamUpdate, this), this.on(`window_opened_${this.id}`, this.onConfigDialogueOpen, this), this.on(`window_closed_${this.id}`, this.onConfigDialogueCancel, this), this.on(`window_submit_${this.id}`, this.onConfigDialogueSubmit, this), this.on(`window_cancel_${this.id}`, this.onConfigDialogueCancel, this), this.on(`window_default_${this.id}`, this.onConfigDialogueDefault, this);
  }
  on(e, i, s = this) {
    this.core.on(e, i, s);
  }
  off(e, i, s = this) {
    this.core.off(e, i, s);
  }
  emit(e, i) {
    this.core.emit(e, i);
  }
  onStreamNewValue(e) {
  }
  onStreamUpdate(e) {
    this.value = e;
  }
  onLegendAction(e) {
    const i = this.chart.legend.onPointerClick(e.currentTarget);
    switch (i.icon) {
      case "up":
        return;
      case "down":
        return;
      case "visible":
        this.onVisibility(i);
        return;
      case "notVisible":
        this.onVisibility(i);
        return;
      case "remove":
        this.remove();
        return;
      case "config":
        this.invokeSettings();
        return;
      default:
        return;
    }
  }
  onVisibility(e) {
    this.setRefresh(), this.visible(!this.visible()), e.parent.classList.toggle("visible"), e.parent.classList.toggle("notvisible");
  }
  onConfigDialogueOpen(e) {
    if (this.#C.state === Qe.opened) return;
    this.#C.setOpen();
    const i = this.#C.contentFields;
    for (let s in i)
      for (let n of i[s])
        n.classList.contains("subject") && n.getAttribute("data-oldval") !== n.value && n.setAttribute("data-oldval", n.value);
  }
  onConfigDialogueSubmit(e) {
    this.#C.setClose();
    let i, s = !1;
    const n = this.#C.contentFields;
    for (let r in n)
      for (let o of n[r])
        o.classList.contains("subject") && (o.setAttribute("data-oldval", o.value), i = this.setDefinitionValue(o.id, o.value), s = s || i == "input");
    s && (this.clear(), this.overlay.data.length = 0, this.calcIndicatorHistory()), this.setRefresh(), this.draw(), this.core.refresh();
  }
  onConfigDialogueCancel(e) {
    this.#C.setClose();
    const i = this.#C.contentFields;
    for (let s in i)
      for (let n of i[s])
        n.classList.contains("subject") && (n.value = n.getAttribute("data-oldval"));
    this.setRefresh(), this.draw();
  }
  onConfigDialogueDefault(e) {
    const i = this.#C.contentFields;
    for (let s in i)
      for (let n of i[s])
        if (n.classList.contains("subject")) {
          let r = n.getAttribute("data-default");
          n.value = r, this.style[n.id] = r;
        }
    this.calcIndicatorHistory(), this.setRefresh(), this.draw();
  }
  invokeSettings(e = {}) {
    let i;
    if (I(e?.fn)) {
      if (i = e.fn(this), e?.own) return i;
    } else if (I(this.core.config.callbacks?.indicatorSettings?.fn) && (i = this.core.config.callbacks.indicatorSettings.fn(this), this.core.config.callbacks?.indicatorSettings?.own))
      return i;
    this.core.log(`invokeSettings: ${this.id}`);
    const s = this.#C;
    if (s.update) {
      if (!I(this.configInputs))
        return this.core.error(`ERROR: Indicator ${this.name} does not provide configInputs() required for the settings dialogue`), !1;
      const n = this.configInputs(), { html: r, modifiers: o } = s.configBuild(n), l = `${this.shortName} Config`;
      s.setTitle(l), s.setContent(r, o), s.update = !1;
    }
    return s.state.name === "closed" ? s.open() : s.setOpen(), !0;
  }
  configInputs() {
    const s = { "No Config": { tab1: `Indicator ${this.name || this.shortName || this.id} is not configurable.` } };
    let n = {}, r = this?.definition?.meta;
    if (!v(r) && !v(this?.style) && !v(this?.definition?.input))
      return s;
    for (let o in r)
      Tf.includes(o) || (n[o] = r[o]);
    if (Object.keys(n).length == 0)
      n = s;
    else
      for (let o in n)
        this.dataOldDefault(n[o]);
    return n;
  }
  dataOldDefault(e) {
    if (E(e))
      for (let i of e)
        this.dataOldDefault(i);
    else if (v(e))
      for (let i in e) {
        let s = v(e[i]) ? e[i] : e, n = Object.keys(s);
        n.includes("data-oldval") || (s["data-oldval"] = s?.value), n.includes("data-default") || (s["data-default"] = s?.default ? s?.default : s?.value);
      }
  }
  outputValueNumber(e, i, s) {
    let n = [s];
    return {
      type: "number",
      min: "0",
      d: i,
      listeners: n,
      fn: (r) => {
        this.configDialogue.provideEventListeners(`#${e}`, n)(r);
      }
    };
  }
  fieldEventChange() {
    return {
      event: "change",
      fn: (e) => {
        this.fieldTargetUpdate(e.target.id, e.target.value), this.setRefresh(), this.draw();
      }
    };
  }
  fieldTargetUpdate(e, i) {
    let s = this.definition.meta.style;
    for (let n in s)
      for (let r in s[n])
        v(s[n][r]) && s[n][r].entry == e && (s[n][r]["data-oldval"] = s[n][r].value, s[n][r].value = i);
  }
  configInputObject(e, i, s) {
    i instanceof It && (e[i.period] = this.configField(i.period, i.period, "number", s, s), e.$function = function(n) {
      const r = n.querySelector(`#${i.period}`), o = document.createElement("input");
      o.id = `"enable${i.period}`, o.checked = i.enable, o.addEventListener("change", (l) => {
        l.currentTarget.checked ? console.log(`enable ${l.currentTarget.id}`) : console.log(`disable ${l.currentTarget.id}`);
      }), r && r.insertAdjacentElement("beforebegin", o);
    });
  }
  defineIndicator(e, i) {
    let s = this.retrieveInput(e);
    i = v(i) ? i : { outputs: [], options: [] };
    const n = {
      input: {},
      output: {},
      meta: {
        input: {},
        output: [],
        outputOrder: [],
        outputLegend: {},
        style: {}
      }
    };
    v(this.definition) || (this.definition = n), this.definition = Ve(n, this.definition);
    let r = this.definition, o = r.meta, l = [], c = bf?.[this.libName]?.outputs || [];
    r.input = v(r.input) ? { ...r.input, ...s } : s, r.output = v(r.output) ? r.output : {}, o = v(o) ? o : n.meta, o.input = v(o.input) ? o.input : {}, o.output = !E(o.output) || !o.output.length ? c : [...c, ...o.output], o.outputOrder = E(o.outputOrder) ? o.outputOrder : [], o.outputLegend = v(o.outputLegend) ? o.outputLegend : {}, Go(o.style) || (o.style = this.style || {}), this.validateInputs(r, s, i), this.populateMetaInputs(r), this.validateOutputs(r, i, l), this.buildOutputOrder(o, l), this.buildOutputLegends(r), this.buildConfigOutputTab(o);
  }
  retrieveInput(e) {
    return v(e?.input) ? e.input : v(e?.settings?.input) ? e.settings.input : {};
  }
  validateInputs(e, i, s) {
    const n = { ...e.input, ...i };
    delete n.style, e.input = n;
    for (let r of s.options)
      r.name in e.input || (e.input[r.name] = s.options[r.name]);
    this.validate(e.input, s.options, e);
  }
  validateOutputs(e, i, s) {
    if (Object.keys(e.output).length == 0)
      for (let r of i.outputs)
        e.output[r.name] = [];
    let n = !0;
    if (Object.keys(e.meta.output).length > 0) {
      n = !1;
      for (let r of e.meta.output)
        v(r) && s.push(r.name);
    }
    for (let r in e.output)
      E(e.output[r]) || (e.output[r] = []), n && s.push(r);
  }
  populateMetaInputs(e) {
    let i = e.input, s = e.meta.input;
    for (let n in s)
      s[n].value = i[n];
  }
  buildOutputOrder(e, i) {
    let s = [.../* @__PURE__ */ new Set([...e.outputOrder, ...i])], n = di(s, i);
    for (let r of n) {
      if (Cf.includes(r)) continue;
      let o = s.indexOf(r);
      s.splice(o, 1);
    }
    e.outputOrder = s;
  }
  buildOutputLegends(e) {
    let i = e.meta;
    Object.keys(e.output);
    for (let [s, n] of Object.entries(i.outputLegend))
      v(n) || (i.outputLegend[s] = {}), T(i.outputLegend[s].labelStr) || (i.outputLegend[s].label = !1, i.outputLegend[s].labelStr = ""), j(i.outputLegend[s].label) || (i.outputLegend[s].label = !1), j(i.outputLegend[s].value) || (i.outputLegend[s].value = !1);
  }
  buildConfigOutputTab(e) {
    for (let i in e.style)
      typeof e.style[i] != "object" && delete e.style[i];
    for (let i = 0; i < e.output.length; i++) {
      let s = e.output[i];
      switch (Ha(s?.plot)) {
        case "renderLine":
          s.style = this.defaultMetaStyleLine(s, i, e.style);
          break;
        case "histogram":
          return "histogram";
        case "highLow":
          return "highLow";
      }
    }
  }
  defaultMetaStyleLine(e, i, s) {
    let n;
    e.name = e?.name ? e.name : "output", v(s?.[e.name]) || (s[e.name] = {});
    let r = new pt(s[e.name]?.colour?.value);
    if (r.isValid)
      n = r.value.hexa;
    else {
      let o = this.colours.length;
      n = i <= o ? this.colours[i] : this.colours[o % i];
    }
    return s[e.name].colour = this.defaultOutputField(`${e.name}Colour`, `${e.name} Colour`, n, "color"), P(s[e.name]?.width?.value) ? n = s[e.name]?.width.value : n = 1, s[e.name].width = this.defaultOutputField(`${e.name}Width`, `${e.name} Width`, n, "number", 0), "dash" in s[e.name] && s[e.name].dash && (n = s[e.name]?.dash?.value, s[e.name].dash = this.defaultOutputField(`${e.name}dash`, `${e.name} Dash`, n, "dash", void 0, void 0)), s[e.name];
  }
  defaultOutputField(e, i, s, n, r, o, l) {
    let c, m, f, C = this.fieldEventChange();
    switch (n) {
      case "number":
        m = [C], c = (L) => {
          this.configDialogue.provideEventListeners(`#${e}`, m)(L);
        };
        break;
      case "color":
        m = [C, Sf, Pf], c = (L) => {
          this.configDialogue.provideInputColor(L, `#${e}`), this.configDialogue.provideEventListeners(`#${e}`, m)(L);
        }, n = "text";
        break;
      case "dash":
        m = [C], c = (L) => {
          this.configDialogue.provideEventListeners(`#${e}`, m)(L);
        }, n = "select";
        let M = {};
        for (let L in Ca)
          M[L] = Ca[L].toString();
        f = M;
        break;
    }
    return this.configField(e, i, n, s, s, r, o, c, i, f);
  }
  configField(e, i, s, n, r, o, l, c, m, f) {
    r = r || n, m = m || i, P(o) && P(l) && o > l ? [l, o] = [o, l] : P(o) && P(l) && (n = B(n, o, l));
    let C = {
      entry: e,
      label: i,
      type: s,
      value: n,
      default: r,
      "data-oldval": n,
      "data-default": r,
      $function: c,
      title: m
    };
    return P(o) && (C.min = o), P(l) && (C.max = l), v(f) && Object.keys(f).length && (C.options = f), C;
  }
  defaultColour() {
    return "#fff";
  }
  addLegend() {
    let e = {
      id: this.id,
      title: this.legendName,
      visible: this.#h,
      type: "indicator",
      parent: this,
      source: this.legendInputs.bind(this)
    };
    this.#P = this.chart.legend.add(e);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0) return !1;
    const i = [], s = [], n = {}, r = this.Timeline.xPos2Index(e[0]), o = this.overlay.data.length;
    this.definition.meta.outputOrder, this.definition.meta.outputLegend;
    let l = r - (this.range.data.length - o), c = B(o - 1, 0, 1 / 0);
    l = B(l, 0, c);
    let m = 0;
    for (let f of this.definition.meta.output) {
      let C = this.overlay.data[l];
      f.type == "overlay" || !E(C) || C.length == 0 || (i[m] = !1, n[f.name] = this.scale.nicePrice(this.overlay.data[l][m + 1]), f.plot == "histogram" ? this.overlay.data[l][m + 1] < 0 ? s[m] = this.definition.meta.style?.[f.name].dnStroke : s[m] = this.definition.meta.style?.[f.name].upStroke : s[m] = this.definition.meta.style?.[f.name]?.colour?.value || "#ccc", m++);
    }
    return { inputs: n, colours: s, labels: i };
  }
  indicatorInput(e, i) {
    let s = this.core.state.gaps.list, n, r, o = {
      inReal: [],
      open: [],
      high: [],
      low: [],
      close: [],
      volume: []
    };
    do
      n = this.range.value(e), this.#A && `${n[0]}` in s ? r = s[`${n[0]}`] : r = n, o.inReal.push(r[de.c]), o.open.push(r[de.o]), o.high.push(r[de.h]), o.low.push(r[de.l]), o.close.push(r[de.c]), o.volume.push(r[de.v]);
    while (e++ < i);
    return o;
  }
  regeneratePlots(e) {
    return e.map((i, s) => {
      const n = s + 1;
      return {
        key: `${this.shortName}${n}`,
        title: `${this.shortName}${n}: `,
        type: "line"
      };
    });
  }
  getTimePeriod() {
    let e = 0, i = this.definition.input, s = this.constructor?.timePeriodMultiplier ? 2 : 1;
    if ("timePeriod" in i)
      e = i.timePeriod * s;
    else {
      for (let n in i)
        N(i[n]) && i[n] > e && (e = i[n]);
      e *= s;
    }
    return e;
  }
  TALibParams() {
    let e = this.range.dataLength, i = this.getTimePeriod(), s = e - i, n = this.indicatorInput(s, e);
    return n.inReal.find((o) => o === null) ? !1 : { timePeriod: i, ...n };
  }
  formatValue(e) {
    let i = [], s = 0;
    for (let n in this.definition.output)
      i[s++] = e[n][0];
    return i;
  }
  noCalc(e, i = this.range) {
    return this.chart.status == "destroyed" || !this.core.TALibReady || !T(e) || !(e in this.TALib) || !v(i) || i.dataLength < this.definition.input.timePeriod;
  }
  noCalcCustom(e, i = this.range) {
    return this.chart.status == "destroyed" || !this.core.TALibReady || !I(e) || !v(i) || i.dataLength < this.definition.input.timePeriod;
  }
  calcIndicator(e, i = {}, s, n) {
    let r;
    if (!this.noCalcCustom(e))
      r = e;
    else if (!this.noCalc(e, s))
      r = this.TALib[e];
    else return !1;
    let o = this.getTimePeriod(), l, c, m = o, f = m + (i?.padding || 0), C = this.overlay.data;
    if (s instanceof ns)
      l = 0, c = s.dataLength - f + 1;
    else if (v(s))
      l = s?.indexStart || this.Timeline.t2Index(s?.tsStart || 0) || 0, c = s?.indexEnd || this.Timeline.t2Index(s?.tsEnd) || s.dataLength - f + 1;
    else return !1;
    if (E(C)) {
      if (C.length != 0) if (C.length + f !== s.dataLength)
        if (C[0][0] > s.value(f)[0])
          l = 0, c = s.getTimeIndex(C[0][0]) - f, c = B(c, f, s.dataLength - 1);
        else if (C[C.length - 1][0] < s.value(s.dataLength - 1)[0])
          l = C.length - 1 + f, l = B(l, 0, s.dataLength), c = s.dataLength - 1;
        else return !1;
      else if (bi(n, "integer"))
        console.log("updating a chunk of indicator history", n), l = this.Timeline.t2Index(n[0]), c = this.Timeline.t2Index(n[n.length - 1]) - f, c - l < f && (l = l - f < 0 ? 0 : l - f);
      else return !1;
    } else return !1;
    if (c < f)
      return this.setError({ type: "noData", msg: "Insufficient input data" }), !1;
    c - l < f && (l -= f + m - (c - l));
    let M = [], L, D, k;
    for (; l < c; )
      D = this.indicatorInput(l, l + f), i = { ...i, ...D }, L = r(i), k = this.formatValue(L), M.push([s.value(l + m - 1)[0], ...k]), l++;
    return M;
  }
  calcIndicatorHistory(e) {
    const i = () => {
      let s = this.overlay.data;
      const n = this.calcIndicator(this.libName, this.definition.input, this.range, e);
      if (E(n)) {
        new Set(n), new Set(s);
        let r, o, l = {};
        if (!E(s) || s.length == 0) {
          this.overlay.data = n;
          return;
        } else if (n.length) n[0][0] < s[0][0] ? (r = n, o = s) : (n[n.length - 1][0] > s[s.length - 1][0], r = s, o = n);
        else return;
        for (let c of r)
          l[c[0]] = c;
        for (let c of o)
          l[c[0]] = c;
        this.overlay.data = Object.values(l), this.state = Me.hasData, this.setRefresh();
      }
    };
    this.core.TALibReady ? i() : this.core.talibAwait.push(i.bind(this));
  }
  calcIndicatorStream(e, i, s = this.range) {
    if (!(s instanceof ns)) return !1;
    let n;
    if (!this.noCalcCustom(e))
      n = e;
    else if (!this.noCalc(e, s))
      n = this.TALib[e];
    else return !1;
    let r = n(i), o = s.dataLength, l = s.value(o)[0], c = this.formatValue(r);
    return [l, ...c];
  }
  newValue(e) {
    this.#O(
      (i) => this.overlay.data.push(i)
    );
  }
  updateValue(e) {
    this.#O(
      (i) => {
        let s = this.overlay.data.length - 1;
        this.overlay.data[s] = i;
      }
    );
  }
  #O(e) {
    let i = this.TALibParams();
    if (!i) return !1;
    let s = this.calcIndicatorStream(this.libName, i);
    if (!s) return !1;
    e(s), this.state = Me.hasData, this.target.setPosition(this.core.scrollPos, 0), this.doDraw = !0, this.draw(this.range);
  }
  plot(e, i, s) {
    super.plot(e, i, s);
  }
  plotIt(e, i, s, n, r) {
    const o = this.overlay.data, l = this.xAxis.candleW, c = this.yAxis.yPos(0), m = { w: l, zero: c }, f = {};
    let C = [];
    for (; e; )
      i < 0 || i >= o.length || !E(o[i]) ? C.push({ x: null, y: null }) : (m.x = this.xAxis.xPos(o[i][0]), m.y = this.yAxis.yPos(o[i][s]), C.push({ ...m })), i++, e--;
    for (let M in r)
      r[M]?.value && (f[M] = r[M].value);
    this.plot(C, n, f);
  }
  draw(e = this.range) {
    const i = this.overlay.data;
    if (i.length < 2 || !super.mustUpdate()) return;
    this.clear(), this.xAxis.smoothScrollOffset;
    const s = this.definition.meta, n = {};
    let r = this.Timeline.rangeScrollOffset, o = e.data.length - i.length, l = e.indexStart - o - 2, c = e.Length + r * 2 + 2, m = 1;
    if (!s.output.length)
      return super.updated();
    for (let M of s.output) {
      let L = Ha(M.plot);
      L && (n[M?.name] = { x: m++, r: L });
    }
    let C = (s?.outputOrder.length > 0 ? s.outputOrder : Object.keys(n)).reverse();
    for (let M of C) {
      let L = this.formatStyle(this.definition.meta.style[M], M);
      this.plotIt(c, l, n[M].x, n[M].r, L);
    }
    this.target.viewport.render(), super.updated();
  }
  formatStyle(e, i) {
    let s, n = {};
    for (let r in e) {
      switch (s = r.replace(i, "").toLowerCase(), s) {
        case "colour":
          s = "stroke";
          break;
      }
      n[s] = e[r];
    }
    return n;
  }
  updated() {
    this.setRefresh(), super.updated();
  }
  validate(e, i, s) {
    let n = s.meta, r;
    for (let o of i) {
      r = typeof e[o.name] == "object" ? e[o.name]?.value : e[o.name], e[o.name] = typeof r !== o.type ? o.defaultValue : r, "range" in i && (e[o.name] = B(e[o.name], o.range.min, o.range.max));
      const l = this.configField(
        o?.name,
        o?.displayName,
        o?.type,
        e[o.name],
        o?.defaultValue,
        o?.range?.min,
        o?.range?.max,
        void 0,
        o?.hint
      );
      n.input[o.name] = { ...l, ...n.input[o.name] };
    }
  }
}
function Ha(a) {
  switch (a) {
    case "line":
    case "line_dash":
    case "limit_lower":
    case "limit_upper":
      return "renderLine";
    case "histogram":
      return "histogram";
    case "highLowRange":
      return "highLowRange";
    default:
      return !1;
  }
}
const Sf = {
  event: "pointerover",
  fn: (a) => {
    a.target.style.border = "1px solid #f00;";
  }
}, Pf = {
  event: "pointerout",
  fn: (a) => {
    a.target.style.border = "none;";
  }
};
function Bn(a) {
  const e = JSON.stringify(a), i = sr(e);
  return `${ut}_Indicator_${i}`;
}
let qs = "ADX", _a = "Average Directional Movement Index";
class Ef extends V {
  get name() {
    return _a;
  }
  shortName = qs;
  libName = qs;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = qs;
  static nameLong = _a;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.percent;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 75 },
      low: { value: 25 }
    }
  };
  static timePeriodMultiplier = !0;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(Gl);
  }
}
let js = "ATR", Fa = "Average True Range";
class Mf extends V {
  get name() {
    return Fa;
  }
  shortName = js;
  libName = js;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = js;
  static nameLong = Fa;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 75 },
      low: { value: 25 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(jl);
  }
}
let Xs = "AROON", Ba = "AROON";
class Lf extends V {
  get name() {
    return Ba;
  }
  shortName = Xs;
  libName = Xs;
  definition = {
    input: {
      high: [],
      low: [],
      timePeriod: 14
    },
    output: {
      aroonDown: [],
      aroonUp: []
    }
  };
  precision = 2;
  scaleOverlay = !0;
  static nameShort = Xs;
  static nameLong = Ba;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.percent;
  static defaultStyle = {
    aroonDown: {
      colour: { value: "#c89" },
      width: { value: 1 },
      dash: { value: "" }
    },
    aroonUp: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(ql);
  }
}
let Ua = "BB", Va = "Bollinger Bands";
class Af extends V {
  get name() {
    return Va;
  }
  shortName = Ua;
  libName = "BBANDS";
  definition = {
    input: {
      inReal: [],
      nbDevDn: 2,
      nbDevUp: 2,
      timePeriod: 20
    },
    output: {
      lowerBand: [],
      middleBand: [],
      upperBand: []
    },
    meta: {}
  };
  precision = 2;
  scaleOverlay = !1;
  static nameShort = Ua;
  static nameLong = Va;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static defaultStyle = {
    lowerBand: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    },
    middleBand: {
      colour: { value: "#0080c088" },
      width: { value: 1 },
      dash: { value: [20, 5] }
    },
    upperBand: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    },
    fill: {
      colour: { value: "#0080c044" }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(Xl);
  }
}
let Ys = "CCI", za = "Commodity Channel Index";
class Of extends V {
  get name() {
    return za;
  }
  shortName = Ys;
  libName = Ys;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = Ys;
  static nameLong = za;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 100 },
      low: { value: -100 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(Yl);
  }
}
let Ks = "CMO", Wa = "Chande Momentum Oscillator";
class Df extends V {
  get name() {
    return Wa;
  }
  shortName = Ks;
  libName = Ks;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = Ks;
  static nameLong = Wa;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 75 },
      low: { value: 25 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(Kl);
  }
}
let Ga = "DMI", qa = "Average Directional Movement Index";
class If extends V {
  static nameShort = Ga;
  static nameLong = qa;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static yAxisPadding = vs;
  static colours = [];
  static defaultStyle = {
    "DI+": {
      colour: { value: "#0f0" },
      width: { value: 1 },
      dash: { value: [] }
    },
    "DI-": {
      colour: { value: "#f00" },
      width: { value: 1 },
      dash: { value: [] }
    },
    ADX: {
      colour: { value: "#00f" },
      width: { value: 1 },
      dash: { value: [] }
    }
  };
  static timePeriodMultiplier = !0;
  #e = 2;
  get name() {
    return qa;
  }
  shortName = Ga;
  scaleOverlay = !1;
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    },
    meta: {
      output: [
        { name: "DI+", type: "custom", plot: "line" },
        { name: "DI-", type: "custom", plot: "line" },
        { name: "ADX", type: "custom", plot: "line" }
      ],
      outputOrder: ["DMI+", "DMI-", "ADX"],
      outputLegend: {
        "DI+": { labelStr: "DI+", label: !0, value: !0 },
        "DI-": { labelStr: "DI-", label: !0, value: !0 },
        ADX: { labelStr: "ADX", label: !0, value: !0 }
      }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(), this.on("trade_added", this.tradeAdded);
  }
  get data() {
    return this.overlay.data;
  }
  get overlayData() {
    return this.overlay.data;
  }
  calcIndicator(e, i = {}, s = this.range) {
    let n = super.calcIndicator("PLUS_DI", i, s), r = super.calcIndicator("MINUS_DI", i, s), o = super.calcIndicator("ADX", i, s);
    if (!n && !r && !o) return !1;
    for (let l = 0; l < n.length; l++)
      n[l][2] = r[l][1], n[l][3] = o[l][1];
    return n;
  }
  calcIndicatorStream(e, i = {}, s = this.range) {
    let n = s.value()[0], r = s.getTimeIndex(n);
    return this.data[r] = [n, 0, 0], !1;
  }
}
let Zs = "DX", ja = "Directional Movement Index";
class Nf extends V {
  get name() {
    return ja;
  }
  shortName = Zs;
  libName = Zs;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = Zs;
  static nameLong = ja;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.percent;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 75 },
      low: { value: 25 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(Zl);
  }
}
let Qs = "EMA", Xa = "Exponential Moving Average";
class Tr extends V {
  get name() {
    return Xa;
  }
  shortName = Qs;
  libName = Qs;
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    },
    meta: {
      input: {
        timePeriod: {
          entry: "timePeriod",
          label: "Period",
          type: "number",
          value: 5,
          default: 30,
          min: "3",
          title: "Number of time units to use in calculation",
          $function: this.configDialogue.provideEventListeners(
            "#Period",
            [{
              event: "change",
              fn: (e) => {
                console.log(`#Period = ${e.target.value}`);
              }
            }]
          )
        }
      }
    }
  };
  precision = 2;
  checkParamCount = !1;
  scaleOverlay = !1;
  static nameShort = Qs;
  static nameLong = Xa;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    output: {
      colour: { value: "#C80" },
      width: { value: 1 },
      dash: { value: [] }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), Tr.inCnt++, this.init(Ql);
  }
}
let Js = "MA", Ya = "Moving Average";
class _t extends V {
  get name() {
    return Ya;
  }
  shortName = Js;
  libName = Js;
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  static nameShort = Js;
  static nameLong = Ya;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    output: {
      colour: { value: "#9C27B0" },
      width: { value: 1 },
      dash: { value: [] }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), _t.inCnt++, this.init(Jl);
  }
}
let en = "MMA", Ka = "Moving Average Multi";
class Nt extends V {
  static nameShort = en;
  static nameLong = Ka;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    ct[8],
    ct[18],
    ct[28],
    ct[38],
    ct[48]
  ];
  static defaultStyle = {
    stroke1: Nt.colours[0],
    width1: "1",
    stroke2: Nt.colours[1],
    width2: "1",
    stroke3: Nt.colours[2],
    width3: "1",
    stroke4: Nt.colours[3],
    width4: "1",
    stroke5: Nt.colours[4],
    width5: "1"
  };
  get name() {
    return Ka;
  }
  shortName = en;
  libName = en;
  definition = {
    input: {
      inReal: [],
      timePeriod1: new It(!0, 5),
      timePeriod2: new It(!0, 10),
      timePeriod3: new It(!0, 20),
      timePeriod4: new It(!0, 30),
      timePeriod5: new It(!0, 50)
    },
    output: {
      output1: [],
      output2: [],
      output3: [],
      output4: [],
      output5: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  plots = [
    { key: "MA_1", title: "MA: ", type: "line" }
  ];
  #t = 3;
  #i = 5;
  MA = {
    MA1: { enabled: !1, ma: null },
    MA2: { enabled: !1, ma: null },
    MA3: { enabled: !1, ma: null },
    MA4: { enabled: !1, ma: null },
    MA5: { enabled: !1, ma: null }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), _t.inCnt++;
    const l = o.overlay.settings?.MAChildren || this.MA;
    this.#t = Object.keys(l).length, this.MA.ma1 = new _t(e, i = !1, s = !1, n, r, o), this.MA.ma2 = new _t(e, i = !1, s = !1, n, r, o);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0) return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.MA_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate()) return;
    this.scene.clear();
    const i = this.overlay.data, s = this.xAxis.candleW, n = [];
    this.xAxis.smoothScrollOffset;
    const r = {
      w: s
    };
    let o = this.Timeline.rangeScrollOffset, l = e.data.length - this.overlay.data.length, c = e.indexStart - l - 2, m = e.Length + o * 2 + 2;
    for (; m; )
      c < 0 || c >= this.overlay.data.length ? n.push({ x: null, y: null }) : (r.x = this.xAxis.xPos(i[c][0]), r.y = this.yAxis.yPos(i[c][1]), n.push({ ...r })), c++, m--;
    this.plot(n, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
let tn = "MACD", Rf = "Moving Average Convergence/Divergence";
class Sr extends V {
  get name() {
    return "Moving Average Convergence/Divergence";
  }
  shortName = tn;
  libName = tn;
  definition = {
    input: {
      inReal: [],
      fastPeriod: 12,
      slowPeriod: 26,
      signalPeriod: 9
    },
    output: {
      MACD: [],
      MACDSignal: [],
      MACDHist: []
    },
    meta: {
      outputOrder: [
        "MACD",
        "MACDSignal",
        "MACDHist"
      ],
      outputLegend: {
        MACD: { labelStr: "MACD", label: !1, value: !0 },
        MACDSignal: { labelStr: "Signal", label: !1, value: !0 },
        MACDHist: { labelStr: "Hist", label: !1, value: !0 }
      }
    }
  };
  #e = 2;
  scaleOverlay = !1;
  static nameShort = tn;
  static nameLong = Rf;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static yAxisPadding = vs;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    MACD: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    },
    MACDSignal: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    },
    MACDHist: {
      upStroke: "#0f0",
      upFill: "#0c0",
      upWidth: "1",
      dnStroke: "#f00",
      dnFill: "#c00",
      dnWidth: "1"
    }
  };
  static timePeriodMultiplier = !0;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), Sr.inCnt++, this.init(eh);
  }
  draw() {
    return super.draw();
  }
}
let sn = "MFI", Za = "Money Flow Index";
class kf extends V {
  get name() {
    return Za;
  }
  shortName = sn;
  libName = sn;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = sn;
  static nameLong = Za;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.percent;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 100 },
      low: { value: -100 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(th);
  }
}
let nn = "OBV", Qa = "On Balance Volume";
class $f extends V {
  get name() {
    return Qa;
  }
  shortName = nn;
  libName = nn;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = nn;
  static nameLong = Qa;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.default;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 100 },
      low: { value: -100 }
    }
  };
  static timePeriodMultiplier = !0;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(ih);
  }
}
let rn = "PPO", Hf = "Percentage Price Oscillator";
class _f extends V {
  get name() {
    return "Percentage Price Oscillator";
  }
  shortName = rn;
  libName = rn;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = rn;
  static nameLong = Hf;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static yAxisPadding = vs;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 100 },
      low: { value: -100 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(sh);
  }
}
let an = "PSAR", Ja = "Parabolic Stop and Reverse";
class Ff extends V {
  get name() {
    return Ja;
  }
  shortName = an;
  libName = an;
  precision = 2;
  scaleOverlay = !1;
  static nameShort = an;
  static nameLong = Ja;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(ah);
  }
}
let on = "ROC", eo = "Rate of Change";
class Bf extends V {
  get name() {
    return eo;
  }
  shortName = on;
  libName = on;
  precision = 2;
  scaleOverlay = !0;
  static nameShort = on;
  static nameLong = eo;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static yAxisPadding = vs;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 100 },
      low: { value: -100 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(nh);
  }
}
let ln = "RSI", to = "Average Directional Movement Index";
class hs extends V {
  get name() {
    return to;
  }
  shortName = ln;
  libName = ln;
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    },
    meta: {
      outputOrder: [
        "output",
        "highLowRange"
      ],
      output: [
        { name: "highLowRange", type: "overlay", plot: "highLowRange", style: hs.defaultStyle.highLow }
      ],
      style: hs.defaultStyle
    }
  };
  checkParamCount = !1;
  static nameShort = ln;
  static nameLong = to;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.percent;
  static defaultStyle = {
    output: {
      colour: { value: "#E91E63" },
      width: { value: 1 },
      dash: { value: [] }
    },
    highLowRange: {
      colour: { value: "#880E4F" },
      width: { value: 1 },
      dash: { value: [2, 2] },
      fill: { value: "#880E4F08" },
      high: { value: 75 },
      low: { value: 25 }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(rh);
  }
}
let hn = "SMA", io = "Simple Moving Average";
class Pr extends V {
  get name() {
    return io;
  }
  shortName = hn;
  libName = hn;
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  static nameShort = hn;
  static nameLong = io;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    output: {
      colour: { value: "#0097A7" },
      width: { value: 1 },
      dash: { value: [] }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), Pr.inCnt++, this.init(oh);
  }
}
let cn = "STOCH", so = "Stochastic Oscillator";
class w1 extends V {
  get name() {
    return so;
  }
  shortName = cn;
  libName = cn;
  definition = {
    input: {
      high: [],
      low: [],
      close: [],
      fastK_Period: 5,
      slowK_Period: 3,
      slowD_Period: 3
    },
    output: {
      slowK: [],
      slowD: []
    }
  };
  checkParamCount = !1;
  static nameShort = cn;
  static nameLong = so;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static defaultStyle = {
    slowK: {
      colour: { value: "#c89" },
      width: { value: 1 },
      dash: { value: "" }
    },
    slowD: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    }
  };
  static timePeriodMultiplier = !0;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(lh);
  }
}
let un = "STOCHRSI", no = "Stochastic RSI";
class Uf extends V {
  get name() {
    return no;
  }
  shortName = un;
  libName = un;
  definition = {
    input: {
      inReal: [],
      timePeriod: 14,
      stochPeriod: 14,
      KPeriod: 3,
      DPeriod: 3
    },
    output: {
      fastK: [],
      fastD: []
    }
  };
  checkParamCount = !1;
  static nameShort = un;
  static nameLong = no;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = !1;
  static scale = R.relative;
  static defaultStyle = {
    fastK: {
      colour: { value: "#c89" },
      width: { value: 1 },
      dash: { value: "" }
    },
    fastD: {
      colour: { value: "#08c" },
      width: { value: 1 },
      dash: { value: "" }
    }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.init(hh);
  }
}
class ch {
  constructor(e, i) {
    this.scene = e, this.ctx = this.scene.context, this.width = this.scene.width, this.theme = i, this.dpr = window.devicePixelRatio || 1;
  }
  alignToPixel(e) {
    return Math.round(e * this.dpr) / this.dpr;
  }
  draw(e) {
    const i = this.ctx, n = e.raw[4] >= e.raw[1] ? this.theme.up.colour.value : this.theme.dn.colour.value;
    let r = Math.max(e.w - 1, 1), o = r * 0.5;
    r = this.alignToPixel(r);
    const c = this.alignToPixel(e.x) - r / 2 + o, m = this.alignToPixel(e.h), f = this.alignToPixel(e.z);
    i.save(), i.fillStyle = n, i.fillRect(
      c,
      f - m,
      r,
      m
    ), i.restore();
  }
}
let ro = "VOL", ao = "Volume";
class Er extends V {
  get name() {
    return ao;
  }
  shortName = ro;
  checkParamCount = !1;
  scaleOverlay = !0;
  definition = {
    meta: {
      style: {
        up: { colour: { value: "#388E3C" } },
        dn: { colour: { value: "#D32F2F" } },
        height: { percent: { value: 15 } }
      }
    }
  };
  #e = xs.volume;
  #t;
  #i = "both";
  static nameShort = ro;
  static nameLong = ao;
  static version = "1.0";
  static inCnt = 0;
  static primaryPane = "both";
  static scale = R.percent;
  static defaultStyle = {
    up: { colour: { value: "#388E3C" } },
    dn: { colour: { value: "#D32F2F" } },
    height: { percent: { value: 15 } }
  };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), Er.inCnt++;
    const l = o.overlay;
    this.id = o.overlay?.id || se(this.shortName), this.#e = { ...this.defaultStyle, ...this.theme.volume }, this.style = l?.settings?.style ? { ...this.#e, ...l.settings.style } : { ...this.#e, ...n.style }, this.chart.type === "primaryPane" ? (this.style.Height = B(this.style.Height, 0, 100) || 100, this.#i = !0) : (this.style.Height = 100, this.#i = !1), this.mStyle.up.colour.value = this.style.UpColour, this.mStyle.dn.colour.value = this.style.DnColour, this.mStyle.height.percent.value = this.style.Height, this.#t = new ch(e.scene, this.mStyle), this.addLegend(), this.configDialogue.start();
  }
  get primaryPane() {
    return this.#i;
  }
  get defaultStyle() {
    return this.#e;
  }
  get mStyle() {
    return this.definition.meta.style;
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.range.dataLength == 0) return !1;
    const i = super.Timeline.xPos2Index(e[0]), s = B(i, 0, this.range.data.length - 1), n = this.range.data[s];
    this.chart.theme.candle;
    const r = n[4] >= n[1] ? [this.mStyle.up.colour.value.slice(0, 7)] : [this.mStyle.dn.colour.value.slice(0, 7)];
    return { inputs: { V: this.scale.nicePrice(n[5]) }, colours: r };
  }
  calcIndicatorHistory() {
  }
  draw(e = this.range) {
    if (e.dataLength < 2 || !this.mustUpdate()) return !1;
    this.scene.clear();
    const i = e.data, s = this.scene.height, n = this.xAxis.smoothScrollOffset || 0;
    let r = Math.max(this.xAxis.candleW - 1, 1);
    r = yi(r);
    const o = {
      x: 0 + n - this.xAxis.candleW,
      w: r,
      z: s
    }, l = Math.floor(s * this.mStyle.height.percent.value / 100);
    let c = this.core.rangeScrollOffset, m = e.indexStart - c, f = e.Length + c * 2, C = f, M = m, L, D = 0;
    for (; C--; )
      L = e.value(M), L[4] !== null && (D = L[5] > D ? L[5] : D), M++;
    for (; f--; )
      L = e.value(m), o.x = Ue(this.xAxis.xPos(L[0]) - r / 2), L[4] !== null && (o.h = l - l * ((D - L[5]) / D), o.raw = i[m], this.#t.draw(o)), m++;
    super.updated();
  }
}
const uh = {
  ADX: Ef,
  ATR: Mf,
  AROON: Lf,
  BB: Af,
  CCI: Of,
  CMO: Df,
  DMI: If,
  DX: Nf,
  EMA: Tr,
  MA: _t,
  MACD: Sr,
  MFI: kf,
  OBV: $f,
  PPO: _f,
  PSAR: Ff,
  ROC: Bf,
  RSI: hs,
  SMA: Pr,
  STOCHRSI: Uf,
  VOL: Er
}, Mr = {};
((a) => {
  for (let e in a)
    Mr[e] = {
      id: e,
      name: a[e].prototype.name,
      event: "addIndicator",
      ind: a[e]
    };
})(uh);
const Lr = "0.156.0";
function Vf(a) {
  a = a === !0;
  var e, i = {}, s = this, n, r, o = "", l = [], c = "", m = 256;
  for (e = 0; e < 256; e += 1)
    i[String.fromCharCode(e)] = e;
  for (e = 0; e < s.length; e += 1)
    n = s.charAt(e), r = o + n, i.hasOwnProperty(r) ? o = r : (l.push(i[o]), c += String.fromCharCode(i[o]), i[r] = m++, o = String(n));
  return o !== "" && (l.push(i[o]), c += String.fromCharCode(i[o])), a ? l : c;
}
function zf() {
  var a, e = [], i = [], s = this, n, r, o, l = "", c = 256;
  for (a = 0; a < 256; a += 1)
    i[a] = String.fromCharCode(a);
  if (s && typeof s == "string") {
    for (a = 0; a < s.length; a += 1)
      e.push(s[a].charCodeAt(0));
    s = e, e = null;
  }
  for (n = String.fromCharCode(s[0]), r = n, a = 1; a < s.length; a += 1) {
    if (o = s[a], i[o])
      l = i[o];
    else if (o === c)
      l = n + n.charAt(0);
    else
      return null;
    r += l, i[c++] = n + l.charAt(0), n = l;
  }
  return r;
}
String.prototype.compress = Vf;
String.prototype.decompress = zf;
function Wf(a, e = !1) {
  if (!E(a)) return !1;
  let i = Mu(0, a.length);
  if (!Zi(a[0], e) || !Zi(a[i], e) || !Zi(a[a.length - 1], e)) return !1;
  let s = a[0][0], n = a[1][0], r = a[2][0];
  return !(s > n && n > r);
}
function Gf(a, e = !1) {
  if (!E(a)) return !1;
  let i = 0, s = 0;
  for (; i < a.length; ) {
    if (!Zi(a[i], e) || a[i][0] < s) return !1;
    s = a[i][0], i++;
  }
  return !0;
}
function Zi(a, e = !1) {
  return !(!E(a) || a.length !== 6 || e && !rs(a[0]) || !P(a[1]) || !P(a[2]) || !P(a[3]) || !P(a[4]) || !P(a[5]));
}
function qf(a) {
  for (let e of a)
    for (let i = 0; i < 6; i++)
      e.length = 6, e[i] *= 1;
  return a;
}
class jf {
  #e;
  #t;
  #i;
  #s = {};
  constructor(e) {
    if (!(e instanceof A)) throw new Error("Class Gaps requires a valid State");
    this.#e = e.core, this.#t = e, this.#i = e.range;
  }
  get list() {
    return this.#s;
  }
  get hasGaps() {
    return Object.keys(this.#s).length;
  }
  get dataSource() {
    return this.#t.dataSource;
  }
  get source() {
    return this.#t.dataSource.source;
  }
  findFillGaps(e) {
    let i = this.#t.timeFrame;
    if (!E(e) || e.length == 1) return !1;
    let s, n, r, o, l, c = 0, m = (e[e.length - 1][0] - e[c][0]) / i;
    for (; c < m; )
      s = e[c][0], n = e[c + 1][0], r = n - s, r == i || r > i && (l = s + i, o = [l, null, null, null, null, null], this.list[`${l}`] = o, e.splice(c + 1, 0, o)), c++;
    return e;
  }
  removeFilledGaps(e, i) {
    if (!this.hasGaps) return;
    let s = this.#t.timeFrame, n = this.#i, r = [], o;
    const l = (c) => {
      o = this.#s[`${c}`], o !== n.valueByTS(c) && (delete this.#s[c], r.push(c));
    };
    if (!N(e) || !N(i)) {
      let c = Object.keys(this.#s);
      for (let m of c)
        l(m);
    } else
      for (; e <= i; )
        l(e), e += s;
    return r;
  }
  nullFillGapsOnMerge(e, i) {
    let s = i, n = i.length, r = i[n - 1][0], o = Math.floor((e[0][0] - r) / this.#t.timeFrame), l;
    for (o; o > 1; o--)
      r += this.#t.timeFrame, l = Array(e[0].length).fill(null), l[0] = r, s.push(l), this.#s[`${r}`] = l;
    return s;
  }
  fillRangeGaps() {
    let e = this.#i, i = Object.keys(this.#s), s = e.indexStart, n = e.indexEnd, r = e.indexStartTS, o = e.indexEndTS, l = { chart: this.#e, start: s, end: n, startTS: r, endTS: o };
    s >= i[0] && s <= i[i.length - 1] && I(this.source?.rangeLimitPast) && this.source?.rangeLimitPast(l), n >= i[0] && n <= i[i.length - 1] && I(this.source?.rangeLimitFuture) && this.source?.rangeLimitFuture(l);
  }
  findGapsInTimeSpan(e = this.#i.indexStartTS, i = this.#i.indexEndTS) {
    if (!mt(e) || !mt(i) || !this.hasGaps) return [];
    let s = this.#i, n = s.getTimeIndex(e), r = s.getTimeIndex(i), o = [], l;
    for (let c = n; c < r + 1; c++)
      if (l = s.value(c), l[1] === null) o.push(l[0]);
      else continue;
    return o;
  }
}
const Xf = "alert";
class dn {
  #e = new me();
  #t = {};
  constructor(e) {
    if (E(e))
      for (let i of e)
        this.add(i?.price, i?.condition, i?.handler);
  }
  get list() {
    return this.#e;
  }
  get handlers() {
    return this.#t;
  }
  destroy() {
    this.#e.clear(), this.#t = {};
  }
  batchAdd(e) {
    if (E(e)) {
      let i = [];
      for (let s of e)
        i.push(this.add(s?.price, s?.condition, s?.handler));
      return i;
    } else return !1;
  }
  add(e, i, s) {
    if (isNaN(e) || !I(s)) return !1;
    const n = se(Xf), r = { price: e, condition: i };
    if (this.list.has(r)) {
      let o = this.list.get(r);
      o[n] = s;
    } else {
      const o = {};
      o[n] = s, this.list.set(r, o);
    }
    return this.#t[n] = { alert: r, handler: s }, n;
  }
  remove(e) {
    if (!(e in this.#t)) return !1;
    const i = this.#t[e], s = i.alert, n = this.#e.get(s);
    return n.delete(e), i.delete(e), Object.keys(n).length == 0 && this.#e.delete(s), !0;
  }
  delete(e, i) {
    if (this.list.has({ price: e, condition: i })) {
      const s = this.list.get({ price: e, condition: i });
      for (let n in s)
        this.#t.delete(n), s.delete(n);
    }
    return this.list.delete({ price: e, condition: i });
  }
  pause(e) {
    if (!(e in this.#t)) return !1;
    this.#t[e];
  }
  handlerByID(e) {
    return e in this.#t ? this.#t[e].handler : !1;
  }
  check(e, i) {
    if (!(!E(e) || !E(i))) {
      for (let [s, n] of this.list)
        if (s.condition(s.price, e, i))
          for (let r in n)
            try {
              n[r](s.price, e, i);
            } catch (o) {
              console.error(o);
            }
    }
  }
}
const Yf = [xo, Co], Kf = ["t", "o", "h", "l", "c", "v"], Zf = 0, Qf = 1, Jf = 2, eg = 3, tg = 4, ig = 5, $i = [null, null, null, null, null], Hi = {
  tfCountDown: !0,
  alerts: []
};
class St {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r = 0;
  #a;
  #l;
  #h = $i;
  #o = 0;
  #c = 0;
  #u = "";
  #d = !1;
  #m;
  #p;
  #g = $i;
  #y;
  #b;
  #x;
  #w;
  constructor(e, i) {
    e instanceof H ? this.#e = e : oo({ id: "invalid" }, "not a valid chart instance"), i instanceof A ? this.#i = i : oo(e, "state not a valid State instance"), this.status = { status: xo }, this.#t = sg(e.config?.stream), this.#n = P(e.config?.maxCandleUpdate) ? e.config.maxCandleUpdate : xc, this.#a = P(e.config?.streamPrecision) ? e.config.streamPrecision : Cc;
  }
  get state() {
    return this.#i;
  }
  get config() {
    return this.#t;
  }
  get countDownMS() {
    return this.#c;
  }
  get countDown() {
    return this.#u;
  }
  get range() {
    return this.#i.range;
  }
  get status() {
    return this.#s;
  }
  set status(e) {
    !v(e) && !T(e?.status) || (this.#s = e.status, this.emit(e.status, e?.data));
  }
  get symbol() {
    return this.#i.symbol;
  }
  get timeFrame() {
    return this.#i.timeFrame;
  }
  get timeFrameStr() {
    return this.#i.timeFrameStr;
  }
  set dataReceived(e) {
    this.#d || (this.#d = !0, this.status = { status: es, data: e });
  }
  get alerts() {
    return this.#w;
  }
  get lastPriceMin() {
    return this.#p;
  }
  set lastPriceMin(e) {
    P(e) && (this.#p = e);
  }
  get lastPriceMax() {
    return this.#m;
  }
  set lastPriceMax(e) {
    P(e) && (this.#m = e);
  }
  get lastScrollPos() {
    return this.#y;
  }
  set lastScrollPos(e) {
    this.setLastScrollPos(e);
  }
  get lastXPos() {
    return this.#b;
  }
  set lastXPos(e) {
    P(e) && (this.#b = e);
  }
  get lastYPos() {
    return this.#x;
  }
  set lastYPos(e) {
    v(e) && (this.#x = e);
  }
  get lastTick() {
    return this.#g;
  }
  set lastTick(e) {
    E(e) && (this.#g, this.#g = e, this.alerts.check(e, this.#h));
  }
  get isActive() {
    return !![
      ti,
      Hs,
      es,
      ts,
      et
    ].includes(this.#s);
  }
  set candle(e) {
    const i = Date.now(), s = [...this.#h];
    fs(Kf, Object.keys(e)) && mt(e.t) && (e.ts = Date.now(), e.t = this.roundTime(new Date(e.t)), e.o = e.o * 1, e.h = e.h * 1, e.l = e.l * 1, e.c = e.c * 1, e.v = e.v * 1, this.#l = e, this.dataReceived = e, this.#h[Zf] !== e.t ? this.newCandle(e) : this.updateCandle(e), this.status = { status: ti, data: this.#h }, this.lastTick = s, i - this.#r > this.#n && this.onUpdate(), this.#r = i);
  }
  get candle() {
    return this.#h !== $i ? this.#h : null;
  }
  setLastScrollPos(e) {
    P(e) && (this.#y = e);
  }
  resetLastPos() {
    this.#b = void 0, this.#x = void 0, this.#y = void 0;
  }
  start() {
    if (!Yf.includes(this.status)) {
      this.#e.error("ERROR: Invoke stopStream() before starting a new one.");
      return;
    }
    this.#w instanceof dn || (this.#w = new dn(this.#t.alerts)), this.status = { status: Hs };
  }
  stop() {
    this.#w instanceof dn && this.#w.destroy(), this.status = { status: Co }, this.resetLastPos();
  }
  emit(e, i) {
    this.#e.emit(e, i);
  }
  error() {
    this.status = { status: wc };
  }
  onTick(e) {
    if ((this.#s == Hs || this.#s == ti) && v(e)) {
      if (!N(e.t * 1)) return;
      let i = Object.keys(e), s = {}, n;
      for (let r of i)
        n = e[r] * 1, P(n) && (s[r] = n);
      this.candle = s;
    }
  }
  onUpdate() {
    this.#i?.isActive && this.#h !== $i && (this.status = { status: et, data: this.candle }, this.status = { status: ti, data: this.#h });
  }
  newCandle(e) {
    this.prevCandle(), this.#h = [
      e.t,
      e.o,
      e.h,
      e.l,
      e.c,
      e.v,
      null,
      !0
    ], console.log(`State: ${this.#i.key} new candle:`, this.#h), this.#i.mergeData({ ohlcv: [this.#h] }, !0, !1), this.status = { status: ts, data: { data: e, candle: this.#h } }, this.#c = this.#i.timeFrame, this.#o = this.roundTime(e.ts);
  }
  prevCandle() {
    const e = this.#i.data.chart.data;
    e.length > 0 && e[e.length - 1][7] && (e[e.length - 1].length = 6);
  }
  updateCandle(e) {
    let i = this.#h;
    i[Qf] = e.o, i[Jf] = e.h, i[eg] = e.l, i[tg] = e.c, i[ig] = e.v, this.#h = i, console.log(`State: ${this.#i.key} candle update:`, i);
    const s = this.#i.data.chart.data, n = s.length > 0 ? s.length - 1 : 0;
    s[n] = this.#h, this.#i?.isActive && this.countDownUpdate();
  }
  countDownUpdate() {
    let e, i, s, n, r, o, l, c = this.#i.timeFrame, m = this.#l.ts, f = c - (m - this.#o);
    return f < 0 && (f = 0), this.#c = f, f > $e ? (e = String(Math.floor(f / $e)), i = String(Math.floor(f % $e / Ae)).padStart(2, "0"), this.#u = `${e}Y ${i}M`) : f > Ae ? (i = String(Math.floor(f / Ae)).padStart(2, "0"), n = String(Math.floor(f % Ae / q)).padStart(2, "0"), this.#u = `${i}M ${n}D`) : f > Ft ? (s = String(Math.floor(f / Ft)).padStart(2, "0"), n = String(Math.floor(f % Ae / q)).padStart(2, "0"), this.#u = `${s}W ${n}D`) : f > q ? (n = String(Math.floor(f / q)).padStart(2, "0"), r = String(Math.floor(f % q / ge)).padStart(2, "0"), o = String(Math.floor(f % ge / Q)).padStart(2, "0"), this.#u = `${n}D ${r}:${o}`) : f > ge ? (r = String(Math.floor(f / ge)).padStart(2, "0"), o = String(Math.floor(f % ge / Q)).padStart(2, "0"), l = String(Math.floor(f % Q / ae)).padStart(2, "0"), this.#u = `${r}:${o}:${l}`) : f > Q ? (o = String(Math.floor(f / Q)).padStart(2, "0"), l = String(Math.floor(f % Q / ae)).padStart(2, "0"), this.#u = `00:${o}:${l}`) : (l = String(Math.floor(f / ae)).padStart(2, "0"), String(f % ae).padStart(4, "0"), this.#u = `00:00:${l}`), this.#u;
  }
  roundTime(e) {
    return e - e % this.#i.dataSource.timeFrame;
  }
}
function sg(a) {
  if (v(a)) {
    let e = K(Hi);
    a = Ve(e, a), a.tfCountDown = j(a.tfCountDown) ? a.tfCountDown : Hi.tfCountDown, a.alerts = E(a.alerts) ? a.alerts : Hi.alerts;
  } else
    return Hi;
  return a;
}
function oo(a, e) {
  throw new Error(`TradeX-chart: ${a} : Ticker Stream : ${e}`);
}
class ng {
  #e;
  #t;
  #i;
  #s = [];
  constructor(e, i) {
    this.#e = e, this.#t = T(i.id) ? i.id : se, this.#i = T(i.type) ? i.type : "default", this.#s = E(i.data) ? i.data : [];
  }
}
class Ps {
  #e;
  #t;
  #i;
  #s = {};
  #n;
  #r;
  #a = "stopped";
  #l;
  #h;
  #o;
  #c;
  #u = ["await", "idle", "running", "stopped"];
  constructor(e, i) {
    if (!Ps.validateConfig(e)) return !1;
    const s = { ...e };
    this.id = s.id, this.#n = s, this.#t = s.initial, this.#s.origin = i, this.#c = s.actions, this.#r = i.core, this.#d();
  }
  set id(e) {
    this.#e = dt(e);
  }
  get id() {
    return this.#e;
  }
  get state() {
    return this.#t;
  }
  get previousSate() {
    return this.#i;
  }
  get context() {
    return this.#s;
  }
  get core() {
    return this.#r;
  }
  get status() {
    return this.#a;
  }
  get event() {
    return this.#h;
  }
  get events() {
    return this.#l;
  }
  get eventData() {
    return this.#o;
  }
  get actions() {
    return this.#c;
  }
  notify(e, i) {
    if (!v(this.#n)) return !1;
    this.#h = e, this.#o = i;
    const s = this.#n.states[this.#t];
    let n = s.on[e];
    if (!n || !I(n.action) || this.#a !== "running" && this.#a !== "await")
      return !1;
    let r = n?.condition?.type || n?.condition || !1;
    if (r && !this.condition.call(this, r, n.condition))
      return !1;
    const o = n.target, l = this.#n.states[o];
    if (s?.onExit.call(this, i), n.action.call(this, i), this.#i = this.#t, this.#t = o, l?.onEnter.call(this, i), this.#n.states[o]?.on && (this.#n.states[o].on[""] || this.#n.states[o].on?.always)) {
      const c = this.#n.states[o].on[""] || this.#n.states[o].on.always;
      if (E(c))
        for (let m of c) {
          let f = m?.condition?.type || m?.condition || !1;
          this.condition.call(this, f, m.condition) && T(m.target) && (m?.action.call(this, i), this.#i = this.#t, this.#t = m?.target, this.notify(null, null));
        }
      else if (v(c) && T(c.target)) {
        let m = c?.condition?.type || c?.condition || !1;
        this.condition.call(this, m, c.condition) && T(c.target) && (c?.action.call(this, i), this.#i = this.#t, this.#t = c.target, this.notify(null, null));
      }
    }
    return this.#t;
  }
  condition(e, i = null, s = {}) {
    return e ? this.#n.guards[e].call(this, this.#s, i, s) : !1;
  }
  canTransition(e) {
    const i = this.#n.states[this.#t];
    return e in i.on;
  }
  start() {
    this.#a = "running";
  }
  stop() {
    this.#a = "stopped";
  }
  destroy() {
    this.stop(), this.#m(), this.#n = null;
  }
  #d() {
    this.#l = /* @__PURE__ */ new Set();
    for (let e in this.#n.states)
      for (let i in this.#n.states[e].on) {
        let s = this.notify.bind(this, i);
        this.#l.add({ topic: i, cb: s }), this.#r.on(i, s, this.context);
      }
  }
  #m() {
    const e = this.#l?.values();
    if (e) {
      for (let i of e)
        this.#r.off(i.topic, i.cb, this.context);
      this.#l.clear();
    }
  }
  static validateConfig(e) {
    if (!v(e)) return !1;
    const i = ["id", "initial", "context", "states"];
    let s = Object.keys(e);
    if (!fs(i, s) || !(e.initial in e.states)) return !1;
    for (let n in e.states) {
      if (!v(e.states[n]) || "onEnter" in e.states[n] && !I(e.states[n].onEnter) || "onExit" in e.states[n] && !I(e.states[n].onExit)) return !1;
      if ("on" in e.states[n])
        for (let r in e.states[n].on) {
          let o = e.states[n].on[r];
          if (!T(o.target) || "action" in o && !I(o.action)) return !1;
        }
    }
    return !0;
  }
}
class rg {
  #e;
  #t;
  #i;
  #s;
  #n;
  constructor(e, i = []) {
    this.#i = e, this.#e = e.core, this.#s = new me([...i]);
    for (const [s, n] of this.#s)
      this.addOverlay(s, n);
  }
  log(e) {
    this.#e.log(e);
  }
  info(e) {
    this.#e.info(e);
  }
  warn(e) {
    this.#e.warn(e);
  }
  error(e) {
    this.#e.error(e);
  }
  get core() {
    return this.#e;
  }
  get parent() {
    return this.#i;
  }
  get layerConfig() {
    return this.#i.layerConfig().layerConfig;
  }
  get list() {
    return this.#s;
  }
  get scale() {
    return this.#i.parent.scale;
  }
  get time() {
    return this.#i.parent.time;
  }
  start() {
    this.eventsListen();
  }
  destroy() {
    if (this.#s.size != 0)
      for (let e of this.#s.keys())
        this.removeOverlay(e);
  }
  eventsListen() {
  }
  on(e, i, s = this) {
    this.#e.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#e.off(e, i, s);
  }
  emit(e, i) {
    this.#e.emit(e, i);
  }
  get(e) {
    return this.#s.get(e);
  }
  addOverlays(e) {
    let i = [], s, n;
    for (let r of e)
      n = this.addOverlay(r[0], r[1]), s = n.instance?.id || r[0], i.push([s, n]);
    return i;
  }
  addOverlay(e, i) {
    const s = new oe.Layer(this.layerConfig);
    try {
      return this.parent.viewport.addLayer(s), i.layer = s, i.instance = new i.class(
        s,
        this.#i.Timeline,
        this.#i.Scale,
        this.#e.theme,
        this,
        i?.params
      ), T(i.instance?.id) || (i.instance.id = e), this.#s.set(i.instance.id, i), i;
    } catch (n) {
      return s.remove(), i.instance = void 0, this.#s.delete(e), this.#e.error(`ERROR: Cannot instantiate ${e} overlay / indicator : It will not be added to the chart.`), this.#e.error(n), !1;
    }
  }
  removeOverlay(e) {
    if (this.#s.has(e)) {
      const i = this.#s.get(e);
      i.instance?.isIndicator || i.instance.destroy(), i.layer.remove(), this.#s.delete(e);
    }
  }
}
class cs extends ee {
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.params.axes = o?.axes || "both";
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (!super.mustUpdate() || (e = e || this.params.axes, this.scene.clear(), e == "none")) return;
    const i = this.scene.context;
    if (i.save(), i.strokeStyle = this.core.theme.chart.GridColour || Pl.COLOUR_GRID, e != "y") {
      const n = this.xAxis.xAxisGrads.values;
      for (let r of n) {
        let o = Ue(r[1]);
        i.beginPath(), i.moveTo(o + 0, 0), i.lineTo(o + 0, this.scene.height), i.stroke();
      }
    }
    if (e != "x") {
      const s = this.yAxis.yAxisGrads;
      for (let n of s) {
        let r = this.yAxis.yPos(n[0]);
        i.beginPath(), i.moveTo(0, r), i.lineTo(this.scene.width, r), i.stroke();
      }
    }
    i.restore(), super.updated();
  }
  drawX() {
    this.draw("x");
  }
}
class Un extends ee {
  #e = [0, 0];
  #t = !0;
  #i;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.core.on("main_mouseMove", this.onMouseMoveX, this), this.#i = new Xe(this.target.viewport.container, { disableContextMenu: !1 }), this.#i.on("pointermove", this.onMouseMove.bind(this)), this.#i.on("pointerenter", this.onMouseMove.bind(this));
  }
  set position(e) {
  }
  get update() {
    return this.#t;
  }
  get always() {
    return !0;
  }
  onMouseMoveX(e) {
    this.onMouseMove(e, !0);
  }
  onMouseMove(e, i = !1) {
    let s, n, r, o = this.#e;
    v(e) ? (s = e.timeStamp, n = Math.round(e.position.x), r = Math.round(e.position.y)) : (s = e[6], n = Math.round(e[0]), r = Math.round(e[1])), !(i && o[1] == r) && (o[0] == n && o[1] == r || (o[0] = n, o[1] = r, o[6] = s, this.draw()));
  }
  draw(e = !1) {
    const i = this.target.viewport.container.getBoundingClientRect();
    let s = this.core.mousePos.y - i.top, n = this.core.mousePos.x - i.left;
    e || (n = this.xAxis.xPosSnap2CandlePos(n) + this.xAxis.scrollOffsetPx), this.scene.clear();
    const r = this.scene.context;
    r.save(), r.setLineDash([5, 5]);
    const o = this.xAxis.smoothScrollOffset || 0;
    r.strokeStyle = "#666", r.beginPath(), r.moveTo(n + o, 0), r.lineTo(n + o, this.scene.height), r.stroke(), this.chart.cursorActive && (r.beginPath(), r.moveTo(0, s), r.lineTo(this.scene.width, s), r.stroke()), r.restore(), this.chart.scale.overlays.cursor.instance.scaleDraw();
  }
}
class dh extends ee {
  #e = [0, 0];
  constructor(e, i, s, n, r, o) {
    r = s, s = s.yAxis, super(e, i, s, n, r, o), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
  }
  scaleDraw() {
    if (!this.parent.parent.cursorActive) return;
    const e = this.target.viewport.container.getBoundingClientRect();
    let i = this.core.mousePos.y - e.top, s = this.parent.yPos2Price(i), n = this.parent.nicePrice(s), r = {
      fontSize: this.theme.yAxis.fontSize * 1.05,
      fontWeight: this.theme.yAxis.fontWeight,
      fontFamily: this.theme.yAxis.fontFamily,
      txtCol: this.theme.yAxis.colourCursor,
      bakCol: this.theme.yAxis.colourCursorBG,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      width: this.viewport.width
    }, o = r.fontSize + r.paddingTop + r.paddingBottom, l = i - o * 0.5;
    const c = this.scene.context;
    this.scene.clear(), c.save(), c.fillStyle = r.bakCol, c.fillRect(1, l, this.width, o), Ut(c, `${n}`, 1, l, r), c.restore();
  }
  erase() {
    this.scene.clear(), this.target.viewport.render();
  }
}
const ag = [
  ["grid", { class: cs, fixed: !0 }],
  ["cursor", { class: Un, fixed: !0 }]
];
class ft {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  constructor(e, i, s, n = !1) {
    this.#s = e, this.#e = e.core, this.#t = this.core.config, this.#i = this.core.theme, this.#a = this.#s.element, this.#h = i, this.createViewport(s, n);
  }
  get parent() {
    return this.#s;
  }
  get core() {
    return this.#e;
  }
  get config() {
    return this.#t;
  }
  get width() {
    return this.#a.width;
  }
  get height() {
    return this.#a.height;
  }
  get dimensions() {
    return this.#a.dimensions;
  }
  set layerWidth(e) {
    this.#o = e || this.#a.width;
  }
  get layerWidth() {
    return this.#o;
  }
  get stateMachine() {
    return this.#s.stateMachine;
  }
  get state() {
    return this.#e.getState();
  }
  get data() {
    return this.#e.chartData;
  }
  get range() {
    return this.#e.range;
  }
  get stream() {
    return this.#e.stream;
  }
  get Timeline() {
    return this.#e.Timeline;
  }
  get xAxis() {
    return this.#e.Timeline.xAxis;
  }
  get Scale() {
    return this.#s.scale;
  }
  get yAxis() {
    return this.#s.scale.yAxis;
  }
  get viewport() {
    return this.#n;
  }
  get overlays() {
    return this.#r;
  }
  destroy() {
    this.#r.destroy(), this.#n.destroy();
  }
  setSize(e, i, s) {
    const n = this.#r.list;
    this.#n.setSize(e, i);
    for (let [r, o] of n)
      o.instance.setSize(s, i);
    this.draw(), this.render();
  }
  createViewport(e = [], i = !1) {
    e = e.length == 0 ? K(ag) : e;
    const { width: s, height: n } = this.layerConfig();
    let r = i ? oe.Node : oe.Viewport;
    this.#n = new r({
      width: s,
      height: n,
      container: this.#h
    }), this.#l = this.#n.scene.canvas, this.#r = new rg(this, e);
  }
  layerConfig() {
    const e = this.config?.buffer || bs, i = this.#h.getBoundingClientRect().width, s = this.#h.getBoundingClientRect().height;
    this.layerWidth = Math.round(i * ((100 + e) * 0.01));
    const n = {
      width: this.layerWidth,
      height: s
    };
    return { width: i, height: s, layerConfig: n };
  }
  addOverlays(e) {
    return this.#r.addOverlays(e);
  }
  addOverlay(e, i) {
    return this.#r.addOverlay(e, i);
  }
  removeOverlay(e) {
    return this.#r.removeOverlay(e);
  }
  draw(e = this.range, i = !1) {
    const s = (n, r) => {
      r.instance instanceof ee && (i && r.instance.setRefresh(), r.instance.draw(), r.fixed || (r.instance.position = [this.#e.scrollPos, 0]));
    };
    this.executeOverlayList(s);
  }
  drawAll() {
    const e = (i, s) => {
      s.instance instanceof ee && s.instance.setRefresh();
    };
    this.executeOverlayList(e);
  }
  executeOverlayList(e) {
    const i = this.#r.list;
    if (!(i instanceof me)) return !1;
    let s = [];
    for (let [n, r] of i)
      try {
        e(n, r);
      } catch (o) {
        s.push({ overlay: n, error: o });
      }
    if (s.length > 0)
      for (let n of s)
        this.#e.error(`ERROR: executeOverlayList() ${n.overlay}`), this.#e.error(n.error);
    else s = !0;
    return s;
  }
  render() {
    this.#n.render();
  }
  refresh() {
    this.draw(this.range, !0), this.render();
  }
}
class Lt {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  constructor(e, i = {}) {
    this.#t = e, this.#i = { ...i }, this.#s = this.#i.parent;
  }
  log(e) {
    this.#t.log(e);
  }
  info(e) {
    this.#t.info(e);
  }
  warn(e) {
    this.#t.warn(e);
  }
  error(e) {
    this.#t.error(e);
  }
  set id(e) {
    this.#e = dt(e);
  }
  get id() {
    return this.#e || `${this.#t.ID}-${this.name}`;
  }
  get core() {
    return this.#t;
  }
  get options() {
    return this.#i;
  }
  get config() {
    return this.#t.config;
  }
  get theme() {
    return this.core.theme;
  }
  get range() {
    return this.core.range;
  }
  get parent() {
    return this.#s;
  }
  set stateMachine(e) {
    this.#n = new Ps(e, this);
  }
  get stateMachine() {
    return this.#n;
  }
  set graph(e) {
    e instanceof ft && (this.#r = e);
  }
  get graph() {
    return this.#r;
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  expunge(e = this) {
    this.#t.expunge(e);
  }
  emit(e, i) {
    this.#t.emit(e, i);
  }
}
const mn = {
  id: "time",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        resize: {
          target: "resize",
          action(a) {
          }
        },
        xAxis_scale: {
          target: "scale",
          action(a) {
          }
        },
        xAxis_inc: {
          target: "incremental",
          action(a) {
          }
        },
        xAxis_log: {
          target: "logarithmic",
          action(a) {
          }
        },
        xAxis_100: {
          target: "percentual",
          action(a) {
          }
        },
        chart_pan: {
          target: "chart_pan",
          action(a) {
          }
        }
      }
    },
    resize: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        someEvent: {
          target: "",
          action(a) {
          }
        }
      }
    },
    chart_pan: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        chart_pan: {
          target: "chart_pan",
          action(a) {
          }
        },
        chart_panDone: {
          target: "idle",
          action(a) {
          }
        }
      }
    }
  },
  guards: {}
};
class Ar {
  static #e;
  #t;
  #i;
  #s;
  #n;
  #r = { w: 0, h: 0 };
  #a = { w: 0, h: 0, x: 0, y: 0 };
  #l = { x: !1, y: !0 };
  #h;
  #o = { x: 0, drag: !1 };
  #c;
  #u;
  constructor(e) {
    this.#t = Ar.#e++, this.#i = e.core, this.#s = W(e.elContainer) ? e.elContainer : !1, this.#n = W(e.elHandle) ? e.elHandle : !1, this.#u = I(e.callback) ? e.callback : !1, W(this.#s) && W(this.#n) && (this.mount(), this.eventsListen());
  }
  set cursor(e) {
    this.#n.style.cursor = e;
  }
  get cursor() {
    return this.#n.style.cursor;
  }
  eventsListen() {
    this.#c = new Xe(this.#n, { disableContextMenu: !1 }), this.#c.on("mouseenter", Oe(this.onMouseEnter, 1, this, !0)), this.#c.on("mouseout", Oe(this.onMouseOut, 1, this, !0)), this.#c.on("drag", Qo(this.onHandleDrag, 100, this)), this.#c.on("enddrag", this.onHandleDragDone.bind(this)), this.#c.on("mousedown", Oe(this.onMouseDown, 100, this, !0)), this.#c.on("mouseup", this.onMouseUp.bind(this));
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onMouseEnter() {
    const e = getComputedStyle(this.#n).backgroundColor;
    e && (this.colour = new pt(e), this.#n.style.backgroundColor = this.colour.hex);
  }
  onMouseOut() {
    this.#n.style.backgroundColor = this.colour.hexa;
  }
  onMouseDown() {
  }
  onMouseUp(e) {
    this.onHandleDragDone(e);
  }
  onHandleDrag(e) {
    this.#o.drag || (this.#o.drag = !0, this.#o.x = e.position.x), this.handlePos(e);
  }
  onHandleDragDone(e) {
    this.handlePos(e), this.#o.drag = !1;
  }
  mount() {
    this.#r.w = this.#s.getBoundingClientRect().width, this.#r.h = this.#s.getBoundingClientRect().height, this.#s.style.overflow = "hidden", this.#a.w = this.#n.getBoundingClientRect().width, this.#a.h = this.#n.getBoundingClientRect().height, this.#n.style.marginRight = 0, this.#n.style.position = "absolute";
  }
  handlePos(e) {
    let i = this.#i.range, s = parseInt(this.#n.style.marginLeft), n = this.#s.getBoundingClientRect().width, r = this.#n.getBoundingClientRect().width, o = n - r, l = e.position.x - this.#o.x, c = B(s + l, 0, o), m = (i.dataLength + i.limitFuture + i.limitPast) / n, f = Math.floor(c * m);
    this.setHandleDims(c, r), this.#i.jumpToIndex(f);
  }
  setHandleDims(e, i) {
    let s = this.#s.getBoundingClientRect().width;
    i = i || this.#n.getBoundingClientRect().width, e = e / s * 100, this.#n.style.marginLeft = `${e}%`, i = i / s * 100, this.#n.style.width = `${i}%`;
  }
}
class og extends ee {
  #e = [0, 0];
  #t;
  #i;
  constructor(e, i = !1, s = !1, n, r, o) {
    i = r.time.xAxis, super(e, i, s, n, r);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (!super.mustUpdate()) return;
    this.scene.clear();
    const i = this.scene.context, s = this.xAxis.xAxisGrads.values, n = 0, r = this.theme.xAxis, o = j(r.tickMarker) ? r.tickMarker : !0;
    this.#i = this.#i || i.measureText("M").width, i.save(), i.strokeStyle = r.colourTick, i.fillStyle = r.colourTick, i.font = `${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`;
    for (let l of s) {
      let c = l[1], m = Math.floor(l[0].length * this.#i * 0.5);
      i.fillText(l[0], c - m + n, this.xAxis.xAxisTicks + 12), o && (i.beginPath(), i.moveTo(c + n, 0), i.lineTo(c + n, this.xAxis.xAxisTicks), i.stroke());
    }
    i.restore(), super.updated();
  }
}
class lg extends ee {
  #e = [0, 0];
  #t;
  constructor(e, i = !1, s = !1, n, r, o) {
    i = r.time.xAxis, super(e, i, s, n, r);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
    this.scene.clear();
    const e = this.scene.context;
    this.xAxis.xAxisGrads.values, this.theme.xAxis, e.save(), e.restore();
  }
}
class hg extends ee {
  #e = [0, 0];
  #t;
  #i;
  constructor(e, i = !1, s = !1, n, r) {
    i = r.time.xAxis, super(e, i, s, n, r), this.viewport = e.viewport, this.#i = {
      fontSize: this.theme.xAxis.fontSize * 1.05,
      fontWeight: this.theme.xAxis.fontWeight,
      fontFamily: this.theme.xAxis.fontFamily,
      txtCol: this.theme.xAxis.colourCursor,
      bakCol: this.theme.xAxis.colourCursorBG,
      paddingTop: 5,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4
    };
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  dateUTCStringW() {
    if (!this.#t) {
      let e = this.scene.context, i = "Wed, 28 Aug 2024 20:00:00 GMT";
      this.#t = Cs(e, i, this.#i);
    }
    return this.#t;
  }
  draw() {
    const e = this.scene.context, i = this.target.viewport.container.getBoundingClientRect(), s = this.core.mousePos.x - i.left;
    let n = this.xAxis.xPos2Time(s), r = new Date(n), o = r.toUTCString(), l = this.dateUTCStringW(), c = s + this.core.bufferPx;
    c = this.xAxis.xPosSnap2CandlePos(c), c = c - Math.round(l * 0.5) - this.core.scrollPos - this.core.bufferPx, this.scene.clear(), e.save(), Ut(e, o, c, 1, this.#i), e.restore();
  }
}
const cg = [
  ["labels", { class: og, fixed: !1, required: !0 }],
  ["overlay", { class: lg, fixed: !1, required: !0 }],
  ["cursor", { class: hg, fixed: !1, required: !0 }]
];
class ug extends Lt {
  #e = "Timeline";
  #t = "time";
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  #d;
  #m;
  #p = new me();
  #g = [];
  #y;
  #b;
  #x;
  #w;
  #f;
  #S;
  #v;
  #P;
  #T;
  #C = {
    width: 20,
    height: 20,
    fill: "#aaa"
  };
  #E = { end: !1, start: !1 };
  constructor(e, i) {
    super(e, i), this.#r = i.elements.elTime, this.#i = e.Chart, this.#s = new Yi(this), this.init();
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get element() {
    return this.#r;
  }
  get elViewport() {
    return this.#a;
  }
  get height() {
    return this.#r.height;
  }
  set width(e) {
    this.setWidth(e);
  }
  get width() {
    return this.#r.width;
  }
  get xAxis() {
    return this.#s;
  }
  get xAxisWidth() {
    return this.#s.width;
  }
  get xAxisRatio() {
    return this.#s.xAxisRatio;
  }
  get layerCursor() {
    return this.#w;
  }
  get layerLabels() {
    return this.#b;
  }
  get layerOverlays() {
    return this.#x;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get xAxisGrads() {
    return this.#s.xAxisGrads;
  }
  get candleW() {
    return this.#s.candleW;
  }
  get candlesOnLayer() {
    return this.#s.candlesOnLayer;
  }
  get navigation() {
    return this.#y;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#r);
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get scrollOffsetPx() {
    return this.core.scrollPos % this.candleW;
  }
  get smoothScrollOffset() {
    return this.core.smoothScrollOffset;
  }
  get rangeScrollOffset() {
    return this.core.rangeScrollOffset;
  }
  get time() {
    return this;
  }
  init() {
    const e = this.#r;
    this.#a = e.viewport, this.#l = e.overview, this.#h = e.overview.icons, this.#o = e.overview.scrollBar, this.#c = e.overview.handle, this.#u = e.overview.rwdStart, this.#d = e.overview.fwdEnd;
    const i = {
      core: this.core,
      elContainer: this.#o,
      elHandle: this.#c,
      callback: null
    };
    this.#T = new Ar(i), this.core.theme?.time?.navigation === !1 && this.navigationDisplay(!1);
  }
  setWidth(e) {
    this.#r.style.width = `${e}px`, this.#a.style.width = `${e}px`;
  }
  setDimensions(e) {
    const i = this.config.buffer || bs, s = e.w, n = this.height, r = Math.round(s * ((100 + i) * 0.01));
    this.graph.setSize(s, n, r), this.draw();
  }
  navigationDisplay(e) {
    if (e)
      this.#d.style["margin-top"] = 0, this.#u.style["margin-top"] = 0;
    else {
      const i = this.core.theme.xAxis?.background ? this.core.theme.xAxis.Background : this.core.theme.chart.Background;
      this.#l.style.visibility = "hidden", this.#d.style["margin-top"] = `${this.#a.clientHeight * -1}px`, this.#u.style["margin-top"] = `${this.#a.clientHeight * -1}px`, this.#d.style.background = this.core.theme.chart.Background, this.#u.style.background = i;
    }
  }
  start() {
    this.createGraph(), this.onSetRange(), this.#s.initXAxisGrads(), this.draw(), this.eventsListen(), mn.id = this.id, mn.context = this, this.stateMachine = mn, this.stateMachine.start(), this.log(`Timeline ${this.#e} instantiated and running`);
  }
  destroy() {
    this.stateMachine.destroy(), this.#f.destroy(), this.#S.destroy(), this.#v.destroy(), this.core.hub.expunge(this), this.off("main_mouseMove", this.#w.draw, this.#w), this.#d.removeEventListener("click", Oe), this.#u.removeEventListener("click", Oe), this.graph.destroy();
  }
  eventsListen() {
    this.#f = new Xe(this.#a, { disableContextMenu: !1 }), this.#f.on("dblclick", this.onDoubleClick.bind(this)), this.#f.on("pointerover", this.onPointerEnter.bind(this)), this.#f.on("pointerout", this.onPointerLeave.bind(this)), this.#f.on("pointerdrag", this.onPointerDrag.bind(this)), this.#S = new Xe(this.#d, { disableContextMenu: !1 }), this.#S.on("pointerover", () => this.showJump(this.#E.end)), this.#S.on("pointerleave", () => this.hideJump(this.#E.end)), this.#v = new Xe(this.#u, { disableContextMenu: !1 }), this.#v.on("pointerover", () => this.showJump(this.#E.start)), this.#v.on("pointerleave", () => this.hideJump(this.#E.start)), this.on("main_mouseMove", this.#w.draw, this.#w), this.on("range_set", this.onSetRange, this), this.#d.addEventListener("click", Oe(this.onPointerClick, 1e3, this, !0)), this.#u.addEventListener("click", Oe(this.onPointerClick, 1e3, this, !0));
  }
  onPointerClick(e) {
    switch (e?.currentTarget?.id || e.target.parentElement.id) {
      case "fwdEnd":
        this.onFwdEnd();
        break;
      case "rwdStart":
        this.onRwdStart();
        break;
    }
  }
  onPointerEnter(e) {
    e.domEvent.target.style.cursor = "ew-resize", this.#l.style.visibility = "visible", this.hideCursorTime();
  }
  onPointerLeave(e) {
    this.core.theme?.time?.navigation === !1 && !(this.#E.end && this.#E.start) && (this.#l.style.visibility = "hidden");
  }
  onPointerDrag(e) {
    let i = this.range, s = i.indexStart - e.movement.x, n = i.indexEnd;
    i.set(s, n);
  }
  onDoubleClick(e) {
    this.core.jumpToEnd(), this.core.MainPane.draw(void 0, !0);
  }
  onFwdEnd() {
    this.core.jumpToEnd(), this.core.MainPane.draw(void 0, !0);
  }
  onRwdStart() {
    this.core.jumpToStart(), this.core.MainPane.draw(void 0, !0);
  }
  onSetRange() {
    let e = this.range, i = e.indexStart;
    e.indexEnd;
    let s = this.#o.getBoundingClientRect().width, n = e.dataLength + e.limitFuture + e.limitPast, r = s / n, o = e.Length * r, l = (i + e.limitPast) * r;
    this.#T.setHandleDims(l, o);
  }
  t2Index(e) {
    return this.#s.t2Index(e);
  }
  xPos(e) {
    return this.#s.xPos(e);
  }
  xPosSnap2CandlePos(e) {
    return this.#s.xPosSnap2CandlePos(e);
  }
  xPos2Time(e) {
    return this.#s.xPos2Time(e);
  }
  xPos2Index(e) {
    return this.#s.xPos2Index(e);
  }
  xPosOHLCV(e) {
    return this.#s.xPosOHLCV(e);
  }
  createGraph() {
    let e = K(cg);
    this.graph = new ft(this, this.#a, e, !1), this.#w = this.graph.overlays.get("cursor").instance, this.#b = this.graph.overlays.get("labels").instance, this.#x = this.graph.overlays.get("overlay").instance, this.graph.addOverlays(this.#g);
  }
  addOverlays(e) {
    if (!E(e)) return !1;
    this.graph === void 0 ? this.#g.push(...e) : this.graph.addOverlays(e);
  }
  addOverlay(e, i) {
    if (!v(i)) return !1;
    if (this.graph === void 0)
      this.#g.push([e, i]);
    else
      return this.graph.addOverlay(e, i);
  }
  render() {
    this.graph.render();
  }
  draw(e = this.range, i = !0) {
    this.graph.draw(e, i);
  }
  hideCursorTime() {
    this.graph.overlays.list.get("cursor").layer.visible = !1, this.core.MainPane.draw();
  }
  showCursorTime() {
    this.graph.overlays.list.get("cursor").layer.visible = !0, this.core.MainPane.draw();
  }
  hideJump(e) {
    this.core.theme?.time?.navigation === !1 && (this.#l.style.visibility = "hidden");
  }
  showJump(e) {
    this.#l.style.visibility = "visible", this.hideCursorTime();
  }
}
const dg = {
  renderQ: new me(),
  rendered: [],
  renderLog: !1,
  dropFrames: !0,
  graphs: [],
  range: {},
  status: !1,
  init: function(a) {
    v(a) && (this.renderLog = a?.renderLog || !1, this.dropFrames = a?.dropFrames || !0, this.graphs = E(a?.graphs) ? [...a.graphs] : [], this.range = v(a?.range) ? a.range : {});
  },
  queueFrame: function(a = this.range, e = this.graphs, i = !1) {
    this.renderQ.size > 1 && this.dropFrames && (i = this.dropFrame() || i);
    const s = Date.now();
    return a = a.snapshot(), this.renderQ.set(s, { graphs: e, range: a, update: i }), s;
  },
  dropFrame: function(a = -1) {
    let e = !1;
    return a === -1 && (a = this.renderQ.lastKey()), this.renderQ.size > 1 && this.renderQ.has(a) && (e = a.update, this.renderQ.delete(a)), e;
  },
  expungeFrames() {
    this.renderQ.clear();
  },
  getFrame: function(a = 0) {
    return this.renderQ.has(a) ? this.renderQ.get(a) : this.renderQ.firstValue();
  },
  frameDone: function() {
    if (this.renderQ.size === 0) return;
    const a = this.renderQ.firstKey();
    this.renderLog && this.rendered.push([a, Date.now()]), this.renderQ.delete(a);
  },
  start: function() {
    this.status = !0, requestAnimationFrame(this.execute.bind(this));
  },
  stop: function() {
    this.status = !1, this.renderQ.clear();
  },
  execute: function() {
    if (!this.status || (requestAnimationFrame(this.execute.bind(this)), this.renderQ.size === 0)) return;
    const [a, e] = this.renderQ.firstEntry();
    if (e.range?.snapshot) {
      for (let i of e.graphs)
        I(i.draw) && i?.status !== "destroyed" && i.draw(e.range, e.update);
      for (let i of e.graphs)
        I(i.render) && i?.status !== "destroyed" && i.render();
      this.frameDone();
    }
  }
}, lo = [
  "-webkit-touch-callout",
  "-webkit-user-select",
  "-khtml-user-select",
  "-moz-user-select",
  "-ms-user-select",
  "user-select"
];
class mg {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l = [];
  #h;
  #o = {};
  #c;
  #u;
  #d = null;
  constructor(e, i) {
    this.#e = e, this.#t = i, this.#i = i.core, this.#s = i.core.theme.legend, this.init(), this.eventsListen();
  }
  get elTarget() {
    return this.#e;
  }
  get list() {
    return this.#o;
  }
  set collapse(e) {
    this.setCollapse(e);
  }
  get collapse() {
    return this.#a;
  }
  get visible() {
    return this.getVisible();
  }
  getVisible() {
    const e = getComputedStyle(this.#e);
    return e.display && e.visibility;
  }
  destroy() {
    this.#i.hub.expunge(this);
    for (let e in this.#o)
      e !== "collapse" && this.remove(e);
    this.#e.remove();
  }
  eventsListen() {
    this.#i.on("chart_pan", this.primaryPanePan, this), this.#i.on("chart_panDone", this.primaryPanePanDone, this);
  }
  init() {
    const e = this.#e.legends;
    this.#r = e.querySelector(".controls"), this.#a = e.querySelectorAll(".control"), this.#c = e.querySelector("#showLegends"), this.#u = e.querySelector("#hideLegends"), this.#r.style.display = "none", this.icons(this.#a, { id: "collapse", parent: this }), this.#e.legends.classList.add("hide"), this.#d = "hide", this.collapse = "show";
  }
  onPointerClick(e) {
    const i = (s) => T(s.dataset.icon) ? { id: s.id, icon: s.dataset.icon, parent: s.parentElement } : s.parentElement.className !== "controls" ? i(s.parentElement) : !1;
    return i(e);
  }
  onMouseOver(e) {
  }
  onLegendAction(e) {
    const i = this.onPointerClick(e.currentTarget);
    this.setCollapse(i.icon);
  }
  setCollapse(e) {
    e === "show" && this.#d !== "show" ? (this.#d = e, this.#c.style.display = "none", this.#u.style.display = "inline-block", this.#e.legends.classList.toggle("hide")) : e === "hide" && this.#d !== "hide" && (this.#d = e, this.#c.style.display = "inline-block", this.#u.style.display = "none", this.#e.legends.classList.toggle("hide"));
  }
  primaryPanePan() {
    for (let e of lo)
      this.#e.style.setProperty(e, "none");
  }
  primaryPanePanDone() {
    for (let e of lo)
      this.#e.style.removeProperty(e);
  }
  add(e) {
    if (!v(e)) return !1;
    const i = () => {
      this.#i.error("ERROR: Legend parent missing!");
    };
    e.id = e?.id || se("legend"), e.type = e?.type || "overlay", e.title = e?.title || e?.parent.legendName, e.parent = e?.parent || i, e.visible = j(e?.visible) ? e.visible : !0;
    const s = this.elTarget.buildLegend(e, this.#i.theme);
    this.#e.legends.insertAdjacentHTML("beforeend", s);
    const n = this.#e.legends.querySelector(`#legend_${e.id}`);
    return this.#h = n.querySelectorAll(".control"), this.#o[e.id] = {
      el: n,
      type: e.type,
      source: e?.source,
      click: []
    }, this.icons(this.#h, e), e.type == "indicator" && (this.#r.style.display = "block", !e.parent.primaryPane && Object.keys(this.#o).length < 3 && (this.#r.style.display = "none")), n.style.display = e.visible ? "block" : "none", e.id;
  }
  remove(e) {
    if (!(e in this.#o) || this.#o[e].type === "chart") return !1;
    this.#o[e].el.remove();
    for (let i of this.#o[e].click)
      i.el.removeEventListener("click", i.click);
    return delete this.#o[e], Object.keys(this.#o).length < 2 && (this.#r.style.display = "none"), !0;
  }
  update(e, i) {
    if (!v(i) || !(e in this.#o) || this.#i.range.data.length == 0) return !1;
    let s = this.#o[e].source(i.pos);
    const n = this.#e.buildInputs(s);
    this.#e.legends.querySelector(`#legend_${e} dl`).innerHTML = n;
  }
  modify(e, i) {
    if (!(e in this.#o) || !v(i)) return !1;
    const s = this.#o[e].el;
    for (let n in i)
      switch (n) {
        case "legendName":
          const r = s.querySelectorAll(".title");
          return r[0].innerHTML = i[n], r[1].innerHTML = i[n], !0;
        case "legendVisibility":
          const o = i[n] ? "block" : "none", l = i[n] ? "visible" : "hidden";
          return s.style.display = o, s.style.visibility = l, !0;
      }
  }
  icons(e, i) {
    let s;
    for (let n of e) {
      let r = n.querySelector("svg");
      r.style.width = `${this.#s.controlsW}px`, r.style.height = `${this.#s.controlsH}px`, r.style.fill = `${this.#s.controlsColour}`, r.onpointerover = (o) => o.currentTarget.style.fill = this.#s.controlsOver, r.onpointerout = (o) => o.currentTarget.style.fill = this.#s.controlsColour, s = i.parent.onLegendAction.bind(i.parent), i.id === "collapse" ? this.#l.push({ el: n, click: s }) : this.#o[i.id].click.push({ el: n, click: s }), n.addEventListener("click", Oe(s, 1e3, this, !0));
    }
  }
}
const pn = {
  id: "chart",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
        this.context.origin.cursor = "crosshair";
      },
      onExit(a) {
      },
      on: {
        xAxis_scale: {
          target: "xAxis_scale",
          action(a) {
          }
        },
        chart_yAxisRedraw: {
          target: "chart_yAxisRedraw",
          action(a) {
          }
        },
        chart_tool: {
          target: "chart_tool",
          action(a) {
          }
        },
        tool_activated: {
          target: "tool_activated",
          action(a) {
            this.context.origin.cursor = "default";
          }
        }
      }
    },
    xAxis_scale: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        Idle: {
          target: "idle",
          action(a) {
          }
        }
      }
    },
    chart_yAxisRedraw: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "yAxisRedraw",
          action(a) {
            this.context.origin.drawGrid();
          }
        }
      }
    },
    tool_activated: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        tool_targetSelected: {
          target: "idle",
          condition: "toolSelectedThis",
          action(a) {
            console.log("tool_targetSelected:", a);
          }
        }
      }
    }
  },
  guards: {
    priceMaxMin() {
      return !0;
    },
    toolSelectedThis(a, e) {
      return this.eventData === this.context;
    },
    yAxisRedraw() {
      return !0;
    },
    zoomDone() {
      return !0;
    }
  }
}, pg = {
  id: "scale",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
        this.context.origin.cursor = "ns-resize";
      },
      onExit(a) {
      },
      on: {
        resize: {
          target: "resize",
          action(a) {
          }
        },
        yAxis_scale: {
          target: "scale",
          action(a) {
          }
        },
        yAxis_inc: {
          target: "incremental",
          action(a) {
          }
        },
        yAxis_log: {
          target: "logarithmic",
          action(a) {
          }
        },
        yAxis_100: {
          target: "percentual",
          action(a) {
          }
        },
        setRange: {
          target: "setRange",
          action(a) {
          }
        }
      }
    },
    resize: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        someEvent: {
          target: "",
          action(a) {
          }
        }
      }
    },
    setRange: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "zoomDone",
          action(a) {
            this.context.origin.draw();
          }
        }
      }
    }
  },
  guards: {
    receiver() {
      return this.eventData.scale.id == this.context.origin.id;
    },
    zoomDone() {
      return !0;
    }
  }
};
class fg extends ee {
  constructor(e, i, s, n, r, o) {
    r = s, s = s.yAxis, super(e, i, s, n, r, o), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get always() {
    return !0;
  }
  draw() {
    if (!super.mustUpdate()) return;
    const e = this.scene.context, i = this.yAxis, s = i.yAxisGrads || [], n = this.theme.yAxis, r = j(n.tickMarker) ? n.tickMarker : !0;
    let o = [], l;
    switch (n?.location) {
      case "left":
        o = [this.width, this.width - i.yAxisTicks];
        break;
      case "right":
      default:
        o = [1, i.yAxisTicks];
        break;
    }
    this.scene.clear(), e.save(), e.strokeStyle = n.colourTick, e.fillStyle = n.colourTick, e.font = `${n.fontWeight} ${n.fontSize}px ${n.fontFamily}`;
    for (let c of s)
      l = i.yPos(c[0]), e.fillText(c[0], i.yAxisTicks + 5, l + n.fontSize * 0.3), r && (e.beginPath(), e.moveTo(o[0], l), e.lineTo(o[1], l), e.stroke());
    e.restore(), super.updated();
  }
}
class gg extends ee {
  constructor(e, i, s, n, r, o) {
    r = s, s = s.yAxis, super(e, i, s, n, r, o), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
    const e = this.scene.context;
    this.yAxis.yAxis, this.scene.clear(), e.save(), e.restore();
  }
}
const Vn = 1.05;
class yg extends ee {
  #e;
  #t;
  constructor(e, i, s, n, r, o) {
    r = s, s = s.yAxis, super(e, i, s, n, r, o), this.viewport = e.viewport, this.#e = {
      fontSize: ke.FONTSIZE * Vn,
      fontWeight: ke.FONTWEIGHT,
      fontFamily: ke.FONTFAMILY,
      txtCol: "#FFFFFF",
      bakCol: ke.COLOUR_CURSOR_BG,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 5,
      paddingRight: 3,
      width: this.viewport.width
    }, this.#t = Ts(this.#e);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (e === void 0 || !this.parent.parent.isPrimary)
      return;
    const i = this.scene.context, s = this.core.stream instanceof St && this.config.stream.tfCountDown;
    let n = e[4], r = this.parent.nicePrice(n), o = { ...this.#e }, l = 0, c = this.#t, m = this.parent.yPos(n) - c * 0.5;
    this.scene.clear(), i.save(), e[4] >= e[1] ? o.bakCol = this.theme.candle.UpBodyColour : o.bakCol = this.theme.candle.DnBodyColour, Ut(i, r, l, m, o), s && (r = this.core.stream.countDownUpdate(), o.fontSize = o?.fontSize / 1.1, Ut(i, r, l, m + c, o)), i.restore(), this.viewport.render();
  }
}
const vg = [
  ["labels", { class: fg, fixed: !0, required: !0 }],
  ["overlay", { class: gg, fixed: !0, required: !0 }],
  ["price", { class: yg, fixed: !0, required: !0 }],
  ["cursor", { class: dh, fixed: !0, required: !0 }]
];
class bg extends Lt {
  #e = "Y Scale Axis";
  #t = "scale";
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u = new me();
  #d = [];
  #m;
  #p = 12;
  #g;
  #y;
  #b;
  #x = {};
  constructor(e, i) {
    super(e, i), this.#r = this.options.elScale, this.#i = this.options.chart, this.id = `${this.parent.id}_scale`, this.#a = this.#r.viewport || this.#r;
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get height() {
    return this.#r.getBoundingClientRect().height;
  }
  get width() {
    return this.#r.getBoundingClientRect().width;
  }
  get element() {
    return this.#r;
  }
  set cursor(e) {
    this.#r.style.cursor = e;
  }
  get cursor() {
    return this.#r.style.cursor;
  }
  get layerCursor() {
    return this.#c;
  }
  get layerLabels() {
    return this.#l;
  }
  get layerOverlays() {
    return this.#h;
  }
  get layerPriceLine() {
    return this.#o;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get yAxis() {
    return this.#n;
  }
  set yAxisType(e) {
    this.#n.yAxisType = R.valid(e);
  }
  get yAxisType() {
    return this.#n.yAxisType;
  }
  get yAxisHeight() {
    return this.#n.height;
  }
  get yAxisRatio() {
    return this.#n.yAxisRatio;
  }
  get yAxisGrads() {
    return this.#n.yAxisGrads;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#r);
  }
  get digitCnt() {
    return this.#m;
  }
  set scaleRange(e) {
    this.setScaleRange(e);
  }
  get range() {
    return this.#n.range;
  }
  set rangeMode(e) {
    this.#n.mode = e;
  }
  get rangeMode() {
    return this.#n.mode;
  }
  set rangeYFactor(e) {
    this.core.range.yFactor(e);
  }
  set yOffset(e) {
    this.#n.offset = e;
  }
  get yOffset() {
    return this.#n.offset;
  }
  get scale() {
    return this;
  }
  get Scale() {
    return this;
  }
  start() {
    const e = this.core.MainPane.graph.viewport.scene.context, i = this.theme.yAxis;
    this.setYAxis(), e.font = Vt(i.fontSize, i.fontWeight, i.fontFamily), this.#p = vr(e, "0");
    let s = this.calcScaleWidth();
    this.setDimensions({ w: s }), this.createGraph(), this.#n.calcGradations(), this.draw(), this.eventsListen();
    const n = K(pg);
    n.id = this.id, n.context = this, this.stateMachine = n, this.stateMachine.start();
  }
  destroy(e = !0) {
    this.core.hub.expunge(this), this.off(`${this.parent.id}_pointerout`, this.#c.erase, this.#c), this.off(et, this.onStreamUpdate, this.#o), this.graph.destroy(), this.#g.destroy(), e && (this.stateMachine.destroy(), this.element.remove());
  }
  eventsListen() {
    let e = this.graph.viewport.scene.canvas;
    this.#g = new Xe(e, { disableContextMenu: !1 }), this.#g.setCursor("ns-resize"), this.#g.on("pointerdrag", this.onDrag.bind(this)), this.#g.on("pointerdragend", this.onDragDone.bind(this)), this.#g.on("wheel", this.onMouseWheel.bind(this)), this.#g.on("dblclick", this.resetScaleRange.bind(this)), this.on(`${this.parent.id}_pointermove`, this.onMouseMove, this), this.on(`${this.parent.id}_pointerout`, this.#c.erase, this.#c), this.on(et, this.onStreamUpdate, this), this.on("range_set", this.draw, this);
  }
  onResize(e) {
    this.setDimensions(e);
  }
  onMouseMove(e) {
    this.#b = E(e) ? e : [Math.floor(e.position.x), Math.floor(e.position.y)], this.#c.draw(this.#b);
  }
  onDrag(e) {
    this.#b = [
      Math.floor(e.position.x),
      Math.floor(e.position.y),
      e.dragstart.x,
      e.dragstart.y,
      e.movement.x,
      e.movement.y
    ], this.setScaleRange(Math.sign(e.movement.y));
  }
  onDragDone(e) {
  }
  onMouseWheel(e) {
    e.domEvent.preventDefault(), this.setScaleRange(Math.sign(e.wheeldelta) * -2);
  }
  onStreamUpdate(e) {
    let i = !1;
    if (this.#n.mode == "manual")
      if (this.parent.isPrimary)
        e[4] > this.range.max && (this.range.max = e[4], i = !0), e[4] < this.range.min && (this.range.max = e[4], i = !0);
      else {
        let s = this.parent, n = this.core.range, r = s.view[0].id, o = this.core.range.secondaryMaxMin?.[r]?.data;
        o && (n.value(void 0, r).forEach((c, m, f) => {
          m != 0 && (c > o.max ? o.max = c : c < o.min && (o.min = c));
        }), i = !0);
      }
    i ? this.draw() : this.#o.draw(e);
  }
  onChartDrag(e) {
    this.#n.mode === "manual" && (this.#n.offset = e.domEvent.srcEvent.movementY, this.draw());
  }
  #w(e) {
    this.#r.style.height = `${e}px`;
  }
  #f(e) {
    this.#r.style.width = `${e}px`;
  }
  setDimensions(e = {}) {
    e = v(e) ? e : {};
    const i = e?.w || this.width || Ot * ke.FONTSIZE * Vn, s = e?.h || this.parent.height;
    this.#f(i), this.#w(s), this.graph instanceof ft && (this.graph.setSize(i, s, i), this.draw()), this.#c instanceof dh && this.calcPriceDigits();
  }
  setYAxis() {
    const e = this.options.yAxisType === R.default ? void 0 : this.parent.localRange;
    this.#n = new hi(this, this, this.options.yAxisType, e), this.#n.yAxisPadding = P(this.options?.yAxisPadding) && this.options.yAxisPadding >= 1 ? this.options.yAxisPadding : 1;
  }
  setScaleRange(e = 0) {
    this.#n.mode == "automatic" && (this.#n.mode = "manual"), this.#n.zoom = e, this.draw(this.range, !0), this.core.MainPane.draw();
  }
  resetScaleRange() {
    this.#n.mode = "automatic", this.draw(this.range, !0), this.core.MainPane.draw();
  }
  yPos(e) {
    return this.#n.yPos(e);
  }
  yPosStream(e) {
    return this.#n.lastYData2Pixel(y);
  }
  yPos2Price(e) {
    return this.#n.yPos2Price(e);
  }
  nicePrice(e, i) {
    return Pn(e, i);
  }
  createGraph() {
    let e = K(vg);
    this.graph = new ft(this, this.#a, e, !1), this.#c = this.graph.overlays.get("cursor").instance, this.#l = this.graph.overlays.get("labels").instance, this.#h = this.graph.overlays.get("overlay").instance, this.#o = this.graph.overlays.get("price").instance, this.graph.addOverlays(this.#d), this.#o.target.moveTop(), this.#c.target.moveTop(), this.calcPriceDigits();
  }
  calcPriceDigits() {
    let e = Ot, i = "0";
    if (this.core.range.dataLength > 0 && this.#n instanceof hi) {
      if (this.#i.isPrimary)
        i = this.niceValue(this.range.valueMax);
      else
        for (let s in this.#i.indicators) {
          let n = this.range.secondaryMaxMin?.[s]?.data?.max || Ot, r = this.niceValue(n);
          r.length > i.length && (i = r);
        }
      e = `${i}`.length + 2 || Ot;
    }
    return this.#m = e < Ot ? Ot : e, this.#m;
  }
  niceValue(e) {
    const i = this.#n.niceNumber(e);
    let s = Pn(i, this.core.pricePrecision);
    return s = s.match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1], s;
  }
  calcScaleWidth() {
    return (this.calcPriceDigits() + 2) * this.#p * Vn;
  }
  addOverlays(e) {
    if (!E(e)) return !1;
    this.graph === void 0 ? this.#d.push(...e) : this.graph.addOverlays(e);
  }
  addOverlay(e, i) {
    if (!v(i)) return !1;
    if (this.graph === void 0)
      this.#d.push([e, i]);
    else {
      let s = this.graph.addOverlay(e, i);
      return this.#o.target.moveTop(), this.#c.target.moveTop(), s;
    }
  }
  render() {
    this.graph.render();
  }
  draw(e = this.range, i = !0) {
    this.#n.calcGradations(), this.graph.draw(e, i), this.parent.drawGrid(i), this.parent.draw(e, !0);
  }
  resize(e = this.width, i = this.height) {
    this.setDimensions({ w: e, h: i });
  }
}
class wg extends ee {
  watermark = {};
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.params.content = o?.content || "";
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw() {
    const e = this.config?.watermark;
    if (super.mustUpdate(), e?.display !== !1) {
      if (e?.imgURL)
        this.watermark.imgURL = e.imgURL, Kn(e?.imgURL, this.renderImage.bind(this));
      else if (T(e?.text)) {
        this.watermark.text = e.text, this.scene.clear();
        const i = this.scene.context;
        i.save(), this.renderText(e.text), i.restore();
      } else return;
      super.updated();
    }
  }
  renderText(e) {
    const i = Math.floor(this.core.height / lt), s = this.core.config?.watermark?.fontSize, n = this.core.config?.watermark?.fontWeight, r = this.core.config?.watermark?.fontFamily, o = this.core.config?.watermark?.textColour, l = {
      fontSize: (s || this.theme.watermark.FONTSIZE) * i,
      fontWeight: n || this.theme.watermark.FONTWEIGHT,
      fontFamily: r || this.theme.watermark.FONTFAMILY,
      txtCol: o || this.theme.watermark.COLOUR
    }, c = this.scene.context;
    c.font = Vt(l?.fontSize, l?.fontWeight, l?.fontFamily), c.textBaseline = "top", c.fillStyle = l.txtCol;
    const m = Ts(l), f = Cs(c, e, l), C = (this.scene.width - f) / 2, M = (this.core.Chart.height - m) / 2;
    c.fillText(e, C, M);
  }
  renderImage(e) {
    if (!e) return;
    const i = this.core.config?.watermark?.imgHeight || this.theme.watermark.IMGHEIGHT, s = this.core.config?.watermark?.imgWidth || this.theme.watermark.IMGWIDTH, n = (this.scene.width - s) / 2, r = (this.scene.height - i) / 2;
    this.scene.clear();
    const o = this.scene.context;
    o.save(), Ul(o, e, n, r, i, s), o.restore();
  }
}
class xg extends ee {
  #e;
  #t;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.#e = new ch(e.scene, n), this.theme.volume.Height = B(n?.volume?.Height, 0, 100) || 100;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate()) return;
    this.scene.clear();
    const i = e.data, s = this.scene.height, n = this.xAxis.smoothScrollOffset || 0;
    let r = Math.max(this.xAxis.candleW - 1, 1);
    r = yi(r);
    const o = {
      x: 0 + n - this.xAxis.candleW,
      w: r,
      z: s
    }, l = Math.floor(s * this.theme.volume.Height / 100);
    let c = this.core.rangeScrollOffset, m = e.indexStart - c, f = e.Length + c * 2, C = f, M = m, L, D = 0;
    for (; C--; )
      L = e.value(M), L[4] !== null && (D = L[5] > D ? L[5] : D), M++;
    for (; f--; )
      L = e.value(m), o.x = Ue(this.xAxis.xPos(L[0]) - r / 2), L[4] !== null && (o.h = l - l * ((D - L[5]) / D), o.raw = i[m], this.#e.draw(o)), m++;
    super.updated();
  }
}
class mh extends ee {
  #e;
  constructor(e, i = !1, s = !1, n, r) {
    super(e, i, s, n, r), this.#e = new Wl(e.scene, n);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate()) return;
    this.scene.clear();
    let i, s = this.theme.candle.Type;
    switch (s) {
      case be.AREA:
      case be.LINE:
        i = (f) => {
          this.#e.area({ ...f });
        };
        break;
      default:
        i = (f) => {
          this.#e.draw(f);
        };
        break;
    }
    const r = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let o = this.core.rangeScrollOffset, l = e.indexStart - o, c = e.Length + o * 2, m;
    for (this.core.stream && (this.core.stream.lastPriceMax = e.valueMax, this.core.stream.lastPriceMin = e.valueMin); c; ) {
      if (l >= 0) {
        if (m = e.value(l), r.x = this.xAxis.xPos(m[0]), m?.[7]) {
          this.core.stream.lastXPos = r.x, this.core.stream.lastYPos = { ...r };
          break;
        }
        m[4] !== null && (r.o = this.yAxis.yPos(m[1]), r.h = this.yAxis.yPos(m[2]), r.l = this.yAxis.yPos(m[3]), r.c = this.yAxis.yPos(m[4]), r.raw = m, i(r));
      }
      l++, c--;
    }
    (s === be.AREA || s === be.LINE) && this.#e.areaRender(), super.updated();
  }
}
class Cg extends ee {
  #e;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.#e = new Wl(e.scene, n), this.theme.priceLineStyle = this.theme?.priceLineStyle || lm;
  }
  set position(e) {
    this.setPosition(e[0], e[1]);
  }
  setPosition(e, i) {
    this.core.stream !== void 0 && (this.target.setPosition(e, i), this.core.stream.lastScrollPos = this.core.scrollPos);
  }
  draw() {
    if (this.core.stream === void 0 || !E(this.chart.streamCandle)) return;
    this.scene.clear();
    const e = this.core.range, i = this.chart.streamCandle, s = this.theme.candle.Type === be.AREA || this.theme.candle.Type === be.LINE ? (o) => {
      this.areaRender(o);
    } : (o) => {
      this.#e.draw(o);
    };
    this.xAxis.smoothScrollOffset;
    const r = {
      x: this.core.stream.lastXPos,
      w: this.xAxis.candleW
    };
    r.o = this.yAxis.yPos(i[1]), r.h = this.yAxis.yPos(i[2]), r.l = this.yAxis.yPos(i[3]), r.c = this.yAxis.yPos(i[4]), r.raw = i, e.inRenderRange(i[0]) && s(r), i[4] >= i[1] ? this.theme.priceLineStyle.stroke = this.core.theme.candle.UpBodyColour : this.theme.priceLineStyle.stroke = this.core.theme.candle.DnBodyColour, Pt(
      this.scene.context,
      r.c,
      0,
      this.target.width,
      this.theme.priceLineStyle
    );
  }
  areaRender(e) {
    const i = this.core.range, s = i.value(i.data.length - 2);
    if (s === null) return;
    const n = {
      x: this.xAxis.xPos(s[0]),
      o: this.yAxis.yPos(s[1]),
      h: this.yAxis.yPos(s[2]),
      l: this.yAxis.yPos(s[3]),
      c: this.yAxis.yPos(s[4])
    }, r = this.scene.context, o = this.theme, l = o.candle.UpBodyColour || o.candle.DnBodyColour;
    Math.max(e.w - 1, 1), e.x;
    let c;
    if (r.save(), r.fillStyle = l, r.strokeStyle = l, r.lineWidth = 1, r.beginPath(), r.moveTo(e.x, e.c), r.lineTo(n.x, n.h), o.candle.Type === be.AREA) {
      if (c = r.createLinearGradient(0, 0, 0, this.scene.height), E(o.candle.AreaFillColour))
        for (let [m, f] of o.candle.AreaFillColour.entries())
          c.addColorStop(m, f);
      else T(o.candle.AreaFillColour) ? c = o.candle.AreaFillColour : c = o.candle.UpBodyColour || o.candle.DnBodyColour;
      r.stroke(), r.lineTo(n.x, this.scene.height), r.lineTo(e.x, this.scene.height), r.fillStyle = c, r.closePath(), r.fill();
    } else
      r.stroke();
    r.restore();
  }
}
const ni = {
  colour: "#4444cc88",
  wdith: 1,
  dash: [1, 0]
};
class Tg extends ee {
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o);
    const l = { class: Sg, fixed: !0, required: !1 };
    this.core.config?.highLow === !0 && (this.scaleOverly = this.chart.scale.addOverlay("hiLo", l));
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw(e = this.core.range) {
    if (this.core.config?.highLow !== !0 || !super.mustUpdate()) return;
    this.scene.clear();
    let i, s, n, r = this.scene.width, o = 35, l = {};
    const c = e.valueHi, m = e.valueLo, f = { ...this.theme.yAxis }, C = this.scene.context;
    f.colourCursorBG = this.theme?.hilo?.colour || ni.colour, C.save(), C.strokeStyle = this.theme?.highLow?.colour || ni.colour, C.strokeWidth = this.theme?.highLow?.width || ni.width, C.setLineDash(this.theme?.highLow?.dash || ni.dash), n = this.yAxis.yPos(c), Pt(C, n, 0, r, l), i = "High", s = this.theme.yAxis.location == "left" ? 0 : r - (o + 25), us(C, i, s, n, o, f), n = this.yAxis.yPos(m), Pt(C, n, 0, r, l), i = "Low", us(C, i, s, n, o, f), C.restore(), super.updated(), "hiLo" in this.chart.scale.overlays && (this.chart.scale.overlays.hiLo.instance.setRefresh(), this.chart.scale.overlays.hiLo.instance.scaleDraw());
  }
}
class Sg extends ee {
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw() {
  }
  scaleDraw(e = this.core.range) {
    if (!super.mustUpdate()) return;
    this.scene.clear();
    let i, s, n, r;
    const o = e.valueHi, l = e.valueLo, c = { ...this.theme.yAxis }, m = this.scene.context;
    c.colourCursorBG = this.theme?.hilo?.colour || ni.colour, i = this.chart.Scale.nicePrice(o), s = 1, n = this.yAxis.yPos(o) + 1, r = this.viewport.width, us(m, i, s, n, r, c), i = this.chart.Scale.nicePrice(l), n = this.yAxis.yPos(l) + 1, us(m, i, s, n, r, c), super.updated();
  }
}
function us(a, e, i, s, n, r) {
  let o = {
    fontSize: r.fontSize * 1.05,
    fontWeight: r.fontWeight,
    fontFamily: r.fontFamily,
    txtCol: r.colourCursor,
    bakCol: r.colourCursorBG,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    width: n
  }, l = o.fontSize + o.paddingTop + o.paddingBottom, c = s - l * 0.5;
  a.save(), a.fillStyle = o.bakCol, a.fillRect(i, c, n, l), Ut(a, `${e}`, i, c, o), a.restore();
}
class Pg {
  data;
  icon;
  constructor(e, i) {
    this.scene = e.scene, this.hit = e.hit, this.ctx = this.scene.context, this.ctxH = this.hit.context, this.width = this.scene.width, this.cfg = i.events, this.dims = { w: this.cfg.iconWidth, h: this.cfg.iconHeight }, this.icon = is(this.cfg.iconEvent, this.cfg.iconColour, this.dims);
  }
  draw(e) {
    this.data = e;
    const i = this.icon, s = this.cfg, n = this.hit.getIndexValue(e.key), r = Tt(n, i), o = B(e.w, s.iconMinDim, s.iconHeight), l = B(e.w, s.iconMinDim, s.iconWidth), c = this.data.x, m = this.data.y, f = this.ctx, C = this.ctxH;
    return f.save(), f.drawImage(i, c, m, l, o), f.restore(), C.save(), C.drawImage(r, c, m, l, o), C.restore(), { x: c, y: m, w: l, h: o, k: n };
  }
}
const ho = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class Eg extends ee {
  #e;
  #t = [];
  #i;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.#e = new Pg(e, n), this.core.on("chart_primaryPointerDown", this.onPrimaryPointerDown, this), ho.parent = this, this.#i = this.core.WidgetsG.insert("Dialogue", ho), this.#i.start();
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get data() {
    return this.overlay.data;
  }
  onPrimaryPointerDown(e) {
    this.core.MainPane.stateMachine.state !== "chart_pan" && Oe(this.isNewsEventSelected, ci, this)(e);
  }
  isNewsEventSelected(e) {
    const i = e[0], s = e[1], n = this.hit.getIntersection(i, s);
    if (this.core.config?.events?.display === !1 || this.core.config?.events?.displayInfo === !1 || n == -1) return;
    const r = this.theme.events, o = B(this.xAxis.candleW, r.iconMinDim, r.iconHeight), l = this.xAxis.pixel2T(i), c = this.xAxis.scrollOffsetPx, m = this.core.dimensions;
    let f = Object.keys(this.data)[n] * 1, C = this.xAxis.xPos(l) + c, M = s - o * 1.5 - m.height, L = "";
    for (let k of this.data[f])
      L += this.buildNewsEventHTML(k);
    const D = {
      dimensions: { h: void 0, w: 150 },
      position: { x: C + o / 2 + 1, y: M },
      content: L,
      offFocus: ci + 1
    };
    this.core.emit("event_selected", f), this.#i.open(D);
  }
  buildNewsEventHTML(e) {
    let i = e?.title, s = `<style>
    h1, p {display: inline-block; font-size: 0.9em;
    max-width: 98%;
    </style>`;
    return T(e?.url) && (i = `<a href="${e?.url}" target="${e?.target}">${i}</a>`), s += `<h1>${i}</h1>`, s += `<p>${e?.content}</p>`, s;
  }
  draw(e = this.core.range) {
    if (this.core.config?.events?.display === !1 || !v(this.data) || Object.keys(this.data).length == 0 || !super.mustUpdate()) return;
    this.hit.clear(), this.scene.clear(), this.#t.length = 0;
    const s = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let n = this.theme.events, r = this.core.rangeScrollOffset, o = e.indexStart - r, l = e.Length + r * 2, c, m, f;
    for (; l; ) {
      if (c = e.value(o), m = `${c[0]}`, f = Object.keys(this.data).indexOf(m), f >= 0)
        for (let C of this.data[m])
          s.x = this.xAxis.xPos(c[0]) - this.xAxis.candleW / 2, s.y = this.scene.height - B(this.xAxis.candleW, n.iconMinDim, n.iconHeight) * 1.5, s.key = f, this.#t.push(this.#e.draw(s));
      o++, l--;
    }
    super.updated();
  }
}
class Mg {
  data;
  buy;
  sell;
  mask;
  dims = { w: 0, h: 0 };
  constructor(e, i) {
    this.scene = e.scene, this.hit = e.hit, this.ctx = this.scene.context, this.ctxH = this.hit.context, this.width = this.scene.width, this.cfg = i.trades, this.dims = { w: this.cfg.iconWidth, h: this.cfg.iconHeight }, this.buy = is(this.cfg.iconBuy, this.cfg.buyColour, this.dims), this.sell = is(this.cfg.iconSell, this.cfg.sellColour, this.dims);
  }
  draw(e) {
    this.data = e;
    const i = this.cfg, s = e.side === "buy" ? this.buy : this.sell;
    e.side === "buy" ? i.iconBuy : i.iconSell;
    const n = this.hit.getIndexValue(e.key), r = Tt(n, s), o = B(e.w, i.iconMinDim, i.iconHeight), l = B(e.w, i.iconMinDim, i.iconWidth), c = this.data.x, m = this.data.y, f = this.ctx, C = this.ctxH;
    return f.save(), f.drawImage(s, c, m, l, o), f.restore(), C.save(), C.drawImage(r, c, m, l, o), C.restore(), { x: c, y: m, w: l, h: o, k: n };
  }
}
const co = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class Lg extends ee {
  #e;
  #t = [];
  #i;
  #s;
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o), this.settings = o.settings, A.importData("trades", this.data, this.state, this.state.time.timeFrame), this.#e = new Mg(e, n), this.core.on("chart_primaryPointerDown", this.onPrimaryPointerDown, this), co.parent = this, this.#s = this.core.WidgetsG.insert("Dialogue", co), this.#s.start();
  }
  destroy() {
    this.core.off("chart_primaryPointerDown", this.onPrimaryPointerDown, this);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get data() {
    return this.overlay.data;
  }
  get settings() {
    return this.params.settings;
  }
  set settings(e) {
    this.doSettings(e);
  }
  doSettings(e) {
    if (!v(e)) return !1;
    let i = this.theme.trades;
    for (let s in e)
      e[s] !== void 0 && (i[s] = e[s]);
  }
  onPrimaryPointerDown(e) {
    this.core.MainPane.stateMachine.state !== "chart_pan" && Oe(this.isTradeSelected, ci, this)(e);
  }
  isTradeSelected(e) {
    const i = e[2].domEvent.srcEvent, s = (i.target || i.srcElement).getBoundingClientRect(), n = i.clientX - (s.right - s.width), r = i.clientY - s.top, o = this.hit.getIntersection(n, r);
    if (this.core.config?.trades?.display === !1 || this.core.config?.trades?.displayInfo === !1 || o == -1) return;
    console.log("isTradeSelected()");
    const l = this.theme.trades, c = B(this.xAxis.candleW, l.iconMinDim, l.iconWidth), m = this.xAxis.pixel2T(n);
    this.core.range.valueByTS(m);
    const f = this.xAxis.scrollOffsetPx, C = this.core.dimensions;
    let M = Object.keys(this.data)[o] * 1, L = this.xAxis.xPos(m) + f, D = r - c * 1.5 - C.height, k = "";
    for (let le of this.data[M])
      k += this.buildTradeHTML(le);
    const X = {
      dimensions: { h: void 0, w: 150 },
      position: { x: L + c / 2 + 1, y: D },
      content: k,
      offFocus: ci + 1
    };
    this.core.emit("trade_selected", M), this.#s.open(X);
  }
  buildTradeHTML(e) {
    let i = `<style>
    dt, dd {display: inline-block; font-size: 0.9em;}
    dt {min-width: 40%;}
    dd {min-width: 60%; margin: 0;}
    </style>`;
    i += "<dl>";
    for (let s in e)
      s != "timestamp" && (i += `<dt>${s}</dt><dd>${e[s]}</dd>`);
    return i += "</dl>", i;
  }
  draw(e = this.core.range) {
    if (this.core.config?.events?.display === !1 || !v(this.data) || Object.keys(this.data).length == 0 || !super.mustUpdate()) return;
    this.hit.clear(), this.scene.clear(), this.#t.length = 0;
    const s = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let n = this.theme.trades, r = this.core.rangeScrollOffset, o = e.indexStart - r, l = e.Length + r * 2, c, m, f;
    for (; l; ) {
      if (c = e.value(o), m = `${c[0]}`, f = Object.keys(this.data).indexOf(m), f >= 0)
        for (let C of this.data[m])
          s.x = this.xAxis.xPos(c[0]) - this.xAxis.candleW / 2, s.y = this.yAxis.yPos(c[2]) - B(this.xAxis.candleW, n.iconMinDim, n.iconHeight) * 1.5, s.side = C.side, s.key = f, this.#t.push(this.#e.draw(s));
      o++, l--;
    }
    super.updated();
  }
}
class Qi {
  static passive = new Qi("passive");
  static hover = new Qi("hover");
  static active = new Qi("active");
  constructor(e) {
    this.name = e;
  }
}
const uo = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class Le extends ee {
  static #e = 0;
  static #t = {};
  static get inCnt() {
    return Le.#e++;
  }
  static create(e, i) {
    const s = ++Le.#e;
    i.cnt = s, i.modID = `${i.toolID}_${s}`, i.toolID = i.modID, i.target = e;
    const n = new i.tool(i);
    return Le.#t[s] = n, e.chartToolAdd(n), n;
  }
  static destroy(e) {
    e instanceof Le && delete Le.#t[e.inCnt];
  }
  #i;
  #s;
  #n = "Chart Tools";
  #r = "TX_Tool";
  #a;
  #l;
  #h = [0, 0];
  #o = !1;
  #c;
  #u = { TL: [0, 0], BR: [0, 0] };
  constructor(e, i = !1, s = !1, n, r, o) {
    super(e, i, s, n, r, o);
    const l = o?.overlay;
    this.#s = Le.inCnt, this.id = l?.id || se(this.shortName), this.settings = o?.settings || {}, uo.parent = this, this.#a = this.core.WidgetsG.insert("ConfigDialogue", uo), this.#a.start(), this.eventsListen();
  }
  set id(e) {
    this.#i = dt(e);
  }
  get id() {
    return this.#i || `${this.core.ID}-${se(this.#r)}_${this.#s}`;
  }
  get inCnt() {
    return this.#s;
  }
  get name() {
    return this.#n;
  }
  get shortName() {
    return this.#r;
  }
  get settings() {
    return this.params.settings;
  }
  set settings(e) {
    this.doSettings(e);
  }
  eventsListen() {
    const e = this.chart;
    e.on(`${e.id}_pointermove`, this.onPointerMove, this), e.on(`${e.id}_pointerdown`, this.onPointerDown, this), e.on(`${e.id}_pointerup`, this.onPointerUp, this);
  }
  onPointerMove(e) {
    this.chart.stateMachine.state;
  }
  onPointerDown(e) {
    this.chart.stateMachine.state !== "chart_pan" && Oe(this.isToolSelected, ci, this)(e);
  }
  onPointerUp(e) {
  }
  isToolSelected(e) {
  }
  doSettings(e) {
    if (!v(e)) return !1;
    let i = this.theme.trades;
    for (let s in e)
      e[s] !== void 0 && (i[s] = e[s]);
  }
  isVisible() {
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate() || this.core.config?.tools?.display === !1) return;
    this.hit.clear(), this.scene.clear(), this.theme.tools;
    let i = this.core.rangeScrollOffset;
    e.indexStart - i, e.Length + i * 2, super.updated();
  }
}
const ph = {
  primaryPane: [
    ["watermark", { class: wg, fixed: !0, required: !0, params: { content: null } }],
    ["grid", { class: cs, fixed: !0, required: !0, params: { axes: "y" } }],
    ["candles", { class: mh, fixed: !1, required: !0 }],
    ["hiLo", { class: Tg, fixed: !0, required: !1 }],
    ["stream", { class: Cg, fixed: !1, required: !0 }],
    ["cursor", { class: Un, fixed: !0, required: !0 }]
  ],
  secondaryPane: [
    ["grid", { class: cs, fixed: !0, required: !0, params: { axes: "y" } }],
    ["cursor", { class: Un, fixed: !0, required: !0 }]
  ]
}, zn = {
  primaryPane: {
    trades: { class: Lg, fixed: !1, required: !1 },
    events: { class: Eg, fixed: !1, required: !1 },
    volume: { class: xg, fixed: !1, required: !0, params: { maxVolumeH: qi.ONCHART_VOLUME_HEIGHT } }
  },
  secondaryPane: {
    candles: { class: mh, fixed: !1, required: !0 }
  }
}, Ne = {
  id: "chart",
  title: "",
  type: "chart",
  parent: void 0,
  source: () => {
  },
  visible: !0
};
class Je extends Lt {
  static #e = 0;
  static get cnt() {
    return Je.#e++;
  }
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l = "idle";
  #h = {
    state: !1,
    height: null,
    rowsHeight: null,
    rowsCnt: 1
  };
  #o;
  #c;
  #u;
  #d;
  #m;
  #p;
  #g;
  #y;
  #b;
  #x;
  #w;
  #f = new me();
  #S = new me();
  #v = [0, 0];
  #P = !1;
  #T;
  #C;
  #E;
  #L = {
    valueMax: 110,
    valueMin: -10,
    valueDiff: 120
  };
  #A = {};
  constructor(e, i = {}) {
    if (super(e, i), this.#r = Je.cnt, !v(i)) throw new Error(`TradeX-Chart: ${e.ID} : Chart (pane) constructor failed: Expected options typeof object`);
    if (this.#i = this.options.name, this.#s = this.options.shortName, this.#n = this.options.title, this.#a = this.options.type == "primary" ? "primaryPane" : "secondaryPane", this.#x = this.options.view, this.#c = this.options.elements.elScale, this.#o = this.options.elements.elTarget, this.#o.id = this.id, this.legend = new mg(this.elLegend, this), this.isPrimary)
      Ne.type = "chart", Ne.title = this.title, Ne.parent = this, Ne.source = this.legendInputs.bind(this), this.legend.add(Ne), this.yAxisType = R.default;
    else {
      let s = this.core.indicatorClasses[i.view[0].type].scale;
      Ne.type = "secondary", Ne.title = "", Ne.parent = this, Ne.source = () => ({ inputs: {}, colours: [], labels: [] }), this.legend.add(Ne), this.yAxisType = R.valid(s);
    }
    this.setScaleBar(), this.#l = "init";
  }
  set id(e) {
    this.#t = dt(e);
  }
  get id() {
    return this.#t || dt(`${this.core.ID}-${this.#i}_${this.#r}`);
  }
  get name() {
    return this.#i;
  }
  get shortName() {
    return this.#s;
  }
  set title(e) {
    this.setTitle(e);
  }
  get title() {
    return `${this.#n} : ${this.range.timeFrame} :`;
  }
  get type() {
    return this.#a;
  }
  get status() {
    return this.#l;
  }
  get collapsed() {
    return this.#h;
  }
  get isPrimary() {
    return this.options?.view?.primary || this.#a === "primaryPane" || !1;
  }
  get element() {
    return this.#o;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#o);
  }
  set width(e) {
    this.setWidth(e);
  }
  get width() {
    return this.#o.getBoundingClientRect().width;
  }
  set height(e) {
    this.setHeight(e);
  }
  get height() {
    return this.#o.getBoundingClientRect().height;
  }
  get localRange() {
    return this.#L;
  }
  get stream() {
    return this.#g;
  }
  get streamCandle() {
    return this.#b;
  }
  set cursor(e) {
    this.element.style.cursor = e;
  }
  get cursor() {
    return this.element.style.cursor;
  }
  get cursorPos() {
    return this.#v;
  }
  set cursorActive(e) {
    this.#P = e;
  }
  get cursorActive() {
    return this.#P;
  }
  get cursorClick() {
    return this.#T;
  }
  get candleW() {
    return this.core.Timeline.candleW;
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  get elCanvas() {
    return this.graph.viewport.scene.canvas;
  }
  get elScale() {
    return this.#c;
  }
  get elLegend() {
    return this.#o.legend;
  }
  get elViewport() {
    return this.#o.viewport;
  }
  set layerWidth(e) {
    this.graph.layerWidth = e;
  }
  get layerWidth() {
    return this.graph.layerWidth;
  }
  set legend(e) {
    this.#m = e;
  }
  get legend() {
    return this.#m;
  }
  set time(e) {
    this.#d = e;
  }
  get time() {
    return this.#d;
  }
  set scale(e) {
    this.#u = e;
  }
  get scale() {
    return this.#u;
  }
  set yAxisType(e) {
    this.setYAxisType(e);
  }
  get yAxisType() {
    return this.#E;
  }
  get axes() {
    return "x";
  }
  get view() {
    return this.#x;
  }
  get viewport() {
    return this.graph.viewport;
  }
  get layerGrid() {
    return this.graph.overlays.get("grid").layer;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get overlayGrid() {
    return this.graph.overlays.get("grid").instance;
  }
  get overlayTools() {
    return this.#S;
  }
  get overlaysDefault() {
    return ph[this.type];
  }
  get indicators() {
    return this.getIndicators();
  }
  get indicatorDeleteList() {
    return this.#A;
  }
  get Divider() {
    return this.#p;
  }
  get siblingPrev() {
    return this.sibling("prev");
  }
  get siblingNext() {
    return this.sibling("next");
  }
  start() {
    this.#d = this.core.Timeline, this.createGraph(), this.#u.start(), this.draw(this.range), pn.id = this.id, pn.context = this, this.stateMachine = pn, this.stateMachine.start(), this.eventsListen(), this.isPrimary && this.setTitle(this.core.state.symbol);
    let e = { chartPane: this };
    this.#p = this.core.WidgetsG.insert("Divider", e), this.#p.start();
    let s = {
      title: "Chart Config",
      content: `Configure chart ${this.id}`,
      parent: this,
      openNow: !1
    };
    this.#y = this.core.WidgetsG.insert("ConfigDialogue", s), this.#y.start(), this.#l = "running", this.log(`TradeX-Chart: ${this.core.ID} : Chart Pane : ${this.name} : instantiated and running`);
  }
  destroy() {
    if (this.#l !== "destroyed") {
      if (!this.core.MainPane.chartDeleteList[this.id]) {
        this.core.warn(`Cannot "destroy()": ${this.id} !!! Use "remove()" or "chartPaneRemove()" instead.`);
        return;
      }
      this.core.log(`Deleting chart pane: ${this.id}`), this.deactivate(!0), this.#l = "destroyed";
    }
  }
  remove() {
    this.emit("chart_paneDestroy", this.id);
  }
  deactivate(e = !1) {
    this.core.hub.expunge(this), e && this.removeAllIndicators(), this.stateMachine.destroy(), this.#p.destroy(), this.#u.destroy(), this.graph.destroy(), this.#C.destroy(), this.legend.destroy(), this.stateMachine = void 0, this.#p = void 0, this.#m = void 0, this.#u = void 0, this.graph = void 0, this.#C = void 0, this.element.remove();
  }
  snapshot() {
    return {
      maximized: this.core.MainPane.chartPaneMaximized?.instance?.id == this.id,
      collapsed: { ...this.collapsed },
      height: this.height
    };
  }
  eventsListen() {
    this.#C = new Xe(this.#o, { disableContextMenu: !1 }), this.#C.on("pointerdrag", this.onChartDrag.bind(this)), this.#C.on("pointerdragend", this.onChartDragDone.bind(this)), this.#C.on("pointermove", this.onPointerMove.bind(this)), this.#C.on("pointerenter", this.onPointerEnter.bind(this)), this.#C.on("pointerout", this.onPointerOut.bind(this)), this.#C.on("pointerdown", this.onPointerDown.bind(this)), this.#C.on("pointerup", this.onPointerUp.bind(this)), this.on("main_mouseMove", this.updateLegends, this), this.on(ti, this.onStreamListening, this), this.on(ts, this.onStreamNewValue, this), this.on(et, this.onStreamUpdate, this), this.on(es, this.onStreamNewValue, this), this.on("range_valueMaxMin", this.onValueMaxMin, this), this.on("range_timeframeSet", this.onTimeframeSet, this), this.on(`${this.id}_removeIndicator`, this.onDeleteIndicator, this), this.isPrimary && this.on("chart_yAxisRedraw", this.onYAxisRedraw, this);
  }
  onChartDrag(e) {
    this.cursor = "grab", this.core.MainPane.onChartDrag(e), this.scale.onChartDrag(e);
  }
  onChartDragDone(e) {
    this.core.MainPane.onChartDragDone(e), this.cursor = "crosshair";
  }
  onPointerMove(e) {
    this.core.MainPane.onPointerActive(this), this.scale.layerCursor.visible = !0, this.graph.overlays.list.get("cursor").layer.visible = !0, this.#v = [Math.round(e.position.x), Math.round(e.position.y)], this.#u.onMouseMove(this.#v), this.emit(`${this.id}_pointermove`, this.#v);
  }
  onPointerEnter(e) {
    this.core.MainPane.onPointerActive(this), this.#v = [Math.round(e.position.x), Math.round(e.position.y)], this.core.MainPane.onMouseEnter(), this.scale.layerCursor.visible = !0, this.graph.overlays.list.get("cursor").layer.visible = !0, this.emit(`${this.id}_pointerenter`, this.#v);
  }
  onPointerOut(e) {
    this.#P = !1, this.#v = [Math.round(e.position.x), Math.round(e.position.y)], this.scale.layerCursor.visible = !1, this.emit(`${this.id}_pointerout`, this.#v);
  }
  onPointerDown(e) {
    this.core.pointerButtons[e.domEvent.srcEvent.button] = !0, this.#T = [Math.floor(e.position.x), Math.floor(e.position.y), e], this.stateMachine.state === "tool_activated" ? this.emit("tool_targetSelected", { target: this, position: e }) : this.isPrimary && this.emit("chart_primaryPointerDown", this.#T);
  }
  onPointerUp(e) {
    this.core.pointerButtons[e.domEvent.srcEvent.button] = !1;
  }
  onStreamListening(e) {
    this.#g !== e && (this.#g = e);
  }
  onStreamNewValue(e) {
    this.draw(this.range, !0);
  }
  onStreamUpdate(e) {
    this.isPrimary ? (this.#b = e, this.chartStreamCandle.draw(), this.layerStream.setPosition(this.core.stream.lastScrollPos, 0), this.updateLegends(this.cursorPos, e)) : this.updateLegends(), this.core.MainPane.draw();
  }
  onYAxisRedraw() {
    this.isPrimary && this.refresh();
  }
  onDeleteIndicator(e) {
    this.removeIndicator(e.id);
  }
  onTimeframeSet() {
    let e = `${this.#n}`;
    Ne.title = e, this.setTitle(e);
  }
  onValueMaxMin(e) {
    console.log(`TradeX-chart: ${this.core.ID} : Chart Pane ${this.id} : Range Value Max: ${e.max}, Min: ${e.min}`);
  }
  setScaleBar() {
    const e = { ...this.options };
    e.parent = this, e.chart = this, e.elScale = this.elScale, e.yAxisType = this.yAxisType, this.scale = new bg(this.core, e);
  }
  setTitle(e) {
    let i = this.#n, s;
    if (v(e))
      T(e?.text) && (i = e.text), s = e?.display ? "display" : "none";
    else if (T(e))
      i = e;
    else return !1;
    this.#n = i, Ne.title = this.title;
    const n = this.legend.list.chart.el.querySelectorAll(".title");
    for (let r of n)
      r.innerHTML = this.title, r.style.display = s || r.style.display;
    return !0;
  }
  setWatermark(e) {
    T(e.text) || T(e) ? this.core.config.watermark.text = e : "imgURL" in e && (this.core.config.watermark.imgURL = e);
  }
  setHeight(e) {
    P(e) || (e = this.height || this.core.MainPane.rowsH), e > this.core.MainPane.rowsH && (e = this.core.MainPane.rowsH), this.#o.style.height = `${e}px`, this.#c.style.height = `${e}px`, this.elViewport.style.height = `${e}px`, this.#u.setDimensions({ w: null, h: e }), this.Divider?.setPos(), this.Divider?.setWidth();
  }
  setDimensions(e = { w: this.width, h: this.height }) {
    v(e) || (e = { w: this.width, h: this.height });
    const i = this.config.buffer || bs;
    let s = P(e?.w) ? e.w : this.width, n = P(e?.h) ? e.h : this.height;
    this.setHeight(n), this.graph instanceof ft && (this.layerWidth = Math.round(s * ((100 + i) * 0.01)), this.graph.setSize(s, n, this.layerWidth), this.draw(void 0, !0), this.core.MainPane.draw(void 0, !1), this.Divider.setPos(), this.Divider.setWidth());
  }
  setLocalRange(e, i) {
    if (!P(i) || !P(e))
      return !1;
    e > i && ([e, i] = [i, e]), this.#L = {
      valueMax: i,
      valueMin: e,
      valueDiff: i - e
    };
  }
  setYAxisType(e) {
    let i = R.valid(e);
    return this.type == "primaryPane" && i == R.percent ? this.#E = R.default : this.#E = i, !0;
  }
  addOverlays(e) {
    if (!E(e) || e.length < 1) return !1;
    const i = [];
    for (let s of e) {
      const n = { fixed: !1, required: !1 };
      if (s.type in this.core.indicatorClasses)
        n.cnt = this.core.indicatorClasses[s.type].cnt, n.id = `${this.id}-${s.type}_${n.cnt}`, n.class = this.core.indicatorClasses[s.type], n.oType = "indicator";
      else if (s.type in zn[this.type])
        n.cnt = 1, n.id = `${this.id}-${s.type}`, n.class = zn[this.type][s.type].class, n.oType = "overlayOptional";
      else if (s.type in this.core.customOverlays[this.type])
        n.cnt = 1, n.id = `${this.id}-${s.type}`, n.class = this.core.customOverlays[this.type][s.type].class, n.oType = "overlayCustom";
      else continue;
      n.params = { overlay: s }, s.id = n.id, s.paneID = this.id, s.key = Bn(s), i.push([s.id, n]);
    }
    return this.graph.addOverlays(i), !0;
  }
  addIndicator(e) {
    const i = this.type === "primaryPane", s = this.core.indicatorClasses[e.type], n = !!e.settings?.isPrimary;
    if (e?.type in this.core.indicatorClasses && i === n) {
      e.paneID = this.id, e.key = Bn(e);
      const r = {
        class: s,
        params: {
          overlay: e
        }
      };
      try {
        return this.graph.addOverlay(e.name, r);
      } catch (o) {
        this.core.error(`ERROR: Chart Pane: ${this.id} cannot add Indicator: ${e?.name} Error: ${o.message}`);
        return;
      }
    } else return;
  }
  isDuplicate(e) {
    let i = this.findIndicatorByKey(e);
    return i ? i.id : !1;
  }
  findIndicatorByKey(e) {
    let i = Object.values(this.getIndicators());
    for (let s of i)
      if (s.key = e) return s;
  }
  getIndicators() {
    const e = Object.keys(this.core.indicatorClasses), i = {};
    for (let [s, n] of Object.entries(this.overlays))
      if (e.includes(n.params?.overlay?.type)) {
        let r = n.id || n.instance.id;
        i[r] = n;
      }
    return i;
  }
  removeIndicator(e, i = !0) {
    return !T(e) || !(e in this.indicators) ? !1 : (this.#A[e] = !0, Object.keys(this.indicators).length === 0 && !this.isPrimary ? this.emit("chart_paneDestroy", this.id) : (this.indicators[e].instance.destroy(i), this.graph.removeOverlay(e), this.draw(), delete this.#A[e]), !0);
  }
  removeAllIndicators(e) {
    const i = {}, s = this.getIndicators();
    for (let n in s)
      i[n] = this.removeIndicator(n, e);
    return i;
  }
  indicatorVisible(e, i) {
    return !T(e) || !(e in this.indicators) ? !1 : this.indicators[e].instance.visible(i);
  }
  indicatorSettings(e, i) {
    return !T(e) || !(e in this.indicators) ? !1 : this.indicators[e].instance.settings(i);
  }
  addTool(e) {
    let { layerConfig: i } = this.layerConfig(), s = new oe.Layer(i);
    this.#f.set(e.id, s), this.#w.addLayer(s), e.layerTool = s, this.#S.set(e.id, e);
  }
  addTools(e) {
  }
  overlayToolAdd(e) {
    this.#S.set(e.id, e);
  }
  overlayToolDelete(e) {
    this.#S.delete(e);
  }
  refresh() {
    this.emit("chart_paneRefresh", this), this.scale.draw(), this.draw(void 0, this.isPrimary);
  }
  legendsVisibility(e) {
    this.legend.setCollapse(e);
  }
  updateLegends(e = this.#v, i = !1) {
    if (!(this.core.IDEmpty || !v(this.#m)))
      for (const s in this.#m.list)
        this.#m.update(s, { pos: e, candle: i });
  }
  legendInputs() {
    const e = [!0, !0, !0, !0, !0], i = this.cursorPos, s = this.time.xPos2Index(i[0] - this.core.scrollPos), n = B(s, 0, this.range.data.length - 1), r = this.range.data[n], o = this.theme.candle, l = {}, c = ["T", "O", "H", "L", "C", "V"];
    let m = [];
    if (E(r)) {
      m = r[4] >= r[1] ? new Array(5).fill(o.UpWickColour) : new Array(5).fill(o.DnWickColour);
      for (let f = 1; f < 6; f++)
        l[c[f]] = this.scale.nicePrice(r[f]);
    }
    return { inputs: l, colours: m, labels: e };
  }
  onLegendAction(e) {
    switch (this.#m.onPointerClick(e.currentTarget).icon) {
      case "up":
        this.reorderUp();
        return;
      case "down":
        this.reorderDown();
        return;
      case "maximize":
        this.core.MainPane.chartPaneMaximize(this);
        return;
      case "restore":
        this.core.MainPane.chartPaneMaximize(this);
        return;
      case "collapse":
        this.core.MainPane.chartPaneCollapse(this);
        return;
      case "expand":
        this.core.MainPane.chartPaneCollapse(this);
        return;
      case "remove":
        this.remove();
        return;
      case "config":
        this.configDialogue();
        return;
      default:
        return;
    }
  }
  reorderUp() {
    const {
      el: e,
      prevEl: i,
      parentEl: s,
      scaleEl: n,
      prevScaleEl: r,
      parentScaleEl: o,
      prevPane: l
    } = { ...this.currPrevNext() };
    return !v(i) || !v(r) ? !1 : (s.insertBefore(e, i), o.insertBefore(n, r), this.Divider.setPos(), l !== null && (l.Divider.setPos(), l.Divider.show(), this.core.ChartPanes.swapKeys(this.id, i.id)), e.previousElementSibling === null && this.Divider.hide(), !0);
  }
  reorderDown() {
    const {
      el: e,
      nextEl: i,
      parentEl: s,
      scaleEl: n,
      nextScaleEl: r,
      parentScaleEl: o,
      nextPane: l
    } = { ...this.currPrevNext() };
    return !v(i) || !v(r) ? !1 : (s.insertBefore(i, e), o.insertBefore(r, n), this.Divider.setPos(), l !== null && (l.Divider.setPos(), this.Divider.show(), this.core.ChartPanes.swapKeys(this.id, i.id)), i.previousElementSibling === null && l.Divider.hide(), !0);
  }
  createGraph() {
    let e = K(this.overlaysDefault);
    this.graph = new ft(this, this.elViewport, e, !1), this.isPrimary && (this.layerStream = this.graph.overlays.get("stream")?.layer, this.chartStreamCandle = this.graph.overlays.get("stream")?.instance), this.addOverlays(this.view);
  }
  render() {
    this.graph.render(), this.#u.render();
  }
  draw(e = this.range, i = !1) {
    this.graph.draw(e, i);
  }
  drawGrid() {
    this.layerGrid.setPosition(this.core.scrollPos, 0), this.overlayGrid.setRefresh(), this.overlayGrid.draw("y"), this.core.MainPane.draw();
  }
  resize(e) {
    const i = this, s = this.sibling();
    if (s === null) return { active: null, prev: null };
    let n = this.element.clientHeight;
    const r = this.core.MainPane.rowMinH, o = s.element.clientHeight, l = n + o;
    let c, m, f;
    return P(e) && e > r ? m = e : (c = this.core.MainPane.cursorPos[5], m = n - c, m = B(m, r, l - r), f = l - m), i.setDimensions({ w: void 0, h: m }), s.setDimensions({ w: void 0, h: f }), i.Divider.setPos(), i.element.style.userSelect = "none", s.element.style.userSelect = "none", { active: i, prev: s };
  }
  collapse(e) {
    const i = this.graph.viewport.scene.canvas.style, s = this.#h, n = this.#u.graph.viewport.scene.canvas.style;
    s.state ? (this.setDimensions({ w: void 0, h: e }), n.visibility = "visible", i.display = "block", s.state = !1) : (n.visibility = "hidden", i.display = "none", s.state = !0, s.height = this.element.clientHeight, s.rowsHeight = this.core.MainPane.rowsH, s.rowsCnt = this.core.ChartPanes.size, this.setDimensions({ W: void 0, h: $n }));
  }
  zoomRange() {
    this.draw(this.range, !0), this.emit("chart_zoomDone", !0);
  }
  time2XPos(e) {
    return this.time.xPos(e);
  }
  price2YPos(e) {
    return this.scale.yPos(e);
  }
  currPrevNext() {
    const e = this.element, i = e.previousElementSibling, s = e.nextElementSibling, n = e.parentNode, r = this.scale.element, o = r.previousElementSibling, l = r.nextElementSibling, c = r.parentNode, m = i !== null ? this.core.ChartPanes.get(i.id) : null, f = s !== null ? this.core.ChartPanes.get(s.id) : null;
    return {
      el: e,
      prevEl: i,
      nextEl: s,
      parentEl: n,
      scaleEl: r,
      prevScaleEl: o,
      nextScaleEl: l,
      parentScaleEl: c,
      prevPane: m,
      nextPane: f
    };
  }
  sibling(e) {
    e = ["prev", "next"].includes(e) ? e : "prev";
    let i = [...this.core.ChartPanes.keys()], s = i.indexOf(this.id);
    return e == "prev" ? --s : ++s, this.core.ChartPanes.get(i[s]) || null;
  }
  configDialogue() {
    const e = this.#y;
    e.state.name === "closed" && e.open();
  }
}
const fn = {
  id: "main",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        chart_paneMaximize: {
          target: "chart_paneMaximize",
          action(a) {
          }
        },
        chart_pan: {
          target: "chart_pan",
          action(a) {
          }
        },
        chart_scrollTo: {
          target: "chart_scrollTo",
          action(a) {
          }
        },
        range_set: {
          target: "range_set",
          action(a) {
          }
        },
        chart_IndicatorAdd: {
          target: "chart_IndicatorAdd",
          action(a) {
          }
        },
        divider_pointerDrag: {
          target: "divider_pointerDrag",
          action(a) {
            this.context.currCursor = this.context.origin.cursor, this.context.origin.cursor = "row-resize";
          }
        },
        global_resize: {
          target: "global_resize",
          action(a) {
          }
        }
      }
    },
    chart_paneMaximize: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          action(a) {
            this.context.maximize = "some pane pointer";
          }
        }
      }
    },
    chart_pan: {
      onEnter(a) {
        this.context.origin.cursor = "grab";
      },
      onExit(a) {
      },
      on: {
        chart_pan: {
          target: "chart_pan",
          action(a) {
            this.context.origin.updateRange(a), this.context.origin.cursor = "grab";
          }
        },
        chart_panDone: {
          target: "idle",
          action(a) {
            this.context.origin.updateRange(a), this.context.origin.cursor = "default";
          }
        }
      }
    },
    range_set: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "zoomDone",
          action(a) {
            this.context.origin.zoomRange(a);
          }
        }
      }
    },
    chart_scrollTo: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          action(a) {
            this.context.origin.updateRange(a);
          }
        }
      }
    },
    chart_IndicatorAdd: {
      onEnter(a) {
        this.context.origin.addIndicator(a);
      },
      onExit(a) {
      },
      on: {
        chart_IndicatorAddDone: {
          target: "idle",
          action(a) {
          }
        }
      }
    },
    divider_pointerDrag: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        divider_pointerDrag: {
          target: "divider_pointerDrag",
          action(a) {
          }
        },
        divider_pointerDragEnd: {
          target: "idle",
          action(a) {
            this.context.origin.cursor = this.context.currCursor;
          }
        }
      }
    },
    global_resize: {
      onEnter(a) {
        this.context.origin.setDimensions();
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "resizeDone",
          action(a) {
          }
        }
      }
    }
  },
  guards: {
    zoomDone() {
      return !0;
    },
    resizeDone() {
      return !0;
    }
  },
  actions: {
    removeProperty() {
      let a = this.context.pair.active, e = this.context.pair.prev;
      v(a) && a.element.style.removeProperty("user-select"), v(e) && e.element.style.removeProperty("user-select");
    }
  }
}, Ag = [
  ["grid", { class: cs, fixed: !1, required: !0, params: { axes: "x" } }]
], Og = ["candles", "trades", "events"];
class mo extends Lt {
  #e = "MainPane";
  #t = "Main";
  #i = !1;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  #d;
  #m;
  #p;
  #g;
  #y = {};
  #b = xa;
  #x = wa;
  #w = {};
  #f = [0, 0];
  #S = {
    active: !1,
    start: [0, 0],
    prev: [0, 0],
    delta: [0, 0]
  };
  #v;
  #P;
  #T;
  #C = 0;
  #E = 0;
  constructor(e, i) {
    i.parent = e, super(e, i), this.init(i);
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get chart() {
    return this.#m;
  }
  get chartPanes() {
    return this.core.state.chartPanes;
  }
  get chartPaneMaximized() {
    return this.core.state.chartPaneMaximized;
  }
  get chartDeleteList() {
    return this.#y;
  }
  get time() {
    return this.#p;
  }
  get element() {
    return this.#s;
  }
  get elRows() {
    return this.#s.rows;
  }
  get elPrimary() {
    return this.#s.rows.primary;
  }
  get elSecondary() {
    return this.#s.rows.secondary;
  }
  get elPanes() {
    return this.#s.rows.chartPanes;
  }
  get elPaneSlot() {
    return this.#s.rows.chartPaneSlot;
  }
  get width() {
    return this.#s.getBoundingClientRect().width;
  }
  get height() {
    return this.#s.getBoundingClientRect().height;
  }
  get chartW() {
    return this.elPrimary.getBoundingClientRect().width;
  }
  get chartH() {
    return this.elPrimary.getBoundingClientRect().height;
  }
  get rowsW() {
    return this.#n.getBoundingClientRect().width;
  }
  get rowsH() {
    return this.#n.getBoundingClientRect().height;
  }
  get rowMinH() {
    return this.#x;
  }
  set rowMinH(e) {
    P(e) && (this.#x = Math.abs(e));
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#s);
  }
  set cursor(e) {
    this.element.style.cursor = e;
  }
  get cursor() {
    return this.element.style.cursor;
  }
  get cursorPos() {
    return this.#f;
  }
  get candleW() {
    return this.#p.candleW;
  }
  get buffer() {
    return this.#v;
  }
  get bufferPx() {
    return this.getBufferPx();
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get renderLoop() {
    return dg;
  }
  get inventory() {
    return this.core.state.data.inventory;
  }
  get indicators() {
    return this.getIndicators();
  }
  get indicatorClasses() {
    return this.core.indicatorClasses;
  }
  get elements() {
    return {
      elRows: this.elRows,
      elPrimary: this.elPrimary,
      elSecondary: this.elSecondary,
      elTime: this.#r,
      elScale: this.#a
    };
  }
  init(e) {
    if (this.core, this.#s = this.core.elMain, this.#n = this.#s.rows, this.#r = this.#s.time, this.#l = this.#s.rows.grid, this.#o = this.#s.viewport, this.#a = this.core.elBody.scale, e.name = "Chart", e.shortName = "Chart", e.parent = this, e.rangeLimit = this.core.rangeLimit, e.settings = this.core.settings, e.elements = { ...e.elements, ...this.elements }, this.core.theme?.time?.navigation === !1) {
      const i = { height: ws };
      this.core.theme.time = { ...this.core.theme?.time, ...i };
    }
    this.#p = new ug(this.core, e), this.chartPanes.clear(), this.chartPanesRegister(e), this.#v = P(this.config.buffer) ? this.config.buffer : bs, this.#x = P(this.config.rowMinH) ? this.config.rowMinH : wa, this.#b = P(this.config.secondaryPaneDefaultH) ? this.config.secondaryPaneDefaultH : xa, this.rowsOldH = this.rowsH;
  }
  start() {
    this.#s.start(this.theme), this.#p.start(), this.createGraph(), this.rowsOldH = this.rowsH, this.chartPanesStart(), this.chartPanesSizeToInventory(), this.setScaleWidth(), this.draw(this.range, !0), this.renderLoop.init({
      graphs: [this.graph],
      range: this.range
    }), this.renderLoop.start(), this.renderLoop.queueFrame(this.range, [this.graph], !1), this.eventsListen(), fn.id = this.id, fn.context = this, this.stateMachine = fn, this.stateMachine.start(), this.log(`Main Pane ${this.#e} instantiated and running`);
  }
  destroy(e = !0) {
    this.#i = !0, this.renderLoop.stop(), this.stateMachine.destroy(), this.chartPanes.forEach((i, s) => {
      e ? i.remove() : i.deactivate(), delete this.#y[s];
    }), this.graph.destroy(), this.time.destroy(), this.core.hub.expunge(this), this.#T.destroy(), this.stateMachine = null, this.graph = null;
  }
  reset() {
    let e = this.core.Indicators;
    for (let i in e)
      for (let s in e[i])
        this.core.removeIndicator(s);
  }
  removeAllRowElements() {
    this.#s.rows.shadowRoot = "", this.#a.shadowRoot = "";
  }
  eventsListen() {
    this.#T = new Xe(this.#n, { disableContextMenu: !1 }), this.#T.on("keydown", this.onChartKeyDown.bind(this)), this.#T.on("keyup", this.onChartKeyUp.bind(this)), this.#T.on("wheel", this.onMouseWheel.bind(this)), this.#T.on("pointerenter", this.onMouseEnter.bind(this)), this.#T.on("pointerout", this.onMouseOut.bind(this)), this.#T.on("pointerup", this.onChartDragDone.bind(this)), this.#T.on("pointermove", this.onMouseMove.bind(this)), this.on(es, this.onFirstStreamValue, this), this.on(ts, this.onNewStreamValue, this), this.on("range_set", this.onSetRange, this), this.on("chart_scrollUpdate", this.draw, this), this.on("chart_render", this.draw, this), this.on("chart_paneDestroy", this.chartPaneRemove, this);
  }
  onSetRange() {
    this.#E = this.#C, this.#C = this.chart.scale.calcScaleWidth(), this.#E != this.#C && (this.core.elBody.setYAxisWidth(this.#C), this.setDimensions(), this.draw());
  }
  onMouseWheel(e) {
    const i = Math.sign(e.wheeldelta) * -1;
    if (e.domEvent.preventDefault(), this.core.pointerButtons[0]) {
      e.dragstart.x = this.#f[0], e.dragstart.y = this.#f[1], e.position.x = this.#f[0] + i, e.position.y = this.#f[1], this.onChartDrag(e);
      return;
    }
    const s = this.range;
    let n = s.indexStart - Math.floor(i * va * s.Length), r = s.indexEnd + Math.ceil(i * va * s.Length);
    s.isPastLimit(n) && (n = s.indexPastLimit + 1), s.isFutureLimit(r) && (r = s.indexFutureLimit - 1), !(r - n > s.maxCandles || r - n < s.minCandles) && (this.core.setRange(n, r), this.draw(this.range, !0));
  }
  onMouseMove(e) {
    const i = this.#w;
    i.d2x = i?.d1x || null, i.d2y = i?.d1y || null, i.d1x = e.movement.x, i.d1y = e.movement.y, i.dx = Math.floor((i.d1x + i.d2x) / 2), i.dy = Math.floor((i.d1y + i.d2y) / 2), i.ts2 = i?.ts1 || null, i.ts1 = Date.now(), this.#f = [
      e.position.x,
      e.position.y,
      e.dragstart.x,
      e.dragstart.y,
      i.dx,
      i.dy,
      i.ts1,
      i.ts1 - i.ts2
    ], this.core.Timeline.showCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !0;
    for (let [s, n] of this.chartPanes)
      n.graph.overlays.list.get("cursor").layer.visible = !0;
    this.emit("main_mouseMove", this.#f);
  }
  onMouseEnter(e) {
    this.core.Timeline.showCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !0, this.core.Chart.graph.render();
    for (let [i, s] of this.chartPanes)
      s.graph.overlays.list.get("cursor").layer.visible = !0, s.graph.render();
  }
  onMouseOut(e) {
    this.onPointerActive(!1), this.core.Timeline.hideCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !1, this.core.Chart.graph.render();
    for (let [i, s] of this.chartPanes)
      s.graph.overlays.list.get("cursor").layer.visible = !1, s.graph.render();
    this.draw();
  }
  onChartDrag(e) {
    const i = this.#S;
    i.active ? (i.delta = [
      e.position.x - i.prev[0],
      e.position.y - i.prev[1]
    ], i.prev = [
      e.position.x,
      e.position.y
    ]) : (i.active = !0, i.start = [e.position.x, e.position.y], i.prev = i.start, i.delta = [0, 0]), this.#f = [
      e.position.x,
      e.position.y,
      ...i.start,
      ...i.delta
    ], this.emit("chart_pan", this.#f);
  }
  onChartDragDone(e) {
    const i = this.#S;
    i.active = !1, i.delta = [0, 0], this.#f = [
      ...i.prev,
      ...i.start,
      ...i.delta
    ], this.emit("chart_panDone", this.#f);
  }
  onChartKeyDown(e) {
    let i = this.candleW > 1 ? this.candleW : 1;
    switch (e.key) {
      case "ArrowLeft":
        this.emit("chart_pan", [0, null, i, null, i * -1, null]);
        break;
      case "ArrowRight":
        this.emit("chart_pan", [i, null, 0, null, i, null]);
        break;
      case "ArrowUp":
        e.wheeldelta = -1, e.domEvent = e.srcEvent, this.onMouseWheel(e);
        break;
      case "ArrowDown":
        e.wheeldelta = 1, e.domEvent = e.srcEvent, this.onMouseWheel(e);
        break;
    }
  }
  onChartKeyUp(e) {
    let i = this.candleW > 1 ? this.candleW : 1;
    switch (e.key) {
      case "ArrowLeft":
        this.emit("chart_panDone", [0, null, i, null, i * -1, null]);
        break;
      case "ArrowRight":
        this.emit("chart_panDone", [i, null, 0, null, i, null]);
        break;
    }
  }
  onFirstStreamValue(e) {
  }
  onNewStreamValue(e) {
  }
  onPointerActive(e) {
    e && (e.cursorActive = !0, e.scale.layerCursor.visible = !0), e !== this.chart && (this.chart.cursorActive = !1, this.chart.scale.layerCursor.visible = !1, this.chart.scale.layerCursor.erase()), this.chartPanes.forEach((i, s) => {
      e !== i && (i.cursorActive = !1, i.scale.layerCursor.visible = !1, i.scale.layerCursor.erase());
    });
  }
  setDimensions() {
    this.#n.previousDimensions();
    let e = this.core.elBody.shadowRoot.children, i = this.core.elBody.offsetWidth;
    for (let c of e)
      c.tagName != "TRADEX-MAIN" && (i -= c?.offsetWidth || 0);
    let s = this.#n.heightDeltaR, n = Math.round(this.chartH * s), r = this.rowsH, o = Math.round(i * ((100 + this.#v) * 0.01)), l = {
      resizeH: s,
      mainH: this.element.height,
      mainW: i,
      rowsH: this.rowsH,
      rowsW: this.rowsW
    };
    this.core.scrollPos = -1, this.#o.style.width = `${i}px`, this.#o.style.height = `${r}px`, this.#p.setDimensions({ w: i }), this.graph.setSize(i, r, o), this.#o.style.width = `${i}px`, this.chartPanes.size == 1 && n != this.#n.height ? this.#m.setDimensions({ w: i, h: this.#n.height }) : this.chartPanes.forEach((c, m) => {
      n = Math.round(c.element.height * s), c.setDimensions({ w: i, h: n });
    }), this.rowsOldH = this.rowsH, this.emit("chart_rowsResize", l), this.draw(void 0, !0);
  }
  setScaleWidth(e = !1) {
    const { expanded: i } = this.chartPanesState();
    let s = 0;
    if (this.chartPanes.size === 1)
      s = this.chartPanes.values().next().value.scale.calcScaleWidth();
    else
      for (let n of i) {
        let r = n.scale.calcScaleWidth();
        s = r > s ? r : s;
      }
    this.core.elBody.setYAxisWidth(s);
  }
  getBufferPx() {
    let e = Math.round(this.width * this.buffer / 100), i = e % this.candleW;
    return e - i;
  }
  chartPanesRegister(e) {
    this.#n.previousDimensions(), this.validateIndicators();
    for (let i of this.inventory)
      E(i) && i.length > 1 && (e.type = i[0] == "primary" ? i[0] : "secondary", e.view = bi(i[1], "object") ? i[1] : [i[1]], e.state = i[2], this.chartPaneAdd(e));
  }
  chartPanesSizeToInventory() {
    if (!this.chartPanes.size || !v(this.#m.options?.state))
      return;
    const e = {};
    let i = !1, s = 0, n, r;
    this.chartPanes.forEach((o, l) => {
      let c = o.options.state;
      n = c.height, c.collapsed.height, e[l] = n, s += n, i = i || c.collapsed.height, P(c.collapsed.rowsHeight) && (r = c.collapsed.rowsHeight, c.collapsed.rowsCnt);
    }), i && (r != this.rowsH && (console.log("total does not match Row Height"), this.rowsH - s), this.chartPanes.forEach((o, l) => {
      o.setDimensions({ h: e[l] });
    }), this.chartPanes.forEach((o, l) => {
      o.options?.state?.collapsed?.state && this.chartPaneCollapse(o), o.options?.state?.maximized && this.chartPaneMaximize(o);
    }));
  }
  chartPanesStart() {
    let e = 0;
    this.chartPanes.forEach((i, s) => {
      i.start(e++), e === 1 && i.Divider.hide();
    });
  }
  chartPanesState() {
    const e = {
      list: [...this.chartPanes.values()],
      collapsed: [],
      expanded: [],
      maximized: this.chartPaneMaximized?.instance
    };
    for (let i of e.list)
      i.collapsed.state ? e.collapsed.push(i) : e.expanded.push(i);
    return e;
  }
  chartPaneAdd(e) {
    const { expanded: i } = this.chartPanesState(), s = this.chartPaneHeightsCalc(e?.state), n = s.new;
    let r;
    for (r in s)
      if (this.chartPanes.has(r)) {
        let f = this.chartPanes.get(r);
        i.indexOf(f) > -1 && f.setDimensions({ w: this.rowsW, h: s[r] });
      }
    let o = this.#s.addRow(e.type, "", this.core, n), l = this.#s.addScaleRow(e.type, n, this.#a);
    e.elements.elTarget = o, e.elements.elScale = l;
    let c;
    return e.type == "primary" ? (c = new Je(this.core, e), this.#m = c) : (e.type = "secondary", e.name = e.view?.[0].name || "Secondary", e.shortName = e.view?.[0].type || "Secondary", c = new Je(this.core, e)), this.chartPanes.set(c.id, c), this.chartPaneHeightsTally().total > this.#s.height, this.chartPaneDividersSet(), this.emit("chart_paneAdd", c), c;
  }
  chartPaneRemove(e) {
    if (!T(e) || !this.chartPanes.has(e) || e in this.#y) return !1;
    const i = this.chartPanes.get(e);
    if (i.isPrimary && !this.#i)
      return this.core.error(`Cannot remove primary chart pane! ${e}`), !1;
    this.#y[e] = !0;
    const { expanded: s } = this.chartPanesState();
    let n = s.indexOf(i);
    n > -1 && s.splice(n, 1);
    let r = i.viewport.height, o = Math.floor(r / s.length), l = r % o;
    if (i.status !== "destroyed" && (i.destroy(), this.#s.removeRow(i.id)), this.chartPanes.delete(e), this.setScaleWidth(), this.chartPanes.size === 1) {
      let c = this.chartPanes.values().next().value;
      c.collapsed && (c.collapsed.state = !1), c.setDimensions({ w: void 0, h: this.rowsH });
    } else
      for (let c of s)
        r = c.viewport.height, c.setDimensions({ w: void 0, h: r + o + l }), l = 0;
    return this.chartPaneDividersSet(), this.draw(this.range, !0), !0;
  }
  chartPaneRemoveRows() {
  }
  chartPaneHeightsTally() {
    const e = this.chartPanes.entries(), i = { panes: {}, total: 0 };
    for (let [s, n] of e)
      i.panes[s] = n, i.total += n.height;
    return i;
  }
  chartPaneHeightsCalc(e) {
    const { collapsed: i, expanded: s } = this.chartPanesState(), n = this.chartPanes.size + 1, r = this.#b * (n - 1), o = r / Math.log10(r * 2) / 100;
    Math.round(this.rowsH * o);
    const l = {};
    if (n === 1)
      l.new = this.rowsH;
    else if (n === 2 || s.length === 1) {
      let c = this.rowsH;
      const m = Math.round(c * this.#b / 100);
      l[s[0].id] = c - m, l.new = m;
    } else if (s.length === 2) {
      const c = s[0].viewport.height, m = s[1].viewport.height, f = c + m, C = Math.round(f * this.#b / 100), M = f / (f + C);
      l[s[0].id] = Math.floor(c * M), l[s[1].id] = Math.floor(m * M), l.new = Math.floor(C * M), l.new += f - (l[s[0].id] + l[s[1].id] + l.new);
    } else if (s.length >= 3) {
      let c = this.rowsH, m = 0, f;
      for (let C of i)
        c -= C.viewport.height;
      l.new = Math.floor(c / (s.length + 1)), c / (c + l.new), f = c - l.new;
      for (let C of s)
        l[C.id] = f * (C.viewport.height / c), m += l[C.id];
      l.new += c - m;
    }
    return l;
  }
  chartPaneMaximize(e) {
    if (!(e instanceof Je)) return !1;
    const i = this.chartPaneMaximized, s = e.legend.list.chart.el.querySelector(".controls");
    let n;
    if (s.classList.toggle("maximized"), s.classList.toggle("restored"), e === i.instance)
      this.chartPanesRestore(), i.instance = null, i.panes = {}, e.collapsed.state && (e.graph.viewport.scene.canvas.style.display = "none", e.scale.graph.viewport.scene.canvas.style.visibility = "hidden");
    else {
      this.chartPanesRestore(), i.instance = e, i.rowsH = this.rowsH;
      for (let [r, o] of this.chartPanes.entries())
        i.panes[r] = o.element.clientHeight, n = o.element.style, e === o ? (n.display = "block", o.setDimensions({ w: void 0, h: this.rowsH }), o.graph.viewport.scene.canvas.style.display = "block", o.scale.graph.viewport.scene.canvas.style.visibility = "visible") : (n.display = "none", o.scale.element.style.display = "none");
      this.chartPaneDividersHide();
    }
    return this.emit("chart_paneRefresh", this), !0;
  }
  chartPanesRestore() {
    const e = this.chartPaneMaximized;
    let i = 0;
    this.emit("chart_paneRefresh", this), this.dimensions.height == e.height;
    for (let [s, n] of this.chartPanes.entries())
      n.element.style.display = "block", n.scale.element.style.display = "block", s in e.panes && i++ > 0 && n.Divider.show(), n.setDimensions({ w: void 0, h: e.panes[s] });
  }
  chartPaneCollapse(e) {
    if (!(e instanceof Je)) return !1;
    this.emit("chart_paneRefresh", this);
    const i = e.legend.list.chart.el.querySelector(".controls"), s = e.collapsed;
    let n = e.element.clientHeight, r, o, l;
    const { list: c, collapsed: m, expanded: f } = this.chartPanesState();
    if (r = m.indexOf(e), r > -1 && m.splice(r, 1), r = f.indexOf(e), r > -1 && f.splice(r, 1), e.collapsed.state) {
      i.classList.remove("collapsed"), i.classList.add("expanded"), s.rowsCnt !== c.length ? n = s.height * (s.rowsCnt / c.length) : s.rowsHeight !== this.rowsH ? n = s.height * (s.rowsHeight / this.rowsH) : n = s.height, o = (n - $n) / f.length;
      for (let C of f)
        l = C.element.clientHeight - o, C.setDimensions({ w: void 0, h: l });
      e.collapse(n);
    } else {
      if (i.classList.add("collapsed"), i.classList.remove("expanded"), c.length < 2 || f.length < 1) return !1;
      n = (e.element.clientHeight - $n) / f.length;
      for (let C of f)
        l = C.element.clientHeight + n, C.setDimensions({ w: void 0, h: l });
      e.collapse();
    }
    return this.chartPaneDividersSet(), !0;
  }
  chartPaneDividersSet() {
    const { list: e } = this.chartPanesState();
    let i = 0;
    for (let s of e)
      s.Divider instanceof Pe && i++ > 0 && (s.Divider.setWidth(), s.Divider.setPos(), s.Divider.show());
  }
  chartPaneDividersHide() {
    const { list: e } = this.chartPanesState();
    for (let i of e)
      i.Divider instanceof Pe && i.Divider.hide();
  }
  validateIndicators() {
    const e = (s) => v(s) && (s.type in this.core.indicatorClasses || Og.includes(s.type)), i = (s) => E(s) ? (s.forEach((n, r) => {
      e(n) || (this.core.log(`TradeX-Chart: ${this.core.ID} : indicator ${n?.type} not added: not supported.`), s.splice(r, 1));
    }), !s.length) : !1;
    this.inventory.forEach((s, n) => {
      i(s[1]);
    });
  }
  addIndicator(e, i = e, s = {}) {
    let n, r, o = this.indicatorClasses[e]?.primaryPane;
    if (!T(e) || !(e in this.indicatorClasses) || !T(i)) return;
    switch (this.log(`Adding the ${i} : ${e} indicator`), v(s) ? (E(s?.data) || (s.data = []), v(s?.settings) || (s.settings = {})) : s = { data: [], settings: [] }, o) {
      case !0:
      case !1:
        break;
      case void 0:
      case "both":
        o = j(s.settings?.isPrimary) ? s.settings.isPrimary : !0;
    }
    if (s.settings.isPrimary = o, o) {
      const c = {
        type: e,
        name: i,
        ...s
      };
      if (n = this.#m.addIndicator(c), !n) return;
      r = "primary";
    } else {
      E(s.view) || (s.view = [{ name: i, type: e, ...s }]);
      for (let c = 0; c < s.view.length; c++)
        (!v(s.view[c]) || !fs(["name", "type"], Object.keys(s.view[c]))) && s.view.splice(c, 1);
      if (s.view.length == 0 || (s.parent = this, s.title = i, s.elements = { ...this.elements }, s.yAxisPadding = this.core.indicatorClasses[e]?.yAxisPadding || 1, n = this.chartPaneAdd(s), !n)) return;
      n.start(), r = "secondary", this.emit("chart_secondaryAdd", n);
    }
    const l = "instance" in n ? n.instance.id : n.id;
    return this.refresh(), this.core.state.addIndicator(n, r), this.core.log("Added indicator:", l), this.emit("chart_IndicatorAddDone", n), n;
  }
  getIndicators() {
    const e = {};
    return this.chartPanes.forEach(
      (i, s) => {
        e[s] = i.indicators;
      }
    ), e;
  }
  getIndicatorsByType(e) {
    const i = [];
    if (!T(e)) return i;
    for (let s of this.chartPanes.values())
      for (let n in s.indicators) {
        let r = s.indicators[n].instance;
        (r.shortName == e || r.libName == e) && i.push(r);
      }
    return i;
  }
  getIndicator(e) {
    if (!T(e)) return !1;
    for (const i of this.chartPanes.values())
      if (e in i.indicators)
        return i.indicators[e].instance;
    return !1;
  }
  removeIndicator(e) {
    if (T(e))
      for (const i of this.chartPanes.values())
        e in i.indicators && (e = i.indicators[e].instance);
    return e instanceof V ? (e.chart.type === "primaryPane" || Object.keys(e.chart.indicators).length > 1 ? (e.remove(), this.emit("chart_paneRefresh", this)) : e.chart.remove(), !0) : !1;
  }
  indicatorSettings(e, i) {
    if (T(e)) {
      for (const s of this.chartPanes.values())
        if (e in s.indicators)
          return s.indicators[e].instance.settings(i);
    } else return e instanceof V ? e.settings(i) : !1;
  }
  createGraph() {
    let e = K(Ag);
    this.graph = new ft(this, this.#o, e);
  }
  draw(e = this.range, i = !1) {
    e = v(e) ? e : this.range;
    const s = [
      this.graph,
      this.#p
    ];
    this.time.xAxis.doCalcXAxisGrads(e), this.chartPanes.forEach((n, r) => {
      n.status !== "destroyed" ? s.push(n) : this.error(`ERROR: attempted to draw destroyed pane: ${n.id}`);
    }), this.renderLoop.queueFrame(
      this.range,
      s,
      i
    );
  }
  refresh() {
    if (this.core.Chart?.graph instanceof ft) {
      this.renderLoop.expungeFrames(), this.core.Chart.graph.refresh();
      for (let [e, i] of this.chartPanes)
        i?.graph?.refresh();
      this.draw(this.range, !0);
    }
  }
  updateRange(e) {
    this.core.updateRange(e);
  }
  zoomRange() {
    this.draw(this.range, !0);
  }
}
const ue = tt, fh = {};
for (let a of Object.values(ue)) {
  let e = a[0], i = Te(e);
  e < 6e4 || (fh[`${i}`] = e);
}
Object.freeze(fh);
const Dg = {
  "1m": ue.MINUTE[0],
  "2m": ue.MINUTE2[0],
  "3m": ue.MINUTE3[0],
  "5m": ue.MINUTE5[0],
  "10m": ue.MINUTE10[0],
  "15m": ue.MINUTE15[0],
  "30m": ue.MINUTE30[0],
  "1h": ue.HOUR[0],
  "2h": ue.HOUR2[0],
  "3h": ue.HOUR3[0],
  "4h": ue.HOUR4[0],
  "1d": ue.DAY[0],
  "1w": ue.DAY7[0],
  "1M": ue.MONTH[0],
  "3M": ue.MONTH3[0],
  "6M": ue.MONTH6[0],
  "1y": ue.YEARS[0]
};
class Fe {
  static #e = new me();
  static #t = new me();
  static #i = 0;
  static get defaultTimeFrames() {
    return Dg;
  }
  static create(e, i) {
    if (!v(e) || !(i.core instanceof H) || !(i instanceof A))
      return;
    let s = new Fe(e, i);
    return Fe.#t.set(s, i), s;
  }
  static delete(e) {
    if (e instanceof Fe || !A.has(e)) return !1;
    Fe.#t.delete(e);
  }
  static has(e) {
    return Fe.#t.has(e);
  }
  static get(e) {
    return Fe.#t.get(e);
  }
  static list(e) {
    let i = Fe.sourceList(e)?.sources;
    if (i)
      return Array.from(
        i,
        ([s, n]) => ({ key: s, value: n })
      );
  }
  static sourceList(e) {
  }
  #s;
  #n;
  #r;
  #a;
  #l = K(xt.dataSource.source);
  #h;
  #o;
  #c;
  #u;
  #d = {};
  #m;
  #p = !1;
  #g = !1;
  constructor(e, i) {
    this.#a = e, this.#o = i, this.#r = i.core, this.#s = ++Fe.#i, this.symbolsAdd(e?.symbols), this.sourceSet(e?.source), this.symbolSet(e?.symbol), this.#n = se(`${ut}_dataSource_${this.#h}`), this.timeFramesAdd(e?.timeFrames, Fe), this.timeFrameUse(e?.timeFrameInit), this.#c = this.buildRange(i), this.#u = new St(i.core, i), this.historyAdd(e?.source);
    let s = { symbol: this.symbol, tf: this.timeFrameMS };
    this.tickerAdd(e?.source?.tickerStream, s);
  }
  get id() {
    return this.#n;
  }
  get cfg() {
    return this.#a;
  }
  get state() {
    return this.#o;
  }
  get source() {
    return this.#l;
  }
  get stream() {
    return this.#u;
  }
  get symbol() {
    return this.#h;
  }
  set timeFrame(e) {
    this.timeFrameUse(e);
  }
  get timeFrame() {
    return this.#m;
  }
  get timeFrameMS() {
    return this.#m;
  }
  get timeFrameStr() {
    return Te(this.#m);
  }
  get timeFrames() {
    return this.#d;
  }
  get range() {
    return this.#c;
  }
  sourceSet(e) {
    if (T(e)) this.#l.name = e;
    else if (v(e)) this.#l = { ...this.#l, ...e };
    else return;
  }
  symbolsAdd(e) {
  }
  symbolSet(e) {
    let i = this.#r.config.symbol;
    (!T(e) || T(e) && !e.length) && !i.length ? gn(this.#r.ID, this.#o.key, "symbol invalid") : T(e) && e.length > 0 ? this.#h = e : this.#h = i;
  }
  timeFramesAdd(e, i) {
    let s;
    bi(e, "integer") ? s = po(e) : !v(e) || !Object.keys(e).length ? s = i.defaultTimeFrames : s = po(Object.values(e)), this.#d = { ...s };
  }
  timeFrameUse(e) {
    e = _i(e), N(e) || gn(this.#r.ID, this.#o.key, "time frame invalid");
    let i = this.timeFrameExists(e);
    if (N(this.#m) || (e = mi(this.#o.data.chart.data)), i) {
      if (i == this.#m) return;
      e = i;
    } else if (Object.keys(this.#d).length)
      gn(this.#r.ID, this.#o.key, "time frame invalid");
    else {
      if (e == this.#m) return;
      let n = Te(e);
      this.#d[n] = e;
    }
    this.historyPause(), this.#m = e;
    let s = this.findMatching();
    if (s instanceof A) this.#o.use(s.key);
    else {
      let n = {};
      n.dataSource = K(this.#o.dataSource), this.#o.use(n);
    }
  }
  timeFrameExists(e) {
    if (e in this.#d) return this.#d[e];
    if (N(e) && Te(e) in this.#d)
      return e;
  }
  tickerAdd(e, i) {
    if (I(e?.start)) {
      if (e.start.length !== 3)
        Ze(this.#r, this.#o.key, "range_limitPast function requires n parameters");
      else if (this.#l.tickerStream.start = e.start, v(i)) {
        let { symbol: n, tf: r } = { ...i };
        this.tickerStart(n, r);
      }
    }
    I(e?.stop) ? this.#l.tickerStream.stop = e.stop : this.#l.tickerStream.stop = () => {
      this.#r.log(`TradeX-chart: ${this.#r.id} : DataSource : tickerStop() function is undefined`);
    };
  }
  tickerStart(e, i) {
    if (i = _i(i), T(e) && e.length && N(i)) {
      if (!this.#h || this.#h === "empty")
        this.symbolSet(e);
      else if (this.#h !== "empty" && this.#h !== e)
        return Ze(this.#r, this.#o.key, "ticker symbol does not match chart symbol"), !1;
      if (this.#o.isEmpty)
        this.timeFrameUse(i);
      else if (this.#m !== i)
        return Ze(this.#r, this.#o.key, "ticker time frame does not match chart time frame"), !1;
      let s = (n) => {
        this.#u.onTick.call(this.#u, n);
      };
      return this.#u.start(), this.#l.tickerStream.start(e, i, s), !0;
    }
  }
  tickerStop() {
    this.#l.tickerStream.stop(), this.#u.stop();
  }
  tickerError() {
  }
  tickerRemove() {
    this.tickerStop();
  }
  historyAdd(e) {
    this.historyRemove();
    let i = 4;
    I(e?.rangeLimitPast) && (e.rangeLimitPast.length !== i ? Ze(this.#r, this.#o.key, `range_limitPast function requires ${i} parameters`) : (this.#l.rangeLimitPast = (s) => this.onRangeLimit(s, e.rangeLimitPast, s.startTS), this.#r.on("range_limitPast", this.#l.rangeLimitPast, this))), I(e?.rangeLimitFuture) && (e.rangeLimitFuture.length !== i ? Ze(this.#r, this.#o.key, `range_limitFuture function requires ${i} parameters`) : (this.#l.rangeLimitFuture = (s) => this.onRangeLimit(s, e.rangeLimitFuture, s.endTS), this.#r.on("range_limitFuture", this.#l.rangeLimitFuture, this)));
  }
  historyRemove() {
    I(this.#l.rangeLimitPast) && (this.#r.off("range_limitPast", this.#l.rangeLimitPast, this), this.#l.rangeLimitPast = null), I(this.#l.rangeLimitFuture) && (this.#r.off("range_limitFuture", this.#l.rangeLimitFuture, this), this.#l.rangeLimitFuture = null);
  }
  historyPause() {
    this.#r.off("range_limitPast", this.#l.rangeLimitPast, this), this.#r.off("range_limitFuture", this.#l.rangeLimitFuture, this);
  }
  historyRestart() {
    I(this.#l.rangeLimitPast) && this.#r.on("range_limitPast", this.#l.rangeLimitPast, this), I(this.#l.rangeLimitFuture) && this.#r.on("range_limitFuture", this.#l.rangeLimitFuture, this);
  }
  startTickerHistory(e) {
    this.#o.isEmpty || Ze(this.#r, this.#o.key, "startTickerHistory() cannot execute because chart is not empty"), I(e?.rangeLimitFuture) || (e.rangeLimitFuture = (s, n, r, o) => Promise.resolve({}));
    const i = {
      rangeLimitPast: "function",
      start: "function",
      stop: "function",
      symbol: "string",
      tf: "integer"
    };
    for (let s of Object.keys(i))
      if (s == "tf") {
        if (e.tf = _i(e.tf), N(e.tf)) continue;
      } else {
        if (wi(i[s], e?.[s]))
          continue;
        return Ze(this.#r, this.#o.key, `startTickerHistory() ${s} is not of the required type ${i[s]}`), !1;
      }
    this.#r.on("stream_candleFirst", () => {
      this.historyAdd({
        rangeLimitPast: e.rangeLimitPast,
        rangeLimitFuture: e.rangeLimitFuture
      });
    }), this.tickerAdd(
      {
        start: e.start,
        stop: e.stop
      },
      {
        symbol: e.symbol,
        tf: e.tf
      }
    );
  }
  onRangeLimit(e, i, s) {
    if (!I(i) || !this.#o.isActive) {
      this.#p = !1;
      return;
    }
    if (this.#p != !0) {
      this.#p = !0;
      try {
        this.#r.progress.start();
        let n = i(e, this.#h, this.#m, s);
        Xn(n) ? n.then((r) => {
          v(r) || Ze(this.#r, this.#o.key, "Price history fetch did not return a Promise that resolved to an Object. Nothing to merge."), this.identifyState(), this.#o.mergeData(r, !1, !0), this.#p = !1, this.#r.progress.stop();
        }).catch((r) => {
          this.#p = !1, this.#r.progress.stop(), this.#r.error(r);
        }) : Ze(this.#r, this.#o.key, "Price history fetch did not return a Promise");
      } catch (n) {
        this.#p = !1, this.#r.progress.stop(), this.#r.error(n);
      }
    }
  }
  buildRange(e) {
    let i = e.core, s = i.config.range, n = e.data, r = n.dataSource.initialRange, o = mi(n.chart.data);
    if (o === 1 / 0) {
      let { ms: c } = gs(n.dataSource.timeFrameInit);
      o = c || i.timeFrameMS || as;
    }
    !n.chart.isEmpty && n.chart.data.length > 1 && this.#m !== o && (this.#m = o), nr(this.#m) || (this.#m = i.timeFrameMS || as);
    let l = {
      core: i,
      state: e,
      interval: this.#m || s?.timeFrameMS,
      initialCnt: r?.initialCnt || s?.initialCnt,
      limitFuture: r?.limitFuture || s?.limitFuture,
      limitPast: r?.limitPast || s?.limitPast,
      minCandles: r?.minCandles || s?.minCandles,
      maxCandles: r?.maxCandles || s?.maxCandles,
      yAxisBounds: r?.yAxisBounds || s?.yAxisBounds
    };
    return new ns(r?.start, r?.end, l);
  }
  identifyState() {
    console.log(`${this.state.key} ${this.symbol} ${this.timeFrameStr}`);
  }
  findMatching(e = this.#l.name, i = this.#h, s = this.#m) {
    let n = _i(s), r = { symbol: [], timeFrame: [] };
    if (!T(e) || !T(i) || !N(n)) return;
    let o = this.#o.list() || [], l;
    for (let c of o)
      if (l = c.value.dataSource.source, l.source === this.source && l.symbol === this.symbol) {
        if (r.symbol.push(c), l.timeFrame === this.timeFrame) return c;
        r.timeFrame.push(c);
      }
    return r;
  }
}
function Ze(a, e, i) {
  a.error(`TradeX-chart: ${a.id}: State ${e} : DataSource : ${i}`);
}
function gn(a, e, i) {
  throw new Error(`TradeX-chart: ${a} : State ${e} : DataSource : ${i}`);
}
function po(a) {
  let e = {}, i;
  for (let s of a)
    nr(s) && (i = Te(s), e[i] = [s, i]);
  return e;
}
function _i(a) {
  return T(a) && !N(a * 1) && (a = it(a)), a * 1;
}
const Ig = "state", Ng = "defaultState", gh = "Empty Chart", xt = {
  version: Lr,
  id: Ng,
  key: "",
  status: "default",
  isEmpty: !0,
  dataSource: {
    source: {
      name: "",
      rangeLimitPast: null,
      rangeLimitFuture: null,
      tickerStream: {
        start: null,
        stop: null,
        tfCountDown: !0,
        alerts: []
      }
    },
    symbol: gh,
    symbols: {},
    timeFrameInit: os,
    timeFrames: {},
    initialRange: {
      startTS: void 0,
      initialCnt: In,
      limitFuture: Vi,
      limitPast: Nn,
      minCandles: Rn,
      maxCandles: kn,
      yAxisBounds: Dn
    }
  },
  allData: {},
  chart: {
    name: "Primary",
    type: "candles",
    candleType: "CANDLE_SOLID",
    indexed: !1,
    data: [],
    settings: {}
  },
  ohlcv: [],
  inventory: [],
  primary: [],
  secondary: [],
  datasets: [],
  tools: {
    display: !0,
    data: {
      ts: {}
    }
  },
  trades: {
    display: !0,
    displayInfo: !0,
    data: {
      ts: {}
    }
  },
  events: {
    display: !0,
    displayInfo: !0,
    data: {
      ts: {}
    }
  },
  annotations: {
    display: !0,
    displayInfo: !0,
    data: {
      ts: {}
    }
  }
}, yh = {
  timestamp: "number",
  id: "string",
  side: "string",
  price: "number",
  amount: "number",
  filled: "number",
  average: "number",
  total: "number",
  tag: "string"
}, vh = {
  timestamp: "number",
  id: "string",
  title: "string",
  content: "string",
  url: "string"
}, Rg = {
  timestamp: "number",
  id: "string",
  title: "string",
  content: "string"
}, kg = {
  timestamp: "number",
  id: "string",
  type: "string",
  nodes: "array"
}, yn = {
  trades: yh,
  events: vh,
  annotations: Rg,
  tools: kg
};
class A {
  static #e = new me();
  static #t = {};
  static get default() {
    return K(xt);
  }
  static server(e) {
    if (!wn(e)) return;
    let i = new me();
    A.#e.has(e.key) || A.#e.set(e.key, { chart: e, states: i, active: void 0 });
  }
  static chartList(e) {
    if (wn(e)) return A.#e.has(e.key) ? A.#e.get(e.key) : void 0;
  }
  static create(e, i = A.default, s = !1, n = !1) {
    if (!wn(e)) return;
    i.core = e;
    const r = new A(i, s, n), o = r.key;
    let l = A.#e.get(e.key);
    return l || (A.server(e), l = A.#e.get(e.key), l.active = r), l.states.set(o, r), r;
  }
  static active(e) {
    return A.chartList(e)?.active;
  }
  static list(e) {
    let i = A.chartList(e)?.states;
    if (i)
      return Array.from(
        i,
        ([s, n]) => ({ key: s, value: n })
      );
  }
  static use(e, i = A.default) {
    let s = A.has(e, i) ? i : A.has(e, i?.key) ? i.key : i;
    if (!T(s) && v(i) && Object.keys(i).length)
      s = fo(i), A.has(e, s) || (s = A.create(e, i).key);
    else if (!T(s) && !v(i)) return;
    const n = A.#e.get(e.key);
    n.active;
    let r = n.active, o = n.states.get(s);
    if (!o) {
      e.log(`${e.name} id: ${e.key} : State ${s} does not exist`);
      return;
    }
    if (s != r?.key && (n.previous = { state: r, node: "" }, r = o, v(r?.archive))) {
      let l = T(r?.archive?.data) ? r?.archive.data : "", c = r.archive?.compress ? l.decompress() : l, m = JSON.parse(c);
      delete r.archive;
      const f = K(A.default);
      A.buildInventory(m, f), r.allData.primaryPane = m.primary, r.allData.secondaryPane = m.secondary, r.data.inventory = m.inventory;
    }
    return n.active = r, r;
  }
  static archive(e, i) {
    if (!A.findStateById(e, i)) return !1;
  }
  static findStateById(e, i) {
    let s = A.chartList(e)?.states;
    if (s) {
      for (let n of s)
        if (n[1].id == i) return n[1].key;
    }
  }
  static isValidConfig(e) {
    if (!v(e) || !Object.keys(e).length)
      return !1;
    for (let [i, s] of Object.entries(e))
      if (i in xt && typeof e[i] != typeof xt[i])
        return !1;
    return !0;
  }
  static validate(e, i = A.default, s = !1, n = !1) {
    const r = K(A.default);
    let o;
    if (v(i) || (i = r), !(i.core instanceof H)) throw new Error("State : invalid TradeXchart instance");
    v(i.dataSource) || (i.dataSource = r.dataSource, i.dataSource.symbol = i.core.config?.symbol || "undefined"), (!T(i.dataSource.symbol) || !i.dataSource.symbol.length || i.dataSource.symbol == gh) && (i.dataSource.symbol = i.core.config?.symbol || "undefined"), v(i.chart) || (i.chart = r.chart, i.chart.data = E(i?.ohlcv) ? i.ohlcv : [], i.isEmpty = !0, i.status = "default", delete i?.ohlcv), o = Ve(r, i), s ? o.chart.data = Gf(o.chart.data, n) ? o.chart.data : [] : o.chart.data = Wf(o.chart.data, n) ? o.chart.data : [], o.chart.isEmpty = o.chart.data.length == 0, Object.defineProperty(
      o.allData,
      "data",
      {
        get: function() {
          return o.chart.data;
        }
      }
    ), v(o.chart.settings) || (o.chart.settings = r.chart.settings), E(o.inventory) || (o.inventory = r.inventory), E(o.primary) || (o.primary = r.primary), o.allData.primaryPane = o.primary, E(o.secondary) || (o.secondary = r.secondary), o.allData.secondaryPane = o.secondaryPane, E(o.datasets) || (o.datasets = []), o.allData.datasets = o.datasets, A.buildInventory(o, r), A.validateData("trades", o), o.trades = o.allData.trades, A.validateData("events", o), o.events = o.allData.events, A.validateData("annotations", o), o.annotations = o.allData.annotations, A.validateData("tools", o), o.tools = o.allData.tools;
    for (var l of o.datasets)
      this.#t || (this.#t = {}), this.#t[l.id] = new ng(this, l);
    return o;
  }
  static delete(e, i) {
    let s = A.chartList(e)?.states;
    if (!s) return;
    let n = i;
    return i instanceof A && (n = i.#s), !T(n) || !s.has(n) ? !1 : (s.delete(n), !0);
  }
  static has(e, i) {
    return A.chartList(e)?.states?.has(i);
  }
  static get(e, i) {
    return A.chartList(e)?.states?.get(i);
  }
  static getKey(e, i) {
    let s = i;
    return v(i) && Object.keys(i).length < 3 ? T(i?.id) ? s = A.findStateById(e, i.id) || i?.key : T(i?.key) ? s = i?.key : s = void 0 : T(i) || (s = void 0), s;
  }
  static setTimeFrame(e, i, s) {
    let n = A.get(e, i), r;
    return n ? (n.isEmpty && E(s) && s.length > 1 && (r = mi(s), n.range.interval = r, n.range.intervalStr = Te(r), e?.stream instanceof St && e.stream.resetLastPos(), e.emit("range_timeframeSet", n.range.intervalStr)), r) : !1;
  }
  static ohlcv(e) {
    if (!E(e)) return !1;
    let i = {
      time: [],
      open: [],
      high: [],
      low: [],
      close: [],
      volume: []
    }, s = 0, n = e.length;
    for (; n != 0 && s < n; ) {
      let r = e[s];
      i.time.push(r[de.t]), i.open.push(r[de.o]), i.high.push(r[de.h]), i.low.push(r[de.l]), i.close.push(r[de.c]), i.volume.push(r[de.v]), s++;
    }
    return i;
  }
  static export(e, i, s = {}) {
    if (!A.has(e, i)) return;
    v(s) || (s = {});
    const n = A.get(e, i), r = s?.type;
    let o, l = {}, c = [
      "core",
      "inventory",
      "range",
      "timeData"
    ];
    for (let k in n.data)
      c.includes(k) || (l[k] = K(n.data[k]));
    let m = l.chart.data;
    m.length > 0 && m[m.length - 1].length > 6 && (m.length = m.length - 1), l.inventory = E(l.inventory) ? Array.from(l.inventory) : [], l.version = Lr, l.key = n.key, l.range = n.range.export();
    let { indexed: f, timeFrame: C, timeFrameMS: M, timeZone: L, timeZoneOffset: D } = { ...n.data.timeData };
    switch (l.timeData = { indexed: f, timeFrame: C, timeFrameMS: M, timeZone: L, timeZoneOffset: D }, r) {
      case "json":
      default:
        const { replacer: k, space: X } = { ...s };
        o = JSON.stringify(l, k, X), s?.compress && (o = o.compress());
    }
    return o;
  }
  static asyncExport(e, i, s = {}) {
    return new Promise((n, r) => {
      try {
        n(A.export(e, i, s));
      } catch (o) {
        e.error(o), r();
      }
    });
  }
  static validateData(e, i) {
    if (!T(e) || !(e in yn) || !v(i)) throw new Error(`ERROR: State: validateData: ${e} unexpected data`);
    if (v(i[e]) || (i[e] = K(xt[e])), i[e].display = !!i[e]?.display, i[e].displayInfo = !!i[e]?.displayInfo, !v(i[e].data)) i[e].data = K(xt[e].data);
    else {
      let s = i[e].data, n = i?.data?.allData || i.allData, { tf: r } = gs(i.dataSource.timeFrameInit);
      A.importData(e, s, n, r);
    }
  }
  static archiveInventory(e) {
    if (e.data.inventory.length = 0, e.core.ChartPanes instanceof me)
      for (let [i, s] of e.core.ChartPanes) {
        let n = [], r = [];
        r[0] = s.isPrimary ? "primary" : "secondary";
        for (let o of Object.values(s.indicators))
          n.push(o.instance.snapshot());
        r[1] = n, r[2] = s.snapshot(), e.data.inventory.push(r);
      }
  }
  static buildInventory(e, i) {
    if (e.inventory.length == 0) {
      e.inventory.push(["primary", e.primary]);
      let o = E(e?.secondary) ? e.secondary : [];
      for (let l of o)
        (v(l) || bi(l, "object")) && e.inventory.push(["secondary", l]);
    }
    let s = e.inventory, n = s.length;
    for (; n--; )
      if (!E(s[n]) || s[n].length == 0)
        s.splice(n, 1);
      else {
        let o = e.inventory[n][1], l = o.length;
        for (; l--; )
          !v(o[l]) || !T(o[l].name) || !T(o[l].type) ? o.splice(l, 1) : v(o[l].settings) || (o[l].settings = {});
        s[n].length == 0 && s.splice(n, 1);
      }
    e.inventory.length == 0 && (e.inventory[0] = ["primary", i.primary]);
    let r = 0;
    e.inventory.forEach((o, l) => {
      o[0] == "primary" && ++r > 1 && e.inventory.splice(l, 1);
    }), r || e.inventory.push(["primary", i.primary]);
  }
  static importData(e, i, s, n) {
    if (!(e in yn)) return !1;
    v(s?.[e]) || (s[e] = K(xt[e]));
    let r = s[e].data;
    if (v(r?.[n]) || (r[n] = {}), !v(i)) return !1;
    for (let o in i)
      if (mt(o * 1) && E(i[o]))
        for (let l of i[o])
          l?.id && (l.id = `${l.id}`), A.isValidEntry(l, yn[e]) && (v(r?.[n]) || (r[n] = {}), E(r[n]?.[o]) || (r[n][o] = []), r[n][o].push(l));
      else
        r[o] = i[o];
    return !0;
  }
  static isValidEntry(e, i) {
    const s = Object.keys(e), n = Object.keys(i);
    if (!v(e) || !ps(s, n)) return !1;
    for (let r of n)
      if (typeof e[r] !== i[r]) return !1;
    return !0;
  }
  #i = "";
  #s = "";
  #n = {};
  #r;
  #a = !1;
  #l;
  #h;
  #o;
  #c;
  #u = new me();
  #d = {
    instance: null,
    rowsH: 0,
    panes: {}
  };
  constructor(e = A.default, i = !1, s = !1) {
    if (!(e?.core instanceof H)) throw new Error("State : invalid TradeXchart instance");
    this.legacy(e), this.#c = e.core, this.#n = A.validate(this, e, i, s), this.#h = Fe.create(this.#n.dataSource, this), this.#n.timeData = new gl(this.#h.range), this.#n.chart.ohlcv = A.ohlcv(this.#n.chart.data), this.#r = new jf(this), this.#s = fo(e);
  }
  get id() {
    return this.#i;
  }
  get key() {
    return this.#s;
  }
  get status() {
    return this.#n.status;
  }
  get isEmpty() {
    return !this.#n.chart.data.length;
  }
  get isActive() {
    return this.#s === A.active(this.#c).key;
  }
  get hasGaps() {
    return this.#r.hasGaps;
  }
  get core() {
    return this.#c !== void 0 ? this.#c : !1;
  }
  get data() {
    return this.#n;
  }
  get gaps() {
    return this.#r;
  }
  get time() {
    return this.#n.timeData;
  }
  get range() {
    return this.#h.range;
  }
  get symbol() {
    return this.#h.symbol;
  }
  set timeFrame(e) {
    this.#h.timeFrame(e);
  }
  get timeFrame() {
    return this.#h.timeFrame;
  }
  get timeFrameStr() {
    return this.#h.timeFrameStr;
  }
  get timeFrames() {
    return this.#h.timeFrames;
  }
  get chartPanes() {
    return this.#u;
  }
  get chartPaneMaximized() {
    return this.#d;
  }
  get dataSource() {
    return this.#h;
  }
  get allData() {
    return {
      data: this.#n.chart.data,
      ohlcv: this.#n.chart.ohlcv,
      primaryPane: this.#n.primary,
      secondaryPane: this.#n.secondary,
      datasets: this.#n.datasets,
      trades: this.#n.trades.data,
      events: this.#n.events.data,
      annotations: this.#n.annotations.data,
      tools: this.#n.tools.data
    };
  }
  get trades() {
    return this.#n.trades;
  }
  get events() {
    return this.#n.events;
  }
  get annotations() {
    return this.#n.annotations;
  }
  get tools() {
    return this.#n.tools;
  }
  error(e) {
    this.#c.error(e);
  }
  legacy(e) {
    if (!v(e?.data?.dataSource) && v(e?.data?.range)) {
      let i = e.data.range.timeFrameMS || it(e.data.range.timeFrame), s = Te(i);
      e.data.dataSource = {
        initialRange: { ...e.data.range },
        timeFrameInit: i,
        timeFrames: { [`${s}`]: i }
      };
    }
  }
  create(e = A.default, i = !0, s = !1) {
    return A.create(e, i, s);
  }
  delete(e) {
    let i = this.#c, s;
    if (e instanceof A ? s = e.key : T(e) ? s = e : v(e) && T(e.key) ? s = e.key : v(e) && T(e.id) && this.getByID(e.id) ? s = this.getByID(e.id)?.key : i.error(`${i.name} : State.delete() : State not found`), s !== this.key)
      this.has(s) && A.delete(i, s);
    else if (this.has(s)) {
      const n = this.create();
      this.use(n?.key), A.delete(i, s);
    } else
      return i.error(`${i.name} : State.use() : State not found`), !1;
    return !0;
  }
  list() {
    return A.list(this.#c);
  }
  has(e) {
    return A.has(this.#c, e);
  }
  get(e) {
    return A.get(this.#c, e);
  }
  getByID(e) {
    let i = A.list(this.#c);
    if (!(!i || !T(e))) {
      for (let s of i)
        if (s.id == e) return s;
    }
  }
  use(e) {
    const i = `TradeX-Chart: ${this.#c.ID} : cannot use supplied key or state`;
    if (T(e) && !A.has(this.#c, e))
      return;
    if (e === void 0)
      e = A.default;
    else if (v(e) && !A.isValidConfig(e)) {
      this.#c.log(i);
      return;
    }
    if (I(this.#c.MainPane?.init) && (this.#c.stream instanceof St && this.#h?.historyPause(), this.#c.progress.start(), A.archiveInventory(this), this.#c.MainPane.destroy(!1)), A.isValidConfig(e)) {
      let n = e?.dataSource?.source?.name, r = e?.dataSource?.symbol, o = e?.dataSource?.timeFrameInit, l = this.dataSource.findMatching(n, r, o);
      l instanceof A && (e = l.key);
    }
    let s = A.use(this.#c, e);
    return v(e) && (e.key = s?.key), I(this.#c.MainPane?.init) && (this.#c?.stream instanceof St && this.#c.stream.resetLastPos(), this.#c.MainPane.init(this.#c.MainPane.options), this.#c.MainPane.start(), this.#c.MainPane.refresh(), this.#c.progress.stop()), s instanceof A ? s.dataSource?.historyRestart() : this.#c.log(i), this.#c.emit("state_usingState", s), s;
  }
  hasTimeFrame(e) {
    return this.#h.timeFrameExists(e);
  }
  export(e = this.key, i = {}) {
    return A.export(this.#c, e, i = {});
  }
  mergeData(e, i = !1, s = !1) {
    console.log(`TradeX-chart: ${this.#c.ID}: State ${this.#s} : mergeData()`), this.isEmpty && A.setTimeFrame(this.#c, this.key, e?.ohlcv);
    let n = this.#h.timeFrameMS;
    if (!v(e))
      return go(this.#c, this.#s, `${this.symbol} merge data must be type Object!`), !1;
    let r = E(e?.ohlcv) ? e.ohlcv.length - 1 : 0, o = mi(e?.ohlcv);
    if (r > 1 && n !== o)
      return go(this.#c, this.#s, `${this.symbol} merge data time frame ${o} does not match existing time frame ${n}!`), !1;
    (this.isEmpty || !P(n)) && (!v(i) || !N(i.start) || !N(i.end)) && r > 1 && (i = { start: r - this.range.initialCnt, end: r }), v(i) ? (N(i?.startTS) ? i.start = i.startTS : i.start = N(i.start) ? this.range.value(i.start)[0] : this.range.timeMin, N(i?.endTS) ? i.end = i.endTS : i.end = N(i.end) ? this.range.value(i.end)[0] : this.range.timeMax) : (i = {}, i.start = this.range.timeMin, i.end = this.range.timeMax);
    let l, c, m = e?.ohlcv || !1;
    const f = this.allData.data, C = this.allData?.primaryPane, M = e?.primary || !1, L = this.allData?.secondaryPane, D = e?.secondary || !1, k = this.allData?.dataset?.data, X = e?.dataset?.data || !1;
    this.allData?.trades;
    const le = e?.trades || !1;
    this.allData?.events, e?.events;
    const $ = E(m) && this.range.inRange(m[0][0]) ? 1 : 0, ne = {};
    if (E(m) && m.length > 0) {
      if (l = m.length - 1, f.length - 1, ne.mData = this.range.inRange(m[0][0]) && this.range.inRange(m[0][l]), !j(m[l][7]) && m[l].length !== 8 && m[l][6] !== null && m[l][7] !== !0 ? m = qf(m) : i.end >= this.range.timeFinish && i.start <= this.range.timeFinish && (i.start += this.range.interval, i.end += this.range.interval), f.length == 0) {
        let _ = A.ohlcv(m);
        this.allData.data.push(...m), this.allData.ohlcv = { ..._ };
      } else {
        let _ = m[0][0], U = m[m.length - 1][0], ze = (m.length - 1) * n;
        U > _ + ze && (m = this.#r.findFillGaps(m)), this.data.chart.data = this.merge(f, m);
      }
      if (!s) {
        if (E(M) && M.length > 0) {
          for (let _ of M)
            if (E(_?.data) && _?.data.length > 0)
              for (let U of C)
                v(U) && U.name === _.name && U.type === _.type && ri(U.settings, _.settings) && (U.data = this.merge(U.data, _.data), this.#c.getIndicator(U.id).drawOnUpdate = !0);
        }
        if (E(D) && D.length > 0) {
          for (let _ of D)
            if (E(_?.data) && _?.data.length > 0)
              for (let U of L)
                v(U) && U.name === _.name && U.type === _.type && ri(U.settings, _.settings) && (U.data = this.merge(U.data, _.data), this.#c.getIndicator(U.id).drawOnUpdate = !0);
        }
      }
      let Z = m[0][0], G = m[m.length - 1][0], he = this.#r.removeFilledGaps(Z, G);
      if (this.#c.calcAllIndicators(he), E(X) && X.length > 0) {
        for (let _ of X)
          if (E(_?.data) && _?.data.length > 0)
            for (let U of k)
              U.name === _.name && U.type === _.type && ri(U.settings, _.settings) && (U.data = this.merge(U.data, _.data));
      }
      v(le) && A.importTrades(le, this.allData, this.time.timeFrame), i && (v(i) ? (c = N(i.start) ? this.range.getTimeIndex(i.start) : this.range.indexStart, r = N(i.end) ? this.range.getTimeIndex(i.end) : this.range.indexEnd) : (m[0][0] && (c = this.range.indexStart + $), r = this.range.indexEnd + $), this.#c.setRange(c, r));
      let pe, ye = !1;
      for (pe in ne)
        ye = ye || pe;
      return e.ohlcv.length > 1 && this.#c.emit("state_mergeComplete"), ye && this.#c.refresh(), this.#n.isEmpty = !1, !0;
    }
  }
  merge(e, i) {
    let s = [], n, r;
    if (e[0][0] < i[0][0] ? (n = e, r = i) : (n = i, r = e), r.length == 1 && r[0][0] == n[n.length - 1][0])
      n[n.length - 1] = r[0], s = n;
    else if (r.length == 1 && r[0][0] == n[n.length - 1][0] + this.range.interval)
      s = n.concat(r);
    else if (n[n.length - 1][0] >= r[0][0]) {
      let o = 0;
      for (; n[o][0] < r[0][0]; )
        s.push(n[o]), o++;
      s = s.concat(r);
      let l = o + r.length;
      l < n.length && (s = s.concat(n.slice(l)));
    } else r[0][0] - n[n.length - 1][0] > this.range.interval ? (s = this.#r.nullFillGapsOnMerge(r, n), s = s.concat(r)) : s = n.concat(r);
    return s;
  }
  addIndicator(e, i) {
    if (v(e) && i == "primary")
      e.params.overlay.id = e.instance.id, this.#n.primary.push(e.params.overlay);
    else if (e instanceof Je && i == "secondary")
      this.#n.secondary.push(...e.options.view), this.range.maxMinDatasets();
    else return !1;
  }
  removeIndicator(e) {
    if (!T(e)) return !1;
    const i = (s, n) => {
      const r = this.data[s];
      for (let o = 0; o < r.length; o++)
        if (r[o].id == n)
          return r.splice(o, 1), this.range.maxMinDatasets(), !0;
      return !1;
    };
    return !!(i("primary", e) || i("secondary", e));
  }
  addTrade(e) {
    if (!A.isValidEntry(e, yh)) return !1;
    const i = e.timestamp - e.timestamp % tfMS, s = new Date(i);
    return e.dateStr = `${s.getFullYear()}/${s.getMonth() + 1}/${s.getDate()} ${s.getHours()}:${s.getMinutes()}`, this.allData.trades.data.ts[e.timestamp] = e, this.allData.trades.data[tf][i] = e, this.#c.emit("state_tradeAdded", e), this.#c.emit("trade_added", e), !0;
  }
  removeTrade(e) {
    console.log("TODO: state.removeTrade()");
  }
  addEvent(e) {
    if (!A.isValidEntry(e, vh)) return !1;
    const i = t.timestamp - e.timestamp % tfMS, s = new Date(i);
    return e.dateStr = `${s.getFullYear()}/${s.getMonth() + 1}/${s.getDate()} ${s.getHours()}:${s.getMinutes()}`, this.allData.events.data.ts[e.timestamp] = e, this.allData.events.data[tf][i] = e, this.#c.emit("state_eventAdded", e), this.#c.emit("event_added", e), !0;
  }
  removeEvent(e) {
    console.log("TODO: state.removeEvent()");
  }
}
function fo(a) {
  let e = JSON.stringify(a), i = sr(e);
  return `${ut}_${Ig}_${i}`;
}
function go(a, e, i) {
  a.error(`TradeX-chart id: ${a.id}: State ${e} : ${i}`);
}
const yo = ["constructor", "list", "setCurrent", "setTheme", "setValue"];
class Be {
  static #e = new me();
  static get list() {
    return Be.#e;
  }
  #t;
  static create(e, i) {
    if (!v(e)) return !1;
    e.id = T(e.name) ? se(e.name) : se(`${i.ID}_theme`);
    const s = new Be(e, i);
    return Be.list.set(e.id, s), s;
  }
  constructor(e, i) {
    this.#t = i, this.setCurrent(e);
  }
  get list() {
    return Be.list;
  }
  setCurrent(e = {}) {
    e = v(e) ? e : {};
    const i = K(xs), s = K(e), n = Ve(i, s);
    for (let r in n)
      yo.includes(r) || (this[r] = n[r]);
    this.#t.refresh();
  }
  setTheme(e) {
    if (T(e) && Be.list.has(e)) {
      const i = Be.list.get(e);
      return this.setCurrent(i), !0;
    }
    return !1;
  }
  setProperty(e, i) {
    if (!T(e)) return;
    const s = En(this, e), n = e.split(".");
    if (n.length == 1)
      this[n[0]] = i;
    else {
      let r = n.shift();
      this[r] = ir(this[r], n.join("."), i);
    }
    return this.#t.refresh(), s;
  }
  getProperty(e) {
    return En(this, e);
  }
  deleteTheme(e) {
    return T(e) && Be.list.has(e) ? (Be.list.delete(e), !0) : !1;
  }
  exportTheme(e = {}) {
    v || (e = {});
    const i = e?.type, s = {};
    let n;
    for (let r in this)
      yo.includes(r) || (s[r] = this[r]);
    switch (i) {
      case "json":
      default:
        const { replacer: r, space: o } = { ...e };
        n = JSON.stringify(s, r, o);
    }
    return n;
  }
}
class $g {
  #e;
  constructor(e) {
    this.#e = e, self.onmessage = (i) => this._onmessage(i.data);
  }
  _onmessage(e) {
    const { r: i, data: s } = e;
    try {
      const n = this.#e(s, i);
      self.postMessage({ r: i, status: !0, result: n });
    } catch (n) {
      self.postMessage({ r: i, status: !1, result: n });
    }
  }
  end() {
    self.close();
  }
}
class Hg {
  #e;
  #t;
  #i;
  #s = 0;
  #n = {};
  #r;
  #a = !0;
  constructor(e, i, s, n) {
    this.#e = e, this.#t = s, this.#i = n;
    const r = `
      ${Wn.ThreadWorker.toString()};
      const fn = ${i}
      const worker = new ThreadWorker(fn)
    `, o = new Blob([`;(async () => {${r}})().catch(e => {console.error(e)})`], { type: "text/javascript" }), l = URL.createObjectURL(o);
    this.#r = new Worker(l), setTimeout(function(c) {
      try {
        URL.revokeObjectURL(c);
      } catch {
      }
    }, 500, l);
  }
  get id() {
    return this.#e;
  }
  get req() {
    return `r_${this.#s++}`;
  }
  get cb() {
    return this.#t;
  }
  set cb(e) {
    this.#t = e;
  }
  onmessage(e) {
    return this.#a = !0, I(this.#t) ? this.#t(e) : e;
  }
  onerror(e) {
    return this.#a = !0, I(this.#i) ? this.#i(e) : e;
  }
  postMessage(e) {
    return new Promise((i, s) => {
      try {
        let n = this.req;
        this.#n[n] = { resolve: i, reject: s }, this.#a = !1, this.#r.postMessage({ r: n, data: e }), this.#r.onmessage = (r) => {
          const { r: o, status: l, result: c } = r.data;
          if (o in this.#n) {
            const { resolve: m, reject: f } = this.#n[o];
            delete this.#n[o], l ? m(this.onmessage(c)) : f(this.onerror({ r: o, result: c }));
          } else if (l == "resolved")
            this.onmessage(c);
          else
            throw new Error("Orphaned thread request ${r}");
        }, this.#r.onerror = (r) => {
          s(this.onerror(r));
        };
      } catch (n) {
        this.#a = !0, s(n);
      }
    });
  }
  terminate() {
    this.#r.terminate();
  }
}
class Wn {
  static #e = /* @__PURE__ */ new Map();
  static ThreadWorker = $g;
  static Thread = Hg;
  static create(e, i = "worker", s, n) {
    if (typeof window.Worker > "u") return !1;
    if (I(e))
      e = e.toString();
    else if (T(e))
      e = e.trim().match(
        /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
      )[1];
    else
      return !1;
    return i = T(i) ? se(i) : se("worker"), this.#e.set(i, new this.Thread(i, e, s, n)), this.#e.get(i);
  }
  static destroy(e) {
    if (!T(e)) return !1;
    this.#e.get(e).terminate(), this.#e.delete(e);
  }
  static end() {
    this.#e.forEach((e, i, s) => {
      this.destroy(i);
    });
  }
}
class _g extends Le {
  constructor(e) {
    super(e);
  }
}
class Fi extends Le {
  #e = vo.colour;
  #t = vo.width;
  #i;
  constructor(e) {
    super(e);
  }
  set colour(e = this.#e) {
    this.#e = e;
  }
  get colour() {
    return this.#e;
  }
  set lineWidth(e) {
    this.#t = P(e) ? e : this.#t;
  }
  get lineWidth() {
    return this.#t;
  }
  set stateMachine(e) {
    this.#i = new Ps(e, this);
  }
  get stateMachine() {
    return this.#i;
  }
  start() {
    this.eventsListen();
  }
  destroy() {
    this.stateMachine.destroy();
  }
  draw() {
    let [e, i] = this.cursorClick;
    this.layerTool.scene.clear();
    const n = this.layerTool.scene.context;
    n.save(), n.lineWidth = this.lineWidth, n.strokeStyle = this.colour, n.beginPath(), n.moveTo(e, i), n.lineTo(300, 150), n.stroke(), n.closePath(), n.restore(), this.elViewport.render();
  }
}
class Fg extends Le {
  constructor(e) {
    super(e);
  }
}
class Bg extends Le {
  constructor(e) {
    super(e);
  }
}
class Ug extends Le {
  constructor(e) {
    super(e);
  }
}
const Vg = [
  {
    id: "cursor",
    name: "Cursor",
    icon: Ed,
    event: "tool_activated"
  },
  {
    id: "line",
    name: "Line",
    icon: bt,
    event: "tool_activated",
    class: Fi,
    sub: [
      {
        id: "ray",
        name: "Ray",
        icon: bt,
        event: "tool_activated",
        class: Fi
      },
      {
        id: "hRay",
        name: "Horizontal Ray",
        icon: bt,
        event: "tool_activated",
        class: Fi
      },
      {
        id: "vRay",
        name: "Vertical Ray",
        icon: bt,
        event: "tool_activated",
        class: Fi
      }
    ]
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    icon: Ld,
    event: "tool_activated",
    class: _g,
    sub: [
      {
        id: "fib",
        name: "Not Implemented Yet",
        icon: bt
      }
    ]
  },
  {
    id: "range",
    name: "Range",
    icon: Od,
    event: "tool_activated",
    class: Bg,
    sub: [
      {
        id: "rng",
        name: "Not Implemented Yet",
        icon: bt
      }
    ]
  },
  {
    id: "text",
    name: "Text",
    icon: Dd,
    event: "tool_activated",
    class: Ug,
    sub: [
      {
        id: "txt",
        name: "Not Implemented Yet",
        icon: bt
      }
    ]
  },
  {
    id: "measure",
    name: "Measure",
    icon: Ad,
    event: "tool_activated",
    class: Fg
  },
  {
    id: "delete",
    name: "Delete",
    icon: Md,
    event: "tool_activated",
    class: void 0
  }
], vo = {
  colour: "#8888AACC",
  width: 1
}, vn = {
  id: "template",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
        console.log("idle: onEnter");
      },
      onExit(a) {
        console.log("idle: onExit");
      },
      on: {
        tool_activated: {
          target: "tool_activated",
          action(a) {
            this.context.origin.onToolActivated(a);
          }
        },
        tool_selected: {
          target: "tool_selected",
          action(a) {
            this.context.origin.onToolSelected(a);
          }
        },
        tool_deselected: {
          target: "tool_deselected",
          action(a) {
            this.context.origin.onToolDeselected(a);
          }
        },
        tool_deleted: {
          target: "tool_deleted",
          action(a) {
            this.context.origin.onToolDeleted(a);
          }
        }
      }
    },
    tool_activated: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        tool_selected: {
          target: "tool_addToTarget",
          action(a) {
            this.context.origin.onToolTargetSelected(a);
          }
        }
      }
    },
    tool_selected: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {}
    },
    tool_deselected: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "toolTarget",
          action(a) {
          }
        }
      }
    },
    tool_deleted: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        always: {
          target: "idle",
          condition: "toolTarget",
          action(a) {
          }
        }
      }
    }
  },
  guards: {
    toolTarget() {
      return !0;
    }
  }
};
class bh extends Lt {
  #e = "Toolbar";
  #t = "tools";
  #i;
  #s;
  #n = Le;
  #r;
  #a = {};
  #l = void 0;
  #h;
  #o = { click: [], pointerover: [] };
  #c = [];
  constructor(e, i) {
    super(e, i), this.#i = e.elTools, this.#r = Vg || e.config.tools, this.#s = e.WidgetsG, this.init();
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#i);
  }
  init() {
    this.mount(this.#i);
  }
  start() {
    this.initAllTools(), this.addAllTools(), this.eventsListen(), vn.id = this.id, vn.context = this, this.stateMachine = vn, this.stateMachine.start(), this.log(`Tool Bar ${this.#e} instantiated and running`);
  }
  destroy() {
    this.core.hub.expunge(this);
    const e = this.id, i = this.#i.querySelectorAll(".icon-wrapper");
    for (let s of i)
      for (let n of this.#r)
        n.id === e && s.removeEventListener("click", this.#o[e].click), s.removeEventListener("pointerover", this.#o[e].pointerover), s.removeEventListener("pointerout", this.#o[e].pointerout);
    this.stateMachine.destroy();
  }
  eventsListen() {
    this.on("tool_selected", this.onToolSelect, this), this.on("tool_deselected", this.onToolDeselect, this);
  }
  onResized() {
    for (let e of this.#c)
      e.position();
  }
  onIconClick(e) {
    e.currentTarget.dataset.event;
    let i = e.currentTarget.dataset.menu || !1, s = {
      target: e.currentTarget.id,
      menu: i,
      evt: e.currentTarget.dataset.event,
      tool: e.currentTarget.dataset.tool
    };
    i ? this.emit("menu_open", s) : this.emit("menuItem_selected", s);
  }
  onIconOut(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = ht.COLOUR_ICON;
  }
  onIconOver(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = ht.COLOUR_ICONHOVER;
  }
  onToolTargetSelected(e) {
    console.log("tool_targetSelected:", e.target), this.#h = e.target;
  }
  onToolActivated(e) {
    console.log("Tool activated:", e), this.#l = e;
  }
  onToolSelect(e) {
    console.log("Tool selected:", e);
  }
  onToolDeselect(e) {
    console.log("Tool deselected:", e);
  }
  mount(e) {
    e.innerHTML = this.#i.defaultNode(this.#r);
  }
  initAllTools() {
    const e = this.#i.querySelectorAll(".icon-wrapper");
    for (let i of e) {
      let s = i.id, n = i.querySelector("svg");
      n.style.fill = ht.COLOUR_ICON, n.style.width = "90%";
      for (let r of this.#r)
        if (r.id === s)
          if (this.#o[s] = {}, this.#o[s].click = this.onIconClick.bind(this), this.#o[s].pointerover = this.onIconOver.bind(this), this.#o[s].pointerout = this.onIconOut.bind(this), i.addEventListener("click", this.#o[s].click), i.addEventListener("pointerover", this.#o[s].pointerover), i.addEventListener("pointerout", this.#o[s].pointerout), r?.sub) {
            let o = {
              content: r.sub,
              primary: i
            }, l = this.#s.insert("Menu", o);
            i.dataset.menu = l.id, l.start(), this.#c.push(l);
            for (let c of r.sub)
              this.#a[c.id] = c.class;
          } else
            this.#a[r.id] = r.class;
    }
  }
  addTool(e = this.#l, i = this.#h) {
    let s = {
      name: e,
      tool: this.#a[e],
      pos: i.cursorClick
    }, n = this.#n.create(i, s);
    return n.start(), console.log(n), n;
  }
  addNewTool(e, i) {
    let s = this.addTool(e, i);
    this.activeTool = s, this.emit("tool_active", s), this.emit(`tool_${s.id}_active`, s);
  }
  addAllTools() {
  }
}
const bo = 20, zg = 20, Wg = new pt(z.COLOUR_BORDER), Gn = document.createElement("template");
Gn.innerHTML = `
<style>
  .scrollBarWidget {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 2px;
  }
  .scrollBar {
    position: relative;
    border: 1px solid var(--txc-time-scrollbar-color, ${z.COLOUR_BORDER});
    height: 20px;
    border-radius: 3px;
    flex-basis: 100%;
    overflow: hidden;
  }
  .scrollBar input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    outline: none;
    height: 100%;
    margin: 0;
    padding: 0;
    background:  var(--txc-time-slider-color, #555);

  }
  .scrollBar input::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none; 
    pointer-events: auto;
    position: relative;
    z-index: 10;
    outline: 0;
    height: 100%;
  }
  .scrollBar input::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    appearance: none; 
    pointer-events: auto;
    position: relative;
    z-index: 1;
    height: 100%;
  }
  .scrollBar input::-moz-range-track {
    position: relative;
    z-index: -1;
    background-color: rgba(0, 0, 0, 1);
    border: 0;
  }
  .scrollBar input:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
  }
  .scrollBar input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none !important;
    appearance: none;
    background: none transparent;
    cursor: default;
    height: 1px; /* Required for Samsung internet based browsers */
    outline: 0;
  }
  .scrollBar input[type=range]::-moz-focus-outer {
    border: 0;
  }
  input[type=range] {
    -webkit-appearance: none;
    background: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 5px;
    border: none;
    border-radius: 3px;
    background: transparent;
  }

  input[type=range]::-ms-track {
    height: 5px;
    background: transparent;
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-moz-range-track {
    height: 5px;
    background: transparent;
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background: var(--txc-time-slider-color, #555);
    margin-top: -10px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background:  var(--txc-time-slider-color, #555);
    margin-top: -5px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 100%;
    width: 16px;
    border-radius: 3px;
    background:  var(--txc-time-slider-color, #555);
    margin-top: -5px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]:focus {
    outline: none;
  }

  .handle {
    background-color: var(--txc-time-handle-color, ${Wg.hex}44); 
    width: 2px;
    height: 18px;
    margin: 1px;
    margin-left: 872.968px;
    margin-right: 0px;
    position: absolute;
  }
  .icon {
    flex-basis: ${bo}px;
  }
  .icon svg {
    fill: var(--txc-time-icon-color, ${z.COLOUR_ICON});
    width: ${bo}px;
    height: ${zg}px;
    margin-top: 1px;
  }
  .icon svg:hover {
    fill: var(--txc-time-icon-hover-color, ${z.COLOUR_ICONHOVER});
  }
</style>
<div class="scrollBarWidget">
  <span id="rwdStart" class="icon rwdStart">${Wd}</span>
  <span class="scrollBar">
    <div class="viewport"></div>
    <input id="min" class="min" name="min" type="range" step="1" min="0" max="3000" />
    <input id="max" class="max" name="max" type="range" step="1" min="0" max="3000" />
    <div class="handle"></div>
  </span>
  <span id="fwdEnd" class="icon fwdEnd">${zd}</span>
</div>
`;
class Gg extends J {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  constructor() {
    super(Gn), this.#e = Gn;
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        document.getElementById("slider-bar"), this.#t = this.shadowRoot.querySelector(".scrollBarWidget"), this.#i = this.shadowRoot.querySelector(".rwdStart"), this.#s = this.shadowRoot.querySelector(".fwdEnd"), this.#n = this.shadowRoot.querySelector(".scrollBar"), this.#r = this.shadowRoot.querySelector(".viewport"), this.#a = this.shadowRoot.querySelector(".handle"), this.#l = this.shadowRoot.querySelectorAll("svg"), this.#h = this.shadowRoot.querySelector("#max"), this.#o = this.shadowRoot.querySelector("#min"), this.#c = this.shadowRoot.querySelectorAll("input"), this.#u = this.shadowRoot.querySelector("style[title=overview]"), this.max.addEventListener("input", this.onChangeSliderHandler.bind({ self: this, input: this.max })), this.min.addEventListener("input", this.onChangeSliderHandler.bind({ self: this, input: this.min }));
      }
    );
  }
  get scrollBarWidget() {
    return this.#t;
  }
  get rwdStart() {
    return this.#i;
  }
  get fwdEnd() {
    return this.#s;
  }
  get scrollBar() {
    return this.#n;
  }
  get viewport() {
    return this.#r;
  }
  get handle() {
    return this.#a;
  }
  get icons() {
    return this.#l;
  }
  get max() {
    return this.#h;
  }
  get min() {
    return this.#o;
  }
  get sliders() {
    return this.#c;
  }
  get overviewCSS() {
    return this.#u;
  }
  onChangeSliderHandler() {
    console.log(`${this.input.value}, ${this.input.getAttribute("max")}`);
  }
}
customElements.get("tradex-overview") || window.customElements.define("tradex-overview", Gg);
const wh = document.createElement("template");
wh.innerHTML = `
<style>
  .viewport {
    width: 100%;
    height: ${ws}px;
  }
  tradex-overview {
    height: ${Tl}px;
  }
</style>
<div class="viewport"></div>
<tradex-overview></tradex-overview>
`;
class qg extends J {
  #e;
  #t;
  constructor() {
    super(wh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector(".viewport"), this.#t = this.shadowRoot.querySelector("tradex-overview");
      }
    );
  }
  get viewport() {
    return this.#e;
  }
  get overview() {
    return this.#t;
  }
}
customElements.get("tradex-time") || window.customElements.define("tradex-time", qg);
const xh = document.createElement("template");
xh.innerHTML = `
<style>
.scene-canvas {
  display: block;
}
</style>
<slot name="viewportCanvas"></slot>
<canvas class="scene-canvas"></canvas>
`;
class jg extends J {
  #e;
  #t;
  #i = this.onSlotChange.bind(this);
  constructor() {
    super(xh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector('slot[name="viewportCanvas"]'), this.#e.addEventListener("slotchange", this.#i);
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#e.removeEventListener("slotchange", this.#i);
  }
  get hasCanvasSlot() {
    return !0;
  }
  get canvasSlot() {
    return this.#e;
  }
  get canvas() {
    return this.#t;
  }
  onSlotChange() {
    this.#t = Array.from(this.canvasSlot.assignedElements()).find((e) => e.localName === "canvas")[0];
  }
}
customElements.get("tradex-viewport") || window.customElements.define("tradex-viewport", jg);
const Ch = document.createElement("template");
Ch.innerHTML = `
<style>
  tradex-viewport {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
  <tradex-viewport></tradex-viewport>
`;
class Xg extends J {
  #e;
  constructor() {
    super(Ch);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => this.#e = this.shadowRoot.querySelector("tradex-viewport")
    );
  }
  get viewport() {
    return this.#e;
  }
}
customElements.get("tradex-grid") || window.customElements.define("tradex-grid", Xg);
const Th = document.createElement("template");
Th.innerHTML = `
<style>

.legends {
  display: flex;
  flex-direction: column;
}
.legends .collapse {
  order: 999;
  padding-left: 0.5em;
}

.legend {
  display: block;
  position: relative;
  width: 100%;
  min-height: 2em;
  margin: 0;
}
.legend * {
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
.legend .upper,
.legend .lower {
  display: block;
  position: absolute;
  top: 0
  width: 100%;
  padding: 0 0.5em;
  white-space: nowrap;
}
.legend .lower {
  background: #0002;
  border-radius: 0 5px 5px 0;
}
.legend.secondary {
  // display: none !important;
}
.legend .controls {
  opacity: 0;
}
.legend .controls svg {
  vertical-align: text-top;
  margin-bottom: 0.2em;
}
.legend dl {
  display: inline; 
  margin: 0;
  overflow: hidden;
}
.legend dl:first-child,
.legend dl dt:first-of-type {
  margin-left: 0;
}
.legend dt {
  display: inline; margin-left: 1em;
}
.legend dd {
  display: inline; margin-left: .25em; color: #F900FE;
}
.legend .upper:hover {
  background: #444444cc;
  border-radius: 5px;
}
.legend .upper:hover .controls {
  opacity: 1;
}
.legend .title {
  margin-right: 1em;
  white-space: nowrap;
}
.legend .lower .title {
  visibility:hidden;
}
.legend .controls,
.legend dl {
  display: inline;
}
.legend .control,
.legend .control.collapse {
  margin-right: 2px;
  padding-left: 0;
}


.hide .indicator {
  display: none !important;
}


.controls .control:hover {
  background: #889;
  border-radius: 3px;
}

.controls.maximized .up,
.controls.maximized .down,
.controls.maximized .expand,
.controls.maximized .collapse,
.controls.maximized .maximize,
.controls.maximized .remove
{
  display: none;
}

.controls.restored .restore
{
  display: none;
}

.controls.collapsed .collapse {
  display: none;
}

.controls.expanded .expand {
  display: none;
}

.controls.visible .visible {
  display: none;
}
.controls.visible .notvisible {
  display: inline;
}

.controls.notvisible .notvisible {
  display: none;
}
.controls.notvisible .visible {
  display: inline;
}

.chart .upper {
  right: 0;
  z-index:1;
}
.chart .upper .title,
.secondary .upper .title {
  display: none;
}
.chart .lower .title {
  visibility: visible;
}

.secondary .upper {
  right: 0;
  z-index:1;
}
</style>
<div class="legends">
  <slot name="legend"></slot>
  <div class="controls collapse restored">
    <span id="hideLegends" class="control" data-icon="hide" style="display:none">${Nd}</span>
    <span id="showLegends" class="control" data-icon="show" style="display:none">${Rd}</span>
  </div>
</div>
`;
class Yg extends J {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a = [];
  #l;
  constructor() {
    super(Th);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#r = this.shadowRoot.querySelector("slot"), this.#t = this.shadowRoot.querySelector(".legends"), this.#i = this.shadowRoot.querySelector(".title"), this.#s = this.shadowRoot.querySelector("dl"), this.#n = this.shadowRoot.querySelector(".controls"), this.#l = this.onSlotChange.bind(this), this.#r.addEventListener("slotchange", this.#l);
      }
    );
  }
  disconnectedCallback() {
    this.#r.removeEventListener("slotchange", this.#l);
  }
  get slot() {
    return this.#r;
  }
  get legends() {
    return this.#t;
  }
  get elTitle() {
    return this.#i;
  }
  get elInputs() {
    return this.#s;
  }
  get elControls() {
    return this.#n;
  }
  get title() {
    return this.#e;
  }
  set title(e) {
    this.setTittle(e);
  }
  onSlotChange(e) {
    this.#a.forEach((i) => i.handler.call(i.context, e));
  }
  insert(e) {
    this.legends.insertAdjacentHTML("beforeend", e);
  }
  setTittle(e) {
    T && (this.#e = e, this.elTitle.innerHTML = e);
  }
  buildLegend(e, i) {
    let s = "", n = `${i.legend.font}; color: ${i.legend.colour}; text-align: left;`, r = "", o = e?.type !== "chart" ? "visible" : "notvisible";
    const c = i.legend.controls ? `
      <div class="controls restored expanded ${o}" style="">
        ${this.buildControls(e)}
      </div>
    ` : "";
    switch (e?.type) {
      case "chart":
        r += "font-size: 1.5em;";
        break;
      case "secondary":
        n += " margin-bottom: -1.5em;", r += "", e.title = "";
        break;
      default:
        r += "font-size: 1.2em;";
        break;
    }
    return `
      <div id="legend_${e.id}" class="legend ${e.type}" style="${n}" data-type="${e.type}" data-id="${e.id}" data-parent="${e.parent.id}">
        <div class="lower">
          <span class="title" style="${r}">${e.title}</span>
          <dl style="${s}">${this.buildInputs(e)}</dl>
        </div>
        <div class="upper">
            <span class="title" style="${r}">${e.title}</span>
            ${c}
      </div>
     </div>
    `;
  }
  buildInputs(e) {
    let i = 0, s = "", n, r = "", o = "", l = "";
    for (n in e.inputs) {
      let c = e?.colours?.[i] ? ` color: ${e.colours[i]};` : "", m = e?.inputs?.[n] !== void 0 ? e.inputs[n] : r, f = e?.labels?.[i] ? `${n}:` : r;
      o += e?.labels?.[i] ? "1em;" : ".25em", s += `<dt style="${o}">${f}</dt>
      <dd style="${l}${c}">${m}</dd>`, ++i;
    }
    return s;
  }
  buildControls(e) {
    let i = "", s = e.id;
    return i += `<span id="${s}_up" class="control up" data-icon="up">${kd}</span>`, i += `<span id="${s}_down" class="control down" data-icon="down">${$d}</span>`, e?.type === "indicator" && (i += `<span id="${s}_visible" class="control visible" data-icon="visible">${Ud}</span>`, i += `<span id="${s}_notVisible" class="control notvisible" data-icon="notVisible">${Vd}</span>`), e?.type !== "indicator" && (i += `<span id="${s}_collapse" class="control collapse" data-icon="collapse">${Fd}</span>`, i += `<span id="${s}_expand" class="control expand" data-icon="expand">${Bd}</span>`, i += `<span id="${s}_maximize" class="control maximize" data-icon="maximize">${_d}</span>`, i += `<span id="${s}_restore" class="control restore" data-icon="restore">${Hd}</span>`), i += e?.type !== "chart" ? `<span id="${s}_remove" class="control remove" data-icon="remove">${Id}</span>` : "", i += e?.type !== "secondary" ? `<span id="${s}_config" class="control config" data-icon="config">${vl}</span>` : "", i;
  }
}
customElements.get("tradex-legends") || window.customElements.define("tradex-legends", Yg);
const Sh = document.createElement("template");
Sh.innerHTML = `
<style>
  :host {
    overflow: hidden;
  }

  .viewport {
    position: relative;
    width: 100%;
    height: inherit;
    background: var(--txc-chartpane-background, none);
  }
  .viewport canvas {
    position: absolute;
    top: 1px;
  }
  tradex-legends {
    position: absolute;
    top: 0;
    left: 0;
    z-index:100;
    width: 100%;
  }
</style>
<div class="viewport"></div>
<tradex-legends></tradex-legends>
`;
class Kg extends J {
  #e;
  #t;
  constructor() {
    super(Sh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector(".viewport"), this.#t = this.shadowRoot.querySelector("tradex-legends");
      }
    );
  }
  disconnectedCallback() {
  }
  get viewport() {
    return this.#e;
  }
  get legend() {
    return this.#t;
  }
}
customElements.get("tradex-chartpane") || window.customElements.define("tradex-chartpane", Kg);
const Ph = document.createElement("template");
Ph.innerHTML = `
<style>
  slot[name="chartpane"] {
    display: flex;
    flex-direction: column;
  }
  ::slotted(tradex-chartpane) {
    display: block;
    position: relative;
    top: 0;
    width: 100%;
  }
  ::slotted(tradex-chartpane:first-of-type) {
    border-top: none !important;
  }
</style>
<slot name="chartpane" id="chartpane"></slot>
`;
class Zg extends J {
  #e;
  #t;
  #i;
  #s;
  constructor() {
    super(Ph);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(), this.previousDimensions();
  }
  disconnectedCallback() {
  }
  get grid() {
    return this.shadowRoot.querySelector("tradex-grid");
  }
  get primary() {
    return Array.from(this.chartPaneSlot.assignedElements()).find((e) => e.classList.contains("primary"));
  }
  get secondary() {
    return Array.from(this.chartPaneSlot.assignedElements()).find((e) => e.classList.contains("secondary"));
  }
  get chartPanes() {
    return this.chartPaneSlot.assignedElements();
  }
  get chartPaneSlot() {
    return this.shadowRoot.querySelector('slot[name="chartpane"]');
  }
  get width() {
    return this.#i;
  }
  get height() {
    return this.#s;
  }
  get oWidth() {
    return this.#e;
  }
  get oHeight() {
    return this.#t;
  }
  get widthDeltaR() {
    return this.#i / this.#e;
  }
  get heightDeltaR() {
    return this.#s / this.#t;
  }
  previousDimensions() {
    this.#e = this.#i ? this.#i : this.clientWidth, this.#t = this.#s ? this.#s : this.clientHeight, this.#i = this.clientWidth, this.#s = this.clientHeight;
  }
}
customElements.get("tradex-rows") || window.customElements.define("tradex-rows", Zg);
const Eh = document.createElement("template");
Eh.innerHTML = `
<style>
  :host {
    display: grid;
    grid-row-gap: 0;
    grid-template-rows: 1fr ${ws}px;
  }
  #viewport {
    position: absolute;
    width: 100%;
    height: inherit;
    background: var(--txc-chartpane-background, none);
    z-index: 0;
  }
  #viewport canvas {
    position: absolute;
  }
  tradex-rows {
    display: grid;
    grid-row: 1/2;
    overflow: hidden;
    width: 100%;
    border: 1px solid;
    border-color: var(--txc-border-color, ${z.COLOUR_BORDER}); 
  }
  tradex-time {
    grid-row: 2/3;
    width: 100%;
    overflow: hidden;
  }
</style>
<div id="viewport"></div>
<tradex-rows></tradex-rows>
<tradex-time></tradex-time>
`;
class Qg extends J {
  #e;
  #t;
  #i;
  #s;
  constructor() {
    super(Eh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#i = this.shadowRoot.querySelector("#viewport"), this.#e = this.shadowRoot.querySelector("tradex-rows"), this.#t = this.shadowRoot.querySelector("tradex-time");
      }
    );
  }
  disconnectedCallback() {
  }
  get viewport() {
    return this.#i;
  }
  get rows() {
    return this.#e;
  }
  get time() {
    return this.#t;
  }
  start(e) {
    this.#s = e, this.setMain();
  }
  rowNode(e, i = "", s) {
    return `
      <tradex-chartpane slot="chartpane" class="${e}" style="${i}">
      </tradex-chartpane>
    `;
  }
  scaleNode(e) {
    const i = rm + " width: 100%;";
    return `
    <div slot="chartpane" class="viewport scale ${e}" style="$${i}"></div>
  `;
  }
  addRow(e, i = "", s, n) {
    let r, o = this.rowNode(e, i, s);
    return this.#e.insertAdjacentHTML("beforeend", o), r = this.#e.chartPaneSlot.assignedElements().slice(-1)[0], r.style.height = `${n}px`, r;
  }
  removeRow(e) {
    const i = this.shadowRoot.querySelector(`#${e}`);
    return i ? (i.remove(), !0) : !1;
  }
  addScaleRow(e, i, s) {
    let n, r = this.scaleNode(e);
    return s.insertAdjacentHTML("beforeend", r), n = s.chartPaneSlot.assignedElements().slice(-1)[0], n.style.height = `${i}px`, n.style.width = "100%", n.height = i, n.width = s.width, n;
  }
  setMain() {
    let e = P(this.#s?.time?.height) ? this.#s.time.height : nm;
    this.style.gridTemplateRows = `1fr ${e}px`;
  }
}
customElements.get("tradex-main") || window.customElements.define("tradex-main", Qg);
const Mh = document.createElement("template");
Mh.innerHTML = `
  <slot></slot>
`;
class Jg extends J {
  constructor() {
    super(Mh);
  }
  destroy() {
  }
  get icons() {
    return this.shadowRoot.querySelector("slot").assignedElements();
  }
  defaultNode(e) {
    let i = `
    <style>
      svg {
        height: ${ht.ICONSIZE};
        width: ${ht.ICONSIZE};
        fill: ${ht.COLOUR_ICON};
      }
      svg:hover {
        fill: ${ht.COLOUR_ICONHOVER};
      }
      .icon-wrapper {
        width: ${ht.ICONSIZE};
        margin: 0 auto;
      }
    </style>
    `;
    for (const s of e)
      i += this.iconNode(s);
    return i;
  }
  iconNode(e) {
    const i = "sub" in e ? 'data-menu="true"' : "";
    return `
      <div id="${e.id}" data-event="${e.event}" ${i} class="icon-wrapper">${e.icon}</div>

    `;
  }
}
customElements.get("tradex-tools") || window.customElements.define("tradex-tools", Jg);
const Lh = document.createElement("template");
Lh.innerHTML = `
<style>
  tradex-viewport {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -100;
  }
  slot[name="chartpane"] {
    display: flex;
    flex-direction: column;
  }
  ::slotted(div.scale:first-of-type) {
    border-top: none !important;
  }
</style>
<tradex-viewport></tradex-viewport>
<slot name="chartpane" id="chartPane"></slot>
`;
class e1 extends J {
  #e;
  #t;
  #i;
  constructor() {
    super(Lh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector("tradex-viewport"), this.#i = this.shadowRoot.querySelector('slot[name="chartpane"]'), this.#t = this.chartPaneSlot.assignedElements();
      }
    );
  }
  get viewport() {
    return this.#e;
  }
  get chartPanes() {
    return this.#t;
  }
  get chartPaneSlot() {
    return this.#i;
  }
}
customElements.get("tradex-scale") || window.customElements.define("tradex-scale", e1);
const Ah = document.createElement("template"), t1 = `
<style>
  :host {
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: 0 0 1fr ${Hn}px 0;
    grid-template-rows: 1fr;
  }
  tradex-main, tradex-scale, tradex-tools {
    max-height: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  tradex-tools {
    grid-column: 1/2;
  }
  tradex-scale:first-of-type {
    grid-column: 2/3;
  }
  tradex-main {
    grid-column: 3/4;
  }
  tradex-scale:last-of-type {
    grid-column: 4/5;
  }
</style>
<tradex-tools></tradex-tools>
<tradex-scale></tradex-scale>
<tradex-main></tradex-main>
<tradex-scale></tradex-scale>
`;
Ah.innerHTML = t1;
class i1 extends J {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r = {
    toolsLeft: `${Fs}px`,
    scaleLeft: "0",
    main: "1fr",
    scaleRight: `${Fs}px`,
    toolsRight: "0"
  };
  constructor() {
    super(Ah);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.style.display = "grid", this.#t = this.shadowRoot.querySelector("tradex-tools"), this.#i = this.shadowRoot.querySelector("tradex-main"), this.#s = this.shadowRoot.querySelectorAll("tradex-scale")[1], this.#n = this.shadowRoot.querySelectorAll("tradex-scale")[0];
      }
    );
  }
  get tools() {
    return this.#t;
  }
  get main() {
    return this.#i;
  }
  get scale() {
    return this.#s;
  }
  get scaleW() {
    return this.#s.width || this.#e?.scale?.width || Hn;
  }
  get scale2W() {
    return this.#s.width || this.#e?.scale?.width || Hn;
  }
  get toolsW() {
    return this.#t.width || this.#e?.tools?.width || Fs;
  }
  start(e) {
    this.#e = e, this.setToolsLocation();
  }
  setYAxisWidth(e = this.scaleW) {
    e = P(e) ? e : this.scaleW, this.setYAxisLocation(void 0, e);
  }
  setYAxisLocation(e = this.#e?.yAxis?.location, i = this.scaleW) {
    switch (e) {
      case "left":
        this.#r.scaleLeft = `${i}px`, this.#r.scaleRight = "0", this.#s.style.gridColumn = "2/3", this.#n.style.gridColumn = "4/5", this.#s.style.display = "block", this.#n.style.display = "none";
        break;
      case "both":
        this.#r.scaleLeft = `${i}px`, this.#r.scaleRight = `${i}px`, this.#s.style.gridColumn = "4/5", this.#n.style.gridColumn = "2/3", this.#s.style.display = "block", this.#n.style.display = "block";
        break;
      case "right":
      default:
        this.#r.scaleLeft = "0", this.#r.scaleRight = `${i}px`, this.#s.style.gridColumn = "4/5", this.#n.style.gridColumn = "2/3", this.#s.style.display = "block", this.#n.style.display = "none";
        break;
    }
    this.setGridColumns();
  }
  setToolsLocation(e = this.#e?.tools?.location) {
    let i = this.#e?.tools?.location == "none" ? 0 : this.toolsW;
    switch (e) {
      case "none":
      case !1:
        this.#r.toolsLeft = "0", this.#r.toolsRight = "0", this.#t.style.display = "none";
        break;
      case "right":
        this.#r.toolsLeft = "0", this.#r.toolsRight = `${i}px`, this.#t.style.gridColumn = "1/2", this.#t.style.display = "block";
        break;
      case "left":
      default:
        this.#r.toolsLeft = `${i}px`, this.#r.toolsRight = "0", this.#t.style.gridColumn = "5/6", this.#t.style.display = "block";
        break;
    }
    this.setGridColumns();
  }
  setGridColumns() {
    this.style.gridTemplateColumns = Object.values(this.#r).join(" ");
  }
}
customElements.get("tradex-body") || window.customElements.define("tradex-body", i1);
const Oh = document.createElement("template");
Oh.innerHTML = `
  <style>
    .utilsOptions {
      display: inline-block; float: right;
    }
  </style>
  <slot></slot>
  <div class="utilsOptions">
  </div>
`;
class s1 extends J {
  constructor() {
    super(Oh);
  }
  destroy() {
  }
  get icons() {
    return this.shadowRoot.querySelector("slot").assignedElements()[0].children;
  }
  defaultNode(e) {
    let s = `
    <div style="display: inline-block; float: right;">
    <style>
      svg {
        height: ${$t.ICONSIZE};
        fill: ${$t.COLOUR_ICON};
      }
    </style>
    `;
    for (const n of e)
      s += this.iconNode(n);
    return s + "</div>";
  }
  iconNode(e) {
    const i = `display: inline-block; height: ${$t.ICONSIZE}; padding-top: 2px`, s = "sub" in e ? 'data-menu="true"' : "";
    return `
      <div id="TX_${e.id}" data-event="${e.event}" ${s} class="icon-wrapper" style="${i}">${e.icon}</div>

    `;
  }
}
customElements.get("tradex-utils") || window.customElements.define("tradex-utils", s1);
const Dh = document.createElement("template");
Dh.innerHTML = `
  <slot name="widget"></slot>
`;
class n1 extends J {
  constructor() {
    super(Dh);
  }
  destroy() {
  }
}
customElements.get("tradex-widgets") || window.customElements.define("tradex-widgets", n1);
const r1 = `
  <style title="core">
    :host {
      position: relative;
      z-index: 0;
      display: grid;
      grid-row-gap: 0;
      grid-template-rows: ${Cl}px 1fr 0;
    }
    tradex-utils {
      grid-row: 1/2;
      width: 100%; 
    }
    tradex-body {
      grid-row: 2/3;
      width: 100%;
    }
    tradex-widgets {
      grid-row: 3/4;
      position: relative;
    }
  </style>
  <div style="display: none;">
    <slot></slot>
  </div>
  <tradex-utils></tradex-utils>
  <tradex-body></tradex-body>
  <tradex-widgets></tradex-widgets>
`, qn = document.createElement("template");
qn.innerHTML = r1;
class a1 extends J {
  #e;
  #t;
  #i;
  #s;
  #n = li;
  #r = lt;
  #a;
  #l;
  #h;
  #o;
  #c;
  #u;
  constructor() {
    super(qn, "closed");
  }
  destroy() {
    this.resizeObserver.disconnect();
  }
  static get observedAttributes() {
    return ["config", "disabled", "height", "stream", "width"];
  }
  connectedCallback() {
    if (this.doInit) {
      this.doInit = !1, this.shadowRoot.appendChild(qn.content.cloneNode(!0)), this.init(), this.#r = this.parentElement.clientHeight || lt, this.#n = this.parentElement.clientWidth || li;
      let e = this.getAttribute("height") || "100%", i = this.getAttribute("width") || "100%";
      this.setDimensions(i, e), this.resizeObserver = new ResizeObserver(Oe(this.onResized, 100, this)), this.resizeObserver.observe(this), this.start(El);
    }
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  attributeChangedCallback(e, i, s) {
    switch (e) {
      case "config":
        break;
      case "disabled":
        break;
      case "height":
        this.height(s);
        break;
      case "width":
        this.width(s);
        break;
    }
  }
  init() {
    this.style.display = "grid", this.style.minHeight = bl, this.#i = this.shadowRoot.querySelector("tradex-widgets"), this.#t = this.shadowRoot.querySelector("tradex-utils"), this.#e = this.shadowRoot.querySelector("tradex-body");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(e) {
    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  get stream() {
    return !0;
  }
  set stream(e) {
  }
  get elBody() {
    return this.#e;
  }
  get elUtils() {
    return this.#t;
  }
  get elWidgets() {
    return this.#i;
  }
  get elWidgetsG() {
    return this.#i;
  }
  get elMain() {
    return this.#e.main;
  }
  get elTime() {
    return this.#e.main.time;
  }
  get elRows() {
    return this.#e.main.rows;
  }
  get elTools() {
    return this.#e.tools;
  }
  get elYAxis() {
    return this.#e.scale;
  }
  get width() {
    return this.#n;
  }
  get height() {
    return this.#r;
  }
  get resizeEntries() {
    return this.#u;
  }
  elStart(e) {
    this.#c = e, this.setUtilsLocation();
  }
  onResized(e) {
    super.onResize(e);
    const { width: i, height: s } = e[0].contentRect;
    this.#n = i, this.#r = s, this.#u = e[0], this.ToolsBar instanceof bh && this.ToolsBar.onResized(), this.log(`onResize w: ${i}, h: ${s}`), this.emit("global_resize", { w: i, h: s });
  }
  setWidth(e) {
    P(e) ? e += "px" : T(e) && e.match(ii) || (e = "100%"), this.style.width = e, this.#n = Math.round(this.getBoundingClientRect().width);
  }
  setHeight(e) {
    P(e) ? e += "px" : T(e) && e.match(ii) || (this.#r = this.parentElement.getBoundingClientRect().height, e = this.#r + "px"), this.style.height = e, this.#r = Math.round(this.getBoundingClientRect().height);
  }
  setWidthMin(e) {
    this.style.minWidth = `var(--txc-min-width, ${e})`;
  }
  setHeightMin(e) {
    this.style.minHeight = `var(--txc-min-height, ${e})`;
  }
  setWidthMax(e) {
    this.style.minWidth = `var(--txc-max-width, ${e})`;
  }
  setHeightMax(e) {
    this.style.minHeight = `var(--txc-max-height, ${e})`;
  }
  setDimensions(e, i) {
    let s, n = this.width, r = this.height;
    if (!e || !i) {
      const o = this.getBoundingClientRect(), l = this.parentElement.getBoundingClientRect();
      i = o.height ? o.height : l.height ? l.height : lt, e = o.width ? o.width : l.width ? l.width : li;
    } else (!P(e) || !P(i)) && ((!T(e) || !e.match(ii)) && (e = "100%"), (!T(i) || !i.match(ii)) && (i = "100%"));
    return this.setWidth(e), this.setHeight(i), s = {
      width: this.width,
      height: this.height,
      resizeW: e / n,
      resizeH: i / r,
      resizeWDiff: e - n,
      resizeHDiff: i - r
    }, s;
  }
  setUtilsLocation(e = this.#c?.utils?.location) {
    this.#c.utils = this.#c?.utils || {};
    const i = P(this.#c.uitils?.height) && this.#c.utils.height > 0 ? this.#c.uitils.height : Cl;
    switch (e) {
      case "top":
      case !0:
        this.#c.utils.location = "top", this.#c.utils.height = i, this.style.gridTemplateRows = `${i}px 1fr`, this.elBody.style.minHeight = `${lt - i}px`;
        break;
      case "none":
      case !1:
      default:
        this.#c.utils.location = "none", this.#c.utils.height = 0, this.elUtils.style.display = "none", this.style.gridTemplateRows = "0 1fr", this.elBody.style.minHeight = `${lt}px`;
        break;
    }
  }
}
const o1 = [
  {
    id: "indicators",
    name: "Indicators",
    icon: Sd,
    event: "utils_indicators",
    sub: []
  },
  {
    id: "timezone",
    name: "Timezone",
    icon: Pd,
    event: "utils_timezone"
  },
  {
    id: "screenshot",
    name: "Screenshot",
    icon: Td,
    event: "utils_screenshot"
  },
  {
    id: "settings",
    name: "Settings",
    icon: vl,
    event: "utils_settings"
  }
];
class l1 extends Lt {
  #e = "Utilities";
  #t = "utils";
  #i;
  #s;
  #n;
  #r;
  #a;
  #l = {};
  #h = {};
  #o = {};
  constructor(e, i) {
    super(e, i), this.#i = e.elUtils, this.#s = e.config?.utilsBar || o1, this.#r = e.WidgetsG, this.#a = e.indicatorsPublic || Mr, this.#n = e.config.theme?.utils?.location || "none", (this.#n || this.#n == "none" || !Cd.includes(this.#n)) && (this.core.style.gridTemplateRows = "0 1fr"), this.#i.innerHTML = this.#i.defaultNode(this.#s);
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#i);
  }
  get location() {
    return this.#n;
  }
  start() {
    this.initAllUtils(), this.eventsListen(), this.log(`Utils Bar ${this.#e} instantiated and running`);
  }
  destroy() {
    const e = this.core, i = Oo(`#${e.id} .${gc} .icon-wrapper`);
    for (let s of i) {
      let n = s.id.replace("TX_", "");
      for (let r of this.#s)
        r.id === n && s.removeEventListener("click", this.#h[n].click), s.removeEventListener("pointerover", this.#h[n].pointerover), s.removeEventListener("pointerout", this.#h[n].pointerout);
    }
    this.core.hub.expunge(this);
  }
  eventsListen() {
    this.on("utils_indicators", this.onIndicators, this), this.on("utils_timezone", this.onTimezone, this), this.on("utils_settings", this.onSettings, this), this.on("utils_screenshot", this.onScreenshot, this);
  }
  onIconClick(e) {
    const i = Jn(e.target, "icon-wrapper");
    if (!v(i)) return !1;
    const s = Date.now();
    if (s - this.#o[i.id] < 1e3) return !1;
    this.#o[i.id] = s;
    let n = i.dataset.event, r = i.dataset.menu || !1, o = {
      target: i.id,
      menu: r,
      evt: n
    }, l = i.dataset.action;
    this.emit(n, o), r ? this.emit("menu_open", o) : this.emit("util_selected", o), l && l(o, this.core);
  }
  onIconOver(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = $t.COLOUR_ICONHOVER;
  }
  onIconOut(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = $t.COLOUR_ICON;
  }
  initAllUtils() {
    const e = this.#i.querySelectorAll(".icon-wrapper");
    for (let i of e) {
      this.#o[i.id] = 0;
      let s = i.id.replace("TX_", ""), n = i.querySelector("svg");
      n.style.fill = $t.COLOUR_ICON, n.style.height = "90%";
      for (let r of this.#s)
        if (r.id === s && (this.#h[s] = {}, this.#h[s].click = this.onIconClick.bind(this), this.#h[s].pointerover = this.onIconOver.bind(this), this.#h[s].pointerout = this.onIconOut.bind(this), i.addEventListener("click", this.#h[s].click), i.addEventListener("pointerover", this.#h[s].pointerover), i.addEventListener("pointerout", this.#h[s].pointerout), s === "indicators" && (r.sub = Object.values(this.#a)), r?.sub)) {
          let o = {
            content: r.sub,
            primary: i
          }, l = this.#r.insert("Menu", o);
          i.dataset.menu = l.id, l.start();
        }
    }
  }
  onIndicators(e) {
  }
  onTimezone(e) {
    this.core.notImplemented();
  }
  onSettings(e) {
    this.core.notImplemented();
  }
  onScreenshot(e) {
    this.core.downloadImage();
  }
}
const h1 = 150;
class Ee {
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  #h;
  #o = {};
  static menuList = {};
  static menuCnt = 0;
  static class = Qr;
  static Name = "Menus";
  static type = "menu";
  static currentActive;
  static create(e, i) {
    const s = `menu_${++Ee.menuCnt}`;
    return i.id = s, Ee.menuList[s] = new Ee(e, i), Ee.menuList[s];
  }
  static destroy(e) {
    Ee.menuList[e].end(), delete Ee.menuList[e];
  }
  constructor(e, i) {
    this.#t = e, this.#i = i.core, this.#s = i, this.#e = i.id, this.#r = e.elements[Ee.type], this.#n = this.#i.elWidgetsG, this.mount(this.#r);
  }
  get el() {
    return this.#a;
  }
  get id() {
    return this.#e;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return Ce(this.#a);
  }
  get type() {
    return Ee.type;
  }
  start() {
    this.position(), this.eventsListen();
  }
  end() {
    this.#r.querySelectorAll(`#${this.id} li`).forEach((i) => {
      i.removeEventListener("click", this.#o[this.id][i.id]);
    }), document.removeEventListener("click", this.#o[this.id].outside), this.off("global_resize", this.onResize, this);
  }
  eventsListen() {
    const e = this.#r.querySelectorAll(`#${this.id} li`);
    this.#o[this.id] = {}, e.forEach((i) => {
      this.#o[this.id][i.id] = this.onMenuSelect.bind(this), i.addEventListener("click", this.#o[this.id][i.id]);
    }), this.on("global_resize", this.onResize, this);
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onMenuSelect(e) {
    let i = e.currentTarget.dataset.event, s = {
      target: e.currentTarget.id,
      menu: this.#e,
      evt: i
    };
    this.emit("menuItem_selected", s), this.emit("menu_close", s), this.#i.log(`menu_close: ${this.#e}`);
  }
  onOutsideClickListener(e) {
    if (!this.#a.contains(e.target) && !this.#s.primary.contains(e.target) && Et(this.#a)) {
      let i = {
        target: e.currentTarget.id,
        menu: this.#e
      };
      this.emit("menu_close", i);
    }
    document.removeEventListener("click", this.#o[this.id].outside);
  }
  onResize() {
    this.position();
  }
  mount(e) {
    e.lastElementChild == null ? e.innerHTML = this.menuNode() : e.lastElementChild.insertAdjacentHTML("afterend", this.menuNode()), this.#a = this.#r.querySelector(`#${this.id}`);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="${Qr}" style=""></div>
    `;
  }
  menuNode() {
    const e = this.#s, i = `position: absolute; z-index: 1000; display: none; border: 1px solid ${Us.COLOUR_BORDER}; background: ${Us.COLOUR_BG}; color: ${Us.COLOUR_TXT}; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;`;
    let s = this.content(e);
    return `
      <div id="${e.id}" class="${yc}" style="${i}">
        ${s}
      </div>
    `;
  }
  content(e) {
    const i = `list-style: none; text-align: left; margin:1em 1em 1em -2.5em; min-width: ${h1}px`, s = "padding: .25em 1em .25em 1em; white-space: nowrap;", n = "display: inline-block; width: 4em;", r = "cursor: pointer;", o = `onmouseover="this.style.background ='#222'"`, l = `onmouseout="this.style.background ='none'"`;
    let c = `<ul style="${i}">`;
    if (e?.content)
      for (let m of e.content)
        c += `<li id="${m.id}" data-event="${m.event}" style="${s} ${r}" ${o} ${l}><a style="${r}"><span style="${n}">${m.id}</span><span>${m.name}</span></li></a>`;
    return c += "</ul>", c;
  }
  position() {
    let e = this.#n.getBoundingClientRect(), i = this.#s.primary.getBoundingClientRect(), s = Math.round(i.left - e.left), n = Math.round(i.bottom - e.top);
    this.#a.style.left = s + "px", this.#a.style.top = n + "px";
    let r = Ce(this.#a);
    if (r.right > this.#n.offsetWidth) {
      let l = Math.floor(this.#n.offsetWidth - r.width);
      l = B(l, 0, this.#n.offsetWidth), this.#a.style.left = `${l}px`;
    }
    if (this.#i.MainPane.rowsH + n + r.height > this.#i.MainPane.rowsH) {
      let l = Math.floor(r.height * -1);
      l = B(l, this.#i.MainPane.rowsH * -1, 0), this.#a.style.top = `${l}px`;
    }
  }
  remove() {
  }
  open() {
    if (Ee.currentActive === this) return !0;
    Ee.currentActive = this, this.#a.style.display = "block", this.position(), setTimeout(() => {
      this.#o[this.id].outside = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#o[this.id].outside);
    }, 250);
  }
  close() {
    Ee.currentActive = null, this.#a.style.display = "none", this.emit("menuClosed", this.id);
  }
}
class vi extends ve {
  static Name = "Dialogues";
  static type = "dialogue";
  static class = "tradeXdialogue";
  static defaultStyles = `
  /** default Dialogue widget styles */
  `;
  static create(e, i) {
    return i.dragBar = j(i?.dragBar) ? i.dragBar : !0, i.close = j(i?.close) ? i.close : !0, i.type = i?.type || vi.type, i.class = i?.class || "dialogue", i.id = i?.id || se("dialogue"), super.create(e, i);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="tradeXdialogue" style="">
      </div>
    `;
  }
  constructor(e, i) {
    super(e, i);
  }
  destroy() {
    super.destroy();
  }
  get type() {
    return vi.type;
  }
  dialogueBuild(e = "", i = []) {
    let s = { buttons: {} }, n = `
    <input class="submit" type="submit" value="Submit"/>
    <input class="cancel" type="button" value="Cancel"/>
    <input class="default" type="button" value="Default"/>
    `;
    return E(i) && i.length > 1 || (s.submit = this.provideEventListeners(
      "input.submit",
      [{
        event: "click",
        fn: (o) => {
          I(this.parent.onConfigDialogueSubmit) && this.parent.onConfigDialogueSubmit(this);
        }
      }]
    ), s.cancel = this.provideEventListeners(
      "input.cancel",
      [{
        event: "click",
        fn: (o) => {
          I(this.parent.onConfigDialogueCancel) && this.parent.onConfigDialogueCancel(this);
        }
      }]
    ), s.default = this.provideEventListeners(
      "input.default",
      [{
        event: "click",
        fn: (o) => {
          I(this.parent.onConfigDialogueDefault) && this.parent.onConfigDialogueDefault(this);
        }
      }]
    )), { html: `
    ${new String(e)}
    <div class="buttons">
      ${n}
    </div>
    `, modifiers: s };
  }
  provideEventListener(e, i, s) {
    const n = [{ event: i, fn: s }];
    return this.provideEventListeners(e, n);
  }
  provideEventListener(e, i, s) {
    const n = [{ event: i, fn: s }];
    return this.provideEventListeners(e, n);
  }
  provideEventListeners(e, i) {
    return (n) => {
      const r = n.querySelector(e);
      if (r)
        for (let o of i)
          r.addEventListener(
            o.event,
            (l) => {
              o.fn(l);
            }
          );
    };
  }
}
const Ih = `
/** default Config Dialogue widget styles */

.tabbedContent {
  overflow: hidden;
}

.tabbedContent .content {
  padding: 0;
}
.tabbedContent .tabs {
  display: flex;
  flex-wrap: wrap;
  background: #e5e5e588;
  box-shadow: 0 48px 80px -32px rgba(0,0,0,0.3);
  width: 300px;
}
.tabbedContent .input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.tabbedContent .label {
  position: relative;
  width: auto;
  padding: .4em 1em;
  background: #e5e5e588;
  cursor: pointer;
  font-weight: bold;
  color: #7f7f7f;
  transition: background 0.1s, color 0.1s;
}
.tabbedContent .label:hover {
  background: #d8d8d8;
}
.tabbedContent .label:active {
  background: #ccc;
}
.tabbedContent label:has(> input:checked) {
  background: #fff;
  color: #000;
}
.tabbedContent .panel {
  display: none;
  padding: 1em 1em 1.5em;
  background: #ffffff88;
  order: 100;
}
.tabbedContent label:has(> input:checked) + .panel {
  display: grid;
  width: 100%;
  grid-template-columns: [label] 1fr [input] 10em [end];
  grid-row-gap: 2px;
  align-items: center;
}
.tabbedContent .panel label,
.tabbedContent .panel input {
  ${z.FONTSTRING}
  padding: 1px 2px;
}
.tabbedContent .panel label {
  grid-column-start: label;
  grid-column-end: input;
  color: #444;
  font-weight: bold;
}
.tabbedContent .panel input {
  border: 1px solid #888;
}
.tabbedContent .panel input[type="color"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3em;
  height: 2em;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  border: none;
}
.tabbedContent .panel input[type="color"]::-webkit-color-swatch,
.tabbedContent .panel input[type="color"]::-moz-color-swatch {
  border-radius: 0;
  padding: 1px;
  margin 0;
  border-radius: 3px;
  border: 1px solid #000;
  height: 2em;
  background: #fff;
}
`, Nh = document.createElement("template");
Nh.innerHTML = `
<style>
  ${Ih}
}
</style>
<div class="tabbedContent">
</div>
`;
class c1 extends J {
  #e;
  #t;
  #i;
  #s;
  #n = this.onSlotChange.bind(this);
  constructor() {
    super(Nh);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#t = this.shadowRoot.querySelector(".tabbedContent"), this.#i = this.shadowRoot.querySelector('slot[name="viewporttabs"]'), this.#i.addEventListener("slotchange", this.#n);
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#i.removeEventListener("slotchange", this.#n);
  }
  get hastabsSlot() {
    return !0;
  }
  get tabsSlot() {
    return this.#i;
  }
  get tabs() {
    return this.#s;
  }
  onSlotChange() {
    this.#s = Array.from(this.tabsSlot.assignedElements()).find((e) => e.localName === "tabs")[0];
  }
  insertTab(e) {
    let { id: i, label: s, content: n, checked: r } = e;
    switch (typeof i) {
      case "string":
      case "number":
        break;
      default:
        i = this.#s.length;
    }
    let o = Ji(i, s, n, r);
    o = this.#t.insertAdjacentHTML("afterend", o), this.#s.push({ id: i, label: s, content: n, checked: r, tab: o });
  }
  removeTab(e) {
    if (T(e)) {
      let i = this.#t.querySelectorAll(`.tab-${e}`);
      for (let s of i)
        s.remove();
      for (let s = 0; s < this.#s.length; s++)
        this.#s[s].id == e && delete this.#s[s];
    } else P(e) && this.#t.querySelectorAll(".input");
  }
}
function u1(a = {}, e) {
  v(a) || (a = {});
  let i = "", s = Object.keys(a), n = s.length;
  if (n < 1)
    i += Ji(1, "Question", "Why did the chicken cross the road?", !0), i += Ji(2, "Answer", "To get to the other side.");
  else {
    let r = [];
    for (--n; n >= 0; n--) {
      let o = n == 0, l = I(e) ? e(a[s[n]]) : a[s[n]];
      r.push(Ji(n, s[n], l, o));
    }
    i = r.reverse().join("&nbsp;");
  }
  return i;
}
function Ji(a, e, i, s = !1) {
  return i = T(i) ? i : "", `
  <label class="label tab_${a}" for="tab_${a}">
    <span>${e}</span>
    <input class="input tab_${a}" name="tabs" type="radio" id="tab_${a}" ${s ? 'checked="checked"' : ""}/>
  </label>
  <div class="panel tab_${a}">
    ${i}
  </div>
  `;
}
customElements.get("tradex-tabs") || window.customElements.define("tradex-tabs", c1);
class ds extends vi {
  static Name = "ConfigDialogues";
  static type = "configDialogue";
  static class = "tradeXconfig";
  static defaultStyles = `
  /** default Config Dialogue widget styles */
  
  .tradeXwindow.config {
    /* overflow: hidden; */
    background: none;
  }

  .tradeXwindow.config.active .content {
    padding: 0;
    position: relative;
  }

  .tradeXwindow.config.active .buttons {
    background: #ffffffbb;
    display: flex;
    justify-content: flex-end;
    padding: 3px 1em;
    border-radius: 0 0 5px 5px;
  }

  .tradeXwindow.config.active .buttons input {
    margin-left: 5px;
    font-size: 1em;
    padding: 1px .5em;
  }

  ${Ih} 
  `;
  static create(e, i) {
    return i.dragBar = !0, i.close = !0, i.type = ds.type, i.class = "config", i.id = se("config"), new ds(e, i);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="tradeXconfig" style="">
      </div>
    `;
  }
  #e = !0;
  constructor(e, i) {
    super(e, i);
  }
  destroy() {
    super.destroy(), this.elColourPicker.destroy();
  }
  set update(e) {
    this.#e = !!e;
  }
  get update() {
    return this.#e;
  }
  configBuild(e = {}) {
    let { content: i, modifiers: s = {} } = this.configContent(e);
    const n = `
    <div class="tabbedContent">
      <form class="tabs">
        ${u1(i)}
      </form>
    </div>
    `, { html: r, modifiers: o } = super.dialogueBuild(n);
    return s = { ...s, ...o }, { html: r, modifiers: s };
  }
  configContent(e) {
    if (!v(e)) return "<p>Config content missing!</p>";
    let i, s = {}, n = {};
    for (let r in e)
      if (s[r] = "", E(e[r]))
        for (let o of e[r])
          for (let l in o.style)
            i = o.style[l], v(i) && this.configEntryFields(r, i, s, n);
      else if (v(e[r])) {
        s[r] = "";
        for (let o in e[r])
          i = e[r][o], this.configEntryFields(r, i, s, n);
      } else {
        this.core.error("ERROR: Building Config Dialogue : Input malformed");
        continue;
      }
    return { content: s, modifiers: n };
  }
  configEntryFields(e, i, s, n) {
    let r = T(i.entry) ? i.entry : "", o = T(i.label) ? i.label : r;
    switch (i.type) {
      case "select":
        s[e] += Fc(o, i);
        break;
      default:
        s[e] += ko(o, i);
        break;
    }
    n[r] = i.$function;
  }
  contentUpdate(e) {
    return v(e) ? (T(e?.title) && this.setTitle(e.title), T(e?.content) && this.setContent(this.configBuild(e.content)), this.#e = !0, this.#e) : !1;
  }
  provideInputColor(e, i) {
    const s = e.querySelector(i), n = document.createElement("tradex-colourinput");
    s.type = "text", s.pattern = Nm, n.setTarget(s), n.style.display = "inline-block";
  }
}
class Re {
  static progressList = {};
  static progressCnt = 0;
  static class = ta;
  static type = "progress";
  static Name = "Progress";
  static icons = {
    loadingBars: tm,
    loadingSpin: im
  };
  static defaultNode() {
    return `
      <div slot="widget" class="${ta}" style=""></div>
    `;
  }
  static create(e, i) {
    const s = `progress_${++Re.progressCnt}`;
    return i.id = s, Re.progressList[s] = new Re(e, i), Re.progressList[s];
  }
  static destroy(e) {
    Re.progressList[e].destroy(), delete Re.progressList[e];
  }
  #e;
  #t;
  #i;
  #s;
  #n;
  #r;
  #a;
  #l;
  constructor(e, i) {
    this.#t = e, this.#i = i.core, this.#s = i, this.#e = i.id, this.#r = e.elements[Re.type], this.#n = this.#i.elWidgetsG, this.init();
  }
  destroy() {
    this.#r.remove();
  }
  get type() {
    return Re.type;
  }
  init() {
    this.mount(this.#r);
  }
  start() {
    if (!v(this.#i.config?.progress) || !v(this.#i.config.progress?.loading))
      return !1;
    this.#a.style.display = "block";
    const e = this.#i.elBody.width / 2 - this.#a.clientWidth / 2, i = this.#i.elBody.height / -2 - this.#a.clientHeight / 2;
    this.#a.style.top = `${i}px`, this.#a.style.left = `${e}px`;
  }
  stop() {
    this.#a.style.display = "none";
  }
  progressNode(e) {
    const i = "position: absolute; z-index: 1000; display: none; justify-content: center; align-items: center;", n = `<div class="content" style="">${e.icon}</div>`;
    return `
      <div id="${this.#s.id}" class="progress ${e.type}" style="${i}">${n}</div>
    `;
  }
  mount(e) {
    let i = "loadingBars";
    this.#s?.type in Re.icons && (i = this.#s?.type);
    const s = { type: i, icon: Re.icons[i] };
    e.lastElementChild == null ? e.innerHTML = this.progressNode(s) : e.lastElementChild.insertAdjacentHTML("afterend", this.progressNode(s)), this.#a = this.#r.querySelector(`#${this.#s.id}`), this.#l = this.#a.querySelector("svg"), this.#l.style.fill = `${am.COLOUR_ICONHOVER};`;
  }
}
const bn = {
  id: "widgets",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        menu_open: {
          target: "menu_open",
          action(a) {
          }
        },
        window_open: {
          target: "window_open",
          action(a) {
          }
        }
      }
    },
    menu_open: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        menu_close: {
          target: "idle",
          action(a) {
          }
        }
      }
    },
    window_open: {
      onEnter(a) {
      },
      onExit(a) {
      },
      on: {
        window_close: {
          target: "idle",
          action(a) {
          }
        }
      }
    }
  }
};
class d1 extends Lt {
  #e = "Widgets";
  #t = "widgets";
  #i;
  #s = { Divider: Pe, Progress: Re, Menu: Ee, Window: ve, Dialogue: vi, ConfigDialogue: ds };
  #n = {};
  #r = {};
  #a;
  #l;
  #h;
  constructor(e, i) {
    super(e, i), this.#i = { ...this.#s, ...i.widgets }, this.#a = e.elWidgetsG, this.mount(this.#a);
    for (let s in this.#i) {
      let n = this.#i[s], r = `${n.type}`;
      this.#r[r] = this.#a.querySelector(`.${n.class}`), this.#r[r].innerHTML = `
      <style title="${n.type}">
        ${n?.defaultStyles || ""}
      </style>
      `, n.stylesInstalled = !0;
    }
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get elements() {
    return this.#r;
  }
  get instances() {
    return this.#n;
  }
  get types() {
    return this.#i;
  }
  start() {
    this.eventsListen(), bn.id = this.id, bn.context = this, this.stateMachine = bn, this.stateMachine.start();
  }
  destroy() {
    this.core.hub.expunge(this), this.stateMachine.destroy();
    for (let e in this.#n)
      this.delete(e);
    for (let e in this.#i)
      this.#i[e].destroy();
  }
  eventsListen() {
    this.on("resize", this.onResize, this), this.on("menu_open", this.onOpenMenu, this), this.on("menu_close", this.onCloseMenu, this), this.on("menu_off", this.onCloseMenu, this), this.on("menuItem_selected", this.onMenuItemSelected, this), this.on("global_resize", this.onResize, this);
  }
  onOpenMenu(e) {
    this.#n[e.menu].open();
  }
  onCloseMenu(e) {
    this.#n[e.menu].close();
  }
  onMenuItemSelected(e) {
    this.emit(e.evt, e.target);
  }
  onResize(e) {
    this.setDimensions(e), this.elements.divider.style.width = `${this.core.width}px`;
  }
  mount(e) {
    e.innerHTML = this.defaultNode();
  }
  setWidth(e) {
    this.#l = e;
  }
  setHeight(e) {
    this.#h = e;
  }
  setDimensions(e) {
    this.setWidth(e.mainW), this.setHeight(e.mainH);
  }
  defaultNode() {
    let e = "", i = [];
    for (let s in this.#i) {
      let n = this.#i[s];
      i.indexOf(n.type) === -1 && (e += n.defaultNode(), i.push(n.type));
    }
    return e;
  }
  insert(e, i) {
    if (!(e in this.#i) || !v(i)) return !1;
    i.core = this.core;
    const s = this.#i[e].create(this, i);
    return this.#n[s.id] = s, s;
  }
  delete(e) {
    if (!T(e) || !(e in this.#n)) return !1;
    const i = this.#n[e].type;
    return this.#i[i].destroy(e), !0;
  }
}
function wo(a, e, i, s, n, r) {
  const o = a.theme, l = document.createElement("template"), c = a.Timeline.graph.viewport.scene, m = a.MainPane, f = m.graph.viewport.scene, C = m.width, M = m.height, L = new oe.Viewport({
    width: C,
    height: M,
    container: l
  }), D = L.scene.context;
  let k = 0, X = 0, le = C - a.Chart.scale.width;
  o?.yAxis?.location == "left" && (X = a.Chart.scale.width, le = 0);
  let $;
  D.save(), Ss(D, 0, 0, C, M, { fill: o.chart.Background }), D.drawImage(f.canvas, X, 0, f.width, f.height);
  for (const [Z, G] of a.ChartPanes) {
    let he = G.graph.viewport.scene, { width: pe, height: ye } = he, _ = G.scale.graph.viewport.scene, { width: U, height: ze } = _;
    k > 0 && ($ = { stroke: o.divider.line }, Pt(D, k, 0, m.width, $)), D.drawImage(he.canvas, X, k, pe, ye), D.drawImage(_.canvas, le, k - 1, U, ze), k += ye;
  }
  D.drawImage(c.canvas, 0, k, c.width, c.height), $ = {
    text: a.config.title,
    colour: o.chart.TextColour,
    fontSize: o.chart.FontSize * 1.5,
    fontWeight: "normal",
    fontFamily: o.chart.FontFamily,
    textBaseLine: "top"
  }, Ll(D, 6, 6, $);
  const ne = (Z) => {
    if (Z) {
      const he = r?.x || 0, pe = r?.y || 0, ye = r?.width || C * 0.25, _ = r?.height || M * 0.25;
      D.drawImage(Z, he, pe, ye, _);
    }
    D.restore();
    const G = () => {
      L.destroy(), l.remove();
    };
    switch (n) {
      case "url":
        if (I(e)) {
          const he = (pe) => {
            e(pe), G();
          };
          L.scene.toImage(i, s, he);
        } else
          new Promise(function(he, pe) {
            const ye = L.scene.toImage(i, s);
            ye ? he(ye) : pe(!1), G();
          });
        break;
      case "download":
      default:
        L.scene.export({ fileName: e }, null, i, s), G();
        break;
    }
  };
  v(r) ? Kn(r?.imgURL).then((Z) => {
    ne(Z);
  }).catch((Z) => {
    console.error(Z);
  }) : ne();
}
class H extends a1 {
  static #e = Lr;
  static #t = 0;
  static #i = {};
  static #s = {};
  static #n = null;
  static #r = !1;
  static #a = [];
  static #l = null;
  static #h = null;
  static #o = !1;
  static get version() {
    return H.#e;
  }
  static get default() {
    return K(El);
  }
  static get talibPromise() {
    return H.#n;
  }
  static get talibReady() {
    return H.#r;
  }
  static get talibAwait() {
    return H.#a;
  }
  static get talibError() {
    return H.#l;
  }
  static get webWorkers() {
    return Wn;
  }
  static get TALibWorker() {
    return H.#h;
  }
  static #c = `${Qt} requires "talib-web" to function properly. Without it, some features maybe missing or broken.`;
  static #u = [
    "TradeXchart",
    "Chart",
    "MainPane",
    "Secondary",
    "Primary",
    "ScaleBar",
    "Timeline",
    "ToolsBar",
    "UtilsBar",
    "Widgets"
  ];
  #d = se();
  #m = Qt;
  #p = ut;
  #g;
  #y;
  #b;
  #x;
  #w = !1;
  #f;
  #S;
  #v;
  #P = uh;
  #T = Mr;
  #C = { ...zi };
  #E = { ...zi };
  #L = { ...zi };
  #A;
  #O;
  chartWMin = li;
  chartHMin = lt;
  chartW_Reactive = !0;
  chartH_Reactive = !0;
  chartBGColour = z.COLOUR_BG;
  chartTxtColour = z.COLOUR_TXT;
  chartBorderColour = z.COLOUR_BORDER;
  #R;
  #k;
  #M = {
    chart: {},
    time: {}
  };
  #$;
  panes = {
    utils: this.#R,
    tools: this.#k,
    main: this.#M
  };
  destruction = !1;
  logs = !1;
  infos = !1;
  warnings = !1;
  errors = !1;
  timers = !1;
  #D = 0;
  #G = 0;
  #H = { x: 0, y: 0 };
  #z = [!1, !1, !1];
  #_;
  #F;
  #W;
  #B;
  #U;
  #V;
  #I = !1;
  #N = !1;
  static create(e = H.default) {
    let i = H.default;
    return v(e) && Object.keys(e).length > 0 && ((!("watermark" in e) || !T(e?.watermark?.text) && !("imgURL" in e?.watermark)) && (i.watermark = { display: !1 }), i = Ve(i, e)), H.#t == 0 && (H.#i.CPUCores = navigator.hardwareConcurrency, H.#i.api = {
      permittedClassNames: H.#u
    }), !H.#r && H.#l === null && I(i?.talib?.init) && (H.#n = i.talib.init(i.wasm), H.#n.then(
      () => {
        H.#r = !0;
        for (let s of H.#a)
          I(s) && s();
      },
      () => {
        H.#r = !1;
      }
    )), i;
  }
  static destroy(e) {
    if (!(e instanceof H)) return !1;
    const i = e.inCnt;
    return e.destuction = !0, e.destroy(), delete H.#s[i], !0;
  }
  static cnt() {
    return H.#t++;
  }
  constructor() {
    super(), this.#g = this, this.#f = H.cnt(), this.logs = !1, this.infos = !1, this.warnings = !1, this.errors = !1, this.timers = !1, this.setID(null), this.#v = A, this.warn(`!WARNING!: ${Qt} changes to config format, for details please refer to https://github.com/tradex-app/TradeX-chart/blob/master/docs/notices.md`), this.log(`${ut} instance count: ${this.inCnt}`), this.oncontextmenu = window.oncontextmenu, this.#F = Wn;
    const e = this.#C;
    e.primaryPane = { ...e.primaryPane, ...ph.primaryPane }, this.#E = { ...zn };
  }
  log(...e) {
    this.logs && console.log(...e);
  }
  info(...e) {
    this.infos && console.info(...e);
  }
  warn(...e) {
    this.warnings && console.warn(...e);
  }
  error(e) {
    this.errors && console.error(e);
  }
  timer(e) {
    this.timers && console.time(e);
  }
  timeLog(e) {
    this.timers && console.timeLog(e);
  }
  timeEnd(e) {
    this.timers && console.timeEnd(e);
  }
  get version() {
    return H.version;
  }
  get name() {
    return this.#m;
  }
  get shortName() {
    return this.#p;
  }
  get key() {
    return this.#d;
  }
  get options() {
    return this.#x;
  }
  get config() {
    return this.#b;
  }
  get core() {
    return this.#g;
  }
  get inCnt() {
    return this.#f;
  }
  get txCfg() {
    return this.#y;
  }
  get elUtils() {
    return super.elUtils;
  }
  get elTools() {
    return super.elTools;
  }
  get elBody() {
    return super.elBody;
  }
  get elMain() {
    return super.elMain;
  }
  get elRows() {
    return super.elRows;
  }
  get elTime() {
    return super.elTime;
  }
  get elYAxis() {
    return super.elYAxis;
  }
  get elWidgetsG() {
    return super.elWidgets;
  }
  get UtilsBar() {
    return this.#R;
  }
  get ToolsBar() {
    return this.#k;
  }
  get MainPane() {
    return this.#M;
  }
  get Timeline() {
    return this.#M.time;
  }
  get WidgetsG() {
    return this.#$;
  }
  get Chart() {
    return this.#M.chart;
  }
  get ChartPanes() {
    return this.#M.chartPanes;
  }
  get Indicators() {
    return this.#M.indicators;
  }
  get CustomOverlays() {
    return this.#L;
  }
  get ready() {
    return this.#w;
  }
  get stateClass() {
    return this.#v;
  }
  get state() {
    return this.#v?.active(this);
  }
  get allData() {
    return {
      data: this.state.data.chart.data,
      primaryPane: this.state.data.primary,
      secondaryPane: this.state.data.secondary,
      datasets: this.state.data.datasets
    };
  }
  get rangeLimit() {
    return P(this.range.initialCnt) ? this.range.initialCnt : bc;
  }
  get range() {
    return this.state.range;
  }
  get time() {
    return this.state.time;
  }
  get timeData() {
    return this.state.time;
  }
  get TimeUtils() {
    return vd;
  }
  get theme() {
    return this.#O;
  }
  get settings() {
    return this.state.data.chart.settings;
  }
  get indicatorClasses() {
    return this.#P;
  }
  get indicatorsPublic() {
    return this.#T;
  }
  get TALib() {
    return this.#A;
  }
  get TALibReady() {
    return H.talibReady;
  }
  get TALibError() {
    return H.talibError;
  }
  get talibAwait() {
    return H.talibAwait;
  }
  get TALibPromise() {
    return H.talibPromise;
  }
  get candleW() {
    return this.Timeline.candleW;
  }
  get candlesOnLayer() {
    return this.Timeline.candlesOnLayer;
  }
  get buffer() {
    return this.MainPane.buffer;
  }
  get bufferPx() {
    return this.MainPane.bufferPx;
  }
  set scrollPos(e) {
    this.setScrollPos(e);
  }
  get scrollPos() {
    return this.#D;
  }
  get smoothScrollOffset() {
    return 0;
  }
  get rangeScrollOffset() {
    return Math.floor(this.bufferPx / this.candleW);
  }
  get mousePos() {
    return this.#H;
  }
  get pointerButtons() {
    return this.#z;
  }
  get symbol() {
    return this.state?.symbol;
  }
  get timeFrame() {
    return this.range.interval;
  }
  get timeFrameStr() {
    return this.range.intervalStr;
  }
  get interval() {
    return this.range.interval;
  }
  get intervalStr() {
    return this.range.intervalStr;
  }
  set pricePrecision(e) {
    this.setPricePrecision(e);
  }
  get pricePrecision() {
    return this.#U || ia;
  }
  get volumePrecision() {
    return this.#V;
  }
  get stream() {
    return this.state.dataSource.stream;
  }
  get worker() {
    return this.#F;
  }
  get isEmpty() {
    return this.state.isEmpty;
  }
  set candles(e) {
    v(e) && (this.#B = e);
  }
  get candles() {
    return this.#B;
  }
  get progress() {
    return this.#_;
  }
  get customOverlays() {
    return this.#L;
  }
  get optionalOverlays() {
    return Ve({ ...this.#E }, this.#L);
  }
  start(e = H.default) {
    this.log(`${Qt} configuring...`), this.#w && this.#M.destroy();
    const i = this.ID, s = H.create(e);
    this.#y = s, this.logs = s?.logs ? s.logs : null, this.infos = s?.infos ? s.infos : null, this.warnings = s?.warnings ? s.warnings : null, this.errors = s?.errors ? s.errors : null, this.timers = s?.timer ? s.timer : null, this.#b = s, this.#f = s.cnt || this.#f, this.#A = s.talib, this.props(s), this.log("processing state...");
    let n = s?.deepValidate || !1, r = s?.isCrypto || !1, o = s.state;
    if (s.state instanceof A || (o = this.configureState(s)), this.#w) {
      if (!(o instanceof A)) {
        const l = this.#v.create(this, o, n, r);
        this.#v.use(this, l.key), this.#v.delete(this, { id: Aa });
      }
      delete s.state, this.#M = new mo(this, s), this.MainPane.start(), document.querySelector(`style[title="${i}_style"]`)?.remove(), this.setUtilsLocation(this.theme?.utils?.location), this.elBody.setToolsLocation(this.theme?.tools?.location), this.log(`${this.name} id: ${this.ID} : loaded a new ${this.state.status} state`);
    } else {
      s.watermark.display = !0, o.id = Aa;
      let l = this.#v.create(this, o, n, r);
      this.#v.use(this, l.key), delete s.state, this.log(`${this.name} id: ${this.ID} : created with a ${this.state.status} state`), this.#$ = new d1(this, { widgets: s?.widgets }), this.#R = new l1(this, s), this.#k = new bh(this, s), this.#M = new mo(this, s), this.eventsListen(), this.elStart(this.theme), this.elBody.start(this.theme), this.UtilsBar.start(), this.ToolsBar.start(), this.MainPane.start(), this.WidgetsG.start(), this.#_ = this.WidgetsG.insert("Progress", {});
    }
    this.insertAdjacentHTML("beforebegin", `<style title="${this.ID}_style"></style>`), this.setTheme(this.#O.id), this.#D = this.bufferPx * -1, !v(s?.stream) && this.state.data.chart.data.length < 2 ? this.warn(`${Qt} has no chart data or streaming provided.`) : v(s?.stream) && this.state.data.chart.data.length < 2 && (this.#I = !0), this.log(`Time Frame: ${this.range.timeFrame} Milliseconds: ${this.range.timeFrameMS}`), this.#I && this.on(et, this.delayedSetRange, this), this.#b.callbacks = this.#b.callbacks || {}, this.#w = !0, setTimeout(this.refresh.bind(this), 1e3), this.log(`${this.#m} V${H.version} configured and running...`);
  }
  use(e) {
    this.start(e);
  }
  destroy() {
    if (this?.destuction !== !0)
      return H.destroy(this), !0;
    this.log("...cleanup the mess"), this.removeEventListener("mousemove", this.onMouseMove), this.hub.expunge(this), this.UtilsBar.destroy(), this.ToolsBar.destroy(), this.MainPane.destroy(), this.WidgetsG.destroy(), this.#F.end(), this.#S = void 0, this.#v = void 0;
  }
  configureState(e) {
    let i = K(e?.state) || {};
    i.id = this.ID, i.core = this;
    let { tf: s, ms: n } = it(e?.timeFrame) ? gs(e.timeFrame) : {
      tf: as,
      ms: os
    }, r = Date.now();
    if (r = r - r % n, !v(e?.range))
      e.range = {
        startTS: r,
        timeFrame: s,
        timeFrameMS: n
      };
    else {
      let o = e?.range;
      N(o.startTS) || (o.startTS = r), N(o.timeFrameMS) || (o.timeFrameMS = n), it(o.timeFrame) != o.timeFrameMS && (o.timeFrame = Te(n));
    }
    return i.range = { ...i.range, ...e.range }, i;
  }
  eventsListen() {
    this.addEventListener("mousemove", this.onMouseMove.bind(this)), this.on(et, this.onStreamUpdate, this), this.on("state_mergeComplete", () => this.#_.stop());
  }
  onMouseMove(e) {
    this.#H.x = e.clientX, this.#H.y = e.clientY;
  }
  onStreamUpdate(e) {
    const i = this.range;
    if (i.inRange(e[0])) {
      const s = i.valueMax, n = i.valueMin;
      (e[2] > s || e[3] < n) && (this.setRange(i.indexStart, i.indexEnd), this.emit("chart_yAxisRedraw", this.range));
    }
  }
  props(e) {
    let i = {
      width: (s) => this.setWidth(s),
      height: (s) => this.setHeight(s),
      widthMin: (s) => this.setWidthMin(s),
      heightMin: (s) => this.setHeightMin(s),
      widthMax: (s) => this.setWidthMax(s),
      heightMax: (s) => this.setHeightMax(s),
      logs: (s) => this.logs = j(s) ? s : !1,
      infos: (s) => this.infos = j(s) ? s : !1,
      warnings: (s) => this.warnings = j(s) ? s : !1,
      errors: (s) => this.errors = j(s) ? s : !1,
      indicators: (s) => this.setIndicators(s),
      theme: (s) => {
        this.#O = this.addTheme(s);
      },
      stream: (s) => this.#W = v(s) ? s : {},
      pricePrecision: (s) => this.setPricePrecision(s),
      volumePrecision: (s) => this.setVolumePrecision(s)
    };
    if (v(e))
      for (const s in e)
        s in i && i[s](e[s]);
    this.validateID(e), (!("theme" in e) || !v(e.theme)) && (e.theme = xs);
  }
  getInCnt() {
    return this.#f;
  }
  validateID(e) {
    const i = T(e?.id) ? e.id : null;
    this.setID(i), this.classList.add(this.ID);
  }
  setID(e) {
    T(e) ? this.ID = e : this.ID = `${se(ut)}_${this.#f}`;
  }
  setTitle(e) {
    return T(e) ? (this.Chart.setTitle(e), !0) : !1;
  }
  setWatermark(e) {
    T(e.text) || T(e) ? this.core.config.watermark.text = e : "imgURL" in e && (this.core.config.watermark.imgURL = e), this.Chart.setWatermark(e);
  }
  setDimensions(e, i) {
    const s = super.setDimensions(e, i);
    this.emit("global_resize", s);
  }
  setUtilsH(e) {
    this.elUtils.style.height = `${e}px`;
  }
  setToolsW(e) {
    this.elTools.style.width = `${e}px`;
  }
  setPricePrecision(e) {
    (!P(e) || e < 0) && (e = ia), this.#U = e;
  }
  setVolumePrecision(e) {
    (!P(e) || e < 0) && (e = Tc), this.#V = e;
  }
  addTheme(e) {
    const i = Be.create(e, this);
    return this.#O instanceof Be || (this.#O = i), i;
  }
  setTheme(e) {
    if (!this.theme.list.has(e)) return !1;
    this.#O.setTheme(e, this);
    const i = this.#O, s = document.querySelector(`style[title=${this.ID}_style]`), n = `var(--txc-border-color, ${i.chart.BorderColour}`;
    let r = `.${this.ID} { `;
    if (r += `--txc-background: ${i.chart.Background}; `, this.style.background = `var(--txc-background, ${i.chart.Background})`, this.style.border = `${i.chart.BorderThickness || 0}px solid`, this.style.borderColor = n, r += `--txc-border-color:  ${i.chart.BorderColour}; `, i.chart.BorderThickness > 0 ? this.elMain.rows.style.border = `1px solid ${n}` : this.elMain.rows.style.border = "none", r += `--txc-time-scrollbar-color: ${i.chart.BorderColour}; `, r += `--txc-time-handle-color: ${i.xAxis.handle}; `, r += `--txc-time-slider-color: ${i.xAxis.slider}; `, r += `--txc-time-cursor-fore: ${i.xAxis.colourCursor}; `, r += `--txc-time-cursor-back: ${i.xAxis.colourCursorBG}; `, r += `--txc-time-icon-color: ${i.icon.colour}; `, r += `--txc-time-icon-hover-color: ${i.icon.hover}; `, this.elTime.overview.scrollBar.style.borderColor = n, this.elTime.overview.handle.style.backgroundColor = `var(--txc-time-handle-color, ${i.xAxis.handle})`, this.elTime.overview.style.setProperty("--txc-time-slider-color", i.xAxis.slider), this.elTime.overview.style.setProperty("--txc-time-icon-color", i.icon.colour), this.elTime.overview.style.setProperty("--txc-time-icon-hover-color", i.icon.hover), this.Chart instanceof Je)
      for (let [o, l] of Object.entries(this.Chart.legend.list))
        l.el.style.color = `var(--txc-legend-color, ${i.legend.colour})`, l.el.style.font = `var(--txc-legend-font, ${i.legend.font})`;
    for (let o of this.elUtils.icons)
      o.className == "icon-wrapper" && (o.children[0].style.fill = i.icon.colour);
    for (let o of this.elTools.icons)
      o.className == "icon-wrapper" && (o.children[0].style.fill = i.icon.colour);
    return r += " }", s.innerHTML = r, !0;
  }
  setScrollPos(e) {
    e = Math.round(e), P(e) && e <= 0 && e >= this.bufferPx * -1 ? this.#D = e : this.emit("Error", "setScrollPos: not a valid value");
  }
  createState(e, i, s) {
    return this.stateClass.create(this, e, i, s);
  }
  deleteState(e) {
    return this.stateClass.delete(this, e) ? (this.emit("state_deleted", e), !0) : !1;
  }
  exportState(e = this.state.key, i = {}) {
    let s = this.stateClass.export(this, e, i);
    return s ? (this.emit("state_exported", e), s) : !1;
  }
  startStream() {
    this.stream instanceof St && this.stream.start();
  }
  stopStream() {
    this.stream instanceof St && this.stream.stop();
  }
  delayedSetRange() {
    for (; this.#I; ) {
      let e = Math.floor(this.range.initialCnt * 0.5);
      this.setRange(e * -1, e), this.off(et, this.delayedSetRange, this), this.#I = !1;
    }
  }
  updateRange(e) {
    if (!E(e) || !P(e[4]) || e[4] == 0 || e[4] < 0 && this.range.isPastLimit() || e[4] > 0 && this.range.isFutureLimit()) return;
    let i, s;
    if (i = e[4], s = this.#D + i, s % this.candleW, s < this.bufferPx * -1) {
      if (!this.offsetRange(this.rangeScrollOffset * -1)) return;
      s = 0;
    } else if (s > 0) {
      if (!this.offsetRange(this.rangeScrollOffset)) return;
      s = this.bufferPx * -1;
    }
    this.#D = s, this.emit("chart_scrollUpdate", s);
  }
  offsetRange(e) {
    let i = this.range.indexStart - e, s = this.range.indexEnd - e;
    return this.range.isPastLimit(i) || this.range.isFutureLimit(s) ? !1 : (this.setRange(i, s), !0);
  }
  setRange(e = 0, i = this.rangeLimit) {
    const s = this.config?.maxCandles ? this.config.maxCandles : this.Chart?.layerWidth ? this.Chart.layerWidth : this.Chart.width;
    this.range.set(e, i, s), this.state.gaps.fillRangeGaps();
    let n = this.range.indexStartTS < this.range.timeStart ? this.range.timeStart : this.range.indexStartTS, r = this.range.indexEndTS > this.range.timeFinish ? this.range.timeFinish : this.range.indexEndTS, o = { chart: this, start: e, end: i, startTS: n, endTS: r };
    e < 0 && !this.#N ? this.emit("range_limitPast", o) : i > this.range.dataLength && !this.#N && this.emit("range_limitFuture", o);
    let l = this.state.gaps.findGapsInTimeSpan();
    if (l.length) if (o.startTS = l[0], o.endTS = l[l.length - 1], o.start = this.range.getTimeIndex(l[0]), o.end = this.range.getTimeIndex(l[l.length - 1]), I(this.state.dataSource.source.rangeLimitPast))
      this.emit("range_limitPast", o);
    else if (I(this.state.dataSource.source.rangeLimitFuture))
      this.emit("range_limitFuture", o);
    else return;
    else
      return;
  }
  jumpToIndex(e, i = !0, s = !0) {
    i && (e = B(e, 0, this.range.dataLength));
    let n = this.range.Length, r = e + n;
    s && (e -= n / 2, r -= n / 2), this.setRange(e, r);
  }
  jumpToTS(e, i = !0, s = !0) {
    let n = this.Timeline.xAxis.t2Index(e);
    this.jumpToIndex(n, i, s);
  }
  jumpToStart(e = !1) {
    this.jumpToIndex(0, !0, e);
  }
  jumpToEnd(e = !0) {
    let i = this.range.dataLength - this.range.Length;
    e && (i += Math.round(this.range.Length / 2)), this.jumpToIndex(i, !0, !1);
  }
  mergeData(e, i = !1, s = !1) {
    this.#N = !0;
    let n = this.state.mergeData(e, i, s);
    return j(n) && (this.#N = !1), n;
  }
  isOverlay(e) {
    return ui(e) && I(e.prototype?.draw) && !this.isIndicator(e) && Object.getPrototypeOf(e.prototype).constructor.isOverlay;
  }
  hasOverlay(e) {
    const i = this.overlayEntries();
    return Object.keys(i).includes(e) ? i[e] : !1;
  }
  overlayKeys() {
    return Object.keys(this.overlayEntries());
  }
  overlayEntries() {
    const e = this.optionalOverlays;
    let i = {};
    for (let s in e)
      i = { ...i, ...e[s] };
    return i;
  }
  setCustomOverlays(e) {
    if (!v(e)) return !1;
    const i = {};
    for (const [s, n] of Object.entries(e))
      v(n) && this.isOverlay(n?.class) && Object.keys(this.#L).includes(n?.location) ? (this.#L[n.location][s] = n, i[s] = !0, this.log(`Custom Overlay: ${s} - Registered`)) : (i[s] = !1, this.log(`Custom Overlay: ${s} - Rejected: Not a valid Overlay`));
    return i;
  }
  addOverlay(e, i) {
    let s;
    const n = this.findOverlayInGraph(e, i);
    if (!n) s = n;
    else {
      const { overlay: r, graph: o } = { ...n };
      s = o.addOverlay(e, r);
    }
    return s ? (this.log(`Overlay: ${e} - Added to ${i}`), !0) : (this.error(`Overlay: ${e} - Error attempting to add overlay to ${i}`), !1);
  }
  removeOverlay(e, i) {
    let s;
    const n = this.findOverlayInGraph(e, i);
    if (!n) s = n;
    else {
      const { overlay: r, graph: o } = { ...n };
      s = o.removeOverlay(e);
    }
    return s ? (this.log(`Overlay: ${e} - Removed from ${i}`), !0) : (this.error(`Overlay: ${e} - Error attempting to remove overlay from ${i}`), !1);
  }
  findGraph(e) {
    switch (e) {
      case "mainPane":
        return this.MainPane.graph;
      case "chartPane":
        return this.Chart.graph;
      case "chartScale":
        return this.Chart.scale.graph;
      case "timeLine":
        return this.Chart.time.graph;
      default:
        const i = Array.from(this.ChartPanes.keys());
        if (i.includes(e))
          return this.ChartPanes.get(e).graph;
        for (let s of i) {
          let n = this.ChartPanes.get(e).scale;
          if (n.id == e)
            return n.graph;
        }
        return !1;
    }
  }
  findOverlayInGraph(e, i) {
    if (!T(e) || !T(i)) return !1;
    const s = this.hasOverlay(e);
    if (!s) return !1;
    const n = this.findGraph(i);
    return n ? { overlay: s, graph: n } : !1;
  }
  isIndicator(e) {
    return ui(e) && I(e.prototype?.draw) && "primaryPane" in e.prototype && !!e?.isIndicator;
  }
  setIndicators(e, i = !1) {
    if (!v(e)) return !1;
    i && (console.warn("Expunging all default indicators!"), this.#P = {});
    const s = {};
    for (const [n, r] of Object.entries(e))
      T(r?.id) && T(r?.name) && T(r?.event) && this.isIndicator(r?.ind) ? (r?.public && (this.#T[n] = r), this.#P[n] = r.ind, s[n] = !0, this.log(`Custom Indicator: ${n} - Registered`)) : (s[n] = !1, this.warn(`Custom Indicator: ${n} - Rejected: Not a valid indicator`));
    return s;
  }
  addIndicator(e, i = e, s = {}) {
    return this.#M.addIndicator(e, i, s) || this.error(`Indicator: ${e} - Error failed to add indicator`), e;
  }
  getIndicator(e) {
    return this.#M.getIndicator(e);
  }
  getIndicatorsByType(e) {
    return this.#M.getIndicatorsByType(e);
  }
  removeIndicator(e) {
    return this.#M.removeIndicator(e) || this.error(`Indicator: ${e} - Error failed to remove indicator`), e;
  }
  indicatorSettings(e, i) {
    return this.#M.indicatorSettings(e, i);
  }
  hasStateIndicator(e, i = "searchAll") {
    if (!T(e) || !T(i)) return !1;
    const s = function(n, r) {
      for (let o of r)
        return o?.id == n || o?.name == n;
    };
    if (i == "searchAll") {
      for (let n of this.allData)
        if (s(e, n)) return !0;
      return !1;
    } else if (i in this.allData)
      return s(e, d);
  }
  async calcAllIndicators(e) {
    const i = [], s = (n) => new Promise((r) => setTimeout(() => {
      r(n());
    }, 0));
    for (const [n, r] of Object.entries(this.Indicators))
      for (const [o, l] of Object.entries(r))
        i.push(l.instance.calcIndicatorHistory.bind(l.instance, e));
    await Promise.all(i.map(async (n) => {
      s(n);
    })), this.refresh();
  }
  addTrade(e) {
    return this.state.addTrade(e);
  }
  removeTrade(e) {
    return this.state.removeTrade(e);
  }
  addEvent(e) {
    return this.state.addEvent(e);
  }
  removeEvent(e) {
    return this.state.removeEvent(e);
  }
  resize(e, i) {
    return !P(e) && !P(i) ? !1 : (this.setDimensions(e, i), !0);
  }
  refresh() {
    this.ready && this.#M.refresh();
  }
  toImageURL(e, i, s, n) {
    return wo(this, e, i, s, "url", n);
  }
  downloadImage(e = `${this.ID}.png`, i, s, n) {
    wo(this, e, i, s, "download", n);
  }
  notImplemented() {
    if (this.implemented)
      this.implemented.open();
    else {
      let i = {
        content: `
        This feature is not implemented yet.
      `,
        styles: {
          content: { padding: "1em" }
        }
      };
      this.implemented = this.#$.insert("Dialogue", i), this.implemented.start();
    }
  }
}
window.customElements.get("tradex-chart") || (document.head.insertAdjacentHTML("beforeend", um), document.head.insertAdjacentHTML("beforeend", dm), customElements.get("tradex-chart") || customElements.define("tradex-chart", H));
function wn(a) {
  return a instanceof H;
}
const m1 = [
  "before",
  "after",
  "around",
  "afterReturning",
  "afterThrowing"
];
class jn {
  static add(e, i) {
    return e instanceof jn ? (ui(i), new Proxy(i, {
      get: (n, r) => typeof n[r] == "function" ? jn.intercept(e, n, r) : n[r]
    })) : !1;
  }
  static intercept(e, i, s) {
    const n = (r, o, l) => {
      let c = 0, m, f = l;
      for (let C of r)
        o == C.type && (c++, m = C.transfer ? f : l, m = C.type == "afterReturning" ? C.args : m, f = C.func.apply(i, m));
      return f = c > 0 ? f : void 0, f;
    };
    return function(...r) {
      const o = `${s}`, l = e.advice[o];
      if (!l) return i[s].apply(i, r);
      try {
        let c;
        if (c = n(l, "replace", r), c !== void 0) return c;
        c = n(l, "before", r), e.transfer && c !== void 0 && (r = c);
        const m = i[s].apply(i, r);
        return e.transfer && m !== void 0 && (r = m), c = n(l, "after", r), e.transfer && c !== void 0 && (r = m), c = n(l, "around", { args: r, result: m }), n(l, "afterReturning", r), c = c === void 0 ? m : c, c;
      } catch (c) {
        throw n(l, ["afterThrowing"], c), c;
      }
    };
  }
  constructor(e, i = !0) {
    this.name = e, this.advice = {}, this.transfer = i;
  }
  before(e, i, s, n) {
    this.#e(e, i, "before", s, n);
  }
  after(e, i, s, n) {
    this.#e(e, i, "after", s, n);
  }
  around(e, i, s, n) {
    this.#e(e, i, "around", s, n);
  }
  afterReturning(e, i, s, n) {
    this.#e(e, i, "afterReturning", s, n);
  }
  afterThrowing(e, i, s, n) {
    this.#e(e, i, "afterThrowing", s, n);
  }
  #e(e, i, s, n = !0, r = []) {
    return typeof e != "string" || typeof i != "function" || !Array.isArray(r) || m1.includes(e) ? !1 : (this.advice[e] = this.advice[e] || [], this.advice[e].push({ type: s, func: i, args: r, transfer: n }), !0);
  }
}
export {
  jn as Aspect,
  H as Chart,
  xt as DEFAULT_STATE,
  f1 as DOM,
  ei as EventHub,
  V as Indicator,
  uh as IndicatorClasses,
  ee as Overlay,
  ns as Range,
  Ps as StateMachine,
  gl as TimeData,
  vs as YAXIS_PADDING,
  R as YAXIS_TYPE,
  v1 as YAXIS_TYPES,
  yi as candleW,
  Y as canvas,
  tr as copyDeep,
  K as doStructuredClone,
  Xn as isPromise,
  Ve as mergeDeep,
  bf as talibAPI,
  p1 as typeChecks,
  se as uid,
  y1 as utils
};
