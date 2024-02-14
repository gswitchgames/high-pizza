var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../../runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../runtime/helpers/createClass"));

window.zs = window.zs || {}, function (t) {
    var e;
    !function (t) {
        t[t.Local = 0] = "Local", t[t.Async = 1] = "Async", t[t.Sync = 2] = "Sync";
    }(e = e || (e = {}));
    var s = /* */ function () {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [{
            key: "rotateLeft",
            value: function rotateLeft(t, e) {
                return t << e | t >>> 32 - e;
            }
        }, {
            key: "addUnsigned",
            value: function addUnsigned(t, e) {
                var s, i, a, n, r;
                return a = 2147483648 & t, n = 2147483648 & e, r = (1073741823 & t) + (1073741823 & e),
                    (s = 1073741824 & t) & (i = 1073741824 & e) ? 2147483648 ^ r ^ a ^ n : s | i ? 1073741824 & r ? 3221225472 ^ r ^ a ^ n : 1073741824 ^ r ^ a ^ n : r ^ a ^ n;
            }
        }, {
            key: "F",
            value: function F(t, e, s) {
                return t & e | ~t & s;
            }
        }, {
            key: "G",
            value: function G(t, e, s) {
                return t & s | e & ~s;
            }
        }, {
            key: "H",
            value: function H(t, e, s) {
                return t ^ e ^ s;
            }
        }, {
            key: "I",
            value: function I(t, e, s) {
                return e ^ (t | ~s);
            }
        }, {
            key: "FF",
            value: function FF(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.F(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "GG",
            value: function GG(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.G(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "HH",
            value: function HH(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.H(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "II",
            value: function II(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.I(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "convertToWordArray",
            value: function convertToWordArray(t) {
                for (var e, s = t.length, i = s + 8, a = 16 * ((i - i % 64) / 64 + 1), n = Array(a - 1), r = 0, o = 0; o < s;) {
                    r = o % 4 * 8, n[e = (o - o % 4) / 4] = n[e] | t.charCodeAt(o) << r, o++;
                }
                return r = o % 4 * 8, n[e = (o - o % 4) / 4] = n[e] | 128 << r, n[a - 2] = s << 3,
                    n[a - 1] = s >>> 29, n;
            }
        }, {
            key: "wordToHex",
            value: function wordToHex(t) {
                var e, s = "", i = "";
                for (e = 0; e <= 3; e++) {
                    s += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
                }
                return s;
            }
        }, {
            key: "uTF8Encode",
            value: function uTF8Encode(t) {
                t = t.replace(/\x0d\x0a/g, "\n");
                for (var e = "", s = 0; s < t.length; s++) {
                    var i = t.charCodeAt(s);
                    i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192),
                        e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
                            e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
                }
                return e;
            }
        }, {
            key: "md5",
            value: function md5(t) {
                var e, s, i, a, n, r, o, d, l, h = Array();
                for (t = this.uTF8Encode(t), h = this.convertToWordArray(t), r = 1732584193, o = 4023233417,
                    d = 2562383102, l = 271733878, e = 0; e < h.length; e += 16) {
                    s = r, i = o, a = d, n = l, r = this.FF(r, o, d, l, h[e + 0], 7, 3614090360), l = this.FF(l, r, o, d, h[e + 1], 12, 3905402710),
                        d = this.FF(d, l, r, o, h[e + 2], 17, 606105819), o = this.FF(o, d, l, r, h[e + 3], 22, 3250441966),
                        r = this.FF(r, o, d, l, h[e + 4], 7, 4118548399), l = this.FF(l, r, o, d, h[e + 5], 12, 1200080426),
                        d = this.FF(d, l, r, o, h[e + 6], 17, 2821735955), o = this.FF(o, d, l, r, h[e + 7], 22, 4249261313),
                        r = this.FF(r, o, d, l, h[e + 8], 7, 1770035416), l = this.FF(l, r, o, d, h[e + 9], 12, 2336552879),
                        d = this.FF(d, l, r, o, h[e + 10], 17, 4294925233), o = this.FF(o, d, l, r, h[e + 11], 22, 2304563134),
                        r = this.FF(r, o, d, l, h[e + 12], 7, 1804603682), l = this.FF(l, r, o, d, h[e + 13], 12, 4254626195),
                        d = this.FF(d, l, r, o, h[e + 14], 17, 2792965006), o = this.FF(o, d, l, r, h[e + 15], 22, 1236535329),
                        r = this.GG(r, o, d, l, h[e + 1], 5, 4129170786), l = this.GG(l, r, o, d, h[e + 6], 9, 3225465664),
                        d = this.GG(d, l, r, o, h[e + 11], 14, 643717713), o = this.GG(o, d, l, r, h[e + 0], 20, 3921069994),
                        r = this.GG(r, o, d, l, h[e + 5], 5, 3593408605), l = this.GG(l, r, o, d, h[e + 10], 9, 38016083),
                        d = this.GG(d, l, r, o, h[e + 15], 14, 3634488961), o = this.GG(o, d, l, r, h[e + 4], 20, 3889429448),
                        r = this.GG(r, o, d, l, h[e + 9], 5, 568446438), l = this.GG(l, r, o, d, h[e + 14], 9, 3275163606),
                        d = this.GG(d, l, r, o, h[e + 3], 14, 4107603335), o = this.GG(o, d, l, r, h[e + 8], 20, 1163531501),
                        r = this.GG(r, o, d, l, h[e + 13], 5, 2850285829), l = this.GG(l, r, o, d, h[e + 2], 9, 4243563512),
                        d = this.GG(d, l, r, o, h[e + 7], 14, 1735328473), o = this.GG(o, d, l, r, h[e + 12], 20, 2368359562),
                        r = this.HH(r, o, d, l, h[e + 5], 4, 4294588738), l = this.HH(l, r, o, d, h[e + 8], 11, 2272392833),
                        d = this.HH(d, l, r, o, h[e + 11], 16, 1839030562), o = this.HH(o, d, l, r, h[e + 14], 23, 4259657740),
                        r = this.HH(r, o, d, l, h[e + 1], 4, 2763975236), l = this.HH(l, r, o, d, h[e + 4], 11, 1272893353),
                        d = this.HH(d, l, r, o, h[e + 7], 16, 4139469664), o = this.HH(o, d, l, r, h[e + 10], 23, 3200236656),
                        r = this.HH(r, o, d, l, h[e + 13], 4, 681279174), l = this.HH(l, r, o, d, h[e + 0], 11, 3936430074),
                        d = this.HH(d, l, r, o, h[e + 3], 16, 3572445317), o = this.HH(o, d, l, r, h[e + 6], 23, 76029189),
                        r = this.HH(r, o, d, l, h[e + 9], 4, 3654602809), l = this.HH(l, r, o, d, h[e + 12], 11, 3873151461),
                        d = this.HH(d, l, r, o, h[e + 15], 16, 530742520), o = this.HH(o, d, l, r, h[e + 2], 23, 3299628645),
                        r = this.II(r, o, d, l, h[e + 0], 6, 4096336452), l = this.II(l, r, o, d, h[e + 7], 10, 1126891415),
                        d = this.II(d, l, r, o, h[e + 14], 15, 2878612391), o = this.II(o, d, l, r, h[e + 5], 21, 4237533241),
                        r = this.II(r, o, d, l, h[e + 12], 6, 1700485571), l = this.II(l, r, o, d, h[e + 3], 10, 2399980690),
                        d = this.II(d, l, r, o, h[e + 10], 15, 4293915773), o = this.II(o, d, l, r, h[e + 1], 21, 2240044497),
                        r = this.II(r, o, d, l, h[e + 8], 6, 1873313359), l = this.II(l, r, o, d, h[e + 15], 10, 4264355552),
                        d = this.II(d, l, r, o, h[e + 6], 15, 2734768916), o = this.II(o, d, l, r, h[e + 13], 21, 1309151649),
                        r = this.II(r, o, d, l, h[e + 4], 6, 4149444226), l = this.II(l, r, o, d, h[e + 11], 10, 3174756917),
                        d = this.II(d, l, r, o, h[e + 2], 15, 718787259), o = this.II(o, d, l, r, h[e + 9], 21, 3951481745),
                        r = this.addUnsigned(r, s), o = this.addUnsigned(o, i), d = this.addUnsigned(d, a),
                        l = this.addUnsigned(l, n);
                }
                return (this.wordToHex(r) + this.wordToHex(o) + this.wordToHex(d) + this.wordToHex(l)).toLowerCase();
            }
        }, {
            key: "buildSign",
            value: function buildSign(t, e) {
                e = e || !0;
                for (var s = Object.keys(t).sort(), i = "", a = 0; a < s.length; a++) {
                    i += s[a] + ":" + t[s[a]];
                }
                e && (i += zs.configs.gameCfg.secret);
                var n = this.md5(i);
                return n = n.toLowerCase();
            }
        }]);
        return s;
    }();
    var i = /* */ function () {
        function i() {
            (0, _classCallCheck2.default)(this, i);
        }
        (0, _createClass2.default)(i, null, [{
            key: "init",
            value: function () {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee() {
                    var t, e, _t;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    t = zs.configs.gameCfg;
                                    i.defaultData = t.network;
                                    _context.next = 4;
                                    return i.ping();

                                case 4:
                                    e = {
                                        user_id: 1,
                                        user_type: 1,
                                        update_time: Date.now(),
                                        is_new: 0
                                    };
                                    if (!zs.platform.proxy) {
                                        _context.next = 13;
                                        break;
                                    }
                                    _context.next = 8;
                                    return zs.platform.async.getLoginParams();

                                case 8:
                                    _t = _context.sent;
                                    _context.t0 = _t;
                                    if (!_context.t0) {
                                        _context.next = 13;
                                        break;
                                    }
                                    _context.next = 13;
                                    return i.login(_t).then(function (t) {
                                        t.user_id && (e = t, zs.log.debug("登陆成功：", "Network", t));
                                    });

                                case 13:
                                    return _context.abrupt("return", e);

                                case 14:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }));
                function init() {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "getUrl",
            value: function getUrl(t) {
                return true;
                // return i.domainIdx < 0 || i.domainIdx >= i.listDomain.length ? null : null == i.mapWebApi[t] ? (zs.log.error("非法网络接口： " + t, "Network"),
                //     null) : i.listDomain[i.domainIdx] + "/" + i.version + "/" + i.mapWebApi[t];
            }
        }, {
            key: "obj2arg",
            value: function obj2arg(t) {
                var e = [];
                for (var s in t) {
                    e.push(s + "=" + t[s]);
                }
                return e.join("&");
            }
        }, {
            key: "post",
            value: function post(t, e, s) {
                var _this = this;
                return new Promise(function (a, n) {
                    var r = new Laya.HttpRequest(), o = !1, d = !1;
                    r.http.timeout = s || 1e4, zs.utils.sleep(r.http.timeout).then(function () {
                        d || (n(), o = !0);
                    }), r.once(Laya.Event.COMPLETE, _this, function (e) {
                        if (!o) {
                            zs.log.debug("post " + t + " 成功", "Network", e);
                            var _s = JSON.parse(e);
                            a(_s.data), d = !0;
                        }
                    }), r.once(Laya.Event.ERROR, _this, function (t) {
                        o || (n(t), d = !0);
                    })//, r.send(t, i.obj2arg(e), "post", "text");
                });
            }
        }, {
            key: "get",
            value: function get(t, e, s) {
                var _this2 = this;
                return new Promise(function (a, n) {
                    var r = new Laya.HttpRequest(), o = !1, d = !1;
                    r.http.timeout = s || 1e4, zs.utils.sleep(r.http.timeout).then(function () {
                        d || (n(), o = !0);
                    }), r.once(Laya.Event.COMPLETE, _this2, function (t) {
                        if (!o) {
                            var _e = JSON.parse(t);
                            a(_e.data), d = !0;
                        }
                    }), r.once(Laya.Event.ERROR, _this2, function (t) {
                        o || (n(t), d = !0);
                    })//, r.send(t, i.obj2arg(e), "get", "text");
                });
            }
        }, {
            key: "nativeRequest",
            value: function nativeRequest(t, e, i, a, n) {
                var _this3 = this;
                if (a) {
                    var _t2 = s.buildSign(e, !n);
                    e = Object.assign(e, {
                        sign: _t2
                    });
                }
                return new Promise(function (s, a) {
                    zs.platform.async.request({
                        url: t,
                        data: e,
                        method: i
                    }).then(function (t) {
                        s(t);
                    }).catch(function () {
                        var n = new XMLHttpRequest();
                        n.onreadystatechange = function () {
                            if (4 == n.readyState) {
                                var t = n.responseText;
                                if (n.status >= 200 && n.status < 400) {
                                    var e = {};
                                    try {
                                        e = JSON.parse(t);
                                    } catch (e) {
                                        return zs.log.error("json parse error ", t), a(e);
                                    }
                                    return s(e);
                                }
                                return zs.log.error("error ", t), a(t);
                            }
                        }, n.timeout = 3e3, n.ontimeout = function (t) {
                            return zs.log.error("error ", t), a(t);
                        }, n.open(i, t, !0), "POST" == i ? (n.open("POST", t), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            n.send(_this3.obj2arg(e))) : n.send();
                    });
                });
            }
        }, {
            key: "request",
            value: function request(t, s, a) {
                return new Promise(function (n, r) {
                    var o = null, d = i.getUrl(t), l = null;
                    if (d && (null == a || a == e.Sync)) return !function () {
                        var a = null;
                        let e0 = {};
                        switch (t) {
                            case "config":
                                if (s) {
                                    if (s.type == "switch") {
                                        let ee = "{\"zs_version\":\"1\",\"zs_switch\":\"0\",\"zs_click_award_num\":\"\",\"zs_button_delay_time\":\"2000\",\"zs_start_game_video_switch\":\"0\",\"zs_banner_vertical_enable\":\"1\",\"zs_ready_click_num\":\"\",\"zs_full_screen_button_switch\":\"1\",\"zs_native_click_switch\":\"1\",\"zs_start_video_switch\":\"0\",\"zs_native_touch_switch\":\"\",\"zs_native_btn_text\":\"\",\"zs_native_close_switch\":\"1\",\"zs_native_next_limit\":\"1\",\"zs_box_switch\":\"1\",\"test_touch_switch\":\"1\",\"zs_jump_switch\":\"0\",\"zs_full_screen1_jump\":\"0\",\"zs_full_screen2_jump\":\"0\",\"zs_finish_jump\":\"0\",\"zs_history_list_jump\":\"0\",\"zs_auto_full_screen_jump_switch\":\"0\",\"zs_auto_jump_switch\":\"0\",\"zs_friends_playing_switch\":\"1\",\"zs_reminder_switch\":\"1\",\"zs_false_news_switch\":\"1\",\"zs_false_news_child\":\"\",\"zs_slide_jump_switch\":\"0\",\"zs_full_screen_jump\":\"1\",\"zs_before_finsh_jump_switch\":\"1\",\"zs_Fakerjump\":\"1\",\"zs_finish_full_screen_switch\":\"1\",\"zs_native_delay\":\"1\",\"zs_share_title\":\"你一顿能吃几大碗？？？\",\"zs_share_img\":\"https://txcdn.wqop2018.com/fnddj/412a6decf32edfc4e1d3b2b85cd250a0.png\",\"zs_banner_adunit\":\"adunit-778b065dc783f36a\",\"zs_banner_adunit2\":\"adunit-563e53a7326130af\",\"zs_banner_adunit3\":\"adunit-778b065dc783f36a\",\"zs_video_adunit\":\"adunit-485ab1869c25f907\",\"zs_full_screen_adunit\":\"\",\"zs_gridAd_id\":\"\",\"zs_click_award_since\":\"\",\"zs_scene_value\":\"1005|1006|1011|1012|1013|1014|1017|1019|1020|1023|1024|1025|1030|1031|1032|1036|1042|1047|1048|1049|1053|1102|1129|1027\",\"zs_revive_way\":\"\",\"zs_revive_num\":\"\",\"zs_system\":\"\",\"zs_city\":\"广州市|北京市|上海市|成都市|杭州市|苏州市|深圳市|东莞市\",\"zs_time\":\"\",\"zs_banner_banner_time\":\"1500\",\"zs_full_screen_banner_time\":\"3\",\"zs_banner_refresh_time\":\"7000\",\"zs_ad_jump_num\":\"\",\"zs_full_screen_ad\":\"1\",\"zs_native_adunit\":\"\",\"zs_jump_time\":\"\",\"zs_start_video_switch(city)\":\"北京市|上海市|广州市|深圳市|成都市|台湾省|香港市|澳门市\",\"zs_recommend_id1\":\"\",\"zs_recommend_id2\":\"\",\"zs_recommend_id3\":\"\",\"zs_recommend_id4\":\"\",\"zs_shield_gdt_export\":\"1\",\"zs_game_banner_show_switch\":\"0\",\"zs_share\":\"1\",\"zs_jump_time_switch(city)\":\"北京市|上海市|广州市|深圳市|成都市|台湾省|香港市|澳门市\",\"zs_jump_time_switch(time)\":\"\",\"zs_finish_switch(city)\":\"北京市|上海市|广州市|深圳市|成都市|台湾省|香港市|澳门市\",\"zs_finish_switch(time)\":\"00:00-23:59\",\"zs_history_list_city\":\"广州市|北京市|上海市|成都市|杭州市|苏州市|深圳市|东莞市\",\"zs_ready_click_time\":\"00:00-23:59\",\"zs_ready_click_city\":\"广州市|北京市|上海市|成都市|杭州市|苏州市|深圳市|东莞市\",\"zs_game_start_jump_switch(time)\":\"00:00-23:59\",\"zs_game_start_jump_switch(city)\":\"北京市|上海市|广州市|深圳市|成都市|台湾省|香港市|澳门市\",\"zs_start_game_video_switch(time)\":\"00:00-23:59\",\"zs_start_game_video_switch(city)\":\"北京市|上海市|广州市|深圳市|成都市|台湾省|香港市|澳门市\",\"zs_game_start_jump_switch\":\"1\",\"zs_banner_show_number\":\"5000\"}"
                                        e0 = JSON.parse(ee);
                                    } else if ("module" === s.type) {
                                        a = s.module ? s.module : "base_module",
                                            s.table && (a += ">>" + s.table)
                                        if (s.table == "levelConfig") {
                                            let ee = "{\"levelConfig\":[{\"levelId\":\"1\",\"levelData\":\"1,1,1,2,1,1,3,1,5,1,2,1,21\",\"pizzaData\":\"0,1,2,0,3,4,0,1,4,3,0,0,0\",\"coinData\":\"0,0,0,1,0,0,1,0,0,0,1,0,0\"},{\"levelId\":\"2\",\"levelData\":\"1,2,3,4,1,5,6,7,8,1,9,1,21\",\"pizzaData\":\"0,2,2,3,4,0,3,4,2,1,0,0,0\",\"coinData\":\"0,0,0,1,0,1,0,0,1,0,1,0,0\"},{\"levelId\":\"3\",\"levelData\":\"1,20,20,20,20,20,20,20,20,21\",\"pizzaData\":\"0,1,0,3,4,0,2,0,0,0\",\"coinData\":\"0,0,1,1,0,1,0,1,0,0\"},{\"levelId\":\"4\",\"levelData\":\"1,3,6,8,9,7,1,5,4,8,2,1,21\",\"pizzaData\":\"0,0,0,4,3,2,0,0,4,1,2,0,0\",\"coinData\":\"0,0,1,1,0,0,0,1,1,0,1,0,0\"},{\"levelId\":\"5\",\"levelData\":\"1,1,4,10,12,6,1,11,15,10,1,14,21\",\"pizzaData\":\"0,2,4,1,3,0,4,2,0,3,4,0,0\",\"coinData\":\"0,0,1,0,0,1,0,0,1,0,0,0,0\"},{\"levelId\":\"6\",\"levelData\":\"1,20,20,20,20,20,20,20,20,21\",\"pizzaData\":\"0,0,0,1,3,4,0,4,0,0\",\"coinData\":\"0,1,1,0,0,0,1,1,0,0\"},{\"levelId\":\"7\",\"levelData\":\"1,12,10,5,1,8,13,15,1,3,6,11,21\",\"pizzaData\":\"0,2,3,1,0,4,3,1,2,0,4,0,0\",\"coinData\":\"0,0,0,1,1,0,0,1,1,1,0,0,0\"},{\"levelId\":\"8\",\"levelData\":\"1,1,14,15,9,7,1,4,6,13,1,5,21\",\"pizzaData\":\"0,0,1,4,3,2,1,0,0,1,2,0,0\",\"coinData\":\"0,0,0,1,1,0,0,1,0,0,0,0,0\"},{\"levelId\":\"9\",\"levelData\":\"1,12,16,4,3,8,6,17,1,5,18,1,21\",\"pizzaData\":\"0,3,0,4,1,2,0,4,3,5,0,0,0\",\"coinData\":\"0,0,1,1,0,0,1,0,0,1,1,0,0\"},{\"levelId\":\"10\",\"levelData\":\"1,20,20,1,20,20,1,1,20,21\",\"pizzaData\":\"0,4,0,1,0,3,4,0,0,0\",\"coinData\":\"0,0,1,0,1,0,0,0,0,0\"},{\"levelId\":\"11\",\"levelData\":\"1,4,16,18,6,7,2,14,10,5,7,6,21\",\"pizzaData\":\"0,4,2,0,1,3,4,1,0,4,2,0,0\",\"coinData\":\"0,0,1,1,1,0,0,0,0,1,1,0,0\"},{\"levelId\":\"12\",\"levelData\":\"1,5,10,16,8,1,9,4,4,2,1,3,21\",\"pizzaData\":\"0,0,2,3,4,0,1,2,2,2,3,0,0\",\"coinData\":\"0,0,1,0,1,0,0,0,1,0,1,0,0\"},{\"levelId\":\"13\",\"levelData\":\"1,8,18,1,7,4,6,3,1,12,16,4,21\",\"pizzaData\":\"0,1,3,4,0,1,4,2,3,0,1,0,0\",\"coinData\":\"0,0,0,1,1,0,1,1,1,0,1,0,0\"},{\"levelId\":\"14\",\"levelData\":\"1,6,8,4,19,16,15,1,4,13,2,1,21\",\"pizzaData\":\"0,4,1,2,2,2,1,0,0,0,1,0,0\",\"coinData\":\"0,0,0,1,1,0,0,1,1,0,1,0,0\"},{\"levelId\":\"15\",\"levelData\":\"1,20,20,1,20,20,1,1,20,21\",\"pizzaData\":\"0,0,0,1,1,1,1,2,0,0\",\"coinData\":\"0,0,1,0,0,0,0,1,0,0\"},{\"levelId\":\"16\",\"levelData\":\"1,17,19,15,14,1,3,5,7,9,11,13,21\",\"pizzaData\":\"0,0,3,4,0,1,2,4,1,3,1,0,0\",\"coinData\":\"0,0,1,0,1,1,0,1,0,1,0,0,0\"},{\"levelId\":\"17\",\"levelData\":\"1,2,4,6,8,10,12,14,16,18,8,2,21\",\"pizzaData\":\"0,0,3,4,1,2,0,1,2,2,1,0,0\",\"coinData\":\"0,1,1,0,0,0,0,0,1,0,0,0,0\"},{\"levelId\":\"18\",\"levelData\":\"1,3,4,19,18,1,2,16,17,8,7,14,21\",\"pizzaData\":\"0,0,2,2,3,0,4,1,0,0,1,0,0\",\"coinData\":\"0,0,0,1,0,0,1,0,1,1,0,0,0\"},{\"levelId\":\"19\",\"levelData\":\"1,15,3,8,6,2,1,1,9,4,6,1,21\",\"pizzaData\":\"0,4,3,1,2,0,4,0,1,3,0,0,0\",\"coinData\":\"0,0,0,0,1,1,1,0,0,0,1,0,0\"},{\"levelId\":\"20\",\"levelData\":\"1,20,20,1,20,20,1,1,20,21\",\"pizzaData\":\"0,0,1,2,3,4,0,1,0,0\",\"coinData\":\"0,1,0,1,0,1,0,1,0,0\"}]}"
                                            e0 = JSON.parse(ee);
                                        } else if (s.table == "gameConfig") {
                                            let ee = "{\"gameConfig\":[{\"config_name\":\"玩家移动速度\",\"config_enname\":\"play_speed\",\"config_type\":\"1\",\"config_item\":\"7\"},{\"config_name\":\"玩家碰撞范围\",\"config_enname\":\"player_collison\",\"config_type\":\"1\",\"config_item\":\"0.5\"},{\"config_name\":\"玩家复活等待时间\",\"config_enname\":\"player_revive_time\",\"config_type\":\"1\",\"config_item\":\"3\"},{\"config_name\":\"玩家复活无敌时间\",\"config_enname\":\"player_invincible_time\",\"config_type\":\"1\",\"config_item\":\"3\"},{\"config_name\":\"披萨弹力\",\"config_enname\":\"pizza_k\",\"config_type\":\"1\",\"config_item\":\"50\"},{\"config_name\":\"披萨力系数\",\"config_enname\":\"pizza_force\",\"config_type\":\"1\",\"config_item\":\"1\"},{\"config_name\":\"披萨生成间隔\",\"config_enname\":\"pizza_distance\",\"config_type\":\"1\",\"config_item\":\"2\"},{\"config_name\":\"玩家减速速度\",\"config_enname\":\"play_slowdown\",\"config_type\":\"1\",\"config_item\":\"2\"},{\"config_name\":\"玩家减速时间\",\"config_enname\":\"paly_slowdownTime\",\"config_type\":\"1\",\"config_item\":\"1\"},{\"config_name\":\"通关获得金币\",\"config_enname\":\"getCoin\",\"config_type\":\"1\",\"config_item\":\"20\"},{\"config_name\":\"主界面相机位置\",\"config_enname\":\"home_camera_pos\",\"config_type\":\"1\",\"config_item\":\"0.921,4.5,-0.794\"},{\"config_name\":\"主界面相机旋转\",\"config_enname\":\"game_camera_angle\",\"config_type\":\"1\",\"config_item\":\"21.302,7.704,0\"},{\"config_name\":\"游戏界面相机位置\",\"config_enname\":\"game_camera_pos\",\"config_type\":\"1\",\"config_item\":\"1.45,5.99,-2\"},{\"config_name\":\"游戏界面相机旋转\",\"config_enname\":\"game_camera_angle\",\"config_type\":\"1\",\"config_item\":\"21.302,7.704,0\"},{\"config_name\":\"结束相机位置\",\"config_enname\":\"end_camera_pos\",\"config_type\":\"1\",\"config_item\":\"0,4.15,-2.36\"},{\"config_name\":\"结束相机旋转\",\"config_enname\":\"end_camera_angle\",\"config_type\":\"1\",\"config_item\":\"32.704,0,0\"},{\"config_name\":\"滑动灵敏度\",\"config_enname\":\"slipSensitivity\",\"config_type\":\"1\",\"config_item\":\"3\"},{\"config_name\":\"结束镜头时间\",\"config_enname\":\"end_camera_time\",\"config_type\":\"1\",\"config_item\":\"120\"},{\"config_name\":\"砸金蛋披萨数量\",\"config_enname\":\"egg_pizza_num\",\"config_type\":\"1\",\"config_item\":\"10\"},{\"config_name\":\"砸金蛋一个披萨可点次数\",\"config_enname\":\"egg_pizza_clickNnum\",\"config_type\":\"1\",\"config_item\":\"1\"},{\"config_name\":\"砸金蛋披萨生成时间\",\"config_enname\":\"egg_pizza_time\",\"config_type\":\"1\",\"config_item\":\"1.5\"}]}"
                                            e0 = JSON.parse(ee);
                                        }
                                    }
                                }
                                break;

                            case "download":
                                a = s.key;
                        }
                        null != e0 && "" != e0 && i.setLocalData(t, e0, a), n(e0);
                    }()
                    // if (null == d || a === e.Local || a === e.Async) {
                    //     switch (t) {
                    //         case "login":
                    //             o = i.getLocalData(t);
                    //             break;

                    //         case "config":
                    //             if (s && "module" === s.type) {
                    //                 var _e2 = s.module ? s.module : "base_module";
                    //                 s.table && (_e2 += ">>" + s.table), o = i.getLocalData(t, _e2);
                    //             }
                    //             break;

                    //         case "download":
                    //             s && s.key && (o = i.getLocalData(t, s.key));
                    //             break;

                    //         case "update":
                    //             o = !0;
                    //     }
                    //     if (null == o && zs.log.fatal("本地网络缓存及默认值不存在: " + t, "Network"), l = o, null == d || a === e.Local) return zs.log.debug(t + " 通讯返回本地数据", "Network"),
                    //         n(l);
                    // }
                    // return i.post(d, s).then(function (e) {
                    //     var a = null;
                    //     switch (t) {
                    //         case "config":
                    //             s && "module" === s.type && (a = s.module ? s.module : "base_module", s.table && (a += "_" + s.table));
                    //             break;

                    //         case "download":
                    //             a = s.key;
                    //     }
                    //     null != e && "" != e && i.setLocalData(t, e, a);
                    // }), n(l);
                });
            }
        }, {
            key: "getLocalData",
            value: function getLocalData(t, e) {
                var s = t;
                e && (s += ">>" + e);
                var a = Laya.LocalStorage.getItem("High-Pizza-" + s);
                return a ? JSON.parse(a) : i.defaultData[s];
            }
        }, {
            key: "setLocalData",
            value: function setLocalData(t, e, s) {
                if (null == e || null == e) return;
                var i = t;
                s && (i += ">>" + s);
                var a = JSON.stringify(e);
                a && Laya.LocalStorage.setItem("High-Pizza-" + i, a);
            }
        }, {
            key: "ping",
            value: function () {
                var _ping = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    var _loop, _t3, _ret;
                    return _regenerator.default.wrap(function _callee2$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    i.domainIdx = -1;
                                    _loop = /* */ _regenerator.default.mark(function _loop(_t3) {
                                        var e, s;
                                        return _regenerator.default.wrap(function _loop$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        e = i.listDomain[_t3] + "/" + i.version + "/" + i.mapWebApi.ping, s = {};
                                                        zs.log.debug("ping: " + e);
                                                        _context2.next = 4;
                                                        return
                                                    // i.get(e, s, 1e3).then(function (s) {
                                                    //     zs.log.debug("域名 " + e + " 正常通讯", "Network"), i.domainIdx = _t3, zs.product.city = s.city,
                                                    //         zs.product.timestamp = 1e3 * s.timestamp;
                                                    // }).catch(function (t) {
                                                    //     zs.log.warn("域名 " + e + " 无法正常通讯", "Network");
                                                    // });

                                                    case 4:
                                                        if (!(i.domainIdx >= 0)) {
                                                            _context2.next = 6;
                                                            break;
                                                        }
                                                        return _context2.abrupt("return", "break");

                                                    case 6:
                                                    case "end":
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _loop);
                                    });
                                    _t3 = 0;

                                case 3:
                                    if (!(_t3 < i.listDomain.length)) {
                                        _context3.next = 11;
                                        break;
                                    }
                                    return _context3.delegateYield(_loop(_t3), "t0", 5);

                                case 5:
                                    _ret = _context3.t0;
                                    if (!(_ret === "break")) {
                                        _context3.next = 8;
                                        break;
                                    }
                                    return _context3.abrupt("break", 11);

                                case 8:
                                    _t3++;
                                    _context3.next = 3;
                                    break;

                                case 11:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee2);
                }));
                function ping() {
                    return _ping.apply(this, arguments);
                }
                return ping;
            }()
        }, {
            key: "login",
            value: function () {
                var _login = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee3(t, e) {
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    return _context4.abrupt("return", (null == t && (t = {}), t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        zs.log.debug("登录参数：", "Network", t), i.request("login", t, e)));

                                case 1:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee3);
                }));
                function login(_x, _x2) {
                    return _login.apply(this, arguments);
                }
                return login;
            }()
        }, {
            key: "config",
            value: function () {
                var _config = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee4(t, e, s, a) {
                    var n;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    n = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        type: t ? "switch" : "module",
                                        v: zs.configs.gameCfg.version
                                    };
                                    return _context5.abrupt("return", (t || (n.module = e || "base_module", s && (n.table = s)),
                                        i.request("config", n, a)));

                                case 2:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee4);
                }));
                function config(_x3, _x4, _x5, _x6) {
                    return _config.apply(this, arguments);
                }
                return config;
            }()
        }, {
            key: "update",
            value: function () {
                var _update = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee5(t, e, s) {
                    var a;
                    return _regenerator.default.wrap(function _callee5$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    a = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        uid: zs.core.userId,
                                        key: t,
                                        data: e
                                    };
                                    return _context6.abrupt("return", i.request("update", a, s));

                                case 2:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee5);
                }));
                function update(_x7, _x8, _x9) {
                    return _update.apply(this, arguments);
                }
                return update;
            }()
        }, {
            key: "download",
            value: function () {
                var _download = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee6(t, e) {
                    var s;
                    return _regenerator.default.wrap(function _callee6$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    s = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        uid: zs.core.userId,
                                        key: t
                                    };
                                    return _context7.abrupt("return", i.request("download", s, e));

                                case 2:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee6);
                }));
                function download(_x10, _x11) {
                    return _download.apply(this, arguments);
                }
                return download;
            }()
        }]);
        return i;
    }();
    i.version = "v1", i.domainIdx = -1, i.city = null, i.timestamp = null, i.defaultData = {},
        i.listDomain = ["",//https://gamesapi.zxmn2018.com
            "",//https://gamesapi.zxmn2018.com
            ""//https://gamesapi.zxmn2018.com
        ],
        i.mapWebApi = {
            ping: "game/clientInfo",
            login: "game/login",
            config: "game/config",
            update: "game/update",
            download: "game/download"
        }, t.NetworkMode = e, t.MD5 = s, t.network = i;
}(window.zs = window.zs || {});