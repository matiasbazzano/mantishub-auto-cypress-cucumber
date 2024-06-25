import CloseIssuePage from "../../support/pageObject/closeIssue.page";
import IssueDetailsPage from "../../support/pageObject/IssueDetails.page";

const CloseIssueActions = {
    selectResolutionInDropdown(resolution) {
        CloseIssuePage.resolutionDropdown.select(resolution);
    },

    selectAssignedToInDropdown(assignedTo) {
        CloseIssuePage.assignedToDropdown.select(assignedTo);
    },

    verifyIssueStatusLabel(statusLabel) {
        IssueDetailsPage.issueStatusLabel.should('contain.text', statusLabel);
    },

    verifyIssueResolutionLabel(resolutionLabel) {
        IssueDetailsPage.issueResolutionLabel.should('contain.text', resolutionLabel);
    },

    verifyIssueNoteLabel(note) {
        IssueDetailsPage.issueNotesLabel.should('contain.text', note);
    },

    addTextToAddNoteTextArea(note) {
        CloseIssuePage.addNoteTextArea.type(note);
    },

    enterDuplicateIdToDuplicateIdInput(duplicateId) {
        CloseIssuePage.duplicateIdInput.type(duplicateId);
    },

    invalidDuplicateIdMessageIsDisplayed() {
        CloseIssuePage.dangerAlert.should("be.visible");
    },
};

export default CloseIssueActions;
