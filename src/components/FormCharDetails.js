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

// I know you had useEffect here before but I found it odd to create the character immediately when one hasnt been made yet. 

export const FormCharDetails = ({ setCount }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext)

  const [createCharDetails, { loading, error, data }] = useMutation(CREATE_DETAILS, {
    variables: state
  });

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const { name, species, specialization, career, age, height, build, hair, eyes } = state;


  const handleCreate = (e) => {
    // Lauren this is where I am stuck. I am getting undefined from the apollo so I have to hardcode in 1 to get everything to continue smoothly
    e.preventDefault();
    createCharDetails() // <--- I know this works when you assign it to a variable but its locked in as a promise
    userDispatch({ userState, action: { type: 'SETCHARACTER', character: 1 } })
    setCount();
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form className='char-form'>
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
      <button className='button large' onClick={handleCreate}>Next</button>
    </form>
  )
}