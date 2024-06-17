import HeaderActions from "../../e2e/actions/headerActions";
import MyAccountActions from "../../e2e/actions/myAccountActions";
import Actions from "../../e2e/actions/actions";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

  When("The user opens the account option menu in the header", () => {
    HeaderActions.openAccountOptionMenu();
  });

  When("Selects My Account option", () => {
    HeaderActions.selectMyAccountOptionOfAccountOptionMenu();
  });

  When("The user is in My account panel", () => {
    Actions.verifyMyAccountUrl();
  });

  When("Enters {string} in the Real Name field", (realNameText) => {
    MyAccountActions.enterNewRealNameInRealNameInput(realNameText);
  });

  When("Clicks the Update User button", () => {
    MyAccountActions.clickUpdateUserButton();
  });

  When("The user is redirected to the My Account panel", () => {
    MyAccountActions.redirectToMyAccountPanel();
  });

  Then("The Real Name is updated correctly containing {string}", (realNameTextToVerify) => {
    MyAccountActions.verifyRealNameInRealNameInput(realNameTextToVerify);
  });

  When("Enters {string} in the Current Password field", (currentPassword) => {
    MyAccountActions.enterCurrentPasswordInCurrentPasswordInput(currentPassword);
  });

  When("Enters {string} in the New Password field", (newPassword) => {
    MyAccountActions.enterNewPasswordInNewPasswordInput(newPassword);
  });

  When("Enters {string} in the Confirm Password field", (confirmPassword) => {
    MyAccountActions.enterConfirmPasswordInConfirmPasswordInput(confirmPassword);
  });

  Then("The Current password is incorrect message is displayed", () => {
    MyAccountActions.currentPasswordIsIncorrectAlertIsDisplayed();
  });

  Then("The Password does not match verification message is displayed", () => {
    MyAccountActions.passwordDoesNotMatchVerificationAlertIsDisplayed();
  });

  When("Enters {string} in the E-mail field", (email) => {
    MyAccountActions.enterEmailInEmailInput(email);
  });

  Then("The Email is updated correctly containing {string}", (emailToVerify) => {
    MyAccountActions.verifyEmailInEmailInput(emailToVerify);
  });