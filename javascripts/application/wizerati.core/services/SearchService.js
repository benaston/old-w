"use strict";

(function (app) {
	//todo: split authorization and authentication?
	function SearchService(loginService) {

		if (!(this instanceof app.SearchService)) {
			return new app.SearchService(); 
		}

		var that = this, 
			_logInService = null;		

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

		function success(data) {
			if(_logInService.getCurrentRole() === _roleEnum.Role1) {
				app.instance.ResultList.Model.
			}
		}

		function init() {
			if(!loginService) { throw "logInService not supplied." };

			that._logInService = logInService;

			return that;
		}

		return init();
	};

	app.SearchService = SearchService;	

}(wizerati));
