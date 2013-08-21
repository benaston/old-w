"use strict";

(function (app) {
	function SearchService() {

		if (!(this instanceof app.SearchService)) {
			return new app.SearchService(); 
		}

		var that = this;		

		this.runSearch = function (options) {
			var defaults = {
					searchUri:	"./items?q=",
					keywords: null,
					filterModel: null,
					pre: function () { },
					success: function () { }, //function(data)
					error: function (e) { throw "runSearch error: " + e; }
			};
			
			options = _.extend({}, defaults, options);
			
			//if(options.pre) { options.pre(); }

			$.ajax({ url: options.searchUri, success: success, cache: false });
		};

		function init() {
			return that;
		}

		return init();
	};

	app.SearchService = SearchService;	

}(wizerati));
