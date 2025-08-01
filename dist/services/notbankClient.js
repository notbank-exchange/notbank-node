var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NotbankClient_accountService, _NotbankClient_authService, _NotbankClient_feeService, _NotbankClient_instrumentService, _NotbankClient_productService, _NotbankClient_reportService, _NotbankClient_getSubscriptionService, _NotbankClient_systemService, _NotbankClient_tradingService, _NotbankClient_userService, _NotbankClient_walletService, _NotbankClient_authenticateUser, _NotbankClient_connect, _NotbankClient_close;
import { NotbankError } from "../models/index.js";
import { HttpServiceFactory } from "./httpServiceFactory.js";
import { WebsocketServiceFactory } from "./websocketServicesFactory.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class NotbankClient {
    constructor(params) {
        _NotbankClient_accountService.set(this, void 0);
        _NotbankClient_authService.set(this, void 0);
        _NotbankClient_feeService.set(this, void 0);
        _NotbankClient_instrumentService.set(this, void 0);
        _NotbankClient_productService.set(this, void 0);
        _NotbankClient_reportService.set(this, void 0);
        _NotbankClient_getSubscriptionService.set(this, void 0);
        _NotbankClient_systemService.set(this, void 0);
        _NotbankClient_tradingService.set(this, void 0);
        _NotbankClient_userService.set(this, void 0);
        _NotbankClient_walletService.set(this, void 0);
        _NotbankClient_authenticateUser.set(this, void 0);
        _NotbankClient_connect.set(this, void 0);
        _NotbankClient_close.set(this, void 0);
        __classPrivateFieldSet(this, _NotbankClient_accountService, params.accountService, "f");
        __classPrivateFieldSet(this, _NotbankClient_authService, params.authService, "f");
        __classPrivateFieldSet(this, _NotbankClient_feeService, params.feeService, "f");
        __classPrivateFieldSet(this, _NotbankClient_instrumentService, params.instrumentService, "f");
        __classPrivateFieldSet(this, _NotbankClient_productService, params.productService, "f");
        __classPrivateFieldSet(this, _NotbankClient_reportService, params.reportService, "f");
        __classPrivateFieldSet(this, _NotbankClient_getSubscriptionService, params.getSubscriptionService, "f");
        __classPrivateFieldSet(this, _NotbankClient_systemService, params.systemService, "f");
        __classPrivateFieldSet(this, _NotbankClient_tradingService, params.tradingService, "f");
        __classPrivateFieldSet(this, _NotbankClient_userService, params.userService, "f");
        __classPrivateFieldSet(this, _NotbankClient_walletService, params.walletService, "f");
        __classPrivateFieldSet(this, _NotbankClient_authenticateUser, params.authenticate, "f");
        __classPrivateFieldSet(this, _NotbankClient_connect, params.connect, "f");
        __classPrivateFieldSet(this, _NotbankClient_close, params.close, "f");
    }
    authenticateUser(params) {
        return __classPrivateFieldGet(this, _NotbankClient_authenticateUser, "f").call(this, params);
    }
    getAccountService() {
        return __classPrivateFieldGet(this, _NotbankClient_accountService, "f");
    }
    getAuthService() {
        return __classPrivateFieldGet(this, _NotbankClient_authService, "f");
    }
    getFeeService() {
        return __classPrivateFieldGet(this, _NotbankClient_feeService, "f");
    }
    getInstrumentService() {
        return __classPrivateFieldGet(this, _NotbankClient_instrumentService, "f");
    }
    getProductService() {
        return __classPrivateFieldGet(this, _NotbankClient_productService, "f");
    }
    getReportService() {
        return __classPrivateFieldGet(this, _NotbankClient_reportService, "f");
    }
    getSubscriptionService() {
        return __classPrivateFieldGet(this, _NotbankClient_getSubscriptionService, "f").call(this);
    }
    getSystemService() {
        return __classPrivateFieldGet(this, _NotbankClient_systemService, "f");
    }
    getTradingService() {
        return __classPrivateFieldGet(this, _NotbankClient_tradingService, "f");
    }
    getUserService() {
        return __classPrivateFieldGet(this, _NotbankClient_userService, "f");
    }
    getWalletService() {
        return __classPrivateFieldGet(this, _NotbankClient_walletService, "f");
    }
    connect(hooks = {}) {
        return __classPrivateFieldGet(this, _NotbankClient_connect, "f").call(this, hooks);
    }
    close() {
        __classPrivateFieldGet(this, _NotbankClient_close, "f").call(this);
    }
}
_NotbankClient_accountService = new WeakMap(), _NotbankClient_authService = new WeakMap(), _NotbankClient_feeService = new WeakMap(), _NotbankClient_instrumentService = new WeakMap(), _NotbankClient_productService = new WeakMap(), _NotbankClient_reportService = new WeakMap(), _NotbankClient_getSubscriptionService = new WeakMap(), _NotbankClient_systemService = new WeakMap(), _NotbankClient_tradingService = new WeakMap(), _NotbankClient_userService = new WeakMap(), _NotbankClient_walletService = new WeakMap(), _NotbankClient_authenticateUser = new WeakMap(), _NotbankClient_connect = new WeakMap(), _NotbankClient_close = new WeakMap();
NotbankClient.Factory = class Factory {
    static createRestClient(domain = DEFAULT_DOMAIN) {
        var factory = new HttpServiceFactory(domain);
        return new NotbankClient({
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: () => { throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1); },
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            authenticate: params => factory.authenticateUser(params),
            connect: () => null,
            close: () => null
        });
    }
    static createWebsocketClient(domain = DEFAULT_DOMAIN) {
        var factory = new WebsocketServiceFactory({ domain });
        return new NotbankClient({
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: factory.getSubscriptionService,
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            authenticate: params => factory.authenticateUser(params),
            connect: () => factory.connect(),
            close: () => factory.close()
        });
    }
};
