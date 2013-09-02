"use strict";

(function (app) {
    //todo: split authorization and authentication?
    function AuthenticationService() {

        if (!(this instanceof app.AuthenticationService)) {
            return new app.AuthenticationService();
        }

        var that = this;

        this.authenticate = function (username, password) {

//          $.ajax({ url: options.searchUri, success: success, cache: false });
            return false;
        };

        function init() {

            return that;
        }

        return init();
    };

    app.AuthenticationService = AuthenticationService;

}(wizerati));
