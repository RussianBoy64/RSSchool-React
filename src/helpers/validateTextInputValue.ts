export default function validateTextInputValue(value: string): boolean {
  const isNotCapitalize = value.charAt(0).search(/[a-z]/) !== -1;
  const isContainNumbers = value.search(/[0-9]/) !== -1;
  const isLengthLess3AndMore15 = value.length < 3 || value.length > 15;
  return isContainNumbers || isNotCapitalize || isLengthLess3AndMore15;
}
