!function e(t, n, r) {
	function i(a, s) {
		if (!n[a]) {
			if (!t[a]) {
				var u = "function" == typeof require && require;
				if (!s && u)
					return u(a, !0);
				if (o)
					return o(a, !0);
				var l = new Error("Cannot find module '" + a + "'");
				throw l.code = "MODULE_NOT_FOUND",
				l
			}
			var c = n[a] = {
				exports : {}

			};
			t[a][0].call(c.exports, function (e) {
				var n = t[a][1][e];
				return i(n ? n : e)
			}, c, c.exports, e, t, n, r)
		}
		return n[a].exports
	}
	for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
		i(r[a]);
	return i
}
({
	1 : [function (e, t, n) {
			!function (e, t, n) {
				"use strict";
				function r(e, t) {
					return t = t || Error,
					function () {
						var n,
						r,
						i = 2,
						o = arguments,
						a = o[0],
						s = "[" + (e ? e + ":" : "") + a + "] ",
						u = o[1];
						for (s += u.replace(/\{\d+\}/g, function (e) {
								var t = +e.slice(1, -1),
								n = t + i;
								return n < o.length ? be(o[n]) : e
							}), s += "\nhttp://errors.angularjs.org/1.5.0/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&")
							s += n + "p" + (r - i) + "=" + encodeURIComponent(be(o[r]));
						return new t(s)
					}
				}
				function i(e) {
					if (null == e || k(e))
						return !1;
					if (Wr(e) || S(e) || Ur && e instanceof Ur)
						return !0;
					var t = "length" in Object(e) && e.length;
					return E(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
				}
				function o(e, t, n) {
					var r,
					a;
					if (e)
						if (C(e))
							for (r in e)
								"prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
						else if (Wr(e) || i(e)) {
							var s = "object" != typeof e;
							for (r = 0, a = e.length; a > r; r++)
								(s || r in e) && t.call(n, e[r], r, e)
						} else if (e.forEach && e.forEach !== o)
							e.forEach(t, n, e);
						else if (x(e))
							for (r in e)
								t.call(n, e[r], r, e);
						else if ("function" == typeof e.hasOwnProperty)
							for (r in e)
								e.hasOwnProperty(r) && t.call(n, e[r], r, e);
						else
							for (r in e)
								Or.call(e, r) && t.call(n, e[r], r, e);
					return e
				}
				function a(e, t, n) {
					for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++)
						t.call(n, e[r[i]], r[i]);
					return r
				}
				function s(e) {
					return function (t, n) {
						e(n, t)
					}
				}
				function u() {
					return ++Br
				}
				function l(e, t) {
					t ? e.$$hashKey = t : delete e.$$hashKey
				}
				function c(e, t, n) {
					for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
						var a = t[i];
						if (w(a) || C(a))
							for (var s = Object.keys(a), u = 0, f = s.length; f > u; u++) {
								var h = s[u],
								p = a[h];
								n && w(p) ? A(p) ? e[h] = new Date(p.valueOf()) : _(p) ? e[h] = new RegExp(p) : p.nodeName ? e[h] = p.cloneNode(!0) : N(p) ? e[h] = p.clone() : (w(e[h]) || (e[h] = Wr(p) ? [] : {}), c(e[h], [p], !0)) : e[h] = p
							}
					}
					return l(e, r),
					e
				}
				function f(e) {
					return c(e, Rr.call(arguments, 1), !1)
				}
				function h(e) {
					return c(e, Rr.call(arguments, 1), !0)
				}
				function p(e) {
					return parseInt(e, 10)
				}
				function d(e, t) {
					return f(Object.create(e), t)
				}
				function $() {}

				function g(e) {
					return e
				}
				function v(e) {
					return function () {
						return e
					}
				}
				function m(e) {
					return C(e.toString) && e.toString !== qr
				}
				function y(e) {
					return "undefined" == typeof e
				}
				function b(e) {
					return "undefined" != typeof e
				}
				function w(e) {
					return null !== e && "object" == typeof e
				}
				function x(e) {
					return null !== e && "object" == typeof e && !zr(e)
				}
				function S(e) {
					return "string" == typeof e
				}
				function E(e) {
					return "number" == typeof e
				}
				function A(e) {
					return "[object Date]" === qr.call(e)
				}
				function C(e) {
					return "function" == typeof e
				}
				function _(e) {
					return "[object RegExp]" === qr.call(e)
				}
				function k(e) {
					return e && e.window === e
				}
				function O(e) {
					return e && e.$evalAsync && e.$watch
				}
				function M(e) {
					return "[object File]" === qr.call(e)
				}
				function T(e) {
					return "[object FormData]" === qr.call(e)
				}
				function P(e) {
					return "[object Blob]" === qr.call(e)
				}
				function D(e) {
					return "boolean" == typeof e
				}
				function j(e) {
					return e && C(e.then)
				}
				function U(e) {
					return e && E(e.length) && Gr.test(qr.call(e))
				}
				function F(e) {
					return "[object ArrayBuffer]" === qr.call(e)
				}
				function N(e) {
					return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
				}
				function R(e) {
					var t,
					n = {},
					r = e.split(",");
					for (t = 0; t < r.length; t++)
						n[r[t]] = !0;
					return n
				}
				function V(e) {
					return Mr(e.nodeName || e[0] && e[0].nodeName)
				}
				function I(e, t) {
					var n = e.indexOf(t);
					return n >= 0 && e.splice(n, 1),
					n
				}
				function q(e, t) {
					function r(e, t) {
						var n,
						r = t.$$hashKey;
						if (Wr(e))
							for (var o = 0, a = e.length; a > o; o++)
								t.push(i(e[o]));
						else if (x(e))
							for (n in e)
								t[n] = i(e[n]);
						else if (e && "function" == typeof e.hasOwnProperty)
							for (n in e)
								e.hasOwnProperty(n) && (t[n] = i(e[n]));
						else
							for (n in e)
								Or.call(e, n) && (t[n] = i(e[n]));
						return l(t, r),
						t
					}
					function i(e) {
						if (!w(e))
							return e;
						var t = s.indexOf(e);
						if (-1 !== t)
							return u[t];
						if (k(e) || O(e))
							throw Lr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
						var i = !1,
						o = a(e);
						return o === n && (o = Wr(e) ? [] : Object.create(zr(e)), i = !0),
						s.push(e),
						u.push(o),
						i ? r(e, o) : o
					}
					function a(e) {
						switch (qr.call(e)) {
						case "[object Int8Array]":
						case "[object Int16Array]":
						case "[object Int32Array]":
						case "[object Float32Array]":
						case "[object Float64Array]":
						case "[object Uint8Array]":
						case "[object Uint8ClampedArray]":
						case "[object Uint16Array]":
						case "[object Uint32Array]":
							return new e.constructor(i(e.buffer));
						case "[object ArrayBuffer]":
							if (!e.slice) {
								var t = new ArrayBuffer(e.byteLength);
								return new Uint8Array(t).set(new Uint8Array(e)),
								t
							}
							return e.slice(0);
						case "[object Boolean]":
						case "[object Number]":
						case "[object String]":
						case "[object Date]":
							return new e.constructor(e.valueOf());
						case "[object RegExp]":
							var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
							return n.lastIndex = e.lastIndex,
							n
						}
						return C(e.cloneNode) ? e.cloneNode(!0) : void 0
					}
					var s = [],
					u = [];
					if (t) {
						if (U(t) || F(t))
							throw Lr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
						if (e === t)
							throw Lr("cpi", "Can't copy! Source and destination are identical.");
						return Wr(t) ? t.length = 0 : o(t, function (e, n) {
								"$$hashKey" !== n && delete t[n]
							}),
						s.push(e),
						u.push(t),
						r(e, t)
					}
					return i(e)
				}
				function z(e, t) {
					if (Wr(e)) {
						t = t || [];
						for (var n = 0, r = e.length; r > n; n++)
							t[n] = e[n]
					} else if (w(e)) {
						t = t || {};
						for (var i in e)
							"$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i])
					}
					return t || e
				}
				function L(e, t) {
					if (e === t)
						return !0;
					if (null === e || null === t)
						return !1;
					if (e !== e && t !== t)
						return !0;
					var n,
					r,
					i,
					o = typeof e,
					a = typeof t;
					if (o == a && "object" == o) {
						if (!Wr(e)) {
							if (A(e))
								return A(t) ? L(e.getTime(), t.getTime()) : !1;
							if (_(e))
								return _(t) ? e.toString() == t.toString() : !1;
							if (O(e) || O(t) || k(e) || k(t) || Wr(t) || A(t) || _(t))
								return !1;
							i = ve();
							for (r in e)
								if ("$" !== r.charAt(0) && !C(e[r])) {
									if (!L(e[r], t[r]))
										return !1;
									i[r] = !0
								}
							for (r in t)
								if (!(r in i) && "$" !== r.charAt(0) && b(t[r]) && !C(t[r]))
									return !1;
							return !0
						}
						if (!Wr(t))
							return !1;
						if ((n = e.length) == t.length) {
							for (r = 0; n > r; r++)
								if (!L(e[r], t[r]))
									return !1;
							return !0
						}
					}
					return !1
				}
				function H(e, t, n) {
					return e.concat(Rr.call(t, n))
				}
				function B(e, t) {
					return Rr.call(e, t || 0)
				}
				function W(e, t) {
					var n = arguments.length > 2 ? B(arguments, 2) : [];
					return !C(t) || t instanceof RegExp ? t : n.length ? function () {
						return arguments.length ? t.apply(e, H(n, arguments, 0)) : t.apply(e, n)
					}
					 : function () {
						return arguments.length ? t.apply(e, arguments) : t.call(e)
					}
				}
				function G(e, r) {
					var i = r;
					return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : k(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : O(r) && (i = "$SCOPE"),
					i
				}
				function X(e, t) {
					return y(e) ? n : (E(t) || (t = t ? 2 : null), JSON.stringify(e, G, t))
				}
				function K(e) {
					return S(e) ? JSON.parse(e) : e
				}
				function Y(e, t) {
					e = e.replace(Zr, "");
					var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
					return isNaN(n) ? t : n
				}
				function J(e, t) {
					return e = new Date(e.getTime()),
					e.setMinutes(e.getMinutes() + t),
					e
				}
				function Z(e, t, n) {
					n = n ? -1 : 1;
					var r = e.getTimezoneOffset(),
					i = Y(t, r);
					return J(e, n * (i - r))
				}
				function Q(e) {
					e = Ur(e).clone();
					try {
						e.empty()
					} catch (t) {}

					var n = Ur("<div>").append(e).html();
					try {
						return e[0].nodeType === ii ? Mr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
							return "<" + Mr(t)
						})
					} catch (t) {
						return Mr(n)
					}
				}
				function ee(e) {
					try {
						return decodeURIComponent(e)
					} catch (t) {}

				}
				function te(e) {
					var t = {};
					return o((e || "").split("&"), function (e) {
						var n,
						r,
						i;
						e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = ee(r), b(r) && (i = b(i) ? ee(i) : !0, Or.call(t, r) ? Wr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
					}),
					t
				}
				function ne(e) {
					var t = [];
					return o(e, function (e, n) {
						Wr(e) ? o(e, function (e) {
							t.push(ie(n, !0) + (e === !0 ? "" : "=" + ie(e, !0)))
						}) : t.push(ie(n, !0) + (e === !0 ? "" : "=" + ie(e, !0)))
					}),
					t.length ? t.join("&") : ""
				}
				function re(e) {
					return ie(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
				}
				function ie(e, t) {
					return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
				}
				function oe(e, t) {
					var n,
					r,
					i = Qr.length;
					for (r = 0; i > r; ++r)
						if (n = Qr[r] + t, S(n = e.getAttribute(n)))
							return n;
					return null
				}
				function ae(e, t) {
					var n,
					r,
					i = {};
					o(Qr, function (t) {
						var i = t + "app";
						!n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
					}),
					o(Qr, function (t) {
						var i,
						o = t + "app";
						!n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
					}),
					n && (i.strictDi = null !== oe(n, "strict-di"), t(n, r ? [r] : [], i))
				}
				function se(n, r, i) {
					w(i) || (i = {});
					var a = {
						strictDi : !1
					};
					i = f(a, i);
					var s = function () {
						if (n = Ur(n), n.injector()) {
							var e = n[0] === t ? "document" : Q(n);
							throw Lr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
						}
						r = r || [],
						r.unshift(["$provide", function (e) {
									e.value("$rootElement", n)
								}
							]),
						i.debugInfoEnabled && r.push(["$compileProvider", function (e) {
									e.debugInfoEnabled(!0)
								}
							]),
						r.unshift("ng");
						var o = it(r, i.strictDi);
						return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, r) {
									e.$apply(function () {
										t.data("$injector", r),
										n(t)(e)
									})
								}
							]),
						o
					},
					u = /^NG_ENABLE_DEBUG_INFO!/,
					l = /^NG_DEFER_BOOTSTRAP!/;
					return e && u.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(u, "")),
					e && !l.test(e.name) ? s() : (e.name = e.name.replace(l, ""), Hr.resumeBootstrap = function (e) {
						return o(e, function (e) {
							r.push(e)
						}),
						s()
					}, void(C(Hr.resumeDeferredBootstrap) && Hr.resumeDeferredBootstrap()))
				}
				function ue() {
					e.name = "NG_ENABLE_DEBUG_INFO!" + e.name,
					e.location.reload()
				}
				function le(e) {
					var t = Hr.element(e).injector();
					if (!t)
						throw Lr("test", "no injector found for element argument to getTestability");
					return t.get("$$testability")
				}
				function ce(e, t) {
					return t = t || "_",
					e.replace(ei, function (e, n) {
						return (n ? t : "") + e.toLowerCase()
					})
				}
				function fe() {
					var t;
					if (!ti) {
						var r = Jr();
						Fr = y(r) ? e.jQuery : r ? e[r] : n,
						Fr && Fr.fn.on ? (Ur = Fr, f(Fr.fn, {
								scope : Si.scope,
								isolateScope : Si.isolateScope,
								controller : Si.controller,
								injector : Si.injector,
								inheritedData : Si.inheritedData
							}), t = Fr.cleanData, Fr.cleanData = function (e) {
							for (var n, r, i = 0; null != (r = e[i]); i++)
								n = Fr._data(r, "events"), n && n.$destroy && Fr(r).triggerHandler("$destroy");
							t(e)
						}) : Ur = Te,
						Hr.element = Ur,
						ti = !0
					}
				}
				function he(e, t, n) {
					if (!e)
						throw Lr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
					return e
				}
				function pe(e, t, n) {
					return n && Wr(e) && (e = e[e.length - 1]),
					he(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)),
					e
				}
				function de(e, t) {
					if ("hasOwnProperty" === e)
						throw Lr("badname", "hasOwnProperty is not a valid {0} name", t)
				}
				function $e(e, t, n) {
					if (!t)
						return e;
					for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++)
						r = i[s], e && (e = (o = e)[r]);
					return !n && C(e) ? W(o, e) : e
				}
				function ge(e) {
					for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)
						(t || e[i] !== n) && (t || (t = Ur(Rr.call(e, 0, i))), t.push(n));
					return t || e
				}
				function ve() {
					return Object.create(null)
				}
				function me(e) {
					function t(e, t, n) {
						return e[t] || (e[t] = n())
					}
					var n = r("$injector"),
					i = r("ng"),
					o = t(e, "angular", Object);
					return o.$$minErr = o.$$minErr || r,
					t(o, "module", function () {
						var e = {};
						return function (r, o, a) {
							var s = function (e, t) {
								if ("hasOwnProperty" === e)
									throw i("badname", "hasOwnProperty is not a valid {0} name", t)
							};
							return s(r, "module"),
							o && e.hasOwnProperty(r) && (e[r] = null),
							t(e, r, function () {
								function e(e, t, n, r) {
									return r || (r = i),
									function () {
										return r[n || "push"]([e, t, arguments]),
										c
									}
								}
								function t(e, t) {
									return function (n, o) {
										return o && C(o) && (o.$$moduleName = r),
										i.push([e, t, arguments]),
										c
									}
								}
								if (!o)
									throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
								var i = [],
								s = [],
								u = [],
								l = e("$injector", "invoke", "push", s),
								c = {
									_invokeQueue : i,
									_configBlocks : s,
									_runBlocks : u,
									requires : o,
									name : r,
									provider : t("$provide", "provider"),
									factory : t("$provide", "factory"),
									service : t("$provide", "service"),
									value : e("$provide", "value"),
									constant : e("$provide", "constant", "unshift"),
									decorator : t("$provide", "decorator"),
									animation : t("$animateProvider", "register"),
									filter : t("$filterProvider", "register"),
									controller : t("$controllerProvider", "register"),
									directive : t("$compileProvider", "directive"),
									component : t("$compileProvider", "component"),
									config : l,
									run : function (e) {
										return u.push(e),
										this
									}
								};
								return a && l(a),
								c
							})
						}
					})
				}
				function ye(e) {
					var t = [];
					return JSON.stringify(e, function (e, n) {
						if (n = G(e, n), w(n)) {
							if (t.indexOf(n) >= 0)
								return "...";
							t.push(n)
						}
						return n
					})
				}
				function be(e) {
					return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : y(e) ? "undefined" : "string" != typeof e ? ye(e) : e
				}
				function we(t) {
					f(t, {
						bootstrap : se,
						copy : q,
						extend : f,
						merge : h,
						equals : L,
						element : Ur,
						forEach : o,
						injector : it,
						noop : $,
						bind : W,
						toJson : X,
						fromJson : K,
						identity : g,
						isUndefined : y,
						isDefined : b,
						isString : S,
						isFunction : C,
						isObject : w,
						isNumber : E,
						isElement : N,
						isArray : Wr,
						version : ui,
						isDate : A,
						lowercase : Mr,
						uppercase : Tr,
						callbacks : {
							counter : 0
						},
						getTestability : le,
						$$minErr : r,
						$$csp : Yr,
						reloadWithDebugInfo : ue
					}),
					(Nr = me(e))("ng", ["ngLocale"], ["$provide", function (e) {
								e.provider({
									$$sanitizeUri : Sn
								}),
								e.provider("$compile", dt).directive({
									a : Oo,
									input : Wo,
									textarea : Wo,
									form : jo,
									script : qa,
									select : Ha,
									style : Wa,
									option : Ba,
									ngBind : Ko,
									ngBindHtml : Jo,
									ngBindTemplate : Yo,
									ngClass : Qo,
									ngClassEven : ta,
									ngClassOdd : ea,
									ngCloak : na,
									ngController : ra,
									ngForm : Uo,
									ngHide : ja,
									ngIf : aa,
									ngInclude : sa,
									ngInit : la,
									ngNonBindable : Aa,
									ngPluralize : Oa,
									ngRepeat : Ma,
									ngShow : Da,
									ngStyle : Ua,
									ngSwitch : Fa,
									ngSwitchWhen : Na,
									ngSwitchDefault : Ra,
									ngOptions : ka,
									ngTransclude : Ia,
									ngModel : xa,
									ngList : ca,
									ngChange : Zo,
									pattern : Xa,
									ngPattern : Xa,
									required : Ga,
									ngRequired : Ga,
									minlength : Ya,
									ngMinlength : Ya,
									maxlength : Ka,
									ngMaxlength : Ka,
									ngValue : Xo,
									ngModelOptions : Ea
								}).directive({
									ngInclude : ua
								}).directive(Mo).directive(ia),
								e.provider({
									$anchorScroll : ot,
									$animate : Vi,
									$animateCss : zi,
									$$animateJs : Ni,
									$$animateQueue : Ri,
									$$AnimateRunner : qi,
									$$animateAsyncRun : Ii,
									$browser : ft,
									$cacheFactory : ht,
									$controller : yt,
									$document : bt,
									$exceptionHandler : wt,
									$filter : Nn,
									$$forceReflow : Gi,
									$interpolate : Ut,
									$interval : Ft,
									$http : Tt,
									$httpParamSerializer : St,
									$httpParamSerializerJQLike : Et,
									$httpBackend : Dt,
									$xhrFactory : Pt,
									$location : Yt,
									$log : Jt,
									$parse : vn,
									$rootScope : xn,
									$q : mn,
									$$q : yn,
									$sce : _n,
									$sceDelegate : Cn,
									$sniffer : kn,
									$templateCache : pt,
									$templateRequest : On,
									$$testability : Mn,
									$timeout : Tn,
									$window : jn,
									$$rAF : wn,
									$$jqLite : Ze,
									$$HashMap : _i,
									$$cookieReader : Fn
								})
							}
						])
				}
				function xe() {
					return ++ci
				}
				function Se(e) {
					return e.replace(pi, function (e, t, n, r) {
						return r ? n.toUpperCase() : n
					}).replace(di, "Moz$1")
				}
				function Ee(e) {
					return !mi.test(e)
				}
				function Ae(e) {
					var t = e.nodeType;
					return t === ni || !t || t === ai
				}
				function Ce(e) {
					for (var t in li[e.ng339])
						return !0;
					return !1
				}
				function _e(e) {
					for (var t = 0, n = e.length; n > t; t++)
						Ue(e[t])
				}
				function ke(e, t) {
					var n,
					r,
					i,
					a,
					s = t.createDocumentFragment(),
					u = [];
					if (Ee(e))
						u.push(t.createTextNode(e));
					else {
						for (n = n || s.appendChild(t.createElement("div")), r = (yi.exec(e) || ["", ""])[1].toLowerCase(), i = wi[r] || wi._default, n.innerHTML = i[1] + e.replace(bi, "<$1></$2>") + i[2], a = i[0]; a--; )
							n = n.lastChild;
						u = H(u, n.childNodes),
						n = s.firstChild,
						n.textContent = ""
					}
					return s.textContent = "",
					s.innerHTML = "",
					o(u, function (e) {
						s.appendChild(e)
					}),
					s
				}
				function Oe(e, n) {
					n = n || t;
					var r;
					return (r = vi.exec(e)) ? [n.createElement(r[1])] : (r = ke(e, n)) ? r.childNodes : []
				}
				function Me(e, t) {
					var n = e.parentNode;
					n && n.replaceChild(t, e),
					t.appendChild(e)
				}
				function Te(e) {
					if (e instanceof Te)
						return e;
					var t;
					if (S(e) && (e = Xr(e), t = !0), !(this instanceof Te)) {
						if (t && "<" != e.charAt(0))
							throw gi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
						return new Te(e)
					}
					t ? qe(this, Oe(e)) : qe(this, e)
				}
				function Pe(e) {
					return e.cloneNode(!0)
				}
				function De(e, t) {
					if (t || Ue(e), e.querySelectorAll)
						for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)
							Ue(n[r])
				}
				function je(e, t, n, r) {
					if (b(r))
						throw gi("offargs", "jqLite#off() does not support the `selector` argument");
					var i = Fe(e),
					a = i && i.events,
					s = i && i.handle;
					if (s)
						if (t) {
							var u = function (t) {
								var r = a[t];
								b(n) && I(r || [], n),
								b(n) && r && r.length > 0 || (hi(e, t, s), delete a[t])
							};
							o(t.split(" "), function (e) {
								u(e),
								$i[e] && u($i[e])
							})
						} else
							for (t in a)
								"$destroy" !== t && hi(e, t, s), delete a[t]
				}
				function Ue(e, t) {
					var r = e.ng339,
					i = r && li[r];
					if (i) {
						if (t)
							return void delete i.data[t];
						i.handle && (i.events.$destroy && i.handle({}, "$destroy"), je(e)),
						delete li[r],
						e.ng339 = n
					}
				}
				function Fe(e, t) {
					var r = e.ng339,
					i = r && li[r];
					return t && !i && (e.ng339 = r = xe(), i = li[r] = {
							events : {},
							data : {},
							handle : n
						}),
					i
				}
				function Ne(e, t, n) {
					if (Ae(e)) {
						var r = b(n),
						i = !r && t && !w(t),
						o = !t,
						a = Fe(e, !i),
						s = a && a.data;
						if (r)
							s[t] = n;
						else {
							if (o)
								return s;
							if (i)
								return s && s[t];
							f(s, t)
						}
					}
				}
				function Re(e, t) {
					return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
				}
				function Ve(e, t) {
					t && e.setAttribute && o(t.split(" "), function (t) {
						e.setAttribute("class", Xr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Xr(t) + " ", " ")))
					})
				}
				function Ie(e, t) {
					if (t && e.setAttribute) {
						var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
						o(t.split(" "), function (e) {
							e = Xr(e),
							-1 === n.indexOf(" " + e + " ") && (n += e + " ")
						}),
						e.setAttribute("class", Xr(n))
					}
				}
				function qe(e, t) {
					if (t)
						if (t.nodeType)
							e[e.length++] = t;
						else {
							var n = t.length;
							if ("number" == typeof n && t.window !== t) {
								if (n)
									for (var r = 0; n > r; r++)
										e[e.length++] = t[r]
							} else
								e[e.length++] = t
						}
				}
				function ze(e, t) {
					return Le(e, "$" + (t || "ngController") + "Controller")
				}
				function Le(e, t, n) {
					e.nodeType == ai && (e = e.documentElement);
					for (var r = Wr(t) ? t : [t]; e; ) {
						for (var i = 0, o = r.length; o > i; i++)
							if (b(n = Ur.data(e, r[i])))
								return n;
						e = e.parentNode || e.nodeType === si && e.host
					}
				}
				function He(e) {
					for (De(e, !0); e.firstChild; )
						e.removeChild(e.firstChild)
				}
				function Be(e, t) {
					t || De(e);
					var n = e.parentNode;
					n && n.removeChild(e)
				}
				function We(t, n) {
					n = n || e,
					"complete" === n.document.readyState ? n.setTimeout(t) : Ur(n).on("load", t)
				}
				function Ge(e, t) {
					var n = Ei[t.toLowerCase()];
					return n && Ai[V(e)] && n
				}
				function Xe(e) {
					return Ci[e]
				}
				function Ke(e, t) {
					var n = function (n, r) {
						n.isDefaultPrevented = function () {
							return n.defaultPrevented
						};
						var i = t[r || n.type],
						o = i ? i.length : 0;
						if (o) {
							if (y(n.immediatePropagationStopped)) {
								var a = n.stopImmediatePropagation;
								n.stopImmediatePropagation = function () {
									n.immediatePropagationStopped = !0,
									n.stopPropagation && n.stopPropagation(),
									a && a.call(n)
								}
							}
							n.isImmediatePropagationStopped = function () {
								return n.immediatePropagationStopped === !0
							};
							var s = i.specialHandlerWrapper || Ye;
							o > 1 && (i = z(i));
							for (var u = 0; o > u; u++)
								n.isImmediatePropagationStopped() || s(e, n, i[u])
						}
					};
					return n.elem = e,
					n
				}
				function Ye(e, t, n) {
					n.call(e, t)
				}
				function Je(e, t, n) {
					var r = t.relatedTarget;
					r && (r === e || xi.call(e, r)) || n.call(e, t)
				}
				function Ze() {
					this.$get = function () {
						return f(Te, {
							hasClass : function (e, t) {
								return e.attr && (e = e[0]),
								Re(e, t)
							},
							addClass : function (e, t) {
								return e.attr && (e = e[0]),
								Ie(e, t)
							},
							removeClass : function (e, t) {
								return e.attr && (e = e[0]),
								Ve(e, t)
							}
						})
					}
				}
				function Qe(e, t) {
					var n = e && e.$$hashKey;
					if (n)
						return "function" == typeof n && (n = e.$$hashKey()), n;
					var r = typeof e;
					return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || u)() : r + ":" + e
				}
				function et(e, t) {
					if (t) {
						var n = 0;
						this.nextUid = function () {
							return ++n
						}
					}
					o(e, this.put, this)
				}
				function tt(e) {
					var t = e.toString().replace(Pi, ""),
					n = t.match(ki) || t.match(Oi);
					return n
				}
				function nt(e) {
					var t = tt(e);
					return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
				}
				function rt(e, t, n) {
					var r,
					i,
					a;
					if ("function" == typeof e) {
						if (!(r = e.$inject)) {
							if (r = [], e.length) {
								if (t)
									throw S(n) && n || (n = e.name || nt(e)), Di("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
								i = tt(e),
								o(i[1].split(Mi), function (e) {
									e.replace(Ti, function (e, t, n) {
										r.push(n)
									})
								})
							}
							e.$inject = r
						}
					} else
						Wr(e) ? (a = e.length - 1, pe(e[a], "fn"), r = e.slice(0, a)) : pe(e, "fn", !0);
					return r
				}
				function it(e, t) {
					function r(e) {
						return function (t, n) {
							return w(t) ? void o(t, s(e)) : e(t, n)
						}
					}
					function i(e, t) {
						if (de(e, "service"), (C(t) || Wr(t)) && (t = E.instantiate(t)), !t.$get)
							throw Di("pget", "Provider '{0}' must define $get factory method.", e);
						return x[e + g] = t
					}
					function a(e, t) {
						return function () {
							var n = k.invoke(t, this);
							if (y(n))
								throw Di("undef", "Provider '{0}' must return a value from $get factory method.", e);
							return n
						}
					}
					function u(e, t, n) {
						return i(e, {
							$get : n !== !1 ? a(e, t) : t
						})
					}
					function l(e, t) {
						return u(e, ["$injector", function (e) {
									return e.instantiate(t)
								}
							])
					}
					function c(e, t) {
						return u(e, v(t), !1)
					}
					function f(e, t) {
						de(e, "constant"),
						x[e] = t,
						A[e] = t
					}
					function h(e, t) {
						var n = E.get(e + g),
						r = n.$get;
						n.$get = function () {
							var e = k.invoke(r, n);
							return k.invoke(t, null, {
								$delegate : e
							})
						}
					}
					function p(e) {
						he(y(e) || Wr(e), "modulesToLoad", "not an array");
						var t,
						n = [];
						return o(e, function (e) {
							function r(e) {
								var t,
								n;
								for (t = 0, n = e.length; n > t; t++) {
									var r = e[t],
									i = E.get(r[0]);
									i[r[1]].apply(i, r[2])
								}
							}
							if (!b.get(e)) {
								b.put(e, !0);
								try {
									S(e) ? (t = Nr(e), n = n.concat(p(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : C(e) ? n.push(E.invoke(e)) : Wr(e) ? n.push(E.invoke(e)) : pe(e, "module")
								} catch (i) {
									throw Wr(e) && (e = e[e.length - 1]),
									i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack),
									Di("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
								}
							}
						}),
						n
					}
					function d(e, n) {
						function r(t, r) {
							if (e.hasOwnProperty(t)) {
								if (e[t] === $)
									throw Di("cdep", "Circular dependency found: {0}", t + " <- " + m.join(" <- "));
								return e[t]
							}
							try {
								return m.unshift(t),
								e[t] = $,
								e[t] = n(t, r)
							} catch (i) {
								throw e[t] === $ && delete e[t],
								i
							}
							finally {
								m.shift()
							}
						}
						function i(e, n, i) {
							for (var o = [], a = it.$$annotate(e, t, i), s = 0, u = a.length; u > s; s++) {
								var l = a[s];
								if ("string" != typeof l)
									throw Di("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
								o.push(n && n.hasOwnProperty(l) ? n[l] : r(l, i))
							}
							return o
						}
						function o(e) {
							return 11 >= jr ? !1 : "function" == typeof e && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(e))
						}
						function a(e, t, n, r) {
							"string" == typeof n && (r = n, n = null);
							var a = i(e, n, r);
							return Wr(e) && (e = e[e.length - 1]),
							o(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
						}
						function s(e, t, n) {
							var r = Wr(e) ? e[e.length - 1] : e,
							o = i(e, t, n);
							return o.unshift(null),
							new(Function.prototype.bind.apply(r, o))
						}
						return {
							invoke : a,
							instantiate : s,
							get : r,
							annotate : it.$$annotate,
							has : function (t) {
								return x.hasOwnProperty(t + g) || e.hasOwnProperty(t)
							}
						}
					}
					t = t === !0;
					var $ = {},
					g = "Provider",
					m = [],
					b = new et([], !0),
					x = {
						$provide : {
							provider : r(i),
							factory : r(u),
							service : r(l),
							value : r(c),
							constant : r(f),
							decorator : h
						}
					},
					E = x.$injector = d(x, function (e, t) {
							throw Hr.isString(t) && m.push(t),
							Di("unpr", "Unknown provider: {0}", m.join(" <- "))
						}),
					A = {},
					_ = d(A, function (e, t) {
							var r = E.get(e + g, t);
							return k.invoke(r.$get, r, n, e)
						}),
					k = _;
					x["$injector" + g] = {
						$get : v(_)
					};
					var O = p(e);
					return k = _.get("$injector"),
					k.strictDi = t,
					o(O, function (e) {
						e && k.invoke(e)
					}),
					k
				}
				function ot() {
					var e = !0;
					this.disableAutoScrolling = function () {
						e = !1
					},
					this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
							function i(e) {
								var t = null;
								return Array.prototype.some.call(e, function (e) {
									return "a" === V(e) ? (t = e, !0) : void 0
								}),
								t
							}
							function o() {
								var e = s.yOffset;
								if (C(e))
									e = e();
								else if (N(e)) {
									var n = e[0],
									r = t.getComputedStyle(n);
									e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
								} else
									E(e) || (e = 0);
								return e
							}
							function a(e) {
								if (e) {
									e.scrollIntoView();
									var n = o();
									if (n) {
										var r = e.getBoundingClientRect().top;
										t.scrollBy(0, r - n)
									}
								} else
									t.scrollTo(0, 0)
							}
							function s(e) {
								e = S(e) ? e : n.hash();
								var t;
								e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
							}
							var u = t.document;
							return e && r.$watch(function () {
								return n.hash()
							}, function (e, t) {
								e === t && "" === e || We(function () {
									r.$evalAsync(s)
								})
							}),
							s
						}
					]
				}
				function at(e, t) {
					return e || t ? e ? t ? (Wr(e) && (e = e.join(" ")), Wr(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
				}
				function st(e) {
					for (var t = 0; t < e.length; t++) {
						var n = e[t];
						if (n.nodeType === Ui)
							return n
					}
				}
				function ut(e) {
					S(e) && (e = e.split(" "));
					var t = ve();
					return o(e, function (e) {
						e.length && (t[e] = !0)
					}),
					t
				}
				function lt(e) {
					return w(e) ? e : {}

				}
				function ct(e, t, n, r) {
					function i(e) {
						try {
							e.apply(null, B(arguments, 1))
						}
						finally {
							if (m--, 0 === m)
								for (; b.length; )
									try {
										b.pop()()
									} catch (t) {
										n.error(t)
									}
						}
					}
					function a(e) {
						var t = e.indexOf("#");
						return -1 === t ? "" : e.substr(t)
					}
					function s() {
						A = null,
						l(),
						c()
					}
					function u() {
						try {
							return p.state
						} catch (e) {}

					}
					function l() {
						w = u(),
						w = y(w) ? null : w,
						L(w, k) && (w = k),
						k = w
					}
					function c() {
						S === f.url() && x === w || (S = f.url(), x = w, o(C, function (e) {
								e(f.url(), w)
							}))
					}
					var f = this,
					h = (t[0], e.location),
					p = e.history,
					d = e.setTimeout,
					g = e.clearTimeout,
					v = {};
					f.isMock = !1;
					var m = 0,
					b = [];
					f.$$completeOutstandingRequest = i,
					f.$$incOutstandingRequestCount = function () {
						m++
					},
					f.notifyWhenNoOutstandingRequests = function (e) {
						0 === m ? e() : b.push(e)
					};
					var w,
					x,
					S = h.href,
					E = t.find("base"),
					A = null;
					l(),
					x = w,
					f.url = function (t, n, i) {
						if (y(i) && (i = null), h !== e.location && (h = e.location), p !== e.history && (p = e.history), t) {
							var o = x === i;
							if (S === t && (!r.history || o))
								return f;
							var s = S && qt(S) === qt(t);
							return S = t,
							x = i,
							!r.history || s && o ? (s && !A || (A = t), n ? h.replace(t) : s ? h.hash = a(t) : h.href = t, h.href !== t && (A = t)) : (p[n ? "replaceState" : "pushState"](i, "", t), l(), x = w),
							f
						}
						return A || h.href.replace(/%27/g, "'")
					},
					f.state = function () {
						return w
					};
					var C = [],
					_ = !1,
					k = null;
					f.onUrlChange = function (t) {
						return _ || (r.history && Ur(e).on("popstate", s), Ur(e).on("hashchange", s), _ = !0),
						C.push(t),
						t
					},
					f.$$applicationDestroyed = function () {
						Ur(e).off("hashchange popstate", s)
					},
					f.$$checkUrlChange = c,
					f.baseHref = function () {
						var e = E.attr("href");
						return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
					},
					f.defer = function (e, t) {
						var n;
						return m++,
						n = d(function () {
								delete v[n],
								i(e)
							}, t || 0),
						v[n] = !0,
						n
					},
					f.defer.cancel = function (e) {
						return v[e] ? (delete v[e], g(e), i($), !0) : !1
					}
				}
				function ft() {
					this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
							return new ct(e, r, t, n)
						}
					]
				}
				function ht() {
					this.$get = function () {
						function e(e, n) {
							function i(e) {
								e != h && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, h), h = e, h.n = null)
							}
							function o(e, t) {
								e != t && (e && (e.p = t), t && (t.n = e))
							}
							if (e in t)
								throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
							var a = 0,
							s = f({}, n, {
									id : e
								}),
							u = ve(),
							l = n && n.capacity || Number.MAX_VALUE,
							c = ve(),
							h = null,
							p = null;
							return t[e] = {
								put : function (e, t) {
									if (!y(t)) {
										if (l < Number.MAX_VALUE) {
											var n = c[e] || (c[e] = {
														key : e
													});
											i(n)
										}
										return e in u || a++,
										u[e] = t,
										a > l && this.remove(p.key),
										t
									}
								},
								get : function (e) {
									if (l < Number.MAX_VALUE) {
										var t = c[e];
										if (!t)
											return;
										i(t)
									}
									return u[e]
								},
								remove : function (e) {
									if (l < Number.MAX_VALUE) {
										var t = c[e];
										if (!t)
											return;
										t == h && (h = t.p),
										t == p && (p = t.n),
										o(t.n, t.p),
										delete c[e]
									}
									e in u && (delete u[e], a--)
								},
								removeAll : function () {
									u = ve(),
									a = 0,
									c = ve(),
									h = p = null
								},
								destroy : function () {
									u = null,
									s = null,
									c = null,
									delete t[e]
								},
								info : function () {
									return f({}, s, {
										size : a
									})
								}
							}
						}
						var t = {};
						return e.info = function () {
							var e = {};
							return o(t, function (t, n) {
								e[n] = t.info()
							}),
							e
						},
						e.get = function (e) {
							return t[e]
						},
						e
					}
				}
				function pt() {
					this.$get = ["$cacheFactory", function (e) {
							return e("templates")
						}
					]
				}
				function dt(e, r) {
					function i(e, t, n) {
						var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
						i = {};
						return o(e, function (e, o) {
							var a = e.match(r);
							if (!a)
								throw Li("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
							i[o] = {
								mode : a[1][0],
								collection : "*" === a[2],
								optional : "?" === a[3],
								attrName : a[4] || o
							}
						}),
						i
					}
					function a(e, t) {
						var n = {
							isolateScope : null,
							bindToController : null
						};
						if (w(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), w(n.bindToController)) {
							var r = e.controller,
							o = e.controllerAs;
							if (!r)
								throw Li("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
							if (!mt(r, o))
								throw Li("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
						}
						return n
					}
					function u(e) {
						var t = e.charAt(0);
						if (!t || t !== Mr(t))
							throw Li("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
						if (e !== e.trim())
							throw Li("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
					}
					var l = {},
					c = "Directive",
					h = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
					p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
					m = R("ngSrc,ngSrcset,src,srcset"),
					x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
					E = /^(on[a-z]+|formaction)$/;
					this.directive = function _(t, n) {
						return de(t, "directive"),
						S(t) ? (u(t), he(n, "directiveFactory"), l.hasOwnProperty(t) || (l[t] = [], e.factory(t + c, ["$injector", "$exceptionHandler", function (e, n) {
											var r = [];
											return o(l[t], function (i, o) {
												try {
													var s = e.invoke(i);
													C(s) ? s = {
														compile : v(s)
													}
													 : !s.compile && s.link && (s.compile = v(s.link)),
													s.priority = s.priority || 0,
													s.index = o,
													s.name = s.name || t,
													s.require = s.require || s.controller && s.name,
													s.restrict = s.restrict || "EA";
													var u = s.$$bindings = a(s, s.name);
													w(u.isolateScope) && (s.$$isolateBindings = u.isolateScope),
													s.$$moduleName = i.$$moduleName,
													r.push(s)
												} catch (l) {
													n(l)
												}
											}),
											r
										}
									])), l[t].push(n)) : o(t, s(_)),
						this
					},
					this.component = function (e, t) {
						function n(e) {
							function n(t) {
								return C(t) || Wr(t) ? function (n, r) {
									return e.invoke(t, this, {
										$element : n,
										$attrs : r
									})
								}
								 : t
							}
							var i = t.template || t.templateUrl ? t.template : "";
							return {
								controller : r,
								controllerAs : mt(t.controller) || t.controllerAs || "$ctrl",
								template : n(i),
								templateUrl : n(t.templateUrl),
								transclude : t.transclude,
								scope : {},
								bindToController : t.bindings || {},
								restrict : "E",
								require : t.require
							}
						}
						var r = t.controller || function () {};
						return o(t, function (e, t) {
							"$" === t.charAt(0) && (n[t] = e)
						}),
						n.$inject = ["$injector"],
						this.directive(e, n)
					},
					this.aHrefSanitizationWhitelist = function (e) {
						return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
					},
					this.imgSrcSanitizationWhitelist = function (e) {
						return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
					};
					var A = !0;
					this.debugInfoEnabled = function (e) {
						return b(e) ? (A = e, this) : A
					},
					this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (e, r, i, a, s, u, v, b, _, k) {
							function M(e, t, n) {
								le.innerHTML = "<span " + t + ">";
								var r = le.firstChild.attributes,
								i = r[0];
								r.removeNamedItem(i.name),
								i.value = n,
								e.attributes.setNamedItem(i)
							}
							function T(e, t) {
								try {
									e.addClass(t)
								} catch (n) {}

							}
							function P(e, n, r, i, o) {
								e instanceof Ur || (e = Ur(e));
								for (var a = /\S+/, s = 0, u = e.length; u > s; s++) {
									var l = e[s];
									l.nodeType === ii && l.nodeValue.match(a) && Me(l, e[s] = t.createElement("span"))
								}
								var c = U(e, n, e, r, i, o);
								P.$$addScopeClass(e);
								var f = null;
								return function (t, n, r) {
									he(t, "scope"),
									o && o.needsNewScope && (t = t.$parent.$new()),
									r = r || {};
									var i = r.parentBoundTranscludeFn,
									a = r.transcludeControllers,
									s = r.futureParentElement;
									i && i.$$boundTransclude && (i = i.$$boundTransclude),
									f || (f = j(s));
									var u;
									if (u = "html" !== f ? Ur(te(f, Ur("<div>").append(e).html())) : n ? Si.clone.call(e) : e, a)
										for (var l in a)
											u.data("$" + l + "Controller", a[l].instance);
									return P.$$addScopeInfo(u, t),
									n && n(u, t),
									c && c(t, u, u, i),
									u
								}
							}
							function j(e) {
								var t = e && e[0];
								return t && "foreignobject" !== V(t) && qr.call(t).match(/SVG/) ? "svg" : "html"
							}
							function U(e, t, r, i, o, a) {
								function s(e, r, i, o) {
									var a,
									s,
									u,
									l,
									c,
									f,
									h,
									p,
									g;
									if (d) {
										var v = r.length;
										for (g = new Array(v), c = 0; c < $.length; c += 3)
											h = $[c], g[h] = r[h]
									} else
										g = r;
									for (c = 0, f = $.length; f > c; )
										u = g[$[c++]], a = $[c++], s = $[c++], a ? (a.scope ? (l = e.$new(), P.$$addScopeInfo(Ur(u), l)) : l = e, p = a.transcludeOnThisElement ? F(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? F(e, t) : null, a(s, l, u, i, p)) : s && s(e, u.childNodes, n, o)
								}
								for (var u, l, c, f, h, p, d, $ = [], g = 0; g < e.length; g++)
									u = new fe, l = N(e[g], [], u, 0 === g ? i : n, o), c = l.length ? H(l, e[g], u, t, r, null, [], [], a) : null, c && c.scope && P.$$addScopeClass(u.$$element), h = c && c.terminal || !(f = e[g].childNodes) || !f.length ? null : U(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || h) && ($.push(g, c, h), p = !0, d = d || c), a = null;
								return p ? s : null
							}
							function F(e, t, n) {
								var r = function (r, i, o, a, s) {
									return r || (r = e.$new(!1, s), r.$$transcluded = !0),
									t(r, i, {
										parentBoundTranscludeFn : n,
										transcludeControllers : o,
										futureParentElement : a
									})
								},
								i = r.$$slots = ve();
								for (var o in t.$$slots)
									t.$$slots[o] ? i[o] = F(e, t.$$slots[o], n) : i[o] = null;
								return r
							}
							function N(e, t, n, r, i) {
								var o,
								a,
								s = e.nodeType,
								u = n.$attr;
								switch (s) {
								case ni:
									G(t, $t(V(e)), "E", r, i);
									for (var l, c, f, d, $, g, v = e.attributes, m = 0, y = v && v.length; y > m; m++) {
										var b = !1,
										x = !1;
										l = v[m],
										c = l.name,
										$ = Xr(l.value),
										d = $t(c),
										(g = ge.test(d)) && (c = c.replace(Hi, "").substr(8).replace(/_(.)/g, function (e, t) {
													return t.toUpperCase()
												}));
										var E = d.match(me);
										E && X(E[1]) && (b = c, x = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)),
										f = $t(c.toLowerCase()),
										u[f] = c,
										!g && n.hasOwnProperty(f) || (n[f] = $, Ge(e, f) && (n[f] = !0)),
										re(e, t, $, f, g),
										G(t, f, "A", r, i, b, x)
									}
									if (a = e.className, w(a) && (a = a.animVal), S(a) && "" !== a)
										for (; o = p.exec(a); )
											f = $t(o[2]), G(t, f, "C", r, i) && (n[f] = Xr(o[3])), a = a.substr(o.index + o[0].length);
									break;
								case ii:
									if (11 === jr)
										for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === ii; )
											e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
									ee(t, e.nodeValue);
									break;
								case oi:
									try {
										o = h.exec(e.nodeValue),
										o && (f = $t(o[1]), G(t, f, "M", r, i) && (n[f] = Xr(o[2])))
									} catch (A) {}

								}
								return t.sort(J),
								t
							}
							function R(e, t, n) {
								var r = [],
								i = 0;
								if (t && e.hasAttribute && e.hasAttribute(t)) {
									do {
										if (!e)
											throw Li("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
										e.nodeType == ni && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--),
										r.push(e),
										e = e.nextSibling
									} while (i > 0)
								} else
									r.push(e);
								return Ur(r)
							}
							function q(e, t, n) {
								return function (r, i, o, a, s) {
									return i = R(i[0], t, n),
									e(r, i, o, a, s)
								}
							}
							function z(e, t, n, r, i, o) {
								if (e)
									return P(t, n, r, i, o);
								var a;
								return function () {
									return a || (a = P(t, n, r, i, o), t = n = o = null),
									a.apply(this, arguments)
								}
							}
							function H(e, r, a, s, l, c, h, p, d) {
								function $(e, t, n, r) {
									e && (n && (e = q(e, n, r)), e.require = b.require, e.directiveName = E, (j === b || b.$$isolateScope) && (e = oe(e, {
													isolateScope : !0
												})), h.push(e)),
									t && (n && (t = q(t, n, r)), t.require = b.require, t.directiveName = E, (j === b || b.$$isolateScope) && (t = oe(t, {
													isolateScope : !0
												})), p.push(t))
								}
								function g(e, t, n, r) {
									var i;
									if (S(t)) {
										var a = t.match(x),
										s = t.substring(a[0].length),
										u = a[1] || a[3],
										l = "?" === a[2];
										if ("^^" === u ? n = n.parent() : (i = r && r[s], i = i && i.instance), !i) {
											var c = "$" + s + "Controller";
											i = u ? n.inheritedData(c) : n.data(c)
										}
										if (!i && !l)
											throw Li("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, e)
									} else if (Wr(t)) {
										i = [];
										for (var f = 0, h = t.length; h > f; f++)
											i[f] = g(e, t[f], n, r)
									} else
										w(t) && (i = {}, o(t, function (t, o) {
												i[o] = g(e, t, n, r)
											}));
									return i || null
								}
								function v(e, t, n, r, i, o) {
									var a = ve();
									for (var s in r) {
										var l = r[s],
										c = {
											$scope : l === j || l.$$isolateScope ? i : o,
											$element : e,
											$attrs : t,
											$transclude : n
										},
										f = l.controller;
										"@" == f && (f = t[l.name]);
										var h = u(f, c, !0, l.controllerAs);
										a[l.name] = h,
										H || e.data("$" + l.name + "Controller", h.instance)
									}
									return a
								}
								function m(e, t, i, s, u) {
									function l(e, t, r, i) {
										var o;
										if (O(e) || (i = r, r = t, t = e, e = n), H && (o = x), r || (r = H ? E.parent() : E), !i)
											return u(e, t, o, r, I);
										var a = u.$$slots[i];
										if (a)
											return a(e, t, o, r, I);
										if (y(a))
											throw Li("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, Q(E))
									}
									var c,
									d,
									$,
									m,
									b,
									x,
									S,
									E,
									A,
									_,
									k;
									r === i ? (A = a, E = a.$$element) : (E = Ur(i), A = new fe(E, a)),
									b = t,
									j ? m = t.$new(!0) : T && (b = t.$parent),
									u && (S = l, S.$$boundTransclude = u, S.isSlotFilled = function (e) {
										return !!u.$$slots[e]
									}),
									D && (x = v(E, A, S, D, m, t)),
									j && (P.$$addScopeInfo(E, m, !0, !(U && (U === j || U === j.$$originalDirective))), P.$$addScopeClass(E, !0), m.$$isolateBindings = j.$$isolateBindings, _ = se(t, A, m, m.$$isolateBindings, j), _ && m.$on("$destroy", _));
									for (var M in x) {
										var F = D[M],
										N = x[M],
										R = F.$$bindings.bindToController;
										N.identifier && R && (k = se(b, A, N.instance, R, F));
										var V = N();
										V !== N.instance && (N.instance = V, E.data("$" + F.name + "Controller", V), k && k(), k = se(b, A, N.instance, R, F))
									}
									for (o(D, function (e, t) {
											var n = e.require;
											e.bindToController && !Wr(n) && w(n) && f(x[t].instance, g(t, n, E, x))
										}), o(x, function (e) {
											C(e.instance.$onInit) && e.instance.$onInit()
										}), c = 0, d = h.length; d > c; c++)
										$ = h[c], ae($, $.isolateScope ? m : t, E, A, $.require && g($.directiveName, $.require, E, x), S);
									var I = t;
									for (j && (j.template || null === j.templateUrl) && (I = m), e && e(I, i.childNodes, n, u), c = p.length - 1; c >= 0; c--)
										$ = p[c], ae($, $.isolateScope ? m : t, E, A, $.require && g($.directiveName, $.require, E, x), S)
								}
								d = d || {};
								for (var b, E, A, _, k, M = -Number.MAX_VALUE, T = d.newScopeDirective, D = d.controllerDirectives, j = d.newIsolateScopeDirective, U = d.templateDirective, F = d.nonTlbTranscludeDirective, I = !1, L = !1, H = d.hasElementTranscludeDirective, G = a.$$element = Ur(r), X = c, J = s, ee = !1, ne = !1, re = 0, ue = e.length; ue > re; re++) {
									b = e[re];
									var le = b.$$start,
									ce = b.$$end;
									if (le && (G = R(r, le, ce)), A = n, M > b.priority)
										break;
									if ((k = b.scope) && (b.templateUrl || (w(k) ? (Z("new/isolated scope", j || T, b, G), j = b) : Z("new/isolated scope", j, b, G)), T = T || b), E = b.name, !ee && (b.replace && (b.templateUrl || b.template) || b.transclude && !b.$$tlb)) {
										for (var he, pe = re + 1; he = e[pe++]; )
											if (he.transclude && !he.$$tlb || he.replace && (he.templateUrl || he.template)) {
												ne = !0;
												break
											}
										ee = !0
									}
									if (!b.templateUrl && b.controller && (k = b.controller, D = D || ve(), Z("'" + E + "' controller", D[E], b, G), D[E] = b), k = b.transclude)
										if (I = !0, b.$$tlb || (Z("transclusion", F, b, G), F = b), "element" == k)
											H = !0, M = b.priority, A = G, G = a.$$element = Ur(t.createComment(" " + E + ": " + a[E] + " ")), r = G[0], ie(l, B(A), r), J = z(ne, A, s, M, X && X.name, {
													nonTlbTranscludeDirective : F
												});
										else {
											var de = ve();
											if (A = Ur(Pe(r)).contents(), w(k)) {
												A = [];
												var ge = ve(),
												me = ve();
												o(k, function (e, t) {
													var n = "?" === e.charAt(0);
													e = n ? e.substring(1) : e,
													ge[e] = t,
													de[t] = null,
													me[t] = n
												}),
												o(G.contents(), function (e) {
													var t = ge[$t(V(e))];
													t ? (me[t] = !0, de[t] = de[t] || [], de[t].push(e)) : A.push(e)
												}),
												o(me, function (e, t) {
													if (!e)
														throw Li("reqslot", "Required transclusion slot `{0}` was not filled.", t)
												});
												for (var ye in de)
													de[ye] && (de[ye] = z(ne, de[ye], s))
											}
											G.empty(),
											J = z(ne, A, s, n, n, {
													needsNewScope : b.$$isolateScope || b.$$newScope
												}),
											J.$$slots = de
										}
									if (b.template)
										if (L = !0, Z("template", U, b, G), U = b, k = C(b.template) ? b.template(G, a) : b.template, k = $e(k), b.replace) {
											if (X = b, A = Ee(k) ? [] : vt(te(b.templateNamespace, Xr(k))), r = A[0], 1 != A.length || r.nodeType !== ni)
												throw Li("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", E, "");
											ie(l, G, r);
											var be = {
												$attr : {}

											},
											we = N(r, [], be),
											xe = e.splice(re + 1, e.length - (re + 1));
											(j || T) && W(we, j, T),
											e = e.concat(we).concat(xe),
											K(a, be),
											ue = e.length
										} else
											G.html(k);
									if (b.templateUrl)
										L = !0, Z("template", U, b, G), U = b, b.replace && (X = b), m = Y(e.splice(re, e.length - re), G, a, l, I && J, h, p, {
												controllerDirectives : D,
												newScopeDirective : T !== b && T,
												newIsolateScopeDirective : j,
												templateDirective : U,
												nonTlbTranscludeDirective : F
											}), ue = e.length;
									else if (b.compile)
										try {
											_ = b.compile(G, a, J),
											C(_) ? $(null, _, le, ce) : _ && $(_.pre, _.post, le, ce)
										} catch (Se) {
											i(Se, Q(G))
										}
									b.terminal && (m.terminal = !0, M = Math.max(M, b.priority))
								}
								return m.scope = T && T.scope === !0,
								m.transcludeOnThisElement = I,
								m.templateOnThisElement = L,
								m.transclude = J,
								d.hasElementTranscludeDirective = H,
								m
							}
							function W(e, t, n) {
								for (var r = 0, i = e.length; i > r; r++)
									e[r] = d(e[r], {
											$$isolateScope : t,
											$$newScope : n
										})
							}
							function G(t, n, r, o, a, s, u) {
								if (n === a)
									return null;
								var f = null;
								if (l.hasOwnProperty(n))
									for (var h, p = e.get(n + c), $ = 0, g = p.length; g > $; $++)
										try {
											h = p[$],
											(y(o) || o > h.priority) && -1 != h.restrict.indexOf(r) && (s && (h = d(h, {
															$$start : s,
															$$end : u
														})), t.push(h), f = h)
										} catch (v) {
											i(v)
										}
								return f
							}
							function X(t) {
								if (l.hasOwnProperty(t))
									for (var n, r = e.get(t + c), i = 0, o = r.length; o > i; i++)
										if (n = r[i], n.multiElement)
											return !0;
								return !1
							}
							function K(e, t) {
								var n = t.$attr,
								r = e.$attr,
								i = e.$$element;
								o(e, function (r, i) {
									"$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
								}),
								o(t, function (t, o) {
									"class" == o ? (T(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
								})
							}
							function Y(e, t, n, r, i, s, u, l) {
								var c,
								f,
								h = [],
								p = t[0],
								$ = e.shift(),
								g = d($, {
										templateUrl : null,
										transclude : null,
										replace : null,
										$$originalDirective : $
									}),
								v = C($.templateUrl) ? $.templateUrl(t, n) : $.templateUrl,
								m = $.templateNamespace;
								return t.empty(),
								a(v).then(function (a) {
									var d,
									y,
									b,
									x;
									if (a = $e(a), $.replace) {
										if (b = Ee(a) ? [] : vt(te(m, Xr(a))), d = b[0], 1 != b.length || d.nodeType !== ni)
											throw Li("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $.name, v);
										y = {
											$attr : {}

										},
										ie(r, t, d);
										var S = N(d, [], y);
										w($.scope) && W(S, !0),
										e = S.concat(e),
										K(n, y)
									} else
										d = p, t.html(a);
									for (e.unshift(g), c = H(e, d, n, i, t, $, s, u, l), o(r, function (e, n) {
											e == d && (r[n] = t[0])
										}), f = U(t[0].childNodes, i); h.length; ) {
										var E = h.shift(),
										A = h.shift(),
										C = h.shift(),
										_ = h.shift(),
										k = t[0];
										if (!E.$$destroyed) {
											if (A !== p) {
												var O = A.className;
												l.hasElementTranscludeDirective && $.replace || (k = Pe(d)),
												ie(C, Ur(A), k),
												T(Ur(k), O)
											}
											x = c.transcludeOnThisElement ? F(E, c.transclude, _) : _,
											c(f, E, k, r, x)
										}
									}
									h = null
								}),
								function (e, t, n, r, i) {
									var o = i;
									t.$$destroyed || (h ? h.push(t, n, r, o) : (c.transcludeOnThisElement && (o = F(t, c.transclude, i)), c(f, t, n, r, o)))
								}
							}
							function J(e, t) {
								var n = t.priority - e.priority;
								return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
							}
							function Z(e, t, n, r) {
								function i(e) {
									return e ? " (module: " + e + ")" : ""
								}
								if (t)
									throw Li("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, Q(r))
							}
							function ee(e, t) {
								var n = r(t, !0);
								n && e.push({
									priority : 0,
									compile : function (e) {
										var t = e.parent(),
										r = !!t.length;
										return r && P.$$addBindingClass(t),
										function (e, t) {
											var i = t.parent();
											r || P.$$addBindingClass(i),
											P.$$addBindingInfo(i, n.expressions),
											e.$watch(n, function (e) {
												t[0].nodeValue = e
											})
										}
									}
								})
							}
							function te(e, n) {
								switch (e = Mr(e || "html")) {
								case "svg":
								case "math":
									var r = t.createElement("div");
									return r.innerHTML = "<" + e + ">" + n + "</" + e + ">",
									r.childNodes[0].childNodes;
								default:
									return n
								}
							}
							function ne(e, t) {
								if ("srcdoc" == t)
									return b.HTML;
								var n = V(e);
								return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? b.RESOURCE_URL : void 0
							}
							function re(e, t, n, i, o) {
								var a = ne(e, i);
								o = m[i] || o;
								var s = r(n, !0, a, o);
								if (s) {
									if ("multiple" === i && "select" === V(e))
										throw Li("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Q(e));
									t.push({
										priority : 100,
										compile : function () {
											return {
												pre : function (e, t, u) {
													var l = u.$$observers || (u.$$observers = ve());
													if (E.test(i))
														throw Li("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
													var c = u[i];
													c !== n && (s = c && r(c, !0, a, o), n = c),
													s && (u[i] = s(e), (l[i] || (l[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || e).$watch(s, function (e, t) {
															"class" === i && e != t ? u.$updateClass(e, t) : u.$set(i, e)
														}))
												}
											}
										}
									})
								}
							}
							function ie(e, n, r) {
								var i,
								o,
								a = n[0],
								s = n.length,
								u = a.parentNode;
								if (e)
									for (i = 0, o = e.length; o > i; i++)
										if (e[i] == a) {
											e[i++] = r;
											for (var l = i, c = l + s - 1, f = e.length; f > l; l++, c++)
												f > c ? e[l] = e[c] : delete e[l];
											e.length -= s - 1,
											e.context === a && (e.context = r);
											break
										}
								u && u.replaceChild(r, a);
								var h = t.createDocumentFragment();
								for (i = 0; s > i; i++)
									h.appendChild(n[i]);
								for (Ur.hasData(a) && (Ur.data(r, Ur.data(a)), Ur(a).off("$destroy")), Ur.cleanData(h.querySelectorAll("*")), i = 1; s > i; i++)
									delete n[i];
								n[0] = r,
								n.length = 1
							}
							function oe(e, t) {
								return f(function () {
									return e.apply(null, arguments)
								}, e, t)
							}
							function ae(e, t, n, r, o, a) {
								try {
									e(t, n, r, o, a)
								} catch (s) {
									i(s, Q(n))
								}
							}
							function se(e, t, n, i, a) {
								var u = [];
								return o(i, function (i, o) {
									var l,
									c,
									f,
									h,
									p,
									d = i.attrName,
									g = i.optional,
									v = i.mode;
									switch (v) {
									case "@":
										g || Or.call(t, d) || (n[o] = t[d] = void 0),
										t.$observe(d, function (e) {
											S(e) && (n[o] = e)
										}),
										t.$$observers[d].$$scope = e,
										l = t[d],
										S(l) ? n[o] = r(l)(e) : D(l) && (n[o] = l);
										break;
									case "=":
										if (!Or.call(t, d)) {
											if (g)
												break;
											t[d] = void 0
										}
										if (g && !t[d])
											break;
										c = s(t[d]),
										h = c.literal ? L : function (e, t) {
											return e === t || e !== e && t !== t
										},
										f = c.assign || function () {
											throw l = n[o] = c(e),
											Li("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[d], d, a.name)
										},
										l = n[o] = c(e);
										var m = function (t) {
											return h(t, n[o]) || (h(t, l) ? f(e, t = n[o]) : n[o] = t),
											l = t
										};
										m.$stateful = !0,
										p = i.collection ? e.$watchCollection(t[d], m) : e.$watch(s(t[d], m), null, c.literal),
										u.push(p);
										break;
									case "<":
										if (!Or.call(t, d)) {
											if (g)
												break;
											t[d] = void 0
										}
										if (g && !t[d])
											break;
										c = s(t[d]),
										n[o] = c(e),
										p = e.$watch(c, function (e) {
												n[o] = e
											}, c.literal),
										u.push(p);
										break;
									case "&":
										if (c = t.hasOwnProperty(d) ? s(t[d]) : $, c === $ && g)
											break;
										n[o] = function (t) {
											return c(e, t)
										}
									}
								}),
								u.length && function () {
									for (var e = 0, t = u.length; t > e; ++e)
										u[e]()
								}
							}
							var ue = /^\w/,
							le = t.createElement("div"),
							fe = function (e, t) {
								if (t) {
									var n,
									r,
									i,
									o = Object.keys(t);
									for (n = 0, r = o.length; r > n; n++)
										i = o[n], this[i] = t[i]
								} else
									this.$attr = {};
								this.$$element = e
							};
							fe.prototype = {
								$normalize : $t,
								$addClass : function (e) {
									e && e.length > 0 && _.addClass(this.$$element, e)
								},
								$removeClass : function (e) {
									e && e.length > 0 && _.removeClass(this.$$element, e)
								},
								$updateClass : function (e, t) {
									var n = gt(e, t);
									n && n.length && _.addClass(this.$$element, n);
									var r = gt(t, e);
									r && r.length && _.removeClass(this.$$element, r)
								},
								$set : function (e, t, n, r) {
									var a,
									s = this.$$element[0],
									u = Ge(s, e),
									l = Xe(e),
									c = e;
									if (u ? (this.$$element.prop(e, t), r = u) : l && (this[l] = t, c = l), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e], r || (this.$attr[e] = r = ce(e, "-"))), a = V(this.$$element), "a" === a && ("href" === e || "xlinkHref" === e) || "img" === a && "src" === e)
										this[e] = t = k(t, "src" === e);
									else if ("img" === a && "srcset" === e) {
										for (var f = "", h = Xr(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test(h) ? p : /(,)/, $ = h.split(d), g = Math.floor($.length / 2), v = 0; g > v; v++) {
											var m = 2 * v;
											f += k(Xr($[m]), !0),
											f += " " + Xr($[m + 1])
										}
										var b = Xr($[2 * v]).split(/\s/);
										f += k(Xr(b[0]), !0),
										2 === b.length && (f += " " + Xr(b[1])),
										this[e] = t = f
									}
									n !== !1 && (null === t || y(t) ? this.$$element.removeAttr(r) : ue.test(r) ? this.$$element.attr(r, t) : M(this.$$element[0], r, t));
									var w = this.$$observers;
									w && o(w[c], function (e) {
										try {
											e(t)
										} catch (n) {
											i(n)
										}
									})
								},
								$observe : function (e, t) {
									var n = this,
									r = n.$$observers || (n.$$observers = ve()),
									i = r[e] || (r[e] = []);
									return i.push(t),
									v.$evalAsync(function () {
										i.$$inter || !n.hasOwnProperty(e) || y(n[e]) || t(n[e])
									}),
									function () {
										I(i, t)
									}
								}
							};
							var pe = r.startSymbol(),
							de = r.endSymbol(),
							$e = "{{" == pe && "}}" == de ? g : function (e) {
								return e.replace(/\{\{/g, pe).replace(/}}/g, de)
							},
							ge = /^ngAttr[A-Z]/,
							me = /^(.+)Start$/;
							return P.$$addBindingInfo = A ? function (e, t) {
								var n = e.data("$binding") || [];
								Wr(t) ? n = n.concat(t) : n.push(t),
								e.data("$binding", n)
							}
							 : $,
							P.$$addBindingClass = A ? function (e) {
								T(e, "ng-binding")
							}
							 : $,
							P.$$addScopeInfo = A ? function (e, t, n, r) {
								var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
								e.data(i, t)
							}
							 : $,
							P.$$addScopeClass = A ? function (e, t) {
								T(e, t ? "ng-isolate-scope" : "ng-scope")
							}
							 : $,
							P
						}
					]
				}
				function $t(e) {
					return Se(e.replace(Hi, ""))
				}
				function gt(e, t) {
					var n = "",
					r = e.split(/\s+/),
					i = t.split(/\s+/);
					e : for (var o = 0; o < r.length; o++) {
						for (var a = r[o], s = 0; s < i.length; s++)
							if (a == i[s])
								continue e;
						n += (n.length > 0 ? " " : "") + a
					}
					return n
				}
				function vt(e) {
					e = Ur(e);
					var t = e.length;
					if (1 >= t)
						return e;
					for (; t--; ) {
						var n = e[t];
						n.nodeType === oi && Vr.call(e, t, 1)
					}
					return e
				}
				function mt(e, t) {
					if (t && S(t))
						return t;
					if (S(e)) {
						var n = Wi.exec(e);
						if (n)
							return n[3]
					}
				}
				function yt() {
					var e = {},
					t = !1;
					this.register = function (t, n) {
						de(t, "controller"),
						w(t) ? f(e, t) : e[t] = n
					},
					this.allowGlobals = function () {
						t = !0
					},
					this.$get = ["$injector", "$window", function (i, o) {
							function a(e, t, n, i) {
								if (!e || !w(e.$scope))
									throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
								e.$scope[t] = n
							}
							return function (r, s, u, l) {
								var c,
								h,
								p,
								d;
								if (u = u === !0, l && S(l) && (d = l), S(r)) {
									if (h = r.match(Wi), !h)
										throw Bi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
									p = h[1],
									d = d || h[3],
									r = e.hasOwnProperty(p) ? e[p] : $e(s.$scope, p, !0) || (t ? $e(o, p, !0) : n),
									pe(r, p, !0)
								}
								if (u) {
									var $ = (Wr(r) ? r[r.length - 1] : r).prototype;
									c = Object.create($ || null),
									d && a(s, d, c, p || r.name);
									var g;
									return g = f(function () {
											var e = i.invoke(r, c, s, p);
											return e !== c && (w(e) || C(e)) && (c = e, d && a(s, d, c, p || r.name)),
											c
										}, {
											instance : c,
											identifier : d
										})
								}
								return c = i.instantiate(r, s, p),
								d && a(s, d, c, p || r.name),
								c
							}
						}
					]
				}
				function bt() {
					this.$get = ["$window", function (e) {
							return Ur(e.document)
						}
					]
				}
				function wt() {
					this.$get = ["$log", function (e) {
							return function (t, n) {
								e.error.apply(e, arguments)
							}
						}
					]
				}
				function xt(e) {
					return w(e) ? A(e) ? e.toISOString() : X(e) : e
				}
				function St() {
					this.$get = function () {
						return function (e) {
							if (!e)
								return "";
							var t = [];
							return a(e, function (e, n) {
								null === e || y(e) || (Wr(e) ? o(e, function (e, r) {
										t.push(ie(n) + "=" + ie(xt(e)))
									}) : t.push(ie(n) + "=" + ie(xt(e))))
							}),
							t.join("&")
						}
					}
				}
				function Et() {
					this.$get = function () {
						return function (e) {
							function t(e, r, i) {
								null === e || y(e) || (Wr(e) ? o(e, function (e, n) {
										t(e, r + "[" + (w(e) ? n : "") + "]")
									}) : w(e) && !A(e) ? a(e, function (e, n) {
										t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
									}) : n.push(ie(r) + "=" + ie(xt(e))))
							}
							if (!e)
								return "";
							var n = [];
							return t(e, "", !0),
							n.join("&")
						}
					}
				}
				function At(e, t) {
					if (S(e)) {
						var n = e.replace(Zi, "").trim();
						if (n) {
							var r = t("Content-Type");
							(r && 0 === r.indexOf(Xi) || Ct(n)) && (e = K(n))
						}
					}
					return e
				}
				function Ct(e) {
					var t = e.match(Yi);
					return t && Ji[t[0]].test(e)
				}
				function _t(e) {
					function t(e, t) {
						e && (r[e] = r[e] ? r[e] + ", " + t : t)
					}
					var n,
					r = ve();
					return S(e) ? o(e.split("\n"), function (e) {
						n = e.indexOf(":"),
						t(Mr(Xr(e.substr(0, n))), Xr(e.substr(n + 1)))
					}) : w(e) && o(e, function (e, n) {
						t(Mr(n), Xr(e))
					}),
					r
				}
				function kt(e) {
					var t;
					return function (n) {
						if (t || (t = _t(e)), n) {
							var r = t[Mr(n)];
							return void 0 === r && (r = null),
							r
						}
						return t
					}
				}
				function Ot(e, t, n, r) {
					return C(r) ? r(e, t, n) : (o(r, function (r) {
							e = r(e, t, n)
						}), e)
				}
				function Mt(e) {
					return e >= 200 && 300 > e
				}
				function Tt() {
					var e = this.defaults = {
						transformResponse : [At],
						transformRequest : [function (e) {
								return !w(e) || M(e) || P(e) || T(e) ? e : X(e)
							}
						],
						headers : {
							common : {
								Accept : "application/json, text/plain, */*"
							},
							post : z(Ki),
							put : z(Ki),
							patch : z(Ki)
						},
						xsrfCookieName : "XSRF-TOKEN",
						xsrfHeaderName : "X-XSRF-TOKEN",
						paramSerializer : "$httpParamSerializer"
					},
					t = !1;
					this.useApplyAsync = function (e) {
						return b(e) ? (t = !!e, this) : t
					};
					var i = !0;
					this.useLegacyPromiseExtensions = function (e) {
						return b(e) ? (i = !!e, this) : i
					};
					var a = this.interceptors = [];
					this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (s, u, l, c, h, p) {
							function d(t) {
								function a(e) {
									var t = f({}, e);
									return t.data = Ot(e.data, e.headers, e.status, l.transformResponse),
									Mt(e.status) ? t : h.reject(t)
								}
								function s(e, t) {
									var n,
									r = {};
									return o(e, function (e, i) {
										C(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
									}),
									r
								}
								function u(t) {
									var n,
									r,
									i,
									o = e.headers,
									a = f({}, t.headers);
									o = f({}, o.common, o[Mr(t.method)]);
									e : for (n in o) {
										r = Mr(n);
										for (i in a)
											if (Mr(i) === r)
												continue e;
										a[n] = o[n]
									}
									return s(a, z(t))
								}
								if (!w(t))
									throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
								if (!S(t.url))
									throw r("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", t.url);
								var l = f({
										method : "get",
										transformRequest : e.transformRequest,
										transformResponse : e.transformResponse,
										paramSerializer : e.paramSerializer
									}, t);
								l.headers = u(t),
								l.method = Tr(l.method),
								l.paramSerializer = S(l.paramSerializer) ? p.get(l.paramSerializer) : l.paramSerializer;
								var c = function (t) {
									var r = t.headers,
									i = Ot(t.data, kt(r), n, t.transformRequest);
									return y(i) && o(r, function (e, t) {
										"content-type" === Mr(t) && delete r[t]
									}),
									y(t.withCredentials) && !y(e.withCredentials) && (t.withCredentials = e.withCredentials),
									v(t, i).then(a, a)
								},
								d = [c, n],
								$ = h.when(l);
								for (o(E, function (e) {
										(e.request || e.requestError) && d.unshift(e.request, e.requestError),
										(e.response || e.responseError) && d.push(e.response, e.responseError)
									}); d.length; ) {
									var g = d.shift(),
									m = d.shift();
									$ = $.then(g, m)
								}
								return i ? ($.success = function (e) {
									return pe(e, "fn"),
									$.then(function (t) {
										e(t.data, t.status, t.headers, l)
									}),
									$
								}, $.error = function (e) {
									return pe(e, "fn"),
									$.then(null, function (t) {
										e(t.data, t.status, t.headers, l)
									}),
									$
								}) : ($.success = eo("success"), $.error = eo("error")),
								$
							}
							function $(e) {
								o(arguments, function (e) {
									d[e] = function (t, n) {
										return d(f({}, n || {}, {
												method : e,
												url : t
											}))
									}
								})
							}
							function g(e) {
								o(arguments, function (e) {
									d[e] = function (t, n, r) {
										return d(f({}, r || {}, {
												method : e,
												url : t,
												data : n
											}))
									}
								})
							}
							function v(r, i) {
								function o(e, n, r, i) {
									function o() {
										a(n, e, r, i)
									}
									p && (Mt(e) ? p.put(E, [e, n, _t(r), i]) : p.remove(E)),
									t ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
								}
								function a(e, t, n, i) {
									t = t >= -1 ? t : 0,
									(Mt(t) ? g.resolve : g.reject)({
										data : e,
										status : t,
										headers : kt(n),
										config : r,
										statusText : i
									})
								}
								function l(e) {
									a(e.data, e.status, z(e.headers()), e.statusText)
								}
								function f() {
									var e = d.pendingRequests.indexOf(r);
									-1 !== e && d.pendingRequests.splice(e, 1)
								}
								var p,
								$,
								g = h.defer(),
								v = g.promise,
								S = r.headers,
								E = m(r.url, r.paramSerializer(r.params));
								if (d.pendingRequests.push(r), v.then(f, f), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = w(r.cache) ? r.cache : w(e.cache) ? e.cache : x), p && ($ = p.get(E), b($) ? j($) ? $.then(l, l) : Wr($) ? a($[1], $[0], z($[2]), $[3]) : a($, 200, {}, "OK") : p.put(E, v)), y($)) {
									var A = Dn(r.url) ? u()[r.xsrfCookieName || e.xsrfCookieName] : n;
									A && (S[r.xsrfHeaderName || e.xsrfHeaderName] = A),
									s(r.method, E, i, o, S, r.timeout, r.withCredentials, r.responseType)
								}
								return v
							}
							function m(e, t) {
								return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t),
								e
							}
							var x = l("$http");
							e.paramSerializer = S(e.paramSerializer) ? p.get(e.paramSerializer) : e.paramSerializer;
							var E = [];
							return o(a, function (e) {
								E.unshift(S(e) ? p.get(e) : p.invoke(e))
							}),
							d.pendingRequests = [],
							$("get", "delete", "head", "jsonp"),
							g("post", "put", "patch"),
							d.defaults = e,
							d
						}
					]
				}
				function Pt() {
					this.$get = function () {
						return function () {
							return new e.XMLHttpRequest
						}
					}
				}
				function Dt() {
					this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (e, t, n, r) {
							return jt(e, r, e.defer, t.angular.callbacks, n[0])
						}
					]
				}
				function jt(e, t, n, r, i) {
					function a(e, t, n) {
						var o = i.createElement("script"),
						a = null;
						return o.type = "text/javascript",
						o.src = e,
						o.async = !0,
						a = function (e) {
							hi(o, "load", a),
							hi(o, "error", a),
							i.body.removeChild(o),
							o = null;
							var s = -1,
							u = "unknown";
							e && ("load" !== e.type || r[t].called || (e = {
										type : "error"
									}), u = e.type, s = "error" === e.type ? 404 : 200),
							n && n(s, u)
						},
						fi(o, "load", a),
						fi(o, "error", a),
						i.body.appendChild(o),
						a
					}
					return function (i, s, u, l, c, f, h, p) {
						function d() {
							m && m(),
							w && w.abort()
						}
						function g(t, r, i, o, a) {
							b(E) && n.cancel(E),
							m = w = null,
							t(r, i, o, a),
							e.$$completeOutstandingRequest($)
						}
						if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == Mr(i)) {
							var v = "_" + (r.counter++).toString(36);
							r[v] = function (e) {
								r[v].data = e,
								r[v].called = !0
							};
							var m = a(s.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function (e, t) {
									g(l, e, r[v].data, "", t),
									r[v] = $
								})
						} else {
							var w = t(i, s);
							w.open(i, s, !0),
							o(c, function (e, t) {
								b(e) && w.setRequestHeader(t, e)
							}),
							w.onload = function () {
								var e = w.statusText || "",
								t = "response" in w ? w.response : w.responseText,
								n = 1223 === w.status ? 204 : w.status;
								0 === n && (n = t ? 200 : "file" == Pn(s).protocol ? 404 : 0),
								g(l, n, t, w.getAllResponseHeaders(), e)
							};
							var x = function () {
								g(l, -1, null, null, "")
							};
							if (w.onerror = x, w.onabort = x, h && (w.withCredentials = !0), p)
								try {
									w.responseType = p
								} catch (S) {
									if ("json" !== p)
										throw S
								}
							w.send(y(u) ? null : u)
						}
						if (f > 0)
							var E = n(d, f);
						else
							j(f) && f.then(d)
					}
				}
				function Ut() {
					var e = "{{",
					t = "}}";
					this.startSymbol = function (t) {
						return t ? (e = t, this) : e
					},
					this.endSymbol = function (e) {
						return e ? (t = e, this) : t
					},
					this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
							function o(e) {
								return "\\\\\\" + e
							}
							function a(n) {
								return n.replace(p, e).replace(d, t)
							}
							function s(e) {
								if (null == e)
									return "";
								switch (typeof e) {
								case "string":
									break;
								case "number":
									e = "" + e;
									break;
								default:
									e = X(e)
								}
								return e
							}
							function u(e, t, n, r) {
								var i;
								return i = e.$watch(function (e) {
										return i(),
										r(e)
									}, t, n)
							}
							function l(o, l, p, d) {
								function $(e) {
									try {
										return e = P(e),
										d && !b(e) ? e : s(e)
									} catch (t) {
										r(to.interr(o, t))
									}
								}
								if (!o.length || -1 === o.indexOf(e)) {
									var g;
									if (!l) {
										var m = a(o);
										g = v(m),
										g.exp = o,
										g.expressions = [],
										g.$$watchDelegate = u
									}
									return g
								}
								d = !!d;
								for (var w, x, S, E = 0, A = [], _ = [], k = o.length, O = [], M = []; k > E; ) {
									if (-1 == (w = o.indexOf(e, E)) || -1 == (x = o.indexOf(t, w + c))) {
										E !== k && O.push(a(o.substring(E)));
										break
									}
									E !== w && O.push(a(o.substring(E, w))),
									S = o.substring(w + c, x),
									A.push(S),
									_.push(n(S, $)),
									E = x + h,
									M.push(O.length),
									O.push("")
								}
								if (p && O.length > 1 && to.throwNoconcat(o), !l || A.length) {
									var T = function (e) {
										for (var t = 0, n = A.length; n > t; t++) {
											if (d && y(e[t]))
												return;
											O[M[t]] = e[t]
										}
										return O.join("")
									},
									P = function (e) {
										return p ? i.getTrusted(p, e) : i.valueOf(e)
									};
									return f(function (e) {
										var t = 0,
										n = A.length,
										i = new Array(n);
										try {
											for (; n > t; t++)
												i[t] = _[t](e);
											return T(i)
										} catch (a) {
											r(to.interr(o, a))
										}
									}, {
										exp : o,
										expressions : A,
										$$watchDelegate : function (e, t) {
											var n;
											return e.$watchGroup(_, function (r, i) {
												var o = T(r);
												C(t) && t.call(this, o, r !== i ? n : o, e),
												n = o
											})
										}
									})
								}
							}
							var c = e.length,
							h = t.length,
							p = new RegExp(e.replace(/./g, o), "g"),
							d = new RegExp(t.replace(/./g, o), "g");
							return l.startSymbol = function () {
								return e
							},
							l.endSymbol = function () {
								return t
							},
							l
						}
					]
				}
				function Ft() {
					this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (e, t, n, r, i) {
							function o(o, s, u, l) {
								function c() {
									f ? o.apply(null, h) : o($)
								}
								var f = arguments.length > 4,
								h = f ? B(arguments, 4) : [],
								p = t.setInterval,
								d = t.clearInterval,
								$ = 0,
								g = b(l) && !l,
								v = (g ? r : n).defer(),
								m = v.promise;
								return u = b(u) ? u : 0,
								m.$$intervalId = p(function () {
										g ? i.defer(c) : e.$evalAsync(c),
										v.notify($++),
										u > 0 && $ >= u && (v.resolve($), d(m.$$intervalId), delete a[m.$$intervalId]),
										g || e.$apply()
									}, s),
								a[m.$$intervalId] = v,
								m
							}
							var a = {};
							return o.cancel = function (e) {
								return e && e.$$intervalId in a ? (a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0) : !1
							},
							o
						}
					]
				}
				function Nt(e) {
					for (var t = e.split("/"), n = t.length; n--; )
						t[n] = re(t[n]);
					return t.join("/")
				}
				function Rt(e, t) {
					var n = Pn(e);
					t.$$protocol = n.protocol,
					t.$$host = n.hostname,
					t.$$port = p(n.port) || ro[n.protocol] || null
				}
				function Vt(e, t) {
					var n = "/" !== e.charAt(0);
					n && (e = "/" + e);
					var r = Pn(e);
					t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname),
					t.$$search = te(r.search),
					t.$$hash = decodeURIComponent(r.hash),
					t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
				}
				function It(e, t) {
					return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
				}
				function qt(e) {
					var t = e.indexOf("#");
					return -1 == t ? e : e.substr(0, t)
				}
				function zt(e) {
					return e.replace(/(#.+)|#$/, "$1")
				}
				function Lt(e) {
					return e.substr(0, qt(e).lastIndexOf("/") + 1)
				}
				function Ht(e) {
					return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
				}
				function Bt(e, t, n) {
					this.$$html5 = !0,
					n = n || "",
					Rt(e, this),
					this.$$parse = function (e) {
						var n = It(t, e);
						if (!S(n))
							throw io("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
						Vt(n, this),
						this.$$path || (this.$$path = "/"),
						this.$$compose()
					},
					this.$$compose = function () {
						var e = ne(this.$$search),
						n = this.$$hash ? "#" + re(this.$$hash) : "";
						this.$$url = Nt(this.$$path) + (e ? "?" + e : "") + n,
						this.$$absUrl = t + this.$$url.substr(1)
					},
					this.$$parseLinkUrl = function (r, i) {
						if (i && "#" === i[0])
							return this.hash(i.slice(1)), !0;
						var o,
						a,
						s;
						return b(o = It(e, r)) ? (a = o, s = b(o = It(n, o)) ? t + (It("/", o) || o) : e + a) : b(o = It(t, r)) ? s = t + o : t == r + "/" && (s = t),
						s && this.$$parse(s),
						!!s
					}
				}
				function Wt(e, t, n) {
					Rt(e, this),
					this.$$parse = function (r) {
						function i(e, t, n) {
							var r,
							i = /^\/[A-Z]:(\/.*)/;
							return 0 === t.indexOf(n) && (t = t.replace(n, "")),
							i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
						}
						var o,
						a = It(e, r) || It(t, r);
						y(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", y(a) && (e = r, this.replace())) : (o = It(n, a), y(o) && (o = a)),
						Vt(o, this),
						this.$$path = i(this.$$path, o, e),
						this.$$compose()
					},
					this.$$compose = function () {
						var t = ne(this.$$search),
						r = this.$$hash ? "#" + re(this.$$hash) : "";
						this.$$url = Nt(this.$$path) + (t ? "?" + t : "") + r,
						this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
					},
					this.$$parseLinkUrl = function (t, n) {
						return qt(e) == qt(t) ? (this.$$parse(t), !0) : !1
					}
				}
				function Gt(e, t, n) {
					this.$$html5 = !0,
					Wt.apply(this, arguments),
					this.$$parseLinkUrl = function (r, i) {
						if (i && "#" === i[0])
							return this.hash(i.slice(1)), !0;
						var o,
						a;
						return e == qt(r) ? o = r : (a = It(t, r)) ? o = e + n + a : t === r + "/" && (o = t),
						o && this.$$parse(o),
						!!o
					},
					this.$$compose = function () {
						var t = ne(this.$$search),
						r = this.$$hash ? "#" + re(this.$$hash) : "";
						this.$$url = Nt(this.$$path) + (t ? "?" + t : "") + r,
						this.$$absUrl = e + n + this.$$url
					}
				}
				function Xt(e) {
					return function () {
						return this[e]
					}
				}
				function Kt(e, t) {
					return function (n) {
						return y(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
					}
				}
				function Yt() {
					var e = "",
					t = {
						enabled : !1,
						requireBase : !0,
						rewriteLinks : !0
					};
					this.hashPrefix = function (t) {
						return b(t) ? (e = t, this) : e
					},
					this.html5Mode = function (e) {
						return D(e) ? (t.enabled = e, this) : w(e) ? (D(e.enabled) && (t.enabled = e.enabled), D(e.requireBase) && (t.requireBase = e.requireBase), D(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
					},
					this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
							function s(e, t, n) {
								var i = l.url(),
								o = l.$$state;
								try {
									r.url(e, t, n),
									l.$$state = r.state()
								} catch (a) {
									throw l.url(i),
									l.$$state = o,
									a
								}
							}
							function u(e, t) {
								n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
							}
							var l,
							c,
							f,
							h = r.baseHref(),
							p = r.url();
							if (t.enabled) {
								if (!h && t.requireBase)
									throw io("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
								f = Ht(p) + (h || "/"),
								c = i.history ? Bt : Gt
							} else
								f = qt(p), c = Wt;
							var d = Lt(f);
							l = new c(f, d, "#" + e),
							l.$$parseLinkUrl(p, p),
							l.$$state = r.state();
							var $ = /^\s*(javascript|mailto):/i;
							o.on("click", function (e) {
								if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
									for (var i = Ur(e.target); "a" !== V(i[0]); )
										if (i[0] === o[0] || !(i = i.parent())[0])
											return;
									var s = i.prop("href"),
									u = i.attr("href") || i.attr("xlink:href");
									w(s) && "[object SVGAnimatedString]" === s.toString() && (s = Pn(s.animVal).href),
									$.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(s, u) && (e.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
								}
							}),
							zt(l.absUrl()) != zt(p) && r.url(l.absUrl(), !0);
							var g = !0;
							return r.onUrlChange(function (e, t) {
								return y(It(d, e)) ? void(a.location.href = e) : (n.$evalAsync(function () {
										var r,
										i = l.absUrl(),
										o = l.$$state;
										e = zt(e),
										l.$$parse(e),
										l.$$state = t,
										r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented,
										l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (g = !1, u(i, o)))
									}), void(n.$$phase || n.$digest()))
							}),
							n.$watch(function () {
								var e = zt(r.url()),
								t = zt(l.absUrl()),
								o = r.state(),
								a = l.$$replace,
								c = e !== t || l.$$html5 && i.history && o !== l.$$state;
								(g || c) && (g = !1, n.$evalAsync(function () {
										var t = l.absUrl(),
										r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
										l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (c && s(t, a, o === l.$$state ? null : l.$$state), u(e, o)))
									})),
								l.$$replace = !1
							}),
							l
						}
					]
				}
				function Jt() {
					var e = !0,
					t = this;
					this.debugEnabled = function (t) {
						return b(t) ? (e = t, this) : e
					},
					this.$get = ["$window", function (n) {
							function r(e) {
								return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
								e
							}
							function i(e) {
								var t = n.console || {},
								i = t[e] || t.log || $,
								a = !1;
								try {
									a = !!i.apply
								} catch (s) {}

								return a ? function () {
									var e = [];
									return o(arguments, function (t) {
										e.push(r(t))
									}),
									i.apply(t, e)
								}
								 : function (e, t) {
									i(e, null == t ? "" : t)
								}
							}
							return {
								log : i("log"),
								info : i("info"),
								warn : i("warn"),
								error : i("error"),
								debug : function () {
									var n = i("debug");
									return function () {
										e && n.apply(t, arguments)
									}
								}
								()
							}
						}
					]
				}
				function Zt(e, t) {
					if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e)
						throw ao("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
					return e
				}
				function Qt(e) {
					return e + ""
				}
				function en(e, t) {
					if (e) {
						if (e.constructor === e)
							throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
						if (e.window === e)
							throw ao("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
						if (e.children && (e.nodeName || e.prop && e.attr && e.find))
							throw ao("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
						if (e === Object)
							throw ao("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
					}
					return e
				}
				function tn(e, t) {
					if (e) {
						if (e.constructor === e)
							throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
						if (e === so || e === uo || e === lo)
							throw ao("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
					}
				}
				function nn(e, t) {
					if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}

							.constructor || e === [].constructor || e === Function.constructor))
						throw ao("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
				}
				function rn(e, t) {
					return "undefined" != typeof e ? e : t
				}
				function on(e, t) {
					return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
				}
				function an(e, t) {
					var n = e(t);
					return !n.$stateful
				}
				function sn(e, t) {
					var n,
					r;
					switch (e.type) {
					case po.Program:
						n = !0,
						o(e.body, function (e) {
							sn(e.expression, t),
							n = n && e.expression.constant
						}),
						e.constant = n;
						break;
					case po.Literal:
						e.constant = !0,
						e.toWatch = [];
						break;
					case po.UnaryExpression:
						sn(e.argument, t),
						e.constant = e.argument.constant,
						e.toWatch = e.argument.toWatch;
						break;
					case po.BinaryExpression:
						sn(e.left, t),
						sn(e.right, t),
						e.constant = e.left.constant && e.right.constant,
						e.toWatch = e.left.toWatch.concat(e.right.toWatch);
						break;
					case po.LogicalExpression:
						sn(e.left, t),
						sn(e.right, t),
						e.constant = e.left.constant && e.right.constant,
						e.toWatch = e.constant ? [] : [e];
						break;
					case po.ConditionalExpression:
						sn(e.test, t),
						sn(e.alternate, t),
						sn(e.consequent, t),
						e.constant = e.test.constant && e.alternate.constant && e.consequent.constant,
						e.toWatch = e.constant ? [] : [e];
						break;
					case po.Identifier:
						e.constant = !1,
						e.toWatch = [e];
						break;
					case po.MemberExpression:
						sn(e.object, t),
						e.computed && sn(e.property, t),
						e.constant = e.object.constant && (!e.computed || e.property.constant),
						e.toWatch = [e];
						break;
					case po.CallExpression:
						n = e.filter ? an(t, e.callee.name) : !1,
						r = [],
						o(e.arguments, function (e) {
							sn(e, t),
							n = n && e.constant,
							e.constant || r.push.apply(r, e.toWatch)
						}),
						e.constant = n,
						e.toWatch = e.filter && an(t, e.callee.name) ? r : [e];
						break;
					case po.AssignmentExpression:
						sn(e.left, t),
						sn(e.right, t),
						e.constant = e.left.constant && e.right.constant,
						e.toWatch = [e];
						break;
					case po.ArrayExpression:
						n = !0,
						r = [],
						o(e.elements, function (e) {
							sn(e, t),
							n = n && e.constant,
							e.constant || r.push.apply(r, e.toWatch)
						}),
						e.constant = n,
						e.toWatch = r;
						break;
					case po.ObjectExpression:
						n = !0,
						r = [],
						o(e.properties, function (e) {
							sn(e.value, t),
							n = n && e.value.constant,
							e.value.constant || r.push.apply(r, e.value.toWatch)
						}),
						e.constant = n,
						e.toWatch = r;
						break;
					case po.ThisExpression:
						e.constant = !1,
						e.toWatch = [];
						break;
					case po.LocalsExpression:
						e.constant = !1,
						e.toWatch = []
					}
				}
				function un(e) {
					if (1 == e.length) {
						var t = e[0].expression,
						r = t.toWatch;
						return 1 !== r.length ? r : r[0] !== t ? r : n
					}
				}
				function ln(e) {
					return e.type === po.Identifier || e.type === po.MemberExpression
				}
				function cn(e) {
					return 1 === e.body.length && ln(e.body[0].expression) ? {
						type : po.AssignmentExpression,
						left : e.body[0].expression,
						right : {
							type : po.NGValueParameter
						},
						operator : "="
					}
					 : void 0
				}
				function fn(e) {
					return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === po.Literal || e.body[0].expression.type === po.ArrayExpression || e.body[0].expression.type === po.ObjectExpression)
				}
				function hn(e) {
					return e.constant
				}
				function pn(e, t) {
					this.astBuilder = e,
					this.$filter = t
				}
				function dn(e, t) {
					this.astBuilder = e,
					this.$filter = t
				}
				function $n(e) {
					return "constructor" == e
				}
				function gn(e) {
					return C(e.valueOf) ? e.valueOf() : go.call(e)
				}
				function vn() {
					var e = ve(),
					t = ve();
					this.$get = ["$filter", function (r) {
							function i(n, i, o) {
								var s,
								p,
								m;
								switch (o = o || v, typeof n) {
								case "string":
									n = n.trim(),
									m = n;
									var y = o ? t : e;
									if (s = y[m], !s) {
										":" === n.charAt(0) && ":" === n.charAt(1) && (p = !0, n = n.substring(2));
										var b = o ? g : d,
										w = new ho(b),
										x = new $o(w, r, b);
										s = x.parse(n),
										s.constant ? s.$$watchDelegate = f : p ? s.$$watchDelegate = s.literal ? c : l : s.inputs && (s.$$watchDelegate = u),
										o && (s = a(s)),
										y[m] = s
									}
									return h(s, i);
								case "function":
									return h(n, i);
								default:
									return h($, i)
								}
							}
							function a(e) {
								function t(t, n, r, i) {
									var o = v;
									v = !0;
									try {
										return e(t, n, r, i)
									}
									finally {
										v = o
									}
								}
								if (!e)
									return e;
								t.$$watchDelegate = e.$$watchDelegate,
								t.assign = a(e.assign),
								t.constant = e.constant,
								t.literal = e.literal;
								for (var n = 0; e.inputs && n < e.inputs.length; ++n)
									e.inputs[n] = a(e.inputs[n]);
								return t.inputs = e.inputs,
								t
							}
							function s(e, t) {
								return null == e || null == t ? e === t : "object" == typeof e && (e = gn(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
							}
							function u(e, t, r, i, o) {
								var a,
								u = i.inputs;
								if (1 === u.length) {
									var l = s;
									return u = u[0],
									e.$watch(function (e) {
										var t = u(e);
										return s(t, l) || (a = i(e, n, n, [t]), l = t && gn(t)),
										a
									}, t, r, o)
								}
								for (var c = [], f = [], h = 0, p = u.length; p > h; h++)
									c[h] = s, f[h] = null;
								return e.$watch(function (e) {
									for (var t = !1, r = 0, o = u.length; o > r; r++) {
										var l = u[r](e);
										(t || (t = !s(l, c[r]))) && (f[r] = l, c[r] = l && gn(l))
									}
									return t && (a = i(e, n, n, f)),
									a
								}, t, r, o)
							}
							function l(e, t, n, r) {
								var i,
								o;
								return i = e.$watch(function (e) {
										return r(e)
									}, function (e, n, r) {
										o = e,
										C(t) && t.apply(this, arguments),
										b(e) && r.$$postDigest(function () {
											b(o) && i()
										})
									}, n)
							}
							function c(e, t, n, r) {
								function i(e) {
									var t = !0;
									return o(e, function (e) {
										b(e) || (t = !1)
									}),
									t
								}
								var a,
								s;
								return a = e.$watch(function (e) {
										return r(e)
									}, function (e, n, r) {
										s = e,
										C(t) && t.call(this, e, n, r),
										i(e) && r.$$postDigest(function () {
											i(s) && a()
										})
									}, n)
							}
							function f(e, t, n, r) {
								var i;
								return i = e.$watch(function (e) {
										return i(),
										r(e)
									}, t, n)
							}
							function h(e, t) {
								if (!t)
									return e;
								var n = e.$$watchDelegate,
								r = !1,
								i = n !== c && n !== l,
								o = i ? function (n, i, o, a) {
									var s = r && a ? a[0] : e(n, i, o, a);
									return t(s, n, i)
								}
								 : function (n, r, i, o) {
									var a = e(n, r, i, o),
									s = t(a, n, r);
									return b(a) ? s : a
								};
								return e.$$watchDelegate && e.$$watchDelegate !== u ? o.$$watchDelegate = e.$$watchDelegate : t.$stateful || (o.$$watchDelegate = u, r = !e.inputs, o.inputs = e.inputs ? e.inputs : [e]),
								o
							}
							var p = Yr().noUnsafeEval,
							d = {
								csp : p,
								expensiveChecks : !1
							},
							g = {
								csp : p,
								expensiveChecks : !0
							},
							v = !1;
							return i.$$runningExpensiveChecks = function () {
								return v
							},
							i
						}
					]
				}
				function mn() {
					this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
							return bn(function (t) {
								e.$evalAsync(t)
							}, t)
						}
					]
				}
				function yn() {
					this.$get = ["$browser", "$exceptionHandler", function (e, t) {
							return bn(function (t) {
								e.defer(t)
							}, t)
						}
					]
				}
				function bn(e, t) {
					function i() {
						this.$$state = {
							status : 0
						}
					}
					function a(e, t) {
						return function (n) {
							t.call(e, n)
						}
					}
					function s(e) {
						var r,
						i,
						o;
						o = e.pending,
						e.processScheduled = !1,
						e.pending = n;
						for (var a = 0, s = o.length; s > a; ++a) {
							i = o[a][0],
							r = o[a][e.status];
							try {
								C(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
							} catch (u) {
								i.reject(u),
								t(u)
							}
						}
					}
					function u(t) {
						!t.processScheduled && t.pending && (t.processScheduled = !0, e(function () {
								s(t)
							}))
					}
					function l() {
						this.promise = new i
					}
					function c(e) {
						var t = new l,
						n = 0,
						r = Wr(e) ? [] : {};
						return o(e, function (e, i) {
							n++,
							v(e).then(function (e) {
								r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
							}, function (e) {
								r.hasOwnProperty(i) || t.reject(e)
							})
						}),
						0 === n && t.resolve(r),
						t.promise
					}
					var h = r("$q", TypeError),
					p = function () {
						var e = new l;
						return e.resolve = a(e, e.resolve),
						e.reject = a(e, e.reject),
						e.notify = a(e, e.notify),
						e
					};
					f(i.prototype, {
						then : function (e, t, n) {
							if (y(e) && y(t) && y(n))
								return this;
							var r = new l;
							return this.$$state.pending = this.$$state.pending || [],
							this.$$state.pending.push([r, e, t, n]),
							this.$$state.status > 0 && u(this.$$state),
							r.promise
						},
						"catch" : function (e) {
							return this.then(null, e)
						},
						"finally" : function (e, t) {
							return this.then(function (t) {
								return g(t, !0, e)
							}, function (t) {
								return g(t, !1, e)
							}, t)
						}
					}),
					f(l.prototype, {
						resolve : function (e) {
							this.promise.$$state.status || (e === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
						},
						$$resolve : function (e) {
							function n(e) {
								s || (s = !0, o.$$resolve(e))
							}
							function r(e) {
								s || (s = !0, o.$$reject(e))
							}
							var i,
							o = this,
							s = !1;
							try {
								(w(e) || C(e)) && (i = e && e.then),
								C(i) ? (this.promise.$$state.status = -1, i.call(e, n, r, a(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
							} catch (l) {
								r(l),
								t(l)
							}
						},
						reject : function (e) {
							this.promise.$$state.status || this.$$reject(e)
						},
						$$reject : function (e) {
							this.promise.$$state.value = e,
							this.promise.$$state.status = 2,
							u(this.promise.$$state)
						},
						notify : function (n) {
							var r = this.promise.$$state.pending;
							this.promise.$$state.status <= 0 && r && r.length && e(function () {
								for (var e, i, o = 0, a = r.length; a > o; o++) {
									i = r[o][0],
									e = r[o][3];
									try {
										i.notify(C(e) ? e(n) : n)
									} catch (s) {
										t(s)
									}
								}
							})
						}
					});
					var d = function (e) {
						var t = new l;
						return t.reject(e),
						t.promise
					},
					$ = function (e, t) {
						var n = new l;
						return t ? n.resolve(e) : n.reject(e),
						n.promise
					},
					g = function (e, t, n) {
						var r = null;
						try {
							C(n) && (r = n())
						} catch (i) {
							return $(i, !1)
						}
						return j(r) ? r.then(function () {
							return $(e, t)
						}, function (e) {
							return $(e, !1)
						}) : $(e, t)
					},
					v = function (e, t, n, r) {
						var i = new l;
						return i.resolve(e),
						i.promise.then(t, n, r)
					},
					m = v,
					b = function (e) {
						function t(e) {
							r.resolve(e)
						}
						function n(e) {
							r.reject(e)
						}
						if (!C(e))
							throw h("norslvr", "Expected resolverFn, got '{0}'", e);
						var r = new l;
						return e(t, n),
						r.promise
					};
					return b.prototype = i.prototype,
					b.defer = p,
					b.reject = d,
					b.when = v,
					b.resolve = m,
					b.all = c,
					b
				}
				function wn() {
					this.$get = ["$window", "$timeout", function (e, t) {
							var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
							r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
							i = !!n,
							o = i ? function (e) {
								var t = n(e);
								return function () {
									r(t)
								}
							}
							 : function (e) {
								var n = t(e, 16.66, !1);
								return function () {
									t.cancel(n)
								}
							};
							return o.supported = i,
							o
						}
					]
				}
				function xn() {
					function e(e) {
						function t() {
							this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
							this.$$listeners = {},
							this.$$listenerCount = {},
							this.$$watchersCount = 0,
							this.$id = u(),
							this.$$ChildScope = null
						}
						return t.prototype = e,
						t
					}
					var t = 10,
					n = r("$rootScope"),
					a = null,
					s = null;
					this.digestTtl = function (e) {
						return arguments.length && (t = e),
						t
					},
					this.$get = ["$exceptionHandler", "$parse", "$browser", function (r, l, c) {
							function f(e) {
								e.currentScope.$$destroyed = !0
							}
							function h(e) {
								9 === jr && (e.$$childHead && h(e.$$childHead), e.$$nextSibling && h(e.$$nextSibling)),
								e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
							}
							function p() {
								this.$id = u(),
								this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
								this.$root = this,
								this.$$destroyed = !1,
								this.$$listeners = {},
								this.$$listenerCount = {},
								this.$$watchersCount = 0,
								this.$$isolateBindings = null
							}
							function d(e) {
								if (E.$$phase)
									throw n("inprog", "{0} already in progress", E.$$phase);
								E.$$phase = e
							}
							function g() {
								E.$$phase = null
							}
							function v(e, t) {
								do
									e.$$watchersCount += t;
								while (e = e.$parent)
							}
							function m(e, t, n) {
								do
									e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
								while (e = e.$parent)
							}
							function b() {}

							function x() {
								for (; k.length; )
									try {
										k.shift()()
									} catch (e) {
										r(e)
									}
								s = null
							}
							function S() {
								null === s && (s = c.defer(function () {
											E.$apply(x)
										}))
							}
							p.prototype = {
								constructor : p,
								$new : function (t, n) {
									var r;
									return n = n || this,
									t ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope),
									r.$parent = n,
									r.$$prevSibling = n.$$childTail,
									n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r,
									(t || n != this) && r.$on("$destroy", f),
									r
								},
								$watch : function (e, t, n, r) {
									var i = l(e);
									if (i.$$watchDelegate)
										return i.$$watchDelegate(this, t, n, i, e);
									var o = this,
									s = o.$$watchers,
									u = {
										fn : t,
										last : b,
										get : i,
										exp : r || e,
										eq : !!n
									};
									return a = null,
									C(t) || (u.fn = $),
									s || (s = o.$$watchers = []),
									s.unshift(u),
									v(this, 1),
									function () {
										I(s, u) >= 0 && v(o, -1),
										a = null
									}
								},
								$watchGroup : function (e, t) {
									function n() {
										u = !1,
										l ? (l = !1, t(i, i, s)) : t(i, r, s)
									}
									var r = new Array(e.length),
									i = new Array(e.length),
									a = [],
									s = this,
									u = !1,
									l = !0;
									if (!e.length) {
										var c = !0;
										return s.$evalAsync(function () {
											c && t(i, i, s)
										}),
										function () {
											c = !1
										}
									}
									return 1 === e.length ? this.$watch(e[0], function (e, n, o) {
										i[0] = e,
										r[0] = n,
										t(i, e === n ? i : r, o)
									}) : (o(e, function (e, t) {
											var o = s.$watch(e, function (e, o) {
													i[t] = e,
													r[t] = o,
													u || (u = !0, s.$evalAsync(n))
												});
											a.push(o)
										}), function () {
										for (; a.length; )
											a.shift()()
									})
								},
								$watchCollection : function (e, t) {
									function n(e) {
										o = e;
										var t,
										n,
										r,
										s,
										u;
										if (!y(o)) {
											if (w(o))
												if (i(o)) {
													a !== p && (a = p, g = a.length = 0, f++),
													t = o.length,
													g !== t && (f++, a.length = g = t);
													for (var l = 0; t > l; l++)
														u = a[l], s = o[l], r = u !== u && s !== s, r || u === s || (f++, a[l] = s)
												} else {
													a !== d && (a = d = {}, g = 0, f++),
													t = 0;
													for (n in o)
														Or.call(o, n) && (t++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (g++, a[n] = s, f++));
													if (g > t) {
														f++;
														for (n in a)
															Or.call(o, n) || (g--, delete a[n])
													}
												}
											else
												a !== o && (a = o, f++);
											return f
										}
									}
									function r() {
										if ($ ? ($ = !1, t(o, o, u)) : t(o, s, u), c)
											if (w(o))
												if (i(o)) {
													s = new Array(o.length);
													for (var e = 0; e < o.length; e++)
														s[e] = o[e]
												} else {
													s = {};
													for (var n in o)
														Or.call(o, n) && (s[n] = o[n])
												}
											else
												s = o
									}
									n.$stateful = !0;
									var o,
									a,
									s,
									u = this,
									c = t.length > 1,
									f = 0,
									h = l(e, n),
									p = [],
									d = {},
									$ = !0,
									g = 0;
									return this.$watch(h, r)
								},
								$digest : function () {
									var e,
									i,
									o,
									u,
									l,
									f,
									h,
									p,
									$,
									v,
									m,
									y,
									w = t,
									S = this,
									k = [];
									d("$digest"),
									c.$$checkUrlChange(),
									this === E && null !== s && (c.defer.cancel(s), x()),
									a = null;
									do {
										for (p = !1, v = S; A.length; ) {
											try {
												y = A.shift(),
												y.scope.$eval(y.expression, y.locals)
											} catch (O) {
												r(O)
											}
											a = null
										}
										e : do {
											if (f = v.$$watchers)
												for (h = f.length; h--; )
													try {
														if (e = f[h])
															if (l = e.get, (i = l(v)) === (o = e.last) || (e.eq ? L(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
																if (e === a) {
																	p = !1;
																	break e
																}
															} else
																p = !0, a = e, e.last = e.eq ? q(i, null) : i, u = e.fn, u(i, o === b ? i : o, v), 5 > w && (m = 4 - w, k[m] || (k[m] = []), k[m].push({
																		msg : C(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
																		newVal : i,
																		oldVal : o
																	}))
													} catch (O) {
														r(O)
													}
											if (!($ = v.$$watchersCount && v.$$childHead || v !== S && v.$$nextSibling))
												for (; v !== S && !($ = v.$$nextSibling); )
													v = v.$parent
										} while (v = $);
										if ((p || A.length) && !w--)
											throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, k)
									} while (p || A.length);
									for (g(); _.length; )
										try {
											_.shift()()
										} catch (O) {
											r(O)
										}
								},
								$destroy : function () {
									if (!this.$$destroyed) {
										var e = this.$parent;
										this.$broadcast("$destroy"),
										this.$$destroyed = !0,
										this === E && c.$$applicationDestroyed(),
										v(this, -this.$$watchersCount);
										for (var t in this.$$listenerCount)
											m(this, this.$$listenerCount[t], t);
										e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling),
										e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling),
										this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
										this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
										this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = $,
										this.$on = this.$watch = this.$watchGroup = function () {
											return $
										},
										this.$$listeners = {},
										this.$$nextSibling = null,
										h(this)
									}
								},
								$eval : function (e, t) {
									return l(e)(this, t)
								},
								$evalAsync : function (e, t) {
									E.$$phase || A.length || c.defer(function () {
										A.length && E.$digest()
									}),
									A.push({
										scope : this,
										expression : l(e),
										locals : t
									})
								},
								$$postDigest : function (e) {
									_.push(e)
								},
								$apply : function (e) {
									try {
										d("$apply");
										try {
											return this.$eval(e)
										}
										finally {
											g()
										}
									} catch (t) {
										r(t)
									}
									finally {
										try {
											E.$digest()
										} catch (t) {
											throw r(t),
											t
										}
									}
								},
								$applyAsync : function (e) {
									function t() {
										n.$eval(e)
									}
									var n = this;
									e && k.push(t),
									e = l(e),
									S()
								},
								$on : function (e, t) {
									var n = this.$$listeners[e];
									n || (this.$$listeners[e] = n = []),
									n.push(t);
									var r = this;
									do
										r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++;
									while (r = r.$parent);
									var i = this;
									return function () {
										var r = n.indexOf(t);
										-1 !== r && (n[r] = null, m(i, 1, e))
									}
								},
								$emit : function (e, t) {
									var n,
									i,
									o,
									a = [],
									s = this,
									u = !1,
									l = {
										name : e,
										targetScope : s,
										stopPropagation : function () {
											u = !0
										},
										preventDefault : function () {
											l.defaultPrevented = !0
										},
										defaultPrevented : !1
									},
									c = H([l], arguments, 1);
									do {
										for (n = s.$$listeners[e] || a, l.currentScope = s, i = 0, o = n.length; o > i; i++)
											if (n[i])
												try {
													n[i].apply(null, c)
												} catch (f) {
													r(f)
												}
											else
												n.splice(i, 1), i--, o--;
										if (u)
											return l.currentScope = null, l;
										s = s.$parent
									} while (s);
									return l.currentScope = null,
									l
								},
								$broadcast : function (e, t) {
									var n = this,
									i = n,
									o = n,
									a = {
										name : e,
										targetScope : n,
										preventDefault : function () {
											a.defaultPrevented = !0
										},
										defaultPrevented : !1
									};
									if (!n.$$listenerCount[e])
										return a;
									for (var s, u, l, c = H([a], arguments, 1); i = o; ) {
										for (a.currentScope = i, s = i.$$listeners[e] || [], u = 0, l = s.length; l > u; u++)
											if (s[u])
												try {
													s[u].apply(null, c)
												} catch (f) {
													r(f)
												}
											else
												s.splice(u, 1), u--, l--;
										if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== n && i.$$nextSibling))
											for (; i !== n && !(o = i.$$nextSibling); )
												i = i.$parent
									}
									return a.currentScope = null,
									a
								}
							};
							var E = new p,
							A = E.$$asyncQueue = [],
							_ = E.$$postDigestQueue = [],
							k = E.$$applyAsyncQueue = [];
							return E
						}
					]
				}
				function Sn() {
					var e = /^\s*(https?|ftp|mailto|tel|file):/,
					t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
					this.aHrefSanitizationWhitelist = function (t) {
						return b(t) ? (e = t, this) : e
					},
					this.imgSrcSanitizationWhitelist = function (e) {
						return b(e) ? (t = e, this) : t
					},
					this.$get = function () {
						return function (n, r) {
							var i,
							o = r ? t : e;
							return i = Pn(n).href,
							"" === i || i.match(o) ? n : "unsafe:" + i
						}
					}
				}
				function En(e) {
					if ("self" === e)
						return e;
					if (S(e)) {
						if (e.indexOf("***") > -1)
							throw vo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
						return e = Kr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
						new RegExp("^" + e + "$")
					}
					if (_(e))
						return new RegExp("^" + e.source + "$");
					throw vo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
				}
				function An(e) {
					var t = [];
					return b(e) && o(e, function (e) {
						t.push(En(e))
					}),
					t
				}
				function Cn() {
					this.SCE_CONTEXTS = mo;
					var e = ["self"],
					t = [];
					this.resourceUrlWhitelist = function (t) {
						return arguments.length && (e = An(t)),
						e
					},
					this.resourceUrlBlacklist = function (e) {
						return arguments.length && (t = An(e)),
						t
					},
					this.$get = ["$injector", function (n) {
							function r(e, t) {
								return "self" === e ? Dn(t) : !!e.exec(t.href)
							}
							function i(n) {
								var i,
								o,
								a = Pn(n.toString()),
								s = !1;
								for (i = 0, o = e.length; o > i; i++)
									if (r(e[i], a)) {
										s = !0;
										break
									}
								if (s)
									for (i = 0, o = t.length; o > i; i++)
										if (r(t[i], a)) {
											s = !1;
											break
										}
								return s
							}
							function o(e) {
								var t = function (e) {
									this.$$unwrapTrustedValue = function () {
										return e
									}
								};
								return e && (t.prototype = new e),
								t.prototype.valueOf = function () {
									return this.$$unwrapTrustedValue()
								},
								t.prototype.toString = function () {
									return this.$$unwrapTrustedValue().toString()
								},
								t
							}
							function a(e, t) {
								var n = f.hasOwnProperty(e) ? f[e] : null;
								if (!n)
									throw vo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
								if (null === t || y(t) || "" === t)
									return t;
								if ("string" != typeof t)
									throw vo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
								return new n(t)
							}
							function s(e) {
								return e instanceof c ? e.$$unwrapTrustedValue() : e
							}
							function u(e, t) {
								if (null === t || y(t) || "" === t)
									return t;
								var n = f.hasOwnProperty(e) ? f[e] : null;
								if (n && t instanceof n)
									return t.$$unwrapTrustedValue();
								if (e === mo.RESOURCE_URL) {
									if (i(t))
										return t;
									throw vo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
								}
								if (e === mo.HTML)
									return l(t);
								throw vo("unsafe", "Attempting to use an unsafe value in a safe context.")
							}
							var l = function (e) {
								throw vo("unsafe", "Attempting to use an unsafe value in a safe context.")
							};
							n.has("$sanitize") && (l = n.get("$sanitize"));
							var c = o(),
							f = {};
							return f[mo.HTML] = o(c),
							f[mo.CSS] = o(c),
							f[mo.URL] = o(c),
							f[mo.JS] = o(c),
							f[mo.RESOURCE_URL] = o(f[mo.URL]), {
								trustAs : a,
								getTrusted : u,
								valueOf : s
							}
						}
					]
				}
				function _n() {
					var e = !0;
					this.enabled = function (t) {
						return arguments.length && (e = !!t),
						e
					},
					this.$get = ["$parse", "$sceDelegate", function (t, n) {
							if (e && 8 > jr)
								throw vo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
							var r = z(mo);
							r.isEnabled = function () {
								return e
							},
							r.trustAs = n.trustAs,
							r.getTrusted = n.getTrusted,
							r.valueOf = n.valueOf,
							e || (r.trustAs = r.getTrusted = function (e, t) {
								return t
							}, r.valueOf = g),
							r.parseAs = function (e, n) {
								var i = t(n);
								return i.literal && i.constant ? i : t(n, function (t) {
									return r.getTrusted(e, t)
								})
							};
							var i = r.parseAs,
							a = r.getTrusted,
							s = r.trustAs;
							return o(mo, function (e, t) {
								var n = Mr(t);
								r[Se("parse_as_" + n)] = function (t) {
									return i(e, t)
								},
								r[Se("get_trusted_" + n)] = function (t) {
									return a(e, t)
								},
								r[Se("trust_as_" + n)] = function (t) {
									return s(e, t)
								}
							}),
							r
						}
					]
				}
				function kn() {
					this.$get = ["$window", "$document", function (e, t) {
							var n,
							r,
							i = {},
							o = p((/android (\d+)/.exec(Mr((e.navigator || {}).userAgent)) || [])[1]),
							a = /Boxee/i.test((e.navigator || {}).userAgent),
							s = t[0] || {},
							u = /^(Moz|webkit|ms)(?=[A-Z])/,
							l = s.body && s.body.style,
							c = !1,
							f = !1;
							if (l) {
								for (var h in l)
									if (r = u.exec(h)) {
										n = r[0],
										n = n.substr(0, 1).toUpperCase() + n.substr(1);
										break
									}
								n || (n = "WebkitOpacity" in l && "webkit"),
								c = !!("transition" in l || n + "Transition" in l),
								f = !!("animation" in l || n + "Animation" in l),
								!o || c && f || (c = S(l.webkitTransition), f = S(l.webkitAnimation))
							}
							return {
								history : !(!e.history || !e.history.pushState || 4 > o || a),
								hasEvent : function (e) {
									if ("input" === e && 11 >= jr)
										return !1;
									if (y(i[e])) {
										var t = s.createElement("div");
										i[e] = "on" + e in t
									}
									return i[e]
								},
								csp : Yr(),
								vendorPrefix : n,
								transitions : c,
								animations : f,
								android : o
							}
						}
					]
				}
				function On() {
					var e;
					this.httpOptions = function (t) {
						return t ? (e = t, this) : e
					},
					this.$get = ["$templateCache", "$http", "$q", "$sce", function (t, n, r, i) {
							function o(a, s) {
								function u(e) {
									if (!s)
										throw Li("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
									return r.reject(e)
								}
								o.totalPendingRequests++,
								S(a) && t.get(a) || (a = i.getTrustedResourceUrl(a));
								var l = n.defaults && n.defaults.transformResponse;
								return Wr(l) ? l = l.filter(function (e) {
										return e !== At
									}) : l === At && (l = null),
								n.get(a, f({
										cache : t,
										transformResponse : l
									}, e))["finally"](function () {
									o.totalPendingRequests--
								}).then(function (e) {
									return t.put(a, e.data),
									e.data
								}, u)
							}
							return o.totalPendingRequests = 0,
							o
						}
					]
				}
				function Mn() {
					this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
							var r = {};
							return r.findBindings = function (e, t, n) {
								var r = e.getElementsByClassName("ng-binding"),
								i = [];
								return o(r, function (e) {
									var r = Hr.element(e).data("$binding");
									r && o(r, function (r) {
										if (n) {
											var o = new RegExp("(^|\\s)" + Kr(t) + "(\\s|\\||$)");
											o.test(r) && i.push(e)
										} else  - 1 != r.indexOf(t) && i.push(e)
									})
								}),
								i
							},
							r.findModels = function (e, t, n) {
								for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
									var o = n ? "=" : "*=",
									a = "[" + r[i] + "model" + o + '"' + t + '"]',
									s = e.querySelectorAll(a);
									if (s.length)
										return s
								}
							},
							r.getLocation = function () {
								return n.url()
							},
							r.setLocation = function (t) {
								t !== n.url() && (n.url(t), e.$digest())
							},
							r.whenStable = function (e) {
								t.notifyWhenNoOutstandingRequests(e)
							},
							r
						}
					]
				}
				function Tn() {
					this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, r, i) {
							function o(o, s, u) {
								C(o) || (u = s, s = o, o = $);
								var l,
								c = B(arguments, 3),
								f = b(u) && !u,
								h = (f ? r : n).defer(),
								p = h.promise;
								return l = t.defer(function () {
										try {
											h.resolve(o.apply(null, c))
										} catch (t) {
											h.reject(t),
											i(t)
										}
										finally {
											delete a[p.$$timeoutId]
										}
										f || e.$apply()
									}, s),
								p.$$timeoutId = l,
								a[l] = h,
								p
							}
							var a = {};
							return o.cancel = function (e) {
								return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
							},
							o
						}
					]
				}
				function Pn(e) {
					var t = e;
					return jr && (yo.setAttribute("href", t), t = yo.href),
					yo.setAttribute("href", t), {
						href : yo.href,
						protocol : yo.protocol ? yo.protocol.replace(/:$/, "") : "",
						host : yo.host,
						search : yo.search ? yo.search.replace(/^\?/, "") : "",
						hash : yo.hash ? yo.hash.replace(/^#/, "") : "",
						hostname : yo.hostname,
						port : yo.port,
						pathname : "/" === yo.pathname.charAt(0) ? yo.pathname : "/" + yo.pathname
					}
				}
				function Dn(e) {
					var t = S(e) ? Pn(e) : e;
					return t.protocol === bo.protocol && t.host === bo.host
				}
				function jn() {
					this.$get = v(e)
				}
				function Un(e) {
					function t(e) {
						try {
							return decodeURIComponent(e)
						} catch (t) {
							return e
						}
					}
					var n = e[0] || {},
					r = {},
					i = "";
					return function () {
						var e,
						o,
						a,
						s,
						u,
						l = n.cookie || "";
						if (l !== i)
							for (i = l, e = i.split("; "), r = {}, a = 0; a < e.length; a++)
								o = e[a], s = o.indexOf("="), s > 0 && (u = t(o.substring(0, s)), y(r[u]) && (r[u] = t(o.substring(s + 1))));
						return r
					}
				}
				function Fn() {
					this.$get = Un
				}
				function Nn(e) {
					function t(r, i) {
						if (w(r)) {
							var a = {};
							return o(r, function (e, n) {
								a[n] = t(n, e)
							}),
							a
						}
						return e.factory(r + n, i)
					}
					var n = "Filter";
					this.register = t,
					this.$get = ["$injector", function (e) {
							return function (t) {
								return e.get(t + n)
							}
						}
					],
					t("currency", zn),
					t("date", rr),
					t("filter", Rn),
					t("json", ir),
					t("limitTo", or),
					t("lowercase", _o),
					t("number", Ln),
					t("orderBy", ar),
					t("uppercase", ko)
				}
				function Rn() {
					return function (e, t, n) {
						if (!i(e)) {
							if (null == e)
								return e;
							throw r("filter")("notarray", "Expected array but received: {0}", e)
						}
						var o,
						a,
						s = qn(t);
						switch (s) {
						case "function":
							o = t;
							break;
						case "boolean":
						case "null":
						case "number":
						case "string":
							a = !0;
						case "object":
							o = Vn(t, n, a);
							break;
						default:
							return e
						}
						return Array.prototype.filter.call(e, o)
					}
				}
				function Vn(e, t, n) {
					var r,
					i = w(e) && "$" in e;
					return t === !0 ? t = L : C(t) || (t = function (e, t) {
							return y(e) ? !1 : null === e || null === t ? e === t : w(t) || w(e) && !m(e) ? !1 : (e = Mr("" + e), t = Mr("" + t), -1 !== e.indexOf(t))
						}),
					r = function (r) {
						return i && !w(r) ? In(r, e.$, t, !1) : In(r, e, t, n)
					}
				}
				function In(e, t, n, r, i) {
					var o = qn(e),
					a = qn(t);
					if ("string" === a && "!" === t.charAt(0))
						return !In(e, t.substring(1), n, r);
					if (Wr(e))
						return e.some(function (e) {
							return In(e, t, n, r)
						});
					switch (o) {
					case "object":
						var s;
						if (r) {
							for (s in e)
								if ("$" !== s.charAt(0) && In(e[s], t, n, !0))
									return !0;
							return i ? !1 : In(e, t, n, !1)
						}
						if ("object" === a) {
							for (s in t) {
								var u = t[s];
								if (!C(u) && !y(u)) {
									var l = "$" === s,
									c = l ? e : e[s];
									if (!In(c, u, n, l, l))
										return !1
								}
							}
							return !0
						}
						return n(e, t);
					case "function":
						return !1;
					default:
						return n(e, t)
					}
				}
				function qn(e) {
					return null === e ? "null" : typeof e
				}
				function zn(e) {
					var t = e.NUMBER_FORMATS;
					return function (e, n, r) {
						return y(n) && (n = t.CURRENCY_SYM),
						y(r) && (r = t.PATTERNS[1].maxFrac),
						null == e ? e : Wn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
					}
				}
				function Ln(e) {
					var t = e.NUMBER_FORMATS;
					return function (e, n) {
						return null == e ? e : Wn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
					}
				}
				function Hn(e) {
					var t,
					n,
					r,
					i,
					o,
					a = 0;
					for ((n = e.indexOf(xo)) > -1 && (e = e.replace(xo, "")), (r = e.search(/e/i)) > 0 ? (0 > n && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : 0 > n && (n = e.length), r = 0; e.charAt(r) == So; r++);
					if (r == (o = e.length))
						t = [0], n = 1;
					else {
						for (o--; e.charAt(o) == So; )
							o--;
						for (n -= r, t = [], i = 0; o >= r; r++, i++)
							t[i] = +e.charAt(r)
					}
					return n > wo && (t = t.splice(0, wo - 1), a = n - 1, n = 1), {
						d : t,
						e : a,
						i : n
					}
				}
				function Bn(e, t, n, r) {
					var i = e.d,
					o = i.length - e.i;
					t = y(t) ? Math.min(Math.max(n, o), r) : +t;
					var a = t + e.i,
					s = i[a];
					if (a > 0)
						i.splice(a);
					else {
						e.i = 1,
						i.length = a = t + 1;
						for (var u = 0; a > u; u++)
							i[u] = 0
					}
					for (s >= 5 && i[a - 1]++; t > o; o++)
						i.push(0);
					var l = i.reduceRight(function (e, t, n, r) {
							return t += e,
							r[n] = t % 10,
							Math.floor(t / 10)
						}, 0);
					l && (i.unshift(l), e.i++)
				}
				function Wn(e, t, n, r, i) {
					if (!S(e) && !E(e) || isNaN(e))
						return "";
					var o,
					a = !isFinite(e),
					s = !1,
					u = Math.abs(e) + "",
					l = "";
					if (a)
						l = "∞";
					else {
						o = Hn(u),
						Bn(o, i, t.minFrac, t.maxFrac);
						var c = o.d,
						f = o.i,
						h = o.e,
						p = [];
						for (s = c.reduce(function (e, t) {
									return e && !t
								}, !0); 0 > f; )
							c.unshift(0), f++;
						f > 0 ? p = c.splice(f) : (p = c, c = [0]);
						var d = [];
						for (c.length > t.lgSize && d.unshift(c.splice(-t.lgSize).join("")); c.length > t.gSize; )
							d.unshift(c.splice(-t.gSize).join(""));
						c.length && d.unshift(c.join("")),
						l = d.join(n),
						p.length && (l += r + p.join("")),
						h && (l += "e+" + h)
					}
					return 0 > e && !s ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf
				}
				function Gn(e, t, n) {
					var r = "";
					for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t; )
						e = So + e;
					return n && (e = e.substr(e.length - t)),
					r + e
				}
				function Xn(e, t, n, r) {
					return n = n || 0,
					function (i) {
						var o = i["get" + e]();
						return (n > 0 || o > -n) && (o += n),
						0 === o && -12 == n && (o = 12),
						Gn(o, t, r)
					}
				}
				function Kn(e, t) {
					return function (n, r) {
						var i = n["get" + e](),
						o = Tr(t ? "SHORT" + e : e);
						return r[o][i]
					}
				}
				function Yn(e, t, n) {
					var r = -1 * n,
					i = r >= 0 ? "+" : "";
					return i += Gn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Gn(Math.abs(r % 60), 2)
				}
				function Jn(e) {
					var t = new Date(e, 0, 1).getDay();
					return new Date(e, 0, (4 >= t ? 5 : 12) - t)
				}
				function Zn(e) {
					return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
				}
				function Qn(e) {
					return function (t) {
						var n = Jn(t.getFullYear()),
						r = Zn(t),
						i = +r - +n,
						o = 1 + Math.round(i / 6048e5);
						return Gn(o, e)
					}
				}
				function er(e, t) {
					return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
				}
				function tr(e, t) {
					return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
				}
				function nr(e, t) {
					return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
				}
				function rr(e) {
					function t(e) {
						var t;
						if (t = e.match(n)) {
							var r = new Date(0),
							i = 0,
							o = 0,
							a = t[8] ? r.setUTCFullYear : r.setFullYear,
							s = t[8] ? r.setUTCHours : r.setHours;
							t[9] && (i = p(t[9] + t[10]), o = p(t[9] + t[11])),
							a.call(r, p(t[1]), p(t[2]) - 1, p(t[3]));
							var u = p(t[4] || 0) - i,
							l = p(t[5] || 0) - o,
							c = p(t[6] || 0),
							f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
							return s.call(r, u, l, c, f),
							r
						}
						return e
					}
					var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
					return function (n, r, i) {
						var a,
						s,
						u = "",
						l = [];
						if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, S(n) && (n = Co.test(n) ? p(n) : t(n)), E(n) && (n = new Date(n)), !A(n) || !isFinite(n.getTime()))
							return n;
						for (; r; )
							s = Ao.exec(r), s ? (l = H(l, s, 1), r = l.pop()) : (l.push(r), r = null);
						var c = n.getTimezoneOffset();
						return i && (c = Y(i, c), n = Z(n, i, !0)),
						o(l, function (t) {
							a = Eo[t],
							u += a ? a(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
						}),
						u
					}
				}
				function ir() {
					return function (e, t) {
						return y(t) && (t = 2),
						X(e, t)
					}
				}
				function or() {
					return function (e, t, n) {
						return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t),
						isNaN(t) ? e : (E(e) && (e = e.toString()), Wr(e) || S(e) ? (n = !n || isNaN(n) ? 0 : p(n), n = 0 > n ? Math.max(0, e.length + n) : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
					}
				}
				function ar(e) {
					function t(t, n) {
						return n = n ? -1 : 1,
						t.map(function (t) {
							var r = 1,
							i = g;
							if (C(t))
								i = t;
							else if (S(t) && ("+" != t.charAt(0) && "-" != t.charAt(0) || (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
								var o = i();
								i = function (e) {
									return e[o]
								}
							}
							return {
								get : i,
								descending : r * n
							}
						})
					}
					function n(e) {
						switch (typeof e) {
						case "number":
						case "boolean":
						case "string":
							return !0;
						default:
							return !1
						}
					}
					function o(e, t) {
						return "function" == typeof e.valueOf && (e = e.valueOf(), n(e)) ? e : m(e) && (e = e.toString(), n(e)) ? e : t
					}
					function a(e, t) {
						var n = typeof e;
						return null === e ? (n = "string", e = "null") : "string" === n ? e = e.toLowerCase() : "object" === n && (e = o(e, t)), {
							value : e,
							type : n
						}
					}
					function s(e, t) {
						var n = 0;
						return e.type === t.type ? e.value !== t.value && (n = e.value < t.value ? -1 : 1) : n = e.type < t.type ? -1 : 1,
						n
					}
					return function (e, n, o) {
						function u(e, t) {
							return {
								value : e,
								predicateValues : c.map(function (n) {
									return a(n.get(e), t)
								})
							}
						}
						function l(e, t) {
							for (var n = 0, r = 0, i = c.length; i > r && !(n = s(e.predicateValues[r], t.predicateValues[r]) * c[r].descending); ++r);
							return n
						}
						if (null == e)
							return e;
						if (!i(e))
							throw r("orderBy")("notarray", "Expected array but received: {0}", e);
						Wr(n) || (n = [n]),
						0 === n.length && (n = ["+"]);
						var c = t(n, o);
						c.push({
							get : function () {
								return {}

							},
							descending : o ? -1 : 1
						});
						var f = Array.prototype.map.call(e, u);
						return f.sort(l),
						e = f.map(function (e) {
								return e.value
							})
					}
				}
				function sr(e) {
					return C(e) && (e = {
							link : e
						}),
					e.restrict = e.restrict || "AC",
					v(e)
				}
				function ur(e, t) {
					e.$name = t
				}
				function lr(e, t, r, i, a) {
					var s = this,
					u = [];
					s.$error = {},
					s.$$success = {},
					s.$pending = n,
					s.$name = a(t.name || t.ngForm || "")(r),
					s.$dirty = !1,
					s.$pristine = !0,
					s.$valid = !0,
					s.$invalid = !1,
					s.$submitted = !1,
					s.$$parentForm = To,
					s.$rollbackViewValue = function () {
						o(u, function (e) {
							e.$rollbackViewValue()
						})
					},
					s.$commitViewValue = function () {
						o(u, function (e) {
							e.$commitViewValue()
						})
					},
					s.$addControl = function (e) {
						de(e.$name, "input"),
						u.push(e),
						e.$name && (s[e.$name] = e),
						e.$$parentForm = s
					},
					s.$$renameControl = function (e, t) {
						var n = e.$name;
						s[n] === e && delete s[n],
						s[t] = e,
						e.$name = t
					},
					s.$removeControl = function (e) {
						e.$name && s[e.$name] === e && delete s[e.$name],
						o(s.$pending, function (t, n) {
							s.$setValidity(n, null, e)
						}),
						o(s.$error, function (t, n) {
							s.$setValidity(n, null, e)
						}),
						o(s.$$success, function (t, n) {
							s.$setValidity(n, null, e)
						}),
						I(u, e),
						e.$$parentForm = To
					},
					Er({
						ctrl : this,
						$element : e,
						set : function (e, t, n) {
							var r = e[t];
							if (r) {
								var i = r.indexOf(n);
								-1 === i && r.push(n)
							} else
								e[t] = [n]
						},
						unset : function (e, t, n) {
							var r = e[t];
							r && (I(r, n), 0 === r.length && delete e[t])
						},
						$animate : i
					}),
					s.$setDirty = function () {
						i.removeClass(e, pa),
						i.addClass(e, da),
						s.$dirty = !0,
						s.$pristine = !1,
						s.$$parentForm.$setDirty()
					},
					s.$setPristine = function () {
						i.setClass(e, pa, da + " " + Po),
						s.$dirty = !1,
						s.$pristine = !0,
						s.$submitted = !1,
						o(u, function (e) {
							e.$setPristine()
						})
					},
					s.$setUntouched = function () {
						o(u, function (e) {
							e.$setUntouched()
						})
					},
					s.$setSubmitted = function () {
						i.addClass(e, Po),
						s.$submitted = !0,
						s.$$parentForm.$setSubmitted()
					}
				}
				function cr(e) {
					e.$formatters.push(function (t) {
						return e.$isEmpty(t) ? t : t.toString()
					})
				}
				function fr(e, t, n, r, i, o) {
					hr(e, t, n, r, i, o),
					cr(r)
				}
				function hr(e, t, n, r, i, o) {
					var a = Mr(t[0].type);
					if (!i.android) {
						var s = !1;
						t.on("compositionstart", function (e) {
							s = !0
						}),
						t.on("compositionend", function () {
							s = !1,
							u()
						})
					}
					var u = function (e) {
						if (l && (o.defer.cancel(l), l = null), !s) {
							var i = t.val(),
							u = e && e.type;
							"password" === a || n.ngTrim && "false" === n.ngTrim || (i = Xr(i)),
							(r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
						}
					};
					if (i.hasEvent("input"))
						t.on("input", u);
					else {
						var l,
						c = function (e, t, n) {
							l || (l = o.defer(function () {
										l = null,
										t && t.value === n || u(e)
									}))
						};
						t.on("keydown", function (e) {
							var t = e.keyCode;
							91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
						}),
						i.hasEvent("paste") && t.on("paste cut", c)
					}
					t.on("change", u),
					r.$render = function () {
						var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
						t.val() !== e && t.val(e)
					}
				}
				function pr(e, t) {
					if (A(e))
						return e;
					if (S(e)) {
						zo.lastIndex = 0;
						var n = zo.exec(e);
						if (n) {
							var r = +n[1],
							i = +n[2],
							o = 0,
							a = 0,
							s = 0,
							u = 0,
							l = Jn(r),
							c = 7 * (i - 1);
							return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), u = t.getMilliseconds()),
							new Date(r, 0, l.getDate() + c, o, a, s, u)
						}
					}
					return NaN
				}
				function dr(e, t) {
					return function (n, r) {
						var i,
						a;
						if (A(n))
							return n;
						if (S(n)) {
							if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Fo.test(n))
								return new Date(n);
							if (e.lastIndex = 0, i = e.exec(n))
								return i.shift(), a = r ? {
									yyyy : r.getFullYear(),
									MM : r.getMonth() + 1,
									dd : r.getDate(),
									HH : r.getHours(),
									mm : r.getMinutes(),
									ss : r.getSeconds(),
									sss : r.getMilliseconds() / 1e3
								}
							 : {
								yyyy : 1970,
								MM : 1,
								dd : 1,
								HH : 0,
								mm : 0,
								ss : 0,
								sss : 0
							},
							o(i, function (e, n) {
								n < t.length && (a[t[n]] = +e)
							}),
							new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
						}
						return NaN
					}
				}
				function $r(e, t, r, i) {
					return function (o, a, s, u, l, c, f) {
						function h(e) {
							return e && !(e.getTime && e.getTime() !== e.getTime())
						}
						function p(e) {
							return b(e) && !A(e) ? r(e) || n : e
						}
						gr(o, a, s, u),
						hr(o, a, s, u, l, c);
						var d,
						$ = u && u.$options && u.$options.timezone;
						if (u.$$parserName = e, u.$parsers.push(function (e) {
								if (u.$isEmpty(e))
									return null;
								if (t.test(e)) {
									var i = r(e, d);
									return $ && (i = Z(i, $)),
									i
								}
								return n
							}), u.$formatters.push(function (e) {
								if (e && !A(e))
									throw ba("datefmt", "Expected `{0}` to be a date", e);
									return h(e) ? (d = e, d && $ && (d = Z(d, $, !0)), f("date")(e, i, $)) : (d = null, "")
								}), b(s.min) || s.ngMin) {
								var g;
								u.$validators.min = function (e) {
									return !h(e) || y(g) || r(e) >= g
								},
								s.$observe("min", function (e) {
									g = p(e),
									u.$validate()
								})
							}
						if (b(s.max) || s.ngMax) {
							var v;
							u.$validators.max = function (e) {
								return !h(e) || y(v) || r(e) <= v
							},
							s.$observe("max", function (e) {
								v = p(e),
								u.$validate()
							})
						}
					}
				}
				function gr(e, t, r, i) {
					var o = t[0],
					a = i.$$hasNativeValidators = w(o.validity);
					a && i.$parsers.push(function (e) {
						var r = t.prop(kr) || {};
						return r.badInput || r.typeMismatch ? n : e
					})
				}
				function vr(e, t, r, i, o, a) {
					if (gr(e, t, r, i), hr(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (e) {
							return i.$isEmpty(e) ? null : Vo.test(e) ? parseFloat(e) : n
						}), i.$formatters.push(function (e) {
							if (!i.$isEmpty(e)) {
								if (!E(e))
									throw ba("numfmt", "Expected `{0}` to be a number", e);
									e = e.toString()
								}
								return e
							}), b(r.min) || r.ngMin) {
							var s;
							i.$validators.min = function (e) {
								return i.$isEmpty(e) || y(s) || e >= s
							},
							r.$observe("min", function (e) {
								b(e) && !E(e) && (e = parseFloat(e, 10)),
								s = E(e) && !isNaN(e) ? e : n,
								i.$validate()
							})
						}
					if (b(r.max) || r.ngMax) {
						var u;
						i.$validators.max = function (e) {
							return i.$isEmpty(e) || y(u) || u >= e
						},
						r.$observe("max", function (e) {
							b(e) && !E(e) && (e = parseFloat(e, 10)),
							u = E(e) && !isNaN(e) ? e : n,
							i.$validate()
						})
					}
				}
				function mr(e, t, n, r, i, o) {
					hr(e, t, n, r, i, o),
					cr(r),
					r.$$parserName = "url",
					r.$validators.url = function (e, t) {
						var n = e || t;
						return r.$isEmpty(n) || No.test(n)
					}
				}
				function yr(e, t, n, r, i, o) {
					hr(e, t, n, r, i, o),
					cr(r),
					r.$$parserName = "email",
					r.$validators.email = function (e, t) {
						var n = e || t;
						return r.$isEmpty(n) || Ro.test(n)
					}
				}
				function br(e, t, n, r) {
					y(n.name) && t.attr("name", u());
					var i = function (e) {
						t[0].checked && r.$setViewValue(n.value, e && e.type)
					};
					t.on("click", i),
					r.$render = function () {
						var e = n.value;
						t[0].checked = e == r.$viewValue
					},
					n.$observe("value", r.$render)
				}
				function wr(e, t, n, r, i) {
					var o;
					if (b(r)) {
						if (o = e(r), !o.constant)
							throw ba("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
						return o(t)
					}
					return i
				}
				function xr(e, t, n, r, i, o, a, s) {
					var u = wr(s, e, "ngTrueValue", n.ngTrueValue, !0),
					l = wr(s, e, "ngFalseValue", n.ngFalseValue, !1),
					c = function (e) {
						r.$setViewValue(t[0].checked, e && e.type)
					};
					t.on("click", c),
					r.$render = function () {
						t[0].checked = r.$viewValue
					},
					r.$isEmpty = function (e) {
						return e === !1
					},
					r.$formatters.push(function (e) {
						return L(e, u)
					}),
					r.$parsers.push(function (e) {
						return e ? u : l
					})
				}
				function Sr(e, t) {
					return e = "ngClass" + e,
					["$animate", function (n) {
							function r(e, t) {
								var n = [];
								e : for (var r = 0; r < e.length; r++) {
									for (var i = e[r], o = 0; o < t.length; o++)
										if (i == t[o])
											continue e;
									n.push(i)
								}
								return n
							}
							function i(e) {
								var t = [];
								return Wr(e) ? (o(e, function (e) {
										t = t.concat(i(e))
									}), t) : S(e) ? e.split(" ") : w(e) ? (o(e, function (e, n) {
										e && (t = t.concat(n.split(" ")))
									}), t) : e
							}
							return {
								restrict : "AC",
								link : function (a, s, u) {
									function l(e) {
										var t = f(e, 1);
										u.$addClass(t)
									}
									function c(e) {
										var t = f(e, -1);
										u.$removeClass(t)
									}
									function f(e, t) {
										var n = s.data("$classCounts") || ve(),
										r = [];
										return o(e, function (e) {
											(t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] ===  + (t > 0) && r.push(e))
										}),
										s.data("$classCounts", n),
										r.join(" ")
									}
									function h(e, t) {
										var i = r(t, e),
										o = r(e, t);
										i = f(i, 1),
										o = f(o, -1),
										i && i.length && n.addClass(s, i),
										o && o.length && n.removeClass(s, o);
									}
									function p(e) {
										if (t === !0 || a.$index % 2 === t) {
											var n = i(e || []);
											if (d) {
												if (!L(e, d)) {
													var r = i(d);
													h(r, n)
												}
											} else
												l(n)
										}
										d = z(e)
									}
									var d;
									a.$watch(u[e], p, !0),
									u.$observe("class", function (t) {
										p(a.$eval(u[e]))
									}),
									"ngClass" !== e && a.$watch("$index", function (n, r) {
										var o = 1 & n;
										if (o !== (1 & r)) {
											var s = i(a.$eval(u[e]));
											o === t ? l(s) : c(s)
										}
									})
								}
							}
						}
					]
				}
				function Er(e) {
					function t(e, t, u) {
						y(t) ? r("$pending", e, u) : i("$pending", e, u),
						D(t) ? t ? (f(s.$error, e, u), c(s.$$success, e, u)) : (c(s.$error, e, u), f(s.$$success, e, u)) : (f(s.$error, e, u), f(s.$$success, e, u)),
						s.$pending ? (o(va, !0), s.$valid = s.$invalid = n, a("", null)) : (o(va, !1), s.$valid = Ar(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
						var l;
						l = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null,
						a(e, l),
						s.$$parentForm.$setValidity(e, l, s)
					}
					function r(e, t, n) {
						s[e] || (s[e] = {}),
						c(s[e], t, n)
					}
					function i(e, t, r) {
						s[e] && f(s[e], t, r),
						Ar(s[e]) && (s[e] = n)
					}
					function o(e, t) {
						t && !l[e] ? (h.addClass(u, e), l[e] = !0) : !t && l[e] && (h.removeClass(u, e), l[e] = !1)
					}
					function a(e, t) {
						e = e ? "-" + ce(e, "-") : "",
						o(fa + e, t === !0),
						o(ha + e, t === !1)
					}
					var s = e.ctrl,
					u = e.$element,
					l = {},
					c = e.set,
					f = e.unset,
					h = e.$animate;
					l[ha] = !(l[fa] = u.hasClass(fa)),
					s.$setValidity = t
				}
				function Ar(e) {
					if (e)
						for (var t in e)
							if (e.hasOwnProperty(t))
								return !1;
					return !0
				}
				function Cr(e) {
					e[0].hasAttribute("selected") && (e[0].selected = !0)
				}
				var _r = /^\/(.+)\/([a-z]*)$/,
				kr = "validity",
				Or = Object.prototype.hasOwnProperty,
				Mr = function (e) {
					return S(e) ? e.toLowerCase() : e
				},
				Tr = function (e) {
					return S(e) ? e.toUpperCase() : e
				},
				Pr = function (e) {
					return S(e) ? e.replace(/[A-Z]/g, function (e) {
						return String.fromCharCode(32 | e.charCodeAt(0))
					}) : e
				},
				Dr = function (e) {
					return S(e) ? e.replace(/[a-z]/g, function (e) {
						return String.fromCharCode(-33 & e.charCodeAt(0))
					}) : e
				};
				"i" !== "I".toLowerCase() && (Mr = Pr, Tr = Dr);
				var jr,
				Ur,
				Fr,
				Nr,
				Rr = [].slice,
				Vr = [].splice,
				Ir = [].push,
				qr = Object.prototype.toString,
				zr = Object.getPrototypeOf,
				Lr = r("ng"),
				Hr = e.angular || (e.angular = {}),
				Br = 0;
				jr = t.documentMode,
				$.$inject = [],
				g.$inject = [];
				var Wr = Array.isArray,
				Gr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
				Xr = function (e) {
					return S(e) ? e.trim() : e
				},
				Kr = function (e) {
					return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
				},
				Yr = function () {
					function e() {
						try {
							return new Function(""),
							!1
						} catch (e) {
							return !0
						}
					}
					if (!b(Yr.rules)) {
						var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
						if (n) {
							var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
							Yr.rules = {
								noUnsafeEval : !r || -1 !== r.indexOf("no-unsafe-eval"),
								noInlineStyle : !r || -1 !== r.indexOf("no-inline-style")
							}
						} else
							Yr.rules = {
								noUnsafeEval : e(),
								noInlineStyle : !1
							}
					}
					return Yr.rules
				},
				Jr = function () {
					if (b(Jr.name_))
						return Jr.name_;
					var e,
					n,
					r,
					i,
					o = Qr.length;
					for (n = 0; o > n; ++n)
						if (r = Qr[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
							i = e.getAttribute(r + "jq");
							break
						}
					return Jr.name_ = i
				},
				Zr = /:/g,
				Qr = ["ng-", "data-ng-", "ng:", "x-ng-"],
				ei = /[A-Z]/g,
				ti = !1,
				ni = 1,
				ri = 2,
				ii = 3,
				oi = 8,
				ai = 9,
				si = 11,
				ui = {
					full : "1.5.0",
					major : 1,
					minor : 5,
					dot : 0,
					codeName : "ennoblement-facilitation"
				};
				Te.expando = "ng339";
				var li = Te.cache = {},
				ci = 1,
				fi = function (e, t, n) {
					e.addEventListener(t, n, !1)
				},
				hi = function (e, t, n) {
					e.removeEventListener(t, n, !1)
				};
				Te._data = function (e) {
					return this.cache[e[this.expando]] || {}

				};
				var pi = /([\:\-\_]+(.))/g,
				di = /^moz([A-Z])/,
				$i = {
					mouseleave : "mouseout",
					mouseenter : "mouseover"
				},
				gi = r("jqLite"),
				vi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
				mi = /<|&#?\w+;/,
				yi = /<([\w:-]+)/,
				bi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
				wi = {
					option : [1, '<select multiple="multiple">', "</select>"],
					thead : [1, "<table>", "</table>"],
					col : [2, "<table><colgroup>", "</colgroup></table>"],
					tr : [2, "<table><tbody>", "</tbody></table>"],
					td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default : [0, "", ""]
				};
				wi.optgroup = wi.option,
				wi.tbody = wi.tfoot = wi.colgroup = wi.caption = wi.thead,
				wi.th = wi.td;
				var xi = Node.prototype.contains || function (e) {
					return !!(16 & this.compareDocumentPosition(e))
				},
				Si = Te.prototype = {
					ready : function (n) {
						function r() {
							i || (i = !0, n())
						}
						var i = !1;
						"complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Te(e).on("load", r))
					},
					toString : function () {
						var e = [];
						return o(this, function (t) {
							e.push("" + t)
						}),
						"[" + e.join(", ") + "]"
					},
					eq : function (e) {
						return Ur(e >= 0 ? this[e] : this[this.length + e])
					},
					length : 0,
					push : Ir,
					sort : [].sort,
					splice : [].splice
				},
				Ei = {};
				o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
					Ei[Mr(e)] = e
				});
				var Ai = {};
				o("input,select,option,textarea,button,form,details".split(","), function (e) {
					Ai[e] = !0
				});
				var Ci = {
					ngMinlength : "minlength",
					ngMaxlength : "maxlength",
					ngMin : "min",
					ngMax : "max",
					ngPattern : "pattern"
				};
				o({
					data : Ne,
					removeData : Ue,
					hasData : Ce,
					cleanData : _e
				}, function (e, t) {
					Te[t] = e
				}),
				o({
					data : Ne,
					inheritedData : Le,
					scope : function (e) {
						return Ur.data(e, "$scope") || Le(e.parentNode || e, ["$isolateScope", "$scope"])
					},
					isolateScope : function (e) {
						return Ur.data(e, "$isolateScope") || Ur.data(e, "$isolateScopeNoTemplate")
					},
					controller : ze,
					injector : function (e) {
						return Le(e, "$injector")
					},
					removeAttr : function (e, t) {
						e.removeAttribute(t)
					},
					hasClass : Re,
					css : function (e, t, n) {
						return t = Se(t),
						b(n) ? void(e.style[t] = n) : e.style[t]
					},
					attr : function (e, t, r) {
						var i = e.nodeType;
						if (i !== ii && i !== ri && i !== oi) {
							var o = Mr(t);
							if (Ei[o]) {
								if (!b(r))
									return e[t] || (e.attributes.getNamedItem(t) || $).specified ? o : n;
								r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
							} else if (b(r))
								e.setAttribute(t, r);
							else if (e.getAttribute) {
								var a = e.getAttribute(t, 2);
								return null === a ? n : a
							}
						}
					},
					prop : function (e, t, n) {
						return b(n) ? void(e[t] = n) : e[t]
					},
					text : function () {
						function e(e, t) {
							if (y(t)) {
								var n = e.nodeType;
								return n === ni || n === ii ? e.textContent : ""
							}
							e.textContent = t
						}
						return e.$dv = "",
						e
					}
					(),
					val : function (e, t) {
						if (y(t)) {
							if (e.multiple && "select" === V(e)) {
								var n = [];
								return o(e.options, function (e) {
									e.selected && n.push(e.value || e.text)
								}),
								0 === n.length ? null : n
							}
							return e.value
						}
						e.value = t
					},
					html : function (e, t) {
						return y(t) ? e.innerHTML : (De(e, !0), void(e.innerHTML = t))
					},
					empty : He
				}, function (e, t) {
					Te.prototype[t] = function (t, n) {
						var r,
						i,
						o = this.length;
						if (e !== He && y(2 == e.length && e !== Re && e !== ze ? t : n)) {
							if (w(t)) {
								for (r = 0; o > r; r++)
									if (e === Ne)
										e(this[r], t);
									else
										for (i in t)
											e(this[r], i, t[i]);
								return this
							}
							for (var a = e.$dv, s = y(a) ? Math.min(o, 1) : o, u = 0; s > u; u++) {
								var l = e(this[u], t, n);
								a = a ? a + l : l
							}
							return a
						}
						for (r = 0; o > r; r++)
							e(this[r], t, n);
						return this
					}
				}),
				o({
					removeData : Ue,
					on : function (e, t, r, i) {
						if (b(i))
							throw gi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
						if (Ae(e)) {
							var o = Fe(e, !0),
							a = o.events,
							s = o.handle;
							s || (s = o.handle = Ke(e, a));
							for (var u = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = u.length, c = function (t, n, i) {
								var o = a[t];
								o || (o = a[t] = [], o.specialHandlerWrapper = n, "$destroy" === t || i || fi(e, t, s)),
								o.push(r)
							}; l--; )
								t = u[l], $i[t] ? (c($i[t], Je), c(t, n, !0)) : c(t)
						}
					},
					off : je,
					one : function (e, t, n) {
						e = Ur(e),
						e.on(t, function r() {
							e.off(t, n),
							e.off(t, r)
						}),
						e.on(t, n)
					},
					replaceWith : function (e, t) {
						var n,
						r = e.parentNode;
						De(e),
						o(new Te(t), function (t) {
							n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e),
							n = t
						})
					},
					children : function (e) {
						var t = [];
						return o(e.childNodes, function (e) {
							e.nodeType === ni && t.push(e)
						}),
						t
					},
					contents : function (e) {
						return e.contentDocument || e.childNodes || []
					},
					append : function (e, t) {
						var n = e.nodeType;
						if (n === ni || n === si) {
							t = new Te(t);
							for (var r = 0, i = t.length; i > r; r++) {
								var o = t[r];
								e.appendChild(o)
							}
						}
					},
					prepend : function (e, t) {
						if (e.nodeType === ni) {
							var n = e.firstChild;
							o(new Te(t), function (t) {
								e.insertBefore(t, n)
							})
						}
					},
					wrap : function (e, t) {
						Me(e, Ur(t).eq(0).clone()[0])
					},
					remove : Be,
					detach : function (e) {
						Be(e, !0)
					},
					after : function (e, t) {
						var n = e,
						r = e.parentNode;
						t = new Te(t);
						for (var i = 0, o = t.length; o > i; i++) {
							var a = t[i];
							r.insertBefore(a, n.nextSibling),
							n = a
						}
					},
					addClass : Ie,
					removeClass : Ve,
					toggleClass : function (e, t, n) {
						t && o(t.split(" "), function (t) {
							var r = n;
							y(r) && (r = !Re(e, t)),
							(r ? Ie : Ve)(e, t)
						})
					},
					parent : function (e) {
						var t = e.parentNode;
						return t && t.nodeType !== si ? t : null
					},
					next : function (e) {
						return e.nextElementSibling
					},
					find : function (e, t) {
						return e.getElementsByTagName ? e.getElementsByTagName(t) : []
					},
					clone : Pe,
					triggerHandler : function (e, t, n) {
						var r,
						i,
						a,
						s = t.type || t,
						u = Fe(e),
						l = u && u.events,
						c = l && l[s];
						c && (r = {
								preventDefault : function () {
									this.defaultPrevented = !0
								},
								isDefaultPrevented : function () {
									return this.defaultPrevented === !0
								},
								stopImmediatePropagation : function () {
									this.immediatePropagationStopped = !0
								},
								isImmediatePropagationStopped : function () {
									return this.immediatePropagationStopped === !0
								},
								stopPropagation : $,
								type : s,
								target : e
							}, t.type && (r = f(r, t)), i = z(c), a = n ? [r].concat(n) : [r], o(i, function (t) {
								r.isImmediatePropagationStopped() || t.apply(e, a)
							}))
					}
				}, function (e, t) {
					Te.prototype[t] = function (t, n, r) {
						for (var i, o = 0, a = this.length; a > o; o++)
							y(i) ? (i = e(this[o], t, n, r), b(i) && (i = Ur(i))) : qe(i, e(this[o], t, n, r));
						return b(i) ? i : this
					},
					Te.prototype.bind = Te.prototype.on,
					Te.prototype.unbind = Te.prototype.off
				}),
				et.prototype = {
					put : function (e, t) {
						this[Qe(e, this.nextUid)] = t
					},
					get : function (e) {
						return this[Qe(e, this.nextUid)]
					},
					remove : function (e) {
						var t = this[e = Qe(e, this.nextUid)];
						return delete this[e],
						t
					}
				};
				var _i = [function () {
						this.$get = [function () {
								return et
							}
						]
					}
				],
				ki = /^([^\(]+?)=>/,
				Oi = /^[^\(]*\(\s*([^\)]*)\)/m,
				Mi = /,/,
				Ti = /^\s*(_?)(\S+?)\1\s*$/,
				Pi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
				Di = r("$injector");
				it.$$annotate = rt;
				var ji = r("$animate"),
				Ui = 1,
				Fi = "ng-animate",
				Ni = function () {
					this.$get = function () {}

				},
				Ri = function () {
					var e = new et,
					t = [];
					this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
							function i(e, t, n) {
								var r = !1;
								return t && (t = S(t) ? t.split(" ") : Wr(t) ? t : [], o(t, function (t) {
										t && (r = !0, e[t] = n)
									})),
								r
							}
							function a() {
								o(t, function (t) {
									var n = e.get(t);
									if (n) {
										var r = ut(t.attr("class")),
										i = "",
										a = "";
										o(n, function (e, t) {
											var n = !!r[t];
											e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
										}),
										o(t, function (e) {
											i && Ie(e, i),
											a && Ve(e, a)
										}),
										e.remove(t)
									}
								}),
								t.length = 0
							}
							function s(n, o, s) {
								var u = e.get(n) || {},
								l = i(u, o, !0),
								c = i(u, s, !1);
								(l || c) && (e.put(n, u), t.push(n), 1 === t.length && r.$$postDigest(a))
							}
							return {
								enabled : $,
								on : $,
								off : $,
								pin : $,
								push : function (e, t, r, i) {
									i && i(),
									r = r || {},
									r.from && e.css(r.from),
									r.to && e.css(r.to),
									(r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass);
									var o = new n;
									return o.complete(),
									o
								}
							}
						}
					]
				},
				Vi = ["$provide", function (e) {
						var t = this;
						this.$$registeredAnimations = Object.create(null),
						this.register = function (n, r) {
							if (n && "." !== n.charAt(0))
								throw ji("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
							var i = n + "-animation";
							t.$$registeredAnimations[n.substr(1)] = i,
							e.factory(i, r)
						},
						this.classNameFilter = function (e) {
							if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
								var t = new RegExp("(\\s+|\\/)" + Fi + "(\\s+|\\/)");
								if (t.test(this.$$classNameFilter.toString()))
									throw ji("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Fi)
							}
							return this.$$classNameFilter
						},
						this.$get = ["$$animateQueue", function (e) {
								function t(e, t, n) {
									if (n) {
										var r = st(n);
										!r || r.parentNode || r.previousElementSibling || (n = null)
									}
									n ? n.after(e) : t.prepend(e)
								}
								return {
									on : e.on,
									off : e.off,
									pin : e.pin,
									enabled : e.enabled,
									cancel : function (e) {
										e.end && e.end()
									},
									enter : function (n, r, i, o) {
										return r = r && Ur(r),
										i = i && Ur(i),
										r = r || i.parent(),
										t(n, r, i),
										e.push(n, "enter", lt(o))
									},
									move : function (n, r, i, o) {
										return r = r && Ur(r),
										i = i && Ur(i),
										r = r || i.parent(),
										t(n, r, i),
										e.push(n, "move", lt(o))
									},
									leave : function (t, n) {
										return e.push(t, "leave", lt(n), function () {
											t.remove()
										})
									},
									addClass : function (t, n, r) {
										return r = lt(r),
										r.addClass = at(r.addclass, n),
										e.push(t, "addClass", r)
									},
									removeClass : function (t, n, r) {
										return r = lt(r),
										r.removeClass = at(r.removeClass, n),
										e.push(t, "removeClass", r)
									},
									setClass : function (t, n, r, i) {
										return i = lt(i),
										i.addClass = at(i.addClass, n),
										i.removeClass = at(i.removeClass, r),
										e.push(t, "setClass", i)
									},
									animate : function (t, n, r, i, o) {
										return o = lt(o),
										o.from = o.from ? f(o.from, n) : n,
										o.to = o.to ? f(o.to, r) : r,
										i = i || "ng-inline-animate",
										o.tempClasses = at(o.tempClasses, i),
										e.push(t, "animate", o)
									}
								}
							}
						]
					}
				],
				Ii = function () {
					this.$get = ["$$rAF", function (e) {
							function t(t) {
								n.push(t),
								n.length > 1 || e(function () {
									for (var e = 0; e < n.length; e++)
										n[e]();
									n = []
								})
							}
							var n = [];
							return function () {
								var e = !1;
								return t(function () {
									e = !0
								}),
								function (n) {
									e ? n() : t(n)
								}
							}
						}
					]
				},
				qi = function () {
					this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (e, t, n, r, i) {
							function a(e) {
								this.setHost(e);
								var t = n(),
								o = function (e) {
									i(e, 0, !1)
								};
								this._doneCallbacks = [],
								this._tick = function (e) {
									var n = r[0];
									n && n.hidden ? o(e) : t(e)
								},
								this._state = 0
							}
							var s = 0,
							u = 1,
							l = 2;
							return a.chain = function (e, t) {
								function n() {
									return r === e.length ? void t(!0) : void e[r](function (e) {
										return e === !1 ? void t(!1) : (r++, void n())
									})
								}
								var r = 0;
								n()
							},
							a.all = function (e, t) {
								function n(n) {
									i = i && n,
									++r === e.length && t(i)
								}
								var r = 0,
								i = !0;
								o(e, function (e) {
									e.done(n)
								})
							},
							a.prototype = {
								setHost : function (e) {
									this.host = e || {}

								},
								done : function (e) {
									this._state === l ? e() : this._doneCallbacks.push(e)
								},
								progress : $,
								getPromise : function () {
									if (!this.promise) {
										var t = this;
										this.promise = e(function (e, n) {
												t.done(function (t) {
													t === !1 ? n() : e()
												})
											})
									}
									return this.promise
								},
								then : function (e, t) {
									return this.getPromise().then(e, t)
								},
								"catch" : function (e) {
									return this.getPromise()["catch"](e)
								},
								"finally" : function (e) {
									return this.getPromise()["finally"](e)
								},
								pause : function () {
									this.host.pause && this.host.pause()
								},
								resume : function () {
									this.host.resume && this.host.resume()
								},
								end : function () {
									this.host.end && this.host.end(),
									this._resolve(!0)
								},
								cancel : function () {
									this.host.cancel && this.host.cancel(),
									this._resolve(!1)
								},
								complete : function (e) {
									var t = this;
									t._state === s && (t._state = u, t._tick(function () {
											t._resolve(e)
										}))
								},
								_resolve : function (e) {
									this._state !== l && (o(this._doneCallbacks, function (t) {
											t(e)
										}), this._doneCallbacks.length = 0, this._state = l)
								}
							},
							a
						}
					]
				},
				zi = function () {
					this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n) {
							return function (t, r) {
								function i() {
									return e(function () {
										o(),
										s || u.complete(),
										s = !0
									}),
									u
								}
								function o() {
									a.addClass && (t.addClass(a.addClass), a.addClass = null),
									a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null),
									a.to && (t.css(a.to), a.to = null)
								}
								var a = r || {};
								a.$$prepared || (a = q(a)),
								a.cleanupStyles && (a.from = a.to = null),
								a.from && (t.css(a.from), a.from = null);
								var s,
								u = new n;
								return {
									start : i,
									end : i
								}
							}
						}
					]
				},
				Li = r("$compile");
				dt.$inject = ["$provide", "$$sanitizeUriProvider"];
				var Hi = /^((?:x|data)[\:\-_])/i,
				Bi = r("$controller"),
				Wi = /^(\S+)(\s+as\s+([\w$]+))?$/,
				Gi = function () {
					this.$get = ["$document", function (e) {
							return function (t) {
								return t ? !t.nodeType && t instanceof Ur && (t = t[0]) : t = e[0].body,
								t.offsetWidth + 1
							}
						}
					]
				},
				Xi = "application/json",
				Ki = {
					"Content-Type" : Xi + ";charset=utf-8"
				},
				Yi = /^\[|^\{(?!\{)/,
				Ji = {
					"[" : /]$/,
					"{" : /}$/
				},
				Zi = /^\)\]\}',?\n/,
				Qi = r("$http"),
				eo = function (e) {
					return function () {
						throw Qi("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
					}
				},
				to = Hr.$interpolateMinErr = r("$interpolate");
				to.throwNoconcat = function (e) {
					throw to("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
				},
				to.interr = function (e, t) {
					return to("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
				};
				var no = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
				ro = {
					http : 80,
					https : 443,
					ftp : 21
				},
				io = r("$location"),
				oo = {
					$$html5 : !1,
					$$replace : !1,
					absUrl : Xt("$$absUrl"),
					url : function (e) {
						if (y(e))
							return this.$$url;
						var t = no.exec(e);
						return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
						(t[2] || t[1] || "" === e) && this.search(t[3] || ""),
						this.hash(t[5] || ""),
						this
					},
					protocol : Xt("$$protocol"),
					host : Xt("$$host"),
					port : Xt("$$port"),
					path : Kt("$$path", function (e) {
						return e = null !== e ? e.toString() : "",
						"/" == e.charAt(0) ? e : "/" + e
					}),
					search : function (e, t) {
						switch (arguments.length) {
						case 0:
							return this.$$search;
						case 1:
							if (S(e) || E(e))
								e = e.toString(), this.$$search = te(e);
							else {
								if (!w(e))
									throw io("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
								e = q(e, {}),
								o(e, function (t, n) {
									null == t && delete e[n]
								}),
								this.$$search = e
							}
							break;
						default:
							y(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
						}
						return this.$$compose(),
						this
					},
					hash : Kt("$$hash", function (e) {
						return null !== e ? e.toString() : ""
					}),
					replace : function () {
						return this.$$replace = !0,
						this
					}
				};
				o([Gt, Wt, Bt], function (e) {
					e.prototype = Object.create(oo),
					e.prototype.state = function (t) {
						if (!arguments.length)
							return this.$$state;
						if (e !== Bt || !this.$$html5)
							throw io("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
						return this.$$state = y(t) ? null : t,
						this
					}
				});
				var ao = r("$parse"),
				so = Function.prototype.call,
				uo = Function.prototype.apply,
				lo = Function.prototype.bind,
				co = ve();
				o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
					co[e] = !0
				});
				var fo = {
					n : "\n",
					f : "\f",
					r : "\r",
					t : "	",
					v : "\x0B",
					"'" : "'",
					'"' : '"'
				},
				ho = function (e) {
					this.options = e
				};
				ho.prototype = {
					constructor : ho,
					lex : function (e) {
						for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
							var t = this.text.charAt(this.index);
							if ('"' === t || "'" === t)
								this.readString(t);
							else if (this.isNumber(t) || "." === t && this.isNumber(this.peek()))
								this.readNumber();
							else if (this.isIdent(t))
								this.readIdent();
							else if (this.is(t, "(){}[].,;:?"))
								this.tokens.push({
									index : this.index,
									text : t
								}), this.index++;
							else if (this.isWhitespace(t))
								this.index++;
							else {
								var n = t + this.peek(),
								r = n + this.peek(2),
								i = co[t],
								o = co[n],
								a = co[r];
								if (i || o || a) {
									var s = a ? r : o ? n : t;
									this.tokens.push({
										index : this.index,
										text : s,
										operator : !0
									}),
									this.index += s.length
								} else
									this.throwError("Unexpected next character ", this.index, this.index + 1)
							}
						}
						return this.tokens
					},
					is : function (e, t) {
						return -1 !== t.indexOf(e)
					},
					peek : function (e) {
						var t = e || 1;
						return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
					},
					isNumber : function (e) {
						return e >= "0" && "9" >= e && "string" == typeof e
					},
					isWhitespace : function (e) {
						return " " === e || "\r" === e || "	" === e || "\n" === e || "\x0B" === e || " " === e
					},
					isIdent : function (e) {
						return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
					},
					isExpOperator : function (e) {
						return "-" === e || "+" === e || this.isNumber(e)
					},
					throwError : function (e, t, n) {
						n = n || this.index;
						var r = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
						throw ao("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
					},
					readNumber : function () {
						for (var e = "", t = this.index; this.index < this.text.length; ) {
							var n = Mr(this.text.charAt(this.index));
							if ("." == n || this.isNumber(n))
								e += n;
							else {
								var r = this.peek();
								if ("e" == n && this.isExpOperator(r))
									e += n;
								else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1))
									e += n;
								else {
									if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1))
										break;
									this.throwError("Invalid exponent")
								}
							}
							this.index++
						}
						this.tokens.push({
							index : t,
							text : e,
							constant : !0,
							value : Number(e)
						})
					},
					readIdent : function () {
						for (var e = this.index; this.index < this.text.length; ) {
							var t = this.text.charAt(this.index);
							if (!this.isIdent(t) && !this.isNumber(t))
								break;
							this.index++
						}
						this.tokens.push({
							index : e,
							text : this.text.slice(e, this.index),
							identifier : !0
						})
					},
					readString : function (e) {
						var t = this.index;
						this.index++;
						for (var n = "", r = e, i = !1; this.index < this.text.length; ) {
							var o = this.text.charAt(this.index);
							if (r += o, i) {
								if ("u" === o) {
									var a = this.text.substring(this.index + 1, this.index + 5);
									a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"),
									this.index += 4,
									n += String.fromCharCode(parseInt(a, 16))
								} else {
									var s = fo[o];
									n += s || o
								}
								i = !1
							} else if ("\\" === o)
								i = !0;
							else {
								if (o === e)
									return this.index++, void this.tokens.push({
										index : t,
										text : r,
										constant : !0,
										value : n
									});
								n += o
							}
							this.index++
						}
						this.throwError("Unterminated quote", t)
					}
				};
				var po = function (e, t) {
					this.lexer = e,
					this.options = t
				};
				po.Program = "Program",
				po.ExpressionStatement = "ExpressionStatement",
				po.AssignmentExpression = "AssignmentExpression",
				po.ConditionalExpression = "ConditionalExpression",
				po.LogicalExpression = "LogicalExpression",
				po.BinaryExpression = "BinaryExpression",
				po.UnaryExpression = "UnaryExpression",
				po.CallExpression = "CallExpression",
				po.MemberExpression = "MemberExpression",
				po.Identifier = "Identifier",
				po.Literal = "Literal",
				po.ArrayExpression = "ArrayExpression",
				po.Property = "Property",
				po.ObjectExpression = "ObjectExpression",
				po.ThisExpression = "ThisExpression",
				po.LocalsExpression = "LocalsExpression",
				po.NGValueParameter = "NGValueParameter",
				po.prototype = {
					ast : function (e) {
						this.text = e,
						this.tokens = this.lexer.lex(e);
						var t = this.program();
						return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
						t
					},
					program : function () {
						for (var e = []; ; )
							if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";"))
								return {
									type : po.Program,
									body : e
								}
					},
					expressionStatement : function () {
						return {
							type : po.ExpressionStatement,
							expression : this.filterChain()
						}
					},
					filterChain : function () {
						for (var e, t = this.expression(); e = this.expect("|"); )
							t = this.filter(t);
						return t
					},
					expression : function () {
						return this.assignment()
					},
					assignment : function () {
						var e = this.ternary();
						return this.expect("=") && (e = {
								type : po.AssignmentExpression,
								left : e,
								right : this.assignment(),
								operator : "="
							}),
						e
					},
					ternary : function () {
						var e,
						t,
						n = this.logicalOR();
						return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
							type : po.ConditionalExpression,
							test : n,
							alternate : e,
							consequent : t
						}) : n
					},
					logicalOR : function () {
						for (var e = this.logicalAND(); this.expect("||"); )
							e = {
								type : po.LogicalExpression,
								operator : "||",
								left : e,
								right : this.logicalAND()
							};
						return e
					},
					logicalAND : function () {
						for (var e = this.equality(); this.expect("&&"); )
							e = {
								type : po.LogicalExpression,
								operator : "&&",
								left : e,
								right : this.equality()
							};
						return e
					},
					equality : function () {
						for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!=="); )
							t = {
								type : po.BinaryExpression,
								operator : e.text,
								left : t,
								right : this.relational()
							};
						return t
					},
					relational : function () {
						for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">="); )
							t = {
								type : po.BinaryExpression,
								operator : e.text,
								left : t,
								right : this.additive()
							};
						return t
					},
					additive : function () {
						for (var e, t = this.multiplicative(); e = this.expect("+", "-"); )
							t = {
								type : po.BinaryExpression,
								operator : e.text,
								left : t,
								right : this.multiplicative()
							};
						return t
					},
					multiplicative : function () {
						for (var e, t = this.unary(); e = this.expect("*", "/", "%"); )
							t = {
								type : po.BinaryExpression,
								operator : e.text,
								left : t,
								right : this.unary()
							};
						return t
					},
					unary : function () {
						var e;
						return (e = this.expect("+", "-", "!")) ? {
							type : po.UnaryExpression,
							operator : e.text,
							prefix : !0,
							argument : this.unary()
						}
						 : this.primary()
					},
					primary : function () {
						var e;
						this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = q(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
						for (var t; t = this.expect("(", "[", "."); )
							"(" === t.text ? (e = {
									type : po.CallExpression,
									callee : e,
									arguments : this.parseArguments()
								}, this.consume(")")) : "[" === t.text ? (e = {
									type : po.MemberExpression,
									object : e,
									property : this.expression(),
									computed : !0
								}, this.consume("]")) : "." === t.text ? e = {
								type : po.MemberExpression,
								object : e,
								property : this.identifier(),
								computed : !1
							}
						 : this.throwError("IMPOSSIBLE");
						return e
					},
					filter : function (e) {
						for (var t = [e], n = {
								type : po.CallExpression,
								callee : this.identifier(),
								arguments : t,
								filter : !0
							}; this.expect(":"); )
							t.push(this.expression());
						return n
					},
					parseArguments : function () {
						var e = [];
						if (")" !== this.peekToken().text)
							do
								e.push(this.expression());
							while (this.expect(","));
						return e
					},
					identifier : function () {
						var e = this.consume();
						return e.identifier || this.throwError("is not a valid identifier", e), {
							type : po.Identifier,
							name : e.text
						}
					},
					constant : function () {
						return {
							type : po.Literal,
							value : this.consume().value
						}
					},
					arrayDeclaration : function () {
						var e = [];
						if ("]" !== this.peekToken().text)
							do {
								if (this.peek("]"))
									break;
								e.push(this.expression())
							} while (this.expect(","));
						return this.consume("]"), {
							type : po.ArrayExpression,
							elements : e
						}
					},
					object : function () {
						var e,
						t = [];
						if ("}" !== this.peekToken().text)
							do {
								if (this.peek("}"))
									break;
								e = {
									type : po.Property,
									kind : "init"
								},
								this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()),
								this.consume(":"),
								e.value = this.expression(),
								t.push(e)
							} while (this.expect(","));
						return this.consume("}"), {
							type : po.ObjectExpression,
							properties : t
						}
					},
					throwError : function (e, t) {
						throw ao("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
					},
					consume : function (e) {
						if (0 === this.tokens.length)
							throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
						var t = this.expect(e);
						return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()),
						t
					},
					peekToken : function () {
						if (0 === this.tokens.length)
							throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
						return this.tokens[0]
					},
					peek : function (e, t, n, r) {
						return this.peekAhead(0, e, t, n, r)
					},
					peekAhead : function (e, t, n, r, i) {
						if (this.tokens.length > e) {
							var o = this.tokens[e],
							a = o.text;
							if (a === t || a === n || a === r || a === i || !t && !n && !r && !i)
								return o
						}
						return !1
					},
					expect : function (e, t, n, r) {
						var i = this.peek(e, t, n, r);
						return i ? (this.tokens.shift(), i) : !1
					},
					constants : {
						"true" : {
							type : po.Literal,
							value : !0
						},
						"false" : {
							type : po.Literal,
							value : !1
						},
						"null" : {
							type : po.Literal,
							value : null
						},
						undefined : {
							type : po.Literal,
							value : n
						},
						"this" : {
							type : po.ThisExpression
						},
						$locals : {
							type : po.LocalsExpression
						}
					}
				},
				pn.prototype = {
					compile : function (e, t) {
						var r = this,
						i = this.astBuilder.ast(e);
						this.state = {
							nextId : 0,
							filters : {},
							expensiveChecks : t,
							fn : {
								vars : [],
								body : [],
								own : {}

							},
							assign : {
								vars : [],
								body : [],
								own : {}

							},
							inputs : []
						},
						sn(i, r.$filter);
						var a,
						s = "";
						if (this.stage = "assign", a = cn(i)) {
							this.state.computing = "assign";
							var u = this.nextId();
							this.recurse(a, u),
							this.return_(u),
							s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
						}
						var l = un(i.body);
						r.stage = "inputs",
						o(l, function (e, t) {
							var n = "fn" + t;
							r.state[n] = {
								vars : [],
								body : [],
								own : {}

							},
							r.state.computing = n;
							var i = r.nextId();
							r.recurse(e, i),
							r.return_(i),
							r.state.inputs.push(n),
							e.watchId = t
						}),
						this.state.computing = "fn",
						this.stage = "main",
						this.recurse(i);
						var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
						f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", c)(this.$filter, Zt, en, tn, Qt, nn, rn, on, e);
						return this.state = this.stage = n,
						f.literal = fn(i),
						f.constant = hn(i),
						f
					},
					USE : "use",
					STRICT : "strict",
					watchFns : function () {
						var e = [],
						t = this.state.inputs,
						n = this;
						return o(t, function (t) {
							e.push("var " + t + "=" + n.generateFunction(t, "s"))
						}),
						t.length && e.push("fn.inputs=[" + t.join(",") + "];"),
						e.join("")
					},
					generateFunction : function (e, t) {
						return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
					},
					filterPrefix : function () {
						var e = [],
						t = this;
						return o(this.state.filters, function (n, r) {
							e.push(n + "=$filter(" + t.escape(r) + ")")
						}),
						e.length ? "var " + e.join(",") + ";" : ""
					},
					varsPrefix : function (e) {
						return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
					},
					body : function (e) {
						return this.state[e].body.join("")
					},
					recurse : function (e, t, r, i, a, s) {
						var u,
						l,
						c,
						f,
						h = this;
						if (i = i || $, !s && b(e.watchId))
							return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, a, !0));
						switch (e.type) {
						case po.Program:
							o(e.body, function (t, r) {
								h.recurse(t.expression, n, n, function (e) {
									l = e
								}),
								r !== e.body.length - 1 ? h.current().body.push(l, ";") : h.return_(l)
							});
							break;
						case po.Literal:
							f = this.escape(e.value),
							this.assign(t, f),
							i(f);
							break;
						case po.UnaryExpression:
							this.recurse(e.argument, n, n, function (e) {
								l = e
							}),
							f = e.operator + "(" + this.ifDefined(l, 0) + ")",
							this.assign(t, f),
							i(f);
							break;
						case po.BinaryExpression:
							this.recurse(e.left, n, n, function (e) {
								u = e
							}),
							this.recurse(e.right, n, n, function (e) {
								l = e
							}),
							f = "+" === e.operator ? this.plus(u, l) : "-" === e.operator ? this.ifDefined(u, 0) + e.operator + this.ifDefined(l, 0) : "(" + u + ")" + e.operator + "(" + l + ")",
							this.assign(t, f),
							i(f);
							break;
						case po.LogicalExpression:
							t = t || this.nextId(),
							h.recurse(e.left, t),
							h.if_("&&" === e.operator ? t : h.not(t), h.lazyRecurse(e.right, t)),
							i(t);
							break;
						case po.ConditionalExpression:
							t = t || this.nextId(),
							h.recurse(e.test, t),
							h.if_(t, h.lazyRecurse(e.alternate, t), h.lazyRecurse(e.consequent, t)),
							i(t);
							break;
						case po.Identifier:
							t = t || this.nextId(),
							r && (r.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name),
							Zt(e.name),
							h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)), function () {
								h.if_("inputs" === h.stage || "s", function () {
									a && 1 !== a && h.if_(h.not(h.nonComputedMember("s", e.name)), h.lazyAssign(h.nonComputedMember("s", e.name), "{}")),
									h.assign(t, h.nonComputedMember("s", e.name))
								})
							}, t && h.lazyAssign(t, h.nonComputedMember("l", e.name))),
							(h.state.expensiveChecks || $n(e.name)) && h.addEnsureSafeObject(t),
							i(t);
							break;
						case po.MemberExpression:
							u = r && (r.context = this.nextId()) || this.nextId(),
							t = t || this.nextId(),
							h.recurse(e.object, u, n, function () {
								h.if_(h.notNull(u), function () {
									a && 1 !== a && h.addEnsureSafeAssignContext(u),
									e.computed ? (l = h.nextId(), h.recurse(e.property, l), h.getStringValue(l), h.addEnsureSafeMemberName(l), a && 1 !== a && h.if_(h.not(h.computedMember(u, l)), h.lazyAssign(h.computedMember(u, l), "{}")), f = h.ensureSafeObject(h.computedMember(u, l)), h.assign(t, f), r && (r.computed = !0, r.name = l)) : (Zt(e.property.name), a && 1 !== a && h.if_(h.not(h.nonComputedMember(u, e.property.name)), h.lazyAssign(h.nonComputedMember(u, e.property.name), "{}")), f = h.nonComputedMember(u, e.property.name), (h.state.expensiveChecks || $n(e.property.name)) && (f = h.ensureSafeObject(f)), h.assign(t, f), r && (r.computed = !1, r.name = e.property.name))
								}, function () {
									h.assign(t, "undefined")
								}),
								i(t)
							}, !!a);
							break;
						case po.CallExpression:
							t = t || this.nextId(),
							e.filter ? (l = h.filter(e.callee.name), c = [], o(e.arguments, function (e) {
									var t = h.nextId();
									h.recurse(e, t),
									c.push(t)
								}), f = l + "(" + c.join(",") + ")", h.assign(t, f), i(t)) : (l = h.nextId(), u = {}, c = [], h.recurse(e.callee, l, u, function () {
									h.if_(h.notNull(l), function () {
										h.addEnsureSafeFunction(l),
										o(e.arguments, function (e) {
											h.recurse(e, h.nextId(), n, function (e) {
												c.push(h.ensureSafeObject(e))
											})
										}),
										u.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(u.context), f = h.member(u.context, u.name, u.computed) + "(" + c.join(",") + ")") : f = l + "(" + c.join(",") + ")",
										f = h.ensureSafeObject(f),
										h.assign(t, f)
									}, function () {
										h.assign(t, "undefined")
									}),
									i(t)
								}));
							break;
						case po.AssignmentExpression:
							if (l = this.nextId(), u = {}, !ln(e.left))
								throw ao("lval", "Trying to assign a value to a non l-value");
							this.recurse(e.left, n, u, function () {
								h.if_(h.notNull(u.context), function () {
									h.recurse(e.right, l),
									h.addEnsureSafeObject(h.member(u.context, u.name, u.computed)),
									h.addEnsureSafeAssignContext(u.context),
									f = h.member(u.context, u.name, u.computed) + e.operator + l,
									h.assign(t, f),
									i(t || f)
								})
							}, 1);
							break;
						case po.ArrayExpression:
							c = [],
							o(e.elements, function (e) {
								h.recurse(e, h.nextId(), n, function (e) {
									c.push(e)
								})
							}),
							f = "[" + c.join(",") + "]",
							this.assign(t, f),
							i(f);
							break;
						case po.ObjectExpression:
							c = [],
							o(e.properties, function (e) {
								h.recurse(e.value, h.nextId(), n, function (t) {
									c.push(h.escape(e.key.type === po.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
								})
							}),
							f = "{" + c.join(",") + "}",
							this.assign(t, f),
							i(f);
							break;
						case po.ThisExpression:
							this.assign(t, "s"),
							i("s");
							break;
						case po.LocalsExpression:
							this.assign(t, "l"),
							i("l");
							break;
						case po.NGValueParameter:
							this.assign(t, "v"),
							i("v")
						}
					},
					getHasOwnProperty : function (e, t) {
						var n = e + "." + t,
						r = this.current().own;
						return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")),
						r[n]
					},
					assign : function (e, t) {
						return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
					},
					filter : function (e) {
						return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)),
						this.state.filters[e]
					},
					ifDefined : function (e, t) {
						return "ifDefined(" + e + "," + this.escape(t) + ")"
					},
					plus : function (e, t) {
						return "plus(" + e + "," + t + ")"
					},
					return_ : function (e) {
						this.current().body.push("return ", e, ";")
					},
					if_ : function (e, t, n) {
						if (e === !0)
							t();
						else {
							var r = this.current().body;
							r.push("if(", e, "){"),
							t(),
							r.push("}"),
							n && (r.push("else{"), n(), r.push("}"))
						}
					},
					not : function (e) {
						return "!(" + e + ")"
					},
					notNull : function (e) {
						return e + "!=null"
					},
					nonComputedMember : function (e, t) {
						return e + "." + t
					},
					computedMember : function (e, t) {
						return e + "[" + t + "]"
					},
					member : function (e, t, n) {
						return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
					},
					addEnsureSafeObject : function (e) {
						this.current().body.push(this.ensureSafeObject(e), ";")
					},
					addEnsureSafeMemberName : function (e) {
						this.current().body.push(this.ensureSafeMemberName(e), ";")
					},
					addEnsureSafeFunction : function (e) {
						this.current().body.push(this.ensureSafeFunction(e), ";")
					},
					addEnsureSafeAssignContext : function (e) {
						this.current().body.push(this.ensureSafeAssignContext(e), ";")
					},
					ensureSafeObject : function (e) {
						return "ensureSafeObject(" + e + ",text)"
					},
					ensureSafeMemberName : function (e) {
						return "ensureSafeMemberName(" + e + ",text)"
					},
					ensureSafeFunction : function (e) {
						return "ensureSafeFunction(" + e + ",text)"
					},
					getStringValue : function (e) {
						this.assign(e, "getStringValue(" + e + ")")
					},
					ensureSafeAssignContext : function (e) {
						return "ensureSafeAssignContext(" + e + ",text)"
					},
					lazyRecurse : function (e, t, n, r, i, o) {
						var a = this;
						return function () {
							a.recurse(e, t, n, r, i, o);
						}
					},
					lazyAssign : function (e, t) {
						var n = this;
						return function () {
							n.assign(e, t)
						}
					},
					stringEscapeRegex : /[^ a-zA-Z0-9]/g,
					stringEscapeFn : function (e) {
						return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
					},
					escape : function (e) {
						if (S(e))
							return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
						if (E(e))
							return e.toString();
						if (e === !0)
							return "true";
						if (e === !1)
							return "false";
						if (null === e)
							return "null";
						if ("undefined" == typeof e)
							return "undefined";
						throw ao("esc", "IMPOSSIBLE")
					},
					nextId : function (e, t) {
						var n = "v" + this.state.nextId++;
						return e || this.current().vars.push(n + (t ? "=" + t : "")),
						n
					},
					current : function () {
						return this.state[this.state.computing]
					}
				},
				dn.prototype = {
					compile : function (e, t) {
						var n = this,
						r = this.astBuilder.ast(e);
						this.expression = e,
						this.expensiveChecks = t,
						sn(r, n.$filter);
						var i,
						a;
						(i = cn(r)) && (a = this.recurse(i));
						var s,
						u = un(r.body);
						u && (s = [], o(u, function (e, t) {
								var r = n.recurse(e);
								e.input = r,
								s.push(r),
								e.watchId = t
							}));
						var l = [];
						o(r.body, function (e) {
							l.push(n.recurse(e.expression))
						});
						var c = 0 === r.body.length ? function () {}

						 : 1 === r.body.length ? l[0] : function (e, t) {
							var n;
							return o(l, function (r) {
								n = r(e, t)
							}),
							n
						};
						return a && (c.assign = function (e, t, n) {
							return a(e, n, t)
						}),
						s && (c.inputs = s),
						c.literal = fn(r),
						c.constant = hn(r),
						c
					},
					recurse : function (e, t, r) {
						var i,
						a,
						s,
						u = this;
						if (e.input)
							return this.inputs(e.input, e.watchId);
						switch (e.type) {
						case po.Literal:
							return this.value(e.value, t);
						case po.UnaryExpression:
							return a = this.recurse(e.argument),
							this["unary" + e.operator](a, t);
						case po.BinaryExpression:
							return i = this.recurse(e.left),
							a = this.recurse(e.right),
							this["binary" + e.operator](i, a, t);
						case po.LogicalExpression:
							return i = this.recurse(e.left),
							a = this.recurse(e.right),
							this["binary" + e.operator](i, a, t);
						case po.ConditionalExpression:
							return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
						case po.Identifier:
							return Zt(e.name, u.expression),
							u.identifier(e.name, u.expensiveChecks || $n(e.name), t, r, u.expression);
						case po.MemberExpression:
							return i = this.recurse(e.object, !1, !!r),
							e.computed || (Zt(e.property.name, u.expression), a = e.property.name),
							e.computed && (a = this.recurse(e.property)),
							e.computed ? this.computedMember(i, a, t, r, u.expression) : this.nonComputedMember(i, a, u.expensiveChecks, t, r, u.expression);
						case po.CallExpression:
							return s = [],
							o(e.arguments, function (e) {
								s.push(u.recurse(e))
							}),
							e.filter && (a = this.$filter(e.callee.name)),
							e.filter || (a = this.recurse(e.callee, !0)),
							e.filter ? function (e, r, i, o) {
								for (var u = [], l = 0; l < s.length; ++l)
									u.push(s[l](e, r, i, o));
								var c = a.apply(n, u, o);
								return t ? {
									context : n,
									name : n,
									value : c
								}
								 : c
							}
							 : function (e, n, r, i) {
								var o,
								l = a(e, n, r, i);
								if (null != l.value) {
									en(l.context, u.expression),
									tn(l.value, u.expression);
									for (var c = [], f = 0; f < s.length; ++f)
										c.push(en(s[f](e, n, r, i), u.expression));
									o = en(l.value.apply(l.context, c), u.expression)
								}
								return t ? {
									value : o
								}
								 : o
							};
						case po.AssignmentExpression:
							return i = this.recurse(e.left, !0, 1),
							a = this.recurse(e.right),
							function (e, n, r, o) {
								var s = i(e, n, r, o),
								l = a(e, n, r, o);
								return en(s.value, u.expression),
								nn(s.context),
								s.context[s.name] = l,
								t ? {
									value : l
								}
								 : l
							};
						case po.ArrayExpression:
							return s = [],
							o(e.elements, function (e) {
								s.push(u.recurse(e))
							}),
							function (e, n, r, i) {
								for (var o = [], a = 0; a < s.length; ++a)
									o.push(s[a](e, n, r, i));
								return t ? {
									value : o
								}
								 : o
							};
						case po.ObjectExpression:
							return s = [],
							o(e.properties, function (e) {
								s.push({
									key : e.key.type === po.Identifier ? e.key.name : "" + e.key.value,
									value : u.recurse(e.value)
								})
							}),
							function (e, n, r, i) {
								for (var o = {}, a = 0; a < s.length; ++a)
									o[s[a].key] = s[a].value(e, n, r, i);
								return t ? {
									value : o
								}
								 : o
							};
						case po.ThisExpression:
							return function (e) {
								return t ? {
									value : e
								}
								 : e
							};
						case po.LocalsExpression:
							return function (e, n) {
								return t ? {
									value : n
								}
								 : n
							};
						case po.NGValueParameter:
							return function (e, n, r, i) {
								return t ? {
									value : r
								}
								 : r
							}
						}
					},
					"unary+" : function (e, t) {
						return function (n, r, i, o) {
							var a = e(n, r, i, o);
							return a = b(a) ? +a : 0,
							t ? {
								value : a
							}
							 : a
						}
					},
					"unary-" : function (e, t) {
						return function (n, r, i, o) {
							var a = e(n, r, i, o);
							return a = b(a) ? -a : 0,
							t ? {
								value : a
							}
							 : a
						}
					},
					"unary!" : function (e, t) {
						return function (n, r, i, o) {
							var a = !e(n, r, i, o);
							return t ? {
								value : a
							}
							 : a
						}
					},
					"binary+" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a),
							u = t(r, i, o, a),
							l = on(s, u);
							return n ? {
								value : l
							}
							 : l
						}
					},
					"binary-" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a),
							u = t(r, i, o, a),
							l = (b(s) ? s : 0) - (b(u) ? u : 0);
							return n ? {
								value : l
							}
							 : l
						}
					},
					"binary*" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) * t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary/" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) / t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary%" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) % t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary===" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) === t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary!==" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) !== t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary==" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) == t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary!=" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) != t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary<" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) < t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary>" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) > t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary<=" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) <= t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary>=" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) >= t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary&&" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) && t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"binary||" : function (e, t, n) {
						return function (r, i, o, a) {
							var s = e(r, i, o, a) || t(r, i, o, a);
							return n ? {
								value : s
							}
							 : s
						}
					},
					"ternary?:" : function (e, t, n, r) {
						return function (i, o, a, s) {
							var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
							return r ? {
								value : u
							}
							 : u
						}
					},
					value : function (e, t) {
						return function () {
							return t ? {
								context : n,
								name : n,
								value : e
							}
							 : e
						}
					},
					identifier : function (e, t, r, i, o) {
						return function (a, s, u, l) {
							var c = s && e in s ? s : a;
							i && 1 !== i && c && !c[e] && (c[e] = {});
							var f = c ? c[e] : n;
							return t && en(f, o),
							r ? {
								context : c,
								name : e,
								value : f
							}
							 : f
						}
					},
					computedMember : function (e, t, n, r, i) {
						return function (o, a, s, u) {
							var l,
							c,
							f = e(o, a, s, u);
							return null != f && (l = t(o, a, s, u), l = Qt(l), Zt(l, i), r && 1 !== r && (nn(f), f && !f[l] && (f[l] = {})), c = f[l], en(c, i)),
							n ? {
								context : f,
								name : l,
								value : c
							}
							 : c
						}
					},
					nonComputedMember : function (e, t, r, i, o, a) {
						return function (s, u, l, c) {
							var f = e(s, u, l, c);
							o && 1 !== o && (nn(f), f && !f[t] && (f[t] = {}));
							var h = null != f ? f[t] : n;
							return (r || $n(t)) && en(h, a),
							i ? {
								context : f,
								name : t,
								value : h
							}
							 : h
						}
					},
					inputs : function (e, t) {
						return function (n, r, i, o) {
							return o ? o[t] : e(n, r, i)
						}
					}
				};
				var $o = function (e, t, n) {
					this.lexer = e,
					this.$filter = t,
					this.options = n,
					this.ast = new po(this.lexer),
					this.astCompiler = n.csp ? new dn(this.ast, t) : new pn(this.ast, t)
				};
				$o.prototype = {
					constructor : $o,
					parse : function (e) {
						return this.astCompiler.compile(e, this.options.expensiveChecks)
					}
				};
				var go = Object.prototype.valueOf,
				vo = r("$sce"),
				mo = {
					HTML : "html",
					CSS : "css",
					URL : "url",
					RESOURCE_URL : "resourceUrl",
					JS : "js"
				},
				Li = r("$compile"),
				yo = t.createElement("a"),
				bo = Pn(e.location.href);
				Un.$inject = ["$document"],
				Nn.$inject = ["$provide"];
				var wo = 22,
				xo = ".",
				So = "0";
				zn.$inject = ["$locale"],
				Ln.$inject = ["$locale"];
				var Eo = {
					yyyy : Xn("FullYear", 4),
					yy : Xn("FullYear", 2, 0, !0),
					y : Xn("FullYear", 1),
					MMMM : Kn("Month"),
					MMM : Kn("Month", !0),
					MM : Xn("Month", 2, 1),
					M : Xn("Month", 1, 1),
					dd : Xn("Date", 2),
					d : Xn("Date", 1),
					HH : Xn("Hours", 2),
					H : Xn("Hours", 1),
					hh : Xn("Hours", 2, -12),
					h : Xn("Hours", 1, -12),
					mm : Xn("Minutes", 2),
					m : Xn("Minutes", 1),
					ss : Xn("Seconds", 2),
					s : Xn("Seconds", 1),
					sss : Xn("Milliseconds", 3),
					EEEE : Kn("Day"),
					EEE : Kn("Day", !0),
					a : er,
					Z : Yn,
					ww : Qn(2),
					w : Qn(1),
					G : tr,
					GG : tr,
					GGG : tr,
					GGGG : nr
				},
				Ao = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
				Co = /^\-?\d+$/;
				rr.$inject = ["$locale"];
				var _o = v(Mr),
				ko = v(Tr);
				ar.$inject = ["$parse"];
				var Oo = v({
						restrict : "E",
						compile : function (e, t) {
							return t.href || t.xlinkHref ? void 0 : function (e, t) {
								if ("a" === t[0].nodeName.toLowerCase()) {
									var n = "[object SVGAnimatedString]" === qr.call(t.prop("href")) ? "xlink:href" : "href";
									t.on("click", function (e) {
										t.attr(n) || e.preventDefault()
									})
								}
							}
						}
					}),
				Mo = {};
				o(Ei, function (e, t) {
					function n(e, n, i) {
						e.$watch(i[r], function (e) {
							i.$set(t, !!e)
						})
					}
					if ("multiple" != e) {
						var r = $t("ng-" + t),
						i = n;
						"checked" === e && (i = function (e, t, i) {
							i.ngModel !== i[r] && n(e, t, i)
						}),
						Mo[r] = function () {
							return {
								restrict : "A",
								priority : 100,
								link : i
							}
						}
					}
				}),
				o(Ci, function (e, t) {
					Mo[t] = function () {
						return {
							priority : 100,
							link : function (e, n, r) {
								if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
									var i = r.ngPattern.match(_r);
									if (i)
										return void r.$set("ngPattern", new RegExp(i[1], i[2]))
								}
								e.$watch(r[t], function (e) {
									r.$set(t, e)
								})
							}
						}
					}
				}),
				o(["src", "srcset", "href"], function (e) {
					var t = $t("ng-" + e);
					Mo[t] = function () {
						return {
							priority : 99,
							link : function (n, r, i) {
								var o = e,
								a = e;
								"href" === e && "[object SVGAnimatedString]" === qr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null),
								i.$observe(t, function (t) {
									return t ? (i.$set(a, t), void(jr && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
								})
							}
						}
					}
				});
				var To = {
					$addControl : $,
					$$renameControl : ur,
					$removeControl : $,
					$setValidity : $,
					$setDirty : $,
					$setPristine : $,
					$setSubmitted : $
				},
				Po = "ng-submitted";
				lr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
				var Do = function (e) {
					return ["$timeout", "$parse", function (t, r) {
							function i(e) {
								return "" === e ? r('this[""]').assign : r(e).assign || $
							}
							var o = {
								name : "form",
								restrict : e ? "EAC" : "E",
								require : ["form", "^^?form"],
								controller : lr,
								compile : function (r, o) {
									r.addClass(pa).addClass(fa);
									var a = o.name ? "name" : e && o.ngForm ? "ngForm" : !1;
									return {
										pre : function (e, r, o, s) {
											var u = s[0];
											if (!("action" in o)) {
												var l = function (t) {
													e.$apply(function () {
														u.$commitViewValue(),
														u.$setSubmitted()
													}),
													t.preventDefault()
												};
												fi(r[0], "submit", l),
												r.on("$destroy", function () {
													t(function () {
														hi(r[0], "submit", l)
													}, 0, !1)
												})
											}
											var c = s[1] || u.$$parentForm;
											c.$addControl(u);
											var h = a ? i(u.$name) : $;
											a && (h(e, u), o.$observe(a, function (t) {
													u.$name !== t && (h(e, n), u.$$parentForm.$$renameControl(u, t), (h = i(u.$name))(e, u))
												})),
											r.on("$destroy", function () {
												u.$$parentForm.$removeControl(u),
												h(e, n),
												f(u, To)
											})
										}
									}
								}
							};
							return o
						}
					]
				},
				jo = Do(),
				Uo = Do(!0),
				Fo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
				No = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
				Ro = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
				Vo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
				Io = /^(\d{4})-(\d{2})-(\d{2})$/,
				qo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
				zo = /^(\d{4})-W(\d\d)$/,
				Lo = /^(\d{4})-(\d\d)$/,
				Ho = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
				Bo = {
					text : fr,
					date : $r("date", Io, dr(Io, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
					"datetime-local" : $r("datetimelocal", qo, dr(qo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
					time : $r("time", Ho, dr(Ho, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
					week : $r("week", zo, pr, "yyyy-Www"),
					month : $r("month", Lo, dr(Lo, ["yyyy", "MM"]), "yyyy-MM"),
					number : vr,
					url : mr,
					email : yr,
					radio : br,
					checkbox : xr,
					hidden : $,
					button : $,
					submit : $,
					reset : $,
					file : $
				},
				Wo = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, r) {
						return {
							restrict : "E",
							require : ["?ngModel"],
							link : {
								pre : function (i, o, a, s) {
									s[0] && (Bo[Mr(a.type)] || Bo.text)(i, o, a, s[0], t, e, n, r)
								}
							}
						}
					}
				],
				Go = /^(true|false|\d+)$/,
				Xo = function () {
					return {
						restrict : "A",
						priority : 100,
						compile : function (e, t) {
							return Go.test(t.ngValue) ? function (e, t, n) {
								n.$set("value", e.$eval(n.ngValue))
							}
							 : function (e, t, n) {
								e.$watch(n.ngValue, function (e) {
									n.$set("value", e)
								})
							}
						}
					}
				},
				Ko = ["$compile", function (e) {
						return {
							restrict : "AC",
							compile : function (t) {
								return e.$$addBindingClass(t),
								function (t, n, r) {
									e.$$addBindingInfo(n, r.ngBind),
									n = n[0],
									t.$watch(r.ngBind, function (e) {
										n.textContent = y(e) ? "" : e
									})
								}
							}
						}
					}
				],
				Yo = ["$interpolate", "$compile", function (e, t) {
						return {
							compile : function (n) {
								return t.$$addBindingClass(n),
								function (n, r, i) {
									var o = e(r.attr(i.$attr.ngBindTemplate));
									t.$$addBindingInfo(r, o.expressions),
									r = r[0],
									i.$observe("ngBindTemplate", function (e) {
										r.textContent = y(e) ? "" : e
									})
								}
							}
						}
					}
				],
				Jo = ["$sce", "$parse", "$compile", function (e, t, n) {
						return {
							restrict : "A",
							compile : function (r, i) {
								var o = t(i.ngBindHtml),
								a = t(i.ngBindHtml, function (e) {
										return (e || "").toString()
									});
								return n.$$addBindingClass(r),
								function (t, r, i) {
									n.$$addBindingInfo(r, i.ngBindHtml),
									t.$watch(a, function () {
										r.html(e.getTrustedHtml(o(t)) || "")
									})
								}
							}
						}
					}
				],
				Zo = v({
						restrict : "A",
						require : "ngModel",
						link : function (e, t, n, r) {
							r.$viewChangeListeners.push(function () {
								e.$eval(n.ngChange)
							})
						}
					}),
				Qo = Sr("", !0),
				ea = Sr("Odd", 0),
				ta = Sr("Even", 1),
				na = sr({
						compile : function (e, t) {
							t.$set("ngCloak", n),
							e.removeClass("ng-cloak")
						}
					}),
				ra = [function () {
						return {
							restrict : "A",
							scope : !0,
							controller : "@",
							priority : 500
						}
					}
				],
				ia = {},
				oa = {
					blur : !0,
					focus : !0
				};
				o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
					var t = $t("ng-" + e);
					ia[t] = ["$parse", "$rootScope", function (n, r) {
							return {
								restrict : "A",
								compile : function (i, o) {
									var a = n(o[t], null, !0);
									return function (t, n) {
										n.on(e, function (n) {
											var i = function () {
												a(t, {
													$event : n
												})
											};
											oa[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
										})
									}
								}
							}
						}
					]
				});
				var aa = ["$animate", function (e) {
						return {
							multiElement : !0,
							transclude : "element",
							priority : 600,
							terminal : !0,
							restrict : "A",
							$$tlb : !0,
							link : function (n, r, i, o, a) {
								var s,
								u,
								l;
								n.$watch(i.ngIf, function (n) {
									n ? u || a(function (n, o) {
										u = o,
										n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "),
										s = {
											clone : n
										},
										e.enter(n, r.parent(), r)
									}) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ge(s.clone), e.leave(l).then(function () {
												l = null
											}), s = null))
								})
							}
						}
					}
				],
				sa = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n) {
						return {
							restrict : "ECA",
							priority : 400,
							terminal : !0,
							transclude : "element",
							controller : Hr.noop,
							compile : function (r, i) {
								var o = i.ngInclude || i.src,
								a = i.onload || "",
								s = i.autoscroll;
								return function (r, i, u, l, c) {
									var f,
									h,
									p,
									d = 0,
									$ = function () {
										h && (h.remove(), h = null),
										f && (f.$destroy(), f = null),
										p && (n.leave(p).then(function () {
												h = null
											}), h = p, p = null)
									};
									r.$watch(o, function (o) {
										var u = function () {
											!b(s) || s && !r.$eval(s) || t()
										},
										h = ++d;
										o ? (e(o, !0).then(function (e) {
												if (!r.$$destroyed && h === d) {
													var t = r.$new();
													l.template = e;
													var s = c(t, function (e) {
															$(),
															n.enter(e, null, i).then(u)
														});
													f = t,
													p = s,
													f.$emit("$includeContentLoaded", o),
													r.$eval(a)
												}
											}, function () {
												r.$$destroyed || h === d && ($(), r.$emit("$includeContentError", o))
											}), r.$emit("$includeContentRequested", o)) : ($(), l.template = null)
									})
								}
							}
						}
					}
				],
				ua = ["$compile", function (e) {
						return {
							restrict : "ECA",
							priority : -400,
							require : "ngInclude",
							link : function (n, r, i, o) {
								return qr.call(r[0]).match(/SVG/) ? (r.empty(), void e(ke(o.template, t).childNodes)(n, function (e) {
										r.append(e)
									}, {
										futureParentElement : r
									})) : (r.html(o.template), void e(r.contents())(n))
							}
						}
					}
				],
				la = sr({
						priority : 450,
						compile : function () {
							return {
								pre : function (e, t, n) {
									e.$eval(n.ngInit)
								}
							}
						}
					}),
				ca = function () {
					return {
						restrict : "A",
						priority : 100,
						require : "ngModel",
						link : function (e, t, r, i) {
							var a = t.attr(r.$attr.ngList) || ", ",
							s = "false" !== r.ngTrim,
							u = s ? Xr(a) : a,
							l = function (e) {
								if (!y(e)) {
									var t = [];
									return e && o(e.split(u), function (e) {
										e && t.push(s ? Xr(e) : e)
									}),
									t
								}
							};
							i.$parsers.push(l),
							i.$formatters.push(function (e) {
								return Wr(e) ? e.join(a) : n
							}),
							i.$isEmpty = function (e) {
								return !e || !e.length
							}
						}
					}
				},
				fa = "ng-valid",
				ha = "ng-invalid",
				pa = "ng-pristine",
				da = "ng-dirty",
				$a = "ng-untouched",
				ga = "ng-touched",
				va = "ng-pending",
				ma = "ng-empty",
				ya = "ng-not-empty",
				ba = r("ngModel"),
				wa = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (e, t, r, i, a, s, u, l, c, f) {
						this.$viewValue = Number.NaN,
						this.$modelValue = Number.NaN,
						this.$$rawModelValue = n,
						this.$validators = {},
						this.$asyncValidators = {},
						this.$parsers = [],
						this.$formatters = [],
						this.$viewChangeListeners = [],
						this.$untouched = !0,
						this.$touched = !1,
						this.$pristine = !0,
						this.$dirty = !1,
						this.$valid = !0,
						this.$invalid = !1,
						this.$error = {},
						this.$$success = {},
						this.$pending = n,
						this.$name = f(r.name || "", !1)(e),
						this.$$parentForm = To;
						var h,
						p = a(r.ngModel),
						d = p.assign,
						g = p,
						v = d,
						m = null,
						w = this;
						this.$$setOptions = function (e) {
							if (w.$options = e, e && e.getterSetter) {
								var t = a(r.ngModel + "()"),
								n = a(r.ngModel + "($$$p)");
								g = function (e) {
									var n = p(e);
									return C(n) && (n = t(e)),
									n
								},
								v = function (e, t) {
									C(p(e)) ? n(e, {
										$$$p : w.$modelValue
									}) : d(e, w.$modelValue)
								}
							} else if (!p.assign)
								throw ba("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, Q(i))
						},
						this.$render = $,
						this.$isEmpty = function (e) {
							return y(e) || "" === e || null === e || e !== e
						},
						this.$$updateEmptyClasses = function (e) {
							w.$isEmpty(e) ? (s.removeClass(i, ya), s.addClass(i, ma)) : (s.removeClass(i, ma), s.addClass(i, ya))
						};
						var x = 0;
						Er({
							ctrl : this,
							$element : i,
							set : function (e, t) {
								e[t] = !0
							},
							unset : function (e, t) {
								delete e[t]
							},
							$animate : s
						}),
						this.$setPristine = function () {
							w.$dirty = !1,
							w.$pristine = !0,
							s.removeClass(i, da),
							s.addClass(i, pa)
						},
						this.$setDirty = function () {
							w.$dirty = !0,
							w.$pristine = !1,
							s.removeClass(i, pa),
							s.addClass(i, da),
							w.$$parentForm.$setDirty()
						},
						this.$setUntouched = function () {
							w.$touched = !1,
							w.$untouched = !0,
							s.setClass(i, $a, ga)
						},
						this.$setTouched = function () {
							w.$touched = !0,
							w.$untouched = !1,
							s.setClass(i, ga, $a)
						},
						this.$rollbackViewValue = function () {
							u.cancel(m),
							w.$viewValue = w.$$lastCommittedViewValue,
							w.$render()
						},
						this.$validate = function () {
							if (!E(w.$modelValue) || !isNaN(w.$modelValue)) {
								var e = w.$$lastCommittedViewValue,
								t = w.$$rawModelValue,
								r = w.$valid,
								i = w.$modelValue,
								o = w.$options && w.$options.allowInvalid;
								w.$$runValidators(t, e, function (e) {
									o || r === e || (w.$modelValue = e ? t : n, w.$modelValue !== i && w.$$writeModelToScope())
								})
							}
						},
						this.$$runValidators = function (e, t, r) {
							function i() {
								var e = w.$$parserName || "parse";
								return y(h) ? (u(e, null), !0) : (h || (o(w.$validators, function (e, t) {
											u(t, null)
										}), o(w.$asyncValidators, function (e, t) {
											u(t, null)
										})), u(e, h), h)
							}
							function a() {
								var n = !0;
								return o(w.$validators, function (r, i) {
									var o = r(e, t);
									n = n && o,
									u(i, o)
								}),
								n ? !0 : (o(w.$asyncValidators, function (e, t) {
										u(t, null)
									}), !1)
							}
							function s() {
								var r = [],
								i = !0;
								o(w.$asyncValidators, function (o, a) {
									var s = o(e, t);
									if (!j(s))
										throw ba("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
									u(a, n),
									r.push(s.then(function () {
											u(a, !0)
										}, function (e) {
											i = !1,
											u(a, !1)
										}))
								}),
								r.length ? c.all(r).then(function () {
									l(i)
								}, $) : l(!0)
							}
							function u(e, t) {
								f === x && w.$setValidity(e, t)
							}
							function l(e) {
								f === x && r(e)
							}
							x++;
							var f = x;
							return i() && a() ? void s() : void l(!1)
						},
						this.$commitViewValue = function () {
							var e = w.$viewValue;
							u.cancel(m),
							(w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$updateEmptyClasses(e), w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
						},
						this.$$parseAndValidate = function () {
							function t() {
								w.$modelValue !== a && w.$$writeModelToScope()
							}
							var r = w.$$lastCommittedViewValue,
							i = r;
							if (h = y(i) ? n : !0)
								for (var o = 0; o < w.$parsers.length; o++)
									if (i = w.$parsers[o](i), y(i)) {
										h = !1;
										break
									}
							E(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = g(e));
							var a = w.$modelValue,
							s = w.$options && w.$options.allowInvalid;
							w.$$rawModelValue = i,
							s && (w.$modelValue = i, t()),
							w.$$runValidators(i, w.$$lastCommittedViewValue, function (e) {
								s || (w.$modelValue = e ? i : n, t())
							})
						},
						this.$$writeModelToScope = function () {
							v(e, w.$modelValue),
							o(w.$viewChangeListeners, function (e) {
								try {
									e()
								} catch (n) {
									t(n)
								}
							})
						},
						this.$setViewValue = function (e, t) {
							w.$viewValue = e,
							w.$options && !w.$options.updateOnDefault || w.$$debounceViewValueCommit(t)
						},
						this.$$debounceViewValueCommit = function (t) {
							var n,
							r = 0,
							i = w.$options;
							i && b(i.debounce) && (n = i.debounce, E(n) ? r = n : E(n[t]) ? r = n[t] : E(n["default"]) && (r = n["default"])),
							u.cancel(m),
							r ? m = u(function () {
									w.$commitViewValue()
								}, r) : l.$$phase ? w.$commitViewValue() : e.$apply(function () {
									w.$commitViewValue()
								})
						},
						e.$watch(function () {
							var t = g(e);
							if (t !== w.$modelValue && (w.$modelValue === w.$modelValue || t === t)) {
								w.$modelValue = w.$$rawModelValue = t,
								h = n;
								for (var r = w.$formatters, i = r.length, o = t; i--; )
									o = r[i](o);
								w.$viewValue !== o && (w.$$updateEmptyClasses(o), w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(t, o, $))
							}
							return t
						})
					}
				],
				xa = ["$rootScope", function (e) {
						return {
							restrict : "A",
							require : ["ngModel", "^?form", "^?ngModelOptions"],
							controller : wa,
							priority : 1,
							compile : function (t) {
								return t.addClass(pa).addClass($a).addClass(fa), {
									pre : function (e, t, n, r) {
										var i = r[0],
										o = r[1] || i.$$parentForm;
										i.$$setOptions(r[2] && r[2].$options),
										o.$addControl(i),
										n.$observe("name", function (e) {
											i.$name !== e && i.$$parentForm.$$renameControl(i, e)
										}),
										e.$on("$destroy", function () {
											i.$$parentForm.$removeControl(i)
										})
									},
									post : function (t, n, r, i) {
										var o = i[0];
										o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (e) {
											o.$$debounceViewValueCommit(e && e.type)
										}),
										n.on("blur", function (n) {
											o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
										})
									}
								}
							}
						}
					}
				],
				Sa = /(\s+|^)default(\s+|$)/,
				Ea = function () {
					return {
						restrict : "A",
						controller : ["$scope", "$attrs", function (e, t) {
								var n = this;
								this.$options = q(e.$eval(t.ngModelOptions)),
								b(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Xr(this.$options.updateOn.replace(Sa, function () {
												return n.$options.updateOnDefault = !0,
												" "
											}))) : this.$options.updateOnDefault = !0
							}
						]
					}
				},
				Aa = sr({
						terminal : !0,
						priority : 1e3
					}),
				Ca = r("ngOptions"),
				_a = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
				ka = ["$compile", "$parse", function (e, n) {
						function r(e, t, r) {
							function o(e, t, n, r, i) {
								this.selectValue = e,
								this.viewValue = t,
								this.label = n,
								this.group = r,
								this.disabled = i
							}
							function a(e) {
								var t;
								if (!l && i(e))
									t = e;
								else {
									t = [];
									for (var n in e)
										e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
								}
								return t
							}
							var s = e.match(_a);
							if (!s)
								throw Ca("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Q(t));
							var u = s[5] || s[7],
							l = s[6],
							c = / as /.test(s[0]) && s[1],
							f = s[9],
							h = n(s[2] ? s[1] : u),
							p = c && n(c),
							d = p || h,
							$ = f && n(f),
							g = f ? function (e, t) {
								return $(r, t)
							}
							 : function (e) {
								return Qe(e)
							},
							v = function (e, t) {
								return g(e, S(e, t))
							},
							m = n(s[2] || s[1]),
							y = n(s[3] || ""),
							b = n(s[4] || ""),
							w = n(s[8]),
							x = {},
							S = l ? function (e, t) {
								return x[l] = t,
								x[u] = e,
								x
							}
							 : function (e) {
								return x[u] = e,
								x
							};
							return {
								trackBy : f,
								getTrackByValue : v,
								getWatchables : n(w, function (e) {
									var t = [];
									e = e || [];
									for (var n = a(e), i = n.length, o = 0; i > o; o++) {
										var u = e === n ? o : n[o],
										l = (e[u], S(e[u], u)),
										c = g(e[u], l);
										if (t.push(c), s[2] || s[1]) {
											var f = m(r, l);
											t.push(f)
										}
										if (s[4]) {
											var h = b(r, l);
											t.push(h)
										}
									}
									return t
								}),
								getOptions : function () {
									for (var e = [], t = {}, n = w(r) || [], i = a(n), s = i.length, u = 0; s > u; u++) {
										var l = n === i ? u : i[u],
										c = n[l],
										h = S(c, l),
										p = d(r, h),
										$ = g(p, h),
										x = m(r, h),
										E = y(r, h),
										A = b(r, h),
										C = new o($, p, x, E, A);
										e.push(C),
										t[$] = C
									}
									return {
										items : e,
										selectValueMap : t,
										getOptionFromViewValue : function (e) {
											return t[v(e)]
										},
										getViewValueFromOption : function (e) {
											return f ? Hr.copy(e.viewValue) : e.viewValue
										}
									}
								}
							}
						}
						function a(t, n, i, a) {
							function l(e, t) {
								e.element = t,
								t.disabled = e.disabled,
								e.label !== t.label && (t.label = e.label, t.textContent = e.label),
								e.value !== t.value && (t.value = e.selectValue)
							}
							function c(e, t, n, r) {
								var i;
								return t && Mr(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)),
								i
							}
							function f(e) {
								for (var t; e; )
									t = e.nextSibling, Be(e), e = t
							}
							function h(e) {
								var t = d && d[0],
								n = S && S[0];
								if (t || n)
									for (; e && (e === t || e === n || e.nodeType === oi || "option" === V(e) && "" === e.value); )
										e = e.nextSibling;
								return e
							}
							function p() {
								var e = E && $.readValue();
								E = A.getOptions();
								var t = {},
								r = n[0].firstChild;
								if (x && n.prepend(d), r = h(r), E.items.forEach(function (e) {
										var i,
										o,
										a;
										b(e.group) ? (i = t[e.group], i || (o = c(n[0], r, "optgroup", u), r = o.nextSibling, o.label = e.group, i = t[e.group] = {
													groupElement : o,
													currentOptionElement : o.firstChild
												}), a = c(i.groupElement, i.currentOptionElement, "option", s), l(e, a), i.currentOptionElement = a.nextSibling) : (a = c(n[0], r, "option", s), l(e, a), r = a.nextSibling)
									}), Object.keys(t).forEach(function (e) {
										f(t[e].currentOptionElement)
									}), f(r), g.$render(), !g.$isEmpty(e)) {
									var i = $.readValue(),
									o = A.trackBy || v;
									(o ? L(e, i) : e === i) || (g.$setViewValue(i), g.$render())
								}
							}
							for (var d, $ = a[0], g = a[1], v = i.multiple, m = 0, y = n.children(), w = y.length; w > m; m++)
								if ("" === y[m].value) {
									d = y.eq(m);
									break
								}
							var x = !!d,
							S = Ur(s.cloneNode(!1));
							S.val("?");
							var E,
							A = r(i.ngOptions, n, t),
							C = function () {
								x || n.prepend(d),
								n.val(""),
								d.prop("selected", !0),
								d.attr("selected", !0)
							},
							_ = function () {
								x || d.remove()
							},
							k = function () {
								n.prepend(S),
								n.val("?"),
								S.prop("selected", !0),
								S.attr("selected", !0)
							},
							O = function () {
								S.remove()
							};
							v ? (g.$isEmpty = function (e) {
								return !e || 0 === e.length
							}, $.writeValue = function (e) {
								E.items.forEach(function (e) {
									e.element.selected = !1
								}),
								e && e.forEach(function (e) {
									var t = E.getOptionFromViewValue(e);
									t && !t.disabled && (t.element.selected = !0)
								})
							}, $.readValue = function () {
								var e = n.val() || [],
								t = [];
								return o(e, function (e) {
									var n = E.selectValueMap[e];
									n && !n.disabled && t.push(E.getViewValueFromOption(n))
								}),
								t
							}, A.trackBy && t.$watchCollection(function () {
									return Wr(g.$viewValue) ? g.$viewValue.map(function (e) {
										return A.getTrackByValue(e)
									}) : void 0
								}, function () {
									g.$render()
								})) : ($.writeValue = function (e) {
								var t = E.getOptionFromViewValue(e);
								t && !t.disabled ? n[0].value !== t.selectValue && (O(), _(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || x ? (O(), C()) : (_(), k())
							}, $.readValue = function () {
								var e = E.selectValueMap[n.val()];
								return e && !e.disabled ? (_(), O(), E.getViewValueFromOption(e)) : null
							}, A.trackBy && t.$watch(function () {
									return A.getTrackByValue(g.$viewValue)
								}, function () {
									g.$render()
								})),
							x ? (d.remove(), e(d)(t), d.removeClass("ng-scope")) : d = Ur(s.cloneNode(!1)),
							p(),
							t.$watchCollection(A.getWatchables, p)
						}
						var s = t.createElement("option"),
						u = t.createElement("optgroup");
						return {
							restrict : "A",
							terminal : !0,
							require : ["select", "ngModel"],
							link : {
								pre : function (e, t, n, r) {
									r[0].registerOption = $
								},
								post : a
							}
						}
					}
				],
				Oa = ["$locale", "$interpolate", "$log", function (e, t, n) {
						var r = /{}/g,
						i = /^when(Minus)?(.+)$/;
						return {
							link : function (a, s, u) {
								function l(e) {
									s.text(e || "")
								}
								var c,
								f = u.count,
								h = u.$attr.when && s.attr(u.$attr.when),
								p = u.offset || 0,
								d = a.$eval(h) || {},
								g = {},
								v = t.startSymbol(),
								m = t.endSymbol(),
								b = v + f + "-" + p + m,
								w = Hr.noop;
								o(u, function (e, t) {
									var n = i.exec(t);
									if (n) {
										var r = (n[1] ? "-" : "") + Mr(n[2]);
										d[r] = s.attr(u.$attr[t])
									}
								}),
								o(d, function (e, n) {
									g[n] = t(e.replace(r, b))
								}),
								a.$watch(f, function (t) {
									var r = parseFloat(t),
									i = isNaN(r);
									if (i || r in d || (r = e.pluralCat(r - p)), r !== c && !(i && E(c) && isNaN(c))) {
										w();
										var o = g[r];
										y(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), w = $, l()) : w = a.$watch(o, l),
										c = r
									}
								})
							}
						}
					}
				],
				Ma = ["$parse", "$animate", function (e, a) {
						var s = "$$NG_REMOVED",
						u = r("ngRepeat"),
						l = function (e, t, n, r, i, o, a) {
							e[n] = r,
							i && (e[i] = o),
							e.$index = t,
							e.$first = 0 === t,
							e.$last = t === a - 1,
							e.$middle = !(e.$first || e.$last),
							e.$odd = !(e.$even = 0 === (1 & t))
						},
						c = function (e) {
							return e.clone[0]
						},
						f = function (e) {
							return e.clone[e.clone.length - 1]
						};
						return {
							restrict : "A",
							multiElement : !0,
							transclude : "element",
							priority : 1e3,
							terminal : !0,
							$$tlb : !0,
							compile : function (r, h) {
								var p = h.ngRepeat,
								d = t.createComment(" end ngRepeat: " + p + " "),
								$ = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
								if (!$)
									throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
								var g = $[1],
								v = $[2],
								m = $[3],
								y = $[4];
								if ($ = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !$)
									throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
								var b = $[3] || $[1],
								w = $[2];
								if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m)))
									throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", m);
								var x,
								S,
								E,
								A,
								C = {
									$id : Qe
								};
								return y ? x = e(y) : (E = function (e, t) {
										return Qe(t)
									}, A = function (e) {
										return e
									}),
								function (e, t, r, h, $) {
									x && (S = function (t, n, r) {
										return w && (C[w] = t),
										C[b] = n,
										C.$index = r,
										x(e, C)
									});
									var g = ve();
									e.$watchCollection(v, function (r) {
										var h,
										v,
										y,
										x,
										C,
										_,
										k,
										O,
										M,
										T,
										P,
										D,
										j = t[0],
										U = ve();
										if (m && (e[m] = r), i(r))
											M = r, O = S || E;
										else {
											O = S || A,
											M = [];
											for (var F in r)
												Or.call(r, F) && "$" !== F.charAt(0) && M.push(F)
										}
										for (x = M.length, P = new Array(x), h = 0; x > h; h++)
											if (C = r === M ? h : M[h], _ = r[C], k = O(C, _, h), g[k])
												T = g[k], delete g[k], U[k] = T, P[h] = T;
											else {
												if (U[k])
													throw o(P, function (e) {
														e && e.scope && (g[e.id] = e)
													}), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, k, _);
												P[h] = {
													id : k,
													scope : n,
													clone : n
												},
												U[k] = !0
											}
										for (var N in g) {
											if (T = g[N], D = ge(T.clone), a.leave(D), D[0].parentNode)
												for (h = 0, v = D.length; v > h; h++)
													D[h][s] = !0;
											T.scope.$destroy()
										}
										for (h = 0; x > h; h++)
											if (C = r === M ? h : M[h], _ = r[C], T = P[h], T.scope) {
												y = j;
												do
													y = y.nextSibling;
												while (y && y[s]);
												c(T) != y && a.move(ge(T.clone), null, Ur(j)),
												j = f(T),
												l(T.scope, h, b, _, w, C, x)
											} else
												$(function (e, t) {
													T.scope = t;
													var n = d.cloneNode(!1);
													e[e.length++] = n,
													a.enter(e, null, Ur(j)),
													j = n,
													T.clone = e,
													U[T.id] = T,
													l(T.scope, h, b, _, w, C, x)
												});
										g = U
									})
								}
							}
						}
					}
				],
				Ta = "ng-hide",
				Pa = "ng-hide-animate",
				Da = ["$animate", function (e) {
						return {
							restrict : "A",
							multiElement : !0,
							link : function (t, n, r) {
								t.$watch(r.ngShow, function (t) {
									e[t ? "removeClass" : "addClass"](n, Ta, {
										tempClasses : Pa
									})
								})
							}
						}
					}
				],
				ja = ["$animate", function (e) {
						return {
							restrict : "A",
							multiElement : !0,
							link : function (t, n, r) {
								t.$watch(r.ngHide, function (t) {
									e[t ? "addClass" : "removeClass"](n, Ta, {
										tempClasses : Pa
									})
								})
							}
						}
					}
				],
				Ua = sr(function (e, t, n) {
						e.$watch(n.ngStyle, function (e, n) {
							n && e !== n && o(n, function (e, n) {
								t.css(n, "")
							}),
							e && t.css(e)
						}, !0)
					}),
				Fa = ["$animate", function (e) {
						return {
							require : "ngSwitch",
							controller : ["$scope", function () {
									this.cases = {}

								}
							],
							link : function (n, r, i, a) {
								var s = i.ngSwitch || i.on,
								u = [],
								l = [],
								c = [],
								f = [],
								h = function (e, t) {
									return function () {
										e.splice(t, 1)
									}
								};
								n.$watch(s, function (n) {
									var r,
									i;
									for (r = 0, i = c.length; i > r; ++r)
										e.cancel(c[r]);
									for (c.length = 0, r = 0, i = f.length; i > r; ++r) {
										var s = ge(l[r].clone);
										f[r].$destroy();
										var p = c[r] = e.leave(s);
										p.then(h(c, r))
									}
									l.length = 0,
									f.length = 0,
									(u = a.cases["!" + n] || a.cases["?"]) && o(u, function (n) {
										n.transclude(function (r, i) {
											f.push(i);
											var o = n.element;
											r[r.length++] = t.createComment(" end ngSwitchWhen: ");
											var a = {
												clone : r
											};
											l.push(a),
											e.enter(r, o.parent(), o)
										})
									})
								})
							}
						}
					}
				],
				Na = sr({
						transclude : "element",
						priority : 1200,
						require : "^ngSwitch",
						multiElement : !0,
						link : function (e, t, n, r, i) {
							r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [],
							r.cases["!" + n.ngSwitchWhen].push({
								transclude : i,
								element : t
							})
						}
					}),
				Ra = sr({
						transclude : "element",
						priority : 1200,
						require : "^ngSwitch",
						multiElement : !0,
						link : function (e, t, n, r, i) {
							r.cases["?"] = r.cases["?"] || [],
							r.cases["?"].push({
								transclude : i,
								element : t
							})
						}
					}),
				Va = r("ngTransclude"),
				Ia = sr({
						restrict : "EAC",
						link : function (e, t, n, r, i) {
							function o(e) {
								e.length && (t.empty(), t.append(e))
							}
							if (n.ngTransclude === n.$attr.ngTransclude && (n.ngTransclude = ""), !i)
								throw Va("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Q(t));
							var a = n.ngTransclude || n.ngTranscludeSlot;
							i(o, null, a)
						}
					}),
				qa = ["$templateCache", function (e) {
						return {
							restrict : "E",
							terminal : !0,
							compile : function (t, n) {
								if ("text/ng-template" == n.type) {
									var r = n.id,
									i = t[0].text;
									e.put(r, i)
								}
							}
						}
					}
				],
				za = {
					$setViewValue : $,
					$render : $
				},
				La = ["$element", "$scope", "$attrs", function (e, r, i) {
						var o = this,
						a = new et;
						o.ngModelCtrl = za,
						o.unknownOption = Ur(t.createElement("option")),
						o.renderUnknownOption = function (t) {
							var n = "? " + Qe(t) + " ?";
							o.unknownOption.val(n),
							e.prepend(o.unknownOption),
							e.val(n)
						},
						r.$on("$destroy", function () {
							o.renderUnknownOption = $
						}),
						o.removeUnknownOption = function () {
							o.unknownOption.parent() && o.unknownOption.remove()
						},
						o.readValue = function () {
							return o.removeUnknownOption(),
							e.val()
						},
						o.writeValue = function (t) {
							o.hasOption(t) ? (o.removeUnknownOption(), e.val(t), "" === t && o.emptyOption.prop("selected", !0)) : null == t && o.emptyOption ? (o.removeUnknownOption(), e.val("")) : o.renderUnknownOption(t)
						},
						o.addOption = function (e, t) {
							if (t[0].nodeType !== oi) {
								de(e, '"option value"'),
								"" === e && (o.emptyOption = t);
								var n = a.get(e) || 0;
								a.put(e, n + 1),
								o.ngModelCtrl.$render(),
								Cr(t)
							}
						},
						o.removeOption = function (e) {
							var t = a.get(e);
							t && (1 === t ? (a.remove(e), "" === e && (o.emptyOption = n)) : a.put(e, t - 1))
						},
						o.hasOption = function (e) {
							return !!a.get(e)
						},
						o.registerOption = function (e, t, n, r, i) {
							if (r) {
								var a;
								n.$observe("value", function (e) {
									b(a) && o.removeOption(a),
									a = e,
									o.addOption(e, t)
								})
							} else
								i ? e.$watch(i, function (e, r) {
									n.$set("value", e),
									r !== e && o.removeOption(r),
									o.addOption(e, t)
								}) : o.addOption(n.value, t);
							t.on("$destroy", function () {
								o.removeOption(n.value),
								o.ngModelCtrl.$render()
							})
						}
					}
				],
				Ha = function () {
					function e(e, t, n, r) {
						var i = r[1];
						if (i) {
							var a = r[0];
							if (a.ngModelCtrl = i, t.on("change", function () {
									e.$apply(function () {
										i.$setViewValue(a.readValue())
									})
								}), n.multiple) {
								a.readValue = function () {
									var e = [];
									return o(t.find("option"), function (t) {
										t.selected && e.push(t.value)
									}),
									e
								},
								a.writeValue = function (e) {
									var n = new et(e);
									o(t.find("option"), function (e) {
										e.selected = b(n.get(e.value))
									})
								};
								var s,
								u = NaN;
								e.$watch(function () {
									u !== i.$viewValue || L(s, i.$viewValue) || (s = z(i.$viewValue), i.$render()),
									u = i.$viewValue
								}),
								i.$isEmpty = function (e) {
									return !e || 0 === e.length
								}
							}
						}
					}
					function t(e, t, n, r) {
						var i = r[1];
						if (i) {
							var o = r[0];
							i.$render = function () {
								o.writeValue(i.$viewValue)
							}
						}
					}
					return {
						restrict : "E",
						require : ["select", "?ngModel"],
						controller : La,
						priority : 1,
						link : {
							pre : e,
							post : t
						}
					}
				},
				Ba = ["$interpolate", function (e) {
						return {
							restrict : "E",
							priority : 100,
							compile : function (t, n) {
								if (b(n.value))
									var r = e(n.value, !0);
								else {
									var i = e(t.text(), !0);
									i || n.$set("value", t.text())
								}
								return function (e, t, n) {
									var o = "$selectController",
									a = t.parent(),
									s = a.data(o) || a.parent().data(o);
									s && s.registerOption(e, t, n, r, i)
								}
							}
						}
					}
				],
				Wa = v({
						restrict : "E",
						terminal : !1
					}),
				Ga = function () {
					return {
						restrict : "A",
						require : "?ngModel",
						link : function (e, t, n, r) {
							r && (n.required = !0, r.$validators.required = function (e, t) {
								return !n.required || !r.$isEmpty(t)
							}, n.$observe("required", function () {
									r.$validate()
								}))
						}
					}
				},
				Xa = function () {
					return {
						restrict : "A",
						require : "?ngModel",
						link : function (e, t, i, o) {
							if (o) {
								var a,
								s = i.ngPattern || i.pattern;
								i.$observe("pattern", function (e) {
									if (S(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test)
										throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, Q(t));
									a = e || n,
									o.$validate()
								}),
								o.$validators.pattern = function (e, t) {
									return o.$isEmpty(t) || y(a) || a.test(t)
								}
							}
						}
					}
				},
				Ka = function () {
					return {
						restrict : "A",
						require : "?ngModel",
						link : function (e, t, n, r) {
							if (r) {
								var i = -1;
								n.$observe("maxlength", function (e) {
									var t = p(e);
									i = isNaN(t) ? -1 : t,
									r.$validate()
								}),
								r.$validators.maxlength = function (e, t) {
									return 0 > i || r.$isEmpty(t) || t.length <= i
								}
							}
						}
					}
				},
				Ya = function () {
					return {
						restrict : "A",
						require : "?ngModel",
						link : function (e, t, n, r) {
							if (r) {
								var i = 0;
								n.$observe("minlength", function (e) {
									i = p(e) || 0,
									r.$validate()
								}),
								r.$validators.minlength = function (e, t) {
									return r.$isEmpty(t) || t.length >= i
								}
							}
						}
					}
				};
				return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (fe(), we(Hr), Hr.module("ngLocale", [], ["$provide", function (e) {
								function t(e) {
									e += "";
									var t = e.indexOf(".");
									return -1 == t ? 0 : e.length - t - 1
								}
								function r(e, r) {
									var i = r;
									n === i && (i = Math.min(t(e), 3));
									var o = Math.pow(10, i),
									a = (e * o | 0) % o;
									return {
										v : i,
										f : a
									}
								}
								var i = {
									ZERO : "zero",
									ONE : "one",
									TWO : "two",
									FEW : "few",
									MANY : "many",
									OTHER : "other"
								};
								e.value("$locale", {
									DATETIME_FORMATS : {
										AMPMS : ["AM", "PM"],
										DAY : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
										ERANAMES : ["Before Christ", "Anno Domini"],
										ERAS : ["BC", "AD"],
										FIRSTDAYOFWEEK : 6,
										MONTH : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
										SHORTDAY : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
										SHORTMONTH : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
										STANDALONEMONTH : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
										WEEKENDRANGE : [5, 6],
										fullDate : "EEEE, MMMM d, y",
										longDate : "MMMM d, y",
										medium : "MMM d, y h:mm:ss a",
										mediumDate : "MMM d, y",
										mediumTime : "h:mm:ss a",
										"short" : "M/d/yy h:mm a",
										shortDate : "M/d/yy",
										shortTime : "h:mm a"
									},
									NUMBER_FORMATS : {
										CURRENCY_SYM : "$",
										DECIMAL_SEP : ".",
										GROUP_SEP : ",",
										PATTERNS : [{
												gSize : 3,
												lgSize : 3,
												maxFrac : 3,
												minFrac : 0,
												minInt : 1,
												negPre : "-",
												negSuf : "",
												posPre : "",
												posSuf : ""
											}, {
												gSize : 3,
												lgSize : 3,
												maxFrac : 2,
												minFrac : 2,
												minInt : 1,
												negPre : "-¤",
												negSuf : "",
												posPre : "¤",
												posSuf : ""
											}
										]
									},
									id : "en-us",
									localeID : "en_US",
									pluralCat : function (e, t) {
										var n = 0 | e,
										o = r(e, t);
										return 1 == n && 0 == o.v ? i.ONE : i.OTHER
									}
								})
							}
						]), void Ur(t).ready(function () {
						ae(t, se)
					}))
			}
			(window, document),
			!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
		}, {}

	],
	2 : [function (e, t, n) {
			e("./angular"),
			t.exports = angular
		}, {
			"./angular" : 1
		}
	],
	3 : [function (e, t, n) {
			!function () {
				function e(e, t) {
					window.XMLHttpRequest.prototype[e] = t(window.XMLHttpRequest.prototype[e])
				}
				function t(e, t, n) {
					try {
						Object.defineProperty(e, t, {
							get : n
						})
					} catch (r) {}

				}
				if (window.FileAPI || (window.FileAPI = {}), !window.XMLHttpRequest)
					throw "AJAX is not supported. XMLHttpRequest is not defined.";
				if (FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad, FileAPI.shouldLoad) {
					var n = function (e) {
						if (!e.__listeners) {
							e.upload || (e.upload = {}),
							e.__listeners = [];
							var t = e.upload.addEventListener;
							e.upload.addEventListener = function (n, r) {
								e.__listeners[n] = r,
								t && t.apply(this, arguments)
							}
						}
					};
					e("open", function (e) {
						return function (t, r, i) {
							n(this),
							this.__url = r;
							try {
								e.apply(this, [t, r, i])
							} catch (o) {
								o.message.indexOf("Access is denied") > -1 && (this.__origError = o, e.apply(this, [t, "_fix_for_ie_crossdomain__", i]))
							}
						}
					}),
					e("getResponseHeader", function (e) {
						return function (t) {
							return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(t) : null == e ? null : e.apply(this, [t])
						}
					}),
					e("getAllResponseHeaders", function (e) {
						return function () {
							return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == e ? null : e.apply(this)
						}
					}),
					e("abort", function (e) {
						return function () {
							return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == e ? null : e.apply(this)
						}
					}),
					e("setRequestHeader", function (e) {
						return function (t, r) {
							if ("__setXHR_" === t) {
								n(this);
								var i = r(this);
								i instanceof Function && i(this)
							} else
								this.__requestHeaders = this.__requestHeaders || {},
							this.__requestHeaders[t] = r,
							e.apply(this, arguments)
						}
					}),
					e("send", function (e) {
						return function () {
							var n = this;
							if (arguments[0] && arguments[0].__isFileAPIShim) {
								var r = arguments[0],
								i = {
									url : n.__url,
									jsonp : !1,
									cache : !0,
									complete : function (e, r) {
										e && angular.isString(e) && -1 !== e.indexOf("#2174") && (e = null),
										n.__completed = !0,
										!e && n.__listeners.load && n.__listeners.load({
											type : "load",
											loaded : n.__loaded,
											total : n.__total,
											target : n,
											lengthComputable : !0
										}),
										!e && n.__listeners.loadend && n.__listeners.loadend({
											type : "loadend",
											loaded : n.__loaded,
											total : n.__total,
											target : n,
											lengthComputable : !0
										}),
										"abort" === e && n.__listeners.abort && n.__listeners.abort({
											type : "abort",
											loaded : n.__loaded,
											total : n.__total,
											target : n,
											lengthComputable : !0
										}),
										void 0 !== r.status && t(n, "status", function () {
											return 0 === r.status && e && "abort" !== e ? 500 : r.status
										}),
										void 0 !== r.statusText && t(n, "statusText", function () {
											return r.statusText
										}),
										t(n, "readyState", function () {
											return 4
										}),
										void 0 !== r.response && t(n, "response", function () {
											return r.response
										});
										var i = r.responseText || (e && 0 === r.status && "abort" !== e ? e : void 0);
										t(n, "responseText", function () {
											return i
										}),
										t(n, "response", function () {
											return i
										}),
										e && t(n, "err", function () {
											return e
										}),
										n.__fileApiXHR = r,
										n.onreadystatechange && n.onreadystatechange(),
										n.onload && n.onload()
									},
									progress : function (e) {
										if (e.target = n, n.__listeners.progress && n.__listeners.progress(e), n.__total = e.total, n.__loaded = e.loaded, e.total === e.loaded) {
											var t = this;
											setTimeout(function () {
												n.__completed || (n.getAllResponseHeaders = function () {}, t.complete(null, {
														status : 204,
														statusText : "No Content"
													}))
											}, FileAPI.noContentTimeout || 1e4)
										}
									},
									headers : n.__requestHeaders
								};
								i.data = {},
								i.files = {};
								for (var o = 0; o < r.data.length; o++) {
									var a = r.data[o];
									null != a.val && null != a.val.name && null != a.val.size && null != a.val.type ? i.files[a.key] = a.val : i.data[a.key] = a.val
								}
								setTimeout(function () {
									if (!FileAPI.hasFlash)
										throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
									n.__fileApiXHR = FileAPI.upload(i)
								}, 1)
							} else {
								if (this.__origError)
									throw this.__origError;
								e.apply(n, arguments)
							}
						}
					}),
					window.XMLHttpRequest.__isFileAPIShim = !0,
					window.FormData = FormData = function () {
						return {
							append : function (e, t, n) {
								t.__isFileAPIBlobShim && (t = t.data[0]),
								this.data.push({
									key : e,
									val : t,
									name : n
								})
							},
							data : [],
							__isFileAPIShim : !0
						}
					},
					window.Blob = Blob = function (e) {
						return {
							data : e,
							__isFileAPIBlobShim : !0
						}
					}
				}
			}
			(),
			function () {
				function e(e) {
					return "input" === e[0].tagName.toLowerCase() && e.attr("type") && "file" === e.attr("type").toLowerCase()
				}
				function t() {
					try {
						var e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
						if (e)
							return !0
					} catch (t) {
						if (void 0 !== navigator.mimeTypes["application/x-shockwave-flash"])
							return !0
					}
					return !1
				}
				function n(e) {
					var t = 0,
					n = 0;
					if (window.jQuery)
						return jQuery(e).offset();
					if (e.offsetParent)
						do
							t += e.offsetLeft - e.scrollLeft, n += e.offsetTop - e.scrollTop, e = e.offsetParent;
						while (e);
					return {
						left : t,
						top : n
					}
				}
				if (FileAPI.shouldLoad) {
					if (FileAPI.hasFlash = t(), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
						var r,
						i,
						o,
						a,
						s,
						u = document.createElement("script"),
						l = document.getElementsByTagName("script");
						if (window.FileAPI.jsUrl)
							r = window.FileAPI.jsUrl;
						else if (window.FileAPI.jsPath)
							i = window.FileAPI.jsPath;
						else
							for (o = 0; o < l.length; o++)
								if (s = l[o].src, a = s.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/), a > -1) {
									i = s.substring(0, a + 1);
									break
								}
						null == FileAPI.staticPath && (FileAPI.staticPath = i),
						u.setAttribute("src", r || i + "FileAPI.min.js"),
						document.getElementsByTagName("head")[0].appendChild(u)
					}
					FileAPI.ngfFixIE = function (r, i, o) {
						if (!t())
							throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
						var a = function () {
							var t = i.parent();
							r.attr("disabled") ? t && t.removeClass("js-fileapi-wrapper") : (i.attr("__ngf_flash_") || (i.unbind("change"), i.unbind("click"), i.bind("change", function (e) {
										s.apply(this, [e]),
										o.apply(this, [e])
									}), i.attr("__ngf_flash_", "true")), t.addClass("js-fileapi-wrapper"), e(r) || (t.css("position", "absolute").css("top", n(r[0]).top + "px").css("left", n(r[0]).left + "px").css("width", r[0].offsetWidth + "px").css("height", r[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", r.css("display")).css("overflow", "hidden").css("z-index", "900000").css("visibility", "visible"), i.css("width", r[0].offsetWidth + "px").css("height", r[0].offsetHeight + "px").css("position", "absolute").css("top", "0px").css("left", "0px")))
						};
						r.bind("mouseenter", a);
						var s = function (e) {
							for (var t = FileAPI.getFiles(e), n = 0; n < t.length; n++)
								void 0 === t[n].size && (t[n].size = 0), void 0 === t[n].name && (t[n].name = "file"), void 0 === t[n].type && (t[n].type = "undefined");
							e.target || (e.target = {}),
							e.target.files = t,
							e.target.files !== t && (e.__files_ = t),
							(e.__files_ || e.target.files).item = function (t) {
								return (e.__files_ || e.target.files)[t] || null
							}
						}
					},
					FileAPI.disableFileInput = function (e, t) {
						t ? e.removeClass("js-fileapi-wrapper") : e.addClass("js-fileapi-wrapper")
					}
				}
			}
			(),
			window.FileReader || (window.FileReader = function () {
				var e = this,
				t = !1;
				this.listeners = {},
				this.addEventListener = function (t, n) {
					e.listeners[t] = e.listeners[t] || [],
					e.listeners[t].push(n)
				},
				this.removeEventListener = function (t, n) {
					e.listeners[t] && e.listeners[t].splice(e.listeners[t].indexOf(n), 1)
				},
				this.dispatchEvent = function (t) {
					var n = e.listeners[t.type];
					if (n)
						for (var r = 0; r < n.length; r++)
							n[r].call(e, t)
				},
				this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
				var n = function (t, n) {
					var r = {
						type : t,
						target : e,
						loaded : n.loaded,
						total : n.total,
						error : n.error
					};
					return null != n.result && (r.target.result = n.result),
					r
				},
				r = function (r) {
					t || (t = !0, e.onloadstart && e.onloadstart(n("loadstart", r)));
					var i;
					"load" === r.type ? (e.onloadend && e.onloadend(n("loadend", r)), i = n("load", r), e.onload && e.onload(i), e.dispatchEvent(i)) : "progress" === r.type ? (i = n("progress", r), e.onprogress && e.onprogress(i), e.dispatchEvent(i)) : (i = n("error", r), e.onerror && e.onerror(i), e.dispatchEvent(i))
				};
				this.readAsDataURL = function (e) {
					FileAPI.readAsDataURL(e, r)
				},
				this.readAsText = function (e) {
					FileAPI.readAsText(e, r)
				}
			}),
			!window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (e) {
				return function (t, n) {
					if ("__setXHR_" === t) {
						var r = n(this);
						r instanceof Function && r(this)
					} else
						e.apply(this, arguments)
				}
			}
				(window.XMLHttpRequest.prototype.setRequestHeader));
			var r = angular.module("ngFileUpload", []);
			r.version = "12.0.1",
			r.service("UploadBase", ["$http", "$q", "$timeout", function (e, t, n) {
						function i(r) {
							function i(e) {
								l.notify && l.notify(e),
								c.progressFunc && n(function () {
									c.progressFunc(e)
								})
							}
							function o(e) {
								return null != r._start && s ? {
									loaded : e.loaded + r._start,
									total : r._file && r._file.size || e.total,
									type : e.type,
									config : r,
									lengthComputable : !0,
									target : e.target
								}
								 : e
							}
							function u() {
								e(r).then(function (e) {
									s && r._chunkSize && !r._finished && r._file ? (i({
											loaded : r._end,
											total : r._file && r._file.size,
											config : r,
											type : "progress"
										}), a.upload(r, !0)) : (r._finished && delete r._finished, l.resolve(e))
								}, function (e) {
									l.reject(e)
								}, function (e) {
									l.notify(e)
								})
							}
							r.method = r.method || "POST",
							r.headers = r.headers || {};
							var l = r._deferred = r._deferred || t.defer(),
							c = l.promise;
							return r.disableProgress || (r.headers.__setXHR_ = function () {
								return function (e) {
									e && e.upload && e.upload.addEventListener && (r.__XHR = e, r.xhrFn && r.xhrFn(e), e.upload.addEventListener("progress", function (e) {
											e.config = r,
											i(o(e))
										}, !1), e.upload.addEventListener("load", function (e) {
											e.lengthComputable && (e.config = r, i(o(e)))
										}, !1))
								}
							}),
							s ? r._chunkSize && r._end && !r._finished ? (r._start = r._end, r._end += r._chunkSize, u()) : r.resumeSizeUrl ? e.get(r.resumeSizeUrl).then(function (e) {
								r.resumeSizeResponseReader ? r._start = r.resumeSizeResponseReader(e.data) : r._start = parseInt((null == e.data.size ? e.data : e.data.size).toString()),
								r._chunkSize && (r._end = r._start + r._chunkSize),
								u()
							}, function (e) {
								throw e
							}) : r.resumeSize ? r.resumeSize().then(function (e) {
								r._start = e,
								u()
							}, function (e) {
								throw e
							}) : (r._chunkSize && (r._start = 0, r._end = r._start + r._chunkSize), u()) : u(),
							c.success = function (e) {
								return c.then(function (t) {
									e(t.data, t.status, t.headers, r)
								}),
								c
							},
							c.error = function (e) {
								return c.then(null, function (t) {
									e(t.data, t.status, t.headers, r)
								}),
								c
							},
							c.progress = function (e) {
								return c.progressFunc = e,
								c.then(null, null, function (t) {
									e(t)
								}),
								c
							},
							c.abort = c.pause = function () {
								return r.__XHR && n(function () {
									r.__XHR.abort()
								}),
								c
							},
							c.xhr = function (e) {
								return r.xhrFn = function (t) {
									return function () {
										t && t.apply(c, arguments),
										e.apply(c, arguments)
									}
								}
								(r.xhrFn),
								c
							},
							a.promisesCount++,
							c["finally"](function () {
								a.promisesCount--
							}),
							c
						}
						function o(e) {
							var t = {};
							for (var n in e)
								e.hasOwnProperty(n) && (t[n] = e[n]);
							return t
						}
						var a = this;
						a.promisesCount = 0,
						this.isResumeSupported = function () {
							return window.Blob && window.Blob instanceof Function && window.Blob.prototype.slice
						};
						var s = this.isResumeSupported();
						this.isUploadInProgress = function () {
							return a.promisesCount > 0
						},
						this.rename = function (e, t) {
							return e.ngfName = t,
							e
						},
						this.jsonBlob = function (e) {
							null == e || angular.isString(e) || (e = JSON.stringify(e));
							var t = new window.Blob([e], {
									type : "application/json"
								});
							return t._ngfBlob = !0,
							t
						},
						this.json = function (e) {
							return angular.toJson(e)
						},
						this.isFile = function (e) {
							return null != e && (e instanceof window.Blob || e.flashId && e.name && e.size)
						},
						this.upload = function (e, t) {
							function n(t, n) {
								if (t._ngfBlob)
									return t;
								if (e._file = e._file || t, null != e._start && s) {
									e._end && e._end >= t.size && (e._finished = !0, e._end = t.size);
									var r = t.slice(e._start, e._end || t.size);
									return r.name = t.name,
									r.ngfName = t.ngfName,
									e._chunkSize && (n.append("_chunkSize", e._chunkSize), n.append("_currentChunkSize", e._end - e._start), n.append("_chunkNumber", Math.floor(e._start / e._chunkSize)), n.append("_totalSize", e._file.size)),
									r
								}
								return t
							}
							function r(t, i, o) {
								if (void 0 !== i)
									if (angular.isDate(i) && (i = i.toISOString()), angular.isString(i))
										t.append(o, i);
									else if (a.isFile(i)) {
										var s = n(i, t),
										u = o.split(",");
										u[1] && (s.ngfName = u[1].replace(/^\s+|\s+$/g, ""), o = u[0]),
										e._fileKey = e._fileKey || o,
										t.append(o, s, s.ngfName || s.name)
									} else if (angular.isObject(i)) {
										if (i.$$ngfCircularDetection)
											throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + o;
										i.$$ngfCircularDetection = !0;
										try {
											for (var l in i)
												if (i.hasOwnProperty(l) && "$$ngfCircularDetection" !== l) {
													var c = null == e.objectKey ? "[i]" : e.objectKey;
													i.length && parseInt(l) > -1 && (c = null == e.arrayKey ? c : e.arrayKey),
													r(t, i[l], o + c.replace(/[ik]/g, l))
												}
										}
										finally {
											delete i.$$ngfCircularDetection
										}
									} else
										t.append(o, i)
							}
							function u() {
								e._chunkSize = a.translateScalars(e.resumeChunkSize),
								e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null,
								e.headers = e.headers || {},
								e.headers["Content-Type"] = void 0,
								e.transformRequest = e.transformRequest ? angular.isArray(e.transformRequest) ? e.transformRequest : [e.transformRequest] : [],
								e.transformRequest.push(function (t) {
									var n,
									i = new window.FormData;
									t = t || e.fields || {},
									e.file && (t.file = e.file);
									for (n in t)
										if (t.hasOwnProperty(n)) {
											var o = t[n];
											e.formDataAppender ? e.formDataAppender(i, n, o) : r(i, o, n)
										}
									return i
								})
							}
							return t || (e = o(e)),
							e._isDigested || (e._isDigested = !0, u()),
							i(e)
						},
						this.http = function (t) {
							return t = o(t),
							t.transformRequest = t.transformRequest || function (t) {
								return window.ArrayBuffer && t instanceof window.ArrayBuffer || t instanceof window.Blob ? t : e.defaults.transformRequest[0].apply(this, arguments)
							},
							t._chunkSize = a.translateScalars(t.resumeChunkSize),
							t._chunkSize = t._chunkSize ? parseInt(t._chunkSize.toString()) : null,
							i(t)
						},
						this.translateScalars = function (e) {
							if (angular.isString(e)) {
								if (e.search(/kb/i) === e.length - 2)
									return parseFloat(1024 * e.substring(0, e.length - 2));
								if (e.search(/mb/i) === e.length - 2)
									return parseFloat(1048576 * e.substring(0, e.length - 2));
								if (e.search(/gb/i) === e.length - 2)
									return parseFloat(1073741824 * e.substring(0, e.length - 2));
								if (e.search(/b/i) === e.length - 1)
									return parseFloat(e.substring(0, e.length - 1));
								if (e.search(/s/i) === e.length - 1)
									return parseFloat(e.substring(0, e.length - 1));
								if (e.search(/m/i) === e.length - 1)
									return parseFloat(60 * e.substring(0, e.length - 1));
								if (e.search(/h/i) === e.length - 1)
									return parseFloat(3600 * e.substring(0, e.length - 1))
							}
							return e
						},
						this.urlToBlob = function (n) {
							var r = t.defer();
							return e({
								url : n,
								method : "get",
								responseType : "arraybuffer"
							}).then(function (e) {
								var t = new Uint8Array(e.data),
								n = e.headers("content-type") || "image/WebP",
								i = new window.Blob([t], {
										type : n
									});
								r.resolve(i)
							}, function (e) {
								r.reject(e)
							}),
							r.promise
						},
						this.setDefaults = function (e) {
							this.defaults = e || {}

						},
						this.defaults = {},
						this.version = r.version
					}
				]),
			r.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function (e, t, n, r, i) {
						function o(e, t, n) {
							var i = [s.emptyPromise()];
							return angular.forEach(e, function (r, o) {
								0 === r.type.indexOf("image/jpeg") && s.attrGetter("ngfFixOrientation", t, n, {
									$file : r
								}) && i.push(s.happyPromise(s.applyExifRotation(r), r).then(function (t) {
										e.splice(o, 1, t)
									}))
							}),
							r.all(i)
						}
						function a(e, t, n) {
							function i(r, i) {
								if (0 === r.type.indexOf("image")) {
									if (o.pattern && !s.validatePattern(r, o.pattern))
										return;
									var u = s.resize(r, o.width, o.height, o.quality, o.type, o.ratio, o.centerCrop, function (e, i) {
											return s.attrGetter("ngfResizeIf", t, n, {
												$width : e,
												$height : i,
												$file : r
											})
										}, o.restoreExif !== !1);
									a.push(u),
									u.then(function (t) {
										e.splice(i, 1, t)
									}, function (e) {
										r.$error = "resize",
										r.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (r && r.name)
									})
								}
							}
							var o = s.attrGetter("ngfResize", t, n);
							if (!(o && angular.isObject(o) && s.isResizeSupported() && e.length))
								return s.emptyPromise();
							for (var a = [s.emptyPromise()], u = 0; u < e.length; u++)
								i(e[u], u);
							return r.all(a)
						}
						var s = i;
						return s.getAttrWithDefaults = function (e, t) {
							if (null != e[t])
								return e[t];
							var n = s.defaults[t];
							return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
						},
						s.attrGetter = function (t, n, r, i) {
							var o = this.getAttrWithDefaults(n, t);
							if (!r)
								return o;
							try {
								return i ? e(o)(r, i) : e(o)(r)
							} catch (a) {
								if (t.search(/min|max|pattern/i))
									return o;
								throw a
							}
						},
						s.shouldUpdateOn = function (e, t, n) {
							var r = s.attrGetter("ngModelOptions", t, n);
							return r && r.updateOn ? r.updateOn.split(" ").indexOf(e) > -1 : !0
						},
						s.emptyPromise = function () {
							var e = r.defer(),
							n = arguments;
							return t(function () {
								e.resolve.apply(e, n)
							}),
							e.promise
						},
						s.rejectPromise = function () {
							var e = r.defer(),
							n = arguments;
							return t(function () {
								e.reject.apply(e, n)
							}),
							e.promise
						},
						s.happyPromise = function (e, n) {
							var i = r.defer();
							return e.then(function (e) {
								i.resolve(e)
							}, function (e) {
								t(function () {
									throw e
								}),
								i.resolve(n)
							}),
							i.promise
						},
						s.updateModel = function (n, r, i, u, l, c, f) {
							function h(o, a, l, f, h) {
								r.$$ngfPrevValidFiles = o,
								r.$$ngfPrevInvalidFiles = a;
								var p = o && o.length ? o[0] : null,
								d = a && a.length ? a[0] : null;
								n && (s.applyModelValidation(n, o), n.$setViewValue(h ? p : o)),
								u && e(u)(i, {
									$files : o,
									$file : p,
									$newFiles : l,
									$duplicateFiles : f,
									$invalidFiles : a,
									$invalidFile : d,
									$event : c
								});
								var $ = s.attrGetter("ngfModelInvalid", r);
								$ && t(function () {
									e($).assign(i, h ? d : a)
								}),
								t(function () {})
							}
							function p() {
								function e(e, t) {
									return e.name === t.name && (e.$ngfOrigSize || e.size) === (t.$ngfOrigSize || t.size) && e.type === t.type
								}
								function t(t) {
									var n;
									for (n = 0; n < m.length; n++)
										if (e(t, m[n]))
											return !0;
									for (n = 0; n < y.length; n++)
										if (e(t, y[n]))
											return !0;
									return !1
								}
								if (l) {
									v = [],
									b = [];
									for (var n = 0; n < l.length; n++)
										t(l[n]) ? b.push(l[n]) : v.push(l[n])
								}
							}
							function d(e) {
								return angular.isArray(e) ? e : [e]
							}
							function $() {
								x = [],
								w = [],
								angular.forEach(v, function (e) {
									e.$error ? w.push(e) : x.push(e)
								})
							}
							function g() {
								function e() {
									t(function () {
										h(S ? m.concat(x) : x, S ? y.concat(w) : w, l, b, E)
									}, _ && _.debounce ? _.debounce.change || _.debounce : 0)
								}
								a(A ? v : x, r, i).then(function () {
									A ? s.validate(v, C, n, r, i).then(function () {
										$(),
										e()
									}) : e()
								}, function (e) {
									throw "Could not resize files " + e
								})
							}
							var v,
							m,
							y,
							b = [],
							w = [],
							x = [];
							m = r.$$ngfPrevValidFiles || [],
							y = r.$$ngfPrevInvalidFiles || [],
							n && n.$modelValue && (m = d(n.$modelValue));
							var S = s.attrGetter("ngfKeep", r, i);
							v = (l || []).slice(0),
							"distinct" !== S && s.attrGetter("ngfKeepDistinct", r, i) !== !0 || p(r, i);
							var E = !S && !s.attrGetter("ngfMultiple", r, i) && !s.attrGetter("multiple", r);
							if (!S || v.length) {
								s.attrGetter("ngfBeforeModelChange", r, i, {
									$files : l,
									$file : l && l.length ? l[0] : null,
									$newFiles : v,
									$duplicateFiles : b,
									$event : c
								});
								var A = s.attrGetter("ngfValidateAfterResize", r, i),
								C = v.length + m.length + y.length,
								_ = s.attrGetter("ngModelOptions", r, i);
								s.validate(v, C, n, r, i).then(function () {
									f ? h(v, [], l, b, E) : (_ && _.allowInvalid || A ? x = v : $(), s.attrGetter("ngfFixOrientation", r, i) && s.isExifSupported() ? o(x, r, i).then(function () {
											g()
										}) : g())
								})
							}
						},
						s
					}
				]),
			r.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function (e, t, n, r) {
						function i(e) {
							var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
							if (t && t.length > 2) {
								var n = r.defaults.androidFixMinorVersion || 4;
								return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
							}
							return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
						}
						function o(e, t, n, r, o, s, u, l) {
							function c() {
								return "input" === t[0].tagName.toLowerCase() && n.type && "file" === n.type.toLowerCase()
							}
							function f() {
								return y("ngfChange") || y("ngfSelect")
							}
							function h(t) {
								if (l.shouldUpdateOn("change", n, e)) {
									for (var i = t.__files_ || t.target && t.target.files, o = [], a = 0; a < i.length; a++)
										o.push(i[a]);
									l.updateModel(r, n, e, f(), o.length ? o : null, t)
								}
							}
							function p(e) {
								if (t !== e)
									for (var n = 0; n < t[0].attributes.length; n++) {
										var r = t[0].attributes[n];
										"type" !== r.name && "class" !== r.name && "style" !== r.name && (null != r.value && "" !== r.value || ("required" === r.name && (r.value = "required"), "multiple" === r.name && (r.value = "multiple")), e.attr(r.name, "id" === r.name ? "ngf-" + r.value : r.value))
									}
							}
							function d() {
								if (c())
									return t;
								var e = angular.element('<input type="file">');
								p(e);
								var n = angular.element("<label>upload</label>");
								return n.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"),
								a.push({
									el : t,
									ref : n
								}),
								document.body.appendChild(n.append(e)[0]),
								e
							}
							function $(n) {
								if (t.attr("disabled"))
									return !1;
								if (!y("ngfSelectDisabled", e)) {
									var r = g(n);
									if (null != r)
										return r;
									v(n);
									try {
										c() || document.body.contains(x[0]) || (a.push({
												el : t,
												ref : x.parent()
											}), document.body.appendChild(x.parent()[0]), x.bind("change", h))
									} catch (o) {}

									return i(navigator.userAgent) ? setTimeout(function () {
										x[0].click()
									}, 0) : x[0].click(),
									!1
								}
							}
							function g(e) {
								var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
								if ("touchstart" === e.type)
									return w = t ? t[0].clientY : 0, !0;
								if (e.stopPropagation(), e.preventDefault(), "touchend" === e.type) {
									var n = t ? t[0].clientY : 0;
									if (Math.abs(n - w) > 20)
										return !1
								}
							}
							function v(t) {
								l.shouldUpdateOn("click", n, e) && x.val() && (x.val(null), l.updateModel(r, n, e, f(), null, t, !0))
							}
							function m(e) {
								if (x && !x.attr("__ngf_ie10_Fix_")) {
									if (!x[0].parentNode)
										return void(x = null);
									e.preventDefault(),
									e.stopPropagation(),
									x.unbind("click");
									var t = x.clone();
									return x.replaceWith(t),
									x = t,
									x.attr("__ngf_ie10_Fix_", "true"),
									x.bind("change", h),
									x.bind("click", m),
									x[0].click(),
									!1
								}
								x.removeAttr("__ngf_ie10_Fix_")
							}
							var y = function (e, t) {
								return l.attrGetter(e, n, t)
							};
							l.registerModelChangeValidator(r, n, e);
							var b = [];
							b.push(e.$watch(y("ngfMultiple"), function () {
									x.attr("multiple", y("ngfMultiple", e))
								})),
							b.push(e.$watch(y("ngfCapture"), function () {
									x.attr("capture", y("ngfCapture", e))
								})),
							b.push(e.$watch(y("ngfAccept"), function () {
									x.attr("accept", y("ngfAccept", e))
								})),
							n.$observe("accept", function () {
								x.attr("accept", y("accept"))
							}),
							b.push(function () {
								n.$$observers && delete n.$$observers.accept
							});
							var w = 0,
							x = t;
							c() || (x = d()),
							x.bind("change", h),
							c() ? t.bind("click", v) : t.bind("click touchstart touchend", $),
							-1 !== navigator.appVersion.indexOf("MSIE 10") && x.bind("click", m),
							r && r.$formatters.push(function (e) {
								return null != e && 0 !== e.length || x.val() && x.val(null),
								e
							}),
							e.$on("$destroy", function () {
								c() || x.parent().remove(),
								angular.forEach(b, function (e) {
									e()
								})
							}),
							s(function () {
								for (var e = 0; e < a.length; e++) {
									var t = a[e];
									document.body.contains(t.el[0]) || (a.splice(e, 1), t.ref.remove())
								}
							}),
							window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(t, x, h)
						}
						var a = [];
						return {
							restrict : "AEC",
							require : "?ngModel",
							link : function (i, a, s, u) {
								o(i, a, s, u, e, t, n, r)
							}
						}
					}
				]),
			function () {
				function e(e) {
					return "img" === e.tagName.toLowerCase() ? "image" : "audio" === e.tagName.toLowerCase() ? "audio" : "video" === e.tagName.toLowerCase() ? "video" : /./
				}
				function t(t, n, r, i, o, a, s, u) {
					function l(e) {
						var a = t.attrGetter("ngfNoObjectUrl", o, r);
						t.dataUrl(e, a)["finally"](function () {
							n(function () {
								var t = (a ? e.$ngfDataUrl : e.$ngfBlobUrl) || e.$ngfDataUrl;
								u ? i.css("background-image", "url('" + (t || "") + "')") : i.attr("src", t),
								t ? i.removeClass("ng-hide") : i.addClass("ng-hide")
							})
						})
					}
					n(function () {
						var n = r.$watch(o[a], function (n) {
								var r = s;
								if ("ngfThumbnail" === a && (r || (r = {
												width : i[0].clientWidth,
												height : i[0].clientHeight
											}), 0 === r.width && window.getComputedStyle)) {
									var o = getComputedStyle(i[0]);
									r = {
										width : parseInt(o.width.slice(0, -2)),
										height : parseInt(o.height.slice(0, -2))
									}
								}
								return angular.isString(n) ? (i.removeClass("ng-hide"), u ? i.css("background-image", "url('" + n + "')") : i.attr("src", n)) : void(!n || !n.type || 0 !== n.type.search(e(i[0])) || u && 0 !== n.type.indexOf("image") ? i.addClass("ng-hide") : r && t.isResizeSupported() ? t.resize(n, r.width, r.height, r.quality).then(function (e) {
										l(e)
									}, function (e) {
										throw e
									}) : l(n))
							});
						r.$on("$destroy", function () {
							n()
						})
					})
				}
				r.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function (e, t, n) {
							var r = e;
							return r.base64DataUrl = function (e) {
								if (angular.isArray(e)) {
									var t = n.defer(),
									i = 0;
									return angular.forEach(e, function (n) {
										r.dataUrl(n, !0)["finally"](function () {
											if (i++, i === e.length) {
												var n = [];
												angular.forEach(e, function (e) {
													n.push(e.$ngfDataUrl)
												}),
												t.resolve(n, e)
											}
										})
									}),
									t.promise
								}
								return r.dataUrl(e, !0)
							},
							r.dataUrl = function (e, i) {
								if (!e)
									return r.emptyPromise(e, e);
								if (i && null != e.$ngfDataUrl || !i && null != e.$ngfBlobUrl)
									return r.emptyPromise(i ? e.$ngfDataUrl : e.$ngfBlobUrl, e);
								var o = i ? e.$$ngfDataUrlPromise : e.$$ngfBlobUrlPromise;
								if (o)
									return o;
								var a = n.defer();
								return t(function () {
									if (window.FileReader && e && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || e.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || e.size < 4e6)) {
										var n = window.URL || window.webkitURL;
										if (n && n.createObjectURL && !i) {
											var o;
											try {
												o = n.createObjectURL(e)
											} catch (s) {
												return void t(function () {
													e.$ngfBlobUrl = "",
													a.reject()
												})
											}
											t(function () {
												if (e.$ngfBlobUrl = o, o) {
													a.resolve(o, e),
													r.blobUrls = r.blobUrls || [],
													r.blobUrlsTotalSize = r.blobUrlsTotalSize || 0,
													r.blobUrls.push({
														url : o,
														size : e.size
													}),
													r.blobUrlsTotalSize += e.size || 0;
													for (var t = r.defaults.blobUrlsMaxMemory || 268435456, i = r.defaults.blobUrlsMaxQueueSize || 200; (r.blobUrlsTotalSize > t || r.blobUrls.length > i) && r.blobUrls.length > 1; ) {
														var s = r.blobUrls.splice(0, 1)[0];
														n.revokeObjectURL(s.url),
														r.blobUrlsTotalSize -= s.size
													}
												}
											})
										} else {
											var u = new FileReader;
											u.onload = function (n) {
												t(function () {
													e.$ngfDataUrl = n.target.result,
													a.resolve(n.target.result, e),
													t(function () {
														delete e.$ngfDataUrl
													}, 1e3)
												})
											},
											u.onerror = function () {
												t(function () {
													e.$ngfDataUrl = "",
													a.reject()
												})
											},
											u.readAsDataURL(e)
										}
									} else
										t(function () {
											e[i ? "$ngfDataUrl" : "$ngfBlobUrl"] = "",
											a.reject()
										})
								}),
								o = i ? e.$$ngfDataUrlPromise = a.promise : e.$$ngfBlobUrlPromise = a.promise,
								o["finally"](function () {
									delete e[i ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
								}),
								o
							},
							r
						}
					]),
				r.directive("ngfSrc", ["Upload", "$timeout", function (e, n) {
							return {
								restrict : "AE",
								link : function (r, i, o) {
									t(e, n, r, i, o, "ngfSrc", e.attrGetter("ngfResize", o, r), !1)
								}
							}
						}
					]),
				r.directive("ngfBackground", ["Upload", "$timeout", function (e, n) {
							return {
								restrict : "AE",
								link : function (r, i, o) {
									t(e, n, r, i, o, "ngfBackground", e.attrGetter("ngfResize", o, r), !0)
								}
							}
						}
					]),
				r.directive("ngfThumbnail", ["Upload", "$timeout", function (e, n) {
							return {
								restrict : "AE",
								link : function (r, i, o) {
									var a = e.attrGetter("ngfSize", o, r);
									t(e, n, r, i, o, "ngfThumbnail", a, e.attrGetter("ngfAsBackground", o, r))
								}
							}
						}
					]),
				r.config(["$compileProvider", function (e) {
							e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),
							e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)
						}
					]),
				r.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function (e, t) {
							return function (n, r, i) {
								if (angular.isString(n))
									return t.trustAsResourceUrl(n);
								var o = n && ((r ? n.$ngfDataUrl : n.$ngfBlobUrl) || n.$ngfDataUrl);
								return n && !o ? (!n.$ngfDataUrlFilterInProgress && angular.isObject(n) && (n.$ngfDataUrlFilterInProgress = !0, e.dataUrl(n, r)), "") : (n && delete n.$ngfDataUrlFilterInProgress, (n && o ? i ? t.trustAsResourceUrl(o) : o : n) || "")
							}
						}
					])
			}
			(),
			r.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function (e, t, n) {
						function r(e) {
							var t = "",
							n = [];
							if (e.length > 2 && "/" === e[0] && "/" === e[e.length - 1])
								t = e.substring(1, e.length - 1);
							else {
								var i = e.split(",");
								if (i.length > 1)
									for (var o = 0; o < i.length; o++) {
										var a = r(i[o]);
										a.regexp ? (t += "(" + a.regexp + ")", o < i.length - 1 && (t += "|")) : n = n.concat(a.excludes)
									}
								else
									0 === e.indexOf("!") ? n.push("^((?!" + r(e.substring(1)).regexp + ").)*$") : (0 === e.indexOf(".") && (e = "*" + e), t = "^" + e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", t = t.replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
							}
							return {
								regexp : t,
								excludes : n
							}
						}
						function i(e, t) {
							null == t || e.$dirty || (e.$setDirty ? e.$setDirty() : e.$dirty = !0)
						}
						var o = e;
						return o.validatePattern = function (e, t) {
							if (!t)
								return !0;
							var n = r(t),
							i = !0;
							if (n.regexp && n.regexp.length) {
								var o = new RegExp(n.regexp, "i");
								i = null != e.type && o.test(e.type) || null != e.name && o.test(e.name)
							}
							for (var a = n.excludes.length; a--; ) {
								var s = new RegExp(n.excludes[a], "i");
								i = i && (null == e.type || s.test(e.type)) && (null == e.name || s.test(e.name))
							}
							return i
						},
						o.ratioToFloat = function (e) {
							var t = e.toString(),
							n = t.search(/[x:]/i);
							return t = n > -1 ? parseFloat(t.substring(0, n)) / parseFloat(t.substring(n + 1)) : parseFloat(t)
						},
						o.registerModelChangeValidator = function (e, t, n) {
							e && e.$formatters.push(function (r) {
								e.$dirty && (r && !angular.isArray(r) && (r = [r]), o.validate(r, r ? r.length : 0, e, t, n).then(function () {
										o.applyModelValidation(e, r)
									}))
							})
						},
						o.applyModelValidation = function (e, t) {
							i(e, t),
							angular.forEach(e.$ngfValidations, function (t) {
								e.$setValidity(t.name, t.valid)
							})
						},
						o.getValidationAttr = function (e, t, n, r, i) {
							var a = "ngf" + n[0].toUpperCase() + n.substr(1),
							s = o.attrGetter(a, e, t, {
									$file : i
								});
							if (null == s && (s = o.attrGetter("ngfValidate", e, t, {
											$file : i
										}))) {
								var u = (r || n).split(".");
								s = s[u[0]],
								u.length > 1 && (s = s && s[u[1]])
							}
							return s
						},
						o.validate = function (e, n, r, i, a) {
							function s(t, n, s) {
								if (e) {
									for (var u = e.length, l = null; u--; ) {
										var c = e[u];
										if (c) {
											var f = o.getValidationAttr(i, a, t, n, c);
											null != f && (s(c, f) || (c.$error = t, (c.$errorMessages = c.$errorMessages || {}).name = !0, c.$errorParam = f, e.splice(u, 1), l = !1))
										}
									}
									null !== l && r.$ngfValidations.push({
										name : t,
										valid : l
									})
								}
							}
							function u(n, s, u, c, f) {
								function h(e, t, r) {
									null != r ? c(t, r).then(function (i) {
										f(i, r) ? e.resolve() : (t.$error = n, (t.$errorMessages = t.$errorMessages || {}).name = !0, t.$errorParam = r, e.reject())
									}, function () {
										l("ngfValidateForce", {
											$file : t
										}) ? (t.$error = n, (t.$errorMessages = t.$errorMessages || {}).name = !0, t.$errorParam = r, e.reject()) : e.resolve()
									}) : e.resolve()
								}
								var p = [o.emptyPromise()];
								return e ? (e = void 0 === e.length ? [e] : e, angular.forEach(e, function (e) {
										var r = t.defer();
										return p.push(r.promise),
										!u || null != e.type && 0 === e.type.search(u) ? void("dimensions" === n && null != o.attrGetter("ngfDimensions", i) ? o.imageDimensions(e).then(function (t) {
												h(r, e, l("ngfDimensions", {
														$file : e,
														$width : t.width,
														$height : t.height
													}))
											}, function () {
												r.reject()
											}) : "duration" === n && null != o.attrGetter("ngfDuration", i) ? o.mediaDuration(e).then(function (t) {
												h(r, e, l("ngfDuration", {
														$file : e,
														$duration : t
													}))
											}, function () {
												r.reject()
											}) : h(r, e, o.getValidationAttr(i, a, n, s, e))) : void r.resolve()
									}), t.all(p).then(function () {
										r.$ngfValidations.push({
											name : n,
											valid : !0
										})
									}, function () {
										r.$ngfValidations.push({
											name : n,
											valid : !1
										})
									})) : void 0
							}
							r = r || {},
							r.$ngfValidations = r.$ngfValidations || [],
							angular.forEach(r.$ngfValidations, function (e) {
								e.valid = !0
							});
							var l = function (e, t) {
								return o.attrGetter(e, i, a, t)
							};
							if (null == e || 0 === e.length)
								return o.emptyPromise(r);
							e = void 0 === e.length ? [e] : e.slice(0),
							s("maxFiles", null, function (e, t) {
								return t >= n
							}),
							s("pattern", null, o.validatePattern),
							s("minSize", "size.min", function (e, t) {
								return e.size + .1 >= o.translateScalars(t)
							}),
							s("maxSize", "size.max", function (e, t) {
								return e.size - .1 <= o.translateScalars(t)
							});
							var c = 0;
							if (s("maxTotalSize", null, function (t, n) {
									return c += t.size,
									c > o.translateScalars(n) ? (e.splice(0, e.length), !1) : !0
								}), s("validateFn", null, function (e, t) {
									return t === !0 || null === t || "" === t;
								}), !e.length)
								return o.emptyPromise(r, r.$ngfValidations);
							var f = t.defer(),
							h = [];
							return h.push(o.happyPromise(u("maxHeight", "height.max", /image/, this.imageDimensions, function (e, t) {
										return e.height <= t
									}))),
							h.push(o.happyPromise(u("minHeight", "height.min", /image/, this.imageDimensions, function (e, t) {
										return e.height >= t
									}))),
							h.push(o.happyPromise(u("maxWidth", "width.max", /image/, this.imageDimensions, function (e, t) {
										return e.width <= t
									}))),
							h.push(o.happyPromise(u("minWidth", "width.min", /image/, this.imageDimensions, function (e, t) {
										return e.width >= t
									}))),
							h.push(o.happyPromise(u("dimensions", null, /image/, function (e, t) {
										return o.emptyPromise(t)
									}, function (e) {
										return e
									}))),
							h.push(o.happyPromise(u("ratio", null, /image/, this.imageDimensions, function (e, t) {
										for (var n = t.toString().split(","), r = !1, i = 0; i < n.length; i++)
											Math.abs(e.width / e.height - o.ratioToFloat(n[i])) < 1e-4 && (r = !0);
										return r
									}))),
							h.push(o.happyPromise(u("maxRatio", "ratio.max", /image/, this.imageDimensions, function (e, t) {
										return e.width / e.height - o.ratioToFloat(t) < 1e-4
									}))),
							h.push(o.happyPromise(u("minRatio", "ratio.min", /image/, this.imageDimensions, function (e, t) {
										return e.width / e.height - o.ratioToFloat(t) > -1e-4
									}))),
							h.push(o.happyPromise(u("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function (e, t) {
										return e <= o.translateScalars(t)
									}))),
							h.push(o.happyPromise(u("minDuration", "duration.min", /audio|video/, this.mediaDuration, function (e, t) {
										return e >= o.translateScalars(t)
									}))),
							h.push(o.happyPromise(u("duration", null, /audio|video/, function (e, t) {
										return o.emptyPromise(t)
									}, function (e) {
										return e
									}))),
							h.push(o.happyPromise(u("validateAsyncFn", null, null, function (e, t) {
										return t
									}, function (e) {
										return e === !0 || null === e || "" === e
									}))),
							t.all(h).then(function () {
								f.resolve(r, r.$ngfValidations)
							})
						},
						o.imageDimensions = function (e) {
							if (e.$ngfWidth && e.$ngfHeight) {
								var r = t.defer();
								return n(function () {
									r.resolve({
										width : e.$ngfWidth,
										height : e.$ngfHeight
									})
								}),
								r.promise
							}
							if (e.$ngfDimensionPromise)
								return e.$ngfDimensionPromise;
							var i = t.defer();
							return n(function () {
								return 0 !== e.type.indexOf("image") ? void i.reject("not image") : void o.dataUrl(e).then(function (t) {
									function r() {
										var t = s[0].clientWidth,
										n = s[0].clientHeight;
										s.remove(),
										e.$ngfWidth = t,
										e.$ngfHeight = n,
										i.resolve({
											width : t,
											height : n
										})
									}
									function o() {
										s.remove(),
										i.reject("load error")
									}
									function a() {
										n(function () {
											s[0].parentNode && (s[0].clientWidth ? r() : u > 10 ? o() : a())
										}, 1e3)
									}
									var s = angular.element("<img>").attr("src", t).css("visibility", "hidden").css("position", "fixed");
									s.on("load", r),
									s.on("error", o);
									var u = 0;
									a(),
									angular.element(document.getElementsByTagName("body")[0]).append(s)
								}, function () {
									i.reject("load error")
								})
							}),
							e.$ngfDimensionPromise = i.promise,
							e.$ngfDimensionPromise["finally"](function () {
								delete e.$ngfDimensionPromise
							}),
							e.$ngfDimensionPromise
						},
						o.mediaDuration = function (e) {
							if (e.$ngfDuration) {
								var r = t.defer();
								return n(function () {
									r.resolve(e.$ngfDuration)
								}),
								r.promise
							}
							if (e.$ngfDurationPromise)
								return e.$ngfDurationPromise;
							var i = t.defer();
							return n(function () {
								return 0 !== e.type.indexOf("audio") && 0 !== e.type.indexOf("video") ? void i.reject("not media") : void o.dataUrl(e).then(function (t) {
									function r() {
										var t = s[0].duration;
										e.$ngfDuration = t,
										s.remove(),
										i.resolve(t)
									}
									function o() {
										s.remove(),
										i.reject("load error")
									}
									function a() {
										n(function () {
											s[0].parentNode && (s[0].duration ? r() : u > 10 ? o() : a())
										}, 1e3)
									}
									var s = angular.element(0 === e.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", t).css("visibility", "none").css("position", "fixed");
									s.on("loadedmetadata", r),
									s.on("error", o);
									var u = 0;
									a(),
									angular.element(document.body).append(s)
								}, function () {
									i.reject("load error")
								})
							}),
							e.$ngfDurationPromise = i.promise,
							e.$ngfDurationPromise["finally"](function () {
								delete e.$ngfDurationPromise
							}),
							e.$ngfDurationPromise
						},
						o
					}
				]),
			r.service("UploadResize", ["UploadValidate", "$q", function (e, t) {
						var n = e,
						r = function (e, t, n, r, i) {
							var o = i ? Math.max(n / e, r / t) : Math.min(n / e, r / t);
							return {
								width : e * o,
								height : t * o,
								marginX : e * o - n,
								marginY : t * o - r
							}
						},
						i = function (e, i, o, a, s, u, l, c) {
							var f = t.defer(),
							h = document.createElement("canvas"),
							p = document.createElement("img");
							return p.onload = function () {
								if (null != c && c(p.width, p.height) === !1)
									return void f.reject("resizeIf");
								try {
									if (u) {
										var e = n.ratioToFloat(u),
										t = p.width / p.height;
										e > t ? (i = p.width, o = i / e) : (o = p.height, i = o * e)
									}
									i || (i = p.width),
									o || (o = p.height);
									var d = r(p.width, p.height, i, o, l);
									h.width = Math.min(d.width, i),
									h.height = Math.min(d.height, o);
									var $ = h.getContext("2d");
									$.drawImage(p, Math.min(0, -d.marginX / 2), Math.min(0, -d.marginY / 2), d.width, d.height),
									f.resolve(h.toDataURL(s || "image/WebP", a || .934))
								} catch (g) {
									f.reject(g)
								}
							},
							p.onerror = function () {
								f.reject()
							},
							p.src = e,
							f.promise
						};
						return n.dataUrltoBlob = function (e, t, n) {
							for (var r = e.split(","), i = r[0].match(/:(.*?);/)[1], o = atob(r[1]), a = o.length, s = new Uint8Array(a); a--; )
								s[a] = o.charCodeAt(a);
							var u = new window.Blob([s], {
									type : i
								});
							return u.name = t,
							u.$ngfOrigSize = n,
							u
						},
						n.isResizeSupported = function () {
							var e = document.createElement("canvas");
							return window.atob && e.getContext && e.getContext("2d") && window.Blob
						},
						n.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
							get : function () {
								return this.$ngfName
							},
							set : function (e) {
								this.$ngfName = e
							},
							configurable : !0
						}),
						n.resize = function (e, r, o, a, s, u, l, c, f) {
							if (0 !== e.type.indexOf("image"))
								return n.emptyPromise(e);
							var h = t.defer();
							return n.dataUrl(e, !0).then(function (t) {
								i(t, r, o, a, s || e.type, u, l, c).then(function (r) {
									if ("image/jpeg" === e.type && f)
										try {
											r = n.restoreExif(t, r)
										} catch (i) {
											setTimeout(function () {
												throw i
											}, 1)
										}
									h.resolve(n.dataUrltoBlob(r, e.name, e.size))
								}, function (t) {
									"resizeIf" === t && h.resolve(e),
									h.reject()
								})
							}, function () {
								h.reject()
							}),
							h.promise
						},
						n
					}
				]),
			function () {
				function e(e, n, r, i, o, a, s, u, l, c) {
					function f() {
						return n.attr("disabled") || v("ngfDropDisabled", e)
					}
					function h(t, n) {
						u.updateModel(i, r, e, v("ngfChange") || v("ngfDrop"), t, n)
					}
					function p(t, n) {
						if (!u.shouldUpdateOn(t, r, e) || !n)
							return u.rejectPromise([]);
						var i = [];
						n.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (e, t, n) {
							i.push(n)
						});
						var o = [],
						a = [];
						if (i.length) {
							angular.forEach(i, function (e) {
								o.push(u.urlToBlob(e).then(function (e) {
										a.push(e)
									}))
							});
							var s = c.defer();
							return c.all(o).then(function () {
								s.resolve(a)
							}, function (e) {
								s.reject(e)
							}),
							s.promise
						}
					}
					function d(e, t, n, r) {
						var i = v("ngfDragOverClass", e, {
								$event : n
							}),
						o = "dragover";
						if (angular.isString(i))
							o = i;
						else if (i && (i.delay && (w = i.delay), i.accept || i.reject)) {
							var a = n.dataTransfer.items;
							if (null != a && a.length)
								for (var s = i.pattern || v("ngfPattern", e, {
											$event : n
										}), l = a.length; l--; ) {
									if (!u.validatePattern(a[l], s)) {
										o = i.reject;
										break
									}
									o = i.accept
								}
							else
								o = i.accept
						}
						r(o)
					}
					function $(t, n, i, o) {
						function a(e, t) {
							var n = c.defer();
							if (null != e)
								if (e.isDirectory) {
									var r = [u.emptyPromise()];
									if (h) {
										var i = {
											type : "directory"
										};
										i.name = i.path = (t || "") + e.name + e.name,
										p.push(i)
									}
									var o = e.createReader(),
									s = [],
									$ = function () {
										o.readEntries(function (i) {
											try {
												i.length ? (s = s.concat(Array.prototype.slice.call(i || [], 0)), $()) : (angular.forEach(s.slice(0), function (n) {
														p.length <= l && f >= d && r.push(a(n, (t ? t : "") + e.name + "/"))
													}), c.all(r).then(function () {
														n.resolve()
													}, function (e) {
														n.reject(e)
													}))
											} catch (o) {
												n.reject(o)
											}
										}, function (e) {
											n.reject(e)
										})
									};
									$()
								} else
									e.file(function (e) {
										try {
											e.path = (t ? t : "") + e.name,
											h && (e = u.rename(e, e.path)),
											p.push(e),
											d += e.size,
											n.resolve()
										} catch (r) {
											n.reject(r)
										}
									}, function (e) {
										n.reject(e)
									});
							return n.promise
						}
						var l = u.getValidationAttr(r, e, "maxFiles") || Number.MAX_VALUE,
						f = u.getValidationAttr(r, e, "maxTotalSize") || Number.MAX_VALUE,
						h = v("ngfIncludeDir", e),
						p = [],
						d = 0,
						$ = [u.emptyPromise()];
						if (t && t.length > 0 && "file" !== s.protocol())
							for (var g = 0; g < t.length; g++) {
								if (t[g].webkitGetAsEntry && t[g].webkitGetAsEntry() && t[g].webkitGetAsEntry().isDirectory) {
									var m = t[g].webkitGetAsEntry();
									if (m.isDirectory && !i)
										continue;
									null != m && $.push(a(m))
								} else {
									var y = t[g].getAsFile();
									null != y && (p.push(y), d += y.size)
								}
								if (p.length > l || d > f || !o && p.length > 0)
									break
							}
						else if (null != n)
							for (var b = 0; b < n.length; b++) {
								var w = n.item(b);
								if ((w.type || w.size > 0) && (p.push(w), d += w.size), p.length > l || d > f || !o && p.length > 0)
									break
							}
						var x = c.defer();
						return c.all($).then(function () {
							if (o || h)
								x.resolve(p);
							else {
								for (var e = 0; p[e] && "directory" === p[e].type; )
									e++;
								x.resolve([p[e]])
							}
						}, function (e) {
							x.reject(e)
						}),
						x.promise
					}
					var g = t(),
					v = function (e, t, n) {
						return u.attrGetter(e, r, t, n)
					};
					if (v("dropAvailable") && a(function () {
							e[v("dropAvailable")] ? e[v("dropAvailable")].value = g : e[v("dropAvailable")] = g
						}), !g)
						return void(v("ngfHideOnDropNotAvailable", e) === !0 && n.css("display", "none"));
					null == v("ngfSelect") && u.registerModelChangeValidator(i, r, e);
					var m,
					y = null,
					b = o(v("ngfStopPropagation")),
					w = 1;
					n[0].addEventListener("dragover", function (t) {
						if (!f() && u.shouldUpdateOn("drop", r, e)) {
							if (t.preventDefault(), b(e) && t.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
								var i = t.dataTransfer.effectAllowed;
								t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy"
							}
							a.cancel(y),
							m || (m = "C", d(e, r, t, function (r) {
									m = r,
									n.addClass(m),
									v("ngfDrag", e, {
										$isDragging : !0,
										$class : m,
										$event : t
									})
								}))
						}
					}, !1),
					n[0].addEventListener("dragenter", function (t) {
						!f() && u.shouldUpdateOn("drop", r, e) && (t.preventDefault(), b(e) && t.stopPropagation())
					}, !1),
					n[0].addEventListener("dragleave", function (t) {
						!f() && u.shouldUpdateOn("drop", r, e) && (t.preventDefault(), b(e) && t.stopPropagation(), y = a(function () {
									m && n.removeClass(m),
									m = null,
									v("ngfDrag", e, {
										$isDragging : !1,
										$event : t
									})
								}, w || 100))
					}, !1),
					n[0].addEventListener("drop", function (t) {
						if (!f() && u.shouldUpdateOn("drop", r, e)) {
							t.preventDefault(),
							b(e) && t.stopPropagation(),
							m && n.removeClass(m),
							m = null;
							var i,
							o = t.dataTransfer.items;
							try {
								i = t.dataTransfer && t.dataTransfer.getData && t.dataTransfer.getData("text/html")
							} catch (a) {}

							$(o, t.dataTransfer.files, v("ngfAllowDir", e) !== !1, v("multiple") || v("ngfMultiple", e)).then(function (e) {
								e.length ? h(e, t) : p("dropUrl", i).then(function (e) {
									h(e, t)
								})
							})
						}
					}, !1),
					n[0].addEventListener("paste", function (t) {
						if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && v("ngfEnableFirefoxPaste", e) && t.preventDefault(), !f() && u.shouldUpdateOn("paste", r, e)) {
							var n = [],
							i = t.clipboardData || t.originalEvent.clipboardData;
							if (i && i.items)
								for (var o = 0; o < i.items.length; o++)
									 - 1 !== i.items[o].type.indexOf("image") && n.push(i.items[o].getAsFile());
							n.length ? h(n, t) : p("pasteUrl", i).then(function (e) {
								h(e, t)
							})
						}
					}, !1),
					navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && v("ngfEnableFirefoxPaste", e) && (n.attr("contenteditable", !0), n.on("keypress", function (e) {
							e.metaKey || e.ctrlKey || e.preventDefault()
						}))
				}
				function t() {
					var e = document.createElement("div");
					return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
				}
				r.directive("ngfDrop", ["$parse", "$timeout", "$location", "Upload", "$http", "$q", function (t, n, r, i, o, a) {
							return {
								restrict : "AEC",
								require : "?ngModel",
								link : function (s, u, l, c) {
									e(s, u, l, c, t, n, r, i, o, a)
								}
							}
						}
					]),
				r.directive("ngfNoFileDrop", function () {
					return function (e, n) {
						t() && n.css("display", "none")
					}
				}),
				r.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function (e, n, r) {
							return function (i, o, a) {
								if (t()) {
									var s = e(r.attrGetter("ngfDropAvailable", a));
									n(function () {
										s(i),
										s.assign && s.assign(i, !0)
									})
								}
							}
						}
					])
			}
			(),
			r.service("UploadExif", ["UploadResize", "$q", function (e, t) {
						function n(e, t, n, r) {
							switch (t) {
							case 2:
								return e.transform(-1, 0, 0, 1, n, 0);
							case 3:
								return e.transform(-1, 0, 0, -1, n, r);
							case 4:
								return e.transform(1, 0, 0, -1, 0, r);
							case 5:
								return e.transform(0, 1, 1, 0, 0, 0);
							case 6:
								return e.transform(0, 1, -1, 0, r, 0);
							case 7:
								return e.transform(0, -1, -1, 0, r, n);
							case 8:
								return e.transform(0, -1, 1, 0, 0, n)
							}
						}
						function r(e) {
							for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; r > i; i++)
								t += String.fromCharCode(n[i]);
							return window.btoa(t)
						}
						var i = e;
						return i.isExifSupported = function () {
							return window.FileReader && (new FileReader).readAsArrayBuffer && i.isResizeSupported()
						},
						i.readOrientation = function (e) {
							var n = t.defer(),
							r = new FileReader,
							i = e.slice(0, 65536);
							return r.readAsArrayBuffer(i),
							r.onerror = function (e) {
								return n.reject(e)
							},
							r.onload = function (e) {
								var t = {
									orientation : 1
								},
								r = new DataView(this.result);
								if (65496 !== r.getUint16(0, !1))
									return n.resolve(t);
								for (var i = r.byteLength, o = 2; i > o; ) {
									var a = r.getUint16(o, !1);
									if (o += 2, 65505 === a) {
										if (1165519206 !== r.getUint32(o += 2, !1))
											return n.resolve(t);
										var s = 18761 === r.getUint16(o += 6, !1);
										o += r.getUint32(o + 4, s);
										var u = r.getUint16(o, s);
										o += 2;
										for (var l = 0; u > l; l++)
											if (274 === r.getUint16(o + 12 * l, s)) {
												var c = r.getUint16(o + 12 * l + 8, s);
												return c >= 2 && 8 >= c && (r.setUint16(o + 12 * l + 8, 1, s), t.fixedArrayBuffer = e.target.result),
												t.orientation = c,
												n.resolve(t)
											}
									} else {
										if (65280 !== (65280 & a))
											break;
										o += r.getUint16(o, !1)
									}
								}
								return n.resolve(t)
							},
							n.promise
						},
						i.applyExifRotation = function (e) {
							if (0 !== e.type.indexOf("image/jpeg"))
								return i.emptyPromise(e);
							var o = t.defer();
							return i.readOrientation(e).then(function (t) {
								return t.orientation < 2 || t.orientation > 8 ? o.resolve(e) : void i.dataUrl(e, !0).then(function (a) {
									var s = document.createElement("canvas"),
									u = document.createElement("img");
									u.onload = function () {
										try {
											s.width = t.orientation > 4 ? u.height : u.width,
											s.height = t.orientation > 4 ? u.width : u.height;
											var a = s.getContext("2d");
											n(a, t.orientation, u.width, u.height),
											a.drawImage(u, 0, 0);
											var l = s.toDataURL(e.type || "image/WebP", .934);
											l = i.restoreExif(r(t.fixedArrayBuffer), l);
											var c = i.dataUrltoBlob(l, e.name);
											o.resolve(c)
										} catch (f) {
											return o.reject(f)
										}
									},
									u.onerror = function () {
										o.reject()
									},
									u.src = a
								}, function (e) {
									o.reject(e)
								})
							}, function (e) {
								o.reject(e)
							}),
							o.promise
						},
						i.restoreExif = function (e, t) {
							var n = {};
							return n.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
							n.encode64 = function (e) {
								var t,
								n,
								r,
								i,
								o,
								a = "",
								s = "",
								u = "",
								l = 0;
								do
									t = e[l++], n = e[l++], s = e[l++], r = t >> 2, i = (3 & t) << 4 | n >> 4, o = (15 & n) << 2 | s >> 6, u = 63 & s, isNaN(n) ? o = u = 64 : isNaN(s) && (u = 64), a = a + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(u), t = n = s = "", r = i = o = u = "";
								while (l < e.length);
								return a
							},
							n.restore = function (e, t) {
								e.match("data:image/jpeg;base64,") && (e = e.replace("data:image/jpeg;base64,", ""));
								var n = this.decode64(e),
								r = this.slice2Segments(n),
								i = this.exifManipulation(t, r);
								return "data:image/jpeg;base64," + this.encode64(i)
							},
							n.exifManipulation = function (e, t) {
								var n = this.getExifArray(t),
								r = this.insertExif(e, n);
								return new Uint8Array(r)
							},
							n.getExifArray = function (e) {
								for (var t, n = 0; n < e.length; n++)
									if (t = e[n], 255 === t[0] & 225 === t[1])
										return t;
								return []
							},
							n.insertExif = function (e, t) {
								var n = e.replace("data:image/jpeg;base64,", ""),
								r = this.decode64(n),
								i = r.indexOf(255, 3),
								o = r.slice(0, i),
								a = r.slice(i),
								s = o;
								return s = s.concat(t),
								s = s.concat(a)
							},
							n.slice2Segments = function (e) {
								for (var t = 0, n = []; ; ) {
									if (255 === e[t] & 218 === e[t + 1])
										break;
									if (255 === e[t] & 216 === e[t + 1])
										t += 2;
									else {
										var r = 256 * e[t + 2] + e[t + 3],
										i = t + r + 2,
										o = e.slice(t, i);
										n.push(o),
										t = i
									}
									if (t > e.length)
										break
								}
								return n
							},
							n.decode64 = function (e) {
								var t,
								n,
								r,
								i,
								o,
								a = "",
								s = "",
								u = 0,
								l = [],
								c = /[^A-Za-z0-9\+\/\=]/g;
								c.exec(e) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),
								e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
								do
									r = this.KEY_STR.indexOf(e.charAt(u++)), i = this.KEY_STR.indexOf(e.charAt(u++)), o = this.KEY_STR.indexOf(e.charAt(u++)), s = this.KEY_STR.indexOf(e.charAt(u++)), t = r << 2 | i >> 4, n = (15 & i) << 4 | o >> 2, a = (3 & o) << 6 | s, l.push(t), 64 !== o && l.push(n), 64 !== s && l.push(a), t = n = a = "", r = i = o = s = "";
								while (u < e.length);
								return l
							},
							n.restore(e, t)
						},
						i
					}
				])
		}, {}

	],
	4 : [function (e, t, n) {
			e("./dist/ng-file-upload-all"),
			t.exports = "ngFileUpload"
		}, {
			"./dist/ng-file-upload-all" : 3
		}
	],
	5 : [function (e, t, n) {
			"use strict";
			function r(e) {
				return e && e.__esModule ? e : {
					"default" : e
				}
			}
			var i = e("angular"),
			o = r(i),
			a = e("ng-file-upload"),
			s = r(a),
			u = e("./controllers"),
			l = r(u);
			o["default"].module("webFontmin", [s["default"], l["default"].name]),
			o["default"].element(document).ready(function () {
				o["default"].bootstrap(document, ["webFontmin"]),
				window.onload = function () {
					console.log(121),
					o["default"].element(document.getElementById("loading")).css("display", "none")
				}
			})
		}, {
			"./controllers" : 6,
			angular : 2,
			"ng-file-upload" : 4
		}
	],
	6 : [function (e, t, n) {
			"use strict";
			function r(e) {
				return e && e.__esModule ? e : {
					"default" : e
				}
			}
			Object.defineProperty(n, "__esModule", {
				value : !0
			});
			var i = e("angular"),
			o = r(i);
			n["default"] = o["default"].module("controllers", []).controller("AppController", ["Upload", "$timeout", "$anchorScroll", "$location", function (e, t, n, r) {
							var i = this;
							i.status = "INIT",
							i.text = "从明天起，\n    做一个幸福的人,\n    喂马、劈柴，周游世界。\n    从明天起，\n    关心粮食和蔬菜。\n    我有一所房子，\n    面朝大海，\n    ";
							var a = "春暖花开。",
							s = a.split(""),
							u = [];
							s.forEach(function (e) {
								" " !== e && u.push(e)
							}),
							i.toPageTwo = function () {
								r.hash("page-2"),
								n(),
								document.getElementById("edit").focus();
								for (var e = function (e) {
									t(function () {
										i.text += u[e]
									}, 300 * e)
								}, o = 0; o < u.length; o++)
									e(o)
							},
							i.uploadFiles = function (t) {
								!t || t.length < 1 || (i.text = i.text || "", i.text = i.text.replace(/^\s/, "").replace(/\s$/, ""), console.log(i.text.length), e.upload({
										url : "upload-font",
										data : {
											file : t[0],
											text : i.text
										}
									}).then(function (e) {
										console.log("Success " + e.config.data.file.name + "uploaded. Response: " + e.data);
										var t = document.createElement("style");
										t.appendChild(document.createTextNode(e.data.style)),
										document.head.appendChild(t);
										var n = document.querySelector("#preview");
										o["default"].element(n).css("font-family", e.data.fontFamily),
										i.downloadUrl = e.data.zipUrl,
										i.resultStyle = {
											display : "block !important"
										},
										i.status = "SUCCESS"
									}, function (e) {
										console.log("Error status: " + e.status),
										i.status = "ERROR"
									}, function (e) {
										var t = parseInt(100 * e.loaded / e.total, 10);
										i.status = 100 == t ? "UPLOADED" : "UPLOADING",
										i.progressPercentage = t + "%",
										console.log("progress: " + t + "% " + e.config.data.file.name)
									}))
							}
						}
					])
		}, {
			angular : 2
		}
	]
}, {}, [5]);
