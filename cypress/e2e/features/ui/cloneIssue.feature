@clone-issue @run-all
Feature: Clone issue funcionality

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data
    
    @smoke
    Scenario: The user clones the first issue listed on the dashboard
    And Clicks the first reported issue on the dashboard
    And The user is in the issue details of the reported issue
    And Saves the data of the displayed issue
    When Clicks the Clone button
    And Saves the copied data to clone
    And Check if all the issue data has been copied to the new issue to be created
    And Submits the issue clicking the Submit issue button
    Then The cloned issue contains the same information as the previous one

    @smoke
    Scenario: The user clones the last issue listed on the dashboard
    And Clicks the last reported issue on the dashboard
    And The user is in the issue details of the reported issue
    And Saves the data of the displayed issue
    When Clicks the Clone button
    And Saves the copied data to clone
    And Check if all the issue data has been copied to the new issue to be created
    And Submits the issue clicking the Submit issue button
    Then The cloned issue contains the same information as the previous one