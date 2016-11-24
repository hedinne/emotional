import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import s from './less/Home.less';

export default class Privacy extends Component {

/**
 * Render method
 * @return {Component}
 */
  render() {
    return (
      <div className={s.host}>
        <Helmet title="Privacy" />
        <Segment>
          <div className={s.container}>
            <h1 className={s.heading}>Privacy / Persónuvernd</h1>
            <p className={s.para}>
              Mikil áhersla er lögð á að tryggja ábyrga meðferð allra upplýsinga.
            </p>
            <p className={s.para}>
              Við kappkostum okkur við að gæta öryggis og tryggja að unnið sé með upplýsingar
               fólks á öruggan, eðlilegan, löglegan, ábyrgan og siðlegan hátt.
              Öll samskipti við utanaðkomandi upplýsingaveitur eru dulkóðuð.
            </p>
            <p className={s.para}>
              Þjónustan hefur ekki aðgang að framkvæmd aðgerða fyrir hönd notenda á tengdum miðlum.
              Þjónustan hefur einungis lesaðgang að myndgögnum.
            </p>
            <p className={s.para} >
              Engin ábyrgð er tekin á þeim gögnum sem notandinn veitir leyfi á í gegnum síðuna.
            </p>
          </div>
        </Segment>
      </div>
    );
  }
}
