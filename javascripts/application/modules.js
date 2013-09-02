"use strict";

//builds "namespaces" (or "modules", hence "mod") 
//of objects for use by the application.
//order of declaration matters here.
(function (mod) {

    mod.UserRole = {
        Contractor: "1",
        Employer: "2",
        ContractorStranger: "3",
        EmployerStranger: "4"
    };

    mod.UIMode = {
        GreenfieldSearch: "1",
        LogIn: "2",
        Purchase: "3",
        Search: "4"
    };

}(wizerati.mod("enum")));


(function (mod) {

    mod.Config = new wizerati.Config(invertebrate.env.dev);

}(wizerati.mod("config")));

(function (mod) {

    mod.AuthenticationService = new wizerati.AuthenticationService();
    mod.CookieService = new wizerati.CookieService();
    mod.LogInService = new wizerati.LogInService(wizerati.mod("config").Config, mod.CookieService);
    mod.CroniclService = new wizerati.CroniclService(mod.LogInService, wizerati.mod("config").Config); //pass in login service instead?
    mod.ResultModelFactory = new wizerati.ResultModelFactory(mod.LogInService);
    //could register a search service factory function in the cronicl metadata
    mod.SearchService = new wizerati.SearchService(mod.ResultModelFactory);

}(wizerati.mod("services")));

(function (mod) {

    mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(wizerati.mod("config").Config, wizerati.mod("services").CroniclService.getCroniclUri);

}(wizerati.mod("templates")));

