import { Endpoint } from "../constants/endpoints.js";
import { RequestType } from "../core/serviceClient.js";
export class WalletService {
    constructor(connection) {
        this.connection = connection;
    }
    /**
     * https://apidoc.notbank.exchange/#getbanks
     */
    getBanks(request) {
        return this.connection.nbRequest(Endpoint.BANKS, RequestType.GET, request, true);
    }
    /**
     * https://apidoc.notbank.exchange/#createbankaccount
     */
    createBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getbankaccount
     */
    getBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId, RequestType.GET);
    }
    /**
     * https://apidoc.notbank.exchange/#getbankaccounts
     */
    getBankAccounts(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS, RequestType.GET, request, true);
    }
    /**
     * https://apidoc.notbank.exchange/#deletebankaccount
     */
    deleteBankAccount(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS + "/" + request.bankAccountId, RequestType.DELETE);
    }
    /**
     * https://apidoc.notbank.exchange/#getnetworkstemplates
     */
    getNetworksTemplates(request) {
        return this.connection.nbRequest(Endpoint.GET_NETWORKS_TEMPLATES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getdepositaddresses
     */
    getDepositAddresses(request) {
        return this.connection.nbRequest(Endpoint.BANK_ACCOUNTS, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createdepositaddress
     */
    createDepositAddress(request) {
        return this.connection.nbRequest(Endpoint.DEPOSIT_ADDRESS, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#getwhitelistedaddresses
     */
    getWhitelistedAddresses(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES, RequestType.GET, request);
    }
    /**
     * https://apidoc.notbank.exchange/#addwhitelistedaddress
     */
    addWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#confirmwhitelistedaddress
     */
    confirmWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId, RequestType.POST, { "code": request.code });
    }
    /**
     * https://apidoc.notbank.exchange/#deletewhitelistedaddress
     */
    deleteWhitelistedAddress(request) {
        return this.connection.nbRequest(Endpoint.WHITELIST_ADDRESSES + "/" + request.whitelistedAddressId, RequestType.DELETE, {
            "account_id": request.account_id,
            "otp": request.otp
        });
    }
    /**
     * https://apidoc.notbank.exchange/#updateonestepwithdraw
     */
    updateOneStepWithdraw(request) {
        return this.connection.nbRequest(Endpoint.UPDATE_ONE_STEP_WITHDRAW, RequestType.POST, request);
    }
    /**
     * https://apidoc.notbank.exchange/#createcryptowithdraw
     */
    createCryptoWithdraw(request) {
        return this.connection.nbRequest(Endpoint.CREATE_CRYPTO_WITHDRAW, RequestType.POST, request);
    }
}
