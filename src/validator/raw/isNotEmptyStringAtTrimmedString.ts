import { isString, isNotEmptyString } from '@raw';

export const isNotEmptyStringAtTrimmedString = (value: any): value is string => {
  if (!isString(value)) {
    return false;
  }
  return isNotEmptyString(value.trim());
};
