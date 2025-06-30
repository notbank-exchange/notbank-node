import { AuthenticateUserRequest } from "../../models/index.js";
import { RequestType, ServiceClient } from "../serviceClient.js";
import { MessageFrame } from "../websocket/messageFrame.js";
import { ResponseHandler } from "../websocket/responseHandler.js";
import { SubscriptionHandler } from "../websocket/subscriptionHandler.js";
export declare class HttpClient implements ServiceClient {
    #private;
    constructor(domain: string);
    request<T1, T2>(endpoint: string, requestType: RequestType, params?: T1): Promise<T2>;
    requestPost<T1, T2>(endpoint: string, message?: T1): Promise<T2>;
    requestGet<T1, T2>(endpoint: string, config?: {
        params?: T1;
        extraHeaders?: any;
    }): Promise<T2>;
    private handleResponse;
    getHeaders(extraHeaders?: any): any;
    getUrlWithSearchParams(endpoint: string, params?: any): string;
    authenticate(params: AuthenticateUserRequest): Promise<void>;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callback_ids: string[]): Promise<void>;
    setResponseHandler<T1, T2>(responseHandler: ResponseHandler<T1, T2>): void;
    setResponseHandlers<T>(responseHandlers: SubscriptionHandler<T>[]): void;
    getUrl(endpoint: string): string;
}
