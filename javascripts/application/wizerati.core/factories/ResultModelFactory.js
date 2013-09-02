"use strict";

(function (app) {
    //todo: split authorization and authentication?
    function ResultModelFactory(loginService) {

        if (!(this instanceof app.ResultModelFactory)) {
            return new app.ResultModelFactory(loginService);
        }

        var that = this,
            _loginService = null,
            _roleEnum = null;

        this.create = function (data) {
            switch (_loginService.getCurrentRole()) {
                case _roleEnum.RoleOne:
                    return createContractor(data);
                case _roleEnum.RoleTwo:
                    return createContract(data);
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function createContractor(data) {
            var dataModel = json.Parse(data);

            return new wizerati.ContractorModel(dataModel.id,
                dataModel.city,
                dataModel.telephone,
                dataModel.email,
                dataModel.lastUpdated,
                dataModel.lastUpdated,
                dataModel.summary,
                dataModel.availability);
        }

        function createContract(data) {
            var dataModel = json.Parse(data);

            return new wizerati.ContractModel(dataModel.id,
                dataModel.city,
                dataModel.telephone,
                dataModel.email,
                dataModel.lastUpdated,
                dataModel.lastUpdated,
                dataModel.summary,
                dataModel.title);
        }

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }
            ;

            _loginService = loginService;
            _roleEnum = wizerati.mod("enum").UserRole;

            return that;
        }

        return init();
    };

    app.ResultModelFactory = ResultModelFactory;

}(wizerati));
