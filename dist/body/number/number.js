"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumber = void 0;
const util_1 = require("../../util");
const createErrorMessage_1 = require("../../error/createErrorMessage");
const body_1 = require("../body/body");
const getNumber = (req, path, option) => {
    const body = (0, body_1.getBody)(req);
    const property = (0, util_1.getProperty)(body, path);
    const convertedProperty = Number(property);
    if (property === null || property === undefined) {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is null or undefined'));
    }
    if (Number.isNaN(convertedProperty)) {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is Nan'));
    }
    if (typeof convertedProperty !== 'number') {
        throw new TypeError((0, createErrorMessage_1.createErrorMessage)(path, property, 'this is not number'));
    }
    return (option === null || option === void 0 ? void 0 : option.pipe) ? convertedProperty : property;
};
exports.getNumber = getNumber;
