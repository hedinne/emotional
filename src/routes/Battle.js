import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'Recharts';
import st from 'store/Basic';


@observer
export default class Battle extends Component {

	/**
	 * Battle
	 * @return { Component }
	 */
	render() {

		return (
				<div>
				<Helmet title="Battle" />
				<Segment>
				<h2>Niðurstöður</h2>
				{/* <h4>
						Það fundust {st.emo.count} andlit á seinustu 15 myndunum þínum.<br />
						Þetta er algengi helstu tilfinninga á þeim myndum.
						</h4> */}
				{/* {Object.keys(st.emo).map((key) => {
						if (key === 'count') { return null; }

						return (
						<div key={key}>
						{key}: {((st.emo[key] / st.emo.count) * 100).toFixed(2)}%
						</div>
						);
						})} */}
				<RadarChart cx={250} cy={200} width={480} height={400} data={st.cleanEmo}>
				<Radar name={st.userInfoOne.full_name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
				<Radar name={st.userInfoTwo.full_name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
				<PolarGrid />
				<Legend />
				<PolarAngleAxis dataKey="subject" />
				</RadarChart>
				</Segment>
				</div>
				);
	}
}
