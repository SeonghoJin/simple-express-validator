export class NotPipeError extends Error {
  constructor() {
    super('this is not piped! if you access pipe value, please call pipe()');
  }
}
