"use strict";

(function (app) {
    function AdvertisersPanelModel() {

        if (!(this instanceof app.AdvertisersPanelModel)) {
            return new app.AdvertisersPanelModel();
        }

        var that = this,
            _username = null,
            _password = null,
            _isLoginFailedMessageVisible = false,
            _isVisible = false;

        this.updateEventUri = "update://AdvertisersPanelModel/";

        this.getUsername = function () {
            return _username;
        };

        this.setUsername = function (value) {
            _username = value;

            $.publish(that.updateEventUri);
        };

        this.getPassword = function () {
            return _password;
        };

        this.setPassword = function (value) {
            _password = value;

            $.publish(that.updateEventUri);
        };

        this.getIsLoginFailedMessageVisible = function () {
            return _isLoginFailedMessageVisible;
        };

        this.setIsLoginFailedMessageVisible = function (value) {
            _isLoginFailedMessageVisible = value;

            $.publish(that.updateEventUri);
        };

        this.setIsVisible = function (value) {
            _isVisible = value;

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    };

    app.AdvertisersPanelModel = AdvertisersPanelModel;
    invertebrate.Model.isExtendedBy(app.AdvertisersPanelModel);

}(wizerati));
