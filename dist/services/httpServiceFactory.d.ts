import { UserService } from "./userService.js";
import { AccountService } from "./accountService.js";
import { AuthService } from "./authService.js";
import { FeeService } from "./feeService.js";
import { InstrumentService } from "./instrumentService.js";
import { ProductService } from "./productService.js";
import { ReportService } from "./reportService.js";
import { SystemService } from "./systemService.js";
import { TradingService } from "./tradingService.js";
export declare class HttpServiceFactory {
    #private;
    constructor(domain?: string);
    authenticate(params: {
        ApiPublicKey: string;
        ApiSecretKey: string;
        UserId: string;
    }): Promise<void>;
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
    newTradingService(): TradingService;
    newUserService(): UserService;
}
