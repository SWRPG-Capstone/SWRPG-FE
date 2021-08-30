import React from "react";
import { Route } from "react-router-dom";
import { SkillsContainer } from "./SkillsContainer";

export const App = () => {
  return (
    <>
      <h1>Star Wars RPG Companion</h1>
      <Route path="/skills">
        <SkillsContainer />
      </Route>
    </>
  );
}

