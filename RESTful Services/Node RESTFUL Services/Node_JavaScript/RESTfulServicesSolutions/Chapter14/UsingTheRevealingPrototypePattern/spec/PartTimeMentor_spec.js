var PartTimeMentor = require('../PartTimeMentor');

describe("PartTimeMentor", function () {
    it("calculates monthly salary 1", function () {
        var ptm = new PartTimeMentor(1, 'Douglas', 'Adams', 2, 10);
        expect(ptm.calculateWeeklyPay()).toBe(20);
    });
    it("calculates monthly salary 2", function () {
        var ptm = new PartTimeMentor(1, 'Douglas', 'Adams', 3, 20);
        expect(ptm.calculateWeeklyPay()).toBe(60);
    });
    it("calculate is hidden", function () {
        var ptm = new PartTimeMentor(1, 'Douglas', 'Adams', 3, 20);
        expect(ptm.calculate).toBeFalsy();
    });
});
