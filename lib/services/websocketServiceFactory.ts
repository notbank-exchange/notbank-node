import { getNonce, sign } from "../core/hmac";
import { ServiceConnection } from "../core/serviceClient";
import { Restarter } from "../core/websocket/restarter";
import { RestartingWebsocketConnection } from "../core/websocket/restartingWebsocketConnection";
import { WebsocketConnection } from "../core/websocket/websocketConnection";
import { WebsocketConnectionConfiguration } from "../core/websocket/websocketConnectionConfiguration";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { QuoteService } from "./quoteService";
import { ReportService } from "./reportService";
import { SubscriptionService } from "./subscriptionService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { UserService } from "./userService";
import { WalletService } from "./walletService";


export class WebsocketServiceFactory {
  #serviceConnection: ServiceConnection;
  #getReadyState: () => number
  #subcriptionService?: SubscriptionService

  constructor(configuration?: WebsocketConnectionConfiguration) {
    if (configuration.reconect) {
      var restartingWebsocketConnection = new RestartingWebsocketConnection({
        restarter: new Restarter({ connectionConfiguration: configuration || {} })
      })
      this.#serviceConnection = restartingWebsocketConnection
      this.#getReadyState = restartingWebsocketConnection.getReadyState

    } else {
      var websocketConnection = new WebsocketConnection(configuration);
      this.#serviceConnection = websocketConnection
      this.#getReadyState = () => websocketConnection.readyState

    }
  }

  connect(): Promise<void> {
    return this.#serviceConnection.connect();
  }

  close(): Promise<void> {
    return this.#serviceConnection.close();
  }

  get isConnecting(): boolean {
    return this.#getReadyState() === WebSocket.CONNECTING;
  }

  get isConnected(): boolean {
    return this.#getReadyState() === WebSocket.OPEN;
  }

  get isClosing(): boolean {
    return this.#getReadyState() === WebSocket.CLOSING;
  }

  get isClosed(): boolean {
    return this.#getReadyState() === WebSocket.CLOSED;
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
    await this.#serviceConnection.authenticateUser({
      APIKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  newAccountService(): AccountService {
    return new AccountService(this.#serviceConnection);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#serviceConnection);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#serviceConnection);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#serviceConnection);
  }

  newProductService(): ProductService {
    return new ProductService(this.#serviceConnection);
  }

  newReportService(): ReportService {
    return new ReportService(this.#serviceConnection);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#serviceConnection);
  }

  getSubscriptionService(): SubscriptionService {
    if (this.#subcriptionService) {
      return this.#subcriptionService
    }
    this.#subcriptionService = new SubscriptionService(this.#serviceConnection);
    return this.#subcriptionService
  }

  newTradingService(): TradingService {
    return new TradingService(this.#serviceConnection);
  }

  newUserService(): UserService {
    return new UserService(this.#serviceConnection);
  }

  newWalletService(): WalletService {
    return new WalletService(this.#serviceConnection);
  }

  newQuoteService(): QuoteService {
    return new QuoteService(this.#serviceConnection);
  }
}
