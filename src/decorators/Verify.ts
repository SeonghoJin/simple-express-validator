import { canVerifyKey } from '@symbol';
import 'reflect-metadata';

export function Verify(this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  Reflect.defineMetadata(canVerifyKey, false, target);
  const method = descriptor.value!;
  descriptor.value = function () {
    Reflect.defineMetadata(canVerifyKey, true, target);
    // eslint-disable-next-line prefer-rest-params
    return method.apply(this, arguments);
  };
}
