import React, { useEffect, useReducer } from "react";
import { gql, useMutation } from '@apollo/client';
import { formReducer } from "../utilities/utilities";

const initialState = {
  name: "",
  species: "",
  specialization: "",
  career: "",
  age: 0,
  height: "",
  build: "",
  hair: "",
  eyes: "",
}

const CREATE_DETAILS = gql`
  mutation ($name: String!, $species: String!, $specialization: String!, $career: String!, $age: Int!, $height: String!, $build: String!, $hair: String!, $eyes: String!){
    createCharacter(
      input: {
        userId: "1"
        name: $name
        species: $species
        specialization: $specialization
        career: $career
        age: $age
        height: $height
        build: $build
        hair: $hair
        eyes: $eyes
      }
    ) {
      id
      name
    }
  }
`;

export const FormCharDetails = ({ currentStep, setCurrentStep, setCharId }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const { name, species, specialization, career, age, height, build, hair, eyes } = state;

  const [createCharDetails, { loading, error, data }] = useMutation(CREATE_DETAILS, {
    variables: state
  });

  const handleCreate = (e) => {
    e.preventDefault();
    createCharDetails();
  }

  useEffect(() => {
    if (data) {
      console.log(data.createCharacter.id)
      setCharId(data.createCharacter.id);
      setCurrentStep('characteristics');
    }
  }, [data, setCharId, setCurrentStep])

  if (currentStep !== 'details') {
    return null;
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form>
      <label htmlFor="name">
        name
        <input type="text" name="name" value={name} onChange={onChange}/>
      </label>
      <label htmlFor="species">
        species
        <input type="text" name="species" value={species} onChange={onChange}/>
      </label>
      <label htmlFor="specialization">
        specialization
        <input type="text" name="specialization" value={specialization} onChange={onChange}/>
      </label>
      <label htmlFor="career">
        career
        <input type="text" name="career" value={career} onChange={onChange}/>
      </label>
      <label htmlFor="age">
        age
        <input type="number" name="age" value={age} onChange={onChange}/>
      </label>
      <label htmlFor="height">
        height
        <input type="text" name="height" value={height} onChange={onChange}/>
      </label>
      <label htmlFor="build">
        build
        <input type="text" name="build" value={build} onChange={onChange}/>
      </label>
      <label htmlFor="hair">
        hair
        <input type="text" name="hair" value={hair} onChange={onChange}/>
      </label>
      <label htmlFor="eyes">
        eyes
        <input type="text" name="eyes" value={eyes} onChange={onChange}/>
      </label>
      <button onClick={handleCreate}>Next</button>
    </form>
  )
}