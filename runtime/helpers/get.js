
!function () {
    var getPrototypeOf = require("./getPrototypeOf"), superPropBase = require("./superPropBase");

    function _get(e, t, r) {
        return "undefined" != typeof Reflect && Reflect.get ? module._get = _get = Reflect.get : module._get = _get = function (e, t, r) {
            var o = superPropBase(e, t);
            if (o) {
                var p = Object.getOwnPropertyDescriptor(o, t);
                return p.get ? p.get.call(r) : p.value;
            }
        }, _get(e, t, r || e);
    }

    module._get = _get;
}()