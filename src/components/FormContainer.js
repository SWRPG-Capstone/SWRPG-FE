import React, { useContext, useReducer, useState } from "react";
import { FormSkills } from "./FormSkills";
import { FormCharacteristics } from "./FormCharacteristics";
import { FormCharDetails } from "./FormCharDetails";
import { UserContext } from "../utilities/UserContext";
import { formReducer } from "../utilities/formReducer";

const initialFormState = {
  details: {
    name: '',
    species: '',
    specialization: '',
    career: '',
    age: 0,
    height: '',
    build: '',
    hair: '',
    eyes: '',
  },
  characteristics: {
    agility: 1,
    brawn: 1,
    charPresence: 1,
    cunning: 1,
    intellect: 1,
    willpower: 1
  },
  skills: {}
}

export const FormContainer = () => {
  const [count, setCount] = useState(0)
  const { state: { currentChar } } = useContext(UserContext)
  const handleCount = () => setCount(count + 1)
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  const onChange = (e, type, page) => {
    formDispatch({
      type: type,
      page: page,
      field: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <section className="form-container">
      {count === 0 && <FormCharDetails setCount={handleCount} onChange={onChange} formState={formState.details} />}
      {count === 1 && <FormCharacteristics charId={currentChar} setCount={handleCount} onChange={onChange} formState={formState.characteristics} />}
      {count === 2 && <FormSkills charId={currentChar} setCount={handleCount} />}
    </section>
  )
}