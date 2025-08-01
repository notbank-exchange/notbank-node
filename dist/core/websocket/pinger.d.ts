import { Restarter } from "./restarter.js";
import { WebsocketConnection } from "./websocketConnection.js";
export declare class Pinger {
    private interval?;
    startPing(connection: WebsocketConnection, restarter: Restarter): void;
    stop(): void;
}
