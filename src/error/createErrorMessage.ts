export const createErrorMessage = (path: string, property: unknown, message: string) => {
  return `${path}(${property}), ${message}`;
};
