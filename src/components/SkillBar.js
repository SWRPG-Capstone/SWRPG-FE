import React, { useState } from "react";
import { formatName } from "../utilities/utilities";
import { UpdateSkillPrompt } from "./UpdateSkillPrompt";

export const SkillBar = ({ skill, skillID, ranks }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.id, e.target.value)
    console.log("skillID: " + skillID)
  }

  const toggleModal = () => setModalOpen(!modalOpen);

  const skillModal = modalOpen && <UpdateSkillPrompt skill={skill} skillID={skillID} ranks={ranks} isOpen={modalOpen} closeModal={toggleModal} />;

  return (
    <div className="skill-element">
      <label htmlFor={skill}>{formatName(skill)}</label>
      <progress className="skill-meter" htmlFor={skill} id={skill} value={ranks} min="0" max="5" onClick={toggleModal} />
      {skillModal}
    </div>
  );
}