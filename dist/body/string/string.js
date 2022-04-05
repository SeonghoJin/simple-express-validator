"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getString = void 0;
const _body_1 = require("@body");
const _util_1 = require("@util");
const _error_1 = require("@error");
const _context_1 = require("@context");
const getString = (req, path) => {
    const body = (0, _body_1.getBody)(req);
    const property = (0, _util_1.getProperty)(body, path);
    const context = new _context_1.StringContext(property);
    context.verify();
    console.log(context);
    context.throwTypeErrorIfValueIsNotValid((0, _error_1.createErrorMessage)(path, property, 'this is not string'));
    return context.value;
};
exports.getString = getString;
