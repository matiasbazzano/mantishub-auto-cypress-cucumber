class ViewAllIssuesPage {

    get printReportsButton() {
        return cy.contains('Print Reports');
      }

    get csvExportButton() {
        return cy.contains('CSV Export');
      }

    get excelExportButton() {
        return cy.contains('Excel Export');
      }
      
    get summaryButton() {
        return cy.contains('Summary');
      }
}
    
export default new ViewAllIssuesPage();