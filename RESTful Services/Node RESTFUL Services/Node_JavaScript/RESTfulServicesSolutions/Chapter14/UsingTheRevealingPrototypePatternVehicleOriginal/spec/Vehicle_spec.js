var Vehicle = require('../Vehicle');

describe("Vehicle", function () {
    // startStop is a composite method
    it("starts & stops", function () {
        var testVehicle = new Vehicle(4, 'Ford', 'Anglia');
        testVehicle.startStop();
        expect(testVehicle.startStop).toBeTruthy();
    });
    // stop is a private method
    it("cannot stop", function () {
        var testVehicle = new Vehicle(4, 'Ford', 'Anglia');
        expect(() => {
            testVehicle.stop();
        }).toThrow();
        expect(testVehicle.stop).toBeFalsy();
    });
    // pressBrakePedal is a public method (alias of stop)
    it("can pressBrakePedal", function () {
        var testVehicle = new Vehicle(4, 'Ford', 'Anglia');
        testVehicle.pressBrakePedal();
        expect(testVehicle.pressBrakePedal).toBeTruthy();
    });
});
