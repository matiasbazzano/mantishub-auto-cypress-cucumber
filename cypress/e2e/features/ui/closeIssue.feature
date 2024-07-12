@close-issue @run-all
Feature: Close issue functionality

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data
    And The user clicks the report issue button in the header
    And Enters "Issue to Close" in the summary text field
    And Enters "Issue to Close" in the description text area
    When Submits the issue clicking the Submit issue button
    And The user is redirected to the dashboard panel

    @smoke
    Scenario: The user closes the first issue listed on the dashboard
    And Clicks the first reported issue on the dashboard
    And The user is in the issue details of the reported issue
    When Clicks the Close button
    And Selects "no change required" in the resolution dropdown
    And Selects "administrator" in the assigned to dropdown
    And Writes "Test note" in the Add Note text area
    And Clicks the Close Issue button
    Then The user is in the issue details of the closed issue
    And The issue status label is "closed"
    And The resolution label is "no change required"
    And The issue contains the note "Test note"

    @regression
    Scenario: The user enters a non-numeric value in the Duplicate ID field
    And Clicks the first reported issue on the dashboard
    And The user is in the issue details of the reported issue
    When Clicks the Close button
    And Enters "Invalid ID" in the Duplicate ID field
    And Clicks the Close Issue button
    Then Invalid ID message is displayed