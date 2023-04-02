export default function validateDateInputValue(value: string): boolean {
  const isTimeNotChoosen = value === '';
  const isEarlyThenTomorrow = new Date(Date.now()) > new Date(value);
  return isTimeNotChoosen || isEarlyThenTomorrow;
}
