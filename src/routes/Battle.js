import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
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
          <h4>
            Það fundust {st.emo.count} andlit á seinustu 15 myndunum þínum.<br />
            Þetta er algengi helstu tilfinninga á þeim myndum.
          </h4>
          {Object.keys(st.emo).map((key) => {
            if (key === 'count') { return null; }

            return (
              <div key={key}>
                {key}: {((st.emo[key] / st.emo.count) * 100).toFixed(2)}%
              </div>
            );
          })}

        </Segment>
      </div>
    );
  }
}
