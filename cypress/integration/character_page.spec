describe('Character page user flows', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
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
                    __typename: 'Characteristic'
                  }
                ],
                __typename: 'Character'
              }
            }
          },
          headers: {
            'access-control-allow-origin': '*',
          }
        })
      }
    });

    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'getAllCharacters') {
        req.alias = 'allCharsQuery';
        req.reply({
          body: {
            data: {
              user: {
                username: "coolname5",
                __typename: "User",
                characters: [
                  { id: "1", name: "Boops McGoops", __typename: "Character" },
                  { id: "2", name: "Miriax Bibble", __typename: "Character" },
                  { id: "3", name: "Rein Dodonna", __typename: "Character" },
                ]
              }
            }
          },
          headers: {
            'access-control-allow-origin': '*',
          }
        })
      }
    });
  });
  
  it('Should be able to visit the character page', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('h1').contains('character')
  });

  it('Should show a character name, species, career, and specialization', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('h2').contains('name')
    cy.get('p').contains('Boops McGoops')
    cy.get('h2').contains('species')
    cy.get('p').contains('cool alien')
    cy.get('h2').contains('career')
    cy.get('p').contains('bounty hunter')
    cy.get('h2').contains('specialization')
    cy.get('p').contains('assassin')
  });

  it('Should be able to click the home button to return to character select', () => {
    cy.visit('http://localhost:3000/character')
    cy.get('.button.small').first().click();
    cy.get('.title').contains('home').should('be.visible');
    cy.url().should('include', '/home');
    cy.get('.home-link').should('have.length', 4);
  });
});