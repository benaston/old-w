(function (invertebrate) {
	"use strict";

	function Router() {
		this.routes = {};

		this.registerRoute = function (uri, action) {
			this.routes[uri] = action;
		};

		this.route = function (uri, model) {
			this.routes[uri](model);
		};

        this.routeByObject = function (model, options) {
			this.routes[model.constructor.name](model, options);
		};
		
		function init() {
//			$(document).on('click', 'a:not([data-bypass])', function (evt) {
//				var href = $(this).attr('href');
//				var protocol = 'http//';
//
//				if (href.slice(protocol.length) !== protocol) {
//					evt.preventDefault();
//					that.route(href);
//				}
//			});
		}
		
		init();
	}

	invertebrate.Router = Router;
}(invertebrate));
