import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
export declare type NotEmptyStringContextOption = {
  ignoreWhiteSpace: boolean;
};
export declare class NotEmptyStringContext<T> extends ValidatorContext<T, string> {
  #private;
  constructor(value: T, options?: NotEmptyStringContextOption);
  get value(): T;
  get type(): TypeofReturnType;
  get pipedValue(): string;
  get isValid(): boolean;
  verify(): void;
  pipe(): void;
  throwTypeErrorIfValueIsNotValid(message?: string): void;
}
