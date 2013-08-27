"use strict";

(function (app) {
    function UIRootModel() {

        if (!(this instanceof app.UIRootModel)) {
            return new app.UIRootModel();
        }

        var that = this,
            _previousUIMode = null,
            _uiMode = null;

        this.updateEventUri = "update://UIRootModel/";

        this.getUIMode = function () {

            return _uiMode;
        }

        this.setUIMode = function (value) {
            _previousUIMode = _uiMode;
            _uiMode = value;

            $.publish(that.updateEventUri);
        }

        this.getPreviousUIMode = function () {

            return _previousUIMode;
        }

        function init() {

            return that;
        }

        return init();
    };

    app.UIRootModel = UIRootModel;

}(wizerati));