import { MessageFrame } from "./messageFrame";

export class CallbackManager {
  #subscriptionCallbacks: {
    [eventName: string]: (message: MessageFrame) => void;
  };
  #callbacks: { [sequenceNumber: number]: (message: MessageFrame) => void };
  #sequenceNumber: number;

  constructor() {
    this.#subscriptionCallbacks = {};
    this.#callbacks = {};
    this.#sequenceNumber = 2;
  }

  putCallback(callback: (event: MessageFrame) => void): number {
    var sequenceNumber = this.#sequenceNumber;
    this.#callbacks[sequenceNumber] = callback;
    this.#sequenceNumber += 2;
    return sequenceNumber;
  }

  popCallback(sequenceNumber: number): (event: MessageFrame) => void {
    let callback = this.#callbacks[sequenceNumber];
    delete this.#callbacks[sequenceNumber];
    return callback != null ? callback : (o) => null;
  }

  addSubscriptionCallback(
    callbackId: string,
    callback: (event: MessageFrame) => void,
  ): void {
    this.#subscriptionCallbacks[callbackId] = callback;
  }

  getSubscriptionCallback(
    callbackIdentifier: string,
  ): (event: MessageFrame) => void {
    let handler = this.#subscriptionCallbacks[callbackIdentifier];
    return handler || null;
  }

  removeSubscriptionCallback(callbackIds: string[]): void {
    callbackIds.map(
      (callbackId) => delete this.#subscriptionCallbacks[callbackId],
    );
  }
}
