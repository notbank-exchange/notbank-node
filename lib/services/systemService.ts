import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { HealthCheckResponse } from "../models/response/healthCheck";
import { PingResponse } from "../models/response/ping";

export class SystemService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  async ping(): Promise<PingResponse> {
    return (await this.connection.apRequest(
      Endpoint.PING,
      RequestType.POST
    )) as PingResponse;
  }

  async healthCheck(): Promise<HealthCheckResponse> {
    return (await this.connection.apRequest(
      Endpoint.HEALTH_CHECK,
      RequestType.POST
    )) as HealthCheckResponse;
  }
}
