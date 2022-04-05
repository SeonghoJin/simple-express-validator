"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = require("./body");
test('GetBodyTestValidTest', () => {
    const validRequests = ['test', 'hi', 0].map((valid) => ({
        body: valid,
    }));
    validRequests.forEach((request) => {
        expect((0, body_1.getBody)(request)).toBe(request['body']);
    });
});
describe('GetBodyTestInvalidTest', () => {
    const invalidRequests = [
        {
            body: null,
        },
        {
            body: undefined,
        },
    ];
    invalidRequests.forEach((request, index) => {
        test(`${index}`, () => {
            try {
                expect((0, body_1.getBody)(request)).toThrowError(TypeError);
            }
            catch (e) {
                expect(e).toBeInstanceOf(TypeError);
            }
        });
    });
});
