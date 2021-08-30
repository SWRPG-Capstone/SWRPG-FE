import React from "react";
import { formatName } from "../utilities";

export const SkillBar = ({ skillName, ranks }) => {
  return (
    <div>
      <label for={skillName}>{formatName(skillName)}</label>
      <meter id={skillName} value={ranks} min="0" max="5"></meter>
    </div>
  );
}