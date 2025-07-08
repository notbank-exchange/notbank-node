import { Endpoint } from "../constants/endpoints";
import { RequestType, ServiceClient } from "../core/serviceClient";
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
import { GetDepositAddressesRequest } from "../models/request/GetDepositAddress";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw";
import { Banks } from "../models/response/bank";
import { BankAccount, BankAccounts } from "../models/response/bankAccount";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates";
import { WhiteListedAddress } from "../models/response/whiteListedAddress";

export class WalletService {
  #serviceCore: ServiceClient;

  constructor(serviceCore: ServiceClient) {
    this.#serviceCore = serviceCore;
  }

  /**
   * https://apidoc.notbank.exchange/#getbanks
   */
  async getBanks(request: GetBankRequest): Promise<Banks> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANKS,
      RequestType.GET,
      request,
      true
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createbankaccount
   */
  async createBankAccount(request: CreateBankAccountRequest): Promise<BankAccount> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbankaccount
   */
  async getBankAccount(request: GetBankAccountRequest): Promise<BankAccount> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.GET,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getbankaccounts
   */
  async getBankAccounts(request: GetBankAccountsRequest): Promise<BankAccounts> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request,
      true
    );
  }


  /**
   * https://apidoc.notbank.exchange/#deletebankaccount
   */
  async deleteBankAccount(request: DeleteBankAccountRequest): Promise<void> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId,
      RequestType.DELETE
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getnetworkstemplates
   */
  async getNetworksTemplates(request: GetNetworksTemplatesRequest): Promise<CurrencyNetworkTemplates[]> {
    return await this.#serviceCore.nbRequest(
      Endpoint.GET_NETWORKS_TEMPLATES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#getdepositaddresses
   */
  async getDepositAddresses(request: GetDepositAddressesRequest): Promise<string[]> {
    return await this.#serviceCore.nbRequest(
      Endpoint.BANK_ACCOUNTS,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createdepositaddress
   */
  async createDepositAddress(request: CreateDepositAddressesRequest): Promise<string> {
    var addressList = await this.#serviceCore.nbRequest<CreateDepositAddressesRequest, string[]>(
      Endpoint.CREATE_DEPOSIT_ADDRESS,
      RequestType.POST,
      request
    );
    if (addressList.length < 1) {
      throw new NotbankError("no deposit address in the response", 0, "")
    }
    return addressList[0];
  }

  /**
   * https://apidoc.notbank.exchange/#getwhitelistedaddresses
   */
  async getWhitelistedAddresses(request: GetWhitelistedAddressesRequest): Promise<WhiteListedAddress[]> {
    return await this.#serviceCore.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.GET,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#addwhitelistedaddress
   */
  async addWhitelistedAddress(request: AddWhitelistedAddressRequest): Promise<string> {
    return await this.#serviceCore.nbRequest(
      Endpoint.WHITELIST_ADDRESSES,
      RequestType.POST,
      request
    );
  }
  /**
   * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
   */
  async confirmWhitelistedAddress(request: ConfirmWhitelistedAddressRequest): Promise<void> {
    return await this.#serviceCore.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId,
      RequestType.POST,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#deletewhitelistedaddress
   */
  async deleteWhitelistedAddress(request: DeleteWhitelistedAddressRequest): Promise<void> {
    return await this.#serviceCore.nbRequest(
      Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId,
      RequestType.DELETE,
    );
  }

  /**
   * https://apidoc.notbank.exchange/#updateonestepwithdraw
   */
  async updateOneStepWithdraw(request: UpdateOneStepWithdrawRequest): Promise<void> {
    return await this.#serviceCore.nbRequest(
      Endpoint.UPDATE_ONE_STEP_WITHDRAW,
      RequestType.POST,
      request
    );
  }

  /**
   * https://apidoc.notbank.exchange/#createcryptowithdraw
   */
  async createCryptoWithdraw(request: CreateCryptoWithdrawRequest): Promise<string> {
    return await this.#serviceCore.nbRequest(
      Endpoint.CREATE_CRYPTO_WITHDRAW,
      RequestType.POST,
      request
    );
  }
}
