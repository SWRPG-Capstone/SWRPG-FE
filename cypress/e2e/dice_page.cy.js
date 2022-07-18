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

  it('Can roll a die and open the log to view results', () => {
    cy.get('div[class="scale"]').first().click();
    cy.get('img[class="icon dice large"]').click();
    cy.get('button').contains('Dice Log').click();
    cy.get('article[class="roll-log"]').contains('You rolled 1 force die');
  });

  it('Can click the Dice Log button to open and close the log', () => {
    cy.get('article[class="dice-log hidden"]').should('not.be.visible');
    cy.get('button').contains('Dice Log').click();
    cy.get('article[class="dice-log false"]').should('be.visible');
  });

  it('Can roll multiple types of dice', () => {
    cy.get('div[class="scale"]').eq(1).click();
    cy.get('div[class="scale"]').eq(4).click();
    cy.get('img[class="icon dice large"]').click();
    cy.get('button').contains('Dice Log').click();
    cy.get('article[class="roll-log"]').contains('You rolled 1 ability die');
    cy.get('article[class="roll-log"]').contains('You rolled 1 difficulty die');
  });
})