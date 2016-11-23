import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
import s from 'routes/less/Player.less';
import api from 'utils/apiWorker';
import { browserHistory } from 'react-router';

@observer
export default class PlayerTwo extends Component {

  constructor(...args) {
    super(...args);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    api.getUsersTwo(e.target.username.value);
  }

  selectUser(i) {
    st.userInfoTwo = i;
    browserHistory.push('/battle');
  }
  /**
   * PLayerOne
   * @return { Component }
   */
  render() {

    return (
      <div className={s.host}>
        <Helmet title="Player Two" />
        <Segment>
          <div className={s.container}>

            <h2 className={s.heading}>Select Player #2</h2>
            <form onSubmit={this.handleSubmit} className={s.form}>
              <input
                type="search"
                name="username"
                placeholder="Name"
                className={s.search}
                autoComplete="off"
                autoFocus
              />
              <input type="submit" value="Find" className={s.button} />
            </form>
            <div className={s.userWrapper}>
              {st.possibleUsersTwo.map((item, index) => (
                <div
                  key={`Not${index}`}
                  onClick={() => { this.selectUser(item); }}
                  className={s.user}
                  tabIndex="0"
                >
                  <img
                    src={item.profile_picture}
                    alt={item.username}
                    className={s.img}
                  />
                  <div>
                    <h4 className={s.title}>
                      {item.full_name} <br />
                      - {item.username} -
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}
