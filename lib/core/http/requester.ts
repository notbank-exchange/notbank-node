import { RequestType } from "../serviceClient";
import fetch, { RequestInit, Response } from 'node-fetch';

export class Requester {
  #aptoken: string | null;

  constructor() {
    this.#aptoken = null;
  }

  updateSessionToken(aptoken: string) {
    this.#aptoken = aptoken;
  }

  request<T1>(config: {
    url: string,
    requestType: RequestType,
    params?: T1;
    extraHeaders?: any
  }
  ): Promise<Response> {
    const isPostOrDeleteRequest = [
      RequestType.POST, RequestType.DELETE].includes(config.requestType)
    var url = isPostOrDeleteRequest
      ? config.url
      : this.getUrlWithSearchParams(config.url, config.params);
    var body = isPostOrDeleteRequest
      ? config.params :
      null;
    var requestData: RequestInit = {
      method: config.requestType,
      headers: this.getHeaders(config.extraHeaders)
    }
    if (body) {
      requestData.body = JSON.stringify(body)
    }
    return fetch(url, requestData);
  }

  getHeaders(extraHeaders?: any): any {
    var headers = {
      "Content-type": "application/json",
      charset: "UTF-8"
    };
    if (this.#aptoken) {
      headers["aptoken"] = this.#aptoken;
    }
    if (extraHeaders) {
      return { ...headers, ...extraHeaders };
    }
    return headers;
  }

  getUrlWithSearchParams(endpoint: string, params?: any): string {
    return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
  }
}
