import { RequestLike } from '../../types/express';
declare type GetBooleanOptions = {
  pipe?: boolean;
};
export declare const getBoolean: (req: RequestLike, path: string, option?: GetBooleanOptions | undefined) => any;
export {};
