(function (invertebrate) {
    "use strict";

    function Router(homeRoute) {

        var that = this,
            _homeRoute = '/';

        this.routes = {};

        this.registerRoute = function (uri, action) {
            that.routes[uri] = action;
        };

        this.route = function (uri, model) {
            if (uri === _homeRoute) {
                uri = '/';
            }
            history.pushState(null, null, uri);
            that.routes[uri](model);
        };

        this.routeByObject = function (model, options) {
            that.routes[model.constructor.name](model, options);
        };

        function routeHyperlink(evt) {
            var href = $(this).attr('href');
            var protocol = 'http//';

            if (href.slice(protocol.length) !== protocol) {
                evt.preventDefault();
                that.route(href);
            }
        }

        function routeFormSubmission(evt) {
            var action = $(this).attr('action');
            var protocol = 'http//';

            if (action.slice(protocol.length) !== protocol) {
                evt.preventDefault();
                that.route(action);
            }
        }

        function init() {
            _homeRoute = homeRoute;

            window.addEventListener("popstate", function (e) {
                that.route(location.pathname);
            });

            $(document).on('click', 'a:not([data-bypass])', routeHyperlink);
            $(document).on('submit', 'form', routeFormSubmission);
        }

        init();
    }

    invertebrate.Router = Router;
}(invertebrate));
