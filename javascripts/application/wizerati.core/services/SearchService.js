"use strict";

(function (app) {
	//todo: split authorization and authentication?
	function SearchService(resultModelFactory) {

		if (!(this instanceof app.SearchService)) {
			return new app.SearchService(); 
		}

		var that = this, 			
			_resultModelFactory = null;		

		this.runSearch = function (options) {
			var defaults = {
					searchUri:	"./items?q=",
					keywords: null,
					filterModel: null,
					pre: function () { },
					success: function () { }, //function(data) - instantiate the relevant models from the json for use by the application 
					error: function (e) { throw "runSearch error: " + e; }
			};
			
			options = _.extend({}, defaults, options);
			
			//if(options.pre) { options.pre(); }

			$.ajax({ url: options.searchUri, success: success, cache: false });
		};

		function success(data) {
			if (!data) { throw "data not supplied"; }
			
			var results = $.parseJSON(data);
			var resultModels = [];

			_.each(results, function(r) {
				resultModels.push(_modelFactory.create(r));
			});

			app.instance.ResultList.Model.setResults(resultModels);
		}

		function init() {
			if(!resultModelFactory) { throw "resultModelFactory not supplied." };

			that._resultModelFactory = resultModelFactory;

			return that;
		}

		return init();
	};

	app.SearchService = SearchService;	

}(wizerati));
