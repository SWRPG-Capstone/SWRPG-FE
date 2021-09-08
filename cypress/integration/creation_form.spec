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

      if (req.body.operationName === 'createCharacteristics') {
        req.alias = 'characteristicsMutation';
        req.reply({
          data: {
            createCharacteristic: {
              agility: 4,
              brawn: 1,
              characterId: 4,
              charPresence: 3,
              cunning: 3,
              intellect: 2,
              willpower: 1,
              __typename: 'Characteristic'
            }
          }
        })
      }

      if (req.body.operationName === 'createSkills') {
        req.alias = 'charSkillsMutation';
        req.reply({
          data: {
            createSkill: {
              astrogation: 1,
              athletics: 2,
              brawl: 0,
              charm: 3,
              coercion: 0,
              computers: 0,
              cool: 0,
              coordination: 4,
              coreWorlds: 0,
              deception: 5,
              discipline: 0,
              education: 0,
              gunnery: 0,
              id: '4',
              leadership: 0,
              lore: 0,
              mechanics: 0,
              medicine: 0,
              melee: 0,
              negotiation: 0,
              outerRim: 0,
              perception: 0,
              piloting: 0,
              pilotingSpace: 0,
              rangedHeavy: 0,
              rangedLight: 0,
              resilience: 0,
              skulduggery: 0,
              stealth: 0,
              streetWise: 0,
              survival: 0,
              underworld: 0,
              vigilance: 0,
              xenology: 0,
              __typename: 'Skill'
            }
          }
        })
      }

      if (req.body.operationName === 'getCharacter') {
        req.alias = 'getCharQuery';
        req.reply({
          body: {
            data: {
              character: {
                id: '4',
                name: 'Bail Loran',
                species: 'human',
                specialization: 'pilot',
                career: 'ace',
                characteristics: [
                  {
                    brawn: 1,
                    agility: 4,
                    cunning: 3,
                    intellect: 2,
                    willpower: 1,
                    charPresence: 3,
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

    cy.get('input[name="agility"]').clear().type('4').should('have.value', '4');
    cy.get('input[name="brawn"]').clear().type('1').should('have.value', '1');
    cy.get('input[name="charPresence"]').clear().type('3').should('have.value', '3');
    cy.get('input[name="cunning"]').clear().type('3').should('have.value', '3');
    cy.get('input[name="intellect"]').clear().type('2').should('have.value', '2');
    cy.get('input[name="willpower"]').clear().type('1').should('have.value', '1');
    cy.get('button').contains('Next').click();

    cy.get('input[name="astrogation"]').clear({force: true}).type('1').should('have.value', '1');
    cy.get('input[name="athletics"]').clear({force: true}).type('2').should('have.value', '2');
    cy.get('input[name="charm"]').clear({force: true}).type('3').should('have.value', '3');
    cy.get('input[name="coordination"]').clear({force: true}).type('4').should('have.value', '4');
    cy.get('input[name="deception"]').clear({force: true}).type('5').should('have.value', '5');
    cy.get('button').contains('Submit').click();
  });
});