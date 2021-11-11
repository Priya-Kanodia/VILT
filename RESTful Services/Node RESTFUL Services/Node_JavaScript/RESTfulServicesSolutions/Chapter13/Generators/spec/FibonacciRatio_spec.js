var Fibonacci = require('../FibonacciRatio');

describe("Fibonacci Ratio", function () {
    var sequence = Fibonacci();

    it("produces fibonacci series", function () {
        expect(sequence.next().value).toBe(2);
        expect(sequence.next().value).toBe(1.5);
        expect(sequence.next().value).toBeCloseTo(1.667, 3);
        expect(sequence.next().value).toBe(1.6);
        expect(sequence.next().value).toBe(1.625);
    });
    it("resets", function () {
        sequence.next();
        expect(sequence.next(true).value).toBe(2);
        expect(sequence.next().value).toBe(1.5);
        expect(sequence.next().value).toBeCloseTo(1.667, 3);
    });
    it("tends towards golden ratio", function () {
        const phi = (1 + Math.sqrt(5.0)) / 2.0;
        sequence.next(true);
        for (let i = 0; i < 20; i++) {
            sequence.next();
        }
        expect(sequence.next().value).toBeCloseTo(phi, 8);
    });
});
