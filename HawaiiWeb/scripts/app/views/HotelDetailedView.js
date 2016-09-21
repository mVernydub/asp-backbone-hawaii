define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/hotelDetailed.html'
], function ($, _, Backbone, templateHtml) {
    var HotelDetailedView = Backbone.View.extend({
        el: $('#detailedInfo'),
        render: function () {
            var template = _.template(templateHtml)({ model: this.model.toJSON() });
            this.$el.html(template);
            return this;
        }
    });
    return HotelDetailedView;
});