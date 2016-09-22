define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    var FilterSettingsModel = Backbone.Model.extend({
        defaults: {
            priceMin: '',
            priceMax: '',
            roomsCount: ''
        }
    });
    return FilterSettingsModel;
});