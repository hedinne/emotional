import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';

export default class ClassName extends Component {

  /**
   * PLayerOne
   * @return { Component }
   */
  render() {
    return (
      <div>
        <Helmet title="Player One" />
        <Segment>
          <h2>Find player one.</h2>

          <input type="search" name="googlesearch" />
          <input type="submit" />
        </Segment>
      </div>
    );
  }
}
