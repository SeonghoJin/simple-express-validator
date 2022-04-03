import { RequestLike } from '../../types/express';
import { getObject } from './object';

test('GetObjectValidTest', () => {
  const requestLike1: RequestLike = {
    body: {
      hi: {},
    },
  };

  expect(getObject(requestLike1, 'hi')).toMatchObject({});

  const requestLike2: RequestLike = {
    body: {
      test: {
        hi: 'hello',
      },
    },
  };

  expect(getObject(requestLike2, 'test')).toMatchObject({ hi: 'hello' });
});

test('GetObjectInvalidTest', () => {
  const requestLike1: RequestLike = {
    body: {
      test: NaN,
    },
  };

  expect(() => getObject(requestLike1, 'test')).toThrow(TypeError);

  const requestLike2: RequestLike = {
    body: {
      test: 'hi',
    },
  };

  expect(() => getObject(requestLike2, 'test')).toThrow(TypeError);

  const requestLike3: RequestLike = {
    body: {
      one: null,
      two: undefined,
      three: '123asjdkasldjl',
    },
  };

  expect(() => getObject(requestLike3, 'one')).toThrow(TypeError);
  expect(() => getObject(requestLike3, 'two')).toThrow(TypeError);
  expect(() => getObject(requestLike3, 'three')).toThrow(TypeError);
});
