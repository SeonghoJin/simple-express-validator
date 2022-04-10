import { ObjectContext } from './ObjectContext';

test('validObjectContextTest', () => {
  const objectContext = new ObjectContext({ hello: 'test' });

  expect(() => objectContext.isValid).toThrow();
  expect(() => objectContext.pipedValue).toThrow();

  objectContext.verify();
  objectContext.pipe();
  expect(() => objectContext.isValid).not.toThrow();
  expect(() => objectContext.pipedValue).not.toThrow();

  expect(objectContext.value).toMatchObject({ hello: 'test' });
  expect(objectContext.isValid).toBeTruthy();
  expect(objectContext.type).toBe('object');
  expect(objectContext.pipedValue).toMatchObject({ hello: 'test' });
  expect(() => objectContext.throwTypeErrorIfValueIsNotValid()).not.toThrow();
});

test('invalidObjectContextTest', () => {
  const objectContext = new ObjectContext('test');
  expect(() => objectContext.isValid).toThrow();
  expect(() => objectContext.pipedValue).toThrow();

  objectContext.verify();
  objectContext.pipe();

  expect(() => objectContext.isValid).not.toThrow();
  expect(() => objectContext.pipedValue).not.toThrow();

  expect(objectContext.value).toBe('test');
  expect(objectContext.isValid).toBeFalsy();
  expect(objectContext.type).toBe('string');
  expect(objectContext.pipedValue).toMatchObject({});
  expect(() => objectContext.throwTypeErrorIfValueIsNotValid()).toThrow();
});
