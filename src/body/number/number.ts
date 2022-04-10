import { RequestLike } from '../../types/express';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getBody } from '../body/body';
import { NumberContext } from '@context';

type GetNumberOptions = {
  pipe?: boolean;
};

export const getNumber = (req: RequestLike, path: string, option?: GetNumberOptions) => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const context = new NumberContext(property);
  context.verify();
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not number'));
  if (option?.pipe) {
    context.pipe();
    return context.pipedValue;
  }
  return context.value;
};
