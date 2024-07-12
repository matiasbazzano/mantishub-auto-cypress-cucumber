@login-by-api @run-all
Feature: Login functionality by API

    @smoke
    Scenario: Log in using valid credentials by API
    And The user logs in by API using valid credentials
    Then The user is in the dashboard panel

    @regression
    Scenario: Log in using invalid credentials by API
    And The user logs in by API using invalid credentials
    Then The user is in the login panel