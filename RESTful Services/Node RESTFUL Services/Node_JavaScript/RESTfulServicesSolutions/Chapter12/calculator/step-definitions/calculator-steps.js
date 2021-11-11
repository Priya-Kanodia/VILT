const { Before, Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const Calculator = require("../calculator");

let calc;
let result;

Given('I have a calculator', function () {
    calc = new Calculator();
});

// When('I add 2 and 3', function () {
//     result = calc.add(2, 3);
// });

// Then('the result should be 5', function () {
//     expect(result).to.equal(5);
// });

When('I add {int} and {int}', function (x, y) {
    result = calc.add(x, y);
});

Then('the result should be {int}', function (total) {
    expect(result).to.equal(total);
});
