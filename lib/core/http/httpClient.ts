import { Endpoint } from "../../constants/endpoints";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse
} from "../../models";
import { RequestType, ServiceClient } from "../serviceClient";
import { MessageFrame } from "../websocket/messageFrame";
import { ResponseHandler } from "../websocket/responseHandler";
import { SubscriptionHandler } from "../websocket/subscriptionHandler";
import { ApResponseHandler } from "./apResponseHandler";
import { NbResponseHandler } from "./nbResponseHandler";
import { Requester } from "./requester";

export class HttpClient implements ServiceClient {
  #requester: Requester
  #HOST: string;

  constructor(domain: string) {
    this.#requester = new Requester();
    this.#HOST = "https://" + domain;
  }

  async nbRequest<T1, T2>(endpoint: string, requestType: RequestType, params?: T1, paged: boolean = false): Promise<T2> {
    var response = await this.#requester.request(endpoint, requestType, params)
    return await NbResponseHandler.handle<T2>(response, paged);
  }

  async apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    params?: T1
  ): Promise<T2> {
    var response = await this.#requester.request(endpoint, requestType, params)
    return await ApResponseHandler.handle<T2>(response);
  }

  getUrlWithSearchParams(endpoint: string, params?: any): string {
    if (params) {
      return endpoint + "?" + new URLSearchParams(params);
    }
    return endpoint;
  }

  async authenticate(params: AuthenticateUserRequest): Promise<void> {
    var response = (await this.apRequest(Endpoint.AUTHENTICATE, RequestType.GET, {
      extraHeaders: params
    })) as AuthenticateUserResponse;
    this.#requester.updateSessionToken(response.SessionToken)
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    var response = (await this.apRequest(Endpoint.AUTHENTICATE_USER, RequestType.GET, {
      extraHeaders: params
    })) as AuthenticateUserResponse;
    this.#requester.updateSessionToken(response.SessionToken)
  }

  subscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  unsubscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    callback_ids: string[]
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  setResponseHandler<T1, T2>(responseHandler: ResponseHandler<T1, T2>): void {
    throw new Error("Method not implemented.");
  }

  setResponseHandlers<T>(responseHandlers: SubscriptionHandler<T>[]): void {
    throw new Error("Method not implemented.");
  }

  getApUrl(endpoint: string): string {
    return this.#HOST + "/ap/" + endpoint;
  }
  getNbUrl(endpoint: string): string {
    return this.#HOST + "/api/nb/" + endpoint;
  }
}
