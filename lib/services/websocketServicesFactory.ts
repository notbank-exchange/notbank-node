import { WebsocketClient } from "../core/websocket/websocketClient";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { ReportService } from "./reportService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { UserService } from "./userService";
import { getNonce, sign } from "../core/hmac";
import { WebsocketHooks } from "../core/websocket/websocketHooks";
import { MessageFrame } from "../core/websocket/messageFrame";
import { SubscriptionService } from "./subscriptionService";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class WebsocketServiceFactory {
  #websocketClient: WebsocketClient;

  constructor(params?: {
    domain?: string;
    peekMessageIn?: (message: MessageFrame) => void;
    peekMessageOut?: (message: MessageFrame) => void;
  }) {
    const finalDomain = params?.domain || DEFAULT_DOMAIN;

    this.#websocketClient = new WebsocketClient({
      domain: finalDomain,
      peekMessageIn: params?.peekMessageIn,
      peekMessageOut: params?.peekMessageOut
    });
  }

  connect(hooks: WebsocketHooks = {}): Promise<void> {
    return this.#websocketClient.connect(hooks);
  }

  close() {
    this.#websocketClient.close();
  }

  get isConnecting(): boolean {
    return this.#websocketClient.readyState === WebSocket.CONNECTING;
  }

  get isConnected(): boolean {
    return this.#websocketClient.readyState === WebSocket.OPEN;
  }

  get isClosing(): boolean {
    return this.#websocketClient.readyState === WebSocket.CLOSING;
  }

  get isClosed(): boolean {
    return this.#websocketClient.readyState === WebSocket.CLOSED;
  }

  async authenticateUser(params: {
    ApiPublicKey: string;
    ApiSecretKey: string;
    UserId: string;
  }): Promise<void> {
    var nonce = getNonce();
    var signature = sign(
      params.ApiPublicKey,
      params.ApiSecretKey,
      params.UserId,
      nonce
    );
    await this.#websocketClient.authenticateUser({
      ApiKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  newAccountService(): AccountService {
    return new AccountService(this.#websocketClient);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#websocketClient);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#websocketClient);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#websocketClient);
  }

  newProductService(): ProductService {
    return new ProductService(this.#websocketClient);
  }

  newReportService(): ReportService {
    return new ReportService(this.#websocketClient);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#websocketClient);
  }

  newSubscriptionService(): SubscriptionService {
    return new SubscriptionService(this.#websocketClient);
  }

  newTradingService(): TradingService {
    return new TradingService(this.#websocketClient);
  }

  newUserService(): UserService {
    return new UserService(this.#websocketClient);
  }
}
