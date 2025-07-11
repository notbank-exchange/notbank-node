import { WebSocketEndpoint } from "../constants/endpoints";
import { ServiceConnection } from "../core/serviceClient";
import { SubscriptionIdentifier } from "../core/websocket/SubscriptionIdentifier";
import {
  CancelOrderRejectEvent,
  DepositEvent
} from "../models/enums/accountEvent";
import { TradeSummary } from "../models/enums/indexTrade";
import { Level2Ticker } from "../models/enums/level2Item";
import { TickerFeed } from "../models/enums/ticker";
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
import { parseTradeSummary } from "../utils/parseIndexTrade";
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

  /**
   * https://apidoc.notbank.exchange/#subscribelevel1
   */
  subscribeLevel1(
    request: SubscribeLevel1Request,
    snapshotHandler: (ticker: Level1Ticker) => void,
    updateHandler: (ticker: Level1Ticker) => void
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
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

  /**
   * https://apidoc.notbank.exchange/#unsubscribelevel1
   */
  async unsubscribeLevel1(request: UnsubscribeLevel1Request): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    await this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_LEVEL1,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_LEVEL1, WebSocketEndpoint.UNSUBSCRIBE_LEVEL1]
    );
  }

  /**
   * https://apidoc.notbank.exchange/#subscribelevel2
   */
  subscribeLevel2(
    request: SubscribeLevel2Request,
    snapshotHandler: (ticker: Level2Ticker) => void,
    updateHandler: (ticker: Level2Ticker) => void
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
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
   * https://apidoc.notbank.exchange/#unsubscribelevel2
   */
  unsubscribeLevel2(request: UnsubscribeLevel2Request): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.unsubscribe(
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
   * https://apidoc.notbank.exchange/#subscribetrades
   */
  subscribeTrades(
    request: SubscribeTradesRequest,
    subcriptionHandler: (trade: TradeSummary) => void
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
      WebSocketEndpoint.SUBSCRIBE_TRADES,
      request.InstrumentId,
      null,
      requestWithOMSId,
      [
        newHandler<{ [key: number]: number }>(
          WebSocketEndpoint.SUBSCRIBE_TRADES,
          mapTrade => subcriptionHandler(parseTradeSummary(mapTrade))
        )
      ]
    );
  }

  /**
   * https://apidoc.notbank.exchange/#unsubscribetrades
   */
  unsubscribeTrades(request: UnsubscribeTradesRequest): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_TRADES,
      request.InstrumentId,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_TRADES]
    );
  }

  /**
   * https://apidoc.notbank.exchange/#subscribeticker
   */
  subscribeTicker(
    request: SubscribeTickerRequest,
    snapshotHandler: (tickers: TickerFeed[]) => void,
    updateHandler: (tickers: TickerFeed[]) => void
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
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
   * https://apidoc.notbank.exchange/#unsubscribeticker
   */
  unsubscribeTicker(request: UnsubscribeTickerRequest): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_TICKER,
      request.InstrumentId || null,
      null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_TICKER]
    );
  }

  /**
   * https://apidoc.notbank.exchange/#subscribeaccountevents
   */
  subscribeAccountEvents(
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
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
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
   * https://apidoc.notbank.exchange/#unsubscribeaccountevents
   */
  async unsubscribeAccountEvents(
    request: UnsubscribeAccountEventsRequest
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.unsubscribe(
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

  /**
   * https://apidoc.notbank.exchange/#subscribeorderstateevents
   */
  subscribeOrderStateEvents(
    request: SubscribeOrderStateEventsRequest,
    subscriptionHandler: (event: Order) => void
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.subscribe(
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
   * https://apidoc.notbank.exchange/#unsubscribeorderstateevents
   */
  unsubscribeOrderStateEvents(
    request: UnsubscribeOrderStateEventsRequest
  ): Promise<void> {
    const requestWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.unsubscribe(
      WebSocketEndpoint.UNSUBSCRIBE_ORDER_STATE_EVENTS,
      request.AccountId,
      request.InstrumentId || null,
      requestWithOMSId,
      [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]
    );
  }
}
