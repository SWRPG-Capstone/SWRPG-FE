import React, { useContext, useReducer } from "react";
import { gql, useMutation } from '@apollo/client';
import { formReducer } from "../utilities/utilities";
import { UserContext } from "../utilities/UserContext";

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
  mutation createCharDetails($name: String!, $species: String!, $specialization: String!, $career: String!, $age: Int!, $height: String!, $build: String!, $hair: String!, $eyes: String!) {
    createCharacter(
      input: {
        userId: "2"
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
    }
  }
`;

export const FormCharDetails = ({ setCount }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const { name, species, specialization, career, age, height, build, hair, eyes } = state;
  
  const [createCharDetails, { loading, error }] = useMutation(CREATE_DETAILS, {
    onCompleted(data) {
      userDispatch({ userState, action: { type: 'SETCHARACTER', character: data.createCharacter.id } });
    }
  });

  const onChange = (e) => {
    dispatch({ 
      field: e.target.name, 
      value: e.target.value });
  }

  const handleCreate = (e) => {
    e.preventDefault();
    createCharDetails({
      variables: state 
    });
    setCount();
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form className='char-form' onSubmit={handleCreate} >
      <div className='input-container'>
        <label className='char-heading' htmlFor="name">
          name
          <input className='char-value' type="text" name="name" value={name} onChange={onChange} autoFocus />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="species">
          species
          <input className='char-value' type="text" name="species" value={species} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="specialization">
          specialization
          <input className='char-value' type="text" name="specialization" value={specialization} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="career">
          career
          <input className='char-value' type="text" name="career" value={career} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="age">
          age
          <input className='char-value' type="number" name="age" value={age} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="height">
          height
          <input className='char-value' type="text" name="height" value={height} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="build">
          build
          <input className='char-value' type="text" name="build" value={build} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="hair">
          hair
          <input className='char-value' type="text" name="hair" value={hair} onChange={onChange} />
        </label>
      </div>
      <div className='input-container'>
        <label className='char-heading' htmlFor="eyes">
          eyes
          <input className='char-value' type="text" name="eyes" value={eyes} onChange={onChange} />
        </label>
      </div>
      <button className='button large' type='submit'>Next</button>
    </form>
  )
}