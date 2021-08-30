import React from "react";

export const SkillBar = ({ skillName, ranks }) => {
  return (
    <div>
      <label for={skillName}>{skillName}</label>
      <meter id={skillName} value={ranks} min="0" max="5"></meter>
    </div>
  );
}