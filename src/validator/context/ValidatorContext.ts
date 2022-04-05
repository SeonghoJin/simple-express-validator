export interface ValidatorContext<T> {
  verify(): void;
  pipe(): void;
  type(): 'number' | 'bigint' | 'symbol' | 'string' | 'object' | 'undefined' | 'boolean';
  throwTypeErrorIfValueIsNotValid(message?: string): never;
  get isStrictValid(): boolean;
  get isValid(): boolean;
  get value(): T;
  get pipeValue(): T;
}
