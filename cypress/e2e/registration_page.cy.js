describe('User registration user flows', () => {
  beforeEach(() => {
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

  it('Should be able to visit the registration page', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('.title').contains('register').should('be.visible');
    cy.url().should('include', '/register');
  });

  it('Should be able to fill out the form to register a new user', () => {
    cy.intercept('POST', 'https://rails-2swo.onrender.com/graphql', (req) => {
      if (req.body.operationName === 'createUser') {
        req.alias = 'createUserMutation';
        req.reply({
          data: {
            createUser: {
              username: 'CoolMcCool',
            },
          },
        });
      }
    });

    cy.visit('http://localhost:3000/register');
    cy.get('input[name="username"]').type('CoolMcCool').should('have.value', 'CoolMcCool');
    cy.get('input[name="password"]').type('Test1234!').should('have.value', 'Test1234!');
    cy.get('input[name="confirmPassword"]').type('Test1234!').should('have.value', 'Test1234!');
    cy.get('button').contains('Submit').click();
    cy.get('p').contains('CoolMcCool, your account was successfully registered!').should('be.visible');
  });
});
