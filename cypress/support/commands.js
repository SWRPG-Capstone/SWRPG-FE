Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'loginUser') {
        req.alias = 'loginUserMutation';
        req.reply({
          data: {
            loginUser: {
              token: 'testToken126178',
              user: {
                id: '1',
              },
            },
          },
        });
      }
    });

    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button').contains('Submit').click();
    cy.get('.title').contains('home').should('be.visible');
  });
});
