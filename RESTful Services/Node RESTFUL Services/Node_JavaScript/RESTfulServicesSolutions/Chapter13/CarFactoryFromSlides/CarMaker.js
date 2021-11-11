// parent constructor
function CarMaker() { };

// a method of the parent
CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + " doors";
};

CarMaker.Compact = function () {
    this.doors = 4;
};

CarMaker.Convertible = function () {
    this.doors = 2;
};

CarMaker.SUV = function () {
    this.doors = 17;
};

// the static factory method
CarMaker.factory = function (type) {
    var constr = type;
    var newcar;

    // error if the constructor does not exists
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exist"
        };
    }
    // at this point the constructor is known to exist
    // let's have it inherit the parent but only once
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }
    // create a new instance
    newcar = new CarMaker[constr]();
    // optionally call some methods and then return..... 
    return newcar;
};

module.exports = CarMaker;
