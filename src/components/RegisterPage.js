import React, { useState } from 'react';
import { useDebouncedValue } from '../utilities/hooks';

export const RegisterPage = () => {
  const [formState, setFormState] = useState({ username: '', password: '', confirmPassword: '' });
  const [isTyping, setIsTyping] = useState({ username: false, password: false, confirmPassword: false });
  const debouncedUsername = useDebouncedValue(formState.username, 600);

  const onChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });

    if (!isTyping[field]) {
      setTimeout(() => {
        setIsTyping({ ...isTyping, [field]: true });
      }, 600);
    }
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

  const validatePassword = (input) => {
    if (input.length < 8 || input.length > 24) return false;
    const validPassRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;
    if (!validPassRegex.test(input)) return false;
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
          {isTyping.username && !validateUsername(debouncedUsername) && <span className="inline-error">Username must be between 3 and 24 characters</span>}
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
