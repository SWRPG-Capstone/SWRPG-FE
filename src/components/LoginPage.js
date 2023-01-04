import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [submitErrors, setSubmitErrors] = useState({ username: false, password: false });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.username.length) {
      setSubmitErrors({ ...submitErrors, username: true });
      return;
    }

    if (!formState.password.length) {
      setSubmitErrors({ ...submitErrors, password: true });
      return;
    }

    console.log('Submit!');
  };

  return (
    <section>
      <h2>Log In</h2>
      <form className="char-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="char-heading" htmlFor="username">
            username
            <input className="char-value" type="text" name="username" autoFocus value={formState.username} onChange={onChange} />
          </label>
          {submitErrors.username && <span className="inline-error">Please enter a username</span>}
        </div>
        <div className="input-container">
          <label className="char-heading" htmlFor="password">
            password
            <input className="char-value" type="text" name="password" value={formState.password} onChange={onChange} />
          </label>
          {submitErrors.password && <span className="inline-error">Please enter a password</span>}
        </div>
        <button className="button large" type="submit">
          Submit
        </button>
      </form>
      <Link to="/register">Need to create an account?</Link>
    </section>
  );
};
