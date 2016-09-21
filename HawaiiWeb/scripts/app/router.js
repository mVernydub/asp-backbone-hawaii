define([
    'underscore',
    'backbone',
    'views/SearchView'
], function (_, Backbone, SearchView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '*path':'defaultRoute'
        },
        defaultRoute: function () {
            var searchView = new SearchView({});
            searchView.render();
          }
    });
    var initialize = function () {
        var router = new AppRouter();
        Backbone.history.start();
    }
    return {
        initialize: initialize
    };
});