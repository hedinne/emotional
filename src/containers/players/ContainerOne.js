import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import { observer } from 'mobx-react';
import st from 'store/Basic';
import api from 'utils/apiWorker';
import { browserHistory } from 'react-router';

/**
 * PlayerOne containers
 * @return {Component}
 */

@observer
export default class ContainerOne extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    if (!st.instaTokenLoaded) {
      const token = location.hash.split('token=').pop();

      if (!token || token.length < 30) {
        browserHistory.push('/');
      } else {
        st.instaToken = token;

        api.getSelf();
      }
    }
  }


  /**
   * Render Method
   * @return {Component}
   */
  render() {
    const {
      children,
    } = this.props;

    return children;
  }
}
