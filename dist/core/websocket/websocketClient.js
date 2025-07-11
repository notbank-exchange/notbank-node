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
var _WebsocketConnection_instances, _WebsocketConnection_domain, _WebsocketConnection_callbackManager, _WebsocketConnection_websocket, _WebsocketConnection_peekMessageIn, _WebsocketConnection_peekMessageOut, _WebsocketConnection_getSubscriptionCallbackId, _WebsocketConnection_handleMessage, _WebsocketConnection_request, _WebsocketConnection_handleRequestResponse, _WebsocketConnection_requestToCallback;
import WebSocket from "universal-websocket-client";
import { Endpoint } from "../../constants/endpoints.js";
import { MessageType } from "./messageFrame.js";
import { RequestType } from "../serviceClient.js";
import { NotbankError } from "../../models/index.js";
import { CallbackManager } from "./callbackManager.js";
import ErrorCode from "../../constants/errorCode.js";
import { SubscriptionIdentifier } from "./SubscriptionIdentifier.js";
const emptyFn = (o) => { };
export class WebsocketConnection {
    constructor(params) {
        _WebsocketConnection_instances.add(this);
        _WebsocketConnection_domain.set(this, void 0);
        _WebsocketConnection_callbackManager.set(this, void 0);
        _WebsocketConnection_websocket.set(this, void 0);
        _WebsocketConnection_peekMessageIn.set(this, void 0);
        _WebsocketConnection_peekMessageOut.set(this, void 0);
        __classPrivateFieldSet(this, _WebsocketConnection_domain, params.domain, "f");
        __classPrivateFieldSet(this, _WebsocketConnection_callbackManager, new CallbackManager(), "f");
        __classPrivateFieldSet(this, _WebsocketConnection_peekMessageIn, params.peekMessageIn || (_ => { }), "f");
        __classPrivateFieldSet(this, _WebsocketConnection_peekMessageOut, params.peekMessageOut || (_ => { }), "f");
    }
    nbRequest(endpoint, requestType, message) {
        throw new Error("websocket client does not support nb methods.");
    }
    connect() {
        return __awaiter(this, arguments, void 0, function* (hooks = {}) {
            __classPrivateFieldSet(this, _WebsocketConnection_websocket, new WebSocket("wss://" + __classPrivateFieldGet(this, _WebsocketConnection_domain, "f") + "/wsgateway"), "f");
            __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").onopen = event => { var _a; return (_a = hooks.onOpen) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").onclose = event => { var _a; return (_a = hooks.onClose) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").onerror = event => { var _a; return (_a = hooks.onError) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").addEventListener("message", event => {
                const messageFrame = JSON.parse(event.data);
                __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_handleMessage).call(this, messageFrame);
            });
            __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").addEventListener("message", event => { var _a; return (_a = hooks.onMessage) === null || _a === void 0 ? void 0 : _a.call(hooks, event); });
            return new Promise((resolve, _) => __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").addEventListener("open", _ => resolve()));
        });
    }
    close() {
        __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").close();
    }
    get readyState() {
        return __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").readyState;
    }
    apRequest(endpoint, requestType, message) {
        return __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            subscriptionCallbacks.map(handler => __classPrivateFieldGet(this, _WebsocketConnection_callbackManager, "f").addSubscriptionCallback(SubscriptionIdentifier.get(handler.eventName, firstIdentifier, secondIdentifier), handler.eventHandler));
            return __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _WebsocketConnection_callbackManager, "f").removeSubscriptionCallback(callbackIds.map(callbackId => SubscriptionIdentifier.get(callbackId, firstIdentifier, secondIdentifier)));
            return yield __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    closeConnection() {
        __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").socket.close();
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apRequest(Endpoint.AUTHENTICATE_USER, RequestType.NONE, params);
        });
    }
}
_WebsocketConnection_domain = new WeakMap(), _WebsocketConnection_callbackManager = new WeakMap(), _WebsocketConnection_websocket = new WeakMap(), _WebsocketConnection_peekMessageIn = new WeakMap(), _WebsocketConnection_peekMessageOut = new WeakMap(), _WebsocketConnection_instances = new WeakSet(), _WebsocketConnection_getSubscriptionCallbackId = function _WebsocketConnection_getSubscriptionCallbackId(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
}, _WebsocketConnection_handleMessage = function _WebsocketConnection_handleMessage(message) {
    __classPrivateFieldGet(this, _WebsocketConnection_peekMessageIn, "f").call(this, message);
    const callback = __classPrivateFieldGet(this, _WebsocketConnection_callbackManager, "f").popCallback(message.i);
    if (callback != null) {
        callback(message);
        if (isErrorMessage(message)) {
            return;
        }
    }
    const callbackId = __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_getSubscriptionCallbackId).call(this, message);
    const subscriptionCallback = __classPrivateFieldGet(this, _WebsocketConnection_callbackManager, "f").getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
        subscriptionCallback(message);
        return;
    }
}, _WebsocketConnection_request = function _WebsocketConnection_request(endpoint, message, messageType = MessageType.REQUEST) {
    return new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_requestToCallback).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __classPrivateFieldGet(this, _WebsocketConnection_instances, "m", _WebsocketConnection_handleRequestResponse).call(this, reject, resolve));
    });
}, _WebsocketConnection_handleRequestResponse = function _WebsocketConnection_handleRequestResponse(reject, resolve) {
    return (response) => {
        try {
            var payload = JSON.parse(response.o);
        }
        catch (e) {
            reject(newStandardErrorFromString(response.o));
            return;
        }
        if (response.m === MessageType.ERROR) {
            reject(NotbankError.Factory.createFromApResponse(payload));
            return;
        }
        var standardResponse = payload;
        if ((standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.result) === false &&
            (standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.errormsg) != null) {
            reject(NotbankError.Factory.createFromApResponse(payload));
            return;
        }
        resolve(payload);
    };
}, _WebsocketConnection_requestToCallback = function _WebsocketConnection_requestToCallback(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = __classPrivateFieldGet(this, _WebsocketConnection_callbackManager, "f").putCallback(callback);
    const frame = {
        m: messageType,
        i: sequenceNumber,
        n: endpoint,
        o: message
    };
    __classPrivateFieldGet(this, _WebsocketConnection_peekMessageOut, "f").call(this, frame);
    __classPrivateFieldGet(this, _WebsocketConnection_websocket, "f").send(JSON.stringify(frame));
};
function newStandardErrorFromString(errorStr) {
    return NotbankError.Factory.createFromApResponse({
        result: false,
        errormsg: errorStr,
        errorcode: ErrorCode.UNDEFINED,
        statusCode: -1,
        detail: ""
    });
}
function isErrorMessage(message) {
    let isErrorType = message.m === MessageType.ERROR;
    if (isErrorType) {
        return true;
    }
    try {
        let standardError = message.o;
        return standardError.result == false;
    }
    catch (e) {
        return false;
    }
}
