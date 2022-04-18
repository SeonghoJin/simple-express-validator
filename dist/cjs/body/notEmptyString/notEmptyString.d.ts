import { RequestLike } from '@types';
import { NotEmptyStringContextOption } from '@context';
declare type GetNotEmptyStringOption = Pick<NotEmptyStringContextOption, 'ignoreWhiteSpace'> & {
  pipe?: boolean;
};
export declare const getNotEmptyString: (
  req: RequestLike,
  path: string,
  option?: GetNotEmptyStringOption | undefined,
) => string;
export {};
