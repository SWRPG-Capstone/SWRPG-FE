import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { formatName } from '../utilities/utilities';

export const UpdateSkillPrompt = ({ skill, skillID, ranks, isOpen, closeModal }) => {

  const addButton = ranks < 5 && <button>Add Rank</button>;
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