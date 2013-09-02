"use strict";

(function (app) {
    function CookieService() {
        "use strict";

        if (!(this instanceof CookieService)) {
            return new CookieService();
        }

        var that = this,
            cookieValidityDays = 2,
            cookieName = "wizerati";

        this.getAuthorizationCookie = function () {
            return _.cookie(cookieName);
        };

        this.setAuthorizationCookie = function (role) {
            _.cookie(cookieName, role, { expires: 7, path: '/' });
        };

        this.deleteAuthorizationCookie = function () {
            _.cookie(cookieName, null);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.CookieService = CookieService;

}(wizerati));


