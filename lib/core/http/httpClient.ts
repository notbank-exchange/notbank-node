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
import { FormDataRequester } from "./formDataRequester";
import { JsonRequester } from "./jsonRequester";
import { NbResponseHandler } from "./nbResponseHandler";

export class HttpConnection implements ServiceConnection {
  #jsonRequester: JsonRequester;
  #formDataRequester: FormDataRequester;
  #host: string;

  constructor(domain: string) {
    this.#jsonRequester = new JsonRequester();
    this.#formDataRequester = new FormDataRequester();
    this.#host = "https://" + domain;
  }

  async nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged: boolean = false
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    var response = await this.#jsonRequester.request({ url, requestType, params: message });
    return await NbResponseHandler.handle<T2>(response, paged);
  }


  async nbFormDataRequest<T1, T2>(
    endpoint: string,
    files: [string, File][],
    message?: T1,
  ): Promise<T2> {
    const url = this.getNbUrl(endpoint);
    var response = await this.#formDataRequester.post({ url, files, params: message });
    return await NbResponseHandler.handle<T2>(response, false);
  }

  async apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    extraHeaders?: any
  ): Promise<T2> {
    const url = this.getApUrl(endpoint);
    var response = await this.#jsonRequester.request({
      url,
      requestType,
      params: message,
      extraHeaders
    });
    return await ApResponseHandler.handle<T2>(response);
  }

  updateSessionToken(sessionToken: string) {
    this.#jsonRequester.updateSessionToken(sessionToken);
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    var response = await this.apRequest<any, AuthenticateUserResponse>(
      Endpoint.AUTHENTICATE_USER,
      RequestType.GET,
      null,
      params
    );
    this.#jsonRequester.updateSessionToken(response.SessionToken);
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
