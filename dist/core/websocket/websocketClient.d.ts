import { MessageFrame } from "./messageFrame.js";
import { SubscriptionHandler } from "./subscriptionHandler.js";
import { RequestType, ServiceConnection } from "../serviceClient.js";
import { AuthenticateUserRequest } from "../../models/index.js";
import { WebsocketHooks } from "./websocketHooks.js";
export declare class WebsocketConnection implements ServiceConnection {
    #private;
    constructor(params: {
        domain: string;
        peekMessageIn?: (message: MessageFrame) => void;
        peekMessageOut?: (message: MessageFrame) => void;
    });
    nbRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    connect(hooks?: WebsocketHooks): Promise<void>;
    close(): void;
    get readyState(): number;
    apRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2>;
    subscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, subscriptionCallbacks: SubscriptionHandler<MessageFrame>[]): Promise<void>;
    unsubscribe<T>(endpoint: string, firstIdentifier: number | null, secondIdentifier: number | null, message: T, callbackIds: string[]): Promise<void>;
    closeConnection(): void;
    authenticateUser(params: AuthenticateUserRequest): Promise<void>;
}
