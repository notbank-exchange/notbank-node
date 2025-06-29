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
var _HttpServiceFactory_httpCore;
import { UserService } from "./userService.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { ReportService } from "./reportService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
import { getNonce, sign } from "../core/hmac.js";
import { HttpClient } from "../core/http/httpClient.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class HttpServiceFactory {
    constructor(domain) {
        _HttpServiceFactory_httpCore.set(this, void 0);
        const finalDomain = domain || DEFAULT_DOMAIN;
        __classPrivateFieldSet(this, _HttpServiceFactory_httpCore, new HttpClient(finalDomain), "f");
    }
    authenticate(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var nonce = getNonce();
            var signature = sign(params.ApiPublicKey, params.ApiSecretKey, params.UserId, nonce);
            yield __classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f").authenticate({
                ApiKey: params.ApiPublicKey,
                Signature: signature,
                UserId: params.UserId,
                Nonce: nonce
            });
        });
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var nonce = getNonce();
            var signature = sign(params.ApiPublicKey, params.ApiSecretKey, params.UserId, nonce);
            yield __classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f").authenticateUser({
                ApiKey: params.ApiPublicKey,
                Signature: signature,
                UserId: params.UserId,
                Nonce: nonce
            });
        });
    }
    newAccountService() {
        return new AccountService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newAuthService() {
        return new AuthService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newFeeService() {
        return new FeeService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newInstrumentService() {
        return new InstrumentService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newProductService() {
        return new ProductService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newReportService() {
        return new ReportService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newSystemService() {
        return new SystemService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newTradingService() {
        return new TradingService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
    newUserService() {
        return new UserService(__classPrivateFieldGet(this, _HttpServiceFactory_httpCore, "f"));
    }
}
_HttpServiceFactory_httpCore = new WeakMap();
