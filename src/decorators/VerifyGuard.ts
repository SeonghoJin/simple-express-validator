import { canVerifyKey } from '@symbol';
import { ExecutorGuard } from '@decorators';
import { NotVerifiedError } from '@error';

export function VerifyGuard() {
  return ExecutorGuard(canVerifyKey, { error: new NotVerifiedError() });
}
