import React from "react";
import { formatName } from "../utilities/utilities";

export const SkillBar = ({ skill, ranks }) => {
  return (
    <div className="skill-element">
      <label htmlFor={skill}>{formatName(skill)}</label>
      <progress className="skill-meter" htmlFor={skill} id={skill} value={ranks} min="0" max="5" />
    </div>
  );
}