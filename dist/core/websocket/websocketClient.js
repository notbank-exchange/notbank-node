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
var _WebsocketClient_instances, _WebsocketClient_domain, _WebsocketClient_callbackManager, _WebsocketClient_websocket, _WebsocketClient_peekMessageIn, _WebsocketClient_peekMessageOut, _WebsocketClient_getSubscriptionCallbackId, _WebsocketClient_handleMessage, _WebsocketClient_request, _WebsocketClient_handleRequestResponse, _WebsocketClient_requestToCallback;
import WebSocket from "universal-websocket-client";
import { Endpoint } from "../../constants/endpoints.js";
import { MessageType } from "./messageFrame.js";
import { RequestType } from "../serviceClient.js";
import { StandardError } from "../../models/index.js";
import { CallbackManager } from "./callbackManager.js";
import ErrorCode from "../../constants/errorCode.js";
import { SubscriptionIdentifier } from "./SubscriptionIdentifier.js";
const emptyFn = (o) => { };
export class WebsocketClient {
    constructor(params) {
        _WebsocketClient_instances.add(this);
        _WebsocketClient_domain.set(this, void 0);
        _WebsocketClient_callbackManager.set(this, void 0);
        _WebsocketClient_websocket.set(this, void 0);
        _WebsocketClient_peekMessageIn.set(this, void 0);
        _WebsocketClient_peekMessageOut.set(this, void 0);
        __classPrivateFieldSet(this, _WebsocketClient_domain, params.domain, "f");
        __classPrivateFieldSet(this, _WebsocketClient_callbackManager, new CallbackManager(), "f");
        __classPrivateFieldSet(this, _WebsocketClient_peekMessageIn, params.peekMessageIn || (_ => { }), "f");
        __classPrivateFieldSet(this, _WebsocketClient_peekMessageOut, params.peekMessageOut || (_ => { }), "f");
    }
    // TODO: maybe use better names than hook: websockethooks
    connect() {
        return __awaiter(this, arguments, void 0, function* (hooks = {}) {
            __classPrivateFieldSet(this, _WebsocketClient_websocket, new WebSocket("wss://" + __classPrivateFieldGet(this, _WebsocketClient_domain, "f") + "/wsgateway"), "f");
            __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").onopen = event => { var _a; return (_a = hooks.onOpen) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").onclose = event => { var _a; return (_a = hooks.onClose) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").onerror = event => { var _a; return (_a = hooks.onError) === null || _a === void 0 ? void 0 : _a.call(hooks, event); };
            __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").addEventListener("message", event => {
                // TODO: handle conversion exception
                const messageFrame = JSON.parse(event.data);
                __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_handleMessage).call(this, messageFrame);
            });
            __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").addEventListener("message", event => { var _a; return (_a = hooks.onMessage) === null || _a === void 0 ? void 0 : _a.call(hooks, event); });
            return new Promise((resolve, _) => __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").addEventListener("open", _ => resolve()));
        });
    }
    close() {
        __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").close();
    }
    get readyState() {
        return __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").readyState;
    }
    request(endpoint, requestType, message) {
        return __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_request).call(this, endpoint, message, MessageType.REQUEST);
    }
    subscribe(endpoint, firstIdentifier, secondIdentifier, message, subscriptionCallbacks) {
        return __awaiter(this, void 0, void 0, function* () {
            subscriptionCallbacks.map(handler => __classPrivateFieldGet(this, _WebsocketClient_callbackManager, "f").addSubscriptionCallback(SubscriptionIdentifier.get(handler.eventName, firstIdentifier, secondIdentifier), handler.eventHandler));
            return __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    unsubscribe(endpoint, firstIdentifier, secondIdentifier, message, callbackIds) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _WebsocketClient_callbackManager, "f").removeSubscriptionCallback(callbackIds.map(callbackId => SubscriptionIdentifier.get(callbackId, firstIdentifier, secondIdentifier)));
            return yield __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_request).call(this, endpoint, message, MessageType.REQUEST);
        });
    }
    closeConnection() {
        __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").socket.close();
    }
    authenticateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request(Endpoint.AUTHENTICATE_USER, RequestType.NONE, params);
        });
    }
}
_WebsocketClient_domain = new WeakMap(), _WebsocketClient_callbackManager = new WeakMap(), _WebsocketClient_websocket = new WeakMap(), _WebsocketClient_peekMessageIn = new WeakMap(), _WebsocketClient_peekMessageOut = new WeakMap(), _WebsocketClient_instances = new WeakSet(), _WebsocketClient_getSubscriptionCallbackId = function _WebsocketClient_getSubscriptionCallbackId(message) {
    return SubscriptionIdentifier.getFromMessageFrame(message);
}, _WebsocketClient_handleMessage = function _WebsocketClient_handleMessage(message) {
    __classPrivateFieldGet(this, _WebsocketClient_peekMessageIn, "f").call(this, message);
    const callback = __classPrivateFieldGet(this, _WebsocketClient_callbackManager, "f").popCallback(message.i);
    if (callback != null) {
        callback(message);
        if (isErrorMessage(message)) {
            return;
        }
    }
    const callbackId = __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_getSubscriptionCallbackId).call(this, message);
    const subscriptionCallback = __classPrivateFieldGet(this, _WebsocketClient_callbackManager, "f").getSubscriptionCallback(callbackId);
    if (subscriptionCallback != null) {
        subscriptionCallback(message);
        return;
    }
}, _WebsocketClient_request = function _WebsocketClient_request(endpoint, message, messageType = MessageType.REQUEST) {
    return new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_requestToCallback).call(this, endpoint, JSON.stringify(message) || "{}", messageType, __classPrivateFieldGet(this, _WebsocketClient_instances, "m", _WebsocketClient_handleRequestResponse).call(this, reject, resolve));
    });
}, _WebsocketClient_handleRequestResponse = function _WebsocketClient_handleRequestResponse(reject, resolve) {
    return (response) => {
        try {
            var payload = JSON.parse(response.o);
        }
        catch (e) {
            reject(newStandardErrorFromString(response.o));
            return;
        }
        if (response.m === MessageType.ERROR) {
            reject(new StandardError(payload));
            return;
        }
        var standardResponse = payload;
        if ((standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.result) === false &&
            (standardResponse === null || standardResponse === void 0 ? void 0 : standardResponse.errormsg) != null) {
            reject(new StandardError(payload));
            return;
        }
        resolve(payload);
    };
}, _WebsocketClient_requestToCallback = function _WebsocketClient_requestToCallback(endpoint, message, messageType, callback = emptyFn) {
    const sequenceNumber = __classPrivateFieldGet(this, _WebsocketClient_callbackManager, "f").putCallback(callback);
    const frame = {
        m: messageType,
        i: sequenceNumber,
        n: endpoint,
        o: message
    };
    __classPrivateFieldGet(this, _WebsocketClient_peekMessageOut, "f").call(this, frame);
    __classPrivateFieldGet(this, _WebsocketClient_websocket, "f").send(JSON.stringify(frame));
};
function newStandardErrorFromString(errorStr) {
    return new StandardError({
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
