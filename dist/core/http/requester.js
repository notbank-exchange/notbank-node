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
var _Requester_aptoken;
import { RequestType } from "../serviceClient.js";
export class Requester {
    constructor() {
        _Requester_aptoken.set(this, void 0);
        __classPrivateFieldSet(this, _Requester_aptoken, null, "f");
    }
    updateSessionToken(aptoken) {
        __classPrivateFieldSet(this, _Requester_aptoken, aptoken, "f");
    }
    request(config) {
        var url = config.requestType === RequestType.POST
            ? config.url
            : this.getUrlWithSearchParams(config.url, config.params);
        var body = config.requestType === RequestType.POST
            ? config.params :
            null;
        var requestData = {
            method: config.requestType,
            headers: this.getHeaders(config.extraHeaders)
        };
        if (body) {
            requestData.body = JSON.stringify(body);
        }
        return fetch(url, requestData);
    }
    getHeaders(extraHeaders) {
        var headers = {
            "Content-type": "application/json",
            charset: "UTF-8"
        };
        if (__classPrivateFieldGet(this, _Requester_aptoken, "f")) {
            headers["aptoken"] = __classPrivateFieldGet(this, _Requester_aptoken, "f");
        }
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
    getUrlWithSearchParams(endpoint, params) {
        return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
    }
}
_Requester_aptoken = new WeakMap();
