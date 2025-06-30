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
var _HttpClient_aptoken, _HttpClient_HOST;
import { Endpoint } from "../../constants/endpoints.js";
import { StandardError } from "../../models/index.js";
import { RequestType } from "../serviceClient.js";
export class HttpClient {
    constructor(domain) {
        _HttpClient_aptoken.set(this, void 0);
        _HttpClient_HOST.set(this, void 0);
        __classPrivateFieldSet(this, _HttpClient_aptoken, null, "f");
        __classPrivateFieldSet(this, _HttpClient_HOST, "https://" + domain + "/ap/", "f");
    }
    request(endpoint, requestType, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestType === RequestType.GET) {
                return this.requestGet(endpoint, { params: params });
            }
            if (requestType === RequestType.POST) {
                return this.requestPost(endpoint, params);
            }
            throw new Error(`Request type not implemented. ${requestType}`);
        });
    }
    requestPost(endpoint, message) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield fetch(this.getUrl(endpoint), {
                method: "POST",
                body: message ? JSON.stringify(message) : null,
                headers: this.getHeaders()
            });
            return this.handleResponse(response);
        });
    }
    requestGet(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, config = {}) {
            var response = yield fetch(this.getUrlWithSearchParams(endpoint, config.params), {
                method: "GET",
                headers: this.getHeaders(config.extraHeaders)
            });
            return yield this.handleResponse(response);
        });
    }
    handleResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (response.status >= 300 || response.status < 200) {
                throw new Error(`http error (${response.status}) not a successfull response. ${response.text()}`);
            }
            var jsonResponse = yield response.json();
            var standardResponse = jsonResponse;
            if ((standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.result) === false &&
                (standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.errorcode) != null) {
                throw new StandardError(standardResponse);
            }
            return jsonResponse;
        });
    }
    getHeaders(extraHeaders) {
        var headers = {
            "Content-type": "application/json",
            charset: "UTF-8"
        };
        if (__classPrivateFieldGet(this, _HttpClient_aptoken, "f") != null) {
            headers["aptoken"] = __classPrivateFieldGet(this, _HttpClient_aptoken, "f");
        }
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
    getUrlWithSearchParams(endpoint, params) {
        if (params) {
            return this.getUrl(endpoint) + "?" + new URLSearchParams(params);
        }
        return this.getUrl(endpoint);
    }
    authenticate(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = (yield this.requestGet(Endpoint.AUTHENTICATE, {
                extraHeaders: params
            }));
            __classPrivateFieldSet(this, _HttpClient_aptoken, response.SessionToken, "f");
        });
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = (yield this.requestGet(Endpoint.AUTHENTICATE_USER, {
                extraHeaders: params
            }));
            __classPrivateFieldSet(this, _HttpClient_aptoken, response.SessionToken, "f");
        });
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
        throw new Error("Method not implemented.");
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callback_ids) {
        throw new Error("Method not implemented.");
    }
    setResponseHandler(responseHandler) {
        throw new Error("Method not implemented.");
    }
    setResponseHandlers(responseHandlers) {
        throw new Error("Method not implemented.");
    }
    getUrl(endpoint) {
        return __classPrivateFieldGet(this, _HttpClient_HOST, "f") + endpoint;
    }
}
_HttpClient_aptoken = new WeakMap(), _HttpClient_HOST = new WeakMap();
