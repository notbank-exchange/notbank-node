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
var _FormDataRequester_aptoken;
import fetch from 'node-fetch';
import { RequestType } from "../serviceClient.js";
export class FormDataRequester {
    constructor() {
        _FormDataRequester_aptoken.set(this, void 0);
        __classPrivateFieldSet(this, _FormDataRequester_aptoken, null, "f");
    }
    updateSessionToken(aptoken) {
        __classPrivateFieldSet(this, _FormDataRequester_aptoken, aptoken, "f");
    }
    post(config) {
        const url = config.url;
        const requestInit = this.getRequestInit(config);
        return fetch(url, requestInit);
    }
    getRequestInit(request) {
        var requestInit = {
            method: RequestType.POST,
            headers: this.getHeaders(request.extraHeaders)
        };
        const formData = new FormData();
        request.files.map(([fileName, file]) => formData.append(fileName, file));
        Object.keys(request.params).map(key => {
            formData.append(key, request.params[key]);
        });
        requestInit["body"] = formData;
        return requestInit;
    }
    getHeaders(extraHeaders) {
        var headers = {
            'Accept': '*/*',
            charset: "UTF-8"
        };
        if (__classPrivateFieldGet(this, _FormDataRequester_aptoken, "f")) {
            headers["aptoken"] = __classPrivateFieldGet(this, _FormDataRequester_aptoken, "f");
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
_FormDataRequester_aptoken = new WeakMap();
