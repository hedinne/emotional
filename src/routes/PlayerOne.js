import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import Store from 'store/Basic';
import { getSelf, getImages } from 'utils/apiWorker';
import LoaderImage from 'assets/images/loader.svg';
import s from './less/PlayerOne.less';

@observer
export default class ClassName extends Component {

  componentDidMount() {
    if (!Store.instaToken) {
      this.storeToken();
    }
  }

  componentDidUpdate() {

  }

  storeToken() {
    Store.instaToken = location.hash.split('token=').pop();
  }

  /**
   * PLayerOne
   * @return { Component }
   */
  render() {

    if (!Store.selfInfo && Store.instaToken) {
      getSelf();
    }

    return (
      <div>
        <Helmet title="Player One" />
        <Segment>
          {Store.selfInfo ? (
            <div>
              <h2>Halló {Store.selfInfo.data.full_name}!</h2>
              <h3>Má bjóða þér að greina myndirnar þínar?</h3>
              <button onChange={getImages()}>Hell yeah!</button>

              {Store.images && (
                <img src={Store.images.data[1].images.standard_resolution.url} alt="Hestur" />
              )}
            </div>
          )
          : (
            <div className={s.loader}>
              <img src={LoaderImage} alt="Loader" />
            </div>
          )}
        </Segment>
      </div>
    );
  }
}
