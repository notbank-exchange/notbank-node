import { WebSocketEndpoint } from "../constants/endpoints";
import { ServiceConnection } from "../core/serviceClient";
import { SubscriptionIdentifier } from "../core/websocket/SubscriptionIdentifier";
import {
  CancelOrderRejectEvent,
  DepositEvent
} from "../models/enums/accountEvent";
import { IndexTrade } from "../models/enums/indexTrade";
import { Level2Ticker } from "../models/enums/level2Item";
import { Ticker } from "../models/enums/ticker";
import { SubscribeAccountEventsRequest } from "../models/request/subscribeAccountEvents";
import { SubscribeLevel1Request } from "../models/request/subscribeLevel1";
import { SubscribeLevel2Request } from "../models/request/subscribeLevel2";
import { SubscribeOrderStateEventsRequest } from "../models/request/subscribeOrderStateEvents";
import { SubscribeTickerRequest } from "../models/request/subscribeTicker";
import { SubscribeTradesRequest } from "../models/request/subscribeTrades";
import { UnsubscribeAccountEventsRequest } from "../models/request/unsubscribeAccountEvents";
import { UnsubscribeLevel1Request } from "../models/request/unSubscribeLevel1";
import { UnsubscribeLevel2Request } from "../models/request/unSubscribeLevel2";
import { UnsubscribeOrderStateEventsRequest } from "../models/request/unsubscribeOrderStateEvents";
import { UnsubscribeTickerRequest } from "../models/request/unsubscribeTicker";
import { UnsubscribeTradesRequest } from "../models/request/unsubscribeTrades";
import { AccountInfo } from "../models/response/accountInfo";
import { AccountPosition } from "../models/response/accountPositions";
import { DepositTicket } from "../models/response/depositTicket";
import { Order } from "../models/response/order";
import { OrderTrade } from "../models/response/orderTrade";
import { Level1Ticker } from "../models/response/subscribeLevel1";
import { Transaction } from "../models/response/transaction";
import { WithdrawTicket } from "../models/response/withdrawTicket";
import { completeParams } from "../utils/completeParams";
import { parseIndexTrade } from "../utils/parseIndexTrade";
import {
  newHandler,
  newMaybeHandler
} from "../utils/subscriptionCallbacksHandler";

export class SubscriptionService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  async subscribeLevel1(
    request: SubscribeLevel1Request,
    snapshotHandler: (ticker: Level1Ticker) => void,
    updateHandler: (ticker: Level1Ticker) => void
  ): Promise<void> {
    if (!request.InstrumentId && !request.Symbol)
      throw new Error(
        "Either InstrumentId or Symbol must be specified for Level1 subscription."
      );
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_LEVEL1,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [
        newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL1, snapshotHandler),
        newHandler(WebSocketEndpoint.UPDATE_LEVEL1, updateHandler)
      ]
    );
  }

  async unsubscribeLevel1(request: UnsubscribeLevel1Request): Promise<void> {
    if (!request.InstrumentId && !request.Symbol)
      throw new Error(
        "Either InstrumentId or Symbol must be specified for Level1 unsubscription."
      );

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_LEVEL1,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_LEVEL1, WebSocketEndpoint.UNSUBSCRIBE_LEVEL1]
    );
  }

  async subscribeLevel2(
    request: SubscribeLevel2Request,
    snapshotHandler: (ticker: Level2Ticker) => void,
    updateHandler: (ticker: Level2Ticker) => void
  ): Promise<void> {
    if (!request.InstrumentId && !request.Symbol)
      throw new Error(
        "Either InstrumentId or Symbol must be specified for Level2 subscription."
      );
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_LEVEL2,
      request.InstrumentId,
      null,
      requestWithOMSId,
      [
        newHandler(WebSocketEndpoint.SUBSCRIBE_LEVEL2, snapshotHandler),
        newHandler(WebSocketEndpoint.UPDATE_LEVEL2, updateHandler)
      ]
    );
  }

  /**
   * This TypeScript function unsubscribes from Level2 data using WebSocket communication.
   * @param {UnsubscribeLevel2Request} request - The `unsubscribeLevel2` function takes a
   * `UnsubscribeLevel2Request` object as a parameter. This object should contain the following
   * properties:
   * @returns The `unsubscribeLevel2` method is returning a Promise that resolves to a
   * `void` object.
   */
  async unsubscribeLevel2(request: UnsubscribeLevel2Request): Promise<void> {
    if (!request.InstrumentId && !request.Symbol)
      throw new Error(
        "Either InstrumentId or Symbol must be specified for Level2 unsubscription."
      );

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_LEVEL2,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [
        SubscriptionIdentifier.get(
          WebSocketEndpoint.SUBSCRIBE_LEVEL2,
          request.InstrumentId
        )
      ]
    );
  }

  /**
   * Suscribe a eventos de trades para un instrumento específico.
   * @param request Parámetros de la suscripción.
   * @param eventHandlers Manejadores de eventos para procesar los trades.
   */
  async subscribeTrades(
    request: SubscribeTradesRequest,
    subcriptionHandler: (trade: IndexTrade) => void
  ): Promise<void> {
    if (!request.InstrumentId) {
      throw new Error("InstrumentId is required for subscribing to trades.");
    }
    if (!request.IncludeLastCount || request.IncludeLastCount < 0) {
      throw new Error("IncludeLastCount must be a non-negative number.");
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_TRADES,
      request.InstrumentId,
      null,
      requestWithOMSId,
      [
        newHandler<{ [key: number]: number }>(
          WebSocketEndpoint.SUBSCRIBE_TRADES,
          mapTrade => subcriptionHandler(parseIndexTrade(mapTrade))
        )
      ]
    );
  }

  /**
   * Desuscribe de eventos de trades para un instrumento específico.
   * @param request Parámetros de la desuscripción.
   * @returns Respuesta de la desuscripción.
   */
  async unsubscribeTrades(request: UnsubscribeTradesRequest): Promise<void> {
    if (!request.InstrumentId) {
      throw new Error(
        "InstrumentId is required for unsubscribing from trades."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_TRADES,
      request.InstrumentId,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_TRADES]
    );
  }

  async subscribeTicker(
    request: SubscribeTickerRequest,
    snapshotHandler: (tickers: Ticker[]) => void,
    updateHandler: (tickers: Ticker[]) => void
  ): Promise<void> {
    if (!request.InstrumentId) {
      throw new Error("InstrumentId is required for subscribing from ticker.");
    }
    if (!request.Interval) {
      throw new Error("Interval is required for subscribing from ticker.");
    }
    if (!request.IncludeLastCount) {
      throw new Error(
        "IncludeLastCount is required for subscribing from ticker."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_TICKER,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [
        newHandler(WebSocketEndpoint.SUBSCRIBE_TICKER, snapshotHandler),
        newHandler(
          WebSocketEndpoint.UPDATE_TICKER + "_" + request.InstrumentId,
          updateHandler
        )
      ]
    );
  }

  /**
   * Desuscribe del feed de datos de mercado de un ticker específico.
   * @param request Parámetros de la desuscripción.
   * @returns Respuesta de la desuscripción.
   */
  async unsubscribeTicker(request: UnsubscribeTickerRequest): Promise<void> {
    if (!request.InstrumentId) {
      throw new Error(
        "InstrumentId is required for unsubscribing from ticker."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_TICKER,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_TICKER]
    );
  }

  async subscribeAccountEvents(
    request: SubscribeAccountEventsRequest,
    eventHandlers: {
      withdrawTicketUpdateEventHandler?: (event: WithdrawTicket) => void;
      orderTradeEventHandler?: (event: OrderTrade) => void;
      orderStateEventHandler?: (event: Order) => void;
      depositTicketUpdateEventHandler?: (event: DepositTicket) => void;
      accountPositionEventHandler?: (event: AccountPosition) => void;
      accountInfoUpdateEventHandler?: (event: AccountInfo) => void;
      cancelOrderRejectEventHandler?: (event: CancelOrderRejectEvent) => void;
      depositEventHandler?: (event: DepositEvent) => void;
      transactionEventHandler?: (event: Transaction) => void;
    }
  ): Promise<void> {
    if (!request.AccountId)
      throw new Error(
        "AccountId is required for subscribing to account events."
      );

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_ACCOUNT_EVENTS,
      request.AccountId,
      null,
      requestWithOMSId,
      [
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE,
          eventHandlers.withdrawTicketUpdateEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE,
          eventHandlers.orderTradeEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE,
          eventHandlers.orderStateEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE,
          eventHandlers.depositTicketUpdateEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION,
          eventHandlers.accountPositionEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE,
          eventHandlers.accountInfoUpdateEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT,
          eventHandlers.cancelOrderRejectEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT,
          eventHandlers.depositEventHandler || null
        ),
        newMaybeHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION,
          eventHandlers.transactionEventHandler || null
        )
      ].filter(handler => handler != null)
    );
  }

  /**
   * Desuscribe de eventos de cuenta para un instrumento específico.
   * @param request Parámetros de la desuscripción.
   * @returns Respuesta de la desuscripción.
   */
  async unsubscribeAccountEvents(
    request: UnsubscribeAccountEventsRequest
  ): Promise<void> {
    if (!request.AccountId) {
      throw new Error(
        "AccountId is required for unsubscribing from account events."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_ACCOUNT_EVENTS,
      request.AccountId,
      null,
      requestWithOMSId,
      [
        WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE,
        WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE,
        WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE,
        WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE,
        WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION,
        WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE,
        WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT,
        WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT,
        WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION
      ]
    );
  }

  async subscribeOrderStateEvents(
    request: SubscribeOrderStateEventsRequest,
    subscriptionHandler: (event: Order) => void
  ): Promise<void> {
    if (!request.AccountId) {
      throw new Error(
        "AccountId is required for subscribing to order state events."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    return await this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS,
      request.AccountId,
      request.InstrumentId || null,
      requestWithOMSId,
      [
        newHandler(
          WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE,
          subscriptionHandler
        )
      ]
    );
  }

  /**
   * Desuscribe de eventos de estado de órdenes para una cuenta específica.
   * @param request Parámetros de la desuscripción.
   * @returns Respuesta de la desuscripción.
   */
  async unsubscribeOrderStateEvents(
    request: UnsubscribeOrderStateEventsRequest
  ): Promise<void> {
    if (!request.AccountId) {
      throw new Error(
        "AccountId is required for unsubscribing from order state events."
      );
    }

    const requestWithOMSId = completeParams(request, this.OMS_ID);

    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_ORDER_STATE_EVENTS,
      request.AccountId,
      request.InstrumentId || null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]
    );
  }
}
