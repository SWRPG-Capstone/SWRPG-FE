import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Orb = ({ pathway, icon, size }) => {

  const file = icon.substr(14)
  const iconName = file.substr(0, file.indexOf('.'))
  const history = useHistory();
  const location = useLocation().pathname


  const handleClick = () => {
    return location === '/dice' && size === 'large' ?
    console.log('location') :
    history.push(pathway) 
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


