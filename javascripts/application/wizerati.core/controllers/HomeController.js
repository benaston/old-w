"use strict";

(function (app) {
    function HomeController(uiRootModel) {

        if (!(this instanceof app.HomeController)) {
            return new app.HomeController(uiRootModel);
        }

        var that = this,
            _uiRootModel = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;


        this.index = function(){
            try {
                _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch);
            } catch(err) {
                console.log("error: HomeController.index");
            }
        };

        function init() {
            if(!uiRootModel) { throw "uiRootModel not supplied."; }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    };

    app.HomeController = HomeController;

}(wizerati));
