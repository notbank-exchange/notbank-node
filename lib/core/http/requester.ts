import { RequestType } from "../serviceClient";

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
    var url = config.requestType === RequestType.POST
      ? config.url
      : this.getUrlWithSearchParams(config.url, config.params);
    var body = config.requestType === RequestType.POST
      ? config.params :
      null;
    console.log("url", url)
    console.log("body", body)
    console.log("requesttype", config.requestType === "POST")
    return fetch(url,
      {
        method: config.requestType,
        body: body ? JSON.stringify(body) : null,
        headers: this.getHeaders(config.extraHeaders)
      }
    );
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
      console.log("headeres", { ...headers, ...extraHeaders })
      return { ...headers, ...extraHeaders };
    }
    console.log("headers", headers)
    return headers;
  }

  getUrlWithSearchParams(endpoint: string, params?: any): string {
    return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
  }
}
