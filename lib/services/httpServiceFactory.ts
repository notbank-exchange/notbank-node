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
import { HttpClient } from "../core/http/httpClient";

const DEFAULT_DOMAIN = "api.notbank.exchange";

export class HttpServiceFactory {
  #httpCore: HttpClient;

  constructor(domain?: string) {
    const finalDomain = domain || DEFAULT_DOMAIN;
    this.#httpCore = new HttpClient(finalDomain);
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
    await this.#httpCore.authenticate({
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
    await this.#httpCore.authenticateUser({
      ApiKey: params.ApiPublicKey,
      Signature: signature,
      UserId: params.UserId,
      Nonce: nonce
    });
  }

  newAccountService(): AccountService {
    return new AccountService(this.#httpCore);
  }

  newAuthService(): AuthService {
    return new AuthService(this.#httpCore);
  }

  newFeeService(): FeeService {
    return new FeeService(this.#httpCore);
  }

  newInstrumentService(): InstrumentService {
    return new InstrumentService(this.#httpCore);
  }

  newProductService(): ProductService {
    return new ProductService(this.#httpCore);
  }

  newReportService(): ReportService {
    return new ReportService(this.#httpCore);
  }

  newSystemService(): SystemService {
    return new SystemService(this.#httpCore);
  }

  newTradingService(): TradingService {
    return new TradingService(this.#httpCore);
  }

  newUserService(): UserService {
    return new UserService(this.#httpCore);
  }
}
