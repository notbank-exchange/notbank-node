import fetch from 'node-fetch';
import { RequestType } from "../serviceClient.js";
export class FormDataRequester {
    static post(config) {
        const requestData = {
            method: RequestType.POST,
            headers: FormDataRequester.getHeaders(config.extraHeaders),
            body: config.formData
        };
        console.log(requestData);
        return fetch(config.url, requestData);
    }
    static getHeaders(extraHeaders) {
        var headers = {
            charset: "UTF-8"
        };
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
}
