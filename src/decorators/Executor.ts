export function Executor(symbol: symbol) {
  return function (this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const method = descriptor.value!;
    descriptor.value = function () {
      Reflect.defineMetadata(symbol, true, this);
      // eslint-disable-next-line prefer-rest-params
      return method.apply(this, arguments);
    };
  };
}
