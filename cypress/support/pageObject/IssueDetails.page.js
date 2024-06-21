class IssueDetailsPage {

    get projectLabel() {
        return cy.get('.bug-project');
    }
    
    get categoryLabel() {
        return cy.get('.bug-category');
    }

    get visibilityLabel() {
        return cy.get('.bug-view-status');
    }

    get reporterLabel() {
        return cy.get('.bug-reporter');
    }

    get assignedToLabel() {
        return cy.get('.bug-assigned-to');
    }

    get priorityLabel() {
        return cy.get('.bug-priority');
    }

    get severityLabel() {
        return cy.get('.bug-severity');
    }

    get summaryLabel() {
        return cy.get('.bug-summary');
    }

    get descriptionLabel() {
        return cy.get('.bug-description');
    }

    get uploadedImageComponent() {
        return cy.get('.bug-attachment-preview-image');
    }

    get cloneIssueButton() {
        return cy.get('input[value="Clone"]');
    }

    get closeIssueButton() {
        return cy.get('input[value="Close"]');
    }

    get deleteIssueButton() {
        return cy.get('input[value="Delete"]');
    }
}
    
export default new IssueDetailsPage();