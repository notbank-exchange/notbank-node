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
var _SubscriptionService_serviceCore;
import { WebSocketEndpoint } from "../constants/endpoints.js";
import { SubscriptionIdentifier } from "../core/websocket/SubscriptionIdentifier.js";
import { completeParams } from "../utils/completeParams.js";
import { parseIndexTrade } from "../utils/parseIndexTrade.js";
import { newHandler, newMaybeHandler } from "../utils/subscriptionCallbacksHandler.js";
export class SubscriptionService {
    constructor(serviceCore) {
        _SubscriptionService_serviceCore.set(this, void 0);
        this.OMS_ID = 1;
        __classPrivateFieldSet(this, _SubscriptionService_serviceCore, serviceCore, "f");
    }
    subscribeLevel1(request, snapshotHandler, updateHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId && !request.Symbol)
                throw new Error("Either InstrumentId or Symbol must be specified for Level1 subscription.");
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_LEVEL1, request.InstrumentId || null, null, requestWithOMSId, [
                newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL1, snapshotHandler),
                newHandler(WebSocketEndpoint.UPDATE_LEVEL1, updateHandler)
            ]);
        });
    }
    unsubscribeLevel1(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId && !request.Symbol)
                throw new Error("Either InstrumentId or Symbol must be specified for Level1 unsubscription.");
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_LEVEL1, request.InstrumentId || null, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_LEVEL1, WebSocketEndpoint.UNSUBSCRIBE_LEVEL1]);
        });
    }
    subscribeLevel2(request, snapshotHandler, updateHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId && !request.Symbol)
                throw new Error("Either InstrumentId or Symbol must be specified for Level2 subscription.");
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_LEVEL2, request.InstrumentId, null, requestWithOMSId, [
                newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL2, snapshotHandler),
                newHandler(WebSocketEndpoint.UPDATE_LEVEL2, updateHandler)
            ]);
        });
    }
    /**
     * This TypeScript function unsubscribes from Level2 data using WebSocket communication.
     * @param {UnsubscribeLevel2Request} request - The `unsubscribeLevel2` function takes a
     * `UnsubscribeLevel2Request` object as a parameter. This object should contain the following
     * properties:
     * @returns The `unsubscribeLevel2` method is returning a Promise that resolves to a
     * `void` object.
     */
    unsubscribeLevel2(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId && !request.Symbol)
                throw new Error("Either InstrumentId or Symbol must be specified for Level2 unsubscription.");
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_LEVEL2, request.InstrumentId || null, null, requestWithOMSId, [
                SubscriptionIdentifier.get(WebSocketEndpoint.SUBSCRIBE_LEVEL2, request.InstrumentId)
            ]);
        });
    }
    /**
     * Suscribe a eventos de trades para un instrumento específico.
     * @param request Parámetros de la suscripción.
     * @param eventHandlers Manejadores de eventos para procesar los trades.
     */
    subscribeTrades(request, subcriptionHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId) {
                throw new Error("InstrumentId is required for subscribing to trades.");
            }
            if (!request.IncludeLastCount || request.IncludeLastCount < 0) {
                throw new Error("IncludeLastCount must be a non-negative number.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_TRADES, request.InstrumentId, null, requestWithOMSId, [
                newHandler(WebSocketEndpoint.SUBSCRIBE_TRADES, mapTrade => subcriptionHandler(parseIndexTrade(mapTrade)))
            ]);
        });
    }
    /**
     * Desuscribe de eventos de trades para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTrades(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId) {
                throw new Error("InstrumentId is required for unsubscribing from trades.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_TRADES, request.InstrumentId, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_TRADES]);
        });
    }
    subscribeTicker(request, snapshotHandler, updateHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId) {
                throw new Error("InstrumentId is required for subscribing from ticker.");
            }
            if (!request.Interval) {
                throw new Error("Interval is required for subscribing from ticker.");
            }
            if (!request.IncludeLastCount) {
                throw new Error("IncludeLastCount is required for subscribing from ticker.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_TICKER, request.InstrumentId || null, null, requestWithOMSId, [
                newHandler(WebSocketEndpoint.SUBSCRIBE_TICKER, snapshotHandler),
                newHandler(WebSocketEndpoint.UPDATE_TICKER + "_" + request.InstrumentId, updateHandler)
            ]);
        });
    }
    /**
     * Desuscribe del feed de datos de mercado de un ticker específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTicker(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.InstrumentId) {
                throw new Error("InstrumentId is required for unsubscribing from ticker.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_TICKER, request.InstrumentId || null, null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_TICKER]);
        });
    }
    subscribeAccountEvents(request, eventHandlers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.AccountId)
                throw new Error("AccountId is required for subscribing to account events.");
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_ACCOUNT_EVENTS, request.AccountId, null, requestWithOMSId, [
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE, eventHandlers.withdrawTicketUpdateEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE, eventHandlers.orderTradeEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE, eventHandlers.orderStateEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE, eventHandlers.depositTicketUpdateEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION, eventHandlers.accountPositionEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE, eventHandlers.accountInfoUpdateEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT, eventHandlers.cancelOrderRejectEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT, eventHandlers.depositEventHandler || null),
                newMaybeHandler(WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION, eventHandlers.transactionEventHandler || null)
            ].filter(handler => handler != null));
        });
    }
    /**
     * Desuscribe de eventos de cuenta para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeAccountEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.AccountId) {
                throw new Error("AccountId is required for unsubscribing from account events.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_ACCOUNT_EVENTS, request.AccountId, null, requestWithOMSId, [
                WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE,
                WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE,
                WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION,
                WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE,
                WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT,
                WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT,
                WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION
            ]);
        });
    }
    subscribeOrderStateEvents(request, subscriptionHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.AccountId) {
                throw new Error("AccountId is required for subscribing to order state events.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            return yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").subscribe(WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS, request.AccountId, request.InstrumentId || null, requestWithOMSId, [
                newHandler(WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE, subscriptionHandler)
            ]);
        });
    }
    /**
     * Desuscribe de eventos de estado de órdenes para una cuenta específica.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeOrderStateEvents(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!request.AccountId) {
                throw new Error("AccountId is required for unsubscribing from order state events.");
            }
            const requestWithOMSId = completeParams(request, this.OMS_ID);
            yield __classPrivateFieldGet(this, _SubscriptionService_serviceCore, "f").unsubscribe(WebSocketEndpoint.UNSUBSCRIBE_ORDER_STATE_EVENTS, request.AccountId, request.InstrumentId || null, requestWithOMSId, [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]);
        });
    }
}
_SubscriptionService_serviceCore = new WeakMap();
