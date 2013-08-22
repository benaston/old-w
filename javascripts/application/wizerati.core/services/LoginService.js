"use strict";

(function (app) {
	function LogInService(configSvc) {

		if (!(this instanceof app.LogInService)) {
			return new app.LogInService(configSvc); 
		}

		var that = this, _configSvc = null, _role = null;	

		this.login = function (username, password) {
			if(!username) {throw "username not supplied"; }
			if(!password) {throw "password not supplied"; }

			if(authenticate(username, password)) {
				that._role = authorize(username);
			}

			throw "authentication failed.";
		};

		this.getCurrentRole = function () {
			return that._role;
		};

		function authenticate(username, password) {
			return (username === "ben" || username === "sally");
		}

		function authorize(username) {
			if(username == "ben") {
				return that._role = that._roleEnum.RoleOne;
			} else if(username == "sally") {
				return that._role = that._roleEnum.RoleTwo;
			} 

			throw "unauthorized.";
		}

		function init() {
			if (!configSvc) { throw "configSvc not supplied"; }
			
			that._configSvc = configSvc;

			return that;
		}

		return init();
	};

	app.LogInService = LogInService;	

}(wizerati));
