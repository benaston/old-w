"use strict";

jQuery(document).ready(function () {    
    //app.app = new app.ListToListView(new app.ListToListModel("favourites"));

    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);
	
	self.wizerati.instance.router = new invertebrate.Router();
	self.wizerati.instance.registerRoutes();
    self.wizerati.instance.searchForm = new wizerati.SearchFormView(new wizerati.SearchFormModel());
    self.wizerati.instance.uiRoot = new wizerati.UIRootView(new wizerati.UIRootModel());
    self.wizerati.instance.loginFormPanel = new wizerati.LoginPanelView();
	//self.wizerati.instance.favouritesCube = new wizerati.FavouritesCubeView(new wizerati.FavouritesCubeModel());
	//self.wizerati.instance.searchResults = new wizerati.SearchResultsView(new wizerati.SearchResultsModel());
	//self.wizerati.instance.itemsOfInterest = new wizerati.ItemsOfInterestView(new wizerati.ItemsOfInterestModel());		
}); 



