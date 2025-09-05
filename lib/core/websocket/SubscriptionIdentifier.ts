import { WebSocketEndpoint } from "../../constants/endpoints";
import { MessageFrame } from "./messageFrame";

export class SubscriptionIdentifier {
  static #mapping: Partial<
    Record<WebSocketEndpoint, (eventName: string, payloadStr: string) => string>
  > = {
      [WebSocketEndpoint.SUBSCRIBE_LEVEL1]: this.#getLevel1TickerName,
      [WebSocketEndpoint.UPDATE_LEVEL1]: this.#getLevel1TickerName,
      [WebSocketEndpoint.SUBSCRIBE_LEVEL2]: this.#getLevel2TickerName,
      [WebSocketEndpoint.UPDATE_LEVEL2]: this.#getLevel2TickerName,
      [WebSocketEndpoint.SUBSCRIBE_TICKER]: this.#getTickerName,
      [WebSocketEndpoint.UPDATE_TICKER]: this.#getTickerName,
      [WebSocketEndpoint.SUBSCRIBE_TRADES]: this.#getSocketTradeName,
      [WebSocketEndpoint.SUBSCRIBE_ORDER_STATE_EVENTS]: this.#getOrderEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_TRANSACTION]: this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_WITHDRAW_TICKET_UPDATE]:
        this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_POSITION]:
        this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_ORDER_TRADE]: this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_ORDER_STATE]: this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT_TICKET_UPDATE]:
        this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_ACCOUNT_INFO_UPDATE]:
        this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_CANCEL_ORDER_REJECT]:
        this.#getAccountEventName,
      [WebSocketEndpoint.ACCOUNT_EVENT_DEPOSIT]: this.#getAccountEventName,
    };

  static get(
    eventName: string,
    firstIdentifier: number | null = null,
    secondIdentifier: number | null = null,
  ) {
    return (
      eventName +
      SubscriptionIdentifier.#getIdPart(firstIdentifier) +
      SubscriptionIdentifier.#getIdPart(secondIdentifier)
    );
  }

  static #getIdPart(firstIdentifier: number) {
    return firstIdentifier != null ? "_" + firstIdentifier : "";
  }

  static getFromMessageFrame(message: MessageFrame): string {
    return this.#mapping[message.n]?.(message.n, message.o) ?? message.n;
  }

  static #getTickerName(eventName: string, payloadStr: string): string {
    const instrumentId = SubscriptionIdentifier.#getValueFromList(
      payloadStr,
      8,
    );
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  }

  static #getLevel1TickerName(eventName: string, payloadStr: string): string {
    return (
      eventName + "_" + SubscriptionIdentifier.#getInstrumentedId(payloadStr)
    );
  }

  static #getLevel2TickerName(eventName: string, payloadStr: string): string {
    let instrumentId = SubscriptionIdentifier.#getValueFromList(payloadStr, 7);
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  }

  static #getSocketTradeName(eventName: string, payloadStr: string): string {
    const instrumentId = SubscriptionIdentifier.#getValueFromList(
      payloadStr,
      1,
    );
    if (instrumentId == null) {
      return eventName;
    }
    return eventName + "_" + instrumentId;
  }

  static #getAccountEventName(eventName: string, payloadStr: string): string {
    let accountId = SubscriptionIdentifier.#getAccountId(payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    accountId = this.#getAccountIdFromAccount(payloadStr);
    if (accountId != null) {
      return eventName + "_" + accountId;
    }
    return eventName;
  }

  static #getOrderEventName(eventName: string, payloadStr: string): string {
    const data: { Instrument?: string; AccountId: number } =
      JSON.parse(payloadStr);
    let identifier = eventName + "_" + data.AccountId;
    if (data.Instrument) {
      identifier = identifier + "_" + data.Instrument;
    }
    return identifier;
  }

  static #getValueFromList(
    payloadStr: string,
    index: number,
  ): string | number | null {
    const data: any[][] = JSON.parse(payloadStr);
    if (data.length == 0) {
      return null;
    }
    if (data[0].length <= index) {
      return null;
    }
    return data[0][index];
  }

  static #getInstrumentedId(payloadStr: string): string {
    const data: { InstrumentId: string } = JSON.parse(payloadStr);
    return data.InstrumentId;
  }

  static #getAccountId(payloadStr: string): string {
    const data: { AccountId: string } = JSON.parse(payloadStr);
    return data.AccountId;
  }

  static #getAccountIdFromAccount(payloadStr: string): string {
    const data: { Account: string } = JSON.parse(payloadStr);
    return data.Account;
  }
}
