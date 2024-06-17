import LoginData from '../../data/loginData.js';
import LoginPage from '../../support/pageObject/login.page.js';

const LoginActions = {
    redirectToLoginPanel() {
        cy.visit('/');
    },

    incorrectCredentialsMessageIsDisplayed() {
        LoginPage.dangerAlert.should("be.visible");
    },
    
    login() {
        LoginPage.usernameInput.type(LoginData.username);
        LoginPage.loginButton.click();
        LoginPage.passwordInput.type(LoginData.password);
        LoginPage.loginButton.click();
    },

    invalidLoginPass() {
        LoginPage.usernameInput.type(LoginData.username);
        LoginPage.loginButton.click();
        LoginPage.passwordInput.type(LoginData.invalidPassword);
        LoginPage.loginButton.click();
    },

    invalidLoginEmail() {
        LoginPage.usernameInput.type(LoginData.invalidUsername);
        LoginPage.loginButton.click();
        LoginPage.passwordInput.type(LoginData.password);
        LoginPage.loginButton.click();
    },

    invalidLoginEmailFieldEmpty() {
        LoginPage.usernameInput.clear();
        LoginPage.loginButton.click();
    },

    invalidLoginPasswordFieldEmpty() {
        LoginPage.usernameInput.type(LoginData.username);
        LoginPage.loginButton.click();
        LoginPage.passwordInput.clear();
        LoginPage.loginButton.click();
    },

    invalidLoginCredentials() {
        LoginPage.usernameInput.type(LoginData.invalidUsername);
        LoginPage.loginButton.click();
        LoginPage.passwordInput.type(LoginData.invalidPassword);
        LoginPage.loginButton.click();
    }
};

export default LoginActions;
