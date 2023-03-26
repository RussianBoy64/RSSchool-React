import { Component, LegacyRef } from 'react';
import { IInputProps } from '../FormInputs';

import styles from './styles.module.scss';

export default class InputFile extends Component<IInputProps> {
  render() {
    const { reference, inputType, isNotValid } = this.props;

    return (
      <div className={styles.wrapper}>
        <span className={styles.title}>{inputType}</span>
        <label className={styles.label} htmlFor={inputType}>
          <input
            className={styles.input}
            type="file"
            name={inputType}
            id={inputType}
            ref={reference as LegacyRef<HTMLInputElement>}
            accept="image/png, image/jpeg"
            title="Download your photo"
          />
          <span className={styles.download}>Download photo</span>
        </label>
        {isNotValid && <span className={styles.error}>Download your photo</span>}
      </div>
    );
  }
}
