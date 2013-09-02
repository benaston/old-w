"use strict";

jQuery(document).ready(function () {

    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);

    self.wizerati.instance.router = new invertebrate.Router();
    self.wizerati.instance.registerRoutes();
    self.wizerati.instance.searchForm = new wizerati.SearchFormView(new wizerati.SearchFormModel());
    self.wizerati.instance.uiRoot = new wizerati.UIRootView(new wizerati.UIRootModel());
    self.wizerati.instance.loginPanel = new wizerati.LoginPanelView(new wizerati.LoginPanelModel());

    self.wizerati.instance.sessionController = new wizerati.SessionController(self.wizerati.instance.loginPanel.Model, wizerati.mod("services").AuthenticationService);
    self.wizerati.instance.loginController = new wizerati.LoginController(self.wizerati.instance.loginPanel.Model, self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.homeController = new wizerati.HomeController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.advertisersController = new wizerati.AdvertisersController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.searchController = new wizerati.SearchController(self.wizerati.instance.uiRoot.Model, self.wizerati.instance.searchForm.Model, wizerati.mod("services").SearchService);
    //self.wizerati.instance.favouritesCube = new wizerati.FavouritesCubeView(new wizerati.FavouritesCubeModel());
    //self.wizerati.instance.searchResults = new wizerati.SearchResultsView(new wizerati.SearchResultsModel());
    //self.wizerati.instance.itemsOfInterest = new wizerati.ItemsOfInterestView(new wizerati.ItemsOfInterestModel());

});



