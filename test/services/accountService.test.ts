import assert from "assert";
import "mocha";

import { HttpServiceFactory } from "../../lib/services/httpServiceFactory";
import { GetAccountTransactionsRequest } from "../../lib/models/request/getAccountTransactions";

describe("http account service", () => {
  const serviceFactory = new HttpServiceFactory("stgapi.notbank.exchange");


  before(async () => {
    // Autenticación previa a todas las pruebas en este bloque, http only
    await serviceFactory.authenticate({
      ApiPublicKey: "ca1817fd1f2ec412ef3ab8086d5da0d3",
      ApiSecretKey: "da365b63efebc9deda12ce854dc4846abb71d772e644b3812116dd016e9070e2",
      UserId: "64",
    });
  });

  const accountService = serviceFactory.newAccountService();

    describe("getAccountTransactions", () => {
    it("should return transactions with valid AccountId", async () => {
      const params: GetAccountTransactionsRequest = {
        AccountId: 99,
      };

      const response = await accountService.getAccountTransactions(params);
      console.log("Transactions:", response);

      assert.ok(Array.isArray(response), "Response should be an array");
    });

    it("should throw error if AccountId is not a number", async () => {
      try {
        await accountService.getAccountTransactions({ AccountId: "invalid" as any });
        assert.fail("Should have thrown a validation error");
      } catch (error: any) {
        assert.match(error.message, /AccountId must be a number/);
      }
    });
  });

  describe("get account positions", () => {
    it("fetches positions successfully (IncludePending = true)", async function () {
      // TODO: falla por authorizacion a veces
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

    it("fails or returns error when AccountId is not provided", async function () {
      try {
        // @ts-expect-error – Forzamos omitir AccountId
        const response = await accountService.getAccountPositions({
        });
        assert.fail(
          "The call should have thrown an error due to missing AccountId",
        );
      } catch (error) {
        console.log("Expected error for missing AccountId:", error.message);
        assert.ok(error, "Should throw an error for missing AccountId");
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

  describe("getAccountSettlementPositions", () => {
    it("should return settlement positions for valid AccountId", async () => {
      const response = await accountService.getAccountSettlementPositions({
        AccountId: 99,
      });

      console.log("Settlement positions:", response);
      assert.ok(response, "Response should not be null");
    });

    it("should throw if AccountId is missing", async () => {
      try {
        await accountService.getAccountSettlementPositions({} as any);
        assert.fail("Should throw an error for missing AccountId");
      } catch (error: any) {
        assert.match(error.message, /required fields/);
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
