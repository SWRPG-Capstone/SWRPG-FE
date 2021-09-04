import React, { useReducer } from "react";

const initialState = {
  astrogation: 0,
  athletics: 0,
  brawl: 0,
  charm: 0,
  coercion: 0,
  computers: 0,
  cool: 0,
  coordination: 0,
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

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export const SkillsForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: parseInt(e.target.value) })
  }

  const { astrogation, athletics, brawl, charm, coercion, computers, cool, coordination, deception, discipline, education, gunnery, leadership, lore, mechanics, medicine, melee, negotiation, outerRim, perception, piloting, pilotingSpace, rangedHeavy, rangedLight, resilience, skulduggery, stealth, streetWise, survival, underworld, vigilance, xenology } = state;

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
    </form>
  )
}