var Counter = require('../CounterReallyPrivateWeakMap');

describe("Counter", function () {
    var count;

    beforeEach(function() {
        count = new Counter();
    });

    it("starts at 0", function () {
        expect(count.value()).toBe(0);
    });
    it("increments", function () {
        count.increment();
        expect(count.value()).toBe(1);
        count.increment();
        expect(count.value()).toBe(2);
    });
    it("decrements", function () {
        count.decrement();
        expect(count.value()).toBe(-1);
        count.decrement();
        expect(count.value()).toBe(-2);
    });
    it("supports different instances", function () {
        var count2 = new Counter();
        count.decrement();
        count2.increment();
        expect(count.value()).toBe(-1);
        expect(count2.value()).toBe(1);
        count.decrement();
        count2.increment();
        expect(count.value()).toBe(-2);
        expect(count2.value()).toBe(2);
    });
    it("modify is private", function () {
        expect(count.modify).toBeFalsy();
    });
});
