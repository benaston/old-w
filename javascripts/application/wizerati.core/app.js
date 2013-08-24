(function (app) {
	"use strict";

	function App(env) {
		if (!(this instanceof app.App)) {
			return new app.App(env);
		}

		var that = this;

		this.registerRoutes = function() {

			that.router.registerRoute(app.ResultModel.prototype.constructor.name, function (model, options) {
				options = options || { $parentDomNode: $('body') };
				new wizerati.ResultView(model).render({ done: function ($el) { options.$parentDomNode.append($el); } });
			});

			that.router.registerRoute(app.ContractorModel.prototype.constructor.name, function (model, options) {
				options = options || { $parentDomNode: $('body') };
				new wizerati.ContractorView(model).render({ done: function ($el) { options.$parentDomNode.append($el); } });
			});

			that.router.registerRoute(app.ContractModel.prototype.constructor.name, function (model, options) {
				options = options || { $parentDomNode: $('body') };
				new wizerati.ContractView(model).render({ done: function ($el) { options.$parentDomNode.append($el); } });
			});
			
		};

		function init() {
			if (!env) { throw "env not supplied"; }

			that.env = env;

			return _.extend(that, new invertebrate.App(app.mod("templates").TemplateServerSvc));
		}

		return init();
	}

	app.App = App;
}(wizerati));