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
    if (st.instaTokenLoaded) {
      api.getImages(15);

    } else {
      browserHistory.push('/');
    }
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        {React.cloneElement(children, {
          store: st,
        })}
      </div>
    );
  }
}
