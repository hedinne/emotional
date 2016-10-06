import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';


/**
 * Home route component
 */
export default class Home extends Component {

  /**
   * Render method
   * @return {Component}
   */
  render() {
    const id = 'cf5856ebccbb459aaba3e64adc37b54b';
    const redirect = 'http://localhost:3000/oauth';
    const uri = `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
    return (
      <div>
        <Helmet title="Home" />
        <Segment>
          <h1>Woop Woop</h1>
          <a href={uri}>Log in </a>
        </Segment>
      </div>
    );
  }
}
