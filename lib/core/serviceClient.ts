import { MessageFrame } from "./websocket/messageFrame";
import { SubscriptionHandler } from "./websocket/subscriptionHandler";

export interface ServiceClient {
  apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2>;
  nbRequest<T1, T2>(
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
  NONE = 0,
  POST = 1,
  GET = 2,
  DELETE = 3,
}