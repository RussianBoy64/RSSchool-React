import React, { Component } from 'react';
import { FormInputs, IFormInput, InputTypes } from 'components/UI/FormInputs/FormInputs';
import { Package } from 'components/UI/FormInputs/InputSelect';
import validateTextInputValue from 'helpers/validateTextInputValue';
import validateDateInputValue from 'helpers/validateDateInputValue';

import styles from './styles.module.scss';
import FormCard from 'components/FormCard';

export interface Card {
  [key: string]: string;
}

interface IFormState {
  form: React.RefObject<HTMLFormElement>;
  inputs: IFormInput[];
  submitted: boolean;
  cards: Card[];
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
          value: '',
        };
      }),
      submitted: false,
      cards: [],
    };
  }

  private submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const cardObject: Card = {};
    const checkedInputs = this.state.inputs.map((input) => {
      const formElement = this.state.form.current!;
      const value = this.getInputValue(formElement[input.inputType]);
      const isNotValid = this.isInputNotValid(value, input.inputType);
      cardObject[input.inputType] = value;

      return {
        ...input,
        isNotValid,
        value: isNotValid ? '' : value,
      };
    });
    const isFormValid = checkedInputs.every((input) => input.value);
    const updatedCards = this.state.cards;
    if (isFormValid) updatedCards.push(cardObject);

    this.setState({
      ...this.state,
      inputs: checkedInputs,
      submitted: isFormValid ? true : false,
      cards: updatedCards,
    });
  };

  private isInputNotValid = (value: string, inputType: InputTypes): boolean => {
    let isNotValid = false;

    switch (inputType) {
      case InputTypes.name:
        isNotValid = validateTextInputValue(value);
        break;
      case InputTypes.date:
        isNotValid = validateDateInputValue(value);
        break;
      case InputTypes.package:
        isNotValid = value === Package.info;
        break;
      case InputTypes.pay:
        isNotValid = !value;
        break;
      case InputTypes.photo:
        isNotValid = !value;
        break;
      case InputTypes.agreement:
        isNotValid = value !== 'true';
        break;
    }

    return isNotValid;
  };

  private getInputValue = (input: string): string => {
    const InputElement = input as unknown as HTMLInputElement;
    if (InputElement.name === InputTypes.agreement) {
      return `${InputElement.checked}`;
    } else if (InputElement.name === InputTypes.photo) {
      let value = '';
      if (InputElement.files && InputElement.files[0])
        value = URL.createObjectURL(InputElement.files![0]);
      return value;
    } else {
      return InputElement.value;
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ ...this.state, submitted: false });
    }, 1000);

    const isFormValid = this.state.inputs.every((input) => input.value);

    if (isFormValid) {
      const defalutInputs = this.state.inputs.map((input) => {
        const formElement = this.state.form.current!;

        if (input.inputType === InputTypes.package) {
          (formElement[input.inputType] as unknown as HTMLInputElement).value = Package.info;
        } else if (input.inputType === InputTypes.pay) {
          (formElement[input.inputType][0] as unknown as HTMLInputElement).checked = false;
          (formElement[input.inputType][1] as unknown as HTMLInputElement).checked = false;
        } else if (input.inputType === InputTypes.agreement) {
          (formElement[input.inputType] as unknown as HTMLInputElement).checked = false;
        } else {
          (formElement[input.inputType] as unknown as HTMLInputElement).value = '';
        }

        return {
          ...input,
          isNotValid: false,
          value: '',
        };
      });

      this.setState({
        ...this.state,
        inputs: defalutInputs,
      });
    }
  }

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
          <button type="submit">Submit</button>
          {this.state.submitted && <span className={styles.form__submitted}>Form submitted!</span>}
        </form>
        <div className={styles.cardsWrapper}>
          {this.state.cards.length > 0 &&
            this.state.cards.map((card) => {
              return <FormCard {...card} key={card[InputTypes.name]} />;
            })}
        </div>
      </main>
    );
  }
}
