import Header from "../../support/pageObject/header.page";
import ReportIssuePage from "../../support/pageObject/reportIssue.page";
import StoreContent from "../../support/pageObjectContent/storeContent";

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
    },

    saveCopiedIssueDetailsToClone() {
        const priorityDropdownLocator = ReportIssuePage.priorityDropdown;
        const severityDropdownLocator = ReportIssuePage.severityDropdown;
        const assignToDropdownLocator = ReportIssuePage.assignToDropdown;
        const summaryInputLocator = ReportIssuePage.summaryInput;
        const descriptionInputLocator = ReportIssuePage.descriptionInput;
        StoreContent.saveSelectedOptionFromDropdown(priorityDropdownLocator, "priorityDropdownContent");
        StoreContent.saveSelectedOptionFromDropdown(severityDropdownLocator, "severityDropdownContent");
        StoreContent.saveSelectedOptionFromDropdown(assignToDropdownLocator, "assignToDropdownContent");
        StoreContent.saveValue(summaryInputLocator, "summaryInputContent");
        StoreContent.saveValue(descriptionInputLocator, "descriptionInputContent");
    },

    compareTheCopiedIssueDetailsToClone() {
        const intialPriorityLabel = StoreContent.getVariable("priorityDisplayedLabel");
        const intialSeverityLabel = StoreContent.getVariable("severityDisplayedLabel");
        const intialAssignedToLabel = StoreContent.getVariable("assignedToDisplayedLabel");
        const intialSummaryLabel = StoreContent.getVariable("summaryDisplayedLabel");
        const intialDescriptionLabel = StoreContent.getVariable("descriptionDisplayedLabel");
        const updatedPriorityDropdownContent = StoreContent.getVariable("priorityDropdownContent");
        const updatedSeverityDropdownContent = StoreContent.getVariable("severityDropdownContent");
        const updatedAssignToDropdownContent = StoreContent.getVariable("assignToDropdownContent");
        const updatedSummaryInputContent = StoreContent.getVariable("summaryInputContent");
        const updatedDescriptionInputContent = StoreContent.getVariable("descriptionInputContent");
        expect(intialPriorityLabel).to.include(updatedPriorityDropdownContent);
        expect(intialSeverityLabel).to.include(updatedSeverityDropdownContent);
        expect(intialAssignedToLabel).to.include(updatedAssignToDropdownContent);
        expect(intialSummaryLabel).to.include(updatedSummaryInputContent);
        expect(intialDescriptionLabel).to.include(updatedDescriptionInputContent);
    }
};

export default ReportIssueActions;