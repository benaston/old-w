"use strict";

(function (app) {

	function LoginPanelView(model) {

		if (!(this instanceof app.LoginPanelView)) {
			return new app.LoginPanelView(model);
		}

		var that = this, 
			_el = "#log-in-panel",
            _cancelButtonEl = ".btn-cancel";

		this.$el = $(_el);
		this.$cancelButton = $(_el).find(_cancelButtonEl);
		this.Model = null;
	
		this.render = function (e, options) {
			options = options || { done: that.postRender };

		};
	
		this.postRender = function () {
		};

		this.bindEvents = function ($el, done) {
			that.$cancelButton.live('click', function () {
//				app.instanceof.app.Model.setUIMode(app.instance.app.getPreviousUIMode());


			});			

			done($el);
		};

		function init() {
			if (!model) { throw "model not supplied"; }
			
			that.Model = model;					
			
			return that;
		}

		return init();
	};

	app.LoginPanelView = LoginPanelView;
	invertebrate.View.isExtendedBy(app.LoginPanelView);
}(wizerati));
