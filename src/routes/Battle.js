import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis } from 'recharts';
import st from 'store/Basic';
import s from 'routes/less/Battle';
import loading from 'assets/images/loader.svg';


@observer
export default class Battle extends Component {

	/**
	 * Battle
	 * @return { Component }
	 */
  render() {

    return (
      <div className={s.host}>
        <Helmet title="Battle" />
        <Segment>
          <div className={s.container}>
            <h2 className={s.heading}>Results</h2>

            <div className={s.users}>
              <div className={s.profile}>
                <h3 className={s.playerHeading}>Player 1</h3>
                <img src={st.userInfoOne.profile_picture} className={s.image} alt="Profile" />
                <h4 className={s.title}>{st.userInfoOne.full_name}</h4>
                <hr />
                <p className={s.info}>We found {st.emoTwo.count} faces in the last 20 photos.</p>
                <hr />
                <p className={s.info}>This is the happiest photo we found.
                  {st.happyOne.link ? (
                    <img
                      src={st.happyOne.link}
                      alt="Happiest"
                      className={s.happyImg}
                    />
                  ) : (
                  <img
                    src={loading}
                    alt="loading"
                    className={s.loading}
                  />
                  )}
                </p>
              </div>

              <div className={s.profile}>
                <h3 className={s.playerHeading}>Player 2</h3>
                <img src={st.userInfoTwo.profile_picture} className={s.image} alt="Profile" />
                <h4 className={s.title}>{st.userInfoTwo.full_name}</h4>
                <hr />
                <p className={s.info}>We found {st.emoTwo.count} faces in the last 20 photos.</p>
                <hr />
                <p className={s.info}>This is the happiest photo we found.
                  {st.happyTwo.link ? (
                    <img
                      src={st.happyTwo.link}
                      alt="Happiest"
                      className={s.happyImg}
                    />
                  ) : (
                  <img
                    src={loading}
                    alt="loading"
                    className={s.loading}
                  />
                  )}
                </p>
              </div>
            </div>

            <div className={s.chart}>
              <RadarChart cx={250} cy={200} width={480} height={400} data={st.cleanEmo}>
                <Radar
                  name={st.userInfoOne.full_name}
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8" fillOpacity={0.6}
                />
                <Radar
                  name={st.userInfoTwo.full_name}
                  dataKey="B"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <PolarGrid />
                <Legend />
                <PolarAngleAxis dataKey="subject" />
              </RadarChart>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}
