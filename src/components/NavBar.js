import React from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';

export const NavBar = () => {
  const { home, character, dice, skills, logout } = icons

  return (
    <footer>
      <nav className={`nav-bar`}>
        <Orb pathway='/home' icon={home} size='small' />
        <Orb pathway='/character' icon={character} size='medium' />
        <Orb pathway='/dice' icon={dice} size='large' />
        <Orb pathway='/skills' icon={skills} size='medium' />
        <Orb pathway='/home' icon={logout} size='small' />
      </nav>
      <div className={`backdrop`} />
    </footer>
  )
}