"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotVerifiedError = void 0;
class NotVerifiedError extends Error {
    constructor() {
        super("this is not valid! if you access isValid and value, please call verify()");
    }
}
exports.NotVerifiedError = NotVerifiedError;
