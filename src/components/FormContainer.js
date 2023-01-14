import React, { useContext, useEffect, useReducer, useState } from 'react';

import { FormSkills } from './FormSkills';
import { FormCharacteristics } from './FormCharacteristics';
import { FormCharDetails } from './FormCharDetails';

import { formReducer } from '../utilities/formReducer';
import { UserContext } from '../utilities/UserContext';

const initialFormState = {
  details: {
    userID: '',
    name: '',
    species: '',
    specialization: '',
    career: '',
    age: 0,
    height: '',
    build: '',
    hair: '',
    eyes: '',
  },
  characteristics: {
    agility: 1,
    brawn: 1,
    charPresence: 1,
    cunning: 1,
    intellect: 1,
    willpower: 1,
  },
  skills: {
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
  },
};

export const FormContainer = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const userContext = useContext(UserContext);

  useEffect(() => {
    formDispatch({
      type: 'handle text input',
      page: 'details',
      field: 'userID',
      value: `${userContext.state.currentUser}`,
    });
  }, [userContext.state.currentUser]);

  const onChange = (e, type, page) => {
    formDispatch({
      type: type,
      page: page,
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <section className="form-container">
      {count === 0 && <FormCharDetails setCount={handleCount} onChange={onChange} formState={formState.details} />}
      {count === 1 && (
        <FormCharacteristics setCount={handleCount} onChange={onChange} formState={formState.characteristics} />
      )}
      {count === 2 && <FormSkills setCount={handleCount} onChange={onChange} formState={formState} />}
    </section>
  );
};
