export const creatErrorMessage = (path: string, property: any, message: string) => {
  return `${path}(${property}), ${message}`;
};
