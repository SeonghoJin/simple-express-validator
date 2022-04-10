import { NumberContext } from './NumberContext';

test('validNumberContextTest', () => {
  const numberContext = new NumberContext(5);

  expect(() => numberContext.isValid).toThrow();
  expect(() => numberContext.pipedValue).toThrow();

  numberContext.verify();
  numberContext.pipe();
  expect(() => numberContext.isValid).not.toThrow();
  expect(() => numberContext.pipedValue).not.toThrow();

  expect(numberContext.value).toBe(5);
  expect(numberContext.isValid).toBeTruthy();
  expect(numberContext.type).toBe('number');
  expect(numberContext.pipedValue).toBe(5);
  expect(() => numberContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidNumberContextTest', () => {
  const numberContext = new NumberContext('test');
  expect(() => numberContext.isValid).toThrow();
  expect(() => numberContext.pipedValue).toThrow();

  numberContext.verify();
  numberContext.pipe();

  expect(() => numberContext.isValid).not.toThrow();
  expect(() => numberContext.pipedValue).not.toThrow();

  expect(numberContext.value).toBe('test');
  expect(numberContext.isValid).toBeFalsy();
  expect(numberContext.type).toBe('string');
  expect(numberContext.pipedValue).toBe(0);
  expect(() => numberContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});
