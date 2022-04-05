"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notEmptyString_1 = require("./notEmptyString");
test('GetStringValidTest', () => {
    const validRequest1 = {
        body: {
            test: 'hello',
        },
    };
    expect((0, notEmptyString_1.getNotEmptyString)(validRequest1, 'test')).toBe('hello');
    const validRequest2 = {
        body: {
            a: {
                b: { c: 'd' },
            },
        },
    };
    expect((0, notEmptyString_1.getNotEmptyString)(validRequest2, 'a.b.c')).toBe('d');
    const validRequest3 = {
        body: {
            a: {
                b: { c: ' ' },
            },
        },
    };
    expect((0, notEmptyString_1.getNotEmptyString)(validRequest3, 'a.b.c')).toBe(' ');
});
test('GetStringInvalidTest', () => {
    const validRequest1 = {
        body: {
            a: {
                b: { c: '' },
            },
        },
    };
    expect(() => (0, notEmptyString_1.getNotEmptyString)(validRequest1, 'a.b.c')).toThrow(TypeError);
    const validRequest2 = {
        body: {
            a: {
                b: { c: '  ' },
            },
        },
    };
    expect(() => (0, notEmptyString_1.getNotEmptyString)(validRequest2, 'a.b.c', { ignoreWhiteSpace: true })).toThrow(TypeError);
});
