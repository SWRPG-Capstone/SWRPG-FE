import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const RouteGuard = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
    />
  );
};
