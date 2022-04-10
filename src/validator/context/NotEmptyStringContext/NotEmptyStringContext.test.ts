import { NotEmptyStringContext } from '@context';

test('validNotEmptyStringContextTest', () => {
  const notEmptyStringContext = new NotEmptyStringContext('test');

  expect(() => notEmptyStringContext.isValid).toThrow();
  expect(() => notEmptyStringContext.pipedValue).toThrow();

  notEmptyStringContext.verify();
  notEmptyStringContext.pipe();

  expect(() => notEmptyStringContext.isValid).not.toThrow();
  expect(() => notEmptyStringContext.pipedValue).not.toThrow();

  expect(notEmptyStringContext.value).toBe('test');
  expect(notEmptyStringContext.isValid).toBeTruthy();
  expect(notEmptyStringContext.type).toBe('string');
  expect(notEmptyStringContext.pipedValue).toBe('test');
  expect(() => notEmptyStringContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validNotEmptyStringContextTest="  "', () => {
  const notEmptyStringContext = new NotEmptyStringContext('  ');

  expect(() => notEmptyStringContext.isValid).toThrow();
  expect(() => notEmptyStringContext.pipedValue).toThrow();

  notEmptyStringContext.verify();
  notEmptyStringContext.pipe();

  expect(() => notEmptyStringContext.isValid).not.toThrow();
  expect(() => notEmptyStringContext.pipedValue).not.toThrow();

  expect(notEmptyStringContext.value).toBe('  ');
  expect(notEmptyStringContext.isValid).toBeTruthy();
  expect(notEmptyStringContext.type).toBe('string');
  expect(notEmptyStringContext.pipedValue).toBe('  ');
  expect(() => notEmptyStringContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidNotEmptyStringContextTest', () => {
  const notEmptyStringContext = new NotEmptyStringContext(null);
  expect(() => notEmptyStringContext.isValid).toThrow();
  expect(() => notEmptyStringContext.pipedValue).toThrow();

  notEmptyStringContext.verify();
  notEmptyStringContext.pipe();

  expect(() => notEmptyStringContext.isValid).not.toThrow();
  expect(() => notEmptyStringContext.pipedValue).not.toThrow();

  expect(notEmptyStringContext.value).toBe(null);
  expect(notEmptyStringContext.isValid).toBeFalsy();
  expect(notEmptyStringContext.type).toBe('object');
  expect(notEmptyStringContext.pipedValue).toBe(null);
  expect(() => notEmptyStringContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});

test('invalidNotEmptyStringContextTest=""', () => {
  const notEmptyStringContext = new NotEmptyStringContext('');
  expect(() => notEmptyStringContext.isValid).toThrow();
  expect(() => notEmptyStringContext.pipedValue).toThrow();

  notEmptyStringContext.verify();
  notEmptyStringContext.pipe();

  expect(() => notEmptyStringContext.isValid).not.toThrow();
  expect(() => notEmptyStringContext.pipedValue).not.toThrow();

  expect(notEmptyStringContext.value).toBe('');
  expect(notEmptyStringContext.isValid).toBeFalsy();
  expect(notEmptyStringContext.type).toBe('string');
  expect(notEmptyStringContext.pipedValue).toBe(null);
  expect(() => notEmptyStringContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});

test('invalidNotEmptyStringContextTest="  "', () => {
  const notEmptyStringContext = new NotEmptyStringContext('  ', {
    ignoreWhiteSpace: true,
  });

  expect(() => notEmptyStringContext.isValid).toThrow();
  expect(() => notEmptyStringContext.pipedValue).toThrow();

  notEmptyStringContext.verify();
  notEmptyStringContext.pipe();

  expect(() => notEmptyStringContext.isValid).not.toThrow();
  expect(() => notEmptyStringContext.pipedValue).not.toThrow();

  expect(notEmptyStringContext.value).toBe('  ');
  expect(notEmptyStringContext.isValid).toBeFalsy();
  expect(notEmptyStringContext.type).toBe('string');
  expect(notEmptyStringContext.pipedValue).toBe(null);
  expect(() => notEmptyStringContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});
