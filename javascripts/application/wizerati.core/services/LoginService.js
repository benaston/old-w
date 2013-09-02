"use strict";

(function (app) {
    function LogInService(configService, cookieService) {

        if (!(this instanceof app.LogInService)) {
            return new app.LogInService(configSvc);
        }

        var that = this,
            _configSvc = null,
            _cookieService = null,
            _roleEnum = null;

        this.logIn = function (options) {
            if (!options.username && !options.role) {
                throw "username not supplied";
            }
            if (!options.password && !options.role) {
                throw "password not supplied";
            }

            if (options.role) {
                that._cookieService.setAuthorizationCookie(options.role);
                initializeUI();

                return;
            } else {
                if (authenticate(options.username, options.password)) {
                    that._cookieService.setAuthorizationCookie(options.role);

                    return;
                }
            }

            throw "authentication failed.";
        };

        this.getCurrentRole = function () {
            var cookie = that._cookieService.getAuthorizationCookie();

            if (!cookie) {
                return that._roleEnum.ContractorStranger;
            }

            if (cookie !== that._roleEnum.Contractor
                && cookie !== that._roleEnum.Employer
                && cookie !== that._roleEnum.ContractorStranger
                && cookie !== that._roleEnum.EmployerStranger) {

                throw "invalid role found in cookie '" + cookie + "'";
            }

            return cookie;
        };

        function authenticate(username, password) {
            return (username === "ben" || username === "sally");
        }

        function authorize(username) {
            if (username == "ben") {
                return that._role = that._roleEnum.Contractor;
            } else if (username == "sally") {
                return that._role = that._roleEnum.Employer;
            }

            throw "unauthorized.";
        }

        //gets the value of a cookie by name
        //see: http://stackoverflow.com/questions/10730362/javascript-get-cookie-by-name
        function getCookieValue(name) {
            var parts = document.cookie.split(name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        function init() {
            if (!configService) {
                throw "configService not supplied";
            }
            if (!cookieService) {
                throw "cookieService not supplied";
            }

            that._roleEnum = wizerati.mod("enum").UserRole;

            that._configService = configService;
            that._cookieService = cookieService;

            return that;
        }

        return init();
    };

    app.LogInService = LogInService;

}(wizerati));
