export const isWidelyNumber = (value: any): value is number => {
  const parsedValue = Number(value);
  if (Number.isNaN(parsedValue)) {
    return false;
  }
  return true;
};
