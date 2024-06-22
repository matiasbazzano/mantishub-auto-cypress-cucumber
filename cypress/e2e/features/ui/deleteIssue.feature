@delete-issue @run-all
Feature: Delete issue funcionality

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data

    @smoke
    Scenario: The user deletes the first issue listed on the dashboard
    And Clicks the first reported issue on the dashboard
    And The user is in the issue details of the reported issue
    When Clicks the Delete button
    And Save the issue number
    And Confirms deleting the issue by clicking on the Delete Issues button
    Then The user is in the list of all issues
    And The deleted issue is not displayed in the list

    @smoke
    Scenario: The user deletes the last issue listed on the dashboard
    And Clicks the last reported issue on the dashboard
    And The user is in the issue details of the reported issue
    When Clicks the Delete button
    And Save the issue number
    And Confirms deleting the issue by clicking on the Delete Issues button
    Then The user is in the list of all issues
    And The deleted issue is not displayed in the list
