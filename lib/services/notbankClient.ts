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
import { QuoteService } from "./quoteService";
import { WebsocketServiceFactory } from "./websocketServiceFactory";
import { WebsocketConnectionConfiguration } from "../core/websocket/websocketConnectionConfiguration";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class NotbankClient {
  accountService: AccountService
  authService: AuthService
  feeService: FeeService
  instrumentService: InstrumentService
  productService: ProductService
  reportService: ReportService
  getSubscriptionService: () => SubscriptionService
  systemService: SystemService
  tradingService: TradingService
  userService: UserService
  walletService: WalletService
  quoteService: QuoteService
  authenticateUser: (params: {
    ApiPublicKey: string,
    ApiSecretKey: string,
    UserId: string,
  }) => Promise<void>
  connect: (hooks?: WebsocketHooks) => Promise<void>
  close: () => void

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
      quoteService: QuoteService,
      authenticate: (authParams: {
        ApiPublicKey: string,
        ApiSecretKey: string,
        UserId: string,
      }) => Promise<void>,
      connect: (hooks: WebsocketHooks) => Promise<void>,
      close: () => void,
    }
  ) {
    this.accountService = params.accountService
    this.authService = params.authService
    this.feeService = params.feeService
    this.instrumentService = params.instrumentService
    this.productService = params.productService
    this.reportService = params.reportService
    this.getSubscriptionService = () => params.getSubscriptionService()
    this.systemService = params.systemService
    this.tradingService = params.tradingService
    this.userService = params.userService
    this.walletService = params.walletService
    this.quoteService = params.quoteService
    this.authenticateUser = params.authenticate
    this.connect = params.connect
    this.close = params.close
  }


  static Factory = class Factory {
    static createRestClient(domain: string = DEFAULT_DOMAIN) {
      var factory = new HttpServiceFactory(domain)
      return new NotbankClient({
        accountService: factory.newAccountService(),
        authService: factory.newAuthService(),
        feeService: factory.newFeeService(),
        instrumentService: factory.newInstrumentService(),
        productService: factory.newProductService(),
        reportService: factory.newReportService(),
        getSubscriptionService: () => { throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1) },
        systemService: factory.newSystemService(),
        tradingService: factory.newTradingService(),
        userService: factory.newUserService(),
        walletService: factory.newWalletService(),
        quoteService: factory.newQuoteService(),
        authenticate: params => factory.authenticateUser(params),
        connect: () => null,
        close: () => null
      })
    }
    static createWebsocketClient(configuration?: WebsocketConnectionConfiguration) {
      var factory = new WebsocketServiceFactory(configuration)
      return new NotbankClient(
        {
          accountService: factory.newAccountService(),
          authService: factory.newAuthService(),
          feeService: factory.newFeeService(),
          instrumentService: factory.newInstrumentService(),
          productService: factory.newProductService(),
          reportService: factory.newReportService(),
          getSubscriptionService: ()=>factory.getSubscriptionService(),
          systemService: factory.newSystemService(),
          tradingService: factory.newTradingService(),
          userService: factory.newUserService(),
          walletService: factory.newWalletService(),
          quoteService: factory.newQuoteService(),
          authenticate: params => factory.authenticateUser(params),
          connect: () => factory.connect(),
          close: () => factory.close()
        }
      )
    }
  }

  getAccountService(): AccountService {
    return this.accountService
  }

  getAuthService(): AuthService {
    return this.authService
  }

  getFeeService(): FeeService {
    return this.feeService
  }

  getInstrumentService(): InstrumentService {
    return this.instrumentService
  }

  getProductService(): ProductService {
    return this.productService
  }

  getReportService(): ReportService {
    return this.reportService
  }


  getSystemService(): SystemService {
    return this.systemService
  }

  getTradingService(): TradingService {
    return this.tradingService
  }

  getUserService(): UserService {
    return this.userService
  }

  getWalletService(): WalletService {
    return this.walletService
  }

  getQuoteService(): QuoteService {
    return this.quoteService
  }
}
