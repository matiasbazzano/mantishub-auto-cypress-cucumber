class Header {

    get mantisDashboardLinkButton() {
        return cy.get('a.navbar-brand span.smaller-75').contains('MantisHub');
      }

    get reportIssueButton() {
        return cy.get('a.btn.btn-primary.btn-sm').contains('Report Issue');
      }
    
    get allProjectsDropdown() {
        return cy.get('a.dropdown-toggle').contains('All Projects');
      }

    get searchInputFromAllProjectsDropdown() {
        return cy.get('input.search.form-control.input-md');
      }
    
    get accountOptionsDropdown() {
        return cy.get('.user-info');
      }

    get myAccountOptionLink() {
        return cy.get('a[href="/account_page.php"] i.fa.fa-user.ace-icon');
      }
    
    get logoutOptionLink() {
        return cy.get('a[href="/logout_page.php"]');
      }
}
    
export default new Header();