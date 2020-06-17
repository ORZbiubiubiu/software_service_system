(function (e) {
    function t(t) {
        for (var s, o, i = t[0], l = t[1], c = t[2], d = 0, m = []; d < i.length; d++) o = i[d], Object.prototype.hasOwnProperty.call(n, o) && n[o] && m.push(n[o][0]), n[o] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        u && u(t);
        while (m.length) m.shift()();
        return r.push.apply(r, c || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], s = !0, i = 1; i < a.length; i++) {
                var l = a[i];
                0 !== n[l] && (s = !1)
            }
            s && (r.splice(t--, 1), e = o(o.s = a[0]))
        }
        return e
    }

    var s = {}, n = {app: 0}, r = [];

    function o(t) {
        if (s[t]) return s[t].exports;
        var a = s[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }

    o.m = e, o.c = s, o.d = function (e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, o.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) o.d(a, s, function (t) {
            return e[t]
        }.bind(null, s));
        return a
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [], l = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var u = l;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "0332": function (e, t, a) {
        "use strict";
        var s = a("57f5"), n = a.n(s);
        n.a
    }, "034f": function (e, t, a) {
        "use strict";
        var s = a("85ec"), n = a.n(s);
        n.a
    }, "054b": function (e, t, a) {
    }, "0885": function (e, t, a) {
    }, "0d56": function (e, t, a) {
        "use strict";
        var s = a("39a2"), n = a.n(s);
        n.a
    }, "0eee": function (e, t, a) {
        "use strict";
        var s = a("e628"), n = a.n(s);
        n.a
    }, "12fc": function (e, t, a) {
        "use strict";
        var s = a("79bb"), n = a.n(s);
        n.a
    }, "16e3": function (e, t, a) {
        "use strict";
        var s = a("3a00"), n = a.n(s);
        n.a
    }, "1e34": function (e, t, a) {
    }, "2b54": function (e, t, a) {
    }, "2b55": function (e, t, a) {
        "use strict";
        var s = a("41f6"), n = a.n(s);
        n.a
    }, "35a4": function (e, t, a) {
    }, "35b2": function (e, t, a) {
        "use strict";
        var s = a("ef03"), n = a.n(s);
        n.a
    }, "39a2": function (e, t, a) {
    }, "3a00": function (e, t, a) {
    }, "3bd2": function (e, t, a) {
        "use strict";
        var s = a("b496"), n = a.n(s);
        n.a
    }, 4095: function (e, t, a) {
    }, "40fb": function (e, t, a) {
        "use strict";
        var s = a("8fd8"), n = a.n(s);
        n.a
    }, "41f6": function (e, t, a) {
    }, 4275: function (e, t, a) {
        "use strict";
        var s = a("1e34"), n = a.n(s);
        n.a
    }, "455d": function (e, t, a) {
        "use strict";
        var s = a("de0a"), n = a.n(s);
        n.a
    }, "46c6": function (e, t, a) {
        "use strict";
        var s = a("4095"), n = a.n(s);
        n.a
    }, "47da": function (e, t, a) {
    }, 4809: function (e, t, a) {
        "use strict";
        var s = a("35a4"), n = a.n(s);
        n.a
    }, "564d": function (e, t, a) {
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("ac1f"), a("5319"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"), n = (a("d3b7"), a("bc3a")), r = a.n(n), o = {baseURL: "", withCredentials: !0},
            i = r.a.create(o);
        i.interceptors.request.use((function (e) {
            return e
        }), (function (e) {
            return Promise.reject(e)
        })), i.interceptors.response.use((function (e) {
            return e
        }), (function (e) {
            return Promise.reject(e)
        })), Plugin.install = function (e, t) {
            e.axios = i, window.axios = i, Object.defineProperties(e.prototype, {
                axios: {
                    get: function () {
                        return i
                    }
                }, $axios: {
                    get: function () {
                        return i
                    }
                }
            })
        }, s["default"].use(Plugin);
        Plugin;
        var l = a("5c96"), c = a.n(l);
        a("0fae");
        s["default"].use(c.a);
        a("caad"), a("2532");
        var u = a("8c4f"), d = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {attrs: {id: "loginBox"}}, [a("div", {attrs: {id: "title"}}, [e._v(" 软件售后服务系统 ")]), a("el-form", {
                attrs: {
                    "label-width": "80px",
                    id: "loginform"
                }
            }, [a("el-form-item", {attrs: {label: ""}}, [a("el-input", {
                attrs: {
                    placeholder: "请输入用户名",
                    maxlength: "180"
                }, model: {
                    value: e.userName, callback: function (t) {
                        e.userName = t
                    }, expression: "userName"
                }
            })], 1), a("el-form-item", {attrs: {label: ""}}, [a("el-input", {
                attrs: {
                    "show-password": "",
                    placeholder: "请输入密码",
                    maxlength: "18"
                }, model: {
                    value: e.passWord, callback: function (t) {
                        e.passWord = t
                    }, expression: "passWord"
                }
            })], 1), a("el-form-item", {attrs: {label: ""}}, [a("el-select", {
                attrs: {
                    placeholder: "请选择用户登录类型",
                    clearable: ""
                }, model: {
                    value: e.Character, callback: function (t) {
                        e.Character = t
                    }, expression: "Character"
                }
            }, e._l(e.type, (function (e) {
                return a("el-option", {key: e.key, attrs: {label: e.key, value: e.key}})
            })), 1)], 1), a("el-form-item", [a("el-button", {
                attrs: {type: "primary"},
                on: {click: e.onSubmit}
            }, [e._v("登录")])], 1)], 1)], 1)
        }, m = [], f = (a("4d63"), a("25f0"), a("b85c")), g = (a("99af"), 0), h = 8;

        function p(e) {
            return C(v($(e), e.length * h))
        }

        function v(e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var a = 1732584193, s = -271733879, n = -1732584194, r = 271733878, o = 0; o < e.length; o += 16) {
                var i = a, l = s, c = n, u = r;
                a = _(a, s, n, r, e[o + 0], 7, -680876936), r = _(r, a, s, n, e[o + 1], 12, -389564586), n = _(n, r, a, s, e[o + 2], 17, 606105819), s = _(s, n, r, a, e[o + 3], 22, -1044525330), a = _(a, s, n, r, e[o + 4], 7, -176418897), r = _(r, a, s, n, e[o + 5], 12, 1200080426), n = _(n, r, a, s, e[o + 6], 17, -1473231341), s = _(s, n, r, a, e[o + 7], 22, -45705983), a = _(a, s, n, r, e[o + 8], 7, 1770035416), r = _(r, a, s, n, e[o + 9], 12, -1958414417), n = _(n, r, a, s, e[o + 10], 17, -42063), s = _(s, n, r, a, e[o + 11], 22, -1990404162), a = _(a, s, n, r, e[o + 12], 7, 1804603682), r = _(r, a, s, n, e[o + 13], 12, -40341101), n = _(n, r, a, s, e[o + 14], 17, -1502002290), s = _(s, n, r, a, e[o + 15], 22, 1236535329), a = w(a, s, n, r, e[o + 1], 5, -165796510), r = w(r, a, s, n, e[o + 6], 9, -1069501632), n = w(n, r, a, s, e[o + 11], 14, 643717713), s = w(s, n, r, a, e[o + 0], 20, -373897302), a = w(a, s, n, r, e[o + 5], 5, -701558691), r = w(r, a, s, n, e[o + 10], 9, 38016083), n = w(n, r, a, s, e[o + 15], 14, -660478335), s = w(s, n, r, a, e[o + 4], 20, -405537848), a = w(a, s, n, r, e[o + 9], 5, 568446438), r = w(r, a, s, n, e[o + 14], 9, -1019803690), n = w(n, r, a, s, e[o + 3], 14, -187363961), s = w(s, n, r, a, e[o + 8], 20, 1163531501), a = w(a, s, n, r, e[o + 13], 5, -1444681467), r = w(r, a, s, n, e[o + 2], 9, -51403784), n = w(n, r, a, s, e[o + 7], 14, 1735328473), s = w(s, n, r, a, e[o + 12], 20, -1926607734), a = y(a, s, n, r, e[o + 5], 4, -378558), r = y(r, a, s, n, e[o + 8], 11, -2022574463), n = y(n, r, a, s, e[o + 11], 16, 1839030562), s = y(s, n, r, a, e[o + 14], 23, -35309556), a = y(a, s, n, r, e[o + 1], 4, -1530992060), r = y(r, a, s, n, e[o + 4], 11, 1272893353), n = y(n, r, a, s, e[o + 7], 16, -155497632), s = y(s, n, r, a, e[o + 10], 23, -1094730640), a = y(a, s, n, r, e[o + 13], 4, 681279174), r = y(r, a, s, n, e[o + 0], 11, -358537222), n = y(n, r, a, s, e[o + 3], 16, -722521979), s = y(s, n, r, a, e[o + 6], 23, 76029189), a = y(a, s, n, r, e[o + 9], 4, -640364487), r = y(r, a, s, n, e[o + 12], 11, -421815835), n = y(n, r, a, s, e[o + 15], 16, 530742520), s = y(s, n, r, a, e[o + 2], 23, -995338651), a = S(a, s, n, r, e[o + 0], 6, -198630844), r = S(r, a, s, n, e[o + 7], 10, 1126891415), n = S(n, r, a, s, e[o + 14], 15, -1416354905), s = S(s, n, r, a, e[o + 5], 21, -57434055), a = S(a, s, n, r, e[o + 12], 6, 1700485571), r = S(r, a, s, n, e[o + 3], 10, -1894986606), n = S(n, r, a, s, e[o + 10], 15, -1051523), s = S(s, n, r, a, e[o + 1], 21, -2054922799), a = S(a, s, n, r, e[o + 8], 6, 1873313359), r = S(r, a, s, n, e[o + 15], 10, -30611744), n = S(n, r, a, s, e[o + 6], 15, -1560198380), s = S(s, n, r, a, e[o + 13], 21, 1309151649), a = S(a, s, n, r, e[o + 4], 6, -145523070), r = S(r, a, s, n, e[o + 11], 10, -1120210379), n = S(n, r, a, s, e[o + 2], 15, 718787259), s = S(s, n, r, a, e[o + 9], 21, -343485551), a = k(a, i), s = k(s, l), n = k(n, c), r = k(r, u)
            }
            return Array(a, s, n, r)
        }

        function b(e, t, a, s, n, r) {
            return k(x(k(k(t, e), k(s, r)), n), a)
        }

        function _(e, t, a, s, n, r, o) {
            return b(t & a | ~t & s, e, t, n, r, o)
        }

        function w(e, t, a, s, n, r, o) {
            return b(t & s | a & ~s, e, t, n, r, o)
        }

        function y(e, t, a, s, n, r, o) {
            return b(t ^ a ^ s, e, t, n, r, o)
        }

        function S(e, t, a, s, n, r, o) {
            return b(a ^ (t | ~s), e, t, n, r, o)
        }

        function k(e, t) {
            var a = (65535 & e) + (65535 & t), s = (e >> 16) + (t >> 16) + (a >> 16);
            return s << 16 | 65535 & a
        }

        function x(e, t) {
            return e << t | e >>> 32 - t
        }

        function $(e) {
            for (var t = Array(), a = (1 << h) - 1, s = 0; s < e.length * h; s += h) t[s >> 5] |= (e.charCodeAt(s / h) & a) << s % 32;
            return t
        }

        function C(e) {
            for (var t = g ? "0123456789ABCDEF" : "0123456789abcdef", a = "", s = 0; s < 4 * e.length; s++) a += t.charAt(e[s >> 2] >> s % 4 * 8 + 4 & 15) + t.charAt(e[s >> 2] >> s % 4 * 8 & 15);
            return a
        }

        var q = {
            name: "login", data: function () {
                return {
                    userName: "",
                    passWord: "",
                    Character: "",
                    message: "",
                    type: [{key: "客户"}, {key: "售后服务人员"}, {key: "系统管理员"}]
                }
            }, methods: {
                onSubmit: function () {
                    var e = this;
                    if (this.message = "", "" == this.userName || "" == this.passWord) {
                        if ("" == this.userName) return void this.$message({message: "用户名不可为空", type: "error"});
                        "" == this.passWord && this.$message({message: "密码不可为空", type: "error"})
                    } else {
                        var t, a = Object(f["a"])(this.userName);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                var s = t.value;
                                if (" " == s) {
                                    this.message = "用户名不可包含 空格!", this.$message({
                                        message: "用户名不可包含 空格!",
                                        type: "error"
                                    });
                                    break
                                }
                            }
                        } catch (c) {
                            a.e(c)
                        } finally {
                            a.f()
                        }
                        var n, r = Object(f["a"])(this.passWord);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var o = n.value;
                                if (" " == o) {
                                    this.$message({message: "密码不可包含 空格!", type: "error"}), this.message = "密码不可包含 空格!";
                                    break
                                }
                            }
                        } catch (c) {
                            r.e(c)
                        } finally {
                            r.f()
                        }
                        if ("" == this.Character && (this.$message({
                            message: "请选择用户登录类型!",
                            type: "error"
                        }), this.message = "请选择用户登录类型！"), I(this.userName) != this.userName && (this.$message({
                            message: "用户名不可包含敏感字符",
                            type: "error"
                        }), this.message = "用户名不可包含敏感字符"), "" == this.message) {
                            var i = this.passWord;
                            i = p(i), i = p(i);
                            var l = {name: this.userName, pwd: i};
                            this.$axios.post("/login", l, {headers: {}}).then((function (t) {
                                if ("success" == t.data.msg && null != t.data.data || null == t.data.msg) {
                                    var a = t.data.data.role, s = t.data.data.session_id;
                                    "1" == a ? (sessionStorage.setItem("name", e.userName), sessionStorage.setItem("token", s), sessionStorage.setItem("role", "Client"), e.$router.push({
                                        name: "purchased",
                                        params: {name: e.userName}
                                    })) : "2" == a || "4" == a ? (sessionStorage.setItem("name", e.userName), sessionStorage.setItem("token", s), sessionStorage.setItem("role", "Server"), "2" == a ? sessionStorage.setItem("isHeigher", !1) : sessionStorage.setItem("isHeigher", !0), e.$router.push({
                                        name: "myService",
                                        params: {name: e.userName}
                                    })) : "3" == a && (sessionStorage.setItem("name", e.userName), sessionStorage.setItem("token", s), sessionStorage.setItem("role", "Admin"), e.$router.push({
                                        name: "ServiceTable",
                                        params: {name: e.userName}
                                    })), e.$message({message: "登录成功！！", type: "success"})
                                } else "账号已冻结" == t.data.msg ? e.$message({
                                    message: "账号已冻结",
                                    type: "error"
                                }) : "账户或者密码错误" == t.data.msg && (e.$message({
                                    message: "账户或密码错误",
                                    type: "error"
                                }), e.message = "账户或密码错误！")
                            }))
                        }
                    }
                }
            }
        };

        function I(e) {
            for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
            return a
        }

        var N = q, T = (a("c8e1"), a("2877")), E = Object(T["a"])(N, d, m, !1, null, "051d301a", null), D = E.exports,
            z = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "adminarea"}}, [a("myheader"), a("div", {}, [a("el-menu", {
                    staticClass: "el-menu-vertical-demo",
                    attrs: {
                        "default-active": e.active,
                        router: e.router,
                        "background-color": "#545c64",
                        "text-color": "#fff",
                        "active-text-color": "#ffd04b",
                        id: "el_funcmenu"
                    },
                    on: {open: e.handleOpen, close: e.handleClose}
                }, [a("p"), e._l(e.funcs, (function (t) {
                    return a("el-menu-item", {
                        key: t.fncname,
                        attrs: {index: t.index}
                    }, [a("i", {staticClass: "el-icon-setting"}), a("span", {
                        attrs: {slot: "title"},
                        slot: "title"
                    }, [e._v(e._s(t.fncname))])])
                }))], 2), a("router-view")], 1)], 1)
            }, A = [], W = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "header_top"}, [a("h1", {attrs: {id: "title"}}, [e._v(" 软件售后服务系统 ")]), a("div", {attrs: {id: "userHead"}}, [a("div", {
                    staticClass: "el-icon-s-custom",
                    attrs: {id: "head_icon"}
                }), a("div", {attrs: {id: "userName"}}, [e._v(" " + e._s(e.username))]), a("span", {
                    attrs: {id: "logout"},
                    on: {click: e.logout}
                }, [e._v("退出")])])])
            }, L = [], j = (a("b0c0"), {
                data: function () {
                    return {username: "1"}
                }, name: "myheader", mounted: function () {
                    console.log("mounted -h" + sessionStorage.getItem("name"));
                    var e = sessionStorage.getItem("token");
                    null != e ? this.username = sessionStorage.getItem("name") : (console.log("token null"), this.$router.push({name: "Login"}))
                }, methods: {
                    logout: function () {
                        var e = this;
                        console.log(this.$route.params.name + "logout"), sessionStorage.removeItem("token"), this.$axios.post("/logout", {data: 0}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            e.$router.replace("/login").catch((function (e) {
                            }))
                        }))
                    }
                }
            }), P = j, F = (a("16e3"), Object(T["a"])(P, W, L, !1, null, "1c262fd6", null)), M = F.exports, O = {
                components: {myheader: M}, data: function () {
                    return {
                        router: !0,
                        active: "ServiceTable",
                        funcs: [{fncname: "售后服务异常处理", index: "ServiceTable"}, {
                            fncname: "权限设置",
                            index: "AccssTable"
                        }, {fncname: "FAQ数据库管理", index: "FaqTable"}, {
                            fncname: "已上线软件",
                            index: "SWTable"
                        }, {fncname: "添加用户", index: "AddUserForm"}, {fncname: "搜索", index: "Search"}, {
                            fncname: "用户行为",
                            index: "UserAction"
                        }]
                    }
                }, name: "Menu_Admin", mounted: function () {
                    console.log("Menu_Admin");
                    this.$route.path;
                    console.log("active" + this.active), this.$router.push({path: "/admin/" + this.active}).catch((function (e) {
                    }))
                }, methods: {
                    handleOpen: function (e, t) {
                    }, handleClose: function (e, t) {
                    }
                }
            }, R = O, B = (a("0d56"), Object(T["a"])(R, z, A, !1, null, "1ee02ebe", null)), V = B.exports, H = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("el-dialog", {
                    attrs: {
                        title: e.dia_title,
                        visible: e.dialogFormVisible
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogFormVisible = t
                        }
                    }
                }, [a("p", [a("span", [e._v(" 软件售后服务编号:")]), a("span", [e._v(e._s(e.serviceId))])]), a("p", [a("span", [e._v("当前状态:")]), a("span", [e._v(e._s(e.serviceState))])]), a("p", [a("span", [e._v("申请人:")]), a("span", [e._v(e._s(e.Applicant))])]), a("p", [a("span", [e._v("申请原因:")]), a("span", [e._v(e._s(e.Application_reason))])]), a("p", [a("span", [e._v("请选择更换人员的系统名称：")]), a("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.change_name,
                        expression: "change_name"
                    }], attrs: {name: "", id: "", placeholder: "请选择"}, on: {
                        change: function (t) {
                            var a = Array.prototype.filter.call(t.target.options, (function (e) {
                                return e.selected
                            })).map((function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            }));
                            e.change_name = t.target.multiple ? a : a[0]
                        }
                    }
                }, e._l(e.serverlist, (function (e) {
                    return a("option", {key: e.name, attrs: {label: e.name}, domProps: {value: e.name}})
                })), 0)]), a("div", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (t) {
                            e.dialogFormVisible = !1
                        }
                    }
                }, [e._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.commit}
                }, [e._v("确 定")])], 1)]), a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.tableData,
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {label: "软件售后服务编号", width: "180"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("div", {
                                staticClass: "name-wrapper",
                                attrs: {slot: "reference"},
                                slot: "reference"
                            }, [a("el-tag", {attrs: {size: "medium"}}, [e._v(e._s(t.row.serviceId))])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        label: "当前状态",
                        width: "180"
                    }
                }, [[a("span", [e._v("异常")])]], 2), a("el-table-column", {
                    attrs: {label: "申请人", width: "180"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("div", {
                                staticClass: "name-wrapper",
                                attrs: {slot: "reference"},
                                slot: "reference"
                            }, [a("el-tag", {attrs: {size: "medium"}}, [e._v(e._s(t.row.Applicants))])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "申请原因", width: "180"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("span", {staticStyle: {overflow: "hidden"}}, [e._v(e._s(t.row.Application_reason))])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "解决方式", width: "180"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("select", {
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.row.solution,
                                    expression: "scope.row.solution"
                                }],
                                attrs: {name: "", width: "180", placeholder: "请选择", clearable: ""},
                                on: {
                                    change: function (a) {
                                        var s = Array.prototype.filter.call(a.target.options, (function (e) {
                                            return e.selected
                                        })).map((function (e) {
                                            var t = "_value" in e ? e._value : e.value;
                                            return t
                                        }));
                                        e.$set(t.row, "solution", a.target.multiple ? s : s[0])
                                    }
                                }
                            }, [a("option", {attrs: {value: "换人"}}, [e._v("换人")])]), a("el-button", {
                                attrs: {size: "mini"},
                                on: {
                                    click: function (a) {
                                        return e.solution(t.row.serviceId, t.row.serviceState, t.row.Applicants, t.row.Application_reason, t.row.solution, t.row.mesid)
                                    }
                                }
                            }, [e._v(" 提交 ")])]
                        }
                    }])
                })], 1), a("div", {
                    staticClass: "paging",
                    attrs: {id: "service_page"}
                }, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next",
                        total: e.total,
                        "current-page": e.current_page,
                        "page-size": e.page_size
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1)], 1)
            }, U = [], G = {
                name: "ServiceTable", props: {msg: String}, mounted: function () {
                    console.log("ST mounted")
                }, created: function () {
                    console.log("ST mounted"), K(1, this)
                }, data: function () {
                    return {
                        loading: !0,
                        current_page: 1,
                        page_size: 11,
                        total: 34,
                        serverlist: [{name: "name1"}, {name: "name2"}],
                        dialogFormVisible: !1,
                        msgid: "",
                        serviceId: "1",
                        serviceState: "1",
                        Application_reason: "1",
                        Applicant: "1",
                        change_name: "",
                        dia_title: "",
                        tableData: [{
                            mesid: "",
                            serviceId: "SDA1000",
                            serviceState: "正在处理",
                            Applicants: "东北爷们",
                            Application_reason: "韭菜卷大葱不好吃",
                            solution: ""
                        }, {
                            mesid: "",
                            serviceId: "SDA1000",
                            serviceState: "正在处理",
                            Applicants: "东北爷们",
                            Application_reason: "韭菜卷大葱不好吃",
                            solution: ""
                        }]
                    }
                }, methods: {
                    handleCurrentChange: function (e) {
                        var t = this;
                        console.log("handleCurrentChange"), this.current_page = e, K(this.current_page, t)
                    }, solution: function (e, t, a, s, n, r) {
                        var o = this;
                        if (console.log("solution"), "" == n) this.$message({message: "请选择解决方式！", type: "warning"}); else {
                            this.msgid = r, this.serviceId = e, this.Applicant = a, this.Application_reason = s, this.serviceState = t, this.dia_title = n;
                            var i = {serverName: a};
                            this.$axios.post("/admin/getReplaceName", i, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                                var t = e.data.data.list;
                                o.serverlist = [];
                                for (var a = 0; a < t.length; a++) {
                                    var s = t[a];
                                    o.serverlist.push({name: s})
                                }
                                0 == t.length ? (o.change_name = "", o.$message({
                                    message: "没有可更换人员!",
                                    type: "warning"
                                })) : o.dialogFormVisible = !0
                            }))
                        }
                    }, commit: function () {
                        var e = this;
                        console.log("commit"), "" == this.serverlist.length && this.$message({
                            message: "没有可更换人员!",
                            type: "warning"
                        });
                        var t = {msgid: this.msgid, serverName: this.change_name, serviceid: this.serviceId};
                        this.$axios.post("/admin/huanren", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            "更新成功" == t.data.data.message ? e.$message({
                                message: "更换售后服务人员" + e.change_name + "成功!",
                                type: "success"
                            }) : e.$message.error("更换售后服务人员" + e.change_name + "失败!"), K(e.current_page, e)
                        })), this.dialogFormVisible = !1
                    }
                }
            };

        function K(e, t) {
            t.loading = !0, console.log(" service_error_page_getdata");
            var a = {pageNo: e, pageSize: t.page_size};
            t.$axios.post("/admin/ServiceInfList", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                var a = e.data.data.list, s = e.data.message;
                t.total = s, t.tableData = [];
                for (var n = 0; n < a.length; n++) {
                    var r = a[n];
                    t.tableData.push({
                        mesid: r.mesid,
                        serviceId: r.serviceid,
                        serviceState: "element.serviceState",
                        Applicants: r.getName,
                        Application_reason: r.reason,
                        solution: ""
                    }), console.log(t.tableData[n])
                }
                t.loading = !1
            }))
        }

        var J = G, Y = (a("455d"), Object(T["a"])(J, H, U, !1, null, "3f6f655a", null)), Q = Y.exports,
            X = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "clearfix",
                    attrs: {id: "content"}
                }, [a("Header"), a("div", {attrs: {id: "menu"}}, [a("div", {
                    staticClass: "clearfix",
                    attrs: {id: "nav"}
                }, [a("el-col", {attrs: {span: 24}}, [a("el-menu", {
                    staticClass: "el-menu-vertical-demo",
                    attrs: {
                        "default-active": "0",
                        "background-color": "#545c64",
                        "text-color": "#fff",
                        "active-text-color": "#dddddd"
                    },
                    on: {select: e.handleSelect}
                }, e._l(e.funcs, (function (t) {
                    return a("el-menu-item", {
                        directives: [{
                            name: "statistic",
                            rawName: "v-statistic",
                            value: t.fncname,
                            expression: "item.fncname"
                        }], key: t.id, attrs: {index: t.index}
                    }, [a("i", {staticClass: "el-icon-menu"}), a("span", {
                        attrs: {slot: "title"},
                        slot: "title"
                    }, [e._v(e._s(t.fncname))])])
                })), 1)], 1)], 1)]), a("div", {attrs: {id: "main"}}, [a("router-view")], 1)], 1)
            }, Z = [], ee = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "header"}, [a("h1", {
                    staticClass: "v-center",
                    attrs: {id: "title"}
                }, [e._v(" 软件售后服务系统 ")]), a("div", {
                    staticClass: "v-center",
                    attrs: {id: "userinfo"}
                }, [e._m(0), a("span", {attrs: {id: "username"}}, [e._v(" " + e._s(e.username) + " ")]), a("div", {attrs: {id: "logout"}}, [a("el-link", {
                    attrs: {underline: !1},
                    on: {click: e.logout}
                }, [e._v("退出")])], 1)])])
            }, te = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "avatar"}}, [a("i", {staticClass: "el-icon-s-custom"})])
            }], ae = {
                data: function () {
                    return {}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }
                }, name: "myheader", methods: {
                    logout: function () {
                        var e = this;
                        this.$axios.post("/logout", {token: this.token}).then((function (t) {
                            sessionStorage.clear(), e.$store.commit("clearToken"), e.$router.push("/login"), e.$message({
                                type: "success",
                                message: "退出成功!"
                            })
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }
                }
            }, se = ae, ne = (a("d83f"), Object(T["a"])(se, ee, te, !1, null, "449f865e", null)), re = ne.exports, oe = {
                name: "server", components: {Header: re}, data: function () {
                    return {
                        funcs: [{fncname: "我的售后", index: "0"}, {fncname: "售后提醒", index: "1"}, {
                            fncname: "售后管理",
                            index: "2"
                        }, {fncname: "用户交互", index: "3"}]
                    }
                }, methods: {
                    handleSelect: function (e, t) {
                        console.log(e, t), 0 == e && this.$router.push({path: "/server/myService"}), 1 == e && this.$router.push({path: "/server/getMsg"}), 2 == e && this.$router.push({path: "/server/management"}), 3 == e && this.$router.push({path: "/server/sendMsg"})
                    }
                }
            }, ie = oe, le = (a("0eee"), Object(T["a"])(ie, X, Z, !1, null, "413398b5", null)), ce = le.exports,
            ue = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "clearfix",
                    attrs: {id: "content"}
                }, [a("Header"), a("div", {attrs: {id: "menu"}}, [a("div", {
                    staticClass: "clearfix",
                    attrs: {id: "nav"}
                }, [a("el-col", {attrs: {span: 24}}, [a("el-menu", {
                    staticClass: "el-menu-vertical-demo",
                    attrs: {
                        "default-active": "0",
                        "background-color": "#545c64",
                        "text-color": "#fff",
                        "active-text-color": "#dddddd"
                    },
                    on: {select: e.handleSelect}
                }, e._l(e.funcs, (function (t) {
                    return a("el-menu-item", {
                        directives: [{
                            name: "statistic",
                            rawName: "v-statistic",
                            value: t.fncname,
                            expression: "item.fncname"
                        }], key: t.id, attrs: {index: t.index}
                    }, [a("i", {staticClass: "el-icon-menu"}), a("span", {
                        attrs: {slot: "title"},
                        slot: "title"
                    }, [e._v(e._s(t.fncname))])])
                })), 1)], 1)], 1)]), a("div", {attrs: {id: "main"}}, [a("router-view")], 1)], 1)
            }, de = [], me = {
                components: {Header: re}, data: function () {
                    return {
                        funcs: [{fncname: "购买过的产品", index: "0"}, {fncname: "已申请售后的产品", index: "1"}, {
                            fncname: "申请售后",
                            index: "2"
                        }, {fncname: "发送消息", index: "3"}, {fncname: "我的消息", index: "4"}, {
                            fncname: "软件更新信息",
                            index: "5"
                        }, {fncname: "faq搜索", index: "6"}], orderData: []
                    }
                }, name: "client", mounted: function () {
                    var e = sessionStorage.getItem("name"), t = sessionStorage.getItem("token");
                    this.$store.commit("setUsername", e), this.$store.commit("setToken", t)
                }, methods: {
                    handleSelect: function (e, t) {
                        console.log(e, t), 0 == e && this.$router.push({path: "/client/purchased"}), 1 == e && this.$router.push({path: "/client/service"}), 2 == e && this.$router.push({path: "/client/apply"}), 3 == e && this.$router.push({path: "/client/sendMsg"}), 4 == e && this.$router.push({path: "/client/receiveMsg"}), 5 == e && this.$router.push({path: "/client/updateInfo"}), 6 == e && this.$router.push({path: "/client/faq"})
                    }
                }
            }, fe = me, ge = (a("35b2"), Object(T["a"])(fe, ue, de, !1, null, "2f5824c5", null)), he = ge.exports,
            pe = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "purchased"}}, [a("el-container", [a("el-header", [e._v("您购买过的产品有:")]), a("el-main", [a("el-table", {
                    key: "0",
                    attrs: {data: e.orderData.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize)}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "buyDate",
                        label: "购买日期",
                        width: "140"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "softwareName",
                        label: "产品名称",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "orderId",
                        label: "订单号"
                    }
                }), a("el-table-column", {
                    attrs: {label: "当前状态"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 == t.row.serviceState ? a("span", [e._v("正在进行售后处理")]) : e._e(), 0 == t.row.serviceState ? a("span", [e._v("正常")]) : e._e()]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [0 == t.row.serviceState ? a("el-button", {
                                attrs: {type: "text", size: "medium"},
                                on: {
                                    click: function (a) {
                                        return e.apply(t.row.softwareName)
                                    }
                                }
                            }, [e._v("申请售后服务")]) : e._e(), 1 == t.row.serviceState ? a("el-button", {
                                attrs: {
                                    type: "text",
                                    size: "medium"
                                }, on: {
                                    click: function (a) {
                                        return e.viewDetail(t.row.softwareName)
                                    }
                                }
                            }, [e._v("查看详情")]) : e._e()]
                        }
                    }])
                })], 1), 0 != e.orderData.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.orderData.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)], 1)], 1)
            }, ve = [], be = (a("4de4"), a("1276"), {
                name: "purchased", data: function () {
                    return {currentPage: 1, pagesize: 7}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, orderData: function () {
                        return this.$store.state.orderData
                    }
                }, created: function () {
                    var e = sessionStorage.getItem("name"), t = sessionStorage.getItem("token");
                    this.$store.commit("setUsername", e), this.$store.commit("setToken", t)
                }, mounted: function () {
                    this.getOrder()
                }, methods: {
                    getOrder: function () {
                        var e = this;
                        this.$axios.post("/client/user_show_software", {serverName: this.username}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (t) {
                            var a = t.data.data.list, s = t.data.data.message.split("#");
                            a = a.filter((function (e, t) {
                                for (var a = 0; a < s.length; a++) {
                                    if (s[a] == e.softwareName) return e.serviceState = 1, e;
                                    e.serviceState = 0
                                }
                                return e
                            })), e.$store.commit("setOrder", a);
                            for (var n = [], r = 0; r < e.orderData.length; r++) 0 == e.orderData[r].serviceState && n.push({value: e.orderData[r].softwareName});
                            e.$store.commit("setSoftwareNames", n)
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e
                    }, viewDetail: function (e) {
                        this.$router.push({path: "/client/service"})
                    }, apply: function (e) {
                        this.$router.push({path: "/client/apply"}), this.$store.commit("setSoftwareName", e)
                    }
                }
            }), _e = be, we = (a("46c6"), Object(T["a"])(_e, pe, ve, !1, null, null, null)), ye = we.exports,
            Se = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "service"}}, [e._m(0), a("el-table", {
                    key: "1",
                    ref: "serviceTable",
                    attrs: {data: e.serviceData.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize)}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "softwareName",
                        label: "产品名称",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "serverName",
                        label: "服务人员",
                        width: "100"
                    }
                }), a("el-table-column", {
                    attrs: {label: "当前状态"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 == e.serverState(t.row.serviceState) ? a("span", [e._v("正在处理")]) : e._e(), -1 == e.serverState(t.row.serviceState) ? a("span", [e._v("正在切换服务人员")]) : e._e(), 0 == e.serverState(t.row.serviceState) ? a("span", [e._v("已经完成")]) : e._e()]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-button", {
                                attrs: {type: "text", size: "medium"}, on: {
                                    click: function (a) {
                                        return e.toggleExpand(t.row)
                                    }
                                }
                            }, [e._v(e._s(t.row.expansion ? "收起" : "查看详情"))])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {type: "expand", width: "1"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-form", {
                                staticClass: "demo-table-expand",
                                attrs: {"label-position": "left", inline: ""}
                            }, [a("el-form-item", {
                                attrs: {
                                    label: "产品名称",
                                    width: "300px"
                                }
                            }, [a("span", [e._v(e._s(t.row.softwareName))])]), a("el-form-item", {attrs: {label: "服务人员"}}, [a("span", [e._v(e._s(t.row.serverName))])]), a("el-form-item", {attrs: {label: "问题类型"}}, [a("span", [e._v(e._s(t.row.serviceKind))])]), a("el-form-item", {attrs: {label: "问题描述"}}, [a("span", [e._v(e._s(t.row.serviceInfo))])]), a("el-form-item", {attrs: {label: "当前状态"}}, [1 == e.serverState(t.row.serviceState) ? a("span", [e._v("正在处理")]) : e._e(), -1 == e.serverState(t.row.serviceState) ? a("span", [e._v("你的服务人员遇到了一些问题，因此他正在申请换人")]) : e._e(), 0 == e.serverState(t.row.serviceState) ? a("span", [e._v("已经完成")]) : e._e()])], 1)]
                        }
                    }])
                })], 1), 0 != e.serviceData.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.serviceData.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)
            }, ke = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "headline"}, [a("span", {staticClass: "title"}, [e._v("您正在申请售后的产品有:")])])
            }], xe = (a("d81d"), a("fb6a"), {
                name: "service", data: function () {
                    return {currentPage: 1, pagesize: 7}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, serviceData: function () {
                        return this.$store.state.serviceData
                    }
                }, mounted: function () {
                    this.getService()
                }, methods: {
                    getService: function () {
                        var e = this;
                        this.$axios.post("/client/user_search", {userName: this.username}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (t) {
                            e.$store.commit("setServiceData", t.data.data.list), console.log(e.serviceData);
                            var a = [];
                            e.serviceData.map((function (e) {
                                e.expansion = !1, a.push({value: e.serverName})
                            })), e.$store.commit("setReceivers", a), console.log(a)
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, toggleExpand: function (e) {
                        var t = this.$refs.serviceTable;
                        console.log(this.$refs.serviceTable), this.serviceData.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize).map((function (a) {
                            e.id != a.id ? (t.toggleRowExpansion(a, !1), a.expansion = !1) : a.expansion = !a.expansion
                        })), t.toggleRowExpansion(e)
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e
                    }, serverState: function (e) {
                        return "yes" == e ? 1 : "no" == e ? -1 : "finish" == e ? 0 : void 0
                    }
                }
            }), $e = xe, Ce = (a("5cae"), Object(T["a"])($e, Se, ke, !1, null, null, null)), qe = Ce.exports,
            Ie = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "apply-service"}}, [a("div", {attrs: {id: "card"}}, [a("el-card", {staticClass: "box-card"}, [a("span", [e._v("亲爱的用户:")]), a("el-divider"), a("p", [e._v(" 十分感谢您使用我们的产品，但是感到抱歉的是您现在准备申请售后服务！我们将以最快的速度处理您即将提交的问题！ 感谢您的信赖！ ")])], 1)], 1), a("div", {attrs: {id: "apply-form"}}, [a("el-form", {
                    ref: "applyform",
                    attrs: {rules: e.applyServiceRules, model: e.form, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "软件名称",
                        prop: "softwareName"
                    }
                }, [a("el-autocomplete", {
                    attrs: {
                        "fetch-suggestions": e.querySearchAsyncSoftware,
                        placeholder: "请输入软件名称"
                    }, on: {select: e.softwareNameSelect}, model: {
                        value: e.form.softwareName, callback: function (t) {
                            e.$set(e.form, "softwareName", t)
                        }, expression: "form.softwareName"
                    }
                })], 1), a("el-form-item", {attrs: {label: "问题类型"}}, [a("el-select", {
                    attrs: {placeholder: "请选择问题类型"},
                    model: {
                        value: e.form.kind, callback: function (t) {
                            e.$set(e.form, "kind", t)
                        }, expression: "form.kind"
                    }
                }, [a("el-option", {attrs: {label: "登录异常", value: "登录异常"}}), a("el-option", {
                    attrs: {
                        label: "界面无法正常显示",
                        value: "界面无法正常显示"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "界面信息显示有误",
                        value: "界面信息显示有误"
                    }
                }), a("el-option", {
                    attrs: {
                        label: "其他",
                        value: "其他"
                    }
                })], 1)], 1), a("el-form-item", {
                    attrs: {
                        label: "问题描述",
                        prop: "desc"
                    }
                }, [a("el-input", {
                    attrs: {type: "textarea"}, model: {
                        value: e.form.desc, callback: function (t) {
                            e.$set(e.form, "desc", t)
                        }, expression: "form.desc"
                    }
                })], 1), a("el-form-item", [a("el-button", {
                    attrs: {id: "btn-commit", type: "primary"},
                    on: {click: e.applyforService}
                }, [e._v("提交")]), a("el-button", {
                    attrs: {id: "btn-reset"},
                    on: {click: e.resetApplyForm}
                }, [e._v("重置")])], 1)], 1)], 1)])
            }, Ne = [], Te = (a("c975"), []), Ee = function (e, t, a) {
                var s = !1;
                return t ? (Te.map((function (e) {
                    e.value == t && (s = !0)
                })), s ? void 0 : a(new Error("您只能为您购买过的产品申请售后服务"))) : a(new Error("软件名称不能为空"))
            }, De = function (e, t, a) {
                return t ? t.length > 50 ? a(new Error("内容长度不能大于50")) : void 0 : a(new Error("问题描述不能为空"))
            }, ze = {
                name: "apply", data: function () {
                    return {
                        form: {softwareName: "", kind: "", desc: ""},
                        applyServiceRules: {
                            softwareName: [{validator: Ee, trigger: "blur"}],
                            desc: [{validator: De, trigger: "blur"}]
                        }
                    }
                }, mounted: function () {
                    Te = this.softwareNames, null != this.softwareName && (this.form.softwareName = this.softwareName, this.$store.commit("setSoftwareName", null))
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, softwareNames: function () {
                        return this.$store.state.softwareNames
                    }, softwareName: function () {
                        return this.$store.state.softwareName
                    }
                }, methods: {
                    applyforService: function () {
                        var e = this;
                        this.$axios.post("/client/apply_service", {
                            userName: this.username,
                            softwareName: this.form.softwareName,
                            serviceKind: this.form.kind,
                            serviceInfo: this.escape(this.form.desc)
                        }, {headers: {token: this.token}, withCredentials: !0}).then((function (t) {
                            console.log(t.data.data.message), "success" == t.data.data.message ? (e.$message({
                                type: "success",
                                message: "申请成功,请耐心等待维护!"
                            }), e.form.softwareName = "", e.form.desc = "", e.form.kind = "") : e.$message({
                                type: "error",
                                message: "服务器发生异常，请稍后再试!"
                            })
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, resetApplyForm: function () {
                        this.form.softwareName = "", this.form.kind = "", this.form.desc = ""
                    }, escape: function (e) {
                        for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
                        return a
                    }, querySearchAsyncSoftware: function (e, t) {
                        var a = this.softwareNames, s = e ? a.filter(this.createStateFilter(e)) : a;
                        clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            t(s)
                        }), 3e3 * Math.random())
                    }, softwareNameSelect: function (e) {
                        console.log(e)
                    }, createStateFilter: function (e) {
                        return function (t) {
                            return 0 === t.value.toLowerCase().indexOf(e.toLowerCase())
                        }
                    }
                }
            }, Ae = ze, We = (a("9073"), Object(T["a"])(Ae, Ie, Ne, !1, null, "5b9c3f29", null)), Le = We.exports,
            je = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "sendMsg"}}, [a("el-form", {
                    ref: "sendform",
                    attrs: {rules: e.sendMsgRules, model: e.msg, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "收件人",
                        prop: "receiver"
                    }
                }, [a("el-autocomplete", {
                    attrs: {"fetch-suggestions": e.querySearchAsync, placeholder: "请选择收件人"},
                    on: {select: e.receiverSelect},
                    model: {
                        value: e.msg.receiver, callback: function (t) {
                            e.$set(e.msg, "receiver", t)
                        }, expression: "msg.receiver"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "内容",
                        prop: "msg"
                    }
                }, [a("el-input", {
                    attrs: {type: "textarea"}, model: {
                        value: e.msg.msg, callback: function (t) {
                            e.$set(e.msg, "msg", t)
                        }, expression: "msg.msg"
                    }
                })], 1), a("el-form-item", [a("el-button", {
                    attrs: {id: "btn-commit", type: "primary"},
                    on: {click: e.sendMsg}
                }, [e._v("提交")]), a("el-button", {
                    attrs: {id: "btn-reset"},
                    on: {click: e.resetSendForm}
                }, [e._v("重置")])], 1)], 1)], 1)
            }, Pe = [], Fe = [], Me = function (e, t, a) {
                var s = !1;
                return t ? (Fe.map((function (e) {
                    e.value == t && (s = !0)
                })), s ? void 0 : a(new Error("您只能给您的产品维护人员发信息"))) : a(new Error("收件人不能为空"))
            }, Oe = function (e, t, a) {
                return t ? t.length > 50 ? a(new Error("内容长度不能大于50")) : void 0 : a(new Error("内容不能为空"))
            }, Re = {
                name: "sendmsg", data: function () {
                    return {
                        msg: {receiver: "", msg: ""},
                        sendMsgRules: {
                            receiver: [{validator: Me, trigger: "blur"}],
                            msg: [{validator: Oe, trigger: "blur"}]
                        },
                        getName: "",
                        justMessage: ""
                    }
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, receivers: function () {
                        return this.$store.state.receivers
                    }
                }, mounted: function () {
                    Fe = this.receivers
                }, methods: {
                    sendMsg: function () {
                        var e = this, t = new Date, a = t.getFullYear(), s = t.getMonth() + 1, n = t.getDate(),
                            r = a + "-" + s + "-" + n;
                        this.getName = this.escape(this.msg.receiver), this.justMessage = this.escape(this.msg.msg), this.$axios.post("/client/send_user_message", {
                            getName: this.getName,
                            sendName: this.username,
                            justMessage: this.justMessage,
                            messageDate: r
                        }, {headers: {token: this.token}, withCredentials: !0}).then((function (t) {
                            console.log(t.data.data.message), "success" == t.data.data.message ? (e.$message({
                                type: "success",
                                message: "发送成功"
                            }), e.msg.receiver = "", e.msg.msg = "") : e.$message({type: "error", message: "发送失败，请稍后再试!"})
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, resetSendForm: function () {
                        this.msg.receiver = "", this.msg.msg = ""
                    }, escape: function (e) {
                        for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
                        return a
                    }, querySearchAsync: function (e, t) {
                        var a = this.receivers, s = e ? a.filter(this.createStateFilter(e)) : a;
                        clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            t(s)
                        }), 3e3 * Math.random())
                    }, createStateFilter: function (e) {
                        return function (t) {
                            return 0 === t.value.toLowerCase().indexOf(e.toLowerCase())
                        }
                    }, receiverSelect: function (e) {
                        console.log(e)
                    }
                }
            }, Be = Re, Ve = (a("12fc"), Object(T["a"])(Be, je, Pe, !1, null, null, null)), He = Ve.exports,
            Ue = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "sendMsg"}}, [a("el-form", {
                    ref: "sendform",
                    attrs: {rules: e.sendMsgRules, model: e.msg, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "收件人",
                        prop: "receiver"
                    }
                }, [a("el-autocomplete", {
                    attrs: {"fetch-suggestions": e.querySearchAsync, placeholder: "请选择收件人"},
                    on: {select: e.receiverSelect},
                    model: {
                        value: e.msg.receiver, callback: function (t) {
                            e.$set(e.msg, "receiver", t)
                        }, expression: "msg.receiver"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "内容",
                        prop: "msg"
                    }
                }, [a("el-input", {
                    attrs: {type: "textarea"}, model: {
                        value: e.msg.msg, callback: function (t) {
                            e.$set(e.msg, "msg", t)
                        }, expression: "msg.msg"
                    }
                })], 1), a("el-form-item", [a("el-button", {
                    attrs: {id: "btn-commit", type: "primary"},
                    on: {click: e.sendMsg}
                }, [e._v("提交")]), a("el-button", {
                    attrs: {id: "btn-reset"},
                    on: {click: e.resetSendForm}
                }, [e._v("重置")])], 1)], 1)], 1)
            }, Ge = [], Ke = [], Je = function (e, t, a) {
                var s = !1;
                return t ? (Ke.map((function (e) {
                    e.value == t && (s = !0)
                })), s ? void 0 : a(new Error("您只能给申请维护的客户发信息"))) : a(new Error("收件人不能为空"))
            }, Ye = function (e, t, a) {
                return t ? t.length > 50 ? a(new Error("内容长度不能大于50")) : void 0 : a(new Error("内容不能为空"))
            }, Qe = {
                name: "server-sendmsg", data: function () {
                    return {
                        msg: {receiver: "", msg: ""},
                        sendMsgRules: {
                            receiver: [{validator: Je, trigger: "blur"}],
                            msg: [{validator: Ye, trigger: "blur"}]
                        },
                        getName: "",
                        justMessage: ""
                    }
                }, mounted: function () {
                    Ke = this.receivers
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, receivers: function () {
                        return this.$store.state.receivers
                    }
                }, methods: {
                    sendMsg: function () {
                        var e = this, t = new Date, a = t.getFullYear(), s = t.getMonth() + 1, n = t.getDate(),
                            r = a + "-" + s + "-" + n;
                        this.getName = this.escape(this.msg.receiver), this.justMessage = this.escape(this.msg.msg), this.$axios.post("/server/send_server_message", {
                            getName: this.getName,
                            sendName: this.username,
                            justMessage: this.justMessage,
                            messageDate: r
                        }, {headers: {token: this.token}, withCredentials: !0}).then((function (t) {
                            console.log(t.data.data.message), "success" == t.data.data.message ? (e.$message({
                                type: "success",
                                message: "发送成功"
                            }), e.msg.receiver = "", e.msg.msg = "") : e.$message({type: "error", message: "发送失败，请稍后再试!"})
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, resetSendForm: function () {
                        this.msg.receiver = "", this.msg.msg = ""
                    }, escape: function (e) {
                        for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
                        return a
                    }, querySearchAsync: function (e, t) {
                        var a = this.receivers, s = e ? a.filter(this.createStateFilter(e)) : a;
                        clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            t(s)
                        }), 3e3 * Math.random())
                    }, createStateFilter: function (e) {
                        return function (t) {
                            return 0 === t.value.toLowerCase().indexOf(e.toLowerCase())
                        }
                    }, receiverSelect: function (e) {
                        console.log(e)
                    }
                }
            }, Xe = Qe, Ze = (a("e670"), Object(T["a"])(Xe, Ue, Ge, !1, null, null, null)), et = Ze.exports,
            tt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "receiveMsg"}}, [a("el-table", {
                    key: "2",
                    attrs: {data: e.receiveMsg.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize)}
                }, [a("el-table-column", {
                    attrs: {type: "expand"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-form", {
                                staticClass: "demo-table-expand",
                                attrs: {"label-position": "left", inline: ""}
                            }, [a("el-form-item", {
                                attrs: {
                                    label: "内容",
                                    width: "300px"
                                }
                            }, [a("span", [e._v(e._s(t.row.justMessage))])]), a("el-form-item", {attrs: {label: "发件人"}}, [a("span", [e._v(e._s(t.row.sendName))])]), a("el-form-item", {attrs: {label: "发送日期"}}, [a("span", [e._v(e._s(t.row.messageDate))])])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        "show-overflow-tooltip": "",
                        prop: "justMessage",
                        label: "内容",
                        width: "600"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "sendName",
                        label: "发件人",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "messageDate",
                        label: "发送日期"
                    }
                })], 1), 0 != e.receiveMsg.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.receiveMsg.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)
            }, at = [], st = {
                name: "Receivemsg", data: function () {
                    return {receiveMsg: [], currentPage: 1, pagesize: 7}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }
                }, mounted: function () {
                    this.getMsg()
                }, methods: {
                    handleCurrentChange: function (e) {
                        this.currentPage = e
                    }, getMsg: function () {
                        var e = this;
                        this.$axios.post("/client/show_user_messages", {getName: this.username}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (t) {
                            e.receiveMsg = t.data.data.list
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }
                }
            }, nt = st, rt = (a("e7e3"), Object(T["a"])(nt, tt, at, !1, null, null, null)), ot = rt.exports,
            it = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "emails"}}, [a("el-table", {
                    key: "0",
                    attrs: {data: e.msgItems.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize)}
                }, [a("el-table-column", {
                    attrs: {type: "expand"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-form", {
                                staticClass: "demo-table-expand",
                                attrs: {"label-position": "left", inline: ""}
                            }, [a("el-form-item", {
                                attrs: {
                                    label: "内容",
                                    width: "300px"
                                }
                            }, [a("span", [e._v(e._s(t.row.justMessage))])]), a("el-form-item", {attrs: {label: "发件人"}}, [a("span", [e._v(e._s(t.row.sendName))])]), a("el-form-item", {attrs: {label: "发送日期"}}, [a("span", [e._v(e._s(t.row.messageDate))])])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        "show-overflow-tooltip": "",
                        prop: "justMessage",
                        label: "内容",
                        width: "300"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "sendName",
                        label: "发件人",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "messageDate",
                        label: "发送日期"
                    }
                })], 1), 0 != e.msgItems.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.msgItems.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)
            }, lt = [], ct = {
                name: "getMsg", data: function () {
                    return {msgItems: [], currentPage: 1, pagesize: 7}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }
                }, mounted: function () {
                    this.getMsg()
                }, methods: {
                    getMsg: function () {
                        var e = this;
                        this.$axios.post("/server/show_messages", {getName: this.username}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (t) {
                            e.msgItems = t.data.data.list
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e
                    }
                }
            }, ut = ct, dt = (a("b822"), Object(T["a"])(ut, it, lt, !1, null, null, null)), mt = dt.exports,
            ft = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "software-update-info"}}, [e._m(0), a("div", {attrs: {id: "collapse"}}, [0 == e.orderData.length ? a("div", {staticClass: "nodata h-center"}, [e._v("暂无数据")]) : e._e(), 0 != e.orderData.length ? a("el-collapse", {
                    attrs: {accordion: ""},
                    on: {change: e.handleChange},
                    model: {
                        value: e.activeName, callback: function (t) {
                            e.activeName = t
                        }, expression: "activeName"
                    }
                }, e._l(e.orderData.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize), (function (t, s) {
                    return a("el-collapse-item", {
                        key: s,
                        attrs: {name: t.softwareName}
                    }, [a("template", {slot: "title"}, [e._v(" " + e._s(t.softwareName) + " ")]), 0 == e.updateData.length ? a("div", {staticClass: "update-data-error"}, [e._v("暂无更新信息")]) : e._e(), e._l(e.updateData, (function (t, s) {
                        return a("div", {
                            key: s,
                            staticClass: "updateInfo"
                        }, [a("span", {staticClass: "updateDate"}, [e._v("更新时间:")]), a("span", [e._v(e._s(t.updateDate))]), a("br"), a("span", {staticClass: "updateDetail"}, [e._v("更新内容:")]), a("p", [e._v(e._s(t.softwareInfo))]), a("el-divider")], 1)
                    }))], 2)
                })), 1) : e._e(), 0 != e.orderData.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.orderData.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)])
            }, gt = [function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "headline"}, [a("span", {staticClass: "title"}, [e._v("您将在此处看到您购买过的软件更新信息:")])])
            }], ht = {
                name: "updateInfo", data: function () {
                    return {updateData: [], currentPage: 1, pagesize: 5, activeName: 0}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, orderData: function () {
                        return this.$store.state.orderData
                    }
                }, methods: {
                    handleChange: function (e) {
                        var t = this;
                        this.$axios.post("/client/show_update_info", {softwareName: e}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (e) {
                            t.updateData = e.data.data.list
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e
                    }
                }
            }, pt = ht, vt = (a("2b55"), Object(T["a"])(pt, ft, gt, !1, null, null, null)), bt = vt.exports,
            _t = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "server-cards"}}, [0 == e.serviceItems.length ? a("div", {staticClass: "nodata"}, [e._v("暂无售后服务")]) : e._e(), e._l(e.serviceItems.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize), (function (t, s) {
                    return a("el-card", {
                        key: s,
                        staticClass: "box-card"
                    }, [a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 3}}, [e._v("软件名称:")]), a("el-col", {attrs: {span: 5}}, [e._v(e._s(t.softwareName))]), a("el-col", {attrs: {span: 3}}, [e._v("当前状态:")]), a("el-col", {attrs: {span: 5}}, [e.isServer(t.serviceState) ? a("span", [e._v("正在处理")]) : e._e(), e.isServer(t.serviceState) ? e._e() : a("span", [e._v("正在切换服务人员")])]), a("el-col", {attrs: {span: 3}}, [e._v("服务人员:")]), a("el-col", {attrs: {span: 5}}, [e._v(e._s(t.serverName))])], 1), a("el-divider"), a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 3}}, [e._v("问题类型:")]), a("el-col", {attrs: {span: 21}}, [e._v(e._s(t.serviceKind))])], 1), a("el-row", {staticClass: "detail"}, [a("el-col", {attrs: {span: 24}}, [e._v("具体描述:")])], 1), a("div", {staticClass: "service-detail"}, [e._v(e._s(t.serviceInfo))])], 1)
                })), 0 != e.serviceItems.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.serviceItems.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 2)
            }, wt = [], yt = {
                name: "myService", data: function () {
                    return {currentPage: 1, pagesize: 3}
                }, created: function () {
                    var e = sessionStorage.getItem("name"), t = sessionStorage.getItem("token");
                    this.$store.commit("setUsername", e), this.$store.commit("setToken", t)
                }, mounted: function () {
                    this.getService()
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, receivers: function () {
                        return this.$store.state.receivers
                    }, serviceItems: function () {
                        return this.$store.state.serviceItems
                    }
                }, methods: {
                    getService: function () {
                        var e = this;
                        this.$axios.post("/server/search", {servername: this.username}, {
                            headers: {token: this.token},
                            withCredentials: !0
                        }).then((function (t) {
                            console.log(t.data.data.list), e.$store.commit("setServiceItems", t.data.data.list);
                            var a = [];
                            e.serviceItems.map((function (e) {
                                a.push({value: e.userName})
                            })), e.$store.commit("setReceivers", a)
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, isServer: function (e) {
                        return "yes" == e
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e
                    }
                }
            }, St = yt, kt = (a("40fb"), Object(T["a"])(St, _t, wt, !1, null, null, null)), xt = kt.exports,
            $t = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "search"}}, [a("div", {attrs: {id: "search-bar-content"}}, [a("el-row", {attrs: {gutter: 20}}, [a("el-col", {attrs: {span: 16}}, [a("el-input", {
                    attrs: {placeholder: "请输入内容"},
                    model: {
                        value: e.faqInfo, callback: function (t) {
                            e.faqInfo = t
                        }, expression: "faqInfo"
                    }
                })], 1), a("el-col", {attrs: {span: 6}}, [a("el-button", {
                    attrs: {
                        type: "primary",
                        icon: "el-icon-search"
                    }, on: {click: e.getFaq}
                }, [e._v("搜索")])], 1)], 1)], 1), a("div", {
                    staticClass: "clearfix",
                    attrs: {id: "type-nav"}
                }, [a("el-menu", {
                    staticClass: "nav-center el-menu-demo",
                    attrs: {"default-active": "0", mode: "horizontal"},
                    on: {select: e.handleSelect}
                }, e._l(e.types, (function (t, s) {
                    return a("el-menu-item", {key: s, attrs: {index: t.index}}, [e._v(" " + e._s(t.name) + " ")])
                })), 1)], 1), a("div", {attrs: {id: "posts"}}, [a("div", {attrs: {id: "result"}}, [e._v("搜索结果:")]), 0 == e.faqData.length ? a("div", {staticClass: "nodata"}, [e._v("很抱歉,暂时没有与" + e._s(e.searchHistory) + "相匹配的搜索结果。")]) : e._e(), e._l(e.faqData.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize), (function (t, s) {
                    return a("div", {
                        key: s,
                        staticClass: "post"
                    }, [a("el-card", {staticClass: "box-card"}, [a("div", {
                        staticClass: "clearfix",
                        attrs: {slot: "header"},
                        slot: "header"
                    }, [a("span", [e._v("标题:" + e._s(t.faqName))]), a("span", {staticClass: "date"}, [e._v("发布日期:" + e._s(t.faqDate))]), a("span", {staticClass: "sname"}, [e._v("软件名称:" + e._s(t.faqSoftware))])]), a("div", [e._v(" 解决方法: ")]), a("div", [e._v(" " + e._s(t.faqInfo) + " ")])])], 1)
                })), 0 != e.faqData.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.faqData.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 2)])
            }, Ct = [], qt = (a("a9e3"), {
                name: "faq", data: function () {
                    return {
                        types: [{name: "全部", index: "0"}, {name: "登录异常", index: "1"}, {
                            name: "界面无法显示",
                            index: "2"
                        }, {name: "显示信息有误", index: "3"}, {name: "其他", index: "4"}],
                        faqData: [],
                        searchHistory: "",
                        index: 0,
                        faqType: null,
                        faqInfo: "",
                        pagesize: 2,
                        currentPage: 1
                    }
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }
                }, mounted: function () {
                    this.getFaq()
                }, methods: {
                    handleSelect: function (e, t) {
                        console.log(e, t), e = Number(e), this.faqType = this.types[e].name, 0 == e && (this.faqType = null), this.getFaq(), this.index = e
                    }, getFaq: function () {
                        var e = this;
                        this.$axios.post("/client/type_faq", {
                            faqType: this.faqType,
                            faqInfo: this.faqInfo
                        }, {headers: {token: this.token}, withCredentials: !0}).then((function (t) {
                            e.faqData = t.data.data.list, e.searchHistory = e.faqInfo
                        })).catch((function (e) {
                            console.log(e)
                        }))
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e, console.log(this.currentPage)
                    }
                }
            }), It = qt, Nt = (a("3bd2"), Object(T["a"])(It, $t, Ct, !1, null, null, null)), Tt = Nt.exports,
            Et = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "service-management"}}, [a("el-table", {
                    key: "1",
                    attrs: {data: e.serviceItems.slice((e.currentPage - 1) * e.pagesize, e.currentPage * e.pagesize)}
                }, [a("el-table-column", {
                    attrs: {
                        "show-overflow-tooltip": "",
                        prop: "softwareName",
                        label: "软件名称",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "userName",
                        label: "申请用户",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "serviceKind",
                        label: "问题类型",
                        width: "200"
                    }
                }), a("el-table-column", {
                    attrs: {label: "当前状态"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e.isServer(t.row.serviceState) ? a("span", [e._v("正在处理")]) : e._e(), e.isServer(t.row.serviceState) ? e._e() : a("span", [e._v("正在申请换人")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e.isServer(t.row.serviceState) ? a("el-button", {
                                attrs: {
                                    type: "primary",
                                    size: "mini"
                                }, on: {
                                    click: function (a) {
                                        return e.finish(t.row.softwareName, t.row.userName)
                                    }
                                }
                            }, [e._v("完成")]) : e._e(), e.isServer(t.row.serviceState) ? e._e() : a("el-button", {
                                attrs: {
                                    disabled: "",
                                    type: "primary",
                                    size: "mini"
                                }, on: {
                                    click: function (a) {
                                        return e.finish(t.row.softwareName, t.row.userName)
                                    }
                                }
                            }, [e._v("完成")]), e.isServer(t.row.serviceState) ? a("el-button", {
                                attrs: {
                                    type: "danger",
                                    size: "mini"
                                }, on: {
                                    click: function (a) {
                                        return e.change(t.row.softwareName, t.row.userName)
                                    }
                                }
                            }, [e._v("申请换人")]) : e._e(), e.isServer(t.row.serviceState) ? e._e() : a("el-button", {
                                attrs: {
                                    disabled: "",
                                    type: "danger",
                                    size: "mini"
                                }, on: {
                                    click: function (a) {
                                        return e.change(t.row.softwareName, t.row.userName)
                                    }
                                }
                            }, [e._v("申请换人")])]
                        }
                    }])
                })], 1), 0 != e.serviceItems.length ? a("div", {staticClass: "page h-center"}, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next,jumper",
                        "current-page": e.currentPage,
                        "page-size": e.pagesize,
                        total: e.serviceItems.length
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1) : e._e()], 1)
            }, Dt = [], zt = {
                name: "management", data: function () {
                    return {userName: "", softwareName: "", currentPage: 1, pagesize: 7}
                }, computed: {
                    username: function () {
                        return this.$store.state.username
                    }, token: function () {
                        return this.$store.state.token
                    }, serviceItems: function () {
                        return this.$store.state.serviceItems
                    }
                }, methods: {
                    handleCurrentChange: function (e) {
                        this.currentPage = e
                    }, isServer: function (e) {
                        return "yes" == e
                    }, finish: function (e, t) {
                        var a = this;
                        this.softwareName = e, this.userName = t, this.$confirm("确定要修改该服务状态为完成吗?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            a.$axios.post("/server/update_state", {
                                userName: a.userName,
                                servername: a.username,
                                serverstate: "finish",
                                softwareName: a.softwareName
                            }, {headers: {token: a.token}, withCredentials: !0}).then((function (e) {
                                if ("success" == e.data.data.message) {
                                    a.$message({type: "success", message: "修改成功!"});
                                    for (var t = a.serviceItems, s = [], n = 0; n < t.length; n++) t[n].softwareName == a.softwareName && t[n].userName == a.userName || s.push(t[n]);
                                    a.$store.commit("setServiceItems", s)
                                } else a.$message({type: "error", message: "修改失败，请稍后再试!"})
                            })).catch((function (e) {
                                console.log(e)
                            }))
                        })).catch((function () {
                            a.$message({type: "info", message: "修改请求已取消"})
                        }))
                    }, change: function (e, t) {
                        var a = this;
                        this.softwareName = e, this.userName = t, this.$confirm("确定提交换人申请吗?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            a.$axios.post("/senSer/update_state", {
                                userName: a.userName,
                                servername: a.username,
                                serverstate: "no",
                                softwareName: a.softwareName
                            }, {headers: {token: a.token}, withCredentials: !0}).then((function (e) {
                                if ("success" == e.data.data.message) {
                                    a.$message({type: "success", message: "申请成功,请等待管理员审核!"});
                                    var t = a.serviceItems;
                                    t.map((function (e) {
                                        e.softwareName == a.softwareName && e.userName == a.userName && (e.serviceState = "no")
                                    })), a.$store.commit("setServiceItems", t)
                                } else a.$message({type: "error", message: "申请失败，请稍后再试!"})
                            })).catch((function (e) {
                                401 == e.response.status && a.$message({
                                    type: "error",
                                    message: "很抱歉，您暂时无权进行此操作!"
                                }), console.log(e)
                            }))
                        })).catch((function () {
                            a.$message({type: "info", message: "请求已取消"})
                        }))
                    }
                }
            }, At = zt, Wt = (a("4809"), Object(T["a"])(At, Et, Dt, !1, null, null, null)), Lt = Wt.exports,
            jt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("div", {attrs: {id: "accessHead"}}, [a("el-menu", {
                    staticClass: "el-menu-demo",
                    attrs: {"default-active": e.activeIndex, mode: "horizontal"},
                    on: {select: e.handleSelect}
                }, [a("el-menu-item", {attrs: {index: "1"}}, [e._v("售后服务人员")]), a("el-menu-item", {attrs: {index: "2"}}, [e._v("客户")])], 1)], 1), a("div", {attrs: {id: "access_dialog"}}, [a("el-dialog", {
                    attrs: {
                        title: e.dia_solution,
                        visible: e.dialogFormVisible
                    }, on: {
                        "update:visible": function (t) {
                            e.dialogFormVisible = t
                        }
                    }
                }, [a("p", [a("span", [e._v("用户账户:")]), a("span", [e._v(e._s(e.userId))])]), a("p", [a("span", [e._v("用户角色:")]), a("span", [e._v(e._s(e.userRole))])]), a("p", [a("span", [e._v("账号状态:")]), a("span", [e._v(e._s(e.accountStatus))])]), a("div", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (t) {
                            e.dialogFormVisible = !1
                        }
                    }
                }, [e._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"}, on: {
                        click: function (t) {
                            return e.commit()
                        }
                    }
                }, [e._v("确 定")])], 1)])], 1), a("div", {attrs: {id: "access_setting_holder"}}, [a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.tableData,
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {label: "用户账户", width: "185"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("div", {
                                staticClass: "name-wrapper",
                                attrs: {slot: "reference"},
                                slot: "reference"
                            }, [a("el-tag", {attrs: {size: "medium"}}, [e._v(e._s(t.row.userId))])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "角色", width: "255"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("div", {
                                staticClass: "name-wrapper",
                                attrs: {slot: "reference"},
                                slot: "reference"
                            }, [a("el-tag", {attrs: {size: "medium"}}, [e._v(e._s(t.row.userRole))])], 1)]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "账号状态", width: "100"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("span", [e._v(e._s(t.row.accountStatus))])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "解决方式", width: "295"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("select", {
                                directives: [{
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.row.values,
                                    expression: "scope.row.values"
                                }], attrs: {name: "", width: "164"}, on: {
                                    change: function (a) {
                                        var s = Array.prototype.filter.call(a.target.options, (function (e) {
                                            return e.selected
                                        })).map((function (e) {
                                            var t = "_value" in e ? e._value : e.value;
                                            return t
                                        }));
                                        e.$set(t.row, "values", a.target.multiple ? s : s[0])
                                    }
                                }
                            }, ["售后服务人员" === e.current ? a("option", {attrs: {value: "冻结"}}, [e._v("冻结")]) : e._e(), e.Upgradeable(t.row.userRole) ? a("option", {attrs: {value: "升级为高级服务人员"}}, [e._v("升级为高级服务人员")]) : e._e(), e.Releasable(t.row.userRole) ? a("option", {attrs: {value: "降级为普通服务人员"}}, [e._v("降级为普通服务人员")]) : e._e(), "售后服务人员" === e.current ? a("option", {attrs: {value: "在职"}}, [e._v("在职")]) : e._e(), "客户" === e.current ? a("option", {attrs: {value: "正常"}}, [e._v("正常")]) : e._e(), "客户" === e.current ? a("option", {attrs: {value: "冻结"}}, [e._v("冻结")]) : e._e()]), a("el-button", {
                                attrs: {
                                    size: "mini",
                                    id: "accessBtn"
                                }, on: {
                                    click: function (a) {
                                        return e.solution(t.row.id, t.row.userId, t.row.userRole, t.row.accountStatus, t.row.values)
                                    }
                                }
                            }, [e._v(" 提交")])]
                        }
                    }])
                })], 1)], 1), a("div", {
                    staticClass: "paging",
                    attrs: {id: "access_page"}
                }, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next",
                        total: e.total,
                        "current-page": e.current_page,
                        "page-size": e.page_size
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1)])
            }, Pt = [], Ft = {
                mounted: function () {
                    console.log("AT mounted")
                }, created: function () {
                    console.log("AT created"), Mt(1, this)
                }, computed: {}, data: function () {
                    return {
                        loading: !0,
                        activeIndex: "1",
                        currentIndx: "1 ",
                        page_size: 10,
                        total: 35,
                        current_page: 1,
                        dialogFormVisible: !1,
                        id: "",
                        changeState: "",
                        userId: "",
                        userRole: "",
                        accountStatus: "",
                        dia_solution: "",
                        feedbackinf: "",
                        way1: !0,
                        way2: !1,
                        way3: !1,
                        current: "售后服务人员",
                        tableData: [{
                            id: "",
                            userId: "韭菜卷大葱7",
                            userRole: "userRole1",
                            accountStatus: "封禁中",
                            values: ""
                        }, {id: "", userId: "韭菜卷大葱6", userRole: "userRole1", accountStatus: "冻结中", values: ""}, {
                            id: "",
                            userId: "韭菜卷大葱5",
                            userRole: "userRole1",
                            accountStatus: "封禁中",
                            values: ""
                        }]
                    }
                }, name: "AccessTable", methods: {
                    Upgradeable: function (e) {
                        return "普通售后" == e
                    }, Releasable: function (e) {
                        return "高级售后" == e
                    }, commit: function () {
                        var e = this;
                        console.log("commit");
                        var t = {id: this.id, userState: this.changeState};
                        if ("客户" == this.userRole) console.log("CustomerPermissionSettingReques"), this.$axios.post("/admin/CustomerPermissionSettingRequest", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            "用户权限修改成功！" == t.data.data.message ? (e.dialogFormVisible = !1, e.$message({
                                message: "客户权限修改成功！",
                                type: "success"
                            }), Ot(e.current_page, e)) : e.$message({message: "客户权限修改失败！", type: "error"})
                        })); else if ("普通售后" == this.userRole || "高级售后" == this.userRole) if ("在职" == this.changeState || "冻结" == this.changeState) t = {
                            id: this.id,
                            serverState: this.changeState
                        }, console.log("permissionSettingserverRequest " + this.changeState), this.$axios.post("/admin/permissionSettingserverRequest", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            "维护人员权限修改成功！" == t.data.data.message ? (e.dialogFormVisible = !1, e.$message({
                                message: "售后服务人员权限修改成功",
                                type: "success"
                            }), Mt(e.current_page, e)) : e.$message({message: "售后服务人员权限修改失败！", type: "error"})
                        })); else {
                            var a = {id: this.id, message: this.changeState};
                            this.$axios.post("/admin/updateServerRole", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                                0 == t.data.code ? (e.dialogFormVisible = !1, e.$message({
                                    message: "售后服务人员权限修改成功",
                                    type: "success"
                                }), Mt(e.current_page, e)) : e.$message({message: "售后服务人员权限修改失败！", type: "error"})
                            }))
                        }
                        this.dialogFormVisible = !1
                    }, handleSelect: function (e, t) {
                        console.log("handleSelect"), console.log(e + " " + this.activeIndex), this.currentIndx = e, console.log(this.currentIndx), "1" == this.currentIndx ? (this.current = "售后服务人员", this.current_page = 1, console.log("售后服务人员"), Mt(1, this)) : "2" == this.currentIndx && (this.current = "客户", console.log("客户导航栏"), this.current_page = 1, Ot(1, this))
                    }, solution: function (e, t, a, s, n) {
                        console.log("solution:" + n), this.changeState = n, this.id = e, this.userId = t, this.userRole = a, this.accountStatus = s, this.dia_solution = n, this.way1 = !1, this.way2 = !1, this.way3 = !0, n == s ? this.$message({
                            message: t + " 已处于" + s + "   中！",
                            type: "warning"
                        }) : "" == n ? this.$message({message: "请选择解决方式！", type: "warning"}) : this.dialogFormVisible = !0
                    }, handleCurrentChange: function (e) {
                        console.log(this.$route.params.token), console.log("handleCurrentChange"), this.current_page = e, "客户" == this.current ? Ot(e, this) : Mt(e, this)
                    }
                }
            };

        function Mt(e, t) {
            console.log("access_setting_page_getdata"), t.loading = !0;
            var a = {pageNo: e, pageSize: t.page_size};
            t.$axios.post("/admin/getServerList", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                console.log(e.data);
                var a = e.data.list;
                t.total = Number(e.data.message), t.tableData = [], console.log("售后服务人员列表：");
                for (var s = 0; s < a.length; s++) {
                    var n, r = a[s], o = r.role;
                    n = o.includes(4) ? {
                        id: r.id,
                        userId: r.name,
                        userRole: "高级售后",
                        accountStatus: r.userState,
                        values: ""
                    } : {
                        id: r.id,
                        userId: r.name,
                        userRole: "普通售后",
                        accountStatus: r.userState,
                        values: ""
                    }, t.tableData.push(n), console.log(t.tableData[s])
                }
                t.loading = !1
            }))
        }

        function Ot(e, t) {
            console.log("access_setting_page_getdata1"), t.loading = !0, console.log(t.$route.params.token);
            var a = {pageNo: e, pageSize: t.page_size};
            t.$axios.post("/admin/getCustomerList", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                var a = e.data.list;
                console.log(e.data.message), t.total = Number(e.data.message), t.tableData = [], console.log("客户列表：");
                for (var s = 0; s < a.length; s++) {
                    var n = a[s];
                    t.tableData.push({
                        id: n.id,
                        userId: n.name,
                        userRole: n.role,
                        accountStatus: n.userState
                    }), console.log(t.tableData[s])
                }
                t.loading = !1
            }))
        }

        var Rt = Ft, Bt = (a("7d9c"), Object(T["a"])(Rt, jt, Pt, !1, null, "4204221e", null)), Vt = Bt.exports,
            Ht = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("div", {attrs: {id: "faqhead"}}, [a("el-menu", {
                    staticClass: "el-menu-demo",
                    attrs: {"default-active": e.activeIndex, mode: "horizontal"},
                    on: {select: e.handleSelect}
                }, [a("el-menu-item", {attrs: {index: "0"}}, [e._v("修改/删除")]), a("el-menu-item", {attrs: {index: "1"}}, [e._v("添加")])], 1)], 1), a("div", {attrs: {id: "faqcenter"}}, [e.modifyshow ? a("div", {attrs: {id: "modifyfaqarea"}}, [a("div", {
                    staticClass: "v-center",
                    attrs: {id: "search"}
                }, [a("el-input", {
                    attrs: {id: "search-bar", maxlength: "40", placeholder: "请输入内容"},
                    on: {change: e.faqsearch},
                    model: {
                        value: e.keyword, callback: function (t) {
                            e.keyword = t
                        }, expression: "keyword"
                    }
                }, [a("i", {
                    staticClass: "el-input__icon el-icon-search",
                    attrs: {slot: "prefix"},
                    slot: "prefix"
                })])], 1), a("div", {attrs: {id: "modifylist"}}, [a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.items,
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {label: "标题", width: "150"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("span", {staticStyle: {"margin-left": "10px"}}, [e._v(e._s(t.row.faqtitle))])]
                        }
                    }], null, !1, 3150803986)
                }), a("el-table-column", {
                    attrs: {label: "类型", width: "150"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("span", {staticStyle: {"margin-left": "10px"}}, [e._v(e._s(t.row.faqType))])]
                        }
                    }], null, !1, 70761450)
                }), a("el-table-column", {
                    attrs: {label: "详细信息", width: "370"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-input", {
                                attrs: {type: "textarea", rows: 2},
                                model: {
                                    value: t.row.faqdetails, callback: function (a) {
                                        e.$set(t.row, "faqdetails", a)
                                    }, expression: "scope.row.faqdetails"
                                }
                            })]
                        }
                    }], null, !1, 3640351160)
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-button", {
                                attrs: {size: "mini"}, on: {
                                    click: function (a) {
                                        return e.modify(t.row.id, t.row.faqdetails)
                                    }
                                }
                            }, [e._v("修改")]), a("el-button", {
                                attrs: {size: "mini", type: "danger"},
                                on: {
                                    click: function (a) {
                                        return e.del(t.row.id)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }], null, !1, 2246350903)
                })], 1)], 1), a("div", {
                    staticClass: "paging",
                    attrs: {id: "faq_page"}
                }, [a("el-pagination", {
                    attrs: {
                        background: "",
                        layout: "prev, pager, next",
                        total: e.total,
                        "current-page": e.current_page,
                        "page-size": e.page_size
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1)]) : e._e(), e.addshow ? a("div", {
                    staticClass: "faqarea",
                    attrs: {id: "addarea"}
                }, [a("el-form", {
                    attrs: {
                        id: "faqForm",
                        "label-width": "80px"
                    }
                }, [a("el-form-item", {
                    attrs: {
                        label: "目标软件",
                        id: "faqtarget"
                    }
                }, [a("el-select", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading_targetsoftware,
                        expression: "loading_targetsoftware"
                    }],
                    attrs: {
                        placeholder: "请选择目标软件",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    },
                    model: {
                        value: e.faqSoftware, callback: function (t) {
                            e.faqSoftware = t
                        }, expression: "faqSoftware"
                    }
                }, e._l(e.items_add, (function (e) {
                    return a("el-option", {
                        key: e.targetsoftware,
                        attrs: {label: e.targetsoftware, value: e.targetsoftware}
                    })
                })), 1)], 1), a("el-form-item", {attrs: {label: "标题"}}, [a("el-input", {
                    model: {
                        value: e.faqName,
                        callback: function (t) {
                            e.faqName = t
                        },
                        expression: "faqName"
                    }
                })], 1), a("el-form-item", {attrs: {label: "类型"}}, [a("el-select", {
                    attrs: {placeholder: "请选择类型"},
                    model: {
                        value: e.faqType, callback: function (t) {
                            e.faqType = t
                        }, expression: "faqType"
                    }
                }, [a("el-option", {attrs: {label: "登陆异常", value: "登陆异常"}}), a("el-option", {
                    attrs: {
                        label: "界面无法显示",
                        value: "界面无法显示"
                    }
                }), a("el-option", {attrs: {label: "显示信息有误", value: "显示信息有误"}}), a("el-option", {
                    attrs: {
                        label: "其他",
                        value: "其他"
                    }
                })], 1)], 1), a("el-form-item", {attrs: {label: "问题描述"}}, [a("el-input", {
                    attrs: {type: "textarea"},
                    model: {
                        value: e.faqDescription, callback: function (t) {
                            e.faqDescription = t
                        }, expression: "faqDescription"
                    }
                })], 1), a("el-form-item", {attrs: {label: "解决方法"}}, [a("el-input", {
                    attrs: {type: "textarea"},
                    model: {
                        value: e.faqInfo, callback: function (t) {
                            e.faqInfo = t
                        }, expression: "faqInfo"
                    }
                })], 1), a("el-form-item", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.commit}
                }, [e._v("立即创建")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.cancel}
                }, [e._v("取消")])], 1)], 1)], 1) : e._e()])])
            }, Ut = [], Gt = {
                mounted: function () {
                    var e = this;
                    Jt(1, e)
                }, data: function () {
                    return {
                        loading: !0,
                        loading_targetsoftware: !0,
                        activeIndex: "0",
                        modifyshow: !0,
                        addshow: !1,
                        items: [{
                            id: "",
                            faqType: "faqType",
                            faqtitle: "faqtitle1",
                            faqdetails: "faqdetails",
                            faqdate: "20/03/05"
                        }, {
                            id: "",
                            faqType: "faqType",
                            faqtitle: "faqtitle1",
                            faqdetails: "faqdetails",
                            faqdate: "20/03/05"
                        }, {
                            id: "",
                            faqType: "faqType",
                            faqtitle: "faqtitle1",
                            faqdetails: "faqdetails",
                            faqdate: "20/03/05"
                        }, {
                            id: "",
                            faqType: "faqType",
                            faqtitle: "faqtitle1",
                            faqdetails: "faqdetails",
                            faqdate: "20/03/05"
                        }],
                        last: "",
                        items_add: [{targetsoftware: "targetsoftware1"}, {targetsoftware: "targetsoftware2"}, {targetsoftware: "targetsoftware3"}],
                        keyword: "",
                        faqType: "",
                        id: 1,
                        faqName: "",
                        faqDescription: "",
                        faqInfo: "",
                        faqSoftware: "",
                        page_size: 5,
                        total: 20,
                        current_page: 1
                    }
                }, name: "FaqTable", methods: {
                    modify: function (e, t) {
                        var a = this, s = {id: e, faqInfo: Yt(t)};
                        this.$axios.post("/admin/FaqModify", s, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            500 != e.data.data.code && (Jt(a.current_page, a), a.$message({
                                message: "修改成功！",
                                type: "success"
                            }))
                        }))
                    }, del: function (e) {
                        var t = this, a = {id: e};
                        this.$axios.post("/admin/FaqDelete", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            500 != e.data.code && (Jt(t.current_page, t), t.$message({message: "删除成功！", type: "success"}))
                        }))
                    }, handleSelect: function (e, t) {
                        var a = this;
                        "0" == e ? (this.modifyshow = !0, this.addshow = !1) : "1" == e && (this.addshow = !0, this.modifyshow = !1, this.loading_targetsoftware = !0, this.$axios.post("/admin/GetSoftWareList", {data: 0}, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            console.log(e.data);
                            var t = e.data.data.list;
                            a.items_add = [];
                            for (var s = 0; s < t.length; s++) {
                                var n = t[s];
                                a.items_add.push({targetsoftware: n.softwareName, id: n.id})
                            }
                            a.loading_targetsoftware = !1
                        })))
                    }, commit: function () {
                        var e = this;
                        if ("" == this.faqSoftware || "" == this.faqName || "" == this.faqInfo || "" == this.faqDescription || "" == this.faqType) this.$message({
                            message: "请完善所有信息！",
                            type: "warning"
                        }); else {
                            var t = {
                                id: this.id,
                                faqName: Yt(this.faqName),
                                faqDescription: Yt(this.faqDescription),
                                faqInfo: Yt(this.faqInfo),
                                faqSoftware: this.faqSoftware,
                                faqType: this.faqType
                            };
                            console.log(t), console.log(sessionStorage.getItem("token")), this.$axios.post("/admin/Faqadd", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                                "success" == t.data.data.message ? (console.log(t.data), e.$message({
                                    message: "添加成功！",
                                    type: "success"
                                }), e.faqName = "", e.faqDescription = "", e.faqInfo = "", e.faqSoftware = "", e.faqType = "") : e.$message.error("添加失败")
                            }))
                        }
                    }, cancel: function () {
                        this.faqName = "", this.faqDescription = "", this.faqInfo = "", this.faqSoftware = "", this.faqType = ""
                    }, faqsearch: function (e) {
                        console.log("faqsearch:s" + e), this.last = e, "" == e ? Jt(1, this) : (console.log("btnSearch" + e), Kt(e, 1, this))
                    }, handleCurrentChange: function (e) {
                        "" == this.last ? (this.current_page = e, Jt(e, this)) : Kt(this.last, e, this)
                    }
                }
            };

        function Kt(e, t, a) {
            var s = {faqInfo: e, pageNo: t, pageSize: a.page_size};
            a.current_page = t, console.log("faqserch"), console.log(s), a.$axios.post("/admin/getsearchFaqList", s, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                var t = e.data.data.list;
                console.log(Number(e.data.data.message) + "totle"), a.total = Number(e.data.data.message), console.log(t.length), a.items = [];
                for (var s = 0; s < t.length; s++) {
                    var n = t[s];
                    a.items.push({
                        id: n.id,
                        faqtitle: n.faqName,
                        faqType: n.faqType,
                        faqdetails: n.faqInfo,
                        faqdate: n.faqDate
                    })
                }
            }))
        }

        function Jt(e, t) {
            t.loading = !0, console.log(" faq_page_getdata");
            var a = {pageNo: e, pageSize: t.page_size};
            t.current_page = e, t.$axios.post("/admin/getFaqList", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                var a = e.data.data.list;
                console.log(e.data.data), t.total = Number(e.data.data.message), t.items = [], console.log("faq");
                for (var s = 0; s < a.length; s++) {
                    var n = a[s];
                    t.items.push({
                        id: n.id,
                        faqtitle: n.faqName,
                        faqType: n.faqType,
                        faqdetails: n.faqInfo,
                        faqdate: n.faqDate
                    }), console.log(t.items[s])
                }
                t.loading = !1
            }))
        }

        function Yt(e) {
            for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
            return a
        }

        var Qt = Gt, Xt = (a("9ba5"), Object(T["a"])(Qt, Ht, Ut, !1, null, "76e92930", null)), Zt = Xt.exports,
            ea = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.tableData,
                        height: "650",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "软件ID",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "softwareName",
                        label: "软件名",
                        width: "180",
                        sortable: ""
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "softwareInfo",
                        label: "软件描述"
                    }
                }), a("el-table-column", {attrs: {prop: "updateDate", label: "更新日期", sortable: ""}})], 1)], 1)
            }, ta = [], aa = {
                mounted: function () {
                    var e = this;
                    this.loading = !0, this.$axios.post("/admin/GetSoftWareList", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                        var a = t.data.data.list;
                        e.tableData = [], console.log("售后服务软件信息："), console.log(a);
                        for (var s = 0; s < a.length; s++) {
                            var n = a[s];
                            e.tableData.push({
                                id: n.id,
                                softwareName: n.softwareName,
                                softwareInfo: n.softwareInfo,
                                updateDate: n.updateDate
                            })
                        }
                        e.loading = !1
                    }))
                }, data: function () {
                    return {loading: !0, tableData: []}
                }, name: "SWTable", methods: {}
            }, sa = aa, na = (a("4275"), Object(T["a"])(sa, ea, ta, !1, null, "30be1c46", null)), ra = na.exports,
            oa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("el-form", {
                    attrs: {
                        "label-width": "140px",
                        id: "user_add_form"
                    }
                }, [a("div", {attrs: {id: "addheight"}}), a("el-form-item", {attrs: {label: "用户名称"}}, [a("el-input", {
                    attrs: {clearable: ""},
                    model: {
                        value: e.username, callback: function (t) {
                            e.username = t
                        }, expression: "username"
                    }
                })], 1), a("el-form-item", {attrs: {label: "用户密码"}}, [a("el-input", {
                    attrs: {"show-password": ""},
                    model: {
                        value: e.password, callback: function (t) {
                            e.password = t
                        }, expression: "password"
                    }
                })], 1), a("el-form-item", {attrs: {label: "用户密码确认"}}, [a("el-input", {
                    attrs: {"show-password": ""},
                    model: {
                        value: e.password_check, callback: function (t) {
                            e.password_check = t
                        }, expression: "password_check"
                    }
                })], 1), a("el-form-item", {attrs: {label: "用户类型"}}, [a("el-select", {
                    attrs: {
                        placeholder: "请选择",
                        clearable: ""
                    }, model: {
                        value: e.usertype, callback: function (t) {
                            e.usertype = t
                        }, expression: "usertype"
                    }
                }, e._l(e.usertypes, (function (e) {
                    return a("el-option", {key: e.type, attrs: {label: e.type, value: e.type}})
                })), 1)], 1), "售后服务人员" === e.usertype ? a("el-form-item", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading_SWLT,
                        expression: "loading_SWLT"
                    }],
                    attrs: {
                        label: "负责软件",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-select", {
                    attrs: {placeholder: "请选择", clearable: ""},
                    model: {
                        value: e.serverSoftware, callback: function (t) {
                            e.serverSoftware = t
                        }, expression: "serverSoftware"
                    }
                }, e._l(e.list, (function (e) {
                    return a("el-option", {key: e.name, attrs: {label: e.name, value: e.name}})
                })), 1)], 1) : e._e(), a("el-form-item", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.onSubmit}
                }, [e._v("立即添加")]), a("el-button", {on: {click: e.cancel}}, [e._v("取消")])], 1)], 1)], 1)
            }, ia = [], la = {
                mounted: function () {
                    var e = this;
                    this.loading_SWLTtre, this.$axios.post("/admin/GetSoftWareList", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                        console.log(t.data);
                        var a = t.data.data.list;
                        e.list = [];
                        for (var s = 0; s < a.length; s++) {
                            var n = a[s];
                            e.list.push({name: n.softwareName})
                        }
                        e.loading_SWLT = !1
                    }))
                }, data: function () {
                    return {
                        loading_SWLT: !0,
                        username: "",
                        password: "",
                        password_check: "",
                        message: "",
                        usertype: "",
                        list: [{name: 123}],
                        serverSoftware: "",
                        usertypes: [{type: "客户"}, {type: "售后服务人员"}]
                    }
                }, name: "AddUserForm", methods: {
                    onSubmit: function () {
                        var e = this;
                        this.message = "", "" == this.username ? (this.$message({
                            message: "用户名不可为空",
                            type: "warning"
                        }), this.message = "用户名不可为空") : "" == this.password ? (this.$message({
                            message: "密码不可为空",
                            type: "warning"
                        }), this.message = "密码不可为空") : "" == this.password_check ? (this.$message({
                            message: "请确认密码！",
                            type: "warning"
                        }), this.message = "请确认密码！") : "" == this.usertype ? (this.$message({
                            message: "请选择用户类型",
                            type: "warning"
                        }), this.message = "请选择用户类型") : "" == this.serverSoftware && "售后服务人员" == this.usertype && (this.$message({
                            message: "请选择负责软件",
                            type: "warning"
                        }), this.message = "请选择负责软件");
                        var t, a = Object(f["a"])(this.username);
                        try {
                            for (a.s(); !(t = a.n()).done;) {
                                var s = t.value;
                                " " == s && (this.$message({
                                    message: "用户名称不可包含空格！",
                                    type: "warning"
                                }), this.message = "用户名称不可包含空格！")
                            }
                        } catch (c) {
                            a.e(c)
                        } finally {
                            a.f()
                        }
                        if (this.password != this.password_check) this.$message({
                            message: "两次密码输入不一致！",
                            type: "warning"
                        }), this.message = "两次密码输入不一致！"; else {
                            var n, r = Object(f["a"])(this.password);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var o = n.value;
                                    " " == o && (this.$message({
                                        message: "密码不可包含空格",
                                        type: "warning"
                                    }), this.message = "密码不可包含空格")
                                }
                            } catch (c) {
                                r.e(c)
                            } finally {
                                r.f()
                            }
                        }
                        if (ca(this.username) != this.username && (this.$message({
                            message: "用户名不可包含敏感字符",
                            type: "warning"
                        }), this.message = "用户名不可包含敏感字符"), "" == this.message) {
                            var i = this.password;
                            i = p(i), i = p(i);
                            var l = {
                                username: this.username,
                                password: i,
                                usertype: this.usertype,
                                software: this.serverSoftware
                            };
                            this.$axios.post("/admin/adduser", l, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                                "success" == t.data.data.message ? (e.$message({
                                    message: e.username + "  添加成功!",
                                    type: "success"
                                }), e.username = "", e.password = "", e.password_check = "", e.message = "") : e.$message({
                                    message: e.username + "  添加失败!",
                                    type: "error"
                                })
                            }))
                        }
                    }, cancel: function () {
                        this.username = "", this.password = "", this.password_check = "", this.message = "", this.serverSoftware = "", this.usertype = ""
                    }
                }
            };

        function ca(e) {
            for (var t = new RegExp("[`~@#$^&*()=|{}':;'\\[\\].<>/~@#￥……&*（）——|{}【】‘”“']"), a = "", s = 0; s < e.length; s++) a += e.substr(s, 1).replace(t, "");
            return a
        }

        var ua = la, da = (a("595e"), Object(T["a"])(ua, oa, ia, !1, null, "3aa64a38", null)), ma = da.exports,
            fa = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("el-input", {
                    attrs: {
                        id: "search_ipt",
                        placeholder: "请输入内容"
                    }, on: {change: e.search}, model: {
                        value: e.keyWord, callback: function (t) {
                            e.keyWord = t
                        }, expression: "keyWord"
                    }
                }, [a("i", {
                    staticClass: "el-input__icon el-icon-search",
                    attrs: {slot: "prefix"},
                    slot: "prefix"
                })]), a("el-menu", {
                    staticClass: "el-menu-demo",
                    attrs: {"default-active": e.activeIndex, mode: "horizontal"},
                    on: {select: e.handleSelect}
                }, [a("el-menu-item", {attrs: {index: "1"}}, [e._v("faq")]), a("el-menu-item", {attrs: {index: "2"}}, [e._v("日志")]), a("el-menu-item", {attrs: {index: "3"}}, [e._v("上线软件")])], 1), e.faqTableShow ? a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.faqTableLoading,
                        expression: "faqTableLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.faqTable,
                        height: "462",
                        border: "",
                        id: "faqtable",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {
                        prop: "faqName",
                        label: "标题",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "faqType",
                        label: "类型",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "faqInfo",
                        label: "详细信息"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "faqDate",
                        label: "创建日期",
                        width: "100"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "faqSoftware",
                        label: "对应软件",
                        width: "100"
                    }
                })], 1) : e._e(), e.logTableShow ? a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.logTableLoading,
                        expression: "logTableLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.logTable,
                        height: "462",
                        border: "",
                        id: "logtable",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {
                        prop: "log_level",
                        label: "level",
                        width: "100",
                        sortable: ""
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "logdetail",
                        label: "详细信息"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "java_class",
                        label: "java类",
                        width: "180",
                        sortable: ""
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "thread",
                        label: "线程",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "log_time",
                        label: "时间",
                        width: "180",
                        sortable: ""
                    }
                })], 1) : e._e(), e.SWTableShow ? a("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.SWTableLoading,
                        expression: "SWTableLoading"
                    }],
                    staticStyle: {width: "100%"},
                    attrs: {
                        data: e.SWTable,
                        height: "462",
                        border: "",
                        id: "SWtable",
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        "element-loading-background": "rgba(0, 0, 0, 0.8)"
                    }
                }, [a("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "软件ID",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "softwarename",
                        label: "软件名",
                        width: "180"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "softwareinfo",
                        label: "软件描述"
                    }
                }), a("el-table-column", {attrs: {prop: "updatedate", label: "更新日期", width: "180"}})], 1) : e._e()], 1)
            }, ga = [], ha = {
                data: function () {
                    return {
                        faqTableLoading: !1,
                        logTableLoading: !1,
                        SWTableLoading: !1,
                        keyWord: "",
                        activeIndex: "1",
                        faqTableShow: !0,
                        logTableShow: !1,
                        SWTableShow: !1,
                        faqTable: [],
                        logTable: [],
                        SWTable: []
                    }
                }, name: "Search", methods: {
                    search: function (e) {
                        var t, a = this;
                        1 == this.faqTableShow ? (console.log("faq搜索:" + this.keyWord), this.faqTableLoading = !0, t = {faq_search: this.keyWord}, this.$axios.post("/admin/e_faq_search", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            console.log("faq搜索结果"), console.log(e), a.faqTable = e.data.content;
                            for (var t = 0; t < a.faqTable.length; t++) a.faqTable[t].faqDate = a.faqTable[t].faqDate.substring(0, 10);
                            a.faqTableLoading = !1
                        }))) : 1 == this.logTableShow ? (console.log("log搜索:" + this.keyWord), t = {log_search: this.keyWord}, this.logTableLoading = !0, this.$axios.post("/admin/e_log_search", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            console.log("log搜索结果:"), console.log(e), a.logTable = e.data.content;
                            for (var t = 0; t < a.logTable.length; t++) a.logTable[t].log_time = a.logTable[t].log_time.substring(0, 19);
                            a.logTableLoading = !1
                        }))) : (this.SWTableLoading = !0, console.log("软件搜索:" + this.keyWord), t = {software_search: this.keyWord}, this.$axios.post("/admin/e_software_search", t, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                            console.log("软件搜索结果"), console.log(e), a.SWTable = e.data.content;
                            for (var t = 0; t < a.SWTable.length; t++) a.SWTable[t].updatedate = a.SWTable[t].updatedate.substring(0, 10);
                            a.SWTableLoading = !1
                        })))
                    }, handleSelect: function (e, t) {
                        var a, s = this;
                        if ("1" == e) {
                            if (this.faqTableLoading = !0, console.log("faq搜索" + this.keyWord), a = {faq_search: this.keyWord}, this.faqTableShow = !0, this.logTableShow = !1, this.SWTableShow = !1, "" == this.keyWord || null == this.keyWord) return void (this.faqTableLoading = !1);
                            this.$axios.post("/admin/e_faq_search", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                                console.log("faq搜索结果"), console.log(e), s.faqTable = e.data.content;
                                for (var t = 0; t < s.faqTable.length; t++) s.faqTable[t].faqDate = s.faqTable[t].faqDate.substring(0, 10);
                                s.faqTableLoading = !1
                            }))
                        } else if ("2" == e) {
                            if (this.logTableLoading = !0, console.log("log搜索" + this.keyWord), a = {log_search: this.keyWord}, this.faqTableShow = !1, this.logTableShow = !0, this.SWTableShow = !1, "" == this.keyWord || null == this.keyWord) return void (this.logTableLoading = !1);
                            this.$axios.post("/admin/e_log_search", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                                console.log("log搜索结果:"), console.log(e), s.logTable = e.data.content;
                                for (var t = 0; t < s.logTable.length; t++) s.logTable[t].log_time = s.logTable[t].log_time.substring(0, 19);
                                s.logTableLoading = !1
                            }))
                        } else if ("3" == e) {
                            if (this.SWTableLoading = !0, console.log("软件搜索" + this.keyWord), a = {software_search: this.keyWord}, this.faqTableShow = !1, this.logTableShow = !1, this.SWTableShow = !0, "" == this.keyWord || null == this.keyWord) return void (this.SWTableLoading = !1);
                            this.$axios.post("/admin/e_software_search", a, {headers: {token: sessionStorage.getItem("token")}}).then((function (e) {
                                console.log("软件搜索结果"), console.log(e), s.SWTable = e.data.content;
                                for (var t = 0; t < s.SWTable.length; t++) s.SWTable[t].updatedate = s.SWTable[t].updatedate.substring(0, 10);
                                s.SWTableLoading = !1
                            }))
                        }
                    }
                }
            }, pa = ha, va = (a("a190"), Object(T["a"])(pa, fa, ga, !1, null, "3c02a46b", null)), ba = va.exports,
            _a = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "function"}, [a("el-menu", {
                    staticClass: "el-menu-demo",
                    attrs: {"default-active": e.activeIndex, mode: "horizontal"},
                    on: {select: e.handleSelect}
                }, [a("el-menu-item", {attrs: {index: "1"}}, [e._v("用户进入功能模块次数")]), a("el-menu-item", {attrs: {index: "2"}}, [e._v("用户流量")]), a("el-menu-item", {attrs: {index: "4"}}, [e._v("客户申请售后服务记录")])], 1), e.EnterCountshow ? a("div", {attrs: {id: "EnterCount"}}, [a("div", {
                    ref: "C_EnterCount",
                    staticClass: "chart",
                    attrs: {id: "C_EnterCount"}
                }), a("div", {ref: "S_EnterCount", staticClass: "chart", attrs: {id: "S_EnterCount"}})]) : e._e()], 1)
            }, wa = [], ya = {
                mounted: function () {
                    this.getEnterCount()
                }, data: function () {
                    return {activeIndex: "1", EnterCountshow: !0}
                }, name: "UserAction", methods: {
                    handleSelect: function (e, t) {
                        "1" == e ? this.getEnterCount() : "2" == e ? this.getPV() : "3" == e || "4" == e && this.getclientLog()
                    }, getEnterCount: function () {
                        var e = this, t = Sa;
                        this.$axios.post("/admin/getActions_c", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (a) {
                            var s = a.data.data.list;
                            t.series[0].data = [];
                            for (var n = 0; n < s.length; n++) {
                                var r = s[n];
                                t.series[0].data.push({name: r.Aname, value: r.count})
                            }
                            t.title.text = "client";
                            var o = e.$refs.C_EnterCount;
                            if (o) {
                                document.getElementById("C_EnterCount").innerHTML = "", document.getElementById("C_EnterCount").removeAttribute("_echarts_instance_");
                                var i = e.$echarts.init(o);
                                i.setOption(t), window.addEventListener("resize1", (function () {
                                    i.resize()
                                }))
                            }
                        })), this.$axios.post("/admin/getActions_s", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            var a = Sa, s = t.data.data.list;
                            a.series[0].data = [];
                            for (var n = 0; n < s.length; n++) {
                                var r = s[n];
                                a.series[0].data.push({name: r.Aname, value: r.count})
                            }
                            a.title.text = "server";
                            var o = e.$refs.S_EnterCount;
                            if (o) {
                                document.getElementById("S_EnterCount").innerHTML = "", document.getElementById("S_EnterCount").removeAttribute("_echarts_instance_");
                                var i = e.$echarts.init(o);
                                i.setOption(a), window.addEventListener("resize", (function () {
                                    i.resize()
                                }))
                            }
                        }))
                    }, getclientLog: function () {
                        var e = this;
                        this.$axios.post("/admin/getActions_clientServeice", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            var a = Sa, s = t.data.data.list;
                            a.series[0].data = [];
                            for (var n = 0; n < s.length; n++) {
                                var r = s[n];
                                a.series[0].data.push({name: r.SoftName, value: r.count})
                            }
                            a.title.text = "申请售后软件";
                            var o = e.$refs.C_EnterCount;
                            if (o) {
                                document.getElementById("C_EnterCount").innerHTML = "", document.getElementById("C_EnterCount").removeAttribute("_echarts_instance_");
                                var i = e.$echarts.init(o);
                                i.setOption(a), window.addEventListener("resize1", (function () {
                                    i.resize()
                                }))
                            }
                        })), this.$axios.post("/admin/getActions_clientServeceType", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            var a = Sa, s = t.data.data.list;
                            console.log(s), a.series[0].data = [];
                            for (var n = 0; n < s.length; n++) {
                                var r = s[n];
                                a.series[0].data.push({name: r.type, value: r.percent})
                            }
                            a.title.text = "问题类型";
                            var o = e.$refs.S_EnterCount;
                            if (o) {
                                document.getElementById("S_EnterCount").innerHTML = "", document.getElementById("S_EnterCount").removeAttribute("_echarts_instance_");
                                var i = e.$echarts.init(o);
                                i.setOption(a), window.addEventListener("resize", (function () {
                                    i.resize()
                                }))
                            }
                        }))
                    }, getPV: function () {
                        var e = this;
                        this.$axios.post("/admin/getburypoint", {}, {headers: {token: sessionStorage.getItem("token")}}).then((function (t) {
                            var a = ka, s = xa;
                            a.title.text = "客户", s.title.text = "售后服务人员";
                            var n = e.$refs.S_EnterCount, r = e.$refs.C_EnterCount;
                            console.log("getburypoint");
                            for (var o = t.data.data, i = 0; i < o.length; i++) {
                                var l = o[i];
                                console.log(l), "客户" != l.user_type ? (console.log("fw"), s.dataset.source[0].push(l.api_name), s.dataset.source[1].push(l.pv), s.dataset.source[2].push(l.uv), s.dataset.source[3].push(l.ip_count)) : (console.log("kh"), a.dataset.source[0].push(l.api_name), a.dataset.source[1].push(l.pv), a.dataset.source[2].push(l.uv), a.dataset.source[3].push(l.ip_count))
                            }
                            if (r) {
                                console.log(a), document.getElementById("C_EnterCount").innerHTML = "", document.getElementById("C_EnterCount").removeAttribute("_echarts_instance_");
                                var c = e.$echarts.init(r);
                                c.setOption(a), window.addEventListener("resize1", (function () {
                                    c.resize()
                                }))
                            }
                            if (n) {
                                console.log(s), document.getElementById("S_EnterCount").innerHTML = "", document.getElementById("S_EnterCount").removeAttribute("_echarts_instance_");
                                var u = e.$echarts.init(n);
                                u.setOption(s), window.addEventListener("resize4", (function () {
                                    u.resize()
                                }))
                            }
                        }))
                    }
                }
            }, Sa = {
                title: {
                    show: !0,
                    text: "主标题",
                    link: "",
                    target: null,
                    sublink: "",
                    subtarget: null,
                    x: "center",
                    y: "top",
                    textAlign: null,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "#ccc",
                    borderWidth: 0,
                    padding: 5,
                    itemGap: 10,
                    textStyle: {
                        fontFamily: "Arial, Verdana, sans...",
                        fontSize: 12,
                        fontStyle: "normal",
                        fontWeight: "normal"
                    },
                    subtextStyle: {
                        fontFamily: "Arial, Verdana, sans...",
                        fontSize: 12,
                        fontStyle: "normal",
                        fontWeight: "normal"
                    },
                    zlevel: 0,
                    z: 6
                },
                tooltip: {trigger: "item", formatter: "{b} : {d}% <br/> {c}"},
                graphic: {elements: [{type: "image", style: {width: 130, height: 130}, left: "center", top: "center"}]},
                series: [{
                    type: "pie",
                    radius: ["35%", "50%"],
                    center: ["50%", "50%"],
                    color: ["#7F71FB", "#46DF6C", "#EFDD1E", "#0071FB", "#D072FB", "#C3F12B", "#8F6C22"],
                    labelLine: {normal: {show: !0, length: 20, length2: 20, lineStyle: {color: "#fff", width: 2}}},
                    label: {
                        normal: {
                            formatter: "{c|{b}}\n{d|{d}%}",
                            rich: {
                                b: {fontSize: 16, color: "#12EABE", align: "left", padding: 4},
                                d: {fontSize: 16, align: "left", padding: 2},
                                c: {color: "#333", fontSize: 16, align: "left", padding: 2}
                            }
                        }
                    }
                }]
            }, ka = {
                title: {
                    text: "客户",
                    subtext: "页面浏览",
                    x: "center",
                    y: "bottom",
                    textStyle: {color: "rgba(0,0,0,0.6)", fontSize: 16, fontWeight: "bolder"},
                    formatter: function (e) {
                        return "200"
                    }
                },
                legend: {},
                tooltip: {},
                dataset: {source: [["product"], ["页面浏览量"], ["用户浏览量"], ["不同ip浏览量"]]},
                xAxis: [{type: "category", gridIndex: 0}],
                yAxis: [{gridIndex: 0}],
                grid: [{bottom: "25%"}, {top: "55%"}],
                series: [{type: "bar", seriesLayoutBy: "row"}, {type: "bar", seriesLayoutBy: "row"}, {
                    type: "bar",
                    seriesLayoutBy: "row"
                }]
            }, xa = {
                title: {
                    text: "客户",
                    subtext: "页面浏览",
                    x: "center",
                    y: "bottom",
                    textStyle: {color: "rgba(0,0,0,0.6)", fontSize: 16, fontWeight: "bolder"},
                    formatter: function (e) {
                        return "200"
                    }
                },
                legend: {},
                tooltip: {},
                dataset: {source: [["product"], ["页面浏览量"], ["用户浏览量"], ["不同ip浏览量"]]},
                xAxis: [{type: "category", gridIndex: 0}],
                yAxis: [{gridIndex: 0}],
                grid: [{bottom: "25%"}, {top: "55%"}],
                series: [{type: "bar", seriesLayoutBy: "row"}, {type: "bar", seriesLayoutBy: "row"}, {
                    type: "bar",
                    seriesLayoutBy: "row"
                }]
            }, $a = ya, Ca = (a("0332"), Object(T["a"])($a, _a, wa, !1, null, "1bdf7e49", null)), qa = Ca.exports;
        s["default"].use(u["a"]);
        var Ia = [{
                path: "/server",
                name: "server",
                meta: {title: "售后服务人员"},
                component: ce,
                children: [{path: "myService", name: "myService", component: xt}, {
                    path: "getMsg",
                    component: mt
                }, {path: "management", component: Lt}, {path: "sendMsg", component: et}]
            }, {
                path: "/client",
                meta: {title: "客户"},
                name: "client",
                component: he,
                children: [{path: "purchased", name: "purchased", component: ye, meta: {title: "客户"}}, {
                    path: "service",
                    component: qe
                }, {path: "apply", component: Le}, {path: "sendMsg", component: He}, {
                    path: "receiveMsg",
                    component: ot
                }, {path: "updateInfo", component: bt}, {path: "faq", component: Tt}]
            }, {
                path: "/admin",
                meta: {title: "管理员"},
                beforeEnter: function (e, t, a) {
                    console.log("beforeEnter-Admin "), "Admin" == sessionStorage.getItem("role") ? a() : (alert("你没有权限访问改页面！，即将跳转到登录界面！"), a({name: "Login"}))
                },
                afterEach: function (e, t) {
                },
                component: V,
                children: [{
                    path: "ServiceTable",
                    name: "ServiceTable",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: Q
                }, {
                    path: "AccssTable",
                    name: "AccssTable",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: Vt
                }, {
                    path: "FaqTable",
                    name: "FaqTable",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: Zt
                }, {
                    path: "SWTable",
                    name: "SWTable",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: ra
                }, {
                    path: "AddUserForm",
                    name: "AddUserForm",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: ma
                }, {
                    path: "Search", name: "Search", meta: {title: "管理员", role: ["Admin"]}, beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    }, component: ba
                }, {
                    path: "UserAction",
                    name: "UserAction",
                    meta: {title: "管理员", role: ["Admin"]},
                    beforeEnter: function (e, t, a) {
                        e.meta.role.includes(sessionStorage.getItem("role")) ? a() : (alert("你没有权限访问改页面！"), a(!1))
                    },
                    component: qa
                }, {path: "", redirect: "ServiceTable"}]
            }, {path: "", redirect: "/login"}, {path: "/login", name: "Login", meta: {title: "登录"}, component: D}],
            Na = new u["a"]({routes: Ia});
        Na.beforeEach((function (e, t, a) {
            if ("/login" === e.path) return a();
            var s = window.sessionStorage.getItem("token");
            if (!s) return a("/login");
            var n = localStorage.getItem("ip"), r = sessionStorage.getItem("token"), o = "";
            "/client/purchased" === e.path && (o = "购买过的产品", window.axios.post("/burypoint", {
                user_type: "客户",
                api_name: o,
                ip: n,
                token: r
            }, {headers: {token: r}, withCredentials: !0}).then((function (e) {
                console.log("ip为" + n + "的用户访问了一次" + o + "页面")
            })).catch((function (e) {
                console.log(e)
            }))), "/server/myService" === e.path && (o = "我的售后", window.axios.post("/burypoint", {
                user_type: "维护人员",
                api_name: o,
                ip: n,
                token: r
            }, {headers: {token: r}, withCredentials: !0}).then((function (e) {
                console.log("ip为" + n + "的用户访问了一次" + o + "页面")
            })).catch((function (e) {
                console.log(e)
            }))), console.log("to.meta.title:" + e.meta.title), null == e.meta.title ? document.title = "登录" : document.title = e.meta.title, a()
        }));
        var Ta = Na, Ea = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "app"}}, [a("router-view")], 1)
            }, Da = [], za = {name: "app"}, Aa = za, Wa = (a("034f"), Object(T["a"])(Aa, Ea, Da, !1, null, null, null)),
            La = Wa.exports, ja = a("2f62");
        s["default"].use(ja["a"]);
        var Pa = new ja["a"].Store({
            state: {
                orderData: [],
                softwareNames: [],
                softwareName: [],
                receivers: [],
                serviceData: [],
                username: "",
                token: "",
                serviceItems: []
            }, mutations: {
                setOrder: function (e, t) {
                    e.orderData = t
                }, setUsername: function (e, t) {
                    e.username = t
                }, setToken: function (e, t) {
                    e.token = t
                }, setServiceData: function (e, t) {
                    e.serviceData = t
                }, setSoftwareNames: function (e, t) {
                    e.softwareNames = t
                }, setReceivers: function (e, t) {
                    e.receivers = t
                }, setServiceItems: function (e, t) {
                    e.serviceItems = t
                }, setSoftwareName: function (e, t) {
                    e.softwareName = t
                }, clearToken: function (e) {
                    e.token = ""
                }
            }, actions: {}, modules: {}
        }), Fa = a("313e"), Ma = a.n(Fa);
        s["default"].config.productionTip = !1, s["default"].prototype.$echarts = Ma.a, s["default"].config.productionTip = !1, new s["default"]({
            router: Ta,
            store: Pa,
            render: function (e) {
                return e(La)
            }
        }).$mount("#app"), s["default"].directive("statistic", {
            bind: function (e, t) {
                var a = JSON.stringify, s = localStorage.getItem("ip"), n = sessionStorage.getItem("token"),
                    r = a(t.value).replace(/"/g, ""), o = sessionStorage.getItem("role"),
                    i = "Client" === o ? "客户" : "维护人员";
                e.addEventListener("click", (function () {
                    console.log(a(t.value)), window.axios.post("/burypoint", {
                        user_type: i,
                        api_name: r,
                        ip: s,
                        token: n
                    }, {headers: {token: n}, withCredentials: !0}).then((function (e) {
                        console.log("ip为" + s + "的用户访问了一次" + r + "页面")
                    })).catch((function (e) {
                        console.log(e)
                    }))
                }))
            }
        })
    }, "57f5": function (e, t, a) {
    }, "595e": function (e, t, a) {
        "use strict";
        var s = a("ac7f"), n = a.n(s);
        n.a
    }, "5cae": function (e, t, a) {
        "use strict";
        var s = a("a233"), n = a.n(s);
        n.a
    }, "73e2": function (e, t, a) {
    }, "79bb": function (e, t, a) {
    }, "7d9c": function (e, t, a) {
        "use strict";
        var s = a("a871"), n = a.n(s);
        n.a
    }, "85ec": function (e, t, a) {
    }, "8fd8": function (e, t, a) {
    }, 9073: function (e, t, a) {
        "use strict";
        var s = a("564d"), n = a.n(s);
        n.a
    }, "9ba5": function (e, t, a) {
        "use strict";
        var s = a("47da"), n = a.n(s);
        n.a
    }, a190: function (e, t, a) {
        "use strict";
        var s = a("ddba"), n = a.n(s);
        n.a
    }, a233: function (e, t, a) {
    }, a871: function (e, t, a) {
    }, ac7f: function (e, t, a) {
    }, b496: function (e, t, a) {
    }, b822: function (e, t, a) {
        "use strict";
        var s = a("df8b"), n = a.n(s);
        n.a
    }, c8e1: function (e, t, a) {
        "use strict";
        var s = a("2b54"), n = a.n(s);
        n.a
    }, d83f: function (e, t, a) {
        "use strict";
        var s = a("054b"), n = a.n(s);
        n.a
    }, ddba: function (e, t, a) {
    }, de0a: function (e, t, a) {
    }, df8b: function (e, t, a) {
    }, e628: function (e, t, a) {
    }, e670: function (e, t, a) {
        "use strict";
        var s = a("73e2"), n = a.n(s);
        n.a
    }, e7e3: function (e, t, a) {
        "use strict";
        var s = a("0885"), n = a.n(s);
        n.a
    }, ef03: function (e, t, a) {
    }
});
//# sourceMappingURL=app.js.map