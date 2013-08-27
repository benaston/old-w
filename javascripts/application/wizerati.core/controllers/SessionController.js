"use strict";

(function (app) {
    function SessionController() {

        if (!(this instanceof app.SessionController)) {
            return new app.SessionController();
        }

        var that = this;

        this.create = function(model){
          //normal stuff
           console.log('starting session...')
        };

        function init() {

            return that;
        }

        return init();
    };

    app.SessionController = SessionController;

}(wizerati));
