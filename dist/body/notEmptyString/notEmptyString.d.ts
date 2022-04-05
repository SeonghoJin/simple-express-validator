import { RequestLike } from '../../types/express';
declare type GetNotEmptyStringOption = {
  ignoreWhiteSpace: boolean;
};
export declare const getNotEmptyString: (
  req: RequestLike,
  path: string,
  option?: GetNotEmptyStringOption | undefined,
) => string;
export {};
