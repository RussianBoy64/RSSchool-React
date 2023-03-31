import styles from './styles.module.scss';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <div className={styles.about__img} />
        <div className={styles.info}>
          <h2 className={styles.info__title}>Vladimir Kozlachkov</h2>
          <h3 className={styles.info__subTitle}>Front-end developer</h3>
          <p className={styles.info__text}>
            I am 32 years old. In the fall of 2021, I seriously thought about changing my profession
            and since then I have been actively studying and developing in this direction.
          </p>
        </div>
      </div>
    </main>
  );
}
