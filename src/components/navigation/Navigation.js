import React, { Component, PropTypes } from 'react';
import s from './Navigation.less';

export default class Navigation extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <nav className={s.navigation}>
        <ul className={s.list}>
          {React.Children.map(this.props.children, (component) => (
            <li className={s.item}>
              {React.cloneElement(component, {
                className: s.link,
                activeClassName: s.linkActive,
              })}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
