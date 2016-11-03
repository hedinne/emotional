import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { getUri } from 'utils/apiWorker';
import Store from 'store/Basic';
import { Link } from 'react-router';
import { observer } from 'mobx-react';


/**
 * Home route component
 */
@observer
export default class Home extends Component {

  /**
   * Render method
   * @return {Component}
   */
  render() {

    if (Store.instaToken) {
      return (
        <div>
          <Helmet title="Home" />
          <Segment>
            <Link to="/playerone">To player one</Link>
          </Segment>
        </div>
      );
    }

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
