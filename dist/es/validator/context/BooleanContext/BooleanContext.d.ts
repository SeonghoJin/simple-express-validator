import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
export declare class BooleanContext<T> extends ValidatorContext<T, boolean> {
  get value(): T;
  get type(): TypeofReturnType;
  get pipedValue(): boolean | null;
  get isValid(): boolean;
  verify(): void;
  pipe(): void;
  throwTypeErrorIfValueIsNotValid(message?: string): void;
}
