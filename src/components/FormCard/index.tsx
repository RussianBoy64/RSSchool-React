import { Card } from 'components/routes/Form';
import { InputTypes } from 'components/UI/FormInputs/FormInputs';
import { Component } from 'react';

import styles from './styles.module.scss';

export default class FormCard extends Component<Card> {
  render() {
    return (
      <div className={styles.formCard}>
        <div className={styles.formCard__imgWrapper}>
          <img
            className={styles.formCard__img}
            src={this.props[InputTypes.photo]}
            alt={`${this.props[InputTypes.photo]}`}
          />
        </div>
        <span>Name: {this.props[InputTypes.name]}</span>
        <span>Date: {this.props[InputTypes.date]}</span>
        <span>Package: {this.props[InputTypes.package]}</span>
        <span>Pay: {this.props[InputTypes.pay]}</span>
        <span>Agreement: {this.props[InputTypes.agreement]}</span>
      </div>
    );
  }
}
