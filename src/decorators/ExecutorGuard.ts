import { NotExecutedError } from 'src/error/NotExectedError';

type ExecutorGuardOption = {
  error?: NotExecutedError;
};

export function ExecutorGuard(symbol: symbol, executerGuardOption?: ExecutorGuardOption) {
  const error = executerGuardOption?.error ?? new NotExecutedError();

  return function (this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    if (descriptor.get || descriptor.set) {
      const method = descriptor.get!;
      descriptor.get = function () {
        const called = Reflect.getMetadata(symbol, target);
        if (called === false) {
          throw error;
        }
        // eslint-disable-next-line prefer-rest-params
        return method.apply(this);
      };
    } else {
      const method = descriptor.value!;
      descriptor.value = function () {
        const called = Reflect.getMetadata(symbol, target);
        if (called === false) {
          throw error;
        }
        // eslint-disable-next-line prefer-rest-params
        return method.apply(this);
      };
    }
  };
}
