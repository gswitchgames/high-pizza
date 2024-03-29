var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../../runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../runtime/helpers/createClass"));

window.zs = window.zs || {}, function (a) {
    "use strict";
    var e;
    !function (a) {
        a[a.Common = 0] = "Common", a[a.Scene = 1] = "Scene", a[a.Scene3D = 2] = "Scene3D",
            a[a.Sprite3D = 3] = "Sprite3D", a[a.FGUIPack = 4] = "FGUIPack";
    }(e = e || (e = {}));
    var t = /* */ function () {
        function t() {
            (0, _classCallCheck2.default)(this, t);
        }
        (0, _createClass2.default)(t, null, [{
            key: "init",
            value: function init() {
                if (t.loadedPacks = [], t.preloadPacks = [], t.subpacks = {}, s.gameCfg && s.gameCfg.subpackages) {
                    var _a = s.gameCfg.subpackages;
                    for (var _e in s.gameCfg.subpackages) {
                        if (null == _e || _e.length <= 0) continue;
                        var _s = !1, l = _a[_e];
                        "*" === _e[0] && (_s = !0, _e = _e.slice(1), t.preloadPacks.push(_e)), t.subpacks[_e] = l;
                    }
                }
            }
        }, {
            key: "preload",
            value: function () {
                var _preload = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee() {
                    var _loop, _a2, _e2;
                    return _regenerator.default.wrap(function _callee$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (null == t.preloadPacks || t.preloadPacks.length <= 0) {
                                        _context2.next = 8;
                                        break;
                                    }
                                    _loop = /* */ _regenerator.default.mark(function _loop(_a2, _e2) {
                                        var e;
                                        return _regenerator.default.wrap(function _loop$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        e = t.preloadPacks[_a2];
                                                        _context.next = 3;
                                                        return
                                                    //  zs.platform.async.loadSubpackage({
                                                    //     pkgName: t.subpacks[e]
                                                    // }).then(function() {
                                                    //     t.loadedPacks.push(e), zs.log.debug("预加载分包" + e + "成功!");
                                                    // }).catch(function() {
                                                    //     zs.log.warn("预加载分包" + e + "失败!");
                                                    // });

                                                    case 3:
                                                    case "end":
                                                        return _context.stop();
                                                }
                                            }
                                        }, _loop);
                                    });
                                    _a2 = 0, _e2 = t.preloadPacks.length;

                                case 3:
                                    if (!(_a2 < _e2)) {
                                        _context2.next = 8;
                                        break;
                                    }
                                    return _context2.delegateYield(_loop(_a2, _e2), "t0", 5);

                                case 5:
                                    _a2++;
                                    _context2.next = 3;
                                    break;

                                case 8:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee);
                }));
                function preload() {
                    return _preload.apply(this, arguments);
                }
                return preload;
            }()
        }, {
            key: "check",
            value: function check(a) {
                for (var _e3 in t.subpacks) {
                    if (zs.utils.startwith(a, t.subpacks[_e3])) return _e3;
                }
                return null;
            }
        }, {
            key: "isPackLoaded",
            value: function isPackLoaded(a) {
                return this.loadedPacks.indexOf(a) >= 0;
            }
        }, {
            key: "isLoading",
            value: function isLoading() {
                return t.numLoading > 0;
            }
        }, {
            key: "load",
            value: function load(a, e) {
                var _this = this;
                return new Promise(function (s, l) {
                    if (!a) return s();
                    var n = t.check(a);
                    t.numLoading++, n && !_this.isPackLoaded(n) ? zs.platform.async.loadSubpackage({
                        pkgName: t.subpacks[n]
                    }).then(function () {
                        t.loadedPacks.push(n), t.nativeLoad(a, e).then(function (a) {
                            t.numLoading--, s(a);
                        });
                    }).catch(function () {
                        t.nativeLoad(a, e).then(function (a) {
                            t.numLoading--, s(a);
                        });
                    }) : t.nativeLoad(a, e).then(function (a) {
                        t.numLoading--, s(a);
                    });
                });
            }
        }, {
            key: "nativeLoad",
            value: function nativeLoad(a, t) {
                var _this2 = this;
                return new Promise(function (s, l) {
                    var n = Laya.loader.getRes(a);
                    if (n) s(n); else switch (t) {
                        case e.Scene:
                            Laya.Scene.load(a, Laya.Handler.create(null, function (a) {
                                s(a);
                            }));
                            break;

                        case e.Scene3D:
                            Laya.Scene3D.load(a, Laya.Handler.create(null, function (a) {
                                s(a);
                            }));
                            break;

                        case e.Sprite3D:
                            Laya.Sprite3D.load(a, Laya.Handler.create(null, function (a) {
                                s(a);
                            }));
                            break;

                        case e.FGUIPack:
                            fairygui.UIPackage.loadPackage(a, Laya.Handler.create(_this2, function (a) {
                                if (a && a.length > 0) {
                                    var _e4 = a[0], _t = _e4._items;
                                    for (var _a3 = 0, _s2 = _t.length; _a3 < _s2; _a3++) {
                                        var _s3 = _t[_a3];
                                        if (_s3.type == fairygui.PackageItemType.Atlas) {
                                            var _a4 = _e4.getItemAsset(_s3);
                                            _a4._bitmap && (_a4._bitmap.lock = !0);
                                        }
                                    }
                                    s(_e4);
                                } else s(null);
                            }));
                            break;

                        default:
                            Laya.loader.load(a, Laya.Handler.create(null, function (a) {
                                s(a);
                            }));
                    }
                });
            }
        }, {
            key: "destroyFGUIPackage",
            value: function destroyFGUIPackage(a) {
                a && a.dispose();
            }
        }, {
            key: "destroyFGUIPackageByName",
            value: function destroyFGUIPackageByName(a) {
                var e = fairygui.UIPackage.getByName(a);
                this.destroyFGUIPackage(e);
            }
        }]);
        return t;
    }();
    t.subpacks = {}, t.preloadPacks = [], t.loadedPacks = [], t.numLoading = 0;
    var s = /* */ function () {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [{
            key: "init",
            value: function () {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    return _regenerator.default.wrap(function _callee2$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return zs.resource.load(s.gameCfgPath);

                                case 2:
                                    s.gameCfg = _context3.sent;
                                    _context3.next = 5;
                                    return zs.resource.load(s.porductCfgPath);

                                case 5:
                                    s.productCfg = _context3.sent;
                                    s.gameCfg.secret || (s.gameCfg.secret = "7CaD3L23LlGnENd1");

                                case 7:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee2);
                }));
                function init() {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "load",
            value: function () {
                var _load = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee3(a, e, t, l) {
                    var _e5, n, i, _e6;
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    if (!(null == s.list && (s.list = {}), s.list[a])) {
                                        _context4.next = 2;
                                        break;
                                    }
                                    return _context4.abrupt("return", new Promise(function (e, t) {
                                        e(s.list[a]);
                                    }));

                                case 2:
                                    _context4.t0 = null == t || l;
                                    if (!_context4.t0) {
                                        _context4.next = 6;
                                        break;
                                    }
                                    _context4.next = 6;
                                    return zs.resource.load(e).then(function (e) {
                                        s.list[a] = e;
                                    }).catch(function () {
                                        zs.log.warn("本地无法正确加载配置表 " + a + " 路径为 " + e, "Configs");
                                    });

                                case 6:
                                    if (!t) {
                                        _context4.next = 18;
                                        break;
                                    }
                                    _e5 = t.split(">>", 2);
                                    if (!(_e5.length > 0)) {
                                        _context4.next = 18;
                                        break;
                                    }
                                    n = _e5.length > 1 ? _e5[0] : null, i = _e5.length > 1 ? _e5[1] : _e5[0];
                                    if (!l) {
                                        _context4.next = 14;
                                        break;
                                    }
                                    zs.network.config(!1, n, i).then(function (e) {
                                        e && (s.list[a] = e);
                                    }).catch(function () {
                                        zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs");
                                    });
                                    _context4.next = 18;
                                    break;

                                case 14:
                                    _context4.next = 16;
                                    return zs.network.config(!1, n, i).catch(function () {
                                        zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs");
                                    });

                                case 16:
                                    _e6 = _context4.sent;
                                    _e6 && (s.list[a] = _e6);

                                case 18:
                                    return _context4.abrupt("return", new Promise(function (e, t) {
                                        e(s.list[a]);
                                    }));

                                case 19:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee3);
                }));
                function load(_x, _x2, _x3, _x4) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }, {
            key: "get",
            value: function get(a) {
                return null == s.list || null == s.list[a] ? null : s.list[a];
            }
        }]);
        return s;
    }();
    s.gameCfgPath = "config/gameCfg.json", s.porductCfgPath = "config/productCfg.json";
    a.ResourceType = e, a.resource = t, a.configs = s, a.prefabs = /* */ function () {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
        }
        (0, _createClass2.default)(_class, null, [{
            key: "load",
            value: function () {
                var _load2 = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee4(a, e, t, l) {
                    var _t2;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    if (!(null == s.list && (s.list = {}), s.list[a])) {
                                        _context5.next = 2;
                                        break;
                                    }
                                    return _context5.abrupt("return", new Promise(function (e, t) {
                                        e(s.list[a]);
                                    }));

                                case 2:
                                    if (!(null == t || l)) {
                                        _context5.next = 7;
                                        break;
                                    }
                                    _context5.next = 5;
                                    return zs.resource.load(e, zs.ResourceType.Sprite3D).catch(function () {
                                        zs.log.warn("本地无法正确加载预制体 " + a + " 路径为 " + e, "Prefabs");
                                    });

                                case 5:
                                    _t2 = _context5.sent;
                                    s.list[a] = _t2;

                                case 7:
                                    return _context5.abrupt("return", new Promise(function (e, t) {
                                        e(s.list[a]);
                                    }));

                                case 8:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee4);
                }));
                function load(_x5, _x6, _x7, _x8) {
                    return _load2.apply(this, arguments);
                }
                return load;
            }()
        }, {
            key: "get",
            value: function get(a) {
                return null == s.list || null == s.list[a] ? null : s.list[a];
            }
        }]);
        return _class;
    }();
}(window.zs = window.zs || {});