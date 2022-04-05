"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseVerifyGuard = void 0;
const _symbol_1 = require("@symbol");
require("reflect-metadata");
function UseVerifyGuard(constructor) {
    Reflect.metadata(_symbol_1.canVerifyKey, false);
    return class extends constructor {
    };
}
exports.UseVerifyGuard = UseVerifyGuard;
