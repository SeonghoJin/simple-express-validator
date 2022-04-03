import { getBody } from './body';
import { getProperty } from '../util';
import { creatErrorMessage } from '../util/createErrorMessage';

export const getString = (req: RequestLike, path: string) => {
  const body = getBody(req);
  const property = getProperty(body, path);

  if (typeof property !== 'string') {
    throw new TypeError(creatErrorMessage(path, property, 'this is not string'));
  }

  return property;
};
