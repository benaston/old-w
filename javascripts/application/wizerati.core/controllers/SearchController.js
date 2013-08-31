"use strict";

(function (app) {
    function SearchController(uiRootModel) {

        if (!(this instanceof app.SearchController)) {
            return new app.SearchController(uiRootModel);
        }

        var that = this,
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _uiRootModel = null;


        this.show = function(model){
            try {
                _uiRootModel.setUIMode(_uiModeEnum.Search);
            } catch(err) {
                console.log("error: SearchController.index");
            }
        };

        function init() {
            if(!uiRootModel) {
                throw "uiRootModel not supplied.";
            }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    };

    app.SearchController = SearchController;

}(wizerati));
