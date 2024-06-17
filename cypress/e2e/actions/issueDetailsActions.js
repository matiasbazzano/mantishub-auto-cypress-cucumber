import IssueDetailsPage from "../../support/pageObject/IssueDetails.page";

const IssueDetailsActions = {
    verifyPublicLabel() {
        IssueDetailsPage.visibilityLabel.should('include.text', 'public');
    },

    verifyPrivateLabel() {
        IssueDetailsPage.visibilityLabel.should('include.text', 'private');
    },

    verifyUploadedImage() {
        IssueDetailsPage.uploadedImageComponent.should('exist');
    }
};

export default IssueDetailsActions;