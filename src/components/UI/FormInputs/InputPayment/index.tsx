import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

enum Payment {
  cash = 'Cash',
  card = 'Card',
}

export default class InputPayment extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;
    const labelStyles = isNotValid ? styles.label_invalid : '';

    return (
      <div className={styles.wrapper}>
        <span className={styles.title}>{inputType}</span>
        <div className={styles.inputContaiter}>
          <label className={labelStyles} htmlFor={Payment.cash}>
            {Payment.cash}
          </label>
          <input
            className={styles.input}
            type="radio"
            name={inputType}
            id={Payment.cash}
            value={Payment.cash}
            ref={reference as LegacyRef<HTMLInputElement>}
          />
          <label className={labelStyles} htmlFor={Payment.card}>
            {Payment.card}
          </label>
          <input
            className={styles.input}
            type="radio"
            name={inputType}
            id={Payment.card}
            value={Payment.card}
            ref={reference as LegacyRef<HTMLInputElement>}
          />
        </div>
        {isNotValid && <span className={styles.error}>Choose payment type</span>}
      </div>
    );
  }
}
