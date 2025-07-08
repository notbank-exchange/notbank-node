import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { HealthCheckResponse } from "../models/response/healthCheck";
import { PingResponse } from "../models/response/ping";

export class SystemService {
  #serviceCore: ServiceClient;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  async ping(): Promise<PingResponse> {
    return (await this.#serviceCore.apRequest(
      Endpoint.PING,
      RequestType.POST
    )) as PingResponse;
  }

  async healthCheck(): Promise<HealthCheckResponse> {
    return (await this.#serviceCore.apRequest(
      Endpoint.HEALTH_CHECK,
      RequestType.POST
    )) as HealthCheckResponse;
  }
}
