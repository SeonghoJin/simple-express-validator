import { isNull, isUndefined } from '../raw';

export const isNullOrUndefined = (value: any): value is null | undefined => {
  return isNull(value) || isUndefined(value);
};
