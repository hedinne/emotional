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
          <h1>Emotional intelligence verkefnið</h1>
          <p> Verkefnið er unnið í áfanganum hugbúnaðarþróun við Háskóla Íslands undir kennslu Matthias Book. </p>
          <p>
              Emotional intelligence byggir í grunninn á Express og React en nýtir að auki utanaðkomandi API þjónustur.
              Helst má þar nefna Instagram API og Microsoft Cognitive Services betur þekkt sem Face API.
              Myndum Instagram notanda er aflað í gegnum Instagram API, þær greindar með Face API og niðurstöðum safnað saman.
              Niðurstöður þessa ferlis eru tölulegar upplýsingar um tilfinningar sem andlitssvipir greindra mynda gefa til kynna.
          </p>
          <p>
              Hugbúnaðurinn getur þessa stundina greint tilfinningar 15 seinustu Instagram mynda notanda.
              Einnig er hægt að bæta við öðrum notanda og bera saman niðurstöðurnar þessara tveggja notenda.
          </p>
        </Segment>
      </div>
    );
  }
}
