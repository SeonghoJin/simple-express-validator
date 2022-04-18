import { createErrorMessage } from '@error';
import { RequestLike } from '@types';
import { isNullOrUndefined } from '../raw/isNullOrUndefined';
import { ExpressValidatorAPI } from './ExpressValidatorAPI';

export class ExpressValidator implements ExpressValidatorAPI {
  #root: any;
  readonly #req: RequestLike;
  readonly #property: 'headers' | 'body';

  constructor(req: RequestLike, property: 'headers' | 'body' | 'params' | 'query') {
    this.#req = req;
    this.#root = req[property];
  }

  private verifyRootValue() {
    if (isNullOrUndefined(this.#root)) {
      throw new TypeError(createErrorMessage('root', this.#root, 'this is null or undefined'));
    }
  }

  switchHeaders(): this {
    this.#root = this.#req['headers'];

    return this;
  }

  switchBody(): this {
    this.#root = this.#req['body'];
    return this;
    throw new Error('Method not implemented.');
  }

  switchParams(): this {
    throw new Error('Method not implemented.');
  }

  switchQuery(): this {
    throw new Error('Method not implemented.');
  }

  getString(): string {
    throw new Error('Method not implemented.');
  }

  getNotEmptyString(): string {
    throw new Error('Method not implemented.');
  }

  getBoolean(): boolean {
    throw new Error('Method not implemented.');
  }

  getNumber(): number {
    throw new Error('Method not implemented.');
  }

  getObject(): object {
    throw new Error('Method not implemented.');
  }
}
