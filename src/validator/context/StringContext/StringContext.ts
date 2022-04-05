import { TypeofReturnType } from '@types';
import { NotPipeError } from '@error';
import { ValidatorContext } from '@context';
import { isNull, isString } from '@raw';
import { VerifyGuard, Verify } from '@decorators';

export class StringContext<T> extends ValidatorContext<T, string> {
  get value(): T {
    return this._value;
  }

  get type(): TypeofReturnType {
    return this._type;
  }

  @VerifyGuard
  get pipedValue(): string {
    if (isNull(this._pipedValue)) {
      throw new NotPipeError();
    }
    return this._pipedValue;
  }

  @VerifyGuard
  get isStrictValid(): boolean {
    return this._isValid;
  }

  @VerifyGuard
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify
  verify(): void {
    if (isString(this._value)) {
      this._isValid = true;
    }
  }

  pipe(): void {
    this._pipedValue = String(this._value);
  }

  @VerifyGuard
  throwTypeErrorIfValueIsNotValid(message?: string): void {
    if (this.isValid) {
      return;
    }
    if (message) {
      throw new TypeError(message);
    } else {
      throw new TypeError('this is not string');
    }
  }
}
