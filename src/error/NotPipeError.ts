import { NotExecutedError } from './NotExectedError';

export class NotPipeError extends NotExecutedError {
  constructor() {
    super('To execute this function, the pipe function must be executed.');
  }
}
