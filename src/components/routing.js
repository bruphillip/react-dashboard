import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import dashboard from './dashboard/dashboard';
import Login from './login/Login';
import PrivateRoute from './auth-guard';

const ReactRouter = props => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={dashboard} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
};

export default ReactRouter;
