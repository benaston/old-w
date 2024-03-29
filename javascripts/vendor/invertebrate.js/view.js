(function (invertebrate) {
    "use strict";

    function View(model) {
        if (!(this instanceof invertebrate.View)) {
            return new invertebrate.View(model);
        }

        var that = this;

        function init() {
            return that;
        }

        return init();
    }

    invertebrate.View = View;

    //static method
    invertebrate.View.isExtendedBy = function (child) {
        child.prototype = new invertebrate.View();
        child.prototype.constructor = child;
    };
}(invertebrate));