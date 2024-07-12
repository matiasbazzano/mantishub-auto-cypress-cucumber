@report-issue @run-all
Feature: Report issue functionality

    Background:
    Given The user is redirected to the login panel
    And The user logs in with valid data
    And The user clicks the report issue button in the header

    @smoke
    Scenario: The user reports a public issue without attaching images
    And Selects "block" in the severity dropdown
    And Selects "none" in the priority dropdown
    And Selects "administrator" in the assign to dropdown
    And Enters "Summary test - public" in the summary text field
    And Enters "Description test - public" in the description text area
    And Marks the issue as public
    When Submits the issue clicking the Submit issue button
    Then The public issue is created correctly

    @smoke
    Scenario: The user reports a private issue without attaching images
    And Selects "block" in the severity dropdown
    And Selects "none" in the priority dropdown
    And Selects "administrator" in the assign to dropdown
    And Enters "Summary test - private" in the summary text field
    And Enters "Description test - private" in the description text area
    And Marks the issue as private
    When Submits the issue clicking the Submit issue button
    Then The private issue is created correctly

    @regression
    Scenario: The user reports a public issue attaching images
    And Selects "block" in the severity dropdown
    And Selects "none" in the priority dropdown
    And Selects "administrator" in the assign to dropdown
    And Enters "Summary test - public with image" in the summary text field
    And Enters "Description test - public with image" in the description text area
    And Uploads an image
    And The image is attached correctly
    And Marks the issue as public
    When Submits the issue clicking the Submit issue button
    Then The public issue with image is created correctly
    And The image is uploaded correctly

    @regression
    Scenario: The user reports a private issue attaching images
    And Selects "block" in the severity dropdown
    And Selects "none" in the priority dropdown
    And Selects "administrator" in the assign to dropdown
    And Enters "Summary test - private with image" in the summary text field
    And Enters "Description test - private with image" in the description text area
    And Uploads an image
    And The image is attached correctly
    And Marks the issue as private
    When Submits the issue clicking the Submit issue button
    Then The private issue with image is created correctly
    And The image is uploaded correctly