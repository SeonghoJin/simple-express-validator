import { getBody } from '@body';
import { getProperty } from '@util';
import { createErrorMessage } from '@error';
import { RequestLike } from '@types';
import { StringContext } from '@context';

export const getString = (req: RequestLike, path: string): string => {
  const body = getBody(req);
  const property = getProperty(body, path);
  const context = new StringContext(property);
  context.verify();
  console.log(context);
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not string'));
  return context.value;
};
