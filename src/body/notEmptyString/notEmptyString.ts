import { RequestLike } from '@types';
import { createErrorMessage } from '@error';
import { getString } from '@body';
import { NotEmptyStringContext, NotEmptyStringContextOption } from '@context';

type GetNotEmptyStringOption = Pick<NotEmptyStringContextOption, 'ignoreWhiteSpace'> & {
  pipe?: boolean;
};

/**
 *  @deprecated using ExpressValidator
 */
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
