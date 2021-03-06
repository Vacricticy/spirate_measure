!(function (F, $) {
  var j = F.document,
    M = F.navigator,
    e = F.location,
    k = (function () {
      var n,
        e,
        t,
        i,
        u = function (e, t) {
          return new u.fn.init(e, t, n);
        },
        r = F.jQuery,
        o = F.$,
        s = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        a = /\S/,
        l = /^\s+/,
        c = /\s+$/,
        d = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        f = /^[\],:{}\s]*$/,
        p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        h = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        g = /(?:^|:|,)(?:\s*\[)+/g,
        m = /(webkit)[ \/]([\w.]+)/,
        v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        y = /(msie) ([\w.]+)/,
        b = /(mozilla)(?:.*? rv:([\w.]+))?/,
        x = /-([a-z]|[0-9])/gi,
        w = /^-ms-/,
        T = function (e, t) {
          return (t + "").toUpperCase();
        },
        C = M.userAgent,
        N = Object.prototype.toString,
        E = Object.prototype.hasOwnProperty,
        k = Array.prototype.push,
        _ = Array.prototype.slice,
        S = String.prototype.trim,
        A = Array.prototype.indexOf,
        D = {};
      function L() {
        if (!u.isReady) {
          try {
            j.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(L, 1);
          }
          u.ready();
        }
      }
      return (
        (u.fn = u.prototype = {
          constructor: u,
          init: function (e, t, n) {
            var i, r, o, a;
            if (!e) return this;
            if (e.nodeType)
              return (this.context = this[0] = e), (this.length = 1), this;
            if ("body" === e && !t && j.body)
              return (
                (this.context = j),
                (this[0] = j.body),
                (this.selector = e),
                (this.length = 1),
                this
              );
            if ("string" == typeof e) {
              if (
                !(i =
                  "<" === e.charAt(0) &&
                  ">" === e.charAt(e.length - 1) &&
                  3 <= e.length
                    ? [null, e, null]
                    : s.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1])
                return (
                  (a = (t = t instanceof u ? t[0] : t)
                    ? t.ownerDocument || t
                    : j),
                  (o = d.exec(e))
                    ? u.isPlainObject(t)
                      ? ((e = [j.createElement(o[1])]),
                        u.fn.attr.call(e, t, !0))
                      : (e = [a.createElement(o[1])])
                    : (e = ((o = u.buildFragment([i[1]], [a])).cacheable
                        ? u.clone(o.fragment)
                        : o.fragment
                      ).childNodes),
                  u.merge(this, e)
                );
              if ((r = j.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return n.find(e);
                (this.length = 1), (this[0] = r);
              }
              return (this.context = j), (this.selector = e), this;
            }
            return u.isFunction(e)
              ? n.ready(e)
              : (e.selector !== $ &&
                  ((this.selector = e.selector), (this.context = e.context)),
                u.makeArray(e, this));
          },
          selector: "",
          jquery: "1.7.1",
          length: 0,
          size: function () {
            return this.length;
          },
          toArray: function () {
            return _.call(this, 0);
          },
          get: function (e) {
            return null == e
              ? this.toArray()
              : e < 0
              ? this[this.length + e]
              : this[e];
          },
          pushStack: function (e, t, n) {
            var i = this.constructor();
            return (
              u.isArray(e) ? k.apply(i, e) : u.merge(i, e),
              (i.prevObject = this),
              (i.context = this.context),
              "find" === t
                ? (i.selector = this.selector + (this.selector ? " " : "") + n)
                : t && (i.selector = this.selector + "." + t + "(" + n + ")"),
              i
            );
          },
          each: function (e, t) {
            return u.each(this, e, t);
          },
          ready: function (e) {
            return u.bindReady(), t.add(e), this;
          },
          eq: function (e) {
            return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1);
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          slice: function () {
            return this.pushStack(
              _.apply(this, arguments),
              "slice",
              _.call(arguments).join(",")
            );
          },
          map: function (n) {
            return this.pushStack(
              u.map(this, function (e, t) {
                return n.call(e, t, e);
              })
            );
          },
          end: function () {
            return this.prevObject || this.constructor(null);
          },
          push: k,
          sort: [].sort,
          splice: [].splice,
        }),
        (u.fn.init.prototype = u.fn),
        (u.extend = u.fn.extend = function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a &&
              ((c = a), (a = arguments[1] || {}), (s = 2)),
              "object" == typeof a || u.isFunction(a) || (a = {}),
              l === s && ((a = this), --s);
            s < l;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (n = a[t]),
                  a !== (i = e[t]) &&
                    (c && i && (u.isPlainObject(i) || (r = u.isArray(i)))
                      ? (r
                          ? ((r = !1), (o = n && u.isArray(n) ? n : []))
                          : (o = n && u.isPlainObject(n) ? n : {}),
                        (a[t] = u.extend(c, o, i)))
                      : i !== $ && (a[t] = i));
          return a;
        }),
        u.extend({
          noConflict: function (e) {
            return (
              F.$ === u && (F.$ = o), e && F.jQuery === u && (F.jQuery = r), u
            );
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
            e ? u.readyWait++ : u.ready(!0);
          },
          ready: function (e) {
            if ((!0 === e && !--u.readyWait) || (!0 !== e && !u.isReady)) {
              if (!j.body) return setTimeout(u.ready, 1);
              if ((u.isReady = !0) !== e && 0 < --u.readyWait) return;
              t.fireWith(j, [u]),
                u.fn.trigger && u(j).trigger("ready").off("ready");
            }
          },
          bindReady: function () {
            if (!t) {
              if (
                ((t = u.Callbacks("once memory")), "complete" === j.readyState)
              )
                return setTimeout(u.ready, 1);
              if (j.addEventListener)
                j.addEventListener("DOMContentLoaded", i, !1),
                  F.addEventListener("load", u.ready, !1);
              else if (j.attachEvent) {
                j.attachEvent("onreadystatechange", i),
                  F.attachEvent("onload", u.ready);
                var e = !1;
                try {
                  e = null == F.frameElement;
                } catch (e) {}
                j.documentElement.doScroll && e && L();
              }
            }
          },
          isFunction: function (e) {
            return "function" === u.type(e);
          },
          isArray:
            Array.isArray ||
            function (e) {
              return "array" === u.type(e);
            },
          isWindow: function (e) {
            return e && "object" == typeof e && "setInterval" in e;
          },
          isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          },
          type: function (e) {
            return null == e ? String(e) : D[N.call(e)] || "object";
          },
          isPlainObject: function (e) {
            if (!e || "object" !== u.type(e) || e.nodeType || u.isWindow(e))
              return !1;
            try {
              if (
                e.constructor &&
                !E.call(e, "constructor") &&
                !E.call(e.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (e) {
              return !1;
            }
            var t;
            for (t in e);
            return t === $ || E.call(e, t);
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          error: function (e) {
            throw new Error(e);
          },
          parseJSON: function (e) {
            return "string" == typeof e && e
              ? ((e = u.trim(e)),
                F.JSON && F.JSON.parse
                  ? F.JSON.parse(e)
                  : f.test(e.replace(p, "@").replace(h, "]").replace(g, ""))
                  ? new Function("return " + e)()
                  : void u.error("Invalid JSON: " + e))
              : null;
          },
          parseXML: function (e) {
            var t;
            try {
              F.DOMParser
                ? (t = new DOMParser().parseFromString(e, "text/xml"))
                : (((t = new ActiveXObject("Microsoft.XMLDOM")).async =
                    "false"),
                  t.loadXML(e));
            } catch (e) {
              t = $;
            }
            return (
              (t &&
                t.documentElement &&
                !t.getElementsByTagName("parsererror").length) ||
                u.error("Invalid XML: " + e),
              t
            );
          },
          noop: function () {},
          globalEval: function (e) {
            e &&
              a.test(e) &&
              (
                F.execScript ||
                function (e) {
                  F.eval.call(F, e);
                }
              )(e);
          },
          camelCase: function (e) {
            return e.replace(w, "ms-").replace(x, T);
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
          },
          each: function (e, t, n) {
            var i,
              r = 0,
              o = e.length,
              a = o === $ || u.isFunction(e);
            if (n)
              if (a) {
                for (i in e) if (!1 === t.apply(e[i], n)) break;
              } else for (; r < o && !1 !== t.apply(e[r++], n); );
            else if (a) {
              for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            } else for (; r < o && !1 !== t.call(e[r], r, e[r++]); );
            return e;
          },
          trim: S
            ? function (e) {
                return null == e ? "" : S.call(e);
              }
            : function (e) {
                return null == e
                  ? ""
                  : e.toString().replace(l, "").replace(c, "");
              },
          makeArray: function (e, t) {
            var n = t || [];
            if (null != e) {
              var i = u.type(e);
              null == e.length ||
              "string" === i ||
              "function" === i ||
              "regexp" === i ||
              u.isWindow(e)
                ? k.call(n, e)
                : u.merge(n, e);
            }
            return n;
          },
          inArray: function (e, t, n) {
            var i;
            if (t) {
              if (A) return A.call(t, e, n);
              for (
                i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
                n < i;
                n++
              )
                if (n in t && t[n] === e) return n;
            }
            return -1;
          },
          merge: function (e, t) {
            var n = e.length,
              i = 0;
            if ("number" == typeof t.length)
              for (var r = t.length; i < r; i++) e[n++] = t[i];
            else for (; t[i] !== $; ) e[n++] = t[i++];
            return (e.length = n), e;
          },
          grep: function (e, t, n) {
            var i = [];
            n = !!n;
            for (var r = 0, o = e.length; r < o; r++)
              n !== !!t(e[r], r) && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = [],
              a = 0,
              s = e.length;
            if (
              e instanceof u ||
              (s !== $ &&
                "number" == typeof s &&
                ((0 < s && e[0] && e[s - 1]) || 0 === s || u.isArray(e)))
            )
              for (; a < s; a++)
                null != (i = t(e[a], a, n)) && (o[o.length] = i);
            else for (r in e) null != (i = t(e[r], r, n)) && (o[o.length] = i);
            return o.concat.apply([], o);
          },
          guid: 1,
          proxy: function (e, t) {
            if ("string" == typeof t) {
              var n = e[t];
              (t = e), (e = n);
            }
            if (!u.isFunction(e)) return $;
            var i = _.call(arguments, 2),
              r = function () {
                return e.apply(t, i.concat(_.call(arguments)));
              };
            return (r.guid = e.guid = e.guid || r.guid || u.guid++), r;
          },
          access: function (e, t, n, i, r, o) {
            var a = e.length;
            if ("object" == typeof t) {
              for (var s in t) u.access(e, s, t[s], i, r, n);
              return e;
            }
            if (n !== $) {
              i = !o && i && u.isFunction(n);
              for (var l = 0; l < a; l++)
                r(e[l], t, i ? n.call(e[l], l, r(e[l], t)) : n, o);
              return e;
            }
            return a ? r(e[0], t) : $;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (e) {
            e = e.toLowerCase();
            var t =
              m.exec(e) ||
              v.exec(e) ||
              y.exec(e) ||
              (e.indexOf("compatible") < 0 && b.exec(e)) ||
              [];
            return { browser: t[1] || "", version: t[2] || "0" };
          },
          sub: function () {
            function n(e, t) {
              return new n.fn.init(e, t);
            }
            u.extend(!0, n, this),
              (n.superclass = this),
              (((n.fn = n.prototype = this()).constructor = n).sub = this.sub),
              (n.fn.init = function (e, t) {
                return (
                  t && t instanceof u && !(t instanceof n) && (t = n(t)),
                  u.fn.init.call(this, e, t, i)
                );
              }),
              (n.fn.init.prototype = n.fn);
            var i = n(j);
            return n;
          },
          browser: {},
        }),
        u.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (e, t) {
            D["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        (e = u.uaMatch(C)).browser &&
          ((u.browser[e.browser] = !0), (u.browser.version = e.version)),
        u.browser.webkit && (u.browser.safari = !0),
        a.test(" ") && ((l = /^[\s\xA0]+/), (c = /[\s\xA0]+$/)),
        (n = u(j)),
        j.addEventListener
          ? (i = function () {
              j.removeEventListener("DOMContentLoaded", i, !1), u.ready();
            })
          : j.attachEvent &&
            (i = function () {
              "complete" === j.readyState &&
                (j.detachEvent("onreadystatechange", i), u.ready());
            }),
        u
      );
    })(),
    p = {};
  k.Callbacks = function (o) {
    o = o
      ? p[o] ||
        (function (e) {
          var t,
            n,
            i = (p[e] = {});
          for (t = 0, n = (e = e.split(/\s+/)).length; t < n; t++) i[e[t]] = !0;
          return i;
        })(o)
      : {};
    var n,
      r,
      i,
      a,
      s,
      l = [],
      c = [],
      u = function (e) {
        var t, n, i, r;
        for (t = 0, n = e.length; t < n; t++)
          (i = e[t]),
            "array" === (r = k.type(i))
              ? u(i)
              : "function" === r && ((o.unique && f.has(i)) || l.push(i));
      },
      d = function (e, t) {
        for (
          t = t || [],
            n = !o.memory || [e, t],
            r = !0,
            s = i || 0,
            i = 0,
            a = l.length;
          l && s < a;
          s++
        )
          if (!1 === l[s].apply(e, t) && o.stopOnFalse) {
            n = !0;
            break;
          }
        (r = !1),
          l &&
            (o.once
              ? !0 === n
                ? f.disable()
                : (l = [])
              : c && c.length && ((n = c.shift()), f.fireWith(n[0], n[1])));
      },
      f = {
        add: function () {
          if (l) {
            var e = l.length;
            u(arguments),
              r ? (a = l.length) : n && !0 !== n && ((i = e), d(n[0], n[1]));
          }
          return this;
        },
        remove: function () {
          if (l)
            for (var e = arguments, t = 0, n = e.length; t < n; t++)
              for (
                var i = 0;
                i < l.length &&
                (e[t] !== l[i] ||
                  (r && i <= a && (a--, i <= s && s--),
                  l.splice(i--, 1),
                  !o.unique));
                i++
              );
          return this;
        },
        has: function (e) {
          if (l)
            for (var t = 0, n = l.length; t < n; t++) if (e === l[t]) return !0;
          return !1;
        },
        empty: function () {
          return (l = []), this;
        },
        disable: function () {
          return (l = c = n = $), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (c = $), (n && !0 !== n) || f.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            c && (r ? o.once || c.push([e, t]) : (o.once && n) || d(e, t)), this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return f;
  };
  var u = [].slice;
  k.extend({
    Deferred: function (e) {
      var t,
        n = k.Callbacks("once memory"),
        i = k.Callbacks("once memory"),
        r = k.Callbacks("memory"),
        o = "pending",
        a = { resolve: n, reject: i, notify: r },
        s = {
          done: n.add,
          fail: i.add,
          progress: r.add,
          state: function () {
            return o;
          },
          isResolved: n.fired,
          isRejected: i.fired,
          then: function (e, t, n) {
            return l.done(e).fail(t).progress(n), this;
          },
          always: function () {
            return l.done.apply(l, arguments).fail.apply(l, arguments), this;
          },
          pipe: function (e, t, n) {
            return k
              .Deferred(function (o) {
                k.each(
                  {
                    done: [e, "resolve"],
                    fail: [t, "reject"],
                    progress: [n, "notify"],
                  },
                  function (e, t) {
                    var n,
                      i = t[0],
                      r = t[1];
                    k.isFunction(i)
                      ? l[e](function () {
                          (n = i.apply(this, arguments)) &&
                          k.isFunction(n.promise)
                            ? n.promise().then(o.resolve, o.reject, o.notify)
                            : o[r + "With"](this === l ? o : this, [n]);
                        })
                      : l[e](o[r]);
                  }
                );
              })
              .promise();
          },
          promise: function (e) {
            if (null == e) e = s;
            else for (var t in s) e[t] = s[t];
            return e;
          },
        },
        l = s.promise({});
      for (t in a) (l[t] = a[t].fire), (l[t + "With"] = a[t].fireWith);
      return (
        l
          .done(
            function () {
              o = "resolved";
            },
            i.disable,
            r.lock
          )
          .fail(
            function () {
              o = "rejected";
            },
            n.disable,
            r.lock
          ),
        e && e.call(l, l),
        l
      );
    },
    when: function (e) {
      var n = u.call(arguments, 0),
        t = 0,
        i = n.length,
        r = new Array(i),
        o = i,
        a = i <= 1 && e && k.isFunction(e.promise) ? e : k.Deferred(),
        s = a.promise();
      function l(t) {
        return function (e) {
          (n[t] = 1 < arguments.length ? u.call(arguments, 0) : e),
            --o || a.resolveWith(a, n);
        };
      }
      function c(t) {
        return function (e) {
          (r[t] = 1 < arguments.length ? u.call(arguments, 0) : e),
            a.notifyWith(s, r);
        };
      }
      if (1 < i) {
        for (; t < i; t++)
          n[t] && n[t].promise && k.isFunction(n[t].promise)
            ? n[t].promise().then(l(t), a.reject, c(t))
            : --o;
        o || a.resolveWith(a, n);
      } else a !== e && a.resolveWith(a, i ? [e] : []);
      return s;
    },
  }),
    (k.support = (function () {
      var c,
        e,
        t,
        n,
        i,
        r,
        o,
        a,
        u,
        s,
        l,
        d,
        f = j.createElement("div");
      j.documentElement;
      if (
        (f.setAttribute("className", "t"),
        (f.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (e = f.getElementsByTagName("*")),
        (t = f.getElementsByTagName("a")[0]),
        !e || !e.length || !t)
      )
        return {};
      (i = (n = j.createElement("select")).appendChild(
        j.createElement("option")
      )),
        (r = f.getElementsByTagName("input")[0]),
        (c = {
          leadingWhitespace: 3 === f.firstChild.nodeType,
          tbody: !f.getElementsByTagName("tbody").length,
          htmlSerialize: !!f.getElementsByTagName("link").length,
          style: /top/.test(t.getAttribute("style")),
          hrefNormalized: "/a" === t.getAttribute("href"),
          opacity: /^0.55/.test(t.style.opacity),
          cssFloat: !!t.style.cssFloat,
          checkOn: "on" === r.value,
          optSelected: i.selected,
          getSetAttribute: "t" !== f.className,
          enctype: !!j.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== j.createElement("nav").cloneNode(!0).outerHTML,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
        }),
        (r.checked = !0),
        (c.noCloneChecked = r.cloneNode(!0).checked),
        (n.disabled = !0),
        (c.optDisabled = !i.disabled);
      try {
        delete f.test;
      } catch (e) {
        c.deleteExpando = !1;
      }
      if (
        (!f.addEventListener &&
          f.attachEvent &&
          f.fireEvent &&
          (f.attachEvent("onclick", function () {
            c.noCloneEvent = !1;
          }),
          f.cloneNode(!0).fireEvent("onclick")),
        ((r = j.createElement("input")).value = "t"),
        r.setAttribute("type", "radio"),
        (c.radioValue = "t" === r.value),
        r.setAttribute("checked", "checked"),
        f.appendChild(r),
        (a = j.createDocumentFragment()).appendChild(f.lastChild),
        (c.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (c.appendChecked = r.checked),
        a.removeChild(r),
        a.appendChild(f),
        (f.innerHTML = ""),
        F.getComputedStyle &&
          (((o = j.createElement("div")).style.width = "0"),
          (o.style.marginRight = "0"),
          (f.style.width = "2px"),
          f.appendChild(o),
          (c.reliableMarginRight =
            0 ===
            (parseInt(
              (F.getComputedStyle(o, null) || { marginRight: 0 }).marginRight,
              10
            ) || 0))),
        f.attachEvent)
      )
        for (l in { submit: 1, change: 1, focusin: 1 })
          (d = (s = "on" + l) in f) ||
            (f.setAttribute(s, "return;"), (d = "function" == typeof f[s])),
            (c[l + "Bubbles"] = d);
      return (
        a.removeChild(f),
        (a = n = i = o = f = r = null),
        k(function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = j.getElementsByTagName("body")[0];
          l &&
            ((a = "visibility:hidden;border:0;"),
            (s =
              "style='" +
              (o =
                "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;") +
              "border:5px solid #000;padding:0;'"),
            ((e = j.createElement("div")).style.cssText =
              a + "width:0;height:0;position:static;top:0;margin-top:1px"),
            l.insertBefore(e, l.firstChild),
            (f = j.createElement("div")),
            e.appendChild(f),
            (f.innerHTML =
              "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
            (u = f.getElementsByTagName("td")),
            (d = 0 === u[0].offsetHeight),
            (u[0].style.display = ""),
            (u[1].style.display = "none"),
            (c.reliableHiddenOffsets = d && 0 === u[0].offsetHeight),
            (f.innerHTML = ""),
            (f.style.width = f.style.paddingLeft = "1px"),
            (k.boxModel = c.boxModel = 2 === f.offsetWidth),
            void 0 !== f.style.zoom &&
              ((f.style.display = "inline"),
              (f.style.zoom = 1),
              (c.inlineBlockNeedsLayout = 2 === f.offsetWidth),
              (f.style.display = ""),
              (f.innerHTML = "<div style='width:4px;'></div>"),
              (c.shrinkWrapBlocks = 2 !== f.offsetWidth)),
            (f.style.cssText = o + a),
            (f.innerHTML =
              "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
            (n = (t = f.firstChild).firstChild),
            (i = t.nextSibling.firstChild.firstChild),
            (r = {
              doesNotAddBorder: 5 !== n.offsetTop,
              doesAddBorderForTableAndCells: 5 === i.offsetTop,
            }),
            (n.style.position = "fixed"),
            (n.style.top = "20px"),
            (r.fixedPosition = 20 === n.offsetTop || 15 === n.offsetTop),
            (n.style.position = n.style.top = ""),
            (t.style.overflow = "hidden"),
            (t.style.position = "relative"),
            (r.subtractsBorderForOverflowNotVisible = -5 === n.offsetTop),
            (r.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop),
            l.removeChild(e),
            (f = e = null),
            k.extend(c, r));
        }),
        c
      );
    })());
  var r = /^(?:\{.*\}|\[.*\])$/,
    o = /([A-Z])/g;
  function l(e, t, n) {
    if (n === $ && 1 === e.nodeType) {
      var i = "data-" + t.replace(o, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : k.isNumeric(n)
                ? parseFloat(n)
                : r.test(n)
                ? k.parseJSON(n)
                : n));
        } catch (e) {}
        k.data(e, t, n);
      } else n = $;
    }
    return n;
  }
  function d(e) {
    for (var t in e)
      if (("data" !== t || !k.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function a(e, t, n) {
    var i = t + "defer",
      r = t + "queue",
      o = t + "mark",
      a = k._data(e, i);
    !a ||
      ("queue" !== n && k._data(e, r)) ||
      ("mark" !== n && k._data(e, o)) ||
      setTimeout(function () {
        k._data(e, r) || k._data(e, o) || (k.removeData(e, i, !0), a.fire());
      }, 0);
  }
  k.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (k.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? k.cache[e[k.expando]] : e[k.expando]) && !d(e);
    },
    data: function (e, t, n, i) {
      if (k.acceptData(e)) {
        var r,
          o,
          a,
          s = k.expando,
          l = "string" == typeof t,
          c = e.nodeType,
          u = c ? k.cache : e,
          d = c ? e[s] : e[s] && s,
          f = "events" === t;
        if ((d && u[d] && (f || i || u[d].data)) || !l || n !== $)
          return (
            d || (c ? (e[s] = d = ++k.uuid) : (d = s)),
            u[d] || ((u[d] = {}), c || (u[d].toJSON = k.noop)),
            ("object" != typeof t && "function" != typeof t) ||
              (i
                ? (u[d] = k.extend(u[d], t))
                : (u[d].data = k.extend(u[d].data, t))),
            (r = o = u[d]),
            i || (o.data || (o.data = {}), (o = o.data)),
            n !== $ && (o[k.camelCase(t)] = n),
            f && !o[t]
              ? r.events
              : (l ? null == (a = o[t]) && (a = o[k.camelCase(t)]) : (a = o), a)
          );
      }
    },
    removeData: function (e, t, n) {
      if (k.acceptData(e)) {
        var i,
          r,
          o,
          a = k.expando,
          s = e.nodeType,
          l = s ? k.cache : e,
          c = s ? e[a] : a;
        if (l[c]) {
          if (t && (i = n ? l[c] : l[c].data)) {
            k.isArray(t) ||
              (t =
                t in i ? [t] : (t = k.camelCase(t)) in i ? [t] : t.split(" "));
            for (r = 0, o = t.length; r < o; r++) delete i[t[r]];
            if (!(n ? d : k.isEmptyObject)(i)) return;
          }
          (n || (delete l[c].data, d(l[c]))) &&
            (k.support.deleteExpando || !l.setInterval
              ? delete l[c]
              : (l[c] = null),
            s &&
              (k.support.deleteExpando
                ? delete e[a]
                : e.removeAttribute
                ? e.removeAttribute(a)
                : (e[a] = null)));
        }
      }
    },
    _data: function (e, t, n) {
      return k.data(e, t, n, !0);
    },
    acceptData: function (e) {
      if (e.nodeName) {
        var t = k.noData[e.nodeName.toLowerCase()];
        if (t) return !(!0 === t || e.getAttribute("classid") !== t);
      }
      return !0;
    },
  }),
    k.fn.extend({
      data: function (n, i) {
        var r,
          e,
          t,
          o = null;
        if (void 0 === n) {
          if (
            this.length &&
            ((o = k.data(this[0])),
            1 === this[0].nodeType && !k._data(this[0], "parsedAttrs"))
          ) {
            for (var a = 0, s = (e = this[0].attributes).length; a < s; a++)
              0 === (t = e[a].name).indexOf("data-") &&
                ((t = k.camelCase(t.substring(5))), l(this[0], t, o[t]));
            k._data(this[0], "parsedAttrs", !0);
          }
          return o;
        }
        return "object" == typeof n
          ? this.each(function () {
              k.data(this, n);
            })
          : (((r = n.split("."))[1] = r[1] ? "." + r[1] : ""),
            i === $
              ? ((o = this.triggerHandler("getData" + r[1] + "!", [r[0]])) ===
                  $ &&
                  this.length &&
                  ((o = k.data(this[0], n)), (o = l(this[0], n, o))),
                o === $ && r[1] ? this.data(r[0]) : o)
              : this.each(function () {
                  var e = k(this),
                    t = [r[0], i];
                  e.triggerHandler("setData" + r[1] + "!", t),
                    k.data(this, n, i),
                    e.triggerHandler("changeData" + r[1] + "!", t);
                }));
      },
      removeData: function (e) {
        return this.each(function () {
          k.removeData(this, e);
        });
      },
    }),
    k.extend({
      _mark: function (e, t) {
        e &&
          ((t = (t || "fx") + "mark"), k._data(e, t, (k._data(e, t) || 0) + 1));
      },
      _unmark: function (e, t, n) {
        if ((!0 !== e && ((n = t), (t = e), (e = !1)), t)) {
          var i = (n = n || "fx") + "mark",
            r = e ? 0 : (k._data(t, i) || 1) - 1;
          r ? k._data(t, i, r) : (k.removeData(t, i, !0), a(t, n, "mark"));
        }
      },
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = k._data(e, t)),
            n &&
              (!i || k.isArray(n)
                ? (i = k._data(e, t, k.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          i = n.shift(),
          r = {};
        "inprogress" === i && (i = n.shift()),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            k._data(e, t + ".run", r),
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              r
            )),
          n.length ||
            (k.removeData(e, t + "queue " + t + ".run", !0), a(e, t, "queue"));
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        return (
          "string" != typeof t && ((n = t), (t = "fx")),
          n === $
            ? k.queue(this[0], t)
            : this.each(function () {
                var e = k.queue(this, t, n);
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      delay: function (i, e) {
        return (
          (i = (k.fx && k.fx.speeds[i]) || i),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = setTimeout(e, i);
            t.stop = function () {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        "string" != typeof e && (e, (e = $)), (e = e || "fx");
        var n,
          i = k.Deferred(),
          r = this,
          o = r.length,
          a = 1,
          s = e + "defer",
          l = e + "queue",
          c = e + "mark";
        function u() {
          --a || i.resolveWith(r, [r]);
        }
        for (; o--; )
          (n =
            k.data(r[o], s, $, !0) ||
            ((k.data(r[o], l, $, !0) || k.data(r[o], c, $, !0)) &&
              k.data(r[o], s, k.Callbacks("once memory"), !0))) &&
            (a++, n.add(u));
        return u(), i.promise();
      },
    });
  var c,
    f,
    i,
    h = /[\n\t\r]/g,
    g = /\s+/,
    n = /\r/g,
    s = /^(?:button|input)$/i,
    m = /^(?:button|input|object|select|textarea)$/i,
    v = /^a(?:rea)?$/i,
    y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    b = k.support.getSetAttribute;
  k.fn.extend({
    attr: function (e, t) {
      return k.access(this, e, t, !0, k.attr);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return k.access(this, e, t, !0, k.prop);
    },
    removeProp: function (e) {
      return (
        (e = k.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = $), delete this[e];
          } catch (e) {}
        })
      );
    },
    addClass: function (t) {
      var e, n, i, r, o, a, s;
      if (k.isFunction(t))
        return this.each(function (e) {
          k(this).addClass(t.call(this, e, this.className));
        });
      if (t && "string" == typeof t)
        for (e = t.split(g), n = 0, i = this.length; n < i; n++)
          if (1 === (r = this[n]).nodeType)
            if (r.className || 1 !== e.length) {
              for (o = " " + r.className + " ", a = 0, s = e.length; a < s; a++)
                ~o.indexOf(" " + e[a] + " ") || (o += e[a] + " ");
              r.className = k.trim(o);
            } else r.className = t;
      return this;
    },
    removeClass: function (t) {
      var e, n, i, r, o, a, s;
      if (k.isFunction(t))
        return this.each(function (e) {
          k(this).removeClass(t.call(this, e, this.className));
        });
      if ((t && "string" == typeof t) || t === $)
        for (e = (t || "").split(g), n = 0, i = this.length; n < i; n++)
          if (1 === (r = this[n]).nodeType && r.className)
            if (t) {
              for (
                o = (" " + r.className + " ").replace(h, " "),
                  a = 0,
                  s = e.length;
                a < s;
                a++
              )
                o = o.replace(" " + e[a] + " ", " ");
              r.className = k.trim(o);
            } else r.className = "";
      return this;
    },
    toggleClass: function (o, a) {
      var s = typeof o,
        l = "boolean" == typeof a;
      return k.isFunction(o)
        ? this.each(function (e) {
            k(this).toggleClass(o.call(this, e, this.className, a), a);
          })
        : this.each(function () {
            if ("string" === s)
              for (
                var e, t = 0, n = k(this), i = a, r = o.split(g);
                (e = r[t++]);

              )
                (i = l ? i : !n.hasClass(e)),
                  n[i ? "addClass" : "removeClass"](e);
            else
              ("undefined" !== s && "boolean" !== s) ||
                (this.className &&
                  k._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === o
                    ? ""
                    : k._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
        if (
          1 === this[n].nodeType &&
          -1 < (" " + this[n].className + " ").replace(h, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
    val: function (i) {
      var r,
        e,
        o,
        t = this[0];
      return arguments.length
        ? ((o = k.isFunction(i)),
          this.each(function (e) {
            var t,
              n = k(this);
            1 === this.nodeType &&
              (null == (t = o ? i.call(this, e, n.val()) : i)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : k.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.nodeName.toLowerCase()] ||
                k.valHooks[this.type]) &&
                "set" in r &&
                r.set(this, t, "value") !== $) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.nodeName.toLowerCase()] || k.valHooks[t.type]) &&
          "get" in r &&
          (e = r.get(t, "value")) !== $
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(n, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r,
              o = e.selectedIndex,
              a = [],
              s = e.options,
              l = "select-one" === e.type;
            if (o < 0) return null;
            for (n = l ? o : 0, i = l ? o + 1 : s.length; n < i; n++)
              if (
                (r = s[n]).selected &&
                (k.support.optDisabled
                  ? !r.disabled
                  : null === r.getAttribute("disabled")) &&
                (!r.parentNode.disabled ||
                  !k.nodeName(r.parentNode, "optgroup"))
              ) {
                if (((t = k(r).val()), l)) return t;
                a.push(t);
              }
            return l && !a.length && s.length ? k(s[o]).val() : a;
          },
          set: function (e, t) {
            var n = k.makeArray(t);
            return (
              k(e)
                .find("option")
                .each(function () {
                  this.selected = 0 <= k.inArray(k(this).val(), n);
                }),
              n.length || (e.selectedIndex = -1),
              n
            );
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (e, t, n, i) {
        var r,
          o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return i && t in k.attrFn
            ? k(e)[t](n)
            : void 0 === e.getAttribute
            ? k.prop(e, t, n)
            : ((a = 1 !== s || !k.isXMLDoc(e)) &&
                ((t = t.toLowerCase()),
                (o = k.attrHooks[t] || (y.test(t) ? f : c))),
              n !== $
                ? null === n
                  ? void k.removeAttr(e, t)
                  : o && "set" in o && a && (r = o.set(e, n, t)) !== $
                  ? r
                  : (e.setAttribute(t, "" + n), n)
                : o && "get" in o && a && null !== (r = o.get(e, t))
                ? r
                : null === (r = e.getAttribute(t))
                ? $
                : r);
      },
      removeAttr: function (e, t) {
        var n,
          i,
          r,
          o,
          a = 0;
        if (t && 1 === e.nodeType)
          for (o = (i = t.toLowerCase().split(g)).length; a < o; a++)
            (r = i[a]) &&
              ((n = k.propFix[r] || r),
              k.attr(e, r, ""),
              e.removeAttribute(b ? r : n),
              y.test(r) && n in e && (e[n] = !1));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (s.test(e.nodeName) && e.parentNode)
              k.error("type property can't be changed");
            else if (
              !k.support.radioValue &&
              "radio" === t &&
              k.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
        value: {
          get: function (e, t) {
            return c && k.nodeName(e, "button")
              ? c.get(e, t)
              : t in e
              ? e.value
              : null;
          },
          set: function (e, t, n) {
            if (c && k.nodeName(e, "button")) return c.set(e, t, n);
            e.value = t;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 !== o || !k.isXMLDoc(e)) &&
              ((t = k.propFix[t] || t), (r = k.propHooks[t])),
            n !== $
              ? r && "set" in r && (i = r.set(e, n, t)) !== $
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = e.getAttributeNode("tabindex");
            return t && t.specified
              ? parseInt(t.value, 10)
              : m.test(e.nodeName) || (v.test(e.nodeName) && e.href)
              ? 0
              : $;
          },
        },
      },
    }),
    (k.attrHooks.tabindex = k.propHooks.tabIndex),
    (f = {
      get: function (e, t) {
        var n,
          i = k.prop(e, t);
        return !0 === i ||
          ("boolean" != typeof i &&
            (n = e.getAttributeNode(t)) &&
            !1 !== n.nodeValue)
          ? t.toLowerCase()
          : $;
      },
      set: function (e, t, n) {
        var i;
        return (
          !1 === t
            ? k.removeAttr(e, n)
            : ((i = k.propFix[n] || n) in e && (e[i] = !0),
              e.setAttribute(n, n.toLowerCase())),
          n
        );
      },
    }),
    b ||
      ((i = { name: !0, id: !0 }),
      (c = k.valHooks.button = {
        get: function (e, t) {
          var n;
          return (n = e.getAttributeNode(t)) &&
            (i[t] ? "" !== n.nodeValue : n.specified)
            ? n.nodeValue
            : $;
        },
        set: function (e, t, n) {
          var i = e.getAttributeNode(n);
          return (
            i || ((i = j.createAttribute(n)), e.setAttributeNode(i)),
            (i.nodeValue = t + "")
          );
        },
      }),
      (k.attrHooks.tabindex.set = c.set),
      k.each(["width", "height"], function (e, n) {
        k.attrHooks[n] = k.extend(k.attrHooks[n], {
          set: function (e, t) {
            if ("" === t) return e.setAttribute(n, "auto"), t;
          },
        });
      }),
      (k.attrHooks.contenteditable = {
        get: c.get,
        set: function (e, t, n) {
          "" === t && (t = "false"), c.set(e, t, n);
        },
      })),
    k.support.hrefNormalized ||
      k.each(["href", "src", "width", "height"], function (e, n) {
        k.attrHooks[n] = k.extend(k.attrHooks[n], {
          get: function (e) {
            var t = e.getAttribute(n, 2);
            return null === t ? $ : t;
          },
        });
      }),
    k.support.style ||
      (k.attrHooks.style = {
        get: function (e) {
          return e.style.cssText.toLowerCase() || $;
        },
        set: function (e, t) {
          return (e.style.cssText = "" + t);
        },
      }),
    k.support.optSelected ||
      (k.propHooks.selected = k.extend(k.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      })),
    k.support.enctype || (k.propFix.enctype = "encoding"),
    k.support.checkOn ||
      k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
    k.each(["radio", "checkbox"], function () {
      k.valHooks[this] = k.extend(k.valHooks[this], {
        set: function (e, t) {
          if (k.isArray(t)) return (e.checked = 0 <= k.inArray(k(e).val(), t));
        },
      });
    });
  var x = /^(?:textarea|input|select)$/i,
    w = /^([^\.]*)?(?:\.(.+))?$/,
    t = /\bhover(\.\S+)?\b/,
    T = /^key/,
    C = /^(?:mouse|contextmenu)|click/,
    N = /^(?:focusinfocus|focusoutblur)$/,
    E = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    _ = function (e) {
      return k.event.special.hover
        ? e
        : e.replace(t, "mouseenter$1 mouseleave$1");
    };
  function S() {
    return !1;
  }
  function A() {
    return !0;
  }
  (k.event = {
    add: function (e, t, n, i, r) {
      var o, a, s, l, c, u, d, f, p, h, g;
      if (3 !== e.nodeType && 8 !== e.nodeType && t && n && (o = k._data(e))) {
        for (
          n.handler && (n = (p = n).handler),
            n.guid || (n.guid = k.guid++),
            (s = o.events) || (o.events = s = {}),
            (a = o.handle) ||
              ((o.handle = a = function (e) {
                return void 0 === k || (e && k.event.triggered === e.type)
                  ? $
                  : k.event.dispatch.apply(a.elem, arguments);
              }),
              (a.elem = e)),
            t = k.trim(_(t)).split(" "),
            l = 0;
          l < t.length;
          l++
        )
          (u = (c = w.exec(t[l]) || [])[1]),
            (d = (c[2] || "").split(".").sort()),
            (g = k.event.special[u] || {}),
            (u = (r ? g.delegateType : g.bindType) || u),
            (g = k.event.special[u] || {}),
            (f = k.extend(
              {
                type: u,
                origType: c[1],
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                quick:
                  ((m = r),
                  (v = void 0),
                  (v = E.exec(m)),
                  v &&
                    ((v[1] = (v[1] || "").toLowerCase()),
                    (v[3] =
                      v[3] && new RegExp("(?:^|\\s)" + v[3] + "(?:\\s|$)"))),
                  v),
                namespace: d.join("."),
              },
              p
            )),
            (h = s[u]) ||
              (((h = s[u] = []).delegateCount = 0),
              (g.setup && !1 !== g.setup.call(e, i, d, a)) ||
                (e.addEventListener
                  ? e.addEventListener(u, a, !1)
                  : e.attachEvent && e.attachEvent("on" + u, a))),
            g.add &&
              (g.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
            r ? h.splice(h.delegateCount++, 0, f) : h.push(f),
            (k.event.global[u] = !0);
        var m, v;
        e = null;
      }
    },
    global: {},
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        h,
        g,
        m,
        v = k.hasData(e) && k._data(e);
      if (v && (f = v.events)) {
        for (t = k.trim(_(t || "")).split(" "), o = 0; o < t.length; o++)
          if (((s = l = (a = w.exec(t[o]) || [])[1]), (c = a[2]), s)) {
            for (
              p = k.event.special[s] || {},
                u = (g = f[(s = (i ? p.delegateType : p.bindType) || s)] || [])
                  .length,
                c = c
                  ? new RegExp(
                      "(^|\\.)" +
                        c.split(".").sort().join("\\.(?:.*\\.)?") +
                        "(\\.|$)"
                    )
                  : null,
                d = 0;
              d < g.length;
              d++
            )
              (m = g[d]),
                (!r && l !== m.origType) ||
                  (n && n.guid !== m.guid) ||
                  (c && !c.test(m.namespace)) ||
                  (i && i !== m.selector && ("**" !== i || !m.selector)) ||
                  (g.splice(d--, 1),
                  m.selector && g.delegateCount--,
                  p.remove && p.remove.call(e, m));
            0 === g.length &&
              u !== g.length &&
              ((p.teardown && !1 !== p.teardown.call(e, c)) ||
                k.removeEvent(e, s, v.handle),
              delete f[s]);
          } else for (s in f) k.event.remove(e, s + t[o], n, i, !0);
        k.isEmptyObject(f) &&
          ((h = v.handle) && (h.elem = null),
          k.removeData(e, ["events", "handle"], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (e, t, n, i) {
      if (!n || (3 !== n.nodeType && 8 !== n.nodeType)) {
        var r,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          p,
          h = e.type || e,
          g = [];
        if (
          !N.test(h + k.event.triggered) &&
          (0 <= h.indexOf("!") && ((h = h.slice(0, -1)), (o = !0)),
          0 <= h.indexOf(".") && ((h = (g = h.split(".")).shift()), g.sort()),
          (n && !k.event.customEvent[h]) || k.event.global[h])
        )
          if (
            (((e =
              "object" == typeof e
                ? e[k.expando]
                  ? e
                  : new k.Event(h, e)
                : new k.Event(h)).type = h),
            (e.isTrigger = !0),
            (e.exclusive = o),
            (e.namespace = g.join(".")),
            (e.namespace_re = e.namespace
              ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)")
              : null),
            (c = h.indexOf(":") < 0 ? "on" + h : ""),
            n)
          ) {
            if (
              ((e.result = $),
              e.target || (e.target = n),
              (t = null != t ? k.makeArray(t) : []).unshift(e),
              !(u = k.event.special[h] || {}).trigger ||
                !1 !== u.trigger.apply(n, t))
            ) {
              if (
                ((f = [[n, u.bindType || h]]),
                !i && !u.noBubble && !k.isWindow(n))
              ) {
                for (
                  p = u.delegateType || h,
                    s = N.test(p + h) ? n : n.parentNode,
                    l = null;
                  s;
                  s = s.parentNode
                )
                  f.push([s, p]), (l = s);
                l &&
                  l === n.ownerDocument &&
                  f.push([l.defaultView || l.parentWindow || F, p]);
              }
              for (a = 0; a < f.length && !e.isPropagationStopped(); a++)
                (s = f[a][0]),
                  (e.type = f[a][1]),
                  (d =
                    (k._data(s, "events") || {})[e.type] &&
                    k._data(s, "handle")) && d.apply(s, t),
                  (d = c && s[c]) &&
                    k.acceptData(s) &&
                    !1 === d.apply(s, t) &&
                    e.preventDefault();
              return (
                (e.type = h),
                i ||
                  e.isDefaultPrevented() ||
                  (u._default && !1 !== u._default.apply(n.ownerDocument, t)) ||
                  ("click" === h && k.nodeName(n, "a")) ||
                  !k.acceptData(n) ||
                  (c &&
                    n[h] &&
                    (("focus" !== h && "blur" !== h) ||
                      0 !== e.target.offsetWidth) &&
                    !k.isWindow(n) &&
                    ((l = n[c]) && (n[c] = null),
                    n[(k.event.triggered = h)](),
                    (k.event.triggered = $),
                    l && (n[c] = l))),
                e.result
              );
            }
          } else
            for (a in (r = k.cache))
              r[a].events &&
                r[a].events[h] &&
                k.event.trigger(e, t, r[a].handle.elem, !0);
      }
    },
    dispatch: function (e) {
      e = k.event.fix(e || F.event);
      var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        f,
        p,
        h = (k._data(this, "events") || {})[e.type] || [],
        g = h.delegateCount,
        m = [].slice.call(arguments, 0),
        v = !e.exclusive && !e.namespace,
        y = [];
      if (
        (((m[0] = e).delegateTarget = this),
        g && !e.target.disabled && (!e.button || "click" !== e.type))
      )
        for (
          (r = k(this)).context = this.ownerDocument || this, i = e.target;
          i != this;
          i = i.parentNode || this
        ) {
          for (a = {}, l = [], r[0] = i, t = 0; t < g; t++)
            a[(u = (c = h[t]).selector)] === $ &&
              (a[u] = c.quick
                ? ((d = i),
                  (f = c.quick),
                  void 0,
                  (p = d.attributes || {}),
                  (!f[1] || d.nodeName.toLowerCase() === f[1]) &&
                    (!f[2] || (p.id || {}).value === f[2]) &&
                    (!f[3] || f[3].test((p.class || {}).value)))
                : r.is(u)),
              a[u] && l.push(c);
          l.length && y.push({ elem: i, matches: l });
        }
      for (
        h.length > g && y.push({ elem: this, matches: h.slice(g) }), t = 0;
        t < y.length && !e.isPropagationStopped();
        t++
      )
        for (
          s = y[t], e.currentTarget = s.elem, n = 0;
          n < s.matches.length && !e.isImmediatePropagationStopped();
          n++
        )
          (c = s.matches[n]),
            (v ||
              (!e.namespace && !c.namespace) ||
              (e.namespace_re && e.namespace_re.test(c.namespace))) &&
              ((e.data = c.data),
              (e.handleObj = c),
              (o = (
                (k.event.special[c.origType] || {}).handle || c.handler
              ).apply(s.elem, m)) !== $ &&
                !1 === (e.result = o) &&
                (e.preventDefault(), e.stopPropagation()));
      return e.result;
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (e, t) {
        var n,
          i,
          r,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((i = (n = e.target.ownerDocument || j).documentElement),
            (r = n.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((i && i.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (r && r.scrollTop) || 0) -
              ((i && i.clientTop) || (r && r.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            o === $ ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[k.expando]) return e;
      var t,
        n,
        i = e,
        r = k.event.fixHooks[e.type] || {},
        o = r.props ? this.props.concat(r.props) : this.props;
      for (e = k.Event(i), t = o.length; t; ) e[(n = o[--t])] = i[n];
      return (
        e.target || (e.target = i.srcElement || j),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        e.metaKey === $ && (e.metaKey = e.ctrlKey),
        r.filter ? r.filter(e, i) : e
      );
    },
    special: {
      ready: { setup: k.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (e, t, n) {
          k.isWindow(this) && (this.onbeforeunload = n);
        },
        teardown: function (e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (e, t, n, i) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? k.event.trigger(r, null, t) : k.event.dispatch.call(t, r),
        r.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (k.event.handle = k.event.dispatch),
    (k.removeEvent = j.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          e.detachEvent && e.detachEvent("on" + t, n);
        }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            !1 === e.returnValue ||
            (e.getPreventDefault && e.getPreventDefault())
              ? A
              : S))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || k.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = A;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = A;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = A), this.stopPropagation();
      },
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
    }),
    k.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (
      e,
      r
    ) {
      k.event.special[e] = {
        delegateType: r,
        bindType: r,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            i = e.handleObj;
          i.selector;
          return (
            (n && (n === this || k.contains(this, n))) ||
              ((e.type = i.origType),
              (t = i.handler.apply(this, arguments)),
              (e.type = r)),
            t
          );
        },
      };
    }),
    k.support.submitBubbles ||
      (k.event.special.submit = {
        setup: function () {
          if (k.nodeName(this, "form")) return !1;
          k.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target,
              n =
                k.nodeName(t, "input") || k.nodeName(t, "button") ? t.form : $;
            n &&
              !n._submit_attached &&
              (k.event.add(n, "submit._submit", function (e) {
                this.parentNode &&
                  !e.isTrigger &&
                  k.event.simulate("submit", this.parentNode, e, !0);
              }),
              (n._submit_attached = !0));
          });
        },
        teardown: function () {
          if (k.nodeName(this, "form")) return !1;
          k.event.remove(this, "._submit");
        },
      }),
    k.support.changeBubbles ||
      (k.event.special.change = {
        setup: function () {
          if (x.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (k.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                k.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    ((this._just_changed = !1),
                    k.event.simulate("change", this, e, !0));
                })),
              !1
            );
          k.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            x.test(t.nodeName) &&
              !t._change_attached &&
              (k.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  k.event.simulate("change", this.parentNode, e, !0);
              }),
              (t._change_attached = !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return k.event.remove(this, "._change"), x.test(this.nodeName);
        },
      }),
    k.support.focusinBubbles ||
      k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          i = function (e) {
            k.event.simulate(t, e.target, k.event.fix(e), !0);
          };
        k.event.special[t] = {
          setup: function () {
            0 == n++ && j.addEventListener(e, i, !0);
          },
          teardown: function () {
            0 == --n && j.removeEventListener(e, i, !0);
          },
        };
      }),
    k.fn.extend({
      on: function (e, t, n, i, r) {
        var o, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof t && ((n = t), (t = $)), e))
            this.on(a, t, n, e[a], r);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = t), (n = t = $))
            : null == i &&
              ("string" == typeof t
                ? ((i = n), (n = $))
                : ((i = n), (n = t), (t = $))),
          !1 === i)
        )
          i = S;
        else if (!i) return this;
        return (
          1 === r &&
            ((o = i),
            ((i = function (e) {
              return k().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = k.guid++))),
          this.each(function () {
            k.event.add(this, e, i, n, t);
          })
        );
      },
      one: function (e, t, n, i) {
        return this.on.call(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        if (e && e.preventDefault && e.handleObj) {
          var i = e.handleObj;
          return (
            k(e.delegateTarget).off(
              i.namespace ? i.type + "." + i.namespace : i.type,
              i.selector,
              i.handler
            ),
            this
          );
        }
        if ("object" == typeof e) {
          for (var r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = $)),
          !1 === n && (n = S),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      live: function (e, t, n) {
        return k(this.context).on(e, this.selector, t, n), this;
      },
      die: function (e, t) {
        return k(this.context).off(e, this.selector || "**", t), this;
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n);
      },
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        if (this[0]) return k.event.trigger(e, t, this[0], !0);
      },
      toggle: function (n) {
        var i = arguments,
          e = n.guid || k.guid++,
          r = 0,
          t = function (e) {
            var t = (k._data(this, "lastToggle" + n.guid) || 0) % r;
            return (
              k._data(this, "lastToggle" + n.guid, t + 1),
              e.preventDefault(),
              i[t].apply(this, arguments) || !1
            );
          };
        for (t.guid = e; r < i.length; ) i[r++].guid = e;
        return this.click(t);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        (k.fn[n] = function (e, t) {
          return (
            null == t && ((t = e), (e = null)),
            0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
          );
        }),
          k.attrFn && (k.attrFn[n] = !0),
          T.test(n) && (k.event.fixHooks[n] = k.event.keyHooks),
          C.test(n) && (k.event.fixHooks[n] = k.event.mouseHooks);
      }
    ),
    (function () {
      var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        u = "sizcache" + (Math.random() + "").replace(".", ""),
        a = 0,
        y = Object.prototype.toString,
        d = !1,
        n = !0,
        c = /\\/g,
        o = /\r\n/g,
        l = /\W/;
      [0, 0].sort(function () {
        return (n = !1), 0;
      });
      var b = function (e, t, n, i) {
        n = n || [];
        var r = (t = t || j);
        if (1 !== t.nodeType && 9 !== t.nodeType) return [];
        if (!e || "string" != typeof e) return n;
        var o,
          a,
          s,
          l,
          c,
          u,
          d,
          f,
          p = !0,
          h = b.isXML(t),
          g = [],
          m = e;
        do {
          if (
            (v.exec(""), (o = v.exec(m)) && ((m = o[3]), g.push(o[1]), o[2]))
          ) {
            l = o[3];
            break;
          }
        } while (o);
        if (1 < g.length && w.exec(e))
          if (2 === g.length && x.relative[g[0]]) a = E(g[0] + g[1], t, i);
          else
            for (a = x.relative[g[0]] ? [t] : b(g.shift(), t); g.length; )
              (e = g.shift()),
                x.relative[e] && (e += g.shift()),
                (a = E(e, a, i));
        else if (
          (!i &&
            1 < g.length &&
            9 === t.nodeType &&
            !h &&
            x.match.ID.test(g[0]) &&
            !x.match.ID.test(g[g.length - 1]) &&
            (t = (c = b.find(g.shift(), t, h)).expr
              ? b.filter(c.expr, c.set)[0]
              : c.set[0]),
          t)
        )
          for (
            a = (c = i
              ? { expr: g.pop(), set: T(i) }
              : b.find(
                  g.pop(),
                  1 !== g.length ||
                    ("~" !== g[0] && "+" !== g[0]) ||
                    !t.parentNode
                    ? t
                    : t.parentNode,
                  h
                )).expr
              ? b.filter(c.expr, c.set)
              : c.set,
              0 < g.length ? (s = T(a)) : (p = !1);
            g.length;

          )
            (d = u = g.pop()),
              x.relative[u] ? (d = g.pop()) : (u = ""),
              null == d && (d = t),
              x.relative[u](s, d, h);
        else s = g = [];
        if (
          (s || (s = a), s || b.error(u || e), "[object Array]" === y.call(s))
        )
          if (p)
            if (t && 1 === t.nodeType)
              for (f = 0; null != s[f]; f++)
                s[f] &&
                  (!0 === s[f] ||
                    (1 === s[f].nodeType && b.contains(t, s[f]))) &&
                  n.push(a[f]);
            else
              for (f = 0; null != s[f]; f++)
                s[f] && 1 === s[f].nodeType && n.push(a[f]);
          else n.push.apply(n, s);
        else T(s, n);
        return l && (b(l, r, n, i), b.uniqueSort(n)), n;
      };
      (b.uniqueSort = function (e) {
        if (i && ((d = n), e.sort(i), d))
          for (var t = 1; t < e.length; t++)
            e[t] === e[t - 1] && e.splice(t--, 1);
        return e;
      }),
        (b.matches = function (e, t) {
          return b(e, null, null, t);
        }),
        (b.matchesSelector = function (e, t) {
          return 0 < b(t, null, null, [e]).length;
        }),
        (b.find = function (e, t, n) {
          var i, r, o, a, s, l;
          if (!e) return [];
          for (r = 0, o = x.order.length; r < o; r++)
            if (
              ((s = x.order[r]),
              (a = x.leftMatch[s].exec(e)) &&
                ((l = a[1]),
                a.splice(1, 1),
                "\\" !== l.substr(l.length - 1) &&
                  ((a[1] = (a[1] || "").replace(c, "")),
                  null != (i = x.find[s](a, t, n)))))
            ) {
              e = e.replace(x.match[s], "");
              break;
            }
          return (
            i ||
              (i =
                void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName("*")
                  : []),
            { set: i, expr: e }
          );
        }),
        (b.filter = function (e, t, n, i) {
          for (
            var r,
              o,
              a,
              s,
              l,
              c,
              u,
              d,
              f,
              p = e,
              h = [],
              g = t,
              m = t && t[0] && b.isXML(t[0]);
            e && t.length;

          ) {
            for (a in x.filter)
              if (null != (r = x.leftMatch[a].exec(e)) && r[2]) {
                if (
                  ((c = x.filter[a]),
                  (u = r[1]),
                  (o = !1),
                  r.splice(1, 1),
                  "\\" === u.substr(u.length - 1))
                )
                  continue;
                if ((g === h && (h = []), x.preFilter[a]))
                  if ((r = x.preFilter[a](r, g, n, h, i, m))) {
                    if (!0 === r) continue;
                  } else o = s = !0;
                if (r)
                  for (d = 0; null != (l = g[d]); d++)
                    l &&
                      ((f = i ^ (s = c(l, r, d, g))),
                      n && null != s
                        ? f
                          ? (o = !0)
                          : (g[d] = !1)
                        : f && (h.push(l), (o = !0)));
                if (s !== $) {
                  if ((n || (g = h), (e = e.replace(x.match[a], "")), !o))
                    return [];
                  break;
                }
              }
            if (e === p) {
              if (null != o) break;
              b.error(e);
            }
            p = e;
          }
          return g;
        }),
        (b.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        });
      var f = (b.getText = function (e) {
          var t,
            n,
            i = e.nodeType,
            r = "";
          if (i) {
            if (1 === i || 9 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              if ("string" == typeof e.innerText)
                return e.innerText.replace(o, "");
              for (e = e.firstChild; e; e = e.nextSibling) r += f(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (t = 0; (n = e[t]); t++) 8 !== n.nodeType && (r += f(n));
          return r;
        }),
        x = (b.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (e) {
              return e.getAttribute("href");
            },
            type: function (e) {
              return e.getAttribute("type");
            },
          },
          relative: {
            "+": function (e, t) {
              var n = "string" == typeof t,
                i = n && !l.test(t),
                r = n && !i;
              i && (t = t.toLowerCase());
              for (var o, a = 0, s = e.length; a < s; a++)
                if ((o = e[a])) {
                  for (; (o = o.previousSibling) && 1 !== o.nodeType; );
                  e[a] =
                    r || (o && o.nodeName.toLowerCase() === t)
                      ? o || !1
                      : o === t;
                }
              r && b.filter(t, e, !0);
            },
            ">": function (e, t) {
              var n,
                i = "string" == typeof t,
                r = 0,
                o = e.length;
              if (i && !l.test(t)) {
                for (t = t.toLowerCase(); r < o; r++)
                  if ((n = e[r])) {
                    var a = n.parentNode;
                    e[r] = a.nodeName.toLowerCase() === t && a;
                  }
              } else {
                for (; r < o; r++)
                  (n = e[r]) && (e[r] = i ? n.parentNode : n.parentNode === t);
                i && b.filter(t, e, !0);
              }
            },
            "": function (e, t, n) {
              var i,
                r = a++,
                o = N;
              "string" != typeof t ||
                l.test(t) ||
                ((i = t = t.toLowerCase()), (o = C)),
                o("parentNode", t, r, e, i, n);
            },
            "~": function (e, t, n) {
              var i,
                r = a++,
                o = N;
              "string" != typeof t ||
                l.test(t) ||
                ((i = t = t.toLowerCase()), (o = C)),
                o("previousSibling", t, r, e, i, n);
            },
          },
          find: {
            ID: function (e, t, n) {
              if (void 0 !== t.getElementById && !n) {
                var i = t.getElementById(e[1]);
                return i && i.parentNode ? [i] : [];
              }
            },
            NAME: function (e, t) {
              if (void 0 !== t.getElementsByName) {
                for (
                  var n = [],
                    i = t.getElementsByName(e[1]),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  i[r].getAttribute("name") === e[1] && n.push(i[r]);
                return 0 === n.length ? null : n;
              }
            },
            TAG: function (e, t) {
              if (void 0 !== t.getElementsByTagName)
                return t.getElementsByTagName(e[1]);
            },
          },
          preFilter: {
            CLASS: function (e, t, n, i, r, o) {
              if (((e = " " + e[1].replace(c, "") + " "), o)) return e;
              for (var a, s = 0; null != (a = t[s]); s++)
                a &&
                  (r ^
                  (a.className &&
                    0 <=
                      (" " + a.className + " ")
                        .replace(/[\t\n\r]/g, " ")
                        .indexOf(e))
                    ? n || i.push(a)
                    : n && (t[s] = !1));
              return !1;
            },
            ID: function (e) {
              return e[1].replace(c, "");
            },
            TAG: function (e, t) {
              return e[1].replace(c, "").toLowerCase();
            },
            CHILD: function (e) {
              if ("nth" === e[1]) {
                e[2] || b.error(e[0]), (e[2] = e[2].replace(/^\+|\s*/g, ""));
                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  ("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") ||
                    (!/\D/.test(e[2]) && "0n+" + e[2]) ||
                    e[2]
                );
                (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
              } else e[2] && b.error(e[0]);
              return (e[0] = a++), e;
            },
            ATTR: function (e, t, n, i, r, o) {
              var a = (e[1] = e[1].replace(c, ""));
              return (
                !o && x.attrMap[a] && (e[1] = x.attrMap[a]),
                (e[4] = (e[4] || e[5] || "").replace(c, "")),
                "~=" === e[2] && (e[4] = " " + e[4] + " "),
                e
              );
            },
            PSEUDO: function (e, t, n, i, r) {
              if ("not" === e[1]) {
                if (!(1 < (v.exec(e[3]) || "").length || /^\w/.test(e[3]))) {
                  var o = b.filter(e[3], t, n, !0 ^ r);
                  return n || i.push.apply(i, o), !1;
                }
                e[3] = b(e[3], null, null, t);
              } else if (x.match.POS.test(e[0]) || x.match.CHILD.test(e[0]))
                return !0;
              return e;
            },
            POS: function (e) {
              return e.unshift(!0), e;
            },
          },
          filters: {
            enabled: function (e) {
              return !1 === e.disabled && "hidden" !== e.type;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              return !0 === e.checked;
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            parent: function (e) {
              return !!e.firstChild;
            },
            empty: function (e) {
              return !e.firstChild;
            },
            has: function (e, t, n) {
              return !!b(n[3], e).length;
            },
            header: function (e) {
              return /h\d/i.test(e.nodeName);
            },
            text: function (e) {
              var t = e.getAttribute("type"),
                n = e.type;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === n &&
                (t === n || null === t)
              );
            },
            radio: function (e) {
              return "input" === e.nodeName.toLowerCase() && "radio" === e.type;
            },
            checkbox: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
              );
            },
            file: function (e) {
              return "input" === e.nodeName.toLowerCase() && "file" === e.type;
            },
            password: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() && "password" === e.type
              );
            },
            submit: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && "submit" === e.type;
            },
            image: function (e) {
              return "input" === e.nodeName.toLowerCase() && "image" === e.type;
            },
            reset: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && "reset" === e.type;
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            input: function (e) {
              return /input|select|textarea|button/i.test(e.nodeName);
            },
            focus: function (e) {
              return e === e.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (e, t) {
              return 0 === t;
            },
            last: function (e, t, n, i) {
              return t === i.length - 1;
            },
            even: function (e, t) {
              return t % 2 == 0;
            },
            odd: function (e, t) {
              return t % 2 == 1;
            },
            lt: function (e, t, n) {
              return t < n[3] - 0;
            },
            gt: function (e, t, n) {
              return t > n[3] - 0;
            },
            nth: function (e, t, n) {
              return n[3] - 0 === t;
            },
            eq: function (e, t, n) {
              return n[3] - 0 === t;
            },
          },
          filter: {
            PSEUDO: function (e, t, n, i) {
              var r = t[1],
                o = x.filters[r];
              if (o) return o(e, n, t, i);
              if ("contains" === r)
                return (
                  0 <=
                  (e.textContent || e.innerText || f([e]) || "").indexOf(t[3])
                );
              if ("not" === r) {
                for (var a = t[3], s = 0, l = a.length; s < l; s++)
                  if (a[s] === e) return !1;
                return !0;
              }
              b.error(r);
            },
            CHILD: function (e, t) {
              var n,
                i,
                r,
                o,
                a,
                s,
                l = t[1],
                c = e;
              switch (l) {
                case "only":
                case "first":
                  for (; (c = c.previousSibling); )
                    if (1 === c.nodeType) return !1;
                  if ("first" === l) return !0;
                  c = e;
                case "last":
                  for (; (c = c.nextSibling); ) if (1 === c.nodeType) return !1;
                  return !0;
                case "nth":
                  if (((n = t[2]), (i = t[3]), 1 === n && 0 === i)) return !0;
                  if (
                    ((r = t[0]),
                    (o = e.parentNode) && (o[u] !== r || !e.nodeIndex))
                  ) {
                    for (a = 0, c = o.firstChild; c; c = c.nextSibling)
                      1 === c.nodeType && (c.nodeIndex = ++a);
                    o[u] = r;
                  }
                  return (
                    (s = e.nodeIndex - i),
                    0 === n ? 0 === s : s % n == 0 && 0 <= s / n
                  );
              }
            },
            ID: function (e, t) {
              return 1 === e.nodeType && e.getAttribute("id") === t;
            },
            TAG: function (e, t) {
              return (
                ("*" === t && 1 === e.nodeType) ||
                (!!e.nodeName && e.nodeName.toLowerCase() === t)
              );
            },
            CLASS: function (e, t) {
              return (
                -1 <
                (" " + (e.className || e.getAttribute("class")) + " ").indexOf(
                  t
                )
              );
            },
            ATTR: function (e, t) {
              var n = t[1],
                i = b.attr
                  ? b.attr(e, n)
                  : x.attrHandle[n]
                  ? x.attrHandle[n](e)
                  : null != e[n]
                  ? e[n]
                  : e.getAttribute(n),
                r = i + "",
                o = t[2],
                a = t[4];
              return null == i
                ? "!=" === o
                : !o && b.attr
                ? null != i
                : "=" === o
                ? r === a
                : "*=" === o
                ? 0 <= r.indexOf(a)
                : "~=" === o
                ? 0 <= (" " + r + " ").indexOf(a)
                : a
                ? "!=" === o
                  ? r !== a
                  : "^=" === o
                  ? 0 === r.indexOf(a)
                  : "$=" === o
                  ? r.substr(r.length - a.length) === a
                  : "|=" === o &&
                    (r === a || r.substr(0, a.length + 1) === a + "-")
                : r && !1 !== i;
            },
            POS: function (e, t, n, i) {
              var r = t[2],
                o = x.setFilters[r];
              if (o) return o(e, n, t, i);
            },
          },
        }),
        w = x.match.POS,
        e = function (e, t) {
          return "\\" + (t - 0 + 1);
        };
      for (var t in x.match)
        (x.match[t] = new RegExp(
          x.match[t].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (x.leftMatch[t] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + x.match[t].source.replace(/\\(\d+)/g, e)
          ));
      var i,
        p,
        r,
        s,
        h,
        g,
        m,
        T = function (e, t) {
          return (
            (e = Array.prototype.slice.call(e, 0)),
            t ? (t.push.apply(t, e), t) : e
          );
        };
      try {
        Array.prototype.slice.call(j.documentElement.childNodes, 0)[0].nodeType;
      } catch (e) {
        T = function (e, t) {
          var n = 0,
            i = t || [];
          if ("[object Array]" === y.call(e)) Array.prototype.push.apply(i, e);
          else if ("number" == typeof e.length)
            for (var r = e.length; n < r; n++) i.push(e[n]);
          else for (; e[n]; n++) i.push(e[n]);
          return i;
        };
      }
      function C(e, t, n, i, r, o) {
        for (var a = 0, s = i.length; a < s; a++) {
          var l = i[a];
          if (l) {
            var c = !1;
            for (l = l[e]; l; ) {
              if (l[u] === n) {
                c = i[l.sizset];
                break;
              }
              if (
                (1 !== l.nodeType || o || ((l[u] = n), (l.sizset = a)),
                l.nodeName.toLowerCase() === t)
              ) {
                c = l;
                break;
              }
              l = l[e];
            }
            i[a] = c;
          }
        }
      }
      function N(e, t, n, i, r, o) {
        for (var a = 0, s = i.length; a < s; a++) {
          var l = i[a];
          if (l) {
            var c = !1;
            for (l = l[e]; l; ) {
              if (l[u] === n) {
                c = i[l.sizset];
                break;
              }
              if (1 === l.nodeType)
                if ((o || ((l[u] = n), (l.sizset = a)), "string" != typeof t)) {
                  if (l === t) {
                    c = !0;
                    break;
                  }
                } else if (0 < b.filter(t, [l]).length) {
                  c = l;
                  break;
                }
              l = l[e];
            }
            i[a] = c;
          }
        }
      }
      j.documentElement.compareDocumentPosition
        ? (i = function (e, t) {
            return e === t
              ? ((d = !0), 0)
              : e.compareDocumentPosition && t.compareDocumentPosition
              ? 4 & e.compareDocumentPosition(t)
                ? -1
                : 1
              : e.compareDocumentPosition
              ? -1
              : 1;
          })
        : ((i = function (e, t) {
            if (e === t) return (d = !0), 0;
            if (e.sourceIndex && t.sourceIndex)
              return e.sourceIndex - t.sourceIndex;
            var n,
              i,
              r = [],
              o = [],
              a = e.parentNode,
              s = t.parentNode,
              l = a;
            if (a === s) return p(e, t);
            if (!a) return -1;
            if (!s) return 1;
            for (; l; ) r.unshift(l), (l = l.parentNode);
            for (l = s; l; ) o.unshift(l), (l = l.parentNode);
            (n = r.length), (i = o.length);
            for (var c = 0; c < n && c < i; c++)
              if (r[c] !== o[c]) return p(r[c], o[c]);
            return c === n ? p(e, o[c], -1) : p(r[c], t, 1);
          }),
          (p = function (e, t, n) {
            if (e === t) return n;
            for (var i = e.nextSibling; i; ) {
              if (i === t) return -1;
              i = i.nextSibling;
            }
            return 1;
          })),
        (r = j.createElement("div")),
        (s = "script" + new Date().getTime()),
        (h = j.documentElement),
        (r.innerHTML = "<a name='" + s + "'/>"),
        h.insertBefore(r, h.firstChild),
        j.getElementById(s) &&
          ((x.find.ID = function (e, t, n) {
            if (void 0 !== t.getElementById && !n) {
              var i = t.getElementById(e[1]);
              return i
                ? i.id === e[1] ||
                  (void 0 !== i.getAttributeNode &&
                    i.getAttributeNode("id").nodeValue === e[1])
                  ? [i]
                  : $
                : [];
            }
          }),
          (x.filter.ID = function (e, t) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return 1 === e.nodeType && n && n.nodeValue === t;
          })),
        h.removeChild(r),
        (h = r = null),
        (g = j.createElement("div")).appendChild(j.createComment("")),
        0 < g.getElementsByTagName("*").length &&
          (x.find.TAG = function (e, t) {
            var n = t.getElementsByTagName(e[1]);
            if ("*" === e[1]) {
              for (var i = [], r = 0; n[r]; r++)
                1 === n[r].nodeType && i.push(n[r]);
              n = i;
            }
            return n;
          }),
        (g.innerHTML = "<a href='#'></a>"),
        g.firstChild &&
          void 0 !== g.firstChild.getAttribute &&
          "#" !== g.firstChild.getAttribute("href") &&
          (x.attrHandle.href = function (e) {
            return e.getAttribute("href", 2);
          }),
        (g = null),
        j.querySelectorAll &&
          (function () {
            var d = b,
              e = j.createElement("div");
            if (
              ((e.innerHTML = "<p class='TEST'></p>"),
              !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length)
            ) {
              for (var t in ((b = function (e, t, n, i) {
                if (((t = t || j), !i && !b.isXML(t))) {
                  var r = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
                  if (r && (1 === t.nodeType || 9 === t.nodeType)) {
                    if (r[1]) return T(t.getElementsByTagName(e), n);
                    if (r[2] && x.find.CLASS && t.getElementsByClassName)
                      return T(t.getElementsByClassName(r[2]), n);
                  }
                  if (9 === t.nodeType) {
                    if ("body" === e && t.body) return T([t.body], n);
                    if (r && r[3]) {
                      var o = t.getElementById(r[3]);
                      if (!o || !o.parentNode) return T([], n);
                      if (o.id === r[3]) return T([o], n);
                    }
                    try {
                      return T(t.querySelectorAll(e), n);
                    } catch (e) {}
                  } else if (
                    1 === t.nodeType &&
                    "object" !== t.nodeName.toLowerCase()
                  ) {
                    var a = t,
                      s = t.getAttribute("id"),
                      l = s || "__sizzle__",
                      c = t.parentNode,
                      u = /^\s*[+~]/.test(e);
                    s ? (l = l.replace(/'/g, "\\$&")) : t.setAttribute("id", l),
                      u && c && (t = t.parentNode);
                    try {
                      if (!u || c)
                        return T(
                          t.querySelectorAll("[id='" + l + "'] " + e),
                          n
                        );
                    } catch (e) {
                    } finally {
                      s || a.removeAttribute("id");
                    }
                  }
                }
                return d(e, t, n, i);
              }),
              d))
                b[t] = d[t];
              e = null;
            }
          })(),
        (function () {
          var e = j.documentElement,
            i =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.webkitMatchesSelector ||
              e.msMatchesSelector;
          if (i) {
            var r = !i.call(j.createElement("div"), "div"),
              o = !1;
            try {
              i.call(j.documentElement, "[test!='']:sizzle");
            } catch (e) {
              o = !0;
            }
            b.matchesSelector = function (e, t) {
              if (
                ((t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                !b.isXML(e))
              )
                try {
                  if (o || (!x.match.PSEUDO.test(t) && !/!=/.test(t))) {
                    var n = i.call(e, t);
                    if (n || !r || (e.document && 11 !== e.document.nodeType))
                      return n;
                  }
                } catch (e) {}
              return 0 < b(t, null, null, [e]).length;
            };
          }
        })(),
        ((m = j.createElement("div")).innerHTML =
          "<div class='test e'></div><div class='test'></div>"),
        m.getElementsByClassName &&
          0 !== m.getElementsByClassName("e").length &&
          ((m.lastChild.className = "e"),
          1 !== m.getElementsByClassName("e").length &&
            (x.order.splice(1, 0, "CLASS"),
            (x.find.CLASS = function (e, t, n) {
              if (void 0 !== t.getElementsByClassName && !n)
                return t.getElementsByClassName(e[1]);
            }),
            (m = null))),
        j.documentElement.contains
          ? (b.contains = function (e, t) {
              return e !== t && (!e.contains || e.contains(t));
            })
          : j.documentElement.compareDocumentPosition
          ? (b.contains = function (e, t) {
              return !!(16 & e.compareDocumentPosition(t));
            })
          : (b.contains = function () {
              return !1;
            }),
        (b.isXML = function (e) {
          var t = (e ? e.ownerDocument || e : 0).documentElement;
          return !!t && "HTML" !== t.nodeName;
        });
      var E = function (e, t, n) {
        for (
          var i, r = [], o = "", a = t.nodeType ? [t] : t;
          (i = x.match.PSEUDO.exec(e));

        )
          (o += i[0]), (e = e.replace(x.match.PSEUDO, ""));
        e = x.relative[e] ? e + "*" : e;
        for (var s = 0, l = a.length; s < l; s++) b(e, a[s], r, n);
        return b.filter(o, r);
      };
      (b.attr = k.attr),
        (b.selectors.attrMap = {}),
        (k.find = b),
        (k.expr = b.selectors),
        (k.expr[":"] = k.expr.filters),
        (k.unique = b.uniqueSort),
        (k.text = b.getText),
        (k.isXMLDoc = b.isXML),
        (k.contains = b.contains);
    })();
  var D = /Until$/,
    L = /^(?:parents|prevUntil|prevAll)/,
    O = /,/,
    I = /^.[^:#\[\.,]*$/,
    B = Array.prototype.slice,
    H = k.expr.match.POS,
    P = { children: !0, contents: !0, next: !0, prev: !0 };
  function q(e) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType;
  }
  function R(e, n, i) {
    if (((n = n || 0), k.isFunction(n)))
      return k.grep(e, function (e, t) {
        return !!n.call(e, t, e) === i;
      });
    if (n.nodeType)
      return k.grep(e, function (e, t) {
        return (e === n) === i;
      });
    if ("string" == typeof n) {
      var t = k.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (I.test(n)) return k.filter(n, t, !i);
      n = k.filter(n, t);
    }
    return k.grep(e, function (e, t) {
      return 0 <= k.inArray(e, n) === i;
    });
  }
  function W(e) {
    var t = z.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  k.fn.extend({
    find: function (e) {
      var t,
        n,
        i = this;
      if ("string" != typeof e)
        return k(e).filter(function () {
          for (t = 0, n = i.length; t < n; t++)
            if (k.contains(i[t], this)) return !0;
        });
      var r,
        o,
        a,
        s = this.pushStack("", "find", e);
      for (t = 0, n = this.length; t < n; t++)
        if (((r = s.length), k.find(e, this[t], s), 0 < t))
          for (o = r; o < s.length; o++)
            for (a = 0; a < r; a++)
              if (s[a] === s[o]) {
                s.splice(o--, 1);
                break;
              }
      return s;
    },
    has: function (e) {
      var n = k(e);
      return this.filter(function () {
        for (var e = 0, t = n.length; e < t; e++)
          if (k.contains(this, n[e])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(R(this, e, !1), "not", e);
    },
    filter: function (e) {
      return this.pushStack(R(this, e, !0), "filter", e);
    },
    is: function (e) {
      return (
        !!e &&
        ("string" == typeof e
          ? H.test(e)
            ? 0 <= k(e, this.context).index(this[0])
            : 0 < k.filter(e, this).length
          : 0 < this.filter(e).length)
      );
    },
    closest: function (e, t) {
      var n,
        i,
        r = [],
        o = this[0];
      if (k.isArray(e)) {
        for (var a = 1; o && o.ownerDocument && o !== t; ) {
          for (n = 0; n < e.length; n++)
            k(o).is(e[n]) && r.push({ selector: e[n], elem: o, level: a });
          (o = o.parentNode), a++;
        }
        return r;
      }
      var s = H.test(e) || "string" != typeof e ? k(e, t || this.context) : 0;
      for (n = 0, i = this.length; n < i; n++)
        for (o = this[n]; o; ) {
          if (s ? -1 < s.index(o) : k.find.matchesSelector(o, e)) {
            r.push(o);
            break;
          }
          if (
            !(o = o.parentNode) ||
            !o.ownerDocument ||
            o === t ||
            11 === o.nodeType
          )
            break;
        }
      return (
        (r = 1 < r.length ? k.unique(r) : r), this.pushStack(r, "closest", e)
      );
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? k.inArray(this[0], k(e))
          : k.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? k(e, t)
            : k.makeArray(e && e.nodeType ? [e] : e),
        i = k.merge(this.get(), n);
      return this.pushStack(q(n[0]) || q(i[0]) ? i : k.unique(i));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return k.dir(e, "parentNode", n);
        },
        next: function (e) {
          return k.nth(e, 2, "nextSibling");
        },
        prev: function (e) {
          return k.nth(e, 2, "previousSibling");
        },
        nextAll: function (e) {
          return k.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return k.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return k.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return k.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return k.sibling(e.parentNode.firstChild, e);
        },
        children: function (e) {
          return k.sibling(e.firstChild);
        },
        contents: function (e) {
          return k.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : k.makeArray(e.childNodes);
        },
      },
      function (i, r) {
        k.fn[i] = function (e, t) {
          var n = k.map(this, r, e);
          return (
            D.test(i) || (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            (n = 1 < this.length && !P[i] ? k.unique(n) : n),
            (1 < this.length || O.test(t)) && L.test(i) && (n = n.reverse()),
            this.pushStack(n, i, B.call(arguments).join(","))
          );
        };
      }
    ),
    k.extend({
      filter: function (e, t, n) {
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length
            ? k.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : k.find.matches(e, t)
        );
      },
      dir: function (e, t, n) {
        for (
          var i = [], r = e[t];
          r && 9 !== r.nodeType && (n === $ || 1 !== r.nodeType || !k(r).is(n));

        )
          1 === r.nodeType && i.push(r), (r = r[t]);
        return i;
      },
      nth: function (e, t, n, i) {
        t = t || 1;
        for (var r = 0; e && (1 !== e.nodeType || ++r !== t); e = e[n]);
        return e;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var z =
      "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    X = / jQuery\d+="(?:\d+|null)"/g,
    V = /^\s+/,
    U = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Q = /<([\w:]+)/,
    Y = /<tbody/i,
    G = /<|&#?\w+;/,
    J = /<(?:script|style)/i,
    K = /<(?:script|object|embed|option|style)/i,
    Z = new RegExp("<(?:" + z + ")", "i"),
    ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    te = /\/(java|ecma)script/i,
    ne = /^\s*<!(?:\[CDATA\[|\-\-)/,
    ie = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    re = W(j);
  function oe(e, t) {
    if (1 === t.nodeType && k.hasData(e)) {
      var n,
        i,
        r,
        o = k._data(e),
        a = k._data(t, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (i = 0, r = s[n].length; i < r; i++)
            k.event.add(
              t,
              n + (s[n][i].namespace ? "." : "") + s[n][i].namespace,
              s[n][i],
              s[n][i].data
            );
      a.data && (a.data = k.extend({}, a.data));
    }
  }
  function ae(e, t) {
    var n;
    1 === t.nodeType &&
      (t.clearAttributes && t.clearAttributes(),
      t.mergeAttributes && t.mergeAttributes(e),
      "object" === (n = t.nodeName.toLowerCase())
        ? (t.outerHTML = e.outerHTML)
        : "input" !== n || ("checkbox" !== e.type && "radio" !== e.type)
        ? "option" === n
          ? (t.selected = e.defaultSelected)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue)
        : (e.checked && (t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value)),
      t.removeAttribute(k.expando));
  }
  function se(e) {
    return void 0 !== e.getElementsByTagName
      ? e.getElementsByTagName("*")
      : void 0 !== e.querySelectorAll
      ? e.querySelectorAll("*")
      : [];
  }
  function le(e) {
    ("checkbox" !== e.type && "radio" !== e.type) ||
      (e.defaultChecked = e.checked);
  }
  function ce(e) {
    var t = (e.nodeName || "").toLowerCase();
    "input" === t
      ? le(e)
      : "script" !== t &&
        void 0 !== e.getElementsByTagName &&
        k.grep(e.getElementsByTagName("input"), le);
  }
  function ue(e, t) {
    t.src
      ? k.ajax({ url: t.src, async: !1, dataType: "script" })
      : k.globalEval(
          (t.text || t.textContent || t.innerHTML || "").replace(ne, "/*$0*/")
        ),
      t.parentNode && t.parentNode.removeChild(t);
  }
  (ie.optgroup = ie.option),
    (ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead),
    (ie.th = ie.td),
    k.support.htmlSerialize || (ie._default = [1, "div<div>", "</div>"]),
    k.fn.extend({
      text: function (n) {
        return k.isFunction(n)
          ? this.each(function (e) {
              var t = k(this);
              t.text(n.call(this, e, t.text()));
            })
          : "object" != typeof n && n !== $
          ? this.empty().append(
              ((this[0] && this[0].ownerDocument) || j).createTextNode(n)
            )
          : k.text(this);
      },
      wrapAll: function (t) {
        if (k.isFunction(t))
          return this.each(function (e) {
            k(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = k(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return k.isFunction(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = k.isFunction(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            k.nodeName(this, "body") || k(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this);
          });
        if (arguments.length) {
          var e = k.clean(arguments);
          return (
            e.push.apply(e, this.toArray()),
            this.pushStack(e, "before", arguments)
          );
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling);
          });
        if (arguments.length) {
          var e = this.pushStack(this, "after", arguments);
          return e.push.apply(e, k.clean(arguments)), e;
        }
      },
      remove: function (e, t) {
        for (var n, i = 0; null != (n = this[i]); i++)
          (e && !k.filter(e, [n]).length) ||
            (t ||
              1 !== n.nodeType ||
              (k.cleanData(n.getElementsByTagName("*")), k.cleanData([n])),
            n.parentNode && n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          for (
            1 === e.nodeType && k.cleanData(e.getElementsByTagName("*"));
            e.firstChild;

          )
            e.removeChild(e.firstChild);
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (n) {
        if (n === $)
          return this[0] && 1 === this[0].nodeType
            ? this[0].innerHTML.replace(X, "")
            : null;
        if (
          "string" != typeof n ||
          J.test(n) ||
          (!k.support.leadingWhitespace && V.test(n)) ||
          ie[(Q.exec(n) || ["", ""])[1].toLowerCase()]
        )
          k.isFunction(n)
            ? this.each(function (e) {
                var t = k(this);
                t.html(n.call(this, e, t.html()));
              })
            : this.empty().append(n);
        else {
          n = n.replace(U, "<$1></$2>");
          try {
            for (var e = 0, t = this.length; e < t; e++)
              1 === this[e].nodeType &&
                (k.cleanData(this[e].getElementsByTagName("*")),
                (this[e].innerHTML = n));
          } catch (e) {
            this.empty().append(n);
          }
        }
        return this;
      },
      replaceWith: function (i) {
        return this[0] && this[0].parentNode
          ? k.isFunction(i)
            ? this.each(function (e) {
                var t = k(this),
                  n = t.html();
                t.replaceWith(i.call(this, e, n));
              })
            : ("string" != typeof i && (i = k(i).detach()),
              this.each(function () {
                var e = this.nextSibling,
                  t = this.parentNode;
                k(this).remove(), e ? k(e).before(i) : k(t).append(i);
              }))
          : this.length
          ? this.pushStack(k(k.isFunction(i) ? i() : i), "replaceWith", i)
          : this;
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, i, r) {
        var e,
          t,
          o,
          a,
          s,
          l = n[0],
          c = [];
        if (
          !k.support.checkClone &&
          3 === arguments.length &&
          "string" == typeof l &&
          ee.test(l)
        )
          return this.each(function () {
            k(this).domManip(n, i, r, !0);
          });
        if (k.isFunction(l))
          return this.each(function (e) {
            var t = k(this);
            (n[0] = l.call(this, e, i ? t.html() : $)), t.domManip(n, i, r);
          });
        if (this[0]) {
          if (
            ((a = l && l.parentNode),
            (t =
              1 ===
              (o = (e =
                k.support.parentNode &&
                a &&
                11 === a.nodeType &&
                a.childNodes.length === this.length
                  ? { fragment: a }
                  : k.buildFragment(n, this, c)).fragment).childNodes.length
                ? (o = o.firstChild)
                : o.firstChild))
          ) {
            i = i && k.nodeName(t, "tr");
            for (var u = 0, d = this.length, f = d - 1; u < d; u++)
              r.call(
                i
                  ? ((s = this[u]),
                    t,
                    k.nodeName(s, "table")
                      ? s.getElementsByTagName("tbody")[0] ||
                        s.appendChild(s.ownerDocument.createElement("tbody"))
                      : s)
                  : this[u],
                e.cacheable || (1 < d && u < f) ? k.clone(o, !0, !0) : o
              );
          }
          c.length && k.each(c, ue);
        }
        return this;
      },
    }),
    (k.buildFragment = function (e, t, n) {
      var i,
        r,
        o,
        a,
        s = e[0];
      return (
        t && t[0] && (a = t[0].ownerDocument || t[0]),
        a.createDocumentFragment || (a = j),
        !(
          1 === e.length &&
          "string" == typeof s &&
          s.length < 512 &&
          a === j &&
          "<" === s.charAt(0)
        ) ||
          K.test(s) ||
          (!k.support.checkClone && ee.test(s)) ||
          (!k.support.html5Clone && Z.test(s)) ||
          ((r = !0), (o = k.fragments[s]) && 1 !== o && (i = o)),
        i || ((i = a.createDocumentFragment()), k.clean(e, a, i, n)),
        r && (k.fragments[s] = o ? i : 1),
        { fragment: i, cacheable: r }
      );
    }),
    (k.fragments = {}),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (s, l) {
        k.fn[s] = function (e) {
          var t = [],
            n = k(e),
            i = 1 === this.length && this[0].parentNode;
          if (
            i &&
            11 === i.nodeType &&
            1 === i.childNodes.length &&
            1 === n.length
          )
            return n[l](this[0]), this;
          for (var r = 0, o = n.length; r < o; r++) {
            var a = (0 < r ? this.clone(!0) : this).get();
            k(n[r])[l](a), (t = t.concat(a));
          }
          return this.pushStack(t, s, n.selector);
        };
      }
    ),
    k.extend({
      clone: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          l =
            k.support.html5Clone || !Z.test("<" + e.nodeName)
              ? e.cloneNode(!0)
              : ((a = e),
                (s = j.createElement("div")),
                re.appendChild(s),
                (s.innerHTML = a.outerHTML),
                s.firstChild);
        if (
          !(
            (k.support.noCloneEvent && k.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            k.isXMLDoc(e)
          )
        )
          for (ae(e, l), i = se(e), r = se(l), o = 0; i[o]; ++o)
            r[o] && ae(i[o], r[o]);
        if (t && (oe(e, l), n))
          for (i = se(e), r = se(l), o = 0; i[o]; ++o) oe(i[o], r[o]);
        return (i = r = null), l;
      },
      clean: function (e, t, n, i) {
        var r;
        void 0 === (t = t || j).createElement &&
          (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || j);
        for (var o, a, s = [], l = 0; null != (a = e[l]); l++)
          if (("number" == typeof a && (a += ""), a)) {
            if ("string" == typeof a)
              if (G.test(a)) {
                a = a.replace(U, "<$1></$2>");
                var c = (Q.exec(a) || ["", ""])[1].toLowerCase(),
                  u = ie[c] || ie._default,
                  d = u[0],
                  f = t.createElement("div");
                for (
                  t === j ? re.appendChild(f) : W(t).appendChild(f),
                    f.innerHTML = u[1] + a + u[2];
                  d--;

                )
                  f = f.lastChild;
                if (!k.support.tbody) {
                  var p = Y.test(a),
                    h =
                      "table" !== c || p
                        ? "<table>" !== u[1] || p
                          ? []
                          : f.childNodes
                        : f.firstChild && f.firstChild.childNodes;
                  for (o = h.length - 1; 0 <= o; --o)
                    k.nodeName(h[o], "tbody") &&
                      !h[o].childNodes.length &&
                      h[o].parentNode.removeChild(h[o]);
                }
                !k.support.leadingWhitespace &&
                  V.test(a) &&
                  f.insertBefore(t.createTextNode(V.exec(a)[0]), f.firstChild),
                  (a = f.childNodes);
              } else a = t.createTextNode(a);
            var g;
            if (!k.support.appendChecked)
              if (a[0] && "number" == typeof (g = a.length))
                for (o = 0; o < g; o++) ce(a[o]);
              else ce(a);
            a.nodeType ? s.push(a) : (s = k.merge(s, a));
          }
        if (n)
          for (
            r = function (e) {
              return !e.type || te.test(e.type);
            },
              l = 0;
            s[l];
            l++
          )
            if (
              !i ||
              !k.nodeName(s[l], "script") ||
              (s[l].type && "text/javascript" !== s[l].type.toLowerCase())
            ) {
              if (1 === s[l].nodeType) {
                var m = k.grep(s[l].getElementsByTagName("script"), r);
                s.splice.apply(s, [l + 1, 0].concat(m));
              }
              n.appendChild(s[l]);
            } else
              i.push(
                s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]
              );
        return s;
      },
      cleanData: function (e) {
        for (
          var t,
            n,
            i,
            r = k.cache,
            o = k.event.special,
            a = k.support.deleteExpando,
            s = 0;
          null != (i = e[s]);
          s++
        )
          if (
            (!i.nodeName || !k.noData[i.nodeName.toLowerCase()]) &&
            (n = i[k.expando])
          ) {
            if ((t = r[n]) && t.events) {
              for (var l in t.events)
                o[l] ? k.event.remove(i, l) : k.removeEvent(i, l, t.handle);
              t.handle && (t.handle.elem = null);
            }
            a
              ? delete i[k.expando]
              : i.removeAttribute && i.removeAttribute(k.expando),
              delete r[n];
          }
      },
    });
  var de,
    fe,
    pe,
    he = /alpha\([^)]*\)/i,
    ge = /opacity=([^)]*)/,
    me = /([A-Z]|^ms)/g,
    ve = /^-?\d+(?:px)?$/i,
    ye = /^-?\d/,
    be = /^([\-+])=([\-+.\de]+)/,
    xe = { position: "absolute", visibility: "hidden", display: "block" },
    we = ["Left", "Right"],
    Te = ["Top", "Bottom"];
  function Ce(e, t, n) {
    var i = "width" === t ? e.offsetWidth : e.offsetHeight,
      r = "width" === t ? we : Te,
      o = 0,
      a = r.length;
    if (0 < i) {
      if ("border" !== n)
        for (; o < a; o++)
          n || (i -= parseFloat(k.css(e, "padding" + r[o])) || 0),
            "margin" === n
              ? (i += parseFloat(k.css(e, n + r[o])) || 0)
              : (i -= parseFloat(k.css(e, "border" + r[o] + "Width")) || 0);
      return i + "px";
    }
    if (
      (((i = de(e, t, t)) < 0 || null == i) && (i = e.style[t] || 0),
      (i = parseFloat(i) || 0),
      n)
    )
      for (; o < a; o++)
        (i += parseFloat(k.css(e, "padding" + r[o])) || 0),
          "padding" !== n &&
            (i += parseFloat(k.css(e, "border" + r[o] + "Width")) || 0),
          "margin" === n && (i += parseFloat(k.css(e, n + r[o])) || 0);
    return i + "px";
  }
  (k.fn.css = function (e, t) {
    return 2 === arguments.length && t === $
      ? this
      : k.access(this, e, t, !0, function (e, t, n) {
          return n !== $ ? k.style(e, t, n) : k.css(e, t);
        });
  }),
    k.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = de(e, "opacity", "opacity");
              return "" === n ? "1" : n;
            }
            return e.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: k.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            o,
            a = k.camelCase(t),
            s = e.style,
            l = k.cssHooks[a];
          if (((t = k.cssProps[a] || a), n === $))
            return l && "get" in l && (r = l.get(e, !1, i)) !== $ ? r : s[t];
          if (
            !("string" === (o = typeof n) &&
              (r = be.exec(n)) &&
              ((n = +(r[1] + 1) * +r[2] + parseFloat(k.css(e, t))),
              (o = "number")),
            null == n ||
              ("number" === o && isNaN(n)) ||
              ("number" !== o || k.cssNumber[a] || (n += "px"),
              l && "set" in l && (n = l.set(e, n)) === $))
          )
            try {
              s[t] = n;
            } catch (e) {}
        }
      },
      css: function (e, t, n) {
        var i, r;
        return (
          (t = k.camelCase(t)),
          (r = k.cssHooks[t]),
          "cssFloat" === (t = k.cssProps[t] || t) && (t = "float"),
          r && "get" in r && (i = r.get(e, !0, n)) !== $
            ? i
            : de
            ? de(e, t)
            : void 0
        );
      },
      swap: function (e, t, n) {
        var i = {};
        for (var r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in (n.call(e), t)) e.style[r] = i[r];
      },
    }),
    (k.curCSS = k.css),
    k.each(["height", "width"], function (e, r) {
      k.cssHooks[r] = {
        get: function (e, t, n) {
          var i;
          if (t)
            return 0 !== e.offsetWidth
              ? Ce(e, r, n)
              : (k.swap(e, xe, function () {
                  i = Ce(e, r, n);
                }),
                i);
        },
        set: function (e, t) {
          return ve.test(t)
            ? 0 <= (t = parseFloat(t))
              ? t + "px"
              : void 0
            : t;
        },
      };
    }),
    k.support.opacity ||
      (k.cssHooks.opacity = {
        get: function (e, t) {
          return ge.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            i = e.currentStyle,
            r = k.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (i && i.filter) || n.filter || "";
          ((n.zoom = 1) <= t &&
            "" === k.trim(o.replace(he, "")) &&
            (n.removeAttribute("filter"), i && !i.filter)) ||
            (n.filter = he.test(o) ? o.replace(he, r) : o + " " + r);
        },
      }),
    k(function () {
      k.support.reliableMarginRight ||
        (k.cssHooks.marginRight = {
          get: function (e, t) {
            var n;
            return (
              k.swap(e, { display: "inline-block" }, function () {
                n = t
                  ? de(e, "margin-right", "marginRight")
                  : e.style.marginRight;
              }),
              n
            );
          },
        });
    }),
    j.defaultView &&
      j.defaultView.getComputedStyle &&
      (fe = function (e, t) {
        var n, i, r;
        return (
          (t = t.replace(me, "-$1").toLowerCase()),
          (i = e.ownerDocument.defaultView) &&
            (r = i.getComputedStyle(e, null)) &&
            ("" !== (n = r.getPropertyValue(t)) ||
              k.contains(e.ownerDocument.documentElement, e) ||
              (n = k.style(e, t))),
          n
        );
      }),
    j.documentElement.currentStyle &&
      (pe = function (e, t) {
        var n,
          i,
          r,
          o = e.currentStyle && e.currentStyle[t],
          a = e.style;
        return (
          null === o && a && (r = a[t]) && (o = r),
          !ve.test(o) &&
            ye.test(o) &&
            ((n = a.left),
            (i = e.runtimeStyle && e.runtimeStyle.left) &&
              (e.runtimeStyle.left = e.currentStyle.left),
            (a.left = "fontSize" === t ? "1em" : o || 0),
            (o = a.pixelLeft + "px"),
            (a.left = n),
            i && (e.runtimeStyle.left = i)),
          "" === o ? "auto" : o
        );
      }),
    (de = fe || pe),
    k.expr &&
      k.expr.filters &&
      ((k.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
          n = e.offsetHeight;
        return (
          (0 === t && 0 === n) ||
          (!k.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || k.css(e, "display")))
        );
      }),
      (k.expr.filters.visible = function (e) {
        return !k.expr.filters.hidden(e);
      }));
  var Ne,
    Ee,
    ke = /%20/g,
    _e = /\[\]$/,
    Se = /\r?\n/g,
    Ae = /#.*$/,
    De = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Le = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Fe = /^(?:GET|HEAD)$/,
    $e = /^\/\//,
    je = /\?/,
    Me = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Oe = /^(?:select|textarea)/i,
    Ie = /\s+/,
    Be = /([?&])_=[^&]*/,
    He = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    Pe = k.fn.load,
    qe = {},
    Re = {},
    We = ["*/"] + ["*"];
  try {
    Ne = e.href;
  } catch (e) {
    ((Ne = j.createElement("a")).href = ""), (Ne = Ne.href);
  }
  function ze(s) {
    return function (e, t) {
      if (("string" != typeof e && ((t = e), (e = "*")), k.isFunction(t)))
        for (
          var n, i, r = e.toLowerCase().split(Ie), o = 0, a = r.length;
          o < a;
          o++
        )
          (n = r[o]),
            (i = /^\+/.test(n)) && (n = n.substr(1) || "*"),
            (s[n] = s[n] || [])[i ? "unshift" : "push"](t);
    };
  }
  function Xe(e, t, n, i, r, o) {
    (o = o || {})[(r = r || t.dataTypes[0])] = !0;
    for (
      var a, s = e[r], l = 0, c = s ? s.length : 0, u = e === qe;
      l < c && (u || !a);
      l++
    )
      "string" == typeof (a = s[l](t, n, i)) &&
        (!u || o[a]
          ? (a = $)
          : (t.dataTypes.unshift(a), (a = Xe(e, t, n, i, a, o))));
    return (!u && a) || o["*"] || (a = Xe(e, t, n, i, "*", o)), a;
  }
  function Ve(e, t) {
    var n,
      i,
      r = k.ajaxSettings.flatOptions || {};
    for (n in t) t[n] !== $ && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    i && k.extend(!0, e, i);
  }
  function Ue(n, e, i, r) {
    if (k.isArray(e))
      k.each(e, function (e, t) {
        i || _e.test(n)
          ? r(n, t)
          : Ue(
              n + "[" + ("object" == typeof t || k.isArray(t) ? e : "") + "]",
              t,
              i,
              r
            );
      });
    else if (i || null == e || "object" != typeof e) r(n, e);
    else for (var t in e) Ue(n + "[" + t + "]", e[t], i, r);
  }
  (Ee = He.exec(Ne.toLowerCase()) || []),
    k.fn.extend({
      load: function (e, t, i) {
        if ("string" != typeof e && Pe) return Pe.apply(this, arguments);
        if (!this.length) return this;
        var n = e.indexOf(" ");
        if (0 <= n) {
          var r = e.slice(n, e.length);
          e = e.slice(0, n);
        }
        var o = "GET";
        t &&
          (k.isFunction(t)
            ? ((i = t), (t = $))
            : "object" == typeof t &&
              ((t = k.param(t, k.ajaxSettings.traditional)), (o = "POST")));
        var a = this;
        return (
          k.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t,
            complete: function (e, t, n) {
              (n = e.responseText),
                e.isResolved() &&
                  (e.done(function (e) {
                    n = e;
                  }),
                  a.html(r ? k("<div>").append(n.replace(Me, "")).find(r) : n)),
                i && a.each(i, [n, t, e]);
            },
          }),
          this
        );
      },
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? k.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || Oe.test(this.nodeName) || Le.test(this.type))
            );
          })
          .map(function (e, n) {
            var t = k(this).val();
            return null == t
              ? null
              : k.isArray(t)
              ? k.map(t, function (e, t) {
                  return { name: n.name, value: e.replace(Se, "\r\n") };
                })
              : { name: n.name, value: t.replace(Se, "\r\n") };
          })
          .get();
      },
    }),
    k.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    k.each(["get", "post"], function (e, r) {
      k[r] = function (e, t, n, i) {
        return (
          k.isFunction(t) && ((i = i || n), (n = t), (t = $)),
          k.ajax({ type: r, url: e, data: t, success: n, dataType: i })
        );
      };
    }),
    k.extend({
      getScript: function (e, t) {
        return k.get(e, $, t, "script");
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      ajaxSetup: function (e, t) {
        return (
          t ? Ve(e, k.ajaxSettings) : ((t = e), (e = k.ajaxSettings)),
          Ve(e, t),
          e
        );
      },
      ajaxSettings: {
        url: Ne,
        isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
          Ee[1]
        ),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": We,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": F.String,
          "text html": !0,
          "text json": k.parseJSON,
          "text xml": k.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: ze(qe),
      ajaxTransport: ze(Re),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = $)), (t = t || {});
        var d,
          f,
          n,
          p,
          h,
          i,
          g,
          r,
          m = k.ajaxSetup({}, t),
          v = m.context || m,
          y = v !== m && (v.nodeType || v instanceof k) ? k(v) : k.event,
          b = k.Deferred(),
          x = k.Callbacks("once memory"),
          w = m.statusCode || {},
          o = {},
          a = {},
          T = 0,
          C = {
            readyState: 0,
            setRequestHeader: function (e, t) {
              if (!T) {
                var n = e.toLowerCase();
                (e = a[n] = a[n] || e), (o[e] = t);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === T ? f : null;
            },
            getResponseHeader: function (e) {
              var t;
              if (2 === T) {
                if (!n)
                  for (n = {}; (t = De.exec(f)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return t === $ ? null : t;
            },
            overrideMimeType: function (e) {
              return T || (m.mimeType = e), this;
            },
            abort: function (e) {
              return (e = e || "abort"), p && p.abort(e), s(0, e), this;
            },
          };
        function s(e, t, n, i) {
          if (2 !== T) {
            (T = 2),
              h && clearTimeout(h),
              (p = $),
              (f = i || ""),
              (C.readyState = 0 < e ? 4 : 0);
            var r,
              o,
              a,
              s,
              l,
              c = t,
              u = n
                ? (function (e, t, n) {
                    var i,
                      r,
                      o,
                      a,
                      s = e.contents,
                      l = e.dataTypes,
                      c = e.responseFields;
                    for (r in c) r in n && (t[c[r]] = n[r]);
                    for (; "*" === l[0]; )
                      l.shift(),
                        i === $ &&
                          (i =
                            e.mimeType || t.getResponseHeader("content-type"));
                    if (i)
                      for (r in s)
                        if (s[r] && s[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        a || (a = r);
                      }
                      o = o || a;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(m, C, n)
                : $;
            if ((200 <= e && e < 300) || 304 === e)
              if (
                (m.ifModified &&
                  ((s = C.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[d] = s),
                  (l = C.getResponseHeader("Etag")) && (k.etag[d] = l)),
                304 === e)
              )
                (c = "notmodified"), (r = !0);
              else
                try {
                  (o = (function (e, t) {
                    e.dataFilter && (t = e.dataFilter(t, e.dataType));
                    var n,
                      i,
                      r,
                      o,
                      a,
                      s,
                      l,
                      c,
                      u = e.dataTypes,
                      d = {},
                      f = u.length,
                      p = u[0];
                    for (n = 1; n < f; n++) {
                      if (1 === n)
                        for (i in e.converters)
                          "string" == typeof i &&
                            (d[i.toLowerCase()] = e.converters[i]);
                      if (((o = p), "*" === (p = u[n]))) p = o;
                      else if ("*" !== o && o !== p) {
                        if (!(s = d[(a = o + " " + p)] || d["* " + p]))
                          for (l in ((c = $), d))
                            if (
                              ((r = l.split(" "))[0] === o || "*" === r[0]) &&
                              (c = d[r[1] + " " + p])
                            ) {
                              !0 === (l = d[l]) ? (s = c) : !0 === c && (s = l);
                              break;
                            }
                        s ||
                          c ||
                          k.error(
                            "No conversion from " + a.replace(" ", " to ")
                          ),
                          !0 !== s && (t = s ? s(t) : c(l(t)));
                      }
                    }
                    return t;
                  })(m, u)),
                    (c = "success"),
                    (r = !0);
                } catch (e) {
                  (c = "parsererror"), (a = e);
                }
            else ((a = c) && !e) || ((c = "error"), e < 0 && (e = 0));
            (C.status = e),
              (C.statusText = "" + (t || c)),
              r ? b.resolveWith(v, [o, c, C]) : b.rejectWith(v, [C, c, a]),
              C.statusCode(w),
              (w = $),
              g &&
                y.trigger("ajax" + (r ? "Success" : "Error"), [
                  C,
                  m,
                  r ? o : a,
                ]),
              x.fireWith(v, [C, c]),
              g &&
                (y.trigger("ajaxComplete", [C, m]),
                --k.active || k.event.trigger("ajaxStop"));
          }
        }
        if (
          (b.promise(C),
          (C.success = C.done),
          (C.error = C.fail),
          (C.complete = x.add),
          (C.statusCode = function (e) {
            var t;
            if (e)
              if (T < 2) for (t in e) w[t] = [w[t], e[t]];
              else (t = e[C.status]), C.then(t, t);
            return this;
          }),
          (m.url = ((e || m.url) + "")
            .replace(Ae, "")
            .replace($e, Ee[1] + "//")),
          (m.dataTypes = k
            .trim(m.dataType || "*")
            .toLowerCase()
            .split(Ie)),
          null == m.crossDomain &&
            ((i = He.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !i ||
              (i[1] == Ee[1] &&
                i[2] == Ee[2] &&
                (i[3] || ("http:" === i[1] ? 80 : 443)) ==
                  (Ee[3] || ("http:" === Ee[1] ? 80 : 443)))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = k.param(m.data, m.traditional)),
          Xe(qe, m, t, C),
          2 === T)
        )
          return !1;
        if (
          ((g = m.global),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !Fe.test(m.type)),
          g && 0 == k.active++ && k.event.trigger("ajaxStart"),
          !m.hasContent &&
            (m.data &&
              ((m.url += (je.test(m.url) ? "&" : "?") + m.data), delete m.data),
            (d = m.url),
            !1 === m.cache))
        ) {
          var l = k.now(),
            c = m.url.replace(Be, "$1_=" + l);
          m.url =
            c + (c === m.url ? (je.test(m.url) ? "&" : "?") + "_=" + l : "");
        }
        for (r in (((m.data && m.hasContent && !1 !== m.contentType) ||
          t.contentType) &&
          C.setRequestHeader("Content-Type", m.contentType),
        m.ifModified &&
          ((d = d || m.url),
          k.lastModified[d] &&
            C.setRequestHeader("If-Modified-Since", k.lastModified[d]),
          k.etag[d] && C.setRequestHeader("If-None-Match", k.etag[d])),
        C.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + We + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          C.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || 2 === T))
          return C.abort(), !1;
        for (r in { success: 1, error: 1, complete: 1 }) C[r](m[r]);
        if ((p = Xe(Re, m, t, C))) {
          (C.readyState = 1),
            g && y.trigger("ajaxSend", [C, m]),
            m.async &&
              0 < m.timeout &&
              (h = setTimeout(function () {
                C.abort("timeout");
              }, m.timeout));
          try {
            (T = 1), p.send(o, s);
          } catch (e) {
            if (!(T < 2)) throw e;
            s(-1, e);
          }
        } else s(-1, "No Transport");
        return C;
      },
      param: function (e, t) {
        var n = [],
          i = function (e, t) {
            (t = k.isFunction(t) ? t() : t),
              (n[n.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (t === $ && (t = k.ajaxSettings.traditional),
          k.isArray(e) || (e.jquery && !k.isPlainObject(e)))
        )
          k.each(e, function () {
            i(this.name, this.value);
          });
        else for (var r in e) Ue(r, e[r], t, i);
        return n.join("&").replace(ke, "+");
      },
    }),
    k.extend({ active: 0, lastModified: {}, etag: {} });
  var Qe = k.now(),
    Ye = /(\=)\?(&|$)|\?\?/i;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return k.expando + "_" + Qe++;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i =
        "application/x-www-form-urlencoded" === e.contentType &&
        "string" == typeof e.data;
      if (
        "jsonp" === e.dataTypes[0] ||
        (!1 !== e.jsonp && (Ye.test(e.url) || (i && Ye.test(e.data))))
      ) {
        var r,
          o = (e.jsonpCallback = k.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a = F[o],
          s = e.url,
          l = e.data,
          c = "$1" + o + "$2";
        return (
          !1 !== e.jsonp &&
            ((s = s.replace(Ye, c)),
            e.url === s &&
              (i && (l = l.replace(Ye, c)),
              e.data === l &&
                (s += (/\?/.test(s) ? "&" : "?") + e.jsonp + "=" + o))),
          (e.url = s),
          (e.data = l),
          (F[o] = function (e) {
            r = [e];
          }),
          n.always(function () {
            (F[o] = a), r && k.isFunction(a) && F[o](r[0]);
          }),
          (e.converters["script json"] = function () {
            return r || k.error(o + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          "script"
        );
      }
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      e.cache === $ && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    k.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var i,
          r = j.head || j.getElementsByTagName("head")[0] || j.documentElement;
        return {
          send: function (e, n) {
            ((i = j.createElement("script")).async = "async"),
              t.scriptCharset && (i.charset = t.scriptCharset),
              (i.src = t.url),
              (i.onload = i.onreadystatechange = function (e, t) {
                (t || !i.readyState || /loaded|complete/.test(i.readyState)) &&
                  ((i.onload = i.onreadystatechange = null),
                  r && i.parentNode && r.removeChild(i),
                  (i = $),
                  t || n(200, "success"));
              }),
              r.insertBefore(i, r.firstChild);
          },
          abort: function () {
            i && i.onload(0, 1);
          },
        };
      }
    });
  var Ge,
    Je,
    Ke =
      !!F.ActiveXObject &&
      function () {
        for (var e in Ge) Ge[e](0, 1);
      },
    Ze = 0;
  function et() {
    try {
      return new F.XMLHttpRequest();
    } catch (e) {}
  }
  (k.ajaxSettings.xhr = F.ActiveXObject
    ? function () {
        return (
          (!this.isLocal && et()) ||
          (function () {
            try {
              return new F.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
          })()
        );
      }
    : et),
    (Je = k.ajaxSettings.xhr()),
    k.extend(k.support, { ajax: !!Je, cors: !!Je && "withCredentials" in Je }),
    k.support.ajax &&
      k.ajaxTransport(function (u) {
        var d;
        if (!u.crossDomain || k.support.cors)
          return {
            send: function (e, s) {
              var l,
                t,
                c = u.xhr();
              if (
                (u.username
                  ? c.open(u.type, u.url, u.async, u.username, u.password)
                  : c.open(u.type, u.url, u.async),
                u.xhrFields)
              )
                for (t in u.xhrFields) c[t] = u.xhrFields[t];
              u.mimeType &&
                c.overrideMimeType &&
                c.overrideMimeType(u.mimeType),
                u.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (t in e) c.setRequestHeader(t, e[t]);
              } catch (e) {}
              c.send((u.hasContent && u.data) || null),
                (d = function (e, t) {
                  var n, i, r, o, a;
                  try {
                    if (d && (t || 4 === c.readyState))
                      if (
                        ((d = $),
                        l &&
                          ((c.onreadystatechange = k.noop), Ke && delete Ge[l]),
                        t)
                      )
                        4 !== c.readyState && c.abort();
                      else {
                        (n = c.status),
                          (r = c.getAllResponseHeaders()),
                          (o = {}),
                          (a = c.responseXML) &&
                            a.documentElement &&
                            (o.xml = a),
                          (o.text = c.responseText);
                        try {
                          i = c.statusText;
                        } catch (e) {
                          i = "";
                        }
                        n || !u.isLocal || u.crossDomain
                          ? 1223 === n && (n = 204)
                          : (n = o.text ? 200 : 404);
                      }
                  } catch (e) {
                    t || s(-1, e);
                  }
                  o && s(n, i, o, r);
                }),
                u.async && 4 !== c.readyState
                  ? ((l = ++Ze),
                    Ke && (Ge || ((Ge = {}), k(F).unload(Ke)), (Ge[l] = d)),
                    (c.onreadystatechange = d))
                  : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
      });
  var tt,
    nt,
    it,
    rt,
    ot = {},
    at = /^(?:toggle|show|hide)$/,
    st = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    lt = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  function ct() {
    return setTimeout(ut, 0), (rt = k.now());
  }
  function ut() {
    rt = $;
  }
  function dt(e, t) {
    var n = {};
    return (
      k.each(lt.concat.apply([], lt.slice(0, t)), function () {
        n[this] = e;
      }),
      n
    );
  }
  function ft(e) {
    if (!ot[e]) {
      var t = j.body,
        n = k("<" + e + ">").appendTo(t),
        i = n.css("display");
      n.remove(),
        ("none" !== i && "" !== i) ||
          (tt ||
            ((tt = j.createElement(
              "iframe"
            )).frameBorder = tt.width = tt.height = 0),
          t.appendChild(tt),
          (nt && tt.createElement) ||
            ((nt = (tt.contentWindow || tt.contentDocument).document).write(
              ("CSS1Compat" === j.compatMode ? "<!doctype html>" : "") +
                "<html><body>"
            ),
            nt.close()),
          (n = nt.createElement(e)),
          nt.body.appendChild(n),
          (i = k.css(n, "display")),
          t.removeChild(tt)),
        (ot[e] = i);
    }
    return ot[e];
  }
  k.fn.extend({
    show: function (e, t, n) {
      var i, r;
      if (e || 0 === e) return this.animate(dt("show", 3), e, t, n);
      for (var o = 0, a = this.length; o < a; o++)
        (i = this[o]).style &&
          ((r = i.style.display),
          k._data(i, "olddisplay") ||
            "none" !== r ||
            (r = i.style.display = ""),
          "" === r &&
            "none" === k.css(i, "display") &&
            k._data(i, "olddisplay", ft(i.nodeName)));
      for (o = 0; o < a; o++)
        (i = this[o]).style &&
          (("" !== (r = i.style.display) && "none" !== r) ||
            (i.style.display = k._data(i, "olddisplay") || ""));
      return this;
    },
    hide: function (e, t, n) {
      if (e || 0 === e) return this.animate(dt("hide", 3), e, t, n);
      for (var i, r, o = 0, a = this.length; o < a; o++)
        (i = this[o]).style &&
          ("none" === (r = k.css(i, "display")) ||
            k._data(i, "olddisplay") ||
            k._data(i, "olddisplay", r));
      for (o = 0; o < a; o++) this[o].style && (this[o].style.display = "none");
      return this;
    },
    _toggle: k.fn.toggle,
    toggle: function (t, e, n) {
      var i = "boolean" == typeof t;
      return (
        k.isFunction(t) && k.isFunction(e)
          ? this._toggle.apply(this, arguments)
          : null == t || i
          ? this.each(function () {
              var e = i ? t : k(this).is(":hidden");
              k(this)[e ? "show" : "hide"]();
            })
          : this.animate(dt("toggle", 3), t, e, n),
        this
      );
    },
    fadeTo: function (e, t, n, i) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, n, i);
    },
    animate: function (f, e, t, n) {
      var p = k.speed(e, t, n);
      if (k.isEmptyObject(f)) return this.each(p.complete, [!1]);
      function i() {
        !1 === p.queue && k._mark(this);
        var e,
          t,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          c = k.extend({}, p),
          u = 1 === this.nodeType,
          d = u && k(this).is(":hidden");
        for (n in ((c.animatedProperties = {}), f)) {
          if (
            (n !== (e = k.camelCase(n)) && ((f[e] = f[n]), delete f[n]),
            (t = f[e]),
            k.isArray(t)
              ? ((c.animatedProperties[e] = t[1]), (t = f[e] = t[0]))
              : (c.animatedProperties[e] =
                  (c.specialEasing && c.specialEasing[e]) ||
                  c.easing ||
                  "swing"),
            ("hide" === t && d) || ("show" === t && !d))
          )
            return c.complete.call(this);
          !u ||
            ("height" !== e && "width" !== e) ||
            ((c.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            "inline" === k.css(this, "display") &&
              "none" === k.css(this, "float") &&
              (k.support.inlineBlockNeedsLayout &&
              "inline" !== ft(this.nodeName)
                ? (this.style.zoom = 1)
                : (this.style.display = "inline-block")));
        }
        for (n in (null != c.overflow && (this.style.overflow = "hidden"), f))
          (i = new k.fx(this, c, n)),
            (t = f[n]),
            at.test(t)
              ? (l =
                  k._data(this, "toggle" + n) ||
                  ("toggle" === t ? (d ? "show" : "hide") : 0))
                ? (k._data(this, "toggle" + n, "show" === l ? "hide" : "show"),
                  i[l]())
                : i[t]()
              : ((r = st.exec(t)),
                (o = i.cur()),
                r
                  ? ((a = parseFloat(r[2])),
                    "px" !== (s = r[3] || (k.cssNumber[n] ? "" : "px")) &&
                      (k.style(this, n, (a || 1) + s),
                      (o = ((a || 1) / i.cur()) * o),
                      k.style(this, n, o + s)),
                    r[1] && (a = ("-=" === r[1] ? -1 : 1) * a + o),
                    i.custom(o, a, s))
                  : i.custom(o, t, ""));
        return !0;
      }
      return (
        (f = k.extend({}, f)),
        !1 === p.queue ? this.each(i) : this.queue(p.queue, i)
      );
    },
    stop: function (o, e, a) {
      return (
        "string" != typeof o && ((a = e), (e = o), (o = $)),
        e && !1 !== o && this.queue(o || "fx", []),
        this.each(function () {
          var e,
            t = !1,
            n = k.timers,
            i = k._data(this);
          function r(e, t, n) {
            var i = t[n];
            k.removeData(e, n, !0), i.stop(a);
          }
          if ((a || k._unmark(!0, this), null == o))
            for (e in i)
              i[e] &&
                i[e].stop &&
                e.indexOf(".run") === e.length - 4 &&
                r(this, i, e);
          else i[(e = o + ".run")] && i[e].stop && r(this, i, e);
          for (e = n.length; e--; )
            n[e].elem !== this ||
              (null != o && n[e].queue !== o) ||
              (a ? n[e](!0) : n[e].saveState(), (t = !0), n.splice(e, 1));
          (a && t) || k.dequeue(this, o);
        })
      );
    },
  }),
    k.each(
      {
        slideDown: dt("show", 1),
        slideUp: dt("hide", 1),
        slideToggle: dt("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, i) {
        k.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    k.extend({
      speed: function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? k.extend({}, e)
            : {
                complete: n || (!n && t) || (k.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !k.isFunction(t) && t),
              };
        return (
          (i.duration = k.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in k.fx.speeds
            ? k.fx.speeds[i.duration]
            : k.fx.speeds._default),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function (e) {
            k.isFunction(i.old) && i.old.call(this),
              i.queue ? k.dequeue(this, i.queue) : !1 !== e && k._unmark(this);
          }),
          i
        );
      },
      easing: {
        linear: function (e, t, n, i) {
          return n + i * e;
        },
        swing: function (e, t, n, i) {
          return (-Math.cos(e * Math.PI) / 2 + 0.5) * i + n;
        },
      },
      timers: [],
      fx: function (e, t, n) {
        (this.options = t),
          (this.elem = e),
          (this.prop = n),
          (t.orig = t.orig || {});
      },
    }),
    (k.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (k.fx.step[this.prop] || k.fx.step._default)(this);
      },
      cur: function () {
        if (
          null != this.elem[this.prop] &&
          (!this.elem.style || null == this.elem.style[this.prop])
        )
          return this.elem[this.prop];
        var e,
          t = k.css(this.elem, this.prop);
        return isNaN((e = parseFloat(t))) ? (t && "auto" !== t ? t : 0) : e;
      },
      custom: function (e, t, n) {
        var i = this,
          r = k.fx;
        function o(e) {
          return i.step(e);
        }
        (this.startTime = rt || ct()),
          (this.end = t),
          (this.now = this.start = e),
          (this.pos = this.state = 0),
          (this.unit = n || this.unit || (k.cssNumber[this.prop] ? "" : "px")),
          (o.queue = this.options.queue),
          (o.elem = this.elem),
          (o.saveState = function () {
            i.options.hide &&
              k._data(i.elem, "fxshow" + i.prop) === $ &&
              k._data(i.elem, "fxshow" + i.prop, i.start);
          }),
          o() &&
            k.timers.push(o) &&
            !it &&
            (it = setInterval(r.tick, r.interval));
      },
      show: function () {
        var e = k._data(this.elem, "fxshow" + this.prop);
        (this.options.orig[this.prop] = e || k.style(this.elem, this.prop)),
          (this.options.show = !0),
          e !== $
            ? this.custom(this.cur(), e)
            : this.custom(
                "width" === this.prop || "height" === this.prop ? 1 : 0,
                this.cur()
              ),
          k(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] =
          k._data(this.elem, "fxshow" + this.prop) ||
          k.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (e) {
        var t,
          n,
          i,
          r = rt || ct(),
          o = !0,
          a = this.elem,
          s = this.options;
        if (e || r >= s.duration + this.startTime) {
          for (t in ((this.now = this.end),
          (this.pos = this.state = 1),
          this.update(),
          (s.animatedProperties[this.prop] = !0),
          s.animatedProperties))
            !0 !== s.animatedProperties[t] && (o = !1);
          if (o) {
            if (
              (null == s.overflow ||
                k.support.shrinkWrapBlocks ||
                k.each(["", "X", "Y"], function (e, t) {
                  a.style["overflow" + t] = s.overflow[e];
                }),
              s.hide && k(a).hide(),
              s.hide || s.show)
            )
              for (t in s.animatedProperties)
                k.style(a, t, s.orig[t]),
                  k.removeData(a, "fxshow" + t, !0),
                  k.removeData(a, "toggle" + t, !0);
            (i = s.complete) && ((s.complete = !1), i.call(a));
          }
          return !1;
        }
        return (
          s.duration == 1 / 0
            ? (this.now = r)
            : ((n = r - this.startTime),
              (this.state = n / s.duration),
              (this.pos = k.easing[s.animatedProperties[this.prop]](
                this.state,
                n,
                0,
                1,
                s.duration
              )),
              (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update(),
          !0
        );
      },
    }),
    k.extend(k.fx, {
      tick: function () {
        for (var e, t = k.timers, n = 0; n < t.length; n++)
          (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || k.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(it), (it = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (e) {
          k.style(e.elem, "opacity", e.now);
        },
        _default: function (e) {
          e.elem.style && null != e.elem.style[e.prop]
            ? (e.elem.style[e.prop] = e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    k.each(["width", "height"], function (e, t) {
      k.fx.step[t] = function (e) {
        k.style(e.elem, t, Math.max(0, e.now) + e.unit);
      };
    }),
    k.expr &&
      k.expr.filters &&
      (k.expr.filters.animated = function (t) {
        return k.grep(k.timers, function (e) {
          return t === e.elem;
        }).length;
      });
  var pt = /^t(?:able|d|h)$/i,
    ht = /^(?:body|html)$/i;
  function gt(e) {
    return k.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  "getBoundingClientRect" in j.documentElement
    ? (k.fn.offset = function (t) {
        var e,
          n = this[0];
        if (t)
          return this.each(function (e) {
            k.offset.setOffset(this, t, e);
          });
        if (!n || !n.ownerDocument) return null;
        if (n === n.ownerDocument.body) return k.offset.bodyOffset(n);
        try {
          e = n.getBoundingClientRect();
        } catch (e) {}
        var i = n.ownerDocument,
          r = i.documentElement;
        if (!e || !k.contains(r, n))
          return e ? { top: e.top, left: e.left } : { top: 0, left: 0 };
        var o = i.body,
          a = gt(i),
          s = r.clientTop || o.clientTop || 0,
          l = r.clientLeft || o.clientLeft || 0,
          c =
            a.pageYOffset || (k.support.boxModel && r.scrollTop) || o.scrollTop,
          u =
            a.pageXOffset ||
            (k.support.boxModel && r.scrollLeft) ||
            o.scrollLeft;
        return { top: e.top + c - s, left: e.left + u - l };
      })
    : (k.fn.offset = function (t) {
        var e = this[0];
        if (t)
          return this.each(function (e) {
            k.offset.setOffset(this, t, e);
          });
        if (!e || !e.ownerDocument) return null;
        if (e === e.ownerDocument.body) return k.offset.bodyOffset(e);
        for (
          var n,
            i = e.offsetParent,
            r = e.ownerDocument,
            o = r.documentElement,
            a = r.body,
            s = r.defaultView,
            l = s ? s.getComputedStyle(e, null) : e.currentStyle,
            c = e.offsetTop,
            u = e.offsetLeft;
          (e = e.parentNode) &&
          e !== a &&
          e !== o &&
          (!k.support.fixedPosition || "fixed" !== l.position);

        )
          (n = s ? s.getComputedStyle(e, null) : e.currentStyle),
            (c -= e.scrollTop),
            (u -= e.scrollLeft),
            e === i &&
              ((c += e.offsetTop),
              (u += e.offsetLeft),
              !k.support.doesNotAddBorder ||
                (k.support.doesAddBorderForTableAndCells &&
                  pt.test(e.nodeName)) ||
                ((c += parseFloat(n.borderTopWidth) || 0),
                (u += parseFloat(n.borderLeftWidth) || 0)),
              i,
              (i = e.offsetParent)),
            k.support.subtractsBorderForOverflowNotVisible &&
              "visible" !== n.overflow &&
              ((c += parseFloat(n.borderTopWidth) || 0),
              (u += parseFloat(n.borderLeftWidth) || 0)),
            (l = n);
        return (
          ("relative" !== l.position && "static" !== l.position) ||
            ((c += a.offsetTop), (u += a.offsetLeft)),
          k.support.fixedPosition &&
            "fixed" === l.position &&
            ((c += Math.max(o.scrollTop, a.scrollTop)),
            (u += Math.max(o.scrollLeft, a.scrollLeft))),
          { top: c, left: u }
        );
      }),
    (k.offset = {
      bodyOffset: function (e) {
        var t = e.offsetTop,
          n = e.offsetLeft;
        return (
          k.support.doesNotIncludeMarginInBodyOffset &&
            ((t += parseFloat(k.css(e, "marginTop")) || 0),
            (n += parseFloat(k.css(e, "marginLeft")) || 0)),
          { top: t, left: n }
        );
      },
      setOffset: function (e, t, n) {
        var i = k.css(e, "position");
        "static" === i && (e.style.position = "relative");
        var r,
          o,
          a = k(e),
          s = a.offset(),
          l = k.css(e, "top"),
          c = k.css(e, "left"),
          u = {},
          d = {};
        ("absolute" === i || "fixed" === i) && -1 < k.inArray("auto", [l, c])
          ? ((r = (d = a.position()).top), (o = d.left))
          : ((r = parseFloat(l) || 0), (o = parseFloat(c) || 0)),
          k.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (u.top = t.top - s.top + r),
          null != t.left && (u.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, u) : a.css(u);
      },
    }),
    k.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var e = this[0],
          t = this.offsetParent(),
          n = this.offset(),
          i = ht.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
        return (
          (n.top -= parseFloat(k.css(e, "marginTop")) || 0),
          (n.left -= parseFloat(k.css(e, "marginLeft")) || 0),
          (i.top += parseFloat(k.css(t[0], "borderTopWidth")) || 0),
          (i.left += parseFloat(k.css(t[0], "borderLeftWidth")) || 0),
          { top: n.top - i.top, left: n.left - i.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || j.body;
            e && !ht.test(e.nodeName) && "static" === k.css(e, "position");

          )
            e = e.offsetParent;
          return e;
        });
      },
    }),
    k.each(["Left", "Top"], function (i, e) {
      var r = "scroll" + e;
      k.fn[r] = function (e) {
        var t, n;
        return e === $
          ? (t = this[0])
            ? (n = gt(t))
              ? "pageXOffset" in n
                ? n[i ? "pageYOffset" : "pageXOffset"]
                : (k.support.boxModel && n.document.documentElement[r]) ||
                  n.document.body[r]
              : t[r]
            : null
          : this.each(function () {
              (n = gt(this))
                ? n.scrollTo(
                    i ? k(n).scrollLeft() : e,
                    i ? e : k(n).scrollTop()
                  )
                : (this[r] = e);
            });
      };
    }),
    k.each(["Height", "Width"], function (e, a) {
      var s = a.toLowerCase();
      (k.fn["inner" + a] = function () {
        var e = this[0];
        return e
          ? e.style
            ? parseFloat(k.css(e, s, "padding"))
            : this[s]()
          : null;
      }),
        (k.fn["outer" + a] = function (e) {
          var t = this[0];
          return t
            ? t.style
              ? parseFloat(k.css(t, s, e ? "margin" : "border"))
              : this[s]()
            : null;
        }),
        (k.fn[s] = function (n) {
          var e = this[0];
          if (!e) return null == n ? null : this;
          if (k.isFunction(n))
            return this.each(function (e) {
              var t = k(this);
              t[s](n.call(this, e, t[s]()));
            });
          if (k.isWindow(e)) {
            var t = e.document.documentElement["client" + a],
              i = e.document.body;
            return (
              ("CSS1Compat" === e.document.compatMode && t) ||
              (i && i["client" + a]) ||
              t
            );
          }
          if (9 === e.nodeType)
            return Math.max(
              e.documentElement["client" + a],
              e.body["scroll" + a],
              e.documentElement["scroll" + a],
              e.body["offset" + a],
              e.documentElement["offset" + a]
            );
          if (n === $) {
            var r = k.css(e, s),
              o = parseFloat(r);
            return k.isNumeric(o) ? o : r;
          }
          return this.css(s, "string" == typeof n ? n : n + "px");
        });
    }),
    (F.jQuery = F.$ = k),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return k;
      });
})(window),
  $.extend($.easing, {
    easeInQuad: function (e, t, n, i, r) {
      return i * (t /= r) * t + n;
    },
    easeOutQuad: function (e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n;
    },
  }),
  (function (a, e) {
    var o,
      s,
      l,
      c = {
        easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
        easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
        easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
        easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
        easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
        easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
        easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
      },
      t = a("<b/>"),
      u = "transitionend webkitTransitionEnd oTransitionEnd",
      d =
        ((o = t[0].style),
        (s = ["Webkit", "O", "ms", "Moz"]),
        (l = {}),
        function (e) {
          if (e in l) return l[e];
          var t,
            n = "",
            i = s.length,
            r = e.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
          if (r in o) n = e;
          else
            for (t = r.slice(0, 1).toUpperCase() + r.slice(1); i--; )
              if (s[i] + t in o) {
                n = (s[i] + t).replace(/([A-Z])/g, "-$1").toLowerCase();
                break;
              }
          return (l[e] = n);
        }),
      f = d("transition");
    (c.swing = c.easeInOutQuart),
      (a.fn.transition = function (e, i) {
        if (!f) return this.animate(e, i);
        i = a.extend(
          { duration: 500, easing: "swing", complete: a.noop },
          i || {}
        );
        var r = {},
          o = "";
        return (
          a.each(e, function (e, t) {
            var n = d(e);
            n && ((r[n] = t), (o += (o ? "," : "") + n));
          }),
          this.queue(function (e) {
            var t = a(this);
            function n() {
              t.unbind(u, n),
                t.css(f, "").vendorCss("transition-duration", "0"),
                i.complete(),
                setTimeout(e, 0);
            }
            setTimeout(function () {
              t
                .bind(u, n)
                .css(
                  f,
                  "all " + +i.duration / 1e3 + "s " + (c[i.easing] || i.easing)
                )
                .vendorCss("transition-property", o),
                setTimeout(function () {
                  t.css(r);
                }, 0);
            }, 0);
          }),
          this
        );
      }),
      (a.fn.transitionStop = function (e) {
        return this.stop(e).vendorCss(f, "");
      }),
      (a.fn.vendorCss = function (e, t) {
        if ("object" == typeof e) {
          for (var n in e) this.vendorCss(n, e[n]);
          return this;
        }
        return (e = d(e)), 1 < arguments.length ? this.css(e, t) : this.css(e);
      }),
      (a.support.transition = !!f);
  })(jQuery),
  (function (u) {
    var d = u(document);
    u.fn.fileClickjack = function (s) {
      s = u(s);
      var l = { top: -5e3, left: 0 },
        e = u.browser.webkit || u.browser.mozilla;
      if ((s.css(l).css({ opacity: 0, position: "absolute" }), e)) {
        function t(e) {
          s[0].click(), e.preventDefault();
        }
        return (
          this.each(function () {
            this.addEventListener("click", t, !1);
          }),
          this
        );
      }
      var o = s.width();
      function c(e, t) {
        var n = s.position(),
          i = s.offset(),
          r = {
            top: n.top - (i.top - t) - 5,
            left: n.left - (i.left - e) - o + 5,
          };
        s.css(r);
      }
      return (
        this.each(function () {
          var t,
            n,
            i,
            r = u(this),
            o = !1;
          function a(e) {
            e.pageY >= t.top &&
            e.pageX >= t.left &&
            e.pageY <= t.top + i &&
            e.pageX <= t.left + n
              ? c(e.pageX, e.pageY)
              : (d.unbind("mousemove", a), s.css(l), (o = !1));
          }
          r.mouseenter(function (e) {
            o ||
              ((o = !0),
              (t = r.offset()),
              (n = r.outerWidth()),
              (i = r.outerHeight()),
              d.bind("mousemove", a),
              c(e.pageX, e.pageY));
          });
        }),
        this
      );
    };
  })(jQuery);
var spriteCow = { MicroEvent: function () {} };
(spriteCow.MicroEvent.prototype = {
  bind: function (e, t) {
    (this._events = this._events || {}),
      (this._events[e] = this._events[e] || []),
      this._events[e].push(t);
  },
  unbind: function (e, t) {
    (this._events = this._events || {}),
      e in this._events != !1 &&
        this._events[e].splice(this._events[e].indexOf(t), 1);
  },
  trigger: function (e) {
    var t, n;
    if (
      (e instanceof $.Event
        ? ((t = e.type), (n = Array.prototype.slice.call(arguments, 0)))
        : ((t = e), (n = Array.prototype.slice.call(arguments, 1))),
      (this._events = this._events || {}),
      t in this._events == !1)
    )
      return e;
    for (var i = 0, r = this._events[t].length; i < r; i++)
      this._events[t][i].apply(this, n);
    return e;
  },
}),
  (spriteCow.Rect = (function () {
    function e(e, t, n, i) {
      (this.x = e), (this.y = t), (this.width = n), (this.height = i);
    }
    return e;
  })()),
  (spriteCow.ImgInput = (function () {
    function e(e, t, n) {
      var i = this,
        r = $(
          '<input type="file" accept="image/*" class="upload-input">'
        ).appendTo(document.body),
        o = $('<div class="start-buttons"/>').appendTo(e),
        a = $(
          '<div role="button" class="select-btn lg-button">Open Image</div>'
        ).appendTo(o),
        s = $(
          '<div role="button" class="demo-btn lg-button">Show Example</div>'
        ).appendTo(o);
      $('<div class="drop-indicator"></div>').appendTo(t);
      (i.fileName = "example.png"),
        (i._fileInput = r[0]),
        i._addDropEvents(t),
        r.change(function (e) {
          var t = this.files[0];
          t && i._openFileAsImg(t), (this.value = "");
        }),
        i.fileClickjackFor(a),
        s.click(function (e) {
          i.loadImgUrl(n), e.preventDefault();
        });
    }
    var t = (e.prototype = new spriteCow.MicroEvent());
    return (
      (t._openFileAsImg = function (e) {
        var t = this,
          n = new FileReader();
        (t._lastFile = e),
          (t.fileName = e.fileName || e.name),
          (n.onload = function () {
            t.loadImgUrl(n.result);
          }),
          n.readAsDataURL(e);
      }),
      (t._addDropEvents = function (n) {
        var e = n[0],
          i = this;
        e.addEventListener(
          "dragenter",
          function (e) {
            e.stopPropagation(), e.preventDefault();
          },
          !1
        ),
          e.addEventListener(
            "dragover",
            function (e) {
              e.stopPropagation(), e.preventDefault(), n.addClass("drag-over");
            },
            !1
          ),
          e.addEventListener(
            "dragleave",
            function (e) {
              e.stopPropagation(),
                e.preventDefault(),
                n.removeClass("drag-over");
            },
            !1
          ),
          e.addEventListener(
            "drop",
            function (e) {
              e.stopPropagation(),
                e.preventDefault(),
                n.removeClass("drag-over");
              var t = e.dataTransfer.files[0];
              t && "image" === t.type.slice(0, 5) && i._openFileAsImg(t);
            },
            !1
          );
      }),
      (t.loadImgUrl = function (e) {
        var t = this,
          n = new Image();
        (n.onload = function () {
          t.trigger("load", n);
        }),
          (n.src = e);
      }),
      (t.reloadLastFile = function () {
        this._lastFile && this._openFileAsImg(this._lastFile);
      }),
      (t.fileClickjackFor = function (e) {
        e.fileClickjack(this._fileInput);
      }),
      e
    );
  })()),
  (spriteCow.SpriteCanvas = (function () {
    function r(e, t, n, i) {
      if (0 === e[t + 3] && 0 === n[i + 3]) return !0;
      for (var r = 4; r--; ) if (e[t + r] !== n[i + r]) return !1;
      return !0;
    }
    function o(e, t) {
      for (var n = e.length; n--; ) if (!e[n] && !t[n]) return !1;
      return !0;
    }
    function n(e) {
      for (var t = e.length; t--; ) if (e[t]) return !1;
      return !0;
    }
    function e() {
      var e = $("<canvas/>")[0];
      (this.canvas = e),
        (this._context = e.getContext("2d")),
        (this._bgData = [0, 0, 0, 0]);
    }
    var t = (e.prototype = new spriteCow.MicroEvent());
    return (
      (t.setImg = function (e) {
        var t = this.canvas,
          n = this._context;
        (t.width = e.width),
          (t.height = e.height),
          n.drawImage(e, 0, 0),
          (this._img = e);
      }),
      (t.setBg = function (e) {
        this._bgData = e;
      }),
      (t.getBg = function () {
        return this._bgData;
      }),
      (t.trimBg = function (e) {
        var t;
        if ((e = this._restrictRectToBoundry(e)).width && e.height)
          for (
            ;
            (t = this._edgesAreBg(e)),
              (e = this._contractRect(e, t)).height && e.width && !n(t);

          );
        return e;
      }),
      (t._restrictRectToBoundry = function (e) {
        var t = this.canvas,
          n = Math.min(Math.max(e.x, 0), t.width),
          i = Math.min(Math.max(e.y, 0), t.height);
        return (
          n !== e.x && ((e.width -= n - e.x), (e.x = n)),
          i !== e.y && ((e.height -= i - e.y), (e.y = i)),
          (e.width = Math.min(e.width, t.width - e.x)),
          (e.height = Math.min(e.height, t.height - e.y)),
          e
        );
      }),
      (t.expandToSpriteBoundry = function (e, t) {
        for (
          var n = this._edgesAreBg(e), i = this._edgesAtBounds(e);
          !o(n, i);

        )
          (e = this._expandRect(e, n, i)),
            (n = this._edgesAreBg(e)),
            (i = this._edgesAtBounds(e));
        return (e = this._contractRect(e, n));
      }),
      (t._edgesAreBg = function (e) {
        this.canvas;
        var t = this._context,
          n = t.getImageData(e.x, e.y, e.width, 1).data,
          i = t.getImageData(e.x + e.width - 1, e.y, 1, e.height).data,
          r = t.getImageData(e.x, e.y + e.height - 1, e.width, 1).data,
          o = t.getImageData(e.x, e.y, 1, e.height).data;
        return [
          this._pixelsContainOnlyBg(n),
          this._pixelsContainOnlyBg(i),
          this._pixelsContainOnlyBg(r),
          this._pixelsContainOnlyBg(o),
        ];
      }),
      (t._edgesAtBounds = function (e) {
        var t = this.canvas;
        return [
          0 === e.y,
          e.x + e.width === t.width,
          e.y + e.height === t.height,
          0 === e.x,
        ];
      }),
      (t._pixelsContainOnlyBg = function (e) {
        for (var t = this._bgData, n = 0, i = e.length; n < i; n += 4)
          if (!r(t, 0, e, n)) return !1;
        return !0;
      }),
      (t._expandRect = function (e, t, n) {
        return (
          t[0] || n[0] || (e.y--, e.height++),
          t[1] || n[1] || e.width++,
          t[2] || n[2] || e.height++,
          t[3] || n[3] || (e.x--, e.width++),
          e
        );
      }),
      (t._contractRect = function (e, t) {
        return (
          t[0] && e.height && (e.y++, e.height--),
          t[1] && e.width && e.width--,
          t[2] && e.height && e.height--,
          t[3] && e.width && (e.x++, e.width--),
          e
        );
      }),
      e
    );
  })()),
  (function () {
    var l = (function () {
        function e(e) {
          this._$container = $('<div class="highlight"/>').appendTo(e);
        }
        var t = e.prototype;
        return (
          (t.moveTo = function (e, t) {
            var n = this._$container.transitionStop(!0),
              i = {
                left: e.x,
                top: e.y,
                width: e.width,
                height: e.height,
                opacity: 1,
              };
            e.width && e.height
              ? (n.css("display", "block"),
                t
                  ? n.transition(i, { duration: 200, easing: "easeOutQuad" })
                  : n.vendorCss(i))
              : this.hide(t);
          }),
          (t.hide = function (e) {
            var t = this._$container.transitionStop(!0);
            if (e) {
              var n = parseInt(t.css("left")),
                i = parseInt(t.css("top"));
              t.transition(
                {
                  left: n + t.width() / 2,
                  top: i + t.height() / 2,
                  width: 0,
                  height: 0,
                  opacity: 0,
                },
                { duration: 200, easing: "easeInQuad" }
              );
            } else t.css("display", "none");
          }),
          (t.setHighVisOnDark = function (e) {
            return (
              this._$container[e ? "addClass" : "removeClass"]("high-vis"), this
            );
          }),
          e
        );
      })(),
      c = (function () {
        function e(e, t) {
          (this._$canvas = t),
            (this._$eventArea = e),
            (this._context = t[0].getContext("2d")),
            (this._listeners = []);
        }
        var t = (e.prototype = new spriteCow.MicroEvent());
        return (
          (t.activate = function () {
            var n = this,
              e = (n._context, n._$eventArea);
            return (
              n._listeners.push([
                e,
                "mousedown",
                function (e) {
                  if (0 === e.button) {
                    var t = n._getColourAtMouse(e.pageX, e.pageY);
                    n.trigger("select", t), e.preventDefault();
                  }
                },
              ]),
              n._listeners.push([
                e,
                "mousemove",
                function (e) {
                  var t = n._getColourAtMouse(e.pageX, e.pageY);
                  n.trigger("move", t);
                },
              ]),
              n._listeners.forEach(function (e) {
                e[0].bind.apply(e[0], e.slice(1));
              }),
              n
            );
          }),
          (t.deactivate = function () {
            return (
              this._listeners.forEach(function (e) {
                e[0].unbind.apply(e[0], e.slice(1));
              }),
              this
            );
          }),
          (t._getColourAtMouse = function (e, t) {
            var n = this._$canvas.offset(),
              i = e - Math.floor(n.left),
              r = t - Math.floor(n.top);
            return this._context.getImageData(i, r, 1, 1).data;
          }),
          e
        );
      })(),
      u = (function () {
        function e(e, t, n) {
          (this._$area = t),
            (this._$eventArea = e),
            (this._highlight = n),
            (this._listeners = []);
        }
        var t = (e.prototype = new spriteCow.MicroEvent());
        return (
          (t.activate = function () {
            var n,
              i,
              r,
              o,
              a,
              s = this,
              l = new spriteCow.Rect(0, 0, 0, 0),
              e = $(document);
            return (
              s._listeners.push([
                s._$eventArea,
                "mousedown",
                function (e) {
                  if (0 === e.button) {
                    var t = s._$area.offset();
                    (n = e.pageX),
                      (i = e.pageY),
                      (r = Math.floor(e.pageX - t.left)),
                      (o = Math.floor(e.pageY - t.top)),
                      (l = new spriteCow.Rect(r, o, 1, 1)),
                      s._highlight.moveTo(l),
                      (a = !0),
                      e.preventDefault();
                  }
                },
              ]),
              s._listeners.push([
                e,
                "mousemove",
                function (e) {
                  a &&
                    ((l.x = r + Math.min(e.pageX - n, 0)),
                    (l.y = o + Math.min(e.pageY - i, 0)),
                    (l.width = Math.abs(e.pageX - n) || 1),
                    (l.height = Math.abs(e.pageY - i) || 1),
                    s._highlight.moveTo(l));
                },
              ]),
              s._listeners.push([
                e,
                "mouseup",
                function (e) {
                  a && ((a = !1), s.trigger("select", l));
                },
              ]),
              s._listeners.forEach(function (e) {
                e[0].bind.apply(e[0], e.slice(1));
              }),
              s
            );
          }),
          (t.deactivate = function () {
            return (
              this._listeners.forEach(function (e) {
                e[0].unbind.apply(e[0], e.slice(1));
              }),
              this
            );
          }),
          e
        );
      })();
    spriteCow.SpriteCanvasView = (function () {
      function e(n, e) {
        var i = this,
          t = $('<div class="sprite-canvas-container"/>'),
          r = $(n.canvas).appendTo(t),
          o = new l(t),
          a = new u(t, r, o),
          s = new c(r, r);
        (this._$container = t),
          (this._$bgElm = e),
          (this._spriteCanvas = n),
          (this._highlight = o),
          (this._selectArea = a),
          (this._selectColor = s),
          t.appendTo(e),
          a.bind("select", function (e) {
            var t = n.trimBg(e);
            t.width && t.height
              ? ((t = n.expandToSpriteBoundry(e)), i._setCurrentRect(t))
              : o.hide(!0);
          }),
          s.bind("select", function (e) {
            i.trigger("bgColorSelect", e), n.setBg(e);
          }),
          s.bind("move", function (e) {
            i.trigger("bgColorHover", e);
          });
      }
      var t = (e.prototype = new spriteCow.MicroEvent());
      return (
        (t._setCurrentRect = function (e) {
          this._highlight.moveTo(e, !0), this.trigger("rectChange", e);
        }),
        (t.setTool = function (e) {
          var t = this._selectArea,
            n = this._selectColor;
          switch ((this._highlight.hide(), t.deactivate(), n.deactivate(), e)) {
            case "select-sprite":
              t.activate();
              break;
            case "select-bg":
              n.activate();
          }
        }),
        (t.setBg = function (e) {
          $.support.transition
            ? this._$bgElm.transition(
                { "background-color": e },
                { duration: 500 }
              )
            : this._$bgElm.css({ "background-color": e }),
            this._highlight.setHighVisOnDark("#000" === e);
        }),
        e
      );
    })();
  })(),
  (function () {
    function e(e) {
      var t = $('<input type="text"/>').appendTo(e),
        i = this;
      (i._$input = t),
        (i._$editing = null),
        (i._inputBoxOffset = {
          top:
            -parseInt(t.css("padding-top"), 10) -
            parseInt(t.css("border-top-width"), 10),
          left:
            -parseInt(t.css("padding-left"), 10) -
            parseInt(t.css("border-left-width"), 10),
        }),
        t.hide(),
        e.on("click", "[data-inline-edit]", function (e) {
          var t = $(e.target),
            n = i._$editing;
          (n && t[0] === n[0]) || (i.edit(t), e.preventDefault());
        }),
        t
          .blur(function () {
            i.finishEdit();
          })
          .keyup(function (e) {
            13 === e.keyCode && (t[0].blur(), e.preventDefault());
          });
    }
    var t = (e.prototype = new spriteCow.MicroEvent());
    (t.edit = function (e) {
      var t = (e = $(e)).position();
      this._$editing && this.finishEdit(),
        (this._$editing = e),
        this._$input
          .show()
          .css({
            top: t.top + this._inputBoxOffset.top,
            left: t.left + this._inputBoxOffset.left,
            width: Math.max(e.width(), 50),
          })
          .val(e.text())
          .focus();
    }),
      (t.finishEdit = function () {
        if (this._$editing) {
          var e = this._$input.hide().val(),
            t = new $.Event(this._$editing.data("inlineEdit"));
          (t.val = e), this.trigger(t), (this._$editing = null);
        }
      }),
      (spriteCow.InlineEdit = e);
  })(),
  (spriteCow.CssOutput = (function () {
    function a(e) {
      return (e = Math.round(e)) ? e + "px" : "0";
    }
    function s(e) {
      return e
        ? ((t = 100 * e),
          (n = 3),
          (i = Math.pow(10, n || 0)),
          Math.round(t * i) / i + "%")
        : "0";
      var t, n, i;
    }
    function e(e) {
      var t = $('<div class="css-output"></div>').appendTo(e);
      (this._$container = t),
        (this._$code = $("<code>\n\n\n\n\n</code>").appendTo(t)),
        (this.backgroundFileName = ""),
        (this.path =
          "cssOutputPath" in localStorage
            ? localStorage.getItem("cssOutputPath")
            : "imgs/"),
        (this.rect = new spriteCow.Rect(0, 0, 0, 0)),
        (this.imgWidth = 0),
        (this.imgHeight = 0),
        (this.scaledWidth = 0),
        (this.scaledHeight = 0),
        (this.useTabs = !0),
        (this.useBgUrl = !0),
        (this.percentPos = !1),
        (this.bgSize = !1),
        (this.selector = ".sprite"),
        this._addEditEvents();
    }
    var t = e.prototype;
    return (
      (t.update = function () {
        var e,
          t = this.useTabs ? "\t" : "    ",
          n = this.rect,
          i = this._$code,
          r = this.bgSize ? this.scaledWidth / this.imgWidth : 1,
          o = this.bgSize ? this.scaledHeight / this.imgHeight : 1;
        i
          .empty()
          .append($('<span class="selector"/>').text(this.selector))
          .append(" {\n"),
          this.useBgUrl && this.backgroundFileName
            ? (i.append(t + "background: url('"),
              (e = $('<span class="file"/>')
                .append(
                  $('<span data-inline-edit="file-path"/>').text(this.path)
                )
                .append(
                  $('<span class="file-name"/>').text(this.backgroundFileName)
                )),
              i.append(e).append("') no-repeat "))
            : i.append(t + "background-position: "),
          this.percentPos
            ? i.append(
                s(n.x / -(n.width - this.imgWidth)) +
                  " " +
                  s(n.y / -(n.height - this.imgHeight)) +
                  ";\n"
              )
            : i.append(a(-n.x * r) + " " + a(-n.y * o) + ";\n"),
          this.bgSize &&
            i.append(
              t +
                "background-size: " +
                a(this.scaledWidth) +
                " " +
                a(this.scaledHeight) +
                ";\n"
            ),
          i.append(
            t +
              "width: " +
              a(n.width * r) +
              ";\n" +
              t +
              "height: " +
              a(n.height * o) +
              ";\n}"
          );
      }),
      (t._addEditEvents = function () {
        var n = this;
        new spriteCow.InlineEdit(n._$container).bind("file-path", function (e) {
          var t = e.val;
          (n.path = t), n.update(), localStorage.setItem("cssOutputPath", t);
        });
      }),
      e
    );
  })()),
  (spriteCow.Toolbar = (function () {
    function i(e) {
      var i = this,
        t = $(
          '<div class="toolbar"><span class="feedback"></span></div>'
        ).appendTo(e);
      t.on("mouseenter", "div[role=button]", function () {
        var e = $(this);
        i.feedback(e.hasClass("no-label") ? e.text() : "");
      }),
        t.on("click", "div[role=button]", function () {
          var e = $(this),
            t = e.data("toolName"),
            n = new $.Event(t);
          (n.isActive = e.hasClass("active")),
            i.trigger(n).isDefaultPrevented() ||
              (n.isActive ? i.deactivate(t) : i.activate(t)),
            n.preventDefault();
        }),
        (i.$container = t),
        (i._$feedback = t.find("span.feedback"));
    }
    i.createButton = function (e, t, n) {
      n = n || {};
      var i = $('<div role="button"/>').addClass(e).text(t).data("toolName", e);
      return (
        n.noLabel && i.addClass("no-label"), n.active && i.addClass("active"), i
      );
    };
    var e = (i.prototype = new spriteCow.MicroEvent());
    return (
      (e.addItem = function (e, t, n) {
        return (
          e instanceof spriteCow.ToolbarGroup
            ? this._$feedback.before(e.$container)
            : i.createButton(e, t, n).insertBefore(this._$feedback),
          this
        );
      }),
      (e.feedback = function (e, t) {
        var n = this._$feedback;
        return (
          n
            .transitionStop(!0)
            .text(e)
            .css({ opacity: 0.999, color: "#555", "font-weight": "normal" }),
          t
            ? (n.css("font-weight", "bold"),
              $.support.transition
                ? n.transition({ color: "red" }, { duration: 3e3 })
                : n.css("color", "red"))
            : n.animate({ _: 0 }, 3e3),
          n.transition({ opacity: 0 }, { duration: 2e3 }),
          this
        );
      }),
      (e.activate = function (e) {
        var t = this.$container.find("." + e + "[role=button]");
        return (
          t.closest(".toolbar-group").children().removeClass("active"),
          t.addClass("active"),
          this
        );
      }),
      (e.deactivate = function (e) {
        return (
          this.$container.find("." + e + "[role=button]").removeClass("active"),
          this
        );
      }),
      (e.isActive = function (e) {
        return this.$container
          .find("." + e + "[role=button]")
          .hasClass("active");
      }),
      i
    );
  })()),
  (function () {
    function e() {
      this.$container = $('<div class="toolbar-group"/>');
    }
    (e.prototype.addItem = function (e, t, n) {
      return (
        spriteCow.Toolbar.createButton(e, t, n).appendTo(this.$container), this
      );
    }),
      (spriteCow.ToolbarGroup = e);
  })(),
  (spriteCow.pageLayout = (function () {
    var i,
      r,
      o,
      a,
      s,
      l = $(".container"),
      c = $(".container > header"),
      u = $(".canvas-cell"),
      d = $(".canvas-inner"),
      f = $(".cow-logo"),
      p = $(".main-footer ul"),
      h = $(".main-footer p"),
      g = $(window),
      t = "intro";
    function n() {
      var e,
        t,
        n =
          ((t = l.width() / (g.width() - 40)), Math.round(1e4 * t) / 100 + "%");
      return (
        l.removeClass("intro"),
        (e = [
          {
            duration: 300,
            easing: "easeInOutQuad",
            targets: [
              [l, { width: "100%" }],
              [p, { padding: p.css("padding") }],
              [h, { padding: h.css("padding") }],
              [r, { opacity: 0 }],
            ],
            before: function () {
              l.width(n), d.scrollTop(0);
            },
          },
          {
            duration: 500,
            easing: "easeInOutQuad",
            targets: [
              [
                f,
                {
                  transform: f.vendorCss("transform"),
                  opacity: f.css("opacity"),
                  height: f.css("height"),
                  margin: 0,
                },
              ],
              [l, { width: "100%" }],
              [c, { height: c.height() }],
              [
                i,
                {
                  height: i.height(),
                  "padding-top": i.css("padding-top"),
                  "padding-bottom": i.css("padding-bottom"),
                },
              ],
              [u, { height: u.height() }],
              [
                a,
                {
                  height: a.height(),
                  "padding-top": a.css("padding-top"),
                  "padding-bottom": a.css("padding-bottom"),
                  "border-top-width": a.css("border-top-width"),
                  "border-bottom-width": a.css("border-bottom-width"),
                },
              ],
              [
                s,
                {
                  height: s.height(),
                  "padding-top": s.css("padding-top"),
                  "padding-bottom": s.css("padding-bottom"),
                  "border-top-width": s.css("border-top-width"),
                  "border-bottom-width": s.css("border-bottom-width"),
                },
              ],
            ],
            before: function () {},
          },
          { duration: 500, easing: "swing", targets: [[o, { opacity: 1 }]] },
        ]),
        l.addClass("intro"),
        e
      );
    }
    return {
      init: function () {
        (a = $(".toolbar.top")),
          (s = $(".toolbar.bottom")),
          (r = $(".start-buttons")),
          (i = $(".css-output")),
          (o = $(".sprite-canvas-container"));
      },
      toAppView: function () {
        if ("app" !== t) {
          var e = n();
          (t = "app"),
            $.support.transition
              ? (function e(t, n, i) {
                  var r = t[n + 1],
                    o = t[n],
                    a = o.duration,
                    s = o.easing;
                  function l() {
                    r ? e(t, n + 1, i) : i();
                  }
                  o.before && o.before(),
                    o.targets.forEach(function (e, t, n) {
                      e[0].transition(e[1], {
                        duration: a,
                        easing: s,
                        complete: t ? $.noop : l,
                      });
                    });
                })(e, 0, function () {
                  var t = [];
                  l.removeClass("intro"),
                    e.forEach(function (e) {
                      t = t.concat(e.targets);
                    }),
                    t.forEach(function (e) {
                      for (var t in e[1]) e[0].css(t, "");
                    });
                })
              : l.removeClass("intro");
        }
      },
    };
  })()),
  (spriteCow.FeatureTest = (function () {
    function e(e) {
      var t = $('<div class="feature-test-results" />'),
        n = $("<ul/>");
      (this._$container = t.appendTo(e)),
        (this._$results = n.appendTo(t)),
        (this.allPassed = !0);
    }
    return (
      (e.prototype.addResult = function (e, t) {
        (this.allPassed = this.allPassed && e),
          $("<li/>")
            .text(t)
            .prepend(
              e
                ? '<span class="pass">pass</span> '
                : '<span class="fail">fail</span> '
            )
            .appendTo(this._$results);
      }),
      e
    );
  })()),
  (spriteCow.featureTests = (function (e) {
    var t = e.createElement("a"),
      n = e.documentElement;
    var i = new spriteCow.FeatureTest($(".feature-test"));
    return (
      i.addResult(!!e.createElement("canvas").getContext, "<canvas> element"),
      i.addResult(!(!window.File || !window.FileReader), "File & FileReader"),
      i.addResult(!!t.addEventListener, "addEventListener on elements"),
      $.browser.opera && (n.className += " opera"),
      i
    );
  })(document)),
  (function (u) {
    !(function () {
      function n(e) {
        return 0 === e[3]
          ? "transparent"
          : "rgba(" +
              e[0] +
              ", " +
              e[1] +
              ", " +
              e[2] +
              ", " +
              String(e[3] / 255).slice(0, 5) +
              ")";
      }
      if (u.featureTests.allPassed) {
        var e = $(".canvas-inner"),
          t = $(".code-container"),
          i = $(".tutorial"),
          r = new u.SpriteCanvas(),
          o = new u.SpriteCanvasView(r, e),
          a = new u.ImgInput(e, e, i.attr("href")),
          s = new u.CssOutput(t),
          l = new u.Toolbar(".toolbar-container"),
          c = new u.Toolbar(".toolbar-bottom-container");
        l
          .addItem("open-img", "Open")
          .addItem("reload-img", "Reload Current Image", { noLabel: !0 })
          .addItem(
            new u.ToolbarGroup()
              .addItem("select-sprite", "Select Sprite", { active: !0 })
              .addItem("select-bg", "Pick Background")
          )
          .addItem("invert-bg", "Toggle Dark Background", { noLabel: !0 }),
          l.$container.addClass("top"),
          c
            .addItem("bg-size", "Scale for retina displays", { noLabel: !0 })
            .addItem("percent", "Percentage positioning", { noLabel: !0 }),
          c.$container.addClass("bottom"),
          u.pageLayout.init(),
          a.bind("load", function (e) {
            r.setImg(e),
              (s.imgWidth = r.canvas.width),
              (s.imgHeight = r.canvas.height),
              (s.scaledWidth = Math.round(s.imgWidth / 2)),
              (s.scaledHeight = Math.round(s.imgHeight / 2)),
              o.setTool("select-sprite"),
              (s.backgroundFileName = a.fileName),
              u.pageLayout.toAppView();
          }),
          o.bind("rectChange", function (e) {
            (s.rect = e),
              s.update(),
              e.width === r.canvas.width &&
                e.height === r.canvas.height &&
                l.feedback("Incorrect background colour set?", !0);
          }),
          o.bind("bgColorHover", function (e) {
            l.feedback(n(e));
          }),
          o.bind("bgColorSelect", function (e) {
            var t = "select-sprite";
            o.setTool(t),
              l.activate(t),
              l.feedback("Background set to " + n(e));
          }),
          l.bind("open-img", function (e) {
            e.preventDefault();
          }),
          l.bind("select-bg", function () {
            o.setTool("select-bg");
          }),
          l.bind("select-sprite", function () {
            o.setTool("select-sprite");
          }),
          l.bind("reload-img", function (e) {
            a.reloadLastFile(), e.preventDefault();
          }),
          a.fileClickjackFor(l.$container.find("div.open-img")),
          l.bind("invert-bg", function (e) {
            e.isActive ? o.setBg("#fff") : o.setBg("#000");
          }),
          c.bind("percent", function (e) {
            (s.percentPos = !e.isActive), s.update();
          }),
          c.bind("bg-size", function (e) {
            (s.bgSize = !e.isActive), s.update();
          }),
          i.click(function (e) {
            a.loadImgUrl(this.href), e.preventDefault();
          });
      } else document.documentElement.className += " not-supported";
    })();
  })(spriteCow);
