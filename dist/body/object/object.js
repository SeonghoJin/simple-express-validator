"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObject = void 0;
const util_1 = require("../../util");
const createErrorMessage_1 = require("../../error/createErrorMessage");
const body_1 = require("../body/body");
const getObject = (req, path) => {
    const body = (0, body_1.getBody)(req);
    const property = (0, util_1.getProperty)(body, path);
    if (property === null || property === undefined) {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is null or undefined'));
    }
    if (typeof property !== 'object') {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is not object'));
    }
    return property;
};
exports.getObject = getObject;
