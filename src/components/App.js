import React from "react";
import { Route } from "react-router-dom";
import { SkillsPage } from "./SkillsPage";

export const App = () => {
  return (
    <>
      <h1>Star Wars RPG Companion</h1>
      <Route path="/skills">
        <SkillsPage />
      </Route>
    </>
  );
}

