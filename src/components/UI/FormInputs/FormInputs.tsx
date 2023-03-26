import React, { ComponentClass } from 'react';
import InputDate from './InputDate';
import InputName from './InputName';
import InputSelect from './InputSelect';

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
    reference: React.createRef<HTMLSelectElement>(),
    type: InputTypes.package,
  },
];
