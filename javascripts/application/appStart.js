"use strict";

jQuery(document).ready(function () {    
    //app.app = new app.ListToListView(new app.ListToListModel("favourites"));

    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);
	
	self.wizerati.instance.router = new invertebrate.Router();
	self.wizerati.instance.registerRoutes();
	self.wizerati.instance.logInForm = new wizerati.LogInFormView(new wizerati.LogInFormModel());
	//self.wizerati.instance.favouritesCube = new wizerati.FavouritesCubeView(new wizerati.FavouritesCubeModel());
	//self.wizerati.instance.searchResults = new wizerati.SearchResultsView(new wizerati.SearchResultsModel());
	//self.wizerati.instance.itemsOfInterest = new wizerati.ItemsOfInterestView(new wizerati.ItemsOfInterestModel());		
}); 



