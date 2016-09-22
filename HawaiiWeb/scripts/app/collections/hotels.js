define([
  'underscore',
  'backbone',
  'models/hotels',
  'collections/filtered',
], function (_, Backbone, HotelModel, FilteredCollection) {
    var HotelsCollection = Backbone.Collection.extend({
        model: HotelModel,
        url: '/Hotels/Search',
        initialize: function (models) {
            this.filtered = new FilteredCollection(models);//inner collection to store filtered(displayed) items
            this.on('filter', this.setFilter);
            this.on('search', this.search);
            this.on('reset', this.refilter);
            this.listenTo(this.filtered.filterSettings, 'change', this.refilter);
            return this;
        },
        refilter: function () {
            var filter = this.filtered.filterSettings.toJSON();
            var filteredArr = this.filter(function (model) {
                if (filter.roomsCount && model.get('RoomsCount') != filter.roomsCount) return false;
                if (filter.priceMin && model.get('Price') < filter.priceMin) return false;
                if (filter.priceMax && model.get('Price') > filter.priceMax) return false;
                return true;
            });
            this.filtered.reset(filteredArr);
        },
        setFilter: function (filter) {
            if (!filter) this.filtered.filterSettings.clear();
            this.filtered.filterSettings.set(filter);
        },
        search: function (args) {
            if (args.keyWord)
                this.fetch({ data: $.param({ keyWord: args.keyWord }), reset: true });
            else
                this.reset();
        }
    });
    return HotelsCollection;
});