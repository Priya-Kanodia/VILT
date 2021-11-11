var Fibonacci = require('../Fibonacci');

describe("Fibonacci", function () {
    var sequence = Fibonacci();

    it("produces fibonacci series", function () {
        expect(sequence.next().value).toBe(1);
        expect(sequence.next().value).toBe(1);
        expect(sequence.next().value).toBe(2);
        expect(sequence.next().value).toBe(3);
        expect(sequence.next().value).toBe(5);
    });
    it("resets", function () {
        sequence.next();
        expect(sequence.next(true).value).toBe(1);
        expect(sequence.next().value).toBe(1);
        expect(sequence.next().value).toBe(2);
    });
});
