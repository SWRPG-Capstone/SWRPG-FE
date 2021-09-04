import React, { useReducer } from "react";
import { Route } from "react-router-dom";
import { Header } from './Header'
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";
import { NavBar } from "./NavBar";
import { UserContext } from "../utilities/UserContext";
import { reducer } from "../utilities/reducer";

const initialState = {
  isAuthorize: false
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <UserContext.Provider value={{ state, dispatch }} >      
      <main>
        <Header />
          <Route path="/character">
            <CharacterPage />
          </Route>
          <Route path="/skills">
            <SkillsPage />
          </Route>
        <NavBar />
      </main>
    </UserContext.Provider>    
  )
}


