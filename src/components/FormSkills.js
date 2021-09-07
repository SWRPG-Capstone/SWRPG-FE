import React, { useReducer } from "react";
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

export const FormSkills = ({ charId }) => {
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
    console.log(charId)
    history.push('/character');
  }


  return (
    <form className='skills-form' autoComplete='on'>

      <div className='input-container'>
        <label className='char-heading' htmlFor='astrogation'>
          Astrogation
          <input className='char-value' type='number' min='0' max='5' name='astrogation' value={astrogation} onChange={onChange} autoFocus />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='athletics'>
          Athletics
          <input className='char-value' type='number' min='0' max='5' name='athletics' value={athletics} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='brawl'>
          Brawl
          <input className='char-value' type='number' min='0' max='5' name='brawl' value={brawl} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='charm'>
          Charm
          <input className='char-value' type='number' min='0' max='5' name='charm' value={charm} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='coercion'>
          Coercion
          <input className='char-value' type='number' min='0' max='5' name='coercion' value={coercion} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='computers'>
          Computers
          <input className='char-value' type='number' min='0' max='5' name='computers' value={computers} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='cool'>
          Cool
          <input className='char-value' type='number' min='0' max='5' name='cool' value={cool} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='coordination'>
          Coordination
          <input className='char-value' type='number' min='0' max='5' name='coordination' value={coordination} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='coreWorlds'>
          Core Worlds
          <input className='char-value' type='number' min='0' max='5' name='coreWorlds' value={coreWorlds} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='deception'>
          Deception
          <input className='char-value' type='number' min='0' max='5' name='deception' value={deception} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='discipline'>
          Discipline
          <input className='char-value' type='number' min='0' max='5' name='discipline' value={discipline} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='education'>
          Education
          <input className='char-value' type='number' min='0' max='5' name='education' value={education} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='gunnery'>
          Gunnery
          <input className='char-value' type='number' min='0' max='5' name='gunnery' value={gunnery} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='leadership'>
          Leadership
          <input className='char-value' type='number' min='0' max='5' name='leadership' value={leadership} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='lore'>
          Lore
          <input className='char-value' type='number' min='0' max='5' name='lore' value={lore} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='mechanics'>
          Mechanics
          <input className='char-value' type='number' min='0' max='5' name='mechanics' value={mechanics} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='medicine'>
          Medicine
          <input className='char-value' type='number' min='0' max='5' name='medicine' value={medicine} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='melee'>
          Melee
          <input className='char-value' type='number' min='0' max='5' name='melee' value={melee} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='negotiation'>
          Negotiation
          <input className='char-value' type='number' min='0' max='5' name='negotiation' value={negotiation} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='outerRim'>
          Outer Rim
          <input className='char-value' type='number' min='0' max='5' name='outerRim' value={outerRim} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='perception'>
          Perception
          <input className='char-value' type='number' min='0' max='5' name='perception' value={perception} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='piloting'>
          Piloting
          <input className='char-value' type='number' min='0' max='5' name='piloting' value={piloting} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='pilotingSpace'>
          Piloting Space
          <input className='char-value' type='number' min='0' max='5' name='pilotingSpace' value={pilotingSpace} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='rangedHeavy'>
          Ranged Heavy
          <input className='char-value' type='number' min='0' max='5' name='rangedHeavy' value={rangedHeavy} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='rangedLight'>
          Ranged Light
          <input className='char-value' type='number' min='0' max='5' name='rangedLight' value={rangedLight} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='resilience'>
          Resilience
          <input className='char-value' type='number' min='0' max='5' name='resilience' value={resilience} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='skulduggery'>
          Skulduggery
          <input className='char-value' type='number' min='0' max='5' name='skulduggery' value={skulduggery} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='stealth'>
          Stealth
          <input className='char-value' type='number' min='0' max='5' name='stealth' value={stealth} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='streetWise'>
          Street Wise
          <input className='char-value' type='number' min='0' max='5' name='streetWise' value={streetWise} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='survival'>
          Survival
          <input className='char-value' type='number' min='0' max='5' name='survival' value={survival} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='underworld'>
          Underworld
          <input className='char-value' type='number' min='0' max='5' name='underworld' value={underworld} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='vigilance'>
          Vigilance
          <input className='char-value' type='number' min='0' max='5' name='vigilance' value={vigilance} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='xenology'>
          Xenology
          <input className='char-value' type='number' min='0' max='5' name='xenology' value={xenology} onChange={onChange} />
        </label>
      </div>
      <button className='button' onClick={handleSubmit}>Submit</button>
    </form>
  )
}