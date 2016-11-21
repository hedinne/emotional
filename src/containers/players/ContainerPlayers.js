import React, { Component } from 'react'; //eslint-disable-line
import { observer } from 'mobx-react';
import st from 'store/Basic';
// import api from 'utils/apiWorker';
import { browserHistory } from 'react-router';
import PlayerOne from 'routes/PlayerOne';

/**
 * PlayerOne containers
 * @return {Component}
 */

@observer
export default class ContainerOne extends Component {

  componentDidMount() {
    if (!st.instaTokenLoaded) {
      const token = location.hash.split('token=').pop();

      if (!token || token.length < 30) {
        browserHistory.push('/');
      } else {
        st.instaToken = token;
      }
    }
  }


  /**
   * Render Method
   * @return {Component}
   */
  render() {

    if (st.playerOneInfo) {
      console.log('Should return playerTwo');
      return <PlayerOne />;
    }
    return <PlayerOne />;
  }
}
