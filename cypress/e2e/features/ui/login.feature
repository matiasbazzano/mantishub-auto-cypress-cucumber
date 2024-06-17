@login @run-all
Feature: Login funcionality

    Background:
    Given The user is redirected to the login panel

    @smoke
    Scenario: The user logs in using valid credentials
    When The user logs in with valid data
    Then The user is in the dashboard panel

    @regression
    Scenario: The user tries to log in using an invalid password
    When The user logs in using invalid password
    Then The incorrect credentials message is displayed

    @regression
    Scenario: The user tries to log in using an invalid email
    When The user logs in using invalid email
    Then The incorrect credentials message is displayed

    @regression
    Scenario: The user tries to log in using an invalid credentials
    When The user logs in using invalid email and invalid password
    Then The incorrect credentials message is displayed

    @regression
    Scenario: The user tries to log in leaving the email field empty
    When The user logs in leaving the email field empty
    Then The incorrect credentials message is displayed

    @regression
    Scenario: The user tries to log in leaving the password field empty
    When The user logs in leaving the email field empty
    Then The incorrect credentials message is displayed