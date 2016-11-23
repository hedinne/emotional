import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import { observer } from 'mobx-react';
import st from 'store/Basic';
import api from 'utils/apiWorker';
import { browserHistory } from 'react-router';

/**
 * Battle container
 * @return { Component }
 */

@observer
export default class ContainerBattle extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    if (st.instaToken && st.userInfoOne && st.userInfoTwo) {
      if (!st.getImages) {
        api.getImagesOne(20);
        api.getImagesTwo(20);
      }
    } else {
      browserHistory.push('/');
    }
  }

  render() {
    return this.props.children;
  }
}
