"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = void 0;
const raw_1 = require("../raw");
const isNullOrUndefined = (value) => {
    return (0, raw_1.isNull)(value) || (0, raw_1.isUndefined)(value);
};
exports.isNullOrUndefined = isNullOrUndefined;
