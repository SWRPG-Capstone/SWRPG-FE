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
    </form>
  )
}