import { TypeofReturnType } from '@types';
export declare abstract class ValidatorContext<T, K> {
  protected _value: T;
  protected _type: TypeofReturnType;
  protected _pipedValue: K | null;
  protected _isValid: boolean;
  constructor(value: T);
  abstract get value(): T;
  abstract get type(): TypeofReturnType;
  abstract get pipedValue(): K | null;
  abstract get isValid(): boolean;
  abstract verify(): void;
  abstract pipe(): void;
  abstract throwTypeErrorIfValueIsNotValid(message?: string): never | void;
}
