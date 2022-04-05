export const isNumber = (value: any): value is number => {
  if (Number.isNaN(value)) {
    return false;
  }
  return typeof value === 'number';
};
