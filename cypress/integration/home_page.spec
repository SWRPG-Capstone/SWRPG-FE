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
    })
  });

  it('Should display a user\'s saved characters', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@allCharsQuery');
    cy.get('.home-link').should('have.length', 4);
    cy.get('.home-link').contains('Boops McGoops').should('be.visible');
    cy.get('.home-link').contains('Miriax Bibble').should('be.visible');
    cy.get('.home-link').contains('Rein Dodonna').should('be.visible');
  });

  it('Should contain an option to create a new character', () => {

  })
})