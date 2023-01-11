import React, { useEffect, useReducer } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';

import { CharacterPage } from './CharacterPage';
import { DicePage } from './DicePage';
import { FormContainer } from './FormContainer';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { SkillsPage } from './SkillsPage';
import { RegisterPage } from './RegisterPage';

import { Header } from './Header';
import { NavBar } from './NavBar';
import { NavigationAnnouncer } from './NavigationAnnouncer';
import { RouteGuard } from './RouteGuard';

import { UserContext } from '../utilities/UserContext';
import { reducer } from '../utilities/reducer';
import { useToken } from '../utilities/hooks';

const initialState = {
  force: 0,
  ability: 0,
  proficiency: 0,
  boost: 0,
  difficulty: 0,
  challenge: 0,
  setback: 0,
  outcome: [],
  currentChar: null,
  currentUser: null,
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pathname } = useLocation();
  const location = pathname[1]?.toUpperCase() + pathname.slice(2);
  const { token, setToken } = useToken();

  useEffect(() => {
    document.title = `${location} | SWRPG Companion`;
  }, [location]);

  useEffect(() => {
    !state.currentChar && dispatch({ state, action: { type: 'AUTOSET' } });
  }, [state]);

  const setCurrentChar = (id) => {
    dispatch({ state, action: { type: 'SETCHARACTER', character: id } });
  };

  const setCurrentUser = (id) => {
    dispatch({ state, action: { type: 'SETUSER', userID: id } });
  };

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <NavigationAnnouncer location={location} />
      <Header />
      <main id="main">
        <Switch>
          <Route exact path="/login">
            <LoginPage token={token} setToken={setToken} setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <RouteGuard exact path="/home">
            <HomePage currentChar={state.currentChar} setCurrentChar={setCurrentChar} />
          </RouteGuard>
          <RouteGuard exact path="/character">
            <CharacterPage currentChar={state.currentChar} />
          </RouteGuard>
          <RouteGuard exact path="/dice" token={token}>
            <DicePage />
          </RouteGuard>
          <RouteGuard exact path="/skills" token={token}>
            <SkillsPage currentChar={state.currentChar} />
          </RouteGuard>
          <RouteGuard exact path="/create">
            <FormContainer />
          </RouteGuard>
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </main>
      {pathname !== '/create' && <NavBar />}
    </UserContext.Provider>
  );
};
