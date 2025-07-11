import { WebsocketConnection } from "../core/websocket/websocketClient";
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
import { WalletService } from "./walletService";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class WebsocketServiceFactory {
  #websocketConnection: WebsocketConnection;
  #subcriptionService?: SubscriptionService

  constructor(params?: {
    domain?: string;
    peekMessageIn?: (message: MessageFrame) => void;
    peekMessageOut?: (message: MessageFrame) => void;
  }) {
    const finalDomain = params?.domain || DEFAULT_DOMAIN;

    this.#websocketConnection = new WebsocketConnection({
      domain: finalDomain,
      peekMessageIn: params?.peekMessageIn,
      peekMessageOut: params?.peekMessageOut
    });
  }

  connect(hooks: WebsocketHooks = {}): Promise<void> {
    return this.#websocketConnection.connect(hooks);
  }

  close() {
    this.#websocketConnection.close();
  }

  get isConnecting(): boolean {
    return this.#websocketConnection.readyState === WebSocket.CONNECTING;
  }

  get isConnected(): boolean {
    return this.#websocketConnection.readyState === WebSocket.OPEN;
  }

  get isClosing(): boolean {
    return this.#websocketConnection.readyState === WebSocket.CLOSING;
  }

  get isClosed(): boolean {
    return this.#websocketConnection.readyState === WebSocket.CLOSED;
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
    await this.#websocketConnection.authenticateUser({
      APIKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  newAccountService(): AccountService {
    return new AccountService(this.#websocketConnection);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#websocketConnection);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#websocketConnection);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#websocketConnection);
  }

  newProductService(): ProductService {
    return new ProductService(this.#websocketConnection);
  }

  newReportService(): ReportService {
    return new ReportService(this.#websocketConnection);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#websocketConnection);
  }

  getSubscriptionService(): SubscriptionService {
    if (this.#subcriptionService) {
      return this.#subcriptionService
    }
    this.#subcriptionService = new SubscriptionService(this.#websocketConnection);
    return this.#subcriptionService
  }

  newTradingService(): TradingService {
    return new TradingService(this.#websocketConnection);
  }

  newUserService(): UserService {
    return new UserService(this.#websocketConnection);
  }

  newWalletService(): WalletService {
    return new WalletService(this.#websocketConnection);
  }
}
