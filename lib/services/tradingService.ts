import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { OrderTypeInt } from "../models/common/orderType";
import { IndexTrade } from "../models/enums/indexTrade";
import { CancelAllOrdersRequest } from "../models/request/cancelAllOrders";
import { CancelOrderRequest } from "../models/request/cancelOrder";
import { CancelReplaceOrderRequest } from "../models/request/cancelReplaceOrder";
import { GetAccountTradesRequest } from "../models/request/getAccountTrades";
import { GetL2SnapshotRequest } from "../models/request/getL2Snapshot";
import { GetLastTradesRequest } from "../models/request/getLastTrades";
import { GetLevel1Request } from "../models/request/getLevel1";
import { GetLevel1SummaryRequest } from "../models/request/getLevel1Summary";
import { GetLevel1SummaryMinRequest } from "../models/request/getLevel1SummaryMin";
import { GetOpenOrdersRequest } from "../models/request/getOpenOrders";
import { GetOpenTradeReportsRequest } from "../models/request/getOpenTradeReports";
import { GetOrdersHistoryRequest } from "../models/request/getOrderHistory";
import { GetOrderHistoryByOrderIdRequest } from "../models/request/getOrderHistoryByOrderId";
import { GetOrdersRequest } from "../models/request/getOrders";
import { GetOrderStatusRequest } from "../models/request/getOrderStatus";
import { GetTickerHistoryRequest } from "../models/request/getTickerHistory";
import { GetTradesHistoryRequest } from "../models/request/getTradesHistory";
import { ModifyOrderRequest } from "../models/request/modifyOrder";
import { OrderBookRequest } from "../models/request/orderBook";
import { SendCancelListRequest } from "../models/request/sendCancelList";
import { SendCancelReplaceListRequest } from "../models/request/sendCancelReplaceList";
import { SendOrderRequest } from "../models/request/sendOrder";
import { SendOrderListRequest } from "../models/request/sendOrderList";
import { TradesRequest } from "../models/request/trades";
import { CancelReplaceOrderResponse } from "../models/response/cancelReplaceOrder";
import { GetAccountTradesResponse } from "../models/response/getAccountTrades";
import { GetEnumsResponse } from "../models/response/getEnums";
import { L2Snapshot } from "../models/response/getL2Snapshot";
import { Level1 } from "../models/response/getLevel1";
import { GetLevel1SummaryResponse } from "../models/response/getLevel1Summary";
import { GetLevel1SummaryMinResponse, Level1SummaryMin } from "../models/response/getLevel1SummaryMin";
import { GetOpenOrdersResponse } from "../models/response/getOpenOrders";
import { GetOpenTradeReportsResponse } from "../models/response/getOpenTradeReports";
import { GetOrderHistoryByOrderIdResponse } from "../models/response/getOrderHistoryByOrderId";
import { GetOrderStatusResponse } from "../models/response/getOrderStatus";
import { GetTickerHistoryResponse } from "../models/response/getTickerHistory";
import { Order } from "../models/response/order";
import { OrderBookResponse } from "../models/response/orderBook";
import { OrderTrade } from "../models/response/orderTrade";
import { SendOrderResponse } from "../models/response/sendOrder";
import { SummaryResponse } from "../models/response/summary";
import { TickerResponse } from "../models/response/ticker";
import { TradesResponse } from "../models/response/trades";
import { completeParams } from "../utils/completeParams";
import { completeParamsArray } from "../utils/completeParamsArray";
import { parseIndexTrade } from "../utils/parseIndexTrade";

export class TradingService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  async sendOrderList(params: SendOrderListRequest): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.SEND_ORDER_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  async sendCancelList(params: SendCancelListRequest): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.SEND_CANCEL_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  async sendCancelReplaceList(
    params: SendCancelReplaceListRequest,
  ): Promise<void> {
    const paramsWithOMSId = completeParamsArray(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.SEND_CANCEL_REPLACE_LIST,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  async modifyOrder(request: ModifyOrderRequest): Promise<void> {
    if (
      !request.OrderId ||
      !request.InstrumentId ||
      !request.Quantity ||
      !request.AccountId
    ) {
      throw new Error("All fields are required for modifying an order.");
    }
    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    return await this.connection.apRequest(
      Endpoint.MODIFY_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  async cancelAllOrders(params: CancelAllOrdersRequest): Promise<void> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.CANCEL_ALL_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  async getOrderStatus(
    params: GetOrderStatusRequest,
  ): Promise<GetOrderStatusResponse> {
    if (!params.AccountId && !params.OrderId) {
      throw new Error("Either AccountId or OrderId is required.");
    }

    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.GET_ORDER_STATUS,
      RequestType.POST,
      paramsWithOMSId,
    );

    return response as GetOrderStatusResponse;
  }

  async getOrdersHistory(params: GetOrdersHistoryRequest): Promise<Order[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.connection.apRequest(
      Endpoint.GET_ORDERS_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )) as Order[];
  }

  async getTradesHistory(
    params: GetTradesHistoryRequest,
  ): Promise<OrderTrade[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.connection.apRequest(
      Endpoint.GET_TRADES_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )) as OrderTrade[];
  }

  async getOrderHistoryByOrderId(
    params: GetOrderHistoryByOrderIdRequest,
  ): Promise<GetOrderHistoryByOrderIdResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.connection.apRequest(
      Endpoint.GET_ORDER_HISTORY_BY_ORDER_ID,
      RequestType.POST,
      paramsWithOMSId,
    )) as GetOrderHistoryByOrderIdResponse[];
  }

  public async getTickerHistory(
    params: GetTickerHistoryRequest,
  ): Promise<GetTickerHistoryResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    const response = (await this.connection.apRequest(
      Endpoint.GET_TICKER_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((item): GetTickerHistoryResponse => ({
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
  }

  public async getLastTrades(
    request: GetLastTradesRequest,
  ): Promise<IndexTrade[]> {
    // Validate required fields
    if (!request.InstrumentId)
      throw new Error("InstrumentId is required for getting last trades.");

    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_LAST_TRADES,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((item) => parseIndexTrade(item));
  }

  async getLevel1Summary(
    request: GetLevel1SummaryRequest,
  ): Promise<GetLevel1SummaryResponse[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_LEVEL1_SUMMARY,
      RequestType.POST,
      paramsWithOMSId,
    )) as string[];

    return response.map((data) => JSON.parse(data) as GetLevel1SummaryResponse);
  }

  public async getLevel1SummaryMin(
    request: GetLevel1SummaryMinRequest,
  ): Promise<GetLevel1SummaryMinResponse> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_LEVEL1_SUMMARY_MIN,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((data): Level1SummaryMin => ({
      InstrumentId: data[0],
      InstrumentSymbol: data[1].toString(),
      LastTradedPx: data[2],
      Rolling24HrPxChange: data[3],
      Rolling24HrPxChangePercent: data[4],
      Rolling24HrVolume: data[5],
    }));
  }

  public async getOpenTradeReports(
    request: GetOpenTradeReportsRequest,
  ): Promise<GetOpenTradeReportsResponse> {
    // Validate required fields
    if (!request.AccountId) {
      throw new Error(
        "AccountId is required for retrieving open trade reports.",
      );
    }

    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    // Make the HTTP request
    const response: GetOpenTradeReportsResponse =
      (await this.connection.apRequest(
        Endpoint.GET_OPEN_TRADE_REPORTS,
        RequestType.POST,
        paramsWithOMSId,
      )) as GetOpenTradeReportsResponse;

    return response;
  }

  public async getOrders(request: GetOrdersRequest): Promise<Order[]> {
    // Validate required fields
    if (!request.AccountId) {
      throw new Error("AccountId is required for retrieving orders.");
    }

    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    )) as Order[];

    return response;
  }

  public async getOrderHistory(
    request: GetOrdersHistoryRequest,
  ): Promise<Order[]> {
    // Validate required fields
    if (!request.AccountId) {
      throw new Error("AccountId is required for retrieving order history.");
    }

    const paramsWithOMSId = completeParams(request, this.OMS_ID);


    // Make the HTTP request
    const response = (await this.connection.apRequest(
      Endpoint.GET_ORDER_HISTORY,
      RequestType.POST,
      paramsWithOMSId,
    )) as Order[];

    return response;
  }

  async sendOrder(request: SendOrderRequest): Promise<SendOrderResponse> {
    if (
      request.InstrumentId == null ||
      request.AccountId == null ||
      request.TimeInForce == null ||
      request.Side == null ||
      request.OrderType == null
    ) {
      throw new Error(
        "InstrumentId, AccountId, TimeInForce, Side, and OrderType are required",
      );
    }
    if (request.OrderType === OrderTypeInt.Limit && request.LimitPrice == null) {
      throw new Error("LimitPrice is required for Limit Orders");
    }
    if (
      request.UseDisplayQuantity &&
      (request.DisplayQuantity == null || request.DisplayQuantity <= 0)
    ) {
      throw new Error(
        "DisplayQuantity must be greater than 0 when UseDisplayQuantity is true",
      );
    }

    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    const response = await this.connection.apRequest(
      Endpoint.SEND_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );

    return response as SendOrderResponse;
  }

  async cancelReplaceOrder(
    params: CancelReplaceOrderRequest,
  ): Promise<CancelReplaceOrderResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.connection.apRequest(
      Endpoint.CANCEL_REPLACE_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    )) as CancelReplaceOrderResponse;
  }

  async cancelOrder(params: CancelOrderRequest): Promise<void> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return await this.connection.apRequest(
      Endpoint.CANCEL_ORDER,
      RequestType.POST,
      paramsWithOMSId,
    );
  }

  public async getOpenOrders(
    params: GetOpenOrdersRequest,
  ): Promise<GetOpenOrdersResponse[]> {
    if (!params.AccountId) {
      throw new Error("getOpenOrders requires AccountId.");
    }

    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    const response = await this["#serviceCore"].request(
      Endpoint.GET_OPEN_ORDERS,
      RequestType.POST,
      paramsWithOMSId,
    );

    return response as GetOpenOrdersResponse[];
  }

  public async getAccountTrades(
    request: GetAccountTradesRequest,
  ): Promise<GetAccountTradesResponse> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    // Make the HTTP request
    const response: GetAccountTradesResponse = (await this.connection.apRequest(
      Endpoint.GET_ACCOUNT_TRADES,
      RequestType.POST,
      paramsWithOMSId,
    )) as GetAccountTradesResponse;

    return response;
  }

  public async getSummary(): Promise<SummaryResponse> {
    const response = (await this.connection.apRequest(
      Endpoint.SUMMARY,
      RequestType.POST,
    )) as SummaryResponse;

    return response;
  }

  public async getTicker(): Promise<TickerResponse> {
    const response = (await this.connection.apRequest(
      Endpoint.TICKER,
      RequestType.POST,
    )) as TickerResponse;

    return response;
  }

  public async getOrderBook(
    request: OrderBookRequest,
  ): Promise<OrderBookResponse> {
    return this.connection.apRequest(
      Endpoint.ORDER_BOOK,
      RequestType.POST,
      request,
    );
  }

  public async getTrades(params: TradesRequest): Promise<TradesResponse[]> {
    return this.connection.apRequest(
      Endpoint.TRADES,
      RequestType.POST,
      params,
    )
  }

  public async getL2Snapshot(request: GetL2SnapshotRequest): Promise<L2Snapshot[]> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    const response: number[][] = (await this.connection.apRequest(
      Endpoint.GET_L2_SNAPSHOT,
      RequestType.POST,
      paramsWithOMSId,
    )) as number[][];

    return response.map((snapshot): L2Snapshot => ({
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
  }

  getLevel1(request: GetLevel1Request): Promise<Level1> {
    const paramsWithOMSId = completeParams(request, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_LEVEL1,
      RequestType.POST,
      paramsWithOMSId,
    )
  }

  getEnums(): Promise<GetEnumsResponse> {
    return this.connection.apRequest(
      Endpoint.GET_ENUMS,
      RequestType.POST,
    )
  }
}
