!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _possibleConstructorReturn2 = _interopRequireDefault(require("../../runtime/helpers/possibleConstructorReturn"));

    var _getPrototypeOf2 = _interopRequireDefault(require("../../runtime/helpers/getPrototypeOf"));

    var _inherits2 = _interopRequireDefault(require("../../runtime/helpers/inherits"));

    var _classCallCheck2 = _interopRequireDefault(require("../../runtime/helpers/classCallCheck"));

    var _createClass2 = _interopRequireDefault(require("../../runtime/helpers/createClass"));

    function _createSuper(Derived) {
        return function () {
            var Super = (0, _getPrototypeOf2.default)(Derived), result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return (0, _possibleConstructorReturn2.default)(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
            return true;
        } catch (e) {
            return false;
        }
    }

    window.zs = window.zs || {}, window.zs.base = window.zs.base || {}, function (s) {
        "use strict";
        var i = /* */ function () {
            function i(s, _i, t) {
                var _this = this;
                (0, _classCallCheck2.default)(this, i);
                this.thisArg = _i,
                    // s.prototype instanceof zs.ui.LayaLoading ? (
                    this.loading = s.make(), t.call(_i), platform.getInstance().yadstartup("High-Pizza", () => {
                        window.yad.scale(0.8, 0.8);
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("High-Pizza-musicState") ? JSON.parse(Laya.LocalStorage.getItem("High-Pizza-musicState")) : false;
                        platform.getInstance().showSplash();
                        Laya.stage.addChild(window.scrollList);
                        Laya.stage.addChild(window.box_adTwo);
                        window.scrollList.visible = window.box_adTwo.visible = false;
                        window.box_adTwo.bottom = 350;
                        window.box_adTwo.setSpaceX(200);
                        window.scrollList.bottom = 150;
                        Laya.timer.frameLoop(1, this, this.onProgress);
                    })

                // ): this.window = zs.fgui.window.create().attach(s).fit().update(s, function (s) {
                //         _this.loading = s, t.call(_i), Laya.timer.frameLoop(1, _this, _this.onProgress);
                //     }).show();
            }
            (0, _createClass2.default)(i, [{
                key: "onProgress",
                value: function onProgress() {
                    if ((!this.loading || this.loading.run(this.thisArg.progress || 0)) && this.thisArg.readyStart) {
                        if (this.thisArg.start(), Laya.timer.clear(this, this.onProgress), this.loading && this.loading instanceof zs.ui.LayaLoading) {
                            var _s = this.loading.owner;
                            _s.removeSelf(), this.loading.destroy(), _s.destroy();
                            platform.getInstance().hideSplash();
                            platform.getInstance().showBanner();
                        }
                        this.window && this.window.dispose();
                    }
                }
            }, {
                key: "progress",
                get: function get() {
                    return null == this.loading ? 0 : this.loading.current;
                }
            }], [{
                key: "init",
                value: function init(s, t, o) {
                    return new i(s, t, o);
                }
            }]);
            return i;
        }();
        var t = /* */ function (_zs$workflow) {
            (0, _inherits2.default)(t, _zs$workflow);
            var _super = _createSuper(t);
            function t() {
                (0, _classCallCheck2.default)(this, t);
                return _super.apply(this, arguments);
            }
            (0, _createClass2.default)(t, [{
                key: "registe",
                value: function registe() {
                    this.fsm = new zs.fsm().registe(t.GAME_HOME, t.GAME_PLAY).registe(t.GAME_PLAY, t.GAME_END).registe(t.GAME_END, t.GAME_HOME).setDefault(t.GAME_HOME);
                }
            }]);
            return t;
        }(zs.workflow);
        t.GAME_HOME = "GAME_HOME", t.GAME_PLAY = "GAME_PLAY", t.GAME_END = "GAME_END", s.entry = i,
            s.workflow = t;
    }(window.zs.base = window.zs.base || {});
}()