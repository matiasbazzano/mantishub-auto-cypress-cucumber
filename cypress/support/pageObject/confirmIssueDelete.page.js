class ConfirmIssueDeletePage {

    get deleteIssuesButton() {
        return cy.get('input[value="Delete Issues"]');
      }

    get issueNumberLink() {
        return cy.get('td a[title*="[assigned]"]');
    }
}
    
export default new ConfirmIssueDeletePage();