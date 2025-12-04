import { AxiosResponse } from "axios";
import { RequestType } from "../serviceClient.js";
export declare class JsonRequester {
    request<T1>(config: {
        url: string;
        requestType: RequestType;
        params?: T1;
        extraHeaders?: any;
    }): Promise<AxiosResponse<any>>;
    getHeaders(extraHeaders?: any, withJsonData?: boolean): any;
    getUrlWithSearchParams(endpoint: string, params?: any): string;
}
