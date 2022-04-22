import { createErrorMessage } from '@error';
import { RequestLike } from '@types';
import { isNullOrUndefined } from '../raw/isNullOrUndefined';
import { ExpressValidatorAPI } from './ExpressValidatorAPI';
import {
  GetBooleanOptions,
  GetNotEmptyStringOption,
  GetNumberOptions,
  GetObjectOption,
  GetStringOption,
} from './option-types';
import { BooleanContext, StringContext, NotEmptyStringContext, NumberContext, ObjectContext } from '@context';
import { getProperty } from '@util';

export class ExpressValidator implements ExpressValidatorAPI {
  #root: object;
  readonly #req: RequestLike;

  constructor(req: RequestLike, property: 'headers' | 'body' | 'params' | 'query') {
    this.#req = req;
    this.#root = req[property];
    this.verifyRootValue();
  }

  private verifyRootValue() {
    if (isNullOrUndefined(this.#root)) {
      throw new TypeError(createErrorMessage('root', this.#root, 'this is null or undefined'));
    }
  }

  switchHeaders(): this {
    this.#root = this.#req['headers'];
    this.verifyRootValue();
    return this;
  }

  switchBody(): this {
    this.#root = this.#req['body'];
    this.verifyRootValue();
    return this;
  }

  switchParams(): this {
    this.#root = this.#req['params'];
    this.verifyRootValue();

    return this;
  }

  switchQuery(): this {
    this.#root = this.#req['query'];
    this.verifyRootValue();

    return this;
  }

  getString(path: string, options?: GetStringOption): string {
    const payload = getProperty(this.#req, path);
    const context = new StringContext(payload);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, payload, 'this is not string'));

    if (options?.pipe) {
      context.pipe();
      return context.pipedValue as string;
    }

    return context.value;
  }

  getNotEmptyString(path: string, option?: GetNotEmptyStringOption): string {
    const payload = getProperty(this.#req, path);
    const context = new NotEmptyStringContext(payload);

    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, payload, 'this is empty string'));

    if (option?.pipe) {
      context.pipe();
      return context.pipedValue as string;
    }

    return context.value;
  }

  getBoolean(path: string, option?: GetBooleanOptions): boolean {
    const payload = getProperty(this.#req, path);
    const context = new BooleanContext(payload);

    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, payload, 'this is not boolean'));

    if (option?.pipe) {
      context.pipe();
      return context.pipedValue as boolean;
    }

    return context.value;
  }

  getNumber(path: string, option?: GetNumberOptions): number {
    const payload = getProperty(this.#req, path);
    const context = new NumberContext(payload);

    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, payload, 'this is not number'));

    if (option?.pipe) {
      context.pipe();
      return context.pipedValue as number;
    }

    return context.value;
  }

  getObject(path: string, option?: GetObjectOption): object {
    const payload = getProperty(this.#req, path);
    const context = new ObjectContext(payload);

    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, payload, 'this is not object'));

    if (option?.pipe) {
      context.pipe();
      return context.pipedValue as object;
    }

    return context.value;
  }
}
