var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ReportService_serviceCore;
export class ReportService {
    constructor(serviceCore) {
        _ReportService_serviceCore.set(this, void 0);
        this.OMS_ID = 1;
        __classPrivateFieldSet(this, _ReportService_serviceCore, serviceCore, "f");
    }
}
_ReportService_serviceCore = new WeakMap();
