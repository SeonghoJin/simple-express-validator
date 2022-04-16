import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
export declare class ObjectContext<T> extends ValidatorContext<T, object> {
  get value(): T;
  get type(): TypeofReturnType;
  get pipedValue(): object | null;
  get isValid(): boolean;
  verify(): void;
  pipe(): void;
  throwTypeErrorIfValueIsNotValid(message?: string): void;
}
