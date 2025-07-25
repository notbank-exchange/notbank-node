import { NotbankError } from "../../models";
import { Pinger } from "./pinger";
import { Reauther } from "./reauther";
import { Resubscriber } from "./resubscriber";
import { WebsocketConnection } from "./websocketConnection";
import { WebsocketConnectionConfiguration } from "./websocketConnectionConfiguration";

export class Restarter {
  #reconnecting: boolean
  #connection: WebsocketConnection
  #connectionConfiguration: WebsocketConnectionConfiguration
  #pinger: Pinger
  #resubscriber: Resubscriber
  #reauther: Reauther
  #closeRequested: boolean;

  constructor(params: { connectionConfiguration: WebsocketConnectionConfiguration }) {
    this.#reconnecting = false
    this.#connectionConfiguration = params.connectionConfiguration
    this.#pinger = new Pinger()
    this.#resubscriber = new Resubscriber()
    this.#reauther = new Reauther()
    this.#connection = this.#newConnection()
    this.#closeRequested = false
  }

  getResubscriber(): Resubscriber {
    return this.#resubscriber
  }

  getReauther(): Reauther {
    return this.#reauther
  }

  getConnection(): WebsocketConnection {
    if (this.#reconnecting) {
      throw new NotbankError("unable to make notbank request. websocket reconnecting", -1)
    }
    return this.#connection
  }

  async reconnect(): Promise<void> {
    if (this.#reconnecting || this.#closeRequested) { return }
    this.#reconnecting = true
    this.closeCurrentConnection()
    this.#connection = this.#newConnection()
    await this.#connect();
    this.#reauther.makeAuthentication(this.#connection)
    this.#resubscriber.makeSubscriptions(this.#connection)
    this.#pinger.startPing(this.#connection, this.reconnect)
    this.#reconnecting = false
  }

  async #connect() {
    while (true) {
      try {
        await Promise.race([
          this.#connection.connect(),
          new Promise((resolve, reject) => setTimeout(reject, 10_000))
        ]);
        return
      } catch (e) {
        // try again
      }
    }
  }

  #newConnection(): WebsocketConnection {
    return new WebsocketConnection({
      domain: this.#connectionConfiguration.domain,
      peekMessageIn: this.#connectionConfiguration.peekMessageIn,
      peekMessageOut: this.#connectionConfiguration.peekMessageOut,
      websocketHooks: {
        onMessage: this.#connectionConfiguration.websocketHooks?.onMessage,
        onOpen: this.#connectionConfiguration.websocketHooks?.onOpen,
        onError: (event) => {
          if (this.#reconnecting) { return }
          this.#connectionConfiguration.websocketHooks?.onError(event)
        },
        onClose: (event) => {
          if (this.#reconnecting || !this.#closeRequested) { return }
          this.#connectionConfiguration.websocketHooks?.onClose(event)
        },
      }
    })
  }

  closeCurrentConnection(): Promise<void> {
    this.#pinger.stop()
    return this.getConnection().close()
  }

  close(): Promise<void> {
    this.#closeRequested = true
    return this.closeCurrentConnection()
  }
}