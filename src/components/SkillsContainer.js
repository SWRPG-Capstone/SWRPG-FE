import React from "react";
import { SkillBar } from "./SkillBar";
import { sampleData } from "../mock-data";

export const SkillsContainer = () => {
  const skills = sampleData.data.attributes.character.skills;
  
  const skillBars = Object.keys(skills).map(skill => {
    const ranks = sampleData.data.attributes.character.skills[skill];
    return <SkillBar key={skill} skillName={skill} ranks={ranks}/>
  });

  return (
    <section>
      <h2>Skills</h2>
      <h2>Ranks</h2>
      {skillBars}
    </section>
  );
}