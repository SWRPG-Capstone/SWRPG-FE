import React, { useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import { formatName } from '../utilities/utilities';
import { UserContext } from "../utilities/UserContext";
import { SKILLS } from './SkillsPage';

export const UpdateSkillPrompt = ({ skill, skillID, ranks, isOpen, closeModal }) => {

  const MUTATE_SKILL = gql`
    mutation mutateSkill ($id: Int!, $characterID: Int!, $ranks: Int!){
      updateSkill(input: {
        characterId: $characterID,
        ${skill}: $ranks,
        id: $id
      }) {
        ${skill}
      }
    }
  `;

  const userContext = useContext(UserContext);
  console.log(userContext.state.currentChar)

  const mutationVars = {
    id: parseInt(skillID),
    characterID: userContext.state.currentChar,
    ranks: (ranks + 1)
  }

  const [mutateSkill] = useMutation(MUTATE_SKILL, {
    variables: mutationVars,
    refetchQueries: [
      SKILLS
    ]
  });

  const addButton = ranks < 5 && <button onClick={() => mutateSkill()}>Add Rank</button>;
  const removeButton = ranks > 0 && <button>Remove Rank</button>;

  return (
    <>
    {
      isOpen ? 
        <section className='update-skill-prompt' onClick={() => closeModal()}>
          <h2>Update ranks in {formatName(skill)}?</h2>
          {addButton}
          {removeButton}
        </section>
      : null
    }
    </>
  )
}