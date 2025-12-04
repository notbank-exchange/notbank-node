
import fetch, { Response } from 'node-fetch';
import { RequestType } from "../serviceClient";

export interface FormDataRequest {
  url: string,
  formData: FormData
  extraHeaders?: any
}

export class FormDataRequester {
  public static post<T1>(config: FormDataRequest): Promise<Response> {
    const requestData = {
      method: RequestType.POST,
      headers: FormDataRequester.getHeaders(config.extraHeaders),
      body: config.formData
    };
    return fetch(config.url, requestData);
  }

  private static getHeaders(extraHeaders?: any): any {
    var headers = {
      charset: "UTF-8"
    };
    if (extraHeaders) {
      return { ...headers, ...extraHeaders };
    }
    return headers;
  }
}
