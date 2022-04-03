import { creatErrorMessage } from '../util/createErrorMessage';

export const getBody = (req: RequestLike) => {
  const body = req.body;
  if (body === null || body === undefined) {
    throw new TypeError(creatErrorMessage('body', body, 'this is null or undefined'));
  }
  return body;
};
