const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const request = require('sync-request');

let result;
let statusCode;

//-------------------------
// Scenario 1
// ------------------------

Given(/^I can connect to the service$/, () => {
    let res = request('GET', 'http://localhost:8081/');
    expect(res.statusCode).to.equal(200);

    // Given better be used for authentication or other configuration

});

When(/^I make a request for all "([^"]*)"$/, (text) => {

    let res = request('GET', 'http://localhost:8081/' + text);
    result = res.getBody();

})

Then(/^I should receive "([\d+])" contacts$/, (value) => {
    let resObject = JSON.parse(result);
    expect(resObject.result.length).to.equal(Number(value));
});

//-------------------------
// Scenario 2
// ------------------------

When(/^I make a request for "([^"]*)"$/, (name) => {

    let res = request('GET', 
        'http://localhost:8081/contacts?lastname=' + name);
    result = res.getBody();

})

Then(/^I should receive the info for "([^"]*)"$/, (value) => {
    let resObject = JSON.parse(result);
    expect(resObject.firstname).to.equal(value);
});

//-------------------------
// Scenario 3
// ------------------------

When(/^I make a bad request for "([^"]*)"$/, (name) => {

    let res = request('GET', 
        'http://localhost:8081/contacts?lastname=' + name);
    statusCode = res.statusCode;
    console.log('GOT IT ' + statusCode);

})

Then(/^I should receive the status "([^"]*)"$/, (value) => {
    expect(Number(value)).to.equal(statusCode);
});

