import { ServiceClient } from "../core/serviceClient.js";
import { GetAccountPositionRequest } from "../models/request/getAccountPositions.js";
import { GetAccountSettlementPositionsRequest } from "../models/request/getAccountSettlementPositions.js";
import { GetAccountInfoRequest } from "../models/request/getAccountInfo.js";
import { GetAccountInstrumentStatisticsRequest } from "../models/request/getAccountInstrumentStatistics.js";
import { AccountPositions } from "../models/response/accountPositions.js";
import { AccountSettlementPositionsResponse } from "../models/response/getAccountSettlementPositions.js";
import { AccountInfo } from "../models/response/accountInfo.js";
import { GetAccountInstrumentStatisticsResponse } from "../models/response/getAccountInstrumentStatistics.js";
import { GetAccountTransactionsRequest } from "../models/request/getAccountTransactions.js";
import { GetAccountTransactionsResponse } from "../models/response/getAccountTransactions.js";
export declare class AccountService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    getAccountTransactions(request: GetAccountTransactionsRequest): Promise<GetAccountTransactionsResponse>;
    getAccountPositions(params: GetAccountPositionRequest): Promise<AccountPositions[]>;
    getAccountInstrumentStatistics(params: GetAccountInstrumentStatisticsRequest): Promise<GetAccountInstrumentStatisticsResponse[]>;
    getAccountSettlementPositions(params: GetAccountSettlementPositionsRequest): Promise<AccountSettlementPositionsResponse>;
    getAccountInfo(params: GetAccountInfoRequest): Promise<AccountInfo>;
}
