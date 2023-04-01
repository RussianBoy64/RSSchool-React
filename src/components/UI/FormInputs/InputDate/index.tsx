import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default function InputDate({ name, register, error }: InputProps) {
  const inputStyles = [styles.input];
  const validation = {
    required: 'Please enter delivery date',
    validate: (value: string) =>
      new Date(Date.now()) < new Date(value) || 'Date not earlier than today',
  };

  if (error.date) inputStyles.push(styles.input_invalid);
  console.log(error.date);

  return (
    <label className={styles.label}>
      <span className={styles.title}>{name}</span>
      <input
        className={inputStyles.join(' ')}
        type="date"
        {...register(name, validation)}
        title="Date not earlier than tomorrow"
      />
      {error.date && <span className={styles.error}>{error.date.message}</span>}
    </label>
  );
}
