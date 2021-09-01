describe('Character page user flows', () => {
  it('Should be able to visit the character page', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('h1').contains('character')
  });

  it('Should show a character name, species, career, and specialization', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('h2').contains('name')
    cy.get('p').contains('Mace Windu')
    cy.get('h2').contains('species')
    cy.get('p').contains('human')
    cy.get('h2').contains('career')
    cy.get('p').contains('jedi')
    cy.get('h2').contains('specialization')
    cy.get('p').contains('being very serious')
  });
});