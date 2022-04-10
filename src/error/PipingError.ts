export class PipingError extends Error {
  constructor(message?: string) {
    super(message ?? 'piping error');
  }
}
