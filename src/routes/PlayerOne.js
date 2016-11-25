import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
import s from 'routes/less/Player.less';
import api from 'utils/apiWorker';

@observer
export default class PlayerOne extends Component {

  constructor(...args) {
    super(...args);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    api.getUsers(e.target.username.value, 0);
  }

  selectUser(i) {
    st.userInfoOne = i;
  }
  /**
   * PLayerOne
   * @return { Component }
   */
  render() {

    return (
      <div className={s.host}>
        <Helmet title="Player One" />
        <Segment>
          <div className={s.container}>

            <h2 className={s.heading}>Select Player One</h2>
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
              {st.possibleUsersOne.map((item, index) => (
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
