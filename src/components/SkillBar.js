import React, { useState } from "react";
import { formatName } from "../utilities/utilities";
import { UpdateSkillPrompt } from "./UpdateSkillPrompt";

export const SkillBar = ({ skill, skillID, ranks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const skillModal = modalOpen && <UpdateSkillPrompt skill={skill} skillID={skillID} ranks={ranks} isOpen={modalOpen} closeModal={toggleModal} />;

  return (
    <div className="skill-element">
      <dt>{formatName(skill)}</dt>
      <dd className="sr-only">{ranks === 1 ? `${ranks} rank` : `${ranks} ranks`}</dd>
      <progress className="skill-meter" id={skill} value={ranks} min="0" max="5" onClick={toggleModal} aria-hidden />
      {skillModal}
    </div>
  );
}