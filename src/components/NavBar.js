import React, { useContext } from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';
import { UserContext } from '../utilities/UserContext';

export const NavBar = () => {

    const { state: { isAuthorize }  } = useContext(UserContext)

  const { home, character, dice, skills, logout } = icons

  return (
    <footer>
      <div className={`backdrop ${!isAuthorize && 'disabled'}`} />
      <section className={`nav-bar ${!isAuthorize && 'disabled'}`}>
        <Orb pathway='/home' icon={home} size='small'/>
        <Orb pathway='/character' icon={character} size='medium' />
        <Orb pathway='/dice' icon={dice} size='large' />
        <Orb pathway='/skills' icon={skills} size='medium' />
        <Orb pathway='/home' icon={logout} size='small' />
      </section>
    </footer>
  )
}