import { MessageFrame } from "./messageFrame";
import { WebsocketHooks } from "./websocketHooks";

export interface WebsocketConnectionConfiguration {
  domain?: string;
  websocketHooks?: WebsocketHooks;
  peekMessageIn?: (message: MessageFrame) => void;
  peekMessageOut?: (message: MessageFrame) => void;
  withoutReconect?: boolean
}