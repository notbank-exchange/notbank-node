import { RequestType } from "../serviceClient.js";
import fetch from 'node-fetch';
export class JsonRequester {
    request(config) {
        const isPostOrDeleteRequest = [
            RequestType.POST, RequestType.DELETE
        ].includes(config.requestType);
        var url = isPostOrDeleteRequest
            ? config.url
            : this.getUrlWithSearchParams(config.url, config.params);
        var body = isPostOrDeleteRequest
            ? config.params :
            null;
        var requestData = {
            method: config.requestType,
            headers: this.getHeaders(config.extraHeaders, isPostOrDeleteRequest)
        };
        if (body) {
            requestData.body = JSON.stringify(body);
        }
        console.log(url);
        console.log(requestData);
        return fetch(url, requestData);
    }
    getHeaders(extraHeaders, withJsonData = false) {
        var headers = {
            charset: "UTF-8"
        };
        if (withJsonData) {
            headers["Content-type"] = "application/json";
        }
        if (extraHeaders) {
            return Object.assign(Object.assign({}, headers), extraHeaders);
        }
        return headers;
    }
    getUrlWithSearchParams(endpoint, params) {
        return params ? endpoint + "?" + new URLSearchParams(params) : endpoint;
    }
}
