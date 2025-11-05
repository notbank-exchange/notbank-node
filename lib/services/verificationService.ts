import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { BasicVerification, BasicVerificationResponse, TraderPlusVerification, TraderPlusVerificationSchema, TraderVerification } from "../models";

export class VerificationService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  verificateBasic(request: BasicVerification): Promise<BasicVerificationResponse> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_BASIC,
      RequestType.POST,
      request
    );
  }

  verificateTrader(request: TraderVerification): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER,
      RequestType.POST,
      request
    );
  }


  verificateTraderPlus(request: TraderPlusVerification): Promise<void> {
    let message = { user_id: request.user_id, declaration: request.declaration }
    for (let i = 0; request.files && i < request.files.length; i++) {
      message["file_" + i] = request.files[i]
    }
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER_PLUS,
      RequestType.POST,
      message
    );
  }

  getTraderPlusVerificationSchema(request: TraderPlusVerificationSchema): Promise<any> {
    return this.connection.nbRequest(
      Endpoint.VERIFICATION_TRADER_PLUS_SCHEMES,
      RequestType.GET,
      request
    );
  }
}
