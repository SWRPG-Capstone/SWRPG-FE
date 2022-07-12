import React, { useEffect, useRef }  from 'react';

export const NavigationAnnouncer = ({ location }) => {
  const ref = useRef(null);
  
  // Set focus and announce page after navigation
  // https://github.com/ReactTraining/react-router/issues/5210
  useEffect(() => {
    ref.current?.focus();
  }, [location, ref]);

  return (
    <>
      <span className="nav-msg" ref={ref} tabIndex="-1">Navigated to {location} page</span>
      <div className="skip-links sr-only" tabIndex="0">
        <a href="#navigation">
          Skip to navigation
        </a>
        <a href="#main">
          Skip to content
        </a>
      </div>
    </>
  );
}