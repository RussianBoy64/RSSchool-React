import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

export enum Package {
  info = 'Select packaging',
  without = 'Without packaging',
  standart = 'Standalone packing',
  gift = 'Gift packaging',
}

export default class InputSelect extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;
    const inputStyles = [styles.input];
    if (isNotValid) inputStyles.push(styles.input_invalid);

    return (
      <label className={styles.label}>
        <span className={styles.title}>{inputType}</span>
        <select
          className={inputStyles.join(' ')}
          name={inputType}
          id={inputType}
          ref={reference as LegacyRef<HTMLSelectElement>}
          defaultValue={Package.info}
        >
          <option disabled value={Package.info}>
            {Package.info}
          </option>
          <option value={Package.without}>{Package.without}</option>
          <option value={Package.standart}>{Package.standart}</option>
          <option value={Package.gift}>{Package.gift}</option>
        </select>
        {isNotValid && <span className={styles.error}>Select packaging</span>}
      </label>
    );
  }
}
