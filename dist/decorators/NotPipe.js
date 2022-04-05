"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotPipe = void 0;
// import { NotPipeError } from "../error/NotPipeError";
function NotPipe(target, propertyKey, descriptor) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    const method = descriptor.value;
    descriptor.value = function () {
        console.log(_this);
        // if ((_this as any)._pipedValue === null) {
        //     throw new NotPipeError();
        // }
        // eslint-disable-next-line prefer-rest-params
        return method.apply(this, arguments);
    };
}
exports.NotPipe = NotPipe;
