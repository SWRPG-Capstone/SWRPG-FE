describe('Log in user flows', () => {
  it('Should be able to visit the login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.title').contains('log in').should('be.visible');
    cy.url().should('include', '/login');
  });
});
