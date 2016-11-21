import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';
// import s from 'routes/less/PlayerOne.less';
import api from 'utils/apiWorker';

@observer
export default class ClassName extends Component {

  constructor(...args) {
    super(...args);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    api.getUsers(e.target.username.value);
  }

  selectUser(i) {
    console.log(i);
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
          <h2>Leitaðu á notenda 1.</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="search" name="username" />
            <input type="submit" value="submit" />
          </form>

          {st.possibleUsersOne.map((item, index) => (
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
