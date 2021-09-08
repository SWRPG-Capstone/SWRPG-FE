describe('Skills page user flows', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
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

    cy.intercept('POST', 'https://swrpg-be.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'getSkills') {
        req.alias = 'skillsQuery';
        req.reply({
          data: {
            character: {
              skills: [
                {
                  astrogation: 0,
                  athletics: 5,
                  brawl: 2,
                  charm: 1,
                  coercion: 3,
                  computers: 0,
                  cool: 3,
                  coordination: 2,
                  deception: 0,
                  discipline: 1,
                  education: 0,
                  gunnery: 1,
                  id: '1',
                  leadership: 0,
                  lore: 0,
                  mechanics: 1,
                  melee: 3,
                  negotiation: 0,
                  outerRim: 0,
                  perception: 1,
                  piloting: 2,
                  pilotingSpace: 2,
                  rangedHeavy: 1,
                  rangedLight: 3,
                  resilience: 3,
                  skulduggery: 0,
                  stealth: 1,
                  streetWise: 4,
                  survival: 2,
                  underworld: 0,
                  vigilance: 2,
                  xenology: 0,
                  __typename: 'Skill'
                }
              ],
              __typename: 'Character'
            }
          }
        })
      }
    })

    cy.visit('http://localhost:3000/');
  });

  it('Should be able to click the skills button to visit the skills page', () => {
    cy.get('.home-link').contains('Boops McGoops').click();
    cy.get('.title').contains('character').should('be.visible');
    cy.get('.button.medium').last().click();
    cy.get('.title').contains('skills').should('be.visible');
  });

  it('Should display a character\'s skills and number of ranks', () => {
    cy.visit('http://localhost:3000/skills');
    cy.get('progress').should('have.length', 31);
    cy.get('label').should('have.length', 31);
    cy.get('label').contains('astrogation').should('be.visible');
    cy.get('.skills-container').scrollTo('bottom');
    cy.get('label').contains('xenology').should('be.visible');
    cy.get('#survival').should('have.value', 2);
  });
});