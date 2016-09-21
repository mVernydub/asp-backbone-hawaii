define([
  'underscore',
  'backbone',
  'models/hotels'
], function (_, Backbone, HotelModel) {
    var HotelsCollection = Backbone.Collection.extend({
        model: HotelModel,
        url: '/Hotels/Search',
        initialize: function (models) {
            this.filtered = new Backbone.Collection(models);
            this.on('filter', this.filterBy);
            this.on('search', this.search);
            this.on("reset", this.refilter);
        },
        refilter: function () {
            this.filterBy(this.filtered.filterSetup);
        },
        filterBy: function (filter) {
            var filteredArr = this.filter(function (model) {
                if (filter) {
                    if (filter.roomsCount && model.get('RoomsCount') != filter.roomsCount) return false;
                    if (filter.priceMin && model.get('Price') < filter.priceMin) return false;
                    if (filter.priceMax && model.get('Price') > filter.priceMax) return false;
                }
                return true;
            });
            this.filtered.reset(filteredArr);
            this.filtered.filterSetup = filter;
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