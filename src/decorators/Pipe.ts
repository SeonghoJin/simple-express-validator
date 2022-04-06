import { canPipeKey } from '@symbol';
import { Executor } from '@decorators';

export function Pipe() {
  return Executor(canPipeKey);
}
