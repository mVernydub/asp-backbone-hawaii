define([
  'underscore',
  'backbone',
  'models/hotels',
  'models/filterSettings'
], function (_, Backbone, HotelModel,FilterSettingsModel) {
    var FilteredCollection = Backbone.Collection.extend({
        initialize:function(){
            this.filterSettings = new FilterSettingsModel();//store here filter settings that main collection filtered with
        },
        model: HotelModel
    });
    return FilteredCollection;
});