import React, { Component, PropTypes } from 'react';
import api from 'utils/instagram';

export default class Test extends Component {

  static propTypes = {
    token: PropTypes.string,
  };

  componentDidMount() {
    api.getSelf(this.props.token);
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}
