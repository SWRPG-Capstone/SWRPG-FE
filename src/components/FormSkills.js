import React, { useReducer, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';
import { formReducer } from "../utilities/utilities";

const initialState = {
  astrogation: 0,
  athletics: 0,
  brawl: 0,
  charm: 0,
  coercion: 0,
  computers: 0,
  cool: 0,
  coordination: 0,
  coreWorlds: 0,
  deception: 0,
  discipline: 0,
  education: 0,
  gunnery: 0,
  leadership: 0,
  lore: 0,
  mechanics: 0,
  medicine: 0,
  melee: 0,
  negotiation: 0,
  outerRim: 0,
  perception: 0,
  piloting: 0,
  pilotingSpace: 0,
  rangedHeavy: 0,
  rangedLight: 0,
  resilience: 0,
  skulduggery: 0,
  stealth: 0,
  streetWise: 0,
  survival: 0,
  underworld: 0,
  vigilance: 0,
  xenology: 0,
}

const CREATE_SKILLS = gql`
  mutation ($characterId: Int!, $astrogation: Int!, $athletics: Int!, $brawl: Int!, $charm: Int!, $coercion: Int!, $computers: Int!, $cool: Int!, $coordination: Int!, $coreWorlds: Int!, $deception: Int!, $discipline: Int!, $education: Int!, $gunnery: Int!, $leadership: Int!, $lore: Int!, $mechanics: Int!, $medicine: Int!, $melee: Int!, $negotiation: Int!, $outerRim: Int!, $perception: Int!, $piloting: Int!, $pilotingSpace: Int!, $rangedHeavy: Int!, $rangedLight: Int!, $resilience: Int!, $skulduggery: Int!, $stealth: Int!, $streetWise: Int!, $survival: Int!, $underworld: Int!, $vigilance: Int!, $xenology: Int!){ 
    createSkill(
      input: {
        characterId: $characterId
        astrogation: $astrogation
        athletics: $athletics
        brawl: $brawl
        charm: $charm
        coercion: $coercion
        computers: $computers
        cool: $cool
        coordination: $coordination
        coreWorlds: $coreWorlds
        deception: $deception
        discipline: $discipline
        education: $education
        gunnery: $gunnery
        leadership: $leadership
        lore: $lore
        mechanics: $mechanics
        medicine: $medicine
        melee: $melee
        negotiation: $negotiation
        outerRim: $outerRim
        perception: $perception
        piloting: $piloting
        pilotingSpace: $pilotingSpace
        rangedHeavy: $rangedHeavy
        rangedLight: $rangedLight
        resilience: $resilience
        skulduggery: $skulduggery
        stealth: $stealth
        streetWise: $streetWise
        survival: $survival
        underworld: $underworld
        vigilance: $vigilance
        xenology: $xenology
      }
    ) {							  
        astrogation
        athletics
        brawl
        charm
        coercion
        computers
        cool
        coordination
        coreWorlds
        deception
        discipline
        education
        gunnery
        id
        leadership
        lore
        mechanics
        medicine
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
`;

export const FormSkills = ({ charId, currentStep, setCurrentStep, setCurrentChar }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const history = useHistory();

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: parseInt(e.target.value) })
  }

  const { astrogation, athletics, brawl, charm, coercion, computers, cool, coordination, coreWorlds, deception, discipline, education, gunnery, leadership, lore, mechanics, medicine, melee, negotiation, outerRim, perception, piloting, pilotingSpace, rangedHeavy, rangedLight, resilience, skulduggery, stealth, streetWise, survival, underworld, vigilance, xenology } = state;
  state.characterId = parseInt(charId);

  const [createSkills] = useMutation(CREATE_SKILLS, {
    variables: state
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createSkills();
    history.push('/character');
  }

  useLayoutEffect(() => {
    return () => {
      setCurrentChar(parseInt(charId));
    }
  }, [setCurrentChar, charId])

  if (currentStep !== 'skills') {
    return null;
  }

  return (
    <form>
      <label htmlFor='astrogation'>
        Astrogation
        <input type='number' min='0' max='5' name='astrogation' value={astrogation} onChange={onChange}/>
      </label>
      <label htmlFor='athletics'>
        Athletics
        <input type='number' min='0' max='5' name='athletics' value={athletics} onChange={onChange}/>
      </label>
      <label htmlFor='brawl'>
        Brawl
        <input type='number' min='0' max='5' name='brawl' value={brawl} onChange={onChange}/>
      </label>
      <label htmlFor='charm'>
        Charm
        <input type='number' min='0' max='5' name='charm' value={charm} onChange={onChange}/>
      </label>
      <label htmlFor='coercion'>
        Coercion
        <input type='number' min='0' max='5' name='coercion' value={coercion} onChange={onChange}/>
      </label>
      <label htmlFor='computers'>
        Computers
        <input type='number' min='0' max='5' name='computers' value={computers} onChange={onChange}/>
      </label>
      <label htmlFor='cool'>
        Cool
        <input type='number' min='0' max='5' name='cool' value={cool} onChange={onChange}/>
      </label>
      <label htmlFor='coordination'>
        Coordination
        <input type='number' min='0' max='5' name='coordination' value={coordination} onChange={onChange}/>
      </label>
      <label htmlFor='coreWorlds'>
        Core Worlds
        <input type='number' min='0' max='5' name='coreWorlds' value={coreWorlds} onChange={onChange}/>
      </label>
      <label htmlFor='deception'>
        Deception
        <input type='number' min='0' max='5' name='deception' value={deception} onChange={onChange}/>
      </label>
      <label htmlFor='discipline'>
        Discipline
        <input type='number' min='0' max='5' name='discipline' value={discipline} onChange={onChange}/>
      </label>
      <label htmlFor='education'>
        Education
        <input type='number' min='0' max='5' name='education' value={education} onChange={onChange}/>
      </label>
      <label htmlFor='gunnery'>
        Gunnery
        <input type='number' min='0' max='5' name='gunnery' value={gunnery} onChange={onChange}/>
      </label>
      <label htmlFor='leadership'>
        Leadership
        <input type='number' min='0' max='5' name='leadership' value={leadership} onChange={onChange}/>
      </label>
      <label htmlFor='lore'>
        Lore
        <input type='number' min='0' max='5' name='lore' value={lore} onChange={onChange}/>
      </label>
      <label htmlFor='mechanics'>
        Mechanics
        <input type='number' min='0' max='5' name='mechanics' value={mechanics} onChange={onChange}/>
      </label>
      <label htmlFor='medicine'>
        Medicine
        <input type='number' min='0' max='5' name='medicine' value={medicine} onChange={onChange}/>
      </label>
      <label htmlFor='melee'>
        Melee
        <input type='number' min='0' max='5' name='melee' value={melee} onChange={onChange}/>
      </label>
      <label htmlFor='negotiation'>
        Negotiation
        <input type='number' min='0' max='5' name='negotiation' value={negotiation} onChange={onChange}/>
      </label>
      <label htmlFor='outerRim'>
        Outer Rim
        <input type='number' min='0' max='5' name='outerRim' value={outerRim} onChange={onChange}/>
      </label>
      <label htmlFor='perception'>
        Perception
        <input type='number' min='0' max='5' name='perception' value={perception} onChange={onChange}/>
      </label>
      <label htmlFor='piloting'>
        Piloting
        <input type='number' min='0' max='5' name='piloting' value={piloting} onChange={onChange}/>
      </label>
      <label htmlFor='pilotingSpace'>
        Piloting Space
        <input type='number' min='0' max='5' name='pilotingSpace' value={pilotingSpace} onChange={onChange}/>
      </label>
      <label htmlFor='rangedHeavy'>
        Ranged Heavy
        <input type='number' min='0' max='5' name='rangedHeavy' value={rangedHeavy} onChange={onChange}/>
      </label>
      <label htmlFor='rangedLight'>
        Ranged Light
        <input type='number' min='0' max='5' name='rangedLight' value={rangedLight} onChange={onChange}/>
      </label>
      <label htmlFor='resilience'>
        Resilience
        <input type='number' min='0' max='5' name='resilience' value={resilience} onChange={onChange}/>
      </label>
      <label htmlFor='skulduggery'>
        Skulduggery
        <input type='number' min='0' max='5' name='skulduggery' value={skulduggery} onChange={onChange}/>
      </label>
      <label htmlFor='stealth'>
        Stealth
        <input type='number' min='0' max='5' name='stealth' value={stealth} onChange={onChange}/>
      </label>
      <label htmlFor='streetWise'>
        Street Wise
        <input type='number' min='0' max='5' name='streetWise' value={streetWise} onChange={onChange}/>
      </label>
      <label htmlFor='survival'>
        Survival
        <input type='number' min='0' max='5' name='survival' value={survival} onChange={onChange}/>
      </label>
      <label htmlFor='underworld'>
        Underworld
        <input type='number' min='0' max='5' name='underworld' value={underworld} onChange={onChange}/>
      </label>
      <label htmlFor='vigilance'>
        Vigilance
        <input type='number' min='0' max='5' name='vigilance' value={vigilance} onChange={onChange}/>
      </label>
      <label htmlFor='xenology'>
        Xenology
        <input type='number' min='0' max='5' name='xenology' value={xenology} onChange={onChange}/>
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}