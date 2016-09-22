define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/hotelList.html',
    'views/HotelDetailedView'
], function ($, _, Backbone, templateHtml, HotelDetailedView) {
    var HotelsListView = Backbone.View.extend({
        el: $('#hotelsList'),
        initialize: function () {
            this.listenTo(this.collection, "reset", this.render);
        },
        render: function () {
            var template = _.template(templateHtml)({ model: this.collection.toJSON() });
            this.$el.html(template);
            return this;
        },
        events:{
            'click .btn-hotel-details':'showDetailedInfo'
        },       
        showDetailedInfo: function (e) {
            var id = $(e.target).attr('data-id');
            var hotelSelected = this.collection.get(id);
            this.DetailedView = new HotelDetailedView({ model: hotelSelected });
            this.DetailedView.render();
        }
    });
    return HotelsListView;
});