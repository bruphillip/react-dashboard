import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { keyStorage } from '../keyStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return !!localStorage.getItem(keyStorage.auth) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
