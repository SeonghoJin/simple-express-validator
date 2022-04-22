import { RequestLike } from '@types';
import { getProperty } from '@util';
import { createErrorMessage } from '@error';
import { getBody } from '@body';
import { ObjectContext } from '@context';

type GetObjectOption = {
  pipe?: boolean;
  throw?: boolean;
};

/**
 *  @deprecated using ExpressValidator
 */
export const getObject = (req: RequestLike, path: string, getObjectOption?: GetObjectOption) => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const context = new ObjectContext(property);
  context.verify();
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not object'));
  if (getObjectOption?.pipe) {
    context.pipe();
    return context.pipedValue;
  }
  return context.value;
};
