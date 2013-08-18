"use strict";

jQuery(document).ready(function () {    
    //app.app = new app.ListToListView(new app.ListToListModel("favourites"));

    self.wizeratiApp.instance = new wizeratiApp.App(invertebrate.env.dev);
	self.wizeratiApp.instance.searchForm = new wizeratiApp.SearchFormView(new wizeratiApp.SearchFormModel());
	self.wizeratiApp.instance.favouritesCube = new wizeratiApp.FavouritesCubeView(new wizeratiApp.FavouritesCubeModel());
	self.wizeratiApp.instance.searchResults = new wizeratiApp.SearchResultsView(new wizeratiApp.SearchResultsModel());
	self.wizeratiApp.instance.itemsOfInterestResults = new wizeratiApp.ItemsOfInterestView(new wizeratiApp.ItemsOfInterestModel());	
	self.wizeratiApp.instance.router = new invertebrate.Router();
	self.wizeratiApp.instance.registerRoutes();
}); 



