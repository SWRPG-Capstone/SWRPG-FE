import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const ALL_CHARACTERS = gql`
  query getAllCharacters {
    user(id: 1) {
      username
      characters {
        id
        name
      }
    }
  }
`;

export const HomePage = ({ setCurrentChar }) => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  if (loading) return 'Loading your data...';
  if (error) return `Error! ${error.message}`;

  const handleClick = (e) => {
    setCurrentChar(e.target.id);
  };

  const charOptions = data.user.characters.map((character) => {
    return (
      <Link to="/character" className="home-link" key={character.id} id={parseInt(character.id)} onClick={handleClick}>
        {character.name}
      </Link>
    );
  });

  return (
    <section className="home-sheet">
      {charOptions}
      <Link to="/create" className="home-link">
        Create a New Character
      </Link>
    </section>
  );
};
