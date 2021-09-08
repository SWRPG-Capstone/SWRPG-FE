import React, { useEffect, useReducer } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Header } from './Header'
import { HomePage } from "./HomePage";
import { DicePage } from "./DicePage";
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";
import { NavBar } from "./NavBar";
import { UserContext } from "../utilities/UserContext";
import { reducer } from "../utilities/reducer";
import { FormContainer } from "./FormContainer";

const initialState = {
    currentChar: null,
    force: 0,
    ability: 0,
    proficiency: 0,
    boost: 0,
    difficulty: 0,
    challenge: 0,
    setback: 0,
    outcome: []
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation().pathname

  useEffect(() => {
    !state.currentChar &&
      dispatch({ state, action: { type: 'AUTOSET' } })
  }, [state])

  const setCurrentChar = (id) => {
    dispatch({ state, action: { type: 'SETCHARACTER', character: id } })
  }
  

  return (
    <UserContext.Provider value={{ state, dispatch }} >
      <main>
        <Header />
        <Switch>
          <Route exact path="/home">
            <HomePage currentChar={state.currentChar} setCurrentChar={setCurrentChar} />
          </Route>
          <Route exact path="/character">
            <CharacterPage currentChar={state.currentChar} />
          </Route>
          <Route exact path="/dice">
            <DicePage />
          </Route>
          <Route exact path="/skills">
            <SkillsPage currentChar={state.currentChar} />
          </Route>
          <Route exact path="/create">
            <FormContainer />
          </Route>
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
        {location !== '/create' && <NavBar />}
      </main>
    </UserContext.Provider>
  )
}


