import { canVerifyKey } from '@symbol';
import 'reflect-metadata';
import { Executor } from '@decorators';

export function Verify() {
  return Executor(canVerifyKey);
}
