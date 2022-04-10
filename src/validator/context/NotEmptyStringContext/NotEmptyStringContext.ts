import { TypeofReturnType } from '@types';
import { ValidatorContext } from '@context';
import { VerifyGuard, Verify, Pipe, PipeGuard } from '@decorators';
import { isNotEmptyString, isNotEmptyStringAtTrimmedString } from '@raw';

export type NotEmptyStringContextOption = {
  ignoreWhiteSpace: boolean;
};

export class NotEmptyStringContext<T> extends ValidatorContext<T, string> {
  #options?: NotEmptyStringContextOption;

  constructor(value: T, options?: NotEmptyStringContextOption) {
    super(value);
    this.#options = options;
  }

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
    if (this.#options?.ignoreWhiteSpace) {
      this._isValid = isNotEmptyStringAtTrimmedString(this.value);
    } else {
      this._isValid = isNotEmptyString(this.value);
    }
  }

  @VerifyGuard()
  @Pipe()
  pipe(): void {
    if (this.isValid) {
      if (this.#options?.ignoreWhiteSpace) {
        this._pipedValue = (this._value as unknown as string).trim();
      } else {
        this._pipedValue = this._value as unknown as string;
      }
    } else {
      this._pipedValue = null;
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
