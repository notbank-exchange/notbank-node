import { UserService } from "./userService";
import { AccountService } from "./accountService";
import { AuthService } from "./authService";
import { FeeService } from "./feeService";
import { InstrumentService } from "./instrumentService";
import { ProductService } from "./productService";
import { ReportService } from "./reportService";
import { SystemService } from "./systemService";
import { TradingService } from "./tradingService";
import { getNonce, sign } from "../core/hmac";
import { HttpConnection } from "../core/http/httpClient";
import { WalletService } from "./walletService";
import { SubscriptionService } from "./subscriptionService";
import { NotbankError } from "../models/notbankError";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class HttpServiceFactory {
  #httpConnection: HttpConnection;

  constructor(domain?: string) {
    const finalDomain = domain || DEFAULT_DOMAIN;
    this.#httpConnection = new HttpConnection(finalDomain);
  }

  async authenticate(params: {
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
    await this.#httpConnection.authenticate({
      ApiKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
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
    await this.#httpConnection.authenticateUser({
      ApiKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  newAccountService(): AccountService {
    return new AccountService(this.#httpConnection);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#httpConnection);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#httpConnection);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#httpConnection);
  }

  newProductService(): ProductService {
    return new ProductService(this.#httpConnection);
  }

  newReportService(): ReportService {
    return new ReportService(this.#httpConnection);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#httpConnection);
  }

  newTradingService(): TradingService {
    return new TradingService(this.#httpConnection);
  }

  newUserService(): UserService {
    return new UserService(this.#httpConnection);
  }

  newWalletService(): WalletService {
    return new WalletService(this.#httpConnection)
  }
}
