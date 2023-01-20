import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LOGIN_USER } from '../graphql/mutations';
import { UserContext } from '../utilities/UserContext';

export const LoginPage = ({ token, setToken, setCurrentUser }) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [submitErrors, setSubmitErrors] = useState({ username: false, password: false });
  const [invalidLogin, setInvalidLogin] = useState(false);
  const userContext = useContext(UserContext);
  let history = useHistory();

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      if (data.loginUser === null) {
        setInvalidLogin(true);
        return;
      }

      const token = data.loginUser.token;
      const id = parseInt(data.loginUser.user.id);

      setToken(token);
      setCurrentUser(id);
    },
  });

  useEffect(() => {
    const userID = userContext.state.currentUser;

    if (token && userID) {
      history.push('/home');
    }
  }, [history, token, userContext.state.currentUser]);

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

    if (invalidLogin) setInvalidLogin(false);

    const { isValid, errors } = getFormValidation();
    setSubmitErrors(errors);

    if (!isValid) {
      return;
    }

    loginUser({ variables: formState });
  };

  if (loading) return <p>Submitting...</p>;

  return (
    <section className="login-page">
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
        {invalidLogin && <p className="login-error">Incorrect username or password.</p>}
      </form>
      {error && <p>A submission error occurred, please try again later.</p>}
      <Link to="/register">Need to create an account?</Link>
    </section>
  );
};
