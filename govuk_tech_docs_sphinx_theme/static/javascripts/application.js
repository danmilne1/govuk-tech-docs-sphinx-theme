/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ke.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function o(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    function r(e) {
        var t = {};
        return pe.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s),
        e.detachEvent("onload", s))
    }
    function s() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(),
        pe.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(De, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? pe.parseJSON(n) : n)
                } catch (e) {}
                pe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, i) {
        if (Le(e)) {
            var o, r, a = pe.expando, s = e.nodeType, l = s ? pe.cache : e, u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = s ? e[a] = ne.pop() || pe.guid++ : a),
                l[u] || (l[u] = s ? {} : {
                    toJSON: pe.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[u] = pe.extend(l[u], t) : l[u].data = pe.extend(l[u].data, t)),
                r = l[u],
                i || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== n && (r[pe.camelCase(t)] = n),
                "string" == typeof t ? null == (o = r[t]) && (o = r[pe.camelCase(t)]) : o = r,
                o
        }
    }
    function d(e, t, n) {
        if (Le(e)) {
            var i, o, r = e.nodeType, a = r ? pe.cache : e, s = r ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in i ? t = [t] : (t = pe.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    o = t.length;
                    for (; o--; )
                        delete i[t[o]];
                    if (n ? !u(i) : !pe.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                u(a[s]))) && (r ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(e, t, n, i) {
        var o, r = 1, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return pe.css(e, t, "")
        }
        , l = s(), u = n && n[3] || (pe.cssNumber[t] ? "" : "px"), c = (pe.cssNumber[t] || "px" !== u && +l) && Fe.exec(pe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do {
                r = r || ".5",
                c /= r,
                pe.style(e, t, c + u)
            } while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (c = +c || +l || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = o)),
        o
    }
    function p(e) {
        var t = We.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n, i, o = 0, r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [],
            n = e.childNodes || e; null != (i = n[o]); o++)
                !t || pe.nodeName(i, t) ? r.push(i) : pe.merge(r, h(i, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], r) : r
    }
    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"))
    }
    function v(e) {
        qe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function g(e, t, n, i, o) {
        for (var r, a, s, l, u, c, d, f = e.length, g = p(t), y = [], b = 0; f > b; b++)
            if ((a = e[b]) || 0 === a)
                if ("object" === pe.type(a))
                    pe.merge(y, a.nodeType ? [a] : a);
                else if (Ve.test(a)) {
                    for (l = l || g.appendChild(t.createElement("div")),
                    u = (Pe.exec(a) || ["", ""])[1].toLowerCase(),
                    d = ze[u] || ze._default,
                    l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2],
                    r = d[0]; r--; )
                        l = l.lastChild;
                    if (!de.leadingWhitespace && Be.test(a) && y.push(t.createTextNode(Be.exec(a)[0])),
                    !de.tbody)
                        for (a = "table" !== u || Ge.test(a) ? "<table>" !== d[1] || Ge.test(a) ? 0 : l : l.firstChild,
                        r = a && a.childNodes.length; r--; )
                            pe.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pe.merge(y, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = g.lastChild
                } else
                    y.push(t.createTextNode(a));
        for (l && g.removeChild(l),
        de.appendChecked || pe.grep(h(y, "input"), v),
        b = 0; a = y[b++]; )
            if (i && pe.inArray(a, i) > -1)
                o && o.push(a);
            else if (s = pe.contains(a.ownerDocument, a),
            l = h(g.appendChild(a), "script"),
            s && m(l),
            n)
                for (r = 0; a = l[r++]; )
                    Re.test(a.type || "") && n.push(a);
        return l = null,
        g
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return ie.activeElement
        } catch (e) {}
    }
    function w(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (s in t)
                w(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = b;
        else if (!o)
            return e;
        return 1 === r && (a = o,
        o = function(e) {
            return pe().off(e),
            a.apply(this, arguments)
        }
        ,
        o.guid = a.guid || (a.guid = pe.guid++)),
        e.each(function() {
            pe.event.add(this, t, o, i, n)
        })
    }
    function E(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function k(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function S(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function T(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n, i, o, r = pe._data(e), a = pe._data(t, r), s = r.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    o = s[n].length; o > i; i++)
                        pe.event.add(t, n, s[n][i])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }
    function C(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !de.noCloneEvent && t[pe.expando]) {
                o = pe._data(t);
                for (i in o.events)
                    pe.removeEvent(t, i, o.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (k(t).text = e.text,
            S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function A(e, t, n, i) {
        t = re.apply([], t);
        var o, r, a, s, l, u, c = 0, d = e.length, f = d - 1, p = t[0], m = pe.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !de.checkClone && nt.test(p))
            return e.each(function(o) {
                var r = e.eq(o);
                m && (t[0] = p.call(this, o, r.html())),
                A(r, t, n, i)
            });
        if (d && (u = g(t, e[0].ownerDocument, !1, e, i),
        o = u.firstChild,
        1 === u.childNodes.length && (u = o),
        o || i)) {
            for (s = pe.map(h(u, "script"), k),
            a = s.length; d > c; c++)
                r = u,
                c !== f && (r = pe.clone(r, !0, !0),
                a && pe.merge(s, h(r, "script"))),
                n.call(e[c], r, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                pe.map(s, S),
                c = 0; a > c; c++)
                    r = s[c],
                    Re.test(r.type || "") && !pe._data(r, "globalEval") && pe.contains(l, r) && (r.src ? pe._evalUrl && pe._evalUrl(r.src) : pe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
            u = o = null
        }
        return e
    }
    function N(e, t, n) {
        for (var i, o = t ? pe.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || pe.cleanData(h(i)),
            i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(h(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function j(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body)
          , i = pe.css(n[0], "display");
        return n.detach(),
        i
    }
    function _(e) {
        var t = ie
          , n = lt[e];
        return n || (n = j(e, t),
        "none" !== n && n || (st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (st[0].contentWindow || st[0].contentDocument).document,
        t.write(),
        t.close(),
        n = j(e, t),
        st.detach()),
        lt[e] = n),
        n
    }
    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        if (e in kt)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--; )
            if ((e = Et[n] + t)in kt)
                return e
    }
    function D(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)
            i = e[a],
            i.style && (r[a] = pe._data(i, "olddisplay"),
            n = i.style.display,
            t ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && He(i) && (r[a] = pe._data(i, "olddisplay", _(i.nodeName)))) : (o = He(i),
            (n && "none" !== n || !o) && pe._data(i, "olddisplay", o ? n : pe.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }
    function I(e, t, n) {
        var i = bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function F(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)
            "margin" === n && (a += pe.css(e, n + Me[r], !0, o)),
            i ? ("content" === n && (a -= pe.css(e, "padding" + Me[r], !0, o)),
            "margin" !== n && (a -= pe.css(e, "border" + Me[r] + "Width", !0, o))) : (a += pe.css(e, "padding" + Me[r], !0, o),
            "padding" !== n && (a += pe.css(e, "border" + Me[r] + "Width", !0, o)));
        return a
    }
    function M(e, t, n) {
        var i = !0
          , o = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = pt(e)
          , a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = ht(e, t, r),
            (0 > o || null == o) && (o = e.style[t]),
            ct.test(o))
                return o;
            i = a && (de.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + F(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }
    function H(e, t, n, i, o) {
        return new H.prototype.init(e,t,n,i,o)
    }
    function $() {
        return e.setTimeout(function() {
            St = void 0
        }),
        St = pe.now()
    }
    function q(e, t) {
        var n, i = {
            height: e
        }, o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t)
            n = Me[o],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function P(e, t, n) {
        for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function R(e, t, n) {
        var i, o, r, a, s, l, u, c = this, d = {}, f = e.style, p = e.nodeType && He(e), h = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        c.always(function() {
            c.always(function() {
                s.unqueued--,
                pe.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        u = pe.css(e, "display"),
        "inline" === ("none" === u ? pe._data(e, "olddisplay") || _(e.nodeName) : u) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        de.shrinkWrapBlocks() || c.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i],
            Ct.exec(o)) {
                if (delete t[i],
                r = r || "toggle" === o,
                o === (p ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[i])
                        continue;
                    p = !0
                }
                d[i] = h && h[i] || pe.style(e, i)
            } else
                u = void 0;
        if (pe.isEmptyObject(d))
            "inline" === ("none" === u ? _(e.nodeName) : u) && (f.display = u);
        else {
            h ? "hidden"in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}),
            r && (h.hidden = !p),
            p ? pe(e).show() : c.done(function() {
                pe(e).hide()
            }),
            c.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d)
                    pe.style(e, t, d[t])
            });
            for (i in d)
                a = P(p ? h[i] : 0, i, c),
                i in h || (h[i] = a.start,
                p && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function B(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = pe.camelCase(n),
            o = t[i],
            r = e[n],
            pe.isArray(r) && (o = r[1],
            r = e[n] = r[0]),
            n !== i && (e[i] = r,
            delete e[n]),
            (a = pe.cssHooks[i]) && "expand"in a) {
                r = a.expand(r),
                delete e[i];
                for (n in r)
                    n in e || (e[n] = r[n],
                    t[n] = o)
            } else
                t[i] = o
    }
    function W(e, t, n) {
        var i, o, r = 0, a = W.prefilters.length, s = pe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = St || $(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++)
                u.tweens[a].run(r);
            return s.notifyWith(e, [u, r, n]),
            1 > r && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: St || $(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i > n; n++)
                    u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (B(c, u.opts.specialEasing); a > r; r++)
            if (i = W.prefilters[r].call(u, e, c, u.opts))
                return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)),
                i;
        return pe.map(c, P, u),
        pe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        pe.fx.timer(pe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function z(e) {
        return pe.attr(e, "class") || ""
    }
    function V(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, o = 0, r = t.toLowerCase().match(Ne) || [];
            if (pe.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function G(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0,
            pe.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                o(u),
                !1)
            }),
            l
        }
        var r = {}
          , a = e === Qt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function U(e, t) {
        var n, i, o = pe.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && pe.extend(!0, e, n),
        e
    }
    function J(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            r = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r),
        n[r]) : void 0
    }
    function X(e, t, n, i) {
        var o, r, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (r = c.shift(); r; )
            if (e.responseFields[r] && (n[e.responseFields[r]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(a = u[l + " " + r] || u["* " + r]))
                        for (o in u)
                            if (s = o.split(" "),
                            s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function K(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }
    function Q(e) {
        if (!pe.contains(e.ownerDocument || ie, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === K(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function Y(e, t, n, i) {
        var o;
        if (pe.isArray(t))
            pe.each(t, function(t, o) {
                n || nn.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
        else if (n || "object" !== pe.type(t))
            i(e, t);
        else
            for (o in t)
                Y(e + "[" + o + "]", t[o], n, i)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = []
      , ie = e.document
      , oe = ne.slice
      , re = ne.concat
      , ae = ne.push
      , se = ne.indexOf
      , le = {}
      , ue = le.toString
      , ce = le.hasOwnProperty
      , de = {}
      , fe = "1.12.4"
      , pe = function(e, t) {
        return new pe.fn.init(e,t)
    }
      , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , me = /^-ms-/
      , ve = /-([\da-z])/gi
      , ge = function(e, t) {
        return t.toUpperCase()
    };
    pe.fn = pe.prototype = {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    },
    pe.extend = pe.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || pe.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o)
                    e = a[i],
                    n = o[i],
                    a !== n && (u && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1,
                    r = e && pe.isArray(e) ? e : []) : r = e && pe.isPlainObject(e) ? e : {},
                    a[i] = pe.extend(u, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }
    ,
    pe.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (!de.ownFirst)
                for (t in e)
                    return ce.call(e, t);
            for (t in e)
                ;
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ve, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; i > o && !1 !== t.call(e[o], o, e[o]); o++)
                    ;
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; )
                e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i]; )
                    e[o++] = t[i++];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; r > o; o++)
                !t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, i) {
            var o, r, a = 0, s = [];
            if (n(e))
                for (o = e.length; o > a; a++)
                    null != (r = t(e[a], a, i)) && s.push(r);
            else
                for (a in e)
                    null != (r = t(e[a], a, i)) && s.push(r);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t],
            t = e,
            e = o),
            pe.isFunction(e) ? (n = oe.call(arguments, 2),
            i = function() {
                return e.apply(t || this, n.concat(oe.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || pe.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: de
    }),
    "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var o, r, a, s, l, u, d, p, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== O && L(t),
            t = t || O,
            I)) {
                if (11 !== m && (u = ge.exec(e)))
                    if (o = u[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(o)))
                                return n;
                            if (a.id === o)
                                return n.push(a),
                                n
                        } else if (h && (a = h.getElementById(o)) && $(t, a) && a.id === o)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (w.qsa && !V[e + " "] && (!F || !F.test(e))) {
                    if (1 !== m)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = q),
                        d = T(e),
                        r = d.length,
                        l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--; )
                            d[r] = l + " " + f(d[r]);
                        p = d.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return Y.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            s === q && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(se, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > E.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[q] = !0,
            e
        }
        function o(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                E.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function p(e, t, n) {
            var i = t.dir
              , o = n && "parentNode" === i
              , r = B++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || o)
                        return e(t, n, r)
            }
            : function(t, n, a) {
                var s, l, u, c = [R, r];
                if (a) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || o) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || o) {
                            if (u = t[q] || (t[q] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = l[i]) && s[0] === R && s[1] === r)
                                return c[2] = s[2];
                            if (l[i] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++)
                t(e, n[o], i);
            return i
        }
        function v(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
                (r = e[s]) && (n && !n(r, i, o) || (a.push(r),
                u && t.push(s)));
            return a
        }
        function g(e, t, n, o, r, a) {
            return o && !o[q] && (o = g(o)),
            r && !r[q] && (r = g(r, a)),
            i(function(i, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, g = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? g : v(g, f, e, s, l), b = n ? r || (i ? e : h || o) ? [] : a : y;
                if (n && n(y, b, s, l),
                o)
                    for (u = v(b, p),
                    o(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [],
                            c = b.length; c--; )
                                (d = b[c]) && u.push(y[c] = d);
                            r(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (u = r ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else
                    b = v(b === a ? b.splice(h, b.length) : b),
                    r ? r(null, a, b, l) : Y.apply(a, b)
            })
        }
        function y(e) {
            for (var t, n, i, o = e.length, r = E.relative[e[0].type], a = r || E.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                return e === t
            }, a, !0), u = p(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, i) {
                var o = !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null,
                o
            }
            ]; o > s; s++)
                if (n = E.relative[e[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = E.filter[e[s].type].apply(null, e[s].matches),
                    n[q]) {
                        for (i = ++s; o > i && !E.relative[e[i].type]; i++)
                            ;
                        return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(e, n) {
            var o = n.length > 0
              , r = e.length > 0
              , a = function(i, a, s, l, u) {
                var c, d, f, p = 0, h = "0", m = i && [], g = [], y = N, b = i || r && E.find.TAG("*", u), x = R += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (N = a === O || a || u); h !== w && null != (c = b[h]); h++) {
                    if (r && c) {
                        for (d = 0,
                        a || c.ownerDocument === O || (L(c),
                        s = !I); f = e[d++]; )
                            if (f(c, a || O, s)) {
                                l.push(c);
                                break
                            }
                        u && (R = x)
                    }
                    o && ((c = !f && c) && p--,
                    i && m.push(c))
                }
                if (p += h,
                o && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, g, a, s);
                    if (i) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || g[h] || (g[h] = K.call(l));
                        g = v(g)
                    }
                    Y.apply(l, g),
                    u && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return u && (R = x,
                N = y),
                m
            };
            return o ? i(a) : a
        }
        var x, w, E, k, S, T, C, A, N, j, _, L, O, D, I, F, M, H, $, q = "sizzle" + 1 * new Date, P = e.document, R = 0, B = 0, W = n(), z = n(), V = n(), G = function(e, t) {
            return e === t && (_ = !0),
            0
        }, U = 1 << 31, J = {}.hasOwnProperty, X = [], K = X.pop, Q = X.push, Y = X.push, Z = X.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(re), fe = new RegExp("^" + ie + "$"), pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Ee = function() {
            L()
        };
        try {
            Y.apply(X = Z.call(P.childNodes), P.childNodes),
            X[P.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: X.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        L = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i,
            D = O.documentElement,
            I = !S(O),
            (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)),
            w.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = o(function(e) {
                return e.appendChild(O.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ve.test(O.getElementsByClassName),
            w.getById = o(function(e) {
                return D.appendChild(e).id = q,
                !O.getElementsByName || !O.getElementsByName(q).length
            }),
            w.getById ? (E.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            E.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete E.find.ID,
            E.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            E.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            E.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
            }
            ,
            M = [],
            F = [],
            (w.qsa = ve.test(O.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || F.push(".#.+[+~]")
            }),
            o(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (w.matchesSelector = ve.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                M.push("!=", re)
            }),
            F = F.length && new RegExp(F.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = ve.test(D.compareDocumentPosition),
            $ = t || ve.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            G = t ? function(e, t) {
                if (e === t)
                    return _ = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === P && $(P, e) ? -1 : t === O || t.ownerDocument === P && $(P, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return _ = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], l = [t];
                if (!o || !r)
                    return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === r)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; s[i] === l[i]; )
                    i++;
                return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
            }
            ,
            O) : O
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && L(e),
            n = n.replace(ce, "='$1']"),
            w.matchesSelector && I && !V[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n)))
                try {
                    var i = H.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, O, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && L(e),
            $(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && L(e);
            var n = E.attrHandle[t.toLowerCase()]
              , i = n && J.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (_ = !w.detectDuplicates,
            j = !w.sortStable && e.slice(0),
            e.sort(G),
            _) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return j = null,
            e
        }
        ,
        k = t.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += k(t);
            return n
        }
        ,
        E = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "",
                        "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (v) {
                            if (r) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (f = v,
                                d = f[q] || (f[q] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                u = c[e] || [],
                                p = u[0] === R && u[1],
                                b = p && u[2],
                                f = p && v.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++b && f === t) {
                                        c[e] = [R, p, b];
                                        break
                                    }
                            } else if (y && (f = t,
                            d = f[q] || (f[q] = {}),
                            c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            u = c[e] || [],
                            p = u[0] === R && u[1],
                            b = p),
                            !1 === b)
                                for (; (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (y && (d = f[q] || (f[q] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                c[e] = [R, b]),
                                f !== t)); )
                                    ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n],
                    E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), a = o.length; a--; )
                            i = ee(e, o[a]),
                            e[i] = !(t[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , o = C(e.replace(se, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--; )
                            (r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, i, r) {
                        return t[0] = e,
                        o(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, we),
                    function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !E.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        E.pseudos.nth = E.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            E.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            E.pseudos[x] = l(x);
        return d.prototype = E.filters = E.pseudos,
        E.setFilters = new d,
        T = t.tokenize = function(e, n) {
            var i, o, r, a, s, l, u, c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = E.preFilter; s; ) {
                i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                l.push(r = [])),
                i = !1,
                (o = ue.exec(s)) && (i = o.shift(),
                r.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }),
                s = s.slice(i.length));
                for (a in E.filter)
                    !(o = pe[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(),
                    r.push({
                        value: i,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
        }
        ,
        C = t.compile = function(e, t) {
            var n, i = [], o = [], r = V[e + " "];
            if (!r) {
                for (t || (t = T(e)),
                n = t.length; n--; )
                    r = y(t[n]),
                    r[q] ? i.push(r) : o.push(r);
                r = V(e, b(o, i)),
                r.selector = e
            }
            return r
        }
        ,
        A = t.select = function(e, t, n, i) {
            var o, r, a, s, l, u = "function" == typeof e && e, d = !i && T(e = u.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (r = d[0] = d[0].slice(0),
                r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && I && E.relative[r[1].type]) {
                    if (!(t = (E.find.ID(a.matches[0].replace(xe, we), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o],
                !E.relative[s = a.type]); )
                    if ((l = E.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        !(e = i.length && f(r)))
                            return Y.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || C(e, d))(i, t, !I, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = q.split("").sort(G).join("") === q,
        w.detectDuplicates = !!_,
        L(),
        w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    pe.find = ye,
    pe.expr = ye.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = ye.uniqueSort,
    pe.text = ye.getText,
    pe.isXMLDoc = ye.isXML,
    pe.contains = ye.contains;
    var be = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && pe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , we = pe.expr.match.needsContext
      , Ee = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , ke = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    pe.fn.extend({
        find: function(e) {
            var t, n = [], i = this, o = i.length;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (pe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; o > t; t++)
                pe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? pe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Se, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pe.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || Se,
        "string" == typeof e) {
            if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t,
                pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)),
                Ee.test(i[1]) && pe.isPlainObject(t))
                    for (i in t)
                        pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((o = ie.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2])
                    return Se.find(e);
                this.length = 1,
                this[0] = o
            }
            return this.context = ie,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        pe.makeArray(e, this))
    }
    ).prototype = pe.fn,
    Se = pe(ie);
    var Ce = /^(?:parents|prev(?:Until|All))/
      , Ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (pe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = pe.filter(i, o)),
            this.length > 1 && (Ae[e] || (o = pe.uniqueSort(o)),
            Ce.test(e) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var Ne = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : pe.extend({}, e);
        var t, n, i, o, a = [], s = [], l = -1, u = function() {
            for (o = e.once,
            i = t = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length; )
                    !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (a = n ? [] : "")
        }, c = {
            add: function() {
                return a && (n && !t && (l = a.length - 1,
                s.push(n)),
                function t(n) {
                    pe.each(n, function(n, i) {
                        pe.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== pe.type(i) && t(i)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, a, n)) > -1; )
                        a.splice(n, 1),
                        l >= n && l--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = s = [],
                a = n = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, n) {
                return o || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                s.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return pe.Deferred(function(n) {
                        pe.each(t, function(t, r) {
                            var a = pe.isFunction(e[t]) && e[t];
                            o[r[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, i) : i
                }
            }
              , o = {};
            return i.pipe = i.then,
            pe.each(t, function(e, r) {
                var a = r[2]
                  , s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, i, o = 0, r = oe.call(arguments), a = r.length, s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : pe.Deferred(), u = function(e, n, i) {
                return function(o) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? oe.call(arguments) : o,
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                i = new Array(a); a > o; o++)
                    r[o] && pe.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, t)).done(u(o, i, r)).fail(l.reject) : --s;
            return s || l.resolveWith(i, r),
            l.promise()
        }
    });
    var je;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e),
        this
    }
    ,
    pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0,
            !0 !== e && --pe.readyWait > 0 || (je.resolveWith(ie, [pe]),
            pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"),
            pe(ie).off("ready"))))
        }
    }),
    pe.ready.promise = function(t) {
        if (!je)
            if (je = pe.Deferred(),
            "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll)
                e.setTimeout(pe.ready);
            else if (ie.addEventListener)
                ie.addEventListener("DOMContentLoaded", s),
                e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s),
                e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        a(),
                        pe.ready()
                    }
                }()
            }
        return je.promise(t)
    }
    ,
    pe.ready.promise();
    var _e;
    for (_e in pe(de))
        break;
    de.ownFirst = "0" === _e,
    de.inlineBlockNeedsLayout = !1,
    pe(function() {
        var e, t, n, i;
        (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"),
        i = ie.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var e = ie.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch (e) {
            de.deleteExpando = !1
        }
        e = null
    }();
    var Le = function(e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
      , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , De = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = pe.data(r),
                1 === r.nodeType && !pe._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = pe.camelCase(i.slice(5)),
                        l(r, i, o[i])));
                    pe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : r ? l(r, e, pe.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = pe._data(e, t),
            n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = pe._queueHooks(e, t)
              , a = function() {
                pe.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"),
                    pe._removeData(e, n)
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, o = pe.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = pe._data(r[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(t)
        }
    }),
    function() {
        var e;
        de.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return n = ie.getElementsByTagName("body")[0],
            n && n.style ? (t = ie.createElement("div"),
            i = ie.createElement("div"),
            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(ie.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(i),
            e) : void 0
        }
    }();
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Fe = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$","i")
      , Me = ["Top", "Right", "Bottom", "Left"]
      , He = function(e, t) {
        return e = t || e,
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
    }
      , $e = function(e, t, n, i, o, r, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === pe.type(n)) {
            o = !0;
            for (s in n)
                $e(e, t, s, n[s], !0, r, a)
        } else if (void 0 !== i && (o = !0,
        pe.isFunction(i) || (a = !0),
        u && (a ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(pe(e), n)
        }
        )),
        t))
            for (; l > s; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    }
      , qe = /^(?:checkbox|radio)$/i
      , Pe = /<([\w:-]+)/
      , Re = /^$|\/(?:java|ecma)script/i
      , Be = /^\s+/
      , We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = ie.createElement("div")
          , t = ie.createDocumentFragment()
          , n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        de.leadingWhitespace = 3 === e.firstChild.nodeType,
        de.tbody = !e.getElementsByTagName("tbody").length,
        de.htmlSerialize = !!e.getElementsByTagName("link").length,
        de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        de.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = ie.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        de.noCloneEvent = !!e.addEventListener,
        e[pe.expando] = 1,
        de.attributes = !e.getAttribute(pe.expando)
    }();
    var ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ze.optgroup = ze.option,
    ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead,
    ze.th = ze.td;
    var Ve = /<|&#?\w+;/
      , Ge = /<tbody/i;
    !function() {
        var t, n, i = ie.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (de[t] = n in e) || (i.setAttribute(n, "t"),
            de[t] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Ue = /^(?:input|select|textarea)$/i
      , Je = /^key/
      , Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ke = /^(?:focusinfocus|focusoutblur)$/
      , Qe = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, v = pe._data(e);
            if (v) {
                for (n.handler && (l = n,
                n = l.handler,
                o = l.selector),
                n.guid || (n.guid = pe.guid++),
                (a = v.events) || (a = v.events = {}),
                (c = v.handle) || (c = v.handle = function(e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(Ne) || [""],
                s = t.length; s--; )
                    r = Qe.exec(t[s]) || [],
                    p = m = r[1],
                    h = (r[2] || "").split(".").sort(),
                    p && (u = pe.event.special[p] || {},
                    p = (o ? u.delegateType : u.bindType) || p,
                    u = pe.event.special[p] || {},
                    d = pe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && pe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, v = pe.hasData(e) && pe._data(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(Ne) || [""],
                u = t.length; u--; )
                    if (s = Qe.exec(t[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = pe.event.special[p] || {},
                        p = (i ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = r = f.length; r--; )
                            a = f[r],
                            !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || pe.removeEvent(e, p, v.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && (delete v.handle,
                pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, a, s, l, u, c, d, f = [i || ie], p = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || ie,
            3 !== i.nodeType && 8 !== i.nodeType && !Ke.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            t = t[pe.expando] ? t : new pe.Event(p,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : pe.makeArray(n, [t]),
            u = pe.event.special[p] || {},
            o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!o && !u.noBubble && !pe.isWindow(i)) {
                    for (l = u.delegateType || p,
                    Ke.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (i.ownerDocument || ie) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
                    t.type = d > 1 ? l : u.bindType || p,
                    r = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"),
                    r && r.apply(s, n),
                    (r = a && s[a]) && r.apply && Le(s) && (t.result = r.apply(s, n),
                    !1 === t.result && t.preventDefault());
                if (t.type = p,
                !o && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), n)) && Le(i) && a && i[p] && !pe.isWindow(i)) {
                    c = i[a],
                    c && (i[a] = null),
                    pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    pe.event.triggered = void 0,
                    c && (i[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, i, o, r, a = [], s = oe.call(arguments), l = (pe._data(this, "events") || {})[e.type] || [], u = pe.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = pe.event.handlers.call(this, e, l),
                t = 0; (o = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r,
                        e.data = r.data,
                        void 0 !== (i = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && !1 === (e.result = i) && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [],
                        n = 0; s > n; n++)
                            r = t[n],
                            o = r.selector + " ",
                            void 0 === i[o] && (i[o] = r.needsContext ? pe(o, this).index(l) > -1 : pe.find(o, this, null, [l]).length),
                            i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[pe.expando])
                return e;
            var t, n, i, o = e.type, r = e, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Xe.test(o) ? this.mouseHooks : Je.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new pe.Event(r),
            t = i.length; t--; )
                n = i[t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || ie),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie,
                o = i.documentElement,
                n = i.body,
                e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    pe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : b) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        void (this[pe.expando] = !0)) : new pe.Event(e,t)
    }
    ,
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || pe.contains(i, o)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    de.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }),
    de.change || (pe.event.special.change = {
        setup: function() {
            return Ue.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }),
            pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                pe.event.simulate("change", this, e)
            })),
            !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ue.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }),
                pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return pe.event.remove(this, "._change"),
            !Ue.test(this.nodeName)
        }
    }),
    de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = pe._data(i, t);
                o || i.addEventListener(e, n, !0),
                pe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = pe._data(i, t) - 1;
                o ? pe._data(i, t, o) : (i.removeEventListener(e, n, !0),
                pe._removeData(i, t))
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = b),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? pe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ye = / jQuery\d+="(?:null|\d+)"/g
      , Ze = new RegExp("<(?:" + We + ")[\\s/>]","i")
      , et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , tt = /<script|<style|<link/i
      , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , it = /^true\/(.*)/
      , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , rt = p(ie)
      , at = rt.appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, a, s, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML,
            at.removeChild(r = at.firstChild)),
            !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (i = h(r),
                s = h(e),
                a = 0; null != (o = s[a]); ++a)
                    i[a] && C(o, i[a]);
            if (t)
                if (n)
                    for (s = s || h(e),
                    i = i || h(r),
                    a = 0; null != (o = s[a]); a++)
                        T(o, i[a]);
                else
                    T(e, r);
            return i = h(r, "script"),
            i.length > 0 && m(i, !l && h(e, "script")),
            i = s = o = null,
            r
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, a = 0, s = pe.expando, l = pe.cache, u = de.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || Le(n)) && (o = n[s],
                r = o && l[o])) {
                    if (r.events)
                        for (i in r.events)
                            c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o],
                    u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s),
                    ne.push(o))
                }
        }
    }),
    pe.fn.extend({
        domManip: A,
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return $e(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return $e(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ye, "") : void 0;
                if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ze.test(e)) && (de.leadingWhitespace || !Be.test(e)) && !ze[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (pe.cleanData(h(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = pe(e), a = r.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                pe(r[i])[t](n),
                ae.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var st, lt = {
        HTML: "block",
        BODY: "block"
    }, ut = /^margin/, ct = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$","i"), dt = function(e, t, n, i) {
        var o, r, a = {};
        for (r in t)
            a[r] = e.style[r],
            e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t)
            e.style[r] = a[r];
        return o
    }, ft = ie.documentElement;
    !function() {
        function t() {
            var t, c, d = ie.documentElement;
            d.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = o = s = !1,
            i = a = !0,
            e.getComputedStyle && (c = e.getComputedStyle(u),
            n = "1%" !== (c || {}).top,
            s = "2px" === (c || {}).marginLeft,
            o = "4px" === (c || {
                width: "4px"
            }).width,
            u.style.marginRight = "50%",
            i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            t = u.appendChild(ie.createElement("div")),
            t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            u.style.width = "1px",
            a = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            u.removeChild(t)),
            u.style.display = "none",
            r = 0 === u.getClientRects().length,
            r && (u.style.display = "",
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            u.childNodes[0].style.borderCollapse = "separate",
            t = u.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (r = 0 === t[0].offsetHeight) && (t[0].style.display = "",
            t[1].style.display = "none",
            r = 0 === t[0].offsetHeight)),
            d.removeChild(l)
        }
        var n, i, o, r, a, s, l = ie.createElement("div"), u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5",
        de.opacity = "0.5" === u.style.opacity,
        de.cssFloat = !!u.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        de.clearCloneStyle = "content-box" === u.style.backgroundClip,
        l = ie.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        u.innerHTML = "",
        l.appendChild(u),
        de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
        pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                r
            },
            boxSizingReliable: function() {
                return null == n && t(),
                o
            },
            pixelMarginRight: function() {
                return null == n && t(),
                i
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                s
            }
        }))
    }();
    var pt, ht, mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    ht = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || pt(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)),
        n && !de.pixelMarginRight() && ct.test(a) && ut.test(t) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r),
        void 0 === a ? a : a + ""
    }
    ) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }
    ,
    ht = function(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || pt(e),
        a = n ? n[t] : void 0,
        null == a && s && s[t] && (a = s[t]),
        ct.test(a) && !mt.test(t) && (i = s.left,
        o = e.runtimeStyle,
        r = o && o.left,
        r && (o.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        r && (o.left = r)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var vt = /alpha\([^)]*\)/i
      , gt = /opacity\s*=\s*([^)]*)/i
      , yt = /^(none|table(?!-c[ea]).+)/
      , bt = new RegExp("^(" + Ie + ")(.*)$","i")
      , xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , wt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Et = ["Webkit", "O", "Moz", "ms"]
      , kt = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ht(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": de.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = pe.camelCase(t), l = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s),
                a = pe.cssHooks[t] || pe.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                if (r = typeof n,
                "string" === r && (o = Fe.exec(n)) && o[1] && (n = f(e, t, o),
                r = "number"),
                null != n && n === n && ("number" === r && (n += o && o[3] || (pe.cssNumber[s] ? "" : "px")),
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s),
            a = pe.cssHooks[t] || pe.cssHooks[s],
            a && "get"in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = ht(e, t, i)),
            "normal" === r && t in wt && (r = wt[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, xt, function() {
                    return M(e, t, i)
                }) : M(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && pt(e);
                return I(e, n, i ? F(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , o = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , r = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pe.trim(r.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = vt.test(r) ? r.replace(vt, o) : r + " " + o)
        }
    }),
    pe.cssHooks.marginRight = L(de.reliableMarginRight, function(e, t) {
        return t ? dt(e, {
            display: "inline-block"
        }, ht, [e, "marginRight"]) : void 0
    }),
    pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[e + Me[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        ut.test(e) || (pe.cssHooks[e + t].set = I)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return $e(this, function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (pe.isArray(t)) {
                    for (i = pt(e),
                    o = t.length; o > a; a++)
                        r[t[a]] = pe.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }),
    pe.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = H.prototype.init,
    pe.fx.step = {};
    var St, Tt, Ct = /^(?:toggle|show|hide)$/, At = /queueHooks$/;
    pe.Animation = pe.extend(W, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, Fe.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Ne);
            for (var n, i = 0, o = e.length; o > i; i++)
                n = e[i],
                W.tweeners[n] = W.tweeners[n] || [],
                W.tweeners[n].unshift(t)
        },
        prefilters: [R],
        prefilter: function(e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(He).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = pe.isEmptyObject(e)
              , r = pe.speed(t, n, i)
              , a = function() {
                var t = W(this, pe.extend({}, e), r);
                (o || pe._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , r = pe.timers
                  , a = pe._data(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && At.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                    t = !1,
                    r.splice(o, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = pe._data(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = pe.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                pe.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; a > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, o)
        }
    }),
    pe.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = pe.timers, n = 0;
        for (St = pe.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(),
        St = void 0
    }
    ,
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        e() ? pe.fx.start() : pe.timers.pop()
    }
    ,
    pe.fx.interval = 13,
    pe.fx.start = function() {
        Tt || (Tt = e.setInterval(pe.fx.tick, pe.fx.interval))
    }
    ,
    pe.fx.stop = function() {
        e.clearInterval(Tt),
        Tt = null
    }
    ,
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e, t = ie.createElement("input"), n = ie.createElement("div"), i = ie.createElement("select"), o = i.appendChild(ie.createElement("option"));
        n = ie.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(e.getAttribute("style")),
        de.hrefNormalized = "/a" === e.getAttribute("href"),
        de.checkOn = !!t.value,
        de.optSelected = o.selected,
        de.enctype = !!ie.createElement("form").enctype,
        i.disabled = !0,
        de.optDisabled = !o.disabled,
        t = ie.createElement("input"),
        t.setAttribute("value", ""),
        de.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        de.radioValue = "t" === t.value
    }();
    var Nt = /\r/g
      , jt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = pe.isFunction(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, pe(this).val()) : e,
                null == o ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
            "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l],
                        (n.selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(),
                            r)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = pe.makeArray(t), a = o.length; a--; )
                        if (i = o[a],
                        pe.inArray(pe.valHooks.option.get(i), r) > -1)
                            try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0
            }
        },
        de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var _t, Lt, Ot = pe.expr.attrHandle, Dt = /^(?:checked|selected)$/i, It = de.getSetAttribute, Ft = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return $e(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (t = t.toLowerCase(),
                o = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Lt : _t)),
                void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0, r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[o++]; )
                    i = pe.propFix[n] || n,
                    pe.expr.match.bool.test(n) ? Ft && It || !Dt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""),
                    e.removeAttribute(It ? n : i)
        }
    }),
    Lt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : Ft && It || !Dt.test(n) ? e.setAttribute(!It && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ot[t] || pe.find.attr;
        Ft && It || !Dt.test(t) ? Ot[t] = function(e, t, i) {
            var o, r;
            return i || (r = Ot[t],
            Ot[t] = o,
            o = null != n(e, t, i) ? t.toLowerCase() : null,
            Ot[t] = r),
            o
        }
        : Ot[t] = function(e, t, n) {
            return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Ft && It || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void (e.defaultValue = t) : _t && _t.set(e, t, n)
        }
    }),
    It || (_t = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    Ot.id = Ot.name = Ot.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: _t.set
    },
    pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            _t.set(e, "" !== t && t, n)
        }
    },
    pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Mt = /^(?:input|select|textarea|button|object)$/i
      , Ht = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return $e(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t,
                o = pe.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    de.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (pe.propFix.enctype = "encoding");
    var $t = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (o = z(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace($t, " ")) {
                        for (a = 0; r = t[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = pe.trim(i),
                        o !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a, s, l = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (o = z(n),
                    i = 1 === n.nodeType && (" " + o + " ").replace($t, " ")) {
                        for (a = 0; r = t[a++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        s = pe.trim(i),
                        o !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0,
                    o = pe(this),
                    r = e.match(Ne) || []; t = r[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = z(this),
                    t && pe._data(this, "__className__", t),
                    pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + z(n) + " ").replace($t, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = e.location
      , Pt = pe.now()
      , Rt = /\?/
      , Bt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null, o = pe.trim(t + "");
        return o && !pe.trim(o.replace(Bt, function(e, t, o, r) {
            return n && t && (i = 0),
            0 === i ? e : (n = o || t,
            i += !r - !o,
            "")
        })) ? Function("return " + o)() : pe.error("Invalid JSON: " + t)
    }
    ,
    pe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (i = new e.DOMParser,
            n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    }
    ;
    var Wt = /#.*$/
      , zt = /([?&])_=[^&]*/
      , Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ut = /^(?:GET|HEAD)$/
      , Jt = /^\/\//
      , Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Kt = {}
      , Qt = {}
      , Yt = "*/".concat("*")
      , Zt = qt.href
      , en = Xt.exec(Zt.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Zt,
            type: "GET",
            isLocal: Gt.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, pe.ajaxSettings), t) : U(pe.ajaxSettings, e)
        },
        ajaxPrefilter: V(Kt),
        ajaxTransport: V(Qt),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, d, y, b, w, k = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                c = void 0,
                s = o || "",
                E.readyState = t > 0 ? 4 : 0,
                r = t >= 200 && 300 > t || 304 === t,
                i && (b = J(f, E, i)),
                b = X(f, b, E, r),
                r ? (f.ifModified && (w = E.getResponseHeader("Last-Modified"),
                w && (pe.lastModified[a] = w),
                (w = E.getResponseHeader("etag")) && (pe.etag[a] = w)),
                204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state,
                d = b.data,
                y = b.error,
                r = !y)) : (y = k,
                !t && k || (k = "error",
                0 > t && (t = 0))),
                E.status = t,
                E.statusText = (n || k) + "",
                r ? m.resolveWith(p, [d, k, E]) : m.rejectWith(p, [E, k, y]),
                E.statusCode(g),
                g = void 0,
                u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [E, f, r ? d : y]),
                v.fireWith(p, [E, k]),
                u && (h.trigger("ajaxComplete", [E, f]),
                --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, r, a, s, l, u, c, d, f = pe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event, m = pe.Deferred(), v = pe.Callbacks("once memory"), g = f.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; t = Vt.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            E.always(e[E.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(E).complete = v.add,
            E.success = E.done,
            E.error = E.fail,
            f.url = ((t || f.url || Zt) + "").replace(Wt, "").replace(Jt, en[1] + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Ne) || [""],
            null == f.crossDomain && (o = Xt.exec(f.url.toLowerCase()),
            f.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)),
            G(Kt, f, n, E),
            2 === x)
                return E;
            u = pe.event && f.global,
            u && 0 == pe.active++ && pe.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Ut.test(f.type),
            a = f.url,
            f.hasContent || (f.data && (a = f.url += (Rt.test(a) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (f.url = zt.test(a) ? a.replace(zt, "$1_=" + Pt++) : a + (Rt.test(a) ? "&" : "?") + "_=" + Pt++)),
            f.ifModified && (pe.lastModified[a] && E.setRequestHeader("If-Modified-Since", pe.lastModified[a]),
            pe.etag[a] && E.setRequestHeader("If-None-Match", pe.etag[a])),
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType),
            E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers)
                E.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, E, f) || 2 === x))
                return E.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            })
                E[r](f[r]);
            if (c = G(Qt, f, n, E)) {
                if (E.readyState = 1,
                u && h.trigger("ajaxSend", [E, f]),
                2 === x)
                    return E;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    E.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                    c.send(y, i)
                } catch (e) {
                    if (!(2 > x))
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }),
    pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, i, o) {
            return pe.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }
    ,
    pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    }
    ;
    var tn = /%20/g
      , nn = /\[\]$/
      , on = /\r?\n/g
      , rn = /^(?:submit|button|image|reset|file)$/i
      , an = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            t = pe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
        pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                Y(n, e[n], t, o);
        return i.join("&").replace(tn, "+")
    }
    ,
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && an.test(this.nodeName) && !rn.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }
    : Z;
    var sn = 0
      , ln = {}
      , un = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln)
            ln[e](void 0, !0)
    }),
    de.cors = !!un && "withCredentials"in un,
    (un = de.ajax = !!un) && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || de.cors) {
            var n;
            return {
                send: function(i, o) {
                    var r, a = t.xhr(), s = ++sn;
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (r in t.xhrFields)
                            a[r] = t.xhrFields[r];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)
                        void 0 !== i[r] && a.setRequestHeader(r, i[r] + "");
                    a.send(t.hasContent && t.data || null),
                    n = function(e, i) {
                        var r, l, u;
                        if (n && (i || 4 === a.readyState))
                            if (delete ln[s],
                            n = void 0,
                            a.onreadystatechange = pe.noop,
                            i)
                                4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                r = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (e) {
                                    l = ""
                                }
                                r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                            }
                        u && o(r, l, u, a.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e),
                e
            }
        }
    }),
    pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function(i, o) {
                    t = ie.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || o(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var cn = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = cn.pop() || pe.expando + "_" + Pt++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(dn, "$1" + o) : !1 !== t.jsonp && (t.url += (Rt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
        t.converters["script json"] = function() {
            return a || pe.error(o + " was not called"),
            a[0]
        }
        ,
        t.dataTypes[0] = "json",
        r = e[o],
        e[o] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            void 0 === r ? pe(e).removeProp(o) : e[o] = r,
            t[o] && (t.jsonpCallback = n.jsonpCallback,
            cn.push(o)),
            a && pe.isFunction(r) && r(a[0]),
            a = r = void 0
        }),
        "script") : void 0
    }),
    pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ie;
        var i = Ee.exec(e)
          , o = !n && [];
        return i ? [t.createElement(i[1])] : (i = g([e], t, o),
        o && o.length && pe(o).remove(),
        pe.merge([], i.childNodes))
    }
    ;
    var fn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn)
            return fn.apply(this, arguments);
        var i, o, r, a = this, s = e.indexOf(" ");
        return s > -1 && (i = pe.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        pe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    pe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, u, c = pe.css(e, "position"), d = pe(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = d.offset(),
            r = pe.css(e, "top"),
            l = pe.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [r, l]) > -1,
            u ? (i = d.position(),
            a = i.top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t, n, i = {
                top: 0,
                left: 0
            }, o = this[0], r = o && o.ownerDocument;
            return r ? (t = r.documentElement,
            pe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()),
            n = te(r),
            {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += pe.css(e[0], "borderTopWidth", !0),
                n.left += pe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); )
                    e = e.offsetParent;
                return e || ft
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(i) {
            return $e(this, function(e, i, o) {
                var r = te(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void (r ? r.scrollTo(n ? pe(r).scrollLeft() : o, n ? o : pe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }),
    pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = L(de.pixelPosition, function(e, n) {
            return n ? (n = ht(e, t),
            ct.test(n) ? pe(e).position()[t] + "px" : n) : void 0
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === o ? "margin" : "border");
                return $e(this, function(t, n, i) {
                    var o;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? pe.css(t, n, a) : pe.style(t, n, i, a)
                }, t, r ? i : void 0, r, null)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.fn.size = function() {
        return this.length
    }
    ,
    pe.fn.andSelf = pe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var pn = e.jQuery
      , hn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = hn),
        t && e.jQuery === pe && (e.jQuery = pn),
        pe
    }
    ,
    t || (e.jQuery = e.$ = pe),
    pe
}),
function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }
    function o() {
        var e, t, n, o, r, a, s;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [],
                t = b[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (o = i(t.fn, "function") ? t.fn() : t.fn,
                r = 0; r < e.length; r++)
                    a = e[r],
                    s = a.split("."),
                    1 === s.length ? w[s[0]] = o : (!w[s[0]] || w[s[0]]instanceof Boolean || (w[s[0]] = new Boolean(w[s[0]])),
                    w[s[0]][s[1]] = o),
                    y.push((o ? "" : "no-") + s.join("-"))
            }
    }
    function r(e) {
        var t = E.className
          , n = w._config.classPrefix || "";
        if (k && (t = t.baseVal),
        w._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        w._config.enableClasses && (t += " " + n + e.join(" " + n),
        k ? E.className.baseVal = t : E.className = t)
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function c(e, t, n) {
        var o;
        for (var r in e)
            if (e[r]in t)
                return !1 === n ? e[r] : (o = t[e[r]],
                i(o, "function") ? u(o, n || t) : o);
        return !1
    }
    function d(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function f() {
        var e = t.body;
        return e || (e = s(k ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function p(e, n, i, o) {
        var r, a, l, u, c = "modernizr", d = s("div"), p = f();
        if (parseInt(i, 10))
            for (; i--; )
                l = s("div"),
                l.id = o ? o[i] : c + (i + 1),
                d.appendChild(l);
        return r = s("style"),
        r.type = "text/css",
        r.id = "s" + c,
        (p.fake ? p : d).appendChild(r),
        p.appendChild(d),
        r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        u = E.style.overflow,
        E.style.overflow = "hidden",
        E.appendChild(p)),
        a = n(d, e),
        p.fake ? (p.parentNode.removeChild(p),
        E.style.overflow = u,
        E.offsetHeight) : d.parentNode.removeChild(d),
        !!a
    }
    function h(t, i) {
        var o = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(d(t[o]), i))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var r = []; o--; )
                r.push("(" + d(t[o]) + ":" + i + ")");
            return r = r.join(" or "),
            p("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }
    function m(e, t, o, r) {
        function u() {
            d && (delete N.style,
            delete N.modElem)
        }
        if (r = !i(r, "undefined") && r,
        !i(o, "undefined")) {
            var c = h(e, o);
            if (!i(c, "undefined"))
                return c
        }
        for (var d, f, p, m, v, g = ["modernizr", "tspan", "samp"]; !N.style && g.length; )
            d = !0,
            N.modElem = s(g.shift()),
            N.style = N.modElem.style;
        for (p = e.length,
        f = 0; p > f; f++)
            if (m = e[f],
            v = N.style[m],
            a(m, "-") && (m = l(m)),
            N.style[m] !== n) {
                if (r || i(o, "undefined"))
                    return u(),
                    "pfx" != t || m;
                try {
                    N.style[m] = o
                } catch (e) {}
                if (N.style[m] != v)
                    return u(),
                    "pfx" != t || m
            }
        return u(),
        !1
    }
    function v(e, t, n, o, r) {
        var a = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + T.join(a + " ") + a).split(" ");
        return i(t, "string") || i(t, "undefined") ? m(s, t, o, r) : (s = (e + " " + C.join(a + " ") + a).split(" "),
        c(s, t, n))
    }
    function g(e, t, i) {
        return v(e, n, n, t, i)
    }
    var y = []
      , b = []
      , x = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            b.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            b.push({
                name: null,
                fn: e
            })
        }
    }
      , w = function() {};
    w.prototype = x,
    w = new w,
    w.addTest("history", function() {
        var t = navigator.userAgent;
        return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (e.history && "pushState"in e.history)
    });
    var E = t.documentElement
      , k = "svg" === E.nodeName.toLowerCase();
    k || function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = S.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e, t) {
            var n = S.elements;
            "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            S.elements = n + " " + e,
            u(t)
        }
        function r(e) {
            var t = k[e[w]];
            return t || (t = {},
            E++,
            e[w] = E,
            k[E] = t),
            t
        }
        function a(e, n, i) {
            if (n || (n = t),
            v)
                return n.createElement(e);
            i || (i = r(n));
            var o;
            return o = i.cache[e] ? i.cache[e].cloneNode() : x.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
            !o.canHaveChildren || b.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
        }
        function s(e, n) {
            if (e || (e = t),
            v)
                return e.createDocumentFragment();
            n = n || r(e);
            for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++)
                o.createElement(s[a]);
            return o
        }
        function l(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return S.shivMethods ? a(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(S, t.frag)
        }
        function u(e) {
            e || (e = t);
            var i = r(e);
            return !S.shivCSS || m || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            v || l(e, i),
            e
        }
        function c(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, r = RegExp("^(?:" + i().join("|") + ")$", "i"), a = []; o--; )
                t = n[o],
                r.test(t.nodeName) && a.push(t.applyElement(d(t)));
            return a
        }
        function d(e) {
            for (var t, n = e.attributes, i = n.length, o = e.ownerDocument.createElement(C + ":" + e.nodeName); i--; )
                t = n[i],
                t.specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText,
            o
        }
        function f(e) {
            for (var t, n = e.split("{"), o = n.length, r = RegExp("(^|[\\s,>+~])(" + i().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + C + "\\:$2"; o--; )
                t = n[o] = n[o].split("}"),
                t[t.length - 1] = t[t.length - 1].replace(r, a),
                n[o] = t.join("}");
            return n.join("{")
        }
        function p(e) {
            for (var t = e.length; t--; )
                e[t].removeNode()
        }
        function h(e) {
            function t() {
                clearTimeout(a._removeSheetTimer),
                i && i.removeNode(!0),
                i = null
            }
            var i, o, a = r(e), s = e.namespaces, l = e.parentWindow;
            return !A || e.printShived ? e : ("undefined" == typeof s[C] && s.add(C),
            l.attachEvent("onbeforeprint", function() {
                t();
                for (var r, a, s, l = e.styleSheets, u = [], d = l.length, p = Array(d); d--; )
                    p[d] = l[d];
                for (; s = p.pop(); )
                    if (!s.disabled && T.test(s.media)) {
                        try {
                            r = s.imports,
                            a = r.length
                        } catch (e) {
                            a = 0
                        }
                        for (d = 0; a > d; d++)
                            p.push(r[d]);
                        try {
                            u.push(s.cssText)
                        } catch (e) {}
                    }
                u = f(u.reverse().join("")),
                o = c(e),
                i = n(e, u)
            }),
            l.attachEvent("onafterprint", function() {
                p(o),
                clearTimeout(a._removeSheetTimer),
                a._removeSheetTimer = setTimeout(t, 500)
            }),
            e.printShived = !0,
            e)
        }
        var m, v, g = "3.7.3", y = e.html5 || {}, b = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, x = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, w = "_html5shiv", E = 0, k = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                m = "hidden"in e,
                v = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (e) {
                m = !0,
                v = !0
            }
        }();
        var S = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: g,
            shivCSS: !1 !== y.shivCSS,
            supportsUnknownElements: v,
            shivMethods: !1 !== y.shivMethods,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = S,
        u(t);
        var T = /^$|\b(?:all|print)\b/
          , C = "html5shiv"
          , A = !v && function() {
            var n = t.documentElement;
            return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
        }();
        S.type += " print",
        S.shivPrint = h,
        h(t),
        "object" == typeof module && module.exports && (module.exports = S)
    }(void 0 !== e ? e : this, t);
    var S = "Moz O ms Webkit"
      , T = x._config.usePrefixes ? S.split(" ") : [];
    x._cssomPrefixes = T;
    var C = x._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    x._domPrefixes = C;
    var A = {
        elem: s("modernizr")
    };
    w._q.push(function() {
        delete A.elem
    });
    var N = {
        style: A.elem.style
    };
    w._q.unshift(function() {
        delete N.style
    }),
    x.testAllProps = v,
    x.testAllProps = g,
    w.addTest("flexbox", g("flexBasis", "1px", !0)),
    w.addTest("flexboxtweener", g("flexAlign", "end", !0)),
    o(),
    r(y),
    delete x.addTest,
    delete x.addAsyncTest;
    for (var j = 0; j < w._q.length; j++)
        w._q[j]();
    e.Modernizr = w
}(window, document),
function(e, t) {
    function n(e, t, n) {
        var i = e + ":"
          , o = document.createElement("test")
          , r = o.style;
        return r.cssText = n ? i + t : i + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(t + ";" + i) + t + ";",
        -1 !== r[e].indexOf(t)
    }
    function i(e) {
        return parseInt(e, 10) || 0
    }
    var o = 0
      , r = {
        classes: {
            plugin: "fixedsticky",
            active: "fixedsticky-on",
            inactive: "fixedsticky-off",
            clone: "fixedsticky-dummy",
            withoutFixedFixed: "fixedsticky-withoutfixedfixed"
        },
        keys: {
            offset: "fixedStickyOffset",
            position: "fixedStickyPosition",
            id: "fixedStickyId"
        },
        tests: {
            sticky: n("position", "sticky"),
            fixed: n("position", "fixed", !0)
        },
        getScrollTop: function() {
            var t = "pageYOffset"
              , n = "scrollTop";
            return e ? t in e ? e[t] : e.document.documentElement[n] : e.document.body[n]
        },
        bypass: function() {
            return r.tests.sticky && !r.optOut || !r.tests.fixed || e.FixedFixed && !t(e.document.documentElement).hasClass("fixed-supported")
        },
        update: function(e) {
            function n() {
                var e = f + s;
                return d < e && e + c <= y + b
            }
            function o() {
                return d + (c || 0) > f + m - l && f + m - l >= y + (c || 0)
            }
            if (e.offsetWidth) {
                var a, s, l, u = t(e), c = u.outerHeight(), d = u.data(r.keys.offset), f = r.getScrollTop(), p = u.is("." + r.classes.active), h = function(e) {
                    u[e ? "addClass" : "removeClass"](r.classes.active)[e ? "removeClass" : "addClass"](r.classes.inactive)
                }, m = t(window).height(), v = u.data(r.keys.position), g = u.parent(), y = g.offset().top, b = g.outerHeight();
                d === undefined ? (d = u.offset().top,
                u.data(r.keys.offset, d),
                u.after(t("<div>").addClass(r.classes.clone).height(c))) : u.next("." + r.classes.clone).height(c),
                v || (a = "auto" !== u.css("top") || "auto" !== u.css("bottom"),
                a || u.css("position", "fixed"),
                v = {
                    top: "auto" !== u.css("top"),
                    bottom: "auto" !== u.css("bottom")
                },
                a || u.css("position", ""),
                u.data(r.keys.position, v)),
                s = i(u.css("top")),
                l = i(u.css("bottom")),
                v.top && n() || v.bottom && o() ? p || h(!0) : p && h(!1)
            }
        },
        destroy: function(n) {
            var i = t(n);
            return r.bypass() ? i : i.each(function() {
                var n = t(this)
                  , i = n.data(r.keys.id);
                t(e).unbind(".fixedsticky" + i),
                n.removeData([r.keys.offset, r.keys.position, r.keys.id]).removeClass(r.classes.active).removeClass(r.classes.inactive).next("." + r.classes.clone).remove()
            })
        },
        init: function(n) {
            var i = t(n);
            return r.bypass() ? i : i.each(function() {
                var n = this
                  , a = o++;
                t(this).data(r.keys.id, a),
                t(e).bind("scroll.fixedsticky" + a, function() {
                    r.update(n)
                }).trigger("scroll.fixedsticky" + a),
                t(e).bind("resize.fixedsticky" + a, function() {
                    i.is("." + r.classes.active) && r.update(n)
                })
            })
        }
    };
    e.FixedSticky = r,
    t.fn.fixedsticky = function(e) {
        if ("function" == typeof r[e])
            return r[e].call(r, this);
        if ("object" != typeof e && e)
            throw new Error("Method `" + e + "` does not exist on jQuery.fixedsticky");
        return r.init.call(r, this)
    }
    ,
    e.FixedFixed || t(e.document.documentElement).addClass(r.classes.withoutFixedFixed)
}(window, jQuery),
function() {
    function e() {}
    function t(e) {
        return null == e ? e === u ? m : p : N && N in Object(e) ? n(e) : i(e)
    }
    function n(e) {
        var t = T.call(e, N)
          , n = e[N];
        try {
            e[N] = u;
            var i = !0
        } catch (e) {}
        var o = C.call(e);
        return i && (t ? e[N] = n : delete e[N]),
        o
    }
    function i(e) {
        return C.call(e)
    }
    function o(e, t, n) {
        function i(t) {
            var n = v
              , i = g;
            return v = g = u,
            E = t,
            b = e.apply(i, n)
        }
        function o(e) {
            return E = e,
            x = setTimeout(c, t),
            k ? i(e) : b
        }
        function a(e) {
            var n = e - w
              , i = e - E
              , o = t - n;
            return S ? _(o, y - i) : o
        }
        function s(e) {
            var n = e - w
              , i = e - E;
            return w === u || n >= t || n < 0 || S && i >= y
        }
        function c() {
            var e = L();
            if (s(e))
                return f(e);
            x = setTimeout(c, a(e))
        }
        function f(e) {
            return x = u,
            T && v ? i(e) : (v = g = u,
            b)
        }
        function p() {
            x !== u && clearTimeout(x),
            E = 0,
            v = w = g = x = u
        }
        function h() {
            return x === u ? b : f(L())
        }
        function m() {
            var e = L()
              , n = s(e);
            if (v = arguments,
            g = this,
            w = e,
            n) {
                if (x === u)
                    return o(w);
                if (S)
                    return x = setTimeout(c, t),
                    i(w)
            }
            return x === u && (x = setTimeout(c, t)),
            b
        }
        var v, g, y, b, x, w, E = 0, k = !1, S = !1, T = !0;
        if ("function" != typeof e)
            throw new TypeError(d);
        return t = l(t) || 0,
        r(n) && (k = !!n.leading,
        S = "maxWait"in n,
        y = S ? j(l(n.maxWait) || 0, t) : y,
        T = "trailing"in n ? !!n.trailing : T),
        m.cancel = p,
        m.flush = h,
        m
    }
    function r(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    function a(e) {
        return null != e && "object" == typeof e
    }
    function s(e) {
        return "symbol" == typeof e || a(e) && t(e) == h
    }
    function l(e) {
        if ("number" == typeof e)
            return e;
        if (s(e))
            return f;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(v, "");
        var n = y.test(e);
        return n || b.test(e) ? x(e.slice(2), n ? 2 : 8) : g.test(e) ? f : +e
    }
    var u, c = "4.17.4", d = "Expected a function", f = NaN, p = "[object Null]", h = "[object Symbol]", m = "[object Undefined]", v = /^\s+|\s+$/g, g = /^[-+]0x[0-9a-f]+$/i, y = /^0b[01]+$/i, b = /^0o[0-7]+$/i, x = parseInt, w = "object" == typeof global && global && global.Object === Object && global, E = "object" == typeof self && self && self.Object === Object && self, k = w || E || Function("return this")(), S = Object.prototype, T = S.hasOwnProperty, C = S.toString, A = k.Symbol, N = A ? A.toStringTag : u, j = Math.max, _ = Math.min, L = function() {
        return k.Date.now()
    };
    e.debounce = o,
    e.isObject = r,
    e.isObjectLike = a,
    e.isSymbol = s,
    e.now = L,
    e.toNumber = l,
    e.VERSION = c,
    k._ = e
}
.call(this),
function(e) {
    function t(t, n) {
        var i = e.trim(n.text())
          , o = n.attr("href")
          , r = i + "|" + o;
        ga("send", "event", "SM Technical Documentation", t, r)
    }
    function n(n) {
        return function() {
            t(n, e(this))
        }
    }
    function i() {
        var t = window.location.hash;
        e(t).get(0) || ga("send", "event", "Broken fragment ID", "pageview", window.location.pathname + t)
    }
    e(document).on("ready", function() {
        "undefined" != typeof ga && (e(".technical-documentation a").on("click", n("inTextClick")),
        e(".header a").on("click", n("topNavigationClick")),
        e(".toc a").on("click", n("tableOfContentsNavigationClick")),
        i(),
        window.stripPIIFromString = function(e) {
            var t = /[^\s=/?&]+(?:@|%40)[^\s=/?&]+/g
              , n = /[A-PR-UWYZ][A-HJ-Z]?[0-9][0-9A-HJKMNPR-Y]?(?:[\s+]|%20)*[0-9][ABD-HJLNPQ-Z]{2}/gi
              , i = /\d{4}(-?)\d{2}(-?)\d{2}/g;
            return e.replace(t, "[email]").replace(i, "[date]").replace(n, "[postcode]")
        }
        )
    })
}(jQuery),
function(e, t) {
    "use strict";
    t.GOVUK = t.GOVUK || {},
    GOVUK.Modules = GOVUK.Modules || {},
    GOVUK.modules = {
        find: function(t) {
            var n, i = "[data-module]", o = t || e("body");
            return n = o.find(i),
            o.is(i) && (n = n.add(o)),
            n
        },
        start: function(t) {
            function n(e) {
                return o(i(e))
            }
            function i(e) {
                return e.replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            }
            function o(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            for (var r = this.find(t), a = 0, s = r.length; a < s; a++) {
                var l, u = e(r[a]), c = n(u.data("module")), d = u.data("module-started");
                "function" != typeof GOVUK.Modules[c] || d || (l = new GOVUK.Modules[c],
                l.start(u),
                u.data("module-started", !0))
            }
        }
    }
}(jQuery, window),
function(e, t) {
    "use strict";
    t.AnchoredHeadings = function() {
        function t() {
            var t = e(this);
            t.addClass("anchored-heading"),
            t.prepend('<a href="#' + t.attr("id") + '" class="anchored-heading__icon" aria-hidden="true" tabindex="-1"></a>')
        }
        this.start = function(e) {
            e.find("h1, h2, h3, h4, h5, h6").each(t)
        }
    }
}(jQuery, window.GOVUK.Modules),
function(e, t) {
    "use strict";
    t.InPageNavigation = function() {
        function t(e) {
            e && "undefined" != typeof e.scrollTop && d.scrollTop(e.scrollTop)
        }
        function n() {
            var e = l();
            e || (e = u()),
            o(e)
        }
        function i() {
            o(u())
        }
        function o(e) {
            r(e),
            a(e)
        }
        function r(e) {
            Modernizr.history && e && history.replaceState({
                scrollTop: d.scrollTop()
            }, "", e)
        }
        function a(e) {
            var t = f.filter('[href="' + window.location.pathname + e + '"],[href="' + e + '"]');
            t.get(0) || (t = f.filter('[href="' + window.location.pathname + '"]')),
            t.get(0) && (f.removeClass("toc-link--in-view"),
            t.addClass("toc-link--in-view"),
            s(t))
        }
        function s(e) {
            var t = c.height()
              , n = e.position().top
              , i = n + e.outerHeight()
              , o = null;
            if (n < 0)
                o = n;
            else {
                if (!(i >= t))
                    return;
                o = -(t - i)
            }
            var r = c.scrollTop() + o;
            c.scrollTop(r)
        }
        function l() {
            return window.location.hash
        }
        function u() {
            var t = null;
            return e(p.get().reverse()).each(function() {
                if (!t) {
                    var n = e(this);
                    Math.floor(n.position().top) <= 0 && (t = n)
                }
            }),
            !!t && "#" + t.attr("id")
        }
        var c, d, f, p;
        this.start = function(o) {
            c = o.find(".app-pane__toc"),
            d = o.find(".app-pane__content"),
            f = e(".js-toc-list").find("a"),
            p = d.find("[id]"),
            d.on("scroll", _.debounce(i, 100, {
                maxWait: 100
            })),
            Modernizr.history && (e(window).on("popstate", function(e) {
                t(e.originalEvent.state)
            }),
            history.state && history.state.scrollTop ? t(history.state) : n())
        }
    }
}(jQuery, window.GOVUK.Modules),
function(e, t) {
    "use strict";
    t.Navigation = function() {
        function t() {
            var e = o.is(":visible");
            i.attr("aria-expanded", e ? "true" : "false"),
            o.attr("aria-hidden", e ? "false" : "true")
        }
        function n() {
            var e = !r.hasClass("nav-open");
            r.toggleClass("nav-open", e),
            t()
        }
        var i, o, r = e("html");
        this.start = function(r) {
            i = e(".js-nav-toggle", r),
            o = e(".js-nav", r),
            t(),
            i.on("click", n),
            e(window).on("resize", t)
        }
    }
}(jQuery, window.GOVUK.Modules),
function(e, t) {
    "use strict";
    t.PageExpiry = function() {
        this.start = function(e) {
            var t = e.data("last-reviewed-on");
            Date.parse(t) < new Date && (e.find(".page-expiry--not-expired").hide(0),
            e.find(".page-expiry--expired").show(0))
        }
    }
}(jQuery, window.GOVUK.Modules),
function(e, t) {
    "use strict";
    t.TableOfContents = function() {
        function t() {
            l.on("touchstart.toc", function() {
                var t = e(this)
                  , n = t.scrollTop()
                  , i = t.prop("scrollHeight")
                  , o = n + t.prop("offsetHeight");
                0 === n ? t.scrollTop(1) : o === i && t.scrollTop(n - 1)
            })
        }
        function n() {
            f.addClass("toc-open"),
            r(!1),
            a(),
            o()
        }
        function i() {
            f.removeClass("toc-open"),
            r(!0),
            a()
        }
        function o() {
            e("a", u).first().focus()
        }
        function r(t) {
            e(".toc-open-disabled").attr("aria-hidden", t ? "" : "true")
        }
        function a() {
            var t = l.is(":visible");
            e(c).add(d).attr("aria-expanded", t ? "true" : "false"),
            l.attr("aria-hidden", t ? "false" : "true")
        }
        function s(e) {
            return function(t) {
                t.preventDefault(),
                e()
            }
        }
        var l, u, c, d, f = e("html");
        this.start = function(o) {
            l = o,
            u = l.find(".js-toc-list"),
            c = f.find(".js-toc-show"),
            d = l.find(".js-toc-close"),
            t(),
            a(),
            c.on("click.toc", s(n)),
            d.on("click.toc", s(i)),
            u.on("click.toc", "a", i),
            e(window).on("resize.toc", a),
            e(document).on("keydown.toc", function(e) {
                27 === e.keyCode && i()
            })
        }
    }
}(jQuery, window.GOVUK.Modules),
function() {
    var e = function(t) {
        var n = new e.Index;
        return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
        t && t.call(n, n),
        n
    };
    e.version = "0.7.0",
    e.utils = {},
    e.utils.warn = function(e) {
        return function(t) {
            e.console && console.warn && console.warn(t)
        }
    }(this),
    e.utils.asString = function(e) {
        return void 0 === e || null === e ? "" : e.toString()
    }
    ,
    e.EventEmitter = function() {
        this.events = {}
    }
    ,
    e.EventEmitter.prototype.addListener = function() {
        var e = Array.prototype.slice.call(arguments)
          , t = e.pop()
          , n = e;
        if ("function" != typeof t)
            throw new TypeError("last argument must be a function");
        n.forEach(function(e) {
            this.hasHandler(e) || (this.events[e] = []),
            this.events[e].push(t)
        }, this)
    }
    ,
    e.EventEmitter.prototype.removeListener = function(e, t) {
        if (this.hasHandler(e)) {
            var n = this.events[e].indexOf(t);
            this.events[e].splice(n, 1),
            this.events[e].length || delete this.events[e]
        }
    }
    ,
    e.EventEmitter.prototype.emit = function(e) {
        if (this.hasHandler(e)) {
            var t = Array.prototype.slice.call(arguments, 1);
            this.events[e].forEach(function(e) {
                e.apply(void 0, t)
            })
        }
    }
    ,
    e.EventEmitter.prototype.hasHandler = function(e) {
        return e in this.events
    }
    ,
    e.tokenizer = function(t) {
        return arguments.length && null != t && void 0 != t ? Array.isArray(t) ? t.map(function(t) {
            return e.utils.asString(t).toLowerCase()
        }) : t.toString().trim().toLowerCase().split(e.tokenizer.seperator) : []
    }
    ,
    e.tokenizer.seperator = /[\s\-]+/,
    e.tokenizer.load = function(e) {
        var t = this.registeredFunctions[e];
        if (!t)
            throw new Error("Cannot load un-registered function: " + e);
        return t
    }
    ,
    e.tokenizer.label = "default",
    e.tokenizer.registeredFunctions = {
        "default": e.tokenizer
    },
    e.tokenizer.registerFunction = function(t, n) {
        n in this.registeredFunctions && e.utils.warn("Overwriting existing tokenizer: " + n),
        t.label = n,
        this.registeredFunctions[n] = t
    }
    ,
    e.Pipeline = function() {
        this._stack = []
    }
    ,
    e.Pipeline.registeredFunctions = {},
    e.Pipeline.registerFunction = function(t, n) {
        n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n),
        t.label = n,
        e.Pipeline.registeredFunctions[t.label] = t
    }
    ,
    e.Pipeline.warnIfFunctionNotRegistered = function(t) {
        t.label && t.label in this.registeredFunctions || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
    }
    ,
    e.Pipeline.load = function(t) {
        var n = new e.Pipeline;
        return t.forEach(function(t) {
            var i = e.Pipeline.registeredFunctions[t];
            if (!i)
                throw new Error("Cannot load un-registered function: " + t);
            n.add(i)
        }),
        n
    }
    ,
    e.Pipeline.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(t) {
            e.Pipeline.warnIfFunctionNotRegistered(t),
            this._stack.push(t)
        }, this)
    }
    ,
    e.Pipeline.prototype.after = function(t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._stack.indexOf(t);
        if (-1 == i)
            throw new Error("Cannot find existingFn");
        i += 1,
        this._stack.splice(i, 0, n)
    }
    ,
    e.Pipeline.prototype.before = function(t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._stack.indexOf(t);
        if (-1 == i)
            throw new Error("Cannot find existingFn");
        this._stack.splice(i, 0, n)
    }
    ,
    e.Pipeline.prototype.remove = function(e) {
        var t = this._stack.indexOf(e);
        -1 != t && this._stack.splice(t, 1)
    }
    ,
    e.Pipeline.prototype.run = function(e) {
        for (var t = [], n = e.length, i = this._stack.length, o = 0; n > o; o++) {
            for (var r = e[o], a = 0; i > a && void 0 !== (r = this._stack[a](r, o, e)) && "" !== r; a++)
                ;
            void 0 !== r && "" !== r && t.push(r)
        }
        return t
    }
    ,
    e.Pipeline.prototype.reset = function() {
        this._stack = []
    }
    ,
    e.Pipeline.prototype.toJSON = function() {
        return this._stack.map(function(t) {
            return e.Pipeline.warnIfFunctionNotRegistered(t),
            t.label
        })
    }
    ,
    e.Vector = function() {
        this._magnitude = null,
        this.list = void 0,
        this.length = 0
    }
    ,
    e.Vector.Node = function(e, t, n) {
        this.idx = e,
        this.val = t,
        this.next = n
    }
    ,
    e.Vector.prototype.insert = function(t, n) {
        this._magnitude = void 0;
        var i = this.list;
        if (!i)
            return this.list = new e.Vector.Node(t,n,i),
            this.length++;
        if (t < i.idx)
            return this.list = new e.Vector.Node(t,n,i),
            this.length++;
        for (var o = i, r = i.next; void 0 != r; ) {
            if (t < r.idx)
                return o.next = new e.Vector.Node(t,n,r),
                this.length++;
            o = r,
            r = r.next
        }
        return o.next = new e.Vector.Node(t,n,r),
        this.length++
    }
    ,
    e.Vector.prototype.magnitude = function() {
        if (this._magnitude)
            return this._magnitude;
        for (var e, t = this.list, n = 0; t; )
            e = t.val,
            n += e * e,
            t = t.next;
        return this._magnitude = Math.sqrt(n)
    }
    ,
    e.Vector.prototype.dot = function(e) {
        for (var t = this.list, n = e.list, i = 0; t && n; )
            t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (i += t.val * n.val,
            t = t.next,
            n = n.next);
        return i
    }
    ,
    e.Vector.prototype.similarity = function(e) {
        return this.dot(e) / (this.magnitude() * e.magnitude())
    }
    ,
    e.SortedSet = function() {
        this.length = 0,
        this.elements = []
    }
    ,
    e.SortedSet.load = function(e) {
        var t = new this;
        return t.elements = e,
        t.length = e.length,
        t
    }
    ,
    e.SortedSet.prototype.add = function() {
        var e, t;
        for (e = 0; e < arguments.length; e++)
            t = arguments[e],
            ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
        this.length = this.elements.length
    }
    ,
    e.SortedSet.prototype.toArray = function() {
        return this.elements.slice()
    }
    ,
    e.SortedSet.prototype.map = function(e, t) {
        return this.elements.map(e, t)
    }
    ,
    e.SortedSet.prototype.forEach = function(e, t) {
        return this.elements.forEach(e, t)
    }
    ,
    e.SortedSet.prototype.indexOf = function(e) {
        for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; i > 1; ) {
            if (r === e)
                return o;
            e > r && (t = o),
            r > e && (n = o),
            i = n - t,
            o = t + Math.floor(i / 2),
            r = this.elements[o]
        }
        return r === e ? o : -1
    }
    ,
    e.SortedSet.prototype.locationFor = function(e) {
        for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; i > 1; )
            e > r && (t = o),
            r > e && (n = o),
            i = n - t,
            o = t + Math.floor(i / 2),
            r = this.elements[o];
        return r > e ? o : e > r ? o + 1 : void 0
    }
    ,
    e.SortedSet.prototype.intersect = function(t) {
        for (var n = new e.SortedSet, i = 0, o = 0, r = this.length, a = t.length, s = this.elements, l = t.elements; !(i > r - 1 || o > a - 1); )
            s[i] !== l[o] ? s[i] < l[o] ? i++ : s[i] > l[o] && o++ : (n.add(s[i]),
            i++,
            o++);
        return n
    }
    ,
    e.SortedSet.prototype.clone = function() {
        var t = new e.SortedSet;
        return t.elements = this.toArray(),
        t.length = t.elements.length,
        t
    }
    ,
    e.SortedSet.prototype.union = function(e) {
        var t, n, i;
        this.length >= e.length ? (t = this,
        n = e) : (t = e,
        n = this),
        i = t.clone();
        for (var o = 0, r = n.toArray(); o < r.length; o++)
            i.add(r[o]);
        return i
    }
    ,
    e.SortedSet.prototype.toJSON = function() {
        return this.toArray()
    }
    ,
    e.Index = function() {
        this._fields = [],
        this._ref = "id",
        this.pipeline = new e.Pipeline,
        this.documentStore = new e.Store,
        this.tokenStore = new e.TokenStore,
        this.corpusTokens = new e.SortedSet,
        this.eventEmitter = new e.EventEmitter,
        this.tokenizerFn = e.tokenizer,
        this._idfCache = {},
        this.on("add", "remove", "update", function() {
            this._idfCache = {}
        }
        .bind(this))
    }
    ,
    e.Index.prototype.on = function() {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e)
    }
    ,
    e.Index.prototype.off = function(e, t) {
        return this.eventEmitter.removeListener(e, t)
    }
    ,
    e.Index.load = function(t) {
        t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
        var n = new this;
        return n._fields = t.fields,
        n._ref = t.ref,
        n.tokenizer = e.tokenizer.load(t.tokenizer),
        n.documentStore = e.Store.load(t.documentStore),
        n.tokenStore = e.TokenStore.load(t.tokenStore),
        n.corpusTokens = e.SortedSet.load(t.corpusTokens),
        n.pipeline = e.Pipeline.load(t.pipeline),
        n
    }
    ,
    e.Index.prototype.field = function(e, t) {
        var t = t || {}
          , n = {
            name: e,
            boost: t.boost || 1
        };
        return this._fields.push(n),
        this
    }
    ,
    e.Index.prototype.ref = function(e) {
        return this._ref = e,
        this
    }
    ,
    e.Index.prototype.tokenizer = function(t) {
        return t.label && t.label in e.tokenizer.registeredFunctions || e.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"),
        this.tokenizerFn = t,
        this
    }
    ,
    e.Index.prototype.add = function(t, n) {
        var i = {}
          , o = new e.SortedSet
          , r = t[this._ref]
          , n = void 0 === n || n;
        this._fields.forEach(function(e) {
            var n = this.pipeline.run(this.tokenizerFn(t[e.name]));
            i[e.name] = n;
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                o.add(a),
                this.corpusTokens.add(a)
            }
        }, this),
        this.documentStore.set(r, o);
        for (var a = 0; a < o.length; a++) {
            for (var s = o.elements[a], l = 0, u = 0; u < this._fields.length; u++) {
                var c = this._fields[u]
                  , d = i[c.name]
                  , f = d.length;
                if (f) {
                    for (var p = 0, h = 0; f > h; h++)
                        d[h] === s && p++;
                    l += p / f * c.boost
                }
            }
            this.tokenStore.add(s, {
                ref: r,
                tf: l
            })
        }
        n && this.eventEmitter.emit("add", t, this)
    }
    ,
    e.Index.prototype.remove = function(e, t) {
        var n = e[this._ref]
          , t = void 0 === t || t;
        if (this.documentStore.has(n)) {
            var i = this.documentStore.get(n);
            this.documentStore.remove(n),
            i.forEach(function(e) {
                this.tokenStore.remove(e, n)
            }, this),
            t && this.eventEmitter.emit("remove", e, this)
        }
    }
    ,
    e.Index.prototype.update = function(e, t) {
        var t = void 0 === t || t;
        this.remove(e, !1),
        this.add(e, !1),
        t && this.eventEmitter.emit("update", e, this)
    }
    ,
    e.Index.prototype.idf = function(e) {
        var t = "@" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, t))
            return this._idfCache[t];
        var n = this.tokenStore.count(e)
          , i = 1;
        return n > 0 && (i = 1 + Math.log(this.documentStore.length / n)),
        this._idfCache[t] = i
    }
    ,
    e.Index.prototype.search = function(t) {
        var n = this.pipeline.run(this.tokenizerFn(t))
          , i = new e.Vector
          , o = []
          , r = this._fields.reduce(function(e, t) {
            return e + t.boost
        }, 0);
        return n.some(function(e) {
            return this.tokenStore.has(e)
        }, this) ? (n.forEach(function(t, n, a) {
            var s = 1 / a.length * this._fields.length * r
              , l = this
              , u = this.tokenStore.expand(t).reduce(function(n, o) {
                var r = l.corpusTokens.indexOf(o)
                  , a = l.idf(o)
                  , u = 1
                  , c = new e.SortedSet;
                if (o !== t) {
                    var d = Math.max(3, o.length - t.length);
                    u = 1 / Math.log(d)
                }
                r > -1 && i.insert(r, s * a * u);
                for (var f = l.tokenStore.get(o), p = Object.keys(f), h = p.length, m = 0; h > m; m++)
                    c.add(f[p[m]].ref);
                return n.union(c)
            }, new e.SortedSet);
            o.push(u)
        }, this),
        o.reduce(function(e, t) {
            return e.intersect(t)
        }).map(function(e) {
            return {
                ref: e,
                score: i.similarity(this.documentVector(e))
            }
        }, this).sort(function(e, t) {
            return t.score - e.score
        })) : []
    }
    ,
    e.Index.prototype.documentVector = function(t) {
        for (var n = this.documentStore.get(t), i = n.length, o = new e.Vector, r = 0; i > r; r++) {
            var a = n.elements[r]
              , s = this.tokenStore.get(a)[t].tf
              , l = this.idf(a);
            o.insert(this.corpusTokens.indexOf(a), s * l)
        }
        return o
    }
    ,
    e.Index.prototype.toJSON = function() {
        return {
            version: e.version,
            fields: this._fields,
            ref: this._ref,
            tokenizer: this.tokenizerFn.label,
            documentStore: this.documentStore.toJSON(),
            tokenStore: this.tokenStore.toJSON(),
            corpusTokens: this.corpusTokens.toJSON(),
            pipeline: this.pipeline.toJSON()
        }
    }
    ,
    e.Index.prototype.use = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this),
        e.apply(this, t)
    }
    ,
    e.Store = function() {
        this.store = {},
        this.length = 0
    }
    ,
    e.Store.load = function(t) {
        var n = new this;
        return n.length = t.length,
        n.store = Object.keys(t.store).reduce(function(n, i) {
            return n[i] = e.SortedSet.load(t.store[i]),
            n
        }, {}),
        n
    }
    ,
    e.Store.prototype.set = function(e, t) {
        this.has(e) || this.length++,
        this.store[e] = t
    }
    ,
    e.Store.prototype.get = function(e) {
        return this.store[e]
    }
    ,
    e.Store.prototype.has = function(e) {
        return e in this.store
    }
    ,
    e.Store.prototype.remove = function(e) {
        this.has(e) && (delete this.store[e],
        this.length--)
    }
    ,
    e.Store.prototype.toJSON = function() {
        return {
            store: this.store,
            length: this.length
        }
    }
    ,
    e.stemmer = function() {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        }
          , t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        }
          , n = "[^aeiou]"
          , i = "[aeiouy]"
          , o = n + "[^aeiouy]*"
          , r = i + "[aeiou]*"
          , a = "^(" + o + ")?" + r + o
          , s = "^(" + o + ")?" + r + o + "(" + r + ")?$"
          , l = "^(" + o + ")?" + r + o + r + o
          , u = "^(" + o + ")?" + i
          , c = new RegExp(a)
          , d = new RegExp(l)
          , f = new RegExp(s)
          , p = new RegExp(u)
          , h = /^(.+?)(ss|i)es$/
          , m = /^(.+?)([^s])s$/
          , v = /^(.+?)eed$/
          , g = /^(.+?)(ed|ing)$/
          , y = /.$/
          , b = /(at|bl|iz)$/
          , x = new RegExp("([^aeiouylsz])\\1$")
          , w = new RegExp("^" + o + i + "[^aeiouwxy]$")
          , E = /^(.+?[^aeiou])y$/
          , k = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/
          , S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/
          , T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/
          , C = /^(.+?)(s|t)(ion)$/
          , A = /^(.+?)e$/
          , N = /ll$/
          , j = new RegExp("^" + o + i + "[^aeiouwxy]$");
        return function(n) {
            var i, o, r, a, s, l, u;
            if (n.length < 3)
                return n;
            if (r = n.substr(0, 1),
            "y" == r && (n = r.toUpperCase() + n.substr(1)),
            a = h,
            s = m,
            a.test(n) ? n = n.replace(a, "$1$2") : s.test(n) && (n = n.replace(s, "$1$2")),
            a = v,
            s = g,
            a.test(n)) {
                var _ = a.exec(n);
                a = c,
                a.test(_[1]) && (a = y,
                n = n.replace(a, ""))
            } else if (s.test(n)) {
                var _ = s.exec(n);
                i = _[1],
                s = p,
                s.test(i) && (n = i,
                s = b,
                l = x,
                u = w,
                s.test(n) ? n += "e" : l.test(n) ? (a = y,
                n = n.replace(a, "")) : u.test(n) && (n += "e"))
            }
            if (a = E,
            a.test(n)) {
                var _ = a.exec(n);
                i = _[1],
                n = i + "i"
            }
            if (a = k,
            a.test(n)) {
                var _ = a.exec(n);
                i = _[1],
                o = _[2],
                a = c,
                a.test(i) && (n = i + e[o])
            }
            if (a = S,
            a.test(n)) {
                var _ = a.exec(n);
                i = _[1],
                o = _[2],
                a = c,
                a.test(i) && (n = i + t[o])
            }
            if (a = T,
            s = C,
            a.test(n)) {
                var _ = a.exec(n);
                i = _[1],
                a = d,
                a.test(i) && (n = i)
            } else if (s.test(n)) {
                var _ = s.exec(n);
                i = _[1] + _[2],
                s = d,
                s.test(i) && (n = i)
            }
            if (a = A,
            a.test(n)) {
                var _ = a.exec(n);
                i = _[1],
                a = d,
                s = f,
                l = j,
                (a.test(i) || s.test(i) && !l.test(i)) && (n = i)
            }
            return a = N,
            s = d,
            a.test(n) && s.test(n) && (a = y,
            n = n.replace(a, "")),
            "y" == r && (n = r.toLowerCase() + n.substr(1)),
            n
        }
    }(),
    e.Pipeline.registerFunction(e.stemmer, "stemmer"),
    e.generateStopWordFilter = function(e) {
        var t = e.reduce(function(e, t) {
            return e[t] = t,
            e
        }, {});
        return function(e) {
            return e && t[e] !== e ? e : void 0
        }
    }
    ,
    e.stopWordFilter = e.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]),
    e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
    e.trimmer = function(e) {
        return e.replace(/^\W+/, "").replace(/\W+$/, "")
    }
    ,
    e.Pipeline.registerFunction(e.trimmer, "trimmer"),
    e.TokenStore = function() {
        this.root = {
            docs: {}
        },
        this.length = 0
    }
    ,
    e.TokenStore.load = function(e) {
        var t = new this;
        return t.root = e.root,
        t.length = e.length,
        t
    }
    ,
    e.TokenStore.prototype.add = function(e, t, n) {
        var n = n || this.root
          , i = e.charAt(0)
          , o = e.slice(1);
        return i in n || (n[i] = {
            docs: {}
        }),
        0 === o.length ? (n[i].docs[t.ref] = t,
        void (this.length += 1)) : this.add(o, t, n[i])
    }
    ,
    e.TokenStore.prototype.has = function(e) {
        if (!e)
            return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e.charAt(n)])
                return !1;
            t = t[e.charAt(n)]
        }
        return !0
    }
    ,
    e.TokenStore.prototype.getNode = function(e) {
        if (!e)
            return {};
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e.charAt(n)])
                return {};
            t = t[e.charAt(n)]
        }
        return t
    }
    ,
    e.TokenStore.prototype.get = function(e, t) {
        return this.getNode(e, t).docs || {}
    }
    ,
    e.TokenStore.prototype.count = function(e, t) {
        return Object.keys(this.get(e, t)).length
    }
    ,
    e.TokenStore.prototype.remove = function(e, t) {
        if (e) {
            for (var n = this.root, i = 0; i < e.length; i++) {
                if (!(e.charAt(i)in n))
                    return;
                n = n[e.charAt(i)]
            }
            delete n.docs[t]
        }
    }
    ,
    e.TokenStore.prototype.expand = function(e, t) {
        var n = this.getNode(e)
          , i = n.docs || {}
          , t = t || [];
        return Object.keys(i).length && t.push(e),
        Object.keys(n).forEach(function(n) {
            "docs" !== n && t.concat(this.expand(e + n, t))
        }, this),
        t
    }
    ,
    e.TokenStore.prototype.toJSON = function() {
        return {
            root: this.root,
            length: this.length
        }
    }
    ,
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.lunr = t()
    }(this, function() {
        return e
    })
}(),
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.Mark = t(e.jQuery)
}(this, function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e["default"] : e;
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , n = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
      , r = function() {
        function e(t) {
            var i = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1]
              , o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
              , r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5e3;
            n(this, e),
            this.ctx = t,
            this.iframes = i,
            this.exclude = o,
            this.iframesTimeout = r
        }
        return i(e, [{
            key: "getContexts",
            value: function() {
                var e = void 0
                  , t = [];
                return e = "undefined" != typeof this.ctx && this.ctx ? NodeList.prototype.isPrototypeOf(this.ctx) ? Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? this.ctx : "string" == typeof this.ctx ? Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : [this.ctx] : [],
                e.forEach(function(e) {
                    var n = t.filter(function(t) {
                        return t.contains(e)
                    }).length > 0;
                    -1 !== t.indexOf(e) || n || t.push(e)
                }),
                t
            }
        }, {
            key: "getIframeContents",
            value: function(e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function() {}
                  , i = void 0;
                try {
                    var o = e.contentWindow;
                    if (i = o.document,
                    !o || !i)
                        throw new Error("iframe inaccessible")
                } catch (e) {
                    n()
                }
                i && t(i)
            }
        }, {
            key: "isIframeBlank",
            value: function(e) {
                var t = "about:blank"
                  , n = e.getAttribute("src").trim();
                return e.contentWindow.location.href === t && n !== t && n
            }
        }, {
            key: "observeIframeLoad",
            value: function(e, t, n) {
                var i = this
                  , o = !1
                  , r = null
                  , a = function a() {
                    if (!o) {
                        o = !0,
                        clearTimeout(r);
                        try {
                            i.isIframeBlank(e) || (e.removeEventListener("load", a),
                            i.getIframeContents(e, t, n))
                        } catch (e) {
                            n()
                        }
                    }
                };
                e.addEventListener("load", a),
                r = setTimeout(a, this.iframesTimeout)
            }
        }, {
            key: "onIframeReady",
            value: function(e, t, n) {
                try {
                    "complete" === e.contentWindow.document.readyState ? this.isIframeBlank(e) ? this.observeIframeLoad(e, t, n) : this.getIframeContents(e, t, n) : this.observeIframeLoad(e, t, n)
                } catch (e) {
                    n()
                }
            }
        }, {
            key: "waitForIframes",
            value: function(e, t) {
                var n = this
                  , i = 0;
                this.forEachIframe(e, function() {
                    return !0
                }, function(e) {
                    i++,
                    n.waitForIframes(e.querySelector("html"), function() {
                        --i || t()
                    })
                }, function(e) {
                    e || t()
                })
            }
        }, {
            key: "forEachIframe",
            value: function(t, n, i) {
                var o = this
                  , r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {}
                  , a = t.querySelectorAll("iframe")
                  , s = a.length
                  , l = 0;
                a = Array.prototype.slice.call(a);
                var u = function() {
                    --s <= 0 && r(l)
                };
                s || u(),
                a.forEach(function(t) {
                    e.matches(t, o.exclude) ? u() : o.onIframeReady(t, function(e) {
                        n(t) && (l++,
                        i(e)),
                        u()
                    }, u)
                })
            }
        }, {
            key: "createIterator",
            value: function(e, t, n) {
                return document.createNodeIterator(e, t, n, !1)
            }
        }, {
            key: "createInstanceOnIframe",
            value: function(t) {
                return new e(t.querySelector("html"),this.iframes)
            }
        }, {
            key: "compareNodeIframe",
            value: function(e, t, n) {
                if (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) {
                    if (null === t)
                        return !0;
                    if (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING)
                        return !0
                }
                return !1
            }
        }, {
            key: "getIteratorNode",
            value: function(e) {
                var t = e.previousNode()
                  , n = void 0;
                return n = null === t ? e.nextNode() : e.nextNode() && e.nextNode(),
                {
                    prevNode: t,
                    node: n
                }
            }
        }, {
            key: "checkIframeFilter",
            value: function(e, t, n, i) {
                var o = !1
                  , r = !1;
                return i.forEach(function(e, t) {
                    e.val === n && (o = t,
                    r = e.handled)
                }),
                this.compareNodeIframe(e, t, n) ? (!1 !== o || r ? !1 === o || r || (i[o].handled = !0) : i.push({
                    val: n,
                    handled: !0
                }),
                !0) : (!1 === o && i.push({
                    val: n,
                    handled: !1
                }),
                !1)
            }
        }, {
            key: "handleOpenIframes",
            value: function(e, t, n, i) {
                var o = this;
                e.forEach(function(e) {
                    e.handled || o.getIframeContents(e.val, function(e) {
                        o.createInstanceOnIframe(e).forEachNode(t, n, i)
                    })
                })
            }
        }, {
            key: "iterateThroughNodes",
            value: function(e, t, n, i, o) {
                for (var r = this, a = this.createIterator(t, e, i), s = [], l = [], u = void 0, c = void 0, d = function() {
                    var e = r.getIteratorNode(a);
                    return c = e.prevNode,
                    u = e.node
                }; d(); )
                    this.iframes && this.forEachIframe(t, function(e) {
                        return r.checkIframeFilter(u, c, e, s)
                    }, function(t) {
                        r.createInstanceOnIframe(t).forEachNode(e, function(e) {
                            return l.push(e)
                        }, i)
                    }),
                    l.push(u);
                l.forEach(function(e) {
                    n(e)
                }),
                this.iframes && this.handleOpenIframes(s, e, n, i),
                o()
            }
        }, {
            key: "forEachNode",
            value: function(e, t, n) {
                var i = this
                  , o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {}
                  , r = this.getContexts()
                  , a = r.length;
                a || o(),
                r.forEach(function(r) {
                    var s = function() {
                        i.iterateThroughNodes(e, r, t, n, function() {
                            --a <= 0 && o()
                        })
                    };
                    i.iframes ? i.waitForIframes(r, s) : s()
                })
            }
        }], [{
            key: "matches",
            value: function(e, t) {
                var n = "string" == typeof t ? [t] : t
                  , i = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
                if (i) {
                    var o = !1;
                    return n.every(function(t) {
                        return !i.call(e, t) || (o = !0,
                        !1)
                    }),
                    o
                }
                return !1
            }
        }]),
        e
    }()
      , a = function() {
        function e(t) {
            n(this, e),
            this.opt = o({}, {
                diacritics: !0,
                synonyms: {},
                accuracy: "partially",
                caseSensitive: !1,
                ignoreJoiners: !1,
                ignorePunctuation: [],
                wildcards: "disabled"
            }, t)
        }
        return i(e, [{
            key: "create",
            value: function(e) {
                return "disabled" !== this.opt.wildcards && (e = this.setupWildcardsRegExp(e)),
                e = this.escapeStr(e),
                Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)),
                (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)),
                this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                e = this.createMergedBlanksRegExp(e),
                (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)),
                "disabled" !== this.opt.wildcards && (e = this.createWildcardsRegExp(e)),
                e = this.createAccuracyRegExp(e),
                new RegExp(e,"gm" + (this.opt.caseSensitive ? "" : "i"))
            }
        }, {
            key: "escapeStr",
            value: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        }, {
            key: "createSynonymsRegExp",
            value: function(e) {
                var t = this.opt.synonyms
                  , n = this.opt.caseSensitive ? "" : "i"
                  , i = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var r = t[o]
                          , a = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(o) : this.escapeStr(o)
                          , s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(r) : this.escapeStr(r);
                        "" !== a && "" !== s && (e = e.replace(new RegExp("(" + this.escapeStr(a) + "|" + this.escapeStr(s) + ")","gm" + n), i + "(" + this.processSynonyms(a) + "|" + this.processSynonyms(s) + ")" + i))
                    }
                return e
            }
        }, {
            key: "processSynonyms",
            value: function(e) {
                return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)),
                e
            }
        }, {
            key: "setupWildcardsRegExp",
            value: function(e) {
                return e = e.replace(/(?:\\)*\?/g, function(e) {
                    return "\\" === e.charAt(0) ? "?" : "\x01"
                }),
                e.replace(/(?:\\)*\*/g, function(e) {
                    return "\\" === e.charAt(0) ? "*" : "\x02"
                })
            }
        }, {
            key: "createWildcardsRegExp",
            value: function(e) {
                var t = "withSpaces" === this.opt.wildcards;
                return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*")
            }
        }, {
            key: "setupIgnoreJoinersRegExp",
            value: function(e) {
                return e.replace(/[^(|)\\]/g, function(e, t, n) {
                    var i = n.charAt(t + 1);
                    return /[(|)\\]/.test(i) || "" === i ? e : e + "\0"
                })
            }
        }, {
            key: "createJoinersRegExp",
            value: function(e) {
                var t = []
                  , n = this.opt.ignorePunctuation;
                return Array.isArray(n) && n.length && t.push(this.escapeStr(n.join(""))),
                this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"),
                t.length ? e.split(/\u0000+/).join("[" + t.join("") + "]*") : e
            }
        }, {
            key: "createDiacriticsRegExp",
            value: function(e) {
                var t = this.opt.caseSensitive ? "" : "i"
                  , n = this.opt.caseSensitive ? ["a\xe0\xe1\u1ea3\xe3\u1ea1\u0103\u1eb1\u1eaf\u1eb3\u1eb5\u1eb7\xe2\u1ea7\u1ea5\u1ea9\u1eab\u1ead\xe4\xe5\u0101\u0105", "A\xc0\xc1\u1ea2\xc3\u1ea0\u0102\u1eb0\u1eae\u1eb2\u1eb4\u1eb6\xc2\u1ea6\u1ea4\u1ea8\u1eaa\u1eac\xc4\xc5\u0100\u0104", "c\xe7\u0107\u010d", "C\xc7\u0106\u010c", "d\u0111\u010f", "D\u0110\u010e", "e\xe8\xe9\u1ebb\u1ebd\u1eb9\xea\u1ec1\u1ebf\u1ec3\u1ec5\u1ec7\xeb\u011b\u0113\u0119", "E\xc8\xc9\u1eba\u1ebc\u1eb8\xca\u1ec0\u1ebe\u1ec2\u1ec4\u1ec6\xcb\u011a\u0112\u0118", "i\xec\xed\u1ec9\u0129\u1ecb\xee\xef\u012b", "I\xcc\xcd\u1ec8\u0128\u1eca\xce\xcf\u012a", "l\u0142", "L\u0141", "n\xf1\u0148\u0144", "N\xd1\u0147\u0143", "o\xf2\xf3\u1ecf\xf5\u1ecd\xf4\u1ed3\u1ed1\u1ed5\u1ed7\u1ed9\u01a1\u1edf\u1ee1\u1edb\u1edd\u1ee3\xf6\xf8\u014d", "O\xd2\xd3\u1ece\xd5\u1ecc\xd4\u1ed2\u1ed0\u1ed4\u1ed6\u1ed8\u01a0\u1ede\u1ee0\u1eda\u1edc\u1ee2\xd6\xd8\u014c", "r\u0159", "R\u0158", "s\u0161\u015b\u0219\u015f", "S\u0160\u015a\u0218\u015e", "t\u0165\u021b\u0163", "T\u0164\u021a\u0162", "u\xf9\xfa\u1ee7\u0169\u1ee5\u01b0\u1eeb\u1ee9\u1eed\u1eef\u1ef1\xfb\xfc\u016f\u016b", "U\xd9\xda\u1ee6\u0168\u1ee4\u01af\u1eea\u1ee8\u1eec\u1eee\u1ef0\xdb\xdc\u016e\u016a", "y\xfd\u1ef3\u1ef7\u1ef9\u1ef5\xff", "Y\xdd\u1ef2\u1ef6\u1ef8\u1ef4\u0178", "z\u017e\u017c\u017a", "Z\u017d\u017b\u0179"] : ["a\xe0\xe1\u1ea3\xe3\u1ea1\u0103\u1eb1\u1eaf\u1eb3\u1eb5\u1eb7\xe2\u1ea7\u1ea5\u1ea9\u1eab\u1ead\xe4\xe5\u0101\u0105A\xc0\xc1\u1ea2\xc3\u1ea0\u0102\u1eb0\u1eae\u1eb2\u1eb4\u1eb6\xc2\u1ea6\u1ea4\u1ea8\u1eaa\u1eac\xc4\xc5\u0100\u0104", "c\xe7\u0107\u010dC\xc7\u0106\u010c", "d\u0111\u010fD\u0110\u010e", "e\xe8\xe9\u1ebb\u1ebd\u1eb9\xea\u1ec1\u1ebf\u1ec3\u1ec5\u1ec7\xeb\u011b\u0113\u0119E\xc8\xc9\u1eba\u1ebc\u1eb8\xca\u1ec0\u1ebe\u1ec2\u1ec4\u1ec6\xcb\u011a\u0112\u0118", "i\xec\xed\u1ec9\u0129\u1ecb\xee\xef\u012bI\xcc\xcd\u1ec8\u0128\u1eca\xce\xcf\u012a", "l\u0142L\u0141", "n\xf1\u0148\u0144N\xd1\u0147\u0143", "o\xf2\xf3\u1ecf\xf5\u1ecd\xf4\u1ed3\u1ed1\u1ed5\u1ed7\u1ed9\u01a1\u1edf\u1ee1\u1edb\u1edd\u1ee3\xf6\xf8\u014dO\xd2\xd3\u1ece\xd5\u1ecc\xd4\u1ed2\u1ed0\u1ed4\u1ed6\u1ed8\u01a0\u1ede\u1ee0\u1eda\u1edc\u1ee2\xd6\xd8\u014c", "r\u0159R\u0158", "s\u0161\u015b\u0219\u015fS\u0160\u015a\u0218\u015e", "t\u0165\u021b\u0163T\u0164\u021a\u0162", "u\xf9\xfa\u1ee7\u0169\u1ee5\u01b0\u1eeb\u1ee9\u1eed\u1eef\u1ef1\xfb\xfc\u016f\u016bU\xd9\xda\u1ee6\u0168\u1ee4\u01af\u1eea\u1ee8\u1eec\u1eee\u1ef0\xdb\xdc\u016e\u016a", "y\xfd\u1ef3\u1ef7\u1ef9\u1ef5\xffY\xdd\u1ef2\u1ef6\u1ef8\u1ef4\u0178", "z\u017e\u017c\u017aZ\u017d\u017b\u0179"]
                  , i = [];
                return e.split("").forEach(function(o) {
                    n.every(function(n) {
                        if (-1 !== n.indexOf(o)) {
                            if (i.indexOf(n) > -1)
                                return !1;
                            e = e.replace(new RegExp("[" + n + "]","gm" + t), "[" + n + "]"),
                            i.push(n)
                        }
                        return !0
                    })
                }),
                e
            }
        }, {
            key: "createMergedBlanksRegExp",
            value: function(e) {
                return e.replace(/[\s]+/gim, "[\\s]+")
            }
        }, {
            key: "createAccuracyRegExp",
            value: function(e) {
                var t = this
                  , n = this.opt.accuracy
                  , i = "string" == typeof n ? n : n.value
                  , o = "string" == typeof n ? [] : n.limiters
                  , r = "";
                switch (o.forEach(function(e) {
                    r += "|" + t.escapeStr(e)
                }),
                i) {
                case "partially":
                default:
                    return "()(" + e + ")";
                case "complementary":
                    return "()([^" + (r = "\\s" + (r || this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\xa1\xbf"))) + "]*" + e + "[^" + r + "]*)";
                case "exactly":
                    return "(^|\\s" + r + ")(" + e + ")(?=$|\\s" + r + ")"
                }
            }
        }]),
        e
    }()
      , s = function() {
        function e(t) {
            n(this, e),
            this.ctx = t,
            this.ie = !1;
            var i = window.navigator.userAgent;
            (i.indexOf("MSIE") > -1 || i.indexOf("Trident") > -1) && (this.ie = !0)
        }
        return i(e, [{
            key: "log",
            value: function(e) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "debug"
                  , i = this.opt.log;
                this.opt.debug && "object" === (void 0 === i ? "undefined" : t(i)) && "function" == typeof i[n] && i[n]("mark.js: " + e)
            }
        }, {
            key: "getSeparatedKeywords",
            value: function(e) {
                var t = this
                  , n = [];
                return e.forEach(function(e) {
                    t.opt.separateWordSearch ? e.split(" ").forEach(function(e) {
                        e.trim() && -1 === n.indexOf(e) && n.push(e)
                    }) : e.trim() && -1 === n.indexOf(e) && n.push(e)
                }),
                {
                    keywords: n.sort(function(e, t) {
                        return t.length - e.length
                    }),
                    length: n.length
                }
            }
        }, {
            key: "isNumeric",
            value: function(e) {
                return Number(parseFloat(e)) == e
            }
        }, {
            key: "checkRanges",
            value: function(e) {
                var t = this;
                if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0]))
                    return this.log("markRanges() will only accept an array of objects"),
                    this.opt.noMatch(e),
                    [];
                var n = []
                  , i = 0;
                return e.sort(function(e, t) {
                    return e.start - t.start
                }).forEach(function(e) {
                    var o = t.callNoMatchOnInvalidRanges(e, i)
                      , r = o.start
                      , a = o.end;
                    o.valid && (e.start = r,
                    e.length = a - r,
                    n.push(e),
                    i = a)
                }),
                n
            }
        }, {
            key: "callNoMatchOnInvalidRanges",
            value: function(e, t) {
                var n = void 0
                  , i = void 0
                  , o = !1;
                return e && "undefined" != typeof e.start ? (n = parseInt(e.start, 10),
                i = n + parseInt(e.length, 10),
                this.isNumeric(e.start) && this.isNumeric(e.length) && i - t > 0 && i - n > 0 ? o = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)),
                this.opt.noMatch(e))) : (this.log("Ignoring invalid range: " + JSON.stringify(e)),
                this.opt.noMatch(e)),
                {
                    start: n,
                    end: i,
                    valid: o
                }
            }
        }, {
            key: "checkWhitespaceRanges",
            value: function(e, t, n) {
                var i = void 0
                  , o = !0
                  , r = n.length
                  , a = t - r
                  , s = parseInt(e.start, 10) - a;
                return s = s > r ? r : s,
                i = s + parseInt(e.length, 10),
                i > r && (i = r,
                this.log("End range automatically set to the max value of " + r)),
                s < 0 || i - s < 0 || s > r || i > r ? (o = !1,
                this.log("Invalid range: " + JSON.stringify(e)),
                this.opt.noMatch(e)) : "" === n.substring(s, i).replace(/\s+/g, "") && (o = !1,
                this.log("Skipping whitespace only range: " + JSON.stringify(e)),
                this.opt.noMatch(e)),
                {
                    start: s,
                    end: i,
                    valid: o
                }
            }
        }, {
            key: "getTextNodes",
            value: function(e) {
                var t = this
                  , n = ""
                  , i = [];
                this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function(e) {
                    i.push({
                        start: n.length,
                        end: (n += e.textContent).length,
                        node: e
                    })
                }, function(e) {
                    return t.matchesExclude(e.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }, function() {
                    e({
                        value: n,
                        nodes: i
                    })
                })
            }
        }, {
            key: "matchesExclude",
            value: function(e) {
                return r.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
            }
        }, {
            key: "wrapRangeInTextNode",
            value: function(e, t, n) {
                var i = this.opt.element ? this.opt.element : "mark"
                  , o = e.splitText(t)
                  , r = o.splitText(n - t)
                  , a = document.createElement(i);
                return a.setAttribute("data-markjs", "true"),
                this.opt.className && a.setAttribute("class", this.opt.className),
                a.textContent = o.textContent,
                o.parentNode.replaceChild(a, o),
                r
            }
        }, {
            key: "wrapRangeInMappedTextNode",
            value: function(e, t, n, i, o) {
                var r = this;
                e.nodes.every(function(a, s) {
                    var l = e.nodes[s + 1];
                    if (void 0 === l || l.start > t) {
                        if (!i(a.node))
                            return !1;
                        var u = t - a.start
                          , c = (n > a.end ? a.end : n) - a.start
                          , d = e.value.substr(0, a.start)
                          , f = e.value.substr(c + a.start);
                        if (a.node = r.wrapRangeInTextNode(a.node, u, c),
                        e.value = d + f,
                        e.nodes.forEach(function(t, n) {
                            n >= s && (e.nodes[n].start > 0 && n !== s && (e.nodes[n].start -= c),
                            e.nodes[n].end -= c)
                        }),
                        n -= c,
                        o(a.node.previousSibling, a.start),
                        !(n > a.end))
                            return !1;
                        t = a.end
                    }
                    return !0
                })
            }
        }, {
            key: "wrapGroups",
            value: function(e, t, n, i) {
                return e = this.wrapRangeInTextNode(e, t, t + n),
                i(e.previousSibling),
                e
            }
        }, {
            key: "separateGroups",
            value: function(e, t, n, i, o) {
                for (var r = t.length, a = 1; a < r; a++) {
                    var s = e.textContent.indexOf(t[a]);
                    t[a] && s > -1 && i(t[a], e) && (e = this.wrapGroups(e, s, t[a].length, o))
                }
                return e
            }
        }, {
            key: "wrapMatches",
            value: function(e, t, n, i, o) {
                var r = this
                  , a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function(t) {
                    t.nodes.forEach(function(t) {
                        t = t.node;
                        for (var o = void 0; null !== (o = e.exec(t.textContent)) && "" !== o[a]; ) {
                            if (r.opt.separateGroups)
                                t = r.separateGroups(t, o, a, n, i);
                            else {
                                if (!n(o[a], t))
                                    continue;
                                var s = o.index;
                                if (0 !== a)
                                    for (var l = 1; l < a; l++)
                                        s += o[l].length;
                                t = r.wrapGroups(t, s, o[a].length, i)
                            }
                            e.lastIndex = 0
                        }
                    }),
                    o()
                })
            }
        }, {
            key: "wrapMatchesAcrossElements",
            value: function(e, t, n, i, o) {
                var r = this
                  , a = 0 === t ? 0 : t + 1;
                this.getTextNodes(function(t) {
                    for (var s = void 0; null !== (s = e.exec(t.value)) && "" !== s[a]; ) {
                        var l = s.index;
                        if (0 !== a)
                            for (var u = 1; u < a; u++)
                                l += s[u].length;
                        var c = l + s[a].length;
                        r.wrapRangeInMappedTextNode(t, l, c, function(e) {
                            return n(s[a], e)
                        }, function(t, n) {
                            e.lastIndex = n,
                            i(t)
                        })
                    }
                    o()
                })
            }
        }, {
            key: "wrapRangeFromIndex",
            value: function(e, t, n, i) {
                var o = this;
                this.getTextNodes(function(r) {
                    var a = r.value.length;
                    e.forEach(function(e, i) {
                        var s = o.checkWhitespaceRanges(e, a, r.value)
                          , l = s.start
                          , u = s.end;
                        s.valid && o.wrapRangeInMappedTextNode(r, l, u, function(n) {
                            return t(n, e, r.value.substring(l, u), i)
                        }, function(t) {
                            n(t, e)
                        })
                    }),
                    i()
                })
            }
        }, {
            key: "unwrapMatches",
            value: function(e) {
                for (var t = e.parentNode, n = document.createDocumentFragment(); e.firstChild; )
                    n.appendChild(e.removeChild(e.firstChild));
                t.replaceChild(n, e),
                this.ie ? this.normalizeTextNode(t) : t.normalize()
            }
        }, {
            key: "normalizeTextNode",
            value: function(e) {
                if (e) {
                    if (3 === e.nodeType)
                        for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                            e.nodeValue += e.nextSibling.nodeValue,
                            e.parentNode.removeChild(e.nextSibling);
                    else
                        this.normalizeTextNode(e.firstChild);
                    this.normalizeTextNode(e.nextSibling)
                }
            }
        }, {
            key: "markRegExp",
            value: function(e, t) {
                var n = this;
                this.opt = t,
                this.log('Searching with expression "' + e + '"');
                var i = 0
                  , o = "wrapMatches"
                  , r = function(e) {
                    i++,
                    n.opt.each(e)
                };
                this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                this[o](e, this.opt.ignoreGroups, function(e, t) {
                    return n.opt.filter(t, e, i)
                }, r, function() {
                    0 === i && n.opt.noMatch(e),
                    n.opt.done(i)
                })
            }
        }, {
            key: "mark",
            value: function(e, t) {
                var n = this;
                this.opt = t;
                var i = 0
                  , o = "wrapMatches"
                  , r = this.getSeparatedKeywords("string" == typeof e ? [e] : e)
                  , s = r.keywords
                  , l = r.length
                  , u = function e(t) {
                    var r = new a(n.opt).create(t)
                      , u = 0;
                    n.log('Searching with expression "' + r + '"'),
                    n[o](r, 1, function(e, o) {
                        return n.opt.filter(o, t, i, u)
                    }, function(e) {
                        u++,
                        i++,
                        n.opt.each(e)
                    }, function() {
                        0 === u && n.opt.noMatch(t),
                        s[l - 1] === t ? n.opt.done(i) : e(s[s.indexOf(t) + 1])
                    })
                };
                this.opt.acrossElements && (o = "wrapMatchesAcrossElements"),
                0 === l ? this.opt.done(i) : u(s[0])
            }
        }, {
            key: "markRanges",
            value: function(e, t) {
                var n = this;
                this.opt = t;
                var i = 0
                  , o = this.checkRanges(e);
                o && o.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(o)),
                this.wrapRangeFromIndex(o, function(e, t, i, o) {
                    return n.opt.filter(e, t, i, o)
                }, function(e, t) {
                    i++,
                    n.opt.each(e, t)
                }, function() {
                    n.opt.done(i)
                })) : this.opt.done(i)
            }
        }, {
            key: "unmark",
            value: function(e) {
                var t = this;
                this.opt = e;
                var n = this.opt.element ? this.opt.element : "*";
                n += "[data-markjs]",
                this.opt.className && (n += "." + this.opt.className),
                this.log('Removal selector "' + n + '"'),
                this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function(e) {
                    t.unwrapMatches(e)
                }, function(e) {
                    var i = r.matches(e, n)
                      , o = t.matchesExclude(e);
                    return !i || o ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                }, this.opt.done)
            }
        }, {
            key: "opt",
            set: function(e) {
                this._opt = o({}, {
                    element: "",
                    className: "",
                    exclude: [],
                    iframes: !1,
                    iframesTimeout: 5e3,
                    separateWordSearch: !0,
                    acrossElements: !1,
                    ignoreGroups: 0,
                    each: function() {},
                    noMatch: function() {},
                    filter: function() {
                        return !0
                    },
                    done: function() {},
                    debug: !1,
                    log: window.console
                }, e)
            },
            get: function() {
                return this._opt
            }
        }, {
            key: "iterator",
            get: function() {
                return new r(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)
            }
        }]),
        e
    }();
    return e.fn.mark = function(e, t) {
        return new s(this.get()).mark(e, t),
        this
    }
    ,
    e.fn.markRegExp = function(e, t) {
        return new s(this.get()).markRegExp(e, t),
        this
    }
    ,
    e.fn.markRanges = function(e, t) {
        return new s(this.get()).markRanges(e, t),
        this
    }
    ,
    e.fn.unmark = function(e) {
        return new s(this.get()).unmark(e),
        this
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    t.Search = function() {
        function t() {
            f.on("input", function(t) {
                t.preventDefault(),
                y = e(this).val(),
                x.search(y, function(e) {
                    g = e,
                    o(y),
                    r()
                }),
                window.ga && (window.clearTimeout(b),
                b = window.setTimeout(l, 1e3))
            }),
            c.on("submit", function(e) {
                e.preventDefault(),
                a(),
                p.find(".search-result__title a").first().focus()
            }),
            v.on("click", function(e) {
                e.preventDefault(),
                f.focus(),
                s()
            }),
            window.ga && p.on("click", ".search-result__title a", function() {
                var t = e(this).attr("href");
                ga("send", {
                    hitType: "event",
                    eventCategory: "Search result",
                    eventAction: "click",
                    eventLabel: t,
                    transport: "beacon"
                })
            }),
            e("#toc").on("click", "a", function() {
                s()
            })
        }
        function n() {
            d.text("Search")
        }
        function i(e) {
            var t = [];
            return x.lunrIndex.search(e).forEach(function(e, n) {
                n < E && t.push(x.lunrData.docs[e.ref])
            }),
            t
        }
        function o(e) {
            var t = "";
            0 === g.length && (t += "<p>Nothing found</p>"),
            t += "<ul>";
            for (var n in g) {
                var i = g[n]
                  , o = x.processContent(i.content, e);
                t += '<li class="search-result">',
                t += '<h3 class="search-result__title">',
                t += '<a href="' + i.url + '">',
                t += i.title,
                t += "</a>",
                t += "</h3>",
                void 0 !== o && (t += "<p>" + o + "</p>"),
                t += "</li>"
            }
            t += "</ul>",
            p.html(t)
        }
        function r(e) {
            if (void 0 === e)
                var t = g.length
                  , n = t + " results";
            h.text(e || n)
        }
        function a() {
            m.addClass("is-open").attr("aria-hidden", "false"),
            w.addClass("has-search-results-open")
        }
        function s() {
            m.removeClass("is-open").attr("aria-hidden", "true"),
            w.removeClass("has-search-results-open")
        }
        function l() {
            if ("" !== y) {
                var e = window.stripPIIFromString(y);
                ga("send", {
                    hitType: "event",
                    eventCategory: "Search query",
                    eventAction: "type",
                    eventLabel: e,
                    transport: "beacon"
                })
            }
        }
        function u() {
            x.lunrIndex.pipeline.remove(lunr.stopWordFilter),
            x.lunrIndex.pipeline.add(x.govukStopWorldFilter)
        }
        var c, d, f, p, h, m, v, g, y, b, x = this, w = e("html"), E = 20;
        this.start = function(e) {
            c = e.find("form"),
            f = e.find("#search"),
            d = e.find(".search__label"),
            m = e.find(".search-results"),
            p = m.find(".search-results__content"),
            h = m.find(".search-results__title"),
            v = m.find(".search-results__close"),
            x.downloadSearchIndex(),
            t(),
            n()
        }
        ,
        this.downloadSearchIndex = function() {
            r("Loading search index"),
            e.ajax({
                url: "/search.json",
                cache: !0,
                method: "GET",
                success: function(t) {
                    x.lunrData = t,
                    x.lunrIndex = lunr.Index.load(x.lunrData.index),
                    u(),
                    e(document).trigger("lunrIndexLoaded")
                }
            })
        }
        ,
        this.search = function(t, n) {
            return "" === t ? void s() : (a(),
            x.lunrIndex ? void n(i(t)) : void e(document).on("lunrIndexLoaded", function() {
                x.search(t, n)
            }))
        }
        ,
        this.processContent = function(t, n) {
            var i;
            t = "<div>" + t + "</div>",
            t = e(t).mark(n);
            for (var o = t.html().replace(/(\.+|:|!|\?|\r|\n)("*|'*|\)*|}*|]*)/gm, "|").split("|"), r = [], a = 0; a < o.length && 5 !== r.length; a++) {
                var s = o[a].trim();
                s.includes("mark>") && -1 === r.indexOf(s) && r.push(s)
            }
            return r.length > 0 && (i = " \u2026 " + r.join(" \u2026 ") + " \u2026 "),
            i
        }
        ,
        this.govukStopWorldFilter = lunr.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"])
    }
    ,
    String.prototype.includes || (String.prototype.includes = function(e, t) {
        return "number" != typeof t && (t = 0),
        !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }
    )
}(jQuery, window.GOVUK.Modules),
function(e, t) {
    "use strict";
    t.CollapsibleNavigation = function() {
        function t() {
            for (var t = a.length - 1; t >= 0; t--) {
                var i = e(a[t])
                  , o = i.find("> a")
                  , r = i.find("> ul")
                  , s = "toc-" + o.text().toLowerCase().replace(/\s+/g, "-");
                if (0 !== r.length) {
                    i.addClass("collapsible");
                    var l = [];
                    r.each(function(t) {
                        var n = s + "-" + t;
                        l.push(n),
                        e(this).addClass("collapsible__body").attr("id", n).attr("aria-expanded", "false")
                    }),
                    o.addClass("collapsible__heading").after('<button class="collapsible__toggle" aria-controls="' + l.join(" ") + '"><span class="collapsible__toggle-label">Expand ' + o.text() + '</span><span class="collapsible__toggle-icon" aria-hidden="true"></button>'),
                    i.on("click", ".collapsible__toggle", function(t) {
                        t.preventDefault(),
                        n(e(this).parent())
                    })
                }
            }
        }
        function n(e) {
            var t = e.hasClass("is-open")
              , n = e.find("> a")
              , i = e.find(".collapsible__body")
              , o = e.find(".collapsible__toggle-label");
            e.toggleClass("is-open", !t),
            i.attr("aria-expanded", t ? "false" : "true"),
            o.text(t ? "Expand " + n.text() : "Collapse " + n.text())
        }
        function i() {
            var t, i = window.location.pathname, o = '[href*="' + i + '"]';
            "/" === i && (o = '[href="' + i + window.location.hash + '"]');
            for (var r = a.length - 1; r >= 0; r--) {
                var s = e(a[r]);
                if (s.find("> a").is(o)) {
                    t = s;
                    break
                }
                if (s.find("li > a").filter(o).length) {
                    t = s;
                    break
                }
            }
            t && !t.hasClass("is-open") && n(t)
        }
        var o, r, a;
        this.start = function(n) {
            o = e(".app-pane__content"),
            r = n,
            a = r.find("> ul > li"),
            t(),
            i(),
            o.on("scroll", _.debounce(i, 100, {
                maxWait: 100
            }))
        }
    }
}(jQuery, window.GOVUK.Modules),
$(document).ready(function() {
    GOVUK.modules.start()
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define("GOVUKFrontend", ["exports"], t) : t(e.GOVUKFrontend = {})
}(this, function(e) {
    "use strict";
    function t(e, t) {
        if (window.NodeList.prototype.forEach)
            return e.forEach(t);
        for (var n = 0; n < e.length; n++)
            t.call(window, e[n], n, e)
    }
    function n() {
        var e = (new Date).getTime();
        return "undefined" != typeof window.performance && "function" == typeof window.performance.now && (e += window.performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" === t ? n : 3 & n | 8).toString(16)
        })
    }
    function i(e) {
        this.$module = e,
        this.moduleId = e.getAttribute("id"),
        this.$sections = e.querySelectorAll(".govuk-accordion__section"),
        this.$openAllButton = "",
        this.browserSupportsSessionStorage = p.checkForSessionStorage(),
        this.controlsClass = "govuk-accordion__controls",
        this.openAllClass = "govuk-accordion__open-all",
        this.iconClass = "govuk-accordion__icon",
        this.sectionHeaderClass = "govuk-accordion__section-header",
        this.sectionHeaderFocusedClass = "govuk-accordion__section-header--focused",
        this.sectionHeadingClass = "govuk-accordion__section-heading",
        this.sectionSummaryClass = "govuk-accordion__section-summary",
        this.sectionButtonClass = "govuk-accordion__section-button",
        this.sectionExpandedClass = "govuk-accordion__section--expanded"
    }
    function o(e) {
        this.$module = e,
        this.debounceFormSubmitTimer = null
    }
    function r(e) {
        this.$module = e
    }
    function a(e) {
        this.$module = e,
        this.$textarea = e.querySelector(".govuk-js-character-count"),
        this.$textarea && (this.$countMessage = e.querySelector("[id=" + this.$textarea.id + "-info]"))
    }
    function s(e) {
        this.$module = e,
        this.$inputs = e.querySelectorAll('input[type="checkbox"]')
    }
    function l(e) {
        this.$module = e
    }
    function u(e) {
        this.$module = e
    }
    function c(e) {
        this.$module = e
    }
    function d(e) {
        this.$module = e,
        this.$tabs = e.querySelectorAll(".govuk-tabs__tab"),
        this.keys = {
            left: 37,
            right: 39,
            up: 38,
            down: 40
        },
        this.jsHiddenClass = "govuk-tabs__panel--hidden"
    }
    function f(e) {
        e = void 0 !== e ? e : {};
        var n = "undefined" != typeof e.scope ? e.scope : document;
        t(n.querySelectorAll('[data-module="govuk-button"]'), function(e) {
            new o(e).init()
        }),
        t(n.querySelectorAll('[data-module="govuk-accordion"]'), function(e) {
            new i(e).init()
        }),
        t(n.querySelectorAll('[data-module="govuk-details"]'), function(e) {
            new r(e).init()
        }),
        t(n.querySelectorAll('[data-module="govuk-character-count"]'), function(e) {
            new a(e).init()
        }),
        t(n.querySelectorAll('[data-module="govuk-checkboxes"]'), function(e) {
            new s(e).init()
        }),
        new l(n.querySelector('[data-module="govuk-error-summary"]')).init(),
        new u(n.querySelector('[data-module="govuk-header"]')).init(),
        t(n.querySelectorAll('[data-module="govuk-radios"]'), function(e) {
            new c(e).init()
        }),
        t(n.querySelectorAll('[data-module="govuk-tabs"]'), function(e) {
            new d(e).init()
        })
    }
    (function() {
        "defineProperty"in Object && function() {
            try {
                var e = {};
                return Object.defineProperty(e, "test", {
                    value: 42
                }),
                !0
            } catch (e) {
                return !1
            }
        }() || function(e) {
            var t = Object.prototype.hasOwnProperty("__defineGetter__")
              , n = "Getters & setters cannot be defined on this javascript engine"
              , i = "A property cannot both have accessors and be writable or have a value";
            Object.defineProperty = function(o, r, a) {
                if (e && (o === window || o === document || o === Element.prototype || o instanceof Element))
                    return e(o, r, a);
                if (null === o || !(o instanceof Object || "object" == typeof o))
                    throw new TypeError("Object.defineProperty called on non-object");
                if (!(a instanceof Object))
                    throw new TypeError("Property description must be an object");
                var s = String(r)
                  , l = "value"in a || "writable"in a
                  , u = "get"in a && typeof a.get
                  , c = "set"in a && typeof a.set;
                if (u) {
                    if ("function" !== u)
                        throw new TypeError("Getter must be a function");
                    if (!t)
                        throw new TypeError(n);
                    if (l)
                        throw new TypeError(i);
                    Object.__defineGetter__.call(o, s, a.get)
                } else
                    o[s] = a.value;
                if (c) {
                    if ("function" !== c)
                        throw new TypeError("Setter must be a function");
                    if (!t)
                        throw new TypeError(n);
                    if (l)
                        throw new TypeError(i);
                    Object.__defineSetter__.call(o, s, a.set)
                }
                return "value"in a && (o[s] = a.value),
                o
            }
        }(Object.defineProperty)
    }
    ).call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "bind"in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
            value: function(e) {
                var t, n = Array, i = Object, o = i.prototype, r = n.prototype, a = function() {}, s = o.toString, l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, u = Function.prototype.toString, c = function(e) {
                    try {
                        return u.call(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                };
                t = function(e) {
                    if ("function" != typeof e)
                        return !1;
                    if (l)
                        return c(e);
                    var t = s.call(e);
                    return "[object Function]" === t || "[object GeneratorFunction]" === t
                }
                ;
                var d = r.slice
                  , f = r.concat
                  , p = r.push
                  , h = Math.max
                  , m = this;
                if (!t(m))
                    throw new TypeError("Function.prototype.bind called on incompatible " + m);
                for (var v, g = d.call(arguments, 1), y = function() {
                    if (this instanceof v) {
                        var t = m.apply(this, f.call(g, d.call(arguments)));
                        return i(t) === t ? t : this
                    }
                    return m.apply(e, f.call(g, d.call(arguments)))
                }, b = h(0, m.length - g.length), x = [], w = 0; w < b; w++)
                    p.call(x, "$" + w);
                return v = Function("binder", "return function (" + x.join(",") + "){ return binder.apply(this, arguments); }")(y),
                m.prototype && (a.prototype = m.prototype,
                v.prototype = new a,
                a.prototype = null),
                v
            }
        })
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function(e) {
        "DOMTokenList"in this && function(e) {
            return !("classList"in e) || !e.classList.toggle("x", !1) && !e.className
        }(document.createElement("x")) || function(t) {
            "DOMTokenList"in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = function() {
                var t = !0
                  , n = function(e, n, i, o) {
                    Object.defineProperty ? Object.defineProperty(e, n, {
                        configurable: !1 === t || !!o,
                        get: i
                    }) : e.__defineGetter__(n, i)
                };
                try {
                    n({}, "support")
                } catch (e) {
                    t = !1
                }
                return function(t, i) {
                    var o = this
                      , r = []
                      , a = {}
                      , s = 0
                      , l = 0
                      , u = function(e) {
                        n(o, e, function() {
                            return d(),
                            r[e]
                        }, !1)
                    }
                      , c = function() {
                        if (s >= l)
                            for (; l < s; ++l)
                                u(l)
                    }
                      , d = function() {
                        var e, n, o = arguments, l = /\s+/;
                        if (o.length)
                            for (n = 0; n < o.length; ++n)
                                if (l.test(o[n]))
                                    throw e = new SyntaxError('String "' + o[n] + '" contains an invalid character'),
                                    e.code = 5,
                                    e.name = "InvalidCharacterError",
                                    e;
                        for (r = "object" == typeof t[i] ? ("" + t[i].baseVal).replace(/^\s+|\s+$/g, "").split(l) : ("" + t[i]).replace(/^\s+|\s+$/g, "").split(l),
                        "" === r[0] && (r = []),
                        a = {},
                        n = 0; n < r.length; ++n)
                            a[r[n]] = !0;
                        s = r.length,
                        c()
                    };
                    return d(),
                    n(o, "length", function() {
                        return d(),
                        s
                    }),
                    o.toLocaleString = o.toString = function() {
                        return d(),
                        r.join(" ")
                    }
                    ,
                    o.item = function(e) {
                        return d(),
                        r[e]
                    }
                    ,
                    o.contains = function(e) {
                        return d(),
                        !!a[e]
                    }
                    ,
                    o.add = function() {
                        d.apply(o, e = arguments);
                        for (var e, n, l = 0, u = e.length; l < u; ++l)
                            n = e[l],
                            a[n] || (r.push(n),
                            a[n] = !0);
                        s !== r.length && (s = r.length >>> 0,
                        "object" == typeof t[i] ? t[i].baseVal = r.join(" ") : t[i] = r.join(" "),
                        c())
                    }
                    ,
                    o.remove = function() {
                        d.apply(o, e = arguments);
                        for (var e, n = {}, l = 0, u = []; l < e.length; ++l)
                            n[e[l]] = !0,
                            delete a[e[l]];
                        for (l = 0; l < r.length; ++l)
                            n[r[l]] || u.push(r[l]);
                        r = u,
                        s = u.length >>> 0,
                        "object" == typeof t[i] ? t[i].baseVal = r.join(" ") : t[i] = r.join(" "),
                        c()
                    }
                    ,
                    o.toggle = function(t, n) {
                        return d.apply(o, [t]),
                        e !== n ? n ? (o.add(t),
                        !0) : (o.remove(t),
                        !1) : a[t] ? (o.remove(t),
                        !1) : (o.add(t),
                        !0)
                    }
                    ,
                    o
                }
            }()),
            function() {
                var t = document.createElement("span");
                "classList"in t && (t.classList.toggle("x", !1),
                t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function(t) {
                    var n = arguments[1];
                    if (n === e) {
                        var i = !this.contains(t);
                        return this[i ? "add" : "remove"](t),
                        i
                    }
                    return n = !!n,
                    this[n ? "add" : "remove"](t),
                    n
                }
                ))
            }(),
            function() {
                var e = document.createElement("span");
                if ("classList"in e && (e.classList.add("a", "b"),
                !e.classList.contains("b"))) {
                    var t = e.classList.constructor.prototype.add;
                    e.classList.constructor.prototype.add = function() {
                        for (var e = arguments, n = arguments.length, i = 0; i < n; i++)
                            t.call(this, e[i])
                    }
                }
            }(),
            function() {
                var e = document.createElement("span");
                if ("classList"in e && (e.classList.add("a"),
                e.classList.add("b"),
                e.classList.remove("a", "b"),
                e.classList.contains("b"))) {
                    var t = e.classList.constructor.prototype.remove;
                    e.classList.constructor.prototype.remove = function() {
                        for (var e = arguments, n = arguments.length, i = 0; i < n; i++)
                            t.call(this, e[i])
                    }
                }
            }()
        }(this)
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "Document"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(),
        this.Document.prototype = document))
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "Element"in this && "HTMLElement"in this || function() {
            function e() {
                return c-- || clearTimeout(t),
                !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState) || (s(document, !0),
                t && document.body.prototype && clearTimeout(t),
                !document.body.prototype))
            }
            if (window.Element && !window.HTMLElement)
                return void (window.HTMLElement = window.Element);
            window.Element = window.HTMLElement = new Function("return function Element() {}")();
            var t, n = document.appendChild(document.createElement("body")), i = n.appendChild(document.createElement("iframe")), o = i.contentWindow.document, r = Element.prototype = o.appendChild(o.createElement("*")), a = {}, s = function(e, t) {
                var n, i, o, r = e.childNodes || [], l = -1;
                if (1 === e.nodeType && e.constructor !== Element) {
                    e.constructor = Element;
                    for (n in a)
                        i = a[n],
                        e[n] = i
                }
                for (; o = t && r[++l]; )
                    s(o, t);
                return e
            }, l = document.getElementsByTagName("*"), u = document.createElement, c = 100;
            r.attachEvent("onpropertychange", function(e) {
                for (var t, n = e.propertyName, i = !a.hasOwnProperty(n), o = r[n], s = a[n], u = -1; t = l[++u]; )
                    1 === t.nodeType && (i || t[n] === s) && (t[n] = o);
                a[n] = o
            }),
            r.constructor = Element,
            r.hasAttribute || (r.hasAttribute = function(e) {
                return null !== this.getAttribute(e)
            }
            ),
            e() || (document.onreadystatechange = e,
            t = setInterval(e, 25)),
            document.createElement = function(e) {
                var t = u(String(e).toLowerCase());
                return s(t)
            }
            ,
            document.removeChild(n)
        }()
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "document"in this && "classList"in document.documentElement && "Element"in this && "classList"in Element.prototype && function() {
            var e = document.createElement("span");
            return e.classList.add("a", "b"),
            e.classList.contains("b")
        }() || function(e) {
            var t = !0
              , n = function(e, n, i, o) {
                Object.defineProperty ? Object.defineProperty(e, n, {
                    configurable: !1 === t || !!o,
                    get: i
                }) : e.__defineGetter__(n, i)
            };
            try {
                n({}, "support")
            } catch (e) {
                t = !1
            }
            var i = function(e, o, r) {
                n(e.prototype, o, function() {
                    var e, a = this, s = "__defineGetter__DEFINE_PROPERTY" + o;
                    if (a[s])
                        return e;
                    if (a[s] = !0,
                    !1 === t) {
                        for (var l, u = i.mirror || document.createElement("div"), c = u.childNodes, d = c.length, f = 0; f < d; ++f)
                            if (c[f]._R === a) {
                                l = c[f];
                                break
                            }
                        l || (l = u.appendChild(document.createElement("div"))),
                        e = DOMTokenList.call(l, a, r)
                    } else
                        e = new DOMTokenList(a,r);
                    return n(a, o, function() {
                        return e
                    }),
                    delete a[s],
                    e
                }, !0)
            };
            i(e.Element, "classList", "className"),
            i(e.HTMLElement, "classList", "className"),
            i(e.HTMLLinkElement, "relList", "rel"),
            i(e.HTMLAnchorElement, "relList", "rel"),
            i(e.HTMLAreaElement, "relList", "rel")
        }(this)
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    i.prototype.init = function() {
        if (this.$module) {
            this.initControls(),
            this.initSectionHeaders();
            var e = this.checkIfAllSectionsOpen();
            this.updateOpenAllButton(e)
        }
    }
    ,
    i.prototype.initControls = function() {
        this.$openAllButton = document.createElement("button"),
        this.$openAllButton.setAttribute("type", "button"),
        this.$openAllButton.innerHTML = 'Open all <span class="govuk-visually-hidden">sections</span>',
        this.$openAllButton.setAttribute("class", this.openAllClass),
        this.$openAllButton.setAttribute("aria-expanded", "false"),
        this.$openAllButton.setAttribute("type", "button");
        var e = document.createElement("div");
        e.setAttribute("class", this.controlsClass),
        e.appendChild(this.$openAllButton),
        this.$module.insertBefore(e, this.$module.firstChild),
        this.$openAllButton.addEventListener("click", this.onOpenOrCloseAllToggle.bind(this))
    }
    ,
    i.prototype.initSectionHeaders = function() {
        t(this.$sections, function(e, t) {
            var n = e.querySelector("." + this.sectionHeaderClass);
            this.initHeaderAttributes(n, t),
            this.setExpanded(this.isExpanded(e), e),
            n.addEventListener("click", this.onSectionToggle.bind(this, e)),
            this.setInitialState(e)
        }
        .bind(this))
    }
    ,
    i.prototype.initHeaderAttributes = function(e, t) {
        var n = this
          , i = e.querySelector("." + this.sectionButtonClass)
          , o = e.querySelector("." + this.sectionHeadingClass)
          , r = e.querySelector("." + this.sectionSummaryClass)
          , a = document.createElement("button");
        a.setAttribute("type", "button"),
        a.setAttribute("id", this.moduleId + "-heading-" + (t + 1)),
        a.setAttribute("aria-controls", this.moduleId + "-content-" + (t + 1));
        for (var s = 0; s < i.attributes.length; s++) {
            var l = i.attributes.item(s);
            a.setAttribute(l.nodeName, l.nodeValue)
        }
        a.addEventListener("focusin", function() {
            e.classList.contains(n.sectionHeaderFocusedClass) || (e.className += " " + n.sectionHeaderFocusedClass)
        }),
        a.addEventListener("blur", function() {
            e.classList.remove(n.sectionHeaderFocusedClass)
        }),
        void 0 !== r && null !== r && a.setAttribute("aria-describedby", this.moduleId + "-summary-" + (t + 1)),
        a.innerHTML = i.innerHTML,
        o.removeChild(i),
        o.appendChild(a);
        var u = document.createElement("span");
        u.className = this.iconClass,
        u.setAttribute("aria-hidden", "true"),
        o.appendChild(u)
    }
    ,
    i.prototype.onSectionToggle = function(e) {
        var t = this.isExpanded(e);
        this.setExpanded(!t, e),
        this.storeState(e)
    }
    ,
    i.prototype.onOpenOrCloseAllToggle = function() {
        var e = this
          , n = this.$sections
          , i = !this.checkIfAllSectionsOpen();
        t(n, function(t) {
            e.setExpanded(i, t),
            e.storeState(t)
        }),
        e.updateOpenAllButton(i)
    }
    ,
    i.prototype.setExpanded = function(e, t) {
        t.querySelector("." + this.sectionButtonClass).setAttribute("aria-expanded", e),
        e ? t.classList.add(this.sectionExpandedClass) : t.classList.remove(this.sectionExpandedClass);
        var n = this.checkIfAllSectionsOpen();
        this.updateOpenAllButton(n)
    }
    ,
    i.prototype.isExpanded = function(e) {
        return e.classList.contains(this.sectionExpandedClass)
    }
    ,
    i.prototype.checkIfAllSectionsOpen = function() {
        return this.$sections.length === this.$module.querySelectorAll("." + this.sectionExpandedClass).length
    }
    ,
    i.prototype.updateOpenAllButton = function(e) {
        var t = e ? "Close all" : "Open all";
        t += '<span class="govuk-visually-hidden"> sections</span>',
        this.$openAllButton.setAttribute("aria-expanded", e),
        this.$openAllButton.innerHTML = t
    }
    ;
    var p = {
        checkForSessionStorage: function() {
            var e, t = "this is the test string";
            try {
                return window.sessionStorage.setItem(t, t),
                e = window.sessionStorage.getItem(t) === t.toString(),
                window.sessionStorage.removeItem(t),
                e
            } catch (e) {
                "undefined" != typeof console && "undefined" != typeof console.log || console.log("Notice: sessionStorage not available.")
            }
        }
    };
    i.prototype.storeState = function(e) {
        if (this.browserSupportsSessionStorage) {
            var t = e.querySelector("." + this.sectionButtonClass);
            if (t) {
                var n = t.getAttribute("aria-controls")
                  , i = t.getAttribute("aria-expanded");
                void 0 !== n || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria controls present in accordion section heading.")),
                void 0 !== i || "undefined" != typeof console && "undefined" != typeof console.log || console.error(new Error("No aria expanded present in accordion section heading.")),
                n && i && window.sessionStorage.setItem(n, i)
            }
        }
    }
    ,
    i.prototype.setInitialState = function(e) {
        if (this.browserSupportsSessionStorage) {
            var t = e.querySelector("." + this.sectionButtonClass);
            if (t) {
                var n = t.getAttribute("aria-controls")
                  , i = n ? window.sessionStorage.getItem(n) : null;
                null !== i && this.setExpanded("true" === i, e)
            }
        }
    }
    ,
    function() {
        "Window"in this || "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(e) {
            e.constructor ? e.Window = e.constructor : (e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this
        }(this)
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function(e) {
        (function(e) {
            if (!("Event"in e))
                return !1;
            if ("function" == typeof e.Event)
                return !0;
            try {
                return new Event("click"),
                !0
            } catch (e) {
                return !1
            }
        }
        )(this) || function() {
            function t(e, t) {
                for (var n = -1, i = e.length; ++n < i; )
                    if (n in e && e[n] === t)
                        return n;
                return -1
            }
            var n = {
                click: 1,
                dblclick: 1,
                keyup: 1,
                keypress: 1,
                keydown: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                mouseover: 1,
                mouseenter: 1,
                mouseleave: 1,
                mouseout: 1,
                storage: 1,
                storagecommit: 1,
                textinput: 1
            };
            if ("undefined" != typeof document && "undefined" != typeof window) {
                var i = window.Event && window.Event.prototype || null;
                window.Event = Window.prototype.Event = function(t, n) {
                    if (!t)
                        throw new Error("Not enough arguments");
                    var i;
                    if ("createEvent"in document) {
                        i = document.createEvent("Event");
                        var o = !(!n || n.bubbles === e) && n.bubbles
                          , r = !(!n || n.cancelable === e) && n.cancelable;
                        return i.initEvent(t, o, r),
                        i
                    }
                    return i = document.createEventObject(),
                    i.type = t,
                    i.bubbles = !(!n || n.bubbles === e) && n.bubbles,
                    i.cancelable = !(!n || n.cancelable === e) && n.cancelable,
                    i
                }
                ,
                i && Object.defineProperty(window.Event, "prototype", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: i
                }),
                "createEvent"in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function() {
                    var e = this
                      , i = arguments[0]
                      , o = arguments[1];
                    if (e === window && i in n)
                        throw new Error("In IE8 the event: " + i + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                    e._events || (e._events = {}),
                    e._events[i] || (e._events[i] = function(n) {
                        var i, o = e._events[n.type].list, r = o.slice(), a = -1, s = r.length;
                        for (n.preventDefault = function() {
                            !1 !== n.cancelable && (n.returnValue = !1)
                        }
                        ,
                        n.stopPropagation = function() {
                            n.cancelBubble = !0
                        }
                        ,
                        n.stopImmediatePropagation = function() {
                            n.cancelBubble = !0,
                            n.cancelImmediate = !0
                        }
                        ,
                        n.currentTarget = e,
                        n.relatedTarget = n.fromElement || null,
                        n.target = n.target || n.srcElement || e,
                        n.timeStamp = (new Date).getTime(),
                        n.clientX && (n.pageX = n.clientX + document.documentElement.scrollLeft,
                        n.pageY = n.clientY + document.documentElement.scrollTop); ++a < s && !n.cancelImmediate; )
                            a in r && (i = r[a],
                            -1 !== t(o, i) && "function" == typeof i && i.call(e, n))
                    }
                    ,
                    e._events[i].list = [],
                    e.attachEvent && e.attachEvent("on" + i, e._events[i])),
                    e._events[i].list.push(o)
                }
                ,
                window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function() {
                    var e, n = this, i = arguments[0], o = arguments[1];
                    n._events && n._events[i] && n._events[i].list && -1 !== (e = t(n._events[i].list, o)) && (n._events[i].list.splice(e, 1),
                    n._events[i].list.length || (n.detachEvent && n.detachEvent("on" + i, n._events[i]),
                    delete n._events[i]))
                }
                ,
                window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function(e) {
                    if (!arguments.length)
                        throw new Error("Not enough arguments");
                    if (!e || "string" != typeof e.type)
                        throw new Error("DOM Events Exception 0");
                    var t = this
                      , n = e.type;
                    try {
                        if (!e.bubbles) {
                            e.cancelBubble = !0;
                            var i = function(e) {
                                e.cancelBubble = !0,
                                (t || window).detachEvent("on" + n, i)
                            };
                            this.attachEvent("on" + n, i)
                        }
                        this.fireEvent("on" + n, e)
                    } catch (i) {
                        e.target = t;
                        do {
                            e.currentTarget = t,
                            "_events"in t && "function" == typeof t._events[n] && t._events[n].call(t, e),
                            "function" == typeof t["on" + n] && t["on" + n].call(t, e),
                            t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                        } while (t && !e.cancelBubble)
                    }
                    return !0
                }
                ,
                document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded",{
                        bubbles: !0
                    }))
                }))
            }
        }()
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    o.prototype.handleKeyDown = function(e) {
        var t = e.target;
        "button" === t.getAttribute("role") && 32 === e.keyCode && (e.preventDefault(),
        t.click())
    }
    ,
    o.prototype.debounce = function(e) {
        if ("true" === e.target.getAttribute("data-prevent-double-click"))
            return this.debounceFormSubmitTimer ? (e.preventDefault(),
            !1) : void (this.debounceFormSubmitTimer = setTimeout(function() {
                this.debounceFormSubmitTimer = null
            }
            .bind(this), 1e3))
    }
    ,
    o.prototype.init = function() {
        this.$module.addEventListener("keydown", this.handleKeyDown),
        this.$module.addEventListener("click", this.debounce)
    }
    ;
    var h = 32;
    r.prototype.init = function() {
        this.$module && ("boolean" == typeof this.$module.open || this.polyfillDetails())
    }
    ,
    r.prototype.polyfillDetails = function() {
        var e = this.$module
          , t = this.$summary = e.getElementsByTagName("summary").item(0)
          , i = this.$content = e.getElementsByTagName("div").item(0);
        t && i && (i.id || (i.id = "details-content-" + n()),
        e.setAttribute("role", "group"),
        t.setAttribute("role", "button"),
        t.setAttribute("aria-controls", i.id),
        t.tabIndex = 0,
        !0 == (null !== e.getAttribute("open")) ? (t.setAttribute("aria-expanded", "true"),
        i.setAttribute("aria-hidden", "false")) : (t.setAttribute("aria-expanded", "false"),
        i.setAttribute("aria-hidden", "true"),
        i.style.display = "none"),
        this.polyfillHandleInputs(t, this.polyfillSetAttributes.bind(this)))
    }
    ,
    r.prototype.polyfillSetAttributes = function() {
        var e = this.$module
          , t = this.$summary
          , n = this.$content
          , i = "true" === t.getAttribute("aria-expanded")
          , o = "true" === n.getAttribute("aria-hidden");
        return t.setAttribute("aria-expanded", i ? "false" : "true"),
        n.setAttribute("aria-hidden", o ? "false" : "true"),
        n.style.display = i ? "none" : "",
        null !== e.getAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "open"),
        !0
    }
    ,
    r.prototype.polyfillHandleInputs = function(e, t) {
        e.addEventListener("keypress", function(e) {
            var n = e.target;
            13 !== e.keyCode && e.keyCode !== h || "summary" === n.nodeName.toLowerCase() && (e.preventDefault(),
            n.click ? n.click() : t(e))
        }),
        e.addEventListener("keyup", function(e) {
            var t = e.target;
            e.keyCode === h && "summary" === t.nodeName.toLowerCase() && e.preventDefault()
        }),
        e.addEventListener("click", t)
    }
    ,
    a.prototype.defaults = {
        characterCountAttribute: "data-maxlength",
        wordCountAttribute: "data-maxwords"
    },
    a.prototype.init = function() {
        var e = this.$module
          , t = this.$textarea
          , n = this.$countMessage;
        if (t && n) {
            t.insertAdjacentElement("afterend", n),
            this.options = this.getDataset(e);
            var i = this.defaults.characterCountAttribute;
            this.options.maxwords && (i = this.defaults.wordCountAttribute),
            this.maxLength = e.getAttribute(i),
            this.maxLength && (e.removeAttribute("maxlength"),
            this.bindChangeEvents.bind(this)(),
            this.updateCountMessage.bind(this)())
        }
    }
    ,
    a.prototype.getDataset = function(e) {
        var t = {}
          , n = e.attributes;
        if (n)
            for (var i = 0; i < n.length; i++) {
                var o = n[i]
                  , r = o.name.match(/^data-(.+)/);
                r && (t[r[1]] = o.value)
            }
        return t
    }
    ,
    a.prototype.count = function(e) {
        return this.options.maxwords ? (e.match(/\S+/g) || []).length : e.length
    }
    ,
    a.prototype.bindChangeEvents = function() {
        var e = this.$textarea;
        e.addEventListener("keyup", this.checkIfValueChanged.bind(this)),
        e.addEventListener("focus", this.handleFocus.bind(this)),
        e.addEventListener("blur", this.handleBlur.bind(this))
    }
    ,
    a.prototype.checkIfValueChanged = function() {
        this.$textarea.oldValue || (this.$textarea.oldValue = ""),
        this.$textarea.value !== this.$textarea.oldValue && (this.$textarea.oldValue = this.$textarea.value,
        this.updateCountMessage.bind(this)())
    }
    ,
    a.prototype.updateCountMessage = function() {
        var e = this.$textarea
          , t = this.options
          , n = this.$countMessage
          , i = this.count(e.value)
          , o = this.maxLength
          , r = o - i;
        o * (t.threshold ? t.threshold : 0) / 100 > i ? (n.classList.add("govuk-character-count__message--disabled"),
        n.setAttribute("aria-hidden", !0)) : (n.classList.remove("govuk-character-count__message--disabled"),
        n.removeAttribute("aria-hidden")),
        r < 0 ? (e.classList.add("govuk-textarea--error"),
        n.classList.remove("govuk-hint"),
        n.classList.add("govuk-error-message")) : (e.classList.remove("govuk-textarea--error"),
        n.classList.remove("govuk-error-message"),
        n.classList.add("govuk-hint"));
        var a = "remaining"
          , s = "character"
          , l = r;
        t.maxwords && (s = "word"),
        s += -1 === r || 1 === r ? "" : "s",
        a = r < 0 ? "too many" : "remaining",
        l = Math.abs(r),
        n.innerHTML = "You have " + l + " " + s + " " + a
    }
    ,
    a.prototype.handleFocus = function() {
        this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1e3)
    }
    ,
    a.prototype.handleBlur = function() {
        clearInterval(this.valueChecker)
    }
    ,
    s.prototype.init = function() {
        var e = this.$module;
        t(this.$inputs, function(t) {
            var n = t.getAttribute("data-aria-controls");
            n && e.querySelector("#" + n) && (t.setAttribute("aria-controls", n),
            t.removeAttribute("data-aria-controls"),
            this.setAttributes(t))
        }
        .bind(this)),
        e.addEventListener("click", this.handleClick.bind(this))
    }
    ,
    s.prototype.setAttributes = function(e) {
        var t = e.checked;
        e.setAttribute("aria-expanded", t);
        var n = this.$module.querySelector("#" + e.getAttribute("aria-controls"));
        n && n.classList.toggle("govuk-checkboxes__conditional--hidden", !t)
    }
    ,
    s.prototype.handleClick = function(e) {
        var t = e.target
          , n = "checkbox" === t.getAttribute("type")
          , i = t.getAttribute("aria-controls");
        n && i && this.setAttributes(t)
    }
    ,
    function() {
        "document"in this && "matches"in document.documentElement || (Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function(e) {
            for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), i = 0; n[i] && n[i] !== t; )
                ++i;
            return !!n[i]
        }
        )
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "document"in this && "closest"in document.documentElement || (Element.prototype.closest = function(e) {
            for (var t = this; t; ) {
                if (t.matches(e))
                    return t;
                t = "SVGElement"in window && t instanceof SVGElement ? t.parentNode : t.parentElement
            }
            return null
        }
        )
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    l.prototype.init = function() {
        var e = this.$module;
        e && (e.focus(),
        e.addEventListener("click", this.handleClick.bind(this)))
    }
    ,
    l.prototype.handleClick = function(e) {
        var t = e.target;
        this.focusTarget(t) && e.preventDefault()
    }
    ,
    l.prototype.focusTarget = function(e) {
        if ("A" !== e.tagName || !1 === e.href)
            return !1;
        var t = this.getFragmentFromUrl(e.href)
          , n = document.getElementById(t);
        if (!n)
            return !1;
        var i = this.getAssociatedLegendOrLabel(n);
        return !!i && (i.scrollIntoView(),
        n.focus({
            preventScroll: !0
        }),
        !0)
    }
    ,
    l.prototype.getFragmentFromUrl = function(e) {
        return -1 !== e.indexOf("#") && e.split("#").pop()
    }
    ,
    l.prototype.getAssociatedLegendOrLabel = function(e) {
        var t = e.closest("fieldset");
        if (t) {
            var n = t.getElementsByTagName("legend");
            if (n.length) {
                var i = n[0];
                if ("checkbox" === e.type || "radio" === e.type)
                    return i;
                var o = i.getBoundingClientRect().top
                  , r = e.getBoundingClientRect();
                if (r.height && window.innerHeight && r.top + r.height - o < window.innerHeight / 2)
                    return i
            }
        }
        return document.querySelector("label[for='" + e.getAttribute("id") + "']") || e.closest("label")
    }
    ,
    u.prototype.init = function() {
        var e = this.$module;
        if (e) {
            var t = e.querySelector(".govuk-js-header-toggle");
            t && t.addEventListener("click", this.handleClick.bind(this))
        }
    }
    ,
    u.prototype.toggleClass = function(e, t) {
        e.className.indexOf(t) > 0 ? e.className = e.className.replace(" " + t, "") : e.className += " " + t
    }
    ,
    u.prototype.handleClick = function(e) {
        var t = this.$module
          , n = e.target || e.srcElement
          , i = t.querySelector("#" + n.getAttribute("aria-controls"));
        n && i && (this.toggleClass(i, "govuk-header__navigation--open"),
        this.toggleClass(n, "govuk-header__menu-button--open"),
        n.setAttribute("aria-expanded", "true" !== n.getAttribute("aria-expanded")),
        i.setAttribute("aria-hidden", "false" === i.getAttribute("aria-hidden")))
    }
    ,
    c.prototype.init = function() {
        var e = this.$module;
        t(e.querySelectorAll('input[type="radio"]'), function(t) {
            var n = t.getAttribute("data-aria-controls");
            n && e.querySelector("#" + n) && (t.setAttribute("aria-controls", n),
            t.removeAttribute("data-aria-controls"),
            this.setAttributes(t))
        }
        .bind(this)),
        e.addEventListener("click", this.handleClick.bind(this))
    }
    ,
    c.prototype.setAttributes = function(e) {
        var t = document.querySelector("#" + e.getAttribute("aria-controls"));
        if (t && t.classList.contains("govuk-radios__conditional")) {
            var n = e.checked;
            e.setAttribute("aria-expanded", n),
            t.classList.toggle("govuk-radios__conditional--hidden", !n)
        }
    }
    ,
    c.prototype.handleClick = function(e) {
        var n = e.target;
        "radio" === n.type && t(document.querySelectorAll('input[type="radio"][aria-controls]'), function(e) {
            var t = e.form === n.form;
            e.name === n.name && t && this.setAttributes(e)
        }
        .bind(this))
    }
    ,
    function() {
        "document"in this && "nextElementSibling"in document.documentElement || Object.defineProperty(Element.prototype, "nextElementSibling", {
            get: function() {
                for (var e = this.nextSibling; e && 1 !== e.nodeType; )
                    e = e.nextSibling;
                return e
            }
        })
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    function() {
        "document"in this && "previousElementSibling"in document.documentElement || Object.defineProperty(Element.prototype, "previousElementSibling", {
            get: function() {
                for (var e = this.previousSibling; e && 1 !== e.nodeType; )
                    e = e.previousSibling;
                return e
            }
        })
    }
    .call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}),
    d.prototype.init = function() {
        "function" == typeof window.matchMedia ? this.setupResponsiveChecks() : this.setup()
    }
    ,
    d.prototype.setupResponsiveChecks = function() {
        this.mql = window.matchMedia("(min-width: 40.0625em)"),
        this.mql.addListener(this.checkMode.bind(this)),
        this.checkMode()
    }
    ,
    d.prototype.checkMode = function() {
        this.mql.matches ? this.setup() : this.teardown()
    }
    ,
    d.prototype.setup = function() {
        var e = this.$module
          , n = this.$tabs
          , i = e.querySelector(".govuk-tabs__list")
          , o = e.querySelectorAll(".govuk-tabs__list-item");
        if (n && i && o) {
            i.setAttribute("role", "tablist"),
            t(o, function(e) {
                e.setAttribute("role", "presentation")
            }),
            t(n, function(e) {
                this.setAttributes(e),
                e.boundTabClick = this.onTabClick.bind(this),
                e.boundTabKeydown = this.onTabKeydown.bind(this),
                e.addEventListener("click", e.boundTabClick, !0),
                e.addEventListener("keydown", e.boundTabKeydown, !0),
                this.hideTab(e)
            }
            .bind(this));
            var r = this.getTab(window.location.hash) || this.$tabs[0];
            this.showTab(r),
            e.boundOnHashChange = this.onHashChange.bind(this),
            window.addEventListener("hashchange", e.boundOnHashChange, !0)
        }
    }
    ,
    d.prototype.teardown = function() {
        var e = this.$module
          , n = this.$tabs
          , i = e.querySelector(".govuk-tabs__list")
          , o = e.querySelectorAll(".govuk-tabs__list-item");
        n && i && o && (i.removeAttribute("role"),
        t(o, function(e) {
            e.removeAttribute("role", "presentation")
        }),
        t(n, function(e) {
            e.removeEventListener("click", e.boundTabClick, !0),
            e.removeEventListener("keydown", e.boundTabKeydown, !0),
            this.unsetAttributes(e)
        }
        .bind(this)),
        window.removeEventListener("hashchange", e.boundOnHashChange, !0))
    }
    ,
    d.prototype.onHashChange = function() {
        var e = window.location.hash
          , t = this.getTab(e);
        if (t) {
            if (this.changingHash)
                return void (this.changingHash = !1);
            var n = this.getCurrentTab();
            this.hideTab(n),
            this.showTab(t),
            t.focus()
        }
    }
    ,
    d.prototype.hideTab = function(e) {
        this.unhighlightTab(e),
        this.hidePanel(e)
    }
    ,
    d.prototype.showTab = function(e) {
        this.highlightTab(e),
        this.showPanel(e)
    }
    ,
    d.prototype.getTab = function(e) {
        return this.$module.querySelector('.govuk-tabs__tab[href="' + e + '"]')
    }
    ,
    d.prototype.setAttributes = function(e) {
        var t = this.getHref(e).slice(1);
        e.setAttribute("id", "tab_" + t),
        e.setAttribute("role", "tab"),
        e.setAttribute("aria-controls", t),
        e.setAttribute("aria-selected", "false"),
        e.setAttribute("tabindex", "-1");
        var n = this.getPanel(e);
        n.setAttribute("role", "tabpanel"),
        n.setAttribute("aria-labelledby", e.id),
        n.classList.add(this.jsHiddenClass)
    }
    ,
    d.prototype.unsetAttributes = function(e) {
        e.removeAttribute("id"),
        e.removeAttribute("role"),
        e.removeAttribute("aria-controls"),
        e.removeAttribute("aria-selected"),
        e.removeAttribute("tabindex");
        var t = this.getPanel(e);
        t.removeAttribute("role"),
        t.removeAttribute("aria-labelledby"),
        t.classList.remove(this.jsHiddenClass)
    }
    ,
    d.prototype.onTabClick = function(e) {
        if (!e.target.classList.contains("govuk-tabs__tab"))
            return !1;
        e.preventDefault();
        var t = e.target
          , n = this.getCurrentTab();
        this.hideTab(n),
        this.showTab(t),
        this.createHistoryEntry(t)
    }
    ,
    d.prototype.createHistoryEntry = function(e) {
        var t = this.getPanel(e)
          , n = t.id;
        t.id = "",
        this.changingHash = !0,
        window.location.hash = this.getHref(e).slice(1),
        t.id = n
    }
    ,
    d.prototype.onTabKeydown = function(e) {
        switch (e.keyCode) {
        case this.keys.left:
        case this.keys.up:
            this.activatePreviousTab(),
            e.preventDefault();
            break;
        case this.keys.right:
        case this.keys.down:
            this.activateNextTab(),
            e.preventDefault()
        }
    }
    ,
    d.prototype.activateNextTab = function() {
        var e = this.getCurrentTab()
          , t = e.parentNode.nextElementSibling;
        if (t)
            var n = t.querySelector(".govuk-tabs__tab");
        n && (this.hideTab(e),
        this.showTab(n),
        n.focus(),
        this.createHistoryEntry(n))
    }
    ,
    d.prototype.activatePreviousTab = function() {
        var e = this.getCurrentTab()
          , t = e.parentNode.previousElementSibling;
        if (t)
            var n = t.querySelector(".govuk-tabs__tab");
        n && (this.hideTab(e),
        this.showTab(n),
        n.focus(),
        this.createHistoryEntry(n))
    }
    ,
    d.prototype.getPanel = function(e) {
        return this.$module.querySelector(this.getHref(e))
    }
    ,
    d.prototype.showPanel = function(e) {
        this.getPanel(e).classList.remove(this.jsHiddenClass)
    }
    ,
    d.prototype.hidePanel = function(e) {
        this.getPanel(e).classList.add(this.jsHiddenClass)
    }
    ,
    d.prototype.unhighlightTab = function(e) {
        e.setAttribute("aria-selected", "false"),
        e.parentNode.classList.remove("govuk-tabs__list-item--selected"),
        e.setAttribute("tabindex", "-1")
    }
    ,
    d.prototype.highlightTab = function(e) {
        e.setAttribute("aria-selected", "true"),
        e.parentNode.classList.add("govuk-tabs__list-item--selected"),
        e.setAttribute("tabindex", "0")
    }
    ,
    d.prototype.getCurrentTab = function() {
        return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab")
    }
    ,
    d.prototype.getHref = function(e) {
        var t = e.getAttribute("href");
        return t.slice(t.indexOf("#"), t.length)
    }
    ,
    e.initAll = f,
    e.Accordion = i,
    e.Button = o,
    e.Details = r,
    e.CharacterCount = a,
    e.Checkboxes = s,
    e.ErrorSummary = l,
    e.Header = u,
    e.Radios = c,
    e.Tabs = d
}),
$(function() {
    $(".fixedsticky").fixedsticky(),
    GOVUKFrontend.initAll()
});
