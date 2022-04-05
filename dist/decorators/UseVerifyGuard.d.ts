import 'reflect-metadata';
export declare function UseVerifyGuard<
  T extends {
    new (...args: any[]): object;
  },
>(
  constructor: T,
): {
  new (...args: any[]): {};
} & T;
