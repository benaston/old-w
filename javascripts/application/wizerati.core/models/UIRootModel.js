"use strict";

(function (app) {
    function UIRootModel() {

        if (!(this instanceof app.UIRootModel)) {
            return new app.UIRootModel();
        }

        var that = this,
            _previousUIMode = null,
            _uiMode = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;

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
            _uiMode = _uiModeEnum.GreenfieldSearch;

            return that;
        }

        return init();
    };

    app.UIRootModel = UIRootModel;

}(wizerati));

//wiz.mod("cronicl").CroniclSvc.getMyItemMetadata(function (metadata) {
//    $("#searchField").attr("placeholder", metadata.searchFieldPlaceholderValue);
//    $("#newItemLink").text("New " + metadata.itemNameAlternative);
//    $("#emptyMessageMyItems").text("My  " + metadata.itemNameAlternativePlural + " are shown here");
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
//wiz.mod("cronicl").CroniclSvc.getSearchItemMetadata(function (metadata) {
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
