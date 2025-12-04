import { RequestType } from "../serviceClient.js";
import { Response } from 'node-fetch';
export declare class JsonRequester {
    request<T1>(config: {
        url: string;
        requestType: RequestType;
        params?: T1;
        extraHeaders?: any;
    }): Promise<Response>;
    getHeaders(extraHeaders?: any, withJsonData?: boolean): any;
    getUrlWithSearchParams(endpoint: string, params?: any): string;
}
