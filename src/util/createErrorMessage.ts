export const createErrorMessage = (path: string, property: any, message: string) => {
  return `${path}(${property}), ${message}`;
};
