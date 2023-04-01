import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default function InputName({ name, register, error }: InputProps) {
  const inputStyles = [styles.input];
  const validation = {
    required: 'Please enter your name',
    minLength: { value: 3, message: 'Name must contain 3 characters or more' },
    maxLength: { value: 16, message: 'Name must be shorter than 15 characters' },
    pattern: { value: /^[A-ZА-Я][a-zа-я]?/, message: 'The name must start with a capital letter' },
  };

  if (error.name) inputStyles.push(styles.input_invalid);

  return (
    <label className={styles.label}>
      <span className={styles.title}>{name}</span>
      <input
        className={inputStyles.join(' ')}
        type="text"
        {...register(name, validation)}
        placeholder="Enter your name"
        title="Name must start with a capital letter and not contain numbers, min 3 max 15 characters"
      />
      {error.name && <span className={styles.error}>{error.name.message}</span>}
    </label>
  );
}
