"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyStringAtTrimmedString = void 0;
const raw_1 = require("../raw");
const isEmptyStringAtTrimmedString = (value) => {
    if (!(0, raw_1.isString)(value)) {
        return false;
    }
    return value.trim() === '';
};
exports.isEmptyStringAtTrimmedString = isEmptyStringAtTrimmedString;
