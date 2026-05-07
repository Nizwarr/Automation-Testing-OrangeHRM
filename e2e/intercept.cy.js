describe('Login OrangeHRM - Intercept Suite', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('TC-01: Login Valid', () => {

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', '**action-summary').as('loginRequest');

    cy.get('[type="submit"]').click();

    cy.wait('@loginRequest');

    cy.url().should('include', '/dashboard');
  });

  it('TC-02: Password Salah', () => {

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('salah123');

    cy.intercept('POST', '**/auth/validate').as('loginAttempt');
    
    cy.get('[type="submit"]').click();

    cy.wait('@loginAttempt');

    cy.get('.oxd-alert-content')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials');
  });

  it('TC-03: Username Salah', () => {

    cy.get('[name="username"]').type('UserSalah');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('POST', '**/auth/validate').as('loginAttempt');
    
    cy.get('[type="submit"]').click();

    cy.wait('@loginAttempt');

    cy.get('.oxd-alert-content')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials');
  });

  it('TC-04: Username Kosong', () => {

    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('have.text', 'Required');
  });

  it('TC-05: Password Kosong', () => {

    cy.get('[name="username"]').type('Admin');
    cy.get('[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('have.text', 'Required');
  });

  it('TC-06: Kedua Field Kosong', () => {

    cy.get('[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2);
  });

});