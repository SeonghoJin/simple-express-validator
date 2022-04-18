import { NotExecutedError } from 'src/error/NotExectedError';
declare type ExecutorGuardOption = {
  error?: NotExecutedError;
};
export declare function ExecutorGuard(
  symbol: symbol,
  executerGuardOption?: ExecutorGuardOption,
): (this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => void;
export {};
