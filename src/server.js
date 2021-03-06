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
import routes, { NotFound } from './routes';
import color from 'cli-color'; // eslint-disable-line


const release = (process.env.NODE_ENV === 'production');
const port = (parseInt(process.env.PORT, 10) || 3000) - !release;
const app = express();
const debugsw = (...args) => debug(color.yellow('server-wait'), ...args);


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

    // Setup the root but don't add $mobx as property to provider.
    const root = (
      <Provider>
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
      root,
      debug: debugsw,
      render,
    });

    // Cancel server rendering
    req.on('close', cancel);
  });
});


// Create HTTP Server
const server = http.createServer(app);

// Start
server.listen(port, err => {
  if (err) throw err;
  debug(color.cyan('http'), `🚀  started on port ${port}`);
});
