import { RequestType } from "../serviceClient";

export class Requester {
  #aptoken: string | null;

  constructor() {
    this.#aptoken = null;
  }

  updateSessionToken(aptoken: string) {
    this.#aptoken = aptoken;
  }

  async request<T1>(
    endpoint: string,
    requestType: RequestType,
    params?: T1
  ): Promise<Response> {
    if (requestType === RequestType.GET) {
      return await this.requestByMethod(endpoint, "GET", { params: params });
    }
    if (requestType === RequestType.POST) {
      return await this.requestPost(endpoint, params);
    }
    if (requestType === RequestType.DELETE) {
      return await this.requestByMethod(endpoint, "DELETE", { params: params });
    }
    throw new Error(`Request type not implemented. ${requestType}`);
  }

  async requestPost<T1>(endpoint: string, message?: T1): Promise<Response> {
    return await fetch(endpoint, {
      method: "POST",
      body: message ? JSON.stringify(message) : null,
      headers: this.getHeaders()
    });
  }

  async requestByMethod<T1>(
    endpoint: string,
    method: string,
    config: { params?: T1; extraHeaders?: any } = {}
  ): Promise<Response> {
    return await fetch(
      this.getUrlWithSearchParams(endpoint, config.params),
      {
        method: method,
        headers: this.getHeaders(config.extraHeaders)
      }
    );
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
      return endpoint + "?" + new URLSearchParams(params);
    }
    return endpoint;
  }
}
