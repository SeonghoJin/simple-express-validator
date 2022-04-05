import { isString } from '../raw';

export const isEmptyString = (value: any): value is string => {
  if (isString(value) === false) {
    return false;
  }
  return value === '';
};
