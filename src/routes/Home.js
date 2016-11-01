import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { getUri } from 'utils/apiWorker';


/**
 * Home route component
 */
export default class Home extends Component {

  /**
   * Render method
   * @return {Component}
   */
  render() {

    return (
      <div>
        <Helmet title="Home" />
        <Segment>
          {getUri() && (
            <a href={getUri()}>
              <h1>Start</h1>
            </a>
          )}
        </Segment>
      </div>
    );
  }
}
