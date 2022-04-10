import { Pipe, PipeGuard, Verify, VerifyGuard } from '@decorators';
import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
import { isWidelyBoolean, isBoolean, isNumber, isString } from '@raw';
import { PipingError } from '@error';

export class BooleanContext<T> extends ValidatorContext<T, boolean> {
  get value(): T {
    return this._value;
  }

  get type(): TypeofReturnType {
    return this._type;
  }

  @VerifyGuard()
  @PipeGuard()
  get pipedValue(): boolean | null {
    return this._pipedValue;
  }

  @VerifyGuard()
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify()
  verify(): void {
    this._isValid = isWidelyBoolean(this.value);
  }

  @VerifyGuard()
  @Pipe()
  pipe(): void {
    if (this.isValid) {
      if (isString(this.value)) {
        const lowerCaseValue = this.value.toLowerCase();
        if (lowerCaseValue === 'true' || lowerCaseValue === '1') {
          this._pipedValue = true;
          return;
        } else if (lowerCaseValue === 'false' || lowerCaseValue === '0') {
          this._pipedValue = false;
          return;
        }

        throw new PipingError();
      }

      if (isNumber(this.value)) {
        if (this.value === 1) {
          this._pipedValue = true;
          return;
        } else if (this.value === 0) {
          this._pipedValue = false;
          return;
        }

        throw new PipingError();
      }

      if (isBoolean(this.value)) {
        this._pipedValue = this.value;
        return;
      }

      throw new PipingError();
    } else {
      this._pipedValue = false;
    }
  }

  @VerifyGuard()
  throwTypeErrorIfValueIsNotValid(message?: string): void {
    if (this.isValid) {
      return;
    }

    throw new TypeError(message ?? 'this is not boolean');
  }
}
