/*
 * This is the version of Vehicle from the slides
 */
var Vehicle = function (wheels, maker, make) {
    this.numWheels = wheels;
    this.manufacturer = maker;
    this.make = make;
    /*
     * Since startStop is defined in the constructor of the vehicle, the value of this is 
     * automatically bound in pressGasPedal and pressBrakePedal because they are also invoked
     * in the context of the vehicle.
     * 
     * The assignment of pressBrakePedal and pressGasPedal is just the assignment of a 
     * function reference and does not interefere with the value of this.
     */
    this.startStop = function () {
        this.pressGasPedal();
        this.pressBrakePedal();
    }
};

Vehicle.prototype = function () {
    var go = function () {
        console.log(this.make + " is going");
    };
    var stop = function () {
        console.log(this.make + " is stopping");
    };
    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }
}();

module.exports = Vehicle;
