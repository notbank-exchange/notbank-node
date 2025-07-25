var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var _WebsocketServiceFactory_websocketConnection, _WebsocketServiceFactory_subcriptionService;
import { getNonce, sign } from "../core/hmac.js";
import { WebsocketConnection } from "../core/websocket/websocketClient.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { ReportService } from "./reportService.js";
import { SubscriptionService } from "./subscriptionService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
import { UserService } from "./userService.js";
import { WalletService } from "./walletService.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class WebsocketServiceFactory {
    constructor(params) {
        _WebsocketServiceFactory_websocketConnection.set(this, void 0);
        _WebsocketServiceFactory_subcriptionService.set(this, void 0);
        const finalDomain = (params === null || params === void 0 ? void 0 : params.domain) || DEFAULT_DOMAIN;
        __classPrivateFieldSet(this, _WebsocketServiceFactory_websocketConnection, new WebsocketConnection({
            domain: finalDomain,
            peekMessageIn: params === null || params === void 0 ? void 0 : params.peekMessageIn,
            peekMessageOut: params === null || params === void 0 ? void 0 : params.peekMessageOut
        }), "f");
    }
    connect(hooks = {}) {
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").connect(hooks);
    }
    close() {
        __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").close();
    }
    get isConnecting() {
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").readyState === WebSocket.CONNECTING;
    }
    get isConnected() {
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").readyState === WebSocket.OPEN;
    }
    get isClosing() {
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").readyState === WebSocket.CLOSING;
    }
    get isClosed() {
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").readyState === WebSocket.CLOSED;
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var nonce = getNonce();
            var signature = sign(params.ApiPublicKey, params.ApiSecretKey, params.UserId, nonce);
            yield __classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f").authenticateUser({
                APIKey: params.ApiPublicKey,
                Signature: signature,
                UserId: params.UserId,
                Nonce: nonce
            });
        });
    }
    newAccountService() {
        return new AccountService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newAuthService() {
        return new AuthService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newFeeService() {
        return new FeeService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newInstrumentService() {
        return new InstrumentService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newProductService() {
        return new ProductService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newReportService() {
        return new ReportService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newSystemService() {
        return new SystemService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    getSubscriptionService() {
        if (__classPrivateFieldGet(this, _WebsocketServiceFactory_subcriptionService, "f")) {
            return __classPrivateFieldGet(this, _WebsocketServiceFactory_subcriptionService, "f");
        }
        __classPrivateFieldSet(this, _WebsocketServiceFactory_subcriptionService, new SubscriptionService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f")), "f");
        return __classPrivateFieldGet(this, _WebsocketServiceFactory_subcriptionService, "f");
    }
    newTradingService() {
        return new TradingService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newUserService() {
        return new UserService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
    newWalletService() {
        return new WalletService(__classPrivateFieldGet(this, _WebsocketServiceFactory_websocketConnection, "f"));
    }
}
_WebsocketServiceFactory_websocketConnection = new WeakMap(), _WebsocketServiceFactory_subcriptionService = new WeakMap();
