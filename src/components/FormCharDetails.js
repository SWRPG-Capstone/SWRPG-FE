import React, { useReducer } from "react";

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

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export const FormCharDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const { name, species, specialization, career, age, height, build, hair, eyes } = state;

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
      <button onClick={(event) => {
        event.preventDefault()
        console.log(state)
        }}>Next</button>
    </form>
  )
}