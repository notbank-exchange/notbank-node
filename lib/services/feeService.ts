import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { GetAccountFeesRequest } from "../models/request/getAccountFees";
import { GetDepositFeeRequest } from "../models/request/getDepositFee";
import { GetOMSDepositFeesRequest } from "../models/request/getOMSDepositFees";
import { GetOMSWithdrawFeesRequest } from "../models/request/getOMSWithdrawFees";
import { GetOrderFeeRequest } from "../models/request/getOrderFee";
import { GetWithdrawFeeRequest } from "../models/request/getWithdrawFee";
import { GetAccountFeesResponse } from "../models/response/getAccountFees";
import { GetDepositFeeResponse } from "../models/response/getDepositFee";
import { GetOMSDepositFeesResponse } from "../models/response/getOMSDepositFees";
import { GetOMSWithdrawFeesResponse } from "../models/response/getOMSWithdrawFees";
import { GetOrderFeeResponse } from "../models/response/getOrderFee";
import { GetWithdrawFeeResponse } from "../models/response/getWithdrawFee";
import { completeParams } from "../utils/completeParams";

export class FeeService {
  #serviceCore: ServiceClient;
  private readonly OMS_ID = 1;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  async getDepositFee(
    params: GetDepositFeeRequest
  ): Promise<GetDepositFeeResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.#serviceCore.request(
      Endpoint.GET_DEPOSIT_FEE,
      RequestType.POST,
      paramsWithOMSId
    )) as GetDepositFeeResponse;
  }

  async getWithdrawFee(
    params: GetWithdrawFeeRequest
  ): Promise<GetWithdrawFeeResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.#serviceCore.request(
      Endpoint.GET_WITHDRAW_FEE,
      RequestType.POST,
      paramsWithOMSId
    )) as GetWithdrawFeeResponse;
  }

  async getOMSWithdrawFees(
    params: GetOMSWithdrawFeesRequest
  ): Promise<GetOMSWithdrawFeesResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    // Call the service endpoint
    const response = await this.#serviceCore.request(
      Endpoint.GET_OMS_WITHDRAW_FEES,
      RequestType.POST,
      paramsWithOMSId
    );

    return response as GetOMSWithdrawFeesResponse[];
  }

  async getOMSDepositFees(
    params: GetOMSDepositFeesRequest
  ): Promise<GetOMSDepositFeesResponse[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    // Call the service endpoint
    const response = await this.#serviceCore.request(
      Endpoint.GET_OMS_DEPOSIT_FEES,
      RequestType.POST,
      paramsWithOMSId
    );

    return response as GetOMSDepositFeesResponse[];
  }

  async getAccountFees(
    params: GetAccountFeesRequest
  ): Promise<GetAccountFeesResponse[]> {
    // Validate required parameters
    if (!params.AccountId) {
      throw new Error("AccountId is required.");
    }

    const paramsWithOMSId = completeParams(params, this.OMS_ID);

    // Call the service endpoint
    const response = await this.#serviceCore.request(
      Endpoint.GET_ACCOUNT_FEES,
      RequestType.POST,
      paramsWithOMSId
    );

    return response as GetAccountFeesResponse[];
  }

  async getOrderFee(params: GetOrderFeeRequest): Promise<GetOrderFeeResponse> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return (await this.#serviceCore.request(
      Endpoint.GET_ORDER_FEE,
      RequestType.POST,
      paramsWithOMSId
    )) as GetOrderFeeResponse;
  }
}
