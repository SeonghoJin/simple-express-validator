import { RequestLike } from '../../types/express';
import { getNumber } from './number';

test('GetNumberValidTest', () => {
  const requestLike1: RequestLike = {
    body: {
      hi: 10,
    },
  };

  expect(getNumber(requestLike1, 'hi')).toBe(10);

  const requestLike2: RequestLike = {
    body: {
      test: '5',
    },
  };

  expect(getNumber(requestLike2, 'test')).toBe('5');

  const requestLike3: RequestLike = {
    body: {
      test: '1000',
    },
  };

  expect(getNumber(requestLike3, 'test', { pipe: true })).toBe(1000);

  const requestLike4: RequestLike = {
    body: {
      test: Infinity,
    },
  };

  expect(getNumber(requestLike4, 'test')).toBe(Infinity);
});

test('GetNumberInvalidTest', () => {
  const requestLike1: RequestLike = {
    body: {
      test: NaN,
    },
  };

  expect(() => getNumber(requestLike1, 'test')).toThrow(TypeError);

  const requestLike2: RequestLike = {
    body: {
      test: 'hi',
    },
  };

  expect(() => getNumber(requestLike2, 'test')).toThrow(TypeError);

  const requestLike3: RequestLike = {
    body: {
      one: null,
      two: undefined,
      three: '123asjdkasldjl',
    },
  };

  expect(() => getNumber(requestLike3, 'one')).toThrow(TypeError);
  expect(() => getNumber(requestLike3, 'two')).toThrow(TypeError);
  expect(() => getNumber(requestLike3, 'three')).toThrow(TypeError);
});
