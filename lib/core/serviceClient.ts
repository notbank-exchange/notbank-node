import { AuthenticateUserRequest } from "../models/request/authenticateUser";
import { MessageFrame } from "./websocket/messageFrame";
import { SubscriptionHandler } from "./websocket/subscriptionHandler";

export interface ServiceConnection {
  apRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1
  ): Promise<T2>;
  nbRequest<T1, T2>(
    endpoint: string,
    requestType: RequestType,
    message?: T1,
    paged?: boolean,
  ): Promise<T2>;
  authenticateUser(params: AuthenticateUserRequest): Promise<void>;
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
  NONE = "NONE",
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
}