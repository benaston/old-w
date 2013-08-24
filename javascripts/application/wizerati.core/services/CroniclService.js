"use strict";

(function (app) {
	function CroniclService(loginService, config) {

		if (!(this instanceof app.CroniclService)) {
			return new app.CroniclService(loginService, config); 
		}

		var that = this, 
					_loginService = null,
					_config = null;	

		this.getCroniclUri = function () {			
			return that._config.config.templateServerUris[that._loginService.getCurrentRole()];
		};

		function init() {
			if (!loginService) { throw "loginService not supplied"; }
			if (!config) { throw "config not supplied"; }
			
			that._loginService = loginService;
			that._config = config;

			return that;
		}

		return init();
	};

	app.CroniclService = CroniclService;	

}(wizerati));
