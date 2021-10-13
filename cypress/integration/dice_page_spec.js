describe('Dice page user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dice');
  });

  it('Should show all types of dice', () => {
    cy.get('article[class="die-field"]').should('have.length', 7);
  });

  it('Should be able to increase the number of dice rolled', () => {
    cy.get('h4[class="dice-amount"]').first().contains('0');
    cy.get('div[class="scale"]').first().click();
    cy.get('div[class="scale"]').first().click();
    cy.get('h4[class="dice-amount"]').first().contains('2');
  });

  it('Should be able to decrease the number of dice rolled', () => {
    cy.get('div[class="scale"]').first().click();
    cy.get('div[class="scale"]').first().click();
    cy.get('h4[class="dice-amount"]').first().contains('2');
    cy.get('div[class="scale down"]').first().click();
    cy.get('h4[class="dice-amount"]').first().contains('1');
  });
})