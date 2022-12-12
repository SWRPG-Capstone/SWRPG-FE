import React, { useState } from 'react';

export const RegisterPage = () => {
  const [formState, setFormState] = useState({ username: '', password: '', confirmPassword: '' });

  const onChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  return (
    <section>
      <h2>Register a new account</h2>
      <form className="char-form">
        <div className="input-container">
          <label className="char-heading" htmlFor="username">
            username
            <input className="char-value" type="text" name="username" autoFocus value={formState.username} onChange={(e) => onChange(e, 'username')} />
          </label>
        </div>
      </form>
    </section>
  );
};
