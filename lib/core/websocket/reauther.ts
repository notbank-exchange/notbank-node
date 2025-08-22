import { WebsocketConnection } from "./websocketConnection";

export class Reauther {
  private authenticateFn?: (WebsocketConnection) => void

  constructor() {
    this.authenticateFn = null
  }

  updateAuthentication(authenticateFn: (connection: WebsocketConnection) => void) {
    this.authenticateFn = authenticateFn
  }

  removeAuthentication() {
    this.authenticateFn = null
  }

  makeAuthentication(connection: WebsocketConnection) {
    if (this.authenticateFn === null) {
      return
    }
    this.authenticateFn(connection)
  }
}