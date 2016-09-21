define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/search.html',
    'views/HotelsListView',
    'collections/hotels'
], function ($, _, Backbone, templateHtml,  HotelsListView, HotelsCollection) {
    var SearchView = Backbone.View.extend({
        el: $('#searchContainer'),
        initialize: function () {
           
            //where is best place to put it???
            this.searchCollection = new HotelsCollection();
            this.hotelsListView = new HotelsListView({ collection: this.searchCollection.filtered });
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
            this.searchCollection.trigger('search', {
                keyWord: keyWord,
                filters: this.collectFilters()
            });
        },
        filter: function (args) {
            this.searchCollection.trigger('filter', this.collectFilters());
        }
    });
    return SearchView;
});