import DeepUrl from '../../data/deepUrl.js'
import LoginData from '../../data/loginData.js';
import Paths from '../../data/paths.js';

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

    verifyListOfAllIssuesUrl() {
        cy.url().should("include", DeepUrl.listOfAllIssues);
    },

    loginByApiWithValidCredentials() {
        cy.loginByRequest(LoginData.username, LoginData.password, "loginByRequest");
        cy.visit(DeepUrl.myView);
    },

    loginByApiWithInvalidCredentials() {
        cy.loginByRequest(LoginData.invalidUsername, LoginData.invalidPassword, "loginByRequest");
        cy.visit(DeepUrl.myView);
    },

    redirectToDashboardPanel() {
        cy.visit(DeepUrl.myView);
    },

    verifyDownloadedFile(fileExtension) {
        const pattern = `${Paths.downloadsFolder}}`;
        return cy.exec(`ls ${pattern}`, { failOnNonZeroExit: false }).then((result) => {
            const commandOutput = result.stdout();
            expect(commandOutput).to.include(fileExtension);
        });
    },

    cleanDirectory(folder) {
        if (Cypress.platform === 'win32') {
            cy.exec(`del /q /s cypress\\${folder}\\*`);
        } else {
            cy.exec(`rm -rf cypress/${folder}/*`);
        }
    }
};

export default Actions;
