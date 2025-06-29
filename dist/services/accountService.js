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
var _AccountService_serviceCore;
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { completeParams } from "../utils/completeParams.js";
export class AccountService {
    constructor(serviceCore) {
        _AccountService_serviceCore.set(this, void 0);
        this.OMS_ID = 1;
        __classPrivateFieldSet(this, _AccountService_serviceCore, serviceCore, "f");
    }
    getAccountTransactions(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.AccountId && typeof request.AccountId !== "number") {
                throw new Error("AccountId must be a number.");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            const response = (yield __classPrivateFieldGet(this, _AccountService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_TRANSACTIONS, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getAccountPositions(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            // Llamada al endpoint
            const response = (yield __classPrivateFieldGet(this, _AccountService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_POSITIONS, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getAccountInstrumentStatistics(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.AccountId) {
                throw new Error("AccountId is required field.");
            }
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _AccountService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_INSTRUMENT_STATISTICS, RequestType.POST, paramsWithOMSId));
        });
    }
    getAccountSettlementPositions(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.AccountId) {
                throw new Error("OMSId and AccountId are required fields.");
            }
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _AccountService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_SETTLEMENT_POSITIONS, RequestType.POST, paramsWithOMSId));
        });
    }
    getAccountInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            // Llamamos al método request con POST y casteamos la respuesta
            return (yield __classPrivateFieldGet(this, _AccountService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_INFO, RequestType.POST, paramsWithOMSId));
        });
    }
}
_AccountService_serviceCore = new WeakMap();
