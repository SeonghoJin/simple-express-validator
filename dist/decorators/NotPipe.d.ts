import { ValidatorContext } from '../validator/context';
export declare function NotPipe<T, K>(
  this: ValidatorContext<T, K>,
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>,
): void;
