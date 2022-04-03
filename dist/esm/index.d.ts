type RequestLike = {
  query?: any;
  body?: any;
  params?: any;
  headers?: any;
};
export const getBody: (req: RequestLike) => any;
export { get as getProperty } from 'lodash';
type GetBooleanOptions = {
  pipe?: boolean;
};
export const getBoolean: (req: RequestLike, path: string, option?: GetBooleanOptions | undefined) => any;
export const getString: (req: RequestLike, path: string) => string;
type GetNotEmptyStringOption = {
  ignoreWhiteSpace: boolean;
};
export const getNotEmptyString: (
  req: RequestLike,
  path: string,
  option?: GetNotEmptyStringOption | undefined,
) => string;
type GetNumberOptions = {
  pipe?: boolean;
};
export const getNumber: (req: RequestLike, path: string, option?: GetNumberOptions | undefined) => any;
export const getObject: (req: RequestLike, path: string) => any;

//# sourceMappingURL=index.d.ts.map
