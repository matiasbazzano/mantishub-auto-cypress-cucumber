class LoginPage {

    get usernameInput() {
        return cy.get('[id="username"]');
      }

    get passwordInput() {
        return cy.get('[id="password"]');
      }

    get loginButton() {
        return cy.get('input[type="submit"][value="Login"]');
      }

    get dangerAlert() {
        return cy.get('.alert.alert-danger');
      }
}
    
export default new LoginPage();