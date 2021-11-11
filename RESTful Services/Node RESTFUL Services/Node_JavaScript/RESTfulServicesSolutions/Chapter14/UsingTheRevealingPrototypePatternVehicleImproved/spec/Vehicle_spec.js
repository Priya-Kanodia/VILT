var Vehicle = require('../Vehicle');

describe("Vehicle", function () {
    it("starts & stops", function () {
        var testVehicle = new Vehicle(4, 'Ford', 'Anglia');
        testVehicle.startStop();
        expect(testVehicle.startStop).toBeTruthy();
    });
    it("cannot go", function () {
        var testVehicle = new Vehicle(4, 'Ford', 'Anglia');
        expect(() => {
            testVehicle.go();
        }).toThrow();
        expect(testVehicle.go).toBeFalsy();
    });
});
