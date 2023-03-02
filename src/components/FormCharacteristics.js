import React, { useState } from 'react';
import { FormField } from './FormField';

export const FormCharacteristics = ({ setCount, onChange, formState }) => {
  const [validated, setValidated] = useState(null);

  const validateForm = () => {
    return Object.keys(formState).reduce((valid, stat) => {
      if (formState[stat] < 1 || formState[stat] > 5 || isNaN(formState[stat])) valid = false;
      return valid;
    }, true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      setCount();
    }
  };

  const formFields = Object.keys(formState).map((name) => {
    return (
      <FormField
        key={name}
        label={name === 'charPresence' ? 'presence' : name}
        name={name}
        type="number"
        min="1"
        max="5"
        value={formState[name]}
        onChange={(e) => onChange(e, 'handle number input', 'characteristics')}
        autoFocus={name === 'agility' ? true : false}
      />
    );
  });

  return (
    <form className="characteristic-form" autoComplete="on">
      {formFields}

      {validated === false && <p className="form-error-msg">Characteristics must have a value between 1 and 5</p>}

      <button className="button" onClick={handleSubmit}>
        Next
      </button>
    </form>
  );
};
