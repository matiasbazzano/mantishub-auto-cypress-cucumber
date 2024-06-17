import DeepUrl from '../../data/deepUrl.js'
import LoginData from '../../data/loginData.js';

const Actions = {
    verifyDashboardUrl() {
        cy.url().should("eq", DeepUrl.myView);
    },

    verifyLoginUrl() {
        cy.url().should("eq", DeepUrl.login);
    },

    verifyViewIssueUrl() {
        cy.url().should("include", DeepUrl.viewIssueDetails);
    },
    
    verifyBugReportUrl() {
        cy.url().should("include", DeepUrl.bugReport);
    },

    verifyMyAccountUrl() {
        cy.url().should("include", DeepUrl.myAccount);
    },

    loginByApiWithValidCredentials() {
        cy.loginByRequest(LoginData.username, LoginData.password, "loginByRequest");
        cy.visit(DeepUrl.myView);
    },

    loginByApiWithInvalidCredentials() {
        cy.loginByRequest(LoginData.invalidUsername, LoginData.invalidPassword, "loginByRequest");
        cy.visit(DeepUrl.myView);
    }
};

export default Actions;
