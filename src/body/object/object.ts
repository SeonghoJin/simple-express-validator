import { RequestLike } from '../../types/express';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getBody } from '../body/body';

export const getObject = (req: RequestLike, path: string) => {
  const body = getBody(req);
  const property = getProperty(body, path);

  if (property === null || property === undefined) {
    throw new TypeError(createErrorMessage(path, property, 'this is null or undefined'));
  }

  if (typeof property !== 'object') {
    throw new TypeError(createErrorMessage(path, property, 'this is not object'));
  }

  return property;
};
