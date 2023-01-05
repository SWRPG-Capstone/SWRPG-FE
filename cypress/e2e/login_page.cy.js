describe('Log in user flows', () => {
  it('Should be able to visit the login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.title').contains('log in').should('be.visible');
    cy.url().should('include', '/login');
  });

  it('Should display an error message after clicking the submit button if a username is not provided', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.inline-error').should('not.exist');
    cy.get('button').contains('Submit').click();
    cy.get('.inline-error').contains('Please enter a username').should('be.visible');
  });

  it('Should display an error message after clicking the submit button if a password is not provided', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.inline-error').should('not.exist');
    cy.get('input[name="username"]').type('CoolMcCool');
    cy.get('button').contains('Submit').click();
    cy.get('.inline-error').contains('Please enter a password').should('be.visible');
  });
});
