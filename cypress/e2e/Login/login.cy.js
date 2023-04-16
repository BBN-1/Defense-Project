describe('My First Test', () => {
  it('finds the content "Don\'t have an account?"', () => {
    cy.visit('http://localhost:3000/login')

    cy.contains('Don\'t have an account?')

    cy.contains('REGISTER').click()

    cy.url().should('include', '/register')
  })
})

