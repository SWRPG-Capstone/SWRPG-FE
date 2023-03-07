import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { FormField } from './FormField';

import { CREATE_DETAILS, CREATE_CHARACTERISTICS, CREATE_SKILLS } from '../graphql/mutations';
import { UserContext } from '../utilities/UserContext';

export const FormSkills = ({ onChange, formState }) => {
  const history = useHistory();
  const [validated, setValidated] = useState(null);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const uniqueLabels = {
    coreWorlds: 'core worlds',
    outerRim: 'outer rim',
    piloting: 'piloting planetary',
    pilotingSpace: 'piloting space',
    rangedHeavy: 'ranged heavy',
    rangedLight: 'ranged light',
  };

  const [createCharacteristics, { loading: charsLoading, error: charsError }] = useMutation(CREATE_CHARACTERISTICS);

  const [createSkills, { loading: skillsLoading, error: skillsError }] = useMutation(CREATE_SKILLS, {
    onCompleted() {
      history.push('/character');
    },
  });

  const [createCharDetails, { loading: detailsLoading, error: detailsError }] = useMutation(CREATE_DETAILS, {
    onCompleted(data) {
      userDispatch({ userState, action: { type: 'SETCHARACTER', character: data.createCharacter.id } });
      createCharacteristics({
        variables: {
          ...formState.characteristics,
          characterId: parseInt(data.createCharacter.id),
        },
      });
      createSkills({
        variables: {
          ...formState.skills,
          characterId: parseInt(data.createCharacter.id),
        },
      });
    },
  });

  const validateForm = () => {
    return Object.keys(formState.skills).reduce((valid, stat) => {
      if (formState.skills[stat] < 0 || formState.skills[stat] > 5 || isNaN(formState.skills[stat])) valid = false;
      return valid;
    }, true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      createCharDetails({
        variables: formState.details,
      });
    }
  };

  const formFields = Object.keys(formState.skills).map((name) => {
    return (
      <FormField
        key={name}
        label={uniqueLabels[name] || name}
        name={name}
        type="number"
        min="0"
        max="5"
        value={formState.skills[name]}
        onChange={(e) => onChange(e, 'handle number input', 'skills')}
        autoFocus={name === 'astrogation' ? true : false}
      />
    );
  });

  if (detailsLoading || charsLoading || skillsLoading) return <p>Submitting...</p>;
  if (detailsError || charsError || skillsError) return <p>A submission error occurred!</p>;

  return (
    <form className="skills-form" autoComplete="on">
      {formFields}

      {validated === false && <p className="form-error-msg">Skills must have a value between 0 and 5</p>}

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
