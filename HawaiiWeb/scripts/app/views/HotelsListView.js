define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/hotelList.html',
    'collections/hotels',
    'views/HotelDetailedView'
], function ($, _, Backbone, templateHtml, HotelsCollection, HotelDetailedView) {
    var HotelsListView = Backbone.View.extend({
        el: $('#hotelsList'),
        initialize: function () {
            this.listenTo(this.collection, "reset", this.redraw);
        },
        events:{
            'click .btn-hotel-details':'showDetailedInfo'
        },
        render: function () {    
            this.redraw();
            //this.initialize();
            return this;
        },
        redraw: function () {
            var template = _.template(templateHtml)({ model: this.collection.toJSON() });
            this.$el.html(template);
        },
        showDetailedInfo: function (e) {
            var id = $(e.target).attr('data-id');
            var hotelSelected = this.collection.find(function (item) {
                return item.id == id;
            });//get(id) and where(attr) don`t work.. investigate it later

          //  if (this.DetailedView) this.DetailedView.remove();
            this.DetailedView = new HotelDetailedView({ model: hotelSelected });
            this.DetailedView.render();
        }
    });
    return HotelsListView;
});