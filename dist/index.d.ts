import { HttpServiceFactory } from "./services/httpServiceFactory.js";
import { WebsocketServiceFactory } from "./services/websocketServicesFactory.js";
import * as models from "./models/index.js";
export declare const HttpClient: typeof HttpServiceFactory;
export declare const WebsocketClient: typeof WebsocketServiceFactory;
declare const _default: {
    HttpClient: typeof HttpServiceFactory;
    WebsocketClient: typeof WebsocketServiceFactory;
    models: typeof models;
};
export default _default;
