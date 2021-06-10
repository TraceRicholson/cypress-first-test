// describe('My First Test', () => {
//   it ('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it ('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })


describe('My First Test', () => {
  it ('it clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})


