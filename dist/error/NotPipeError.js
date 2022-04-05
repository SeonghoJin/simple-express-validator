"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotPipeError = void 0;
class NotPipeError extends Error {
    constructor() {
        super("this is not piped! if you access pipe value, please call pipe()");
    }
}
exports.NotPipeError = NotPipeError;
