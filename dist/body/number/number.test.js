"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("./number");
test('GetNumberValidTest', () => {
    const requestLike1 = {
        body: {
            hi: 10,
        },
    };
    expect((0, number_1.getNumber)(requestLike1, 'hi')).toBe(10);
    const requestLike2 = {
        body: {
            test: '5',
        },
    };
    expect((0, number_1.getNumber)(requestLike2, 'test')).toBe('5');
    const requestLike3 = {
        body: {
            test: '1000',
        },
    };
    expect((0, number_1.getNumber)(requestLike3, 'test', { pipe: true })).toBe(1000);
    const requestLike4 = {
        body: {
            test: Infinity,
        },
    };
    expect((0, number_1.getNumber)(requestLike4, 'test')).toBe(Infinity);
});
test('GetNumberInvalidTest', () => {
    const requestLike1 = {
        body: {
            test: NaN,
        },
    };
    expect(() => (0, number_1.getNumber)(requestLike1, 'test')).toThrow(TypeError);
    const requestLike2 = {
        body: {
            test: 'hi',
        },
    };
    expect(() => (0, number_1.getNumber)(requestLike2, 'test')).toThrow(TypeError);
    const requestLike3 = {
        body: {
            one: null,
            two: undefined,
            three: '123asjdkasldjl',
        },
    };
    expect(() => (0, number_1.getNumber)(requestLike3, 'one')).toThrow(TypeError);
    expect(() => (0, number_1.getNumber)(requestLike3, 'two')).toThrow(TypeError);
    expect(() => (0, number_1.getNumber)(requestLike3, 'three')).toThrow(TypeError);
});
