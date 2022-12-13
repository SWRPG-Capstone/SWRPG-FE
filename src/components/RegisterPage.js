import React, { useState } from 'react';

export const RegisterPage = () => {
  const [formState, setFormState] = useState({ username: '', password: '', confirmPassword: '' });

  const onChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
    // debounced error checking? make sure passwords match, length is correct...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit!');
    // Error message for existing username?
    // If user cannot be created, stay on this page and show an error
    // If submission is successful, reset the state and route to login
  };

  const validateUsername = (input) => {
    if (input.length < 3 || input.length > 24) return false;
    if (input[0] === ' ' || input[input.length - 1] === ' ') return false;
    return true;
  };

  return (
    <section>
      <h2>Register a new account</h2>
      <form className="char-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="char-heading" htmlFor="username">
            username
            <input className="char-value" type="text" name="username" autoFocus value={formState.username} onChange={(e) => onChange(e, 'username')} />
          </label>
        </div>
        <div className="input-container">
          <label className="char-heading" htmlFor="password">
            password
            <input className="char-value" type="text" name="password" value={formState.password} onChange={(e) => onChange(e, 'password')} />
          </label>
        </div>
        <div className="input-container">
          <label className="char-heading" htmlFor="confirmPassword">
            confirm password
            <input className="char-value" type="text" name="confirmPassword" value={formState.confirmPassword} onChange={(e) => onChange(e, 'confirmPassword')} />
          </label>
        </div>
        <button className="button large" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
