import { StringContext } from '@context';
import { NotPipeError, NotVerifiedError } from '@error';

test('StringContextTest', () => {
  const context = new StringContext('test');
  expect(() => context.isValid).toThrow(new NotVerifiedError());
  context.verify();
  expect(context.isValid).toBeTruthy();
  expect(() => context.pipedValue).toThrow(new NotPipeError());
  context.pipe();
  expect(context.pipedValue).toBe('test');
});
