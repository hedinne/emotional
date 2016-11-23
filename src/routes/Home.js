import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { getUrl } from 'utils/apiWorker';
import st from 'store/Basic';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import s from './less/Home.less';


/**
 * Home route component
 */
@observer
export default class Home extends Component {

  componentDidMount() {
    if (st.userInfoOne || st.userInfoTwo) {
      st.userInfoOne = {};
      st.possibleUsersOne = [];
      st.userInfoTwo = {};
      st.possibleUsersTwo = [];
      st.happyOne = {
        score: 0,
        link: '',
      };
      st.happyTwo = {
        score: 0,
        link: '',
      };
      st.emoOne = {
        count: 0,
        emotions: {
          anger: 0,
          contempt: 0,
          disgust: 0,
          fear: 0,
          happiness: 0,
          neutral: 0,
          sadness: 0,
          surprise: 0,
        },
      };
      st.emoTwo = {
        count: 0,
        emotions: {
          anger: 0,
          contempt: 0,
          disgust: 0,
          fear: 0,
          happiness: 0,
          neutral: 0,
          sadness: 0,
          surprise: 0,
        },
      };
    }
  }

  /**
   * Render method
   * @return {Component}
   */
  render() {

    if (st.instaTokenLoaded) {
      return (
        <div>
          <Helmet title="Home" />
          <Segment>
            <Link to="/players">To player one</Link>
          </Segment>
        </div>
      );
    }

    return (
      <div className={s.host}>
        <Helmet title="Home" />
        <Segment>
          <div className={s.container}>
            <h2 className={s.heading}>
              Set your friends up for an emotional duel.<br />
              Settle once and for all who is living a more colorful life
            </h2>
            {st.instaToken ? (
              <Link to="/players" className={s.anchor}>
                <div className={s.button}>
                  Play Again!
                </div>
              </Link>
            ) : (
            <a href={getUrl()} className={s.anchor}>
              <div className={s.button}>
                Let's play!
              </div>
            </a>
            )}
          </div>
        </Segment>
      </div>
    );
  }
}
