import { RequestLike } from '../../types/express';
import { createErrorMessage } from '../../error/createErrorMessage';
import { getString } from '../string/string';
import { NotEmptyStringContext, NotEmptyStringContextOption } from '@context';

type GetNotEmptyStringOption = Pick<NotEmptyStringContextOption, 'ignoreWhiteSpace'> & {
  pipe?: boolean;
};

export const getNotEmptyString = (req: RequestLike, path: string, option?: GetNotEmptyStringOption) => {
  const property = getString(req, path);
  const context = new NotEmptyStringContext(property, option);
  context.verify();
  context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not empty string'));

  if (option?.pipe) {
    context.pipe();
    return context.pipedValue;
  }

  return context.value;
};
