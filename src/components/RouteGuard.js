import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const RouteGuard = ({ token, children, ...rest }) => {
  return token ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />;
};
