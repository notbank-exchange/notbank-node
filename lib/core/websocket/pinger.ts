import { Endpoint } from "../../constants/endpoints";
import { RequestType } from "../serviceClient";
import { WebsocketConnection } from "./websocketConnection";

export class Pinger {
  private interval?: NodeJS.Timeout

  startPing(connection: WebsocketConnection, reconnect: () => Promise<void>) {
    this.stop()
    this.interval = setInterval(async () => {
      try {
        await Promise.race([
          connection.apRequest(Endpoint.PING, RequestType.NONE),
          new Promise((resolve, reject) => setTimeout(reject, 10_000))
        ])
      } catch (e) {
        await reconnect()
      }
    }, 10_000)
    this.interval.unref()
  }

  stop() {
    if (!this.interval) { return }
    clearTimeout(this.interval)
  }
}