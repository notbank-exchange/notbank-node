import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { HealthCheck } from "../models/response/healthCheck";
import { Pong } from "../models/response/pong";

export class SystemService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#ping
   */
  ping(): Promise<Pong> {
    return this.connection.apRequest(
      Endpoint.PING,
      RequestType.POST
    );
  }

  /**
   * https://apidoc.notbank.exchange/#healthcheck
   */
  healthCheck(): Promise<HealthCheck> {
    return this.connection.apRequest(
      Endpoint.HEALTH_CHECK,
      RequestType.POST
    );
  }
}
