import { getBody } from '../body/body';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../util/createErrorMessage';
import { RequestLike } from '../../types/express';

export const getString = (req: RequestLike, path: string) => {
  const body = getBody(req);
  const property = getProperty(body, path);

  if (typeof property !== 'string') {
    throw new TypeError(createErrorMessage(path, property, 'this is not string'));
  }

  return property;
};
