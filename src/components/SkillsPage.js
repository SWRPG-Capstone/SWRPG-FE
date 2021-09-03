import React from "react";
import { SkillBar } from "./SkillBar";
import { useQuery, gql } from "@apollo/client";

const SKILLS = gql`
  query getSkills {
    character(id: 1) {
      skills {
        astrogation
        athletics
        brawl
        charm
        coercion
        computers
        cool
        coordination
        deception
        discipline
        education
        gunnery
        leadership
        lore
        mechanics
        melee
        negotiation
        outerRim
        perception
        piloting
        pilotingSpace
        rangedHeavy
        rangedLight
        resilience
        skulduggery
        stealth
        streetWise
        survival
        underworld
        vigilance
        xenology
      }
    }
  }
`

export const SkillsPage = () => {
  const { loading, error, data } = useQuery(SKILLS);

  if (loading) return 'Loading your data...';
  if (error) return `Error! ${error.message}`;

  const skills = Object.keys(data.character.skills[0]);
  skills.shift();

  const skillBars = skills.map(skill => {
    const ranks = data.character.skills[0][skill];
    return <SkillBar key={skill} skill={skill} ranks={ranks}/>
  });

  return (
    <section className="skills-container">
      <div className="skill-headings">
        <h2>Skills</h2>
        <h2>Ranks</h2>
      </div>
      {skillBars}
    </section>
  );
}