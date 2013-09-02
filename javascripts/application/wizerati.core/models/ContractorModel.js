"use strict";

(function (app) {
    function ContractorModel(id, city, telephone, email, lastUpdated, summary, availability) {

        if (!(this instanceof app.ContractorModel)) {
            return new app.ContractorModel();
        }

        var that = this,
            _id = null,
            _city = null,
            _telephone = null,
            _email = null,
            _lastUpdated = null,
            _summary = null,
            _availability = null;

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
            if (!availability) {
                throw "availability not supplied";
            }

            _id = id;
            _city = city;
            _telephone = telephone;
            _email = email;
            _lastUpdated = lastUpdated;
            _summary = summary;
            _availability = availabilty;

            return that;
        }

        return init();
    };

    app.ContractorModel = ContractorModel;
    invertebrate.Model.isExtendedBy(app.ContractorModel);

}(wizerati));
