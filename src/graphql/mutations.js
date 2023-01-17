import { gql } from '@apollo/client';

export const CREATE_CHARACTERISTICS = gql`
  mutation createCharacteristics(
    $agility: Int!
    $brawn: Int!
    $characterId: Int!
    $charPresence: Int!
    $cunning: Int!
    $intellect: Int!
    $willpower: Int!
  ) {
    createCharacteristic(
      input: {
        agility: $agility
        brawn: $brawn
        characterId: $characterId
        charPresence: $charPresence
        cunning: $cunning
        intellect: $intellect
        willpower: $willpower
      }
    ) {
      agility
      brawn
      characterId
      charPresence
      cunning
      intellect
      willpower
    }
  }
`;

export const CREATE_DETAILS = gql`
  mutation createCharDetails(
    $userID: String!
    $name: String!
    $species: String!
    $specialization: String!
    $career: String!
    $age: Int!
    $height: String!
    $build: String!
    $hair: String!
    $eyes: String!
  ) {
    createCharacter(
      input: {
        userId: $userID
        name: $name
        species: $species
        specialization: $specialization
        career: $career
        age: $age
        height: $height
        build: $build
        hair: $hair
        eyes: $eyes
      }
    ) {
      id
    }
  }
`;

export const CREATE_SKILLS = gql`
  mutation createSkills(
    $characterId: Int!
    $astrogation: Int!
    $athletics: Int!
    $brawl: Int!
    $charm: Int!
    $coercion: Int!
    $computers: Int!
    $cool: Int!
    $coordination: Int!
    $coreWorlds: Int!
    $deception: Int!
    $discipline: Int!
    $education: Int!
    $gunnery: Int!
    $leadership: Int!
    $lore: Int!
    $mechanics: Int!
    $medicine: Int!
    $melee: Int!
    $negotiation: Int!
    $outerRim: Int!
    $perception: Int!
    $piloting: Int!
    $pilotingSpace: Int!
    $rangedHeavy: Int!
    $rangedLight: Int!
    $resilience: Int!
    $skulduggery: Int!
    $stealth: Int!
    $streetWise: Int!
    $survival: Int!
    $underworld: Int!
    $vigilance: Int!
    $xenology: Int!
  ) {
    createSkill(
      input: {
        characterId: $characterId
        astrogation: $astrogation
        athletics: $athletics
        brawl: $brawl
        charm: $charm
        coercion: $coercion
        computers: $computers
        cool: $cool
        coordination: $coordination
        coreWorlds: $coreWorlds
        deception: $deception
        discipline: $discipline
        education: $education
        gunnery: $gunnery
        leadership: $leadership
        lore: $lore
        mechanics: $mechanics
        medicine: $medicine
        melee: $melee
        negotiation: $negotiation
        outerRim: $outerRim
        perception: $perception
        piloting: $piloting
        pilotingSpace: $pilotingSpace
        rangedHeavy: $rangedHeavy
        rangedLight: $rangedLight
        resilience: $resilience
        skulduggery: $skulduggery
        stealth: $stealth
        streetWise: $streetWise
        survival: $survival
        underworld: $underworld
        vigilance: $vigilance
        xenology: $xenology
      }
    ) {
      astrogation
      athletics
      brawl
      charm
      coercion
      computers
      cool
      coordination
      coreWorlds
      deception
      discipline
      education
      gunnery
      id
      leadership
      lore
      mechanics
      medicine
      melee
      negotiation
      outerRim
      perception
      piloting
      pilotingSpace
      rangedHeavy
      rangedLight
      resilience
      skulduggery
      stealth
      streetWise
      survival
      underworld
      vigilance
      xenology
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!, $confirmPassword: String!) {
    createUser(input: { username: $username, password: $password, passwordConfirmation: $confirmPassword }) {
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(input: { credentials: { username: $username, password: $password } }) {
      token
      user {
        id
      }
    }
  }
`;
