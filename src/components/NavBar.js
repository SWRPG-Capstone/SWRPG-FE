import React from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';

export const NavBar = () => {
  const { home, character, roll, skills, logout } = icons

  return (
    <footer>
      <div className='backdrop'/>
      <section className='nav-bar'>
        <Orb icon={home} />
        <Orb icon={character} />
        <Orb icon={roll} />
        <Orb icon={skills} />
        <Orb icon={logout} />
      </section>
    </footer>
  )
}