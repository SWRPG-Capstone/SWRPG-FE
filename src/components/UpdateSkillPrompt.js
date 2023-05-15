import React, { useContext } from 'react';
import { useMutation, gql } from '@apollo/client';
import { formatName } from '../utilities/utilities';
import { UserContext } from '../utilities/UserContext';
import { SKILLS } from './SkillsPage';
import { DialogModal } from './DialogModal';

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

  const increaseVars = {
    id: parseInt(skillID),
    characterID: parseInt(userContext.state.currentChar),
    ranks: ranks + 1,
  };

  const decreaseVars = {
    id: parseInt(skillID),
    characterID: parseInt(userContext.state.currentChar),
    ranks: ranks - 1,
  };

  const [increaseSkill] = useMutation(MUTATE_SKILL, {
    variables: increaseVars,
    refetchQueries: [SKILLS],
    onCompleted() {
      closeModal();
    },
  });

  const [decreaseSkill] = useMutation(MUTATE_SKILL, {
    variables: decreaseVars,
    refetchQueries: [SKILLS],
    onCompleted() {
      closeModal();
    },
  });

  const addButton = ranks < 5 && <button onClick={() => increaseSkill()}>Add Rank</button>;
  const removeButton = ranks > 0 && <button onClick={() => decreaseSkill()}>Remove Rank</button>;

  return (
    <DialogModal isOpen={isOpen} closeModal={closeModal}>
      <h2 className="skill-modal-heading">Update ranks in {formatName(skill)}?</h2>
      {addButton}
      {removeButton}
    </DialogModal>
  );
};
