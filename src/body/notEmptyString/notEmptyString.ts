import { RequestLike } from '../../types/express';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getString } from '../string/string';

type GetNotEmptyStringOption = {
  ignoreWhiteSpace: boolean;
};

export const getNotEmptyString = (req: RequestLike, path: string, option?: GetNotEmptyStringOption) => {
  const property = getString(req, path);
  const validProp = option?.ignoreWhiteSpace ? property.trim() : property;
  if (validProp === '') {
    throw new TypeError(createErrorMessage(path, property, 'this is empty string'));
  }
  return property;
};
