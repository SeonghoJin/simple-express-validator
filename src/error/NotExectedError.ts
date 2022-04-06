export class NotExecutedError extends Error {
  constructor(message?: string) {
    if (message) {
      super(message);
    } else {
      super('There is a function to be executed before this function is executed.');
    }
  }
}
