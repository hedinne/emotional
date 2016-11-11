import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';

export default class Privacy extends Component {

/**
 * Render method
 * @return {Component}
 */
  render() {
    return (
      <div>
        <Helmet title="Privacy" />
        <Segment>
          <h1>Privacy / Persónuvernd</h1>
          <p>
            Mikil áhersla er lögð á að tryggja ábyrga meðferð allra upplýsinga. 
          </p>
          <p>
            Við kappkostum okkur við að gæta öryggis og tryggja að unnið sé með upplýsingar fólks á öruggan,
             eðlilegan, löglegan, ábyrgan og siðlegan hátt.
            Öll samskipti við utanaðkomandi upplýsingaveitur eru dulkóðuð.
          </p>
          <p>
            Þjónustan hefur ekki aðgang að framkvæmd aðgerða fyrir hönd notenda á tengdum miðlum.
            Þjónustan hefur einungis lesaðgang að myndgögnum.
          </p>
          <p> 
            Engin ábyrgð er tekin á þeim gögnum sem notandinn veitir leyfi á í gegnum síðuna.
          </p>
        </Segment>
      </div>
    );
  }
}
