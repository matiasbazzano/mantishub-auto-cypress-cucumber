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
        StoreContent.saveText(severityLabelLocator, "severityDisplayedLabel");
        StoreContent.saveText(priorityLabelLocator, "priorityDisplayedLabel"); 
        StoreContent.saveText(assignedToLabelLocator, "assignedToDisplayedLabel");
        StoreContent.saveText(summaryLabelLocator, "summaryDisplayedLabel");
        StoreContent.saveText(descriptionLabelLocator, "descriptionDisplayedLabel");
    },

    saveClonedIssueDetailsDisplayed() {
        const priorityLabelLocator = IssueDetailsPage.priorityLabel;
        const severityLabelLocator = IssueDetailsPage.severityLabel;
        const assignedToLabelLocator = IssueDetailsPage.assignedToLabel;
        const summaryLabelLocator = IssueDetailsPage.summaryLabel;
        const descriptionLabelLocator = IssueDetailsPage.descriptionLabel;
        StoreContent.saveText(priorityLabelLocator, "clonedPriority");
        StoreContent.saveText(severityLabelLocator, "clonedSeverity");
        StoreContent.saveText(assignedToLabelLocator, "clonedAssignedTo");
        StoreContent.saveText(summaryLabelLocator, "clonedSummary");
        StoreContent.saveText(descriptionLabelLocator, "clonedDescription");
    },

    compareClonedIssueDetails() {
        const intialPriorityLabel = StoreContent.getVariable("priorityDisplayedLabel");
        const intialSeverityLabel = StoreContent.getVariable("severityDisplayedLabel");
        const intialAssignedToLabel = StoreContent.getVariable("assignedToDisplayedLabel");
        const intialSummaryLabel = StoreContent.getVariable("summaryDisplayedLabel");
        const intialDescriptionLabel = StoreContent.getVariable("descriptionDisplayedLabel");
        const clonedPriorityLabel = StoreContent.getVariable("clonedPriority");
        const clonedSeverityLabel = StoreContent.getVariable("clonedSeverity");
        const clonedAssignedToLabel = StoreContent.getVariable("clonedAssigned");
        const clonedSummaryLabel = StoreContent.getVariable("clonedSummary");
        const clonedDescriptionLabel = StoreContent.getVariable("clonedDescription");
        expect(intialPriorityLabel).to.include(clonedPriorityLabel);
        expect(intialSeverityLabel).to.include(clonedSeverityLabel);
        expect(intialAssignedToLabel).to.include(clonedAssignedToLabel);
        expect(intialSummaryLabel).to.include(clonedSummaryLabel);
        expect(intialDescriptionLabel).to.include(clonedDescriptionLabel);
    }
};

export default IssueDetailsActions;