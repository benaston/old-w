(function (app) {
	"use strict";

	function TodoListView(model, options) {
		if (!(this instanceof app.TodoListView)) {
			return new app.TodoListView(model);
		}

		var that = this,
			_el = "#todoList",
			_templateName = null;

		this.$el = null;
		this.Model = null;

		this.render = function (options) {
			options = options || { done: that.postRender };

			that.$el.empty();
			$.each(that.Model.todos, function (index, value) {
				app.instance.router.route(value, { $parentDomNode: that.$el });
			});
		};

		this.postRender = function () {
		};

		function init() {
			if (!model) { throw "model not supplied"; }
			options = options || { selector: "#todoList" };

			that.Model = model;
			_el = options.selector;
			that.$el = $(_el);
			$.subscribe(that.Model.updateEventUri, that.render);
			$.subscribe(that.Model.deleteEventUri, that.render);
			that.render();

			return that;
		}

		return init();
	}

	app.TodoListView = TodoListView;
	invertebrate.View.isExtendedBy(app.TodoListView);
}(todoApp));