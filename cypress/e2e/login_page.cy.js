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

  it('Should redirect the user to the homepage after a successful login', () => {
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
      } else if (req.body.operationName === 'getAllCharacters') {
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

    cy.visit('http://localhost:3000/login');
    cy.get('input[name="username"]').type('CoolMcCool');
    cy.get('input[name="password"]').type('Test123&');
    cy.get('button').contains('Submit').click();
    cy.get('.title').contains('home').should('be.visible');
    cy.url().should('include', '/home');
  });

  it('Should redirect other pages to the login page if no user is logged in', () => {
    cy.visit('http://localhost:3000/home');
    cy.get('.title').contains('log in').should('be.visible');
    cy.visit('http://localhost:3000/character');
    cy.get('.title').contains('log in').should('be.visible');
    cy.visit('http://localhost:3000/dice');
    cy.get('.title').contains('log in').should('be.visible');
    cy.visit('http://localhost:3000/skills');
    cy.get('.title').contains('log in').should('be.visible');
    cy.visit('http://localhost:3000/create');
    cy.get('.title').contains('log in').should('be.visible');
  });
});
