(function (app) {
	"use strict";

	function ResultListModel() {
		if (!(this instanceof app.ResultListModel)) {
			return new app.ResultListModel();
		}

		var that = this, 
					_selectedResultId = null;

		this.updateEventUri = "update://ResultList/";
		this.deleteEventUri = "delete://ResultList/";
		that.resourceName = "todoList";
		this.results = [];
		
		this.getResult = function (id, options) {
			if (!id) { throw "id not supplied"; }
			
			that.results = _.filter(that.results, function(result) { result.id === id; })[0];
		};

		this.getSelectedResultId = function (id) {
			return that._selectedResultId;
		};

		this.setSelectedResultId = function (id) {
			if (!id) { throw "id not supplied"; }
			
			that._selectedResultId = id;

			$.publish(that.updateEventUri);
		};

		this.addResult = function (result) {
			if (!result) { throw "result not supplied"; }		

			that.results.unshift(results);

			$.publish(that.updateEventUri);
		};
		
		this.removeResult = function (id, options) {
			if (!id) { throw "id not supplied"; }
			
			that.results = _.reject(that.results, function(result) { result.id === id; });

			$.publish(that.deleteEventUri);
		};
		
		function init() {
			return that;
		}

		return init();
	}

	app.ResultListModel = ResultListModel;
	invertebrate.Model.isExtendedBy(app.ResultListModel);
}(wizerati));