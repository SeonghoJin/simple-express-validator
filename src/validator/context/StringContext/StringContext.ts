import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
import { isString } from '@raw';
import { VerifyGuard, Verify, Pipe, PipeGuard } from '@decorators';

export class StringContext<T> extends ValidatorContext<T, string> {
  get value(): T {
    return this._value;
  }

  get type(): TypeofReturnType {
    return this._type;
  }

  @PipeGuard()
  @VerifyGuard()
  get pipedValue(): string {
    return this._pipedValue as string;
  }

  @VerifyGuard()
  get isStrictValid(): boolean {
    return this._isValid;
  }

  @VerifyGuard()
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify()
  verify(): void {
    if (isString(this._value)) {
      this._isValid = true;
    }
  }

  @Pipe()
  pipe(): void {
    this._pipedValue = String(this._value);
  }

  @VerifyGuard()
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
