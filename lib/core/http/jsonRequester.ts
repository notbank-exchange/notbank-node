import { RequestType } from "../serviceClient";
import fetch, { RequestInit, Response } from 'node-fetch';

export class JsonRequester {

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
      headers: this.getHeaders(config.extraHeaders, isPostOrDeleteRequest)
    }
    if (body) {
      requestData.body = JSON.stringify(body)
    }
    return fetch(url, requestData);
  }

  getHeaders(extraHeaders?: any, withJsonData: boolean = false): any {
    var headers = {
      charset: "UTF-8"
    };
    if (withJsonData) {
      headers["Content-type"] = "application/json";
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
