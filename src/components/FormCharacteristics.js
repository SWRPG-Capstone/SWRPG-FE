import React, { useReducer } from "react";
import { formReducer } from "../utilities/utilities";

const initialState = {
  agility: 1,
  brawn: 1,
  charPresence: 1,
  cunning: 1,
  intellect: 1,
  willpower: 1,
}

export const FormCharacteristics = ({ charId, currentStep, setCurrentStep }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: parseInt(e.target.value) })
  }

  const { agility, brawn, charPresence, cunning, intellect, willpower } = state;

  if (currentStep !== 'characteristics') {
    return null;
  }

  return (
    <form>
      <label htmlFor='agility'>
        agility
        <input type='number' min='1' max='5' name='agility' value={agility} onChange={onChange}/>
      </label>
      <label htmlFor='brawn'>
        brawn
        <input type='number' min='1' max='5' name='brawn' value={brawn} onChange={onChange}/>
      </label>
      <label htmlFor='charPresence'>
        presence
        <input type='number' min='1' max='5' name='charPresence' value={charPresence} onChange={onChange}/>
      </label>
      <label htmlFor='cunning'>
        cunning
        <input type='number' min='1' max='5' name='cunning' value={cunning} onChange={onChange}/>
      </label>
      <label htmlFor='intellect'>
        intellect
        <input type='number' min='1' max='5' name='intellect' value={intellect} onChange={onChange}/>
      </label>
      <label htmlFor='willpower'>
        willpower
        <input type='number' min='1' max='5' name='willpower' value={willpower} onChange={onChange}/>
      </label>
      <button onClick={(event) => {
        event.preventDefault()
        setCurrentStep('skills')
        console.log(state)
        }}>Next</button>
    </form>
  )
}