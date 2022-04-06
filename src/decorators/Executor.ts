export function Executor(symbol: symbol) {
  return function (this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    Reflect.defineMetadata(symbol, false, target);
    const method = descriptor.value!;
    descriptor.value = function () {
      Reflect.defineMetadata(symbol, true, target);
      // eslint-disable-next-line prefer-rest-params
      return method.apply(this, arguments);
    };
  };
}
