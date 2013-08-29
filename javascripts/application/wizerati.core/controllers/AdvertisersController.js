"use strict";

(function (app) {
    function AdvertisersController(uiRootModel) {

        if (!(this instanceof app.AdvertisersController)) {
            return new app.AdvertisersController(uiRootModel);
        }

        var that = this,
            _uiRootModel = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;


        this.index = function(){
            try {
                _uiRootModel.setUIMode(_uiModeEnum.Purchase);
            } catch(err) {
                console.log("error: AdvertisersController.index");
            }
        };

        function init() {
            if(!uiRootModel) { throw "uiRootModel not supplied."; }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    };

    app.AdvertisersController = AdvertisersController;

}(wizerati));
