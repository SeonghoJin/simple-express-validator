import {
  GetBooleanOptions,
  GetNotEmptyStringOption,
  GetNumberOptions,
  GetObjectOption,
  GetStringOption,
} from './option-types';

export interface ExpressValidatorAPI {
  switchHeaders(): this;
  switchBody(): this;
  switchParams(): this;
  switchQuery(): this;

  getString(path: string, option?: GetStringOption): string;
  getNotEmptyString(path: string, option?: GetNotEmptyStringOption): string;
  getBoolean(path: string, option?: GetBooleanOptions): boolean;
  getNumber(path: string, option?: GetNumberOptions): number;
  getObject(path: string, option?: GetObjectOption): object;
}
