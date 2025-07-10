import { WebsocketHooks } from "../core/websocket/websocketHooks";
import { NotbankError } from "../models";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { HttpServiceFactory } from "./httpServiceFactory";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { ReportService } from "./reportService";
import { SubscriptionService } from "./subscriptionService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { UserService } from "./userService";
import { WalletService } from "./walletService";
import { WebsocketServiceFactory } from "./websocketServicesFactory";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class NotbankClient {
  #accountService: AccountService
  #authService: AuthService
  #feeService: FeeService
  #instrumentService: InstrumentService
  #productService: ProductService
  #reportService: ReportService
  #getSubscriptionService: () => SubscriptionService
  #systemService: SystemService
  #tradingService: TradingService
  #userService: UserService
  #walletService: WalletService
  #authenticate: (params: {
    ApiPublicKey: string,
    ApiSecretKey: string,
    UserId: string,
  }) => Promise<void>
  #connect: (hooks: WebsocketHooks) => void
  #close: () => void

  constructor(
    params: {
      accountService: AccountService,
      authService: AuthService,
      feeService: FeeService,
      instrumentService: InstrumentService,
      productService: ProductService,
      reportService: ReportService,
      getSubscriptionService: () => SubscriptionService
      systemService: SystemService,
      tradingService: TradingService,
      userService: UserService,
      walletService: WalletService,
      authenticate: (params: {
        ApiPublicKey: string,
        ApiSecretKey: string,
        UserId: string,
      }) => Promise<void>,
      connect: (hooks: WebsocketHooks) => void,
      close: () => void,
    }
  ) {
    this.#accountService = params.accountService
    this.#authService = params.authService
    this.#feeService = params.feeService
    this.#instrumentService = params.instrumentService
    this.#productService = params.productService
    this.#reportService = params.reportService
    this.#getSubscriptionService = params.getSubscriptionService
    this.#systemService = params.systemService
    this.#tradingService = params.tradingService
    this.#userService = params.userService
    this.#walletService = params.walletService
    this.#authenticate = params.authenticate
    this.#connect = params.connect
    this.#close = params.close
  }


  static Factory = class Factory {
    static createRestClient(domain: string = DEFAULT_DOMAIN) {
      var factory = new HttpServiceFactory(domain)
      return new NotbankClient(
        {
          accountService: factory.newAccountService(),
          authService: factory.newAuthService(),
          feeService: factory.newFeeService(),
          instrumentService: factory.newInstrumentService(),
          productService: factory.newProductService(),
          reportService: factory.newReportService(),
          getSubscriptionService: () => { throw new NotbankError("subcription service only exists for websocket connection", 0, "") },
          systemService: factory.newSystemService(),
          tradingService: factory.newTradingService(),
          userService: factory.newUserService(),
          walletService: factory.newWalletService(),
          authenticate: factory.authenticateUser,
          connect: _ => { },
          close: () => { }
        }
      )
    }
    static createWebsocketClient(domain: string = DEFAULT_DOMAIN) {
      var factory = new WebsocketServiceFactory({ domain })
      return new NotbankClient(
        {
          accountService: factory.newAccountService(),
          authService: factory.newAuthService(),
          feeService: factory.newFeeService(),
          instrumentService: factory.newInstrumentService(),
          productService: factory.newProductService(),
          reportService: factory.newReportService(),
          getSubscriptionService: factory.getSubscriptionService,
          systemService: factory.newSystemService(),
          tradingService: factory.newTradingService(),
          userService: factory.newUserService(),
          walletService: factory.newWalletService(),
          authenticate: factory.authenticateUser,
          connect: factory.connect,
          close: factory.close
        }
      )
    }
  }

  async authenticateUser(params: {
    ApiPublicKey: string;
    ApiSecretKey: string;
    UserId: string;
  }): Promise<void> {
    this.#authenticate(params)
  }

  getAccountService(): AccountService {
    return this.#accountService
  }

  getAuthService(): AuthService {
    return this.#authService
  }

  getFeeService(): FeeService {
    return this.#feeService
  }

  getInstrumentService(): InstrumentService {
    return this.#instrumentService
  }

  getProductService(): ProductService {
    return this.#productService
  }

  getReportService(): ReportService {
    return this.#reportService
  }

  getSubscriptionService(): SubscriptionService {
    return this.#getSubscriptionService()
  }

  getSystemService(): SystemService {
    return this.#systemService
  }

  getTradingService(): TradingService {
    return this.#tradingService
  }

  getUserService(): UserService {
    return this.#userService
  }

  getWalletService(): WalletService {
    return this.#walletService
  }

  connect(hooks: WebsocketHooks = {}) {
    this.#connect(hooks)
  }

  close() {
    this.#close()
  }
}
