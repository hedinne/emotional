import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import Store from 'store/Basic';
// import { getUsers } from 'utils/apiWorker';

@observer
export default class ClassName extends Component {

  componentDidMount() {
    if (!Store.InstaToken) {
      this.storeToken();
    }
  }

  storeToken() {
    Store.InstaToken = location.hash.split('token=').pop();
  }


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
          <h2>Token: {Store.InstaToken}</h2>

          <input type="search" name="googlesearch" />
          <input type="submit" />
        </Segment>
      </div>
    );
  }
}
