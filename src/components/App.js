import React, { useEffect, useReducer } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Header } from './Header'
import { HomePage } from "./HomePage";
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";
import { NavBar } from "./NavBar";
import { UserContext } from "../utilities/UserContext";
import { reducer } from "../utilities/reducer";
import { FormContainer } from "./FormContainer";

const initialState = {
  isAuthorize: false,
  currentChar: null
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    !state.isAuthorize && state.currentChar &&
    dispatch({ state, action: { type: 'AUTOSET'}})
  }, [state])

console.log(state)
  const setCurrentChar = (id) => {
      dispatch({ state, action: { type: 'SETCHARACTER', character: id }} )
    }
  
    const location = useLocation().pathname

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
            <Route exact path="/skills">
              <SkillsPage currentChar={state.currentChar} />
            </Route>
            <Route exact path="/create">
              <FormContainer setCurrentChar={setCurrentChar} />
            </Route>
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        {location !== '/create' && state.isAuthorize && <NavBar />}
      </main>
    </UserContext.Provider>    
  )
}


