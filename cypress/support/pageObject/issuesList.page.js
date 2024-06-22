class IssuesListPage {
  getIssueLinkByNumber(issueNumber) {
    return cy.get(`td.column-id a:contains(${issueNumber})`);
  }
}
    
export default new IssuesListPage();