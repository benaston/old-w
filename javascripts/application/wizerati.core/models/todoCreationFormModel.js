(function (app) {
	function TodoCreationFormModel() {
		"use strict";

		if (!(this instanceof app.TodoCreationFormModel)) {
			return new app.TodoCreationFormModel(); 
		}

		var that = this, 
		    _title = null, 
			_description = null;

		this.updateEventUri = "update://todoCreationForm/";

		this.setTitle = function (value, options) {
			options = options || { silent:false };
			
			that._title = value;

			if (options && options.silent === true) { return; }
			
			$.publish(that.updateEventUri);
		};
		
		this.setDescription = function (value, options) {
			that._description = value;

			if (options && options.silent === true) { return; }

			$.publish(that.updateEventUri);
		};

		function init() {
			return that;
		}

		return init();
	};

	app.TodoCreationFormModel = TodoCreationFormModel;
	invertebrate.Model.isExtendedBy(app.TodoCreationFormModel);

}(todoApp));
