import { canVerifyKey } from '@symbol';
import { NotVerifiedError } from '@error';

export function VerifyGuard(this: any, target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  if (descriptor.get || descriptor.set) {
    const method = descriptor.get!;
    descriptor.get = function () {
      const verified = Reflect.getMetadata(canVerifyKey, target);
      if (verified === false) {
        throw new NotVerifiedError();
      }
      // eslint-disable-next-line prefer-rest-params
      return method.apply(this);
    };
  } else {
    const method = descriptor.value!;
    descriptor.value = function () {
      const verified = Reflect.getMetadata(canVerifyKey, target);
      if (verified === false) {
        throw new NotVerifiedError();
      }
      // eslint-disable-next-line prefer-rest-params
      return method.apply(this);
    };
  }
}
