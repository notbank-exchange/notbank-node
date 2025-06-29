import { HttpServiceFactory } from "./services/httpServiceFactory.js";
import { WebsocketServiceFactory } from "./services/websocketServicesFactory.js";
import * as models from "./models/index.js";
export const HttpClient = HttpServiceFactory;
export const WebsocketClient = WebsocketServiceFactory;
export default {
    HttpClient: HttpServiceFactory,
    WebsocketClient: WebsocketServiceFactory,
    models,
};
