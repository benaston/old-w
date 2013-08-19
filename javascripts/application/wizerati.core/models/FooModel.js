(function (app) {
	function FooModel() {
		"use strict";

		if (!(this instanceof app.FooModel)) {
			return new app.FooModel(); 
		}

		var that = this, 
		    _title = null, 
			_description = null;

		this.updateEventUri = "update://SearchFormModel/";

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
