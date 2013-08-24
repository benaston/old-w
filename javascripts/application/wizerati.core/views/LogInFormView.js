"use strict";

(function (app) {

	function LogInFormView(model) {

		if (!(this instanceof app.LogInFormView)) {
			return new app.LogInFormView(model);
		}

		var that = this, 
			_el = "#login-panel",
			_roleEnum = wizerati.mod("enum").UserRole;

		this.$el = $(_el);
		this.Model = null;
		

	
		this.render = function (options) {
			options = options || { done: that.postRender };

			if(that.Model.getIsVisible()) {
				$('body').addClass('login');
			} else {
				$('body').removeClass('login');
			}

			options.done();
		};
	
		this.postRender = function () {
			var $contractorButton = that.$el.find("#btn-it-contractor");
			var $employerButton = that.$el.find("#btn-employer");

			$contractorButton.live('click', function (e) {

				app.mod('services').LogInService.logIn({ role: _roleEnum.ContractorStranger });
				return false;
			});

			$employerButton.live('click', function (e) { 
				app.mod('services').LogInService.logIn({ role: _roleEnum.EmployerStranger });
				return false;
			});

		};

		function init() {
			if (!model) { throw "model not supplied"; }
			
			that.Model = model;

			$.subscribe(that.Model.updateEventUri, that.render);

			that.render();
			
			return that;
		}

		return init();
	};

	app.LogInFormView = LogInFormView;
	invertebrate.View.isExtendedBy(app.LogInFormView);
}(wizerati));
