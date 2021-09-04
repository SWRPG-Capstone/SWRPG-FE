import React, { useReducer } from "react";

const initialState = {
  agility: 1,
  brawn: 1,
  charPresence: 1,
  cunning: 1,
  intellect: 1,
  willpower: 1,
}

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export const FormCharacteristics = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: parseInt(e.target.value) })
  }

  const { agility, brawn, charPresence, cunning, intellect, willpower } = state;

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
    </form>
  )
}