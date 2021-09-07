import React, { useContext } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { randomizeDice } from '../utilities/dice';
import { UserContext } from '../utilities/UserContext'

export const Orb = ({ pathway, icon, size }) => {
  // const { state: { isAuthorize } } = useContext(UserContext)
  const file = icon.substr(14)
  const iconName = file.substr(0, file.indexOf('.'))
  const history = useHistory();
  const location = useLocation().pathname


  const handleClick = () => {
    console.log(location)
    return location !== '/dice' ?
    history.push(pathway) :
    randomizeDice()
  }

  return (
    <>
      <button className={`button ${size} '}`} onClick={handleClick} >
        <img className={`icon ${iconName} ${size}`} src={icon} alt={`${iconName} icon.`} />
        <div className={`orb ${size}`} />
      </button>
    </>
  )
}


