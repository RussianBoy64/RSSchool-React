import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default class InputDate extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;
    const inputStyles = [styles.input];
    if (isNotValid) inputStyles.push(styles.input_invalid);

    return (
      <label className={styles.label}>
        <span className={styles.title}>{inputType}</span>
        <input
          className={inputStyles.join(' ')}
          type="date"
          name={inputType}
          id={inputType}
          ref={reference as LegacyRef<HTMLInputElement>}
          title="Date not earlier than tomorrow"
        />
        {isNotValid && <span className={styles.error}>Date not earlier than tomorrow</span>}
      </label>
    );
  }
}
