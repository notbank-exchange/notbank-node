import { Endpoint } from "../../constants/endpoints";
import { Pong } from "../../models";
import { RequestType } from "../serviceClient";
import { Restarter } from "./restarter";
import { WebsocketConnection } from "./websocketConnection";

export class Pinger {
  private pingIntervalMillis: number
  private pingTimeoutMillis: number
  private interval?: NodeJS.Timeout

  constructor(
    pingIntervalMillis: number = 10_000,
    pingTimeoutMillis: number = 5_000) {
    this.pingIntervalMillis = pingIntervalMillis
    this.pingTimeoutMillis = pingTimeoutMillis
  }

  startPing(connection: WebsocketConnection, restarter: Restarter) {
    this.stop()
    this.interval = setInterval(async () => {
      try {
        await Promise.race([
          connection.apRequest<void, Pong>(Endpoint.PING, RequestType.NONE),
          new Promise((resolve, reject) => setTimeout(reject, this.pingTimeoutMillis))
        ])

      } catch (e) {
        await restarter.reconnect()
        return
      }
    }, this.pingIntervalMillis)
    this.interval.unref()
  }

  stop() {
    if (!this.interval) { return }
    clearTimeout(this.interval)
  }
}