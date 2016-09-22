define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/search.html',
    'views/HotelsListView'
], function ($, _, Backbone, templateHtml, HotelsListView) {
    var SearchView = Backbone.View.extend({
        el: $('#searchContainer'),
        initialize: function () {
            this.hotelsListView = new HotelsListView({ collection: this.collection.filtered });
            this.hotelsListView.render();
        },
        render: function () {
            var template = _.template(templateHtml);
            this.$el.html(template);
            return this;
        },
        events: {
            'keyup #searchInput': 'searchTextChanged',
            'change .search-filter': 'filter'
        },
        collectFilters: function () {
            return {
                roomsCount: $('#filterByRoom').val(),
                priceMin: $('#filterByPriceMin').val(),
                priceMax: $('#filterByPriceMax').val()
            };
        },
        searchTextChanged: function (args) {
            var keyWord = $('#searchInput').val().trim();
            //if (keyWord.length > 2) keyWord = '';
            this.collection.trigger('search', { keyWord: keyWord });
        },
        filter: function (args) {
            this.collection.trigger('filter', this.collectFilters());
        }
    });
    return SearchView;
});