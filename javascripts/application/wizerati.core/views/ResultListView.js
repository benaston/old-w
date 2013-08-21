(function (app) {
	"use strict";

	function ResultListView(model, options) {

		if (!(this instanceof app.ResultListView)) {
			return new app.ResultListView(model);
		}

		var that = this,
			_el = ".results-panel",
			_templateName = "result-list.html";

		this.$el = $(_el);
		this.Model = null;

		this.render = function (options) {
			options = options || { done: that.postRender };

			return app.instance.renderTemplate(that.$el, _templateName, that.Model, options);
		};

		this.postRender = function () {
			var $results = that.$el.find(".result");
			$results.live('click, touch', function () {
				that.Model.setSelectedResult($results.find('.is-selected').data('id'), { silent: false });
			});
		};

		function init() {
			if (!model) { throw "model not supplied"; }
			options = options || {  };

			that.Model = model;
			that.$el = $(_el);

			$.subscribe(that.Model.updateEventUri, that.render);
			$.subscribe(that.Model.deleteEventUri, that.render);
			
			that.render();

			return that;
		}

		return init();

	}

	app.ResultListView = ResultListView;
	wizerati.View.isExtendedBy(app.ResultListView);
}(wizerati));