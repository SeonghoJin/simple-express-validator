"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorContext = void 0;
class ValidatorContext {
    constructor(value) {
        this._pipedValue = null;
        this._isValid = false;
        this._value = value;
        this._type = typeof value;
    }
}
exports.ValidatorContext = ValidatorContext;
