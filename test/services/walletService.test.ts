import assert from "assert";
import "mocha";

import { NotbankClient } from "../../lib/services/notbankClient";

describe("wallet service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");


  before(async () => {
    await client.authenticateUser({
      ApiPublicKey: "aada11a919d9102f61fc1ca5a97ea578",
      ApiSecretKey: "f2647a3c19fd8431be971d1d7b2101f9",
      UserId: "9",
    });
  });

  const service = client.getWalletService();

  describe("getBanks", () => {
    it("should work", async () => {
      const response = await service.getBanks({ country: "CL" });
      assert.ok(Array.isArray(response.data), "Response should be an array");
    });
  });

  describe("createBankAccount", () => {
    it("should work", async () => {
      const account = await service.createBankAccount({
        country: "CL",
        bank: "123",
        number: "111",
        kind: "kind"
      });
      assert.ok(account)
    });
  });

  describe("getBankAccount", () => {
    it("should work", async () => {
      const account = await service.getBankAccount({ bankAccountId: "ef90e5be-f376-445e-adee-257591183b98" });
      assert.ok(account)
    });
  });

  describe("getNetworksTemplates", () => {
    it("should work", async () => {
      const networks = await service.getNetworksTemplates({ currency: "USDT" });
      assert.ok(networks)
    });
  });


  describe("getDepositAddresses", () => {
    it("should work", async () => {
      const networks = await service.getDepositAddresses({
        account_id: 235,
        currency: "USDT",
        network: "USDT_BSC_TEST"
      });
      assert.ok(networks)
    });
  });


  describe("createDepositAddress", () => {
    it("should work", async () => {
      const alreadyExistingDeposit = await service.createDepositAddress({
        account_id: 235,
        currency: "USDT",
        network: "USDT_BSC_TEST"
      });
      assert.ok(alreadyExistingDeposit)
      assert.equal(alreadyExistingDeposit, "0xD9aF4Be918e2AE1302f37C11939bE3b41A88F23c")
    });
  });


  describe("getWhitelistedAddresses", () => {
    it("should work", async () => {
      const response = await service.getWhitelistedAddresses({
        account_id: 235,
      });
      assert.ok(response);
    });
  });

  describe("addWhitelistedAddress", () => {
    it("should work", async () => {
      const response = await service.addWhitelistedAddress({
        account_id: 235,
        currency: "USDT",
        network: "USDT_BSC_TEST",
        address: "0xD9aF4Be918e2AE1302f37C11939bE3b41A88F23c",
        label: "labeling label",
        otp: "121342"
      });
      assert.ok(response);
    });
  });

  describe("deleteWhitelistedAddress", () => {
    it("should work", async () => {
      const response = await service.deleteWhitelistedAddress({
        account_id: 235,
        whitelistedAddressId: "",
        otp: ""
      });
      assert.ok(response);
    });
  });


  describe("updateOneStepWithdraw", () => {
    it("should work", async () => {
      const response = await service.updateOneStepWithdraw({
        action: "",
        otp: "",
      });
      assert.ok(response);
    });
  });

  describe("createCryptoWithdraw", () => {
    it("should work", async () => {
      const response = await service.createCryptoWithdraw({
        account_id: 235,
        currency: "",
        network: "",
        address: "",
        amount: "",
        otp: "",
      });
      assert.ok(response);
    });
  });

  describe("createFiatDeposit", () => {
    it("should work", async () => {
      const response = await service.createFiatDeposit({
        account_id: 235,
        payment_method: 1,
        currency: "",
        amount: 12,
        bank_account_id: "",
        voucher: ""
      });
      assert.ok(response);
    });
  });

  describe("getOwnersFiatWithdraw", () => {
    it("should work", async () => {
      const response = await service.getOwnersFiatWithdraw({
        cbu: ""
      });
      assert.ok(response);
    });
  });

  describe("createFiatWithdraw", () => {
    it("should work", async () => {
      const response = await service.createFiatWithdraw({
        account_id: 123,
        payment_method: 1,
        currency: "CLP",
        amount: "12.2",
        bank_account_id: "",
        cbu: "",
        person_type: "",
        cuit: "",
        name: "",
      });
      assert.ok(response);
    });
  });


  describe("createFiatWithdraw", () => {
    it("should work", async () => {
      const response = await service.createFiatWithdraw({
        account_id: 123,
        payment_method: 1,
        currency: "CLP",
        amount: "12.2",
        bank_account_id: "",
        cbu: "",
        person_type: "",
        cuit: "",
        name: "",
      });
      assert.ok(response);
    });
  });



  describe("confirmFiatWithdraw", () => {
    it("should work", async () => {
      const response = await service.confirmFiatWithdraw({
        withdrawal_id: "",
        attempt_code: "",
      });
      assert.ok(response);
    });
  });



  describe("transferFunds", () => {
    it("should work", async () => {
      const response = await service.transferFunds({
        sender_account_id: 12,
        receiver_account_id: 12,
        currency_name: "CLP",
        amount: "12",
      });
      assert.ok(response);
    });
  });


  describe("getTransactions", () => {
    it("should work", async () => {
      const response = await service.getTransactions({
        page: 2
      });
      assert.ok(response);
    });
  });
});
