describe('Fitur Login OrangeHRM - QUIZ 3 by Nizwar', () => {

   beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('TC-01: Login dengan kredensial yang valid', () => {
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
  });

  it('TC-02: Login dengan password yang salah', () => {
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('salah_password');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('TC-03: Login dengan username yang salah', () => {
    cy.get('[name="username"]').type('BukanAdmin');
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content').should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('TC-04: Login tanpa mengisi username', () => {
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message').should('be.visible')
      .and('have.text', 'Required');
  });

  it('TC-05: Login tanpa mengisi password', () => {
    cy.get('[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message').should('be.visible')
      .and('have.text', 'Required');
  });

  it('TC-06: Mengosongkan kedua field (Username & Password)', () => {
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group').each(($el) => {
      cy.wrap($el).should('contain', 'Required');
    });
  });

});