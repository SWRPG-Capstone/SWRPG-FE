import React, { useState } from 'react';

export const FormCharacteristics = ({ setCount, onChange, formState }) => {
  const [validated, setValidated] = useState(null);

  const validateForm = () => {
    return Object.keys(formState).reduce((valid, stat) => {
      if (stat !== 'characterId' && (formState[stat] < 1 || formState[stat] > 5 || !formState[stat])) valid = false;
      return valid;
    }, true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      setCount();
    }
  };

  return (
    <form className='characteristic-form' autoComplete='on'>
      <div className='input-container'>
        <label className='char-heading' htmlFor='agility'>
          agility
          <input className='char-value' type='number' min='1' max='5' name='agility' value={formState.agility} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} autoFocus />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='brawn'>
          brawn
          <input className='char-value' type='number' min='1' max='5' name='brawn' value={formState.brawn} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='charPresence'>
          presence
          <input className='char-value' type='number' min='1' max='5' name='charPresence' value={formState.charPresence} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='cunning'>
          cunning
          <input className='char-value' type='number' min='1' max='5' name='cunning' value={formState.cunning} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='intellect'>
          intellect
          <input className='char-value' type='number' min='1' max='5' name='intellect' value={formState.intellect} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} />
        </label>
      </div>

      <div className='input-container'>
        <label className='char-heading' htmlFor='willpower'>
          willpower
          <input className='char-value' type='number' min='1' max='5' name='willpower' value={formState.willpower} onChange={(e) => onChange(e, 'handle number input', 'characteristics')} />
        </label>
      </div>

      {validated === false && <p className='form-error-msg'>Characteristics must have a value between 1 and 5</p>}

      <button className='button' onClick={handleSubmit}>
        Next
      </button>
    </form>
  );
};
