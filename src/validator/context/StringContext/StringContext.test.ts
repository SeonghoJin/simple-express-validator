import { StringContext } from '@context';
import { NotVerifiedError } from '@error';

test('StringContextTest', () => {
  const context = new StringContext('test');
  expect(() => context.isValid).toThrow(NotVerifiedError);
});
