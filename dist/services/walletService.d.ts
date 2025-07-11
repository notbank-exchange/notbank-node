import { ServiceConnection } from "../core/serviceClient.js";
import { AddWhitelistedAddressRequest } from "../models/request/addWhitelistedAddress.js";
import { ConfirmWhitelistedAddressRequest } from "../models/request/confirmWhitelistedAddress.js";
import { CreateBankAccountRequest } from "../models/request/createBankAccount.js";
import { CreateCryptoWithdrawRequest } from "../models/request/createCryptoWithdraw.js";
import { CreateDepositAddressesRequest } from "../models/request/CreateDepositAddress.js";
import { DeleteBankAccountRequest } from "../models/request/deleteBankAccount.js";
import { DeleteWhitelistedAddressRequest } from "../models/request/deleteWhitelistedAddress.js";
import { GetBankAccountRequest } from "../models/request/getBankAccount.js";
import { GetBankAccountsRequest } from "../models/request/getBankAccounts.js";
import { GetBankRequest } from "../models/request/getBanks.js";
import { GetNetworksTemplatesRequest } from "../models/request/getCurrencyNetworkTemplates.js";
import { GetDepositAddressesRequest } from "../models/request/GetDepositAddresses.js";
import { GetWhitelistedAddressesRequest } from "../models/request/getWhitelistedAddresses.js";
import { UpdateOneStepWithdrawRequest } from "../models/request/updateOneStepWithdraw.js";
import { Banks } from "../models/response/bank.js";
import { BankAccount, BankAccounts } from "../models/response/bankAccount.js";
import { CurrencyNetworkTemplates } from "../models/response/networkTemplates.js";
import { WhiteListedAddress } from "../models/response/whiteListedAddress.js";
export declare class WalletService {
    connection: ServiceConnection;
    constructor(connection: ServiceConnection);
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request: GetBankRequest): Promise<Banks>;
    /**
     * https://apidoc.notbank.exchange/#createbankaccount
     */
    createBankAccount(request: CreateBankAccountRequest): Promise<BankAccount>;
    /**
     * https://apidoc.notbank.exchange/#getbankaccount
     */
    getBankAccount(request: GetBankAccountRequest): Promise<BankAccount>;
    /**
     * https://apidoc.notbank.exchange/#getbankaccounts
     */
    getBankAccounts(request: GetBankAccountsRequest): Promise<BankAccounts>;
    /**
     * https://apidoc.notbank.exchange/#deletebankaccount
     */
    deleteBankAccount(request: DeleteBankAccountRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request: GetNetworksTemplatesRequest): Promise<CurrencyNetworkTemplates[]>;
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request: GetDepositAddressesRequest): Promise<string[]>;
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request: CreateDepositAddressesRequest): Promise<string>;
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request: GetWhitelistedAddressesRequest): Promise<WhiteListedAddress[]>;
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request: AddWhitelistedAddressRequest): Promise<string>;
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request: ConfirmWhitelistedAddressRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request: DeleteWhitelistedAddressRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request: UpdateOneStepWithdrawRequest): Promise<void>;
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request: CreateCryptoWithdrawRequest): Promise<string>;
}
