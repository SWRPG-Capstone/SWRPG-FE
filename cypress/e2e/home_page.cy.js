describe('Home page user flows', () => {
  beforeEach(() => {
    cy.login('CoolMcCool', 'Test123&');

    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
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
    cy.visit('http://localhost:3000/');
  });

  it('Header and url should reflect the current page', () => {
    cy.get('.title').contains('home').should('be.visible');
    cy.url().should('include', '/home');
  });

  it("Should display a user's saved characters", () => {
    cy.wait('@allCharsQuery');
    cy.get('.home-link').should('have.length', 4);
    cy.get('.home-link').contains('Boops McGoops').should('be.visible');
    cy.get('.home-link').contains('Miriax Bibble').should('be.visible');
    cy.get('.home-link').contains('Rein Dodonna').should('be.visible');
  });

  it('Should contain an option to create a new character', () => {
    cy.get('.home-link').contains('Create a New Character').should('be.visible');
  });

  it('If a user has no saved characters, only the create new character button is displayed', () => {
    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'getAllCharacters') {
        req.alias = 'allCharsQuery';
        req.reply({
          body: {
            data: {
              user: {
                username: 'newuser6',
                __typename: 'User',
                characters: [],
              },
            },
          },
          headers: {
            'access-control-allow-origin': '*',
          },
        });
      }
    });
    cy.visit('http://localhost:3000/');
    cy.wait('@allCharsQuery');
    cy.get('.home-link').should('have.length', 1);
    cy.get('.home-link').contains('Create a New Character').should('be.visible');
  });

  it("Can click a character's name to view them on the character page", () => {
    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
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

    cy.get('.home-link').contains('Boops McGoops').click();
    cy.wait('@getCharQuery');
    cy.get('.info-value').contains('Boops McGoops').should('exist');
    cy.get('.info-value').contains('bounty hunter').should('exist');
  });
});
