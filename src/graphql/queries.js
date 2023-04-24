import { gql } from '@apollo/client';

export const ALL_CHARACTERS = gql`
  query getAllCharacters($id: ID!) {
    user(id: $id) {
      username
      characters {
        id
        name
      }
    }
  }
`;
