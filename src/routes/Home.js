import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
};

/**
 * Home route component
 */
export default class Home extends Component {

  /**
   * Render method
   * @return {Component}
   */
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Segment>
          <h1>Woop Woop</h1>
          <InstagramLogin
            clientId="cf5856ebccbb459aaba3e64adc37b54b"
            buttonText="Login"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
          />
        </Segment>
      </div>
    );
  }
}
