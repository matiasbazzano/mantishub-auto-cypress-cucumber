class DashboardPage {
    get issueLink() {
      return cy.get('a[href^="/view.php?id="]');
    }
  }
  
  export default new DashboardPage();
  