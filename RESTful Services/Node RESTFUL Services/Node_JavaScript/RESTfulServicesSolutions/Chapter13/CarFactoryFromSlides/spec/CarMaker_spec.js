var CarMaker = require('../CarMaker');

describe("CarMaker", function () {
    it("creates compact", function () {
        var corolla = CarMaker.factory('Compact');
        expect(corolla.drive()).toBe('Vroom, I have 4 doors');
    });
    it("compact does not have factory", function () {
        var corolla = CarMaker.factory('Compact');
        expect(corolla.factory).toBeFalsy();
    });
    it("creates convertible", function () {
        var solstice = CarMaker.factory('Convertible');
        expect(solstice.drive()).toBe('Vroom, I have 2 doors');
    });
    it("creates SUV", function () {
        var cherokee = CarMaker.factory('SUV');
        expect(cherokee.drive()).toBe('Vroom, I have 17 doors');
    });
});
