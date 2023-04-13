import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default function InputFile({ name, register, error }: InputProps) {
  const validation = {
    required: 'Download your photo',
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{name}</span>
      <label className={styles.label} htmlFor={name}>
        <input
          className={styles.input}
          type="file"
          id={name}
          {...register(name, validation)}
          accept="image/png, image/jpeg"
          title="Download your photo"
        />
        <span className={styles.download}>Download photo</span>
      </label>
      {error.photo && <span className={styles.error}>{error.photo.message}</span>}
    </div>
  );
}
