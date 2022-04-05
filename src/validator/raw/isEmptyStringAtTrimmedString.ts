import { isString } from '../raw';

export const isEmptyStringAtTrimmedString = (value: any): value is string => {
  if (!isString(value)) {
    return false;
  }
  return value.trim() === '';
};
