import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import ViewComment from './ViewComment';

const ReactRouter = () => {
  return (
    <Switch>
      <Route path="/dashboard/comments" component={ViewComment} />
      <Route path="/dashboard/" component={Home} />
    </Switch>
  );
};

export default ReactRouter;
