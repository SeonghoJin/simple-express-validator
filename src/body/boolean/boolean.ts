import { RequestLike } from '../../types/express';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getBody } from '../body/body';

type GetBooleanOptions = {
  pipe?: boolean;
};

export const getBoolean = (req: RequestLike, path: string, option?: GetBooleanOptions) => {
  const body = getBody(req);
  const property = getProperty(body, path);
  let convertedProperty = property;

  if (property === null || property === undefined) {
    throw new TypeError(createErrorMessage(path, property, 'this is null or undefined'));
  }

  if (typeof property === 'string') {
    const lowercaseProperty = property.toLowerCase();
    if (
      lowercaseProperty !== 'true' &&
      lowercaseProperty !== 'false' &&
      lowercaseProperty !== '0' &&
      lowercaseProperty !== '1'
    ) {
      throw new TypeError(createErrorMessage(path, property, 'this is not boolean'));
    } else {
      convertedProperty = lowercaseProperty === 'true' || lowercaseProperty === '1';
    }
    return option?.pipe ? convertedProperty : property;
  }

  if (typeof property === 'number') {
    if (property !== 1 && property !== 0) {
      throw new TypeError(createErrorMessage(path, property, 'this is not boolean'));
    } else {
      convertedProperty = property === 1;
    }
    return option?.pipe ? convertedProperty : property;
  }

  if (typeof property !== 'boolean') {
    throw new TypeError(createErrorMessage(path, property, 'this is not boolean'));
  }

  return option?.pipe ? convertedProperty : property;
};
