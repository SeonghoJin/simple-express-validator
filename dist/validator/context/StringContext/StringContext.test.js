"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _context_1 = require("@context");
const _error_1 = require("@error");
test('StringContextTest', () => {
    const context = new _context_1.StringContext('test');
    expect(() => context.isValid).toThrow(_error_1.NotVerifiedError);
});
