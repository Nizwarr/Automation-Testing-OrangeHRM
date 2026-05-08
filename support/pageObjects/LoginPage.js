class LoginPage {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  inputUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  inputPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('[type="submit"]').click();
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard');
  }

  verifyInvalidCredential() {
    cy.get('.oxd-alert-content')
      .should('contain.text', 'Invalid credentials');
  }

  verifyRequiredMessage() {
    cy.get('.oxd-input-field-error-message')
      .should('contain.text', 'Required');
  }

  verifyRequiredMessageCount() {
    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2);
  }

}

export default LoginPage;