import { RequestLike } from '../../types/express';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../util/createErrorMessage';
import { getBody } from '../body/body';

type GetNumberOptions = {
  pipe?: boolean;
};

export const getNumber = (req: RequestLike, path: string, option?: GetNumberOptions) => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const convertedProperty = Number(property);

  if (property === null || property === undefined) {
    throw new TypeError(createErrorMessage(path, property, 'this is null or undefined'));
  }

  if (Number.isNaN(convertedProperty)) {
    throw new TypeError(createErrorMessage(path, property, 'this is Nan'));
  }

  if (typeof convertedProperty !== 'number') {
    throw new TypeError(createErrorMessage(path, property, 'this is not number'));
  }

  return option?.pipe ? convertedProperty : property;
};
