import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default function InputAgreement({ name, register, error }: InputProps) {
  const labelStyles = [styles.label];
  const validation = {
    required: 'Agree required',
  };

  if (error.agreement) labelStyles.push(styles.label_invalid);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{name}</span>
      <div className={styles.inputContaiter}>
        <input className={styles.input} type="checkbox" id={name} {...register(name, validation)} />
        <label className={labelStyles.join(' ')} htmlFor={name}>
          I agree to the processing of personal data
        </label>
      </div>
      {error.agreement && <span className={styles.error}>{error.agreement.message}</span>}
    </div>
  );
}
