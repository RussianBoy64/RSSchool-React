import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes, { RoutePathes } from 'routes';

import styles from './styles.module.scss';

export default class Navigation extends Component {
  setActiveLink({ isActive }: { isActive: boolean }) {
    const linkStyle = [styles.link];

    if (isActive) linkStyle.push(styles.link_active);

    return linkStyle.join(' ');
  }

  render() {
    return (
      <nav className={styles.navigation}>
        {routes.map((route) => {
          if (route.path !== RoutePathes.notFound) {
            return (
              <NavLink to={route.path} className={this.setActiveLink} key={route.id}>
                {route.name}
              </NavLink>
            );
          }
        })}
      </nav>
    );
  }
}
