"use strict";

(function (app) {

	function SearchFormView(model) {

		if (!(this instanceof app.SearchFormView)) {
			return new app.SearchFormView(model);
		}

		var that = this, 
			_el = "#search-form", 
			_templateName = "search-form.html";

		this.$el = $(_el);
		this.Model = null;
	
		this.render = function (options) {
			options = options || { done: that.postRender };

			return app.instance.renderTemplate(that.$el, _templateName, that.Model, options);
		};
	
		this.postRender = function () {
			var $keywords = that.$el.find("#keywords");
			$keywords.live('change', function () {
				that.Model.setKeywords($keywords.val(), { silent: true });
			});

			var $location = that.$el.find("#location");
			$location.live('change', function () {
				that.Model.setLocation($location.val(), { silent: true });
			});

			var $rate = that.$el.find("input[name='r']");
			$rate.live('change', function () {
				that.Model.setRate(that.$el.find("input[name='r']:checked").val(), { silent: true });
			});

			var $searchButton = that.$el.find("#btn-search");
			$searchButton.live('click', function (e) { 
				// todoApp.instance.todoList.Model.addTodo(new todoApp.TodoModel(that.$el.find(".title").val(), that.$el.find(".description").val()));
				// todoApp.instance.todoCreationForm.Model.setTitle("");
				// todoApp.instance.todoCreationForm.Model.setDescription("");

				return false;
			});			
		};

		function init() {
			if (!model) { throw "model not supplied"; }
			
			that.Model = model;
			var view = _.extend(that, new invertebrate.View());
			$.subscribe(that.Model.updateEventUri, that.render);
			that.render();
			
			return view;
		}

		return init();
	};

	app.SearchFormView = SearchFormView;
	invertebrate.View.isExtendedBy(app.SearchFormView);
}(wizerati));
