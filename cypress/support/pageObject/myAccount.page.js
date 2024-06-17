class MyAccountPage {

    get currentPasswordInput() {
        return cy.get('[id="password-current"]');
      }

    get newPasswordInput() {
        return cy.get('[id="password"]');
    }

    get confirmPasswordInput() {
        return cy.get('[id="password-confirm"]');
    }

    get emailInput() {
        return cy.get('[id="email-field"]');
    }

    get realNameInput() {
        return cy.get('[id="realname"]');
    }

    get updateUserButton() {
        return cy.get('.btn.btn-primary.btn-white.btn-round[value="Update User"]');
    }

    get passwordDoesNotMatchVerificationAlert() {
        return cy.contains('Password does not match verification.');
    }

    get currentPasswordIsIncorrectAlert() {
        return cy.contains('Current password is incorrect.');
    }
}
    
export default new MyAccountPage();