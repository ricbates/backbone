
var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

var VehicleView = Backbone.View.extend({

    render: function() {
        //underscore template
        var template = _.template($("#vehicleTemplate").html());
        var html = template(this.model.toJSON()); // underscore does not understand backbone, needs to be passed JSON
        this.$el.html(html);

        return this;
    }
});

var vehicles = new Vehicles([
    new Vehicle({id: 1, vType: "Ford F-150", color: "Red", year: "1998", miles: 99000}),
    new Vehicle({id: 2, vType: "Chevrolet Cobalt", color: "Blue", year: "2013", miles: 39000}),
    new Vehicle({id: 3, vType: "Chrystler Cordova", color: "Gold", year: "1968", miles: 299000}),
    new Vehicle({id: 4, vType: "Chevy Chevette", color: "Yellow", year: "1972", miles: 399000})
]);

var vehicleView = new VehicleView({ el: "#vehicles", model: vehicles });
vehicleView.render();