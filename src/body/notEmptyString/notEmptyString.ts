import { creatErrorMessage } from '../../util/createErrorMessage';
import { getString } from '../string/string';

type GetNotEmptyStringOption = {
  ignoreWhiteSpace: boolean;
};

export const getNotEmptyString = (req: RequestLike, path: string, option?: GetNotEmptyStringOption) => {
  const property = getString(req, path);
  const validProp = option?.ignoreWhiteSpace ? property.trim() : property;
  if (validProp === '') {
    throw new TypeError(creatErrorMessage(path, property, 'this is empty string'));
  }
  return property;
};
