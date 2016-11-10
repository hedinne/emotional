import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { Link } from 'react-router';
import missingImage from 'assets/images/missing.jpg';

/**
 * Home route component
 */
export default class NotFound extends Component {

  /**
   * Render method
   * @return {Component}
   */
  render() {
    return (
      <div>
        <Helmet title="Page not found." />
        <Segment>
          <div>
            <h1>Því miður, þessi síða er ekki til</h1>
            <Link to="/">Aftur á upphafssíðu!</Link>
            <img src={missingImage} alt="" />
          </div>
        </Segment>
      </div>
    );
  }
}
