import React, { useReducer, useState } from "react";
import { Route } from "react-router-dom";
import { Header } from './Header'
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
          <Route path="/character">
            <CharacterPage currentChar={currentChar} />
          </Route>
          <Route path="/skills">
            <SkillsPage currentChar={currentChar} />
          </Route>
          <Route path="/create">
            <FormContainer setCurrentChar={setCurrentChar} />
          </Route>
        <NavBar />
      </main>
    </UserContext.Provider>    
  )
}


