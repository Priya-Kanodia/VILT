var Car = require('./Car');

var CarFactory = function() {
    this.VwBeetle = () => new Car(5, 2, 'The Love Bug');
    this.JeepCherokee = () => new Car(5, 4, 'Jeep Cherokee');
    this.TeslaModelS = () => new Car(5, 5, 'Tesla Model S');

    // the static factory method
    this.make = function(type) {
        var constr = type;

        // error if the constructor does not exists
        if (typeof this[constr] !== "function") {
            throw {
                name: "Error",
                message: constr + " doesn't exist"
            };
        }

        // create a new instance
        return this[constr]();
    };
};

module.exports = CarFactory;
