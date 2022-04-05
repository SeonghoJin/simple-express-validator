"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWidelyBoolean = void 0;
const raw_1 = require("../raw");
const isWidelyBoolean = (value) => {
    if ((0, raw_1.isNullOrUndefined)(value)) {
        return false;
    }
    if ((0, raw_1.isString)(value)) {
        const lowercaseValue = value.toLowerCase();
        if (lowercaseValue === 'true' || lowercaseValue === 'false' || lowercaseValue === '0' || lowercaseValue === '1') {
            return true;
        }
        return false;
    }
    if ((0, raw_1.isNumber)(value)) {
        if (value === 1 || value === 0) {
            return true;
        }
        return false;
    }
    if ((0, raw_1.isBoolean)(value)) {
        return true;
    }
    return false;
};
exports.isWidelyBoolean = isWidelyBoolean;
