"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolean = void 0;
const util_1 = require("../../util");
const createErrorMessage_1 = require("../../error/createErrorMessage");
const body_1 = require("../body/body");
const getBoolean = (req, path, option) => {
    const body = (0, body_1.getBody)(req);
    const property = (0, util_1.getProperty)(body, path);
    let convertedProperty = property;
    if (property === null || property === undefined) {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is null or undefined'));
    }
    if (typeof property === 'string') {
        const lowercaseProperty = property.toLowerCase();
        if (lowercaseProperty !== 'true' &&
            lowercaseProperty !== 'false' &&
            lowercaseProperty !== '0' &&
            lowercaseProperty !== '1') {
            throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is not boolean'));
        }
        else {
            convertedProperty = lowercaseProperty === 'true' || lowercaseProperty === '1';
        }
        return (option === null || option === void 0 ? void 0 : option.pipe) ? convertedProperty : property;
    }
    if (typeof property === 'number') {
        if (property !== 1 && property !== 0) {
            throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is not boolean'));
        }
        else {
            convertedProperty = property === 1;
        }
        return (option === null || option === void 0 ? void 0 : option.pipe) ? convertedProperty : property;
    }
    if (typeof property !== 'boolean') {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is not boolean'));
    }
    return (option === null || option === void 0 ? void 0 : option.pipe) ? convertedProperty : property;
};
exports.getBoolean = getBoolean;
