"use strict";

//try forcing service types to communicate with the UI only via routing and local storage?
(function (app) {

    function SearchService(resultModelFactory) {

        if (!(this instanceof app.SearchService)) {
            return new app.SearchService(resultModelFactory, resultListModel);
        }

        var that = this,
            _resultModelFactory = null;

        this.runSearch = function (keywords, location, rate) {

            console.log(keywords, location, rate);

            throw "next: use factory to get the uri, then retrieve the data and add it to local storage.";
//          $.ajax({ url: options.searchUri, success: success, cache: false });
        };

        function success(data) {
            if (!data) {
                throw "data not supplied";
            }

            //write the results to local storage, then return to the controller
            //the controller can then coordinate the updating of any views

//            var results = $.parseJSON(data);
//            var resultModels = [];
//
//            _.each(results, function (r) {
//                resultModels.push(_modelFactory.create(r));
//            });
//
//
//            _resultListModel.setResults(resultModels);
        }

        function init() {
            if (!resultModelFactory) {
                throw "resultModelFactory not supplied."
            }

            _resultModelFactory = resultModelFactory;

            return that;
        }

        return init();
    };

    app.SearchService = SearchService;

}(wizerati));


//use a factory for the search URI?
//var defaults = {
//    searchUri: "./items?q=",
//    keywords: null,
//    filterModel: null,
//    pre: function () {
//    },
//    success: function () {
//    }, //function(data) - instantiate the relevant models from the json for use by the application
//    error: function (e) {
//        throw "runSearch error: " + e;
//    }
//};
//
//options = _.extend({}, defaults, options);