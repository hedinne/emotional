/* eslint global-require: 0 */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import helmetDefaults from 'utils/helmet';
import { IndexLink, Link } from 'react-router';
import AppLayout, { Content } from 'components/app-layout';
import Header from 'components/header';
import Navigation from 'components/navigation';
import st from 'store/Basic';
import { getUrl } from 'utils/apiWorker';

// Check if we should show devtool
const showDevTool = (process.env.NODE_ENV !== 'production');

// Otherwise render null
const DevTools = showDevTool ? require('utils/devtools') : () => null;

/**
 * Main app container
 * @return {Component}
 */
export default class App extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidUpdate() {
    if (!st.instaTokenLoaded) {
      getUrl();
    }
  }

  /**
   * Render Method
   * @return {Component}
   */
  render() {
    const { children } = this.props;

    return (
      <AppLayout>
        <Helmet {...helmetDefaults} />
        <Header>
          <Navigation>
            <IndexLink to="/">Home</IndexLink>
            <Link to="/privacy">Privacy</Link>
            <Link to="/about">About</Link>
          </Navigation>
        </Header>

        <Content>
          {children}
        </Content>

        <DevTools />
      </AppLayout>
    );
  }
}
