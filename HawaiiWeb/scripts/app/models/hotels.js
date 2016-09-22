define([
  'underscore',
  'backbone'
], function (_, Backbone) {
    var HotelModel = Backbone.Model.extend({
        defaults: {
            Id:'',
            Name: 'Default hotel',
            Price: 0,
            Stars: 0,
            ShortDescription: '',
            Description: '',
            ImgUrl: '',
            RoomsCount: 0
        }
        ,idAttribute:'Id'
    });

    return HotelModel;
});