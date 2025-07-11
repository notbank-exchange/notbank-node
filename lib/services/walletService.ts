import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceConnection } from "../core/serviceClient";
import { NotbankError } from "../models";
import { AddWhitelistedAddressRequest } from "../models/request/addWhitelistedAddress";
import { ConfirmWhitelistedAddressRequest } from "../models/request/confirmWhitelistedAddress";
import { CreateBankAccountRequest } from "../models/request/createBankAccount";
import { CreateCryptoWithdrawRequest } from "../models/request/createCryptoWithdraw";
import { CreateDepositAddressesRequest } from "../models/request/CreateDepositAddress";
import { DeleteBankAccountRequest } from "../models/request/deleteBankAccount";
import { DeleteWhitelistedAddressRequest } from "../models/request/deleteWhitelistedAddress";
import { GetBankAccountRequest } from "../models/request/getBankAccount";
import { GetBankAccountsRequest } from "../models/request/getBankAccounts";
import { GetBankRequest } from "../models/request/getBanks";
import { GetNetworksTemplatesRequest } from "../models/request/getCurrencyNetworkTemplates";
import { GetDepositAddressesRequest } from "../models/request/GetDepositAddresses";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw";
import { Banks } from "../models/response/bank";
import { BankAccount, BankAccounts } from "../models/response/bankAccount";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates";
import { WhiteListedAddress } from "../models/response/whiteListedAddress";

export class WalletService {
  connection: ServiceConnection;

  constructor(connection: ServiceConnection) {
    this.connection = connection;
  }

  /**
   * https://apidoc.notbank.exchange/#getbanks
   */
  getBanks(request: GetBankRequest): Promise<Banks> {
    return this.connection.nbRequest(
      Endpoint.BANKS,
      RequestType.GET,
      request,
      true
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
    return this.connection.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request,
      true
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
  async createDepositAddress(request: CreateDepositAddressesRequest): Promise<string> {
    var addressList = await this.connection.nbRequest<CreateDepositAddressesRequest, string[]>(
      Endpoint.DEPOSIT_ADDRESS,
      RequestType.POST,
      request
    );
    if (addressList.length < 1) {
      throw new NotbankError("NotbankError. no deposit address in the response", -1)
    }
    return addressList[0];
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
      { "code": request.code }
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
        "account_id": request.account_id,
        "otp": request.otp
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
}
