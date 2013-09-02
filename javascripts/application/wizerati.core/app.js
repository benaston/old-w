(function (app) {
    "use strict";

    function App(env) {
        if (!(this instanceof app.App)) {
            return new app.App(env);
        }

        var that = this;

        this.registerRoutes = function () {

            that.router.registerRoute(app.ResultModel.prototype.constructor.name, function (model, options) {
                options = options || { $parentDomNode: $('body') };
                new wizerati.ResultView(model).render({ done: function ($el) {
                    options.$parentDomNode.append($el);
                } });
            });

            that.router.registerRoute(app.ContractorModel.prototype.constructor.name, function (model, options) {
                options = options || { $parentDomNode: $('body') };
                new wizerati.ContractorView(model).render({ done: function ($el) {
                    options.$parentDomNode.append($el);
                } });
            });

            that.router.registerRoute(app.ContractModel.prototype.constructor.name, function (model, options) {
                options = options || { $parentDomNode: $('body') };
                new wizerati.ContractView(model).render({ done: function ($el) {
                    options.$parentDomNode.append($el);
                } });
            });

            that.router.registerRoute('/session/create', function (model) {
                app.instance.sessionController.create(model);
            });

            that.router.registerRoute('/login', function () {
                app.instance.loginController.index();
            });

            that.router.registerRoute('/advertisers', function () {
                app.instance.advertisersController.index();
            });

            that.router.registerRoute('/', function () {
                app.instance.homeController.index();
            });

            that.router.registerRoute('/search', function () {

                app.instance.searchController.show();
            });

        };

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            that.env = env;

            return _.extend(that, new invertebrate.App(app.mod("templates").TemplateServerSvc));
        }

        return init();
    }

    app.App = App;
}(wizerati));