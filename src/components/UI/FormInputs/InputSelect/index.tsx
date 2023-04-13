import { InputProps } from '../FormInputs';

import styles from './styles.module.scss';

export enum Package {
  without = 'Without packaging',
  standart = 'Standalone packing',
  gift = 'Gift packaging',
}

export default function InputSelect({ name, register, error }: InputProps) {
  const inputStyles = [styles.input];
  const validation = {
    required: 'Select packaging',
  };

  if (error.package) inputStyles.push(styles.input_invalid);

  return (
    <label className={styles.label}>
      <span className={styles.title}>{name}</span>
      <select className={inputStyles.join(' ')} {...register(name, validation)} defaultValue={''}>
        <option disabled value={''}>
          Select packaging
        </option>
        <option value={Package.without}>{Package.without}</option>
        <option value={Package.standart}>{Package.standart}</option>
        <option value={Package.gift}>{Package.gift}</option>
      </select>
      {error.package && <span className={styles.error}>{error.package.message}</span>}
    </label>
  );
}
