import { ServiceClient } from "../core/serviceClient.js";
import { GetAccountFeesRequest } from "../models/request/getAccountFees.js";
import { GetDepositFeeRequest } from "../models/request/getDepositFee.js";
import { GetOMSDepositFeesRequest } from "../models/request/getOMSDepositFees.js";
import { GetOMSWithdrawFeesRequest } from "../models/request/getOMSWithdrawFees.js";
import { GetOrderFeeRequest } from "../models/request/getOrderFee.js";
import { GetWithdrawFeeRequest } from "../models/request/getWithdrawFee.js";
import { GetAccountFeesResponse } from "../models/response/getAccountFees.js";
import { GetDepositFeeResponse } from "../models/response/getDepositFee.js";
import { GetOMSDepositFeesResponse } from "../models/response/getOMSDepositFees.js";
import { GetOMSWithdrawFeesResponse } from "../models/response/getOMSWithdrawFees.js";
import { GetOrderFeeResponse } from "../models/response/getOrderFee.js";
import { GetWithdrawFeeResponse } from "../models/response/getWithdrawFee.js";
export declare class FeeService {
    #private;
    private readonly OMS_ID;
    constructor(serviceCore: ServiceClient);
    getDepositFee(params: GetDepositFeeRequest): Promise<GetDepositFeeResponse>;
    getWithdrawFee(params: GetWithdrawFeeRequest): Promise<GetWithdrawFeeResponse>;
    getOMSWithdrawFees(params: GetOMSWithdrawFeesRequest): Promise<GetOMSWithdrawFeesResponse[]>;
    getOMSDepositFees(params: GetOMSDepositFeesRequest): Promise<GetOMSDepositFeesResponse[]>;
    getAccountFees(params: GetAccountFeesRequest): Promise<GetAccountFeesResponse[]>;
    getOrderFee(params: GetOrderFeeRequest): Promise<GetOrderFeeResponse>;
}
