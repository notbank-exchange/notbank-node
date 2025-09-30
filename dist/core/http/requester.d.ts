import { RequestType } from "../serviceClient.js";
import { Response } from 'node-fetch';
export declare class Requester {
    #private;
    constructor();
    updateSessionToken(aptoken: string): void;
    request<T1>(config: {
        url: string;
        requestType: RequestType;
        params?: T1;
        extraHeaders?: any;
    }): Promise<Response>;
    getHeaders(extraHeaders?: any): any;
    getUrlWithSearchParams(endpoint: string, params?: any): string;
}
