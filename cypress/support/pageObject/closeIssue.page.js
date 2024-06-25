class CloseIssuePage {

    get resolutionDropdown() {
        return cy.get('[name="resolution"]');
      }

    get duplicateIdInput() {
        return cy.get('[name="duplicate_id"]');
      }

    get assignedToDropdown() {
        return cy.get('[name="handler_id"]');
      }

    get addNoteTextArea() {
        return cy.get('[id="bugnote_text"]');
      }

    get closeIssueButton() {
        return cy.get('input[value="Close Issue"]');
    }

    get dangerAlert() {
        return cy.get('.alert.alert-danger');
      }
}
    
export default new CloseIssuePage();