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
var _TradingService_serviceCore;
import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
import { OrderTypeInt } from "../models/common/orderType.js";
import { completeParams } from "../utils/completeParams.js";
import { completeParamsArray } from "../utils/completeParamsArray.js";
import { parseIndexTrade } from "../utils/parseIndexTrade.js";
export class TradingService {
    constructor(serviceCore) {
        _TradingService_serviceCore.set(this, void 0);
        this.OMS_ID = 1;
        __classPrivateFieldSet(this, _TradingService_serviceCore, serviceCore, "f");
    }
    sendOrderList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.SEND_ORDER_LIST, RequestType.POST, paramsWithOMSId);
        });
    }
    sendCancelList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.SEND_CANCEL_LIST, RequestType.POST, paramsWithOMSId);
        });
    }
    sendCancelReplaceList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.SEND_CANCEL_REPLACE_LIST, RequestType.POST, paramsWithOMSId);
        });
    }
    modifyOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.OrderId ||
                !request.InstrumentId ||
                !request.Quantity ||
                !request.AccountId) {
                throw new Error("All fields are required for modifying an order.");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.MODIFY_ORDER, RequestType.POST, paramsWithOMSId);
        });
    }
    cancelAllOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.CANCEL_ALL_ORDERS, RequestType.POST, paramsWithOMSId);
        });
    }
    getOrderStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.AccountId && !params.OrderId) {
                throw new Error("Either AccountId or OrderId is required.");
            }
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            const response = yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ORDER_STATUS, RequestType.POST, paramsWithOMSId);
            return response;
        });
    }
    getOrdersHistory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ORDERS_HISTORY, RequestType.POST, paramsWithOMSId));
        });
    }
    getTradesHistory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_TRADES_HISTORY, RequestType.POST, paramsWithOMSId));
        });
    }
    getOrderHistoryByOrderId(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ORDER_HISTORY_BY_ORDER_ID, RequestType.POST, paramsWithOMSId));
        });
    }
    getTickerHistory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_TICKER_HISTORY, RequestType.POST, paramsWithOMSId));
            return response.map((item) => ({
                EndDateTime: item[0], // Fecha/hora de cierre en POSIX
                High: item[1], // Precio máximo
                Low: item[2], // Precio mínimo
                Open: item[3], // Precio de apertura
                Close: item[4], // Precio de cierre
                Volume: item[5], // Volumen total
                Bid: item[6], // Mejor precio de compra
                Ask: item[7], // Mejor precio de venta
                InstrumentId: item[8], // ID del instrumento
                BeginDateTime: item[9], // Fecha/hora de inicio en POSIX
            }));
        });
    }
    getLastTrades(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.InstrumentId)
                throw new Error("InstrumentId is required for getting last trades.");
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_LAST_TRADES, RequestType.POST, paramsWithOMSId));
            return response.map((item) => parseIndexTrade(item));
        });
    }
    getLevel1Summary(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_LEVEL1_SUMMARY, RequestType.POST, paramsWithOMSId));
            return response.map((data) => JSON.parse(data));
        });
    }
    getLevel1SummaryMin(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_LEVEL1_SUMMARY_MIN, RequestType.POST, paramsWithOMSId));
            return response.map((data) => ({
                InstrumentId: data[0],
                InstrumentSymbol: data[1].toString(),
                LastTradedPx: data[2],
                Rolling24HrPxChange: data[3],
                Rolling24HrPxChangePercent: data[4],
                Rolling24HrVolume: data[5],
            }));
        });
    }
    getOpenTradeReports(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.AccountId) {
                throw new Error("AccountId is required for retrieving open trade reports.");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_OPEN_TRADE_REPORTS, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getOrders(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.AccountId) {
                throw new Error("AccountId is required for retrieving orders.");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ORDERS, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getOrderHistory(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.AccountId) {
                throw new Error("AccountId is required for retrieving order history.");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ORDER_HISTORY, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    sendOrder(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (request.InstrumentId == null ||
                request.AccountId == null ||
                request.TimeInForce == null ||
                request.Side == null ||
                request.OrderType == null) {
                throw new Error("InstrumentId, AccountId, TimeInForce, Side, and OrderType are required");
            }
            if (request.OrderType === OrderTypeInt.Limit && request.LimitPrice == null) {
                throw new Error("LimitPrice is required for Limit Orders");
            }
            if (request.UseDisplayQuantity &&
                (request.DisplayQuantity == null || request.DisplayQuantity <= 0)) {
                throw new Error("DisplayQuantity must be greater than 0 when UseDisplayQuantity is true");
            }
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            const response = yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.SEND_ORDER, RequestType.POST, paramsWithOMSId);
            return response;
        });
    }
    cancelReplaceOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.CANCEL_REPLACE_ORDER, RequestType.POST, paramsWithOMSId));
        });
    }
    cancelOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.CANCEL_ORDER, RequestType.POST, paramsWithOMSId);
        });
    }
    getOpenOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.AccountId) {
                throw new Error("getOpenOrders requires AccountId.");
            }
            const paramsWithOMSId = completeParams(params, this.OMS_ID);
            const response = yield this["#serviceCore"].request(Endpoint.GET_OPEN_ORDERS, RequestType.POST, paramsWithOMSId);
            return response;
        });
    }
    getAccountTrades(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ACCOUNT_TRADES, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getSummary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.SUMMARY, RequestType.POST));
            return response;
        });
    }
    getTicker() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.TICKER, RequestType.POST));
            return response;
        });
    }
    getOrderBook(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.Market_Pair) {
                throw new Error("Market_Pair is required.");
            }
            const response = yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.ORDER_BOOK, RequestType.POST, request);
            return response;
        });
    }
    getTrades(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.TRADES, RequestType.POST, params));
            return response;
        });
    }
    getL2Snapshot(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.InstrumentId)
                throw new Error("InstrumentId is required for retrieving Level 2 snapshot.");
            if (request.Depth <= 0)
                throw new Error("Depth must be greater than 0.");
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_L2_SNAPSHOT, RequestType.POST, paramsWithOMSId));
            return response.map((snapshot) => ({
                MDUpdateID: snapshot[0],
                NumberOfUniqueAccounts: snapshot[1],
                ActionDateTime: snapshot[2],
                ActionType: snapshot[3],
                LastTradePrice: snapshot[4],
                NumberOfOrders: snapshot[5],
                Price: snapshot[6],
                ProductPairCode: snapshot[7],
                Quantity: snapshot[8],
                Side: snapshot[9],
            }));
        });
    }
    getLevel1(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate required fields
            if (!request.InstrumentId)
                throw new Error("InstrumentId is required for retrieving Level 1 snapshot.");
            const paramsWithOMSId = completeParams(request, this.OMS_ID);
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_LEVEL1, RequestType.POST, paramsWithOMSId));
            return response;
        });
    }
    getEnums() {
        return __awaiter(this, void 0, void 0, function* () {
            // Make the HTTP request
            const response = (yield __classPrivateFieldGet(this, _TradingService_serviceCore, "f").request(Endpoint.GET_ENUMS, RequestType.POST));
            return response;
        });
    }
}
_TradingService_serviceCore = new WeakMap();
