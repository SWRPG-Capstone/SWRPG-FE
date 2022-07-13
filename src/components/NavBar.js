import React from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';

export const NavBar = () => {
  const { home, character, dice, skills, logout } = icons

  return (
    <footer>
      <nav id="navigation">
        <ul className="nav-bar">
          <li><Orb pathway='/home' icon={home} size='small' /></li>
          <li><Orb pathway='/character' icon={character} size='medium' /></li>
          <li><Orb pathway='/dice' icon={dice} size='large' /></li>
          <li><Orb pathway='/skills' icon={skills} size='medium' /></li>
          <li><Orb pathway='/home' icon={logout} size='small' /></li>
        </ul>
      </nav>
      <div className={`backdrop`} />
    </footer>
  )
}