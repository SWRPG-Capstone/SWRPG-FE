describe('Home page user flows', () => {

  beforeEach(() => {
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
    cy.visit('http://localhost:3000/');
  });

  it('Header and url should reflect the current page', () => {
    cy.get('.title').contains('home').should('be.visible');
    cy.url().should('include', '/home');
  });

  it('Should display a user\'s saved characters', () => {
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
    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'getAllCharacters') {
        req.alias = 'allCharsQuery';
        req.reply({
          body: {
            data: {
              user: {
                username: "newuser6",
                __typename: "User",
                characters: []
              }
            }
          },
          headers: {
            'access-control-allow-origin': '*',
          }
        })
      }
    });
    cy.visit('http://localhost:3000/');
    cy.wait('@allCharsQuery');
    cy.get('.home-link').should('have.length', 1);
    cy.get('.home-link').contains('Create a New Character').should('be.visible');
  });
});