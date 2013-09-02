"use strict";

(function (app) {
    function SearchFormModel() {

        if (!(this instanceof app.SearchFormModel)) {
            return new app.SearchFormModel();
        }

        var that = this,
            _title = null,
            _description = null,
            _rate = null;

        this.updateEventUri = "update://SearchFormModel/";

        this.getKeywords = function () {
            return that._keywords;
        };

        this.setKeywords = function (value, options) {
            options = options || { silent: false };

            that._keywords = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        this.getLocation = function () {
            return that._location;
        };

        this.setLocation = function (value, options) {
            that._location = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        this.getRate = function () {
            return that._rate;
        };

        this.setRate = function (value, options) {
            that._rate = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    };

    app.SearchFormModel = SearchFormModel;
    invertebrate.Model.isExtendedBy(app.SearchFormModel);

}(wizerati));
