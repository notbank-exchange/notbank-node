import fetch, { Response } from 'node-fetch';
import { RequestType } from "../serviceClient";

export interface FormDataRequest<T1> {
  url: string,
  params?: T1;
  files: [string, File][]
  extraHeaders?: any
}

export class FormDataRequester {
  #aptoken: string | null;

  constructor() {
    this.#aptoken = null;
  }

  updateSessionToken(aptoken: string) {
    this.#aptoken = aptoken;
  }

  post<T1>(config: FormDataRequest<T1>): Promise<Response> {
    const url = config.url
    const requestInit = this.getRequestInit(config);
    return fetch(url, requestInit);
  }

  private getRequestInit<T1>(request: FormDataRequest<T1>) {
    var requestInit = {
      method: RequestType.POST,
      headers: this.getHeaders(request.extraHeaders)
    };
    const formData = new FormData();
    request.files.map(([fileName, file]) => formData.append(fileName, file))
    Object.keys(request.params).map(key => {
      formData.append(key, request.params[key])
    });
    requestInit["body"] = formData;
    return requestInit;
  }

  getHeaders(extraHeaders?: any): any {
    var headers = {
      'Accept': '*/*',
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
