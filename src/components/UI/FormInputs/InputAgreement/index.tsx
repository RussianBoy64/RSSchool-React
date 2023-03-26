import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default class InputAgreement extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;
    const labelStyles = [styles.label];
    if (isNotValid) labelStyles.push(styles.label_invalid);

    return (
      <div className={styles.wrapper}>
        <span className={styles.title}>{inputType}</span>
        <div className={styles.inputContaiter}>
          <input
            className={styles.input}
            type="checkbox"
            name={inputType}
            id={inputType}
            ref={reference as LegacyRef<HTMLInputElement>}
          />
          <label className={labelStyles.join(' ')} htmlFor={inputType}>
            I agree to the processing of personal data
          </label>
        </div>
        {isNotValid && <span className={styles.error}>Choose payment type</span>}
      </div>
    );
  }
}
