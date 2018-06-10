import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from 'containers/App';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/users" component={App} />
  </Switch>
);

export default Routes;
