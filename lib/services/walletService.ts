import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { GetBankRequest } from "../models/request/getBanks";
import { Banks } from "../models/response/bank";
import { HealthCheckResponse } from "../models/response/healthCheck";
import { PingResponse } from "../models/response/ping";

export class WalletService {
  #serviceCore: ServiceClient;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  /**
   * https://notbank-apidoc.pages.dev/#getbanks
   */
  async GetBanks(request: GetBankRequest): Promise<Banks> {
    return (await this.#serviceCore.nbRequest(
      Endpoint.BANKS,
      RequestType.GET,
      request
    ));
  }
}
