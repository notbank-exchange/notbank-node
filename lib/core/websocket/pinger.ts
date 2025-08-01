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
        console.log("ping")
        await Promise.race([
          connection.apRequest<void, Pong>(Endpoint.PING, RequestType.NONE),
          new Promise((resolve, reject) => setTimeout(reject, 5_000))
        ])
        console.log("pong")
      } catch (e) {
        console.log("no pong. timed out")
        await restarter.reconnect()
        return
      }
    }, 5_000)
    this.interval.unref()
  }

  stop() {
    if (!this.interval) { return }
    console.log("clearing ping interval")
    clearTimeout(this.interval)
  }
}