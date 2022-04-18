import { RequestLike } from '../../types/express';
declare type GetNumberOptions = {
  pipe?: boolean;
};
export declare const getNumber: (req: RequestLike, path: string, option?: GetNumberOptions | undefined) => any;
export {};
