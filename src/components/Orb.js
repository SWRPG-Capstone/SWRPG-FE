import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { rollDice } from '../utilities/dice';
import { UserContext } from '../utilities/UserContext';
import { diceOutcome } from '../utilities/dice';


export const Orb = ({ pathway, icon, size }) => {
  const file = icon.substr(14)
  const iconName = file.substr(0, file.indexOf('.'))
  const history = useHistory();
  const location = useLocation().pathname
  const { state, dispatch } = useContext(UserContext)
  

  const handleClick = () => {
    if (location === '/dice' && size === 'large') {
      rollDice(state)
      dispatch({state, action: {type: 'SETOUTCOME', results: diceOutcome}})
    } else {
      return history.push(pathway);
    }
  }


  return (
    <button className={`button ${size}`} onClick={handleClick} >
      <img className={`icon ${iconName} ${size}`} src={icon} alt={`${iconName} icon.`} />
      <div className={`orb ${size}`} />
    </button>
  )
}


