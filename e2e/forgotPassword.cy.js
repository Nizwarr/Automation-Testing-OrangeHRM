import ForgotPasswordPage from '../support/pageObjects/ForgotPasswordPage'
import forgotPasswordData from '../fixtures/forgotPasswordData.json'

describe('OrangeHRM Forgot Password Automation', () => {

  const forgotPasswordPage = new ForgotPasswordPage()

  beforeEach(() => {

    forgotPasswordPage.visit()

  })

  it('FP-01 Reset password dengan username blessy', () => {

    forgotPasswordPage.inputUsername(
      forgotPasswordData.validUser1.username
    )

    forgotPasswordPage.clickResetPassword()

    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'
    )

  })

  it('FP-02 Reset password dengan username blackcat', () => {

    forgotPasswordPage.inputUsername(
      forgotPasswordData.validUser2.username
    )

    forgotPasswordPage.clickResetPassword()

    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'
    )

  })

  it('FP-03 Username kosong', () => {

    forgotPasswordPage.clickResetPassword()

    forgotPasswordPage.verifyRequiredMessage()

  })

  it('FP-04 Username tidak terdaftar', () => {

    forgotPasswordPage.inputUsername(
      forgotPasswordData.invalidUser.username
    )

    forgotPasswordPage.clickResetPassword()

    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'
    )

  })

  it('FP-05 Username Admin', () => {

    forgotPasswordPage.inputUsername(
      forgotPasswordData.timeoutUser.username
    )

    forgotPasswordPage.clickResetPassword()

    forgotPasswordPage.verify504Error()

  })

})