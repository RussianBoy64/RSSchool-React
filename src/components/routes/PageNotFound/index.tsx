import styles from './styles.module.scss';

export default function PageNotFound() {
  return (
    <main className={styles.main}>
      <h4 className={styles.title}>404</h4>
      <span className={styles.info}>Oops! Page not found!</span>
    </main>
  );
}
