"use strict";

(function (app) {
	
	function Config(env) {
		if (!(this instanceof app.Config)) {
			return new app.Config(env);
		}

		var	that = this,
			devConfig =  {
				wizeratiUri: "/",
				templateServerUris: [ "/template-server/" ]
			},
			prodConfig = {
				wizeratiUri: "http://www.github.com/benaston/wizerati/template-server/"
			},
			sharedConfig = {
				templatesUriPart: "templates/",
				templatePostRenderScriptsUriPart: "templatePostRenderScripts/",
				metadataUriPart: "config/metadata"
			};

		function init() {
			if (!env) { throw "env not supplied"; }

			var config =  _.extend(that, new invertebrate.Config(env));
			config.devConfig = devConfig;
			config.prodConfig = prodConfig;
			config.sharedConfig = sharedConfig;
			config.collateConfiguration();

			return config;
		}

		return init();
	}

	app.Config = Config;
}(wizerati));