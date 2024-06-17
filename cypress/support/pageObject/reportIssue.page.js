class ReportIssuePage {

    get categoryDropdown() {
        return cy.get('[id="category_id"]');
    }

    get severityDropdown() {
        return cy.get('[id="severity"]');
    }

    get priorityDropdown() {
        return cy.get('[id="priority"]');
    }

    get assignToDropdown() {
        return cy.get('[id="handler_id"]');
    }

    get summaryInput() {
        return cy.get('[id="summary"]');
    }

    get descriptionInput() {
        return cy.get('[id="description"]');
    }

    get publicCheckbox() {
        return cy.contains('public');
    }

    get privateCheckbox() {
        return cy.contains('private');
    }

    get dropZone() {
        return cy.get('.dropzone');
    }

    get removeAttachedFileButton() {
        return cy.get('.dz-remove');
    }

    get submitIssueButton() {
        return cy.get('input[type="submit"].btn.btn-primary.btn-white.btn-round[value="Submit Issue"]');
    }
}
    
export default new ReportIssuePage();