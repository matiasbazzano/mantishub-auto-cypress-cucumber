import Header from "../../support/pageObject/header.page";
import ReportIssuePage from "../../support/pageObject/reportIssue.page";

const ReportIssueActions = {
    clickReportIssueButtonInHeader() {
        Header.reportIssueButton.click();
    },

    selectSeverityInDropdown(severity) {
        ReportIssuePage.severityDropdown.select(severity);
    },

    selectPriorityInDropdown(priority) {
        ReportIssuePage.priorityDropdown.select(priority);
    },

    selectAssignToInDropdown(assignToValue) {
        ReportIssuePage.assignToDropdown.select(assignToValue);
    },

    fillSumaryTextField(summaryText) {
        ReportIssuePage.summaryInput.type(summaryText);
    },

    fillDescriptionTextArea(descriptionText) {
        ReportIssuePage.descriptionInput.type(descriptionText);
    },

    uploadImage() {
        cy.fixture('image01.jpg', 'binary').then((fileContent) => {
            const blob = Cypress.Blob.binaryStringToBlob(fileContent);
            const file = new File([blob], 'image01.jpg', { type: 'image/jpeg' });
            ReportIssuePage.dropZone.trigger('drop', { dataTransfer: { files: [file] } });
        });
    },

    verifyAttachedImage() {
        ReportIssuePage.removeAttachedFileButton.should('be.visible');
    },

    markIssuePublic() {
        ReportIssuePage.publicCheckbox.click();
    },

    markIssuePrivate() {
        ReportIssuePage.privateCheckbox.click();
    },

    clickSubmitButton() {
        ReportIssuePage.submitIssueButton.click();
    }
};

export default ReportIssueActions;