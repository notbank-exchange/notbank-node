import { WebsocketHooks } from "../core/websocket/websocketHooks.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { ReportService } from "./reportService.js";
import { SubscriptionService } from "./subscriptionService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
import { UserService } from "./userService.js";
import { WalletService } from "./walletService.js";
export declare class NotbankClient {
    #private;
    constructor(params: {
        accountService: AccountService;
        authService: AuthService;
        feeService: FeeService;
        instrumentService: InstrumentService;
        productService: ProductService;
        reportService: ReportService;
        getSubscriptionService: () => SubscriptionService;
        systemService: SystemService;
        tradingService: TradingService;
        userService: UserService;
        walletService: WalletService;
        authenticate: (authParams: {
            ApiPublicKey: string;
            ApiSecretKey: string;
            UserId: string;
        }) => Promise<void>;
        connect: (hooks: WebsocketHooks) => Promise<void>;
        close: () => void;
    });
    static Factory: {
        new (): {};
        createRestClient(domain?: string): NotbankClient;
        createWebsocketClient(domain?: string): NotbankClient;
    };
    authenticateUser(params: {
        ApiPublicKey: string;
        ApiSecretKey: string;
        UserId: string;
    }): Promise<void>;
    getAccountService(): AccountService;
    getAuthService(): AuthService;
    getFeeService(): FeeService;
    getInstrumentService(): InstrumentService;
    getProductService(): ProductService;
    getReportService(): ReportService;
    getSubscriptionService(): SubscriptionService;
    getSystemService(): SystemService;
    getTradingService(): TradingService;
    getUserService(): UserService;
    getWalletService(): WalletService;
    connect(hooks?: WebsocketHooks): Promise<void>;
    close(): void;
}
