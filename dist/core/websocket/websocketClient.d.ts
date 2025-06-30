import { MessageFrame } from "./messageFrame.js";
import { SubscriptionHandler } from "./subscriptionHandler.js";
import { RequestType, ServiceClient } from "../serviceClient.js";
import { WebsocketHooks } from "./websocketHooks.js";
export declare class WebsocketClient implements ServiceClient {
    #private;
    constructor(params: {
        domain: string;
        peekMessageIn?: (message: MessageFrame) => void;
        peekMessageOut?: (message: MessageFrame) => void;
    });
    connect(hooks?: WebsocketHooks): Promise<void>;
    close(): void;
    get readyState(): number;
    request<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callbackIds: string[]): Promise<void>;
    closeConnection(): void;
    authenticateUser(params: {
        ApiKey: string;
        Signature: string;
        UserId: string;
        Nonce: string;
    }): Promise<void>;
}
