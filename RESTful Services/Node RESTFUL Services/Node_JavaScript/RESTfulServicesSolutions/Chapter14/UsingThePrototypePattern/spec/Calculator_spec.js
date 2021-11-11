var Calc = require('../calc');

describe("Calculator", function () {
    var testCalc;

    beforeEach(function() {
        testCalc = new Calc(0);
    });

    it("adds 1 + 2", function () {
        testCalc.add(1, 2);
        expect(testCalc.sum).toBe(3);
    });
    it("subtracts 1 - 2", function () {
        testCalc.subtract(1, 2);
        expect(testCalc.sum).toBe(-1);
    });
    it("multiplies 2 * 3", function () {
        testCalc.multiply(2, 3);
        expect(testCalc.sum).toBe(6);
    });
    it("divides 4 / 2", function () {
        testCalc.divide(4, 2);
        expect(testCalc.sum).toBe(2);
    });
});
