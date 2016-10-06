/* eslint no-console: 0 */
import http from 'http';
import express from 'express';
import compression from 'compression';
import React from 'react';
import Helmet from 'react-helmet';
import { Router, RouterContext, match } from 'react-router';
import { serverWaitRender } from 'mobx-server-wait';
import debug from 'utils/debug';
import { Provider } from 'mobx-react';
import _omit from 'lodash/omit';
import routes, { NotFound } from './routes';
import Store from './store';
import color from 'cli-color'; // eslint-disable-line


const release = (process.env.NODE_ENV === 'production');
const port = (parseInt(process.env.PORT, 10) || 3000) - !release;
const app = express();
const debugsw = (...args) => debug(color.yellow('server-wait'), ...args);
const api = require('instagram-node').instagram();


// Set view engine
app.use(compression());
app.use(express.static('./src/assets/favicon'));
app.use(express.static('./build'));

// Route handler that rules them all!
app.get('*', (req, res) => {

  // Start writing output
  res.write('<!doctype html>');
  res.write(`<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/client.js" defer></script>
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <!-- CHUNK -->`);

  // Some debugging info
  debug(color.cyan('http'), '%s - %s %s', req.ip, req.method, req.url);

  // Do a router match
  match({
    routes: (<Router>{routes}</Router>),
    location: req.url,
  },
  (err, redirect, props) => {

    // Sanity checks
    if (err) {
      return res.status(500).send(err.message);
    } else if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    } else if (props.components.some(component => component === NotFound)) {
      res.status(404);
    }

    // Setup store and context for provider
    const store = new Store();

    // Setup the root but don't add $mobx as property to provider.
    const root = (
      <Provider {..._omit(store, k => (k !== '$mobx'))}>
        <RouterContext {...props} />
      </Provider>
    );

    // Main render function
    const render = (html, state) => {
      const { meta, title, link } = Helmet.rewind();
      res.write(`${meta} ${title} ${link}
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__INITIAL_STATE__ = '${state}';
    </script>
  </body>
</html>`);
      res.end();
    };

    // Render when all actions have completed their promises
    const cancel = serverWaitRender({
      store,
      root,
      debug: debugsw,
      render,
    });

    // Cancel server rendering
    req.on('close', cancel);
  });
});

// Instagram token
api.use({
  client_id: 'cf5856ebccbb459aaba3e64adc37b54b',
  client_secret: 'b5eeaea536d149b090b220e85f004e88',
});

const redirectUri = 'http://localhost:3000/oauth';

exports.authorize_user = (req, res) => {
  console.log('authorize_user keyrir');
  res.redirect(api.get_authorization_url(redirectUri, { scope: ['likes'], state: 'a state' }));

};

exports.handleauth = (req, res) => {
  console.log('handleauth keyrir');

  api.authorize_user(req.query.code, redirectUri, (err, result) => {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is %o', result.access_token);
      res.send('You made it!!');
    }
  });
};

app.get('/oauth', exports.authorize_user);

app.get('/oauth', exports.handleauth);

// Create HTTP Server
const server = http.createServer(app);

// Start
server.listen(port, err => {
  if (err) throw err;
  debug(color.cyan('http'), `🚀  started on port ${port}`);
});
