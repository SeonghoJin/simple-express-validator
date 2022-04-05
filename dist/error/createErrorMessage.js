"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorMessage = void 0;
const createErrorMessage = (path, property, message) => {
    return `${path}(${property}), ${message}`;
};
exports.createErrorMessage = createErrorMessage;
