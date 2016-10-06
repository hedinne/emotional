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
  }

  getToken() {
    this.setState({
      token: location.hash.split('token=').pop(),
    });
  }

  getSelf() {
    axios.get(`https://api.instagram.com/v1/users/self/?access_token=${this.state.token}`)
    .then((response) => (
      this.setState({
        data: response.data.data,
      })))
    .catch((error) => (console.log(error)));
  }

  getSelfResent() {
    console.log('Resent:');
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.state.token}`, 10)
    .then((response) => (
      console.log('Nýtt efni: ', response)))
    .catch((error) => (console.log(error)));
  }


  render() {
    const {
      token,
      data,
    } = this.state;

    if (token) {
      this.getSelf();
      this.getSelfResent();
    }

    return (
      <Segment>
        <h1>Vííí</h1>
        {token ? (<h4>Token: {token}</h4>) : null}
        {data && (<img src={data.profile_picture} alt="Profile pic" />)}
      </Segment>
    );
  }
}
