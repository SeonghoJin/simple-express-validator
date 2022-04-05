"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
test('GetObjectValidTest', () => {
    const requestLike1 = {
        body: {
            hi: {},
        },
    };
    expect((0, object_1.getObject)(requestLike1, 'hi')).toMatchObject({});
    const requestLike2 = {
        body: {
            test: {
                hi: 'hello',
            },
        },
    };
    expect((0, object_1.getObject)(requestLike2, 'test')).toMatchObject({ hi: 'hello' });
});
test('GetObjectInvalidTest', () => {
    const requestLike1 = {
        body: {
            test: NaN,
        },
    };
    expect(() => (0, object_1.getObject)(requestLike1, 'test')).toThrow(TypeError);
    const requestLike2 = {
        body: {
            test: 'hi',
        },
    };
    expect(() => (0, object_1.getObject)(requestLike2, 'test')).toThrow(TypeError);
    const requestLike3 = {
        body: {
            one: null,
            two: undefined,
            three: '123asjdkasldjl',
        },
    };
    expect(() => (0, object_1.getObject)(requestLike3, 'one')).toThrow(TypeError);
    expect(() => (0, object_1.getObject)(requestLike3, 'two')).toThrow(TypeError);
    expect(() => (0, object_1.getObject)(requestLike3, 'three')).toThrow(TypeError);
});
