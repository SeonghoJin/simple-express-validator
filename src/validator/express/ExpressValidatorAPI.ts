export interface ExpressValidatorAPI {
  switchHeaders(): this;
  switchBody(): this;
  switchParams(): this;
  switchQuery(): this;

  getString(): string;
  getNotEmptyString(): string;
  getBoolean(): boolean;
  getNumber(): number;
  getObject(): object;
}
