import { RequestLike } from '@types';
declare type GetObjectOption = {
  pipe?: boolean;
  throw?: boolean;
};
export declare const getObject: (req: RequestLike, path: string, getObjectOption?: GetObjectOption | undefined) => any;
export {};
