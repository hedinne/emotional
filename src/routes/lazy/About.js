import React, { Component } from 'react';
import Segment from 'components/segment';
import Helmet from 'react-helmet';
/**
 * About route component
 */
export default class About extends Component {

	/**
	 * Render method
	 * @return {Component}
	 */
  render() {
    return (
      <div>
        <Helmet title="About" />
        <Segment>
          <h1>Adfectum</h1>
          <p>
            Adfectum is a project in the Software Project
            course at the Univeristy of Iceland taught by Matthias Book.
          </p>
          <p>
            The project is developed using Express and React through Node.js
             in conjunction with API services. The API's used in the project
             are Instagram API and Microsoft Cognitive Services, otherwise known
             as Face API. The user's images are obtained through the Instagram
             API, analyzed with Face API and results collected.  The results are in
             the form of statistical information presented by the Face API after
             analyzing the facial expressions of uploaded photoes.
           </p>
          <p>
            The software is capable of analyzing the emotions of fifteen
            most recent Instagram photoes per user. It is also possible to
            add another user and compare the results of the two users.
          </p>
        </Segment>
      </div>
    );
  }
}
