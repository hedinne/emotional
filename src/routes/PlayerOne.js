import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
import LoaderImage from 'assets/images/loader.svg';
import s from 'routes/less/PlayerOne.less';
import { Link } from 'react-router';

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
            <div className={s.content}>
              <div className={s.text}>
                <h2>Halló {st.selfInfo.data.full_name.split(' ')[0]}!</h2>
                <h3>Má bjóða þér að greina myndirnar þínar?</h3>
                <Link to="/battle">Analyze my photos!</Link>
              </div>
              <div className={s.imageWrapper}>
                <img className={s.img} src={st.selfInfo.data.profile_picture} alt="ProfilePic" />
              </div>
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
