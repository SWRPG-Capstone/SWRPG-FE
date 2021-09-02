import React from 'react';
import { NavLink } from 'react-router-dom';

export const Orb = ({ pathway, icon, size }) => {
  const file = icon.substr(14) 
  const iconName = file.substr(0, file.indexOf('.'))

  return (
    <NavLink className={`button  ${size}`} to={pathway} >
      <img className={`icon ${iconName} ${size}`}  src={icon} alt={`${iconName} icon.`} />
      <div className={`orb ${size}`} />
    </NavLink>
  )
}


