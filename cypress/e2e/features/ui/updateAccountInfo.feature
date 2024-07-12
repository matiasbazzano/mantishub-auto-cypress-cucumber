@update-account-info @run-all
Feature: Update the account data functionality

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data
    And The user is in the dashboard panel
    And The user opens the account option menu in the header
    And Selects My Account option
    And The user is in My account panel

    @smoke
    Scenario: The user updates the real name of the account
    When Enters "Matias Test" in the Real Name field
    And Clicks the Update User button
    And The user is redirected to the My Account panel
    Then The Real Name is updated correctly containing "Matias Test"

    @smoke
    Scenario: The user updates the email of the account
    When Enters "example@gmail.com" in the E-mail field
    And Clicks the Update User button
    And The user is redirected to the My Account panel
    Then The Email is updated correctly containing "example@gmail.com"

    @regression
    Scenario: The user tries to change the password, entering the current password incorrectly
    When Enters "incorrectPass123" in the Current Password field
    And Enters "test123" in the New Password field
    And Enters "test123" in the Confirm Password field
    And Clicks the Update User button
    Then The Current password is incorrect message is displayed

    @regression
    Scenario: The user tries to change the password by entering a different password in the Confirm Password field
    When Enters "test123" in the Current Password field
    And Enters "test123" in the New Password field
    And Enters "test1234" in the Confirm Password field
    And Clicks the Update User button
    Then The Password does not match verification message is displayed
