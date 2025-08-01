import { Endpoint } from "../../constants/endpoints";
import { Pong } from "../../models";
import { RequestType } from "../serviceClient";
import { Restarter } from "./restarter";
import { WebsocketConnection } from "./websocketConnection";

export class Pinger {
  private interval?: NodeJS.Timeout

  startPing(connection: WebsocketConnection, restarter: Restarter) {
    this.stop()
    this.interval = setInterval(async () => {
      try {
        await Promise.race([
          connection.apRequest<void, Pong>(Endpoint.PING, RequestType.NONE),
          new Promise((resolve, reject) => setTimeout(reject, 5_000))
        ])
        
      } catch (e) {
        await restarter.reconnect()
        return
      }
    }, 5_000)
    this.interval.unref()
  }

  stop() {
    if (!this.interval) { return }
    clearTimeout(this.interval)
  }
}