class ForgotPasswordPage {

  visit() {

    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'
    )

  }

  inputUsername(username) {

    cy.get('input[name="username"]')
      .should('be.visible')
      .type(username)

  }

  clickResetPassword() {

    cy.get('button[type="submit"]')
      .click()

  }

  verifyRequiredMessage() {

    cy.get('.oxd-input-field-error-message')
      .should('contain.text', 'Required')

  }

  verify504Error() {

     cy.contains('504')
       .should('be.visible')
  }

}

export default ForgotPasswordPage