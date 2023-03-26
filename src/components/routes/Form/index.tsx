import React, { Component } from 'react';
import { FormInputs, IFormInput, InputTypes } from 'components/UI/FormInputs/FormInputs';
import validateTextInputValue from 'helpers/validateTextInputValue';
import validateDateInputValue from 'helpers/validateDateInputValue';

import styles from './styles.module.scss';

enum Package {
  info = 'Select packaging',
  without = 'Without packaging',
  standart = 'Standalone packing',
  gift = 'Gift packaging',
}

enum Payment {
  cash = 'Cash',
  card = 'Card',
}

interface IFormState {
  form: React.RefObject<HTMLFormElement>;
  inputs: IFormInput[];
}

export default class Form extends Component<unknown, IFormState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      form: React.createRef(),
      inputs: FormInputs.map((input) => {
        return {
          inputComponent: input.inputComponent,
          reference: React.createRef(),
          inputType: input.type,
          isNotValid: false,
        };
      }),
    };
  }

  private submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const checkedInputs = this.state.inputs.map((input) => {
      return {
        ...input,
        isNotValid: this.isInputNotValid(input),
      };
    });

    this.setState((state) => {
      return {
        ...state,
        inputs: checkedInputs,
      };
    });
  };

  private isInputNotValid = (input: IFormInput): boolean => {
    let isNotValid = false;
    const inputElement = input.reference.current;

    if (inputElement) {
      switch (input.inputType) {
        case InputTypes.name:
          isNotValid = validateTextInputValue(inputElement.value);
          break;
        case InputTypes.date:
          isNotValid = validateDateInputValue(inputElement.value);
          break;
      }
    }

    return isNotValid;
  };

  render() {
    return (
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Delivery form</h2>
        <form className={styles.form} onSubmit={this.submitHandler} ref={this.state.form}>
          {this.state.inputs.map((inputData) => {
            const { inputComponent: Input, reference, inputType, isNotValid } = inputData;
            return (
              <Input
                reference={reference}
                inputType={inputType}
                isNotValid={isNotValid}
                key={inputType}
              />
            );
          })}
          {/* <input type="text" name={FormFields.name} id={FormFields.name} /> */}
          {/* <label htmlFor={FormFields.name}>Name</label> */}
          {/* <input type="date" name={FormFields.date} id={FormFields.date} />
          <label htmlFor={FormFields.date}>{FormFields.date}</label>
          <select name={FormFields.package} id={FormFields.package}>
            <option disabled>{Package.info}</option>
            <option value={Package.without}>{Package.without}</option>
            <option value={Package.standart}>{Package.standart}</option>
            <option value={Package.gift}>{Package.gift}</option>
          </select>
          <label htmlFor={FormFields.package}>{FormFields.package}</label>
          <input type="radio" name={FormFields.pay} id={Payment.cash} value={Payment.cash} />
          <label htmlFor={Payment.cash}>{Payment.cash}</label>
          <input type="radio" name={FormFields.pay} id={Payment.card} value={Payment.card} />
          <label htmlFor={Payment.card}>{Payment.card} </label>
          <input type="file" name={FormFields.photo} id={FormFields.photo} />
          <input type="checkbox" name={FormFields.agreement} id={FormFields.agreement} />
          <label htmlFor={FormFields.agreement}>Give an hour notice of delivery?</label> */}
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}
