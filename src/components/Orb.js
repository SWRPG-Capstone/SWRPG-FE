import React from 'react';
import { NavLink } from 'react-router-dom';

export const Orb = ({ icon }) => {
  const iconName = icon.toString()
  return (
    <NavLink className='button' to={`/${iconName}`} >
      <img className='icon' src={iconName} alt={`${iconName}.`} />
    </NavLink>
  )
}