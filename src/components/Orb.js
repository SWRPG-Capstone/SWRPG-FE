import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../utilities/UserContext'

export const Orb = ({ pathway, icon, size }) => {
  const { state: { isAuthorize }  } = useContext(UserContext)
  const file = icon.substr(14) 
  const iconName = file.substr(0, file.indexOf('.'))

  return (
    <>
    {/* Remove the !-bang operator to disable the hide feature for developement */}
    <NavLink className={`button ${size} ${!isAuthorize && 'disabled'}`} to={pathway} >
      <img className={`icon ${iconName} ${size}`}  src={icon} alt={`${iconName} icon.`} />
      <div className={`orb ${size}`} />
    </NavLink>
    </>
  )
}


