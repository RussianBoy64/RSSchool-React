import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from 'routes';
import Navigstion from 'components/UI/Navigation';

import styles from './styles.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h2 className={styles.header__pageName}>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.name} key={route.id} />
            ))}
          </Routes>
        </h2>
        <Navigstion />
      </header>
    );
  }
}
