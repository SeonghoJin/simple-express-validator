"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const raw_1 = require("../raw");
const isObject = (value) => {
    if ((0, raw_1.isNull)(value))
        return false;
    return typeof value === 'object';
};
exports.isObject = isObject;
