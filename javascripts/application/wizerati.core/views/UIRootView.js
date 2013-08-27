"use strict";

(function (app) {

	function UIRootView(model) {

		if (!(this instanceof app.UIRootView)) {
			return new app.UIRootView(model);
		}

        var that = this,
            _el = "body",
            _loginButtonEl = ".btn-log-in",
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _bodyClasses = [
                            { key: _uiModeEnum.GreenfieldSearch, value: "greenfield" },
                            { key: _uiModeEnum.LogIn, value: "log-in-mode" },
                            { key: _uiModeEnum.Purchase, value: "purchase" },
                            { key: _uiModeEnum.Search, value: "search" } ];


		this.$el = $(_el);
        this.$loginButton = $(_loginButtonEl);
		this.Model = null;
	
		this.render = function (e, options) {
			options = options || { done: that.postRender };

            var uiMode = that.Model.getUIMode();

            _.each(_bodyClasses, function(c){
                if(c.key !== uiMode){
                    that.$el.removeClass(c.value);
                }
            });

            that.$el.addClass(_.find(_bodyClasses, function(e){
                return e.key === uiMode;
            }).value);
		};
	
		this.postRender = function () {
		};

		this.bindEvents = function () {
			that.$loginButton.live('click', function () {
                that.Model.setUIMode(_uiModeEnum.LogIn);
			});
		};

		function init() {
			if (!model) { throw "model not supplied"; }
			
			that.Model = model;
            that._uiModeEnum = wizerati.mod("enum").UIMode;
            $.subscribe(that.Model.updateEventUri, that.render);
			that.bindEvents();

			return that;
		}

		return init();
	};

	app.UIRootView = UIRootView;
	invertebrate.View.isExtendedBy(app.UIRootView);
}(wizerati));
