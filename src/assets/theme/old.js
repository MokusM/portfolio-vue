(function (t) {
	function a(a) {
		for (var i, l, o = a[0], r = a[1], c = a[2], u = 0, d = []; u < o.length; u++) (l = o[u]), Object.prototype.hasOwnProperty.call(e, l) && e[l] && d.push(e[l][0]), (e[l] = 0);
		for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
		p && p(a);
		while (d.length) d.shift()();
		return n.push.apply(n, c || []), s();
	}
	function s() {
		for (var t, a = 0; a < n.length; a++) {
			for (var s = n[a], i = !0, o = 1; o < s.length; o++) {
				var r = s[o];
				0 !== e[r] && (i = !1);
			}
			i && (n.splice(a--, 1), (t = l((l.s = s[0]))));
		}
		return t;
	}
	var i = {},
		e = { app: 0 },
		n = [];
	function l(a) {
		if (i[a]) return i[a].exports;
		var s = (i[a] = { i: a, l: !1, exports: {} });
		return t[a].call(s.exports, s, s.exports, l), (s.l = !0), s.exports;
	}
	(l.m = t),
		(l.c = i),
		(l.d = function (t, a, s) {
			l.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: s });
		}),
		(l.r = function (t) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(l.t = function (t, a) {
			if ((1 & a && (t = l(t)), 8 & a)) return t;
			if (4 & a && "object" === typeof t && t && t.__esModule) return t;
			var s = Object.create(null);
			if ((l.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & a && "string" != typeof t))
				for (var i in t)
					l.d(
						s,
						i,
						function (a) {
							return t[a];
						}.bind(null, i)
					);
			return s;
		}),
		(l.n = function (t) {
			var a =
				t && t.__esModule
					? function () {
							return t["default"];
					  }
					: function () {
							return t;
					  };
			return l.d(a, "a", a), a;
		}),
		(l.o = function (t, a) {
			return Object.prototype.hasOwnProperty.call(t, a);
		}),
		(l.p = "/");
	var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		r = o.push.bind(o);
	(o.push = a), (o = o.slice());
	for (var c = 0; c < o.length; c++) a(o[c]);
	var p = r;
	n.push([0, "chunk-vendors"]), s();
})({
	0: function (t, a, s) {
		t.exports = s("56d7");
	},
	"01ce": function (t, a, s) {
		t.exports = s.p + "img/poster-11.134ab14d.jpg";
	},
	"27fa": function (t, a, s) {
		t.exports = s.p + "img/poster-9.b1e87de9.jpg";
	},
	"2f4e": function (t, a, s) {
		"use strict";
		var i = s("cb9d"),
			e = s.n(i);
		e.a;
	},
	"41bf": function (t, a, s) {
		t.exports = s.p + "img/poster-7.f7087793.jpg";
	},
	"480f": function (t, a, s) {
		t.exports = s.p + "img/certificate-1.fa78fc06.jpg";
	},
	"542e": function (t, a, s) {
		t.exports = s.p + "img/poster-2.a49d3a1c.jpg";
	},
	"56d7": function (t, a, s) {
		"use strict";
		s.r(a);
		s("cadf"), s("551c"), s("f751"), s("097d");
		var i = s("2b0e"),
			e = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s(
					"div",
					{ staticClass: "main-wrapper loaded", attrs: { id: "app" } },
					[
						s(
							"full-page",
							{ ref: "fullpage", attrs: { options: t.options, id: "fullpage" } },
							[s("MainSection"), s("AboutSection"), s("TecnhologySection"), s("PaintSection"), s("StudySection"), s("PortfolioSection"), s("ContactSection")],
							1
						),
						s("transition", { on: { enter: t.fadeIn, leave: t.fadeOut } }, [t.drawer ? s("Nav", { on: { changeDrawer: t.onDrawerChange } }) : t._e()], 1),
						s("Pagination"),
						s("HeaderPage", { class: { "show-nav": t.drawer }, attrs: { drawer: t.drawer }, on: { changeDrawer: t.onDrawerChange } }),
						s("Loader"),
						s("div", { staticClass: "warn-landscape" }, [t._v("Поверніть будь-ласка телефон вертикально")]),
					],
					1
				);
			},
			n = [],
			l = (s("8e6e"), s("ac6a"), s("456d"), s("bd86")),
			o = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("header", [
					s("div", { staticClass: "wrapper" }, [
						s("a", { staticClass: "logo", attrs: { href: "#main" } }, [
							s(
								"svg",
								{
									staticStyle: { "enable-background": "new 0 0 299.5 306.6" },
									attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 299.5 306.6", role: "presentation", x: "0px", y: "0px", "xml:space": "preserve" },
								},
								[
									s("polygon", { staticClass: "logo-part-first", attrs: { fill: "#FFFFFF", points: "110.8,90.8 0,1.3 0.1,217.2 30.7,195.3 30.9,65.9 111,130.7 222,41 222,1.3 " } }),
									s("polygon", {
										staticClass: "logo-part-second",
										attrs: { fill: "#FFFFFF", points: "191.3,105.3 191.1,234.8 111.1,169.9 0,259.7 0,299.3 111.2,209.8 222,299.3 221.9,83.5 " },
									}),
									s("g", [
										s("defs", [s("rect", { attrs: { id: "SVGID_1_", width: "299.5", height: "306.6" } })]),
										s("clipPath", { attrs: { id: "SVGID_2_" } }, [s("use", { staticStyle: { overflow: "visible" }, attrs: { "xlink:href": "#SVGID_1_" } })]),
										s("g", { staticClass: "st1" }, [
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,254.5h46.1v1.6h-42.8l29.9,20.5v1l-29.9,20.5h42.8v1.6h-46.1v-1.3l31.1-21.3l-31.1-21.4V254.5z" } }),
											s("path", {
												attrs: {
													fill: "#FFFFFF",
													d: "M237.6,220.4c0-15.9,12.3-23.8,23.7-23.8s23.7,7.8,23.7,23.8c0,15.9-12.3,23.8-23.7,23.8\n\t\t\tS237.6,236.3,237.6,220.4z M239.1,220.4c0,14.8,11.4,22.1,22.1,22.1s22.1-7.3,22.1-22.1s-11.4-22.1-22.1-22.1\n\t\t\tS239.1,205.6,239.1,220.4z",
												},
											}),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,184.7h46.1v1.6h-46.1V184.7z" } }),
											s("path", {
												attrs: {
													fill: "#FFFFFF",
													d: "M237.6,159.5c0-4.7,1.2-9.6,3.1-13h1.6c-2,3.4-3.2,8.6-3.2,13c0,6.5,2.8,12.8,9.5,12.8\n\t\t\tc14.5,0,8.6-28.9,25.1-28.9c8.1,0,11.2,7.3,11.1,15.3c0,5.7-1.4,11.4-3.8,15.7h-1.6c2.5-4.5,3.9-10.2,3.9-15.5\n\t\t\tc0-7.4-2.4-13.8-9.5-13.8c-15.3,0-9.2,28.9-25.2,28.9C240.9,173.9,237.6,166.7,237.6,159.5z",
												},
											}),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,103.8h1.6v28.3h20.5v-26.3h1.6v26.3h20.8v-28.9h1.6v30.5h-46.1V103.8z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,90.8h46.1v1.6h-46.1V90.8z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,47.1h1.6v28.3h20.5V49h1.6v26.3h20.8V46.5h1.6V77h-46.1V47.1z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M284.3,21.7l-46.1,20.1v-1.8l44.2-19.2L238.2,1.6v-1.7l46.1,20.1V21.7z" } }),
										]),
										s("g", { staticClass: "st1" }),
									]),
								]
							),
						]),
						s(
							"a",
							{
								staticClass: "btn btn-border",
								attrs: { href: "#contact" },
								on: {
									click: function (t) {
										t.stopPropagation();
									},
								},
							},
							[t._v("Зв'язатися зі мною")]
						),
						s(
							"a",
							{
								staticClass: "button-nav",
								class: { active: t.drawer },
								attrs: { href: "#" },
								on: {
									click: function (a) {
										return a.stopPropagation(), t.changeDrawer(a);
									},
								},
							},
							[s("span")]
						),
					]),
				]);
			},
			r = [],
			c = {
				name: "HeaderPage",
				props: { drawer: { type: Boolean, default: !1 } },
				methods: {
					changeDrawer: function () {
						this.$emit("changeDrawer", !this.drawer);
					},
				},
			},
			p = c,
			u = s("2877"),
			d = Object(u["a"])(p, o, r, !1, null, null, null),
			m = d.exports,
			_ = function () {
				var t = this,
					a = t.$createElement;
				t._self._c;
				return t._m(0);
			},
			v = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "fullpage-nav" }, [
						s("ul", { staticClass: "main-pagination", attrs: { id: "js-menu" } }, [
							s("li", { staticClass: "main-pagination__item active", attrs: { "data-menuanchor": "main" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#main" } }, [
									s("span", { staticClass: "main-pagination__text" }),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "about" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#about" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Про мене")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "tecnhology" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#tecnhology" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Технології")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "paint" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#paint" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Редактори")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "study" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#study" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Уміння")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "portfolio" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#portfolio" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Портфоліо")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
							s("li", { staticClass: "main-pagination__item", attrs: { "data-menuanchor": "contact" } }, [
								s("a", { staticClass: "main-pagination__link", attrs: { href: "#contact" } }, [
									s("span", { staticClass: "main-pagination__text" }, [t._v("Контакти")]),
									s("span", { staticClass: "main-pagination__point" }),
								]),
							]),
						]),
						s("div", { staticClass: "fullpage-nav-icon" }),
					]);
				},
			],
			h = { name: "pagination" },
			g = h,
			f = Object(u["a"])(g, _, v, !1, null, null, null),
			C = f.exports,
			b = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", { staticClass: "loader" }, [
					s("div", { staticClass: "logo-load" }, [
						s("div", { staticClass: "loader-logo" }, [
							s(
								"svg",
								{
									staticStyle: { "enable-background": "new 0 0 299.5 306.6" },
									attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 299.5 306.6", role: "presentation", x: "0px", y: "0px", "xml:space": "preserve" },
								},
								[
									s("polygon", { staticClass: "logo-top", attrs: { fill: "#FFFFFF", points: "110.8,90.8 0,1.3 0.1,217.2 30.7,195.3 30.9,65.9 111,130.7 222,41 222,1.3 " } }),
									s("polygon", { staticClass: "logo-bottom", attrs: { fill: "#FFFFFF", points: "191.3,105.3 191.1,234.8 111.1,169.9 0,259.7 0,299.3 111.2,209.8 222,299.3 221.9,83.5 " } }),
									s("g", [
										s("defs", [s("rect", { attrs: { id: "SVGID_1_", width: "299.5", height: "306.6" } })]),
										s("clipPath", { attrs: { id: "SVGID_2_" } }, [s("use", { staticStyle: { overflow: "visible" }, attrs: { "xlink:href": "#SVGID_1_" } })]),
										s("g", { staticClass: "st1" }, [
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,254.5h46.1v1.6h-42.8l29.9,20.5v1l-29.9,20.5h42.8v1.6h-46.1v-1.3l31.1-21.3l-31.1-21.4V254.5z" } }),
											s("path", {
												attrs: {
													fill: "#FFFFFF",
													d: "M237.6,220.4c0-15.9,12.3-23.8,23.7-23.8s23.7,7.8,23.7,23.8c0,15.9-12.3,23.8-23.7,23.8\n\t\t\tS237.6,236.3,237.6,220.4z M239.1,220.4c0,14.8,11.4,22.1,22.1,22.1s22.1-7.3,22.1-22.1s-11.4-22.1-22.1-22.1\n\t\t\tS239.1,205.6,239.1,220.4z",
												},
											}),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,184.7h46.1v1.6h-46.1V184.7z" } }),
											s("path", {
												attrs: {
													fill: "#FFFFFF",
													d: "M237.6,159.5c0-4.7,1.2-9.6,3.1-13h1.6c-2,3.4-3.2,8.6-3.2,13c0,6.5,2.8,12.8,9.5,12.8\n\t\t\tc14.5,0,8.6-28.9,25.1-28.9c8.1,0,11.2,7.3,11.1,15.3c0,5.7-1.4,11.4-3.8,15.7h-1.6c2.5-4.5,3.9-10.2,3.9-15.5\n\t\t\tc0-7.4-2.4-13.8-9.5-13.8c-15.3,0-9.2,28.9-25.2,28.9C240.9,173.9,237.6,166.7,237.6,159.5z",
												},
											}),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,103.8h1.6v28.3h20.5v-26.3h1.6v26.3h20.8v-28.9h1.6v30.5h-46.1V103.8z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,90.8h46.1v1.6h-46.1V90.8z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M238.2,47.1h1.6v28.3h20.5V49h1.6v26.3h20.8V46.5h1.6V77h-46.1V47.1z" } }),
											s("path", { attrs: { fill: "#FFFFFF", d: "M284.3,21.7l-46.1,20.1v-1.8l44.2-19.2L238.2,1.6v-1.7l46.1,20.1V21.7z" } }),
										]),
									]),
								]
							),
						]),
					]),
				]);
			},
			k = [],
			w = { name: "loader" },
			F = w,
			y = Object(u["a"])(F, b, k, !1, null, null, null),
			x = y.exports,
			S = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", { staticClass: "main-nav" }, [
					s("div", { staticClass: "wrapper" }, [
						s("ul", { staticClass: "main-nav-list" }, [
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#main" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Головна")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#about" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Про мене")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#tecnhology" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Технології")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#paint" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Графічні редактори ")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#study" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Курси")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#portfolio" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Портфоліо")]
								),
							]),
							s("li", { staticClass: "main-nav-list__item" }, [
								s(
									"a",
									{
										staticClass: "main-nav-list__link",
										attrs: { href: "#contact" },
										on: {
											click: function (a) {
												return a.stopPropagation(), t.changeDrawer(a);
											},
										},
									},
									[t._v("Контакти")]
								),
							]),
						]),
					]),
				]);
			},
			j = [],
			O = {
				name: "Nav",
				props: { drawer: { type: Boolean, default: !1 } },
				methods: {
					changeDrawer: function () {
						this.$emit("changeDrawer", !1);
					},
				},
			},
			$ = O,
			P = Object(u["a"])($, S, j, !1, null, null, null),
			E = P.exports,
			M = function () {
				var t = this,
					a = t.$createElement;
				t._self._c;
				return t._m(0);
			},
			V = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "section section-main" }, [
						s("div", { staticClass: "section-bg" }),
						s("div", { staticClass: "wrapper" }, [
							s("h1", [t._v("Привіт!")]),
							s("p", [t._v("Мене звати Микола Мойсеєв."), s("br"), t._v("Я Junior Frond-end розробник команди SlicePlanet.")]),
							s("div", { staticClass: "next-slide-wrap" }, [s("a", { staticClass: "next-slide", attrs: { href: "#about" } }, [t._v("Детальніше")])]),
						]),
						s("div", { staticClass: "big-logo" }, [s("i", { staticClass: "icon-logo-part" })]),
					]);
				},
			],
			D = { name: "main" },
			G = D,
			T = Object(u["a"])(G, M, V, !1, null, null, null),
			L = T.exports,
			z = function () {
				var t = this,
					a = t.$createElement;
				t._self._c;
				return t._m(0);
			},
			A = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "section section-about", attrs: { "data-anchor": "about" } }, [
						s("div", { staticClass: "section-bg" }),
						s("div", { staticClass: "wrapper" }, [
							s("h2", [t._v("Про мене")]),
							s("p", [
								t._v(
									"У 2016 році прийшов працювати у команду, крім верстки також займався навчанням верстальників, підтримкою в технічкних питаннях. Велике значення для мене має самоосвіта і особистий розвиток. Ніколи не зупинятися на досягнутому."
								),
							]),
						]),
						s("div", { staticClass: "big-logo big-logo_reverse" }, [s("i", { staticClass: "icon-logo-part" })]),
					]);
				},
			],
			I = { name: "about" },
			B = I,
			q = Object(u["a"])(B, z, A, !1, null, null, null),
			H = q.exports,
			N = function () {
				var t = this,
					a = t.$createElement;
				t._self._c;
				return t._m(0);
			},
			J = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "section section-tecnhology section-white", attrs: { "data-anchor": "tecnhology" } }, [
						s("div", { staticClass: "section-white-img" }),
						s("div", { staticClass: "wrapper" }, [
							s("div", { staticClass: "bg-text" }, [t._v("technologies")]),
							s("h2", [t._v("Технології "), s("span", [t._v("які використовую:")])]),
							s("ul", { staticClass: "tecnhology-list" }, [
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("HTML5")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Pug, Jade")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("CSS, SCSS, SASS, LESS")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("CSS-Animation, SVG-Animation")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("JavaScript, jQuery")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Bootstrap 3/4")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Git, Bitbucket")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Gulp")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Vue, Vuex")]),
							]),
						]),
					]);
				},
			],
			U = { name: "tecnhology" },
			R = U,
			Q = Object(u["a"])(R, N, J, !1, null, null, null),
			W = Q.exports,
			K = function () {
				var t = this,
					a = t.$createElement;
				t._self._c;
				return t._m(0);
			},
			Z = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "section section-paint section-white", attrs: { "data-anchor": "paint" } }, [
						s("div", { staticClass: "section-white-img section-white-img-paint" }),
						s("div", { staticClass: "wrapper" }, [
							s("div", { staticClass: "bg-text" }, [t._v("Graphic editors")]),
							s("h2", [t._v("Графічні редактори "), s("span", [t._v("які використовую для верстки сайту:")])]),
							s("ul", { staticClass: "tecnhology-list" }, [
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Photoshop")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Figma")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Illustrator")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Avocode")]),
								s("li", { staticClass: "tecnhology-list__item" }, [t._v("Zeplin")]),
							]),
							s("p", [t._v("Володію базовими навиками які необхідні для порізки макетів перед версткою.")]),
						]),
					]);
				},
			],
			X = { name: "paint" },
			Y = X,
			tt = Object(u["a"])(Y, K, Z, !1, null, null, null),
			at = tt.exports,
			st = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", { staticClass: "section section-study", attrs: { "data-anchor": "study" } }, [
					s("div", { staticClass: "section-bg" }),
					s("div", { staticClass: "wrapper" }, [s("div", { staticClass: "study-row" }, [t._m(0), s("div", { staticClass: "study-row__slider" }, [s("imgSlider")], 1)])]),
					t._m(1),
				]);
			},
			it = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "study-row__text" }, [
						s("h2", [t._v("Курси "), s("span", [t._v("які закінчив по профілю:")])]),
						s("ul", { staticClass: "tecnhology-list" }, [
							s("li", { staticClass: "tecnhology-list__item" }, [
								t._v("JavaScript базовий курс ("),
								s("a", { attrs: { href: "https://itea.ua/uk/courses_itea/mark_up/javascript_basic/" } }, [t._v("ITEA.UA")]),
								t._v(")"),
							]),
							s("li", { staticClass: "tecnhology-list__item" }, [
								t._v("JavaScript просунитий курс ("),
								s("a", { attrs: { href: "https://itea.ua/uk/courses_itea/mark_up/javascript_advanced/" } }, [t._v("ITEA.UA")]),
								t._v(")"),
							]),
							s("li", { staticClass: "tecnhology-list__item" }, [
								t._v("Професія Веб-разробник ("),
								s("a", { attrs: { href: "https://loftschool.com/course/web-development/" } }, [t._v("LOFTSCHOLL")]),
								t._v(")"),
							]),
						]),
						s("p", [
							t._v("У 2017 брав участь  "),
							s("a", { attrs: { href: "https://devchallenge.it/" } }, [t._v("devchallenge11")]),
							t._v(", де в номінації  Front-end developer (HTML + CSS)\n            зайняв 2 місце в категорії Pro, люблю різні it-заходи, які допомагають розвиватись."),
						]),
					]);
				},
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "big-logo" }, [s("i", { staticClass: "icon-logo-part" })]);
				},
			],
			et = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s(
					"div",
					[
						s(
							"slick",
							{ ref: "slick", staticClass: "study-slider js-study-slider", attrs: { options: t.slickOptions } },
							t._l(t.images, function (a, i) {
								return s("div", { key: i, staticClass: "study-slider__item" }, [
									s("a", { staticClass: "study-slider__link", attrs: { href: "#" } }, [
										s("img", {
											directives: [{ name: "lazy", rawName: "v-lazy", value: a.src, expression: "image.src" }],
											on: {
												click: function (a) {
													return t.openGallery(i);
												},
											},
										}),
									]),
								]);
							}),
							0
						),
						s("LightBox", { ref: "lightbox", attrs: { images: t.images, "show-caption": !1, "show-light-box": !1, "show-thumbs": !1 } }),
					],
					1
				);
			},
			nt = [],
			lt = s("7ecd"),
			ot = s("1c09"),
			rt = s.n(ot),
			ct = {
				name: "imgSlider",
				components: { Slick: lt["a"], LightBox: rt.a },
				data: function () {
					return {
						images: [
							{ thumb: s("480f"), src: s("480f"), caption: "<h4>JavaScript базовий курс</h4>" },
							{ thumb: s("f18f"), src: s("f18f"), caption: "<h4>JavaScript просунитий курс</h4>" },
							{ thumb: s("a03d"), src: s("a03d"), caption: "<h4>Професія Веб-разробник в LOFTSCHOLL</h4>" },
							{ thumb: s("da3c"), src: s("da3c"), caption: "<h4>Нагорода за друге місцу</h4>" },
							{ thumb: s("630e"), src: s("630e"), caption: "<h4>Нагорода за друге місцу</h4>" },
						],
						slickOptions: {
							dots: !1,
							infinite: !1,
							speed: 300,
							slidesToShow: 2,
							vertical: !0,
							slidesToScroll: 1,
							prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow"></i></button>',
							nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-bottom"></i></button>',
							responsive: [{ breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: !0, vertical: !1, dots: !1 } }],
						},
					};
				},
				methods: {
					openGallery: function (t) {
						this.$refs.lightbox.showImage(t);
					},
				},
			},
			pt = ct,
			ut = Object(u["a"])(pt, et, nt, !1, null, null, null),
			dt = ut.exports,
			mt = { name: "study", components: { imgSlider: dt } },
			_t = mt,
			vt = Object(u["a"])(_t, st, it, !1, null, null, null),
			ht = vt.exports,
			gt = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", { staticClass: "section section-portfolio", attrs: { "data-anchor": "portfolio" } }, [
					s("div", { staticClass: "section-bg" }),
					s("div", { staticClass: "wrapper" }, [t._m(0), s("worksSlider")], 1),
					t._m(1),
				]);
			},
			ft = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("h2", [t._v("Портфоліо "), s("span", [t._v("більше 60 готових проектів")])]);
				},
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "big-logo big-logo_reverse" }, [s("i", { staticClass: "icon-logo-part" })]);
				},
			],
			Ct = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", [
					s("ul", { staticClass: "tabs" }, [
						s(
							"li",
							{
								staticClass: "tabs__item",
								class: { active: "Vue" === t.currentFilter },
								on: {
									click: function (a) {
										return t.setFilter("Vue");
									},
								},
							},
							[s("a", { staticClass: "tabs__link", attrs: { href: "#" } }, [t._v("Vue")])]
						),
						s(
							"li",
							{
								staticClass: "tabs__item",
								class: { active: "site1" === t.currentFilter },
								on: {
									click: function (a) {
										return t.setFilter("site1");
									},
								},
							},
							[s("a", { staticClass: "tabs__link", attrs: { href: "#" } }, [t._v("Верстка")])]
						),
					]),
					"Vue" === t.currentFilter
						? s(
								"div",
								{ staticClass: "works-slider-row" },
								[
									s(
										"slick",
										{ ref: "slick", staticClass: "works-slider", attrs: { options: t.slickOptions } },
										t._l(t.worksVue, function (a) {
											return s("div", { key: a.id, staticClass: "works-slider__item" }, [
												s("div", { staticClass: "works-slider__card" }, [
													s("div", { staticClass: "works-slider__cont" }, [
														s("div", { staticClass: "works-slider__name" }, [t._v(t._s(a.name))]),
														s("div", { staticClass: "works-slider__desc" }, [t._v(t._s(a.desc))]),
														s("div", { staticClass: "works-slider__tags" }, [t._v(t._s(a.tags))]),
														a.linksGit.length
															? s("a", { staticClass: "works-slider__links", attrs: { href: a.linksGit, target: "_blanck" } }, [t._v("Подивитись код на github")])
															: t._e(),
														a.link.length ? s("a", { staticClass: "works-slider__links", attrs: { href: a.link, target: "_blanck" } }, [t._v("Відкрити сайт")]) : t._e(),
													]),
													s("div", { staticClass: "works-slider__img" }, [s("img", { attrs: { src: a.img, alt: "" } })]),
												]),
											]);
										}),
										0
									),
								],
								1
						  )
						: s(
								"div",
								{ staticClass: "works-slider-row" },
								[
									s(
										"slick",
										{ ref: "slick", staticClass: "works-slider", attrs: { options: t.slickOptions } },
										t._l(t.works, function (a) {
											return s("div", { key: a.id, staticClass: "works-slider__item" }, [
												s("div", { staticClass: "works-slider__card" }, [
													s("div", { staticClass: "works-slider__cont" }, [
														s("div", { staticClass: "works-slider__name" }, [t._v(t._s(a.name))]),
														s("div", { staticClass: "works-slider__desc" }, [t._v(t._s(a.desc))]),
														s("div", { staticClass: "works-slider__tags" }, [t._v(t._s(a.tags))]),
														a.linksGit.length ? s("a", { staticClass: "works-slider__links", attrs: { href: a.length, target: "_blanck" } }, [t._v("Подивитись код на github")]) : t._e(),
														a.link.length ? s("a", { staticClass: "works-slider__links", attrs: { href: a.length, target: "_blanck" } }, [t._v("Відкрити сайт")]) : t._e(),
													]),
													s("div", { staticClass: "works-slider__img" }, [s("img", { attrs: { src: a.img, alt: "" } })]),
												]),
											]);
										}),
										0
									),
								],
								1
						  ),
				]);
			},
			bt = [],
			kt = {
				name: "worksSlider",
				components: { Slick: lt["a"] },
				data: function () {
					return {
						currentFilter: "Vue",
						slickOptions: {
							dots: !0,
							infinite: !1,
							speed: 300,
							slidesToShow: 3,
							slidesToScroll: 1,
							arrows: !1,
							responsive: [
								{ breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: !0 } },
								{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: !0 } },
							],
						},
						worksVue: [
							{
								id: 1,
								name: "CRM",
								desc: "CRM система для підрахунку домашніх витрат",
								tags: "firebase, vue, vuex, github, materializecss",
								linksGit: "https://github.com/MokusM/crm-vue",
								link: "",
								img: s("7363"),
								category: "vue",
							},
							{
								id: 2,
								name: "Портфоліо",
								desc: "Розробка лендінга і адмін панелі для нього",
								tags: "vue, vuex, pug",
								linksGit: "https://github.com/MokusM/ls-portfolio",
								link: "",
								img: s("542e"),
								category: "vue",
							},
							{
								id: 3,
								name: "mem-img",
								desc: "Розробка адмін панелі, для додавання і фільтрації фотографій",
								tags: "vue, vuex, vuetify",
								link: "",
								linksGit: "",
								img: s("5a99"),
								category: "vue",
							},
						],
						works: [
							{
								id: 1,
								name: "Coffe History",
								desc: "Лендінг коффе маркета, тестова робота на devChallenge",
								tags: "parralax, animation, landing",
								linksGit: "",
								link: "https://mokusm.github.io/pr-5/index.html",
								img: s("b80a"),
								category: "site1",
							},
							{
								id: 2,
								name: "DDA",
								desc: "Інтернет магазин шторів, верстка близько 20-ти сторінок",
								tags: "html5, css3, jQuery, Git, Gulp",
								linksGit: "",
								link: "",
								img: s("86eb"),
								category: "site1",
							},
							{ id: 3, name: "Sports24", desc: "Інтрент портал спортивних подій", tags: "html5, css3, ajax", linksGit: "", link: "", img: s("a524"), category: "site1" },
							{ id: 4, name: "Scmobile", desc: "Інтрент портал спортивних подій", tags: "landing, video, wow.js", linksGit: "", link: "", img: s("e7bc"), category: "site1" },
							{
								id: 5,
								name: "viailia",
								desc: "Інтрент портал спортивних подій",
								tags: "fullpage, animation",
								linksGit: "",
								link: "https://mokusm.github.io/pr-3/index.html",
								img: s("41bf"),
								category: "site1",
							},
							{ id: 6, name: "rbs", desc: "Інтрент портал спортивних подій", tags: "горизонтальний скролл, animation", linksGit: "", link: "", img: s("aff5"), category: "site1" },
							{
								id: 7,
								name: "Игорь Фомин",
								desc: "Інтрент портал спортивних подій",
								tags: "горизонтальний скролл, animation",
								linksGit: "",
								link: "https://mokusm.github.io/pr-1/index.html",
								img: s("27fa"),
								category: "site1",
							},
							{ id: 8, name: "autoprom", desc: "Інтрент портал спортивних подій", tags: "горизонтальний скролл, animation", linksGit: "", link: "", img: s("ee7b"), category: "site1" },
							{
								id: 9,
								name: "mudvex",
								desc: "Інтрент портал спортивних подій",
								tags: "горизонтальний скролл, animation",
								linksGit: "",
								link: "https://mokusm.github.io/pr-2/index.html",
								img: s("01ce"),
								category: "site1",
							},
						],
					};
				},
				methods: {
					setFilter: function (t) {
						this.currentFilter = t;
					},
				},
				watch: {
					currentFilter: function () {
						var t = this,
							a = this.$refs.slick.currentSlide();
						this.$refs.slick.destroy(),
							this.$nextTick(function () {
								t.$refs.slick.create(), t.$refs.slick.goTo(a, !0);
							});
					},
				},
			},
			wt = kt,
			Ft = Object(u["a"])(wt, Ct, bt, !1, null, null, null),
			yt = Ft.exports,
			xt = { name: "portfolio", components: { worksSlider: yt } },
			St = xt,
			jt = Object(u["a"])(St, gt, ft, !1, null, null, null),
			Ot = jt.exports,
			$t = function () {
				var t = this,
					a = t.$createElement,
					s = t._self._c || a;
				return s("div", { staticClass: "section section-contact", attrs: { "data-anchor": "contact" } }, [
					s("div", { staticClass: "section-bg" }),
					s("div", { staticClass: "wrapper" }, [
						s("div", { staticClass: "contacts-row" }, [
							t._m(0),
							s("div", { staticClass: "contacts-form", on: { mouseover: t.logoAnimation } }, [
								s("div", { staticClass: "contacts-form__logo" }, [
									s(
										"svg",
										{
											staticStyle: { "enable-background": "new 0 0 299.5 306.6" },
											attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 299.5 306.6", role: "presentation", x: "0px", y: "0px", "xml:space": "preserve" },
										},
										[
											s("polygon", { staticClass: "logo-top", attrs: { fill: "#FFFFFF", points: "110.8,90.8 0,1.3 0.1,217.2 30.7,195.3 30.9,65.9 111,130.7 222,41 222,1.3 " } }),
											s("polygon", {
												staticClass: "logo-bottom",
												attrs: { fill: "#FFFFFF", points: "191.3,105.3 191.1,234.8 111.1,169.9 0,259.7 0,299.3 111.2,209.8 222,299.3 221.9,83.5 " },
											}),
										]
									),
								]),
								s("h2", [t._v("зворотній зв’язок")]),
								t.sendMessage
									? s("div", { staticClass: "email-send" }, [
											s("div", { staticClass: "email-send__title" }, [t._v("Email відправлено")]),
											s(
												"a",
												{
													staticClass: "email-send__link",
													attrs: { href: "#" },
													on: {
														click: function (a) {
															a.stopPropagation(), (t.sendMessage = !1);
														},
													},
												},
												[t._v("Відправити ще раз")]
											),
									  ])
									: s(
											"form",
											{
												on: {
													submit: function (a) {
														return a.preventDefault(), t.submitHandler(a);
													},
												},
											},
											[
												s("div", { staticClass: "box-field" }, [
													s("div", { staticClass: "box-field__input", class: { invalid: t.$v.name.$dirty && !t.$v.name.required } }, [
														s("input", {
															directives: [{ name: "model", rawName: "v-model.trim", value: t.name, expression: "name", modifiers: { trim: !0 } }],
															staticClass: "form-control",
															attrs: { type: "text", placeholder: "Ім’я" },
															domProps: { value: t.name },
															on: {
																input: function (a) {
																	a.target.composing || (t.name = a.target.value.trim());
																},
																blur: function (a) {
																	return t.$forceUpdate();
																},
															},
														}),
													]),
													t.$v.name.$dirty && !t.$v.name.required ? s("small", { staticClass: "helper-text invalid" }, [t._v("Поле Ім’я не повинно бути пустим")]) : t._e(),
												]),
												s("div", { staticClass: "box-field" }, [
													s("div", { staticClass: "box-field__input", class: { invalid: t.$v.phone.$dirty && !t.$v.phone.required } }, [
														s("input", {
															directives: [{ name: "model", rawName: "v-model.trim", value: t.phone, expression: "phone", modifiers: { trim: !0 } }],
															staticClass: "form-control",
															attrs: { type: "text", placeholder: "Телефон або Email" },
															domProps: { value: t.phone },
															on: {
																input: function (a) {
																	a.target.composing || (t.phone = a.target.value.trim());
																},
																blur: function (a) {
																	return t.$forceUpdate();
																},
															},
														}),
													]),
													t.$v.phone.$dirty && !t.$v.phone.required ? s("small", { staticClass: "helper-text invalid" }, [t._v("Поле не повинно бути пустим")]) : t._e(),
												]),
												s("div", { staticClass: "box-field" }, [
													s("div", { staticClass: "box-field__input", class: { invalid: t.$v.phone.$dirty && !t.$v.phone.required } }, [
														s("textarea", {
															directives: [{ name: "model", rawName: "v-model.trim", value: t.message, expression: "message", modifiers: { trim: !0 } }],
															staticClass: "form-control",
															attrs: { type: "text", placeholder: "Повідомлення" },
															domProps: { value: t.message },
															on: {
																input: function (a) {
																	a.target.composing || (t.message = a.target.value.trim());
																},
																blur: function (a) {
																	return t.$forceUpdate();
																},
															},
														}),
													]),
													t.$v.message.$dirty && !t.$v.message.required ? s("small", { staticClass: "helper-text invalid" }, [t._v("Поле не повинно бути пустим")]) : t._e(),
												]),
												t._m(1),
												s("input", { attrs: { type: "hidden", name: "project_name", value: "Портфолио" } }),
												s("input", { attrs: { type: "hidden", name: "admin_email", value: "moceev@ukr.net" } }),
												s("input", { attrs: { type: "hidden", name: "form_subject", value: "Тема листа" } }),
											]
									  ),
							]),
						]),
					]),
				]);
			},
			Pt = [
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "contacts-inf" }, [
						s("h2", [t._v("Контакти")]),
						s("ul", { staticClass: "social-list" }, [
							s("li", { staticClass: "social-list__item" }, [
								s("a", { staticClass: "social-list__link", attrs: { href: "https://www.linkedin.com/in/koljamoiseiev/", target: "_blanck" } }, [s("i", { staticClass: "icon-linkedin" })]),
							]),
							s("li", { staticClass: "social-list__item" }, [
								s("a", { staticClass: "social-list__link", attrs: { href: "https://www.instagram.com/koljamoiseiev/", target: "_blanck" } }, [s("i", { staticClass: "icon-inst" })]),
							]),
							s("li", { staticClass: "social-list__item" }, [
								s("a", { staticClass: "social-list__link", attrs: { href: "https://www.facebook.com/profile.php?id=100017334272832&ref=bookmarks", target: "_blanck" } }, [
									s("i", { staticClass: "icon-fb" }),
								]),
							]),
							s("li", { staticClass: "social-list__item" }, [
								s("a", { staticClass: "social-list__link", attrs: { href: "https://github.com/MokusM", target: "_blanck" } }, [s("i", { staticClass: "icon-git" })]),
							]),
						]),
						s("ul", { staticClass: "contact-inf" }, [
							s("li", { staticClass: "contact-inf__item" }, [
								s("a", { staticClass: "contact-inf__link", attrs: { href: "tel:380631522267" } }, [s("i", { staticClass: "icon-phone" }), s("span", [t._v("+38-(063)-152-22-67")])]),
							]),
							s("li", { staticClass: "contact-inf__item" }, [
								s("a", { staticClass: "contact-inf__link", attrs: { href: "mailto:moceevmukola@gmail.com" } }, [
									s("i", { staticClass: "icon-mail" }),
									s("span", [t._v("moceevmukola@gmail.com")]),
								]),
							]),
							s("li", { staticClass: "contact-inf__item" }, [
								s("a", { staticClass: "contact-inf__link", attrs: { href: "https://sweetcv.com/7kvlk4api2cyk", target: "_blanck" } }, [
									s("i", { staticClass: "icon-pdf" }),
									s("span", [t._v("Скачати резюме")]),
								]),
							]),
						]),
					]);
				},
				function () {
					var t = this,
						a = t.$createElement,
						s = t._self._c || a;
					return s("div", { staticClass: "text-right" }, [s("button", { staticClass: "btn-send", attrs: { type: "submit" } }, [t._v("Відправити")])]);
				},
			],
			Et = (s("7f7f"), s("96cf"), s("3b8d")),
			Mt = s("b5ae"),
			Vt = s("a5cf"),
			Dt =
				(s("b383"),
				{
					name: "contact",
					data: function () {
						return { sent: !1, name: "", message: "", phone: "", sendMessage: !1 };
					},
					validations: { message: { required: Mt["required"] }, name: { required: Mt["required"] }, phone: { required: Mt["required"] } },
					methods: {
						submitHandler: (function () {
							var t = Object(Et["a"])(
								regeneratorRuntime.mark(function t() {
									var a;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (!this.$v.$invalid) {
															t.next = 3;
															break;
														}
														return this.$v.$touch(), t.abrupt("return");
													case 3:
														(a = { message: this.message, name: this.name, phone: this.phone }), (this.sendMessage = !0);
														try {
															console.log(a);
														} catch (s) {}
													case 6:
													case "end":
														return t.stop();
												}
										},
										t,
										this
									);
								})
							);
							function a() {
								return t.apply(this, arguments);
							}
							return a;
						})(),
						logoAnimation: function () {
							var t = new Vt["d"]();
							t.to(".contacts-form__logo", 0.4, { scale: 1.2, ease: Vt["b"].easeOut }), t.to(".contacts-form__logo", 0.2, { scale: 1, delay: 0.5 });
						},
					},
				}),
			Gt = Dt,
			Tt = Object(u["a"])(Gt, $t, Pt, !1, null, null, null),
			Lt = Tt.exports,
			zt = s("2f62");
		function At(t, a) {
			var s = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(t);
				a &&
					(i = i.filter(function (a) {
						return Object.getOwnPropertyDescriptor(t, a).enumerable;
					})),
					s.push.apply(s, i);
			}
			return s;
		}
		function It(t) {
			for (var a = 1; a < arguments.length; a++) {
				var s = null != arguments[a] ? arguments[a] : {};
				a % 2
					? At(s, !0).forEach(function (a) {
							Object(l["a"])(t, a, s[a]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
					: At(s).forEach(function (a) {
							Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(s, a));
					  });
			}
			return t;
		}
		var Bt = {
				name: "app",
				components: {
					HeaderPage: m,
					Nav: E,
					Pagination: C,
					MainSection: L,
					AboutSection: H,
					TecnhologySection: W,
					PaintSection: at,
					StudySection: ht,
					PortfolioSection: Ot,
					ContactSection: Lt,
					Loader: x,
				},
				data: function () {
					return {
						drawer: !1,
						windowWidth: 0,
						windowHeight: 0,
						options: {
							licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
							anchors: ["main", "about", "tecnhology", "paint", "study", "portfolio", "contact"],
							menu: "#js-menu",
							scrollingSpeed: 400,
							navigation: !0,
						},
					};
				},
				computed: It({}, Object(zt["c"])(["loaded"])),
				methods: It({}, Object(zt["b"])(["setLoaded"]), {
					onDrawerChange: function (t) {
						this.drawer = t;
					},
					fadeIn: function (t, a) {
						var s = new Vt["e"]({ onComplete: a });
						s.set(".main-nav", { x: 1.3 * window.innerWidth, rotate: -14, scale: 1.5, transformOrigin: "50% 50%" }),
							s.to(".main-nav", 0.5, { x: 0, ease: Vt["b"].easeOut }),
							s
								.to(".main-nav", 1, { rotate: 0, scale: 1, ease: Vt["b"].easeOut })
								.fromTo(".main-nav-list", 1, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, ease: Vt["b"].easeOut, onComplete: a });
					},
					fadeOut: function (t, a) {
						var s = new Vt["e"]({ onComplete: a });
						s.to(".main-nav-list", 1, { autoAlpha: 0, ease: Vt["b"].easeOut })
							.to(".main-nav-list", 1, { scale: 0, ease: Vt["b"].easeOut }, "-=0.7")
							.to(".main-nav", 1, { rotate: -14, scale: 1.5, autoAlpha: 0, ease: Vt["b"].easeOut }, "-=0.9");
					},
				}),
				mounted: function () {
					this.setLoaded(!0),
						setTimeout(function () {
							document.getElementById("app").classList.add("web");
						}, 3500),
						setTimeout(function () {
							document.getElementById("app").classList.add("load"), document.getElementById("app").classList.remove("loaded");
						}, 5e3);
				},
			},
			qt = Bt,
			Ht = (s("2f4e"), Object(u["a"])(qt, e, n, !1, null, null, null)),
			Nt = Ht.exports,
			Jt =
				(s("7514"),
				{
					namespaced: !1,
					state: { skills: [{ id: 1, title: "Обучение" }] },
					getters: {
						getSkills: function (t) {
							return t.skills;
						},
						skillsById: function (t) {
							return function (a) {
								return t.skills.find(function (t) {
									return t.id === a;
								});
							};
						},
					},
					actions: {},
					mutations: {},
				});
		i["a"].use(zt["a"]);
		var Ut = new zt["a"].Store({
				state: { user: { name: "Николай Моисеев" }, loaded: !1 },
				mutations: {
					setLoaded: function (t, a) {
						t.loaded = a;
					},
				},
				modules: { skills: Jt },
			}),
			Rt = s("a45e"),
			Qt = s.n(Rt),
			Wt = s("1dce"),
			Kt = s.n(Wt),
			Zt = s("caf9"),
			Xt = s("4476"),
			Yt = s("9ce6"),
			ta = s("bc3a"),
			aa = s.n(ta),
			sa = s("a7fe"),
			ia = s.n(sa);
		i["a"].use(Qt.a),
			i["a"].use(Kt.a),
			i["a"].use(Zt["a"]),
			Xt["a"].registerPlugin(Yt["a"]),
			i["a"].use(ia.a, aa.a),
			(i["a"].config.productionTip = !1),
			new i["a"]({
				store: Ut,
				render: function (t) {
					return t(Nt);
				},
			}).$mount("#app");
	},
	"5a99": function (t, a, s) {
		t.exports = s.p + "img/poster-12.4c4efc21.jpg";
	},
	"630e": function (t, a, s) {
		t.exports = s.p + "img/certificate-5.9a931ed3.jpg";
	},
	7363: function (t, a, s) {
		t.exports = s.p + "img/poster-1.44b39406.jpg";
	},
	"86eb": function (t, a, s) {
		t.exports = s.p + "img/poster-4.da01180c.jpg";
	},
	a03d: function (t, a, s) {
		t.exports = s.p + "img/certificate-3.98715b13.jpg";
	},
	a524: function (t, a, s) {
		t.exports = s.p + "img/poster-5.c9857102.jpg";
	},
	aff5: function (t, a, s) {
		t.exports = s.p + "img/poster-8.3cdf0824.jpg";
	},
	b80a: function (t, a, s) {
		t.exports = s.p + "img/poster-3.523e73c1.jpg";
	},
	cb9d: function (t, a, s) {},
	da3c: function (t, a, s) {
		t.exports = s.p + "img/certificate-4.689e0ec8.jpg";
	},
	e7bc: function (t, a, s) {
		t.exports = s.p + "img/poster-6.42e02a61.jpg";
	},
	ee7b: function (t, a, s) {
		t.exports = s.p + "img/poster-10.9ab0bc3c.jpg";
	},
	f18f: function (t, a, s) {
		t.exports = s.p + "img/certificate-2.41480789.jpg";
	},
});
//# sourceMappingURL=app.b8fd1f48.js.map
