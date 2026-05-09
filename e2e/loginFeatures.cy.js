import LoginPage from '../support/pageObjects/LoginPage';
import loginData from '../fixtures/loginData.json';

describe('Login OrangeHRM - POM + Intercept', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('TC-01: Login Valid', () => {

    cy.intercept(
      'POST',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'
    ).as('loginRequest');

    cy.intercept(
      'GET',
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary'
    ).as('actionSummary');

    loginPage.inputUsername(loginData.valid.username);
    loginPage.inputPassword(loginData.valid.password);
    loginPage.clickLogin();

    cy.wait('@loginRequest');
    cy.wait('@actionSummary');

    loginPage.verifyDashboard();
  });

  it('TC-02: Password Salah', () => {

    cy.intercept(
      'POST',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'
    ).as('loginAttempt');

    loginPage.inputUsername(loginData.invalidPassword.username);
    loginPage.inputPassword(loginData.invalidPassword.password);
    loginPage.clickLogin();

    cy.wait('@loginAttempt');

    loginPage.verifyInvalidCredential();
  });

  it('TC-03: Username Salah', () => {

    cy.intercept(
      'POST',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'
    ).as('loginAttempt');

    loginPage.inputUsername(loginData.invalidUsername.username);
    loginPage.inputPassword(loginData.invalidUsername.password);
    loginPage.clickLogin();

    cy.wait('@loginAttempt');

    loginPage.verifyInvalidCredential();
  });

  it('TC-04: Username Kosong', () => {

    loginPage.inputPassword(loginData.emptyUsername.password);
    loginPage.clickLogin();

    loginPage.verifyRequiredMessage();
  });

  it('TC-05: Password Kosong', () => {

    loginPage.inputUsername(loginData.emptyPassword.username);
    loginPage.clickLogin();

    loginPage.verifyRequiredMessage();
  });

  it('TC-06: Kedua Field Kosong', () => {

    loginPage.clickLogin();

    loginPage.verifyRequiredMessageCount();
  });

});