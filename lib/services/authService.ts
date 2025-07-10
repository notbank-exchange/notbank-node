import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { WebAuthenticateUserRequest } from "../models/request/webAuthenticateUser";
import { WebAuthenticateUserResponse } from "../models/response/webAuthenticateUser";

export class AuthService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/?http#webauthenticateuser
   */
  async webAuthenticateUser(
    params: WebAuthenticateUserRequest
  ): Promise<WebAuthenticateUserResponse> {
    return await this.connection.apRequest(
      Endpoint.WEB_AUTHENTICATE_USER,
      RequestType.NONE,
      params
    );
  }

  /**
   * https://apidoc.notbank.exchange/?http#logout
   */
  async logOut(): Promise<void> {
    // Realiza la solicitud al endpoint utilizando el método POST.
    return await this.connection.apRequest(Endpoint.LOGOUT, RequestType.POST);
  }
}
