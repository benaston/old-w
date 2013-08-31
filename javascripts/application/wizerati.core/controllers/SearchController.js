"use strict";

(function (app) {
    function SearchController(loginPanelModel, authenticationService) {

        if (!(this instanceof app.SearchController)) {
            return new app.SearchController(loginPanelModel, authenticationService);
        }

        var that = this,
            _loginPanelModel = null,
            _authenticationService = null;

        this.create = function(model){
            if(!_authenticationService.authenticate(model.username, model.password))
            {
                _loginPanelModel.setIsLoginFailedMessageVisible(true);
            }

            console.log('starting session...' + model)
        };

        function init() {
            if(!loginPanelModel) {
                throw "loginFormPanelModel not supplied.";
            }

            if(!authenticationService) {
                throw "authenticationService not supplied.";
            }

            _loginPanelModel = loginPanelModel;
            _authenticationService = authenticationService;

            return that;
        }

        return init();
    };

    app.SearchController = SearchController;

}(wizerati));
