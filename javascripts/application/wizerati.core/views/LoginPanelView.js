"use strict";

(function (app) {

	function LoginPanelView(model) {

		if (!(this instanceof app.LoginPanelView)) {
			return new app.LoginPanelView(model);
		}

		var that = this, 
			_el = "#log-in-panel";

		this.$el = $(_el);
		this.Model = null;
	
		this.render = function (options) {
			options = options || { done: that.postRender };

		};
	
		this.postRender = function () {
		};

		this.bindEvents = function ($el, done) {
			that.$el.on('click', function () {
				app.instance.resultList.Model.setSelectedItem(that.$el.data("id"));
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
