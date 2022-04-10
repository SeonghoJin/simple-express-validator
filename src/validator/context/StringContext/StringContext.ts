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
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify()
  verify(): void {
    this._isValid = isString(this.value);
  }

  @VerifyGuard()
  @Pipe()
  pipe(): void {
    if (this.isValid) {
      this._pipedValue = this._value as unknown as string;
    } else {
      this._pipedValue = '';
    }
  }

  @VerifyGuard()
  throwTypeErrorIfValueIsNotValid(message?: string): void {
    if (this.isValid) {
      return;
    }

    throw new TypeError(message ?? 'this is not string');
  }
}
