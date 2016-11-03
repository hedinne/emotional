import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import st from 'store/Basic';
import { getSelf } from 'utils/apiWorker';
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
    if (!st.instaToken) {
      const token = location.hash.split('token=').pop();
      st.instaToken = token;

      getSelf(token);
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
