import React, { useState } from 'react';
import { formatName } from '../utilities/utilities';
import { UpdateSkillPrompt } from './UpdateSkillPrompt';

export const SkillBar = ({ skill, skillID, ranks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="skill-element">
      <dt>{formatName(skill)}</dt>
      <dd className="sr-only">{ranks === 1 ? `${ranks} rank` : `${ranks} ranks`}</dd>
      <button onClick={toggleModal} title="Update ranks">
        <span className="sr-only">Update ranks in {skill}</span>
        <progress aria-hidden className="skill-meter" id={skill} value={ranks} min="0" max="5" />
      </button>
      <UpdateSkillPrompt skill={skill} skillID={skillID} ranks={ranks} isOpen={modalOpen} closeModal={toggleModal} />
    </div>
  );
};
