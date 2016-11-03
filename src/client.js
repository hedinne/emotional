/* eslint no-underscore-dangle: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'mobx-react';
import routes from './routes';

// Render the application
const render = (Root) => {
  ReactDOM.render(
    <Root>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Root>,
    document.getElementById('root')
  );
};

render(Provider);
