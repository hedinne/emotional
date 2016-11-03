import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
import { getImages } from 'utils/apiWorker';
import LoaderImage from 'assets/images/loader.svg';
import s from './less/PlayerOne.less';

@observer
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
          {st.selfInfo ? (
            <div>
              <h2>Halló {st.selfInfo.data.full_name}!</h2>
              <h3>Má bjóða þér að greina myndirnar þínar?</h3>
              {/* <button onClick={getImages()}>Hell yeah!</button> */}

              {st.images && (
                <div>
                  <img src={st.images.data[1].images.standard_resolution.url} alt="Hestur" />
                  <img src={st.images.data[2].images.standard_resolution.url} alt="Hestur" />
                </div>
              )}
            </div>
          )
          : (
            <div className={s.loader}>
              <h2>Loading Prince Billy...</h2>
              <img src={LoaderImage} alt="Loader" />
            </div>
          )}
        </Segment>
      </div>
    );
  }
}
