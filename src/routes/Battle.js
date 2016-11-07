import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Segment from 'components/segment';
import { observer } from 'mobx-react';
import st from 'store/Basic';

@observer
export default class Battle extends Component {

  static propTypes = {
    store: PropTypes.node,
  };

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
          <h4>Það fundust {st.getEmotions.count} andlit á seinustu 15 myndunum þínum.</h4>
          <h4>Þetta er algengi helstu tilfinninga á þeim myndum.</h4>

          {Object.keys(st.getEmotions).map((key) => {
            if (key === 'count') { return null; }

            return (
              <div key={key}>
                {key}: {((st.getEmotions[key] / st.getEmotions.count) * 100).toFixed(2)}%
              </div>
            );
          })}

        </Segment>
      </div>
    );
  }
}
