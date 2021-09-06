import React from "react";
import { useLocation } from "react-router";

export const Header = () => {
  const location = useLocation().pathname
  const pageTitle = location.slice(1)

  return (
    <header className='main-header'>
      <h1 className='title'>{pageTitle}</h1>
    </header>
  )
}