"use strict";

(function (app) {

	function LoginPanelView(model) {

		if (!(this instanceof app.LoginPanelView)) {
			return new app.LoginPanelView(model);
		}

		var that = this, 
			_el = "#log-in-panel",
            _cancelButtonEl = ".btn-cancel",
            _successButtonEl = ".log-in .btn-success",
            _uiModeEnum = wizerati.mod("enum").UIMode;

		this.$el = $(_el);
		this.$cancelButton = $(_el).find(_cancelButtonEl);
        this.$successButton = $(_el).find(_successButtonEl);
		this.Model = null;
	
		this.render = function (e, options) {
			options = options || { done: that.postRender };

		};
	
		this.postRender = function () {
		};

		this.bindEvents = function () {
		    that.$cancelButton.live('click', function () {
               cancel();
            });

            that.$successButton.live('click', function(){
                app.instance.router.route('/session/create', { $parentDomNode: that.$el });
            });

            $(document).keyup(function(e) {
                if (e.keyCode === 27 && app.instance.uiRoot.Model.getUIMode() === _uiModeEnum.LogIn) {
                    cancel();
                }
            });


//			done($el);
		};

        function cancel() {
            var  prevMode = app.instance.uiRoot.Model.getPreviousUIMode();
            app.instance.uiRoot.Model.setUIMode(prevMode);
        }

		function init() {
            that.bindEvents();
//			if (!model) { throw "model not supplied"; }
//
//			that.Model = model;
			
			return that;
		}

		return init();
	};

	app.LoginPanelView = LoginPanelView;
	invertebrate.View.isExtendedBy(app.LoginPanelView);
}(wizerati));
