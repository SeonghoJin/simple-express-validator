import { RequestLike } from '../../types/express';
import { getString } from './string';

test('GetStringValidTest', () => {
  const validRequest1: RequestLike = {
    body: {
      test: 'hello',
    },
  };

  expect(getString(validRequest1, 'test')).toBe('hello');

  const validRequest2: RequestLike = {
    body: {
      a: {
        b: { c: 'd' },
      },
    },
  };

  expect(getString(validRequest2, 'a.b.c')).toBe('d');

  const validRequest3: RequestLike = {
    body: {
      a: {
        b: { c: '' },
      },
    },
  };
  expect(getString(validRequest3, 'a.b.c')).toBe('');
});
