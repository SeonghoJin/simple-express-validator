import { getBody } from '@body';
import { getProperty } from '@util';
import { createErrorMessage } from '@error';
import { RequestLike } from '@types';
import { StringContext } from '@context';

export type GetStringOption = {
  pipe?: boolean;
};

/**
 *  @deprecated using ExpressValidator
 */
export const getString = (req: RequestLike, path: string, option?: GetStringOption): string => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const context = new StringContext(property);
  context.verify();
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not string'));

  if (option?.pipe) {
    context.pipe();
    return context.pipedValue;
  }

  return context.value;
};
