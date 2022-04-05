import { isNull } from '../raw';

export const isObject = (value: any): value is object => {
  if (isNull(value)) return false;
  return typeof value === 'object';
};
