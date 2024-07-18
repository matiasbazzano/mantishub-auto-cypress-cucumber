@view-all-issues @run-all
Feature: View all issues options

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data
    And The user clicks the View Issues button in the left sidebar

    @smoke
    Scenario: The user prints a report of the logged issues in the project
    When Clicks the Print Reports button
    Then The user is in the print all bug page

    @smoke
    Scenario: The user checks the summary of the project
    When Clicks the Summary button
    Then The user is the project summary page

    @smoke
    Scenario: The user downloads the CSV report
    When Clicks the CSV Export button
    Then The ".csv" file is downloaded
    And The "downloads" folder is cleaned

    @smoke
    Scenario: The user downloads the Excel export file
    When Clicks the Excel Export button
    Then The ".xml" file is downloaded
    And The "downloads" folder is cleaned