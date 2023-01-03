import React, { useState } from 'react';

export const LoginPage = () => {
  const [formState, setFormState] = useState({ username: '' });

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Log In</h2>
      <form>
        <div className="input-container">
          <label className="char-heading" htmlFor="username">
            username
            <input className="char-value" type="text" name="username" autoFocus value={formState.username} onChange={onChange} />
          </label>
        </div>
      </form>
    </section>
  );
};
