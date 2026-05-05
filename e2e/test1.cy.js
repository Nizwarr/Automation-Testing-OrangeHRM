describe('homepage', () => {
  it('verify h1 text == Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.get("h1").contains("Kitchen Sink");
  })
})