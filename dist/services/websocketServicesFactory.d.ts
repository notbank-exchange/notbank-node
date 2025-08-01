import { MessageFrame } from "../core/websocket/messageFrame.js";
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
export declare class WebsocketServiceFactory {
    #private;
    constructor(params?: {
        domain?: string;
        peekMessageIn?: (message: MessageFrame) => void;
        peekMessageOut?: (message: MessageFrame) => void;
    });
    connect(hooks?: WebsocketHooks): Promise<void>;
    close(): void;
    get isConnecting(): boolean;
    get isConnected(): boolean;
    get isClosing(): boolean;
    get isClosed(): boolean;
    authenticateUser(params: {
        ApiPublicKey: string;
        ApiSecretKey: string;
        UserId: string;
    }): Promise<void>;
    newAccountService(): AccountService;
    newAuthService(): AuthService;
    newFeeService(): FeeService;
    newInstrumentService(): InstrumentService;
    newProductService(): ProductService;
    newReportService(): ReportService;
    newSystemService(): SystemService;
    getSubscriptionService(): SubscriptionService;
    newTradingService(): TradingService;
    newUserService(): UserService;
    newWalletService(): WalletService;
}
