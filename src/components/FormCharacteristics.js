import React, { useReducer, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { formReducer } from '../utilities/utilities';

const initialState = {
  agility: 1,
  brawn: 1,
  charPresence: 1,
  cunning: 1,
  intellect: 1,
  willpower: 1
};

const CREATE_CHARACTERISTICS = gql`
  mutation createCharacteristics($agility: Int!, $brawn: Int!, $characterId: Int!, $charPresence: Int!, $cunning: Int!, $intellect: Int!, $willpower: Int!) {
    createCharacteristic(
      input: {
        agility: $agility
        brawn: $brawn
        characterId: $characterId
        charPresence: $charPresence
        cunning: $cunning
        intellect: $intellect
        willpower: $willpower
      }
    ) {
      agility
      brawn
      characterId
      charPresence
      cunning
      intellect
      willpower
    }
  }
`;

export const FormCharacteristics = ({ charId, setCount }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { agility, brawn, charPresence, cunning, intellect, willpower } = state;
  state.characterId = parseInt(charId);
  const [validated, setValidated] = useState(null);

  const [createCharacteristics] = useMutation(CREATE_CHARACTERISTICS, {
    variables: state
  });

  const onChange = e => {
    dispatch({
      field: e.target.name,
      value: parseInt(e.target.value)
    });
  };

  const validateForm = () => {
    return Object.keys(state).reduce((valid, stat) => {
      if (stat !== 'characterId' && (state[stat] < 1 || state[stat] > 5 || !state[stat])) valid = false;
      return valid;
    }, true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      console.log(validateForm());
      setCount();
      // createCharacteristics();
    }
  };

  return (
    <form className='characteristic-form' autoComplete='on'>
      <div className='input-container'>
        <label className='char-heading' htmlFor='agility'>
          agility
          <input className='char-value' type='number' min='0' max='5' name='agility' value={agility} onChange={onChange} autoFocus />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='brawn'>
          brawn
          <input className='char-value' type='number' min='0' max='5' name='brawn' value={brawn} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='charPresence'>
          presence
          <input className='char-value' type='number' min='0' max='5' name='charPresence' value={charPresence} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='cunning'>
          cunning
          <input className='char-value' type='number' min='0' max='5' name='cunning' value={cunning} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='intellect'>
          intellect
          <input className='char-value' type='number' min='0' max='5' name='intellect' value={intellect} onChange={onChange} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='willpower'>
          willpower
          <input className='char-value' type='number' min='0' max='5' name='willpower' value={willpower} onChange={onChange} />
        </label>
      </div>

      <button className='button' onClick={handleSubmit}>
        Next
      </button>
    </form>
  );
};
