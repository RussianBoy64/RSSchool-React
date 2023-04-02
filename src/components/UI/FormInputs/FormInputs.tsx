import { UseFormRegister, FieldErrors } from 'react-hook-form';
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

export interface Inputs {
  name: string;
  date: string;
  package: string;
  pay: string;
  photo: Blob[] | MediaSource[];
  agreement: string;
}

export interface InputProps {
  name: InputTypes;
  register: UseFormRegister<Inputs>;
  error: FieldErrors<Inputs>;
}

export const DefaultInputValues = {
  [InputTypes.name]: '',
  [InputTypes.date]: '',
  [InputTypes.package]: '',
  [InputTypes.pay]: '',
  [InputTypes.photo]: [],
  [InputTypes.agreement]: '',
};

export const FormInputs = [
  { InputComponent: InputName, name: InputTypes.name },
  { InputComponent: InputDate, name: InputTypes.date },
  { InputComponent: InputSelect, name: InputTypes.package },
  { InputComponent: InputPayment, name: InputTypes.pay },
  { InputComponent: InputFile, name: InputTypes.photo },
  { InputComponent: InputAgreement, name: InputTypes.agreement },
];
