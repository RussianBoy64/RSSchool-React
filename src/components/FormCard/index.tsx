import { ICard } from 'components/routes/Form';

import styles from './styles.module.scss';

export default function FormCard({ name, date, packaging, pay, photo, agreement }: ICard) {
  return (
    <div className={styles.formCard}>
      <div className={styles.formCard__imgWrapper}>
        <img className={styles.formCard__img} src={photo} alt={`${photo}`} />
      </div>
      <span>Name: {name}</span>
      <span>Date: {date}</span>
      <span>Package: {packaging}</span>
      <span>Pay: {pay}</span>
      <span>Agreement: {`${agreement}`}</span>
    </div>
  );
}
