import { Endpoint } from "../../constants/endpoints";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse
} from "../../models";
import { RequestType, ServiceConnection } from "../serviceClient";
import { MessageFrame } from "../websocket/messageFrame";
import { ResponseHandler } from "../websocket/responseHandler";
import { SubscriptionHandler } from "../websocket/subscriptionHandler";
import { ApResponseHandler } from "./apResponseHandler";
import { NbResponseHandler } from "./nbResponseHandler";
import { Requester } from "./requester";

export class HttpConnection implements ServiceConnection {
  #requester: Requester;
  #host: string;

  constructor(domain: string) {
    this.#requester = new Requester();
    this.#host = "https://" + domain;
  }

  async nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    params?: T1,
    paged: boolean = false
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    var response = await this.#requester.request({ url, requestType, params });
    return await NbResponseHandler.handle<T2>(response, paged);
  }

  async apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    params?: T1,
    extraHeaders?: any
  ): Promise<T2> {
    const url = this.getApUrl(endpoint);
    var response = await this.#requester.request({
      url,
      requestType,
      params,
      extraHeaders
    });
    return await ApResponseHandler.handle<T2>(response);
  }

  updateSessionToken(sessionToken: string) {
    this.#requester.updateSessionToken(sessionToken);
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    var response = await this.apRequest<any, AuthenticateUserResponse>(
      Endpoint.AUTHENTICATE_USER,
      RequestType.GET,
      null,
      params
    );
    this.#requester.updateSessionToken(response.SessionToken);
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
    return this.#host + "/ap/" + endpoint;
  }
  getNbUrl(endpoint: string): string {
    return this.#host + "/api/nb/" + endpoint;
  }
  connect(): Promise<void> {
    return Promise.resolve();
  }
  close(): Promise<void> {
    return Promise.resolve();
  }
}
