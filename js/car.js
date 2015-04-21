var x = 0, Vehicle = Backbone.Model.extend({

    urlRoot: "/api/vehicles",
    vehicleId: x,
    registrationNumber: null,
    color: null,
    url: function() {
        return 'api/vehicles';
    },
    defaults: {
        vehicleId: x
    },
    start: function () {
        console.log("Vehicle Started...");
    },
    validate: function (attrs) {
        if (!attrs.registrationNumber)
            return "registrationNumber is required.";
    },
});

var Car = Vehicle.extend({
    start: function () {
        console.log("Car with registration number " + this.attributes.registrationNumber + " Started...");
    },
});
var car = new Car({"registrationNumber": "XLI887" , color: "Blue"});

car.start();

car.unset("registrationNumber");

var lastError = car.validationError;
console.log("After unset... " + lastError);

var car = new Car();
car.set("registrationNumber", "XLI887" );
car.save();

car.isValid();

var lastError = car.validationError;

console.log(lastError);

car.start();
    


