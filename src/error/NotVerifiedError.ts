export class NotVerifiedError extends Error {
  constructor() {
    super('this is not valid! if you access isValid and value, please call verify()');
  }
}
