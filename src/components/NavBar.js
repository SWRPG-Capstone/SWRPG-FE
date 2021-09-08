import React from 'react';
import { Orb } from './Orb';
import { icons } from '../utilities/icons';
import { useLocation } from 'react-router';

export const NavBar = () => {
  const { home, character, dice, skills, logout } = icons
  const location = useLocation().pathname

  return (
    <footer className={`${location === '/create' && 'disable'}`}>
      <div className={`backdrop`} />
      <section className={`nav-bar`}>
        <Orb pathway='/home' icon={home} size='small' />
        <Orb pathway='/character' icon={character} size='medium' />
        <Orb pathway='/dice' icon={dice} size='large' />
        <Orb pathway='/skills' icon={skills} size='medium' />
        <Orb pathway='/home' icon={logout} size='small' />
      </section>
    </footer>
  )
}