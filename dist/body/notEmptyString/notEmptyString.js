"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotEmptyString = void 0;
const createErrorMessage_1 = require("../../error/createErrorMessage");
const string_1 = require("../string/string");
const getNotEmptyString = (req, path, option) => {
    const property = (0, string_1.getString)(req, path);
    const validProp = (option === null || option === void 0 ? void 0 : option.ignoreWhiteSpace) ? property.trim() : property;
    if (validProp === '') {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is empty string'));
    }
    return property;
};
exports.getNotEmptyString = getNotEmptyString;
