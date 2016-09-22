define([
    'underscore',
    'backbone',
    'views/SearchView',
    'collections/hotels'
], function (_, Backbone, SearchView, HotelsCollection) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '*path':'defaultRoute'
        },
        defaultRoute: function () {
            var mainCollection = new HotelsCollection();
            var searchView = new SearchView({ collection: mainCollection });
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