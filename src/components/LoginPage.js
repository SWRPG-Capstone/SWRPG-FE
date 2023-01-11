import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_USER } from '../graphql/mutations';
import { UserContext } from '../utilities/UserContext';

export const LoginPage = ({ token, setToken, setCurrentUser }) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [submitErrors, setSubmitErrors] = useState({ username: false, password: false });
  const userContext = useContext(UserContext);

  // Mutation - login user
  // If success, save token + user ID and reroute to homepage
  // If error, display message and don't navigate
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      const token = data.loginUser.token;
      const id = parseInt(data.loginUser.user.id);

      // set token
      setToken(token);
      // set user ID
      setCurrentUser(id);
    },
  });

  useEffect(() => {
    const userID = userContext.state.currentUser;

    if (token && userID) {
      // navigate
      console.log('Time to navigate');
    }
  }, [token, userContext.state.currentUser]);

  const getFormValidation = () => {
    const isValid = formState.username.length && formState.password.length ? true : false;
    const errors = Object.keys(submitErrors).reduce((errors, field) => {
      formState[field].length ? (errors[field] = false) : (errors[field] = true);
      return errors;
    }, {});

    return {
      isValid: isValid,
      errors: errors,
    };
  };

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = getFormValidation();
    setSubmitErrors(errors);

    if (!isValid) {
      return;
    }

    console.log('Submitted!');
    loginUser({ variables: formState });
  };

  if (loading) return <p>Submitting...</p>;

  return (
    <section>
      <h2>Log In</h2>
      <form className="char-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="char-heading" htmlFor="username">
            username
            <input
              className="char-value"
              type="text"
              name="username"
              autoFocus
              value={formState.username}
              onChange={onChange}
            />
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
        {error && <p>Incorrect username or password.</p>}
      </form>
      <Link to="/register">Need to create an account?</Link>
    </section>
  );
};
