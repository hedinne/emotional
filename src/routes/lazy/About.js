import React, { Component } from 'react';
import Segment from 'components/segment';
import Helmet from 'react-helmet';
import s from '../less/Home.less';
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
      <div className={s.host}>
        <Helmet title="About" />
        <Segment>
          <div className={s.container}>
            <h1 className={s.heading}>dual8</h1>
            <p className={s.para}>
            dual8 is a project in the Software Project
            course at the Univeristy of Iceland taught by Matthias Book.
            </p>
            <p className={s.para}>
            The project is developed using Express and React through Node.js
            in conjunction with API services. The API's used in the project
            are Instagram API and Microsoft Cognitive Services, otherwise known
            as Emotion API. The user's images are obtained through the Instagram
            API, analyzed with Emotion API and results collected.  The results are in
            the form of statistical information presented by the Emotion API after
            analyzing the facial expressions of uploaded photoes.
            </p>
            <p className={s.para}>
            The software is capable of analyzing the emotions of fifteen
            most recent Instagram photoes per user. It is also possible to
            add another user and compare the results of the two users.
            </p>
          </div>
        </Segment>
      </div>
    );
  }
}
