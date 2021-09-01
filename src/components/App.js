import React from "react";
import { Route } from "react-router-dom";
import { Header } from './Header'
import { SkillsPage } from "./SkillsPage";
import { CharacterPage } from "./CharacterPage";
import { NavBar } from "./NavBar";

export const App = () => {
  return (
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
  );
}

