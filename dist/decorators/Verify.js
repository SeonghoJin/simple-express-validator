"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
const _symbol_1 = require("@symbol");
require("reflect-metadata");
function Verify(target, propertyKey, descriptor) {
    Reflect.defineMetadata(_symbol_1.canVerifyKey, false, target);
    const method = descriptor.value;
    descriptor.value = function () {
        Reflect.defineMetadata(_symbol_1.canVerifyKey, true, target);
        // eslint-disable-next-line prefer-rest-params
        return method.apply(this, arguments);
    };
}
exports.Verify = Verify;
