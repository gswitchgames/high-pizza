var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../../runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../runtime/helpers/createClass"));

window.zs = window.zs || {}, function (e) {
    "use strict";
    function showMsgBox(e) {
        zs.fgui.msgbox.show(e);
    }
    var t = /* */ function () {
        (0, _createClass2.default)(t, [{
            key: "exportWindow",
            get: function get() {
                return null == this._exportWindow && (this._exportWindow = zs.fgui.window.create().show()),
                    this._exportWindow;
            }
        }, {
            key: "fsmList",
            get: function get() {
                return null == this._fsmList && (this._fsmList = {}), this._fsmList;
            }
        }, {
            key: "state",
            get: function get() {
                return this.fsm ? this.fsm.current : null;
            }
        }, {
            key: "childState",
            get: function get() {
                return this.fsm && this.fsmList[this.fsm.current] ? this.fsmList[this.fsm.current].current : null;
            }
        }]);
        function t() {
            (0, _classCallCheck2.default)(this, t);
            this.switchExporter = "zs_jump_switch", this.exporterPack = null;
        }
        (0, _createClass2.default)(t, [{
            key: "registe",
            value: function registe() { }
        }, {
            key: "start",
            value: function start() {
                this.fsm && (this.fsm.onBeforeChange = Laya.Handler.create(this, this.onBeforeChange, null, !1),
                    this.fsm.onChanged = Laya.Handler.create(this, this.onChanged, null, !1)), zs.fgui.configs.registeBase(t.exporterList, zs.exporter.list),
                    zs.fgui.configs.registeBase(t.exporterCard, zs.exporter.card), s.addAppShow(Laya.Handler.create(this, zs.platform.sync.clearDelayBanner, null, !1)),
                    this.fsm.init();
            }
        }, {
            key: "setFSM",
            value: function setFSM(e, t) {
                this.fsmList[e] = t;
            }
        }, {
            key: "on",
            value: function on(e, t, s) {
                if (!(null == e || e.length <= 0 || null == t)) if (t.once = !1, s) {
                    null == this.preListeners && (this.preListeners = {}), null == this.preListeners[e] && (this.preListeners[e] = []);
                    var _s = this.preListeners[e];
                    for (var _e = 0, i = _s.length; _e < i; _e++) {
                        if (_s[_e]._id == t._id) return;
                    }
                    this.preListeners[e].push(t);
                } else {
                    null == this.listeners && (this.listeners = {}), null == this.listeners[e] && (this.listeners[e] = []);
                    var _s2 = this.listeners[e];
                    for (var _e2 = 0, _i = _s2.length; _e2 < _i; _e2++) {
                        if (_s2[_e2]._id == t._id) return;
                    }
                    this.listeners[e].push(t);
                }
            }
        }, {
            key: "once",
            value: function once(e, t, s) {
                this.on(e, t, s), t && (t.once = !0);
            }
        }, {
            key: "off",
            value: function off(e, t, s) {
                if (!(null == e || e.length <= 0 || null == t)) if (s) {
                    if (null == this.preListeners) return;
                    if (null == this.preListeners[e]) return;
                    var _s3 = this.preListeners[e];
                    for (var _e3 = 0, i = _s3.length; _e3 < i; _e3++) {
                        if (_s3[_e3]._id == t._id) return void _s3.splice(_e3, 1);
                    }
                } else {
                    if (null == this.listeners) return;
                    if (null == this.listeners[e]) return;
                    var _s4 = this.listeners[e];
                    for (var _e4 = 0, _i2 = _s4.length; _e4 < _i2; _e4++) {
                        if (_s4[_e4]._id == t._id) return void _s4.splice(_e4, 1);
                    }
                }
            }
        }, {
            key: "offAll",
            value: function offAll(e, t) {
                if (!(null == e || e.length <= 0)) if (t) {
                    if (null == this.preListeners) return;
                    if (null == this.preListeners[e]) return;
                    delete this.preListeners[e];
                } else {
                    if (null == this.listeners) return;
                    if (null == this.listeners[e]) return;
                    delete this.listeners[e];
                }
            }
        }, {
            key: "offAllCaller",
            value: function offAllCaller(e, t, s) {
                if (null != e) if (null == t || t.length <= 0) {
                    if (s) for (var _t in this.preListeners) {
                        var _s5 = this.preListeners[_t];
                        for (var _t2 = 0, i = _s5.length; _t2 < i; _t2++) {
                            _s5[_t2].caller == e && (_s5.splice(_t2, 1), _t2--, i--);
                        }
                    } else for (var _t3 in this.listeners) {
                        var _s6 = this.listeners[_t3];
                        for (var _t4 = 0, _i3 = _s6.length; _t4 < _i3; _t4++) {
                            _s6[_t4].caller == e && (_s6.splice(_t4, 1), _t4--, _i3--);
                        }
                    }
                } else if (s) {
                    var _s7 = this.preListeners[t];
                    if (_s7) for (var _t5 = 0, _i4 = _s7.length; _t5 < _i4; _t5++) {
                        _s7[_t5].caller == e && (_s7.splice(_t5, 1), _t5--, _i4--);
                    }
                } else {
                    var _s8 = this.listeners[t];
                    if (_s8) for (var _t6 = 0, _i5 = _s8.length; _t6 < _i5; _t6++) {
                        _s8[_t6].caller == e && (_s8.splice(_t6, 1), _t6--, _i5--);
                    }
                }
            }
        }, {
            key: "clear",
            value: function clear(e) {
                e ? this.preListeners = null : this.listeners = null;
            }
        }, {
            key: "next",
            value: function next(e) {
                null != this.fsm && (e ? this.fsm.runTransition(e) : this.fsm.runNext());
            }
        }, {
            key: "childNext",
            value: function childNext(e) {
                if (null == this.fsm) return;
                var t = this.fsmList[this.fsm.current];
                t && (e ? t.runTransition(e) : t.runNext());
            }
        }, {
            key: "onBeforeChange",
            value: function onBeforeChange(e, t) {
                if (null != this.preListeners && null != this.preListeners[e]) {
                    var _t7 = this.preListeners[e];
                    for (var _e5 = 0, _s9 = _t7.length; _e5 < _s9; _e5++) {
                        var i = _t7[_e5].once;
                        _t7[_e5].run(), i && (_t7.splice(_e5, 1), _e5--, _s9--);
                    }
                }
                this.exportWindow.clear(), zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner();
            }
        }, {
            key: "onChanged",
            value: function onChanged(e) {
                if (zs.td.justTrack(zs.td.workflowKey + e, zs.td.workflowDesc + e), null != this.listeners && null != this.listeners[e]) {
                    var _t8 = this.listeners[e];
                    for (var _e6 = 0, _s10 = _t8.length; _e6 < _s10; _e6++) {
                        var i = _t8[_e6].once;
                        _t8[_e6].run(), i && (_t8.splice(_e6, 1), _e6--, _s10--);
                    }
                }
                var t = this.fsmList[e];
                if (t) {
                    t.onBeforeChange = Laya.Handler.create(this, this.onChildFSMBeforeChanged, null, !1),
                        t.onChanged = Laya.Handler.create(this, this.onChildFSMChanged, null, !1), t.init(),
                        zs.configs.productCfg[e] && zs.log.info(e + " 状态存在子状态机，无法自动创建应用运营配置，请使用子状态进行配置!", "Workflow", t.list);
                } else this.checkBase(e), zs.product.get(this.switchExporter) && this.checkExporter(e),
                    this.checkBanner(e);
            }
        }, {
            key: "onChildFSMBeforeChanged",
            value: function onChildFSMBeforeChanged(e, t) {
                if (null == this.fsm) return;
                var s = this.fsm.current + "." + e;
                if (null != this.preListeners && null != this.preListeners[s]) {
                    var _e7 = this.preListeners[s];
                    for (var _t9 = 0, _s11 = _e7.length; _t9 < _s11; _t9++) {
                        var i = _e7[_t9].once;
                        _e7[_t9].run(), i && (_e7.splice(_t9, 1), _t9--, _s11--);
                    }
                }
                this.exportWindow.clear(), zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner();
            }
        }, {
            key: "onChildFSMChanged",
            value: function onChildFSMChanged(e) {
                if (null == this.fsm) return;
                var t = this.fsm.current + "." + e;
                if (zs.td.justTrack(zs.td.workflowKey + t, zs.td.workflowDesc + t), null != this.listeners && null != this.listeners[t]) {
                    var _e8 = this.listeners[t];
                    for (var _t10 = 0, _s12 = _e8.length; _t10 < _s12; _t10++) {
                        var i = _e8[_t10].once;
                        _e8[_t10].run(), i && (_e8.splice(_t10, 1), _t10--, _s12--);
                    }
                }
                this.checkBase(t), zs.product.get(this.switchExporter) && this.checkExporter(t),
                    this.checkBanner(t);
            }
        }, {
            key: "checkBanner",
            value: function checkBanner(e) {
                var t = zs.configs.productCfg[e];
                this.bannerIgnoreList && this.bannerIgnoreList.indexOf(e) >= 0 ? t && t.banner && zs.log.info("状态 " + e + " 在横幅广告忽略列表中，无法自动生成，请自主管理横幅广告展示或将该状态移出忽略列表", "Workflow") : t && zs.platform.sync.checkBanner({
                    data: t
                });
            }
        }, {
            key: "checkExporter",
            value: function checkExporter(e) {
                var t = zs.configs.productCfg[e];
                if (this.exporterIgnoreList && this.exporterIgnoreList.indexOf(e) >= 0) t && t.exporter && t.exporter.length > 0 && zs.log.info("状态 " + e + " 在导出忽略列表中，无法自动生成，请自主管理导出展示或将该状态移出忽略列表", "Workflow"); else if (t && t.exporter && t.exporter.length > 0) for (var _e9 = 0, _s13 = t.exporter.length; _e9 < _s13; _e9++) {
                    var _s14 = t.exporter[_e9];
                    if (_s14.switch) if (Array.isArray(_s14.switch)) {
                        var _e10 = !1;
                        for (var _t11 = 0, i = _s14.switch.length; _t11 < i; _t11++) {
                            if (!zs.product.get(_s14.switch[_t11])) {
                                _e10 = !0;
                                break;
                            }
                        }
                        if (_e10) continue;
                    } else if (!zs.product.get(_s14.switch)) continue;
                    this.exportWindow.applyConfig(_s14).front();
                }
            }
        }, {
            key: "checkBase",
            value: function checkBase(e) {
                var t = zs.configs.productCfg[e];
                if (t && t.base && t.base.length > 0) for (var _e11 = 0, _s15 = t.base.length; _e11 < _s15; _e11++) {
                    var _s16 = t.base[_e11];
                    if (_s16.switch) if (Array.isArray(_s16.switch)) {
                        var _e12 = !1;
                        for (var _t12 = 0, i = _s16.switch.length; _t12 < i; _t12++) {
                            if (!zs.product.get(_s16.switch[_t12])) {
                                _e12 = !0;
                                break;
                            }
                        }
                        if (_e12) continue;
                    } else if (!zs.product.get(_s16.switch)) continue;
                    this.exportWindow.applyConfig(_s16).front();
                }
            }
        }]);
        return t;
    }();
    t.exporterList = "export_list", t.exporterCard = "export_card";
    var s = /* */ function () {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [{
            key: "init",
            value: function () {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee(e) {
                    var t;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    zs.platform.init();
                                    zs.platform.sync.addEventShow({
                                        showHandler: function showHandler(e) {
                                            s.onAppShow(e);
                                        }
                                    });
                                    zs.platform.sync.addEventHide({
                                        hideHandler: function hideHandler(e) {
                                            s.onAppHide(e);
                                        }
                                    });
                                    _context.next = 5;
                                    return zs.configs.init();

                                case 5:
                                    zs.td.appKey = this.tdKey;
                                    zs.td.appName = this.appName;
                                    zs.td.appId = this.appId;
                                    zs.configs.gameCfg.tdVersion && (zs.td.versionName = zs.configs.gameCfg.tdVersion);
                                    zs.td.init();
                                    zs.td.justTrack(zs.td.startupKey, zs.td.startupDesc);
                                    zs.resource.init();
                                    zs.configs.gameCfg.debug && (zs.log.Configs.logLevel = zs.log.Level.DEBUG);
                                    this.onConfigInit && this.onConfigInit.run();
                                    zs.product.init(e);
                                    this._readyStart = !1;
                                    zs.ui.uiScene.init();
                                    zs.fgui.init();
                                    t = this.entry ? this.entry : zs.base.entry;
                                    if (!this.loadingPage) {
                                        _context.next = 25;
                                        break;
                                    }
                                    _context.next = 22;
                                    return this.loadingPage.preload();

                                case 22:
                                    this.entryInst = t.init(this.loadingPage, this, this.ready);
                                    _context.next = 32;
                                    break;

                                case 25:
                                    if (!this.layaLoadingPage) {
                                        _context.next = 31;
                                        break;
                                    }
                                    _context.next = 28;
                                    return this.layaLoadingPage.preload();

                                case 28:
                                    this.entryInst = t.init(this.layaLoadingPage, this, this.ready);
                                    _context.next = 32;
                                    break;

                                case 31:
                                    this.entryInst = t.init(zs.ui.Loading, this, this.ready);

                                case 32:
                                // "wx_" == zs.platform.config.platformMark && "undefined" != typeof wx && (loadLib("zsLibs/adapter/ald-game.js"),
                                //     loadLib("zsLibs/adapter/h.js"));

                                case 33:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function init(_x) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "ready",
            value: function () {
                var _ready = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    var e, t, _e13, _t13, _s17, _e14, _t14, _s18, _e15, _t15, _t16;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    zs.log.debug("初始化数据统计", "Core");
                                    _context2.next = 3;
                                    return zs.td.registeConfig(zs.configs.gameCfg.tdConfig);

                                case 3:
                                    this.progress = 15;
                                    zs.log.debug("初始化广告与导出组件", "Core");
                                    _context2.next = 7;
                                    return zs.fgui.loadPack(zs.fgui.configs.pack_basic);

                                case 7:
                                    e = _context2.sent;
                                    zs.ui.FGUI_msgbox.bind(e);
                                    zs.ui.FGUI_list.bind(e);
                                    zs.ui.FGUI_card.bind(e);
                                    this.progress = 20;
                                    zs.log.debug("加载必要分包", "Core");
                                    _context2.next = 15;
                                    return zs.resource.preload();

                                case 15:
                                    this.progress = 30;
                                    zs.log.debug("加载 main", "Core");
                                    _context2.next = 19;
                                    return zs.fgui.loadPacks(zs.configs.gameCfg.fguiPacks, !0);

                                case 19:
                                    this.onFGUIBind && this.onFGUIBind.run();
                                    this.progress = 40;
                                    zs.log.debug("web 设置", "Core");
                                    _context2.next = 24;
                                    return zs.network.init();

                                case 24:
                                    s.userInfo = _context2.sent;
                                    s.userId = s.userInfo.user_id;
                                    this.progress = 50;
                                    zs.log.debug("运营设置", "Core");
                                    _context2.next = 30;
                                    return zs.network.config(!0);

                                case 30:
                                    t = _context2.sent;
                                    if (!(zs.product.sync(t), this.progress = 60, zs.log.debug("加载基础配置", "Core"), zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.configs)) {
                                        _context2.next = 52;
                                        break;
                                    }
                                    _e13 = zs.configs.gameCfg.resources.configs;
                                    _context2.t0 = _regenerator.default.keys(_e13);

                                case 34:
                                    if ((_context2.t1 = _context2.t0()).done) {
                                        _context2.next = 52;
                                        break;
                                    }
                                    _t13 = _context2.t1.value;
                                    _s17 = _e13[_t13];
                                    _context2.t2 = _s17;
                                    if (!_context2.t2) {
                                        _context2.next = 50;
                                        break;
                                    }
                                    if (!Array.isArray(_s17)) {
                                        _context2.next = 46;
                                        break;
                                    }
                                    _context2.t3 = _s17.length > 0 && null != _s17[0] && _s17[0].trim().length > 0;
                                    if (!_context2.t3) {
                                        _context2.next = 44;
                                        break;
                                    }
                                    _context2.next = 44;
                                    return zs.configs.load(_t13, _s17[0], _s17.length > 1 ? _s17[1] : null, !(_s17.length > 2) || _s17[2]);

                                case 44:
                                    _context2.next = 50;
                                    break;

                                case 46:
                                    _context2.t4 = "string" == typeof _s17;
                                    if (!_context2.t4) {
                                        _context2.next = 50;
                                        break;
                                    }
                                    _context2.next = 50;
                                    return zs.configs.load(_t13, _s17, null, !0);

                                case 50:
                                    _context2.next = 34;
                                    break;

                                case 52:
                                    if (!(this.progress = 70, zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.prefabs)) {
                                        _context2.next = 73;
                                        break;
                                    }
                                    _e14 = zs.configs.gameCfg.resources.prefabs;
                                    _context2.t5 = _regenerator.default.keys(_e14);

                                case 55:
                                    if ((_context2.t6 = _context2.t5()).done) {
                                        _context2.next = 73;
                                        break;
                                    }
                                    _t14 = _context2.t6.value;
                                    _s18 = _e14[_t14];
                                    _context2.t7 = _s18;
                                    if (!_context2.t7) {
                                        _context2.next = 71;
                                        break;
                                    }
                                    if (!Array.isArray(_s18)) {
                                        _context2.next = 67;
                                        break;
                                    }
                                    _context2.t8 = _s18.length > 0 && null != _s18[0] && _s18[0].trim().length > 0;
                                    if (!_context2.t8) {
                                        _context2.next = 65;
                                        break;
                                    }
                                    _context2.next = 65;
                                    return zs.prefabs.load(_t14, _s18[0], _s18.length > 1 ? _s18[1] : null, !(_s18.length > 2) || _s18[2]);

                                case 65:
                                    _context2.next = 71;
                                    break;

                                case 67:
                                    _context2.t9 = "string" == typeof _s18;
                                    if (!_context2.t9) {
                                        _context2.next = 71;
                                        break;
                                    }
                                    _context2.next = 71;
                                    return zs.prefabs.load(_t14, _s18, null, !0);

                                case 71:
                                    _context2.next = 55;
                                    break;

                                case 73:
                                    this.progress = 80;
                                    zs.log.debug("广告组件初始化", "Core");
                                    zs.platform.initAds();
                                    this.progress = 85;
                                    zs.log.debug("业务流程拼装", "Core");
                                    this.progress = 95;
                                    null == this.workflow && (this.workflow = new zs.base.workflow());
                                    _context2.t10 = this.workflow.exporterPack;
                                    if (!_context2.t10) {
                                        _context2.next = 84;
                                        break;
                                    }
                                    _context2.next = 84;
                                    return zs.fgui.loadPack(this.workflow.exporterPack);

                                case 84:
                                    this.workflow.registe();
                                    if (!this.workListeners) {
                                        _context2.next = 88;
                                        break;
                                    }
                                    for (_e15 = 0, _t15 = this.workListeners.length; _e15 < _t15; _e15++) {
                                        _t16 = this.workListeners[_e15];
                                        _t16.handler.once ? this.workflow.once(_t16.key, _t16.handler, _t16.isBefore) : this.workflow.on(_t16.key, _t16.handler, _t16.isBefore);
                                    }
                                    this.workListeners = null;

                                case 88:
                                    this.checkGameCfg(t), this.onPrepare ? this.onPrepare.run() : this.readyFinish();

                                case 89:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));
                function ready() {
                    return _ready.apply(this, arguments);
                }
                return ready;
            }()
        }, {
            key: "readyFinish",
            value: function readyFinish() {
                var _this = this;
                this.checkPanelSort(),
                    Laya.timer.frameLoop(1, null, function () {
                        _this.checkPanelSort();
                    }), this.progress = 100, this._readyStart = !0;
            }
        }, {
            key: "start",
            value: function start() {
                zs.log.debug("启动业务", "Core"), this.readyStart && (this.workflow.start(), this.onStart && this.onStart.run(),
                    zs.td.justTrack(zs.td.gameStartKey, zs.td.gameStartDesc, {
                        uid: s.userId
                    }));
            }
        }, {
            key: "onWorkflow",
            value: function onWorkflow(e, t, s) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.on(e, t, s) : (t.once = !1, this.workListeners.push({
                        key: e,
                        handler: t,
                        isBefore: s
                    })));
            }
        }, {
            key: "onceWorkflow",
            value: function onceWorkflow(e, t, s) {
                null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                    this.workflow ? this.workflow.once(e, t, s) : (t.once = !0, this.workListeners.push({
                        key: e,
                        handler: t,
                        isBefore: s
                    })));
            }
        }, {
            key: "onAppShow",
            value: function onAppShow(e) {
                if (!(null == this.appShowListeners || this.appShowListeners.length <= 0)) for (var _t17 = 0, _s19 = this.appShowListeners.length; _t17 < _s19; _t17++) {
                    var i = this.appShowListeners[_t17];
                    i && i.runWith(e), i && !i.once || (this.appShowListeners.splice(_t17, 1), _t17--,
                        _s19--);
                }
            }
        }, {
            key: "onAppHide",
            value: function onAppHide(e) {
                if (!(null == this.appHideListeners || this.appHideListeners.length <= 0)) for (var _t18 = 0, _s20 = this.appHideListeners.length; _t18 < _s20; _t18++) {
                    var i = this.appHideListeners[_t18];
                    i && i.runWith(e), i && !i.once || (this.appHideListeners.splice(_t18, 1), _t18--,
                        _s20--);
                }
            }
        }, {
            key: "addAppShow",
            value: function addAppShow(e) {
                null != e && (null == this.appShowListeners && (this.appShowListeners = []), this.appShowListeners.push(e));
            }
        }, {
            key: "removeAppShow",
            value: function removeAppShow(e) {
                if (null == e || null == this.appShowListeners || this.appShowListeners.length <= 0) return;
                var t = e.caller, s = e.method, i = e.once;
                for (var _e16 = 0, n = this.appShowListeners.length; _e16 < n; _e16++) {
                    var r = this.appShowListeners[_e16];
                    !r || t && r.caller !== t || null != s && r.method !== s || i && !r.once || (this.appShowListeners.splice(_e16, 1),
                        _e16--, n--, r.recover());
                }
            }
        }, {
            key: "addAppHide",
            value: function addAppHide(e) {
                null != e && (null == this.appHideListeners && (this.appHideListeners = []), this.appHideListeners.push(e));
            }
        }, {
            key: "removeAppHide",
            value: function removeAppHide(e) {
                if (null == e || null == this.appHideListeners || this.appHideListeners.length <= 0) return;
                var t = e.caller, s = e.method, i = e.once;
                for (var _e17 = 0, n = this.appHideListeners.length; _e17 < n; _e17++) {
                    var r = this.appHideListeners[_e17];
                    !r || t && r.caller !== t || null != s && r.method !== s || i && !r.once || (this.appHideListeners.splice(_e17, 1),
                        _e17--, n--, r.recover());
                }
            }
        }, {
            key: "checkPanelSort",
            value: function checkPanelSort() {
                var e = 1;
                // zs.ui.uiScene.scene &&
                //     (Laya.stage.getChildIndex(zs.ui.uiScene.scene) < Laya.stage.numChildren - e
                //         && Laya.stage.setChildIndex(zs.ui.uiScene.scene, Laya.stage.numChildren - e), e++),
                    // Laya.stage.getChildIndex(fairygui.GRoot.inst.displayObject) != Laya.stage.numChildren - e
                    // && Laya.stage.setChildIndex(fairygui.GRoot.inst.displayObject, Laya.stage.numChildren - e),
                    // this.entryInst && this.entryInst.loading && this.entryInst.loading.owner
                    // && Laya.stage.getChildIndex(this.entryInst.loading.owner) != Laya.stage.numChildren - e
                    // && Laya.stage.setChildIndex(this.entryInst.loading.owner, Laya.stage.numChildren - e);
            }
        }, {
            key: "checkGameCfg",
            value: function checkGameCfg(e) {
                var t = zs.configs.gameCfg;
                return null == t.appName || t.appName.trim().length <= 0 ? showMsgBox({
                    title: "提示",
                    content: "未填写appName，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : null == t.gameId || t.gameId.trim().length <= 0 ? showMsgBox({
                    title: "提示",
                    content: "未填写gameId，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : null == t.appId || t.appId.trim().length <= 0 ? showMsgBox({
                    title: "提示",
                    content: "未填写appId，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : !t.cp && (null == t.aldKey || t.aldKey.trim().length <= 0) && "wx_" == zs.platform.config.platformMark ? showMsgBox({
                    title: "提示",
                    content: "未填写阿拉丁密钥aldKey，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : !t.cp && (null == t.tdKey || t.tdKey.trim().length <= 0) && "wx_" == zs.platform.config.platformMark ? showMsgBox({
                    title: "提示",
                    content: "未填写TalkingData密钥tdKey，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : null == t.secret || t.secret.trim().length <= 0 ? showMsgBox({
                    title: "提示",
                    content: "未填写导出密钥secret，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : null == t.version || t.version.trim().length <= 0 ? showMsgBox({
                    title: "提示",
                    content: "未填写版本号version，请在config/gameCfg.json中准确填写",
                    hideCancel: !0
                }) : null == e || e.length < 0 ? showMsgBox({
                    title: "提示",
                    content: "无法获取配置数据，请在config/gameCfg.json中检查版本号version",
                    hideCancel: !0
                }) : t.debug ? showMsgBox({
                    title: "提示",
                    content: "当前处于测试模式，将会影响部分上线功能，可在config/gameCfg.json中修改配置",
                    hideCancel: !0
                }) : void 0;
            }
        }, {
            key: "appName",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appName : null;
            }
        }, {
            key: "appId",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appId : null;
            }
        }, {
            key: "tdKey",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.tdKey : null;
            }
        }, {
            key: "aldKey",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.aldKey : null;
            }
        }, {
            key: "readyStart",
            get: function get() {
                return this.entryInst && this.entryInst.progress >= 100 && this._readyStart;
            }
        }]);
        return s;
    }();
    s.userInfo = null, s.userId = null, s.entry = null, s.onConfigInit = null, s.onFGUIBind = null,
        s.onPrepare = null, s.onStart = null, s.overrideWorkflow = null, s.workflow = null,
        s.loadingPage = null, s.layaLoadingPage = null, e.showMsgBox = showMsgBox, e.hideMsgBox = function (e) {
            e && zs.fgui.msgbox.clear(), zs.fgui.msgbox.hide();
        }, e.workflow = t, e.core = s;
}(window.zs = window.zs || {});