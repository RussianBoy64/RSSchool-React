import React, { ComponentClass } from 'react';
import InputDate from './InputDate';
import InputName from './InputName';
import InputSelect from './InputSelect';
import InputPayment from './InputPayment';
import InputAgreement from './InputAgreement';
import InputFile from './InputFile';

export enum InputTypes {
  name = 'name',
  date = 'date',
  package = 'package',
  pay = 'pay',
  photo = 'photo',
  agreement = 'agreement',
}

type FormReference = React.RefObject<HTMLInputElement | HTMLSelectElement>;

export interface IInputProps {
  reference: FormReference;
  inputType: InputTypes;
  isNotValid: boolean;
}

export interface IFormInput extends IInputProps {
  inputComponent: ComponentClass<IInputProps>;
  value: string;
}

export const FormInputs = [
  {
    inputComponent: InputName,
    type: InputTypes.name,
  },
  {
    inputComponent: InputDate,
    type: InputTypes.date,
  },
  {
    inputComponent: InputSelect,
    type: InputTypes.package,
  },
  {
    inputComponent: InputPayment,
    type: InputTypes.pay,
  },
  {
    inputComponent: InputFile,
    type: InputTypes.photo,
  },
  {
    inputComponent: InputAgreement,
    type: InputTypes.agreement,
  },
];
