import React, { useState } from "react";

export const FormCharDetails = ({ setCount, onChange, formState }) => {
  const [validated, setValidated] = useState(null);

  const validateForm = () => {
    return Object.keys(formState).reduce((valid, field) => {
      if (field === 'age') {
        if (formState.age <= 0) valid = false;
      } else {
        if (!formState[field].length) valid = false;
      }
      return valid;
    }, true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formComplete = validateForm();
    setValidated(formComplete);
    if (formComplete) {
      setCount();
    }
  }

  return (
    <form className='char-form' onSubmit={handleSubmit} >
      <div className='input-container'>
        <label className='char-heading' htmlFor="name">
          name
          <input className='char-value' type="text" name="name" value={formState.name} onChange={(e) => onChange(e, 'handle text input', 'details')} autoFocus />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="species">
          species
          <input className='char-value' type="text" name="species" value={formState.species} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="specialization">
          specialization
          <input className='char-value' type="text" name="specialization" value={formState.specialization} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="career">
          career
          <input className='char-value' type="text" name="career" value={formState.career} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="age">
          age
          <input className='char-value' type="number" name="age" value={formState.age} onChange={(e) => onChange(e, 'handle number input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="height">
          height
          <input className='char-value' type="text" name="height" value={formState.height} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="build">
          build
          <input className='char-value' type="text" name="build" value={formState.build} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="hair">
          hair
          <input className='char-value' type="text" name="hair" value={formState.hair} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="eyes">
          eyes
          <input className='char-value' type="text" name="eyes" value={formState.eyes} onChange={(e) => onChange(e, 'handle text input', 'details')} />
        </label>
      </div>
      {validated === false && <p className='form-error-msg'>Please fill out all fields to continue</p>}
      <button className='button large' type='submit'>Next</button>
    </form>
  )
}