import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

enum Payment {
  cash = 'Cash',
  card = 'Card',
}

export default function InputPayment({ name, register, error }: InputProps) {
  const labelStyles = error.pay ? styles.label_invalid : '';
  const validation = {
    required: 'Choose payment type',
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{name}</span>
      <div className={styles.inputContaiter}>
        <label className={labelStyles} htmlFor={Payment.cash}>
          {Payment.cash}
        </label>
        <input
          className={styles.input}
          type="radio"
          {...register(name, validation)}
          value={Payment.cash}
        />
        <label className={labelStyles} htmlFor={Payment.card}>
          {Payment.card}
        </label>
        <input
          className={styles.input}
          type="radio"
          {...register(name, validation)}
          value={Payment.card}
        />
      </div>
      {error.pay && <span className={styles.error}>{error.pay.message}</span>}
    </div>
  );
}
