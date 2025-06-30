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
var _UserService_serviceCore;
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class UserService {
    constructor(serviceCore) {
        _UserService_serviceCore.set(this, void 0);
        this.OMS_ID = 1;
        __classPrivateFieldSet(this, _UserService_serviceCore, serviceCore, "f");
    }
    getUserAccounts(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate optional fields
            if (request.UserId && typeof request.UserId !== "number")
                throw new Error("UserId must be a number.");
            const params = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _UserService_serviceCore, "f").request(Endpoint.GET_USER_ACCOUNTS, RequestType.POST, params));
            return response;
        });
    }
    getUserDevices(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate optional fields
            if (request.UserId && typeof request.UserId !== "number")
                throw new Error("UserId must be a number.");
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _UserService_serviceCore, "f").request(Endpoint.GET_USER_DEVICES, RequestType.POST, request));
            return response;
        });
    }
    getUserInfo(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate optional fields
            if (request.UserId && typeof request.UserId !== "number")
                throw new Error("UserId must be a number.");
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _UserService_serviceCore, "f").request(Endpoint.GET_USER_INFO, RequestType.POST, request));
            return response;
        });
    }
    getUserPermissions(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.UserId == null || typeof request.UserId !== "number")
                throw new Error("UserId is required and must be a number.");
            const response = (yield __classPrivateFieldGet(this, _UserService_serviceCore, "f").request(Endpoint.GET_USER_PERMISSIONS, RequestType.POST, request));
            return response;
        });
    }
}
_UserService_serviceCore = new WeakMap();
