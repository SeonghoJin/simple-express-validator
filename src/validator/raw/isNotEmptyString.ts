import { isString } from '.';

export const isNotEmptyString = (value: any): value is string => {
  if (isString(value) === false) {
    return false;
  }
  return value !== '';
};
