"use strict";

(function (app) {
    function AppModel() {

        if (!(this instanceof app.AppModel)) {
            return new app.AppModel();
        }

        var that = this,
            _uiMode = null;

        this.updateEventUri = "update://AppModel/";

        this.getUIMode = function () {

            return that._uiMode;
        }

        this.setUIMode = function (value) {
            that._uiMode = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.AppModel = AppModel;

}(wizerati));
