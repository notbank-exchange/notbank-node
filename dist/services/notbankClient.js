import { NotbankError } from "../models/index.js";
import { HttpServiceFactory } from "./httpServiceFactory.js";
import { WebsocketServiceFactory } from "./websocketServiceFactory.js";
const DEFAULT_DOMAIN = "api.notbank.exchange";
export class NotbankClient {
    constructor(params) {
        this.accountService = params.accountService;
        this.authService = params.authService;
        this.feeService = params.feeService;
        this.instrumentService = params.instrumentService;
        this.productService = params.productService;
        this.reportService = params.reportService;
        this.getSubscriptionService = () => params.getSubscriptionService();
        this.systemService = params.systemService;
        this.tradingService = params.tradingService;
        this.userService = params.userService;
        this.walletService = params.walletService;
        this.quoteService = params.quoteService;
        this.authenticateUser = params.authenticate;
        this.connect = params.connect;
        this.close = params.close;
    }
    getAccountService() {
        return this.accountService;
    }
    getAuthService() {
        return this.authService;
    }
    getFeeService() {
        return this.feeService;
    }
    getInstrumentService() {
        return this.instrumentService;
    }
    getProductService() {
        return this.productService;
    }
    getReportService() {
        return this.reportService;
    }
    getSystemService() {
        return this.systemService;
    }
    getTradingService() {
        return this.tradingService;
    }
    getUserService() {
        return this.userService;
    }
    getWalletService() {
        return this.walletService;
    }
    getQuoteService() {
        return this.quoteService;
    }
}
NotbankClient.Factory = class Factory {
    static createRestClient(domain = DEFAULT_DOMAIN) {
        var factory = new HttpServiceFactory(domain);
        return new NotbankClient({
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: () => { throw new NotbankError("NotbankError. subcription service only exists for websocket connection", -1); },
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            quoteService: factory.newQuoteService(),
            authenticate: params => factory.authenticateUser(params),
            connect: () => Promise.resolve(null),
            close: () => Promise.resolve(null)
        });
    }
    static createWebsocketClient(configuration) {
        var factory = new WebsocketServiceFactory(configuration);
        return new NotbankClient({
            accountService: factory.newAccountService(),
            authService: factory.newAuthService(),
            feeService: factory.newFeeService(),
            instrumentService: factory.newInstrumentService(),
            productService: factory.newProductService(),
            reportService: factory.newReportService(),
            getSubscriptionService: () => factory.getSubscriptionService(),
            systemService: factory.newSystemService(),
            tradingService: factory.newTradingService(),
            userService: factory.newUserService(),
            walletService: factory.newWalletService(),
            quoteService: factory.newQuoteService(),
            authenticate: params => factory.authenticateUser(params),
            connect: () => factory.connect(),
            close: () => factory.close()
        });
    }
};
