import DeepUrl from "../../data/deepUrl";
import MyAccountPage from "../../support/pageObject/myAccount.page";
import RandomData from "../../data/randomData"

const MyAccountActions = {
    enterNewRealNameInRealNameInput(realNameText) {
        MyAccountPage.realNameInput.clear();
        MyAccountPage.realNameInput.type(realNameText);
    },

    clickUpdateUserButton() {
        MyAccountPage.updateUserButton.click();
    },

    redirectToMyAccountPanel() {
        cy.visit(DeepUrl.myAccount);
    },

    verifyRealNameInRealNameInput(realNameTextToVerify) {
        MyAccountPage.realNameInput.should('have.value', realNameTextToVerify);
    },

    enterCurrentPasswordInCurrentPasswordInput(currentPassword) {
        MyAccountPage.currentPasswordInput.type(currentPassword);
    },

    enterNewPasswordInNewPasswordInput(newPassword) {
        MyAccountPage.newPasswordInput.type(newPassword);
    },

    enterConfirmPasswordInConfirmPasswordInput(confirmPassword) {
        MyAccountPage.confirmPasswordInput.type(confirmPassword);
    },

    currentPasswordIsIncorrectAlertIsDisplayed() {
        MyAccountPage.currentPasswordIsIncorrectAlert.should("be.visible");
    },

    passwordDoesNotMatchVerificationAlertIsDisplayed() {
        MyAccountPage.passwordDoesNotMatchVerificationAlert.should("be.visible");
    },

    enterEmailInEmailInput(email) {
        MyAccountPage.emailInput.clear();
        MyAccountPage.emailInput.type(`${RandomData.randomValue}+${email}`);
    },

    verifyEmailInEmailInput(emailToVerify) {
        MyAccountPage.emailInput.invoke('val').should('include', emailToVerify);
    }
};

export default MyAccountActions;
