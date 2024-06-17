import LoginActions from '../../e2e/actions/loginActions.js';
import Actions from '../../e2e/actions/actions.js';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

  Given("The user is redirected to the login panel", () => {
    LoginActions.redirectToLoginPanel();
  });

  When("The user logs in with valid data", () => {
    LoginActions.login();
  });

  When("The user logs in using invalid password", () => {
    LoginActions.invalidLoginPass();
  });

  When("The user logs in using invalid email", () => {
    LoginActions.invalidLoginEmail();
  });

  When("The user logs in leaving the email field empty", () => {
    LoginActions.invalidLoginEmailFieldEmpty();
  });

  When("The user logs in leaving the password field empty", () => {
    LoginActions.invalidLoginPasswordFieldEmpty();
  });

  When("The user logs in using invalid email and invalid password", () => {
    LoginActions.invalidLoginCredentials();
  });

  Then("The incorrect credentials message is displayed", () => {
    LoginActions.incorrectCredentialsMessageIsDisplayed();
  });

  Then("The user is in the dashboard panel", () => {
    Actions.verifyDashboardUrl();
  });

  Then("The user is in the login panel", () => {
    Actions.verifyLoginUrl();
  });

  When("The user logs in by API using valid credentials", () => {
    Actions.loginByApiWithValidCredentials();
  });

  When("The user logs in by API using invalid credentials", () => {
    Actions.loginByApiWithInvalidCredentials();
  });