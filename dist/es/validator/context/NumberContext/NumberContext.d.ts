import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
export declare class NumberContext<T> extends ValidatorContext<T, number> {
  get value(): T;
  get type(): TypeofReturnType;
  get pipedValue(): number | null;
  get isValid(): boolean;
  verify(): void;
  pipe(): void;
  throwTypeErrorIfValueIsNotValid(message?: string): void;
}
