(function (app) {
    function ResultModel(id, title, rate, location, lastUpdated, description) {
        "use strict";

        if (!(this instanceof app.ResultModel)) {
            return new app.ResultModel();
        }

        var that = this,
            _id = null,
            _title = null,
            _rate = null,
            _location = null,
            _lastUpdated = null,
            _description = null;

        this.updateEventUri = "update://ResultModel/" + id + "/";

        this.setDescription = function (value, options) {
            that._description = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        function init() {
            if (!id) {
                throw "id not supplied";
            }
            if (!title) {
                throw "title not supplied";
            }
            if (!rate) {
                throw "rate not supplied";
            }
            if (!location) {
                throw "location not supplied";
            }
            if (!lastUpdated) {
                throw "lastUpdated not supplied";
            }
            if (!description) {
                throw "description not supplied";
            }

            that._id = id;
            that._title = title;
            that._rate = rate;
            that._location = location;
            that._lastUpdated = lastUpdated;
            that._description = description;

            return that;
        }

        return init();
    };

    app.ResultModel = ResultModel;
    invertebrate.Model.isExtendedBy(app.ResultModel);

}(wizerati));
