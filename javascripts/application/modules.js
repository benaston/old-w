"use strict";

//builds "namespaces" (or "modules", hence "mod") 
//of objects for use by the application.
//order of declaration matters here.
(function (mod) {

	mod.UserRole = {
		RoleOne: "1",
		RoleTwo: "2"	
	};
	
}(wizerati.mod("enum")));

	

(function (mod) {

	mod.Config = new wizerati.Config(invertebrate.env.dev);
}(wizerati.mod("config")));

(function (mod) {
	mod.LogInService = new wizerati.LogInService(wizerati.mod("config").Config);
	mod.SearchService = new wizerati.CroniclService(wizerati.mod("config").Config); //pass in login service instead?
	mod.SearchService = new wizerati.SearchService();
}(wizerati.mod("services")));

(function (mod) {
	
	mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(wizerati.mod("config").Config, wizerati.mod("services").CroniclService.getCroniclUri);
}(wizerati.mod("templates")));