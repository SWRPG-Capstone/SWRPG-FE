import React from "react";
import { formatName } from "../utilities";

export const SkillBar = ({ skillName, ranks }) => {
  return (
    <div className="skill-element">
      <label htmlFor={skillName}>{formatName(skillName)}</label>
      <progress className="skill-meter" htmlFor={skillName} id={skillName} value={ranks} min="0" max="5" />
    </div>
  );
}