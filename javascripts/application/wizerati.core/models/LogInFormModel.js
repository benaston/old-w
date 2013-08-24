"use strict";

(function (app) {
	function LogInFormModel() {

		if (!(this instanceof app.LogInFormModel)) {
			return new app.LogInFormModel(); 
		}

		var that = this, 
		    _isFlipped = false, 
			_isVisible = true;

		this.updateEventUri = "update://LogInFormModel/";

		this.getIsFlipped = function () {
			return _isFlipped;
		};

		this.setIsFlipped = function (value) {
			_isFlipped = value;

			$.publish(that.updateEventUri);
		};

		this.getIsVisible = function () {
			return _isVisible;
		};

		this.setIsVisible = function (value) {
			_isVisible = value;

			$.publish(that.updateEventUri);
		};

		function init() {

			return that;
		}

		return init();
	};

	app.LogInFormModel = LogInFormModel;
	invertebrate.Model.isExtendedBy(app.LogInFormModel);

}(wizerati));
