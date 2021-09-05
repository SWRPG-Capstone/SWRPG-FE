import React, { useReducer, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Header } from './Header'
import { HomePage } from "./HomePage";
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";
import { NavBar } from "./NavBar";
import { UserContext } from "../utilities/UserContext";
import { reducer } from "../utilities/reducer";
import { FormContainer } from "./FormContainer";

const initialState = {
  isAuthorize: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentChar, setCurrentChar] = useState(1)
  
  return (
    <UserContext.Provider value={{ state, dispatch }} >      
      <main>
        <Header />
          <Switch>
            <Route exact path="/home">
              <HomePage currentChar={currentChar} setCurrentChar={setCurrentChar} />
            </Route>
            <Route exact path="/character">
              <CharacterPage currentChar={currentChar} />
            </Route>
            <Route exact path="/skills">
              <SkillsPage currentChar={currentChar} />
            </Route>
            <Route exact path="/create">
              <FormContainer setCurrentChar={setCurrentChar} />
            </Route>
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        <NavBar />
      </main>
    </UserContext.Provider>    
  )
}


