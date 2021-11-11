var Counter = require('../Counter');

describe("Counter", function () {
    var count = new Counter();

    it("starts at 0", function () {
        count.reset();
        expect(count.value()).toBe(0);
    });
    it("increments", function () {
        count.reset();
        count.increment();
        expect(count.value()).toBe(1);
        count.increment();
        expect(count.value()).toBe(2);
    });
    it("decrements", function () {
        count.reset();
        count.decrement();
        expect(count.value()).toBe(-1);
        count.decrement();
        expect(count.value()).toBe(-2);
    });
    it("modify is private", function () {
        expect(count.modify).toBeFalsy();
    });
});
