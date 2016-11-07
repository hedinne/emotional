import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/app';
import ContainerOne from 'containers/players/ContainerOne';
import ContainerBattle from 'containers/players/ContainerBattle';

import Home from 'routes/Home';
import Privacy from 'routes/Privacy';
import PlayerOne from 'routes/PlayerOne';
import Battle from 'routes/Battle';
import About from 'routes/lazy/About';
import NotFound from 'routes/NotFound';
import loadRoute from 'utils/load-route';

export {
  NotFound,
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="playerone" component={ContainerOne}>
      <IndexRoute component={PlayerOne} />
    </Route>

    <Route path="battle" component={ContainerBattle}>
      <IndexRoute component={Battle} />
    </Route>

    <Route path="about" getComponent={loadRoute(About)} />
    <Route path="privacy" component={Privacy} />
    <Route path="*" component={NotFound} />
  </Route>
);
