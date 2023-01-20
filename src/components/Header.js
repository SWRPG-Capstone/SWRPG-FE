import React from 'react';
import { useLocation } from 'react-router';

export const Header = () => {
  const location = useLocation().pathname;
  const pageTitle = location.slice(1);
  let heading = pageTitle;

  switch (pageTitle) {
    case 'login':
      heading = 'log in';
      break;
    default:
      break;
  }

  return (
    <header className="main-header">
      <h1 className="title">{heading}</h1>
    </header>
  );
};
