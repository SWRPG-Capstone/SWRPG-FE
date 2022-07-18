import React, { useContext } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { rollDice } from '../utilities/dice';
import { UserContext } from '../utilities/UserContext';
import { diceOutcome } from '../utilities/dice';


export const Orb = ({ pathway, icon, size }) => {
  const file = icon.substr(14);
  const iconName = file.substr(0, file.indexOf('.'));
  const history = useHistory();
  const location = useLocation().pathname;
  const { state, dispatch } = useContext(UserContext);
  

  const handleClick = (e) => {
    e.preventDefault();

    if (location === '/dice' && size === 'large') {
      rollDice(state);
      dispatch({state, action: {type: 'SETOUTCOME', results: diceOutcome}});
    } else {
      return history.push(pathway);
    }
  }


  return (
    <NavLink exact to={pathway} className={`nav-link ${size}`} activeClassName={location === "/dice" ? "" : "nav-selected"} onClick={(e) => handleClick(e)}>
      <span className="sr-only">{pathway.slice(1)}</span>
      <img aria-hidden className={`icon ${iconName} ${size}`} src={icon} alt={`${iconName} icon`} />
      <div className={`orb ${size}`} />
    </NavLink>
  )
}


