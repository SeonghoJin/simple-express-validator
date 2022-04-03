import { RequestLike } from '../../types/express';
import { getBoolean } from './boolean';

test('GetBooleanValidTest', () => {
  const request: RequestLike = {
    body: {
      1: true,
      2: 'True',
      3: 'False',
      4: 'faLSE',
      5: 'TRUE',
      6: false,
      7: 0,
      8: 1,
    },
  };
  expect(getBoolean(request, '1')).toBeTruthy();
  expect(getBoolean(request, '2')).toBe('True');
  expect(getBoolean(request, '2', { pipe: true })).toBeTruthy();
  expect(getBoolean(request, '3', { pipe: true })).toBeFalsy();
  expect(getBoolean(request, '3')).toBe('False');
  expect(getBoolean(request, '4', { pipe: true })).toBeFalsy();
  expect(getBoolean(request, '4')).toBe('faLSE');
  expect(getBoolean(request, '5', { pipe: true })).toBeTruthy();
  expect(getBoolean(request, '5')).toBe('TRUE');
  expect(getBoolean(request, '6')).toBeFalsy();
  expect(getBoolean(request, '7')).toBe(0);
  expect(getBoolean(request, '7', { pipe: true })).toBeFalsy();
  expect(getBoolean(request, '8', { pipe: false })).toBe(1);
  expect(getBoolean(request, '8', { pipe: true })).toBeTruthy();
});

test('GetBooleanInvalidTest', () => {
  const requests: RequestLike = {
    body: {
      1: 'asdas',
      2: 13123,
      3: undefined,
      4: null,
      5: Symbol.iterator,
    },
  };

  expect(() => getBoolean(requests, '1')).toThrow(TypeError);
  expect(() => getBoolean(requests, '2')).toThrow(TypeError);
  expect(() => getBoolean(requests, '3')).toThrow(TypeError);
  expect(() => getBoolean(requests, '4')).toThrow(TypeError);
  expect(() => getBoolean(requests, '5')).toThrow(TypeError);
});
