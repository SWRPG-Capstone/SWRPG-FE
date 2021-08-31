import React from "react";
import { Route } from "react-router-dom";
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";

export const App = () => {
  return (
    <>
      <h1>Star Wars RPG Companion</h1>
      <Route path="/character">
        <CharacterPage />
      </Route>
      <Route path="/skills">
        <SkillsPage />
      </Route>
    </>
  );
}

