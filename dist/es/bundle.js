import { get } from 'lodash';
import 'reflect-metadata';

const createErrorMessage = (path, property, message) => {
    return `${path}(${property}), ${message}`;
};

const getBody = (req) => {
    const body = req.body;
    if (body === null || body === undefined) {
        throw new TypeError(createErrorMessage('body', body, 'this is null or undefined'));
    }
    return body;
};

const getProperty = get;

class ValidatorContext {
    constructor(value) {
        this._pipedValue = null;
        this._isValid = false;
        this._value = value;
        this._type = typeof value;
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

const canPipeKey = Symbol('can-pipe');
const canVerifyKey = Symbol('can-verify');

class NotExecutedError extends Error {
    constructor(message) {
        if (message) {
            super(message);
        }
        else {
            super('There is a function to be executed before this function is executed.');
        }
    }
}

class NotPipeError extends NotExecutedError {
    constructor() {
        super('To execute this function, the pipe function must be executed.');
    }
}

class NotVerifiedError extends NotExecutedError {
    constructor() {
        super('To execute this function, the verify function must be executed.');
    }
}

class PipingError extends Error {
    constructor(message) {
        super(message !== null && message !== void 0 ? message : 'piping error');
    }
}

function VerifyGuard() {
    return ExecutorGuard(canVerifyKey, { error: new NotVerifiedError() });
}

function Verify() {
    return Executor(canVerifyKey);
}

function ExecutorGuard(symbol, executerGuardOption) {
    var _a;
    const error = (_a = executerGuardOption === null || executerGuardOption === void 0 ? void 0 : executerGuardOption.error) !== null && _a !== void 0 ? _a : new NotExecutedError();
    return function (target, propertyKey, descriptor) {
        if (descriptor.get || descriptor.set) {
            const method = descriptor.get;
            descriptor.get = function () {
                const called = Reflect.getMetadata(symbol, this);
                if (called === false || called === undefined) {
                    throw error;
                }
                // eslint-disable-next-line prefer-rest-params
                return method.apply(this);
            };
        }
        else {
            const method = descriptor.value;
            descriptor.value = function () {
                const called = Reflect.getMetadata(symbol, this);
                if (called === false || called === undefined) {
                    throw error;
                }
                // eslint-disable-next-line prefer-rest-params
                return method.apply(this);
            };
        }
    };
}

function Executor(symbol) {
    return function (target, propertyKey, descriptor) {
        const method = descriptor.value;
        descriptor.value = function () {
            Reflect.defineMetadata(symbol, true, this);
            // eslint-disable-next-line prefer-rest-params
            return method.apply(this, arguments);
        };
    };
}

function Pipe() {
    return Executor(canPipeKey);
}

function PipeGuard() {
    return ExecutorGuard(canPipeKey, { error: new NotPipeError() });
}

const isBoolean = (value) => {
    return typeof value === 'boolean';
};

const isNotEmptyString = (value) => {
    if (isString(value) === false) {
        return false;
    }
    return value !== '';
};

const isNotEmptyStringAtTrimmedString = (value) => {
    if (!isString(value)) {
        return false;
    }
    return isNotEmptyString(value.trim());
};

const isNull = (value) => {
    return value === null;
};

const isNullOrUndefined = (value) => {
    return isNull(value) || isUndefined(value);
};

const isNumber = (value) => {
    if (Number.isNaN(value)) {
        return false;
    }
    return typeof value === 'number';
};

const isObject = (value) => {
    if (isNull(value))
        return false;
    return typeof value === 'object';
};

const isString = (value) => {
    return typeof value === 'string';
};

const isUndefined = (value) => {
    return value === undefined;
};

const isWidelyBoolean = (value) => {
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (isString(value)) {
        const lowercaseValue = value.toLowerCase();
        if (lowercaseValue === 'true' || lowercaseValue === 'false' || lowercaseValue === '0' || lowercaseValue === '1') {
            return true;
        }
        return false;
    }
    if (isNumber(value)) {
        if (value === 1 || value === 0) {
            return true;
        }
        return false;
    }
    if (isBoolean(value)) {
        return true;
    }
    return false;
};

const isWidelyNumber = (value) => {
    if (isNullOrUndefined(value)) {
        return false;
    }
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
        return false;
    }
    return true;
};

class BooleanContext extends ValidatorContext {
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        return this._pipedValue;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        this._isValid = isWidelyBoolean(this.value);
    }
    pipe() {
        if (this.isValid) {
            if (isString(this.value)) {
                const lowerCaseValue = this.value.toLowerCase();
                if (lowerCaseValue === 'true' || lowerCaseValue === '1') {
                    this._pipedValue = true;
                    return;
                }
                else if (lowerCaseValue === 'false' || lowerCaseValue === '0') {
                    this._pipedValue = false;
                    return;
                }
                throw new PipingError();
            }
            if (isNumber(this.value)) {
                if (this.value === 1) {
                    this._pipedValue = true;
                    return;
                }
                else if (this.value === 0) {
                    this._pipedValue = false;
                    return;
                }
                throw new PipingError();
            }
            if (isBoolean(this.value)) {
                this._pipedValue = this.value;
                return;
            }
            throw new PipingError();
        }
        else {
            this._pipedValue = false;
        }
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        throw new TypeError(message !== null && message !== void 0 ? message : 'this is not boolean');
    }
}
__decorate([
    VerifyGuard(),
    PipeGuard()
], BooleanContext.prototype, "pipedValue", null);
__decorate([
    VerifyGuard()
], BooleanContext.prototype, "isValid", null);
__decorate([
    Verify()
], BooleanContext.prototype, "verify", null);
__decorate([
    VerifyGuard(),
    Pipe()
], BooleanContext.prototype, "pipe", null);
__decorate([
    VerifyGuard()
], BooleanContext.prototype, "throwTypeErrorIfValueIsNotValid", null);

class NumberContext extends ValidatorContext {
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        return this._pipedValue;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        this._isValid = isWidelyNumber(this.value);
    }
    pipe() {
        if (this.isValid) {
            if (isString(this.value)) {
                this._pipedValue = Number(this.value);
            }
            else {
                this._pipedValue = this.value;
            }
        }
        else {
            this._pipedValue = NaN;
        }
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        throw new TypeError(message !== null && message !== void 0 ? message : 'this is not number');
    }
}
__decorate([
    VerifyGuard(),
    PipeGuard()
], NumberContext.prototype, "pipedValue", null);
__decorate([
    VerifyGuard()
], NumberContext.prototype, "isValid", null);
__decorate([
    Verify()
], NumberContext.prototype, "verify", null);
__decorate([
    VerifyGuard(),
    Pipe()
], NumberContext.prototype, "pipe", null);
__decorate([
    VerifyGuard()
], NumberContext.prototype, "throwTypeErrorIfValueIsNotValid", null);

class ObjectContext extends ValidatorContext {
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        return this._pipedValue;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        this._isValid = isObject(this.value);
    }
    pipe() {
        if (this.isValid) {
            this._pipedValue = this.value;
        }
        else {
            this._pipedValue = {};
        }
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        throw new TypeError(message !== null && message !== void 0 ? message : 'this is not object');
    }
}
__decorate([
    VerifyGuard(),
    PipeGuard()
], ObjectContext.prototype, "pipedValue", null);
__decorate([
    VerifyGuard()
], ObjectContext.prototype, "isValid", null);
__decorate([
    Verify()
], ObjectContext.prototype, "verify", null);
__decorate([
    VerifyGuard(),
    Pipe()
], ObjectContext.prototype, "pipe", null);
__decorate([
    VerifyGuard()
], ObjectContext.prototype, "throwTypeErrorIfValueIsNotValid", null);

class StringContext extends ValidatorContext {
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        return this._pipedValue;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        this._isValid = isString(this.value);
    }
    pipe() {
        if (this.isValid) {
            this._pipedValue = this._value;
        }
        else {
            this._pipedValue = '';
        }
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        throw new TypeError(message !== null && message !== void 0 ? message : 'this is not string');
    }
}
__decorate([
    PipeGuard(),
    VerifyGuard()
], StringContext.prototype, "pipedValue", null);
__decorate([
    VerifyGuard()
], StringContext.prototype, "isValid", null);
__decorate([
    Verify()
], StringContext.prototype, "verify", null);
__decorate([
    VerifyGuard(),
    Pipe()
], StringContext.prototype, "pipe", null);
__decorate([
    VerifyGuard()
], StringContext.prototype, "throwTypeErrorIfValueIsNotValid", null);

var _NotEmptyStringContext_options;
class NotEmptyStringContext extends ValidatorContext {
    constructor(value, options) {
        super(value);
        _NotEmptyStringContext_options.set(this, void 0);
        __classPrivateFieldSet(this, _NotEmptyStringContext_options, options, "f");
    }
    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
    get pipedValue() {
        return this._pipedValue;
    }
    get isValid() {
        return this._isValid;
    }
    verify() {
        var _a;
        if ((_a = __classPrivateFieldGet(this, _NotEmptyStringContext_options, "f")) === null || _a === void 0 ? void 0 : _a.ignoreWhiteSpace) {
            this._isValid = isNotEmptyStringAtTrimmedString(this.value);
        }
        else {
            this._isValid = isNotEmptyString(this.value);
        }
    }
    pipe() {
        var _a;
        if (this.isValid) {
            if ((_a = __classPrivateFieldGet(this, _NotEmptyStringContext_options, "f")) === null || _a === void 0 ? void 0 : _a.ignoreWhiteSpace) {
                this._pipedValue = this._value.trim();
            }
            else {
                this._pipedValue = this._value;
            }
        }
        else {
            this._pipedValue = null;
        }
    }
    throwTypeErrorIfValueIsNotValid(message) {
        if (this.isValid) {
            return;
        }
        throw new TypeError(message !== null && message !== void 0 ? message : 'this is empty string');
    }
}
_NotEmptyStringContext_options = new WeakMap();
__decorate([
    PipeGuard(),
    VerifyGuard()
], NotEmptyStringContext.prototype, "pipedValue", null);
__decorate([
    VerifyGuard()
], NotEmptyStringContext.prototype, "isValid", null);
__decorate([
    Verify()
], NotEmptyStringContext.prototype, "verify", null);
__decorate([
    VerifyGuard(),
    Pipe()
], NotEmptyStringContext.prototype, "pipe", null);
__decorate([
    VerifyGuard()
], NotEmptyStringContext.prototype, "throwTypeErrorIfValueIsNotValid", null);

const getBoolean = (req, path, option) => {
    const body = getBody(req);
    const property = getProperty(body, path);
    const context = new BooleanContext(property);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not boolean'));
    if (option === null || option === void 0 ? void 0 : option.pipe) {
        context.pipe();
        return context.pipedValue;
    }
    return context.value;
};

const getNotEmptyString = (req, path, option) => {
    const property = getString(req, path);
    const context = new NotEmptyStringContext(property, option);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not empty string'));
    if (option === null || option === void 0 ? void 0 : option.pipe) {
        context.pipe();
        return context.pipedValue;
    }
    return context.value;
};

const getNumber = (req, path, option) => {
    const body = getBody(req);
    const property = getProperty(body, path);
    const context = new NumberContext(property);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not number'));
    if (option === null || option === void 0 ? void 0 : option.pipe) {
        context.pipe();
        return context.pipedValue;
    }
    return context.value;
};

const getObject = (req, path, getObjectOption) => {
    const body = getBody(req);
    const property = getProperty(body, path);
    const context = new ObjectContext(property);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not object'));
    if (getObjectOption === null || getObjectOption === void 0 ? void 0 : getObjectOption.pipe) {
        context.pipe();
        return context.pipedValue;
    }
    return context.value;
};

const getString = (req, path) => {
    const body = getBody(req);
    const property = getProperty(body, path);
    const context = new StringContext(property);
    context.verify();
    context.throwTypeErrorIfValueIsNotValid(createErrorMessage(path, property, 'this is not string'));
    return context.value;
};

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBody: getBody,
    getBoolean: getBoolean,
    getNotEmptyString: getNotEmptyString,
    getNumber: getNumber,
    getObject: getObject,
    getString: getString
});

export { index as Body, getProperty };
