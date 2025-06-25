import { HttpServiceFactory } from "./services/httpServiceFactory";
import { WebsocketServiceFactory } from "./services/websocketServicesFactory";
import * as models from "./models";

export * as models from "./models";

export const HttpClient = HttpServiceFactory;

export const WebsocketClient = WebsocketServiceFactory;

export default {
  HttpClient: HttpServiceFactory,
  WebsocketClient: WebsocketServiceFactory,
  models,
};
