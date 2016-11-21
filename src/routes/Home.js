import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { getUrl } from 'utils/apiWorker';
import st from 'store/Basic';
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

    if (st.instaTokenLoaded) {
      return (
        <div>
          <Helmet title="Home" />
          <Segment>
            <Link to="/players">To player one</Link>
          </Segment>
        </div>
      );
    }

    return (
      <div>
        <Helmet title="Home" />
        <Segment>
          <h2>
            <a href={getUrl()}>
              Byrja!
            </a>
          </h2>
        </Segment>
      </div>
    );
  }
}
