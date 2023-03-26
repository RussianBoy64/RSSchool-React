import { Package } from 'components/UI/FormInputs/InputSelect';

export default function validatePackageInputValue(value: string): boolean {
  return value === Package.info;
}
