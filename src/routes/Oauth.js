import React, { Component } from 'react';
import Segment from 'components/segment';
import axios from 'axios';

export default class Oauth extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      token: '',
      data: '',
    };
  }

  componentDidMount() {
    try {
      this.getToken();
    } catch (e) {
      console.log('Try and catch ', e);
    }

    this.getSelf(location.hash.split('token=').pop());
    this.getSelfResent(location.hash.split('token=').pop());
  }

  getToken() {
    this.setState({
      token: location.hash.split('token=').pop(),
    });
  }

  getSelf(token) {
    axios.get(`https://api.instagram.com/v1/users/self/?access_token=${token}`)
    .then((response) => (
      this.setState({
        selfData: response.data.data,
      })
    ))
    .catch((error) => (console.log(error)));
  }

  getSelfResent(token) {
    console.log('Resent:');
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`, 10)
    .then((response) => (
      console.log('Nýtt efni: ', response)
    )).then((response) => (
      this.setState({
        resent: response,
      })
    ))
    .catch((error) => (console.log(error)));
  }

  render() {
    const {
      token,
      selfData,
      resent,
    } = this.state;

    console.log(selfData);
    console.log(resent);

    return (
      <Segment>
        <h1>You are now logged in</h1>
        {token ? (<h4>Token: {token}</h4>) : null}
        {selfData && (<img src={selfData.profile_picture} alt="Profile pic" />)}
      </Segment>
    );
  }
}
