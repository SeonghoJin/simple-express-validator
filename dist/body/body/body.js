"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBody = void 0;
const createErrorMessage_1 = require("../../error/createErrorMessage");
const getBody = (req) => {
    const body = req.body;
    if (body === null || body === undefined) {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)('body', body, 'this is null or undefined'));
    }
    return body;
};
exports.getBody = getBody;
