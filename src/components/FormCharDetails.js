import React, { useState } from 'react';
import { FormField } from './FormField';

export const FormCharDetails = ({ setCount, onChange, formState }) => {
  const [validated, setValidated] = useState(null);
  const fieldNames = Object.keys(formState).filter((key) => key !== 'userID');

  const validateForm = () => {
    return fieldNames.reduce((valid, field) => {
      if (field === 'age') {
        if (formState.age <= 0) valid = false;
      } else {
        if (!formState[field].length) valid = false;
      }
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

  const formFields = fieldNames.map((name) => {
    const fieldType = name === 'age' ? 'number' : 'text';

    return (
      <FormField
        key={name}
        name={name}
        type={fieldType}
        value={formState[name]}
        onChange={(e) => onChange(e, `handle ${fieldType} input`, 'details')}
      />
    );
  });

  return (
    <form className="char-form" onSubmit={handleSubmit}>
      {formFields}
      {validated === false && <p className="form-error-msg">Please fill out all fields to continue</p>}
      <button className="button large" type="submit">
        Next
      </button>
    </form>
  );
};
