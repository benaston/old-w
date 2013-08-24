"use strict";

(function (app) {
	function ContractorModel(id, city, telephone, email, lastUpdated, summary, availability) {

		if (!(this instanceof app.ContractorModel)) {
			return new app.ContractorModel(); 
		}

		var that = this, 
			_id = null, 
		    _city = null, 
		    _telephone = null, 
		    _email = null, 
		    _lastUpdated = null, 
		    _summary = null, 
			_availability = null;	

		function init() {
			if (!id) { throw "id not supplied"; }
			if (!city) { throw "city not supplied"; }
			if (!telephone) { throw "telephone not supplied"; }
			if (!email) { throw "email not supplied"; }
			if (!lastUpdated) { throw "lastUpdated not supplied"; }
			if (!summary) { throw "summary not supplied"; }
			if (!availability) { throw "availability not supplied"; }
			
			that._id = id;		
			that._city	= city;	 
			that._telephone = telephone;
			that._email = email;
			that._lastUpdated = lastUpdated;
			that._summary = summary;
			that._availability = availabilty;

			return that;
		}

		return init();
	};

	app.ContractorModel = ContractorModel;	

}(wizerati));
