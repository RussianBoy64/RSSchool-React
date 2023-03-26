import { ComponentClass } from 'react';
import InputName from './InputName';

export enum InputTypes {
  name = 'name',
  date = 'date',
  package = 'package',
  pay = 'pay',
  photo = 'photo',
  agreement = 'agreement',
}

export interface IInputProps {
  reference: React.RefObject<HTMLInputElement>;
  inputType: InputTypes;
  isNotValid: boolean;
}

export interface IFormInput extends IInputProps {
  inputComponent: ComponentClass<IInputProps>;
}

export const FormInputs = [{ inputComponent: InputName, type: InputTypes.name }];
