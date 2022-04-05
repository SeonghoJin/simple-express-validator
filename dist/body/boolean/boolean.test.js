"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean_1 = require("./boolean");
test('GetBooleanValidTest', () => {
    const request = {
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
    expect((0, boolean_1.getBoolean)(request, '1')).toBeTruthy();
    expect((0, boolean_1.getBoolean)(request, '2')).toBe('True');
    expect((0, boolean_1.getBoolean)(request, '2', { pipe: true })).toBeTruthy();
    expect((0, boolean_1.getBoolean)(request, '3', { pipe: true })).toBeFalsy();
    expect((0, boolean_1.getBoolean)(request, '3')).toBe('False');
    expect((0, boolean_1.getBoolean)(request, '4', { pipe: true })).toBeFalsy();
    expect((0, boolean_1.getBoolean)(request, '4')).toBe('faLSE');
    expect((0, boolean_1.getBoolean)(request, '5', { pipe: true })).toBeTruthy();
    expect((0, boolean_1.getBoolean)(request, '5')).toBe('TRUE');
    expect((0, boolean_1.getBoolean)(request, '6')).toBeFalsy();
    expect((0, boolean_1.getBoolean)(request, '7')).toBe(0);
    expect((0, boolean_1.getBoolean)(request, '7', { pipe: true })).toBeFalsy();
    expect((0, boolean_1.getBoolean)(request, '8', { pipe: false })).toBe(1);
    expect((0, boolean_1.getBoolean)(request, '8', { pipe: true })).toBeTruthy();
});
test('GetBooleanInvalidTest', () => {
    const requests = {
        body: {
            1: 'asdas',
            2: 13123,
            3: undefined,
            4: null,
            5: Symbol.iterator,
        },
    };
    expect(() => (0, boolean_1.getBoolean)(requests, '1')).toThrow(TypeError);
    expect(() => (0, boolean_1.getBoolean)(requests, '2')).toThrow(TypeError);
    expect(() => (0, boolean_1.getBoolean)(requests, '3')).toThrow(TypeError);
    expect(() => (0, boolean_1.getBoolean)(requests, '4')).toThrow(TypeError);
    expect(() => (0, boolean_1.getBoolean)(requests, '5')).toThrow(TypeError);
});
