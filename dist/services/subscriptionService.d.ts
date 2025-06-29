import { ServiceClient } from "../core/serviceClient.js";
import { CancelOrderRejectEvent, DepositEvent } from "../models/enums/accountEvent.js";
import { IndexTrade } from "../models/enums/indexTrade.js";
import { Level2Ticker } from "../models/enums/level2Item.js";
import { Ticker } from "../models/enums/ticker.js";
import { SubscribeAccountEventsRequest } from "../models/request/subscribeAccountEvents.js";
import { SubscribeLevel1Request } from "../models/request/subscribeLevel1.js";
import { SubscribeLevel2Request } from "../models/request/subscribeLevel2.js";
import { SubscribeOrderStateEventsRequest } from "../models/request/subscribeOrderStateEvents.js";
import { SubscribeTickerRequest } from "../models/request/subscribeTicker.js";
import { SubscribeTradesRequest } from "../models/request/subscribeTrades.js";
import { UnsubscribeAccountEventsRequest } from "../models/request/unsubscribeAccountEvents.js";
import { UnsubscribeLevel1Request } from "../models/request/unSubscribeLevel1.js";
import { UnsubscribeLevel2Request } from "../models/request/unSubscribeLevel2.js";
import { UnsubscribeOrderStateEventsRequest } from "../models/request/unsubscribeOrderStateEvents.js";
import { UnsubscribeTickerRequest } from "../models/request/unsubscribeTicker.js";
import { UnsubscribeTradesRequest } from "../models/request/unsubscribeTrades.js";
import { AccountInfo } from "../models/response/accountInfo.js";
import { AccountPositions } from "../models/response/accountPositions.js";
import { DepositTicket } from "../models/response/depositTicket.js";
import { Order } from "../models/response/order.js";
import { OrderTrade } from "../models/response/orderTrade.js";
import { Level1Ticker } from "../models/response/subscribeLevel1.js";
import { Transaction } from "../models/response/transaction.js";
import { WithdrawTicket } from "../models/response/withdrawTicket.js";
export declare class SubscriptionService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    subscribeLevel1(request: SubscribeLevel1Request, snapshotHandler: (ticker: Level1Ticker) => void, updateHandler: (ticker: Level1Ticker) => void): Promise<void>;
    unsubscribeLevel1(request: UnsubscribeLevel1Request): Promise<void>;
    subscribeLevel2(request: SubscribeLevel2Request, snapshotHandler: (ticker: Level2Ticker) => void, updateHandler: (ticker: Level2Ticker) => void): Promise<void>;
    /**
     * This TypeScript function unsubscribes from Level2 data using WebSocket communication.
     * @param {UnsubscribeLevel2Request} request - The `unsubscribeLevel2` function takes a
     * `UnsubscribeLevel2Request` object as a parameter. This object should contain the following
     * properties:
     * @returns The `unsubscribeLevel2` method is returning a Promise that resolves to a
     * `void` object.
     */
    unsubscribeLevel2(request: UnsubscribeLevel2Request): Promise<void>;
    /**
     * Suscribe a eventos de trades para un instrumento específico.
     * @param request Parámetros de la suscripción.
     * @param eventHandlers Manejadores de eventos para procesar los trades.
     */
    subscribeTrades(request: SubscribeTradesRequest, subcriptionHandler: (trade: IndexTrade) => void): Promise<void>;
    /**
     * Desuscribe de eventos de trades para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTrades(request: UnsubscribeTradesRequest): Promise<void>;
    subscribeTicker(request: SubscribeTickerRequest, snapshotHandler: (tickers: Ticker[]) => void, updateHandler: (tickers: Ticker[]) => void): Promise<void>;
    /**
     * Desuscribe del feed de datos de mercado de un ticker específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeTicker(request: UnsubscribeTickerRequest): Promise<void>;
    subscribeAccountEvents(request: SubscribeAccountEventsRequest, eventHandlers: {
        withdrawTicketUpdateEventHandler?: (event: WithdrawTicket) => void;
        orderTradeEventHandler?: (event: OrderTrade) => void;
        orderStateEventHandler?: (event: Order) => void;
        depositTicketUpdateEventHandler?: (event: DepositTicket) => void;
        accountPositionEventHandler?: (event: AccountPositions) => void;
        accountInfoUpdateEventHandler?: (event: AccountInfo) => void;
        cancelOrderRejectEventHandler?: (event: CancelOrderRejectEvent) => void;
        depositEventHandler?: (event: DepositEvent) => void;
        transactionEventHandler?: (event: Transaction) => void;
    }): Promise<void>;
    /**
     * Desuscribe de eventos de cuenta para un instrumento específico.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeAccountEvents(request: UnsubscribeAccountEventsRequest): Promise<void>;
    subscribeOrderStateEvents(request: SubscribeOrderStateEventsRequest, subscriptionHandler: (event: Order) => void): Promise<void>;
    /**
     * Desuscribe de eventos de estado de órdenes para una cuenta específica.
     * @param request Parámetros de la desuscripción.
     * @returns Respuesta de la desuscripción.
     */
    unsubscribeOrderStateEvents(request: UnsubscribeOrderStateEventsRequest): Promise<void>;
}
