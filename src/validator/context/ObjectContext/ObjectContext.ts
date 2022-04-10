import { Pipe, PipeGuard, Verify, VerifyGuard } from '@decorators';
import { TypeofReturnType } from '@types';
import { isObject } from 'lodash';
import { ValidatorContext } from '../ValidatorContext/ValidatorContext';

export class ObjectContext<T> extends ValidatorContext<T, object> {
  get value(): T {
    return this._value;
  }

  get type(): TypeofReturnType {
    return this._type;
  }

  @VerifyGuard()
  @PipeGuard()
  get pipedValue(): object | null {
    return this._pipedValue;
  }

  @VerifyGuard()
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify()
  verify(): void {
    this._isValid = isObject(this.value);
  }

  @VerifyGuard()
  @Pipe()
  pipe(): void {
    if (this.isValid) {
      this._pipedValue = this.value as unknown as object;
    } else {
      this._pipedValue = {};
    }
  }

  @VerifyGuard()
  throwTypeErrorIfValueIsNotValid(message?: string): void {
    if (this.isValid) {
      return;
    }

    throw new TypeError(message ?? 'this is not object');
  }
}
