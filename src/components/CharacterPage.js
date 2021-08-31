import React from "react";
import { InfoField } from "./InfoField";
import { sampleData } from "../mock-data";

export const CharacterPage = () => {
  const character = sampleData.data.attributes.character;
  const characterInfo = (
    <>
    <InfoField heading={Object.keys(character)[0]} info={character.name}/>
    <InfoField heading={Object.keys(character)[1]} info={character.species}/>
    <InfoField heading={Object.keys(character)[2]} info={character.career}/>
    <InfoField heading={Object.keys(character)[3]} info={character.specialization}/>
    </>
  );
  return (
    <section>
      {characterInfo}
    </section>
  )
}