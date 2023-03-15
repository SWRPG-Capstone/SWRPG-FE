describe('Character page user flows', () => {
  beforeEach(() => {
    cy.login('CoolMcCool', 'Test123&');

    cy.intercept('POST', 'https://swrpg-be-v2.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'getCharacter') {
        req.alias = 'getCharQuery';
        req.reply({
          body: {
            data: {
              character: {
                id: '1',
                name: 'Boops McGoops',
                species: 'cool alien',
                specialization: 'assassin',
                career: 'bounty hunter',
                characteristics: [
                  {
                    brawn: 4,
                    agility: 3,
                    cunning: 2,
                    intellect: 2,
                    willpower: 3,
                    charPresence: 1,
                    __typename: 'Characteristic',
                  },
                ],
                __typename: 'Character',
              },
            },
          },
          headers: {
            'access-control-allow-origin': '*',
          },
        });
      }
    });

    cy.intercept('POST', 'https://swrpg-be-v2.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'getAllCharacters') {
        req.alias = 'allCharsQuery';
        req.reply({
          body: {
            data: {
              user: {
                username: 'coolname5',
                __typename: 'User',
                characters: [
                  { id: '1', name: 'Boops McGoops', __typename: 'Character' },
                  { id: '2', name: 'Miriax Bibble', __typename: 'Character' },
                  { id: '3', name: 'Rein Dodonna', __typename: 'Character' },
                ],
              },
            },
          },
          headers: {
            'access-control-allow-origin': '*',
          },
        });
      }
    });
  });

  it('Should be able to visit the character page', () => {
    cy.visit('http://localhost:3000/character');
    cy.get('h1').contains('character');
  });

  it('Header and url should reflect the current page', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.icon.medium').first().click();
    cy.url().should('include', '/character');
    cy.get('h1').contains('character');
  });

  it('Should show a character name, species, career, and specialization', () => {
    cy.visit('http://localhost:3000/character');
    cy.get('dt').contains('name');
    cy.get('dd').contains('Boops McGoops');
    cy.get('dt').contains('species');
    cy.get('dd').contains('cool alien');
    cy.get('dt').contains('career');
    cy.get('dd').contains('bounty hunter');
    cy.get('dt').contains('specialization');
    cy.get('dd').contains('assassin');
  });

  it('Should be able to click the home button to return to character select', () => {
    cy.visit('http://localhost:3000/character');
    cy.get('.icon.small').first().click();
    cy.get('.title').contains('home').should('be.visible');
    cy.url().should('include', '/home');
    cy.get('.home-link').should('have.length', 4);
  });

  it('Should be able to click the character button to view the character page', () => {
    cy.visit('http://localhost:3000/character');
    cy.get('.icon.small').first().click();
    cy.get('.icon.medium').first().click();
    cy.get('h1').contains('character');
    cy.get('dt').contains('name');
    cy.get('dd').contains('Boops McGoops');
  });
});
