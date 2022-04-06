import { ExecutorGuard } from '@decorators';
import { NotPipeError } from '@error';
import { canPipeKey } from '@symbol';

export function PipeGuard() {
  return ExecutorGuard(canPipeKey, { error: new NotPipeError() });
}
