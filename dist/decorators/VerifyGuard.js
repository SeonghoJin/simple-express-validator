"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyGuard = void 0;
const _symbol_1 = require("@symbol");
const _error_1 = require("@error");
function VerifyGuard(target, propertyKey, descriptor) {
    if (descriptor.get || descriptor.set) {
        const method = descriptor.get;
        descriptor.get = function () {
            const verified = Reflect.getMetadata(_symbol_1.canVerifyKey, target);
            if (verified === false) {
                throw new _error_1.NotVerifiedError();
            }
            // eslint-disable-next-line prefer-rest-params
            return method.apply(this);
        };
    }
    else {
        const method = descriptor.value;
        descriptor.value = function () {
            const verified = Reflect.getMetadata(_symbol_1.canVerifyKey, target);
            if (verified === false) {
                throw new _error_1.NotVerifiedError();
            }
            // eslint-disable-next-line prefer-rest-params
            return method.apply(this);
        };
    }
}
exports.VerifyGuard = VerifyGuard;
