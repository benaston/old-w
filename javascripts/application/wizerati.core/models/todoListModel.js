(function (app) {
	"use strict";

	function TodoListModel() {
		if (!(this instanceof app.TodoListModel)) {
			return new app.TodoListModel();
		}

		var that = this;

		this.updateEventUri = "update://todoList/";
		this.deleteEventUri = "delete://todoList/";
		that.resourceName = "todoList";
		this.todos = [];

		this.getTodo = function (id) {
			return _.filter(that.todos, function (i) { return i.id === id; })[0];
		};

		this.addTodo = function (todo, options) {
			if (!todo) { throw "todo not supplied"; }
			options = options || { silent: false };

			that.todos.unshift(todo);
			if (options.silent === true) { return; }

			$.publish(that.updateEventUri);
		};

		this.removeTodo = function (id, options) {
			if (!id) { throw "id not supplied"; }
			options = options || { silent: false };

			that.todos = _.filter(that.todos, function (i) { return i.id !== id; });
			if (options.silent === true) { return; }

			$.publish(that.deleteEventUri);
		};

		this.changeTodoPriority = function (id, delta, options) {
			if (!id) { throw "id not supplied"; }
			if (!delta) { throw "delta not supplied"; }
			options = options || { silent: false };

			var todo = _.filter(that.todos, function (i) { return i.id === id; })[0],
				sourceIndex = _.indexOf(that.todos, todo),
				targetIndex = sourceIndex - delta;

			if (targetIndex < that.todos.length) {
				that.todos.move(sourceIndex, sourceIndex - delta);
			}

			if (options && options.silent === true) { return; }

			$.publish(that.updateEventUri);
		};

		function init() {
			return _.extend(that, new invertebrate.Model());
		}

		return init();
	}

	app.TodoListModel = TodoListModel;
	invertebrate.Model.isExtendedBy(app.TodoListModel);
}(todoApp));