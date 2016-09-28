/* eslint-disable */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import Home from 'routes/Home';
import Planets from 'routes/Planets';
import Planet from 'routes/Planet';
import About from 'routes/lazy/About';
import NotFound from 'routes/NotFound';
import loadRoute from 'utils/load-route';
import Privacy from 'routes/lazy/Privacy';

export {
  NotFound,
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="planets" component={Planets} />
    <Route path="planet/:id" component={Planet} />
    <Route path="about" getComponent={loadRoute(About)} />
    <Route path="privacy" getComponent={loadRoute(Privacy)} />
    <Route path="*" component={NotFound} />,
  </Route>
);
