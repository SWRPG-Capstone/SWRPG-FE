import React from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';

export const NavBar = () => {
  const { home, character, roll, skills, logout } = icons

  return (
    <footer>
      <div className='backdrop'/>
      <section className='nav-bar'>
        <Orb pathway='/home' icon={home} size='small'/>
        <Orb pathway='/character' icon={character} size='medium' />
        <Orb pathway='/roll' icon={roll} size='large' />
        <Orb pathway='/skills' icon={skills} size='medium' />
        <Orb pathway='/home' icon={logout} size='small' />
      </section>
    </footer>
  )
}