"use strict";

//builds "namespaces" (or "modules", hence "mod") 
//of objects for use by the application.
//order of declaration matters here.
(function (mod) {

	mod.Config = new wizerati.Config(invertebrate.env.dev);
}(wizerati.mod("config")));

(function (mod) {
	
	mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(wizerati.mod("config").Config);
}(wizerati.mod("templates")));

(function (mod) {
	
	mod.SearchService = new wizerati.SearchService();
}(wizerati.mod("services")));