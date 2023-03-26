import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default class InputName extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;
    const inputStyles = [styles.input];
    if (isNotValid) inputStyles.push(styles.input_invalid);

    return (
      <label className={styles.label}>
        <span className={styles.title}>{inputType}</span>
        <input
          className={inputStyles.join(' ')}
          type="text"
          name={inputType}
          id={inputType}
          ref={reference as LegacyRef<HTMLInputElement>}
          placeholder="Enter your name"
          title="Name must start with a capital letter and not contain numbers, min 3 max 15 characters"
        />
        {isNotValid && (
          <span className={styles.error}>
            Name must start with a capital letter and not contain numbers, min 3 max 15 characters
          </span>
        )}
      </label>
    );
  }
}
