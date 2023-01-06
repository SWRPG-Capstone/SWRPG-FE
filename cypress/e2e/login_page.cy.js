describe('Log in user flows', () => {
  it('Should be able to visit the login page', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.title').contains('log in').should('be.visible');
    cy.url().should('include', '/login');
  });

  it('Should contain a link to the registration page', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('a').contains('Need to create an account?').should('be.visible');
    cy.get('a').contains('Need to create an account?').click();
    cy.get('.title').contains('register').should('be.visible');
  });

  it('Should display an error message after clicking the submit button if a username is not provided', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.inline-error').should('not.exist');
    cy.get('button').contains('Submit').click();
    cy.get('.inline-error').contains('Please enter a username').should('be.visible');
  });

  it('Should display an error message after clicking the submit button if a password is not provided', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.inline-error').should('not.exist');
    cy.get('input[name="username"]').type('CoolMcCool');
    cy.get('button').contains('Submit').click();
    cy.get('.inline-error').contains('Please enter a password').should('be.visible');
  });

  it('Should display an error message if invalid login credentials are submitted', () => {
    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'loginUser') {
        req.alias = 'loginUserMutation';
        req.reply({
          data: {
            loginUser: null,
          },
        });
      }
    });

    cy.visit('http://localhost:3000/login');
    cy.get('input[name="username"]').type('CoolMcCool');
    cy.get('input[name="password"]').type('Wrong123&');
    cy.get('.login-error').should('not.exist');
    cy.get('button').contains('Submit').click();
    cy.get('.login-error').contains('Incorrect username or password.').should('be.visible');
  });
});
