import { SubscriptionData } from "./subscriptionData";
import { SubscriptionIdentifier } from "./SubscriptionIdentifier";
import { WebsocketConnection } from "./websocketConnection";

export class Resubscriber {
  private currentSubscriptions: SubscriptionData[]

  constructor() {
    this.currentSubscriptions = []
  }
  saveSubscription(data: SubscriptionData) {
    this.currentSubscriptions.push(data)
  }

  removeSubscription(callbackIds: string[]): void {
    for (let i = 0; i < callbackIds.length; i++) {
      for (let j = 0; j < this.currentSubscriptions.length; j++) {
        var isFromSubscription = this.#hasCallbackId(this.currentSubscriptions[j], callbackIds[i])
        if (isFromSubscription) {
          this.currentSubscriptions.splice(j, 1)
          return
        }
      }
    }
  }

  #hasCallbackId(data: SubscriptionData, callbackId: string): boolean {
    var subscriptionCallbackId = SubscriptionIdentifier.get(data.endpoint, data.firstIdentifier, data.secondIdentifier)
    return subscriptionCallbackId === callbackId
  }

  makeSubscriptions(connection: WebsocketConnection): void {
    this.currentSubscriptions.forEach(data => connection.subscribe(
      data.endpoint,
      data.firstIdentifier,
      data.secondIdentifier, data.message,
      data.subscriptionHandlers))
  }
}