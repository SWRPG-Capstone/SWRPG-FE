describe('Character page user flows', () => {
  it('Should be able to visit the character page', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('h1').contains('character')
  });
});