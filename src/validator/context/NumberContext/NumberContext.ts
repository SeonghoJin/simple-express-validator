import { Pipe, PipeGuard, Verify, VerifyGuard } from '@decorators';
import { isNumber } from '@raw';
import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';

export class NumberContext<T> extends ValidatorContext<T, number> {
  get value(): T {
    return this._value;
  }

  get type(): TypeofReturnType {
    return this._type;
  }

  @VerifyGuard()
  @PipeGuard()
  get pipedValue(): number | null {
    return this._pipedValue;
  }

  @VerifyGuard()
  get isValid(): boolean {
    return this._isValid;
  }

  @Verify()
  verify(): void {
    this._isValid = isNumber(this.value);
  }

  @VerifyGuard()
  @Pipe()
  pipe(): void {
    if (this.isValid) {
      this._pipedValue = this.value as unknown as number;
    } else {
      this._pipedValue = 0;
    }
  }

  @VerifyGuard()
  throwTypeErrorIfValueIsNotValid(message?: string): void {
    if (this.isValid) {
      return;
    }

    throw new TypeError(message ?? 'this is not number');
  }
}
