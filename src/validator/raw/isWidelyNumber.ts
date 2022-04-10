import { isNullOrUndefined } from './isNullOrUndefined';

export const isWidelyNumber = (value: any): value is number => {
  if (isNullOrUndefined(value)) {
    return false;
  }

  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    return false;
  }
  return true;
};
