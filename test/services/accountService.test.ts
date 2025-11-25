import assert from "assert";
import "mocha";

import { GetAccountTransactionsRequest } from "../../lib/models/request/getAccountTransactions";
import { NotbankClient } from "../../lib/services/notbankClient";

describe("account service", () => {
  const client = NotbankClient.Factory.createRestClient("stgapi.notbank.exchange");
  
  
  
  before(async () => {
    await client.authenticateUser({
      ApiPublicKey: "aada11a919d9102f61fc1ca5a97ea578",
      ApiSecretKey: "f2647a3c19fd8431be971d1d7b2101f9",
      UserId: "9",
    });
  });

  const accountService = client.getAccountService();

  describe("getAccountTransactions", () => {
    it("should return transactions with valid AccountId", async () => {
      const params: GetAccountTransactionsRequest = {
        AccountId: 99,
      };
      const response = await accountService.getAccountTransactions(params);
      console.log("Transactions:", response);

      assert.ok(Array.isArray(response), "Response should be an array");
    });
  });

  describe("get account positions", () => {
    it("fetches positions successfully (IncludePending = true)", async function () {
      const response = await accountService.getAccountPositions({
        AccountId: 13,
        IncludePending: true,
      });
      assert.ok(Array.isArray(response), "Positions should be an array");
      if (response.length > 0) {
        assert.ok(
          response[0].ProductId != null,
          "Each position should have a ProductId",
        );
      }
    });
    it("fails or returns error for invalid AccountId (e.g. -1)", async function () {
      try {
        const response = await accountService.getAccountPositions({
          AccountId: -1,
          IncludePending: false,
        });
        assert.fail(
          "The call should have thrown an error for invalid AccountId",
        );
      } catch (error) {
        console.log("Expected error for invalid AccountId:", error.message);
        assert.ok(error, "Should throw an error for invalid AccountId");
      }
    });
  });

  describe("getAccountInstrumentStatistics", () => {
    it("should return instrument stats with valid AccountId", async () => {
      const response = await accountService.getAccountInstrumentStatistics({
        AccountId: 99,
      });

      console.log("Instrument stats:", response);
      assert.ok(Array.isArray(response), "Response should be an array");
    });

    it("should throw if AccountId is missing", async () => {
      try {
        await accountService.getAccountInstrumentStatistics({} as any);
        assert.fail("Should throw an error for missing AccountId");
      } catch (error: any) {
        assert.match(error.message, /AccountId is required field/);
      }
    });
  });

  describe("getAccountInfo", () => {
    it("should return account info for valid AccountId", async () => {
      const response = await accountService.getAccountInfo({
        AccountId: 99,
      });

      console.log("Account info:", response);
      assert.ok(response, "Response should not be null");
      assert.strictEqual(typeof response.AccountId, "number");
    });
  });

});
