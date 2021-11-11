// parent constructor
var Car = function(seats, doors, description) {
    this.seats = seats;
    this.doors = doors;
    this.description = description;
}

// Functions return strings rather than printing to console because this is easier to test
Car.prototype = function() {
    var start = function() {
        return this.description + " is starting.";
    }
    var drive = function() {
        return this.description + " is running.";
    }
    var stop = function() {
        return this.description + " is stopping.";
    }

    return {
        start: start,
        drive: drive,
        stop: stop
    }
}();

module.exports = Car;
