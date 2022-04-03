import { getNotEmptyString } from './notEmptyString';

test('GetStringValidTest', () => {
  const validRequest1: RequestLike = {
    body: {
      test: 'hello',
    },
  };

  expect(getNotEmptyString(validRequest1, 'test')).toBe('hello');

  const validRequest2: RequestLike = {
    body: {
      a: {
        b: { c: 'd' },
      },
    },
  };

  expect(getNotEmptyString(validRequest2, 'a.b.c')).toBe('d');

  const validRequest3: RequestLike = {
    body: {
      a: {
        b: { c: ' ' },
      },
    },
  };

  expect(getNotEmptyString(validRequest3, 'a.b.c')).toBe(' ');
});

test('GetStringInvalidTest', () => {
  const validRequest1: RequestLike = {
    body: {
      a: {
        b: { c: '' },
      },
    },
  };

  expect(() => getNotEmptyString(validRequest1, 'a.b.c')).toThrow(TypeError);

  const validRequest2: RequestLike = {
    body: {
      a: {
        b: { c: '  ' },
      },
    },
  };

  expect(() => getNotEmptyString(validRequest2, 'a.b.c', { ignoreWhiteSpace: true })).toThrow(TypeError);
});
