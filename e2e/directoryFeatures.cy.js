import DirectoryPage from '../support/pageObjects/DirectoryPage'
import directoryData from '../fixtures/directoryData.json'

describe('OrangeHRM Directory Automation', () => {

  const directoryPage = new DirectoryPage()

  beforeEach(() => {

    directoryPage.visit()

    directoryPage.login(
      directoryData.loginData.username,
      directoryData.loginData.password
    )

    cy.url().should(
      'include',
      '/dashboard'
    )

    cy.get('.oxd-topbar-header')
      .should('be.visible')

    directoryPage.openDirectoryMenu()

  })

  it('DIR-01 Menampilkan halaman directory', () => {

    directoryPage.verifyDirectoryPage()

  })

  it('DIR-02 Search employee valid', () => {

    directoryPage.inputEmployeeName(
      directoryData.validEmployee.employeeName
    )

    directoryPage.clickSearchButton()

    directoryPage.verifyEmployeeCardVisible()

  })

  it('DIR-03 Search employee tidak valid', () => {

    directoryPage.inputEmployeeName(
      directoryData.invalidEmployee.employeeName
    )

    directoryPage.clickSearchButton()

    directoryPage.verifyNoRecordFound()

  })

  it('DIR-04 Search tanpa input employee', () => {

    directoryPage.clickSearchButton()

    directoryPage.verifyEmployeeCardVisible()

  })

  it('DIR-05 Filter Job Title Automation Tester', () => {

    directoryPage.selectJobTitle(
      directoryData.jobTitle1.title
    )

    directoryPage.clickSearchButton()

    directoryPage.verifyEmployeeCardVisible()

  })

  it('DIR-06 Filter Job Title Content Specialist', () => {

    directoryPage.selectJobTitle(
      directoryData.jobTitle2.title
    )

    directoryPage.clickSearchButton()

    directoryPage.verifyEmployeeCardVisible()

  })

  it('DIR-07 Filter Location Canadian Regional HQ', () => {

    directoryPage.selectLocation(
      directoryData.location.name
    )

    directoryPage.clickSearchButton()

    directoryPage.verifyEmployeeCardVisible()

  })

})