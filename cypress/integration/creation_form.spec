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
});