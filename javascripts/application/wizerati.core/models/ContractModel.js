"use strict";

(function (app) {
    function ContractModel(id, city, telephone, email, lastUpdated, summary, title) {

        if (!(this instanceof app.Contract)) {
            return new app.Contract();
        }

        var that = this,
            _id = null,
            _city = null,
            _telephone = null,
            _email = null,
            _lastUpdated = null,
            _summary = null,
            _title = null;

        function init() {
            if (!id) {
                throw "id not supplied";
            }
            if (!city) {
                throw "city not supplied";
            }
            if (!telephone) {
                throw "telephone not supplied";
            }
            if (!email) {
                throw "email not supplied";
            }
            if (!lastUpdated) {
                throw "lastUpdated not supplied";
            }
            if (!summary) {
                throw "summary not supplied";
            }
            if (!title) {
                throw "title not supplied";
            }

            _id = id;
            _city = city;
            _telephone = telephone;
            _email = email;
            _lastUpdated = lastUpdated;
            _summary = summary;
            _title = title;

            return that;
        }

        return init();
    };

    app.ContractModel = ContractModel;
    invertebrate.Model.isExtendedBy(app.ContractModel);

}(wizerati));
