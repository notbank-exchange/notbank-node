import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetAccountInfoRequest } from "../models/request/getAccountInfo";
import { GetAccountInstrumentStatisticsRequest } from "../models/request/getAccountInstrumentStatistics";
import { GetAccountPositionRequest } from "../models/request/getAccountPositions";
import { GetAccountSettlementPositionsRequest } from "../models/request/getAccountSettlementPositions";
import { GetAccountTransactionsRequest } from "../models/request/getAccountTransactions";
import { AccountInfo } from "../models/response/accountInfo";
import { AccountPositions } from "../models/response/accountPositions";
import { GetAccountInstrumentStatisticsResponse } from "../models/response/getAccountInstrumentStatistics";
import { AccountSettlementPositionsResponse } from "../models/response/getAccountSettlementPositions";
import { GetAccountTransactionsResponse } from "../models/response/getAccountTransactions";
import { completeParams } from "../utils/completeParams";

export class AccountService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  public async getAccountTransactions(
    request: GetAccountTransactionsRequest
  ): Promise<GetAccountTransactionsResponse> {
    if (request.AccountId && typeof request.AccountId !== "number") {
      throw new Error("AccountId must be a number.");
    }

    const paramsWithOMSId = completeParams(request, this.OMS_ID);

    const response: GetAccountTransactionsResponse =
      (await this.connection.apRequest(
        Endpoint.GET_ACCOUNT_TRANSACTIONS,
        RequestType.POST,
        paramsWithOMSId
      )) as GetAccountTransactionsResponse;

    return response;
  }

  public async getAccountPositions(
    params: GetAccountPositionRequest
  ): Promise<AccountPositions[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    // Llamada al endpoint
    const response = (await this.connection.apRequest(
      Endpoint.GET_ACCOUNT_POSITIONS,
      RequestType.POST,
      paramsWithOMSId
    )) as AccountPositions[];

    return response;
  }

  public async getAccountInstrumentStatistics(
    params: GetAccountInstrumentStatisticsRequest
  ): Promise<GetAccountInstrumentStatisticsResponse[]> {
    if (!params.AccountId) {
      throw new Error("AccountId is required field.");
    }
    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    return (await this.connection.apRequest(
      Endpoint.GET_ACCOUNT_INSTRUMENT_STATISTICS,
      RequestType.POST,
      paramsWithOMSId
    )) as GetAccountInstrumentStatisticsResponse[];
  }

  public async getAccountSettlementPositions(
    params: GetAccountSettlementPositionsRequest
  ): Promise<AccountSettlementPositionsResponse> {
    if (!params.AccountId) {
      throw new Error("OMSId and AccountId are required fields.");
    }
    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    return (await this.connection.apRequest(
      Endpoint.GET_ACCOUNT_SETTLEMENT_POSITIONS,
      RequestType.POST,
      paramsWithOMSId
    )) as AccountSettlementPositionsResponse;
  }

  public async getAccountInfo(
    params: GetAccountInfoRequest
  ): Promise<AccountInfo> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    // Llamamos al método request con POST y casteamos la respuesta
    return (await this.connection.apRequest(
      Endpoint.GET_ACCOUNT_INFO,
      RequestType.POST,
      paramsWithOMSId
    )) as AccountInfo;
  }
}
