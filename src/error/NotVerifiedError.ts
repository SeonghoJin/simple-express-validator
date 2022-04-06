import { NotExecutedError } from './NotExectedError';

export class NotVerifiedError extends NotExecutedError {
  constructor() {
    super('To execute this function, the verify function must be executed.');
  }
}
