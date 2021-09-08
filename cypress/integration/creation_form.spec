describe('Character creation user flows', () => {

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

  it('Should be able to click the Create A New Character button to view the creation form', () => {
    cy.get('.home-link').last().click();
    cy.get('.char-heading').contains('name').should('exist');
  });

  it('Header and url should reflect the current page', () => {
    cy.visit('http://localhost:3000/create');
    cy.get('.title').contains('create').should('be.visible');
    cy.url().should('include', '/create');
  });

  it('Should be able to fill out the form to create a new character', () => {
    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'createCharDetails') {
        req.alias = 'charDetailsMutation';
        req.reply({
          data: {
            createCharacter: {
              id: '4',
              __typename: 'Character'
            }
          }
        })
      }
    });

    cy.get('.home-link').should('have.length', 4);
    cy.get('.home-link').last().click();
    cy.get('input[name="name"]').type('Bail Loran').should('have.value', 'Bail Loran');
    cy.get('input[name="species"]').type('human').should('have.value', 'human');
    cy.get('input[name="specialization"]').type('pilot').should('have.value', 'pilot');
    cy.get('input[name="career"]').type('ace').should('have.value', 'ace');
    cy.get('input[name="age"]').clear().type('32').should('have.value', '32');
    cy.get('input[name="height"]').type('6ft 2in').should('have.value', '6ft 2in');
    cy.get('input[name="build"]').type('athletic').should('have.value', 'athletic');
    cy.get('input[name="hair"]').type('black').should('have.value', 'black');
    cy.get('input[name="eyes"]').type('brown').should('have.value', 'brown');
    cy.get('button[type="submit"]').click();
  });
});