"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyString = void 0;
const raw_1 = require("../raw");
const isEmptyString = (value) => {
    if ((0, raw_1.isString)(value) === false) {
        return false;
    }
    return value === '';
};
exports.isEmptyString = isEmptyString;
