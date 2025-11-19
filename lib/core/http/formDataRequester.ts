import { RequestType } from "../serviceClient";
import fetch, { RequestInit, Response } from 'node-fetch';
// import { FormData, File } from "formdata-node"
export interface FormDataRequest<T1> {
  url: string,
  files: File[];
  params?: T1;
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

  private getRequestInit<T1>(config: FormDataRequest<T1>) {
    var requestInit = {
      method: RequestType.POST,
      headers: this.getHeaders(config.extraHeaders)
    };
    const formData = new FormData();
    config.files.map((file, index) => {
      formData.append('file_' + index, file);
    });
    Object.keys(config.params).map(key => {
      formData.append(key, config.params[key])
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
