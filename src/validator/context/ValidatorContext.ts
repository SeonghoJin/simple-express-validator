import { TypeofReturnType } from '@types';

export abstract class ValidatorContext<T, K> {
  protected _value: T;
  protected _type: TypeofReturnType;
  protected _pipedValue: string | null = null;
  protected _isValid = false;

  constructor(value: T) {
    this._value = value;
    this._type = typeof value;
  }

  abstract get value(): T;
  abstract get type(): TypeofReturnType;
  abstract get pipedValue(): K;
  abstract get isStrictValid(): boolean;
  abstract get isValid(): boolean;
  abstract verify(): void;
  abstract pipe(): void;
  abstract throwTypeErrorIfValueIsNotValid(message?: string): never | void;
}
