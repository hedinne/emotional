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
        <Helmet title="Player One" />
        <Segment>
				<div className={s.container}>

          <h2 className={s.heading}>Leitaðu á notenda 2.</h2>
          <form onSubmit={this.handleSubmit}  className={s.form}>
            <input type="search" name="username" />
            <input type="submit" value="submit" />
          </form>

          {st.possibleUsersTwo.map((item, index) => (
            <div key={`Not${index}`} onClick={() => { this.selectUser(item); }} >
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
				</div>
			</Segment>
      </div>
    );
  }
}
