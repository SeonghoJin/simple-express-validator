"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (value) => {
    if (Number.isNaN(value)) {
        return false;
    }
    return typeof value === 'number';
};
exports.isNumber = isNumber;
