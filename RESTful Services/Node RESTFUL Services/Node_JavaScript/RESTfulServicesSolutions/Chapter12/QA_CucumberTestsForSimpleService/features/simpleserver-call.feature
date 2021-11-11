#Search.feature
Feature: Accessing SimpleService Server
    As Software Engineer,I should be to access SimpleService
    and retrieve all contacts,
    so that I contact every person

    Scenario: Getting contacts from SimpleService
        Given I can connect to the service
        When I make a request for all "contacts"
        Then I should receive "2" contacts

    Scenario: Getting single contact from SimpleService
        Given I can connect to the service
        When I make a request for "Smith"
        Then I should receive the info for "Joe"

    Scenario: Getting status 404 when contact does not exist
        Given I can connect to the service
        When I make a bad request for "Washington"
        Then I should receive the status "404"