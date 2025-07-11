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
});
