import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
export declare class StringContext<T> extends ValidatorContext<T, string> {
  get value(): T;
  get type(): TypeofReturnType;
  get pipedValue(): string;
  get isValid(): boolean;
  verify(): void;
  pipe(): void;
  throwTypeErrorIfValueIsNotValid(message?: string): void;
}
