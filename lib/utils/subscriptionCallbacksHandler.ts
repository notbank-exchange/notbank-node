import { MessageFrame } from "../core/websocket/messageFrame";
import { SubscriptionHandler } from "../core/websocket/subscriptionHandler";

export function newMaybeHandler<T>(
  eventName: string,
  recordHandler: ((record: T) => void) | null,
): SubscriptionHandler<MessageFrame> | null {
  if (recordHandler == null) {
    return null;
  }
  return newHandler(eventName, recordHandler);
}

export function newHandler<T>(
  eventName: string,
  recordHandler: (record: T) => void,
): SubscriptionHandler<MessageFrame> {
  return {
    eventName: eventName,
    eventHandler: (messageFrame) => recordHandler(parseRecord(messageFrame.o)),
  };
}

export function parseRecord<T>(jsonData: string): T {
  return JSON.parse(jsonData) as T;
}