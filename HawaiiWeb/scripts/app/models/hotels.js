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
            RoomsCount: ''
        }
        ,idAttribute:'Id'
    });

    return HotelModel;
});