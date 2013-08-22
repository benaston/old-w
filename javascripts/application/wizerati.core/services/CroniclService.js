"use strict";

(function (app) {
	function CroniclService(configSvc) {

		if (!(this instanceof app.CroniclService)) {
			return new app.CroniclService(configSvc); 
		}

		var that = this, _configSvc = null;	

		this.getCroniclUri = function (options) {
			var croniclCookieValue = getCookieValue(name);

			if(croniclCookieValue === 'contractor') {
				return that._configSvc.templateServerUris[0];
			} else if(croniclCookieValue === 'contract') {
				return that._configSvc.templateServerUris[1];
			} else {
				throw "unexpected cronicl cookie value";
			}			
		};

		//gets the value of a cookie by name
		//see: http://stackoverflow.com/questions/10730362/javascript-get-cookie-by-name
		function getCookieValue(name) {
	  		var parts = document.cookie.split(name + "=");
	  		if (parts.length == 2) return parts.pop().split(";").shift();
		}

		function init() {
			if (!configSvc) { throw "configSvc not supplied"; }
			
			that._configSvc = configSvc;

			return that;
		}

		return init();
	};

	app.CroniclService = CroniclService;	

}(wizerati));
