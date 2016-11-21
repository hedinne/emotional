import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
// import s from 'routes/less/PlayerTwo.less';
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
    st.usernameTwo = i;
    browserHistory.push('/battle');
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
          <h2>Leitaðu á notenda 2.</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="search" name="username" />
            <input type="submit" value="submit" />
          </form>

          {st.possibleUsersTwo.map((item, index) => (
            <div key={`Not${index}`} onClick={() => { this.selectUser(item.username); }} >
              <img
                src={item.profile_picture}
                alt={item.username}
              />
              <div>
                <h4>{item.full_name}</h4>
                <h4>{`Username: ${item.username}`}</h4>
                <p>Numer: {index}</p>
              </div>
            </div>
          ))}
        </Segment>
      </div>
    );
  }
}
