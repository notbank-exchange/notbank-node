import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { DepositToYieldRequest, WithdrawFromYieldRequest } from "../models/request";

export class SavingsService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  // ! #reunion
  // ? no response?
  depositToYield(request: DepositToYieldRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_DEPOSIT,
      RequestType.POST,
      request
    );
  }

  // ! #reunion
  // ? no response?
  withdrawToYield(request: WithdrawFromYieldRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.SAVINGS_WITHDRAW,
      RequestType.POST,
      request
    );
  }
}
