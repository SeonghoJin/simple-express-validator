import { BooleanContext } from './BooleanContext';

test('validBooleanContextTestWithString=1', () => {
  const booleanContext = new BooleanContext('1');
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe('1');
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('string');
  expect(booleanContext.pipedValue).toBeTruthy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validBooleanContextTestWithString=0', () => {
  const booleanContext = new BooleanContext('0');
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe('0');
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('string');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validBooleanContextTestWithString=true', () => {
  const booleanContext = new BooleanContext('true');
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe('true');
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('string');
  expect(booleanContext.pipedValue).toBeTruthy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validBooleanContextTestWithString=false', () => {
  const booleanContext = new BooleanContext('false');
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe('false');
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('string');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidBooleanContextTestWithString', () => {
  const booleanContext = new BooleanContext('truelike');
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe('truelike');
  expect(booleanContext.isValid).toBeFalsy();
  expect(booleanContext.type).toBe('string');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});

test('validBooleanContextTestWithBoolean=true', () => {
  const booleanContext = new BooleanContext(true);
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe(true);
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('boolean');
  expect(booleanContext.pipedValue).toBeTruthy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidBooleanContextTestWithBoolean=false', () => {
  const booleanContext = new BooleanContext(false);
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe(false);
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('boolean');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validBooleanContextTestWithNumber=1', () => {
  const booleanContext = new BooleanContext(1);

  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();
  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe(1);
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('number');
  expect(booleanContext.pipedValue).toBeTruthy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('validBooleanContextTestWithNumber=0', () => {
  const booleanContext = new BooleanContext(0);

  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();
  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe(0);
  expect(booleanContext.isValid).toBeTruthy();
  expect(booleanContext.type).toBe('number');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidBooleanContextTestWithNumber', () => {
  const booleanContext = new BooleanContext(5);
  expect(() => booleanContext.isValid).toThrow();
  expect(() => booleanContext.pipedValue).toThrow();

  booleanContext.verify();
  booleanContext.pipe();

  expect(() => booleanContext.isValid).not.toThrow();
  expect(() => booleanContext.pipedValue).not.toThrow();

  expect(booleanContext.value).toBe(5);
  expect(booleanContext.isValid).toBeFalsy();
  expect(booleanContext.type).toBe('number');
  expect(booleanContext.pipedValue).toBeFalsy();
  expect(() => booleanContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});
