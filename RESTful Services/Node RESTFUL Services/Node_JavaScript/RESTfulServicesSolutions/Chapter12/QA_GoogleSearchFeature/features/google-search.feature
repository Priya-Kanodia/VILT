#Search.feature
Feature: Google Search Testing
    As a browser user,I should be able to go to a website
    and verify its search functionality, 
    so that I can trust its functionality   

    Scenario: Google search for CEO of Fidelity 
        Given I have internet available
        When I search Google for "CEO of Fidelity Investments"
        Then I should see "Abigail Johnson" in the result
        
    Scenario: I evaluate search for product of 7*6  
        When I enter "7*6" in input
        Then I get "42" in the result