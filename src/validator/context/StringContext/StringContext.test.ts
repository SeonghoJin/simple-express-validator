import { StringContext } from '@context';

test('validStringContextTest', () => {
  const stringContext = new StringContext('test');

  expect(() => stringContext.isValid).toThrow();
  expect(() => stringContext.pipedValue).toThrow();

  stringContext.verify();
  stringContext.pipe();
  expect(() => stringContext.isValid).not.toThrow();
  expect(() => stringContext.pipedValue).not.toThrow();

  expect(stringContext.value).toBe('test');
  expect(stringContext.isValid).toBeTruthy();
  expect(stringContext.type).toBe('string');
  expect(stringContext.pipedValue).toBe('test');
  expect(() => stringContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidStringContextTest', () => {
  const stringContext = new StringContext(null);
  expect(() => stringContext.isValid).toThrow();
  expect(() => stringContext.pipedValue).toThrow();

  stringContext.verify();
  stringContext.pipe();

  expect(() => stringContext.isValid).not.toThrow();
  expect(() => stringContext.pipedValue).not.toThrow();

  expect(stringContext.value).toBe(null);
  expect(stringContext.isValid).toBeFalsy();
  expect(stringContext.type).toBe('object');
  expect(stringContext.pipedValue).toBe('');
  expect(() => stringContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});
