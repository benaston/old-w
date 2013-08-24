(function (app) {
	"use strict";

	function ResultListView(model, options) {

		if (!(this instanceof app.ResultListView)) {
			return new app.ResultListView(model);
		}

		var that = this,
			_el = "#result-list-panel",
			_templateName = "result-list.html";

		this.$el = $(_el);
		this.Model = null;

		//note how this does not have a template of its own, but delegates
		//gets a bunch of items to render themselves, via the application router
		this.render = function (options) {
			options = options || { done: that.postRender };

			that.$el.empty();
			$.each(that.Model.results, function (index, value) {
				app.instance.router.route(value, { $parentDomNode: that.$el });
			});
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
	invertebrate.View.isExtendedBy(app.ResultListView);
}(wizerati));