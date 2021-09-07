import React, { useState } from "react";
import { SkillBar } from "./SkillBar";
import { useQuery, gql } from "@apollo/client";

const SKILLS = gql`
  query getSkills ($id: ID!){
    character(id: $id) {
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
        id
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

export const SkillsPage = ({ currentChar }) => {
  const { loading, error, data } = useQuery(SKILLS, {
    variables: { id: currentChar },
    onCompleted(data) {
      setSkillID(data.character.skills[0].id);
    }
  });
  const [skillID, setSkillID] = useState(null);

  if (loading) return 'Loading your data...';
  if (error) return `Error! ${error.message}`;

  const skills = Object.keys(data.character.skills[0]);
  skills.shift();

  const skillBars = skills.reduce((bars, skill) => {
    const ranks = data.character.skills[0][skill];
    if (skill !== 'id') {
      bars.push(<SkillBar key={skill} skill={skill} ranks={ranks} />)
    }
    return bars;
  }, []);

  return (
    <section className="skills-sheet">
      <div className="skill-headings">
        <h2 className='heading'>Skills</h2>
        <h2 className='heading'>Ranks</h2>
      </div>
      <article className='skills-container'>
        {skillBars}
      </article>
    </section>
  );
}