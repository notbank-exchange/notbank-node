import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { AddWhitelistedAddressRequest } from "../models/request/addWhitelistedAddress";
import { ConfirmFiatWithdrawRequest } from "../models/request/confirmFiatWithdraw";
import { ConfirmWhitelistedAddressRequest } from "../models/request/confirmWhitelistedAddress";
import { CreateBankAccountRequest } from "../models/request/createBankAccount";
import { CreateCryptoWithdrawRequest } from "../models/request/createCryptoWithdraw";
import { CreateDepositAddressesRequest } from "../models/request/CreateDepositAddress";
import { CreateFiatDepositRequest } from "../models/request/createFiatDeposit";
import { CreateFiatWithdrawRequest } from "../models/request/createFiatWithdraw";
import { DeleteBankAccountRequest } from "../models/request/deleteBankAccount";
import { DeleteWhitelistedAddressRequest } from "../models/request/deleteWhitelistedAddress";
import { GetBankAccountRequest } from "../models/request/getBankAccount";
import { GetBankAccountsRequest } from "../models/request/getBankAccounts";
import { GetBankRequest } from "../models/request/getBanks";
import { GetNetworksTemplatesRequest } from "../models/request/getCurrencyNetworkTemplates";
import { GetDepositAddressesRequest } from "../models/request/GetDepositAddresses";
import { GetOwnersFiatWithdrawRequest } from "../models/request/getOwnersFiatWithdraw";
import { GetTransactionsRequest } from "../models/request/getTransactions";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses";
import { TransferFundsRequest } from "../models/request/transferFunds";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw";
import { Banks } from "../models/response/bank";
import { BankAccount, BankAccounts } from "../models/response/bankAccount";
import { CbuOwner } from "../models/response/cbuOwner";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates";
import { Transactions } from "../models/response/transaction";
import { WhiteListedAddress } from "../models/response/whiteListedAddress";

export class WalletService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  #nbPagedRequest<T1, T2>(endpoint: string, requestType: RequestType, message?: T1): Promise<T2> {
    return this.connection.nbRequest(
      endpoint,
      requestType,
      message,
      true
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbanks
   */
  getBanks(request: GetBankRequest): Promise<Banks> {
    return this.#nbPagedRequest(
      Endpoint.BANKS,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createbankaccount
   */
  createBankAccount(request: CreateBankAccountRequest): Promise<BankAccount> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbankaccount
   */
  getBankAccount(request: GetBankAccountRequest): Promise<BankAccount> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.GET,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbankaccounts
   */
  getBankAccounts(request: GetBankAccountsRequest): Promise<BankAccounts> {
    return this.#nbPagedRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#deletebankaccount
   */
  deleteBankAccount(request: DeleteBankAccountRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.DELETE
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getnetworkstemplates
   */
  getNetworksTemplates(request: GetNetworksTemplatesRequest): Promise<CurrencyNetworkTemplates[]> {
    return this.connection.nbRequest(
      Endpoint.GET_NETWORKS_TEMPLATES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getdepositaddresses
   */
  getDepositAddresses(request: GetDepositAddressesRequest): Promise<string[]> {
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createdepositaddress
   */
  createDepositAddress(request: CreateDepositAddressesRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.DEPOSIT_ADDRESS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getwhitelistedaddresses
   */
  getWhitelistedAddresses(request: GetWhitelistedAddressesRequest): Promise<WhiteListedAddress[]> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#addwhitelistedaddress
   */
  addWhitelistedAddress(request: AddWhitelistedAddressRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.POST,
      request
    );
  }
  /**
   * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
   */
  confirmWhitelistedAddress(request: ConfirmWhitelistedAddressRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId,
      RequestType.POST,
      { code: request.code }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#deletewhitelistedaddress
   */
  deleteWhitelistedAddress(request: DeleteWhitelistedAddressRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId,
      RequestType.DELETE,
      {
        account_id: request.account_id,
        otp: request.otp
      }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#updateonestepwithdraw
   */
  updateOneStepWithdraw(request: UpdateOneStepWithdrawRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.UPDATE_ONE_STEP_WITHDRAW,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createcryptowithdraw
   */
  createCryptoWithdraw(request: CreateCryptoWithdrawRequest): Promise<string> {
    return this.connection.nbRequest(
      Endpoint.CREATE_CRYPTO_WITHDRAW,
      RequestType.POST,
      request
    );
  }


  /**
   * https://apidoc.notbank.exchange/#createfiatdeposit
   */
  async createFiatDeposit(request: CreateFiatDepositRequest): Promise<string | undefined> {
    return await (this.connection.nbRequest(
      Endpoint.FIAT_DEPOSIT,
      RequestType.POST,
      request
    ) as { url?: string })?.url;
  }

  /**
   * https://apidoc.notbank.exchange/#getownersfiatwithdraw
   */
  getOwnersFiatWithdraw(request: GetOwnersFiatWithdrawRequest): Promise<CbuOwner[]> {
    return this.connection.nbRequest(
      Endpoint.GET_OWNERS_FIAT_WITHDRAW,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getownersfiatwithdraw
   */
  async createFiatWithdraw(request: CreateFiatWithdrawRequest): Promise<string | undefined> {
    return await (this.connection.nbRequest(
      Endpoint.FIAT_WITHDRAW,
      RequestType.POST,
      request
    ) as { withdrawal_id?: string })?.withdrawal_id;
  }

  /**
 * https://apidoc.notbank.exchange/#confirmfiatwithdraw
 */
  confirmFiatWithdraw(request: ConfirmFiatWithdrawRequest): Promise<void> {
    return this.connection.nbRequest(
      Endpoint.FIAT_WITHDRAW + "/" + request.withdrawal_id,
      RequestType.POST,
      { attempt_code: request.attempt_code }
    );
  }

  /**
   * https://apidoc.notbank.exchange/#transferfunds
   */
  transferFunds(request: TransferFundsRequest): Promise<string | null> {
    return this.connection.nbRequest(
      Endpoint.TRANSFER_FUNDS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#gettransactions
   */
  getTransactions(request: GetTransactionsRequest): Promise<Transactions> {
    return this.#nbPagedRequest(
      Endpoint.TRANSFER_FUNDS,
      RequestType.POST,
      request
    );
  }
}
