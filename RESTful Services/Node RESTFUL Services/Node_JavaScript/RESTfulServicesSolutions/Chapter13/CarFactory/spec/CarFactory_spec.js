var CarFactory = require('../CarFactory');

describe("CarFactory", function () {
    it("creates VW Beetle", function () {
        var factory = new CarFactory();
        var beetle = factory.make('VwBeetle');
        expect(beetle.drive()).toBe('The Love Bug is running.');
        expect(beetle.doors).toBe(2);
        expect(beetle.seats).toBe(5);
    });
    it("creates Jeep Cherokee", function () {
        var factory = new CarFactory();
        var cherokee = factory.make('JeepCherokee');
        expect(cherokee.drive()).toBe('Jeep Cherokee is running.');
        expect(cherokee.doors).toBe(4);
        expect(cherokee.seats).toBe(5);
    });
    it("creates Tesla Model S", function () {
        var factory = new CarFactory();
        var tesla = factory.make('TeslaModelS');
        expect(tesla.drive()).toBe('Tesla Model S is running.');
        expect(tesla.doors).toBe(5);
        expect(tesla.seats).toBe(5);
    });
    it("fails to create unknown car", function () {
        var factory = new CarFactory();
        expect( () => {
            var ferrari = factory.make('Ferrari612Scaglietti');
        }).toThrow();
    });
});
