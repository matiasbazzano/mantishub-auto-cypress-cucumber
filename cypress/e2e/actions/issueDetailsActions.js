import IssueDetailsPage from "../../support/pageObject/IssueDetails.page";
import StoreContent from "../../support/pageObjectContent/storeContent";

const IssueDetailsActions = {
    verifyPublicLabel() {
        IssueDetailsPage.visibilityLabel.should('include.text', 'public');
    },

    verifyPrivateLabel() {
        IssueDetailsPage.visibilityLabel.should('include.text', 'private');
    },

    verifyUploadedImage() {
        IssueDetailsPage.uploadedImageComponent.should('exist');
    },

    saveIssueDetailsDisplayed() {
        const priorityLabelLocator = IssueDetailsPage.priorityLabel;
        const severityLabelLocator = IssueDetailsPage.severityLabel;
        const assignedToLabelLocator = IssueDetailsPage.assignedToLabel;
        const summaryLabelLocator = IssueDetailsPage.summaryLabel;
        const descriptionLabelLocator = IssueDetailsPage.descriptionLabel;
        StoreContent.saveText(priorityLabelLocator, "priorityDisplayedLabel");
        StoreContent.saveText(severityLabelLocator, "severityDisplayedLabel"); 
        StoreContent.saveText(assignedToLabelLocator, "assignedToDisplayedLabel");
        StoreContent.saveText(summaryLabelLocator, "summaryDisplayedLabel");
        StoreContent.saveText(descriptionLabelLocator, "descriptionDisplayedLabel");
    },

    compareClonedIssueDetails() {
        const priorityDropdownContentBeforeClone = StoreContent.getVariable("priorityDropdownContent");
        const severityDropdownContentBeforeClone = StoreContent.getVariable("severityDropdownContent");
        const assignToDropdownContentBeforeClone = StoreContent.getVariable("assignToDropdownContent");
        const summaryInputContentBeforeClone = StoreContent.getVariable("summaryInputContent");
        const descriptionInputContentBeforeClone = StoreContent.getVariable("descriptionInputContent");
        const clonedPriorityLabel = StoreContent.getVariable("priorityDisplayedLabel");
        const clonedSeverityLabel = StoreContent.getVariable("severityDisplayedLabel");
        const clonedAssignedToLabel = StoreContent.getVariable("assignedToDisplayedLabel");
        const clonedSummaryLabel = StoreContent.getVariable("summaryDisplayedLabel");
        const clonedDescriptionLabel = StoreContent.getVariable("descriptionDisplayedLabel");
        expect(clonedPriorityLabel).to.include(priorityDropdownContentBeforeClone);
        expect(clonedSeverityLabel).to.include(severityDropdownContentBeforeClone);
        expect(clonedAssignedToLabel).to.include(assignToDropdownContentBeforeClone);
        expect(clonedSummaryLabel).to.include(summaryInputContentBeforeClone);
        expect(clonedDescriptionLabel).to.include(descriptionInputContentBeforeClone);
    }
};

export default IssueDetailsActions;