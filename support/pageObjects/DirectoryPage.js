class DirectoryPage {

  visit() {

    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )

  }

  login(username, password) {

    cy.get('input[name="username"]')
      .type(username)

    cy.get('input[name="password"]')
      .type(password)

    cy.get('button[type="submit"]')
      .click()

  }

  openDirectoryMenu() {

    cy.get('.oxd-sidepanel-body')
      .should('be.visible')

    cy.contains('span', 'Directory')
      .should('be.visible')
      .click()

  }

  inputEmployeeName(employeeName) {

    cy.get('input[placeholder="Type for hints..."]')
      .type(employeeName)

  }

  selectJobTitle(jobTitle) {

    cy.get('.oxd-select-text')
      .eq(0)
      .click()

    cy.contains(jobTitle)
      .click()

  }

  selectLocation(location) {

    cy.get('.oxd-select-text')
      .eq(1)
      .click()

    cy.contains(location)
      .click()

  }

  clickSearchButton() {

    cy.get('button[type="submit"]')
      .click()

  }

  verifyDirectoryPage() {

    cy.url()
      .should('include', '/directory')

  }

  verifyEmployeeCardVisible() {

    cy.get('.oxd-sheet')
      .should('be.visible')

  }

  verifyNoRecordFound() {

    cy.contains('No Records Found')
      .should('be.visible')

  }

}

export default DirectoryPage