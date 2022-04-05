"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringContext = void 0;
const _error_1 = require("@error");
const _context_1 = require("@context");
const _raw_1 = require("@raw");
const _decorators_1 = require("@decorators");
class StringContext extends _context_1.ValidatorContext {
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        if ((0, _raw_1.isNull)(this._pipedValue)) {
            throw new _error_1.NotPipeError();
        }
        return this._pipedValue;
    }
    get isStrictValid() {
        return this._isValid;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        if ((0, _raw_1.isString)(this._value)) {
            this._isValid = true;
        }
    }
    pipe() {
        this._pipedValue = String(this._value);
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        if (message) {
            throw new TypeError(message);
        }
        else {
            throw new TypeError("this is not string");
        }
    }
}
__decorate([
    _decorators_1.VerifyGuard
], StringContext.prototype, "pipedValue", null);
__decorate([
    _decorators_1.VerifyGuard
], StringContext.prototype, "isStrictValid", null);
__decorate([
    _decorators_1.VerifyGuard
], StringContext.prototype, "isValid", null);
__decorate([
    _decorators_1.Verify
], StringContext.prototype, "verify", null);
__decorate([
    _decorators_1.VerifyGuard
], StringContext.prototype, "throwTypeErrorIfValueIsNotValid", null);
exports.StringContext = StringContext;
