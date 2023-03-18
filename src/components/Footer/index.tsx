import { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.authorInfo}>
          <div className={styles.authorInfo__item}>
            <Link to="https://rs.school/js/">
              <span>
                <img src="https://rs.school/images/rs_school_js.svg" alt="RS School" />
              </span>
            </Link>
          </div>
          <div className={styles.authorInfo__item}>
            <span>2023</span>
          </div>
          <div className={styles.authorInfo__item}>
            <div className={styles.github}>
              <i className={`fa-brands fa-github ${styles.github__icon}`}></i>
              <span className={styles.github__link}>
                <Link to="https://github.com/RussianBoy64">RussianBoy64</Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
