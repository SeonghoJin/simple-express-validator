import { RequestLike } from '../../types/express';
import { createErrorMessage } from '../../error/createErrorMessage';

/**
 *  @deprecated using ExpressValidator
 */
export const getBody = (req: RequestLike) => {
  const body = req.body;
  if (body === null || body === undefined) {
    throw new TypeError(createErrorMessage('body', body, 'this is null or undefined'));
  }
  return body;
};
