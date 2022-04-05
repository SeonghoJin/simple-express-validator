"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
test('GetStringValidTest', () => {
    const validRequest1 = {
        body: {
            test: 'hello',
        },
    };
    expect((0, string_1.getString)(validRequest1, 'test')).toBe('hello');
    const validRequest2 = {
        body: {
            a: {
                b: { c: 'd' },
            },
        },
    };
    expect((0, string_1.getString)(validRequest2, 'a.b.c')).toBe('d');
    const validRequest3 = {
        body: {
            a: {
                b: { c: '' },
            },
        },
    };
    expect((0, string_1.getString)(validRequest3, 'a.b.c')).toBe('');
});
