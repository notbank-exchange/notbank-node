import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
import { WebAuthenticateUserRequest } from "../models/request/webAuthenticateUser";
import { WebAuthenticateUserResponse } from "../models/response/webAuthenticateUser";

export class AuthService {
  #serviceCore: ServiceClient;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  /**
   * https://apidoc.notbank.exchange/?http#webauthenticateuser
   */
  async webAuthenticateUser(
    params: WebAuthenticateUserRequest
  ): Promise<WebAuthenticateUserResponse> {
    return await this.#serviceCore.apRequest(
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
    return await this.#serviceCore.apRequest(Endpoint.LOGOUT, RequestType.POST);
  }
}
