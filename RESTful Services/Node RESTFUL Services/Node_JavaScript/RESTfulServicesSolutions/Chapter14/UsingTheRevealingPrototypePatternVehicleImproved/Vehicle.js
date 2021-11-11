/*
 * This is a more private version than shown in the slides. Here, go and stop are completely private.
 * Because they are private, they need to get access to this by having it bound to them using apply.
 */
var Vehicle = function (wheels, maker, make) {
    this.numWheels = wheels;
    this.manufacturer = maker;
    this.make = make;
};

Vehicle.prototype = function () {
    var go = function () {
        console.log(this.make + " is going");
    };
    var stop = function () {
        console.log(this.make + " is stopping");
    };
    return {
        startStop: function () {
            go.apply(this);
            stop.apply(this);
        }
    }
}();

module.exports = Vehicle;
