import { Endpoint } from "../../constants/endpoints";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse,
  StandardError,
  StandardResponse
} from "../../models";
import { RequestType, ServiceClient } from "../serviceClient";
import { MessageFrame } from "../websocket/messageFrame";
import { ResponseHandler } from "../websocket/responseHandler";
import { SubscriptionHandler } from "../websocket/subscriptionHandler";

export class HttpClient implements ServiceClient {
  #aptoken: string | null;
  #HOST: string;

  constructor(domain: string) {
    this.#aptoken = null;
    this.#HOST = "https://" + domain + "/ap/";
  }

  async request<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    params?: T1
  ): Promise<T2> {
    if (requestType === RequestType.GET) {
      return this.requestGet(endpoint, { params: params });
    }
    if (requestType === RequestType.POST) {
      return this.requestPost(endpoint, params);
    }
    throw new Error(`Request type not implemented. ${requestType}`);
  }

  async requestPost<T1, T2>(endpoint: string, message?: T1): Promise<T2> {
    var response = await fetch(this.getUrl(endpoint), {
      method: "POST",
      body: message ? JSON.stringify(message) : null,
      headers: this.getHeaders()
    });
    return this.handleResponse<T2>(response);
  }

  async requestGet<T1, T2>(
    endpoint: string,
    config: { params?: T1; extraHeaders?: any } = {}
  ): Promise<T2> {
    var response = await fetch(
      this.getUrlWithSearchParams(endpoint, config.params),
      {
        method: "GET",
        headers: this.getHeaders(config.extraHeaders)
      }
    );
    return await this.handleResponse<T2>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (response.status >= 300 || response.status < 200) {
      throw new Error(
        `http error (${
          response.status
        }) not a successfull response. ${response.text()}`
      );
    }
    var jsonResponse = await response.json();
    var standardResponse = jsonResponse as StandardResponse;
    if (
      standardResponse?.result === false &&
      standardResponse?.errorcode != null
    ) {
      throw new StandardError(standardResponse);
    }
    return jsonResponse as T;
  }

  getHeaders(extraHeaders?: any): any {
    var headers = {
      "Content-type": "application/json",
      charset: "UTF-8"
    };
    if (this.#aptoken != null) {
      headers["aptoken"] = this.#aptoken;
    }
    if (extraHeaders) {
      return { ...headers, ...extraHeaders };
    }
    return headers;
  }

  getUrlWithSearchParams(endpoint: string, params?: any): string {
    if (params) {
      return this.getUrl(endpoint) + "?" + new URLSearchParams(params);
    }
    return this.getUrl(endpoint);
  }

  async authenticate(params: AuthenticateUserRequest): Promise<void> {
    var response = (await this.requestGet(Endpoint.AUTHENTICATE, {
      extraHeaders: params
    })) as AuthenticateUserResponse;
    this.#aptoken = response.SessionToken;
  }

  async authenticateUser(params: AuthenticateUserRequest): Promise<void> {
    var response = (await this.requestGet(Endpoint.AUTHENTICATE_USER, {
      extraHeaders: params
    })) as AuthenticateUserResponse;
    this.#aptoken = response.SessionToken;
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

  getUrl(endpoint: string): string {
    return this.#HOST + endpoint;
  }
}
