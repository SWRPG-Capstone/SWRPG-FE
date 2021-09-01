import React from "react";
import { InfoField } from "./InfoField";
import { Characteristics } from "./Characteristics";
import { useQuery, gql } from "@apollo/client";
import { sampleData } from "../mock-data";

const CHARACTER = gql`
  query getCharacter {
    character(id: 1){
      id
      name
      species
      specialization
      career
    } 
  }
`

export const CharacterPage = () => {
  const characterSamp = sampleData.data.attributes.character;
  const { loading, error, data } = useQuery(CHARACTER);

  if (loading) return 'Loading your data...';
  if (error) return `Error! ${error.message}`;

  const characterInfo = (
    <>
    <InfoField heading={Object.keys(data.character)[3]} info={data.character.name}/>
    <InfoField heading={Object.keys(data.character)[5]} info={data.character.species}/>
    <InfoField heading={Object.keys(data.character)[1]} info={data.character.career}/>
    <InfoField heading={Object.keys(data.character)[4]} info={data.character.specialization}/>
    </>
  );
  return (
    <section>
      {characterInfo}
      <h2>Characteristics</h2>
      <Characteristics characteristics={characterSamp.characteristics}/>
    </section>
  )
}