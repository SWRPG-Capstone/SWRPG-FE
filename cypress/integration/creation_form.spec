describe('Character creation user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to click the Create A New Character button to view the creation form', () => {
    cy.get('.home-link').last().click();
    cy.get('.char-heading').contains('name').should('exist');
  });

  it('Header and url should reflect the current page', () => {
    cy.visit('http://localhost:3000/create');
    cy.get('.title').contains('create').should('be.visible');
    cy.url().should('include', '/create');
  });
});