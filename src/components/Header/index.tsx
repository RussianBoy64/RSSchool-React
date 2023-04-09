import { Routes, Route } from 'react-router-dom';
import routes from 'routes';
import Navigation from 'components/UI/Navigation';

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__pageName}>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.name} key={route.id} />
          ))}
        </Routes>
      </h2>
      <Navigation />
    </header>
  );
}
