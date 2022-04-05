"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWidelyNumber = void 0;
const isWidelyNumber = (value) => {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
        return false;
    }
    return true;
};
exports.isWidelyNumber = isWidelyNumber;
