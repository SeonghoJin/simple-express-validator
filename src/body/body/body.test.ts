import { RequestLike } from '../../types/express';
import { getBody } from './body';

test('GetBodyTestValidTest', () => {
  const validRequests = ['test', 'hi', 0].map((valid) => ({
    body: valid,
  }));

  validRequests.forEach((request) => {
    expect(getBody(request)).toBe(request['body']);
  });
});

test('GetBodyTestInvalidTest', () => {
  const invalidRequests: RequestLike[] = [
    {
      body: null,
    },
    {
      body: undefined,
    },
  ];

  invalidRequests.forEach((request) => {
    expect(() => getBody(request)).toThrowError(TypeError);
  });
});
