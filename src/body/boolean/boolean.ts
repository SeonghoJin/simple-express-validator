import { RequestLike } from '../../types/express';
import { getProperty } from '../../util';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getBody } from '../body/body';
import { BooleanContext } from '@context';

type GetBooleanOptions = {
  pipe?: boolean;
};

/**
 *  @deprecated using ExpressValidator
 */
export const getBoolean = (req: RequestLike, path: string, option?: GetBooleanOptions) => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const context = new BooleanContext(property);
  context.verify();
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not boolean'));

  if (option?.pipe) {
    context.pipe();
    return context.pipedValue;
  }

  return context.value;
};
