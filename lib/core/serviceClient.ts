import { MessageFrame } from "./websocket/messageFrame";
import { SubscriptionHandler } from "./websocket/subscriptionHandler";

export interface ServiceClient {
  request<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2>;
  authenticateUser(params: {
    ApiKey: string;
    Signature: string;
    UserId: string;
    Nonce: string;
  }): Promise<void>;
  subscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    subscriptionHandlers: SubscriptionHandler<MessageFrame>[]
  ): Promise<void>;
  unsubscribe<T>(
    endpoint: string,
    firstIdentifier: number | null,
    secondIdentifier: number | null,
    message: T,
    callback_ids: string[]
  ): Promise<void>;
}

export enum RequestType {
  POST = 0,
  GET = 1,
  NONE = 2
}
