import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import routes from 'routes';

import styles from './App.module.scss';

alert("Hello! Please check my work tomorrow, I didn't have time to do tests");

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
