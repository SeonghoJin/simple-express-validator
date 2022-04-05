import { isNullOrUndefined, isString, isNumber, isBoolean } from '../raw';

export const isWidelyBoolean = (value: any): value is boolean => {
  if (isNullOrUndefined(value)) {
    return false;
  }

  if (isString(value)) {
    const lowercaseValue = value.toLowerCase();
    if (lowercaseValue === 'true' || lowercaseValue === 'false' || lowercaseValue === '0' || lowercaseValue === '1') {
      return true;
    }
    return false;
  }

  if (isNumber(value)) {
    if (value === 1 || value === 0) {
      return true;
    }
    return false;
  }

  if (isBoolean(value)) {
    return true;
  }

  return false;
};
