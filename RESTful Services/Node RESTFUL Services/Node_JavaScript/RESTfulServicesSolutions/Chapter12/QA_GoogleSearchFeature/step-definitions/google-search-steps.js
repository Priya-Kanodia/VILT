const expect = require('chai').expect;
const internetAvailable = require("internet-available");

module.exports = function () {

    this.Given(/^I have internet available$/, () => {
        internetAvailable().then(function(){
            console.log("Internet available");
            return Promise.resolve();
        }).catch(function(){
            console.log("No internet");
            return Promise.reject(false);
        });
        
    });

    this.When(/^I search Google for "([^"]*)"$/, (text) => {
        return helpers.loadPage('https://google.com')
            .then(() => {
                return page.googleSearch.performSearch(text)
            })
    });

    this.Then(/^I should see "([^"]*)" in the result$/, (keywords) => {
        return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
    });

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Scenario 2 starts here -----------------

    this.When(/^I enter "([^"]*)" in input$/, (expression) => {

        return helpers.loadPage('https://google.com').then(e => {
            return page.googleSearch.performSearch(expression)
        })
    });

    this.Then(/^I get "(\d+)*" in the result$/, (res) => {

        return driver.wait(until.elementsLocated(by.id('cwos')), 10000)
            .then(() => {
                driver.findElement(by.id('cwos')).getText()
                    .then(t => {
                        try {
                            expect(t).to.be.eql(res)
                        } catch (e) { return Promise.reject(false) }
                    })
            })
    });
};