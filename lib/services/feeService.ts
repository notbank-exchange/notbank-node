import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { GetAccountFeesRequest } from "../models/request/getAccountFees";
import { GetDepositFeeRequest } from "../models/request/getDepositFee";
import { GetOMSDepositFeesRequest } from "../models/request/getOMSDepositFees";
import { GetOMSWithdrawFeesRequest } from "../models/request/getOMSWithdrawFees";
import { GetOrderFeeRequest } from "../models/request/getOrderFee";
import { GetWithdrawFeeRequest } from "../models/request/getWithdrawFee";
import { AccountFee } from "../models/response/getAccountFees";
import { DepositFee } from "../models/response/getDepositFee";
import { OMSDepositFee } from "../models/response/getOMSDepositFees";
import { OMSWithdrawFee } from "../models/response/getOMSWithdrawFees";
import { OrderFee } from "../models/response/getOrderFee";
import { WithdrawFee } from "../models/response/getWithdrawFee";
import { completeParams } from "../utils/completeParams";

export class FeeService {
  connection: ServiceConnection;
  private readonly OMS_ID = 1;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getdepositfee
   */
  getDepositFee(
    params: GetDepositFeeRequest
  ): Promise<DepositFee> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_DEPOSIT_FEE,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getwithdrawfee
   */
  getWithdrawFee(
    params: GetWithdrawFeeRequest
  ): Promise<WithdrawFee> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_WITHDRAW_FEE,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getomswithdrawfees
   */
  getOMSWithdrawFees(
    params: GetOMSWithdrawFeesRequest
  ): Promise<OMSWithdrawFee[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_OMS_WITHDRAW_FEES,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getomsdepositfees
   */
  async getOMSDepositFees(
    params: GetOMSDepositFeesRequest
  ): Promise<OMSDepositFee[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_OMS_DEPOSIT_FEES,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getaccountfees
   */
  async getAccountFees(
    params: GetAccountFeesRequest
  ): Promise<AccountFee[]> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ACCOUNT_FEES,
      RequestType.POST,
      paramsWithOMSId
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getorderfee
   */
  async getOrderFee(params: GetOrderFeeRequest): Promise<OrderFee> {
    const paramsWithOMSId = completeParams(params, this.OMS_ID);
    return this.connection.apRequest(
      Endpoint.GET_ORDER_FEE,
      RequestType.POST,
      paramsWithOMSId
    );
  }
}
